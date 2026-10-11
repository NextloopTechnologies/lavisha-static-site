// Small inline stroke icons — no icon library, nothing shipped to the client.
const paths = {
  shield: "M12 3l7 3v6c0 4.5-3 7.7-7 9-4-1.3-7-4.5-7-9V6l7-3z M9 12l2 2 4-4",
  file: "M14 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V8l-5-5z M14 3v5h5 M9 13h6 M9 17h4",
  message: "M21 12a8 8 0 01-11.6 7.1L4 20l1-4.6A8 8 0 1121 12z M8.5 11h7 M8.5 14h4",
  trend: "M4 17l5-5 4 4 7-7 M15 9h5v5",
  door: "M4 21h16 M7 21V4h10v17 M13.5 12.5h.01",
  check: "M5 12.5l4.5 4.5L19 7.5",
  chart: "M4 20V10 M10 20V4 M16 20v-7 M22 20H2",
  bell: "M6 16V11a6 6 0 1112 0v5l2 2H4l2-2z M10 20a2 2 0 004 0",
  clock: "M12 21a9 9 0 100-18 9 9 0 000 18z M12 7v5l3 2",
  users: "M16 19v-1a4 4 0 00-4-4H7a4 4 0 00-4 4v1 M9.5 10a3 3 0 100-6 3 3 0 000 6z M21 19v-1a4 4 0 00-3-3.9 M15.5 4.1a3 3 0 010 5.8",
  lock: "M6 11h12v10H6z M8.5 11V8a3.5 3.5 0 017 0v3",
  rupee: "M7 4h10 M7 9h10 M13 4c3 0 4 2.5 4 5s-2 5-6 5H7l8 7",
  arrow: "M5 12h14 M13 6l6 6-6 6",
  phone: "M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z",
  mail: "M3 6h18v12H3z M3 7l9 6 9-6",
  pin: "M12 21s-7-6.2-7-11.5A7 7 0 0119 9.5C19 14.8 12 21 12 21z M12 12a2.5 2.5 0 100-5 2.5 2.5 0 000 5z",
} as const;

export type IconName = keyof typeof paths;

export function Icon({ name, className = "h-5 w-5" }: { name: IconName; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d={paths[name]} />
    </svg>
  );
}
