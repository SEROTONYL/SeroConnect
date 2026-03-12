import Link from "next/link";
import type { ServicePackage } from "@/lib/service-packages";

type CheckoutNoticeProps = {
  open: boolean;
  selectedPackage: ServicePackage | null;
  onClose: () => void;
};

export function CheckoutNotice({
  open,
  selectedPackage,
  onClose,
}: CheckoutNoticeProps) {
  if (!open || !selectedPackage) {
    return null;
  }

  return (
    <div className="checkout-modal-backdrop" onClick={onClose}>
      <div
        className="checkout-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="checkout-title"
        aria-describedby="checkout-description"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="checkout-modal-head">
          <div className="checkout-head-copy">
            <span className="label checkout-section-label">Оформление</span>
            <h2 id="checkout-title">Оформление подключения</h2>
            <p id="checkout-description" className="checkout-head-description">
              Проверьте выбранный пакет и текущий статус оплаты перед следующим
              шагом.
            </p>
          </div>
          <button
            className="checkout-close"
            type="button"
            onClick={onClose}
            aria-label="Закрыть окно оформления"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>

        <div className="checkout-package-card">
          <div className="checkout-package-main">
            <span className="checkout-meta-label">Выбранный пакет</span>
            <strong>{selectedPackage.name}</strong>
            <p>{selectedPackage.description}</p>
          </div>
          <div className="checkout-price-block">
            <span className="checkout-meta-label">Стоимость</span>
            <strong>{selectedPackage.price}</strong>
            <span className="checkout-price-caption">
              за {selectedPackage.duration.toLowerCase()}
            </span>
          </div>
        </div>

        <div className="checkout-notice">
          <span className="checkout-status-badge">
            Подключение скоро будет доступно
          </span>
          <p className="checkout-notice-title">
            Платёжный шлюз сейчас настраивается. Оплата этого пакета будет
            доступна в ближайшее время.
          </p>
          <p>
            Пока что вы можете ознакомиться с условиями сервиса или связаться
            через раздел контактов.
          </p>
        </div>

        <div className="checkout-actions">
          <button
            className="button button-primary checkout-primary-action"
            type="button"
            disabled
          >
            Оплата скоро будет доступна
          </button>
          <Link className="button button-secondary" href="/contacts">
            Раздел контактов
          </Link>
        </div>
      </div>
    </div>
  );
}
