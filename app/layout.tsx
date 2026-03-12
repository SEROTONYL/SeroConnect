import type { Metadata } from "next";
import type { ReactNode } from "react";
import { MotionRuntime } from "@/components/motion-runtime";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { brandName, defaultDescription } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: `${brandName} | Защищённое интернет-соединение`,
    template: `%s | ${brandName}`,
  },
  description: defaultDescription,
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ru">
      <body>
        <MotionRuntime />
        <div className="site-shell">
          <SiteHeader />
          <main className="main-content">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
