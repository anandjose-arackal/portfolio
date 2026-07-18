"use client";

import { useEffect, useState } from "react";

/** Live HH:MM:SS clock for a given IANA timezone; null until mounted. */
export function useLocalTime(timeZone: string) {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const format = () =>
      new Intl.DateTimeFormat("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
        timeZone,
      }).format(new Date());

    setTime(format());
    const id = setInterval(() => setTime(format()), 1000);
    return () => clearInterval(id);
  }, [timeZone]);

  return time;
}
