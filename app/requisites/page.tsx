import type { Metadata } from "next";
import { Container } from "@/components/container";
import { MotionPage } from "@/components/motion-page";

export const metadata: Metadata = {
  title: "Реквизиты",
  description:
    "Реквизиты продавца и контактные данные для оплаты, поддержки и проверки юридической информации.",
};

const sellerDetails = [
  { label: "ФИО / наименование", value: "Индивидуальный предприниматель Емельянцев" },
  { label: "Статус", value: "Физическое лицо" },
  { label: "ИНН", value: "246009308659" },
];

const contactDetails = [
  { label: "Email", value: "serotonyl@gmail.com", href: "mailto:serotonyl@gmail.com" },
  { label: "Telegram", value: "@yaveiiii", href: "https://t.me/yaveiiii" },
  { label: "Адрес для связи", value: "Россия, Москва" },
];

export default function RequisitesPage() {
  return (
    <MotionPage className="page-shell document-page" profile="restrained">
      <Container className="document-container">
        <div className="document-layout document-layout-single">
          <main className="document-main">
            <article className="document-surface">
              <div className="page-intro document-intro">
                <span className="eyebrow">Реквизиты</span>
                <h1>Реквизиты продавца и данные для связи</h1>
                <p>
                  Здесь размещены основные сведения о продавце и контактные данные для
                  оплаты, проверки информации и юридически значимых обращений.
                </p>
              </div>

              <div className="document-sections">
                <section className="document-section">
                  <span className="label">Основные сведения</span>
                  <h2>Данные продавца</h2>
                  <dl className="details-table">
                    {sellerDetails.map((item) => (
                      <div key={item.label} className="details-row">
                        <dt className="details-term">{item.label}</dt>
                        <dd className="details-value">{item.value}</dd>
                      </div>
                    ))}
                  </dl>
                </section>

                <section className="document-section">
                  <span className="label">Контакты</span>
                  <h2>Как связаться</h2>
                  <dl className="details-table">
                    {contactDetails.map((item) => (
                      <div key={item.label} className="details-row">
                        <dt className="details-term">{item.label}</dt>
                        <dd className="details-value">
                          {item.href ? (
                            <a
                              className="text-link"
                              href={item.href}
                              target={item.href.startsWith("http") ? "_blank" : undefined}
                              rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                            >
                              {item.value}
                            </a>
                          ) : (
                            item.value
                          )}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </section>

                <section className="document-section">
                  <span className="label">Пояснение</span>
                  <h2>Когда эти данные пригодятся</h2>
                  <p>
                    Эти сведения могут понадобиться для сверки информации о продавце,
                    подготовки платежных документов, связи по вопросам возврата или
                    подтверждения юридически значимых деталей обслуживания.
                  </p>
                </section>
              </div>
            </article>
          </main>
        </div>
      </Container>
    </MotionPage>
  );
}
