import type { ReactNode } from "react";
import type { MotionProfile } from "@/lib/motion";

type MotionPageProps = {
  children: ReactNode;
  className?: string;
  profile?: MotionProfile;
};

export function MotionPage({
  children,
  className,
  profile = "default",
}: MotionPageProps) {
  return (
    <div className={className} data-motion-profile={profile}>
      {children}
    </div>
  );
}
