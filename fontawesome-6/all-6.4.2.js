/*!
 * Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2023 Fonticons, Inc.
 */ !(function () {
    "use strict";
    var t,
        a = {},
        e = {};
    try {
        "undefined" != typeof window && (a = window), "undefined" != typeof document && (e = document);
    } catch (n) {}
    (a.navigator || {}).userAgent;
    var r = a;
    function i(t, a) {
        var e = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            a &&
                (n = n.filter(function (a) {
                    return Object.getOwnPropertyDescriptor(t, a).enumerable;
                })),
                e.push.apply(e, n);
        }
        return e;
    }
    function o(t) {
        for (var a = 1; a < arguments.length; a++) {
            var e = null != arguments[a] ? arguments[a] : {};
            a % 2
                ? i(Object(e), !0).forEach(function (a) {
                      s(t, a, e[a]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e))
                : i(Object(e)).forEach(function (a) {
                      Object.defineProperty(t, a, Object.getOwnPropertyDescriptor(e, a));
                  });
        }
        return t;
    }
    function s(t, a, e) {
        return a in t ? Object.defineProperty(t, a, { value: e, enumerable: !0, configurable: !0, writable: !0 }) : (t[a] = e), t;
    }
    function f(t) {
        return (
            (function t(a) {
                if (Array.isArray(a)) return c(a);
            })(t) ||
            (function t(a) {
                if (("undefined" != typeof Symbol && null != a[Symbol.iterator]) || null != a["@@iterator"]) return Array.from(a);
            })(t) ||
            (function t(a, e) {
                if (a) {
                    if ("string" == typeof a) return c(a, e);
                    var n = Object.prototype.toString.call(a).slice(8, -1);
                    if (("Object" === n && a.constructor && (n = a.constructor.name), "Map" === n || "Set" === n)) return Array.from(a);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return c(a, e);
                }
            })(t) ||
            (function t() {
                throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            })()
        );
    }
    function c(t, a) {
        (null == a || a > t.length) && (a = t.length);
        for (var e = 0, n = Array(a); e < a; e++) n[e] = t[e];
        return n;
    }
    var l,
        u = "___FONT_AWESOME___",
        m = (function () {
            try {
                return !0;
            } catch (t) {
                return !1;
            }
        })(),
        d = "classic",
        _ = "sharp",
        p =
            ((l = (s((t = {}), d, { solid: "fas", regular: "far", light: "fal", thin: "fat", duotone: "fad", brands: "fab", kit: "fak" }), s(t, _, { solid: "fass", regular: "fasr", light: "fasl" }), t)),
            new Proxy(l, {
                get: function t(a, e) {
                    return e in a ? a[e] : a[d];
                },
            }));
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
    var v = new Set();
    Object.keys(p[d]).map(v.add.bind(v)), Object.keys(p[_]).map(v.add.bind(v));
    var $ = r || {};
    $[u] || ($[u] = {}), $[u].styles || ($[u].styles = {}), $[u].hooks || ($[u].hooks = {}), $[u].shims || ($[u].shims = []);
    var g = $[u];
    function b(t) {
        return Object.keys(t).reduce(function (a, e) {
            var n = t[e];
            return n.icon ? (a[n.iconName] = n.icon) : (a[e] = n), a;
        }, {});
    }
    function h(t, a) {
        var e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            n = e.skipHooks,
            r = b(a);
        "function" != typeof g.hooks.addPack || (void 0 !== n && n) ? (g.styles[t] = o(o({}, g.styles[t] || {}), r)) : g.hooks.addPack(t, b(a)), "fas" === t && h("fa", a);
    }
    var y = {
        "linkedin-in": [
            448,
            512,
            [],
            "f0e1",
            "M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z",
        ],
        github: [
            496,
            512,
            [],
            "f09b",
            "M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z",
        ],
    };
    !(function t(a) {
        try {
            for (var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) n[r - 1] = arguments[r];
            a.apply(void 0, n);
        } catch (i) {
            if (!m) throw i;
        }
    })(function () {
        h("fab", y), h("fa-brands", y);
    });
})(),
    (function () {
        "use strict";
        function t(t, a) {
            var e = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(t);
                a &&
                    (n = n.filter(function (a) {
                        return Object.getOwnPropertyDescriptor(t, a).enumerable;
                    })),
                    e.push.apply(e, n);
            }
            return e;
        }
        function a(a) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2
                    ? t(Object(n), !0).forEach(function (t) {
                          i(a, t, n[t]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(n))
                    : t(Object(n)).forEach(function (t) {
                          Object.defineProperty(a, t, Object.getOwnPropertyDescriptor(n, t));
                      });
            }
            return a;
        }
        function e(t) {
            return (e =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      })(t);
        }
        function n() {
            n = function (t, a) {
                return new e(t, void 0, a);
            };
            var t = RegExp.prototype,
                a = new WeakMap();
            function e(t, n, r) {
                var i = RegExp(t, n);
                return a.set(i, r || a.get(t)), o(i, e.prototype);
            }
            function r(t, e) {
                var n = a.get(e);
                return Object.keys(n).reduce(function (a, e) {
                    return (a[e] = t[n[e]]), a;
                }, Object.create(null));
            }
            return (
                (function t(a, e) {
                    if ("function" != typeof e && null !== e) throw TypeError("Super expression must either be null or a function");
                    (a.prototype = Object.create(e && e.prototype, { constructor: { value: a, writable: !0, configurable: !0 } })), Object.defineProperty(a, "prototype", { writable: !1 }), e && o(a, e);
                })(e, RegExp),
                (e.prototype.exec = function (a) {
                    var e = t.exec.call(this, a);
                    return e && (e.groups = r(e, this)), e;
                }),
                (e.prototype[Symbol.replace] = function (e, n) {
                    if ("string" == typeof n) {
                        var i = a.get(this);
                        return t[Symbol.replace].call(
                            this,
                            e,
                            n.replace(/\$<([^>]+)>/g, function (t, a) {
                                return "$" + i[a];
                            })
                        );
                    }
                    if ("function" == typeof n) {
                        var o = this;
                        return t[Symbol.replace].call(this, e, function () {
                            var t = arguments;
                            return "object" != typeof t[t.length - 1] && (t = [].slice.call(t)).push(r(t, o)), n.apply(this, t);
                        });
                    }
                    return t[Symbol.replace].call(this, e, n);
                }),
                n.apply(this, arguments)
            );
        }
        function r(t, a) {
            for (var e = 0; e < a.length; e++) {
                var n = a[e];
                (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
            }
        }
        function i(t, a, e) {
            return a in t ? Object.defineProperty(t, a, { value: e, enumerable: !0, configurable: !0, writable: !0 }) : (t[a] = e), t;
        }
        function o(t, a) {
            return (o =
                Object.setPrototypeOf ||
                function t(a, e) {
                    return (a.__proto__ = e), a;
                })(t, a);
        }
        function s(t, a) {
            return (
                (function t(a) {
                    if (Array.isArray(a)) return a;
                })(t) ||
                (function t(a, e) {
                    var n,
                        r,
                        i = null == a ? null : ("undefined" != typeof Symbol && a[Symbol.iterator]) || a["@@iterator"];
                    if (null != i) {
                        var o = [],
                            s = !0,
                            f = !1;
                        try {
                            for (i = i.call(a); !(s = (n = i.next()).done) && (o.push(n.value), !e || o.length !== e); s = !0);
                        } catch (c) {
                            (f = !0), (r = c);
                        } finally {
                            try {
                                s || null == i.return || i.return();
                            } finally {
                                if (f) throw r;
                            }
                        }
                        return o;
                    }
                })(t, a) ||
                c(t, a) ||
                (function t() {
                    throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                })()
            );
        }
        function f(t) {
            return (
                (function t(a) {
                    if (Array.isArray(a)) return l(a);
                })(t) ||
                (function t(a) {
                    if (("undefined" != typeof Symbol && null != a[Symbol.iterator]) || null != a["@@iterator"]) return Array.from(a);
                })(t) ||
                c(t) ||
                (function t() {
                    throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                })()
            );
        }
        function c(t, a) {
            if (t) {
                if ("string" == typeof t) return l(t, a);
                var e = Object.prototype.toString.call(t).slice(8, -1);
                if (("Object" === e && t.constructor && (e = t.constructor.name), "Map" === e || "Set" === e)) return Array.from(t);
                if ("Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return l(t, a);
            }
        }
        function l(t, a) {
            (null == a || a > t.length) && (a = t.length);
            for (var e = 0, n = Array(a); e < a; e++) n[e] = t[e];
            return n;
        }
        var u,
            m,
            d,
            _,
            p,
            v,
            $,
            g,
            b,
            h,
            y,
            k = function t() {},
            w = {},
            x = {},
            A = null,
            N = { mark: k, measure: k };
        try {
            "undefined" != typeof window && (w = window), "undefined" != typeof document && (x = document), "undefined" != typeof MutationObserver && (A = MutationObserver), "undefined" != typeof performance && (N = performance);
        } catch (C) {}
        var P = (w.navigator || {}).userAgent,
            z = void 0 === P ? "" : P,
            S = w,
            M = x,
            E = A,
            O = N,
            D = !!S.document,
            I = !!M.documentElement && !!M.head && "function" == typeof M.addEventListener && "function" == typeof M.createElement,
            L = ~z.indexOf("MSIE") || ~z.indexOf("Trident/"),
            Y = "___FONT_AWESOME___",
            F = "fa",
            R = "svg-inline--fa",
            T = "data-fa-i2svg",
            j = "data-fa-pseudo-element",
            H = "data-prefix",
            W = "data-icon",
            V = "fontawesome-i2svg",
            U = ["HTML", "HEAD", "STYLE", "SCRIPT"],
            B = (function () {
                try {
                    return !0;
                } catch (t) {
                    return !1;
                }
            })(),
            X = "classic",
            q = "sharp",
            G = [X, q];
        function K(t) {
            return new Proxy(t, {
                get: function t(a, e) {
                    return e in a ? a[e] : a[X];
                },
            });
        }
        var J = K(
                (i((_ = {}), X, {
                    fa: "solid",
                    fas: "solid",
                    "fa-solid": "solid",
                    far: "regular",
                    "fa-regular": "regular",
                    fal: "light",
                    "fa-light": "light",
                    fat: "thin",
                    "fa-thin": "thin",
                    fad: "duotone",
                    "fa-duotone": "duotone",
                    fab: "brands",
                    "fa-brands": "brands",
                    fak: "kit",
                    "fa-kit": "kit",
                }),
                i(_, q, { fa: "solid", fass: "solid", "fa-solid": "solid", fasr: "regular", "fa-regular": "regular", fasl: "light", "fa-light": "light" }),
                _)
            ),
            Q = K((i((p = {}), X, { solid: "fas", regular: "far", light: "fal", thin: "fat", duotone: "fad", brands: "fab", kit: "fak" }), i(p, q, { solid: "fass", regular: "fasr", light: "fasl" }), p)),
            Z = K((i((v = {}), X, { fab: "fa-brands", fad: "fa-duotone", fak: "fa-kit", fal: "fa-light", far: "fa-regular", fas: "fa-solid", fat: "fa-thin" }), i(v, q, { fass: "fa-solid", fasr: "fa-regular", fasl: "fa-light" }), v)),
            tt = K(
                (i(($ = {}), X, { "fa-brands": "fab", "fa-duotone": "fad", "fa-kit": "fak", "fa-light": "fal", "fa-regular": "far", "fa-solid": "fas", "fa-thin": "fat" }),
                i($, q, { "fa-solid": "fass", "fa-regular": "fasr", "fa-light": "fasl" }),
                $)
            ),
            ta = /fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,
            te = "fa-layers-text",
            tn = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,
            tr = K((i((g = {}), X, { 900: "fas", 400: "far", normal: "far", 300: "fal", 100: "fat" }), i(g, q, { 900: "fass", 400: "fasr", 300: "fasl" }), g)),
            ti = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            to = ti.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
            ts = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"],
            tf = { GROUP: "duotone-group", SWAP_OPACITY: "swap-opacity", PRIMARY: "primary", SECONDARY: "secondary" },
            tc = new Set();
        Object.keys(Q[X]).map(tc.add.bind(tc)), Object.keys(Q[q]).map(tc.add.bind(tc));
        var tl = []
                .concat(G, f(tc), [
                    "2xs",
                    "xs",
                    "sm",
                    "lg",
                    "xl",
                    "2xl",
                    "beat",
                    "border",
                    "fade",
                    "beat-fade",
                    "bounce",
                    "flip-both",
                    "flip-horizontal",
                    "flip-vertical",
                    "flip",
                    "fw",
                    "inverse",
                    "layers-counter",
                    "layers-text",
                    "layers",
                    "li",
                    "pull-left",
                    "pull-right",
                    "pulse",
                    "rotate-180",
                    "rotate-270",
                    "rotate-90",
                    "rotate-by",
                    "shake",
                    "spin-pulse",
                    "spin-reverse",
                    "spin",
                    "stack-1x",
                    "stack-2x",
                    "stack",
                    "ul",
                    tf.GROUP,
                    tf.SWAP_OPACITY,
                    tf.PRIMARY,
                    tf.SECONDARY,
                ])
                .concat(
                    ti.map(function (t) {
                        return "".concat(t, "x");
                    })
                )
                .concat(
                    to.map(function (t) {
                        return "w-".concat(t);
                    })
                ),
            tu = S.FontAwesomeConfig || {};
        M &&
            "function" == typeof M.querySelector &&
            [
                ["data-family-prefix", "familyPrefix"],
                ["data-css-prefix", "cssPrefix"],
                ["data-family-default", "familyDefault"],
                ["data-style-default", "styleDefault"],
                ["data-replacement-class", "replacementClass"],
                ["data-auto-replace-svg", "autoReplaceSvg"],
                ["data-auto-add-css", "autoAddCss"],
                ["data-auto-a11y", "autoA11y"],
                ["data-search-pseudo-elements", "searchPseudoElements"],
                ["data-observe-mutations", "observeMutations"],
                ["data-mutate-approach", "mutateApproach"],
                ["data-keep-original-source", "keepOriginalSource"],
                ["data-measure-performance", "measurePerformance"],
                ["data-show-missing-icons", "showMissingIcons"],
            ].forEach(function (t) {
                var a,
                    e = s(t, 2),
                    n = e[0],
                    r = e[1],
                    i =
                        "" ===
                            (a = (function t(a) {
                                var e = M.querySelector("script[" + a + "]");
                                if (e) return e.getAttribute(a);
                            })(n)) ||
                        ("false" !== a && ("true" === a || a));
                null != i && (tu[r] = i);
            });
        var tm = {
            styleDefault: "solid",
            familyDefault: "classic",
            cssPrefix: F,
            replacementClass: R,
            autoReplaceSvg: !0,
            autoAddCss: !0,
            autoA11y: !0,
            searchPseudoElements: !1,
            observeMutations: !0,
            mutateApproach: "async",
            keepOriginalSource: !0,
            measurePerformance: !1,
            showMissingIcons: !0,
        };
        tu.familyPrefix && (tu.cssPrefix = tu.familyPrefix);
        var td = a(a({}, tm), tu);
        td.autoReplaceSvg || (td.observeMutations = !1);
        var t_ = {};
        Object.keys(tm).forEach(function (t) {
            Object.defineProperty(t_, t, {
                enumerable: !0,
                set: function a(e) {
                    (td[t] = e),
                        tp.forEach(function (t) {
                            return t(t_);
                        });
                },
                get: function a() {
                    return td[t];
                },
            });
        }),
            Object.defineProperty(t_, "familyPrefix", {
                enumerable: !0,
                set: function t(a) {
                    (td.cssPrefix = a),
                        tp.forEach(function (t) {
                            return t(t_);
                        });
                },
                get: function t() {
                    return td.cssPrefix;
                },
            }),
            (S.FontAwesomeConfig = t_);
        var tp = [],
            tv = { size: 16, x: 0, y: 0, rotate: 0, flipX: !1, flipY: !1 };
        function t$() {
            for (var t = 12, a = ""; t-- > 0; ) a += "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"[(62 * Math.random()) | 0];
            return a;
        }
        function tg(t) {
            for (var a = [], e = (t || []).length >>> 0; e--; ) a[e] = t[e];
            return a;
        }
        function tb(t) {
            return t.classList
                ? tg(t.classList)
                : (t.getAttribute("class") || "").split(" ").filter(function (t) {
                      return t;
                  });
        }
        function th(t) {
            return "".concat(t).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
        }
        function t0(t) {
            return Object.keys(t || {}).reduce(function (a, e) {
                return a + "".concat(e, ": ").concat(t[e].trim(), ";");
            }, "");
        }
        function ty(t) {
            return t.size !== tv.size || t.x !== tv.x || t.y !== tv.y || t.rotate !== tv.rotate || t.flipX || t.flipY;
        }
        function tk() {
            var t = F,
                a = R,
                e = t_.cssPrefix,
                n = t_.replacementClass,
                r =
                    ':host,:root{--fa-font-solid:normal 900 1em/1 "Font Awesome 6 Solid";--fa-font-regular:normal 400 1em/1 "Font Awesome 6 Regular";--fa-font-light:normal 300 1em/1 "Font Awesome 6 Light";--fa-font-thin:normal 100 1em/1 "Font Awesome 6 Thin";--fa-font-duotone:normal 900 1em/1 "Font Awesome 6 Duotone";--fa-font-sharp-solid:normal 900 1em/1 "Font Awesome 6 Sharp";--fa-font-sharp-regular:normal 400 1em/1 "Font Awesome 6 Sharp";--fa-font-sharp-light:normal 300 1em/1 "Font Awesome 6 Sharp";--fa-font-brands:normal 400 1em/1 "Font Awesome 6 Brands"}svg:not(:host).svg-inline--fa,svg:not(:root).svg-inline--fa{overflow:visible;box-sizing:content-box}.svg-inline--fa{display:var(--fa-display,inline-block);height:1em;overflow:visible;vertical-align:-.125em}.svg-inline--fa.fa-2xs{vertical-align:.1em}.svg-inline--fa.fa-xs{vertical-align:0}.svg-inline--fa.fa-sm{vertical-align:-.0714285705em}.svg-inline--fa.fa-lg{vertical-align:-.2em}.svg-inline--fa.fa-xl{vertical-align:-.25em}.svg-inline--fa.fa-2xl{vertical-align:-.3125em}.svg-inline--fa.fa-pull-left{margin-right:var(--fa-pull-margin,.3em);width:auto}.svg-inline--fa.fa-pull-right{margin-left:var(--fa-pull-margin,.3em);width:auto}.svg-inline--fa.fa-li{width:var(--fa-li-width,2em);top:.25em}.svg-inline--fa.fa-fw{width:var(--fa-fw-width,1.25em)}.fa-layers svg.svg-inline--fa{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0}.fa-layers-counter,.fa-layers-text{display:inline-block;position:absolute;text-align:center}.fa-layers{display:inline-block;height:1em;position:relative;text-align:center;vertical-align:-.125em;width:1em}.fa-layers svg.svg-inline--fa{-webkit-transform-origin:center center;transform-origin:center center}.fa-layers-text{left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-webkit-transform-origin:center center;transform-origin:center center}.fa-layers-counter{background-color:var(--fa-counter-background-color,#ff253a);border-radius:var(--fa-counter-border-radius,1em);box-sizing:border-box;color:var(--fa-inverse,#fff);line-height:var(--fa-counter-line-height,1);max-width:var(--fa-counter-max-width,5em);min-width:var(--fa-counter-min-width,1.5em);overflow:hidden;padding:var(--fa-counter-padding,.25em .5em);right:var(--fa-right,0);text-overflow:ellipsis;top:var(--fa-top,0);-webkit-transform:scale(var(--fa-counter-scale,.25));transform:scale(var(--fa-counter-scale,.25));-webkit-transform-origin:top right;transform-origin:top right}.fa-layers-bottom-right{bottom:var(--fa-bottom,0);right:var(--fa-right,0);top:auto;-webkit-transform:scale(var(--fa-layers-scale,.25));transform:scale(var(--fa-layers-scale,.25));-webkit-transform-origin:bottom right;transform-origin:bottom right}.fa-layers-bottom-left{bottom:var(--fa-bottom,0);left:var(--fa-left,0);right:auto;top:auto;-webkit-transform:scale(var(--fa-layers-scale,.25));transform:scale(var(--fa-layers-scale,.25));-webkit-transform-origin:bottom left;transform-origin:bottom left}.fa-layers-top-right{top:var(--fa-top,0);right:var(--fa-right,0);-webkit-transform:scale(var(--fa-layers-scale,.25));transform:scale(var(--fa-layers-scale,.25));-webkit-transform-origin:top right;transform-origin:top right}.fa-layers-top-left{left:var(--fa-left,0);right:auto;top:var(--fa-top,0);-webkit-transform:scale(var(--fa-layers-scale,.25));transform:scale(var(--fa-layers-scale,.25));-webkit-transform-origin:top left;transform-origin:top left}.fa-1x{font-size:1em}.fa-2x{font-size:2em}.fa-3x{font-size:3em}.fa-4x{font-size:4em}.fa-5x{font-size:5em}.fa-6x{font-size:6em}.fa-7x{font-size:7em}.fa-8x{font-size:8em}.fa-9x{font-size:9em}.fa-10x{font-size:10em}.fa-2xs{font-size:.625em;line-height:.1em;vertical-align:.225em}.fa-xs{font-size:.75em;line-height:.0833333337em;vertical-align:.125em}.fa-sm{font-size:.875em;line-height:.0714285718em;vertical-align:.0535714295em}.fa-lg{font-size:1.25em;line-height:.05em;vertical-align:-.075em}.fa-xl{font-size:1.5em;line-height:.0416666682em;vertical-align:-.125em}.fa-2xl{font-size:2em;line-height:.03125em;vertical-align:-.1875em}.fa-fw{text-align:center;width:1.25em}.fa-ul{list-style-type:none;margin-left:var(--fa-li-margin,2.5em);padding-left:0}.fa-ul>li{position:relative}.fa-li{left:calc(var(--fa-li-width,2em) * -1);position:absolute;text-align:center;width:var(--fa-li-width,2em);line-height:inherit}.fa-border{border-color:var(--fa-border-color,#eee);border-radius:var(--fa-border-radius,.1em);border-style:var(--fa-border-style,solid);border-width:var(--fa-border-width,.08em);padding:var(--fa-border-padding,.2em .25em .15em)}.fa-pull-left{float:left;margin-right:var(--fa-pull-margin,.3em)}.fa-pull-right{float:right;margin-left:var(--fa-pull-margin,.3em)}.fa-beat{-webkit-animation-name:fa-beat;animation-name:fa-beat;-webkit-animation-delay:var(--fa-animation-delay,0s);animation-delay:var(--fa-animation-delay,0s);-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal);-webkit-animation-duration:var(--fa-animation-duration,1s);animation-duration:var(--fa-animation-duration,1s);-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,ease-in-out);animation-timing-function:var(--fa-animation-timing,ease-in-out)}.fa-bounce{-webkit-animation-name:fa-bounce;animation-name:fa-bounce;-webkit-animation-delay:var(--fa-animation-delay,0s);animation-delay:var(--fa-animation-delay,0s);-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal);-webkit-animation-duration:var(--fa-animation-duration,1s);animation-duration:var(--fa-animation-duration,1s);-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,cubic-bezier(.28,.84,.42,1));animation-timing-function:var(--fa-animation-timing,cubic-bezier(.28,.84,.42,1))}.fa-fade{-webkit-animation-name:fa-fade;animation-name:fa-fade;-webkit-animation-delay:var(--fa-animation-delay,0s);animation-delay:var(--fa-animation-delay,0s);-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal);-webkit-animation-duration:var(--fa-animation-duration,1s);animation-duration:var(--fa-animation-duration,1s);-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,cubic-bezier(.4,0,.6,1));animation-timing-function:var(--fa-animation-timing,cubic-bezier(.4,0,.6,1))}.fa-beat-fade{-webkit-animation-name:fa-beat-fade;animation-name:fa-beat-fade;-webkit-animation-delay:var(--fa-animation-delay,0s);animation-delay:var(--fa-animation-delay,0s);-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal);-webkit-animation-duration:var(--fa-animation-duration,1s);animation-duration:var(--fa-animation-duration,1s);-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,cubic-bezier(.4,0,.6,1));animation-timing-function:var(--fa-animation-timing,cubic-bezier(.4,0,.6,1))}.fa-flip{-webkit-animation-name:fa-flip;animation-name:fa-flip;-webkit-animation-delay:var(--fa-animation-delay,0s);animation-delay:var(--fa-animation-delay,0s);-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal);-webkit-animation-duration:var(--fa-animation-duration,1s);animation-duration:var(--fa-animation-duration,1s);-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,ease-in-out);animation-timing-function:var(--fa-animation-timing,ease-in-out)}.fa-shake{-webkit-animation-name:fa-shake;animation-name:fa-shake;-webkit-animation-delay:var(--fa-animation-delay,0s);animation-delay:var(--fa-animation-delay,0s);-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal);-webkit-animation-duration:var(--fa-animation-duration,1s);animation-duration:var(--fa-animation-duration,1s);-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,linear);animation-timing-function:var(--fa-animation-timing,linear)}.fa-spin{-webkit-animation-name:fa-spin;animation-name:fa-spin;-webkit-animation-delay:var(--fa-animation-delay,0s);animation-delay:var(--fa-animation-delay,0s);-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal);-webkit-animation-duration:var(--fa-animation-duration,2s);animation-duration:var(--fa-animation-duration,2s);-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,linear);animation-timing-function:var(--fa-animation-timing,linear)}.fa-spin-reverse{--fa-animation-direction:reverse}.fa-pulse,.fa-spin-pulse{-webkit-animation-name:fa-spin;animation-name:fa-spin;-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal);-webkit-animation-duration:var(--fa-animation-duration,1s);animation-duration:var(--fa-animation-duration,1s);-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,steps(8));animation-timing-function:var(--fa-animation-timing,steps(8))}@media (prefers-reduced-motion:reduce){.fa-beat,.fa-beat-fade,.fa-bounce,.fa-fade,.fa-flip,.fa-pulse,.fa-shake,.fa-spin,.fa-spin-pulse{-webkit-animation-delay:-1ms;animation-delay:-1ms;-webkit-animation-duration:1ms;animation-duration:1ms;-webkit-animation-iteration-count:1;animation-iteration-count:1;-webkit-transition-delay:0s;transition-delay:0s;-webkit-transition-duration:0s;transition-duration:0s}}@-webkit-keyframes fa-beat{0%,90%{-webkit-transform:scale(1);transform:scale(1)}45%{-webkit-transform:scale(var(--fa-beat-scale,1.25));transform:scale(var(--fa-beat-scale,1.25))}}@keyframes fa-beat{0%,90%{-webkit-transform:scale(1);transform:scale(1)}45%{-webkit-transform:scale(var(--fa-beat-scale,1.25));transform:scale(var(--fa-beat-scale,1.25))}}@-webkit-keyframes fa-bounce{0%{-webkit-transform:scale(1,1) translateY(0);transform:scale(1,1) translateY(0)}10%{-webkit-transform:scale(var(--fa-bounce-start-scale-x,1.1),var(--fa-bounce-start-scale-y,.9)) translateY(0);transform:scale(var(--fa-bounce-start-scale-x,1.1),var(--fa-bounce-start-scale-y,.9)) translateY(0)}30%{-webkit-transform:scale(var(--fa-bounce-jump-scale-x,.9),var(--fa-bounce-jump-scale-y,1.1)) translateY(var(--fa-bounce-height,-.5em));transform:scale(var(--fa-bounce-jump-scale-x,.9),var(--fa-bounce-jump-scale-y,1.1)) translateY(var(--fa-bounce-height,-.5em))}50%{-webkit-transform:scale(var(--fa-bounce-land-scale-x,1.05),var(--fa-bounce-land-scale-y,.95)) translateY(0);transform:scale(var(--fa-bounce-land-scale-x,1.05),var(--fa-bounce-land-scale-y,.95)) translateY(0)}57%{-webkit-transform:scale(1,1) translateY(var(--fa-bounce-rebound,-.125em));transform:scale(1,1) translateY(var(--fa-bounce-rebound,-.125em))}64%{-webkit-transform:scale(1,1) translateY(0);transform:scale(1,1) translateY(0)}100%{-webkit-transform:scale(1,1) translateY(0);transform:scale(1,1) translateY(0)}}@keyframes fa-bounce{0%{-webkit-transform:scale(1,1) translateY(0);transform:scale(1,1) translateY(0)}10%{-webkit-transform:scale(var(--fa-bounce-start-scale-x,1.1),var(--fa-bounce-start-scale-y,.9)) translateY(0);transform:scale(var(--fa-bounce-start-scale-x,1.1),var(--fa-bounce-start-scale-y,.9)) translateY(0)}30%{-webkit-transform:scale(var(--fa-bounce-jump-scale-x,.9),var(--fa-bounce-jump-scale-y,1.1)) translateY(var(--fa-bounce-height,-.5em));transform:scale(var(--fa-bounce-jump-scale-x,.9),var(--fa-bounce-jump-scale-y,1.1)) translateY(var(--fa-bounce-height,-.5em))}50%{-webkit-transform:scale(var(--fa-bounce-land-scale-x,1.05),var(--fa-bounce-land-scale-y,.95)) translateY(0);transform:scale(var(--fa-bounce-land-scale-x,1.05),var(--fa-bounce-land-scale-y,.95)) translateY(0)}57%{-webkit-transform:scale(1,1) translateY(var(--fa-bounce-rebound,-.125em));transform:scale(1,1) translateY(var(--fa-bounce-rebound,-.125em))}64%{-webkit-transform:scale(1,1) translateY(0);transform:scale(1,1) translateY(0)}100%{-webkit-transform:scale(1,1) translateY(0);transform:scale(1,1) translateY(0)}}@-webkit-keyframes fa-fade{50%{opacity:var(--fa-fade-opacity,.4)}}@keyframes fa-fade{50%{opacity:var(--fa-fade-opacity,.4)}}@-webkit-keyframes fa-beat-fade{0%,100%{opacity:var(--fa-beat-fade-opacity,.4);-webkit-transform:scale(1);transform:scale(1)}50%{opacity:1;-webkit-transform:scale(var(--fa-beat-fade-scale,1.125));transform:scale(var(--fa-beat-fade-scale,1.125))}}@keyframes fa-beat-fade{0%,100%{opacity:var(--fa-beat-fade-opacity,.4);-webkit-transform:scale(1);transform:scale(1)}50%{opacity:1;-webkit-transform:scale(var(--fa-beat-fade-scale,1.125));transform:scale(var(--fa-beat-fade-scale,1.125))}}@-webkit-keyframes fa-flip{50%{-webkit-transform:rotate3d(var(--fa-flip-x,0),var(--fa-flip-y,1),var(--fa-flip-z,0),var(--fa-flip-angle,-180deg));transform:rotate3d(var(--fa-flip-x,0),var(--fa-flip-y,1),var(--fa-flip-z,0),var(--fa-flip-angle,-180deg))}}@keyframes fa-flip{50%{-webkit-transform:rotate3d(var(--fa-flip-x,0),var(--fa-flip-y,1),var(--fa-flip-z,0),var(--fa-flip-angle,-180deg));transform:rotate3d(var(--fa-flip-x,0),var(--fa-flip-y,1),var(--fa-flip-z,0),var(--fa-flip-angle,-180deg))}}@-webkit-keyframes fa-shake{0%{-webkit-transform:rotate(-15deg);transform:rotate(-15deg)}4%{-webkit-transform:rotate(15deg);transform:rotate(15deg)}24%,8%{-webkit-transform:rotate(-18deg);transform:rotate(-18deg)}12%,28%{-webkit-transform:rotate(18deg);transform:rotate(18deg)}16%{-webkit-transform:rotate(-22deg);transform:rotate(-22deg)}20%{-webkit-transform:rotate(22deg);transform:rotate(22deg)}32%{-webkit-transform:rotate(-12deg);transform:rotate(-12deg)}36%{-webkit-transform:rotate(12deg);transform:rotate(12deg)}100%,40%{-webkit-transform:rotate(0);transform:rotate(0)}}@keyframes fa-shake{0%{-webkit-transform:rotate(-15deg);transform:rotate(-15deg)}4%{-webkit-transform:rotate(15deg);transform:rotate(15deg)}24%,8%{-webkit-transform:rotate(-18deg);transform:rotate(-18deg)}12%,28%{-webkit-transform:rotate(18deg);transform:rotate(18deg)}16%{-webkit-transform:rotate(-22deg);transform:rotate(-22deg)}20%{-webkit-transform:rotate(22deg);transform:rotate(22deg)}32%{-webkit-transform:rotate(-12deg);transform:rotate(-12deg)}36%{-webkit-transform:rotate(12deg);transform:rotate(12deg)}100%,40%{-webkit-transform:rotate(0);transform:rotate(0)}}@-webkit-keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.fa-rotate-90{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.fa-rotate-180{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.fa-rotate-270{-webkit-transform:rotate(270deg);transform:rotate(270deg)}.fa-flip-horizontal{-webkit-transform:scale(-1,1);transform:scale(-1,1)}.fa-flip-vertical{-webkit-transform:scale(1,-1);transform:scale(1,-1)}.fa-flip-both,.fa-flip-horizontal.fa-flip-vertical{-webkit-transform:scale(-1,-1);transform:scale(-1,-1)}.fa-rotate-by{-webkit-transform:rotate(var(--fa-rotate-angle,none));transform:rotate(var(--fa-rotate-angle,none))}.fa-stack{display:inline-block;vertical-align:middle;height:2em;position:relative;width:2.5em}.fa-stack-1x,.fa-stack-2x{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0;z-index:var(--fa-stack-z-index,auto)}.svg-inline--fa.fa-stack-1x{height:1em;width:1.25em}.svg-inline--fa.fa-stack-2x{height:2em;width:2.5em}.fa-inverse{color:var(--fa-inverse,#fff)}.fa-sr-only,.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}.fa-sr-only-focusable:not(:focus),.sr-only-focusable:not(:focus){position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}.svg-inline--fa .fa-primary{fill:var(--fa-primary-color,currentColor);opacity:var(--fa-primary-opacity,1)}.svg-inline--fa .fa-secondary{fill:var(--fa-secondary-color,currentColor);opacity:var(--fa-secondary-opacity,.4)}.svg-inline--fa.fa-swap-opacity .fa-primary{opacity:var(--fa-secondary-opacity,.4)}.svg-inline--fa.fa-swap-opacity .fa-secondary{opacity:var(--fa-primary-opacity,1)}.svg-inline--fa mask .fa-primary,.svg-inline--fa mask .fa-secondary{fill:#000}.fa-duotone.fa-inverse,.fad.fa-inverse{color:var(--fa-inverse,#fff)}';
            if (e !== t || n !== a) {
                var i = RegExp("\\.".concat(t, "\\-"), "g"),
                    o = RegExp("\\--".concat(t, "\\-"), "g"),
                    s = RegExp("\\.".concat(a), "g");
                r = r.replace(i, ".".concat(e, "-")).replace(o, "--".concat(e, "-")).replace(s, ".".concat(n));
            }
            return r;
        }
        var t3 = !1;
        function tw() {
            t_.autoAddCss &&
                !t3 &&
                ((function t(a) {
                    if (a && I) {
                        var e = M.createElement("style");
                        e.setAttribute("type", "text/css"), (e.innerHTML = a);
                        for (var n = M.head.childNodes, r = null, i = n.length - 1; i > -1; i--) {
                            var o = n[i];
                            ["STYLE", "LINK"].indexOf((o.tagName || "").toUpperCase()) > -1 && (r = o);
                        }
                        return M.head.insertBefore(e, r), a;
                    }
                })(tk()),
                (t3 = !0));
        }
        var t1 = S || {};
        t1[Y] || (t1[Y] = {}), t1[Y].styles || (t1[Y].styles = {}), t1[Y].hooks || (t1[Y].hooks = {}), t1[Y].shims || (t1[Y].shims = []);
        var t2 = t1[Y],
            tx = [],
            t4 = function t() {
                M.removeEventListener("DOMContentLoaded", t),
                    (t7 = 1),
                    tx.map(function (t) {
                        return t();
                    });
            },
            t7 = !1;
        function t5(t) {
            I && (t7 ? setTimeout(t, 0) : tx.push(t));
        }
        function t6(t) {
            var a,
                e = t.tag,
                n = t.attributes,
                r = t.children;
            return "string" == typeof t
                ? th(t)
                : "<"
                      .concat(e, " ")
                      .concat(
                          Object.keys((a = void 0 === n ? {} : n) || {})
                              .reduce(function (t, e) {
                                  return t + "".concat(e, '="').concat(th(a[e]), '" ');
                              }, "")
                              .trim(),
                          ">"
                      )
                      .concat((void 0 === r ? [] : r).map(t6).join(""), "</")
                      .concat(e, ">");
        }
        function tA(t, a, e) {
            if (t && t[a] && t[a][e]) return { prefix: a, iconName: e, icon: t[a][e] };
        }
        !I || (t7 = (M.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(M.readyState)) || M.addEventListener("DOMContentLoaded", t4);
        var tN = function t(a, e) {
                return function (t, n, r, i) {
                    return a.call(e, t, n, r, i);
                };
            },
            tC = function t(a, e, n, r) {
                var i,
                    o,
                    s,
                    f = Object.keys(a),
                    c = f.length,
                    l = void 0 !== r ? tN(e, r) : e;
                for (void 0 === n ? ((i = 1), (s = a[f[0]])) : ((i = 0), (s = n)); i < c; i++) s = l(s, a[(o = f[i])], o, a);
                return s;
            };
        function tP(t) {
            var a = (function t(a) {
                for (var e = [], n = 0, r = a.length; n < r; ) {
                    var i = a.charCodeAt(n++);
                    if (i >= 55296 && i <= 56319 && n < r) {
                        var o = a.charCodeAt(n++);
                        (64512 & o) == 56320 ? e.push(((1023 & i) << 10) + (1023 & o) + 65536) : (e.push(i), n--);
                    } else e.push(i);
                }
                return e;
            })(t);
            return 1 === a.length ? a[0].toString(16) : null;
        }
        function tz(t) {
            return Object.keys(t).reduce(function (a, e) {
                var n = t[e];
                return n.icon ? (a[n.iconName] = n.icon) : (a[e] = n), a;
            }, {});
        }
        function tS(t, e) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                r = n.skipHooks,
                i = tz(e);
            "function" != typeof t2.hooks.addPack || (void 0 !== r && r) ? (t2.styles[t] = a(a({}, t2.styles[t] || {}), i)) : t2.hooks.addPack(t, tz(e)), "fas" === t && tS("fa", e);
        }
        var tM,
            tE = t2.styles,
            tO = t2.shims,
            tD = (i((b = {}), X, Object.values(Z[X])), i(b, q, Object.values(Z[q])), b),
            tI = null,
            tL = {},
            tY = {},
            tF = {},
            tR = {},
            tT = {},
            tj = (i((h = {}), X, Object.keys(J[X])), i(h, q, Object.keys(J[q])), h),
            t8 = function t() {
                var a = function t(a) {
                    return tC(
                        tE,
                        function (t, e, n) {
                            return (t[n] = tC(e, a, {})), t;
                        },
                        {}
                    );
                };
                (tL = a(function (t, a, e) {
                    return (
                        a[3] && (t[a[3]] = e),
                        a[2] &&
                            a[2]
                                .filter(function (t) {
                                    return "number" == typeof t;
                                })
                                .forEach(function (a) {
                                    t[a.toString(16)] = e;
                                }),
                        t
                    );
                })),
                    (tY = a(function (t, a, e) {
                        return (
                            (t[e] = e),
                            a[2] &&
                                a[2]
                                    .filter(function (t) {
                                        return "string" == typeof t;
                                    })
                                    .forEach(function (a) {
                                        t[a] = e;
                                    }),
                            t
                        );
                    })),
                    (tT = a(function (t, a, e) {
                        var n = a[2];
                        return (
                            (t[e] = e),
                            n.forEach(function (a) {
                                t[a] = e;
                            }),
                            t
                        );
                    }));
                var e = "far" in tE || t_.autoFetchSvg,
                    n = tC(
                        tO,
                        function (t, a) {
                            var n = a[0],
                                r = a[1],
                                i = a[2];
                            return "far" !== r || e || (r = "fas"), "string" == typeof n && (t.names[n] = { prefix: r, iconName: i }), "number" == typeof n && (t.unicodes[n.toString(16)] = { prefix: r, iconName: i }), t;
                        },
                        { names: {}, unicodes: {} }
                    );
                (tF = n.names), (tR = n.unicodes), (tI = tX(t_.styleDefault, { family: t_.familyDefault }));
            };
        function tH(t, a) {
            return (tL[t] || {})[a];
        }
        function tW(t, a) {
            return (tT[t] || {})[a];
        }
        function tV(t) {
            return tF[t] || { prefix: null, iconName: null };
        }
        function tU() {
            return tI;
        }
        (tM = function (t) {
            tI = tX(t.styleDefault, { family: t_.familyDefault });
        }),
            tp.push(tM),
            t8();
        var tB = function t() {
            return { prefix: null, iconName: null, rest: [] };
        };
        function tX(t) {
            var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                e = a.family,
                n = void 0 === e ? X : e,
                r = J[n][t],
                i = Q[n][t] || Q[n][r],
                o = t in t2.styles ? t : null;
            return i || o || null;
        }
        var tq = (i((y = {}), X, Object.keys(Z[X])), i(y, q, Object.keys(Z[q])), y);
        function tG(t) {
            var a,
                e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = e.skipLookups,
                r = void 0 !== n && n,
                o = (i((a = {}), X, "".concat(t_.cssPrefix, "-").concat(X)), i(a, q, "".concat(t_.cssPrefix, "-").concat(q)), a),
                s = null,
                f = X;
            (t.includes(o[X]) ||
                t.some(function (t) {
                    return tq[X].includes(t);
                })) &&
                (f = X),
                (t.includes(o[q]) ||
                    t.some(function (t) {
                        return tq[q].includes(t);
                    })) &&
                    (f = q);
            var c = t.reduce(function (t, a) {
                var e,
                    n,
                    i,
                    c,
                    l,
                    u,
                    m = ((e = t_.cssPrefix), (c = (i = (n = a).split("-"))[0]), (l = i.slice(1).join("-")), c !== e || "" === l || ((u = l), ~tl.indexOf(u)) ? null : l);
                if (
                    (tE[a]
                        ? ((s = a = tD[f].includes(a) ? tt[f][a] : a), (t.prefix = a))
                        : tj[f].indexOf(a) > -1
                        ? ((s = a), (t.prefix = tX(a, { family: f })))
                        : m
                        ? (t.iconName = m)
                        : a !== t_.replacementClass && a !== o[X] && a !== o[q] && t.rest.push(a),
                    !r && t.prefix && t.iconName)
                ) {
                    var d = "fa" === s ? tV(t.iconName) : {},
                        _ = tW(t.prefix, t.iconName);
                    d.prefix && (s = null), (t.iconName = d.iconName || _ || t.iconName), (t.prefix = d.prefix || t.prefix), "far" !== t.prefix || tE.far || !tE.fas || t_.autoFetchSvg || (t.prefix = "fas");
                }
                return t;
            }, tB());
            return (
                (t.includes("fa-brands") || t.includes("fab")) && (c.prefix = "fab"),
                (t.includes("fa-duotone") || t.includes("fad")) && (c.prefix = "fad"),
                !c.prefix && f === q && (tE.fass || t_.autoFetchSvg) && ((c.prefix = "fass"), (c.iconName = tW(c.prefix, c.iconName) || c.iconName)),
                ("fa" === c.prefix || "fa" === s) && (c.prefix = tI || "fas"),
                c
            );
        }
        var tK = (function () {
                var t, e, n;
                function i() {
                    (function t(a, e) {
                        if (!(a instanceof e)) throw TypeError("Cannot call a class as a function");
                    })(this, i),
                        (this.definitions = {});
                }
                return (
                    (t = i),
                    (e = [
                        {
                            key: "add",
                            value: function t() {
                                for (var e = this, n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                                var o = r.reduce(this._pullDefinitions, {});
                                Object.keys(o).forEach(function (t) {
                                    (e.definitions[t] = a(a({}, e.definitions[t] || {}), o[t])), tS(t, o[t]);
                                    var n = Z[X][t];
                                    n && tS(n, o[t]), t8();
                                });
                            },
                        },
                        {
                            key: "reset",
                            value: function t() {
                                this.definitions = {};
                            },
                        },
                        {
                            key: "_pullDefinitions",
                            value: function t(a, e) {
                                var n = e.prefix && e.iconName && e.icon ? { 0: e } : e;
                                return (
                                    Object.keys(n).map(function (t) {
                                        var e = n[t],
                                            r = e.prefix,
                                            i = e.iconName,
                                            o = e.icon,
                                            s = o[2];
                                        a[r] || (a[r] = {}),
                                            s.length > 0 &&
                                                s.forEach(function (t) {
                                                    "string" == typeof t && (a[r][t] = o);
                                                }),
                                            (a[r][i] = o);
                                    }),
                                    a
                                );
                            },
                        },
                    ]),
                    r(t.prototype, e),
                    n && r(t, n),
                    Object.defineProperty(t, "prototype", { writable: !1 }),
                    i
                );
            })(),
            t9 = [],
            tJ = {},
            tQ = {},
            tZ = Object.keys(tQ);
        function at(t, a) {
            for (var e = arguments.length, n = Array(e > 2 ? e - 2 : 0), r = 2; r < e; r++) n[r - 2] = arguments[r];
            return (
                (tJ[t] || []).forEach(function (t) {
                    a = t.apply(null, [a].concat(n));
                }),
                a
            );
        }
        function aa(t) {
            for (var a = arguments.length, e = Array(a > 1 ? a - 1 : 0), n = 1; n < a; n++) e[n - 1] = arguments[n];
            (tJ[t] || []).forEach(function (t) {
                t.apply(null, e);
            });
        }
        function ae() {
            var t = arguments[0],
                a = Array.prototype.slice.call(arguments, 1);
            return tQ[t] ? tQ[t].apply(null, a) : void 0;
        }
        function an(t) {
            "fa" === t.prefix && (t.prefix = "fas");
            var a = t.iconName,
                e = t.prefix || tI;
            if (a) return (a = tW(e, a) || a), tA(ar.definitions, e, a) || tA(t2.styles, e, a);
        }
        var ar = new tK(),
            ai = {
                i2svg: function t() {
                    var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return I ? (aa("beforeI2svg", a), ae("pseudoElements2svg", a), ae("i2svg", a)) : Promise.reject("Operation requires a DOM of some kind.");
                },
                watch: function t() {
                    var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        e = a.autoReplaceSvgRoot;
                    !1 === t_.autoReplaceSvg && (t_.autoReplaceSvg = !0),
                        (t_.observeMutations = !0),
                        t5(function () {
                            af({ autoReplaceSvgRoot: e }), aa("watch", a);
                        });
                },
            },
            ao = {
                icon: function t(a) {
                    if (null === a) return null;
                    if ("object" === e(a) && a.prefix && a.iconName) return { prefix: a.prefix, iconName: tW(a.prefix, a.iconName) || a.iconName };
                    if (Array.isArray(a) && 2 === a.length) {
                        var n = 0 === a[1].indexOf("fa-") ? a[1].slice(3) : a[1],
                            r = tX(a[0]);
                        return { prefix: r, iconName: tW(r, n) || n };
                    }
                    if ("string" == typeof a && (a.indexOf("".concat(t_.cssPrefix, "-")) > -1 || a.match(ta))) {
                        var i = tG(a.split(" "), { skipLookups: !0 });
                        return { prefix: i.prefix || tI, iconName: tW(i.prefix, i.iconName) || i.iconName };
                    }
                    if ("string" == typeof a) {
                        var o = tI;
                        return { prefix: o, iconName: tW(o, a) || a };
                    }
                },
            },
            as = {
                noAuto: function t() {
                    (t_.autoReplaceSvg = !1), (t_.observeMutations = !1), aa("noAuto");
                },
                config: t_,
                dom: ai,
                parse: ao,
                library: ar,
                findIconDefinition: an,
                toHtml: t6,
            },
            af = function t() {
                var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    e = a.autoReplaceSvgRoot,
                    n = void 0 === e ? M : e;
                (Object.keys(t2.styles).length > 0 || t_.autoFetchSvg) && I && t_.autoReplaceSvg && as.dom.i2svg({ node: n });
            };
        function ac(t, a) {
            return (
                Object.defineProperty(t, "abstract", { get: a }),
                Object.defineProperty(t, "html", {
                    get: function a() {
                        return t.abstract.map(function (t) {
                            return t6(t);
                        });
                    },
                }),
                Object.defineProperty(t, "node", {
                    get: function a() {
                        if (I) {
                            var e = M.createElement("div");
                            return (e.innerHTML = t.html), e.children;
                        }
                    },
                }),
                t
            );
        }
        function al(t) {
            var e,
                n,
                r,
                i,
                o,
                s,
                f,
                c = t.icons,
                l = c.main,
                u = c.mask,
                m = t.prefix,
                d = t.iconName,
                _ = t.transform,
                p = t.symbol,
                v = t.title,
                $ = t.maskId,
                g = t.titleId,
                b = t.extra,
                h = t.watchable,
                y = u.found ? u : l,
                k = y.width,
                w = y.height,
                x = "fak" === m,
                A = [t_.replacementClass, d ? "".concat(t_.cssPrefix, "-").concat(d) : ""]
                    .filter(function (t) {
                        return -1 === b.classes.indexOf(t);
                    })
                    .filter(function (t) {
                        return "" !== t || !!t;
                    })
                    .concat(b.classes)
                    .join(" "),
                N = { children: [], attributes: a(a({}, b.attributes), {}, { "data-prefix": m, "data-icon": d, class: A, role: b.attributes.role || "img", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 ".concat(k, " ").concat(w) }) },
                C = x && !~b.classes.indexOf("fa-fw") ? { width: "".concat((k / w) * 1, "em") } : {};
            void 0 !== h && h && (N.attributes[T] = ""), v && (N.children.push({ tag: "title", attributes: { id: N.attributes["aria-labelledby"] || "title-".concat(g || t$()) }, children: [v] }), delete N.attributes.title);
            var P = a(a({}, N), {}, { prefix: m, iconName: d, main: l, mask: u, maskId: $, transform: _, symbol: p, styles: a(a({}, C), b.styles) }),
                z = u.found && l.found ? ae("generateAbstractMask", P) || { children: [], attributes: {} } : ae("generateAbstractIcon", P) || { children: [], attributes: {} },
                S = z.children,
                M = z.attributes;
            return ((P.children = S), (P.attributes = M), p)
                ? ((n = (e = P).prefix),
                  (r = e.iconName),
                  (i = e.children),
                  (o = e.attributes),
                  (f = !0 === (s = e.symbol) ? "".concat(n, "-").concat(t_.cssPrefix, "-").concat(r) : s),
                  [{ tag: "svg", attributes: { style: "display: none;" }, children: [{ tag: "symbol", attributes: a(a({}, o), {}, { id: f }), children: i }] }])
                : (function t(e) {
                      var n = e.children,
                          r = e.main,
                          i = e.mask,
                          o = e.attributes,
                          s = e.styles,
                          f = e.transform;
                      if (ty(f) && r.found && !i.found) {
                          var c,
                              l = { x: r.width / r.height / 2, y: 0.5 };
                          o.style = t0(a(a({}, s), {}, { "transform-origin": "".concat(l.x + f.x / 16, "em ").concat(l.y + f.y / 16, "em") }));
                      }
                      return [{ tag: "svg", attributes: o, children: n }];
                  })(P);
        }
        function au(t) {
            var e,
                n,
                r,
                i,
                o,
                s,
                f,
                c = t.content,
                l = t.width,
                u = t.height,
                m = t.transform,
                d = t.title,
                _ = t.extra,
                p = t.watchable,
                v = a(a(a({}, _.attributes), d ? { title: d } : {}), {}, { class: _.classes.join(" ") });
            void 0 !== p && p && (v[T] = "");
            var $ = a({}, _.styles);
            ty(m) &&
                (($.transform =
                    ((n = (e = { transform: m, startCentered: !0, width: l, height: u }).transform),
                    (r = e.width),
                    (i = e.height),
                    (s = void 0 !== (o = e.startCentered) && o),
                    (f = ""),
                    s && L
                        ? (f += "translate(".concat(n.x / 16 - (void 0 === r ? 16 : r) / 2, "em, ").concat(n.y / 16 - (void 0 === i ? 16 : i) / 2, "em) "))
                        : s
                        ? (f += "translate(calc(-50% + ".concat(n.x / 16, "em), calc(-50% + ").concat(n.y / 16, "em)) "))
                        : (f += "translate(".concat(n.x / 16, "em, ").concat(n.y / 16, "em) ")),
                    (f += "scale(".concat((n.size / 16) * (n.flipX ? -1 : 1), ", ").concat((n.size / 16) * (n.flipY ? -1 : 1), ") ")),
                    (f += "rotate(".concat(n.rotate, "deg) ")))),
                ($["-webkit-transform"] = $.transform));
            var g = t0($);
            g.length > 0 && (v.style = g);
            var b = [];
            return b.push({ tag: "span", attributes: v, children: [c] }), d && b.push({ tag: "span", attributes: { class: "sr-only" }, children: [d] }), b;
        }
        var am = t2.styles;
        function ad(t) {
            var a = t[0],
                e = t[1],
                n = s(t.slice(4), 1)[0],
                r = null;
            return {
                found: !0,
                width: a,
                height: e,
                icon: (r = Array.isArray(n)
                    ? {
                          tag: "g",
                          attributes: { class: "".concat(t_.cssPrefix, "-").concat(tf.GROUP) },
                          children: [
                              { tag: "path", attributes: { class: "".concat(t_.cssPrefix, "-").concat(tf.SECONDARY), fill: "currentColor", d: n[0] } },
                              { tag: "path", attributes: { class: "".concat(t_.cssPrefix, "-").concat(tf.PRIMARY), fill: "currentColor", d: n[1] } },
                          ],
                      }
                    : { tag: "path", attributes: { fill: "currentColor", d: n } }),
            };
        }
        var a_ = { found: !1, width: 512, height: 512 };
        function ap(t, e) {
            var n = e;
            return (
                "fa" === e && null !== t_.styleDefault && (e = tI),
                new Promise(function (r, i) {
                    if ((ae("missingIconAbstract"), "fa" === n)) {
                        var o,
                            s,
                            f = tV(t) || {};
                        (t = f.iconName || t), (e = f.prefix || e);
                    }
                    if (t && e && am[e] && am[e][t]) return r(ad(am[e][t]));
                    (o = t),
                        (s = e),
                        B || t_.showMissingIcons || !o || console.error('Icon with name "'.concat(o, '" and prefix "').concat(s, '" is missing.')),
                        r(a(a({}, a_), {}, { icon: (t_.showMissingIcons && t && ae("missingIconAbstract")) || {} }));
                })
            );
        }
        var av = function t() {},
            a$ = t_.measurePerformance && O && O.mark && O.measure ? O : { mark: av, measure: av },
            ag = 'FA "6.4.2"',
            ab = function t(a) {
                a$.mark("".concat(ag, " ").concat(a, " ends")), a$.measure("".concat(ag, " ").concat(a), "".concat(ag, " ").concat(a, " begins"), "".concat(ag, " ").concat(a, " ends"));
            },
            ah = {
                begin: function t(a) {
                    return (
                        a$.mark("".concat(ag, " ").concat(a, " begins")),
                        function () {
                            return ab(a);
                        }
                    );
                },
                end: ab,
            },
            a0 = function t() {};
        function ay(t) {
            return "string" == typeof (t.getAttribute ? t.getAttribute(T) : null);
        }
        function ak(t) {
            return M.createElementNS("http://www.w3.org/2000/svg", t);
        }
        function a3(t) {
            return M.createElement(t);
        }
        var aw = {
            replace: function t(a) {
                var e = a[0];
                if (e.parentNode) {
                    if (
                        (a[1].forEach(function (t) {
                            e.parentNode.insertBefore(
                                (function t(a) {
                                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                        n = e.ceFn,
                                        r = void 0 === n ? ("svg" === a.tag ? ak : a3) : n;
                                    if ("string" == typeof a) return M.createTextNode(a);
                                    var i = r(a.tag);
                                    return (
                                        Object.keys(a.attributes || []).forEach(function (t) {
                                            i.setAttribute(t, a.attributes[t]);
                                        }),
                                        (a.children || []).forEach(function (a) {
                                            i.appendChild(t(a, { ceFn: r }));
                                        }),
                                        i
                                    );
                                })(t),
                                e
                            );
                        }),
                        null === e.getAttribute(T) && t_.keepOriginalSource)
                    ) {
                        var n,
                            r,
                            i = M.createComment(((n = e), (r = " ".concat(n.outerHTML, " ")), (r = "".concat(r, "Font Awesome fontawesome.com "))));
                        e.parentNode.replaceChild(i, e);
                    } else e.remove();
                }
            },
            nest: function t(a) {
                var e = a[0],
                    n = a[1];
                if (~tb(e).indexOf(t_.replacementClass)) return aw.replace(a);
                var r = RegExp("".concat(t_.cssPrefix, "-.*"));
                if ((delete n[0].attributes.id, n[0].attributes.class)) {
                    var i = n[0].attributes.class.split(" ").reduce(
                        function (t, a) {
                            return a === t_.replacementClass || a.match(r) ? t.toSvg.push(a) : t.toNode.push(a), t;
                        },
                        { toNode: [], toSvg: [] }
                    );
                    (n[0].attributes.class = i.toSvg.join(" ")), 0 === i.toNode.length ? e.removeAttribute("class") : e.setAttribute("class", i.toNode.join(" "));
                }
                var o = n
                    .map(function (t) {
                        return t6(t);
                    })
                    .join("\n");
                e.setAttribute(T, ""), (e.innerHTML = o);
            },
        };
        function a1(t) {
            t();
        }
        function a2(t, a) {
            var e = "function" == typeof a ? a : a0;
            if (0 === t.length) e();
            else {
                var n = a1;
                "async" === t_.mutateApproach && (n = S.requestAnimationFrame || a1),
                    n(function () {
                        var a = !0 === t_.autoReplaceSvg ? aw.replace : aw[t_.autoReplaceSvg] || aw.replace,
                            n = ah.begin("mutate");
                        t.map(a), n(), e();
                    });
            }
        }
        var ax = !1;
        function a4() {
            ax = !0;
        }
        function a7() {
            ax = !1;
        }
        var a5 = null;
        function a6(t) {
            if (E && t_.observeMutations) {
                var a = t.treeCallback,
                    e = void 0 === a ? a0 : a,
                    n = t.nodeCallback,
                    r = void 0 === n ? a0 : n,
                    i = t.pseudoElementsCallback,
                    o = void 0 === i ? a0 : i,
                    s = t.observeMutationsRoot,
                    f = void 0 === s ? M : s;
                (a5 = new E(function (t) {
                    if (!ax) {
                        var a = tI;
                        tg(t).forEach(function (t) {
                            if (
                                ("childList" === t.type && t.addedNodes.length > 0 && !ay(t.addedNodes[0]) && (t_.searchPseudoElements && o(t.target), e(t.target)),
                                "attributes" === t.type && t.target.parentNode && t_.searchPseudoElements && o(t.target.parentNode),
                                "attributes" === t.type && ay(t.target) && ~ts.indexOf(t.attributeName))
                            ) {
                                if ("class" === t.attributeName && ((i = (n = t.target).getAttribute ? n.getAttribute(H) : null), (s = n.getAttribute ? n.getAttribute(W) : null), i && s)) {
                                    var n,
                                        i,
                                        s,
                                        f,
                                        c = tG(tb(t.target)),
                                        l = c.prefix,
                                        u = c.iconName;
                                    t.target.setAttribute(H, l || a), u && t.target.setAttribute(W, u);
                                } else (f = t.target) && f.classList && f.classList.contains && f.classList.contains(t_.replacementClass) && r(t.target);
                            }
                        });
                    }
                })),
                    I && a5.observe(f, { childList: !0, attributes: !0, characterData: !0, subtree: !0 });
            }
        }
        function aA(t) {
            var e,
                n,
                r,
                i,
                o,
                s,
                f,
                c,
                l,
                u,
                m,
                d,
                _,
                p,
                v = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { styleParser: !0 },
                $ =
                    ((e = t),
                    (i = e.getAttribute("data-prefix")),
                    (o = e.getAttribute("data-icon")),
                    (s = void 0 !== e.innerText ? e.innerText.trim() : ""),
                    (f = tG(tb(e))),
                    (f.prefix || (f.prefix = tI), i && o && ((f.prefix = i), (f.iconName = o)), f.iconName && f.prefix)
                        ? f
                        : (f.prefix && s.length > 0 && (f.iconName = ((n = f.prefix), (r = e.innerText), (tY[n] || {})[r] || tH(f.prefix, tP(e.innerText)))),
                          !f.iconName && t_.autoFetchSvg && e.firstChild && e.firstChild.nodeType === Node.TEXT_NODE && (f.iconName = e.firstChild.data),
                          f)),
                g = $.iconName,
                b = $.prefix,
                h = $.rest,
                y =
                    ((c = t),
                    (l = tg(c.attributes).reduce(function (t, a) {
                        return "class" !== t.name && "style" !== t.name && (t[a.name] = a.value), t;
                    }, {})),
                    (u = c.getAttribute("title")),
                    (m = c.getAttribute("data-fa-title-id")),
                    t_.autoA11y && (u ? (l["aria-labelledby"] = "".concat(t_.replacementClass, "-title-").concat(m || t$())) : ((l["aria-hidden"] = "true"), (l.focusable = "false"))),
                    l),
                k = at("parseNodeAttributes", {}, t),
                w = v.styleParser
                    ? ((_ = (d = t).getAttribute("style")),
                      (p = []),
                      _ &&
                          (p = _.split(";").reduce(function (t, a) {
                              var e = a.split(":"),
                                  n = e[0],
                                  r = e.slice(1);
                              return n && r.length > 0 && (t[n] = r.join(":").trim()), t;
                          }, {})),
                      p)
                    : [];
            return a(
                {
                    iconName: g,
                    title: t.getAttribute("title"),
                    titleId: t.getAttribute("data-fa-title-id"),
                    prefix: b,
                    transform: tv,
                    mask: { iconName: null, prefix: null, rest: [] },
                    maskId: null,
                    symbol: !1,
                    extra: { classes: h, styles: w, attributes: y },
                },
                k
            );
        }
        var aN = t2.styles;
        function aC(t) {
            var a = "nest" === t_.autoReplaceSvg ? aA(t, { styleParser: !1 }) : aA(t);
            return ~a.extra.classes.indexOf(te) ? ae("generateLayersText", t, a) : ae("generateSvgReplacementMutation", t, a);
        }
        var aP = new Set();
        function az(t) {
            var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            if (!I) return Promise.resolve();
            var e = M.documentElement.classList,
                n = function t(a) {
                    return e.add("".concat(V, "-").concat(a));
                },
                r = function t(a) {
                    return e.remove("".concat(V, "-").concat(a));
                },
                i = t_.autoFetchSvg
                    ? aP
                    : G.map(function (t) {
                          return "fa-".concat(t);
                      }).concat(Object.keys(aN));
            i.includes("fa") || i.push("fa");
            var o = [".".concat(te, ":not([").concat(T, "])")]
                .concat(
                    i.map(function (t) {
                        return ".".concat(t, ":not([").concat(T, "])");
                    })
                )
                .join(", ");
            if (0 === o.length) return Promise.resolve();
            var s = [];
            try {
                s = tg(t.querySelectorAll(o));
            } catch (f) {}
            if (!(s.length > 0)) return Promise.resolve();
            n("pending"), r("complete");
            var c = ah.begin("onTree"),
                l = s.reduce(function (t, a) {
                    try {
                        var e = aC(a);
                        e && t.push(e);
                    } catch (n) {
                        B || "MissingIcon" !== n.name || console.error(n);
                    }
                    return t;
                }, []);
            return new Promise(function (t, e) {
                Promise.all(l)
                    .then(function (e) {
                        a2(e, function () {
                            n("active"), n("complete"), r("pending"), "function" == typeof a && a(), c(), t();
                        });
                    })
                    .catch(function (t) {
                        c(), e(t);
                    });
            });
        }
        function aS(t) {
            var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            aC(t).then(function (t) {
                t && a2([t], a);
            });
        }
        G.map(function (t) {
            aP.add("fa-".concat(t));
        }),
            Object.keys(J[X]).map(aP.add.bind(aP)),
            Object.keys(J[q]).map(aP.add.bind(aP)),
            (aP = f(aP));
        var aM = function t(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    r = n.transform,
                    i = void 0 === r ? tv : r,
                    o = n.symbol,
                    s = void 0 !== o && o,
                    f = n.mask,
                    c = void 0 === f ? null : f,
                    l = n.maskId,
                    u = void 0 === l ? null : l,
                    m = n.title,
                    d = void 0 === m ? null : m,
                    _ = n.titleId,
                    p = void 0 === _ ? null : _,
                    v = n.classes,
                    $ = void 0 === v ? [] : v,
                    g = n.attributes,
                    b = void 0 === g ? {} : g,
                    h = n.styles,
                    y = void 0 === h ? {} : h;
                if (e) {
                    var k = e.prefix,
                        w = e.iconName,
                        x = e.icon;
                    return ac(a({ type: "icon" }, e), function () {
                        return (
                            aa("beforeDOMElementCreation", { iconDefinition: e, params: n }),
                            t_.autoA11y && (d ? (b["aria-labelledby"] = "".concat(t_.replacementClass, "-title-").concat(p || t$())) : ((b["aria-hidden"] = "true"), (b.focusable = "false"))),
                            al({
                                icons: { main: ad(x), mask: c ? ad(c.icon) : { found: !1, width: null, height: null, icon: {} } },
                                prefix: k,
                                iconName: w,
                                transform: a(a({}, tv), i),
                                symbol: s,
                                title: d,
                                maskId: u,
                                titleId: p,
                                extra: { attributes: b, styles: y, classes: $ },
                            })
                        );
                    });
                }
            },
            aE = RegExp('"', "ug"),
            aO = [1105920, 1112319];
        function aD(t, e) {
            var n = "".concat("data-fa-pseudo-element-pending").concat(e.replace(":", "-"));
            return new Promise(function (r, i) {
                if (null !== t.getAttribute(n)) return r();
                var o = tg(t.children).filter(function (t) {
                        return t.getAttribute(j) === e;
                    })[0],
                    s = S.getComputedStyle(t, e),
                    f = s.getPropertyValue("font-family").match(tn),
                    c = s.getPropertyValue("font-weight"),
                    l = s.getPropertyValue("content");
                if (o && !f) return t.removeChild(o), r();
                if (f && "none" !== l && "" !== l) {
                    var u,
                        m,
                        d,
                        _,
                        p,
                        v,
                        $,
                        g,
                        b,
                        h,
                        y = s.getPropertyValue("content"),
                        k = ~["Sharp"].indexOf(f[2]) ? q : X,
                        w = ~["Solid", "Regular", "Light", "Thin", "Duotone", "Brands", "Kit"].indexOf(f[2]) ? Q[k][f[2].toLowerCase()] : tr[k][c],
                        x =
                            ((m = (u = y).replace(aE, "")),
                            (_ = 0),
                            (b =
                                (g = ((v = (d = m).length), ($ = d.charCodeAt(_)) >= 55296 && $ <= 56319 && v > _ + 1 && (p = d.charCodeAt(_ + 1)) >= 56320 && p <= 57343 ? ($ - 55296) * 1024 + p - 56320 + 65536 : $)) >= aO[0] &&
                                g <= aO[1]),
                            { value: (h = 2 === m.length && m[0] === m[1]) ? tP(m[0]) : tP(m), isSecondary: b || h }),
                        A = x.value,
                        N = x.isSecondary,
                        C = f[0].startsWith("FontAwesome"),
                        P = tH(w, A),
                        z = P;
                    if (C) {
                        var E,
                            O,
                            D,
                            I = ((O = tR[(E = A)]), (D = tH("fas", E)), O || (D ? { prefix: "fas", iconName: D } : null) || { prefix: null, iconName: null });
                        I.iconName && I.prefix && ((P = I.iconName), (w = I.prefix));
                    }
                    if (!P || N || (o && o.getAttribute(H) === w && o.getAttribute(W) === z)) r();
                    else {
                        t.setAttribute(n, z), o && t.removeChild(o);
                        var L = { iconName: null, title: null, titleId: null, prefix: null, transform: tv, symbol: !1, mask: { iconName: null, prefix: null, rest: [] }, maskId: null, extra: { classes: [], styles: {}, attributes: {} } },
                            Y = L.extra;
                        (Y.attributes[j] = e),
                            ap(P, w)
                                .then(function (i) {
                                    var o = al(a(a({}, L), {}, { icons: { main: i, mask: tB() }, prefix: w, iconName: z, extra: Y, watchable: !0 })),
                                        s = M.createElementNS("http://www.w3.org/2000/svg", "svg");
                                    "::before" === e ? t.insertBefore(s, t.firstChild) : t.appendChild(s),
                                        (s.outerHTML = o
                                            .map(function (t) {
                                                return t6(t);
                                            })
                                            .join("\n")),
                                        t.removeAttribute(n),
                                        r();
                                })
                                .catch(i);
                    }
                } else r();
            });
        }
        function aI(t) {
            return Promise.all([aD(t, "::before"), aD(t, "::after")]);
        }
        function aL(t) {
            return t.parentNode !== document.head && !~U.indexOf(t.tagName.toUpperCase()) && !t.getAttribute(j) && (!t.parentNode || "svg" !== t.parentNode.tagName);
        }
        function aY(t) {
            if (I)
                return new Promise(function (a, e) {
                    var n = tg(t.querySelectorAll("*")).filter(aL).map(aI),
                        r = ah.begin("searchPseudoElements");
                    a4(),
                        Promise.all(n)
                            .then(function () {
                                r(), a7(), a();
                            })
                            .catch(function () {
                                r(), a7(), e();
                            });
                });
        }
        var aF = !1,
            aR = function t(a) {
                return a
                    .toLowerCase()
                    .split(" ")
                    .reduce(
                        function (t, a) {
                            var e = a.toLowerCase().split("-"),
                                n = e[0],
                                r = e.slice(1).join("-");
                            if (n && "h" === r) return (t.flipX = !0), t;
                            if (n && "v" === r) return (t.flipY = !0), t;
                            if (((r = parseFloat(r)), isNaN(r))) return t;
                            switch (n) {
                                case "grow":
                                    t.size = t.size + r;
                                    break;
                                case "shrink":
                                    t.size = t.size - r;
                                    break;
                                case "left":
                                    t.x = t.x - r;
                                    break;
                                case "right":
                                    t.x = t.x + r;
                                    break;
                                case "up":
                                    t.y = t.y - r;
                                    break;
                                case "down":
                                    t.y = t.y + r;
                                    break;
                                case "rotate":
                                    t.rotate = t.rotate + r;
                            }
                            return t;
                        },
                        { size: 16, x: 0, y: 0, flipX: !1, flipY: !1, rotate: 0 }
                    );
            },
            aT = { x: 0, y: 0, width: "100%", height: "100%" };
        function aj(t) {
            var a = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
            return t.attributes && (t.attributes.fill || a) && (t.attributes.fill = "black"), t;
        }
        (u = [
            {
                mixout: function t() {
                    return { dom: { css: tk, insertCss: tw } };
                },
                hooks: function t() {
                    return {
                        beforeDOMElementCreation: function t() {
                            tw();
                        },
                        beforeI2svg: function t() {
                            tw();
                        },
                    };
                },
            },
            {
                mixout: function t() {
                    var e;
                    return {
                        icon:
                            ((e = aM),
                            function (t) {
                                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                    r = (t || {}).icon ? t : an(t || {}),
                                    i = n.mask;
                                return i && (i = (i || {}).icon ? i : an(i || {})), e(r, a(a({}, n), {}, { mask: i }));
                            }),
                    };
                },
                hooks: function t() {
                    return {
                        mutationObserverCallbacks: function t(a) {
                            return (a.treeCallback = az), (a.nodeCallback = aS), a;
                        },
                    };
                },
                provides: function t(a) {
                    (a.i2svg = function (t) {
                        var a = t.node,
                            e = t.callback;
                        return az(void 0 === a ? M : a, void 0 === e ? function () {} : e);
                    }),
                        (a.generateSvgReplacementMutation = function (t, a) {
                            var e = a.iconName,
                                n = a.title,
                                r = a.titleId,
                                i = a.prefix,
                                o = a.transform,
                                f = a.symbol,
                                c = a.mask,
                                l = a.maskId,
                                u = a.extra;
                            return new Promise(function (a, m) {
                                Promise.all([ap(e, i), c.iconName ? ap(c.iconName, c.prefix) : Promise.resolve({ found: !1, width: 512, height: 512, icon: {} })])
                                    .then(function (c) {
                                        var m,
                                            d = s(c, 2);
                                        a([t, al({ icons: { main: d[0], mask: d[1] }, prefix: i, iconName: e, transform: o, symbol: f, maskId: l, title: n, titleId: r, extra: u, watchable: !0 })]);
                                    })
                                    .catch(m);
                            });
                        }),
                        (a.generateAbstractIcon = function (t) {
                            var a,
                                e = t.children,
                                n = t.attributes,
                                r = t.main,
                                i = t.transform,
                                o = t0(t.styles);
                            return (
                                o.length > 0 && (n.style = o),
                                ty(i) && (a = ae("generateAbstractTransformGrouping", { main: r, transform: i, containerWidth: r.width, iconWidth: r.width })),
                                e.push(a || r.icon),
                                { children: e, attributes: n }
                            );
                        });
                },
            },
            {
                mixout: function t() {
                    return {
                        layer: function t(a) {
                            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                n = e.classes,
                                r = void 0 === n ? [] : n;
                            return ac({ type: "layer" }, function () {
                                aa("beforeDOMElementCreation", { assembler: a, params: e });
                                var t = [];
                                return (
                                    a(function (a) {
                                        Array.isArray(a)
                                            ? a.map(function (a) {
                                                  t = t.concat(a.abstract);
                                              })
                                            : (t = t.concat(a.abstract));
                                    }),
                                    [{ tag: "span", attributes: { class: ["".concat(t_.cssPrefix, "-layers")].concat(f(r)).join(" ") }, children: t }]
                                );
                            });
                        },
                    };
                },
            },
            {
                mixout: function t() {
                    return {
                        counter: function t(e) {
                            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                r = n.title,
                                i = void 0 === r ? null : r,
                                o = n.classes,
                                s = void 0 === o ? [] : o,
                                c = n.attributes,
                                l = void 0 === c ? {} : c,
                                u = n.styles,
                                m = void 0 === u ? {} : u;
                            return ac({ type: "counter", content: e }, function () {
                                var t, r, o, c, u, d, _;
                                return (
                                    aa("beforeDOMElementCreation", { content: e, params: n }),
                                    (r = (t = { content: e.toString(), title: i, extra: { attributes: l, styles: m, classes: ["".concat(t_.cssPrefix, "-layers-counter")].concat(f(s)) } }).content),
                                    (o = t.title),
                                    (u = a(a(a({}, (c = t.extra).attributes), o ? { title: o } : {}), {}, { class: c.classes.join(" ") })),
                                    (d = t0(c.styles)).length > 0 && (u.style = d),
                                    (_ = []).push({ tag: "span", attributes: u, children: [r] }),
                                    o && _.push({ tag: "span", attributes: { class: "sr-only" }, children: [o] }),
                                    _
                                );
                            });
                        },
                    };
                },
            },
            {
                mixout: function t() {
                    return {
                        text: function t(e) {
                            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                r = n.transform,
                                i = void 0 === r ? tv : r,
                                o = n.title,
                                s = void 0 === o ? null : o,
                                c = n.classes,
                                l = void 0 === c ? [] : c,
                                u = n.attributes,
                                m = void 0 === u ? {} : u,
                                d = n.styles,
                                _ = void 0 === d ? {} : d;
                            return ac({ type: "text", content: e }, function () {
                                return (
                                    aa("beforeDOMElementCreation", { content: e, params: n }),
                                    au({ content: e, transform: a(a({}, tv), i), title: s, extra: { attributes: m, styles: _, classes: ["".concat(t_.cssPrefix, "-layers-text")].concat(f(l)) } })
                                );
                            });
                        },
                    };
                },
                provides: function t(a) {
                    a.generateLayersText = function (t, a) {
                        var e = a.title,
                            n = a.transform,
                            r = a.extra,
                            i = null,
                            o = null;
                        if (L) {
                            var s = parseInt(getComputedStyle(t).fontSize, 10),
                                f = t.getBoundingClientRect();
                            (i = f.width / s), (o = f.height / s);
                        }
                        return t_.autoA11y && !e && (r.attributes["aria-hidden"] = "true"), Promise.resolve([t, au({ content: t.innerHTML, width: i, height: o, transform: n, title: e, extra: r, watchable: !0 })]);
                    };
                },
            },
            {
                hooks: function t() {
                    return {
                        mutationObserverCallbacks: function t(a) {
                            return (a.pseudoElementsCallback = aY), a;
                        },
                    };
                },
                provides: function t(a) {
                    a.pseudoElements2svg = function (t) {
                        var a = t.node;
                        t_.searchPseudoElements && aY(void 0 === a ? M : a);
                    };
                },
            },
            {
                mixout: function t() {
                    return {
                        dom: {
                            unwatch: function t() {
                                a4(), (aF = !0);
                            },
                        },
                    };
                },
                hooks: function t() {
                    return {
                        bootstrap: function t() {
                            a6(at("mutationObserverCallbacks", {}));
                        },
                        noAuto: function t() {
                            a5 && a5.disconnect();
                        },
                        watch: function t(a) {
                            var e = a.observeMutationsRoot;
                            aF ? a7() : a6(at("mutationObserverCallbacks", { observeMutationsRoot: e }));
                        },
                    };
                },
            },
            {
                mixout: function t() {
                    return {
                        parse: {
                            transform: function t(a) {
                                return aR(a);
                            },
                        },
                    };
                },
                hooks: function t() {
                    return {
                        parseNodeAttributes: function t(a, e) {
                            var n = e.getAttribute("data-fa-transform");
                            return n && (a.transform = aR(n)), a;
                        },
                    };
                },
                provides: function t(e) {
                    e.generateAbstractTransformGrouping = function (t) {
                        var e = t.main,
                            n = t.transform,
                            r = t.containerWidth,
                            i = t.iconWidth,
                            o = { transform: "translate(".concat(r / 2, " 256)") },
                            s = "translate(".concat(32 * n.x, ", ").concat(32 * n.y, ") "),
                            f = "scale(".concat((n.size / 16) * (n.flipX ? -1 : 1), ", ").concat((n.size / 16) * (n.flipY ? -1 : 1), ") "),
                            c = "rotate(".concat(n.rotate, " 0 0)"),
                            l = { transform: "".concat(s, " ").concat(f, " ").concat(c) },
                            u = { outer: o, inner: l, path: { transform: "translate(".concat(-((i / 2) * 1), " -256)") } };
                        return { tag: "g", attributes: a({}, u.outer), children: [{ tag: "g", attributes: a({}, u.inner), children: [{ tag: e.icon.tag, children: e.icon.children, attributes: a(a({}, e.icon.attributes), u.path) }] }] };
                    };
                },
            },
            {
                hooks: function t() {
                    return {
                        parseNodeAttributes: function t(a, e) {
                            var n = e.getAttribute("data-fa-mask"),
                                r = n
                                    ? tG(
                                          n.split(" ").map(function (t) {
                                              return t.trim();
                                          })
                                      )
                                    : tB();
                            return r.prefix || (r.prefix = tI), (a.mask = r), (a.maskId = e.getAttribute("data-fa-mask-id")), a;
                        },
                    };
                },
                provides: function t(e) {
                    e.generateAbstractMask = function (t) {
                        var e,
                            n,
                            r,
                            i,
                            o,
                            s,
                            f,
                            c,
                            l,
                            u,
                            m = t.children,
                            d = t.attributes,
                            _ = t.main,
                            p = t.mask,
                            v = t.maskId,
                            $ = t.transform,
                            g = _.width,
                            b = _.icon,
                            h = p.width,
                            y = p.icon,
                            k =
                                ((n = (e = { transform: $, containerWidth: h, iconWidth: g }).transform),
                                (r = e.containerWidth),
                                (i = e.iconWidth),
                                (o = { transform: "translate(".concat(r / 2, " 256)") }),
                                (s = "translate(".concat(32 * n.x, ", ").concat(32 * n.y, ") ")),
                                (f = "scale(".concat((n.size / 16) * (n.flipX ? -1 : 1), ", ").concat((n.size / 16) * (n.flipY ? -1 : 1), ") ")),
                                (c = "rotate(".concat(n.rotate, " 0 0)")),
                                (l = { transform: "".concat(s, " ").concat(f, " ").concat(c) }),
                                { outer: o, inner: l, path: { transform: "translate(".concat(-((i / 2) * 1), " -256)") } }),
                            w = { tag: "rect", attributes: a(a({}, aT), {}, { fill: "white" }) },
                            x = b.children ? { children: b.children.map(aj) } : {},
                            A = { tag: "g", attributes: a({}, k.inner), children: [aj(a({ tag: b.tag, attributes: a(a({}, b.attributes), k.path) }, x))] },
                            N = { tag: "g", attributes: a({}, k.outer), children: [A] },
                            C = "mask-".concat(v || t$()),
                            P = "clip-".concat(v || t$()),
                            z = { tag: "mask", attributes: a(a({}, aT), {}, { id: C, maskUnits: "userSpaceOnUse", maskContentUnits: "userSpaceOnUse" }), children: [w, N] },
                            S = { tag: "defs", children: [{ tag: "clipPath", attributes: { id: P }, children: "g" === (u = y).tag ? u.children : [u] }, z] };
                        return m.push(S, { tag: "rect", attributes: a({ fill: "currentColor", "clip-path": "url(#".concat(P, ")"), mask: "url(#".concat(C, ")") }, aT) }), { children: m, attributes: d };
                    };
                },
            },
            {
                provides: function t(e) {
                    var n = !1;
                    S.matchMedia && (n = S.matchMedia("(prefers-reduced-motion: reduce)").matches),
                        (e.missingIconAbstract = function () {
                            var t = [],
                                e = { fill: "currentColor" },
                                r = { attributeType: "XML", repeatCount: "indefinite", dur: "2s" };
                            t.push({
                                tag: "path",
                                attributes: a(
                                    a({}, e),
                                    {},
                                    {
                                        d:
                                            "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z",
                                    }
                                ),
                            });
                            var i = a(a({}, r), {}, { attributeName: "opacity" }),
                                o = { tag: "circle", attributes: a(a({}, e), {}, { cx: "256", cy: "364", r: "28" }), children: [] };
                            return (
                                n || o.children.push({ tag: "animate", attributes: a(a({}, r), {}, { attributeName: "r", values: "28;14;28;28;14;28;" }) }, { tag: "animate", attributes: a(a({}, i), {}, { values: "1;0;1;1;0;1;" }) }),
                                t.push(o),
                                t.push({
                                    tag: "path",
                                    attributes: a(
                                        a({}, e),
                                        {},
                                        {
                                            opacity: "1",
                                            d:
                                                "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z",
                                        }
                                    ),
                                    children: n ? [] : [{ tag: "animate", attributes: a(a({}, i), {}, { values: "1;0;0;0;0;1;" }) }],
                                }),
                                n ||
                                    t.push({
                                        tag: "path",
                                        attributes: a(a({}, e), {}, { opacity: "0", d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z" }),
                                        children: [{ tag: "animate", attributes: a(a({}, i), {}, { values: "0;0;1;1;0;0;" }) }],
                                    }),
                                { tag: "g", attributes: { class: "missing" }, children: t }
                            );
                        });
                },
            },
            {
                hooks: function t() {
                    return {
                        parseNodeAttributes: function t(a, e) {
                            var n = e.getAttribute("data-fa-symbol");
                            return (a.symbol = null !== n && ("" === n || n)), a;
                        },
                    };
                },
            },
        ]),
            (d = (m = { mixoutsTo: as }).mixoutsTo),
            (t9 = u),
            (tJ = {}),
            Object.keys(tQ).forEach(function (t) {
                -1 === tZ.indexOf(t) && delete tQ[t];
            }),
            t9.forEach(function (t) {
                var a = t.mixout ? t.mixout() : {};
                if (
                    (Object.keys(a).forEach(function (t) {
                        "function" == typeof a[t] && (d[t] = a[t]),
                            "object" === e(a[t]) &&
                                Object.keys(a[t]).forEach(function (e) {
                                    d[t] || (d[t] = {}), (d[t][e] = a[t][e]);
                                });
                    }),
                    t.hooks)
                ) {
                    var n = t.hooks();
                    Object.keys(n).forEach(function (t) {
                        tJ[t] || (tJ[t] = []), tJ[t].push(n[t]);
                    });
                }
                t.provides && t.provides(tQ);
            }),
            (function t(a) {
                try {
                    for (var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) n[r - 1] = arguments[r];
                    a.apply(void 0, n);
                } catch (i) {
                    if (!B) throw i;
                }
            })(function t(e) {
                D &&
                    (S.FontAwesome || (S.FontAwesome = as),
                    t5(function () {
                        af(), aa("bootstrap");
                    })),
                    (t2.hooks = a(
                        a({}, t2.hooks),
                        {},
                        {
                            addPack: function t(e, n) {
                                (t2.styles[e] = a(a({}, t2.styles[e] || {}), n)), t8(), af();
                            },
                            addPacks: function t(e) {
                                e.forEach(function (t) {
                                    var e = s(t, 2),
                                        n = e[0],
                                        r = e[1];
                                    t2.styles[n] = a(a({}, t2.styles[n] || {}), r);
                                }),
                                    t8(),
                                    af();
                            },
                            addShims: function t(a) {
                                var e;
                                (e = t2.shims).push.apply(e, f(a)), t8(), af();
                            },
                        }
                    ));
            });
    })();
