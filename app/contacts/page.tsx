import type { Metadata } from "next";
import { Container } from "@/components/container";
import { contactDetails } from "@/lib/site";

export const metadata: Metadata = {
  title: "Контакты",
  description:
    "Контакты поддержки сервиса: email, Telegram, часы ответа и информация о том, по каким вопросам можно обратиться.",
};

const supportTopics = [
  "Уточнение порядка подключения и активации доступа.",
  "Вопросы по оплате и подтверждению платежа.",
  "Получение инструкции для личных устройств.",
  "Базовые вопросы по использованию сервиса.",
];

export default function ContactsPage() {
  return (
    <div className="page-shell">
      <Container>
        <div className="page-intro">
          <span className="eyebrow">Контакты</span>
          <h1>Контакты поддержки и основные способы связи</h1>
          <p>
            На странице указаны основные контактные данные сервиса: email, Telegram,
            часы ответа и круг вопросов, по которым можно обратиться в поддержку.
          </p>
        </div>

        <div className="card-grid">
          <article className="card">
            <span className="label">Email поддержки</span>
            <h3>{contactDetails.email}</h3>
            <p>Основной канал для обращений по подключению, оплате и общим вопросам.</p>
            <a className="button button-secondary" href={`mailto:${contactDetails.email}`}>
              Написать на email
            </a>
          </article>

          <article className="card">
            <span className="label">Telegram поддержки</span>
            <h3>{contactDetails.telegram}</h3>
            <p>Удобный способ быстро уточнить порядок подключения и задать короткий вопрос.</p>
            <a
              className="button button-secondary"
              href={contactDetails.telegramUrl}
              target="_blank"
              rel="noreferrer"
            >
              Открыть Telegram
            </a>
          </article>

          <article className="card">
            <span className="label">Часы ответа</span>
            <h3>{contactDetails.supportHours}</h3>
            <p>Ответы направляются в рабочем порядке в пределах указанного интервала.</p>
          </article>

          <article className="card">
            <span className="label">Город / страна</span>
            <h3>{contactDetails.city}</h3>
            <p>Контактная информация указана открыто для понятной и прозрачной коммуникации.</p>
          </article>
        </div>

        <section className="section">
          <div className="two-column">
            <div className="panel">
              <span className="label">По каким вопросам можно обращаться</span>
              <h3>Поддержка помогает по базовым пользовательским вопросам</h3>
              <ul className="list">
                {supportTopics.map((topic) => (
                  <li key={topic}>{topic}</li>
                ))}
              </ul>
            </div>

            <div className="panel">
              <span className="label">Как написать быстрее</span>
              <h3>Что полезно указать в обращении</h3>
              <p>
                Чтобы поддержка быстрее поняла ситуацию, обычно достаточно коротко
                описать вопрос, указать тариф или дату оплаты и написать, на каком
                устройстве требуется помощь с подключением.
              </p>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
}
