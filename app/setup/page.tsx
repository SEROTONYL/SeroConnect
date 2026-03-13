import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { MotionPage } from "@/components/motion-page";
import { PageHero } from "@/components/page-hero";
import { SetupPlatformCard } from "@/components/setup-platform-card";
import { SectionHeading } from "@/components/section-heading";
import { setupGuides } from "@/lib/setup-guides";

export const metadata: Metadata = {
  title: "Настройка VPN после оплаты",
  description:
    "Выберите устройство и откройте пошаговую инструкцию по подключению VPN после оплаты.",
};

export default function SetupPage() {
  return (
    <MotionPage profile="lively">
      <PageHero
        eyebrow="После оплаты"
        title="Оплата прошла успешно"
        description="Теперь выберите ваше устройство и следуйте инструкции по подключению VPN."
        actions={
          <>
            <Link className="button button-primary" href="#setup-platforms">
              Выбрать устройство
            </Link>
            <Link className="button button-secondary" href="/">
              На главную
            </Link>
          </>
        }
        aside={
          <div className="panel hero-panel setup-hero-panel">
            <span className="label">Что дальше</span>
            <h3>Откройте инструкцию для вашего устройства и пройдите подключение по шагам.</h3>
            <ul className="list">
              <li>Для каждого шага можно позже подложить свой скриншот без правок кода.</li>
              <li>Если приложение ещё не установлено, инструкция покажет, что скачать и куда нажать.</li>
              <li>На странице инструкции будут кнопки возврата к выбору платформы и перехода на главную.</li>
            </ul>
          </div>
        }
      />

      <section className="section">
        <Container>
          <SectionHeading
            eyebrow="Выбор платформы"
            title="Выберите устройство для настройки"
            description="Все инструкции оформлены в одном формате: короткое объяснение, последовательные шаги и отдельные блоки под скриншоты."
          />

          <div id="setup-platforms" className="setup-platform-grid">
            {setupGuides.map((guide) => (
              <SetupPlatformCard key={guide.slug} guide={guide} />
            ))}
          </div>

          <div className="panel setup-helper-panel">
            <span className="label">Подсказка по выбору</span>
            <div className="setup-helper-grid">
              {setupGuides.map((guide) => (
                <article key={guide.slug} className="setup-helper-item">
                  <h3>{guide.shortTitle}</h3>
                  <p>{guide.helperText}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="panel setup-note-panel">
            <span className="label">Если приложения ещё нет</span>
            <p>Инструкция покажет, что скачать и куда нажать.</p>
          </div>
        </Container>
      </section>
    </MotionPage>
  );
}
