!(function (e) {
	var t = {};
	function n(r) {
		if (t[r]) return t[r].exports;
		var o = (t[r] = { i: r, l: !1, exports: {} });
		return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
	}
	(n.m = e),
		(n.c = t),
		(n.d = function (e, t, r) {
			n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
		}),
		(n.r = function (e) {
			"undefined" != typeof Symbol &&
				Symbol.toStringTag &&
				Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
				Object.defineProperty(e, "__esModule", { value: !0 });
		}),
		(n.t = function (e, t) {
			if ((1 & t && (e = n(e)), 8 & t)) return e;
			if (4 & t && "object" == typeof e && e && e.__esModule) return e;
			var r = Object.create(null);
			if (
				(n.r(r),
				Object.defineProperty(r, "default", { enumerable: !0, value: e }),
				2 & t && "string" != typeof e)
			)
				for (var o in e)
					n.d(
						r,
						o,
						function (t) {
							return e[t];
						}.bind(null, o)
					);
			return r;
		}),
		(n.n = function (e) {
			var t =
				e && e.__esModule
					? function () {
							return e.default;
					  }
					: function () {
							return e;
					  };
			return n.d(t, "a", t), t;
		}),
		(n.o = function (e, t) {
			return Object.prototype.hasOwnProperty.call(e, t);
		}),
		(n.p = ""),
		n((n.s = 353));
})({
	0: function (e, t, n) {
		"use strict";
		var r, o, i, a, u, c, s, l;
		!(function (e) {
			(e[(e.Forex = 0)] = "Forex"),
				(e[(e.CFD = 1)] = "CFD"),
				(e[(e.Futures = 2)] = "Futures"),
				(e[(e.CFDIndex = 3)] = "CFDIndex"),
				(e[(e.CFDLeverage = 4)] = "CFDLeverage");
		})(r || (r = {})),
			(function (e) {
				(e[(e.New = 0)] = "New"),
					(e[(e.Hot = 1)] = "Hot"),
					(e[(e.ClosingSoon = 2)] = "ClosingSoon"),
					(e[(e.Closed = 3)] = "Closed");
			})(o || (o = {})),
			(function (e) {
				(e.Symbol = "symbol"),
					(e.Sell = "sell"),
					(e.Buy = "buy"),
					(e.Tcker = "ticker"),
					(e.Spread = "spread"),
					(e.Time = "time"),
					(e.LogHigh = "lowHigh"),
					(e.SessionChange = "sessionChange"),
					(e.Description = "description"),
					(e.Type = "type"),
					(e.Exchange = "exchange"),
					(e.Flag = "flag");
			})(i || (i = {})),
			(function (e) {
				(e.LiveQuotes = "livequotes"),
					(e.IntradayChart = "intradaychart"),
					(e.CurrencyConverter = "currencyconverter"),
					(e.LiveQuotesBar = "livequotesbar"),
					(e.MarketOverview = "marketoverview");
			})(a || (a = {})),
			(function (e) {
				(e[(e.NoTrade = 0)] = "NoTrade"),
					(e[(e.CloseOnly = 1)] = "CloseOnly"),
					(e[(e.Full = 2)] = "Full"),
					(e[(e.LongOnly = 3)] = "LongOnly");
			})(u || (u = {})),
			(function (e) {
				(e["1H"] = "1H"),
					(e["1D"] = "1D"),
					(e["2D"] = "2D"),
					(e["1W"] = "1W"),
					(e["1M"] = "1M"),
					(e["3M"] = "3M"),
					(e["1Y"] = "1Y"),
					(e["5Y"] = "5Y"),
					(e["20Y"] = "20Y");
			})(c || (c = {})),
			(function (e) {
				(e.Dark = "dark"), (e.Light = "light");
			})(s || (s = {})),
			(function (e) {
				(e.Script = "BasicScript"),
					(e.ConfigurationPage = "ConfigurationPage"),
					(e.Widget = "Widget");
			})(l || (l = {})),
			n.d(t, "b", function () {
				return o;
			}),
			n.d(t, "c", function () {
				return i;
			}),
			n.d(t, "f", function () {
				return a;
			}),
			n.d(t, "e", function () {
				return c;
			}),
			n.d(t, "d", function () {
				return s;
			}),
			n.d(t, "a", function () {
				return l;
			});
	},
	1: function (e, t, n) {
		"use strict";
		var r,
			o = n(0);
		function i(e, t, n) {
			return (
				t in e
					? Object.defineProperty(e, t, {
							value: n,
							enumerable: !0,
							configurable: !0,
							writable: !0,
					  })
					: (e[t] = n),
				e
			);
		}
		var a = { code: "en", name: "English" },
			u = o.d.Dark,
			c = { language: a.code, theme: u },
			s = { INSTRUMENT_STATUS: 1e4 },
			l = {
				dark: {
					bodyColor: "rgba(198, 210, 219, 0.8)",
					gridLines: "rgba(198, 210, 219, 0.1)",
				},
				light: {
					bodyColor: "rgba(53, 71, 89, 0.8)",
					gridLines: "rgba(53, 71, 89, 0.1)",
				},
			},
			f =
				(i((r = {}), o.e["1H"], 3600),
				i(r, o.e["1D"], 86400),
				i(r, o.e["1W"], 604800),
				r),
			p = {
				widgetWrapper: { selector: ".sfx-widget__wrapper" },
				widgetLoader: { selector: ".sfx-widget__loader" },
				widgetTitle: { selector: ".sfx-widget__title" },
				widgetPoweredBy: {
					translationKey: "F.POWERED_BY",
					selector: ".sfx-widget__powered-by",
				},
				widgetContent: { selector: ".sfx-widget__content" },
				widgetLogoWrapper: { selector: ".sfx-widget__logo-wrapper" },
				widgetSFXLink: {
					selector: ".sfx-widget__sfx-link",
					attributes: { href: "https://simplefx.com", target: "_blank" },
				},
			},
			g = {
				DISPLAY_NONE: "display-none",
				SELECTED: "selected",
				DISABLED: "disabled",
				ACTIVE: "active",
				HIDDEN: "hidden",
				FULL_SCREEN: "full-screen",
			},
			y = {
				ARROW_UP:
					'<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 1024 1024" class="sfx-icons sfx-icons__arrow sfx-icons__arrow--up"><path d="M118.898 489.244c-2.711 6.746-4.284 14.567-4.284 22.756s1.573 16.010 4.433 23.178l-0.149-0.422c2.87 7.286 6.916 13.525 11.966 18.794l-0.019-0.020 273.067 284.444c10.283 10.224 24.457 16.543 40.107 16.543s29.824-6.319 40.109-16.546l-0.003 0.003c10.265-10.791 16.579-25.422 16.579-41.529s-6.315-30.738-16.603-41.554l0.024 0.025-175.787-186.027h544.996c31.419 0 56.889-25.47 56.889-56.889s-25.47-56.889-56.889-56.889v0h-544.996l175.787-182.044c10.265-10.791 16.579-25.422 16.579-41.529s-6.315-30.738-16.603-41.554l0.024 0.025c-9.965-11.329-24.26-18.643-40.273-19.338l-0.119-0.004c-15.691 0.39-29.749 7.074-39.801 17.613l-0.021 0.023-273.067 284.444c-4.835 4.639-8.84 10.098-11.798 16.161l-0.148 0.337z"></path></svg>',
				ARROW_DOWN:
					'<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 1024 1024" class="sfx-icons sfx-icons__arrow sfx-icons__arrow--down"><path d="M118.898 489.244c-2.711 6.746-4.284 14.567-4.284 22.756s1.573 16.010 4.433 23.178l-0.149-0.422c2.87 7.286 6.916 13.525 11.966 18.794l-0.019-0.020 273.067 284.444c10.283 10.224 24.457 16.543 40.107 16.543s29.824-6.319 40.109-16.546l-0.003 0.003c10.265-10.791 16.579-25.422 16.579-41.529s-6.315-30.738-16.603-41.554l0.024 0.025-175.787-186.027h544.996c31.419 0 56.889-25.47 56.889-56.889s-25.47-56.889-56.889-56.889v0h-544.996l175.787-182.044c10.265-10.791 16.579-25.422 16.579-41.529s-6.315-30.738-16.603-41.554l0.024 0.025c-9.965-11.329-24.26-18.643-40.273-19.338l-0.119-0.004c-15.691 0.39-29.749 7.074-39.801 17.613l-0.021 0.023-273.067 284.444c-4.835 4.639-8.84 10.098-11.798 16.161l-0.148 0.337z"></path></svg>',
				CHEVRON:
					'<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 1024 1024" class="sfx-icons sfx-icons__chevron"><path d="M552.391 723.058l284.444-284.444c10.337-10.337 16.731-24.617 16.731-40.391 0-31.547-25.574-57.122-57.122-57.122-15.774 0-30.054 6.394-40.391 16.731v0l-244.053 244.622-244.053-244.622c-10.337-10.337-24.617-16.731-40.391-16.731-31.547 0-57.122 25.574-57.122 57.122 0 15.774 6.394 30.054 16.731 40.391l284.444 284.444c10.311 10.393 24.6 16.828 40.391 16.828s30.080-6.434 40.387-16.824l0.004-0.004z"></path></svg>',
			},
			d = { wheelPropagation: !1 },
			h = {
				Commodities: "F.INSTRUMENTS.CATEGORY.COMMODITIES",
				Crypto: "F.INSTRUMENTS.CATEGORY.CRYPTO",
				Forex: "F.INSTRUMENTS.CATEGORY.FOREX",
				"Indices Cash": "F.INSTRUMENTS.CATEGORY.INDICESCASH",
				"Precious Metals": "F.INSTRUMENTS.CATEGORY.PRECIOUSMETALS",
				"Equities US": "F.INSTRUMENTS.CATEGORY.EQUITIESUS",
				"Equities JP": "F.INSTRUMENTS.CATEGORY.EQUITIESJP",
				"Equities DE": "F.INSTRUMENTS.CATEGORY.EQUITIESDE",
				"Equities SE": "F.INSTRUMENTS.CATEGORY.EQUITIESSE",
				"Equities UK": "F.INSTRUMENTS.CATEGORY.EQUITIESUK",
				"Equities TR": "F.INSTRUMENTS.CATEGORY.EQUITIESTR",
				"Equities BR": "F.INSTRUMENTS.CATEGORY.EQUITIESBR",
				"Equities FR": "F.INSTRUMENTS.CATEGORY.EQUITIESFR",
			},
			v = {
				JS_DEFAULT_PATH: "".concat(
					"https://widgets.simplefx.com",
					"/sfx-widget.js"
				),
			};
		n.d(t, "d", function () {
			return a;
		}),
			n.d(t, "f", function () {
				return u;
			}),
			n.d(t, "e", function () {
				return "BTCUSD";
			}),
			n.d(t, "c", function () {
				return c;
			}),
			n.d(t, "h", function () {
				return s;
			}),
			n.d(t, "l", function () {
				return l;
			}),
			n.d(t, "j", function () {
				return f;
			}),
			n.d(t, "b", function () {
				return p;
			}),
			n.d(t, "a", function () {
				return g;
			}),
			n.d(t, "k", function () {
				return y;
			}),
			n.d(t, "i", function () {
				return d;
			}),
			n.d(t, "g", function () {
				return h;
			}),
			n.d(t, "m", function () {
				return v;
			});
	},
	129: function (e, t, n) {
		(function (e) {
			var r =
					Object.getOwnPropertyDescriptors ||
					function (e) {
						for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++)
							n[t[r]] = Object.getOwnPropertyDescriptor(e, t[r]);
						return n;
					},
				o = /%[sdj%]/g;
			(t.format = function (e) {
				if (!v(e)) {
					for (var t = [], n = 0; n < arguments.length; n++)
						t.push(u(arguments[n]));
					return t.join(" ");
				}
				n = 1;
				for (
					var r = arguments,
						i = r.length,
						a = String(e).replace(o, function (e) {
							if ("%%" === e) return "%";
							if (n >= i) return e;
							switch (e) {
								case "%s":
									return String(r[n++]);
								case "%d":
									return Number(r[n++]);
								case "%j":
									try {
										return JSON.stringify(r[n++]);
									} catch (e) {
										return "[Circular]";
									}
								default:
									return e;
							}
						}),
						c = r[n];
					n < i;
					c = r[++n]
				)
					d(c) || !b(c) ? (a += " " + c) : (a += " " + u(c));
				return a;
			}),
				(t.deprecate = function (n, r) {
					if (void 0 !== e && !0 === e.noDeprecation) return n;
					if (void 0 === e)
						return function () {
							return t.deprecate(n, r).apply(this, arguments);
						};
					var o = !1;
					return function () {
						if (!o) {
							if (e.throwDeprecation) throw new Error(r);
							e.traceDeprecation ? console.trace(r) : console.error(r),
								(o = !0);
						}
						return n.apply(this, arguments);
					};
				});
			var i,
				a = {};
			function u(e, n) {
				var r = { seen: [], stylize: s };
				return (
					arguments.length >= 3 && (r.depth = arguments[2]),
					arguments.length >= 4 && (r.colors = arguments[3]),
					y(n) ? (r.showHidden = n) : n && t._extend(r, n),
					m(r.showHidden) && (r.showHidden = !1),
					m(r.depth) && (r.depth = 2),
					m(r.colors) && (r.colors = !1),
					m(r.customInspect) && (r.customInspect = !0),
					r.colors && (r.stylize = c),
					l(r, e, r.depth)
				);
			}
			function c(e, t) {
				var n = u.styles[t];
				return n
					? "[" + u.colors[n][0] + "m" + e + "[" + u.colors[n][1] + "m"
					: e;
			}
			function s(e, t) {
				return e;
			}
			function l(e, n, r) {
				if (
					e.customInspect &&
					n &&
					T(n.inspect) &&
					n.inspect !== t.inspect &&
					(!n.constructor || n.constructor.prototype !== n)
				) {
					var o = n.inspect(r, e);
					return v(o) || (o = l(e, o, r)), o;
				}
				var i = (function (e, t) {
					if (m(t)) return e.stylize("undefined", "undefined");
					if (v(t)) {
						var n =
							"'" +
							JSON.stringify(t)
								.replace(/^"|"$/g, "")
								.replace(/'/g, "\\'")
								.replace(/\\"/g, '"') +
							"'";
						return e.stylize(n, "string");
					}
					if (h(t)) return e.stylize("" + t, "number");
					if (y(t)) return e.stylize("" + t, "boolean");
					if (d(t)) return e.stylize("null", "null");
				})(e, n);
				if (i) return i;
				var a = Object.keys(n),
					u = (function (e) {
						var t = {};
						return (
							e.forEach(function (e, n) {
								t[e] = !0;
							}),
							t
						);
					})(a);
				if (
					(e.showHidden && (a = Object.getOwnPropertyNames(n)),
					E(n) &&
						(a.indexOf("message") >= 0 || a.indexOf("description") >= 0))
				)
					return f(n);
				if (0 === a.length) {
					if (T(n)) {
						var c = n.name ? ": " + n.name : "";
						return e.stylize("[Function" + c + "]", "special");
					}
					if (w(n))
						return e.stylize(RegExp.prototype.toString.call(n), "regexp");
					if (S(n))
						return e.stylize(Date.prototype.toString.call(n), "date");
					if (E(n)) return f(n);
				}
				var s,
					b = "",
					O = !1,
					x = ["{", "}"];
				(g(n) && ((O = !0), (x = ["[", "]"])), T(n)) &&
					(b = " [Function" + (n.name ? ": " + n.name : "") + "]");
				return (
					w(n) && (b = " " + RegExp.prototype.toString.call(n)),
					S(n) && (b = " " + Date.prototype.toUTCString.call(n)),
					E(n) && (b = " " + f(n)),
					0 !== a.length || (O && 0 != n.length)
						? r < 0
							? w(n)
								? e.stylize(RegExp.prototype.toString.call(n), "regexp")
								: e.stylize("[Object]", "special")
							: (e.seen.push(n),
							  (s = O
									? (function (e, t, n, r, o) {
											for (
												var i = [], a = 0, u = t.length;
												a < u;
												++a
											)
												D(t, String(a))
													? i.push(p(e, t, n, r, String(a), !0))
													: i.push("");
											return (
												o.forEach(function (o) {
													o.match(/^\d+$/) ||
														i.push(p(e, t, n, r, o, !0));
												}),
												i
											);
									  })(e, n, r, u, a)
									: a.map(function (t) {
											return p(e, n, r, u, t, O);
									  })),
							  e.seen.pop(),
							  (function (e, t, n) {
									if (
										e.reduce(function (e, t) {
											return (
												t.indexOf("\n") >= 0 && 0,
												e +
													t.replace(/\u001b\[\d\d?m/g, "").length +
													1
											);
										}, 0) > 60
									)
										return (
											n[0] +
											("" === t ? "" : t + "\n ") +
											" " +
											e.join(",\n  ") +
											" " +
											n[1]
										);
									return n[0] + t + " " + e.join(", ") + " " + n[1];
							  })(s, b, x))
						: x[0] + b + x[1]
				);
			}
			function f(e) {
				return "[" + Error.prototype.toString.call(e) + "]";
			}
			function p(e, t, n, r, o, i) {
				var a, u, c;
				if (
					((c = Object.getOwnPropertyDescriptor(t, o) || { value: t[o] })
						.get
						? (u = c.set
								? e.stylize("[Getter/Setter]", "special")
								: e.stylize("[Getter]", "special"))
						: c.set && (u = e.stylize("[Setter]", "special")),
					D(r, o) || (a = "[" + o + "]"),
					u ||
						(e.seen.indexOf(c.value) < 0
							? (u = d(n)
									? l(e, c.value, null)
									: l(e, c.value, n - 1)).indexOf("\n") > -1 &&
							  (u = i
									? u
											.split("\n")
											.map(function (e) {
												return "  " + e;
											})
											.join("\n")
											.substr(2)
									: "\n" +
									  u
											.split("\n")
											.map(function (e) {
												return "   " + e;
											})
											.join("\n"))
							: (u = e.stylize("[Circular]", "special"))),
					m(a))
				) {
					if (i && o.match(/^\d+$/)) return u;
					(a = JSON.stringify("" + o)).match(
						/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/
					)
						? ((a = a.substr(1, a.length - 2)),
						  (a = e.stylize(a, "name")))
						: ((a = a
								.replace(/'/g, "\\'")
								.replace(/\\"/g, '"')
								.replace(/(^"|"$)/g, "'")),
						  (a = e.stylize(a, "string")));
				}
				return a + ": " + u;
			}
			function g(e) {
				return Array.isArray(e);
			}
			function y(e) {
				return "boolean" == typeof e;
			}
			function d(e) {
				return null === e;
			}
			function h(e) {
				return "number" == typeof e;
			}
			function v(e) {
				return "string" == typeof e;
			}
			function m(e) {
				return void 0 === e;
			}
			function w(e) {
				return b(e) && "[object RegExp]" === O(e);
			}
			function b(e) {
				return "object" == typeof e && null !== e;
			}
			function S(e) {
				return b(e) && "[object Date]" === O(e);
			}
			function E(e) {
				return b(e) && ("[object Error]" === O(e) || e instanceof Error);
			}
			function T(e) {
				return "function" == typeof e;
			}
			function O(e) {
				return Object.prototype.toString.call(e);
			}
			function x(e) {
				return e < 10 ? "0" + e.toString(10) : e.toString(10);
			}
			(t.debuglog = function (n) {
				if (
					(m(i) && (i = e.env.NODE_DEBUG || ""),
					(n = n.toUpperCase()),
					!a[n])
				)
					if (new RegExp("\\b" + n + "\\b", "i").test(i)) {
						var r = e.pid;
						a[n] = function () {
							var e = t.format.apply(t, arguments);
							console.error("%s %d: %s", n, r, e);
						};
					} else a[n] = function () {};
				return a[n];
			}),
				(t.inspect = u),
				(u.colors = {
					bold: [1, 22],
					italic: [3, 23],
					underline: [4, 24],
					inverse: [7, 27],
					white: [37, 39],
					grey: [90, 39],
					black: [30, 39],
					blue: [34, 39],
					cyan: [36, 39],
					green: [32, 39],
					magenta: [35, 39],
					red: [31, 39],
					yellow: [33, 39],
				}),
				(u.styles = {
					special: "cyan",
					number: "yellow",
					boolean: "yellow",
					undefined: "grey",
					null: "bold",
					string: "green",
					date: "magenta",
					regexp: "red",
				}),
				(t.isArray = g),
				(t.isBoolean = y),
				(t.isNull = d),
				(t.isNullOrUndefined = function (e) {
					return null == e;
				}),
				(t.isNumber = h),
				(t.isString = v),
				(t.isSymbol = function (e) {
					return "symbol" == typeof e;
				}),
				(t.isUndefined = m),
				(t.isRegExp = w),
				(t.isObject = b),
				(t.isDate = S),
				(t.isError = E),
				(t.isFunction = T),
				(t.isPrimitive = function (e) {
					return (
						null === e ||
						"boolean" == typeof e ||
						"number" == typeof e ||
						"string" == typeof e ||
						"symbol" == typeof e ||
						void 0 === e
					);
				}),
				(t.isBuffer = n(131));
			var C = [
				"Jan",
				"Feb",
				"Mar",
				"Apr",
				"May",
				"Jun",
				"Jul",
				"Aug",
				"Sep",
				"Oct",
				"Nov",
				"Dec",
			];
			function j() {
				var e = new Date(),
					t = [x(e.getHours()), x(e.getMinutes()), x(e.getSeconds())].join(
						":"
					);
				return [e.getDate(), C[e.getMonth()], t].join(" ");
			}
			function D(e, t) {
				return Object.prototype.hasOwnProperty.call(e, t);
			}
			(t.log = function () {
				console.log("%s - %s", j(), t.format.apply(t, arguments));
			}),
				(t.inherits = n(132)),
				(t._extend = function (e, t) {
					if (!t || !b(t)) return e;
					for (var n = Object.keys(t), r = n.length; r--; )
						e[n[r]] = t[n[r]];
					return e;
				});
			var k =
				"undefined" != typeof Symbol
					? Symbol("util.promisify.custom")
					: void 0;
			function U(e, t) {
				if (!e) {
					var n = new Error("Promise was rejected with a falsy value");
					(n.reason = e), (e = n);
				}
				return t(e);
			}
			(t.promisify = function (e) {
				if ("function" != typeof e)
					throw new TypeError(
						'The "original" argument must be of type Function'
					);
				if (k && e[k]) {
					var t;
					if ("function" != typeof (t = e[k]))
						throw new TypeError(
							'The "util.promisify.custom" argument must be of type Function'
						);
					return (
						Object.defineProperty(t, k, {
							value: t,
							enumerable: !1,
							writable: !1,
							configurable: !0,
						}),
						t
					);
				}
				function t() {
					for (
						var t,
							n,
							r = new Promise(function (e, r) {
								(t = e), (n = r);
							}),
							o = [],
							i = 0;
						i < arguments.length;
						i++
					)
						o.push(arguments[i]);
					o.push(function (e, r) {
						e ? n(e) : t(r);
					});
					try {
						e.apply(this, o);
					} catch (e) {
						n(e);
					}
					return r;
				}
				return (
					Object.setPrototypeOf(t, Object.getPrototypeOf(e)),
					k &&
						Object.defineProperty(t, k, {
							value: t,
							enumerable: !1,
							writable: !1,
							configurable: !0,
						}),
					Object.defineProperties(t, r(e))
				);
			}),
				(t.promisify.custom = k),
				(t.callbackify = function (t) {
					if ("function" != typeof t)
						throw new TypeError(
							'The "original" argument must be of type Function'
						);
					function n() {
						for (var n = [], r = 0; r < arguments.length; r++)
							n.push(arguments[r]);
						var o = n.pop();
						if ("function" != typeof o)
							throw new TypeError(
								"The last argument must be of type Function"
							);
						var i = this,
							a = function () {
								return o.apply(i, arguments);
							};
						t.apply(this, n).then(
							function (t) {
								e.nextTick(a, null, t);
							},
							function (t) {
								e.nextTick(U, t, a);
							}
						);
					}
					return (
						Object.setPrototypeOf(n, Object.getPrototypeOf(t)),
						Object.defineProperties(n, r(t)),
						n
					);
				});
		}.call(this, n(130)));
	},
	130: function (e, t) {
		var n,
			r,
			o = (e.exports = {});
		function i() {
			throw new Error("setTimeout has not been defined");
		}
		function a() {
			throw new Error("clearTimeout has not been defined");
		}
		function u(e) {
			if (n === setTimeout) return setTimeout(e, 0);
			if ((n === i || !n) && setTimeout)
				return (n = setTimeout), setTimeout(e, 0);
			try {
				return n(e, 0);
			} catch (t) {
				try {
					return n.call(null, e, 0);
				} catch (t) {
					return n.call(this, e, 0);
				}
			}
		}
		!(function () {
			try {
				n = "function" == typeof setTimeout ? setTimeout : i;
			} catch (e) {
				n = i;
			}
			try {
				r = "function" == typeof clearTimeout ? clearTimeout : a;
			} catch (e) {
				r = a;
			}
		})();
		var c,
			s = [],
			l = !1,
			f = -1;
		function p() {
			l &&
				c &&
				((l = !1),
				c.length ? (s = c.concat(s)) : (f = -1),
				s.length && g());
		}
		function g() {
			if (!l) {
				var e = u(p);
				l = !0;
				for (var t = s.length; t; ) {
					for (c = s, s = []; ++f < t; ) c && c[f].run();
					(f = -1), (t = s.length);
				}
				(c = null),
					(l = !1),
					(function (e) {
						if (r === clearTimeout) return clearTimeout(e);
						if ((r === a || !r) && clearTimeout)
							return (r = clearTimeout), clearTimeout(e);
						try {
							r(e);
						} catch (t) {
							try {
								return r.call(null, e);
							} catch (t) {
								return r.call(this, e);
							}
						}
					})(e);
			}
		}
		function y(e, t) {
			(this.fun = e), (this.array = t);
		}
		function d() {}
		(o.nextTick = function (e) {
			var t = new Array(arguments.length - 1);
			if (arguments.length > 1)
				for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
			s.push(new y(e, t)), 1 !== s.length || l || u(g);
		}),
			(y.prototype.run = function () {
				this.fun.apply(null, this.array);
			}),
			(o.title = "browser"),
			(o.browser = !0),
			(o.env = {}),
			(o.argv = []),
			(o.version = ""),
			(o.versions = {}),
			(o.on = d),
			(o.addListener = d),
			(o.once = d),
			(o.off = d),
			(o.removeListener = d),
			(o.removeAllListeners = d),
			(o.emit = d),
			(o.prependListener = d),
			(o.prependOnceListener = d),
			(o.listeners = function (e) {
				return [];
			}),
			(o.binding = function (e) {
				throw new Error("process.binding is not supported");
			}),
			(o.cwd = function () {
				return "/";
			}),
			(o.chdir = function (e) {
				throw new Error("process.chdir is not supported");
			}),
			(o.umask = function () {
				return 0;
			});
	},
	131: function (e, t) {
		e.exports = function (e) {
			return (
				e &&
				"object" == typeof e &&
				"function" == typeof e.copy &&
				"function" == typeof e.fill &&
				"function" == typeof e.readUInt8
			);
		};
	},
	132: function (e, t) {
		"function" == typeof Object.create
			? (e.exports = function (e, t) {
					t &&
						((e.super_ = t),
						(e.prototype = Object.create(t.prototype, {
							constructor: {
								value: e,
								enumerable: !1,
								writable: !0,
								configurable: !0,
							},
						})));
			  })
			: (e.exports = function (e, t) {
					if (t) {
						e.super_ = t;
						var n = function () {};
						(n.prototype = t.prototype),
							(e.prototype = new n()),
							(e.prototype.constructor = e);
					}
			  });
	},
	17: function (e, t, n) {
		"use strict";
		const { inspect: r } = n(129);
		class o extends Error {
			constructor(e) {
				super(r(e)),
					(this.name = "NonError"),
					Error.captureStackTrace(this, o);
			}
		}
		const i = ["name", "message", "stack", "code"],
			a = (e, t, n) => {
				const r = n || (Array.isArray(e) ? [] : {});
				t.push(e);
				for (const [n, o] of Object.entries(e))
					"function" != typeof o &&
						(o && "object" == typeof o
							? t.includes(e[n])
								? (r[n] = "[Circular]")
								: (r[n] = a(e[n], t.slice()))
							: (r[n] = o));
				for (const t of i) "string" == typeof e[t] && (r[t] = e[t]);
				return r;
			};
		e.exports = {
			serializeError: (e) =>
				"object" == typeof e && null !== e
					? a(e, [])
					: "function" == typeof e
					? `[Function: ${e.name || "anonymous"}]`
					: e,
			deserializeError: (e) => {
				if (e instanceof Error) return e;
				if ("object" == typeof e && null !== e && !Array.isArray(e)) {
					const t = new Error();
					return a(e, [], t), t;
				}
				return new o(e);
			},
		};
	},
	19: function (e, t, n) {
		"use strict";
		n.d(t, "a", function () {
			return l;
		});
		var r,
			o = n(17),
			i = n.n(o),
			a = n(5),
			u = n(4);
		function c(e, t) {
			return (
				(function (e) {
					if (Array.isArray(e)) return e;
				})(e) ||
				(function (e, t) {
					if (
						!(
							Symbol.iterator in Object(e) ||
							"[object Arguments]" === Object.prototype.toString.call(e)
						)
					)
						return;
					var n = [],
						r = !0,
						o = !1,
						i = void 0;
					try {
						for (
							var a, u = e[Symbol.iterator]();
							!(r = (a = u.next()).done) &&
							(n.push(a.value), !t || n.length !== t);
							r = !0
						);
					} catch (e) {
						(o = !0), (i = e);
					} finally {
						try {
							r || null == u.return || u.return();
						} finally {
							if (o) throw i;
						}
					}
					return n;
				})(e, t) ||
				(function () {
					throw new TypeError(
						"Invalid attempt to destructure non-iterable instance"
					);
				})()
			);
		}
		function s(e, t) {
			for (var n = 0; n < t.length; n++) {
				var r = t[n];
				(r.enumerable = r.enumerable || !1),
					(r.configurable = !0),
					"value" in r && (r.writable = !0),
					Object.defineProperty(e, r.key, r);
			}
		}
		!(function (e) {
			(e.Info = "info"), (e.Warning = "warning"), (e.Error = "error");
		})(r || (r = {}));
		var l = (function () {
			function e(t, n) {
				var r, o, i;
				!(function (e, t) {
					if (!(e instanceof t))
						throw new TypeError("Cannot call a class as a function");
				})(this, e),
					(this.source = t),
					(this.widget = n),
					(r = this),
					(o = "httpService"),
					(i = new a.a()),
					o in r
						? Object.defineProperty(r, o, {
								value: i,
								enumerable: !0,
								configurable: !0,
								writable: !0,
						  })
						: (r[o] = i);
			}
			var t, n, o;
			return (
				(t = e),
				(n = [
					{
						key: "getLongMessage",
						value: function (e) {
							if (!e) return "Unknown error";
							var t = "";
							"string" == typeof e
								? (t = "".concat(e, "\n\n"))
								: (e.message &&
										(t += "Message: ".concat(e.message, ";\n\n")),
								  e.stack && (t += "Stack: ".concat(e.stack, ";")),
								  e instanceof Error &&
										(t += "ErrorToString: ".concat(
											JSON.stringify(i()(e))
										)));
							for (
								var n = arguments.length,
									r = new Array(n > 1 ? n - 1 : 0),
									o = 1;
								o < n;
								o++
							)
								r[o - 1] = arguments[o];
							for (var a = 0, u = r; a < u.length; a++) {
								var s = u[a],
									l = c(s, 2),
									f = l[0],
									p = l[1];
								p && p instanceof Error
									? (t += "ErrorToString: ".concat(
											JSON.stringify(i()(p)),
											"\n\n"
									  ))
									: p && (t += "".concat(f, ": ").concat(p, ";\n\n"));
							}
							return t;
						},
					},
					{
						key: "getShortMessage",
						value: function (e) {
							return e
								? "string" == typeof e
									? e
									: e.shortMessage || e.message || e.name
								: "Unknown error";
						},
					},
					{
						key: "getUniId",
						value: function (e) {
							return e && e.uni_l ? e.uni_l.split("_")[1] : "";
						},
					},
					{
						key: "getWebPageUrl",
						value: function (e) {
							return e && e.webPageUrl ? e.webPageUrl : "";
						},
					},
					{
						key: "getErrorLevel",
						value: function (e) {
							return "string" != typeof e
								? r.Error
								: e.indexOf("Browser not supported") > -1
								? r.Warning
								: r.Error;
						},
					},
					{
						key: "pushLog",
						value: function (e) {
							this.httpService.post(
								"https://widgets.simplefx.com/logs/create",
								e
							);
						},
					},
					{
						key: "onerror",
						value: function (e, t, n, o, i) {
							var a = this.getLongMessage(
									e,
									["Line", n],
									["Column", o],
									["ErrorObj", i]
								),
								c = this.getShortMessage(e),
								s = u.a.parseQueryString(document.location.search),
								l = this.getUniId(s),
								f = this.getWebPageUrl(s),
								p = this.getErrorLevel(c),
								g = {
									source: this.source,
									widget: this.widget || null,
									level: p,
									shortMessage: c,
									message: a,
									userAgent: window.navigator.userAgent,
									clientTime: Date.now(),
									release: "7ed8b535ad3530774d0419cbf062fe3586c3b25c",
									commit: "7ed8b53",
									webPageUrl: f,
									widgetUrl: window.location.href,
									uniCampaignId: l,
								};
							p === r.Warning ? console.warn(e) : console.error(e),
								this.pushLog(g);
						},
					},
				]) && s(t.prototype, n),
				o && s(t, o),
				e
			);
		})();
	},
	20: function (e, t, n) {
		"use strict";
		function r(e) {
			"function" == typeof e &&
				("complete" === document.readyState
					? e()
					: document.addEventListener("DOMContentLoaded", e, !1));
		}
		var o = n(0);
		function i(e, t) {
			var n = function (e) {
				window.location.href &&
					Object.assign(e, { webPageUrl: window.location.href });
				var t = Object.keys(e)
					.map(function (t) {
						return "".concat(t, "=").concat(e[t]);
					})
					.join("&");
				return "".concat(encodeURIComponent(t));
			};
			switch (e.toLowerCase()) {
				case o.f.LiveQuotes:
					return ""
						.concat(
							"https://widgets.simplefx.com",
							"/liveQuotes/index.html?"
						)
						.concat(n(t));
				case o.f.IntradayChart:
					return ""
						.concat(
							"https://widgets.simplefx.com",
							"/intradayChart/index.html?"
						)
						.concat(n(t));
				case o.f.LiveQuotesBar:
					return ""
						.concat(
							"https://widgets.simplefx.com",
							"/liveQuotesBar/index.html?"
						)
						.concat(n(t));
				case o.f.CurrencyConverter:
					return ""
						.concat(
							"https://widgets.simplefx.com",
							"/currencyConverter/index.html?"
						)
						.concat(n(t));
				case o.f.MarketOverview:
					return ""
						.concat(
							"https://widgets.simplefx.com",
							"/marketOverview/index.html?"
						)
						.concat(n(t));
				default:
					throw new Error("Wrong widget type: ".concat(e));
			}
		}
		n.d(t, "a", function () {
			return r;
		}),
			n.d(t, "b", function () {
				return i;
			});
	},
	353: function (e, t, n) {
		"use strict";
		n.r(t);
		var r = n(0),
			o = n(20),
			i = n(19);
		function a(e, t, n) {
			return (a = (function () {
				if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ("function" == typeof Proxy) return !0;
				try {
					return (
						Date.prototype.toString.call(
							Reflect.construct(Date, [], function () {})
						),
						!0
					);
				} catch (e) {
					return !1;
				}
			})()
				? Reflect.construct
				: function (e, t, n) {
						var r = [null];
						r.push.apply(r, t);
						var o = new (Function.bind.apply(e, r))();
						return n && u(o, n.prototype), o;
				  }).apply(null, arguments);
		}
		function u(e, t) {
			return (u =
				Object.setPrototypeOf ||
				function (e, t) {
					return (e.__proto__ = t), e;
				})(e, t);
		}
		function c(e, t) {
			for (var n = 0; n < t.length; n++) {
				var r = t[n];
				(r.enumerable = r.enumerable || !1),
					(r.configurable = !0),
					"value" in r && (r.writable = !0),
					Object.defineProperty(e, r.key, r);
			}
		}
		var s = (function () {
			function e() {
				for (var t = arguments.length, n = new Array(t), o = 0; o < t; o++)
					n[o] = arguments[o];
				var a, u, c;
				!(function (e, t) {
					if (!(e instanceof t))
						throw new TypeError("Cannot call a class as a function");
				})(this, e),
					(a = this),
					(u = "errorService"),
					(c = new i.a(r.a.Script)),
					u in a
						? Object.defineProperty(a, u, {
								value: c,
								enumerable: !0,
								configurable: !0,
								writable: !0,
						  })
						: (a[u] = c);
				try {
					if (!n)
						throw new Error("Wrong widget script - missing parameters");
					"undefined" != typeof window && this.startWidget(n);
				} catch (e) {
					this.handleError(e, n);
				}
			}
			var t, n, a;
			return (
				(t = e),
				(n = [
					{
						key: "handleError",
						value: function (e, t) {
							var n = {
									shortMessage: e.message,
									message: "",
									name: e.name,
								},
								r = e.message,
								o = t && t.length ? t[0] : "undefined";
							o && (r += "\n\nWidgetType: ".concat(o)),
								e.stack && (r += "\n\n".concat(e.stack)),
								t &&
									t[1] &&
									(r += "\n\nConfiguration: ".concat(
										JSON.stringify(t[1])
									)),
								(n.message = r),
								this.errorService.onerror(n);
						},
					},
					{
						key: "startWidget",
						value: function (e) {
							var t = e[0],
								n = e[1];
							if (!t) throw new Error("No widget type");
							if (!n) throw new Error("Missing configuration");
							var r = n.containerId;
							if (!r) throw new Error("Missing container id");
							var i = document.querySelector("#".concat(r));
							if (!i)
								throw new Error("Missing main DOM element: ".concat(r));
							this.updateContainerStyles(i, n);
							var a = document.createElement("iframe");
							(a.style.border = "0"),
								(a.style.width = "100%"),
								(a.style.height = "100%"),
								(a.src = Object(o.b)(t, n)),
								i.appendChild(a);
						},
					},
					{
						key: "updateContainerStyles",
						value: function (e, t) {
							var n = t.width,
								r = t.height;
							n && (e.style.width = n), r && (e.style.height = r);
						},
					},
				]) && c(t.prototype, n),
				a && c(t, a),
				e
			);
		})();
		window.sfx = function () {
			for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
				t[n] = arguments[n];
			return a(s, t);
		};
	},
	4: function (e, t, n) {
		"use strict";
		n.d(t, "a", function () {
			return c;
		});
		var r = n(1),
			o = n(0);
		function i(e, t) {
			return (
				(function (e) {
					if (Array.isArray(e)) return e;
				})(e) ||
				(function (e, t) {
					if (
						!(
							Symbol.iterator in Object(e) ||
							"[object Arguments]" === Object.prototype.toString.call(e)
						)
					)
						return;
					var n = [],
						r = !0,
						o = !1,
						i = void 0;
					try {
						for (
							var a, u = e[Symbol.iterator]();
							!(r = (a = u.next()).done) &&
							(n.push(a.value), !t || n.length !== t);
							r = !0
						);
					} catch (e) {
						(o = !0), (i = e);
					} finally {
						try {
							r || null == u.return || u.return();
						} finally {
							if (o) throw i;
						}
					}
					return n;
				})(e, t) ||
				(function () {
					throw new TypeError(
						"Invalid attempt to destructure non-iterable instance"
					);
				})()
			);
		}
		function a(e) {
			return (
				(function (e) {
					if (Array.isArray(e)) {
						for (var t = 0, n = new Array(e.length); t < e.length; t++)
							n[t] = e[t];
						return n;
					}
				})(e) ||
				(function (e) {
					if (
						Symbol.iterator in Object(e) ||
						"[object Arguments]" === Object.prototype.toString.call(e)
					)
						return Array.from(e);
				})(e) ||
				(function () {
					throw new TypeError(
						"Invalid attempt to spread non-iterable instance"
					);
				})()
			);
		}
		function u(e, t) {
			for (var n = 0; n < t.length; n++) {
				var r = t[n];
				(r.enumerable = r.enumerable || !1),
					(r.configurable = !0),
					"value" in r && (r.writable = !0),
					Object.defineProperty(e, r.key, r);
			}
		}
		var c = (function () {
			function e() {
				!(function (e, t) {
					if (!(e instanceof t))
						throw new TypeError("Cannot call a class as a function");
				})(this, e);
			}
			var t, n, c;
			return (
				(t = e),
				(c = [
					{
						key: "uniq",
						value: function (e) {
							return e.filter(function (t, n) {
								return n === e.indexOf(t);
							});
						},
					},
					{
						key: "getUnixStartOfDay",
						value: function () {
							var e =
									arguments.length > 0 && void 0 !== arguments[0]
										? arguments[0]
										: new Date(),
								t = e.getUTCDate(),
								n = e.getUTCMonth(),
								r = e.getUTCFullYear();
							return Date.UTC(r, n, t, 0, 0, 0, 0) / 1e3;
						},
					},
					{
						key: "getUnixLastSunday",
						value: function (t) {
							var n = new Date(1e3 * (t || e.getUnixStartOfDay()));
							return new Date(
								n.setDate(n.getDate() - n.getDay())
							).valueOf();
						},
					},
					{
						key: "getTimeFromSunday",
						value: function () {
							var t = e.getUnixLastSunday();
							return Number(
								((new Date().getTime() - t) / 1e3).toFixed()
							);
						},
					},
					{
						key: "getUnixTimeFrom",
						value: function (t) {
							var n = new Date();
							switch (t) {
								case o.e["1M"]:
									n.setMonth(n.getMonth() - 1);
									break;
								case o.e["3M"]:
									n.setMonth(n.getMonth() - 3);
									break;
								case o.e["1Y"]:
									n.setFullYear(n.getFullYear() - 1);
									break;
								case o.e["5Y"]:
									n.setFullYear(n.getFullYear() - 5);
									break;
								case o.e["20Y"]:
									n.setFullYear(n.getFullYear() - 20);
							}
							return e.getUnixStartOfDay(n);
						},
					},
					{
						key: "getDuration",
						value: function (e) {
							var t = Math.floor(e / r.j[o.e["1D"]]),
								n = Math.floor((e / r.j[o.e["1H"]]) % 24) + 24 * t,
								i = Math.floor((e / 60) % 60),
								a = Math.floor(e % 60),
								u = "";
							return (
								n &&
									(u += "".concat(
										n < 10 ? String(n).padStart(2, "0") : n,
										":"
									)),
								(i || n) &&
									(u += "".concat(
										i < 10 ? String(i).padStart(2, "0") : i,
										":"
									)),
								(u += a < 10 ? String(a).padStart(2, "0") : a)
							);
						},
					},
					{
						key: "formatCurrencyValue",
						value: function (e) {
							var t =
								arguments.length > 1 && void 0 !== arguments[1]
									? arguments[1]
									: 2;
							return "number" == typeof e
								? e
										.toLocaleString("en-US", {
											minimumFractionDigits: t,
											maximumFractionDigits: t,
										})
										.replace(/,/g, " ")
								: e;
						},
					},
					{
						key: "getFormattedDate",
						value: function (e) {
							return new Date(e).toLocaleDateString("en-GB");
						},
					},
					{
						key: "parseQueryString",
						value: function (e) {
							var t = decodeURIComponent(e);
							return a(new URLSearchParams(t).entries()).reduce(
								function (e, t) {
									var n,
										r = i(t, 2),
										o = r[0],
										a = r[1];
									return Object.assign(
										e,
										(function (e, t, n) {
											return (
												t in e
													? Object.defineProperty(e, t, {
															value: n,
															enumerable: !0,
															configurable: !0,
															writable: !0,
													  })
													: (e[t] = n),
												e
											);
										})(
											{},
											o,
											(n = a).includes(",") ? n.split(",") : n
										)
									);
								},
								{}
							);
						},
					},
					{
						key: "emptyPromise",
						value: function () {
							var e =
								arguments.length > 0 && void 0 !== arguments[0]
									? arguments[0]
									: null;
							return new Promise(function (t) {
								t(e);
							});
						},
					},
					{
						key: "isStringInArray",
						value: function (e, t) {
							return (
								!!e &&
								e.some(function (e) {
									return e.toLowerCase() === t.toLowerCase();
								})
							);
						},
					},
				]),
				(n = null) && u(t.prototype, n),
				c && u(t, c),
				e
			);
		})();
	},
	5: function (e, t, n) {
		"use strict";
		function r(e, t) {
			for (var n = 0; n < t.length; n++) {
				var r = t[n];
				(r.enumerable = r.enumerable || !1),
					(r.configurable = !0),
					"value" in r && (r.writable = !0),
					Object.defineProperty(e, r.key, r);
			}
		}
		var o;
		n.d(t, "a", function () {
			return i;
		}),
			(function (e) {
				(e.Post = "POST"), (e.Get = "GET");
			})(o || (o = {}));
		var i = (function () {
			function e() {
				!(function (e, t) {
					if (!(e instanceof t))
						throw new TypeError("Cannot call a class as a function");
				})(this, e);
			}
			var t, n, i;
			return (
				(t = e),
				(n = [
					{
						key: "initRequest",
						value: function (e, t, n) {
							return new Promise(function (r, o) {
								var i = new XMLHttpRequest();
								i.open(e, t, !0),
									i.setRequestHeader(
										"Content-Type",
										"application/json;charset=UTF-8"
									),
									(i.onreadystatechange = function () {
										if (4 === i.readyState && 200 === i.status) {
											var e = JSON.parse(i.responseText);
											r(e.data ? e.data : e);
										} else
											4 === i.readyState &&
												i.status >= 400 &&
												o({
													status: i.status,
													message: i.statusText || i.responseText,
												});
									}),
									(i.onerror = function () {
										o({
											status: i.status,
											message: "Can't "
												.concat(e, " data for ")
												.concat(t, "\nStatusText: ")
												.concat(i.statusText),
										});
									}),
									i.send(n);
							});
						},
					},
					{
						key: "post",
						value: function (e, t) {
							return this.initRequest(o.Post, e, JSON.stringify(t));
						},
					},
					{
						key: "get",
						value: function (e) {
							return this.initRequest(o.Get, e);
						},
					},
				]) && r(t.prototype, n),
				i && r(t, i),
				e
			);
		})();
	},
});
