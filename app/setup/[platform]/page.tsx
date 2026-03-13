import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/container";
import { MotionPage } from "@/components/motion-page";
import { SetupBackActions } from "@/components/setup-back-actions";
import { SetupGuideHeader } from "@/components/setup-guide-header";
import { SetupStepCard } from "@/components/setup-step-card";
import { setupGuides, getSetupGuide } from "@/lib/setup-guides";

type SetupGuidePageProps = {
  params: Promise<{
    platform: string;
  }>;
};

export function generateStaticParams() {
  return setupGuides.map((guide) => ({ platform: guide.slug }));
}

export async function generateMetadata({
  params,
}: SetupGuidePageProps): Promise<Metadata> {
  const { platform } = await params;
  const guide = getSetupGuide(platform);

  if (!guide) {
    return {
      title: "Инструкция не найдена",
      description: "Запрошенная инструкция по подключению не найдена.",
    };
  }

  return {
    title: guide.metaTitle,
    description: guide.metaDescription,
  };
}

export default async function SetupGuidePage({
  params,
}: SetupGuidePageProps) {
  const { platform } = await params;
  const guide = getSetupGuide(platform);

  if (!guide) {
    notFound();
  }

  return (
    <MotionPage className="page-shell" profile="restrained">
      <Container className="setup-guide-container">
        <div className="setup-guide-topbar">
          <div className="setup-guide-main">
            <SetupGuideHeader guide={guide} />
          </div>

          <div className="panel setup-guide-actions-panel">
            <span className="label">Навигация</span>
            <p>Если нужно, вернитесь к выбору устройства или откройте главную страницу.</p>
            <SetupBackActions compact />
          </div>
        </div>

        <div className="setup-steps-stack">
          {guide.steps.map((step) => (
            <SetupStepCard
              key={step.id}
              step={step}
            />
          ))}
        </div>

        <div className="cta-panel setup-guide-footer">
          <div>
            <span className="eyebrow">Другая платформа</span>
            <h2>Нужно открыть инструкцию для другого устройства?</h2>
            <p className="section-copy">
              Вернитесь к списку платформ и выберите другой сценарий подключения.
            </p>
          </div>

          <SetupBackActions />
        </div>
      </Container>
    </MotionPage>
  );
}
