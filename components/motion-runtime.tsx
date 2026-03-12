"use client";

import { useEffect } from "react";
import { revealSelector, resolveMotionRevealVariant } from "@/lib/motion";

export function MotionRuntime() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const seen = new WeakSet<Element>();

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          const element = entry.target as HTMLElement;
          element.dataset.motionState = "visible";
          revealObserver.unobserve(element);
        });
      },
      {
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.12,
      },
    );

    const setupElement = (element: Element) => {
      if (!(element instanceof HTMLElement) || seen.has(element)) {
        return;
      }

      seen.add(element);
      element.dataset.motionReveal = resolveMotionRevealVariant(element);

      const rect = element.getBoundingClientRect();
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
      const startsInView = rect.top <= viewportHeight * 0.9;

      if (startsInView) {
        element.dataset.motionState = "visible";
        return;
      }

      element.dataset.motionState = "pending";
      revealObserver.observe(element);
    };

    const processTree = (root: ParentNode) => {
      if (root instanceof Element && root.matches(revealSelector)) {
        setupElement(root);
      }

      root.querySelectorAll(revealSelector).forEach(setupElement);
    };

    processTree(document);

    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node instanceof Element) {
            processTree(node);
          }
        });
      });
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      mutationObserver.disconnect();
      revealObserver.disconnect();
    };
  }, []);

  return null;
}
