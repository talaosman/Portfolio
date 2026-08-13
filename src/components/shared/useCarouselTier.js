import { useEffect, useState } from "react";

// react-slick's built-in `responsive` prop detects breakpoints via
// matchMedia().addListener(), which only fires on a state *change* —
// it never fires for whatever already matches at mount. That means a
// carousel loaded directly on a phone gets stuck with desktop settings
// forever, since no resize crosses a breakpoint. This hook tracks the
// viewport ourselves and resolves the right tier synchronously.
const resolveTier = (tiers, width) =>
  tiers.find((tier) => width <= tier.max) || tiers[tiers.length - 1];

const useCarouselTier = (tiers) => {
  const [tier, setTier] = useState(() =>
    resolveTier(tiers, window.innerWidth)
  );

  useEffect(() => {
    const onResize = () => setTier(resolveTier(tiers, window.innerWidth));
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return tier;
};

export default useCarouselTier;
