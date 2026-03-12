import type { ReactNode } from "react";
import { Container } from "@/components/container";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  actions?: ReactNode;
  aside?: ReactNode;
};

export function PageHero({ eyebrow, title, description, actions, aside }: PageHeroProps) {
  return (
    <section className="hero">
      <Container>
        <div className="hero-shell">
          <div className="hero-grid">
            <div>
              <span className="eyebrow">{eyebrow}</span>
              <h1>{title}</h1>
              <p className="lead">{description}</p>
              {actions ? <div className="hero-actions">{actions}</div> : null}
            </div>
            {aside ? <div>{aside}</div> : null}
          </div>
        </div>
      </Container>
    </section>
  );
}

