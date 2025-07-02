import { u as useColorStore } from "./index-87a56987.js";
import { B as useI18n, o as openBlock, b as createBlock, w as withCtx, h as createBaseVNode, n as normalizeStyle, u as unref, f as toDisplayString, e as createTextVNode, c as createElementBlock, a as normalizeClass, q as createVNode } from "./vendor-adf92722.js";
import { L as LazySection } from "./LazySection-80701274.js";
import "./vendor-toast-e005dfbd.js";
const _hoisted_1$3 = { class: "flex items-center mb-10" };
const _hoisted_2$3 = { class: "mr-4 hidden md:block" };
const _hoisted_3$3 = { class: "relative" };
const _hoisted_4$3 = { class: "space-y-12" };
const _hoisted_5$3 = { class: "relative flex flex-col md:flex-row items-start md:justify-between group pt-14 md:pt-0" };
const _hoisted_6$2 = { class: "tablet:hidden lg:hidden xl:hidden absolute left-0 md:left-1/2 top-20 md:top-1/2 transform translate-x-[-22px] -translate-y-[-260px] z-10" };
const _hoisted_7$2 = { class: "block md:hidden w-full mb-8 px-4 absolute top-0 left-0 right-0 z-20 flex items-center gap-2" };
const _hoisted_8$2 = { class: "flex-1 md:w-[45%] md:pr-8 md:text-right order-2 md:order-1 transition-all duration-300 transform hover:-translate-y-1 mt-6 md:mt-0" };
const _hoisted_9$2 = { class: "flex flex-col" };
const _hoisted_10$2 = { class: "list-none text-gray-600 space-y-2" };
const _hoisted_11$2 = { class: "flex items-start" };
const _hoisted_12$2 = { class: "text-gray-700 dark:text-gray-400" };
const _hoisted_13$2 = { class: "flex items-start" };
const _hoisted_14$2 = { class: "text-gray-700 dark:text-gray-400" };
const _hoisted_15$2 = { class: "flex items-start" };
const _hoisted_16$2 = { class: "text-gray-700 dark:text-gray-400" };
const _hoisted_17$2 = { class: "flex items-start" };
const _hoisted_18$2 = { class: "text-gray-700 dark:text-gray-400" };
const _hoisted_19$2 = { class: "flex items-start" };
const _hoisted_20$2 = { class: "text-gray-700 dark:text-gray-400" };
const _hoisted_21$2 = { class: "translate-x-[360px] absolute left-0 md:left-1/2 transform md:translate-x-[-50%] top-[80px] md:top-auto md:mt-28 order-1 md:order-2 ml-6 md:ml-0 z-10 hidden md:block" };
const _hoisted_22$2 = { class: "md:w-[45%] md:pl-8 md:text-left order-3 mt-6 md:mt-0" };
const _hoisted_23$2 = { class: "relative flex flex-col md:flex-row items-start md:justify-between group pt-14 md:pt-0" };
const _hoisted_24$2 = { class: "absolute md:hidden translate-x-[-100px] absolute left-0 md:left-1/2 top-20 md:top-1/2 transform translate-x-[-24px] -translate-y-[-200px] z-10" };
const _hoisted_25$2 = { class: "md:hidden w-full mb-8 px-4 absolute top-0 left-0 right-0 z-20" };
const _hoisted_26$2 = { class: "translate-y-5 md:w-[45%] md:pr-8 md:text-right order-2 md:order-1" };
const _hoisted_27$2 = { class: "lg:translate-x-[360px] translate-y-4 absolute left-0 md:left-1/2 transform md:translate-x-[-50%] top-[-15px] left-[-5px] md:top-auto md:mt-28 order-1 md:order-2 ml-6 md:ml-0 z-10" };
const _hoisted_28$2 = { class: "flex-1 md:w-[45%] md:pl-8 order-3 transition-all duration-300 transform hover:-translate-y-1 mt-4" };
const _hoisted_29$2 = { class: "flex flex-col" };
const _hoisted_30$2 = { class: "list-none text-gray-600 space-y-2" };
const _hoisted_31$2 = { class: "flex items-start justify-end" };
const _hoisted_32$2 = { class: "text-gray-700 dark:text-gray-400" };
const _hoisted_33$2 = { class: "flex items-start justify-end" };
const _hoisted_34$2 = { class: "text-gray-700 dark:text-gray-400" };
const _hoisted_35$2 = { class: "flex items-start justify-end" };
const _hoisted_36$2 = { class: "text-gray-700 dark:text-gray-400" };
const _hoisted_37$2 = { class: "flex items-start justify-end" };
const _hoisted_38$2 = { class: "text-gray-700 dark:text-gray-400" };
const _sfc_main$3 = {
  __name: "WorkExperienceSection",
  setup(__props) {
    const colorStore = useColorStore();
    const { t } = useI18n();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(LazySection, {
        threshold: "0.1",
        rootMargin: "100px",
        class: "mb-16 p-4"
      }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1$3, [
            createBaseVNode("div", _hoisted_2$3, [
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
                    d: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  })
                ], -1)
              ]), 4)
            ]),
            createBaseVNode("h2", {
              class: "text-3xl font-bold inline-block pb-2 border-b-4 transform transition-all duration-300 hover:scale-105",
              style: normalizeStyle({ "color": unref(colorStore).currentColor.primary, "border-color": unref(colorStore).currentColor.primary })
            }, toDisplayString(unref(t)("experience.title").toUpperCase()), 5)
          ]),
          createBaseVNode("div", _hoisted_3$3, [
            createBaseVNode("div", {
              class: "absolute -ml-6 md:ml-0 left-0 md:left-1/2 h-full w-1 transform md:translate-x-[-50%] rounded-full",
              style: normalizeStyle({ "background-image": `linear-gradient(to bottom, ${unref(colorStore).currentColor.primary}, ${unref(colorStore).currentColor.secondary})` })
            }, null, 4),
            createBaseVNode("div", _hoisted_4$3, [
              createBaseVNode("div", _hoisted_5$3, [
                createBaseVNode("div", _hoisted_6$2, [
                  createBaseVNode("div", {
                    class: "h-0.5 w-6",
                    style: normalizeStyle({ "background": `linear-gradient(to right, ${unref(colorStore).currentColor.primary}, ${unref(colorStore).currentColor.secondary})` })
                  }, null, 4)
                ]),
                createBaseVNode("div", _hoisted_7$2, [
                  createBaseVNode("div", {
                    class: "h-8 w-8 rounded-full flex items-center justify-center shadow-lg",
                    style: normalizeStyle({ "background-image": `linear-gradient(to right, ${unref(colorStore).currentColor.primary}, ${unref(colorStore).currentColor.secondary})` })
                  }, _cache[1] || (_cache[1] = [
                    createBaseVNode("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      class: "h-5 w-5 text-white",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      stroke: "currentColor"
                    }, [
                      createBaseVNode("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "2",
                        d: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      })
                    ], -1)
                  ]), 4),
                  createBaseVNode("div", {
                    class: "text-white font-medium text-sm uppercase tracking-wider px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 inline-flex items-center",
                    style: normalizeStyle({ "background-image": `linear-gradient(to right, ${unref(colorStore).currentColor.primary}, ${unref(colorStore).currentColor.secondary})` })
                  }, [
                    _cache[2] || (_cache[2] = createBaseVNode("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      class: "h-4 w-4 mr-2 text-white",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      stroke: "currentColor"
                    }, [
                      createBaseVNode("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "2",
                        d: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      })
                    ], -1)),
                    createTextVNode(" " + toDisplayString(unref(t)("experience.date1")), 1)
                  ], 4)
                ]),
                createBaseVNode("div", _hoisted_8$2, [
                  createBaseVNode("div", {
                    class: "bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4",
                    style: normalizeStyle({ "border-color": unref(colorStore).currentColor.primary })
                  }, [
                    createBaseVNode("div", _hoisted_9$2, [
                      createBaseVNode("span", {
                        class: "text-xs font-semibold uppercase tracking-wider mb-1",
                        style: normalizeStyle({ "color": unref(colorStore).currentColor.primary })
                      }, toDisplayString(unref(t)("experience.date1")), 5),
                      createBaseVNode("h3", {
                        class: "text-xl font-bold mb-2",
                        style: normalizeStyle({ "color": unref(colorStore).currentColor.primary })
                      }, toDisplayString(unref(t)("experience.company1")), 5),
                      createBaseVNode("p", {
                        class: "font-medium mb-4 flex items-center",
                        style: normalizeStyle({ "color": unref(colorStore).currentColor.primary })
                      }, [
                        _cache[3] || (_cache[3] = createBaseVNode("svg", {
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
                            d: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                          })
                        ], -1)),
                        createTextVNode(" " + toDisplayString(unref(t)("experience.position1")), 1)
                      ], 4)
                    ]),
                    createBaseVNode("div", {
                      class: "pl-2 border-l-2 border-opacity-30",
                      style: normalizeStyle({ "border-color": unref(colorStore).currentColor.secondary })
                    }, [
                      createBaseVNode("h4", {
                        class: "text-lg font-semibold mb-2 flex items-center",
                        style: normalizeStyle({ "color": unref(colorStore).currentColor.primary })
                      }, [
                        (openBlock(), createElementBlock("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          class: "h-5 w-5 mr-2",
                          style: normalizeStyle({ "color": unref(colorStore).currentColor.primary }),
                          fill: "none",
                          viewBox: "0 0 24 24",
                          stroke: "currentColor"
                        }, _cache[4] || (_cache[4] = [
                          createBaseVNode("path", {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            "stroke-width": "2",
                            d: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          }, null, -1)
                        ]), 4)),
                        createTextVNode(" " + toDisplayString(unref(t)("experience.department1")), 1)
                      ], 4),
                      createBaseVNode("ul", _hoisted_10$2, [
                        createBaseVNode("li", _hoisted_11$2, [
                          (openBlock(), createElementBlock("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            class: "h-5 w-5 mr-2 flex-shrink-0 mt-0.5",
                            style: normalizeStyle({ "color": unref(colorStore).currentColor.secondary }),
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor"
                          }, _cache[5] || (_cache[5] = [
                            createBaseVNode("path", {
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                              "stroke-width": "2",
                              d: "M9 12l2 2 4-4"
                            }, null, -1)
                          ]), 4)),
                          createBaseVNode("span", _hoisted_12$2, toDisplayString(unref(t)("experience.responsibility1")), 1)
                        ]),
                        createBaseVNode("li", _hoisted_13$2, [
                          (openBlock(), createElementBlock("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            class: "h-5 w-5 mr-2 flex-shrink-0 mt-0.5",
                            style: normalizeStyle({ "color": unref(colorStore).currentColor.secondary }),
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor"
                          }, _cache[6] || (_cache[6] = [
                            createBaseVNode("path", {
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                              "stroke-width": "2",
                              d: "M9 12l2 2 4-4"
                            }, null, -1)
                          ]), 4)),
                          createBaseVNode("span", _hoisted_14$2, toDisplayString(unref(t)("experience.responsibility2")), 1)
                        ]),
                        createBaseVNode("li", _hoisted_15$2, [
                          (openBlock(), createElementBlock("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            class: "h-5 w-5 mr-2 flex-shrink-0 mt-0.5",
                            style: normalizeStyle({ "color": unref(colorStore).currentColor.secondary }),
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor"
                          }, _cache[7] || (_cache[7] = [
                            createBaseVNode("path", {
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                              "stroke-width": "2",
                              d: "M9 12l2 2 4-4"
                            }, null, -1)
                          ]), 4)),
                          createBaseVNode("span", _hoisted_16$2, toDisplayString(unref(t)("experience.responsibility3")), 1)
                        ]),
                        createBaseVNode("li", _hoisted_17$2, [
                          (openBlock(), createElementBlock("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            class: "h-5 w-5 mr-2 flex-shrink-0 mt-0.5",
                            style: normalizeStyle({ "color": unref(colorStore).currentColor.secondary }),
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor"
                          }, _cache[8] || (_cache[8] = [
                            createBaseVNode("path", {
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                              "stroke-width": "2",
                              d: "M9 12l2 2 4-4"
                            }, null, -1)
                          ]), 4)),
                          createBaseVNode("span", _hoisted_18$2, toDisplayString(unref(t)("experience.responsibility2")), 1)
                        ]),
                        createBaseVNode("li", _hoisted_19$2, [
                          (openBlock(), createElementBlock("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            class: "h-5 w-5 mr-2 flex-shrink-0 mt-0.5",
                            style: normalizeStyle({ "color": unref(colorStore).currentColor.secondary }),
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor"
                          }, _cache[9] || (_cache[9] = [
                            createBaseVNode("path", {
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                              "stroke-width": "2",
                              d: "M9 12l2 2 4-4"
                            }, null, -1)
                          ]), 4)),
                          createBaseVNode("span", _hoisted_20$2, toDisplayString(unref(t)("experience.responsibility3")), 1)
                        ])
                      ])
                    ], 4)
                  ], 4)
                ]),
                createBaseVNode("div", _hoisted_21$2, [
                  createBaseVNode("div", {
                    style: normalizeStyle({ "background-image": `linear-gradient(to right, ${unref(colorStore).currentColor.primary}, ${unref(colorStore).currentColor.secondary})` }),
                    class: "h-12 w-12 rounded-full flex items-center justify-center shadow-lg transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12"
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
                        d: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      })
                    ], -1)
                  ]), 4),
                  createBaseVNode("div", {
                    class: "absolute w-24 h-px top-1/2 left-full transform -translate-y-1/2 hidden md:block",
                    style: normalizeStyle({ "background-image": `linear-gradient(to right, transparent, ${unref(colorStore).currentColor.secondary}, transparent)` })
                  }, null, 4)
                ]),
                createBaseVNode("div", _hoisted_22$2, [
                  createBaseVNode("div", {
                    class: "translate-y-[5px] text-white font-medium text-sm uppercase tracking-wider px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 mt-16 md:mt-28 inline-flex items-center hidden md:inline-flex",
                    style: normalizeStyle({ "background-image": `linear-gradient(to right, ${unref(colorStore).currentColor.primary}, ${unref(colorStore).currentColor.secondary})` })
                  }, [
                    _cache[11] || (_cache[11] = createBaseVNode("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      class: "h-4 w-4 mr-2 text-white",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      stroke: "currentColor"
                    }, [
                      createBaseVNode("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "2",
                        d: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      })
                    ], -1)),
                    createTextVNode(" " + toDisplayString(unref(t)("experience.date1")), 1)
                  ], 4)
                ])
              ]),
              createBaseVNode("div", _hoisted_23$2, [
                createBaseVNode("div", _hoisted_24$2, [
                  createBaseVNode("div", {
                    class: "h-0.5 w-6",
                    style: normalizeStyle({ "background": `linear-gradient(to right, ${unref(colorStore).currentColor.primary}, ${unref(colorStore).currentColor.secondary})` })
                  }, null, 4)
                ]),
                createBaseVNode("div", _hoisted_25$2, [
                  createBaseVNode("div", {
                    class: "ml-[43px] text-white font-medium text-sm uppercase tracking-wider px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 inline-flex items-center",
                    style: normalizeStyle({ "background-image": `linear-gradient(to right, ${unref(colorStore).currentColor.secondary}, ${unref(colorStore).currentColor.primary})` })
                  }, [
                    _cache[12] || (_cache[12] = createBaseVNode("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      class: "h-4 w-4 mr-2 text-white",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      stroke: "currentColor"
                    }, [
                      createBaseVNode("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "2",
                        d: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      })
                    ], -1)),
                    createTextVNode(" " + toDisplayString(unref(t)("experience.date2")), 1)
                  ], 4)
                ]),
                createBaseVNode("div", _hoisted_26$2, [
                  createBaseVNode("div", {
                    class: "text-white font-medium text-sm uppercase tracking-wider px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 mt-16 md:mt-28 hidden md:inline-flex items-center ml-auto relative z-20",
                    style: normalizeStyle({ "background-image": `linear-gradient(to right, ${unref(colorStore).currentColor.secondary}, ${unref(colorStore).currentColor.primary})` })
                  }, [
                    _cache[13] || (_cache[13] = createBaseVNode("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      class: "h-4 w-4 mr-2 text-white",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      stroke: "currentColor"
                    }, [
                      createBaseVNode("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "2",
                        d: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      })
                    ], -1)),
                    createTextVNode(" " + toDisplayString(unref(t)("experience.date2")), 1)
                  ], 4)
                ]),
                createBaseVNode("div", _hoisted_27$2, [
                  createBaseVNode("div", {
                    style: normalizeStyle({ "background-image": `linear-gradient(to right, ${unref(colorStore).currentColor.secondary}, ${unref(colorStore).currentColor.primary})` }),
                    class: "lg:opacity-0 h-12 w-12 rounded-full flex items-center justify-center shadow-lg transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-[-12deg] hidden md:flex"
                  }, _cache[14] || (_cache[14] = [
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
                        d: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      })
                    ], -1)
                  ]), 4),
                  createBaseVNode("div", {
                    class: "h-8 w-8 rounded-full flex items-center justify-center shadow-lg md:hidden",
                    style: normalizeStyle({ "background-image": `linear-gradient(to right, ${unref(colorStore).currentColor.secondary}, ${unref(colorStore).currentColor.primary})` })
                  }, _cache[15] || (_cache[15] = [
                    createBaseVNode("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      class: "h-5 w-5 text-white",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      stroke: "currentColor"
                    }, [
                      createBaseVNode("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "2",
                        d: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      })
                    ], -1)
                  ]), 4),
                  createBaseVNode("div", {
                    class: "absolute w-24 h-px top-1/2 right-full transform -translate-y-1/2 hidden md:block",
                    style: normalizeStyle({ "background-image": `linear-gradient(to left, transparent, ${unref(colorStore).currentColor.secondary}, transparent)` })
                  }, null, 4)
                ]),
                createBaseVNode("div", _hoisted_28$2, [
                  createBaseVNode("div", {
                    class: "bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-r-4",
                    style: normalizeStyle({ "border-color": unref(colorStore).currentColor.secondary })
                  }, [
                    createBaseVNode("div", _hoisted_29$2, [
                      createBaseVNode("span", {
                        class: "text-xs font-semibold uppercase tracking-wider mb-3",
                        style: normalizeStyle({ "color": unref(colorStore).currentColor.primary })
                      }, toDisplayString(unref(t)("experience.position2")), 5),
                      createBaseVNode("h3", {
                        class: "text-2xl font-bold",
                        style: normalizeStyle({ "color": unref(colorStore).currentColor.primary })
                      }, toDisplayString(unref(t)("experience.company2")), 5),
                      createBaseVNode("p", {
                        class: "font-medium mb-4 flex items-center",
                        style: normalizeStyle({ "color": unref(colorStore).currentColor.secondary })
                      }, [
                        _cache[16] || (_cache[16] = createBaseVNode("svg", {
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
                            d: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                          })
                        ], -1)),
                        createTextVNode(" " + toDisplayString(unref(t)("experience.position2")), 1)
                      ], 4)
                    ]),
                    createBaseVNode("div", {
                      class: "pr-2 border-r-2 border-opacity-30",
                      style: normalizeStyle({ "border-color": unref(colorStore).currentColor.secondary })
                    }, [
                      createBaseVNode("h4", {
                        class: "text-lg font-semibold mb-2 flex items-center justify-end",
                        style: normalizeStyle({ "color": unref(colorStore).currentColor.primary })
                      }, [
                        createTextVNode(toDisplayString(unref(t)("experience.department2")) + " ", 1),
                        (openBlock(), createElementBlock("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          class: "h-5 w-5 ml-2",
                          style: normalizeStyle({ "color": unref(colorStore).currentColor.secondary }),
                          fill: "none",
                          viewBox: "0 0 24 24",
                          stroke: "currentColor"
                        }, _cache[17] || (_cache[17] = [
                          createBaseVNode("path", {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            "stroke-width": "2",
                            d: "M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                          }, null, -1)
                        ]), 4))
                      ], 4),
                      createBaseVNode("ul", _hoisted_30$2, [
                        createBaseVNode("li", _hoisted_31$2, [
                          createBaseVNode("span", _hoisted_32$2, toDisplayString(unref(t)("experience.responsibility4")), 1),
                          (openBlock(), createElementBlock("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            class: "h-5 w-5 ml-2 flex-shrink-0 mt-0.5",
                            style: normalizeStyle({ "color": unref(colorStore).currentColor.secondary }),
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor"
                          }, _cache[18] || (_cache[18] = [
                            createBaseVNode("path", {
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                              "stroke-width": "2",
                              d: "M9 12l2 2 4-4"
                            }, null, -1)
                          ]), 4))
                        ]),
                        createBaseVNode("li", _hoisted_33$2, [
                          createBaseVNode("span", _hoisted_34$2, toDisplayString(unref(t)("experience.responsibility5")), 1),
                          (openBlock(), createElementBlock("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            class: "h-5 w-5 ml-2 flex-shrink-0 mt-0.5",
                            style: normalizeStyle({ "color": unref(colorStore).currentColor.secondary }),
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor"
                          }, _cache[19] || (_cache[19] = [
                            createBaseVNode("path", {
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                              "stroke-width": "2",
                              d: "M9 12l2 2 4-4"
                            }, null, -1)
                          ]), 4))
                        ]),
                        createBaseVNode("li", _hoisted_35$2, [
                          createBaseVNode("span", _hoisted_36$2, toDisplayString(unref(t)("experience.responsibility6")), 1),
                          (openBlock(), createElementBlock("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            class: "h-5 w-5 ml-2 flex-shrink-0 mt-0.5",
                            style: normalizeStyle({ "color": unref(colorStore).currentColor.secondary }),
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor"
                          }, _cache[20] || (_cache[20] = [
                            createBaseVNode("path", {
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                              "stroke-width": "2",
                              d: "M9 12l2 2 4-4"
                            }, null, -1)
                          ]), 4))
                        ]),
                        createBaseVNode("li", _hoisted_37$2, [
                          createBaseVNode("span", _hoisted_38$2, toDisplayString(unref(t)("experience.responsibility7")), 1),
                          (openBlock(), createElementBlock("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            class: "h-5 w-5 ml-2 flex-shrink-0 mt-0.5",
                            style: normalizeStyle({ "color": unref(colorStore).currentColor.secondary }),
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor"
                          }, _cache[21] || (_cache[21] = [
                            createBaseVNode("path", {
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                              "stroke-width": "2",
                              d: "M9 12l2 2 4-4"
                            }, null, -1)
                          ]), 4))
                        ])
                      ])
                    ], 4)
                  ], 4)
                ])
              ])
            ])
          ])
        ]),
        _: 1
      });
    };
  }
};
const _hoisted_1$2 = { class: "bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden mb-12 transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1" };
const _hoisted_2$2 = { class: "p-8 relative" };
const _hoisted_3$2 = { class: "flex flex-col tablet:flex-col lg:flex-col xl:flex-row justify-between items-start mb-8 mt-8" };
const _hoisted_4$2 = { class: "flex items-center" };
const _hoisted_5$2 = { class: "mb-8" };
const _hoisted_6$1 = { class: "flex items-center mb-3" };
const _hoisted_7$1 = { class: "ml-11 text-gray-700 dark:text-gray-300 leading-relaxed" };
const _hoisted_8$1 = { class: "grid grid-cols-1 tablet:grid-cols-1 lg:grid-cols-1 xl:grid-cols-3 gap-8 mb-8 mt-6" };
const _hoisted_9$1 = { class: "bg-gradient-to-br from-white dark:from-gray-700 to-indigo-50 dark:to-gray-600 p-5 rounded-lg shadow-sm border border-indigo-100 dark:border-gray-600 transform transition-all duration-300 hover:shadow-md hover:-translate-y-1" };
const _hoisted_10$1 = { class: "flex items-center mb-3" };
const _hoisted_11$1 = { class: "ml-11" };
const _hoisted_12$1 = { class: "text-gray-600 dark:text-gray-300 text-sm" };
const _hoisted_13$1 = { class: "bg-gradient-to-br from-white dark:from-gray-700 to-indigo-50 dark:to-gray-600 p-5 rounded-lg shadow-sm border border-indigo-100 dark:border-gray-600 transform transition-all duration-300 hover:shadow-md hover:-translate-y-1" };
const _hoisted_14$1 = { class: "flex items-center mb-3" };
const _hoisted_15$1 = { class: "ml-11" };
const _hoisted_16$1 = { class: "text-gray-600 dark:text-gray-300 text-sm" };
const _hoisted_17$1 = { class: "bg-gradient-to-br from-white dark:from-gray-700 to-indigo-50 dark:to-gray-600 p-5 rounded-lg shadow-sm border border-indigo-100 dark:border-gray-600 transform transition-all duration-300 hover:shadow-md hover:-translate-y-1" };
const _hoisted_18$1 = { class: "flex items-center mb-3" };
const _hoisted_19$1 = { class: "ml-11 space-y-2" };
const _hoisted_20$1 = { class: "flex items-center" };
const _hoisted_21$1 = {
  href: "https://team03-admin.cyvietnam.id.vn",
  target: "_blank",
  rel: "noopener noreferrer",
  class: "flex items-center text-gray-700 dark:text-gray-300 hover:text-indigo-600 transition-colors"
};
const _hoisted_22$1 = { class: "flex items-center" };
const _hoisted_23$1 = { class: "flex items-center" };
const _hoisted_24$1 = { class: "flex items-center" };
const _hoisted_25$1 = {
  href: "https://github.com/vanminhtruong/Team03-cy/tree/main/Team03-Web",
  target: "_blank",
  rel: "noopener noreferrer",
  class: "flex items-center text-gray-700 dark:text-gray-300 hover:text-indigo-600 transition-colors"
};
const _hoisted_26$1 = { class: "flex items-center mt-3" };
const _hoisted_27$1 = { class: "flex items-center" };
const _hoisted_28$1 = { class: "bg-gradient-to-br from-white dark:from-gray-700 to-indigo-50 dark:to-gray-600 p-5 rounded-lg shadow-sm border border-indigo-100 dark:border-gray-600 mt-8" };
const _hoisted_29$1 = { class: "flex items-center mb-4" };
const _hoisted_30$1 = { class: "ml-11" };
const _hoisted_31$1 = { class: "mb-4" };
const _hoisted_32$1 = { class: "flex items-center mb-2" };
const _hoisted_33$1 = { class: "space-y-2" };
const _hoisted_34$1 = { class: "flex items-start" };
const _hoisted_35$1 = { class: "text-gray-700 dark:text-gray-400" };
const _hoisted_36$1 = { class: "flex items-start" };
const _hoisted_37$1 = { class: "text-gray-700 dark:text-gray-400" };
const _hoisted_38$1 = { class: "flex items-start" };
const _hoisted_39$1 = { class: "text-gray-700 dark:text-gray-400" };
const _hoisted_40$1 = { class: "flex items-center mb-2" };
const _hoisted_41$1 = { class: "grid grid-cols-1 tablet:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4" };
const _hoisted_42 = { class: "space-y-2" };
const _hoisted_43 = { class: "flex items-start" };
const _hoisted_44 = { class: "text-gray-700 dark:text-gray-400" };
const _hoisted_45 = { class: "flex items-start" };
const _hoisted_46 = { class: "text-gray-700 dark:text-gray-400" };
const _hoisted_47 = { class: "space-y-2" };
const _hoisted_48 = { class: "flex items-start" };
const _hoisted_49 = { class: "text-gray-700 dark:text-gray-400" };
const _hoisted_50 = { class: "flex items-start" };
const _hoisted_51 = { class: "text-gray-700 dark:text-gray-400" };
const _sfc_main$2 = {
  __name: "TeamProjectSection",
  setup(__props) {
    const colorStore = useColorStore();
    const { t } = useI18n();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(LazySection, {
        threshold: "0.1",
        rootMargin: "100px"
      }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1$2, [
            createBaseVNode("div", _hoisted_2$2, [
              createBaseVNode("div", {
                class: "absolute top-0 right-0 text-white px-6 py-2 rounded-bl-lg font-semibold text-sm uppercase tracking-wider shadow-md",
                style: normalizeStyle({ "background-image": `linear-gradient(to right, ${unref(colorStore).currentColor.primary}, ${unref(colorStore).currentColor.secondary})` })
              }, toDisplayString(unref(t)("projects.featuredProject")), 5),
              createBaseVNode("div", _hoisted_3$2, [
                createBaseVNode("div", _hoisted_4$2, [
                  createBaseVNode("div", {
                    class: "h-10 w-10 rounded-lg flex items-center justify-center mr-4",
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
                        d: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                      })
                    ], -1)
                  ]), 4),
                  createBaseVNode("h3", {
                    class: "text-2xl font-bold",
                    style: normalizeStyle({ "color": unref(colorStore).currentColor.primary })
                  }, toDisplayString(unref(t)("projects.project1.title")), 5)
                ]),
                createBaseVNode("div", {
                  class: "flex items-center font-medium mt-4 tablet:mt-4 lg:mt-4 xl:mt-0 px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-white",
                  style: normalizeStyle({ "background-image": `linear-gradient(to right, ${unref(colorStore).currentColor.primary}, ${unref(colorStore).currentColor.secondary})` })
                }, [
                  _cache[1] || (_cache[1] = createBaseVNode("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    class: "h-5 w-5 mr-2 text-white",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor"
                  }, [
                    createBaseVNode("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2",
                      d: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    })
                  ], -1)),
                  createTextVNode(" " + toDisplayString(unref(t)("projects.project1.date")), 1)
                ], 4)
              ]),
              createBaseVNode("div", _hoisted_5$2, [
                createBaseVNode("div", _hoisted_6$1, [
                  createBaseVNode("div", {
                    class: "h-8 w-8 rounded-lg flex items-center justify-center mr-3",
                    style: normalizeStyle({ "background-color": unref(colorStore).currentColor.primary + "20" })
                  }, [
                    (openBlock(), createElementBlock("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      class: "h-5 w-5",
                      style: normalizeStyle({ "color": unref(colorStore).currentColor.primary }),
                      fill: "none",
                      viewBox: "0 0 24 24",
                      stroke: "currentColor"
                    }, _cache[2] || (_cache[2] = [
                      createBaseVNode("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "2",
                        d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      }, null, -1)
                    ]), 4))
                  ], 4),
                  createBaseVNode("h4", {
                    class: "text-lg font-semibold",
                    style: normalizeStyle({ "color": unref(colorStore).currentColor.primary })
                  }, toDisplayString(unref(t)("projects.project1.shortDescription")), 5)
                ]),
                createBaseVNode("div", _hoisted_7$1, [
                  createBaseVNode("p", null, toDisplayString(unref(t)("projects.project1.description")), 1)
                ])
              ]),
              createBaseVNode("div", _hoisted_8$1, [
                createBaseVNode("div", _hoisted_9$1, [
                  createBaseVNode("div", _hoisted_10$1, [
                    createBaseVNode("div", {
                      class: "h-8 w-8 rounded-lg flex items-center justify-center mr-3",
                      style: normalizeStyle({ "background-color": unref(colorStore).currentColor.primary + "20" })
                    }, [
                      (openBlock(), createElementBlock("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        class: "h-5 w-5",
                        style: normalizeStyle({ "color": unref(colorStore).currentColor.primary }),
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor"
                      }, _cache[3] || (_cache[3] = [
                        createBaseVNode("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          "stroke-width": "2",
                          d: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        }, null, -1)
                      ]), 4))
                    ], 4),
                    createBaseVNode("h4", {
                      class: "text-lg font-semibold",
                      style: normalizeStyle({ "color": unref(colorStore).currentColor.primary })
                    }, toDisplayString(unref(t)("projects.teamSize")), 5)
                  ]),
                  createBaseVNode("div", _hoisted_11$1, [
                    createBaseVNode("div", {
                      class: "text-3xl font-bold",
                      style: normalizeStyle({ "color": unref(colorStore).currentColor.primary })
                    }, "8", 4),
                    createBaseVNode("p", _hoisted_12$1, toDisplayString(unref(t)("projects.teamSizeDescription")), 1)
                  ])
                ]),
                createBaseVNode("div", _hoisted_13$1, [
                  createBaseVNode("div", _hoisted_14$1, [
                    createBaseVNode("div", {
                      class: "h-8 w-8 rounded-lg flex items-center justify-center mr-3",
                      style: normalizeStyle({ "background-color": unref(colorStore).currentColor.primary + "20" })
                    }, [
                      (openBlock(), createElementBlock("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        class: "h-5 w-5",
                        style: normalizeStyle({ "color": unref(colorStore).currentColor.primary }),
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor"
                      }, _cache[4] || (_cache[4] = [
                        createBaseVNode("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          "stroke-width": "2",
                          d: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        }, null, -1)
                      ]), 4))
                    ], 4),
                    createBaseVNode("h4", {
                      class: "text-lg font-semibold",
                      style: normalizeStyle({ "color": unref(colorStore).currentColor.primary })
                    }, toDisplayString(unref(t)("projects.myRole")), 5)
                  ]),
                  createBaseVNode("div", _hoisted_15$1, [
                    createBaseVNode("div", {
                      class: "font-bold",
                      style: normalizeStyle({ "color": unref(colorStore).currentColor.primary })
                    }, toDisplayString(unref(t)("projects.project1.role")), 5),
                    createBaseVNode("p", _hoisted_16$1, toDisplayString(unref(t)("projects.project1.roleDescription")), 1)
                  ])
                ]),
                createBaseVNode("div", _hoisted_17$1, [
                  createBaseVNode("div", _hoisted_18$1, [
                    createBaseVNode("div", {
                      class: "h-8 w-8 rounded-lg flex items-center justify-center mr-3",
                      style: normalizeStyle({ "background-color": unref(colorStore).currentColor.primary + "20" })
                    }, [
                      (openBlock(), createElementBlock("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        class: "h-5 w-5",
                        style: normalizeStyle({ "color": unref(colorStore).currentColor.primary }),
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor"
                      }, _cache[5] || (_cache[5] = [
                        createBaseVNode("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          "stroke-width": "2",
                          d: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                        }, null, -1)
                      ]), 4))
                    ], 4),
                    createBaseVNode("h4", {
                      class: "text-lg font-semibold",
                      style: normalizeStyle({ "color": unref(colorStore).currentColor.primary })
                    }, toDisplayString(unref(t)("projects.technologyStack")), 5)
                  ]),
                  createBaseVNode("div", _hoisted_19$1, [
                    createBaseVNode("div", _hoisted_20$1, [
                      createBaseVNode("a", _hoisted_21$1, [
                        _cache[6] || (_cache[6] = createBaseVNode("svg", {
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
                            d: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                          })
                        ], -1)),
                        createTextVNode(" " + toDisplayString(unref(t)("projects.adminDashboard")), 1)
                      ])
                    ]),
                    createBaseVNode("div", _hoisted_22$1, [
                      createBaseVNode("a", {
                        href: "https://team03.cyvietnam.id.vn",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        class: normalizeClass(["flex items-center text-gray-700 dark:text-gray-300 transition-colors", { "hover:text-theme-primary": true }]),
                        style: normalizeStyle({ "--theme-primary": unref(colorStore).currentColor.primary })
                      }, [
                        _cache[7] || (_cache[7] = createBaseVNode("svg", {
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
                            d: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                          })
                        ], -1)),
                        createTextVNode(" " + toDisplayString(unref(t)("projects.userWebsite")), 1)
                      ], 4)
                    ]),
                    createBaseVNode("div", _hoisted_23$1, [
                      createBaseVNode("a", {
                        href: "https://github.com/vanminhtruong/Team03-cy/tree/main/Team03-Admin",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        class: normalizeClass(["flex items-center text-gray-700 dark:text-gray-300 transition-colors", { "hover:text-theme-primary": true }]),
                        style: normalizeStyle({ "--theme-primary": unref(colorStore).currentColor.primary })
                      }, [
                        _cache[8] || (_cache[8] = createBaseVNode("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          class: "h-5 w-5 mr-2",
                          fill: "currentColor",
                          viewBox: "0 0 24 24"
                        }, [
                          createBaseVNode("path", { d: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" })
                        ], -1)),
                        createTextVNode(" " + toDisplayString(unref(t)("projects.adminRepository")), 1)
                      ], 4)
                    ]),
                    createBaseVNode("div", _hoisted_24$1, [
                      createBaseVNode("a", _hoisted_25$1, [
                        _cache[9] || (_cache[9] = createBaseVNode("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          class: "h-5 w-5 mr-2",
                          fill: "currentColor",
                          viewBox: "0 0 24 24"
                        }, [
                          createBaseVNode("path", { d: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" })
                        ], -1)),
                        createTextVNode(" " + toDisplayString(unref(t)("projects.userRepository")), 1)
                      ])
                    ]),
                    createBaseVNode("div", _hoisted_26$1, [
                      createBaseVNode("span", {
                        class: "px-2 py-1 text-xs font-medium rounded mr-2",
                        style: normalizeStyle({ "background-color": unref(colorStore).currentColor.primary + "20", "color": unref(colorStore).currentColor.primary })
                      }, toDisplayString(unref(t)("projects.frontEnd")), 5),
                      _cache[10] || (_cache[10] = createBaseVNode("span", { class: "text-gray-700 dark:text-gray-300" }, "VueJS, NextJS", -1))
                    ]),
                    createBaseVNode("div", _hoisted_27$1, [
                      createBaseVNode("span", {
                        class: "px-2 py-1 text-xs font-medium rounded mr-2",
                        style: normalizeStyle({ "background-color": unref(colorStore).currentColor.secondary + "20", "color": unref(colorStore).currentColor.secondary })
                      }, toDisplayString(unref(t)("projects.backEnd")), 5),
                      _cache[11] || (_cache[11] = createBaseVNode("span", { class: "text-gray-700 dark:text-gray-300" }, "Spring Boot", -1))
                    ])
                  ])
                ])
              ]),
              createBaseVNode("div", _hoisted_28$1, [
                createBaseVNode("div", _hoisted_29$1, [
                  createBaseVNode("div", {
                    class: "h-8 w-8 rounded-lg flex items-center justify-center mr-3",
                    style: normalizeStyle({ "background-color": unref(colorStore).currentColor.primary + "20" })
                  }, [
                    (openBlock(), createElementBlock("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      class: "h-5 w-5",
                      style: normalizeStyle({ "color": unref(colorStore).currentColor.primary }),
                      fill: "none",
                      viewBox: "0 0 24 24",
                      stroke: "currentColor"
                    }, _cache[12] || (_cache[12] = [
                      createBaseVNode("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "2",
                        d: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                      }, null, -1)
                    ]), 4))
                  ], 4),
                  createBaseVNode("h4", {
                    class: "text-lg font-semibold",
                    style: normalizeStyle({ "color": unref(colorStore).currentColor.primary })
                  }, toDisplayString(unref(t)("projects.keyResponsibilities")), 5)
                ]),
                createBaseVNode("div", _hoisted_30$1, [
                  createBaseVNode("div", _hoisted_31$1, [
                    createBaseVNode("div", _hoisted_32$1, [
                      createBaseVNode("span", {
                        class: "px-2 py-1 text-xs font-medium rounded mr-2",
                        style: normalizeStyle({ "background-color": unref(colorStore).currentColor.primary + "20", "color": unref(colorStore).currentColor.primary })
                      }, toDisplayString(unref(t)("projects.superAdmin")), 5)
                    ]),
                    createBaseVNode("ul", _hoisted_33$1, [
                      createBaseVNode("li", _hoisted_34$1, [
                        (openBlock(), createElementBlock("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          class: "h-5 w-5 mr-2 flex-shrink-0 mt-0.5",
                          style: normalizeStyle({ "color": unref(colorStore).currentColor.secondary }),
                          fill: "none",
                          viewBox: "0 0 24 24",
                          stroke: "currentColor"
                        }, _cache[13] || (_cache[13] = [
                          createBaseVNode("path", {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            "stroke-width": "2",
                            d: "M9 12l2 2 4-4"
                          }, null, -1)
                        ]), 4)),
                        createBaseVNode("span", _hoisted_35$1, toDisplayString(unref(t)("projects.project1.responsibility1")), 1)
                      ]),
                      createBaseVNode("li", _hoisted_36$1, [
                        (openBlock(), createElementBlock("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          class: "h-5 w-5 mr-2 flex-shrink-0 mt-0.5",
                          style: normalizeStyle({ "color": unref(colorStore).currentColor.secondary }),
                          fill: "none",
                          viewBox: "0 0 24 24",
                          stroke: "currentColor"
                        }, _cache[14] || (_cache[14] = [
                          createBaseVNode("path", {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            "stroke-width": "2",
                            d: "M9 12l2 2 4-4"
                          }, null, -1)
                        ]), 4)),
                        createBaseVNode("span", _hoisted_37$1, toDisplayString(unref(t)("projects.project1.responsibility2")), 1)
                      ]),
                      createBaseVNode("li", _hoisted_38$1, [
                        (openBlock(), createElementBlock("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          class: "h-5 w-5 mr-2 flex-shrink-0 mt-0.5",
                          style: normalizeStyle({ "color": unref(colorStore).currentColor.secondary }),
                          fill: "none",
                          viewBox: "0 0 24 24",
                          stroke: "currentColor"
                        }, _cache[15] || (_cache[15] = [
                          createBaseVNode("path", {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            "stroke-width": "2",
                            d: "M9 12l2 2 4-4"
                          }, null, -1)
                        ]), 4)),
                        createBaseVNode("span", _hoisted_39$1, toDisplayString(unref(t)("projects.project1.responsibility3")), 1)
                      ])
                    ])
                  ]),
                  createBaseVNode("div", null, [
                    createBaseVNode("div", _hoisted_40$1, [
                      createBaseVNode("span", {
                        class: "px-2 py-1 text-xs font-medium rounded mr-2",
                        style: normalizeStyle({ "background-color": unref(colorStore).currentColor.primary + "20", "color": unref(colorStore).currentColor.primary })
                      }, toDisplayString(unref(t)("projects.userFeatures")), 5)
                    ]),
                    createBaseVNode("div", _hoisted_41$1, [
                      createBaseVNode("ul", _hoisted_42, [
                        createBaseVNode("li", _hoisted_43, [
                          (openBlock(), createElementBlock("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            class: "h-5 w-5 mr-2 flex-shrink-0 mt-0.5",
                            style: normalizeStyle({ "color": unref(colorStore).currentColor.secondary }),
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor"
                          }, _cache[16] || (_cache[16] = [
                            createBaseVNode("path", {
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                              "stroke-width": "2",
                              d: "M9 12l2 2 4-4"
                            }, null, -1)
                          ]), 4)),
                          createBaseVNode("span", _hoisted_44, toDisplayString(unref(t)("projects.project1.responsibility4")), 1)
                        ]),
                        createBaseVNode("li", _hoisted_45, [
                          (openBlock(), createElementBlock("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            class: "h-5 w-5 mr-2 flex-shrink-0 mt-0.5",
                            style: normalizeStyle({ "color": unref(colorStore).currentColor.secondary }),
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor"
                          }, _cache[17] || (_cache[17] = [
                            createBaseVNode("path", {
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                              "stroke-width": "2",
                              d: "M9 12l2 2 4-4"
                            }, null, -1)
                          ]), 4)),
                          createBaseVNode("span", _hoisted_46, toDisplayString(unref(t)("projects.project1.responsibility5")), 1)
                        ])
                      ]),
                      createBaseVNode("ul", _hoisted_47, [
                        createBaseVNode("li", _hoisted_48, [
                          (openBlock(), createElementBlock("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            class: "h-5 w-5 mr-2 flex-shrink-0 mt-0.5",
                            style: normalizeStyle({ "color": unref(colorStore).currentColor.secondary }),
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor"
                          }, _cache[18] || (_cache[18] = [
                            createBaseVNode("path", {
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                              "stroke-width": "2",
                              d: "M9 12l2 2 4-4"
                            }, null, -1)
                          ]), 4)),
                          createBaseVNode("span", _hoisted_49, toDisplayString(unref(t)("projects.project1.responsibility6")), 1)
                        ]),
                        createBaseVNode("li", _hoisted_50, [
                          (openBlock(), createElementBlock("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            class: "h-5 w-5 mr-2 flex-shrink-0 mt-0.5",
                            style: normalizeStyle({ "color": unref(colorStore).currentColor.secondary }),
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor"
                          }, _cache[19] || (_cache[19] = [
                            createBaseVNode("path", {
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                              "stroke-width": "2",
                              d: "M9 12l2 2 4-4"
                            }, null, -1)
                          ]), 4)),
                          createBaseVNode("span", _hoisted_51, toDisplayString(unref(t)("projects.project1.responsibility7")), 1)
                        ])
                      ])
                    ])
                  ])
                ])
              ])
            ])
          ])
        ]),
        _: 1
      });
    };
  }
};
const _hoisted_1$1 = { class: "bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden mb-12 transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1" };
const _hoisted_2$1 = { class: "p-8 relative" };
const _hoisted_3$1 = { class: "flex flex-col tablet:flex-col lg:flex-col xl:flex-row justify-between items-start mb-8 mt-8" };
const _hoisted_4$1 = { class: "flex items-center" };
const _hoisted_5$1 = { class: "mb-8" };
const _hoisted_6 = { class: "flex items-center mb-3" };
const _hoisted_7 = { class: "ml-11 text-gray-700 dark:text-gray-300 leading-relaxed" };
const _hoisted_8 = { class: "grid grid-cols-1 tablet:grid-cols-1 lg:grid-cols-1 xl:grid-cols-3 gap-8 mb-8" };
const _hoisted_9 = { class: "bg-gradient-to-br from-white to-purple-50 dark:from-gray-700 dark:to-gray-600 p-5 rounded-lg shadow-sm border border-purple-100 dark:border-gray-600 transform transition-all duration-300 hover:shadow-md hover:-translate-y-1" };
const _hoisted_10 = { class: "flex items-center mb-3" };
const _hoisted_11 = { class: "ml-11" };
const _hoisted_12 = { class: "text-gray-600 dark:text-gray-300 text-sm" };
const _hoisted_13 = { class: "bg-gradient-to-br from-white to-purple-50 dark:from-gray-700 dark:to-gray-600 p-5 rounded-lg shadow-sm border border-purple-100 dark:border-gray-600 transform transition-all duration-300 hover:shadow-md hover:-translate-y-1" };
const _hoisted_14 = { class: "flex items-center mb-3" };
const _hoisted_15 = { class: "ml-11" };
const _hoisted_16 = { class: "text-gray-600 dark:text-gray-300 text-sm" };
const _hoisted_17 = { class: "bg-gradient-to-br from-white to-purple-50 dark:from-gray-700 dark:to-gray-600 p-5 rounded-lg shadow-sm border border-purple-100 dark:border-gray-600 transform transition-all duration-300 hover:shadow-md hover:-translate-y-1" };
const _hoisted_18 = { class: "flex items-center mb-3" };
const _hoisted_19 = { class: "ml-11 space-y-2" };
const _hoisted_20 = { class: "flex items-center" };
const _hoisted_21 = {
  href: "https://github.com/vanminhtruong/libary.git",
  target: "_blank",
  rel: "noopener noreferrer",
  class: "flex items-center text-gray-700 dark:text-gray-300 hover:text-purple-600 transition-colors"
};
const _hoisted_22 = { class: "flex items-center" };
const _hoisted_23 = { class: "flex items-center" };
const _hoisted_24 = { class: "bg-gradient-to-br from-white to-purple-50 dark:from-gray-700 dark:to-gray-600 p-5 rounded-lg shadow-sm border border-purple-100 dark:border-gray-600" };
const _hoisted_25 = { class: "flex items-center mb-4" };
const _hoisted_26 = { class: "ml-11" };
const _hoisted_27 = { class: "grid grid-cols-1 tablet:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4" };
const _hoisted_28 = { class: "space-y-2" };
const _hoisted_29 = { class: "flex items-start" };
const _hoisted_30 = { class: "text-gray-700 dark:text-gray-400" };
const _hoisted_31 = { class: "flex items-start" };
const _hoisted_32 = { class: "text-gray-700 dark:text-gray-400" };
const _hoisted_33 = { class: "flex items-start" };
const _hoisted_34 = { class: "text-gray-700 dark:text-gray-400" };
const _hoisted_35 = { class: "space-y-2" };
const _hoisted_36 = { class: "flex items-start" };
const _hoisted_37 = { class: "text-gray-700 dark:text-gray-400" };
const _hoisted_38 = { class: "flex items-start" };
const _hoisted_39 = { class: "text-gray-700 dark:text-gray-400" };
const _hoisted_40 = { class: "flex items-start" };
const _hoisted_41 = { class: "text-gray-700 dark:text-gray-400" };
const _sfc_main$1 = {
  __name: "SoloProjectSection",
  setup(__props) {
    const colorStore = useColorStore();
    const { t } = useI18n();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(LazySection, {
        threshold: "0.1",
        rootMargin: "100px"
      }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1$1, [
            createBaseVNode("div", _hoisted_2$1, [
              createBaseVNode("div", {
                class: "absolute top-0 right-0 text-white px-6 py-2 rounded-bl-lg font-semibold text-sm uppercase tracking-wider shadow-md",
                style: normalizeStyle({ "background-image": `linear-gradient(to right, ${unref(colorStore).currentColor.primary}, ${unref(colorStore).currentColor.secondary})` })
              }, toDisplayString(unref(t)("projects.soloProject")), 5),
              createBaseVNode("div", _hoisted_3$1, [
                createBaseVNode("div", _hoisted_4$1, [
                  createBaseVNode("div", {
                    class: "h-10 w-10 rounded-lg flex items-center justify-center mr-4",
                    style: normalizeStyle({ "background-color": unref(colorStore).currentColor.secondary })
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
                        d: "M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                      })
                    ], -1)
                  ]), 4),
                  createBaseVNode("h3", {
                    class: "text-2xl font-bold",
                    style: normalizeStyle({ "color": unref(colorStore).currentColor.primary })
                  }, toDisplayString(unref(t)("projects.project2.title")), 5)
                ]),
                createBaseVNode("div", {
                  class: "flex items-center font-medium mt-4 tablet:mt-4 lg:mt-4 xl:mt-0 px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-white",
                  style: normalizeStyle({ "background-image": `linear-gradient(to right, ${unref(colorStore).currentColor.primary}, ${unref(colorStore).currentColor.secondary})` })
                }, [
                  _cache[1] || (_cache[1] = createBaseVNode("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    class: "h-5 w-5 mr-2 text-white",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor"
                  }, [
                    createBaseVNode("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2",
                      d: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    })
                  ], -1)),
                  createTextVNode(" " + toDisplayString(unref(t)("projects.project2.date")), 1)
                ], 4)
              ]),
              createBaseVNode("div", _hoisted_5$1, [
                createBaseVNode("div", _hoisted_6, [
                  createBaseVNode("div", {
                    class: "h-8 w-8 rounded-lg flex items-center justify-center mr-3",
                    style: normalizeStyle({ "background-color": unref(colorStore).currentColor.primary + "20" })
                  }, [
                    (openBlock(), createElementBlock("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      class: "h-5 w-5",
                      style: normalizeStyle({ "color": unref(colorStore).currentColor.primary }),
                      fill: "none",
                      viewBox: "0 0 24 24",
                      stroke: "currentColor"
                    }, _cache[2] || (_cache[2] = [
                      createBaseVNode("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "2",
                        d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      }, null, -1)
                    ]), 4))
                  ], 4),
                  createBaseVNode("h4", {
                    class: "text-lg font-semibold",
                    style: normalizeStyle({ "color": unref(colorStore).currentColor.primary })
                  }, toDisplayString(unref(t)("projects.project2.description").split(".")[0]), 5)
                ]),
                createBaseVNode("div", _hoisted_7, [
                  createBaseVNode("p", null, toDisplayString(unref(t)("projects.project2.description")), 1)
                ])
              ]),
              createBaseVNode("div", _hoisted_8, [
                createBaseVNode("div", _hoisted_9, [
                  createBaseVNode("div", _hoisted_10, [
                    createBaseVNode("div", {
                      class: "h-8 w-8 rounded-lg flex items-center justify-center mr-3",
                      style: normalizeStyle({ "background-color": unref(colorStore).currentColor.primary + "20" })
                    }, [
                      (openBlock(), createElementBlock("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        class: "h-5 w-5",
                        style: normalizeStyle({ "color": unref(colorStore).currentColor.primary }),
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor"
                      }, _cache[3] || (_cache[3] = [
                        createBaseVNode("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          "stroke-width": "2",
                          d: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        }, null, -1)
                      ]), 4))
                    ], 4),
                    createBaseVNode("h4", {
                      class: "text-lg font-semibold",
                      style: normalizeStyle({ "color": unref(colorStore).currentColor.primary })
                    }, toDisplayString(unref(t)("projects.teamSize")), 5)
                  ]),
                  createBaseVNode("div", _hoisted_11, [
                    createBaseVNode("div", {
                      class: "text-3xl font-bold",
                      style: normalizeStyle({ "color": unref(colorStore).currentColor.primary })
                    }, "1", 4),
                    createBaseVNode("p", _hoisted_12, toDisplayString(unref(t)("projects.project2.teamSizeDescription")), 1)
                  ])
                ]),
                createBaseVNode("div", _hoisted_13, [
                  createBaseVNode("div", _hoisted_14, [
                    createBaseVNode("div", {
                      class: "h-8 w-8 rounded-lg flex items-center justify-center mr-3",
                      style: normalizeStyle({ "background-color": unref(colorStore).currentColor.primary + "20" })
                    }, [
                      (openBlock(), createElementBlock("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        class: "h-5 w-5",
                        style: normalizeStyle({ "color": unref(colorStore).currentColor.primary }),
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor"
                      }, _cache[4] || (_cache[4] = [
                        createBaseVNode("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          "stroke-width": "2",
                          d: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        }, null, -1)
                      ]), 4))
                    ], 4),
                    createBaseVNode("h4", {
                      class: "text-lg font-semibold",
                      style: normalizeStyle({ "color": unref(colorStore).currentColor.primary })
                    }, toDisplayString(unref(t)("projects.myRole")), 5)
                  ]),
                  createBaseVNode("div", _hoisted_15, [
                    createBaseVNode("div", {
                      class: "font-bold",
                      style: normalizeStyle({ "color": unref(colorStore).currentColor.primary })
                    }, toDisplayString(unref(t)("projects.project2.role")), 5),
                    createBaseVNode("p", _hoisted_16, toDisplayString(unref(t)("projects.project2.roleDescription")), 1)
                  ])
                ]),
                createBaseVNode("div", _hoisted_17, [
                  createBaseVNode("div", _hoisted_18, [
                    createBaseVNode("div", {
                      class: "h-8 w-8 rounded-lg flex items-center justify-center mr-3",
                      style: normalizeStyle({ "background-color": unref(colorStore).currentColor.primary + "20" })
                    }, [
                      (openBlock(), createElementBlock("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        class: "h-5 w-5",
                        style: normalizeStyle({ "color": unref(colorStore).currentColor.primary }),
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor"
                      }, _cache[5] || (_cache[5] = [
                        createBaseVNode("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          "stroke-width": "2",
                          d: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                        }, null, -1)
                      ]), 4))
                    ], 4),
                    createBaseVNode("h4", {
                      class: "text-lg font-semibold",
                      style: normalizeStyle({ "color": unref(colorStore).currentColor.primary })
                    }, toDisplayString(unref(t)("projects.technologyStack")), 5)
                  ]),
                  createBaseVNode("div", _hoisted_19, [
                    createBaseVNode("div", _hoisted_20, [
                      createBaseVNode("a", _hoisted_21, [
                        _cache[6] || (_cache[6] = createBaseVNode("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          class: "h-5 w-5 mr-2",
                          fill: "currentColor",
                          viewBox: "0 0 24 24"
                        }, [
                          createBaseVNode("path", { d: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" })
                        ], -1)),
                        createTextVNode(" " + toDisplayString(unref(t)("contact.libraryProject")), 1)
                      ])
                    ]),
                    createBaseVNode("div", _hoisted_22, [
                      createBaseVNode("span", {
                        class: "px-2 py-1 text-xs font-medium rounded mr-2",
                        style: normalizeStyle({ "background-color": unref(colorStore).currentColor.primary + "20", "color": unref(colorStore).currentColor.primary })
                      }, toDisplayString(unref(t)("projects.frontEnd")), 5),
                      _cache[7] || (_cache[7] = createBaseVNode("span", { class: "text-gray-700 dark:text-gray-300" }, "Vue.js, React.js", -1))
                    ]),
                    createBaseVNode("div", _hoisted_23, [
                      createBaseVNode("span", {
                        class: "px-2 py-1 text-xs font-medium rounded mr-2",
                        style: normalizeStyle({ "background-color": unref(colorStore).currentColor.secondary + "20", "color": unref(colorStore).currentColor.secondary })
                      }, toDisplayString(unref(t)("projects.backEnd")), 5),
                      _cache[8] || (_cache[8] = createBaseVNode("span", { class: "text-gray-700 dark:text-gray-300" }, "Laravel", -1))
                    ])
                  ])
                ])
              ]),
              createBaseVNode("div", _hoisted_24, [
                createBaseVNode("div", _hoisted_25, [
                  createBaseVNode("div", {
                    class: "h-8 w-8 rounded-lg flex items-center justify-center mr-3",
                    style: normalizeStyle({ "background-color": unref(colorStore).currentColor.primary + "20" })
                  }, [
                    (openBlock(), createElementBlock("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      class: "h-5 w-5",
                      style: normalizeStyle({ "color": unref(colorStore).currentColor.primary }),
                      fill: "none",
                      viewBox: "0 0 24 24",
                      stroke: "currentColor"
                    }, _cache[9] || (_cache[9] = [
                      createBaseVNode("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "2",
                        d: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                      }, null, -1)
                    ]), 4))
                  ], 4),
                  createBaseVNode("h4", {
                    class: "text-lg font-semibold",
                    style: normalizeStyle({ "color": unref(colorStore).currentColor.primary })
                  }, toDisplayString(unref(t)("projects.keyResponsibilities")), 5)
                ]),
                createBaseVNode("div", _hoisted_26, [
                  createBaseVNode("div", _hoisted_27, [
                    createBaseVNode("ul", _hoisted_28, [
                      createBaseVNode("li", _hoisted_29, [
                        (openBlock(), createElementBlock("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          class: "h-5 w-5 mr-2 flex-shrink-0 mt-0.5",
                          style: normalizeStyle({ "color": unref(colorStore).currentColor.secondary }),
                          fill: "none",
                          viewBox: "0 0 24 24",
                          stroke: "currentColor"
                        }, _cache[10] || (_cache[10] = [
                          createBaseVNode("path", {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            "stroke-width": "2",
                            d: "M9 12l2 2 4-4"
                          }, null, -1)
                        ]), 4)),
                        createBaseVNode("span", _hoisted_30, toDisplayString(unref(t)("projects.project2.responsibility1")), 1)
                      ]),
                      createBaseVNode("li", _hoisted_31, [
                        (openBlock(), createElementBlock("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          class: "h-5 w-5 mr-2 flex-shrink-0 mt-0.5",
                          style: normalizeStyle({ "color": unref(colorStore).currentColor.secondary }),
                          fill: "none",
                          viewBox: "0 0 24 24",
                          stroke: "currentColor"
                        }, _cache[11] || (_cache[11] = [
                          createBaseVNode("path", {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            "stroke-width": "2",
                            d: "M9 12l2 2 4-4"
                          }, null, -1)
                        ]), 4)),
                        createBaseVNode("span", _hoisted_32, toDisplayString(unref(t)("projects.project2.responsibility2")), 1)
                      ]),
                      createBaseVNode("li", _hoisted_33, [
                        (openBlock(), createElementBlock("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          class: "h-5 w-5 mr-2 flex-shrink-0 mt-0.5",
                          style: normalizeStyle({ "color": unref(colorStore).currentColor.secondary }),
                          fill: "none",
                          viewBox: "0 0 24 24",
                          stroke: "currentColor"
                        }, _cache[12] || (_cache[12] = [
                          createBaseVNode("path", {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            "stroke-width": "2",
                            d: "M9 12l2 2 4-4"
                          }, null, -1)
                        ]), 4)),
                        createBaseVNode("span", _hoisted_34, toDisplayString(unref(t)("projects.project2.responsibility3")), 1)
                      ])
                    ]),
                    createBaseVNode("ul", _hoisted_35, [
                      createBaseVNode("li", _hoisted_36, [
                        (openBlock(), createElementBlock("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          class: "h-5 w-5 mr-2 flex-shrink-0 mt-0.5",
                          style: normalizeStyle({ "color": unref(colorStore).currentColor.secondary }),
                          fill: "none",
                          viewBox: "0 0 24 24",
                          stroke: "currentColor"
                        }, _cache[13] || (_cache[13] = [
                          createBaseVNode("path", {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            "stroke-width": "2",
                            d: "M9 12l2 2 4-4"
                          }, null, -1)
                        ]), 4)),
                        createBaseVNode("span", _hoisted_37, toDisplayString(unref(t)("projects.project2.responsibility4")), 1)
                      ]),
                      createBaseVNode("li", _hoisted_38, [
                        (openBlock(), createElementBlock("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          class: "h-5 w-5 mr-2 flex-shrink-0 mt-0.5",
                          style: normalizeStyle({ "color": unref(colorStore).currentColor.secondary }),
                          fill: "none",
                          viewBox: "0 0 24 24",
                          stroke: "currentColor"
                        }, _cache[14] || (_cache[14] = [
                          createBaseVNode("path", {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            "stroke-width": "2",
                            d: "M9 12l2 2 4-4"
                          }, null, -1)
                        ]), 4)),
                        createBaseVNode("span", _hoisted_39, toDisplayString(unref(t)("projects.project2.responsibility5")), 1)
                      ]),
                      createBaseVNode("li", _hoisted_40, [
                        (openBlock(), createElementBlock("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          class: "h-5 w-5 mr-2 flex-shrink-0 mt-0.5",
                          style: normalizeStyle({ "color": unref(colorStore).currentColor.secondary }),
                          fill: "none",
                          viewBox: "0 0 24 24",
                          stroke: "currentColor"
                        }, _cache[15] || (_cache[15] = [
                          createBaseVNode("path", {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            "stroke-width": "2",
                            d: "M9 12l2 2 4-4"
                          }, null, -1)
                        ]), 4)),
                        createBaseVNode("span", _hoisted_41, toDisplayString(unref(t)("projects.project2.responsibility6")), 1)
                      ])
                    ])
                  ])
                ])
              ])
            ])
          ])
        ]),
        _: 1
      });
    };
  }
};
const _hoisted_1 = { class: "min-h-screen py-10 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900" };
const _hoisted_2 = { class: "container mx-auto px-4 sm:px-6 lg:px-8" };
const _hoisted_3 = { class: "mb-16" };
const _hoisted_4 = { class: "flex items-center mb-10" };
const _hoisted_5 = { class: "mr-4 hidden md:block" };
const _sfc_main = {
  __name: "ExperienceView",
  setup(__props) {
    const colorStore = useColorStore();
    const { t } = useI18n();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createVNode(LazySection, {
            threshold: "0.1",
            rootMargin: "100px",
            class: "mb-16"
          }, {
            default: withCtx(() => [
              createVNode(_sfc_main$3)
            ]),
            _: 1
          }),
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("div", _hoisted_4, [
              createBaseVNode("div", _hoisted_5, [
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
                      d: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    })
                  ], -1)
                ]), 4)
              ]),
              createBaseVNode("h2", {
                class: "text-3xl font-bold inline-block pb-2 border-b-4 transform transition-all duration-300 hover:scale-105",
                style: normalizeStyle({ "color": unref(colorStore).currentColor.primary, "border-color": unref(colorStore).currentColor.primary })
              }, toDisplayString(unref(t)("projects.title").toUpperCase()), 5)
            ]),
            createVNode(_sfc_main$2),
            createVNode(_sfc_main$1)
          ])
        ])
      ]);
    };
  }
};
export {
  _sfc_main as default
};
