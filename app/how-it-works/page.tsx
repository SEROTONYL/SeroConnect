import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "Как это работает",
  description:
    "Описание процесса подключения к сервису защищённого интернет-соединения для личных устройств: от выбора тарифа до получения данных и настройки.",
};

const steps = [
  {
    title: "Выбор тарифа",
    description:
      "Сначала вы выбираете подходящий тариф в зависимости от срока действия и количества личных устройств, которые планируете подключить.",
  },
  {
    title: "Оплата",
    description:
      "После выбора тарифа оформляется оплата. Доступ к сервису предоставляется после подтверждения оплаты.",
  },
  {
    title: "Получение инструкции и данных",
    description:
      "После подтверждения оплаты вы получаете данные для подключения и понятную инструкцию с основными шагами настройки.",
  },
  {
    title: "Подключение устройства",
    description:
      "Остаётся ввести полученные данные на нужном устройстве и проверить, что соединение работает корректно.",
  },
];

const included = [
  "Доступ к сервису на выбранный срок.",
  "Инструкция по подключению.",
  "Поддержка по базовым вопросам подключения.",
];

const audience = [
  "Для личного использования.",
  "Для подключения в публичных сетях.",
  "Для нескольких личных устройств.",
];

export default function HowItWorksPage() {
  return (
    <div className="page-shell">
      <Container>
        <div className="page-intro">
          <span className="eyebrow">Как это работает</span>
          <h1>Понятный процесс подключения к сервису защищённого интернет-соединения</h1>
          <p>
            На этой странице коротко описан порядок использования сервиса: от выбора
            тарифа до получения инструкции и подключения личного устройства. Формат
            рассчитан на спокойное и понятное подключение без сложных шагов.
          </p>
        </div>

        <div className="steps-grid">
          {steps.map((step) => (
            <article key={step.title} className="card step-card">
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </Container>

      <section className="section">
        <Container>
          <SectionHeading
            eyebrow="Что входит в услугу"
            title="Базовый состав услуги"
            description="Ниже перечислено, что получает пользователь после оформления доступа к сервису."
          />
          <div className="card-grid">
            <article className="card">
              <h3>Что предоставляется</h3>
              <ul className="list">
                {included.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>

            <article className="card">
              <h3>Как организована поддержка</h3>
              <p>
                Поддержка помогает с базовыми вопросами по подключению, уточнению
                порядка активации и использованию инструкции.
              </p>
            </article>

            <article className="card">
              <h3>На что рассчитан сервис</h3>
              <p>
                Сервис предназначен для аккуратного использования на личных
                устройствах в рамках выбранного тарифа и срока действия.
              </p>
            </article>
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <SectionHeading
            eyebrow="Для кого подходит сервис"
            title="Основные сценарии использования"
            description="Подход сервиса ориентирован на личное использование и подключение собственных устройств в привычных пользовательских сценариях."
          />
          <div className="card-grid">
            {audience.map((item) => (
              <article key={item} className="card">
                <h3>{item}</h3>
                <p>
                  Такой формат подойдёт, если нужен доступ к сервису защищённого
                  интернет-соединения без сложной настройки и с понятными условиями.
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <div className="cta-panel">
            <span className="eyebrow">Дальше</span>
            <h2>Можно перейти к выбору тарифа или сразу связаться с поддержкой</h2>
            <p className="section-copy">
              Если вы уже понимаете, какой вариант подходит, перейдите к тарифам. Если
              сначала нужна дополнительная информация по подключению, откройте
              контакты.
            </p>
            <div className="inline-actions">
              <Link className="button button-primary" href="/pricing">
                Перейти к тарифам
              </Link>
              <Link className="button button-secondary" href="/contacts">
                Перейти в контакты
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
