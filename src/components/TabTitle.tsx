"use client";

import { useEffect } from "react";

export default function TabTitle() {
  useEffect(() => {
    let previousTitle = document.title;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        previousTitle = document.title;
        document.title = "📩 On finit de discuter ?";
      } else {
        document.title = previousTitle;
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return null;
}
