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
        onClick={(event) => event.stopPropagation()}
      >
        <div className="checkout-modal-head">
          <div>
            <span className="label">Оформление</span>
            <h2 id="checkout-title">Protected connection service</h2>
          </div>
          <button
            className="checkout-close"
            type="button"
            onClick={onClose}
            aria-label="Закрыть окно оформления"
          >
            Закрыть
          </button>
        </div>

        <div className="checkout-package-card">
          <div>
            <span className="checkout-meta-label">Выбранный пакет</span>
            <strong>{selectedPackage.name}</strong>
          </div>
          <div>
            <span className="checkout-meta-label">Стоимость</span>
            <strong>{selectedPackage.price}</strong>
          </div>
        </div>

        <div className="checkout-notice">
          <p className="checkout-notice-title">
            Платёжный шлюз сейчас настраивается. Оплата будет доступна в ближайшее
            время.
          </p>
          <p>
            Пока что вы можете ознакомиться с условиями сервиса или связаться через
            контакты.
          </p>
        </div>

        <div className="checkout-actions">
          <button className="button button-primary" type="button" disabled>
            Оплата скоро появится
          </button>
          <Link className="button button-secondary" href="/contacts">
            Раздел контактов
          </Link>
        </div>
      </div>
    </div>
  );
}
