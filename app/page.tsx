import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { MotionPage } from "@/components/motion-page";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { contactDetails } from "@/lib/site";

export const metadata: Metadata = {
  title: "Защищенное интернет-соединение",
  description:
    "Сервис для организации защищенного интернет-соединения на личных устройствах: безопасное подключение, защита трафика и удобная активация.",
};

const benefits = [
  {
    title: "Шифрование трафика",
    description:
      "Соединение помогает дополнительно защитить передаваемые данные при использовании домашних, рабочих и публичных сетей.",
  },
  {
    title: "Подключение на нескольких устройствах",
    description:
      "Можно использовать сервис на смартфоне, ноутбуке, планшете и других личных устройствах в рамках выбранного тарифа.",
  },
  {
    title: "Быстрая активация",
    description:
      "После оформления вы получаете данные для подключения и понятную инструкцию без лишних действий.",
  },
  {
    title: "Поддержка",
    description:
      "Если возникают вопросы по настройке или оплате, служба поддержки помогает с подключением и базовой проверкой.",
  },
];

const plans = [
  {
    name: "Mini",
    price: "99 ₽",
    description: "Для одного личного устройства.",
    points: ["1 устройство", "30 дней"],
  },
  {
    name: "Standart",
    price: "189 ₽",
    description: "Подходит для повседневного использования на нескольких устройствах.",
    points: ["до 3 устройств", "30 дней"],
  },
  {
    name: "Family",
    price: "299 ₽",
    description: "Удобный вариант для личного набора устройств или семьи.",
    points: ["до 5 устройств", "30 дней"],
  },
];

const steps = [
  {
    title: "Выберите тариф",
    description: "Сравните условия и определите подходящий вариант по количеству устройств.",
  },
  {
    title: "Оплатите",
    description: "Оформление занимает минимум времени и подтверждается сразу после оплаты.",
  },
  {
    title: "Получите инструкцию и данные для подключения",
    description: "Мы отправим параметры подключения и короткую пошаговую памятку.",
  },
  {
    title: "Подключите устройство",
    description: "Останется ввести данные и проверить соединение на нужном устройстве.",
  },
];

const faqPreviewItems = [
  {
    question: "Когда приходит инструкция после оплаты?",
    answer: "Обычно данные для подключения направляются сразу после подтверждения оплаты.",
  },
  {
    question: "Можно ли подключить несколько устройств?",
    answer: "Да, количество устройств зависит от выбранного тарифа.",
  },
  {
    question: "Куда писать по настройке?",
    answer: "Удобнее всего обратиться в поддержку через Telegram или по email.",
  },
];

const heroPoints = [
  "Подходит для смартфона, ноутбука и планшета",
  "Понятная инструкция для подключения",
  "Поддержка по вопросам активации и настройки",
];

export default function HomePage() {
  return (
    <MotionPage profile="lively">
      <PageHero
        eyebrow="Защищенное соединение для личных устройств"
        title="Спокойный способ организовать защищенное подключение к сети"
        description="Сервис помогает настроить безопасное соединение, защитить трафик и удобно использовать его на личных устройствах дома, в поездке и в повседневной работе."
        actions={
          <>
            <Link className="button button-primary" href="/pricing">
              Выбрать тариф
            </Link>
            <Link className="button button-secondary" href="/contacts">
              Связаться с поддержкой
            </Link>
          </>
        }
        aside={
          <div className="panel hero-panel">
            <span className="label">Коротко о сервисе</span>
            <h3>Подключение без перегруженных сценариев</h3>
            <ul className="list">
              {heroPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        }
      />

      <section className="section">
        <Container>
          <SectionHeading
            eyebrow="Преимущества"
            title="Что получает пользователь"
            description="Основной акцент сделан на защищенном соединении, понятной активации и спокойном ежедневном использовании на личных устройствах."
          />
          <div className="benefits-grid">
            {benefits.map((item) => (
              <article key={item.title} className="card">
                <span className="label">Преимущество</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <SectionHeading
            eyebrow="Тарифы"
            title="Три варианта для разного количества устройств"
            description="Все тарифы рассчитаны на 30 дней и подходят для личного использования с понятными условиями подключения."
          />
          <div className="pricing-grid">
            {plans.map((plan) => (
              <article key={plan.name} className="card pricing-card">
                <span className="label">Тариф</span>
                <h3>{plan.name}</h3>
                <p>{plan.description}</p>
                <div className="price">{plan.price}</div>
                <ul className="list">
                  {plan.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <div className="inline-actions">
                  <Link className="button button-secondary" href="/pricing">
                    Оформить
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <p className="pricing-note">
            Оплата означает согласие с{" "}
            <Link href="/offer">публичной офертой</Link> и{" "}
            <Link href="/privacy">политикой обработки данных</Link>.
          </p>
        </Container>
      </section>

      <section className="section">
        <Container>
          <SectionHeading
            eyebrow="Как это работает"
            title="Подключение в четыре шага"
            description="Процесс организован так, чтобы пользователь быстро получил данные для подключения и мог начать пользоваться сервисом без лишней переписки."
          />
          <div className="steps-grid">
            {steps.map((step) => (
              <article key={step.title} className="card step-card">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <SectionHeading
            eyebrow="FAQ"
            title="Частые вопросы перед подключением"
            description="Короткие ответы на популярные вопросы о получении данных для подключения, количестве устройств и обращении в поддержку."
          />
          <div className="card-grid faq-preview-grid">
            {faqPreviewItems.map((item) => (
              <article key={item.question} className="card">
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </article>
            ))}
          </div>
          <div className="faq-preview-footer">
            <Link className="button button-secondary" href="/faq">
              Перейти к полному FAQ
            </Link>
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <div className="cta-panel contact-cta">
            <div className="contact-layout">
              <div>
                <span className="eyebrow">Контакты</span>
                <h2>Если нужна помощь по подключению, поддержка на связи</h2>
                <p className="section-copy">
                  Можно написать в Telegram или на email. Поддержка отвечает по вопросам активации, оплаты и базовой настройки на личных устройствах.
                </p>
                <div className="inline-actions">
                  <a
                    className="button button-primary"
                    href={contactDetails.telegramUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Связаться
                  </a>
                </div>
              </div>

              <div className="contact-stack">
                <article className="contact-card">
                  <span className="label">Telegram поддержки</span>
                  <a
                    className="contact-value"
                    href={contactDetails.telegramUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {contactDetails.telegram}
                  </a>
                </article>

                <article className="contact-card">
                  <span className="label">Email поддержки</span>
                  <a className="contact-value" href={`mailto:${contactDetails.email}`}>
                    {contactDetails.email}
                  </a>
                </article>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </MotionPage>
  );
}
