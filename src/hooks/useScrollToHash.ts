import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Smoothly scrolls to the element matching location.hash whenever the
 * route, hash, or navigation entry changes. Retries briefly while the
 * route is still mounting. Including `key` makes repeated clicks on the
 * same hash link (e.g. Home -> /#hero) re-trigger the scroll.
 */
export const useScrollToHash = () => {
  const { hash, pathname, key } = useLocation();

  useEffect(() => {
    if (!hash) return;

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
  }, [hash, pathname, key]);
};

export default useScrollToHash;
