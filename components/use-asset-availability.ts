"use client";

import { useEffect, useState } from "react";

export function useAssetAvailability(path: string) {
  const [available, setAvailable] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const checkAvailability = async () => {
      try {
        const response = await fetch(path, {
          method: "GET",
          cache: "no-store",
        });

        if (isMounted) {
          setAvailable(response.ok);
        }
      } catch {
        if (isMounted) {
          setAvailable(false);
        }
      }
    };

    checkAvailability();

    return () => {
      isMounted = false;
    };
  }, [path]);

  return available;
}
