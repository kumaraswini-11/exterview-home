"use client";

import { useEffect, useRef, type HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

// Extend Window interface to include webkit-prefixed AudioContext
declare global {
  interface Window {
    webkitAudioContext: typeof AudioContext;
  }
}

export interface LiveWaveformProps extends HTMLAttributes<HTMLDivElement> {
  active?: boolean;
  spokeCount?: number;
  maxRadius?: number;
  spokeWidth?: number;
  spokeColor?: string;
  sensitivity?: number;
}

interface AudioSystemRefs {
  context: AudioContext | null;
  analyser: AnalyserNode | null;
  animationId: number | null;
  stream: MediaStream | null;
}

export function LiveWaveform({
  active = false,
  spokeCount = 64,
  maxRadius = 90,
  spokeWidth = 3,
  spokeColor = "#3b82f6",
  sensitivity = 2.5,
  className,
  ...props
}: LiveWaveformProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const audioRefs = useRef<AudioSystemRefs>({
    context: null,
    analyser: null,
    animationId: null,
    stream: null,
  });

  // Tracks smoothed volume to prevent "jumpy" movement
  const currentVolumeRef = useRef<number>(0);

  useEffect(() => {
    // 1. Definition of the drawing/logic loop (inside useEffect to avoid hoisting issues)
    const runAnimation = () => {
      const { analyser } = audioRefs.current;
      const canvas = canvasRef.current;
      if (!canvas || !analyser) return;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const dataArray = new Uint8Array(analyser.frequencyBinCount);

      const render = () => {
        analyser.getByteFrequencyData(dataArray);

        // --- VOICE EQUALIZATION LOGIC ---
        // Focus on 20Hz - 4000Hz (Human speech range)
        // Ignoring very low rumble and high-pitched static/noise
        let voiceSum = 0;
        const startBin = 2;
        const endBin = 40;
        for (let i = startBin; i < endBin; i++) {
          voiceSum += dataArray[i];
        }
        const average = voiceSum / (endBin - startBin);

        // NOISE GATE: Ignore background hum
        const threshold = 12;
        const targetVolume =
          average > threshold ? (average / 255) * sensitivity : 0;

        // INTERPOLATION: The secret to smooth, organic movement
        // 0.15 creates a "gliding" effect rather than a "teleporting" effect
        currentVolumeRef.current +=
          (targetVolume - currentVolumeRef.current) * 0.15;

        // --- CANVAS DRAWING ---
        const dpr = window.devicePixelRatio || 1;
        const w = canvas.clientWidth;
        const h = canvas.clientHeight;

        if (canvas.width !== w * dpr) {
          canvas.width = w * dpr;
          canvas.height = h * dpr;
          ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        }

        ctx.clearRect(0, 0, w, h);
        const cx = w / 2;
        const cy = h / 2;
        const baseRadius = maxRadius * 0.4;

        for (let i = 0; i < spokeCount; i++) {
          const angle = (i / spokeCount) * Math.PI * 2;

          // Subtle idle pulse so it feels "alive" even when quiet
          const idle = active ? Math.sin(Date.now() * 0.002 + i) * 0.01 : 0;
          const strength = Math.min(currentVolumeRef.current + idle, 1.2);

          const inner = baseRadius;
          const outer = inner + (maxRadius - inner) * strength;

          ctx.beginPath();
          ctx.strokeStyle = spokeColor;
          ctx.lineWidth = spokeWidth;
          ctx.lineCap = "round";

          // Reactivity: Fade opacity based on volume
          ctx.globalAlpha = active ? 0.3 + currentVolumeRef.current * 0.7 : 0.1;

          ctx.moveTo(
            cx + Math.cos(angle) * inner,
            cy + Math.sin(angle) * inner,
          );
          ctx.lineTo(
            cx + Math.cos(angle) * outer,
            cy + Math.sin(angle) * outer,
          );
          ctx.stroke();
        }

        audioRefs.current.animationId = requestAnimationFrame(render);
      };

      render();
    };

    // 2. Setup Audio System
    if (active) {
      navigator.mediaDevices
        .getUserMedia({ audio: true })
        .then((stream) => {
          const context = new (
            window.AudioContext || window.webkitAudioContext
          )();
          const source = context.createMediaStreamSource(stream);
          const analyser = context.createAnalyser();

          analyser.fftSize = 256;
          analyser.smoothingTimeConstant = 0.4;
          source.connect(analyser);

          audioRefs.current = { context, analyser, stream, animationId: null };
          runAnimation();
        })
        .catch((err) => console.error("Mic Access Denied:", err));
    }

    // 3. Cleanup logic
    return () => {
      if (audioRefs.current.animationId)
        cancelAnimationFrame(audioRefs.current.animationId);
      if (audioRefs.current.stream) {
        audioRefs.current.stream.getTracks().forEach((track) => track.stop());
      }
      if (
        audioRefs.current.context &&
        audioRefs.current.context.state !== "closed"
      ) {
        audioRefs.current.context.close();
      }
    };
  }, [active, spokeCount, maxRadius, spokeWidth, spokeColor, sensitivity]);

  return (
    <div
      className={cn(
        "relative flex aspect-auto items-center justify-center",
        className,
      )}
      {...props}
    >
      <canvas ref={canvasRef} className="size-full" />
    </div>
  );
}
