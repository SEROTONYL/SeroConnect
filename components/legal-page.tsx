import type { ReactNode } from "react";
import { Container } from "@/components/container";
import { MotionPage } from "@/components/motion-page";

type LegalSection = {
  title: string;
  body: ReactNode;
};

type LegalPageProps = {
  title: string;
  intro: string;
  sections: LegalSection[];
  asideTitle: string;
  asideText: string;
};

export function LegalPage({
  title,
  intro,
  sections,
  asideTitle,
  asideText,
}: LegalPageProps) {
  return (
    <MotionPage className="page-shell document-page" profile="restrained">
      <Container className="document-container">
        <div className="document-layout">
          <main className="document-main">
            <article className="document-surface copyable-content">
              <div className="page-intro document-intro">
                <span className="eyebrow">Документы</span>
                <h1>{title}</h1>
                <p>{intro}</p>
              </div>

              <div className="document-sections">
                {sections.map((section) => (
                  <section key={section.title} className="document-section">
                    <h2>{section.title}</h2>
                    {section.body}
                  </section>
                ))}
              </div>
            </article>
          </main>

          <aside className="document-aside">
            <div className="panel document-panel copyable-content">
              <span className="label">Кратко</span>
              <h3>{asideTitle}</h3>
              <p>{asideText}</p>
            </div>

            <div className="panel document-panel copyable-content">
              <span className="label">Важно</span>
              <p>
                Сведения в документе должны сопоставляться с актуальными реквизитами,
                контактными данными и фактическим порядком работы сервиса.
              </p>
            </div>
          </aside>
        </div>
      </Container>
    </MotionPage>
  );
}
