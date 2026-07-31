import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Smoothly scrolls to the element matching location.hash whenever the
 * route or hash changes. Retries briefly while the route is still mounting.
 */
export const useScrollToHash = () => {
  const { hash, pathname } = useLocation();

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
        el.scrollIntoView({ behavior: "smooth" });
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
  }, [hash, pathname]);
};

export default useScrollToHash;
