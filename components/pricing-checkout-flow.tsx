"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { CartSummary } from "@/components/cart-summary";
import { CheckoutNotice } from "@/components/checkout-notice";
import { SectionHeading } from "@/components/section-heading";
import { servicePackages, type ServicePackage } from "@/lib/service-packages";
import { useCart } from "@/lib/use-cart";

const FEEDBACK_TIMEOUT_MS = 2400;

export function PricingCheckoutFlow() {
  const { isReady, selectedPackage, setSelectedPackage } = useCart();
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const cartAnchorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!feedbackMessage) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      setFeedbackMessage("");
    }, FEEDBACK_TIMEOUT_MS);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [feedbackMessage]);

  useEffect(() => {
    if (!isCheckoutOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsCheckoutOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isCheckoutOpen]);

  const handleAddToCart = (servicePackage: ServicePackage) => {
    setSelectedPackage(servicePackage.id);
    setFeedbackMessage(`Пакет «${servicePackage.name}» добавлен в корзину.`);

    window.setTimeout(() => {
      cartAnchorRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      cartAnchorRef.current?.focus();
    }, 80);
  };

  const handleCheckoutOpen = () => {
    if (!selectedPackage) {
      return;
    }

    setIsCheckoutOpen(true);
  };

  return (
    <>
      <div className="pricing-top-layout">
        <div className="page-intro">
          <span className="eyebrow">Пакеты услуг</span>
          <h1>Пакеты для защищённого подключения</h1>
          <p>
            Выберите подходящий формат защищённого подключения, добавьте его в
            корзину и перейдите к спокойному предпросмотру оформления. Интерфейс
            показывает выбранный пакет, стоимость и текущий статус платёжного
            шлюза без реальной оплаты.
          </p>
        </div>

        <div ref={cartAnchorRef} tabIndex={-1} className="cart-summary-anchor">
          <CartSummary
            selectedPackage={selectedPackage}
            isReady={isReady}
            feedbackMessage={feedbackMessage}
            onCheckout={handleCheckoutOpen}
          />
        </div>
      </div>

      <section className="section">
        <SectionHeading
          eyebrow="Выбор пакета"
          title="Подберите пакет услуг под ваш сценарий"
          description="Каждый пакет можно добавить в корзину одним действием. Если выбрать другой вариант, он аккуратно заменит текущий выбор и сохранится после обновления страницы."
        />

        <div className="pricing-grid">
          {servicePackages.map((servicePackage) => {
            const isSelected = selectedPackage?.id === servicePackage.id;

            return (
              <article
                key={servicePackage.id}
                className={`card pricing-card${servicePackage.featured ? " featured" : ""}`}
              >
                <span className="label">
                  {servicePackage.featured ? "Рекомендуемый пакет" : "Пакет услуг"}
                </span>
                <h3>{servicePackage.name}</h3>
                <div className="price">{servicePackage.price}</div>
                <div className="plan-meta">
                  <div className="plan-meta-item">
                    <span className="plan-meta-label">Период действия</span>
                    <strong>{servicePackage.duration}</strong>
                  </div>
                  <div className="plan-meta-item">
                    <span className="plan-meta-label">Подключаемые устройства</span>
                    <strong>{servicePackage.devices}</strong>
                  </div>
                </div>
                <p>{servicePackage.description}</p>
                <div className="inline-actions pricing-card-actions">
                  <button
                    className={isSelected ? "button button-secondary" : "button button-primary"}
                    type="button"
                    onClick={() => handleAddToCart(servicePackage)}
                    aria-pressed={isSelected}
                  >
                    {isSelected ? "Выбрано в корзине" : "Добавить в корзину"}
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        <p className="pricing-note">
          Оформление и оплата пакета означают согласие с{" "}
          <Link href="/offer">условиями сервиса</Link> и{" "}
          <Link href="/privacy">политикой обработки данных</Link>.
        </p>
      </section>

      <section className="section">
        <SectionHeading
          eyebrow="Оформление"
          title="Что пользователь видит перед запуском оплаты"
          description="Поток оформления остаётся простым: выбранный пакет, итоговая стоимость и понятное уведомление о том, что платёжный шлюз ещё готовится к запуску."
        />

        <div className="card-grid pricing-notes-grid">
          <article className="card">
            <h3>Что уже работает</h3>
            <ul className="list">
              <li>Выбор пакета сохраняется локально и не пропадает после обновления страницы.</li>
              <li>Мини-корзина доступна в верхней части страницы и показывает актуальную стоимость.</li>
            </ul>
          </article>

          <article className="card">
            <h3>Статус оплаты</h3>
            <p>
              Кнопка оформления открывает аккуратный checkout-preview вместо
              настоящего платёжного шага. Это подходит для модерации и
              предварительного онбординга.
            </p>
          </article>

          <article className="card">
            <h3>Поддержка</h3>
            <p>
              Если пользователю нужен доступ раньше, он может перейти в{" "}
              <Link className="text-link" href="/contacts">
                раздел контактов
              </Link>{" "}
              и уточнить детали подключения.
            </p>
          </article>
        </div>
      </section>

      <CheckoutNotice
        open={isCheckoutOpen}
        selectedPackage={selectedPackage}
        onClose={() => setIsCheckoutOpen(false)}
      />
    </>
  );
}
