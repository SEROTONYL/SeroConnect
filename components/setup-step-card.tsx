import { SetupGuideImage } from "@/components/setup-guide-image";
import type { SetupGuideStep } from "@/lib/setup-guides";

type SetupStepCardProps = {
  step: SetupGuideStep;
};

export function SetupStepCard({ step }: SetupStepCardProps) {
  return (
    <article className="card guide-step">
      <div className="guide-step-header">
        <span className="guide-step-number">Шаг {step.number}</span>
        <h3>{step.title}</h3>
      </div>

      <p>{step.text}</p>

      <SetupGuideImage src={step.imagePath} alt={step.imageAlt} />
    </article>
  );
}
