import { existsSync } from "node:fs";
import path from "node:path";

type SetupGuideImageProps = {
  src: string;
  alt: string;
};

export function SetupGuideImage({ src, alt }: SetupGuideImageProps) {
  const normalizedSrc = src.startsWith("/") ? src : `/${src}`;
  const filePath = path.join(process.cwd(), "public", normalizedSrc.replace(/^\//, ""));
  const hasImage = existsSync(filePath);

  if (!hasImage) {
    return (
      <div
        className="guide-image-placeholder"
        role="img"
        aria-label={`Сюда вставить изображение. Ожидается файл: ${normalizedSrc}`}
      >
        <div className="guide-image-placeholder-inner">
          <span className="label">Плейсхолдер</span>
          <strong>Сюда вставить изображение</strong>
          <p className="guide-image-path">Ожидается файл: {normalizedSrc}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="guide-image-frame">
      <img className="guide-image" src={normalizedSrc} alt={alt} loading="lazy" />
    </div>
  );
}
