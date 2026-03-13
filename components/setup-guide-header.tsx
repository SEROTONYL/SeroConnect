import type { SetupPlatformGuide } from "@/lib/setup-guides";

type SetupGuideHeaderProps = {
  guide: SetupPlatformGuide;
};

export function SetupGuideHeader({ guide }: SetupGuideHeaderProps) {
  return (
    <>
      <div className="page-intro setup-guide-intro">
        <span className="eyebrow">Инструкция по подключению</span>
        <h1>{guide.title}</h1>
        <p>{guide.description}</p>
      </div>

      <div className="panel setup-guide-summary">
        <span className="label">Выбранная платформа</span>
        <h2>{guide.shortTitle}</h2>
        <p>
          Все шаги на странице берутся из общего конфига. Скриншоты можно спокойно
          подложить позже: если изображения ещё нет, интерфейс покажет placeholder с
          точным путём ожидаемого файла.
        </p>
      </div>
    </>
  );
}
