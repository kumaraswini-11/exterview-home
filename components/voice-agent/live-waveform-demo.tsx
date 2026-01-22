"use client";

import { Mic, MicOff, Trash2, Volume2 } from "lucide-react";
import { useEffect, useRef } from "react";

import { ThemeSwitcher } from "@/components/theme-switcher";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { LiveWaveform } from "@/components/voice-agent/live-waveform";
import { cn } from "@/lib/utils";

import { useSpeechRecognition } from "./use-speech-recognition";

/**
 * Note: The Web Speech API (which useSpeechRecognition uses) is designed for human speech, not music.
 *
 * 1. Model Limitations: Most browser-based speech engines are optimized for clear, spoken commands at a normal pace. Singing involves different pitches and stretched vowels, which the standard browser model is not trained to recognize.
 *
 * 2. Background Noise (Music): The API is very sensitive to background noise. In a song, drums, bass, and other instruments act as "noise" that can drown out the vocals. As a result, the AI model often returns nothing or produces gibberish.
 */
export function LiveWaveformDemo() {
  const { isActive, transcript, toggleListening, clearTranscript } =
    useSpeechRecognition();

  // Ref for auto-scrolling
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      const scrollContainer = scrollRef.current.querySelector(
        "[data-radix-scroll-area-viewport]",
      );
      if (scrollContainer) {
        scrollContainer.scrollTop = scrollContainer.scrollHeight;
      }
    }
  }, [transcript]);

  return (
    <Card className="w-full max-w-lg border-zinc-200 shadow-xl dark:border-zinc-800">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <CardTitle className="flex items-center gap-2 text-2xl font-bold">
              <Volume2 className="size-6 text-blue-500" />
              Voice Assistant
              <ThemeSwitcher />
            </CardTitle>
            <CardDescription>
              AI-powered real-time transcription
            </CardDescription>
          </div>
          <Badge
            variant={isActive ? "default" : "secondary"}
            className={cn(
              "transition-all",
              isActive ? "animate-pulse bg-blue-600" : "",
            )}
          >
            {isActive ? "Listening..." : "Idle"}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="grid gap-6">
        {/* Waveform Visualization */}
        <div className="relative flex h-auto items-center justify-center rounded-2xl border border-dashed border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950">
          <LiveWaveform
            active={isActive}
            className="size-auto"
            spokeColor={isActive ? "#3b82f6" : "#cbd5e1"}
            sensitivity={1.2}
          />
        </div>

        {/* Transcript Box */}
        {/* <div className="space-y-2">
          <div className="flex items-center justify-between px-1">
            <label className="text-muted-foreground text-[10px] font-bold tracking-widest uppercase">
              Live Transcript
            </label>
            <Button
              variant="ghost"
              size="sm"
              onClick={clearTranscript}
              className="h-6 text-[10px] hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-950"
              disabled={!transcript}
            >
              <Trash2 className="mr-1 size-3" /> RESET
            </Button>
          </div>

          <ScrollArea
            ref={scrollRef}
            className="h-40 w-full rounded-xl border bg-zinc-50/50 p-4 dark:bg-zinc-900/50"
          >
            <div className="p-1 text-sm leading-relaxed whitespace-pre-wrap">
              {transcript || (
                <span className="text-zinc-400 italic">
                  Speak now to see transcription...
                </span>
              )}
            </div>
          </ScrollArea>
        </div> */}

        {/* Action Button */}
        <Button
          variant={isActive ? "destructive" : "default"}
          size="lg"
          className="h-12 w-full text-base font-semibold shadow-md transition-all hover:shadow-lg active:scale-[0.98]"
          onClick={toggleListening}
        >
          {isActive ? (
            <>
              <MicOff className="mr-2 size-5" /> Stop Session
            </>
          ) : (
            <>
              <Mic className="mr-2 size-5" /> Start Listening
            </>
          )}
        </Button>
      </CardContent>
    </Card>
  );
}
