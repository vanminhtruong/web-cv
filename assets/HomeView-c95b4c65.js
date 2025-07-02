import { _ as _export_sfc, u as useColorStore, a as useProfileStore, b as useThemeStore } from "./index-b2bf28ff.js";
import { A as ref, C as onMounted, Q as onBeforeUnmount, o as openBlock, c as createElementBlock, h as createBaseVNode, n as normalizeStyle, u as unref, f as toDisplayString, e as createTextVNode, j as withModifiers, g as createCommentVNode, B as useI18n, I as computed, F as Fragment, l as renderList, a as normalizeClass, q as createVNode, b as createBlock, w as withCtx } from "./vendor-adf92722.js";
import { u as useContactInfo } from "./useContactInfo-70322d11.js";
import { L as LazySection } from "./LazySection-f534b61a.js";
import "./vendor-toast-e005dfbd.js";
function useTypingEffect(text, options = {}) {
  const {
    typingSpeed = 150,
    deletingSpeed = 100,
    delayAfterComplete = 2e3,
    delayAfterDelete = 500,
    startDelay = 1e3,
    loop = true
  } = options;
  const displayedText = ref("");
  const isDeleting = ref(false);
  const loopNum = ref(0);
  const currentSpeed = ref(typingSpeed);
  let typingTimer = null;
  const typeEffect = () => {
    const fullText = text;
    if (isDeleting.value) {
      displayedText.value = fullText.substring(0, displayedText.value.length - 1);
      currentSpeed.value = deletingSpeed;
    } else {
      displayedText.value = fullText.substring(0, displayedText.value.length + 1);
      currentSpeed.value = typingSpeed;
    }
    if (!isDeleting.value && displayedText.value === fullText) {
      currentSpeed.value = delayAfterComplete;
      isDeleting.value = true;
    } else if (isDeleting.value && displayedText.value === "") {
      isDeleting.value = false;
      if (loop) {
        loopNum.value++;
      }
      currentSpeed.value = delayAfterDelete;
    }
    if (!loop && isDeleting.value && displayedText.value === "") {
      return;
    }
    typingTimer = setTimeout(typeEffect, currentSpeed.value);
  };
  const startTyping = () => {
    if (typingTimer) {
      clearTimeout(typingTimer);
    }
    typingTimer = setTimeout(typeEffect, startDelay);
  };
  const stopTyping = () => {
    if (typingTimer) {
      clearTimeout(typingTimer);
      typingTimer = null;
    }
  };
  onMounted(() => {
    startTyping();
  });
  onBeforeUnmount(() => {
    stopTyping();
  });
  return {
    displayedText,
    isDeleting,
    loopNum,
    startTyping,
    stopTyping
  };
}
const PDFViewer_vue_vue_type_style_index_0_scoped_436adaf4_lang = "";
const _hoisted_1$4 = { class: "pdf-viewer-container" };
const _hoisted_2$4 = { class: "text-xl font-bold" };
const _hoisted_3$3 = { class: "flex items-center gap-4" };
const _hoisted_4$2 = { class: "zoom-controls flex items-center gap-2" };
const _hoisted_5$2 = { class: "zoom-level" };
const _hoisted_6$2 = {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-6 w-6",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
};
const _hoisted_7$2 = {
  key: 0,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5"
};
const _hoisted_8$2 = {
  key: 1,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M6 18L18 6M6 6l12 12"
};
const _hoisted_9$2 = ["href"];
const _hoisted_10$2 = {
  key: 0,
  class: "pdf-wrapper"
};
const _hoisted_11$2 = ["src"];
const _hoisted_12$2 = {
  key: 1,
  class: "pdf-fallback"
};
const _hoisted_13$2 = { class: "pdf-error-message" };
const _hoisted_14$1 = { class: "flex justify-center gap-4" };
const _hoisted_15$1 = ["href"];
const _hoisted_16$1 = ["href"];
const _sfc_main$4 = {
  __name: "PDFViewer",
  props: {
    isOpen: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: "CV Preview"
    },
    pdfUrl: {
      type: String,
      required: true
    }
  },
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    const colorStore = useColorStore();
    const zoomLevel = ref(1);
    const pdfContainer = ref(null);
    const pdfFrame = ref(null);
    const isFullScreen = ref(false);
    const pdfLoadError = ref(false);
    const emit = __emit;
    const closeModal = () => {
      emit("close");
    };
    const zoomIn = () => {
      if (zoomLevel.value < 4) {
        zoomLevel.value += 0.25;
      }
    };
    const zoomOut = () => {
      if (zoomLevel.value > 0.5) {
        zoomLevel.value -= 0.25;
      }
    };
    const toggleFullScreen = () => {
      if (!document.fullscreenElement) {
        if (pdfFrame.value.requestFullscreen) {
          pdfFrame.value.requestFullscreen();
          isFullScreen.value = true;
        }
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
          isFullScreen.value = false;
        }
      }
    };
    const handleIframeLoad = (event) => {
      try {
        const iframe = event.target;
        const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
        if (iframeDoc.title.includes("404") || iframeDoc.body.textContent.includes("404 Not Found")) {
          pdfLoadError.value = true;
        } else {
          pdfLoadError.value = false;
        }
      } catch (error) {
        pdfLoadError.value = false;
      }
    };
    const handleIframeError = () => {
      pdfLoadError.value = true;
    };
    document.addEventListener("fullscreenchange", () => {
      isFullScreen.value = !!document.fullscreenElement;
    });
    return (_ctx, _cache) => {
      return __props.isOpen ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: "pdf-viewer-modal",
        onClick: withModifiers(closeModal, ["self"])
      }, [
        createBaseVNode("div", _hoisted_1$4, [
          createBaseVNode("div", {
            class: "pdf-viewer-header",
            style: normalizeStyle({ "background-color": unref(colorStore).currentColor.primary })
          }, [
            createBaseVNode("h3", _hoisted_2$4, toDisplayString(__props.title), 1),
            createBaseVNode("div", _hoisted_3$3, [
              createBaseVNode("div", _hoisted_4$2, [
                createBaseVNode("button", {
                  class: "zoom-button",
                  onClick: zoomOut,
                  title: "Zoom out"
                }, _cache[0] || (_cache[0] = [
                  createBaseVNode("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    class: "h-6 w-6",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor"
                  }, [
                    createBaseVNode("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2",
                      d: "M20 12H4"
                    })
                  ], -1)
                ])),
                createBaseVNode("span", _hoisted_5$2, toDisplayString(Math.round(zoomLevel.value * 100)) + "%", 1),
                createBaseVNode("button", {
                  class: "zoom-button",
                  onClick: zoomIn,
                  title: "Zoom in"
                }, _cache[1] || (_cache[1] = [
                  createBaseVNode("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    class: "h-6 w-6",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor"
                  }, [
                    createBaseVNode("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2",
                      d: "M12 4v16m8-8H4"
                    })
                  ], -1)
                ]))
              ]),
              createBaseVNode("button", {
                class: "zoom-button",
                onClick: toggleFullScreen,
                title: "Fullscreen"
              }, [
                (openBlock(), createElementBlock("svg", _hoisted_6$2, [
                  !isFullScreen.value ? (openBlock(), createElementBlock("path", _hoisted_7$2)) : (openBlock(), createElementBlock("path", _hoisted_8$2))
                ]))
              ]),
              createBaseVNode("a", {
                href: __props.pdfUrl,
                target: "_blank",
                class: "download-button flex items-center gap-1 px-2 py-1 rounded-md bg-white/20 hover:bg-white/30 transition-colors",
                title: "Open in new tab"
              }, _cache[2] || (_cache[2] = [
                createBaseVNode("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  class: "h-5 w-5",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  stroke: "currentColor"
                }, [
                  createBaseVNode("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "2",
                    d: "M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  })
                ], -1),
                createBaseVNode("span", { class: "text-sm" }, "Open", -1)
              ]), 8, _hoisted_9$2),
              createBaseVNode("button", {
                class: "close-button",
                onClick: closeModal
              }, _cache[3] || (_cache[3] = [
                createBaseVNode("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  class: "h-6 w-6",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  stroke: "currentColor"
                }, [
                  createBaseVNode("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "2",
                    d: "M6 18L18 6M6 6l12 12"
                  })
                ], -1)
              ]))
            ])
          ], 4),
          createBaseVNode("div", {
            class: "pdf-viewer-content",
            ref_key: "pdfContainer",
            ref: pdfContainer
          }, [
            !pdfLoadError.value ? (openBlock(), createElementBlock("div", _hoisted_10$2, [
              createBaseVNode("iframe", {
                ref_key: "pdfFrame",
                ref: pdfFrame,
                src: __props.pdfUrl,
                frameborder: "0",
                style: normalizeStyle({ transform: `scale(${zoomLevel.value})`, transformOrigin: "top center" }),
                allow: "fullscreen",
                onLoad: handleIframeLoad,
                onError: handleIframeError
              }, null, 44, _hoisted_11$2)
            ])) : (openBlock(), createElementBlock("div", _hoisted_12$2, [
              createBaseVNode("div", _hoisted_13$2, [
                _cache[6] || (_cache[6] = createBaseVNode("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  class: "h-16 w-16 mb-4 text-gray-400",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  stroke: "currentColor"
                }, [
                  createBaseVNode("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "2",
                    d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  })
                ], -1)),
                _cache[7] || (_cache[7] = createBaseVNode("h3", { class: "text-xl font-bold mb-2" }, "PDF không thể hiển thị trực tiếp", -1)),
                _cache[8] || (_cache[8] = createBaseVNode("p", { class: "mb-4" }, "Vui lòng sử dụng nút tải CV hoặc mở trong tab mới", -1)),
                createBaseVNode("div", _hoisted_14$1, [
                  createBaseVNode("a", {
                    href: __props.pdfUrl,
                    download: "",
                    class: "inline-flex items-center px-4 py-2 rounded-md",
                    style: normalizeStyle({ "background-color": unref(colorStore).currentColor.primary, color: "white" })
                  }, _cache[4] || (_cache[4] = [
                    createBaseVNode("svg", {
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
                    ], -1),
                    createTextVNode(" Tải CV ")
                  ]), 12, _hoisted_15$1),
                  createBaseVNode("a", {
                    href: __props.pdfUrl,
                    target: "_blank",
                    class: "inline-flex items-center px-4 py-2 border-2 rounded-md",
                    style: normalizeStyle({ "border-color": unref(colorStore).currentColor.primary, "color": unref(colorStore).currentColor.primary })
                  }, _cache[5] || (_cache[5] = [
                    createBaseVNode("svg", {
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
                        d: "M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      })
                    ], -1),
                    createTextVNode(" Mở trong tab mới ")
                  ]), 12, _hoisted_16$1)
                ])
              ])
            ]))
          ], 512)
        ])
      ])) : createCommentVNode("", true);
    };
  }
};
const PDFViewer = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-436adaf4"]]);
const HeroSection_vue_vue_type_style_index_0_scoped_7f9c5dd0_lang = "";
const _hoisted_1$3 = { class: "wrapper flex flex-col lg:flex-col xl:flex-row items-center justify-between mb-16 gap-4 lg:gap-8" };
const _hoisted_2$3 = { class: "avatar xl:w-1/3 flex justify-center transform transition-all duration-500 hover:scale-105 mt-8 lg:mt-0" };
const _hoisted_3$2 = { class: "relative w-64 h-64 lg:w-80 lg:h-80" };
const _hoisted_4$1 = { class: "tablet:w-full lg:w-full xl:w-2/3 p-4 transform transition-all duration-300 hover:-translate-y-1" };
const _hoisted_5$1 = { class: "text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4" };
const _hoisted_6$1 = { class: "block" };
const _hoisted_7$1 = { class: "typing-effect" };
const _hoisted_8$1 = { class: "text-2xl text-gray-700 dark:text-gray-300 mb-6 flex items-center" };
const _hoisted_9$1 = { class: "briefcase-container mr-2" };
const _hoisted_10$1 = ["title"];
const _hoisted_11$1 = ["d"];
const _hoisted_12$1 = ["d"];
const _hoisted_13$1 = ["d"];
const _hoisted_14 = ["d"];
const _hoisted_15 = { class: "flex-1 min-w-0" };
const _hoisted_16 = { class: "text-sm font-medium text-gray-500" };
const _hoisted_17 = {
  key: 0,
  class: "font-medium truncate"
};
const _hoisted_18 = ["href"];
const _hoisted_19 = { class: "flex flex-wrap gap-3" };
const _hoisted_20 = ["href"];
const _hoisted_21 = ["href"];
const _hoisted_22 = ["d"];
const fullName = "Trương Văn Minh";
const _sfc_main$3 = {
  __name: "HeroSection",
  setup(__props) {
    useProfileStore();
    const colorStore = useColorStore();
    const { t } = useI18n();
    const { displayedText: displayedName } = useTypingEffect(fullName, {
      typingSpeed: 150,
      deletingSpeed: 100,
      delayAfterComplete: 2e3,
      delayAfterDelete: 500,
      startDelay: 1e3,
      loop: true
    });
    const { contactItems, actionButtons, getPdfPath } = useContactInfo();
    const updatedActionButtons = computed(() => {
      return actionButtons.value.map((button) => {
        if (button.id === "download-cv") {
          return { ...button, href: getPdfPath() };
        }
        return button;
      });
    });
    const primaryButtons = computed(() => updatedActionButtons.value.filter((button) => button.isPrimary));
    const secondaryButtons = computed(() => updatedActionButtons.value.filter((button) => !button.isPrimary));
    const isPdfViewerOpen = ref(false);
    const openPdfViewer = () => {
      isPdfViewerOpen.value = true;
    };
    const closePdfViewer = () => {
      isPdfViewerOpen.value = false;
    };
    const pdfPath = computed(() => {
      const isGitHubPages = window.location.href.includes("/web-cv/");
      return isGitHubPages ? "/web-cv/TruongVanMinh-CV.pdf" : "/TruongVanMinh-CV.pdf";
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", _hoisted_1$3, [
          createBaseVNode("div", _hoisted_2$3, [
            createBaseVNode("div", _hoisted_3$2, [
              createBaseVNode("div", {
                class: "absolute inset-0 rounded-full shadow-lg",
                style: normalizeStyle({ "background-image": `linear-gradient(to bottom right, ${unref(colorStore).currentColor.primary}20, ${unref(colorStore).currentColor.secondary}20)` })
              }, null, 4),
              createBaseVNode("div", {
                class: "absolute inset-4 rounded-full shadow-inner",
                style: normalizeStyle({ "background-image": `linear-gradient(to top right, ${unref(colorStore).currentColor.primary}30, ${unref(colorStore).currentColor.secondary}30)` })
              }, null, 4),
              createBaseVNode("div", {
                class: "absolute inset-8 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-xl",
                style: normalizeStyle({ "background-color": unref(colorStore).currentColor.primary })
              }, toDisplayString(unref(t)("home.avatar")), 5)
            ])
          ]),
          createBaseVNode("div", _hoisted_4$1, [
            createBaseVNode("h1", _hoisted_5$1, [
              createBaseVNode("span", _hoisted_6$1, toDisplayString(unref(t)("home.greeting")), 1),
              createBaseVNode("span", {
                class: "block transform transition-all duration-300 hover:scale-105",
                style: normalizeStyle({ color: unref(colorStore).currentColor.primary })
              }, [
                createBaseVNode("span", _hoisted_7$1, toDisplayString(unref(displayedName)), 1),
                createBaseVNode("span", {
                  class: "typing-cursor",
                  style: normalizeStyle({ color: unref(colorStore).currentColor.primary })
                }, "|", 4)
              ], 4)
            ]),
            createBaseVNode("h2", _hoisted_8$1, [
              createBaseVNode("div", _hoisted_9$1, [
                (openBlock(), createElementBlock("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  class: "h-6 w-6 text-gray-700 dark:text-white briefcase-animate",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  stroke: "currentColor",
                  style: normalizeStyle({ "color": unref(colorStore).currentColor.primary })
                }, _cache[0] || (_cache[0] = [
                  createBaseVNode("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "2",
                    d: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  }, null, -1)
                ]), 4))
              ]),
              createBaseVNode("span", null, toDisplayString(unref(t)("home.role")), 1),
              createBaseVNode("div", {
                class: "exclamation-mark ml-2 cursor-pointer",
                onClick: openPdfViewer,
                title: unref(t)("home.viewCV")
              }, [
                (openBlock(), createElementBlock("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  class: "h-5 w-5 exclamation-animate",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  stroke: "currentColor",
                  style: normalizeStyle({ "color": unref(colorStore).currentColor.secondary })
                }, _cache[1] || (_cache[1] = [
                  createBaseVNode("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "2",
                    d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  }, null, -1)
                ]), 4))
              ], 8, _hoisted_10$1)
            ]),
            createBaseVNode("div", {
              class: "grid grid-cols-1 xl:w-[630px] sm:grid-cols-2 gap-4 text-gray-700 dark:text-gray-300 mb-8 bg-white dark:bg-gray-800 p-4 lg:p-6 rounded-xl shadow-md border-l-4 groups",
              style: normalizeStyle({ "border-color": unref(colorStore).currentColor.primary })
            }, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(unref(contactItems), (item) => {
                return openBlock(), createElementBlock("div", {
                  key: item.id,
                  class: "flex items-center group"
                }, [
                  createBaseVNode("div", {
                    class: "rounded-lg flex items-center justify-center mr-3 transition-colors group-hover:bg-opacity-50 icon-container h-10 w-10",
                    style: normalizeStyle({ "background-color": unref(colorStore).currentColor.secondary + "30", "--hover-bg": unref(colorStore).currentColor.secondary + "50" })
                  }, [
                    item.id === "email" ? (openBlock(), createElementBlock("svg", {
                      key: 0,
                      xmlns: "http://www.w3.org/2000/svg",
                      class: "h-6 w-6 email-animate",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      stroke: "currentColor",
                      style: normalizeStyle({ "color": unref(colorStore).currentColor.secondary })
                    }, _cache[2] || (_cache[2] = [
                      createBaseVNode("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "2",
                        d: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      }, null, -1)
                    ]), 4)) : item.id === "phone" ? (openBlock(), createElementBlock("svg", {
                      key: 1,
                      xmlns: "http://www.w3.org/2000/svg",
                      class: "h-6 w-6 phone-animate",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      stroke: "currentColor",
                      style: normalizeStyle({ "color": unref(colorStore).currentColor.secondary })
                    }, [
                      createBaseVNode("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "2",
                        d: item.svgPath
                      }, null, 8, _hoisted_11$1)
                    ], 4)) : item.id === "github" ? (openBlock(), createElementBlock("svg", {
                      key: 2,
                      xmlns: "http://www.w3.org/2000/svg",
                      class: "h-6 w-6 github-animate",
                      viewBox: "0 0 24 24",
                      fill: "currentColor",
                      style: normalizeStyle({ "color": unref(colorStore).currentColor.secondary })
                    }, [
                      createBaseVNode("path", {
                        d: item.svgPath
                      }, null, 8, _hoisted_12$1)
                    ], 4)) : item.id === "address" ? (openBlock(), createElementBlock("svg", {
                      key: 3,
                      xmlns: "http://www.w3.org/2000/svg",
                      class: "h-6 w-6 address-animate",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      stroke: "currentColor",
                      style: normalizeStyle({ "color": unref(colorStore).currentColor.secondary })
                    }, [
                      createBaseVNode("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "2",
                        d: item.svgPath
                      }, null, 8, _hoisted_13$1)
                    ], 4)) : (openBlock(), createElementBlock("svg", {
                      key: 4,
                      xmlns: "http://www.w3.org/2000/svg",
                      class: "h-6 w-6 icon-animate",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      stroke: "currentColor",
                      style: normalizeStyle({ "color": unref(colorStore).currentColor.secondary })
                    }, [
                      createBaseVNode("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "2",
                        d: item.svgPath
                      }, null, 8, _hoisted_14)
                    ], 4))
                  ], 4),
                  createBaseVNode("div", _hoisted_15, [
                    createBaseVNode("div", _hoisted_16, toDisplayString(item.label), 1),
                    !item.url ? (openBlock(), createElementBlock("div", _hoisted_17, toDisplayString(item.value), 1)) : (openBlock(), createElementBlock("a", {
                      key: 1,
                      href: item.url,
                      class: normalizeClass(["font-medium transition-colors", { "hover:opacity-80": true }]),
                      style: normalizeStyle({ color: unref(colorStore).currentColor.primary })
                    }, "github.com/" + toDisplayString(item.value), 13, _hoisted_18))
                  ])
                ]);
              }), 128))
            ], 4),
            createBaseVNode("div", _hoisted_19, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(primaryButtons.value, (button) => {
                return openBlock(), createElementBlock("a", {
                  key: button.id,
                  href: button.href,
                  class: normalizeClass(["inline-flex items-center px-6 py-3 text-white font-medium rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg", { "hover:opacity-90": true }]),
                  style: normalizeStyle({ "background-color": unref(colorStore).currentColor.primary })
                }, toDisplayString(button.label), 13, _hoisted_20);
              }), 128)),
              (openBlock(true), createElementBlock(Fragment, null, renderList(secondaryButtons.value, (button) => {
                return openBlock(), createElementBlock("a", {
                  key: button.id,
                  href: button.href,
                  download: "",
                  class: normalizeClass(["inline-flex items-center px-6 py-3 border-2 font-medium rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg ml-4", { "hover:bg-gray-50 dark:hover:bg-gray-800": true }]),
                  style: normalizeStyle({ "border-color": unref(colorStore).currentColor.secondary, "color": unref(colorStore).currentColor.secondary })
                }, [
                  button.icon ? (openBlock(), createElementBlock("svg", {
                    key: 0,
                    xmlns: "http://www.w3.org/2000/svg",
                    class: "h-5 w-5 mr-2 download-animate",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor",
                    style: normalizeStyle({ "color": unref(colorStore).currentColor.secondary })
                  }, [
                    createBaseVNode("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2",
                      d: button.icon
                    }, null, 8, _hoisted_22)
                  ], 4)) : createCommentVNode("", true),
                  createTextVNode(" " + toDisplayString(button.label), 1)
                ], 12, _hoisted_21);
              }), 128))
            ])
          ])
        ]),
        createVNode(PDFViewer, {
          "is-open": isPdfViewerOpen.value,
          "pdf-url": pdfPath.value,
          title: unref(t)("home.viewCV"),
          onClose: closePdfViewer
        }, null, 8, ["is-open", "pdf-url", "title"])
      ], 64);
    };
  }
};
const HeroSection = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-7f9c5dd0"]]);
const _hoisted_1$2 = { class: "flex items-center mb-10" };
const _hoisted_2$2 = { class: "mr-4 hidden md:block" };
const _hoisted_3$1 = { class: "text-lg text-gray-700 dark:text-gray-300 leading-relaxed" };
const _sfc_main$2 = {
  __name: "IntroductionSection",
  setup(__props) {
    const { t } = useI18n();
    const colorStore = useColorStore();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(LazySection, { class: "mb-16 p-4" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1$2, [
            createBaseVNode("div", _hoisted_2$2, [
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
                    d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  })
                ], -1)
              ]), 4)
            ]),
            createBaseVNode("h2", {
              class: "text-3xl font-bold inline-block pb-2 border-b-4 transform transition-all duration-300 hover:scale-105",
              style: normalizeStyle({ "color": unref(colorStore).currentColor.primary, "border-color": unref(colorStore).currentColor.primary })
            }, toDisplayString(unref(t)("about.title").toUpperCase()), 5)
          ]),
          createBaseVNode("div", {
            class: "bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-8 mb-6 transform hover:-translate-y-1 border-l-4",
            style: normalizeStyle({ "border-color": unref(colorStore).currentColor.primary })
          }, [
            createBaseVNode("p", _hoisted_3$1, toDisplayString(unref(t)("about.content")), 1)
          ], 4)
        ]),
        _: 1
      });
    };
  }
};
const _hoisted_1$1 = { class: "flex items-center mb-10" };
const _hoisted_2$1 = { class: "mr-4 hidden md:block" };
const _hoisted_3 = { class: "grid grid-cols-1 md:grid-cols-2 gap-8" };
const _hoisted_4 = { class: "flex items-center mb-4" };
const _hoisted_5 = { class: "text-xl font-semibold text-gray-900 dark:text-white" };
const _hoisted_6 = { class: "ml-12 space-y-2" };
const _hoisted_7 = { class: "flex items-start" };
const _hoisted_8 = { class: "block text-gray-700 dark:text-gray-300" };
const _hoisted_9 = { class: "flex items-center mb-4" };
const _hoisted_10 = { class: "text-xl font-semibold text-gray-900 dark:text-white" };
const _hoisted_11 = { class: "ml-12 space-y-2" };
const _hoisted_12 = { class: "flex items-start" };
const _hoisted_13 = { class: "text-lg text-gray-700 dark:text-gray-300" };
const _sfc_main$1 = {
  __name: "ObjectiveSection",
  setup(__props) {
    const { t } = useI18n();
    useProfileStore();
    const colorStore = useColorStore();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(LazySection, { class: "mb-16 p-4" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1$1, [
            createBaseVNode("div", _hoisted_2$1, [
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
                    d: "M13 10V3L4 14h7v7l9-11h-7z"
                  })
                ], -1)
              ]), 4)
            ]),
            createBaseVNode("h2", {
              class: "text-3xl font-bold inline-block pb-2 border-b-4 transform transition-all duration-300 hover:scale-105",
              style: normalizeStyle({ "color": unref(colorStore).currentColor.primary, "border-color": unref(colorStore).currentColor.primary })
            }, toDisplayString(unref(t)("home.objective").toUpperCase()), 5)
          ]),
          createBaseVNode("div", _hoisted_3, [
            createVNode(LazySection, {
              class: "rounded-xl shadow-lg p-8 mb-8 transform hover:-translate-y-1 transition-all duration-300 hover:shadow-xl border-r-4 bg-white dark:bg-gray-800",
              style: normalizeStyle({ "border-color": unref(colorStore).currentColor.secondary })
            }, {
              default: withCtx(() => [
                createBaseVNode("div", _hoisted_4, [
                  createBaseVNode("div", {
                    class: "h-10 w-10 rounded-lg flex items-center justify-center mr-3",
                    style: normalizeStyle({ "background-color": unref(colorStore).currentColor.secondary + "30" })
                  }, [
                    (openBlock(), createElementBlock("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      class: "h-6 w-6",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      stroke: "currentColor",
                      style: normalizeStyle({ "color": unref(colorStore).currentColor.secondary })
                    }, _cache[1] || (_cache[1] = [
                      createBaseVNode("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "2",
                        d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      }, null, -1)
                    ]), 4))
                  ], 4),
                  createBaseVNode("h3", _hoisted_5, toDisplayString(unref(t)("home.shortTermTitle")), 1)
                ]),
                createBaseVNode("ul", _hoisted_6, [
                  createBaseVNode("li", _hoisted_7, [
                    (openBlock(), createElementBlock("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      class: "h-5 w-5 mr-2 flex-shrink-0 mt-0.5",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      stroke: "currentColor",
                      style: normalizeStyle({ "color": unref(colorStore).currentColor.secondary })
                    }, _cache[2] || (_cache[2] = [
                      createBaseVNode("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "2",
                        d: "M9 12l2 2 4-4"
                      }, null, -1)
                    ]), 4)),
                    createBaseVNode("span", _hoisted_8, toDisplayString(unref(t)("home.shortTermGoal")), 1)
                  ])
                ])
              ]),
              _: 1
            }, 8, ["style"]),
            createVNode(LazySection, {
              class: "rounded-xl shadow-lg p-8 mb-8 transform hover:-translate-y-1 transition-all duration-300 hover:shadow-xl border-r-4 bg-white dark:bg-gray-800",
              style: normalizeStyle({ "border-color": unref(colorStore).currentColor.secondary })
            }, {
              default: withCtx(() => [
                createBaseVNode("div", _hoisted_9, [
                  createBaseVNode("div", {
                    class: "h-10 w-10 rounded-lg flex items-center justify-center mr-3",
                    style: normalizeStyle({ "background-color": unref(colorStore).currentColor.secondary + "30" })
                  }, [
                    (openBlock(), createElementBlock("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      class: "h-6 w-6",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      stroke: "currentColor",
                      style: normalizeStyle({ "color": unref(colorStore).currentColor.secondary })
                    }, _cache[3] || (_cache[3] = [
                      createBaseVNode("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "2",
                        d: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                      }, null, -1)
                    ]), 4))
                  ], 4),
                  createBaseVNode("h3", _hoisted_10, toDisplayString(unref(t)("home.longTermTitle")), 1)
                ]),
                createBaseVNode("ul", _hoisted_11, [
                  createBaseVNode("li", _hoisted_12, [
                    (openBlock(), createElementBlock("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      class: "h-5 w-5 mr-2 flex-shrink-0 mt-0.5",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      stroke: "currentColor",
                      style: normalizeStyle({ "color": unref(colorStore).currentColor.secondary })
                    }, _cache[4] || (_cache[4] = [
                      createBaseVNode("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "2",
                        d: "M9 12l2 2 4-4"
                      }, null, -1)
                    ]), 4)),
                    createBaseVNode("span", _hoisted_13, toDisplayString(unref(t)("home.longTermGoal")), 1)
                  ])
                ])
              ]),
              _: 1
            }, 8, ["style"])
          ])
        ]),
        _: 1
      });
    };
  }
};
const HomeView_vue_vue_type_style_index_0_scoped_5d390cda_lang = "";
const _hoisted_1 = { class: "min-h-screen py-10 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900" };
const _hoisted_2 = { class: "container mx-auto px-4 sm:px-6 lg:px-8" };
const _sfc_main = {
  __name: "HomeView",
  setup(__props) {
    useThemeStore();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createVNode(HeroSection),
          createVNode(_sfc_main$2),
          createVNode(_sfc_main$1)
        ])
      ]);
    };
  }
};
const HomeView = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5d390cda"]]);
export {
  HomeView as default
};
