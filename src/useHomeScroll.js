import { useEffect } from "react";

export default function useHomeScroll(scrollRef, enabled) {
  useEffect(() => {
    const container = scrollRef.current;
    if (!enabled || !container) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointer = window.matchMedia("(pointer: fine)");
    let frame = 0;
    let target = container.scrollTop;
    let lastTime = 0;

    const stop = () => {
      window.cancelAnimationFrame(frame);
      frame = 0;
      lastTime = 0;
      target = container.scrollTop;
    };

    const animate = (time) => {
      target = Math.max(0, Math.min(target, container.scrollHeight - container.clientHeight));
      const elapsed = lastTime ? Math.min(time - lastTime, 64) : 16.7;
      lastTime = time;
      const distance = target - container.scrollTop;
      if (Math.abs(distance) < 0.5) {
        container.scrollTo({ top: target, behavior: "instant" });
        frame = 0;
        lastTime = 0;
        return;
      }
      container.scrollTo({
        top: container.scrollTop + distance * (1 - Math.exp(-elapsed / 90)),
        behavior: "instant"
      });
      frame = window.requestAnimationFrame(animate);
    };

    const onWheel = (event) => {
      if (reducedMotion.matches || !finePointer.matches || event.ctrlKey || Math.abs(event.deltaX) > Math.abs(event.deltaY)) return;
      if (event.target instanceof Element && event.target.closest("input, textarea, select, [contenteditable='true'], [data-native-scroll]")) return;
      const unit = event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? container.clientHeight : 1;
      const next = Math.max(0, Math.min(container.scrollHeight - container.clientHeight, (frame ? target : container.scrollTop) + event.deltaY * unit));
      if (!frame && next === container.scrollTop) return;
      event.preventDefault();
      target = next;
      if (!frame) frame = window.requestAnimationFrame(animate);
    };

    container.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("pointerdown", stop, { passive: true });
    window.addEventListener("keydown", stop);
    reducedMotion.addEventListener("change", stop);
    finePointer.addEventListener("change", stop);
    return () => {
      stop();
      container.removeEventListener("wheel", onWheel);
      window.removeEventListener("pointerdown", stop);
      window.removeEventListener("keydown", stop);
      reducedMotion.removeEventListener("change", stop);
      finePointer.removeEventListener("change", stop);
    };
  }, [scrollRef, enabled]);
}
