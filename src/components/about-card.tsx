import type { ComponentType } from "react";
import { Badge } from "@/components/ui/badge";
import { DatabaseIcon } from "@/components/icons";
import { DotPattern } from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";

export type AboutCardVariant =
  | "purple"
  | "pink"
  | "yellow"
  | "green"
  | "blue"
  | "red";
export type AboutCardIcon = ComponentType<{ className?: string }>;

interface AboutCardProps {
  title: string;
  description: string;
  technologies: string[];
  icon?: AboutCardIcon;
  variant?: AboutCardVariant;
}

const variantStyles = {
  purple: {
    card: "bg-[radial-gradient(circle_at_top_right,rgb(117,132,213,0.4)_0%,white_45%)] hover:ring-home-purple/70",
    icon: "bg-home-purple/20 text-home-dark-purple",
    badge: "bg-home-purple/20 text-home-dark-purple",
  },
  pink: {
    card: "bg-[radial-gradient(circle_at_top_right,rgb(236,72,153,0.4)_0%,white_45%)] hover:ring-home-pink/70",
    icon: "bg-home-pink/20 text-home-dark-pink",
    badge: "bg-home-pink/20 text-home-dark-pink",
  },
  yellow: {
    card: "bg-[radial-gradient(circle_at_top_right,rgb(248,174,34,0.4)_0%,white_45%)] hover:ring-home-yellow/70",
    icon: "bg-home-yellow/20 text-home-dark-orange",
    badge: "bg-home-yellow/20 text-home-dark-orange",
  },
  green: {
    card: "bg-[radial-gradient(circle_at_top_right,rgb(74,159,0,0.4)_0%,white_45%)] hover:ring-home-dark-green/70",
    icon: "bg-home-dark-green/12 text-home-dark-green",
    badge: "bg-home-dark-green/12 text-home-dark-green",
  },
  blue: {
    card: "bg-[radial-gradient(circle_at_top_right,rgb(43,127,255,0.4)_0%,white_45%)] hover:ring-blue-500/70",
    icon: "bg-blue-500/12 text-blue-800",
    badge: "bg-blue-500/12 text-blue-800",
  },
  red: {
    card: "bg-[radial-gradient(circle_at_top_right,rgb(251,44,54,0.4)_0%,white_45%)] hover:ring-red-500/70",
    icon: "bg-red-500/12 text-red-800",
    badge: "bg-red-500/12 text-red-800",
  },
} as const;

export function AboutCard({
  title,
  description,
  technologies,
  icon: Icon = DatabaseIcon,
  variant = "purple",
}: AboutCardProps) {
  const styles = variantStyles[variant];

  return (
    <div
      className={cn(
        "relative flex w-full flex-col gap-4 rounded-[34px] p-6 ring-2 ring-gray-200/70 drop-shadow-xs transition-all duration-300 hover:drop-shadow-lg",
        styles.card,
      )}
    >
      <Icon className={cn("h-16 w-16 rounded-xl p-3", styles.icon)} />
      <h3 className="text-xl font-bold text-gray-800 lg:text-2xl">{title}</h3>
      <p className="leading-7 text-gray-800">{description}</p>
      <span className="w-fill mt-4 flex flex-wrap gap-3">
        {technologies.map((tech) => (
          <Badge key={tech} variant="default" className={styles.badge}>
            {tech}
          </Badge>
        ))}
      </span>
      <DotPattern
        width={20}
        height={20}
        cx={1}
        cy={1}
        cr={1}
        className={cn(
          "mask-[radial-gradient(circle_at_top_right,white,transparent_60%)]",
        )}
      />
    </div>
  );
}
