"use client";
import { useEffect } from "react";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.info();
  }, [error]);
  return (
    <div>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
