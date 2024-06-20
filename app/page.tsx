import { Client } from "./_client";

export const runtime = "edge";

export default function Page() {
  const x = Math.random();
  return (
    <Client
      action={async () => {
        "use server";
        console.log("action!", x);
      }}
    />
  );
}
