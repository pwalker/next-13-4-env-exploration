"use client";

import { useRouter } from "next/navigation";
import React from "react";

export const Reloader = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  React.useEffect(
    function () {
      const interval = setInterval(function () {
        router.refresh();
      }, 5000);

      return function () {
        clearTimeout(interval);
      };
    },
    [router]
  );

  return <>{children}</>;
};
