import { _ as _export_sfc, u as useColorStore } from "./index-b2bf28ff.js";
import { B as useI18n, o as openBlock, c as createElementBlock, h as createBaseVNode, n as normalizeStyle, u as unref, f as toDisplayString, e as createTextVNode, z as defineStore, S as reactive, A as ref, E as withDirectives, U as vModelText, g as createCommentVNode, q as createVNode, w as withCtx } from "./vendor-adf92722.js";
import { u as useContactInfo } from "./useContactInfo-70322d11.js";
import { u as useToast } from "./vendor-toast-e005dfbd.js";
import { L as LazySection } from "./LazySection-f534b61a.js";
const ContactInfoSection_vue_vue_type_style_index_0_scoped_9b087945_lang = "";
const _hoisted_1$2 = { class: "flex items-center mb-6" };
const _hoisted_2$2 = { class: "text-2xl font-semibold text-gray-900 dark:text-white" };
const _hoisted_3$2 = { class: "flex items-center mb-5" };
const _hoisted_4$2 = { class: "text-sm font-medium text-gray-500 dark:text-gray-400" };
const _hoisted_5$2 = { class: "flex items-center mb-5" };
const _hoisted_6$1 = { class: "text-sm font-medium text-gray-500 dark:text-gray-400" };
const _hoisted_7$1 = { class: "flex items-center mb-5" };
const _hoisted_8$1 = { class: "flex items-center mb-5" };
const _hoisted_9$1 = { class: "text-sm font-medium text-gray-500 dark:text-gray-400" };
const _hoisted_10$1 = { class: "text-base font-medium text-gray-900 dark:text-white" };
const _hoisted_11$1 = { class: "text-lg font-medium text-gray-900 dark:text-white mb-4" };
const _hoisted_12$1 = {
  href: "https://github.com/vanminhtruong/Team03-cy.git",
  target: "_blank",
  rel: "noopener noreferrer",
  class: "flex items-center mb-3 group"
};
const _hoisted_13$1 = {
  href: "https://github.com/vanminhtruong/libary",
  target: "_blank",
  rel: "noopener noreferrer",
  class: "flex items-center mb-3 group"
};
const _hoisted_14$1 = {
  href: "#",
  target: "_blank",
  rel: "noopener noreferrer",
  class: "flex items-center mb-5 group"
};
const _hoisted_15$1 = ["href"];
const _sfc_main$2 = {
  __name: "ContactInfoSection",
  setup(__props) {
    const colorStore = useColorStore();
    const { t } = useI18n();
    const { contactItems, getPdfPath } = useContactInfo();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-8 transform hover:-translate-y-1 border-l-4 h-full flex flex-col",
        style: normalizeStyle({ "border-color": unref(colorStore).currentColor.primary })
      }, [
        createBaseVNode("div", _hoisted_1$2, [
          createBaseVNode("div", {
            class: "h-12 w-12 rounded-lg flex items-center justify-center mr-3",
            style: normalizeStyle({ "background-color": unref(colorStore).currentColor.primary })
          }, _cache[0] || (_cache[0] = [
            createBaseVNode("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              class: "h-7 w-7 text-white",
              fill: "none",
              viewBox: "0 0 24 24",
              stroke: "currentColor"
            }, [
              createBaseVNode("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              })
            ], -1)
          ]), 4),
          createBaseVNode("h3", _hoisted_2$2, toDisplayString(unref(t)("contact.title")), 1)
        ]),
        createBaseVNode("div", _hoisted_3$2, [
          createBaseVNode("div", {
            class: "h-12 w-12 rounded-lg flex items-center justify-center mr-4",
            style: normalizeStyle({ "background-color": unref(colorStore).currentColor.primary + "20" })
          }, [
            (openBlock(), createElementBlock("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              class: "h-6 w-6",
              fill: "none",
              viewBox: "0 0 24 24",
              stroke: "currentColor",
              style: normalizeStyle({ "color": unref(colorStore).currentColor.primary })
            }, _cache[1] || (_cache[1] = [
              createBaseVNode("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              }, null, -1)
            ]), 4))
          ], 4),
          createBaseVNode("div", null, [
            createBaseVNode("div", _hoisted_4$2, toDisplayString(unref(t)("about.phone")), 1),
            _cache[2] || (_cache[2] = createBaseVNode("a", {
              href: "tel:0982743860",
              class: "text-base font-medium text-gray-900 dark:text-white"
            }, "0982743860", -1))
          ])
        ]),
        createBaseVNode("div", _hoisted_5$2, [
          createBaseVNode("div", {
            class: "h-12 w-12 rounded-lg flex items-center justify-center mr-4",
            style: normalizeStyle({ "background-color": unref(colorStore).currentColor.primary + "20" })
          }, [
            (openBlock(), createElementBlock("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              class: "h-6 w-6",
              fill: "none",
              viewBox: "0 0 24 24",
              stroke: "currentColor",
              style: normalizeStyle({ "color": unref(colorStore).currentColor.primary })
            }, _cache[3] || (_cache[3] = [
              createBaseVNode("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              }, null, -1)
            ]), 4))
          ], 4),
          createBaseVNode("div", null, [
            createBaseVNode("div", _hoisted_6$1, toDisplayString(unref(t)("about.email")), 1),
            _cache[4] || (_cache[4] = createBaseVNode("a", {
              href: "mailto:vanminhtruong95@gmail.com",
              class: "text-base font-medium text-gray-900 dark:text-white"
            }, "vanminhtruong95@gmail.com", -1))
          ])
        ]),
        createBaseVNode("div", _hoisted_7$1, [
          createBaseVNode("div", {
            class: "h-12 w-12 rounded-lg flex items-center justify-center mr-4",
            style: normalizeStyle({ "background-color": unref(colorStore).currentColor.primary + "20" })
          }, [
            (openBlock(), createElementBlock("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              class: "h-6 w-6",
              viewBox: "0 0 24 24",
              fill: "currentColor",
              style: normalizeStyle({ "color": unref(colorStore).currentColor.primary })
            }, _cache[5] || (_cache[5] = [
              createBaseVNode("path", { d: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" }, null, -1)
            ]), 4))
          ], 4),
          _cache[6] || (_cache[6] = createBaseVNode("div", null, [
            createBaseVNode("div", { class: "text-sm font-medium text-gray-500 dark:text-gray-400" }, "GitHub"),
            createBaseVNode("a", {
              href: "https://github.com/vanminhtruong",
              target: "_blank",
              rel: "noopener noreferrer",
              class: "text-base font-medium text-gray-900 dark:text-white"
            }, "vanminhtruong")
          ], -1))
        ]),
        createBaseVNode("div", _hoisted_8$1, [
          createBaseVNode("div", {
            class: "h-12 w-12 rounded-lg flex items-center justify-center mr-4",
            style: normalizeStyle({ "background-color": unref(colorStore).currentColor.primary + "20" })
          }, [
            (openBlock(), createElementBlock("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              class: "h-6 w-6",
              fill: "none",
              viewBox: "0 0 24 24",
              stroke: "currentColor",
              style: normalizeStyle({ "color": unref(colorStore).currentColor.primary })
            }, _cache[7] || (_cache[7] = [
              createBaseVNode("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              }, null, -1),
              createBaseVNode("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              }, null, -1)
            ]), 4))
          ], 4),
          createBaseVNode("div", null, [
            createBaseVNode("div", _hoisted_9$1, toDisplayString(unref(t)("about.address")), 1),
            createBaseVNode("div", _hoisted_10$1, toDisplayString(unref(t)("about.addressValue")), 1)
          ])
        ]),
        _cache[12] || (_cache[12] = createBaseVNode("div", { class: "border-t border-gray-200 dark:border-gray-700 my-4" }, null, -1)),
        createBaseVNode("h4", _hoisted_11$1, toDisplayString(unref(t)("nav.links")), 1),
        createBaseVNode("a", _hoisted_12$1, [
          createBaseVNode("div", {
            class: "h-10 w-10 rounded-full flex items-center justify-center mr-3",
            style: normalizeStyle({ "background-color": unref(colorStore).currentColor.primary })
          }, _cache[8] || (_cache[8] = [
            createBaseVNode("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              class: "h-6 w-6 text-white",
              viewBox: "0 0 24 24",
              fill: "currentColor"
            }, [
              createBaseVNode("path", { d: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" })
            ], -1)
          ]), 4),
          createBaseVNode("span", {
            class: "text-base font-medium group-hover:text-opacity-80 transition-all duration-300",
            style: normalizeStyle({ "color": unref(colorStore).currentColor.primary })
          }, toDisplayString(unref(t)("contact.githubProject")), 5)
        ]),
        createBaseVNode("a", _hoisted_13$1, [
          createBaseVNode("div", {
            class: "h-10 w-10 rounded-full flex items-center justify-center mr-3",
            style: normalizeStyle({ "background-color": unref(colorStore).currentColor.primary })
          }, _cache[9] || (_cache[9] = [
            createBaseVNode("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              class: "h-6 w-6 text-white",
              fill: "none",
              viewBox: "0 0 24 24",
              stroke: "currentColor"
            }, [
              createBaseVNode("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              })
            ], -1)
          ]), 4),
          createBaseVNode("span", {
            class: "text-base font-medium group-hover:text-opacity-80 transition-all duration-300",
            style: normalizeStyle({ "color": unref(colorStore).currentColor.primary })
          }, toDisplayString(unref(t)("contact.libraryProject")), 5)
        ]),
        createBaseVNode("a", _hoisted_14$1, [
          createBaseVNode("div", {
            class: "h-10 w-10 rounded-full flex items-center justify-center mr-3",
            style: normalizeStyle({ "background-color": unref(colorStore).currentColor.primary })
          }, _cache[10] || (_cache[10] = [
            createBaseVNode("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              class: "h-6 w-6 text-white",
              fill: "none",
              viewBox: "0 0 24 24",
              stroke: "currentColor"
            }, [
              createBaseVNode("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
              })
            ], -1)
          ]), 4),
          createBaseVNode("span", {
            class: "text-base font-medium group-hover:text-opacity-80 transition-all duration-300",
            style: normalizeStyle({ "color": unref(colorStore).currentColor.primary })
          }, toDisplayString(unref(t)("contact.projectWebsite")), 5)
        ]),
        createBaseVNode("a", {
          href: unref(getPdfPath)(),
          class: "inline-flex items-center justify-center py-2 px-4 rounded-md text-white font-medium transition-all duration-300 hover:opacity-90 mt-2 bg-red-500 hover:bg-red-600 w-auto self-start"
        }, [
          _cache[11] || (_cache[11] = createBaseVNode("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            class: "h-5 w-5 mr-2",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor"
          }, [
            createBaseVNode("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": "2",
              d: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            })
          ], -1)),
          createTextVNode(" " + toDisplayString(unref(t)("home.downloadCV")), 1)
        ], 8, _hoisted_15$1)
      ], 4);
    };
  }
};
const ContactInfoSection = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-9b087945"]]);
const useToastStore = defineStore("toast", () => {
  const toast = useToast();
  const colorStore = useColorStore();
  const getCommonOptions = () => {
    return {
      position: "top-right",
      toastClassName: "custom-toast",
      bodyClassName: "custom-toast-body",
      closeButton: false,
      icon: true,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnFocusLoss: true,
      pauseOnHover: true,
      draggable: true,
      draggablePercent: 0.6,
      showCloseButtonOnHover: false,
      rtl: false,
      style: {
        "--color-primary": colorStore.currentColor.primary,
        "--color-secondary": colorStore.currentColor.secondary,
        "--color-accent": colorStore.currentColor.accent
      }
    };
  };
  function showSuccess(message) {
    const options = getCommonOptions();
    options.timeout = 3e3;
    toast.success(message, options);
  }
  function showError(message) {
    const options = getCommonOptions();
    options.timeout = 4e3;
    toast.error(message, options);
  }
  function showInfo(message) {
    const options = getCommonOptions();
    options.timeout = 3e3;
    toast.info(message, options);
  }
  function showWarning(message) {
    const options = getCommonOptions();
    options.timeout = 3500;
    toast.warning(message, options);
  }
  return {
    showSuccess,
    showError,
    showInfo,
    showWarning
  };
});
const _hoisted_1$1 = { class: "flex items-center mb-6" };
const _hoisted_2$1 = { class: "text-2xl font-semibold text-gray-900 dark:text-white" };
const _hoisted_3$1 = { class: "group" };
const _hoisted_4$1 = {
  for: "name",
  class: "block text-sm font-medium text-gray-700 dark:text-white mb-1 transition-colors duration-200"
};
const _hoisted_5$1 = { class: "relative" };
const _hoisted_6 = ["placeholder"];
const _hoisted_7 = { class: "group" };
const _hoisted_8 = {
  for: "email",
  class: "block text-sm font-medium text-gray-700 dark:text-white mb-1 transition-colors duration-200"
};
const _hoisted_9 = { class: "relative" };
const _hoisted_10 = ["placeholder"];
const _hoisted_11 = { class: "group" };
const _hoisted_12 = {
  for: "subject",
  class: "block text-sm font-medium text-gray-700 dark:text-white mb-1 transition-colors duration-200"
};
const _hoisted_13 = { class: "relative" };
const _hoisted_14 = ["placeholder"];
const _hoisted_15 = { class: "group" };
const _hoisted_16 = {
  for: "message",
  class: "block text-sm font-medium text-gray-700 dark:text-white mb-1 transition-colors duration-200"
};
const _hoisted_17 = { class: "relative" };
const _hoisted_18 = ["placeholder"];
const _hoisted_19 = ["disabled"];
const _hoisted_20 = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 mr-2",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
};
const _hoisted_21 = {
  key: 1,
  class: "animate-spin h-5 w-5 mr-2",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24"
};
const _sfc_main$1 = {
  __name: "ContactFormSection",
  setup(__props) {
    const colorStore = useColorStore();
    const toastStore = useToastStore();
    const { t } = useI18n();
    const formData = reactive({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
    const isSubmitting = ref(false);
    const validateEmail = (email) => {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    };
    const validateForm = () => {
      if (!formData.name.trim()) {
        toastStore.showError(t("contact.errors.nameRequired"));
        return false;
      }
      if (!formData.email.trim()) {
        toastStore.showError(t("contact.errors.emailRequired"));
        return false;
      } else if (!validateEmail(formData.email)) {
        toastStore.showError(t("contact.errors.emailInvalid"));
        return false;
      }
      if (!formData.subject.trim()) {
        toastStore.showError(t("contact.errors.subjectRequired"));
        return false;
      }
      if (!formData.message.trim()) {
        toastStore.showError(t("contact.errors.messageRequired"));
        return false;
      } else if (formData.message.trim().length < 10) {
        toastStore.showError(t("contact.errors.messageTooShort"));
        return false;
      }
      return true;
    };
    const handleSubmit = async (e) => {
      e.preventDefault();
      if (!validateForm()) {
        return;
      }
      isSubmitting.value = true;
      try {
        await new Promise((resolve) => setTimeout(resolve, 1e3));
        toastStore.showSuccess(t("contact.success"));
        formData.name = "";
        formData.email = "";
        formData.subject = "";
        formData.message = "";
      } catch (error) {
        toastStore.showError(t("contact.error"));
      } finally {
        isSubmitting.value = false;
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-8 transform hover:-translate-y-1 border-r-4 h-full flex flex-col",
        style: normalizeStyle({ "border-color": unref(colorStore).currentColor.primary })
      }, [
        createBaseVNode("div", _hoisted_1$1, [
          createBaseVNode("div", {
            class: "h-10 w-10 rounded-lg flex items-center justify-center mr-3",
            style: normalizeStyle({ "background-image": `linear-gradient(to right, ${unref(colorStore).currentColor.primary}, ${unref(colorStore).currentColor.secondary})` })
          }, _cache[4] || (_cache[4] = [
            createBaseVNode("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              class: "h-6 w-6 text-white",
              fill: "none",
              viewBox: "0 0 24 24",
              stroke: "currentColor"
            }, [
              createBaseVNode("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
              })
            ], -1)
          ]), 4),
          createBaseVNode("h3", _hoisted_2$1, toDisplayString(unref(t)("contact.send")), 1)
        ]),
        createBaseVNode("form", {
          onSubmit: handleSubmit,
          class: "space-y-6 flex-grow"
        }, [
          createBaseVNode("div", _hoisted_3$1, [
            createBaseVNode("label", _hoisted_4$1, toDisplayString(unref(t)("contact.name")), 1),
            createBaseVNode("div", _hoisted_5$1, [
              _cache[5] || (_cache[5] = createBaseVNode("div", { class: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none" }, [
                createBaseVNode("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  class: "h-5 w-5 text-gray-500 dark:text-white transition-colors duration-200",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  stroke: "currentColor"
                }, [
                  createBaseVNode("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "2",
                    d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  })
                ])
              ], -1)),
              withDirectives(createBaseVNode("input", {
                type: "text",
                id: "name",
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => formData.name = $event),
                class: "w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 placeholder-gray-400 dark:placeholder-gray-300 transition-all duration-200",
                style: normalizeStyle({ "--tw-ring-color": unref(colorStore).currentColor.primary, "border-color": unref(colorStore).currentColor.primary }),
                placeholder: unref(t)("contact.namePlaceholder")
              }, null, 12, _hoisted_6), [
                [vModelText, formData.name]
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_7, [
            createBaseVNode("label", _hoisted_8, toDisplayString(unref(t)("contact.email")), 1),
            createBaseVNode("div", _hoisted_9, [
              _cache[6] || (_cache[6] = createBaseVNode("div", { class: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none" }, [
                createBaseVNode("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  class: "h-5 w-5 text-gray-500 dark:text-white transition-colors duration-200",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  stroke: "currentColor"
                }, [
                  createBaseVNode("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "2",
                    d: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  })
                ])
              ], -1)),
              withDirectives(createBaseVNode("input", {
                type: "email",
                id: "email",
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => formData.email = $event),
                class: "w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 placeholder-gray-400 dark:placeholder-gray-300 transition-all duration-200",
                style: normalizeStyle({ "--tw-ring-color": unref(colorStore).currentColor.primary, "border-color": unref(colorStore).currentColor.primary }),
                placeholder: unref(t)("contact.emailPlaceholder")
              }, null, 12, _hoisted_10), [
                [vModelText, formData.email]
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_11, [
            createBaseVNode("label", _hoisted_12, toDisplayString(unref(t)("contact.subject")), 1),
            createBaseVNode("div", _hoisted_13, [
              _cache[7] || (_cache[7] = createBaseVNode("div", { class: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none" }, [
                createBaseVNode("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  class: "h-5 w-5 text-gray-500 dark:text-white transition-colors duration-200",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  stroke: "currentColor"
                }, [
                  createBaseVNode("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "2",
                    d: "M7 20l4-16m2 16l4-16M6 9h14M4 15h14"
                  })
                ])
              ], -1)),
              withDirectives(createBaseVNode("input", {
                type: "text",
                id: "subject",
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => formData.subject = $event),
                class: "w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 placeholder-gray-400 dark:placeholder-gray-300 transition-all duration-200",
                style: normalizeStyle({ "--tw-ring-color": unref(colorStore).currentColor.primary, "border-color": unref(colorStore).currentColor.primary }),
                placeholder: unref(t)("contact.subjectPlaceholder")
              }, null, 12, _hoisted_14), [
                [vModelText, formData.subject]
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_15, [
            createBaseVNode("label", _hoisted_16, toDisplayString(unref(t)("contact.message")), 1),
            createBaseVNode("div", _hoisted_17, [
              _cache[8] || (_cache[8] = createBaseVNode("div", { class: "absolute top-3 left-3 flex items-start pointer-events-none" }, [
                createBaseVNode("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  class: "h-5 w-5 text-gray-500 dark:text-white transition-colors duration-200",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  stroke: "currentColor"
                }, [
                  createBaseVNode("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "2",
                    d: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  })
                ])
              ], -1)),
              withDirectives(createBaseVNode("textarea", {
                id: "message",
                "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => formData.message = $event),
                rows: "5",
                class: "w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 placeholder-gray-400 dark:placeholder-gray-300 transition-all duration-200",
                style: normalizeStyle({ "--tw-ring-color": unref(colorStore).currentColor.primary, "border-color": unref(colorStore).currentColor.primary }),
                placeholder: unref(t)("contact.messagePlaceholder")
              }, null, 12, _hoisted_18), [
                [vModelText, formData.message]
              ])
            ])
          ]),
          createBaseVNode("div", null, [
            createBaseVNode("button", {
              type: "submit",
              class: "w-full text-white font-medium py-3 px-4 rounded-lg shadow-md hover:brightness-90 focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center",
              style: normalizeStyle({ "background-color": unref(colorStore).currentColor.primary, "--tw-ring-color": unref(colorStore).currentColor.primary }),
              disabled: isSubmitting.value
            }, [
              !isSubmitting.value ? (openBlock(), createElementBlock("svg", _hoisted_20, _cache[9] || (_cache[9] = [
                createBaseVNode("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "2",
                  d: "M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                }, null, -1)
              ]))) : createCommentVNode("", true),
              isSubmitting.value ? (openBlock(), createElementBlock("svg", _hoisted_21, _cache[10] || (_cache[10] = [
                createBaseVNode("circle", {
                  class: "opacity-25",
                  cx: "12",
                  cy: "12",
                  r: "10",
                  stroke: "currentColor",
                  "stroke-width": "4"
                }, null, -1),
                createBaseVNode("path", {
                  class: "opacity-75",
                  fill: "currentColor",
                  d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                }, null, -1)
              ]))) : createCommentVNode("", true),
              createTextVNode(" " + toDisplayString(isSubmitting.value ? unref(t)("contact.sending") : unref(t)("contact.send")), 1)
            ], 12, _hoisted_19)
          ])
        ], 32)
      ], 4);
    };
  }
};
const _hoisted_1 = { class: "min-h-screen py-10 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900" };
const _hoisted_2 = { class: "container mx-auto px-4 sm:px-6 lg:px-8" };
const _hoisted_3 = { class: "flex items-center mb-10" };
const _hoisted_4 = { class: "mr-4 hidden md:block" };
const _hoisted_5 = { class: "flex flex-col md:flex-row gap-8 h-full" };
const _sfc_main = {
  __name: "ContactView",
  setup(__props) {
    const colorStore = useColorStore();
    const { t } = useI18n();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createVNode(LazySection, { class: "mb-16" }, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_3, [
                createBaseVNode("div", _hoisted_4, [
                  createBaseVNode("div", {
                    class: "h-12 w-12 rounded-lg flex items-center justify-center shadow-md",
                    style: normalizeStyle({ "background-color": unref(colorStore).currentColor.primary })
                  }, _cache[0] || (_cache[0] = [
                    createBaseVNode("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      class: "h-6 w-6 text-white",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      stroke: "currentColor"
                    }, [
                      createBaseVNode("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "2",
                        d: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      })
                    ], -1)
                  ]), 4)
                ]),
                createBaseVNode("h2", {
                  class: "text-3xl font-bold inline-block pb-2 border-b-4 transform transition-all duration-300 hover:scale-105",
                  style: normalizeStyle({ "border-color": unref(colorStore).currentColor.primary, "color": unref(colorStore).currentColor.primary })
                }, toDisplayString(unref(t)("contact.title").toUpperCase()), 5)
              ]),
              createBaseVNode("div", _hoisted_5, [
                createVNode(LazySection, {
                  class: "w-full md:w-1/2",
                  threshold: "0.1",
                  rootMargin: "50px"
                }, {
                  default: withCtx(() => [
                    createVNode(ContactInfoSection)
                  ]),
                  _: 1
                }),
                createVNode(LazySection, {
                  class: "w-full md:w-1/2",
                  threshold: "0.1",
                  rootMargin: "50px"
                }, {
                  default: withCtx(() => [
                    createVNode(_sfc_main$1)
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
};
export {
  _sfc_main as default
};
