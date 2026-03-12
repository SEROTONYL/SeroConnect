export const motionProfiles = {
  default: "default",
  lively: "lively",
  restrained: "restrained",
} as const;

export type MotionProfile = (typeof motionProfiles)[keyof typeof motionProfiles];

export const motionVariants = {
  pageEnter: "page-enter",
  heroReveal: "hero",
  sectionReveal: "section",
  surfaceReveal: "surface",
  softReveal: "soft",
} as const;

export type MotionRevealVariant =
  (typeof motionVariants)[keyof Pick<
    typeof motionVariants,
    "heroReveal" | "sectionReveal" | "surfaceReveal" | "softReveal"
  >];

export const motionTokens = {
  durations: {
    hover: 180,
    pageEnter: 280,
    reveal: 520,
    revealSoft: 420,
  },
  staggerStep: 60,
  easing: {
    standard: "cubic-bezier(0.22, 1, 0.36, 1)",
    soft: "cubic-bezier(0.24, 0.98, 0.35, 1)",
  },
  distance: {
    pageEnter: 10,
    reveal: 18,
    revealSoft: 12,
    buttonHover: 1,
    surfaceHover: 2,
    featuredSurface: 6,
  },
} as const;

export const revealSelector = [
  ".hero-shell",
  ".page-intro",
  ".section-heading",
  ".faq-preview-footer",
  ".document-surface",
  ".document-section",
  ".card",
  ".panel",
  ".metric",
  ".contact-card",
  ".legal-section",
  ".cta-panel",
  ".site-footer",
].join(", ");

export function resolveMotionRevealVariant(element: Element): MotionRevealVariant {
  const profile =
    element.closest("[data-motion-profile]")?.getAttribute("data-motion-profile") ??
    motionProfiles.default;

  if (
    element.classList.contains("site-footer") ||
    element.classList.contains("legal-section") ||
    element.classList.contains("document-section") ||
    element.classList.contains("document-surface")
  ) {
    return motionVariants.softReveal;
  }

  if (profile === motionProfiles.restrained) {
    return motionVariants.softReveal;
  }

  if (element.classList.contains("hero-shell")) {
    return profile === motionProfiles.lively
      ? motionVariants.heroReveal
      : motionVariants.sectionReveal;
  }

  if (
    element.classList.contains("page-intro") ||
    element.classList.contains("section-heading") ||
    element.classList.contains("faq-preview-footer")
  ) {
    return motionVariants.sectionReveal;
  }

  return motionVariants.surfaceReveal;
}
