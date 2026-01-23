import { useRef, useState } from "react";

export function useFocusSound() {
  const audio_ref = useRef(null);
  const [is_playing, set_is_playing] = useState(false);

  const toggle_sound = async () => {
    console.log("toggle sound clicked");

    // 🔒 Create audio ON FIRST USER CLICK (browser-safe)
    if (!audio_ref.current) {
      console.log("creating audio instance");

      const audio = new Audio("/sounds/relaxing.mp3"); // 🔴 MAKE SURE THIS FILE EXISTS
      audio.loop = true;
      audio.volume = 0.5;

      audio_ref.current = audio;
    }

    try {
      if (is_playing) {
        console.log("pausing audio");
        audio_ref.current.pause();
      } else {
        console.log("playing audio");
        await audio_ref.current.play();
      }

      set_is_playing(!is_playing);
    } catch (err) {
      console.error("audio error:", err);
    }
  };

  return {
    is_playing,
    toggle_sound,
  };
}
