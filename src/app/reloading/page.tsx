import React from "react";
import { Data } from "./Data";
import { Reloader } from "./Reloader";

export default async function QueryPage() {
  return (
    <Reloader>
      {/* @ts-expect-error Async Server Component */}
      <Data />
    </Reloader>
  );
}
