const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const revealItems = document.querySelectorAll(".reveal");
const showAll = () => revealItems.forEach((item) => item.classList.add("is-visible"));
let observer;

if (prefersReducedMotion.matches || !("IntersectionObserver" in window)) {
  showAll();
} else {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.16,
      rootMargin: "0px 0px -8% 0px",
    }
  );

  revealItems.forEach((item) => observer.observe(item));
}

const handleReducedMotionChange = (event) => {
  if (!event.matches) {
    return;
  }

  observer?.disconnect();
  showAll();
};

if ("addEventListener" in prefersReducedMotion) {
  prefersReducedMotion.addEventListener("change", handleReducedMotionChange);
} else if ("addListener" in prefersReducedMotion) {
  prefersReducedMotion.addListener(handleReducedMotionChange);
}
