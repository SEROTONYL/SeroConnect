import type { SetupPlatformGuide } from "@/lib/setup-guides";

type SetupGuideHeaderProps = {
  guide: SetupPlatformGuide;
};

export function SetupGuideHeader({ guide }: SetupGuideHeaderProps) {
  return (
    <div className="page-intro setup-guide-intro">
      <span className="eyebrow">Инструкция по подключению</span>
      <h1>{guide.title}</h1>
      <p>{guide.description}</p>
    </div>
  );
}
