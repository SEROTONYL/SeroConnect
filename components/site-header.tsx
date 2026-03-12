import Link from "next/link";
import { Container } from "@/components/container";
import { brandName, primaryNav } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Container className="header-inner">
        <Link className="brand" href="/">
          <span className="brand-mark" aria-hidden="true" />
          <span>{brandName}</span>
        </Link>

        <nav className="nav" aria-label="Основная навигация">
          {primaryNav.map((item) => (
            <Link key={item.href} className="nav-link" href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <Link className="button button-primary" href="/pricing">
          Выбрать тариф
        </Link>
      </Container>
    </header>
  );
}
