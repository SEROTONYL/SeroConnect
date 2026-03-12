import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "Тарифы",
  description:
    "Тарифы на доступ к сервису защищённого интернет-соединения для личного использования: срок действия, количество устройств и условия подключения.",
};

const plans = [
  {
    name: "Mini",
    price: "90 ₽",
    duration: "30 дней",
    devices: "1 устройство",
    description:
      "Базовый вариант для одного личного устройства с доступом к сервису на фиксированный срок.",
  },
  {
    name: "Standard",
    price: "249 ₽",
    duration: "30 дней",
    devices: "до 3 устройств",
    description:
      "Подходит для повседневного использования на смартфоне, ноутбуке и ещё одном личном устройстве.",
    featured: true,
  },
  {
    name: "Family",
    price: "399 ₽",
    duration: "30 дней",
    devices: "до 5 устройств",
    description:
      "Удобный формат для нескольких личных устройств с единым сроком действия и понятными условиями.",
  },
];

export default function PricingPage() {
  return (
    <div className="page-shell">
      <Container>
        <div className="page-intro">
          <span className="eyebrow">Тарифы</span>
          <h1>Тарифы на доступ к сервису защищённого интернет-соединения</h1>
          <p>
            Ниже указаны варианты подключения для личных устройств с понятным сроком
            действия, количеством устройств и стоимостью. Здесь можно сразу
            ознакомиться с условиями и выбрать подходящий тариф.
          </p>
        </div>

        <div className="pricing-grid">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`card pricing-card${plan.featured ? " featured" : ""}`}
            >
              <span className="label">{plan.featured ? "Популярный тариф" : "Тариф"}</span>
              <h3>{plan.name}</h3>
              <div className="price">{plan.price}</div>
              <div className="plan-meta">
                <div className="plan-meta-item">
                  <span className="plan-meta-label">Срок действия</span>
                  <strong>{plan.duration}</strong>
                </div>
                <div className="plan-meta-item">
                  <span className="plan-meta-label">Количество устройств</span>
                  <strong>{plan.devices}</strong>
                </div>
              </div>
              <p>{plan.description}</p>
              <div className="inline-actions">
                <Link className="button button-primary" href="/contacts">
                  Оформить
                </Link>
              </div>
            </article>
          ))}
        </div>

        <p className="pricing-note">
          Оформление и оплата тарифа означают согласие с{" "}
          <Link href="/offer">публичной офертой</Link> и{" "}
          <Link href="/privacy">политикой обработки данных</Link>.
        </p>
      </Container>

      <section className="section">
        <Container>
          <SectionHeading
            eyebrow="Пояснения"
            title="Условия подключения и документы"
            description="Ниже собраны короткие пояснения по активации доступа, условиям использования и связанным документам."
          />
          <div className="card-grid pricing-notes-grid">
            <article className="card">
              <h3>Что важно знать</h3>
              <ul className="list">
                <li>Доступ предоставляется после подтверждения оплаты.</li>
                <li>Подключение предназначено для личного использования.</li>
              </ul>
            </article>

            <article className="card">
              <h3>Возврат</h3>
              <p>
                Подробные условия возврата размещены на странице{" "}
                <Link className="text-link" href="/refund">
                  /refund
                </Link>
                .
              </p>
            </article>

            <article className="card">
              <h3>Юридические условия</h3>
              <p>
                Описание порядка оказания услуги и условий использования доступно на
                странице{" "}
                <Link className="text-link" href="/offer">
                  /offer
                </Link>
                .
              </p>
            </article>
          </div>
        </Container>
      </section>
    </div>
  );
}
