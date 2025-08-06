import type { SVGProps } from "react";

export function UmmahConnectLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 2a10 10 0 1 0 10 10" />
      <path d="M16 8a6 6 0 0 1-6 6" />
      <path d="M12 22a10 10 0 0 0 10-10" />
      <path d="M8 16a6 6 0 0 0 6-6" />
    </svg>
  );
}
