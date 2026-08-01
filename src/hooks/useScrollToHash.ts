import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

/**
 * Handles scroll behavior on route changes.
 *
 * 1. If `location.hash` is present: smoothly scroll to the matching element,
 *    retrying briefly while the route is still mounting.
 * 2. If `location.hash` is empty and the pathname has changed: instantly scroll
 *    to the top of the page so route navigation feels like a normal page load.
 *
 * Including `key` makes repeated clicks on the same hash link (e.g. Home -> /#hero)
 * re-trigger the scroll.
 */
export const useScrollToHash = () => {
  const { hash, pathname, key } = useLocation();
  const previousPathname = useRef(pathname);

  useEffect(() => {
    // Case 1: hash link -> smooth scroll to target element.
    if (hash) {
      const id = decodeURIComponent(hash.slice(1));
      let frame = 0;
      let timer: number | undefined;
      let cancelled = false;

      const tryScroll = () => {
        if (cancelled) return;
        const el = document.getElementById(id);
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({ top: top <= 120 ? 0 : top, behavior: "smooth" });
          return;
        }
        if (frame++ < 40) {
          timer = window.setTimeout(tryScroll, 50);
        }
      };

      tryScroll();

      return () => {
        cancelled = true;
        if (timer) window.clearTimeout(timer);
      };
    }

    // Case 2: no hash and pathname changed -> instant scroll to top.
    if (pathname !== previousPathname.current) {
      window.scrollTo(0, 0);
    }

    previousPathname.current = pathname;
  }, [hash, pathname, key]);
};

export default useScrollToHash;
