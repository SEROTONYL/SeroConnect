import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { MotionPage } from "@/components/motion-page";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Ответы на часто задаваемые вопросы о тарифах, оплате, возврате, подключении и порядке использования доступа к сервису.",
};

const faqItems = [
  {
    question: "Что входит в тариф?",
    answer: (
      <>
        В тариф входит доступ к сервису защищенного интернет-подключения на указанный
        срок, порядок получения подключения, сопровождение по подключению и поддержка
        по базовым вопросам использования.
      </>
    ),
  },
  {
    question: "Можно ли использовать доступ сразу после оплаты?",
    answer: (
      <>
        Доступ предоставляется после подтверждения оплаты. После подключения доступ
        начинает работать в объеме, указанном в выбранном тарифе.
      </>
    ),
  },
  {
    question: "На сколько устройств можно подключить сервис?",
    answer: (
      <>
        Количество устройств зависит от выбранного тарифа. Актуальные условия по
        каждому варианту подключения указаны на странице{" "}
        <Link className="text-link" href="/pricing">
          /pricing
        </Link>
        .
      </>
    ),
  },
  {
    question: "Как подключается поддержка по сервису?",
    answer: (
      <>
        Если возникают вопросы после оплаты, поддержка помогает по подключению и
        базовым настройкам сервиса, разъясняет порядок работы и помогает найти нужные
        инструкции.
      </>
    ),
  },
  {
    question: "Что делать, если не получается подключиться?",
    answer: (
      <>
        Для этого предусмотрены каналы поддержки. Лучше обратиться в поддержку через{" "}
        <Link className="text-link" href="/contacts">
          /contacts
        </Link>
        . Поддержка поможет проверить настройки, оплату и корректность выбранного
        способа подключения.
      </>
    ),
  },
  {
    question: "Можно ли оформить возврат?",
    answer: (
      <>
        Условия возврата и порядок рассмотрения обращений описаны на странице{" "}
        <Link className="text-link" href="/refund">
          /refund
        </Link>
        . Если требуется, запрос рассматривается в рамках действующих правил сервиса.
      </>
    ),
  },
  {
    question: "Где посмотреть условия использования?",
    answer: (
      <>
        Основные условия использования сервиса размещены на страницах{" "}
        <Link className="text-link" href="/offer">
          /offer
        </Link>{" "}
        и{" "}
        <Link className="text-link" href="/terms">
          /terms
        </Link>
        .
      </>
    ),
  },
  {
    question: "Как связаться с поддержкой?",
    answer: (
      <>
        Актуальные каналы связи указаны на странице{" "}
        <Link className="text-link" href="/contacts">
          /contacts
        </Link>
        . Там же можно выбрать удобный способ обращения.
      </>
    ),
  },
];

export default function FaqPage() {
  return (
    <MotionPage className="page-shell document-page" profile="restrained">
      <Container className="document-container">
        <div className="document-layout document-layout-single">
          <main className="document-main">
            <article className="document-surface faq-document">
              <div className="page-intro document-intro">
                <span className="eyebrow">FAQ</span>
                <h1>Ответы на частые вопросы по использованию сервиса</h1>
                <p>
                  Здесь собраны ответы по тарифам, подключению, возвратам, оплате и
                  поддержке. Формат страницы сделан спокойнее, чем у маркетинговых
                  блоков, чтобы длинные русские формулировки читались без перегруза.
                </p>
              </div>

              <div className="document-sections faq-document-list">
                {faqItems.map((item) => (
                  <article key={item.question} className="document-section faq-document-item">
                    <h2>{item.question}</h2>
                    <div className="document-answer">
                      <p>{item.answer}</p>
                    </div>
                  </article>
                ))}
              </div>
            </article>
          </main>
        </div>
      </Container>
    </MotionPage>
  );
}
