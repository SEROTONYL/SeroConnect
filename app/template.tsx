import type { ReactNode } from "react";
import { motionVariants } from "@/lib/motion";

type TemplateProps = {
  children: ReactNode;
};

export default function Template({ children }: TemplateProps) {
  return (
    <div className="page-transition" data-motion-variant={motionVariants.pageEnter}>
      {children}
    </div>
  );
}
