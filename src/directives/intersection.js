export const IntersectionDirective = {
  inserted(el, bindings, vnode) {
    const observer = new IntersectionObserver(
      ([first] = []) => {
        if (first && first.isIntersecting) {
          vnode.elm.dispatchEvent(
            new CustomEvent("intersects")
          );
        }
      },
      { root: bindings.value }
    );
    observer.observe(el);
  }
};
