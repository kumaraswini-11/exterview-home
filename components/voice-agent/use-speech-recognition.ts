/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect, useRef, useCallback } from "react";

interface UseSpeechRecognitionOptions {
  lang?: string;
  continuous?: boolean;
  interimResults?: boolean;
}

// Custom React hook for speech recognition
export function useSpeechRecognition({
  lang = "en-US", // Default recognition language
  continuous = true, // Default to continuous listening
  interimResults = true, // Default to showing interim results
}: UseSpeechRecognitionOptions = {}) {
  const [isActive, setIsActive] = useState(false); // Tracks whether listening is active
  const [transcript, setTranscript] = useState(""); // Stores finalized transcript

  const recognitionRef = useRef<any>(null); // Holds SpeechRecognition instance
  const isStartedRef = useRef(false); // Tracks actual browser recognition state

  // Clears final transcript
  const clearTranscript = useCallback(() => setTranscript(""), []);

  // Toggles listening state on/off
  const toggleListening = useCallback(() => setIsActive((prev) => !prev), []);

  // Initialize and configure SpeechRecognition instance
  useEffect(() => {
    const SpeechRecognition =
      (window as any).SpeechRecognition ||
      (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) return;

    const recognition = new SpeechRecognition();
    recognition.continuous = continuous;
    recognition.interimResults = interimResults;
    recognition.lang = lang;

    recognition.onstart = () => {
      isStartedRef.current = true;
    };
    // Fired when speech recognition results are available
    recognition.onresult = (event: any) => {
      let finalText = "";
      // Iterate full results to prevent UI skipping sentences
      for (let i = 0; i < event.results.length; i++) {
        finalText += event.results[i][0].transcript + " ";
      }
      setTranscript(finalText.trim());
    };

    // Fired on recognition error
    recognition.onerror = (event: any) => {
      console.error("Speech Error:", event.error);
      if (event.error === "not-allowed") setIsActive(false); // Disable if mic permission denied
    };

    // Fired when recognition stops
    recognition.onend = () => {
      isStartedRef.current = false;
      // Use the ref to check the current desired state
      if (isActive && recognitionRef.current) {
        try {
          recognitionRef.current.start();
        } catch (e) {
          // Ignore "already started" errors
          console.log(e);
        }
      }
    };

    recognitionRef.current = recognition;

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
        recognitionRef.current = null;
      }
    };
  }, [lang, continuous, interimResults, isActive]);

  // Start or stop recognition based on isActive state
  useEffect(() => {
    if (!recognitionRef.current) return;

    if (isActive && !isStartedRef.current) {
      recognitionRef.current.start();
    } else if (!isActive && isStartedRef.current) {
      recognitionRef.current.stop();
    }
  }, [isActive]);

  return { isActive, transcript, toggleListening, clearTranscript };
}
