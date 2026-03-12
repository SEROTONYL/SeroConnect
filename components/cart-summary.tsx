import type { ServicePackage } from "@/lib/service-packages";

type CartSummaryProps = {
  selectedPackage: ServicePackage | null;
  isReady: boolean;
  feedbackMessage: string;
  onCheckout: () => void;
};

export function CartSummary({
  selectedPackage,
  isReady,
  feedbackMessage,
  onCheckout,
}: CartSummaryProps) {
  return (
    <section
      className="panel cart-summary"
      aria-labelledby="cart-summary-title"
      aria-live="polite"
    >
      <div className="cart-summary-header">
        <div>
          <span className="label">Корзина</span>
          <h2 id="cart-summary-title">Предпросмотр оформления</h2>
        </div>
        <span className="cart-status-badge">Шлюз настраивается</span>
      </div>

      {selectedPackage ? (
        <div className="cart-summary-body">
          <div className="cart-package-copy">
            <strong>{selectedPackage.name}</strong>
            <p>{selectedPackage.description}</p>
          </div>

          <dl className="cart-summary-details">
            <div className="cart-summary-row">
              <dt>Пакет услуг</dt>
              <dd>{selectedPackage.name}</dd>
            </div>
            <div className="cart-summary-row">
              <dt>Стоимость</dt>
              <dd>{selectedPackage.price}</dd>
            </div>
          </dl>

          <button className="button button-primary" type="button" onClick={onCheckout}>
            Перейти к оформлению
          </button>
        </div>
      ) : (
        <div className="cart-empty-state">
          <p>{isReady ? "Корзина пуста" : "Загружаем выбранный пакет..."}</p>
          <span>Выберите пакет услуг ниже, и он сразу появится в этом блоке.</span>
        </div>
      )}

      <p className={`cart-feedback${feedbackMessage ? " is-visible" : ""}`}>
        {feedbackMessage || "Выбранный пакет будет сохранён в браузере."}
      </p>
    </section>
  );
}
