import { twMerge } from "tailwind-merge";

export default function HorizontalBar({ className }: { className?: string }) {
  return (
    <div
      className={twMerge(
        "h-px w-full bg-white/40 rounded-full",
        className
      )}
    />
  );
}
