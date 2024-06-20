"use client";

export function Client({ action }: { action: () => Promise<void> }) {
  return (
    <form action={action}>
      <button type="submit">Submit</button>
    </form>
  );
}
