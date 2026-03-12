import type { Metadata } from "next";
import { Container } from "@/components/container";
import { PricingCheckoutFlow } from "@/components/pricing-checkout-flow";

export const metadata: Metadata = {
  title: "Пакеты услуг",
  description:
    "Выбор пакета услуг для защищённого подключения с мини-корзиной и предпросмотром оформления без реальной оплаты.",
};

export default function PricingPage() {
  return (
    <div className="page-shell">
      <Container>
        <PricingCheckoutFlow />
      </Container>
    </div>
  );
}
