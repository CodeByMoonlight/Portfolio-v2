import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const baseProps = {
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  strokeWidth: 2,
  viewBox: "0 0 24 24",
};

export function DatabaseIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <ellipse cx="12" cy="5" rx="8" ry="3" />
      <path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5" />
      <path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />
    </svg>
  );
}

export function BrainIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M9 7a3 3 0 0 1 6 0v10a3 3 0 0 1-6 0V7Z" />
      <path d="M9 8H7a2 2 0 0 0 0 4h2" />
      <path d="M15 8h2a2 2 0 0 1 0 4h-2" />
      <path d="M9 17H7a2 2 0 0 1 0-4h2" />
      <path d="M15 17h2a2 2 0 0 0 0-4h-2" />
    </svg>
  );
}

export function LayoutGridIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <rect x="4" y="4" width="6" height="6" rx="1" />
      <rect x="14" y="4" width="6" height="6" rx="1" />
      <rect x="4" y="14" width="6" height="6" rx="1" />
      <rect x="14" y="14" width="6" height="6" rx="1" />
    </svg>
  );
}

export function ShieldCheckIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M12 3 19 6v5c0 5-3.5 8.5-7 10-3.5-1.5-7-5-7-10V6l7-3Z" />
      <path d="m9.5 12 1.8 1.8L15 10.1" />
    </svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M4 6h16" />
      <path d="M4 12h16" />
      <path d="M4 18h16" />
    </svg>
  );
}

export function XIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="m6 6 12 12" />
      <path d="m18 6-12 12" />
    </svg>
  );
}

export function ArrowDownToLineIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M12 4v10" />
      <path d="m8 10 4 4 4-4" />
      <path d="M5 20h14" />
    </svg>
  );
}

export function MoveRightIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

export function CodeIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="m9 18-6-6 6-6" />
      <path d="m15 6 6 6-6 6" />
      <path d="M13 4 11 20" />
    </svg>
  );
}

export function ToolIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="m14.7 6.3 3 3-8.4 8.4H6.3v-3L14.7 6.3Z" />
      <path d="M13 7 17 11" />
    </svg>
  );
}
