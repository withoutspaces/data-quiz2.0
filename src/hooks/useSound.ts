import { useRef, useEffect } from "react";

export function useSound(src: string, volume: number = 1) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio(src);
    audioRef.current.volume = volume;
    audioRef.current.preload = "auto";
  }, [src, volume]);

  const playSound = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch((error) => {
        console.error("Erro ao reproduzir o som: ", error);
      });
    }
  };

  const stopSound = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  return { playSound, stopSound };
}
