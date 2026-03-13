"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Container } from "@/components/container";
import { brandName, headerCta, primaryNav } from "@/lib/site";

const navAriaLabel = "\u041e\u0441\u043d\u043e\u0432\u043d\u0430\u044f \u043d\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u044f";
const menuLabel = "\u041c\u0435\u043d\u044e";
const menuTitle = "\u041d\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u044f";
const openMenuLabel = "\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u043c\u0435\u043d\u044e";
const closeMenuLabel = "\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u043c\u0435\u043d\u044e";
const closeLabel = "\u0417\u0430\u043a\u0440\u044b\u0442\u044c";
const menuDescription =
  "\u041e\u0441\u043d\u043e\u0432\u043d\u044b\u0435 \u0440\u0430\u0437\u0434\u0435\u043b\u044b, \u0442\u0430\u0440\u0438\u0444\u044b \u0438 \u0431\u044b\u0441\u0442\u0440\u044b\u0435 \u043f\u0435\u0440\u0435\u0445\u043e\u0434\u044b \u043f\u043e \u0441\u0430\u0439\u0442\u0443.";
const setupMenuTitle = "\u0420\u0435\u0436\u0438\u043c setup";
const setupMenuDescription =
  "\u041a\u043e\u043c\u043f\u0430\u043a\u0442\u043d\u0430\u044f \u043d\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u044f \u0434\u043b\u044f \u0438\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u0439 \u0438 \u043e\u0441\u043d\u043e\u0432\u043d\u044b\u0445 \u0440\u0430\u0437\u0434\u0435\u043b\u043e\u0432 \u0441\u0430\u0439\u0442\u0430.";
const setupShortcutLabel = "\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u0438";
const setupShortcutTitle =
  "\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043a \u0432\u044b\u0431\u043e\u0440\u0443 \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u044b";
const setupShortcutCta = "\u0412\u0441\u0435 \u0438\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u0438";
const supportLabel = "\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b";

function isActivePath(pathname: string, href: string) {
  if (href === "/") {
    return pathname === href;
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

function joinClassNames(...classNames: Array<string | false | null | undefined>) {
  return classNames.filter(Boolean).join(" ");
}

export function SiteHeader() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isSetupRoute = pathname === "/setup" || pathname.startsWith("/setup/");
  const isSetupGuideRoute = pathname.startsWith("/setup/");

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isMenuOpen) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  return (
    <header
      className={joinClassNames(
        "site-header",
        isSetupRoute && "is-setup-flow",
        isMenuOpen && "is-menu-open",
      )}
    >
      <Container className="header-inner">
        <Link className="brand" href="/">
          <span className="brand-mark" aria-hidden="true" />
          <span className="brand-name">{brandName}</span>
        </Link>

        <nav className="nav header-desktop-nav" aria-label={navAriaLabel}>
          {primaryNav.map((item) => {
            const isActive = isActivePath(pathname, item.href);

            return (
              <Link
                key={item.href}
                className={joinClassNames("nav-link", isActive && "is-active")}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="header-actions">
          <Link className="button button-primary header-desktop-cta" href={headerCta.href}>
            {headerCta.label}
          </Link>

          <button
            type="button"
            className="mobile-menu-toggle"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-site-nav"
            aria-label={isMenuOpen ? closeMenuLabel : openMenuLabel}
            onClick={() => setIsMenuOpen((currentValue) => !currentValue)}
          >
            <span className="mobile-menu-toggle-box" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
            <span className="mobile-menu-toggle-label" aria-hidden="true">
              {isMenuOpen ? closeLabel : menuLabel}
            </span>
          </button>
        </div>
      </Container>

      <div
        id="mobile-site-nav"
        className={joinClassNames("mobile-nav-shell", isMenuOpen && "is-open")}
        role="dialog"
        aria-modal="true"
        aria-label={menuTitle}
        aria-hidden={!isMenuOpen}
      >
        <button
          type="button"
          className="mobile-nav-backdrop"
          aria-label={closeMenuLabel}
          tabIndex={isMenuOpen ? 0 : -1}
          onClick={() => setIsMenuOpen(false)}
        />

        <div className="mobile-nav-panel">
          <div className="mobile-nav-header">
            <div className="mobile-nav-copy">
              <span className="mobile-nav-eyebrow">
                {isSetupGuideRoute ? setupMenuTitle : menuTitle}
              </span>
              <strong>{brandName}</strong>
              <p>{isSetupGuideRoute ? setupMenuDescription : menuDescription}</p>
            </div>

            <button
              type="button"
              className="mobile-nav-close"
              aria-label={closeMenuLabel}
              onClick={() => setIsMenuOpen(false)}
            >
              <span aria-hidden="true">&#215;</span>
            </button>
          </div>

          {isSetupGuideRoute ? (
            <Link
              className="mobile-nav-context"
              href="/setup"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="mobile-nav-context-label">{setupShortcutLabel}</span>
              <strong>{setupShortcutTitle}</strong>
            </Link>
          ) : null}

          <nav className="mobile-nav" aria-label={navAriaLabel}>
            {primaryNav.map((item) => {
              const isActive = isActivePath(pathname, item.href);

              return (
                <Link
                  key={item.href}
                  className={joinClassNames("mobile-nav-link", isActive && "is-active")}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span>{item.label}</span>
                  <span className="mobile-nav-link-marker" aria-hidden="true" />
                </Link>
              );
            })}
          </nav>

          <div className="mobile-nav-actions">
            <Link
              className="button button-primary mobile-nav-cta"
              href={isSetupGuideRoute ? "/setup" : headerCta.href}
              onClick={() => setIsMenuOpen(false)}
            >
              {isSetupGuideRoute ? setupShortcutCta : headerCta.label}
            </Link>

            <Link
              className="button button-secondary mobile-nav-secondary"
              href={isSetupGuideRoute ? headerCta.href : "/contacts"}
              onClick={() => setIsMenuOpen(false)}
            >
              {isSetupGuideRoute ? headerCta.label : supportLabel}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
