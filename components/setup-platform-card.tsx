import Link from "next/link";
import type { SetupPlatformGuide } from "@/lib/setup-guides";

type SetupPlatformCardProps = {
  guide: SetupPlatformGuide;
};

export function SetupPlatformCard({ guide }: SetupPlatformCardProps) {
  return (
    <Link className="card platform-card" href={guide.href}>
      <div className="platform-card-top">
        <span className="platform-icon" aria-hidden="true">
          <PlatformGlyph slug={guide.icon} />
        </span>
        <span className="label">Инструкция</span>
      </div>

      <div className="platform-card-body">
        <h3>{guide.shortTitle}</h3>
        <p>{guide.selectionDescription}</p>
      </div>

      <div className="platform-card-meta">
        <span>Открыть инструкцию</span>
        <span aria-hidden="true">→</span>
      </div>
    </Link>
  );
}

type PlatformGlyphProps = {
  slug: SetupPlatformGuide["icon"];
};

function PlatformGlyph({ slug }: PlatformGlyphProps) {
  if (slug === "ios") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M15.1 5.2c.8-1 .7-2.4.7-2.7-1.1.1-2.3.8-3.1 1.8-.7.8-1.2 2.1-1.1 3.2 1.2.1 2.6-.6 3.5-2.3Z" />
        <path d="M12.6 8.2c1-.1 1.9-.6 2.6-.6 1.5 0 2.8.8 3.5 2-.5.3-2 1.3-2 3.6 0 2.8 2.5 3.8 2.5 3.9-.1.3-.4 1.1-.9 1.9-.8 1.3-1.8 2.6-3.1 2.6-1.2 0-1.6-.7-3-.7-1.3 0-1.7.7-3 .7-1.3 0-2.2-1.2-3.1-2.5-1.7-2.5-3-7.1-1.2-10 1-1.5 2.6-2.4 4.4-2.4 1.3 0 2.4.8 3.3.8Z" />
      </svg>
    );
  }

  if (slug === "android") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M8.1 7.1 6.8 4.9M15.9 7.1l1.3-2.2" />
        <path d="M7 9.5h10c1.1 0 2 .9 2 2v5.3c0 .9-.7 1.6-1.6 1.6H6.6c-.9 0-1.6-.7-1.6-1.6v-5.3c0-1.1.9-2 2-2Z" />
        <path d="M8 9.4a4 4 0 0 1 8 0" />
        <circle cx="9.3" cy="12.6" r=".8" fill="currentColor" stroke="none" />
        <circle cx="14.7" cy="12.6" r=".8" fill="currentColor" stroke="none" />
        <path d="M8 18.4v2.1M16 18.4v2.1M5 11.4v5.3M19 11.4v5.3" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
      <rect x="4" y="5" width="16" height="11" rx="2.4" />
      <path d="M9 19h6M12 16.2V19" />
    </svg>
  );
}
