import Link from "next/link";
import { Container } from "@/components/container";
import { brandName, contactDetails, legalNav, primaryNav } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <Container>
        <div className="footer-grid">
          <div>
            <Link className="brand" href="/">
              <span className="brand-mark" aria-hidden="true" />
              <span>{brandName}</span>
            </Link>
            <p className="footer-note">
              Сервис для личного использования с аккуратным акцентом на стабильность
              подключения, защиту трафика и понятную поддержку.
            </p>
            <div className="footer-meta">
              <span>{contactDetails.city}</span>
              <a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a>
              <span>{contactDetails.supportHours}</span>
            </div>
          </div>

          <div>
            <p className="footer-title">Навигация</p>
            <div className="footer-links">
              {primaryNav.map((item) => (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="footer-title">Документы</p>
            <div className="footer-links">
              {legalNav.map((item) => (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              ))}
              <Link href="/contacts">Контакты</Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
