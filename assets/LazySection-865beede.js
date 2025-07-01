import { A as ref, C as onMounted, Q as onBeforeUnmount, o as openBlock, c as createElementBlock, k as renderSlot, a as normalizeClass, u as unref } from "./vendor-adf92722.js";
import { _ as _export_sfc } from "./index-b995567e.js";
function useLazySection(props) {
  const lazySection = ref(null);
  const isVisible = ref(false);
  let observer = null;
  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible.value = entry.isIntersecting;
        });
      },
      {
        threshold: props.threshold,
        rootMargin: props.rootMargin
      }
    );
    if (lazySection.value) {
      observer.observe(lazySection.value);
    }
  });
  onBeforeUnmount(() => {
    if (observer && lazySection.value) {
      observer.unobserve(lazySection.value);
      observer.disconnect();
    }
  });
  return {
    lazySection,
    isVisible
  };
}
const LazySection_vue_vue_type_style_index_0_scoped_2e2262ad_lang = "";
const _sfc_main = {
  __name: "LazySection",
  props: {
    threshold: {
      type: Number,
      default: 0.1
    },
    rootMargin: {
      type: String,
      default: "0px"
    }
  },
  setup(__props) {
    const props = __props;
    const { lazySection, isVisible } = useLazySection(props);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "lazySection",
        ref: lazySection,
        class: normalizeClass(["lazy-section", { "lazy-visible": unref(isVisible), "lazy-hidden": !unref(isVisible) }])
      }, [
        renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ], 2);
    };
  }
};
const LazySection = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2e2262ad"]]);
export {
  LazySection as L
};
