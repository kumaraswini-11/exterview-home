import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  badge: string;
  title: React.ReactNode | string;
  className?: string;
  titleClassName?: string;
}

// Reusable section header component with badge and title
export function SectionHeader({
  badge,
  title,
  className,
  titleClassName,
}: SectionHeaderProps) {
  return (
    <div className={cn("mb-12 text-center", className)}>
      <Badge className="px-6 py-1.5 text-sm font-bold">{badge}</Badge>
      <h2
        className={cn(
          "mt-4 text-[48px] font-semibold text-black capitalize",
          titleClassName,
        )}
      >
        {title}
      </h2>
    </div>
  );
}
