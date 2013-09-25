/*! jQuery v1.7 jquery.com | jquery.org/license */
(function (a, b) {
    function cA(a) {
        return f.isWindow(a) ? a : a.nodeType === 9 ? a.defaultView || a.parentWindow : !1
    }
    function cx(a) {
        if (!cm[a]) {
            var b = c.body,
                d = f("<" + a + ">").appendTo(b),
                e = d.css("display");
            d.remove();
            if (e === "none" || e === "") {
                cn || (cn = c.createElement("iframe"), cn.frameBorder = cn.width = cn.height = 0), b.appendChild(cn);
                if (!co || !cn.createElement) co = (cn.contentWindow || cn.contentDocument).document, co.write((c.compatMode === "CSS1Compat" ? "<!doctype html>" : "") + "<html><body>"), co.close();
                d = co.createElement(a), co.body.appendChild(d), e = f.css(d, "display"), b.removeChild(cn)
            }
            cm[a] = e
        }
        return cm[a]
    }
    function cw(a, b) {
        var c = {};
        f.each(cs.concat.apply([], cs.slice(0, b)), function () {
            c[this] = a
        });
        return c
    }
    function cv() {
        ct = b
    }
    function cu() {
        setTimeout(cv, 0);
        return ct = f.now()
    }
    function cl() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP")
        } catch (b) {}
    }
    function ck() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {}
    }
    function ce(a, c) {
        a.dataFilter && (c = a.dataFilter(c, a.dataType));
        var d = a.dataTypes,
            e = {}, g, h, i = d.length,
            j, k = d[0],
            l, m, n, o, p;
        for (g = 1; g < i; g++) {
            if (g === 1) for (h in a.converters) typeof h == "string" && (e[h.toLowerCase()] = a.converters[h]);
            l = k, k = d[g];
            if (k === "*") k = l;
            else if (l !== "*" && l !== k) {
                m = l + " " + k, n = e[m] || e["* " + k];
                if (!n) {
                    p = b;
                    for (o in e) {
                        j = o.split(" ");
                        if (j[0] === l || j[0] === "*") {
                            p = e[j[1] + " " + k];
                            if (p) {
                                o = e[o], o === !0 ? n = p : p === !0 && (n = o);
                                break
                            }
                        }
                    }
                }!n && !p && f.error("No conversion from " + m.replace(" ", " to ")), n !== !0 && (c = n ? n(c) : p(o(c)))
            }
        }
        return c
    }
    function cd(a, c, d) {
        var e = a.contents,
            f = a.dataTypes,
            g = a.responseFields,
            h, i, j, k;
        for (i in g) i in d && (c[g[i]] = d[i]);
        while (f[0] === "*") f.shift(), h === b && (h = a.mimeType || c.getResponseHeader("content-type"));
        if (h) for (i in e) if (e[i] && e[i].test(h)) {
            f.unshift(i);
            break
        }
        if (f[0] in d) j = f[0];
        else {
            for (i in d) {
                if (!f[0] || a.converters[i + " " + f[0]]) {
                    j = i;
                    break
                }
                k || (k = i)
            }
            j = j || k
        }
        if (j) {
            j !== f[0] && f.unshift(j);
            return d[j]
        }
    }
    function cc(a, b, c, d) {
        if (f.isArray(b)) f.each(b, function (b, e) {
            c || bG.test(a) ? d(a, e) : cc(a + "[" + (typeof e == "object" || f.isArray(e) ? b : "") + "]", e, c, d)
        });
        else if (!c && b != null && typeof b == "object") for (var e in b) cc(a + "[" + e + "]", b[e], c, d);
        else d(a, b)
    }
    function cb(a, c) {
        var d, e, g = f.ajaxSettings.flatOptions || {};
        for (d in c) c[d] !== b && ((g[d] ? a : e || (e = {}))[d] = c[d]);
        e && f.extend(!0, a, e)
    }
    function ca(a, c, d, e, f, g) {
        f = f || c.dataTypes[0], g = g || {}, g[f] = !0;
        var h = a[f],
            i = 0,
            j = h ? h.length : 0,
            k = a === bV,
            l;
        for (; i < j && (k || !l); i++) l = h[i](c, d, e), typeof l == "string" && (!k || g[l] ? l = b : (c.dataTypes.unshift(l), l = ca(a, c, d, e, l, g)));
        (k || !l) && !g["*"] && (l = ca(a, c, d, e, "*", g));
        return l
    }
    function b_(a) {
        return function (b, c) {
            typeof b != "string" && (c = b, b = "*");
            if (f.isFunction(c)) {
                var d = b.toLowerCase().split(bR),
                    e = 0,
                    g = d.length,
                    h, i, j;
                for (; e < g; e++) h = d[e], j = /^\+/.test(h), j && (h = h.substr(1) || "*"), i = a[h] = a[h] || [], i[j ? "unshift" : "push"](c)
            }
        }
    }
    function bE(a, b, c) {
        var d = b === "width" ? a.offsetWidth : a.offsetHeight,
            e = b === "width" ? bz : bA;
        if (d > 0) {
            c !== "border" && f.each(e, function () {
                c || (d -= parseFloat(f.css(a, "padding" + this)) || 0), c === "margin" ? d += parseFloat(f.css(a, c + this)) || 0 : d -= parseFloat(f.css(a, "border" + this + "Width")) || 0
            });
            return d + "px"
        }
        d = bB(a, b, b);
        if (d < 0 || d == null) d = a.style[b] || 0;
        d = parseFloat(d) || 0, c && f.each(e, function () {
            d += parseFloat(f.css(a, "padding" + this)) || 0, c !== "padding" && (d += parseFloat(f.css(a, "border" + this + "Width")) || 0), c === "margin" && (d += parseFloat(f.css(a, c + this)) || 0)
        });
        return d + "px"
    }
    function br(a, b) {
        b.src ? f.ajax({
            url: b.src,
            async: !1,
            dataType: "script"
        }) : f.globalEval((b.text || b.textContent || b.innerHTML || "").replace(bi, "/*$0*/")), b.parentNode && b.parentNode.removeChild(b)
    }
    function bq(a) {
        var b = (a.nodeName || "").toLowerCase();
        b === "input" ? bp(a) : b !== "script" && typeof a.getElementsByTagName != "undefined" && f.grep(a.getElementsByTagName("input"), bp)
    }
    function bp(a) {
        if (a.type === "checkbox" || a.type === "radio") a.defaultChecked = a.checked
    }
    function bo(a) {
        return typeof a.getElementsByTagName != "undefined" ? a.getElementsByTagName("*") : typeof a.querySelectorAll != "undefined" ? a.querySelectorAll("*") : []
    }
    function bn(a, b) {
        var c;
        if (b.nodeType === 1) {
            b.clearAttributes && b.clearAttributes(), b.mergeAttributes && b.mergeAttributes(a), c = b.nodeName.toLowerCase();
            if (c === "object") b.outerHTML = a.outerHTML;
            else if (c !== "input" || a.type !== "checkbox" && a.type !== "radio") {
                if (c === "option") b.selected = a.defaultSelected;
                else if (c === "input" || c === "textarea") b.defaultValue = a.defaultValue
            } else a.checked && (b.defaultChecked = b.checked = a.checked), b.value !== a.value && (b.value = a.value);
            b.removeAttribute(f.expando)
        }
    }
    function bm(a, b) {
        if (b.nodeType === 1 && !! f.hasData(a)) {
            var c, d, e, g = f._data(a),
                h = f._data(b, g),
                i = g.events;
            if (i) {
                delete h.handle, h.events = {};
                for (c in i) for (d = 0, e = i[c].length; d < e; d++) f.event.add(b, c + (i[c][d].namespace ? "." : "") + i[c][d].namespace, i[c][d], i[c][d].data)
            }
            h.data && (h.data = f.extend({}, h.data))
        }
    }
    function bl(a, b) {
        return f.nodeName(a, "table") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }
    function X(a) {
        var b = Y.split(" "),
            c = a.createDocumentFragment();
        if (c.createElement) while (b.length) c.createElement(b.pop());
        return c
    }
    function W(a, b, c) {
        b = b || 0;
        if (f.isFunction(b)) return f.grep(a, function (a, d) {
            var e = !! b.call(a, d, a);
            return e === c
        });
        if (b.nodeType) return f.grep(a, function (a, d) {
            return a === b === c
        });
        if (typeof b == "string") {
            var d = f.grep(a, function (a) {
                return a.nodeType === 1
            });
            if (R.test(b)) return f.filter(b, d, !c);
            b = f.filter(b, d)
        }
        return f.grep(a, function (a, d) {
            return f.inArray(a, b) >= 0 === c
        })
    }
    function V(a) {
        return !a || !a.parentNode || a.parentNode.nodeType === 11
    }
    function N() {
        return !0
    }
    function M() {
        return !1
    }
    function n(a, b, c) {
        var d = b + "defer",
            e = b + "queue",
            g = b + "mark",
            h = f._data(a, d);
        h && (c === "queue" || !f._data(a, e)) && (c === "mark" || !f._data(a, g)) && setTimeout(function () {
            !f._data(a, e) && !f._data(a, g) && (f.removeData(a, d, !0), h.fire())
        }, 0)
    }
    function m(a) {
        for (var b in a) {
            if (b === "data" && f.isEmptyObject(a[b])) continue;
            if (b !== "toJSON") return !1
        }
        return !0
    }
    function l(a, c, d) {
        if (d === b && a.nodeType === 1) {
            var e = "data-" + c.replace(k, "-$1").toLowerCase();
            d = a.getAttribute(e);
            if (typeof d == "string") {
                try {
                    d = d === "true" ? !0 : d === "false" ? !1 : d === "null" ? null : f.isNumeric(d) ? parseFloat(d) : j.test(d) ? f.parseJSON(d) : d
                } catch (g) {}
                f.data(a, c, d)
            } else d = b
        }
        return d
    }
    function h(a) {
        var b = g[a] = {}, c, d;
        a = a.split(/\s+/);
        for (c = 0, d = a.length; c < d; c++) b[a[c]] = !0;
        return b
    }
    var c = a.document,
        d = a.navigator,
        e = a.location,
        f = function () {
            function K() {
                if (!e.isReady) {
                    try {
                        c.documentElement.doScroll("left")
                    } catch (a) {
                        setTimeout(K, 1);
                        return
                    }
                    e.ready()
                }
            }
            var e = function (a, b) {
                return new e.fn.init(a, b, h)
            }, f = a.jQuery,
                g = a.$,
                h, i = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
                j = /\S/,
                k = /^\s+/,
                l = /\s+$/,
                m = /\d/,
                n = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
                o = /^[\],:{}\s]*$/,
                p = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
                q = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
                r = /(?:^|:|,)(?:\s*\[)+/g,
                s = /(webkit)[ \/]([\w.]+)/,
                t = /(opera)(?:.*version)?[ \/]([\w.]+)/,
                u = /(msie) ([\w.]+)/,
                v = /(mozilla)(?:.*? rv:([\w.]+))?/,
                w = /-([a-z]|[0-9])/ig,
                x = /^-ms-/,
                y = function (a, b) {
                    return (b + "").toUpperCase()
                }, z = d.userAgent,
                A, B, C, D = Object.prototype.toString,
                E = Object.prototype.hasOwnProperty,
                F = Array.prototype.push,
                G = Array.prototype.slice,
                H = String.prototype.trim,
                I = Array.prototype.indexOf,
                J = {};
            e.fn = e.prototype = {
                constructor: e,
                init: function (a, d, f) {
                    var g, h, j, k;
                    if (!a) return this;
                    if (a.nodeType) {
                        this.context = this[0] = a, this.length = 1;
                        return this
                    }
                    if (a === "body" && !d && c.body) {
                        this.context = c, this[0] = c.body, this.selector = a, this.length = 1;
                        return this
                    }
                    if (typeof a == "string") {
                        a.charAt(0) !== "<" || a.charAt(a.length - 1) !== ">" || a.length < 3 ? g = i.exec(a) : g = [null, a, null];
                        if (g && (g[1] || !d)) {
                            if (g[1]) {
                                d = d instanceof e ? d[0] : d, k = d ? d.ownerDocument || d : c, j = n.exec(a), j ? e.isPlainObject(d) ? (a = [c.createElement(j[1])], e.fn.attr.call(a, d, !0)) : a = [k.createElement(j[1])] : (j = e.buildFragment([g[1]], [k]), a = (j.cacheable ? e.clone(j.fragment) : j.fragment).childNodes);
                                return e.merge(this, a)
                            }
                            h = c.getElementById(g[2]);
                            if (h && h.parentNode) {
                                if (h.id !== g[2]) return f.find(a);
                                this.length = 1, this[0] = h
                            }
                            this.context = c, this.selector = a;
                            return this
                        }
                        return !d || d.jquery ? (d || f).find(a) : this.constructor(d).find(a)
                    }
                    if (e.isFunction(a)) return f.ready(a);
                    a.selector !== b && (this.selector = a.selector, this.context = a.context);
                    return e.makeArray(a, this)
                },
                selector: "",
                jquery: "1.7",
                length: 0,
                size: function () {
                    return this.length
                },
                toArray: function () {
                    return G.call(this, 0)
                },
                get: function (a) {
                    return a == null ? this.toArray() : a < 0 ? this[this.length + a] : this[a]
                },
                pushStack: function (a, b, c) {
                    var d = this.constructor();
                    e.isArray(a) ? F.apply(d, a) : e.merge(d, a), d.prevObject = this, d.context = this.context, b === "find" ? d.selector = this.selector + (this.selector ? " " : "") + c : b && (d.selector = this.selector + "." + b + "(" + c + ")");
                    return d
                },
                each: function (a, b) {
                    return e.each(this, a, b)
                },
                ready: function (a) {
                    e.bindReady(), B.add(a);
                    return this
                },
                eq: function (a) {
                    return a === -1 ? this.slice(a) : this.slice(a, +a + 1)
                },
                first: function () {
                    return this.eq(0)
                },
                last: function () {
                    return this.eq(-1)
                },
                slice: function () {
                    return this.pushStack(G.apply(this, arguments), "slice", G.call(arguments).join(","))
                },
                map: function (a) {
                    return this.pushStack(e.map(this, function (b, c) {
                        return a.call(b, c, b)
                    }))
                },
                end: function () {
                    return this.prevObject || this.constructor(null)
                },
                push: F,
                sort: [].sort,
                splice: [].splice
            }, e.fn.init.prototype = e.fn, e.extend = e.fn.extend = function () {
                var a, c, d, f, g, h, i = arguments[0] || {}, j = 1,
                    k = arguments.length,
                    l = !1;
                typeof i == "boolean" && (l = i, i = arguments[1] || {}, j = 2), typeof i != "object" && !e.isFunction(i) && (i = {}), k === j && (i = this, --j);
                for (; j < k; j++) if ((a = arguments[j]) != null) for (c in a) {
                    d = i[c], f = a[c];
                    if (i === f) continue;
                    l && f && (e.isPlainObject(f) || (g = e.isArray(f))) ? (g ? (g = !1, h = d && e.isArray(d) ? d : []) : h = d && e.isPlainObject(d) ? d : {}, i[c] = e.extend(l, h, f)) : f !== b && (i[c] = f)
                }
                return i
            }, e.extend({
                noConflict: function (b) {
                    a.$ === e && (a.$ = g), b && a.jQuery === e && (a.jQuery = f);
                    return e
                },
                isReady: !1,
                readyWait: 1,
                holdReady: function (a) {
                    a ? e.readyWait++ : e.ready(!0)
                },
                ready: function (a) {
                    if (a === !0 && !--e.readyWait || a !== !0 && !e.isReady) {
                        if (!c.body) return setTimeout(e.ready, 1);
                        e.isReady = !0;
                        if (a !== !0 && --e.readyWait > 0) return;
                        B.fireWith(c, [e]), e.fn.trigger && e(c).trigger("ready").unbind("ready")
                    }
                },
                bindReady: function () {
                    if (!B) {
                        B = e.Callbacks("once memory");
                        if (c.readyState === "complete") return setTimeout(e.ready, 1);
                        if (c.addEventListener) c.addEventListener("DOMContentLoaded", C, !1), a.addEventListener("load", e.ready, !1);
                        else if (c.attachEvent) {
                            c.attachEvent("onreadystatechange", C), a.attachEvent("onload", e.ready);
                            var b = !1;
                            try {
                                b = a.frameElement == null
                            } catch (d) {}
                            c.documentElement.doScroll && b && K()
                        }
                    }
                },
                isFunction: function (a) {
                    return e.type(a) === "function"
                },
                isArray: Array.isArray || function (a) {
                    return e.type(a) === "array"
                },
                isWindow: function (a) {
                    return a && typeof a == "object" && "setInterval" in a
                },
                isNumeric: function (a) {
                    return a != null && m.test(a) && !isNaN(a)
                },
                type: function (a) {
                    return a == null ? String(a) : J[D.call(a)] || "object"
                },
                isPlainObject: function (a) {
                    if (!a || e.type(a) !== "object" || a.nodeType || e.isWindow(a)) return !1;
                    try {
                        if (a.constructor && !E.call(a, "constructor") && !E.call(a.constructor.prototype, "isPrototypeOf")) return !1
                    } catch (c) {
                        return !1
                    }
                    var d;
                    for (d in a);
                    return d === b || E.call(a, d)
                },
                isEmptyObject: function (a) {
                    for (var b in a) return !1;
                    return !0
                },
                error: function (a) {
                    throw a
                },
                parseJSON: function (b) {
                    if (typeof b != "string" || !b) return null;
                    b = e.trim(b);
                    if (a.JSON && a.JSON.parse) return a.JSON.parse(b);
                    if (o.test(b.replace(p, "@").replace(q, "]").replace(r, ""))) return (new Function("return " + b))();
                    e.error("Invalid JSON: " + b)
                },
                parseXML: function (c) {
                    var d, f;
                    try {
                        a.DOMParser ? (f = new DOMParser, d = f.parseFromString(c, "text/xml")) : (d = new ActiveXObject("Microsoft.XMLDOM"), d.async = "false", d.loadXML(c))
                    } catch (g) {
                        d = b
                    }(!d || !d.documentElement || d.getElementsByTagName("parsererror").length) && e.error("Invalid XML: " + c);
                    return d
                },
                noop: function () {},
                globalEval: function (b) {
                    b && j.test(b) && (a.execScript || function (b) {
                        a.eval.call(a, b)
                    })(b)
                },
                camelCase: function (a) {
                    return a.replace(x, "ms-").replace(w, y)
                },
                nodeName: function (a, b) {
                    return a.nodeName && a.nodeName.toUpperCase() === b.toUpperCase()
                },
                each: function (a, c, d) {
                    var f, g = 0,
                        h = a.length,
                        i = h === b || e.isFunction(a);
                    if (d) {
                        if (i) {
                            for (f in a) if (c.apply(a[f], d) === !1) break
                        } else for (; g < h;) if (c.apply(a[g++], d) === !1) break
                    } else if (i) {
                        for (f in a) if (c.call(a[f], f, a[f]) === !1) break
                    } else for (; g < h;) if (c.call(a[g], g, a[g++]) === !1) break;
                    return a
                },
                trim: H ? function (a) {
                    return a == null ? "" : H.call(a)
                } : function (a) {
                    return a == null ? "" : (a + "").replace(k, "").replace(l, "")
                },
                makeArray: function (a, b) {
                    var c = b || [];
                    if (a != null) {
                        var d = e.type(a);
                        a.length == null || d === "string" || d === "function" || d === "regexp" || e.isWindow(a) ? F.call(c, a) : e.merge(c, a)
                    }
                    return c
                },
                inArray: function (a, b, c) {
                    var d;
                    if (b) {
                        if (I) return I.call(b, a, c);
                        d = b.length, c = c ? c < 0 ? Math.max(0, d + c) : c : 0;
                        for (; c < d; c++) if (c in b && b[c] === a) return c
                    }
                    return -1
                },
                merge: function (a, c) {
                    var d = a.length,
                        e = 0;
                    if (typeof c.length == "number") for (var f = c.length; e < f; e++) a[d++] = c[e];
                    else while (c[e] !== b) a[d++] = c[e++];
                    a.length = d;
                    return a
                },
                grep: function (a, b, c) {
                    var d = [],
                        e;
                    c = !! c;
                    for (var f = 0, g = a.length; f < g; f++) e = !! b(a[f], f), c !== e && d.push(a[f]);
                    return d
                },
                map: function (a, c, d) {
                    var f, g, h = [],
                        i = 0,
                        j = a.length,
                        k = a instanceof e || j !== b && typeof j == "number" && (j > 0 && a[0] && a[j - 1] || j === 0 || e.isArray(a));
                    if (k) for (; i < j; i++) f = c(a[i], i, d), f != null && (h[h.length] = f);
                    else for (g in a) f = c(a[g], g, d), f != null && (h[h.length] = f);
                    return h.concat.apply([], h)
                },
                guid: 1,
                proxy: function (a, c) {
                    if (typeof c == "string") {
                        var d = a[c];
                        c = a, a = d
                    }
                    if (!e.isFunction(a)) return b;
                    var f = G.call(arguments, 2),
                        g = function () {
                            return a.apply(c, f.concat(G.call(arguments)))
                        };
                    g.guid = a.guid = a.guid || g.guid || e.guid++;
                    return g
                },
                access: function (a, c, d, f, g, h) {
                    var i = a.length;
                    if (typeof c == "object") {
                        for (var j in c) e.access(a, j, c[j], f, g, d);
                        return a
                    }
                    if (d !== b) {
                        f = !h && f && e.isFunction(d);
                        for (var k = 0; k < i; k++) g(a[k], c, f ? d.call(a[k], k, g(a[k], c)) : d, h);
                        return a
                    }
                    return i ? g(a[0], c) : b
                },
                now: function () {
                    return (new Date).getTime()
                },
                uaMatch: function (a) {
                    a = a.toLowerCase();
                    var b = s.exec(a) || t.exec(a) || u.exec(a) || a.indexOf("compatible") < 0 && v.exec(a) || [];
                    return {
                        browser: b[1] || "",
                        version: b[2] || "0"
                    }
                },
                sub: function () {
                    function a(b, c) {
                        return new a.fn.init(b, c)
                    }
                    e.extend(!0, a, this), a.superclass = this, a.fn = a.prototype = this(), a.fn.constructor = a, a.sub = this.sub, a.fn.init = function (d, f) {
                        f && f instanceof e && !(f instanceof a) && (f = a(f));
                        return e.fn.init.call(this, d, f, b)
                    }, a.fn.init.prototype = a.fn;
                    var b = a(c);
                    return a
                },
                browser: {}
            }), e.each("Boolean Number String Function Array Date RegExp Object".split(" "), function (a, b) {
                J["[object " + b + "]"] = b.toLowerCase()
            }), A = e.uaMatch(z), A.browser && (e.browser[A.browser] = !0, e.browser.version = A.version), e.browser.webkit && (e.browser.safari = !0), j.test(" ") && (k = /^[\s\xA0]+/, l = /[\s\xA0]+$/), h = e(c), c.addEventListener ? C = function () {
                c.removeEventListener("DOMContentLoaded", C, !1), e.ready()
            } : c.attachEvent && (C = function () {
                c.readyState === "complete" && (c.detachEvent("onreadystatechange", C), e.ready())
            }), typeof define == "function" && define.amd && define.amd.jQuery && define("jquery", [], function () {
                return e
            });
            return e
        }(),
        g = {};
    f.Callbacks = function (a) {
        a = a ? g[a] || h(a) : {};
        var c = [],
            d = [],
            e, i, j, k, l, m = function (b) {
                var d, e, g, h, i;
                for (d = 0, e = b.length; d < e; d++) g = b[d], h = f.type(g), h === "array" ? m(g) : h === "function" && (!a.unique || !o.has(g)) && c.push(g)
            }, n = function (b, f) {
                f = f || [], e = !a.memory || [b, f], i = !0, l = j || 0, j = 0, k = c.length;
                for (; c && l < k; l++) if (c[l].apply(b, f) === !1 && a.stopOnFalse) {
                    e = !0;
                    break
                }
                i = !1, c && (a.once ? e === !0 ? o.disable() : c = [] : d && d.length && (e = d.shift(), o.fireWith(e[0], e[1])))
            }, o = {
                add: function () {
                    if (c) {
                        var a = c.length;
                        m(arguments), i ? k = c.length : e && e !== !0 && (j = a, n(e[0], e[1]))
                    }
                    return this
                },
                remove: function () {
                    if (c) {
                        var b = arguments,
                            d = 0,
                            e = b.length;
                        for (; d < e; d++) for (var f = 0; f < c.length; f++) if (b[d] === c[f]) {
                            i && f <= k && (k--, f <= l && l--), c.splice(f--, 1);
                            if (a.unique) break
                        }
                    }
                    return this
                },
                has: function (a) {
                    if (c) {
                        var b = 0,
                            d = c.length;
                        for (; b < d; b++) if (a === c[b]) return !0
                    }
                    return !1
                },
                empty: function () {
                    c = [];
                    return this
                },
                disable: function () {
                    c = d = e = b;
                    return this
                },
                disabled: function () {
                    return !c
                },
                lock: function () {
                    d = b, (!e || e === !0) && o.disable();
                    return this
                },
                locked: function () {
                    return !d
                },
                fireWith: function (b, c) {
                    d && (i ? a.once || d.push([b, c]) : (!a.once || !e) && n(b, c));
                    return this
                },
                fire: function () {
                    o.fireWith(this, arguments);
                    return this
                },
                fired: function () {
                    return !!e
                }
            };
        return o
    };
    var i = [].slice;
    f.extend({
        Deferred: function (a) {
            var b = f.Callbacks("once memory"),
                c = f.Callbacks("once memory"),
                d = f.Callbacks("memory"),
                e = "pending",
                g = {
                    resolve: b,
                    reject: c,
                    notify: d
                }, h = {
                    done: b.add,
                    fail: c.add,
                    progress: d.add,
                    state: function () {
                        return e
                    },
                    isResolved: b.fired,
                    isRejected: c.fired,
                    then: function (a, b, c) {
                        i.done(a).fail(b).progress(c);
                        return this
                    },
                    always: function () {
                        return i.done.apply(i, arguments).fail.apply(i, arguments)
                    },
                    pipe: function (a, b, c) {
                        return f.Deferred(function (d) {
                            f.each({
                                done: [a, "resolve"],
                                fail: [b, "reject"],
                                progress: [c, "notify"]
                            }, function (a, b) {
                                var c = b[0],
                                    e = b[1],
                                    g;
                                f.isFunction(c) ? i[a](function () {
                                    g = c.apply(this, arguments), g && f.isFunction(g.promise) ? g.promise().then(d.resolve, d.reject, d.notify) : d[e + "With"](this === i ? d : this, [g])
                                }) : i[a](d[e])
                            })
                        }).promise()
                    },
                    promise: function (a) {
                        if (a == null) a = h;
                        else for (var b in h) a[b] = h[b];
                        return a
                    }
                }, i = h.promise({}),
                j;
            for (j in g) i[j] = g[j].fire, i[j + "With"] = g[j].fireWith;
            i.done(function () {
                e = "resolved"
            }, c.disable, d.lock).fail(function () {
                e = "rejected"
            }, b.disable, d.lock), a && a.call(i, i);
            return i
        },
        when: function (a) {
            function m(a) {
                return function (b) {
                    e[a] = arguments.length > 1 ? i.call(arguments, 0) : b, j.notifyWith(k, e)
                }
            }
            function l(a) {
                return function (c) {
                    b[a] = arguments.length > 1 ? i.call(arguments, 0) : c, --g || j.resolveWith(j, b)
                }
            }
            var b = i.call(arguments, 0),
                c = 0,
                d = b.length,
                e = Array(d),
                g = d,
                h = d,
                j = d <= 1 && a && f.isFunction(a.promise) ? a : f.Deferred(),
                k = j.promise();
            if (d > 1) {
                for (; c < d; c++) b[c] && b[c].promise && f.isFunction(b[c].promise) ? b[c].promise().then(l(c), j.reject, m(c)) : --g;
                g || j.resolveWith(j, b)
            } else j !== a && j.resolveWith(j, d ? [a] : []);
            return k
        }
    }), f.support = function () {
        var a = c.createElement("div"),
            b = c.documentElement,
            d, e, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u;
        a.setAttribute("className", "t"), a.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/><nav></nav>", d = a.getElementsByTagName("*"), e = a.getElementsByTagName("a")[0];
        if (!d || !d.length || !e) return {};
        g = c.createElement("select"), h = g.appendChild(c.createElement("option")), i = a.getElementsByTagName("input")[0], k = {
            leadingWhitespace: a.firstChild.nodeType === 3,
            tbody: !a.getElementsByTagName("tbody").length,
            htmlSerialize: !! a.getElementsByTagName("link").length,
            style: /top/.test(e.getAttribute("style")),
            hrefNormalized: e.getAttribute("href") === "/a",
            opacity: /^0.55/.test(e.style.opacity),
            cssFloat: !! e.style.cssFloat,
            unknownElems: !! a.getElementsByTagName("nav").length,
            checkOn: i.value === "on",
            optSelected: h.selected,
            getSetAttribute: a.className !== "t",
            enctype: !! c.createElement("form").enctype,
            submitBubbles: !0,
            changeBubbles: !0,
            focusinBubbles: !1,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0
        }, i.checked = !0, k.noCloneChecked = i.cloneNode(!0).checked, g.disabled = !0, k.optDisabled = !h.disabled;
        try {
            delete a.test
        } catch (v) {
            k.deleteExpando = !1
        }!a.addEventListener && a.attachEvent && a.fireEvent && (a.attachEvent("onclick", function () {
            k.noCloneEvent = !1
        }), a.cloneNode(!0).fireEvent("onclick")), i = c.createElement("input"), i.value = "t", i.setAttribute("type", "radio"), k.radioValue = i.value === "t", i.setAttribute("checked", "checked"), a.appendChild(i), l = c.createDocumentFragment(), l.appendChild(a.lastChild), k.checkClone = l.cloneNode(!0).cloneNode(!0).lastChild.checked, a.innerHTML = "", a.style.width = a.style.paddingLeft = "1px", m = c.getElementsByTagName("body")[0], o = c.createElement(m ? "div" : "body"), p = {
            visibility: "hidden",
            width: 0,
            height: 0,
            border: 0,
            margin: 0,
            background: "none"
        }, m && f.extend(p, {
            position: "absolute",
            left: "-999px",
            top: "-999px"
        });
        for (t in p) o.style[t] = p[t];
        o.appendChild(a), n = m || b, n.insertBefore(o, n.firstChild), k.appendChecked = i.checked, k.boxModel = a.offsetWidth === 2, "zoom" in a.style && (a.style.display = "inline", a.style.zoom = 1, k.inlineBlockNeedsLayout = a.offsetWidth === 2, a.style.display = "", a.innerHTML = "<div style='width:4px;'></div>", k.shrinkWrapBlocks = a.offsetWidth !== 2), a.innerHTML = "<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>", q = a.getElementsByTagName("td"), u = q[0].offsetHeight === 0, q[0].style.display = "", q[1].style.display = "none", k.reliableHiddenOffsets = u && q[0].offsetHeight === 0, a.innerHTML = "", c.defaultView && c.defaultView.getComputedStyle && (j = c.createElement("div"), j.style.width = "0", j.style.marginRight = "0", a.appendChild(j), k.reliableMarginRight = (parseInt((c.defaultView.getComputedStyle(j, null) || {
            marginRight: 0
        }).marginRight, 10) || 0) === 0);
        if (a.attachEvent) for (t in {
            submit: 1,
            change: 1,
            focusin: 1
        }) s = "on" + t, u = s in a, u || (a.setAttribute(s, "return;"), u = typeof a[s] == "function"), k[t + "Bubbles"] = u;
        f(function () {
            var a, b, d, e, g, h, i = 1,
                j = "position:absolute;top:0;left:0;width:1px;height:1px;margin:0;",
                l = "visibility:hidden;border:0;",
                n = "style='" + j + "border:5px solid #000;padding:0;'",
                p = "<div " + n + "><div></div></div>" + "<table " + n + " cellpadding='0' cellspacing='0'>" + "<tr><td></td></tr></table>";
            m = c.getElementsByTagName("body")[0];
            !m || (a = c.createElement("div"), a.style.cssText = l + "width:0;height:0;position:static;top:0;margin-top:" + i + "px", m.insertBefore(a, m.firstChild), o = c.createElement("div"), o.style.cssText = j + l, o.innerHTML = p, a.appendChild(o), b = o.firstChild, d = b.firstChild, g = b.nextSibling.firstChild.firstChild, h = {
                doesNotAddBorder: d.offsetTop !== 5,
                doesAddBorderForTableAndCells: g.offsetTop === 5
            }, d.style.position = "fixed", d.style.top = "20px", h.fixedPosition = d.offsetTop === 20 || d.offsetTop === 15, d.style.position = d.style.top = "", b.style.overflow = "hidden", b.style.position = "relative", h.subtractsBorderForOverflowNotVisible = d.offsetTop === -5, h.doesNotIncludeMarginInBodyOffset = m.offsetTop !== i, m.removeChild(a), o = a = null, f.extend(k, h))
        }), o.innerHTML = "", n.removeChild(o), o = l = g = h = m = j = a = i = null;
        return k
    }(), f.boxModel = f.support.boxModel;
    var j = /^(?:\{.*\}|\[.*\])$/,
        k = /([A-Z])/g;
    f.extend({
        cache: {},
        uuid: 0,
        expando: "jQuery" + (f.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function (a) {
            a = a.nodeType ? f.cache[a[f.expando]] : a[f.expando];
            return !!a && !m(a)
        },
        data: function (a, c, d, e) {
            if ( !! f.acceptData(a)) {
                var g, h, i, j = f.expando,
                    k = typeof c == "string",
                    l = a.nodeType,
                    m = l ? f.cache : a,
                    n = l ? a[f.expando] : a[f.expando] && f.expando,
                    o = c === "events";
                if ((!n || !m[n] || !o && !e && !m[n].data) && k && d === b) return;
                n || (l ? a[f.expando] = n = ++f.uuid : n = f.expando), m[n] || (m[n] = {}, l || (m[n].toJSON = f.noop));
                if (typeof c == "object" || typeof c == "function") e ? m[n] = f.extend(m[n], c) : m[n].data = f.extend(m[n].data, c);
                g = h = m[n], e || (h.data || (h.data = {}), h = h.data), d !== b && (h[f.camelCase(c)] = d);
                if (o && !h[c]) return g.events;
                k ? (i = h[c], i == null && (i = h[f.camelCase(c)])) : i = h;
                return i
            }
        },
        removeData: function (a, b, c) {
            if ( !! f.acceptData(a)) {
                var d, e, g, h = f.expando,
                    i = a.nodeType,
                    j = i ? f.cache : a,
                    k = i ? a[f.expando] : f.expando;
                if (!j[k]) return;
                if (b) {
                    d = c ? j[k] : j[k].data;
                    if (d) {
                        f.isArray(b) ? b = b : b in d ? b = [b] : (b = f.camelCase(b), b in d ? b = [b] : b = b.split(" "));
                        for (e = 0, g = b.length; e < g; e++) delete d[b[e]];
                        if (!(c ? m : f.isEmptyObject)(d)) return
                    }
                }
                if (!c) {
                    delete j[k].data;
                    if (!m(j[k])) return
                }
                f.support.deleteExpando || !j.setInterval ? delete j[k] : j[k] = null, i && (f.support.deleteExpando ? delete a[f.expando] : a.removeAttribute ? a.removeAttribute(f.expando) : a[f.expando] = null)
            }
        },
        _data: function (a, b, c) {
            return f.data(a, b, c, !0)
        },
        acceptData: function (a) {
            if (a.nodeName) {
                var b = f.noData[a.nodeName.toLowerCase()];
                if (b) return b !== !0 && a.getAttribute("classid") === b
            }
            return !0
        }
    }), f.fn.extend({
        data: function (a, c) {
            var d, e, g, h = null;
            if (typeof a == "undefined") {
                if (this.length) {
                    h = f.data(this[0]);
                    if (this[0].nodeType === 1 && !f._data(this[0], "parsedAttrs")) {
                        e = this[0].attributes;
                        for (var i = 0, j = e.length; i < j; i++) g = e[i].name, g.indexOf("data-") === 0 && (g = f.camelCase(g.substring(5)), l(this[0], g, h[g]));
                        f._data(this[0], "parsedAttrs", !0)
                    }
                }
                return h
            }
            if (typeof a == "object") return this.each(function () {
                f.data(this, a)
            });
            d = a.split("."), d[1] = d[1] ? "." + d[1] : "";
            if (c === b) {
                h = this.triggerHandler("getData" + d[1] + "!", [d[0]]), h === b && this.length && (h = f.data(this[0], a), h = l(this[0], a, h));
                return h === b && d[1] ? this.data(d[0]) : h
            }
            return this.each(function () {
                var b = f(this),
                    e = [d[0], c];
                b.triggerHandler("setData" + d[1] + "!", e), f.data(this, a, c), b.triggerHandler("changeData" + d[1] + "!", e)
            })
        },
        removeData: function (a) {
            return this.each(function () {
                f.removeData(this, a)
            })
        }
    }), f.extend({
        _mark: function (a, b) {
            a && (b = (b || "fx") + "mark", f._data(a, b, (f._data(a, b) || 0) + 1))
        },
        _unmark: function (a, b, c) {
            a !== !0 && (c = b, b = a, a = !1);
            if (b) {
                c = c || "fx";
                var d = c + "mark",
                    e = a ? 0 : (f._data(b, d) || 1) - 1;
                e ? f._data(b, d, e) : (f.removeData(b, d, !0), n(b, c, "mark"))
            }
        },
        queue: function (a, b, c) {
            var d;
            if (a) {
                b = (b || "fx") + "queue", d = f._data(a, b), c && (!d || f.isArray(c) ? d = f._data(a, b, f.makeArray(c)) : d.push(c));
                return d || []
            }
        },
        dequeue: function (a, b) {
            b = b || "fx";
            var c = f.queue(a, b),
                d = c.shift(),
                e = {};
            d === "inprogress" && (d = c.shift()), d && (b === "fx" && c.unshift("inprogress"), f._data(a, b + ".run", e), d.call(a, function () {
                f.dequeue(a, b)
            }, e)), c.length || (f.removeData(a, b + "queue " + b + ".run", !0), n(a, b, "queue"))
        }
    }), f.fn.extend({
        queue: function (a, c) {
            typeof a != "string" && (c = a, a = "fx");
            if (c === b) return f.queue(this[0], a);
            return this.each(function () {
                var b = f.queue(this, a, c);
                a === "fx" && b[0] !== "inprogress" && f.dequeue(this, a)
            })
        },
        dequeue: function (a) {
            return this.each(function () {
                f.dequeue(this, a)
            })
        },
        delay: function (a, b) {
            a = f.fx ? f.fx.speeds[a] || a : a, b = b || "fx";
            return this.queue(b, function (b, c) {
                var d = setTimeout(b, a);
                c.stop = function () {
                    clearTimeout(d)
                }
            })
        },
        clearQueue: function (a) {
            return this.queue(a || "fx", [])
        },
        promise: function (a, c) {
            function m() {
                --h || d.resolveWith(e, [e])
            }
            typeof a != "string" && (c = a, a = b), a = a || "fx";
            var d = f.Deferred(),
                e = this,
                g = e.length,
                h = 1,
                i = a + "defer",
                j = a + "queue",
                k = a + "mark",
                l;
            while (g--) if (l = f.data(e[g], i, b, !0) || (f.data(e[g], j, b, !0) || f.data(e[g], k, b, !0)) && f.data(e[g], i, f.Callbacks("once memory"), !0)) h++, l.add(m);
            m();
            return d.promise()
        }
    });
    var o = /[\n\t\r]/g,
        p = /\s+/,
        q = /\r/g,
        r = /^(?:button|input)$/i,
        s = /^(?:button|input|object|select|textarea)$/i,
        t = /^a(?:rea)?$/i,
        u = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
        v = f.support.getSetAttribute,
        w, x, y;
    f.fn.extend({
        attr: function (a, b) {
            return f.access(this, a, b, !0, f.attr)
        },
        removeAttr: function (a) {
            return this.each(function () {
                f.removeAttr(this, a)
            })
        },
        prop: function (a, b) {
            return f.access(this, a, b, !0, f.prop)
        },
        removeProp: function (a) {
            a = f.propFix[a] || a;
            return this.each(function () {
                try {
                    this[a] = b, delete this[a]
                } catch (c) {}
            })
        },
        addClass: function (a) {
            var b, c, d, e, g, h, i;
            if (f.isFunction(a)) return this.each(function (b) {
                f(this).addClass(a.call(this, b, this.className))
            });
            if (a && typeof a == "string") {
                b = a.split(p);
                for (c = 0, d = this.length; c < d; c++) {
                    e = this[c];
                    if (e.nodeType === 1) if (!e.className && b.length === 1) e.className = a;
                    else {
                        g = " " + e.className + " ";
                        for (h = 0, i = b.length; h < i; h++)~g.indexOf(" " + b[h] + " ") || (g += b[h] + " ");
                        e.className = f.trim(g)
                    }
                }
            }
            return this
        },
        removeClass: function (a) {
            var c, d, e, g, h, i, j;
            if (f.isFunction(a)) return this.each(function (b) {
                f(this).removeClass(a.call(this, b, this.className))
            });
            if (a && typeof a == "string" || a === b) {
                c = (a || "").split(p);
                for (d = 0, e = this.length; d < e; d++) {
                    g = this[d];
                    if (g.nodeType === 1 && g.className) if (a) {
                        h = (" " + g.className + " ").replace(o, " ");
                        for (i = 0, j = c.length; i < j; i++) h = h.replace(" " + c[i] + " ", " ");
                        g.className = f.trim(h)
                    } else g.className = ""
                }
            }
            return this
        },
        toggleClass: function (a, b) {
            var c = typeof a,
                d = typeof b == "boolean";
            if (f.isFunction(a)) return this.each(function (c) {
                f(this).toggleClass(a.call(this, c, this.className, b), b)
            });
            return this.each(function () {
                if (c === "string") {
                    var e, g = 0,
                        h = f(this),
                        i = b,
                        j = a.split(p);
                    while (e = j[g++]) i = d ? i : !h.hasClass(e), h[i ? "addClass" : "removeClass"](e)
                } else if (c === "undefined" || c === "boolean") this.className && f._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : f._data(this, "__className__") || ""
            })
        },
        hasClass: function (a) {
            var b = " " + a + " ",
                c = 0,
                d = this.length;
            for (; c < d; c++) if (this[c].nodeType === 1 && (" " + this[c].className + " ").replace(o, " ").indexOf(b) > -1) return !0;
            return !1
        },
        val: function (a) {
            var c, d, e, g = this[0];
            if (!arguments.length) {
                if (g) {
                    c = f.valHooks[g.nodeName.toLowerCase()] || f.valHooks[g.type];
                    if (c && "get" in c && (d = c.get(g, "value")) !== b) return d;
                    d = g.value;
                    return typeof d == "string" ? d.replace(q, "") : d == null ? "" : d
                }
                return b
            }
            e = f.isFunction(a);
            return this.each(function (d) {
                var g = f(this),
                    h;
                if (this.nodeType === 1) {
                    e ? h = a.call(this, d, g.val()) : h = a, h == null ? h = "" : typeof h == "number" ? h += "" : f.isArray(h) && (h = f.map(h, function (a) {
                        return a == null ? "" : a + ""
                    })), c = f.valHooks[this.nodeName.toLowerCase()] || f.valHooks[this.type];
                    if (!c || !("set" in c) || c.set(this, h, "value") === b) this.value = h
                }
            })
        }
    }), f.extend({
        valHooks: {
            option: {
                get: function (a) {
                    var b = a.attributes.value;
                    return !b || b.specified ? a.value : a.text
                }
            },
            select: {
                get: function (a) {
                    var b, c, d, e, g = a.selectedIndex,
                        h = [],
                        i = a.options,
                        j = a.type === "select-one";
                    if (g < 0) return null;
                    c = j ? g : 0, d = j ? g + 1 : i.length;
                    for (; c < d; c++) {
                        e = i[c];
                        if (e.selected && (f.support.optDisabled ? !e.disabled : e.getAttribute("disabled") === null) && (!e.parentNode.disabled || !f.nodeName(e.parentNode, "optgroup"))) {
                            b = f(e).val();
                            if (j) return b;
                            h.push(b)
                        }
                    }
                    if (j && !h.length && i.length) return f(i[g]).val();
                    return h
                },
                set: function (a, b) {
                    var c = f.makeArray(b);
                    f(a).find("option").each(function () {
                        this.selected = f.inArray(f(this).val(), c) >= 0
                    }), c.length || (a.selectedIndex = -1);
                    return c
                }
            }
        },
        attrFn: {
            val: !0,
            css: !0,
            html: !0,
            text: !0,
            data: !0,
            width: !0,
            height: !0,
            offset: !0
        },
        attr: function (a, c, d, e) {
            var g, h, i, j = a.nodeType;
            if (!a || j === 3 || j === 8 || j === 2) return b;
            if (e && c in f.attrFn) return f(a)[c](d);
            if (!("getAttribute" in a)) return f.prop(a, c, d);
            i = j !== 1 || !f.isXMLDoc(a), i && (c = c.toLowerCase(), h = f.attrHooks[c] || (u.test(c) ? x : w));
            if (d !== b) {
                if (d === null) {
                    f.removeAttr(a, c);
                    return b
                }
                if (h && "set" in h && i && (g = h.set(a, d, c)) !== b) return g;
                a.setAttribute(c, "" + d);
                return d
            }
            if (h && "get" in h && i && (g = h.get(a, c)) !== null) return g;
            g = a.getAttribute(c);
            return g === null ? b : g
        },
        removeAttr: function (a, b) {
            var c, d, e, g, h = 0;
            if (a.nodeType === 1) {
                d = (b || "").split(p), g = d.length;
                for (; h < g; h++) e = d[h].toLowerCase(), c = f.propFix[e] || e, f.attr(a, e, ""), a.removeAttribute(v ? e : c), u.test(e) && c in a && (a[c] = !1)
            }
        },
        attrHooks: {
            type: {
                set: function (a, b) {
                    if (r.test(a.nodeName) && a.parentNode) f.error("type property can't be changed");
                    else if (!f.support.radioValue && b === "radio" && f.nodeName(a, "input")) {
                        var c = a.value;
                        a.setAttribute("type", b), c && (a.value = c);
                        return b
                    }
                }
            },
            value: {
                get: function (a, b) {
                    if (w && f.nodeName(a, "button")) return w.get(a, b);
                    return b in a ? a.value : null
                },
                set: function (a, b, c) {
                    if (w && f.nodeName(a, "button")) return w.set(a, b, c);
                    a.value = b
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function (a, c, d) {
            var e, g, h, i = a.nodeType;
            if (!a || i === 3 || i === 8 || i === 2) return b;
            h = i !== 1 || !f.isXMLDoc(a), h && (c = f.propFix[c] || c, g = f.propHooks[c]);
            return d !== b ? g && "set" in g && (e = g.set(a, d, c)) !== b ? e : a[c] = d : g && "get" in g && (e = g.get(a, c)) !== null ? e : a[c]
        },
        propHooks: {
            tabIndex: {
                get: function (a) {
                    var c = a.getAttributeNode("tabindex");
                    return c && c.specified ? parseInt(c.value, 10) : s.test(a.nodeName) || t.test(a.nodeName) && a.href ? 0 : b
                }
            }
        }
    }), f.attrHooks.tabindex = f.propHooks.tabIndex, x = {
        get: function (a, c) {
            var d, e = f.prop(a, c);
            return e === !0 || typeof e != "boolean" && (d = a.getAttributeNode(c)) && d.nodeValue !== !1 ? c.toLowerCase() : b
        },
        set: function (a, b, c) {
            var d;
            b === !1 ? f.removeAttr(a, c) : (d = f.propFix[c] || c, d in a && (a[d] = !0), a.setAttribute(c, c.toLowerCase()));
            return c
        }
    }, v || (y = {
        name: !0,
        id: !0
    }, w = f.valHooks.button = {
        get: function (a, c) {
            var d;
            d = a.getAttributeNode(c);
            return d && (y[c] ? d.nodeValue !== "" : d.specified) ? d.nodeValue : b
        },
        set: function (a, b, d) {
            var e = a.getAttributeNode(d);
            e || (e = c.createAttribute(d), a.setAttributeNode(e));
            return e.nodeValue = b + ""
        }
    }, f.attrHooks.tabindex.set = w.set, f.each(["width", "height"], function (a, b) {
        f.attrHooks[b] = f.extend(f.attrHooks[b], {
            set: function (a, c) {
                if (c === "") {
                    a.setAttribute(b, "auto");
                    return c
                }
            }
        })
    }), f.attrHooks.contenteditable = {
        get: w.get,
        set: function (a, b, c) {
            b === "" && (b = "false"), w.set(a, b, c)
        }
    }), f.support.hrefNormalized || f.each(["href", "src", "width", "height"], function (a, c) {
        f.attrHooks[c] = f.extend(f.attrHooks[c], {
            get: function (a) {
                var d = a.getAttribute(c, 2);
                return d === null ? b : d
            }
        })
    }), f.support.style || (f.attrHooks.style = {
        get: function (a) {
            return a.style.cssText.toLowerCase() || b
        },
        set: function (a, b) {
            return a.style.cssText = "" + b
        }
    }), f.support.optSelected || (f.propHooks.selected = f.extend(f.propHooks.selected, {
        get: function (a) {
            var b = a.parentNode;
            b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex);
            return null
        }
    })), f.support.enctype || (f.propFix.enctype = "encoding"), f.support.checkOn || f.each(["radio", "checkbox"], function () {
        f.valHooks[this] = {
            get: function (a) {
                return a.getAttribute("value") === null ? "on" : a.value
            }
        }
    }), f.each(["radio", "checkbox"], function () {
        f.valHooks[this] = f.extend(f.valHooks[this], {
            set: function (a, b) {
                if (f.isArray(b)) return a.checked = f.inArray(f(a).val(), b) >= 0
            }
        })
    });
    var z = /\.(.*)$/,
        A = /^(?:textarea|input|select)$/i,
        B = /\./g,
        C = / /g,
        D = /[^\w\s.|`]/g,
        E = /^([^\.]*)?(?:\.(.+))?$/,
        F = /\bhover(\.\S+)?/,
        G = /^key/,
        H = /^(?:mouse|contextmenu)|click/,
        I = /^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,
        J = function (a) {
            var b = I.exec(a);
            b && (b[1] = (b[1] || "").toLowerCase(), b[3] = b[3] && new RegExp("(?:^|\\s)" + b[3] + "(?:\\s|$)"));
            return b
        }, K = function (a, b) {
            return (!b[1] || a.nodeName.toLowerCase() === b[1]) && (!b[2] || a.id === b[2]) && (!b[3] || b[3].test(a.className))
        }, L = function (a) {
            return f.event.special.hover ? a : a.replace(F, "mouseenter$1 mouseleave$1")
        };
    f.event = {
        add: function (a, c, d, e, g) {
            var h, i, j, k, l, m, n, o, p, q, r, s;
            if (!(a.nodeType === 3 || a.nodeType === 8 || !c || !d || !(h = f._data(a)))) {
                d.handler && (p = d, d = p.handler), d.guid || (d.guid = f.guid++), j = h.events, j || (h.events = j = {}), i = h.handle, i || (h.handle = i = function (a) {
                    return typeof f != "undefined" && (!a || f.event.triggered !== a.type) ? f.event.dispatch.apply(i.elem, arguments) : b
                }, i.elem = a), c = L(c).split(" ");
                for (k = 0; k < c.length; k++) {
                    l = E.exec(c[k]) || [], m = l[1], n = (l[2] || "").split(".").sort(), s = f.event.special[m] || {}, m = (g ? s.delegateType : s.bindType) || m, s = f.event.special[m] || {}, o = f.extend({
                        type: m,
                        origType: l[1],
                        data: e,
                        handler: d,
                        guid: d.guid,
                        selector: g,
                        namespace: n.join(".")
                    }, p), g && (o.quick = J(g), !o.quick && f.expr.match.POS.test(g) && (o.isPositional = !0)), r = j[m];
                    if (!r) {
                        r = j[m] = [], r.delegateCount = 0;
                        if (!s.setup || s.setup.call(a, e, n, i) === !1) a.addEventListener ? a.addEventListener(m, i, !1) : a.attachEvent && a.attachEvent("on" + m, i)
                    }
                    s.add && (s.add.call(a, o), o.handler.guid || (o.handler.guid = d.guid)), g ? r.splice(r.delegateCount++, 0, o) : r.push(o), f.event.global[m] = !0
                }
                a = null
            }
        },
        global: {},
        remove: function (a, b, c, d) {
            var e = f.hasData(a) && f._data(a),
                g, h, i, j, k, l, m, n, o, p, q;
            if ( !! e && !! (m = e.events)) {
                b = L(b || "").split(" ");
                for (g = 0; g < b.length; g++) {
                    h = E.exec(b[g]) || [], i = h[1], j = h[2];
                    if (!i) {
                        j = j ? "." + j : "";
                        for (l in m) f.event.remove(a, l + j, c, d);
                        return
                    }
                    n = f.event.special[i] || {}, i = (d ? n.delegateType : n.bindType) || i, p = m[i] || [], k = p.length, j = j ? new RegExp("(^|\\.)" + j.split(".").sort().join("\\.(?:.*\\.)?") + "(\\.|$)") : null;
                    if (c || j || d || n.remove) for (l = 0; l < p.length; l++) {
                        q = p[l];
                        if (!c || c.guid === q.guid) if (!j || j.test(q.namespace)) if (!d || d === q.selector || d === "**" && q.selector) p.splice(l--, 1), q.selector && p.delegateCount--, n.remove && n.remove.call(a, q)
                    } else p.length = 0;
                    p.length === 0 && k !== p.length && ((!n.teardown || n.teardown.call(a, j) === !1) && f.removeEvent(a, i, e.handle), delete m[i])
                }
                f.isEmptyObject(m) && (o = e.handle, o && (o.elem = null), f.removeData(a, ["events", "handle"], !0))
            }
        },
        customEvent: {
            getData: !0,
            setData: !0,
            changeData: !0
        },
        trigger: function (c, d, e, g) {
            if (!e || e.nodeType !== 3 && e.nodeType !== 8) {
                var h = c.type || c,
                    i = [],
                    j, k, l, m, n, o, p, q, r, s;
                h.indexOf("!") >= 0 && (h = h.slice(0, -1), k = !0), h.indexOf(".") >= 0 && (i = h.split("."), h = i.shift(), i.sort());
                if ((!e || f.event.customEvent[h]) && !f.event.global[h]) return;
                c = typeof c == "object" ? c[f.expando] ? c : new f.Event(h, c) : new f.Event(h), c.type = h, c.isTrigger = !0, c.exclusive = k, c.namespace = i.join("."), c.namespace_re = c.namespace ? new RegExp("(^|\\.)" + i.join("\\.(?:.*\\.)?") + "(\\.|$)") : null, o = h.indexOf(":") < 0 ? "on" + h : "", (g || !e) && c.preventDefault();
                if (!e) {
                    j = f.cache;
                    for (l in j) j[l].events && j[l].events[h] && f.event.trigger(c, d, j[l].handle.elem, !0);
                    return
                }
                c.result = b, c.target || (c.target = e), d = d != null ? f.makeArray(d) : [], d.unshift(c), p = f.event.special[h] || {};
                if (p.trigger && p.trigger.apply(e, d) === !1) return;
                r = [
                    [e, p.bindType || h]
                ];
                if (!g && !p.noBubble && !f.isWindow(e)) {
                    s = p.delegateType || h, n = null;
                    for (m = e.parentNode; m; m = m.parentNode) r.push([m, s]), n = m;
                    n && n === e.ownerDocument && r.push([n.defaultView || n.parentWindow || a, s])
                }
                for (l = 0; l < r.length; l++) {
                    m = r[l][0], c.type = r[l][1], q = (f._data(m, "events") || {})[c.type] && f._data(m, "handle"), q && q.apply(m, d), q = o && m[o], q && f.acceptData(m) && q.apply(m, d);
                    if (c.isPropagationStopped()) break
                }
                c.type = h, c.isDefaultPrevented() || (!p._default || p._default.apply(e.ownerDocument, d) === !1) && (h !== "click" || !f.nodeName(e, "a")) && f.acceptData(e) && o && e[h] && (h !== "focus" && h !== "blur" || c.target.offsetWidth !== 0) && !f.isWindow(e) && (n = e[o], n && (e[o] = null), f.event.triggered = h, e[h](), f.event.triggered = b, n && (e[o] = n));
                return c.result
            }
        },
        dispatch: function (c) {
            c = f.event.fix(c || a.event);
            var d = (f._data(this, "events") || {})[c.type] || [],
                e = d.delegateCount,
                g = [].slice.call(arguments, 0),
                h = !c.exclusive && !c.namespace,
                i = (f.event.special[c.type] || {}).handle,
                j = [],
                k, l, m, n, o, p, q, r, s, t, u;
            g[0] = c, c.delegateTarget = this;
            if (e && !c.target.disabled && (!c.button || c.type !== "click")) for (m = c.target; m != this; m = m.parentNode || this) {
                o = {}, q = [];
                for (k = 0; k < e; k++) r = d[k], s = r.selector, t = o[s], r.isPositional ? t = (t || (o[s] = f(s))).index(m) >= 0 : t === b && (t = o[s] = r.quick ? K(m, r.quick) : f(m).is(s)), t && q.push(r);
                q.length && j.push({
                    elem: m,
                    matches: q
                })
            }
            d.length > e && j.push({
                elem: this,
                matches: d.slice(e)
            });
            for (k = 0; k < j.length && !c.isPropagationStopped(); k++) {
                p = j[k], c.currentTarget = p.elem;
                for (l = 0; l < p.matches.length && !c.isImmediatePropagationStopped(); l++) {
                    r = p.matches[l];
                    if (h || !c.namespace && !r.namespace || c.namespace_re && c.namespace_re.test(r.namespace)) c.data = r.data, c.handleObj = r, n = (i || r.handler).apply(p.elem, g), n !== b && (c.result = n, n === !1 && (c.preventDefault(), c.stopPropagation()))
                }
            }
            return c.result
        },
        props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function (a, b) {
                a.which == null && (a.which = b.charCode != null ? b.charCode : b.keyCode);
                return a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement wheelDelta".split(" "),
            filter: function (a, d) {
                var e, f, g, h = d.button,
                    i = d.fromElement;
                a.pageX == null && d.clientX != null && (e = a.target.ownerDocument || c, f = e.documentElement, g = e.body, a.pageX = d.clientX + (f && f.scrollLeft || g && g.scrollLeft || 0) - (f && f.clientLeft || g && g.clientLeft || 0), a.pageY = d.clientY + (f && f.scrollTop || g && g.scrollTop || 0) - (f && f.clientTop || g && g.clientTop || 0)), !a.relatedTarget && i && (a.relatedTarget = i === a.target ? d.toElement : i), !a.which && h !== b && (a.which = h & 1 ? 1 : h & 2 ? 3 : h & 4 ? 2 : 0);
                return a
            }
        },
        fix: function (a) {
            if (a[f.expando]) return a;
            var d, e, g = a,
                h = f.event.fixHooks[a.type] || {}, i = h.props ? this.props.concat(h.props) : this.props;
            a = f.Event(g);
            for (d = i.length; d;) e = i[--d], a[e] = g[e];
            a.target || (a.target = g.srcElement || c), a.target.nodeType === 3 && (a.target = a.target.parentNode), a.metaKey === b && (a.metaKey = a.ctrlKey);
            return h.filter ? h.filter(a, g) : a
        },
        special: {
            ready: {
                setup: f.bindReady
            },
            focus: {
                delegateType: "focusin",
                noBubble: !0
            },
            blur: {
                delegateType: "focusout",
                noBubble: !0
            },
            beforeunload: {
                setup: function (a, b, c) {
                    f.isWindow(this) && (this.onbeforeunload = c)
                },
                teardown: function (a, b) {
                    this.onbeforeunload === b && (this.onbeforeunload = null)
                }
            }
        },
        simulate: function (a, b, c, d) {
            var e = f.extend(new f.Event, c, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            d ? f.event.trigger(e, null, b) : f.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
        }
    }, f.event.handle = f.event.dispatch, f.removeEvent = c.removeEventListener ? function (a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    } : function (a, b, c) {
        a.detachEvent && a.detachEvent("on" + b, c)
    }, f.Event = function (a, b) {
        if (!(this instanceof f.Event)) return new f.Event(a, b);
        a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || a.returnValue === !1 || a.getPreventDefault && a.getPreventDefault() ? N : M) : this.type = a, b && f.extend(this, b), this.timeStamp = a && a.timeStamp || f.now(), this[f.expando] = !0
    }, f.Event.prototype = {
        preventDefault: function () {
            this.isDefaultPrevented = N;
            var a = this.originalEvent;
            !a || (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
        },
        stopPropagation: function () {
            this.isPropagationStopped = N;
            var a = this.originalEvent;
            !a || (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
        },
        stopImmediatePropagation: function () {
            this.isImmediatePropagationStopped = N, this.stopPropagation()
        },
        isDefaultPrevented: M,
        isPropagationStopped: M,
        isImmediatePropagationStopped: M
    }, f.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function (a, b) {
        f.event.special[a] = f.event.special[b] = {
            delegateType: b,
            bindType: b,
            handle: function (a) {
                var b = this,
                    c = a.relatedTarget,
                    d = a.handleObj,
                    e = d.selector,
                    g, h;
                if (!c || d.origType === a.type || c !== b && !f.contains(b, c)) g = a.type, a.type = d.origType, h = d.handler.apply(this, arguments), a.type = g;
                return h
            }
        }
    }), f.support.submitBubbles || (f.event.special.submit = {
        setup: function () {
            if (f.nodeName(this, "form")) return !1;
            f.event.add(this, "click._submit keypress._submit", function (a) {
                var c = a.target,
                    d = f.nodeName(c, "input") || f.nodeName(c, "button") ? c.form : b;
                d && !d._submit_attached && (f.event.add(d, "submit._submit", function (a) {
                    this.parentNode && f.event.simulate("submit", this.parentNode, a, !0)
                }), d._submit_attached = !0)
            })
        },
        teardown: function () {
            if (f.nodeName(this, "form")) return !1;
            f.event.remove(this, "._submit")
        }
    }), f.support.changeBubbles || (f.event.special.change = {
        setup: function () {
            if (A.test(this.nodeName)) {
                if (this.type === "checkbox" || this.type === "radio") f.event.add(this, "propertychange._change", function (a) {
                    a.originalEvent.propertyName === "checked" && (this._just_changed = !0)
                }), f.event.add(this, "click._change", function (a) {
                    this._just_changed && (this._just_changed = !1, f.event.simulate("change", this, a, !0))
                });
                return !1
            }
            f.event.add(this, "beforeactivate._change", function (a) {
                var b = a.target;
                A.test(b.nodeName) && !b._change_attached && (f.event.add(b, "change._change", function (a) {
                    this.parentNode && !a.isSimulated && f.event.simulate("change", this.parentNode, a, !0)
                }), b._change_attached = !0)
            })
        },
        handle: function (a) {
            var b = a.target;
            if (this !== b || a.isSimulated || a.isTrigger || b.type !== "radio" && b.type !== "checkbox") return a.handleObj.handler.apply(this, arguments)
        },
        teardown: function () {
            f.event.remove(this, "._change");
            return A.test(this.nodeName)
        }
    }), f.support.focusinBubbles || f.each({
        focus: "focusin",
        blur: "focusout"
    }, function (a, b) {
        var d = 0,
            e = function (a) {
                f.event.simulate(b, a.target, f.event.fix(a), !0)
            };
        f.event.special[b] = {
            setup: function () {
                d++ === 0 && c.addEventListener(a, e, !0)
            },
            teardown: function () {
                --d === 0 && c.removeEventListener(a, e, !0)
            }
        }
    }), f.fn.extend({
        on: function (a, c, d, e, g) {
            var h, i;
            if (typeof a == "object") {
                typeof c != "string" && (d = c, c = b);
                for (i in a) this.on(i, c, d, a[i], g);
                return this
            }
            d == null && e == null ? (e = c, d = c = b) : e == null && (typeof c == "string" ? (e = d, d = b) : (e = d, d = c, c = b));
            if (e === !1) e = M;
            else if (!e) return this;
            g === 1 && (h = e, e = function (a) {
                f().off(a);
                return h.apply(this, arguments)
            }, e.guid = h.guid || (h.guid = f.guid++));
            return this.each(function () {
                f.event.add(this, a, e, d, c)
            })
        },
        one: function (a, b, c, d) {
            return this.on.call(this, a, b, c, d, 1)
        },
        off: function (a, c, d) {
            if (a && a.preventDefault && a.handleObj) {
                var e = a.handleObj;
                f(a.delegateTarget).off(e.namespace ? e.type + "." + e.namespace : e.type, e.selector, e.handler);
                return this
            }
            if (typeof a == "object") {
                for (var g in a) this.off(g, c, a[g]);
                return this
            }
            if (c === !1 || typeof c == "function") d = c, c = b;
            d === !1 && (d = M);
            return this.each(function () {
                f.event.remove(this, a, d, c)
            })
        },
        bind: function (a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function (a, b) {
            return this.off(a, null, b)
        },
        live: function (a, b, c) {
            f(this.context).on(a, this.selector, b, c);
            return this
        },
        die: function (a, b) {
            f(this.context).off(a, this.selector || "**", b);
            return this
        },
        delegate: function (a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function (a, b, c) {
            return arguments.length == 1 ? this.off(a, "**") : this.off(b, a, c)
        },
        trigger: function (a, b) {
            return this.each(function () {
                f.event.trigger(a, b, this)
            })
        },
        triggerHandler: function (a, b) {
            if (this[0]) return f.event.trigger(a, b, this[0], !0)
        },
        toggle: function (a) {
            var b = arguments,
                c = a.guid || f.guid++,
                d = 0,
                e = function (c) {
                    var e = (f._data(this, "lastToggle" + a.guid) || 0) % d;
                    f._data(this, "lastToggle" + a.guid, e + 1), c.preventDefault();
                    return b[e].apply(this, arguments) || !1
                };
            e.guid = c;
            while (d < b.length) b[d++].guid = c;
            return this.click(e)
        },
        hover: function (a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }
    }), f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
        f.fn[b] = function (a, c) {
            c == null && (c = a, a = null);
            return arguments.length > 0 ? this.bind(b, a, c) : this.trigger(b)
        }, f.attrFn && (f.attrFn[b] = !0), G.test(b) && (f.event.fixHooks[b] = f.event.keyHooks), H.test(b) && (f.event.fixHooks[b] = f.event.mouseHooks)
    }),
    function () {
        function x(a, b, c, e, f, g) {
            for (var h = 0, i = e.length; h < i; h++) {
                var j = e[h];
                if (j) {
                    var k = !1;
                    j = j[a];
                    while (j) {
                        if (j[d] === c) {
                            k = e[j.sizset];
                            break
                        }
                        if (j.nodeType === 1) {
                            g || (j[d] = c, j.sizset = h);
                            if (typeof b != "string") {
                                if (j === b) {
                                    k = !0;
                                    break
                                }
                            } else if (m.filter(b, [j]).length > 0) {
                                k = j;
                                break
                            }
                        }
                        j = j[a]
                    }
                    e[h] = k
                }
            }
        }
        function w(a, b, c, e, f, g) {
            for (var h = 0, i = e.length; h < i; h++) {
                var j = e[h];
                if (j) {
                    var k = !1;
                    j = j[a];
                    while (j) {
                        if (j[d] === c) {
                            k = e[j.sizset];
                            break
                        }
                        j.nodeType === 1 && !g && (j[d] = c, j.sizset = h);
                        if (j.nodeName.toLowerCase() === b) {
                            k = j;
                            break
                        }
                        j = j[a]
                    }
                    e[h] = k
                }
            }
        }
        var a = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
            d = "sizcache" + (Math.random() + "").replace(".", ""),
            e = 0,
            g = Object.prototype.toString,
            h = !1,
            i = !0,
            j = /\\/g,
            k = /\r\n/g,
            l = /\W/;
        [0, 0].sort(function () {
            i = !1;
            return 0
        });
        var m = function (b, d, e, f) {
            e = e || [], d = d || c;
            var h = d;
            if (d.nodeType !== 1 && d.nodeType !== 9) return [];
            if (!b || typeof b != "string") return e;
            var i, j, k, l, n, q, r, t, u = !0,
                v = m.isXML(d),
                w = [],
                x = b;
            do {
                a.exec(""), i = a.exec(x);
                if (i) {
                    x = i[3], w.push(i[1]);
                    if (i[2]) {
                        l = i[3];
                        break
                    }
                }
            } while (i);
            if (w.length > 1 && p.exec(b)) if (w.length === 2 && o.relative[w[0]]) j = y(w[0] + w[1], d, f);
            else {
                j = o.relative[w[0]] ? [d] : m(w.shift(), d);
                while (w.length) b = w.shift(), o.relative[b] && (b += w.shift()), j = y(b, j, f)
            } else {
                !f && w.length > 1 && d.nodeType === 9 && !v && o.match.ID.test(w[0]) && !o.match.ID.test(w[w.length - 1]) && (n = m.find(w.shift(), d, v), d = n.expr ? m.filter(n.expr, n.set)[0] : n.set[0]);
                if (d) {
                    n = f ? {
                        expr: w.pop(),
                        set: s(f)
                    } : m.find(w.pop(), w.length === 1 && (w[0] === "~" || w[0] === "+") && d.parentNode ? d.parentNode : d, v), j = n.expr ? m.filter(n.expr, n.set) : n.set, w.length > 0 ? k = s(j) : u = !1;
                    while (w.length) q = w.pop(), r = q, o.relative[q] ? r = w.pop() : q = "", r == null && (r = d), o.relative[q](k, r, v)
                } else k = w = []
            }
            k || (k = j), k || m.error(q || b);
            if (g.call(k) === "[object Array]") if (!u) e.push.apply(e, k);
            else if (d && d.nodeType === 1) for (t = 0; k[t] != null; t++) k[t] && (k[t] === !0 || k[t].nodeType === 1 && m.contains(d, k[t])) && e.push(j[t]);
            else for (t = 0; k[t] != null; t++) k[t] && k[t].nodeType === 1 && e.push(j[t]);
            else s(k, e);
            l && (m(l, h, e, f), m.uniqueSort(e));
            return e
        };
        m.uniqueSort = function (a) {
            if (u) {
                h = i, a.sort(u);
                if (h) for (var b = 1; b < a.length; b++) a[b] === a[b - 1] && a.splice(b--, 1)
            }
            return a
        }, m.matches = function (a, b) {
            return m(a, null, null, b)
        }, m.matchesSelector = function (a, b) {
            return m(b, null, null, [a]).length > 0
        }, m.find = function (a, b, c) {
            var d, e, f, g, h, i;
            if (!a) return [];
            for (e = 0, f = o.order.length; e < f; e++) {
                h = o.order[e];
                if (g = o.leftMatch[h].exec(a)) {
                    i = g[1], g.splice(1, 1);
                    if (i.substr(i.length - 1) !== "\\") {
                        g[1] = (g[1] || "").replace(j, ""), d = o.find[h](g, b, c);
                        if (d != null) {
                            a = a.replace(o.match[h], "");
                            break
                        }
                    }
                }
            }
            d || (d = typeof b.getElementsByTagName != "undefined" ? b.getElementsByTagName("*") : []);
            return {
                set: d,
                expr: a
            }
        }, m.filter = function (a, c, d, e) {
            var f, g, h, i, j, k, l, n, p, q = a,
                r = [],
                s = c,
                t = c && c[0] && m.isXML(c[0]);
            while (a && c.length) {
                for (h in o.filter) if ((f = o.leftMatch[h].exec(a)) != null && f[2]) {
                    k = o.filter[h], l = f[1], g = !1, f.splice(1, 1);
                    if (l.substr(l.length - 1) === "\\") continue;
                    s === r && (r = []);
                    if (o.preFilter[h]) {
                        f = o.preFilter[h](f, s, d, r, e, t);
                        if (!f) g = i = !0;
                        else if (f === !0) continue
                    }
                    if (f) for (n = 0;
                    (j = s[n]) != null; n++) j && (i = k(j, f, n, s), p = e ^ i, d && i != null ? p ? g = !0 : s[n] = !1 : p && (r.push(j), g = !0));
                    if (i !== b) {
                        d || (s = r), a = a.replace(o.match[h], "");
                        if (!g) return [];
                        break
                    }
                }
                if (a === q) if (g == null) m.error(a);
                else break;
                q = a
            }
            return s
        }, m.error = function (a) {
            throw "Syntax error, unrecognized expression: " + a
        };
        var n = m.getText = function (a) {
            var b, c, d = a.nodeType,
                e = "";
            if (d) {
                if (d === 1) {
                    if (typeof a.textContent == "string") return a.textContent;
                    if (typeof a.innerText == "string") return a.innerText.replace(k, "");
                    for (a = a.firstChild; a; a = a.nextSibling) e += n(a)
                } else if (d === 3 || d === 4) return a.nodeValue
            } else for (b = 0; c = a[b]; b++) c.nodeType !== 8 && (e += n(c));
            return e
        }, o = m.selectors = {
            order: ["ID", "NAME", "TAG"],
            match: {
                ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
                ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
                TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
                CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
                POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
                PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
            },
            leftMatch: {},
            attrMap: {
                "class": "className",
                "for": "htmlFor"
            },
            attrHandle: {
                href: function (a) {
                    return a.getAttribute("href")
                },
                type: function (a) {
                    return a.getAttribute("type")
                }
            },
            relative: {
                "+": function (a, b) {
                    var c = typeof b == "string",
                        d = c && !l.test(b),
                        e = c && !d;
                    d && (b = b.toLowerCase());
                    for (var f = 0, g = a.length, h; f < g; f++) if (h = a[f]) {
                        while ((h = h.previousSibling) && h.nodeType !== 1);
                        a[f] = e || h && h.nodeName.toLowerCase() === b ? h || !1 : h === b
                    }
                    e && m.filter(b, a, !0)
                },
                ">": function (a, b) {
                    var c, d = typeof b == "string",
                        e = 0,
                        f = a.length;
                    if (d && !l.test(b)) {
                        b = b.toLowerCase();
                        for (; e < f; e++) {
                            c = a[e];
                            if (c) {
                                var g = c.parentNode;
                                a[e] = g.nodeName.toLowerCase() === b ? g : !1
                            }
                        }
                    } else {
                        for (; e < f; e++) c = a[e], c && (a[e] = d ? c.parentNode : c.parentNode === b);
                        d && m.filter(b, a, !0)
                    }
                },
                "": function (a, b, c) {
                    var d, f = e++,
                        g = x;
                    typeof b == "string" && !l.test(b) && (b = b.toLowerCase(), d = b, g = w), g("parentNode", b, f, a, d, c)
                },
                "~": function (a, b, c) {
                    var d, f = e++,
                        g = x;
                    typeof b == "string" && !l.test(b) && (b = b.toLowerCase(), d = b, g = w), g("previousSibling", b, f, a, d, c)
                }
            },
            find: {
                ID: function (a, b, c) {
                    if (typeof b.getElementById != "undefined" && !c) {
                        var d = b.getElementById(a[1]);
                        return d && d.parentNode ? [d] : []
                    }
                },
                NAME: function (a, b) {
                    if (typeof b.getElementsByName != "undefined") {
                        var c = [],
                            d = b.getElementsByName(a[1]);
                        for (var e = 0, f = d.length; e < f; e++) d[e].getAttribute("name") === a[1] && c.push(d[e]);
                        return c.length === 0 ? null : c
                    }
                },
                TAG: function (a, b) {
                    if (typeof b.getElementsByTagName != "undefined") return b.getElementsByTagName(a[1])
                }
            },
            preFilter: {
                CLASS: function (a, b, c, d, e, f) {
                    a = " " + a[1].replace(j, "") + " ";
                    if (f) return a;
                    for (var g = 0, h;
                    (h = b[g]) != null; g++) h && (e ^ (h.className && (" " + h.className + " ").replace(/[\t\n\r]/g, " ").indexOf(a) >= 0) ? c || d.push(h) : c && (b[g] = !1));
                    return !1
                },
                ID: function (a) {
                    return a[1].replace(j, "")
                },
                TAG: function (a, b) {
                    return a[1].replace(j, "").toLowerCase()
                },
                CHILD: function (a) {
                    if (a[1] === "nth") {
                        a[2] || m.error(a[0]), a[2] = a[2].replace(/^\+|\s*/g, "");
                        var b = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2] === "even" && "2n" || a[2] === "odd" && "2n+1" || !/\D/.test(a[2]) && "0n+" + a[2] || a[2]);
                        a[2] = b[1] + (b[2] || 1) - 0, a[3] = b[3] - 0
                    } else a[2] && m.error(a[0]);
                    a[0] = e++;
                    return a
                },
                ATTR: function (a, b, c, d, e, f) {
                    var g = a[1] = a[1].replace(j, "");
                    !f && o.attrMap[g] && (a[1] = o.attrMap[g]), a[4] = (a[4] || a[5] || "").replace(j, ""), a[2] === "~=" && (a[4] = " " + a[4] + " ");
                    return a
                },
                PSEUDO: function (b, c, d, e, f) {
                    if (b[1] === "not") if ((a.exec(b[3]) || "").length > 1 || /^\w/.test(b[3])) b[3] = m(b[3], null, null, c);
                    else {
                        var g = m.filter(b[3], c, d, !0 ^ f);
                        d || e.push.apply(e, g);
                        return !1
                    } else if (o.match.POS.test(b[0]) || o.match.CHILD.test(b[0])) return !0;
                    return b
                },
                POS: function (a) {
                    a.unshift(!0);
                    return a
                }
            },
            filters: {
                enabled: function (a) {
                    return a.disabled === !1 && a.type !== "hidden"
                },
                disabled: function (a) {
                    return a.disabled === !0
                },
                checked: function (a) {
                    return a.checked === !0
                },
                selected: function (a) {
                    a.parentNode && a.parentNode.selectedIndex;
                    return a.selected === !0
                },
                parent: function (a) {
                    return !!a.firstChild
                },
                empty: function (a) {
                    return !a.firstChild
                },
                has: function (a, b, c) {
                    return !!m(c[3], a).length
                },
                header: function (a) {
                    return /h\d/i.test(a.nodeName)
                },
                text: function (a) {
                    var b = a.getAttribute("type"),
                        c = a.type;
                    return a.nodeName.toLowerCase() === "input" && "text" === c && (b === c || b === null)
                },
                radio: function (a) {
                    return a.nodeName.toLowerCase() === "input" && "radio" === a.type
                },
                checkbox: function (a) {
                    return a.nodeName.toLowerCase() === "input" && "checkbox" === a.type
                },
                file: function (a) {
                    return a.nodeName.toLowerCase() === "input" && "file" === a.type
                },
                password: function (a) {
                    return a.nodeName.toLowerCase() === "input" && "password" === a.type
                },
                submit: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return (b === "input" || b === "button") && "submit" === a.type
                },
                image: function (a) {
                    return a.nodeName.toLowerCase() === "input" && "image" === a.type
                },
                reset: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return (b === "input" || b === "button") && "reset" === a.type
                },
                button: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return b === "input" && "button" === a.type || b === "button"
                },
                input: function (a) {
                    return /input|select|textarea|button/i.test(a.nodeName)
                },
                focus: function (a) {
                    return a === a.ownerDocument.activeElement
                }
            },
            setFilters: {
                first: function (a, b) {
                    return b === 0
                },
                last: function (a, b, c, d) {
                    return b === d.length - 1
                },
                even: function (a, b) {
                    return b % 2 === 0
                },
                odd: function (a, b) {
                    return b % 2 === 1
                },
                lt: function (a, b, c) {
                    return b < c[3] - 0
                },
                gt: function (a, b, c) {
                    return b > c[3] - 0
                },
                nth: function (a, b, c) {
                    return c[3] - 0 === b
                },
                eq: function (a, b, c) {
                    return c[3] - 0 === b
                }
            },
            filter: {
                PSEUDO: function (a, b, c, d) {
                    var e = b[1],
                        f = o.filters[e];
                    if (f) return f(a, c, b, d);
                    if (e === "contains") return (a.textContent || a.innerText || n([a]) || "").indexOf(b[3]) >= 0;
                    if (e === "not") {
                        var g = b[3];
                        for (var h = 0, i = g.length; h < i; h++) if (g[h] === a) return !1;
                        return !0
                    }
                    m.error(e)
                },
                CHILD: function (a, b) {
                    var c, e, f, g, h, i, j, k = b[1],
                        l = a;
                    switch (k) {
                        case "only":
                        case "first":
                            while (l = l.previousSibling) if (l.nodeType === 1) return !1;
                            if (k === "first") return !0;
                            l = a;
                        case "last":
                            while (l = l.nextSibling) if (l.nodeType === 1) return !1;
                            return !0;
                        case "nth":
                            c = b[2], e = b[3];
                            if (c === 1 && e === 0) return !0;
                            f = b[0], g = a.parentNode;
                            if (g && (g[d] !== f || !a.nodeIndex)) {
                                i = 0;
                                for (l = g.firstChild; l; l = l.nextSibling) l.nodeType === 1 && (l.nodeIndex = ++i);
                                g[d] = f
                            }
                            j = a.nodeIndex - e;
                            return c === 0 ? j === 0 : j % c === 0 && j / c >= 0
                    }
                },
                ID: function (a, b) {
                    return a.nodeType === 1 && a.getAttribute("id") === b
                },
                TAG: function (a, b) {
                    return b === "*" && a.nodeType === 1 || !! a.nodeName && a.nodeName.toLowerCase() === b
                },
                CLASS: function (a, b) {
                    return (" " + (a.className || a.getAttribute("class")) + " ").indexOf(b) > -1
                },
                ATTR: function (a, b) {
                    var c = b[1],
                        d = m.attr ? m.attr(a, c) : o.attrHandle[c] ? o.attrHandle[c](a) : a[c] != null ? a[c] : a.getAttribute(c),
                        e = d + "",
                        f = b[2],
                        g = b[4];
                    return d == null ? f === "!=" : !f && m.attr ? d != null : f === "=" ? e === g : f === "*=" ? e.indexOf(g) >= 0 : f === "~=" ? (" " + e + " ").indexOf(g) >= 0 : g ? f === "!=" ? e !== g : f === "^=" ? e.indexOf(g) === 0 : f === "$=" ? e.substr(e.length - g.length) === g : f === "|=" ? e === g || e.substr(0, g.length + 1) === g + "-" : !1 : e && d !== !1
                },
                POS: function (a, b, c, d) {
                    var e = b[2],
                        f = o.setFilters[e];
                    if (f) return f(a, c, b, d)
                }
            }
        }, p = o.match.POS,
            q = function (a, b) {
                return "\\" + (b - 0 + 1)
            };
        for (var r in o.match) o.match[r] = new RegExp(o.match[r].source + /(?![^\[]*\])(?![^\(]*\))/.source), o.leftMatch[r] = new RegExp(/(^(?:.|\r|\n)*?)/.source + o.match[r].source.replace(/\\(\d+)/g, q));
        var s = function (a, b) {
            a = Array.prototype.slice.call(a, 0);
            if (b) {
                b.push.apply(b, a);
                return b
            }
            return a
        };
        try {
            Array.prototype.slice.call(c.documentElement.childNodes, 0)[0].nodeType
        } catch (t) {
            s = function (a, b) {
                var c = 0,
                    d = b || [];
                if (g.call(a) === "[object Array]") Array.prototype.push.apply(d, a);
                else if (typeof a.length == "number") for (var e = a.length; c < e; c++) d.push(a[c]);
                else for (; a[c]; c++) d.push(a[c]);
                return d
            }
        }
        var u, v;
        c.documentElement.compareDocumentPosition ? u = function (a, b) {
            if (a === b) {
                h = !0;
                return 0
            }
            if (!a.compareDocumentPosition || !b.compareDocumentPosition) return a.compareDocumentPosition ? -1 : 1;
            return a.compareDocumentPosition(b) & 4 ? -1 : 1
        } : (u = function (a, b) {
            if (a === b) {
                h = !0;
                return 0
            }
            if (a.sourceIndex && b.sourceIndex) return a.sourceIndex - b.sourceIndex;
            var c, d, e = [],
                f = [],
                g = a.parentNode,
                i = b.parentNode,
                j = g;
            if (g === i) return v(a, b);
            if (!g) return -1;
            if (!i) return 1;
            while (j) e.unshift(j), j = j.parentNode;
            j = i;
            while (j) f.unshift(j), j = j.parentNode;
            c = e.length, d = f.length;
            for (var k = 0; k < c && k < d; k++) if (e[k] !== f[k]) return v(e[k], f[k]);
            return k === c ? v(a, f[k], -1) : v(e[k], b, 1)
        }, v = function (a, b, c) {
            if (a === b) return c;
            var d = a.nextSibling;
            while (d) {
                if (d === b) return -1;
                d = d.nextSibling
            }
            return 1
        }),
        function () {
            var a = c.createElement("div"),
                d = "script" + (new Date).getTime(),
                e = c.documentElement;
            a.innerHTML = "<a name='" + d + "'/>", e.insertBefore(a, e.firstChild), c.getElementById(d) && (o.find.ID = function (a, c, d) {
                if (typeof c.getElementById != "undefined" && !d) {
                    var e = c.getElementById(a[1]);
                    return e ? e.id === a[1] || typeof e.getAttributeNode != "undefined" && e.getAttributeNode("id").nodeValue === a[1] ? [e] : b : []
                }
            }, o.filter.ID = function (a, b) {
                var c = typeof a.getAttributeNode != "undefined" && a.getAttributeNode("id");
                return a.nodeType === 1 && c && c.nodeValue === b
            }), e.removeChild(a), e = a = null
        }(),
        function () {
            var a = c.createElement("div");
            a.appendChild(c.createComment("")), a.getElementsByTagName("*").length > 0 && (o.find.TAG = function (a, b) {
                var c = b.getElementsByTagName(a[1]);
                if (a[1] === "*") {
                    var d = [];
                    for (var e = 0; c[e]; e++) c[e].nodeType === 1 && d.push(c[e]);
                    c = d
                }
                return c
            }), a.innerHTML = "<a href='#'></a>", a.firstChild && typeof a.firstChild.getAttribute != "undefined" && a.firstChild.getAttribute("href") !== "#" && (o.attrHandle.href = function (a) {
                return a.getAttribute("href", 2)
            }), a = null
        }(), c.querySelectorAll && function () {
            var a = m,
                b = c.createElement("div"),
                d = "__sizzle__";
            b.innerHTML = "<p class='TEST'></p>";
            if (!b.querySelectorAll || b.querySelectorAll(".TEST").length !== 0) {
                m = function (b, e, f, g) {
                    e = e || c;
                    if (!g && !m.isXML(e)) {
                        var h = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);
                        if (h && (e.nodeType === 1 || e.nodeType === 9)) {
                            if (h[1]) return s(e.getElementsByTagName(b), f);
                            if (h[2] && o.find.CLASS && e.getElementsByClassName) return s(e.getElementsByClassName(h[2]), f)
                        }
                        if (e.nodeType === 9) {
                            if (b === "body" && e.body) return s([e.body], f);
                            if (h && h[3]) {
                                var i = e.getElementById(h[3]);
                                if (!i || !i.parentNode) return s([], f);
                                if (i.id === h[3]) return s([i], f)
                            }
                            try {
                                return s(e.querySelectorAll(b), f)
                            } catch (j) {}
                        } else if (e.nodeType === 1 && e.nodeName.toLowerCase() !== "object") {
                            var k = e,
                                l = e.getAttribute("id"),
                                n = l || d,
                                p = e.parentNode,
                                q = /^\s*[+~]/.test(b);
                            l ? n = n.replace(/'/g, "\\$&") : e.setAttribute("id", n), q && p && (e = e.parentNode);
                            try {
                                if (!q || p) return s(e.querySelectorAll("[id='" + n + "'] " + b), f)
                            } catch (r) {} finally {
                                l || k.removeAttribute("id")
                            }
                        }
                    }
                    return a(b, e, f, g)
                };
                for (var e in a) m[e] = a[e];
                b = null
            }
        }(),
        function () {
            var a = c.documentElement,
                b = a.matchesSelector || a.mozMatchesSelector || a.webkitMatchesSelector || a.msMatchesSelector;
            if (b) {
                var d = !b.call(c.createElement("div"), "div"),
                    e = !1;
                try {
                    b.call(c.documentElement, "[test!='']:sizzle")
                } catch (f) {
                    e = !0
                }
                m.matchesSelector = function (a, c) {
                    c = c.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']");
                    if (!m.isXML(a)) try {
                        if (e || !o.match.PSEUDO.test(c) && !/!=/.test(c)) {
                            var f = b.call(a, c);
                            if (f || !d || a.document && a.document.nodeType !== 11) return f
                        }
                    } catch (g) {}
                    return m(c, null, null, [a]).length > 0
                }
            }
        }(),
        function () {
            var a = c.createElement("div");
            a.innerHTML = "<div class='test e'></div><div class='test'></div>";
            if ( !! a.getElementsByClassName && a.getElementsByClassName("e").length !== 0) {
                a.lastChild.className = "e";
                if (a.getElementsByClassName("e").length === 1) return;
                o.order.splice(1, 0, "CLASS"), o.find.CLASS = function (a, b, c) {
                    if (typeof b.getElementsByClassName != "undefined" && !c) return b.getElementsByClassName(a[1])
                }, a = null
            }
        }(), c.documentElement.contains ? m.contains = function (a, b) {
            return a !== b && (a.contains ? a.contains(b) : !0)
        } : c.documentElement.compareDocumentPosition ? m.contains = function (a, b) {
            return !!(a.compareDocumentPosition(b) & 16)
        } : m.contains = function () {
            return !1
        }, m.isXML = function (a) {
            var b = (a ? a.ownerDocument || a : 0).documentElement;
            return b ? b.nodeName !== "HTML" : !1
        };
        var y = function (a, b, c) {
            var d, e = [],
                f = "",
                g = b.nodeType ? [b] : b;
            while (d = o.match.PSEUDO.exec(a)) f += d[0], a = a.replace(o.match.PSEUDO, "");
            a = o.relative[a] ? a + "*" : a;
            for (var h = 0, i = g.length; h < i; h++) m(a, g[h], e, c);
            return m.filter(f, e)
        };
        m.attr = f.attr, m.selectors.attrMap = {}, f.find = m, f.expr = m.selectors, f.expr[":"] = f.expr.filters, f.unique = m.uniqueSort, f.text = m.getText, f.isXMLDoc = m.isXML, f.contains = m.contains
    }();
    var O = /Until$/,
        P = /^(?:parents|prevUntil|prevAll)/,
        Q = /,/,
        R = /^.[^:#\[\.,]*$/,
        S = Array.prototype.slice,
        T = f.expr.match.POS,
        U = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    f.fn.extend({
        find: function (a) {
            var b = this,
                c, d;
            if (typeof a != "string") return f(a).filter(function () {
                for (c = 0, d = b.length; c < d; c++) if (f.contains(b[c], this)) return !0
            });
            var e = this.pushStack("", "find", a),
                g, h, i;
            for (c = 0, d = this.length; c < d; c++) {
                g = e.length, f.find(a, this[c], e);
                if (c > 0) for (h = g; h < e.length; h++) for (i = 0; i < g; i++) if (e[i] === e[h]) {
                    e.splice(h--, 1);
                    break
                }
            }
            return e
        },
        has: function (a) {
            var b = f(a);
            return this.filter(function () {
                for (var a = 0, c = b.length; a < c; a++) if (f.contains(this, b[a])) return !0
            })
        },
        not: function (a) {
            return this.pushStack(W(this, a, !1), "not", a)
        },
        filter: function (a) {
            return this.pushStack(W(this, a, !0), "filter", a)
        },
        is: function (a) {
            return !!a && (typeof a == "string" ? T.test(a) ? f(a, this.context).index(this[0]) >= 0 : f.filter(a, this).length > 0 : this.filter(a).length > 0)
        },
        closest: function (a, b) {
            var c = [],
                d, e, g = this[0];
            if (f.isArray(a)) {
                var h = 1;
                while (g && g.ownerDocument && g !== b) {
                    for (d = 0; d < a.length; d++) f(g).is(a[d]) && c.push({
                        selector: a[d],
                        elem: g,
                        level: h
                    });
                    g = g.parentNode, h++
                }
                return c
            }
            var i = T.test(a) || typeof a != "string" ? f(a, b || this.context) : 0;
            for (d = 0, e = this.length; d < e; d++) {
                g = this[d];
                while (g) {
                    if (i ? i.index(g) > -1 : f.find.matchesSelector(g, a)) {
                        c.push(g);
                        break
                    }
                    g = g.parentNode;
                    if (!g || !g.ownerDocument || g === b || g.nodeType === 11) break
                }
            }
            c = c.length > 1 ? f.unique(c) : c;
            return this.pushStack(c, "closest", a)
        },
        index: function (a) {
            if (!a) return this[0] && this[0].parentNode ? this.prevAll().length : -1;
            if (typeof a == "string") return f.inArray(this[0], f(a));
            return f.inArray(a.jquery ? a[0] : a, this)
        },
        add: function (a, b) {
            var c = typeof a == "string" ? f(a, b) : f.makeArray(a && a.nodeType ? [a] : a),
                d = f.merge(this.get(), c);
            return this.pushStack(V(c[0]) || V(d[0]) ? d : f.unique(d))
        },
        andSelf: function () {
            return this.add(this.prevObject)
        }
    }), f.each({
        parent: function (a) {
            var b = a.parentNode;
            return b && b.nodeType !== 11 ? b : null
        },
        parents: function (a) {
            return f.dir(a, "parentNode")
        },
        parentsUntil: function (a, b, c) {
            return f.dir(a, "parentNode", c)
        },
        next: function (a) {
            return f.nth(a, 2, "nextSibling")
        },
        prev: function (a) {
            return f.nth(a, 2, "previousSibling")
        },
        nextAll: function (a) {
            return f.dir(a, "nextSibling")
        },
        prevAll: function (a) {
            return f.dir(a, "previousSibling")
        },
        nextUntil: function (a, b, c) {
            return f.dir(a, "nextSibling", c)
        },
        prevUntil: function (a, b, c) {
            return f.dir(a, "previousSibling", c)
        },
        siblings: function (a) {
            return f.sibling(a.parentNode.firstChild, a)
        },
        children: function (a) {
            return f.sibling(a.firstChild)
        },
        contents: function (a) {
            return f.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : f.makeArray(a.childNodes)
        }
    }, function (a, b) {
        f.fn[a] = function (c, d) {
            var e = f.map(this, b, c),
                g = S.call(arguments);
            O.test(a) || (d = c), d && typeof d == "string" && (e = f.filter(d, e)), e = this.length > 1 && !U[a] ? f.unique(e) : e, (this.length > 1 || Q.test(d)) && P.test(a) && (e = e.reverse());
            return this.pushStack(e, a, g.join(","))
        }
    }), f.extend({
        filter: function (a, b, c) {
            c && (a = ":not(" + a + ")");
            return b.length === 1 ? f.find.matchesSelector(b[0], a) ? [b[0]] : [] : f.find.matches(a, b)
        },
        dir: function (a, c, d) {
            var e = [],
                g = a[c];
            while (g && g.nodeType !== 9 && (d === b || g.nodeType !== 1 || !f(g).is(d))) g.nodeType === 1 && e.push(g), g = g[c];
            return e
        },
        nth: function (a, b, c, d) {
            b = b || 1;
            var e = 0;
            for (; a; a = a[c]) if (a.nodeType === 1 && ++e === b) break;
            return a
        },
        sibling: function (a, b) {
            var c = [];
            for (; a; a = a.nextSibling) a.nodeType === 1 && a !== b && c.push(a);
            return c
        }
    });
    var Y = "abbr article aside audio canvas datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
        Z = / jQuery\d+="(?:\d+|null)"/g,
        $ = /^\s+/,
        _ = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
        ba = /<([\w:]+)/,
        bb = /<tbody/i,
        bc = /<|&#?\w+;/,
        bd = /<(?:script|style)/i,
        be = /<(?:script|object|embed|option|style)/i,
        bf = new RegExp("<(?:" + Y.replace(" ", "|") + ")", "i"),
        bg = /checked\s*(?:[^=]|=\s*.checked.)/i,
        bh = /\/(java|ecma)script/i,
        bi = /^\s*<!(?:\[CDATA\[|\-\-)/,
        bj = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            area: [1, "<map>", "</map>"],
            _default: [0, "", ""]
        }, bk = X(c);
    bj.optgroup = bj.option, bj.tbody = bj.tfoot = bj.colgroup = bj.caption = bj.thead, bj.th = bj.td, f.support.htmlSerialize || (bj._default = [1, "div<div>", "</div>"]), f.fn.extend({
        text: function (a) {
            if (f.isFunction(a)) return this.each(function (b) {
                var c = f(this);
                c.text(a.call(this, b, c.text()))
            });
            if (typeof a != "object" && a !== b) return this.empty().append((this[0] && this[0].ownerDocument || c).createTextNode(a));
            return f.text(this)
        },
        wrapAll: function (a) {
            if (f.isFunction(a)) return this.each(function (b) {
                f(this).wrapAll(a.call(this, b))
            });
            if (this[0]) {
                var b = f(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
                    var a = this;
                    while (a.firstChild && a.firstChild.nodeType === 1) a = a.firstChild;
                    return a
                }).append(this)
            }
            return this
        },
        wrapInner: function (a) {
            if (f.isFunction(a)) return this.each(function (b) {
                f(this).wrapInner(a.call(this, b))
            });
            return this.each(function () {
                var b = f(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function (a) {
            return this.each(function () {
                f(this).wrapAll(a)
            })
        },
        unwrap: function () {
            return this.parent().each(function () {
                f.nodeName(this, "body") || f(this).replaceWith(this.childNodes)
            }).end()
        },
        append: function () {
            return this.domManip(arguments, !0, function (a) {
                this.nodeType === 1 && this.appendChild(a)
            })
        },
        prepend: function () {
            return this.domManip(arguments, !0, function (a) {
                this.nodeType === 1 && this.insertBefore(a, this.firstChild)
            })
        },
        before: function () {
            if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, function (a) {
                this.parentNode.insertBefore(a, this)
            });
            if (arguments.length) {
                var a = f(arguments[0]);
                a.push.apply(a, this.toArray());
                return this.pushStack(a, "before", arguments)
            }
        },
        after: function () {
            if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, function (a) {
                this.parentNode.insertBefore(a, this.nextSibling)
            });
            if (arguments.length) {
                var a = this.pushStack(this, "after", arguments);
                a.push.apply(a, f(arguments[0]).toArray());
                return a
            }
        },
        remove: function (a, b) {
            for (var c = 0, d;
            (d = this[c]) != null; c++) if (!a || f.filter(a, [d]).length)!b && d.nodeType === 1 && (f.cleanData(d.getElementsByTagName("*")), f.cleanData([d])), d.parentNode && d.parentNode.removeChild(d);
            return this
        },
        empty: function () {
            for (var a = 0, b;
            (b = this[a]) != null; a++) {
                b.nodeType === 1 && f.cleanData(b.getElementsByTagName("*"));
                while (b.firstChild) b.removeChild(b.firstChild)
            }
            return this
        },
        clone: function (a, b) {
            a = a == null ? !1 : a, b = b == null ? a : b;
            return this.map(function () {
                return f.clone(this, a, b)
            })
        },
        html: function (a) {
            if (a === b) return this[0] && this[0].nodeType === 1 ? this[0].innerHTML.replace(Z, "") : null;
            if (typeof a == "string" && !bd.test(a) && (f.support.leadingWhitespace || !$.test(a)) && !bj[(ba.exec(a) || ["", ""])[1].toLowerCase()]) {
                a = a.replace(_, "<$1></$2>");
                try {
                    for (var c = 0, d = this.length; c < d; c++) this[c].nodeType === 1 && (f.cleanData(this[c].getElementsByTagName("*")), this[c].innerHTML = a)
                } catch (e) {
                    this.empty().append(a)
                }
            } else f.isFunction(a) ? this.each(function (b) {
                var c = f(this);
                c.html(a.call(this, b, c.html()))
            }) : this.empty().append(a);
            return this
        },
        replaceWith: function (a) {
            if (this[0] && this[0].parentNode) {
                if (f.isFunction(a)) return this.each(function (b) {
                    var c = f(this),
                        d = c.html();
                    c.replaceWith(a.call(this, b, d))
                });
                typeof a != "string" && (a = f(a).detach());
                return this.each(function () {
                    var b = this.nextSibling,
                        c = this.parentNode;
                    f(this).remove(), b ? f(b).before(a) : f(c).append(a)
                })
            }
            return this.length ? this.pushStack(f(f.isFunction(a) ? a() : a), "replaceWith", a) : this
        },
        detach: function (a) {
            return this.remove(a, !0)
        },
        domManip: function (a, c, d) {
            var e, g, h, i, j = a[0],
                k = [];
            if (!f.support.checkClone && arguments.length === 3 && typeof j == "string" && bg.test(j)) return this.each(function () {
                f(this).domManip(a, c, d, !0)
            });
            if (f.isFunction(j)) return this.each(function (e) {
                var g = f(this);
                a[0] = j.call(this, e, c ? g.html() : b), g.domManip(a, c, d)
            });
            if (this[0]) {
                i = j && j.parentNode, f.support.parentNode && i && i.nodeType === 11 && i.childNodes.length === this.length ? e = {
                    fragment: i
                } : e = f.buildFragment(a, this, k), h = e.fragment, h.childNodes.length === 1 ? g = h = h.firstChild : g = h.firstChild;
                if (g) {
                    c = c && f.nodeName(g, "tr");
                    for (var l = 0, m = this.length, n = m - 1; l < m; l++) d.call(c ? bl(this[l], g) : this[l], e.cacheable || m > 1 && l < n ? f.clone(h, !0, !0) : h)
                }
                k.length && f.each(k, br)
            }
            return this
        }
    }), f.buildFragment = function (a, b, d) {
        var e, g, h, i, j = a[0];
        b && b[0] && (i = b[0].ownerDocument || b[0]), i.createDocumentFragment || (i = c), a.length === 1 && typeof j == "string" && j.length < 512 && i === c && j.charAt(0) === "<" && !be.test(j) && (f.support.checkClone || !bg.test(j)) && !f.support.unknownElems && bf.test(j) && (g = !0, h = f.fragments[j], h && h !== 1 && (e = h)), e || (e = i.createDocumentFragment(), f.clean(a, i, e, d)), g && (f.fragments[j] = h ? e : 1);
        return {
            fragment: e,
            cacheable: g
        }
    }, f.fragments = {}, f.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (a, b) {
        f.fn[a] = function (c) {
            var d = [],
                e = f(c),
                g = this.length === 1 && this[0].parentNode;
            if (g && g.nodeType === 11 && g.childNodes.length === 1 && e.length === 1) {
                e[b](this[0]);
                return this
            }
            for (var h = 0, i = e.length; h < i; h++) {
                var j = (h > 0 ? this.clone(!0) : this).get();
                f(e[h])[b](j), d = d.concat(j)
            }
            return this.pushStack(d, a, e.selector)
        }
    }), f.extend({
        clone: function (a, b, c) {
            var d = a.cloneNode(!0),
                e, g, h;
            if ((!f.support.noCloneEvent || !f.support.noCloneChecked) && (a.nodeType === 1 || a.nodeType === 11) && !f.isXMLDoc(a)) {
                bn(a, d), e = bo(a), g = bo(d);
                for (h = 0; e[h]; ++h) g[h] && bn(e[h], g[h])
            }
            if (b) {
                bm(a, d);
                if (c) {
                    e = bo(a), g = bo(d);
                    for (h = 0; e[h]; ++h) bm(e[h], g[h])
                }
            }
            e = g = null;
            return d
        },
        clean: function (a, b, d, e) {
            var g;
            b = b || c, typeof b.createElement == "undefined" && (b = b.ownerDocument || b[0] && b[0].ownerDocument || c);
            var h = [],
                i;
            for (var j = 0, k;
            (k = a[j]) != null; j++) {
                typeof k == "number" && (k += "");
                if (!k) continue;
                if (typeof k == "string") if (!bc.test(k)) k = b.createTextNode(k);
                else {
                    k = k.replace(_, "<$1></$2>");
                    var l = (ba.exec(k) || ["", ""])[1].toLowerCase(),
                        m = bj[l] || bj._default,
                        n = m[0],
                        o = b.createElement("div");
                    b === c ? bk.appendChild(o) : X(b).appendChild(o), o.innerHTML = m[1] + k + m[2];
                    while (n--) o = o.lastChild;
                    if (!f.support.tbody) {
                        var p = bb.test(k),
                            q = l === "table" && !p ? o.firstChild && o.firstChild.childNodes : m[1] === "<table>" && !p ? o.childNodes : [];
                        for (i = q.length - 1; i >= 0; --i) f.nodeName(q[i], "tbody") && !q[i].childNodes.length && q[i].parentNode.removeChild(q[i])
                    }!f.support.leadingWhitespace && $.test(k) && o.insertBefore(b.createTextNode($.exec(k)[0]), o.firstChild), k = o.childNodes
                }
                var r;
                if (!f.support.appendChecked) if (k[0] && typeof (r = k.length) == "number") for (i = 0; i < r; i++) bq(k[i]);
                else bq(k);
                k.nodeType ? h.push(k) : h = f.merge(h, k)
            }
            if (d) {
                g = function (a) {
                    return !a.type || bh.test(a.type)
                };
                for (j = 0; h[j]; j++) if (e && f.nodeName(h[j], "script") && (!h[j].type || h[j].type.toLowerCase() === "text/javascript")) e.push(h[j].parentNode ? h[j].parentNode.removeChild(h[j]) : h[j]);
                else {
                    if (h[j].nodeType === 1) {
                        var s = f.grep(h[j].getElementsByTagName("script"), g);
                        h.splice.apply(h, [j + 1, 0].concat(s))
                    }
                    d.appendChild(h[j])
                }
            }
            return h
        },
        cleanData: function (a) {
            var b, c, d = f.cache,
                e = f.event.special,
                g = f.support.deleteExpando;
            for (var h = 0, i;
            (i = a[h]) != null; h++) {
                if (i.nodeName && f.noData[i.nodeName.toLowerCase()]) continue;
                c = i[f.expando];
                if (c) {
                    b = d[c];
                    if (b && b.events) {
                        for (var j in b.events) e[j] ? f.event.remove(i, j) : f.removeEvent(i, j, b.handle);
                        b.handle && (b.handle.elem = null)
                    }
                    g ? delete i[f.expando] : i.removeAttribute && i.removeAttribute(f.expando), delete d[c]
                }
            }
        }
    });
    var bs = /alpha\([^)]*\)/i,
        bt = /opacity=([^)]*)/,
        bu = /([A-Z]|^ms)/g,
        bv = /^-?\d+(?:px)?$/i,
        bw = /^-?\d/,
        bx = /^([\-+])=([\-+.\de]+)/,
        by = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        }, bz = ["Left", "Right"],
        bA = ["Top", "Bottom"],
        bB, bC, bD;
    f.fn.css = function (a, c) {
        if (arguments.length === 2 && c === b) return this;
        return f.access(this, a, c, !0, function (a, c, d) {
            return d !== b ? f.style(a, c, d) : f.css(a, c)
        })
    }, f.extend({
        cssHooks: {
            opacity: {
                get: function (a, b) {
                    if (b) {
                        var c = bB(a, "opacity", "opacity");
                        return c === "" ? "1" : c
                    }
                    return a.style.opacity
                }
            }
        },
        cssNumber: {
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": f.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function (a, c, d, e) {
            if ( !! a && a.nodeType !== 3 && a.nodeType !== 8 && !! a.style) {
                var g, h, i = f.camelCase(c),
                    j = a.style,
                    k = f.cssHooks[i];
                c = f.cssProps[i] || i;
                if (d === b) {
                    if (k && "get" in k && (g = k.get(a, !1, e)) !== b) return g;
                    return j[c]
                }
                h = typeof d, h === "string" && (g = bx.exec(d)) && (d = +(g[1] + 1) * +g[2] + parseFloat(f.css(a, c)), h = "number");
                if (d == null || h === "number" && isNaN(d)) return;
                h === "number" && !f.cssNumber[i] && (d += "px");
                if (!k || !("set" in k) || (d = k.set(a, d)) !== b) try {
                    j[c] = d
                } catch (l) {}
            }
        },
        css: function (a, c, d) {
            var e, g;
            c = f.camelCase(c), g = f.cssHooks[c], c = f.cssProps[c] || c, c === "cssFloat" && (c = "float");
            if (g && "get" in g && (e = g.get(a, !0, d)) !== b) return e;
            if (bB) return bB(a, c)
        },
        swap: function (a, b, c) {
            var d = {};
            for (var e in b) d[e] = a.style[e], a.style[e] = b[e];
            c.call(a);
            for (e in b) a.style[e] = d[e]
        }
    }), f.curCSS = f.css, f.each(["height", "width"], function (a, b) {
        f.cssHooks[b] = {
            get: function (a, c, d) {
                var e;
                if (c) {
                    if (a.offsetWidth !== 0) return bE(a, b, d);
                    f.swap(a, by, function () {
                        e = bE(a, b, d)
                    });
                    return e
                }
            },
            set: function (a, b) {
                if (!bv.test(b)) return b;
                b = parseFloat(b);
                if (b >= 0) return b + "px"
            }
        }
    }), f.support.opacity || (f.cssHooks.opacity = {
        get: function (a, b) {
            return bt.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "" : b ? "1" : ""
        },
        set: function (a, b) {
            var c = a.style,
                d = a.currentStyle,
                e = f.isNumeric(b) ? "alpha(opacity=" + b * 100 + ")" : "",
                g = d && d.filter || c.filter || "";
            c.zoom = 1;
            if (b >= 1 && f.trim(g.replace(bs, "")) === "") {
                c.removeAttribute("filter");
                if (d && !d.filter) return
            }
            c.filter = bs.test(g) ? g.replace(bs, e) : g + " " + e
        }
    }), f(function () {
        f.support.reliableMarginRight || (f.cssHooks.marginRight = {
            get: function (a, b) {
                var c;
                f.swap(a, {
                    display: "inline-block"
                }, function () {
                    b ? c = bB(a, "margin-right", "marginRight") : c = a.style.marginRight
                });
                return c
            }
        })
    }), c.defaultView && c.defaultView.getComputedStyle && (bC = function (a, c) {
        var d, e, g;
        c = c.replace(bu, "-$1").toLowerCase();
        if (!(e = a.ownerDocument.defaultView)) return b;
        if (g = e.getComputedStyle(a, null)) d = g.getPropertyValue(c), d === "" && !f.contains(a.ownerDocument.documentElement, a) && (d = f.style(a, c));
        return d
    }), c.documentElement.currentStyle && (bD = function (a, b) {
        var c, d, e, f = a.currentStyle && a.currentStyle[b],
            g = a.style;
        f === null && g && (e = g[b]) && (f = e), !bv.test(f) && bw.test(f) && (c = g.left, d = a.runtimeStyle && a.runtimeStyle.left, d && (a.runtimeStyle.left = a.currentStyle.left), g.left = b === "fontSize" ? "1em" : f || 0, f = g.pixelLeft + "px", g.left = c, d && (a.runtimeStyle.left = d));
        return f === "" ? "auto" : f
    }), bB = bC || bD, f.expr && f.expr.filters && (f.expr.filters.hidden = function (a) {
        var b = a.offsetWidth,
            c = a.offsetHeight;
        return b === 0 && c === 0 || !f.support.reliableHiddenOffsets && (a.style && a.style.display || f.css(a, "display")) === "none"
    }, f.expr.filters.visible = function (a) {
        return !f.expr.filters.hidden(a)
    });
    var bF = /%20/g,
        bG = /\[\]$/,
        bH = /\r?\n/g,
        bI = /#.*$/,
        bJ = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
        bK = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
        bL = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,
        bM = /^(?:GET|HEAD)$/,
        bN = /^\/\//,
        bO = /\?/,
        bP = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        bQ = /^(?:select|textarea)/i,
        bR = /\s+/,
        bS = /([?&])_=[^&]*/,
        bT = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,
        bU = f.fn.load,
        bV = {}, bW = {}, bX, bY, bZ = ["*/"] + ["*"];
    try {
        bX = e.href
    } catch (b$) {
        bX = c.createElement("a"), bX.href = "", bX = bX.href
    }
    bY = bT.exec(bX.toLowerCase()) || [], f.fn.extend({
        load: function (a, c, d) {
            if (typeof a != "string" && bU) return bU.apply(this, arguments);
            if (!this.length) return this;
            var e = a.indexOf(" ");
            if (e >= 0) {
                var g = a.slice(e, a.length);
                a = a.slice(0, e)
            }
            var h = "GET";
            c && (f.isFunction(c) ? (d = c, c = b) : typeof c == "object" && (c = f.param(c, f.ajaxSettings.traditional), h = "POST"));
            var i = this;
            f.ajax({
                url: a,
                type: h,
                dataType: "html",
                data: c,
                complete: function (a, b, c) {
                    c = a.responseText, a.isResolved() && (a.done(function (a) {
                        c = a
                    }), i.html(g ? f("<div>").append(c.replace(bP, "")).find(g) : c)), d && i.each(d, [c, b, a])
                }
            });
            return this
        },
        serialize: function () {
            return f.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                return this.elements ? f.makeArray(this.elements) : this
            }).filter(function () {
                return this.name && !this.disabled && (this.checked || bQ.test(this.nodeName) || bK.test(this.type))
            }).map(function (a, b) {
                var c = f(this).val();
                return c == null ? null : f.isArray(c) ? f.map(c, function (a, c) {
                    return {
                        name: b.name,
                        value: a.replace(bH, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(bH, "\r\n")
                }
            }).get()
        }
    }), f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function (a, b) {
        f.fn[b] = function (a) {
            return this.bind(b, a)
        }
    }), f.each(["get", "post"], function (a, c) {
        f[c] = function (a, d, e, g) {
            f.isFunction(d) && (g = g || e, e = d, d = b);
            return f.ajax({
                type: c,
                url: a,
                data: d,
                success: e,
                dataType: g
            })
        }
    }), f.extend({
        getScript: function (a, c) {
            return f.get(a, b, c, "script")
        },
        getJSON: function (a, b, c) {
            return f.get(a, b, c, "json")
        },
        ajaxSetup: function (a, b) {
            b ? cb(a, f.ajaxSettings) : (b = a, a = f.ajaxSettings), cb(a, b);
            return a
        },
        ajaxSettings: {
            url: bX,
            isLocal: bL.test(bY[1]),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded",
            processData: !0,
            async: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": bZ
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": a.String,
                "text html": !0,
                "text json": f.parseJSON,
                "text xml": f.parseXML
            },
            flatOptions: {
                context: !0,
                url: !0
            }
        },
        ajaxPrefilter: b_(bV),
        ajaxTransport: b_(bW),
        ajax: function (a, c) {
            function w(a, c, l, m) {
                if (s !== 2) {
                    s = 2, q && clearTimeout(q), p = b, n = m || "", v.readyState = a > 0 ? 4 : 0;
                    var o, r, u, w = c,
                        x = l ? cd(d, v, l) : b,
                        y, z;
                    if (a >= 200 && a < 300 || a === 304) {
                        if (d.ifModified) {
                            if (y = v.getResponseHeader("Last-Modified")) f.lastModified[k] = y;
                            if (z = v.getResponseHeader("Etag")) f.etag[k] = z
                        }
                        if (a === 304) w = "notmodified", o = !0;
                        else try {
                            r = ce(d, x), w = "success", o = !0
                        } catch (A) {
                            w = "parsererror", u = A
                        }
                    } else {
                        u = w;
                        if (!w || a) w = "error", a < 0 && (a = 0)
                    }
                    v.status = a, v.statusText = "" + (c || w), o ? h.resolveWith(e, [r, w, v]) : h.rejectWith(e, [v, w, u]), v.statusCode(j), j = b, t && g.trigger("ajax" + (o ? "Success" : "Error"), [v, d, o ? r : u]), i.fireWith(e, [v, w]), t && (g.trigger("ajaxComplete", [v, d]), --f.active || f.event.trigger("ajaxStop"))
                }
            }
            typeof a == "object" && (c = a, a = b), c = c || {};
            var d = f.ajaxSetup({}, c),
                e = d.context || d,
                g = e !== d && (e.nodeType || e instanceof f) ? f(e) : f.event,
                h = f.Deferred(),
                i = f.Callbacks("once memory"),
                j = d.statusCode || {}, k, l = {}, m = {}, n, o, p, q, r, s = 0,
                t, u, v = {
                    readyState: 0,
                    setRequestHeader: function (a, b) {
                        if (!s) {
                            var c = a.toLowerCase();
                            a = m[c] = m[c] || a, l[a] = b
                        }
                        return this
                    },
                    getAllResponseHeaders: function () {
                        return s === 2 ? n : null
                    },
                    getResponseHeader: function (a) {
                        var c;
                        if (s === 2) {
                            if (!o) {
                                o = {};
                                while (c = bJ.exec(n)) o[c[1].toLowerCase()] = c[2]
                            }
                            c = o[a.toLowerCase()]
                        }
                        return c === b ? null : c
                    },
                    overrideMimeType: function (a) {
                        s || (d.mimeType = a);
                        return this
                    },
                    abort: function (a) {
                        a = a || "abort", p && p.abort(a), w(0, a);
                        return this
                    }
                };
            h.promise(v), v.success = v.done, v.error = v.fail, v.complete = i.add, v.statusCode = function (a) {
                if (a) {
                    var b;
                    if (s < 2) for (b in a) j[b] = [j[b], a[b]];
                    else b = a[v.status], v.then(b, b)
                }
                return this
            }, d.url = ((a || d.url) + "").replace(bI, "").replace(bN, bY[1] + "//"), d.dataTypes = f.trim(d.dataType || "*").toLowerCase().split(bR), d.crossDomain == null && (r = bT.exec(d.url.toLowerCase()), d.crossDomain = !(!r || r[1] == bY[1] && r[2] == bY[2] && (r[3] || (r[1] === "http:" ? 80 : 443)) == (bY[3] || (bY[1] === "http:" ? 80 : 443)))), d.data && d.processData && typeof d.data != "string" && (d.data = f.param(d.data, d.traditional)), ca(bV, d, c, v);
            if (s === 2) return !1;
            t = d.global, d.type = d.type.toUpperCase(), d.hasContent = !bM.test(d.type), t && f.active++ === 0 && f.event.trigger("ajaxStart");
            if (!d.hasContent) {
                d.data && (d.url += (bO.test(d.url) ? "&" : "?") + d.data, delete d.data), k = d.url;
                if (d.cache === !1) {
                    var x = f.now(),
                        y = d.url.replace(bS, "$1_=" + x);
                    d.url = y + (y === d.url ? (bO.test(d.url) ? "&" : "?") + "_=" + x : "")
                }
            }(d.data && d.hasContent && d.contentType !== !1 || c.contentType) && v.setRequestHeader("Content-Type", d.contentType), d.ifModified && (k = k || d.url, f.lastModified[k] && v.setRequestHeader("If-Modified-Since", f.lastModified[k]), f.etag[k] && v.setRequestHeader("If-None-Match", f.etag[k])), v.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + (d.dataTypes[0] !== "*" ? ", " + bZ + "; q=0.01" : "") : d.accepts["*"]);
            for (u in d.headers) v.setRequestHeader(u, d.headers[u]);
            if (d.beforeSend && (d.beforeSend.call(e, v, d) === !1 || s === 2)) {
                v.abort();
                return !1
            }
            for (u in {
                success: 1,
                error: 1,
                complete: 1
            }) v[u](d[u]);
            p = ca(bW, d, c, v);
            if (!p) w(-1, "No Transport");
            else {
                v.readyState = 1, t && g.trigger("ajaxSend", [v, d]), d.async && d.timeout > 0 && (q = setTimeout(function () {
                    v.abort("timeout")
                }, d.timeout));
                try {
                    s = 1, p.send(l, w)
                } catch (z) {
                    s < 2 ? w(-1, z) : f.error(z)
                }
            }
            return v
        },
        param: function (a, c) {
            var d = [],
                e = function (a, b) {
                    b = f.isFunction(b) ? b() : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
                };
            c === b && (c = f.ajaxSettings.traditional);
            if (f.isArray(a) || a.jquery && !f.isPlainObject(a)) f.each(a, function () {
                e(this.name, this.value)
            });
            else for (var g in a) cc(g, a[g], c, e);
            return d.join("&").replace(bF, "+")
        }
    }), f.extend({
        active: 0,
        lastModified: {},
        etag: {}
    });
    var cf = f.now(),
        cg = /(\=)\?(&|$)|\?\?/i;
    f.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            return f.expando + "_" + cf++
        }
    }), f.ajaxPrefilter("json jsonp", function (b, c, d) {
        var e = b.contentType === "application/x-www-form-urlencoded" && typeof b.data == "string";
        if (b.dataTypes[0] === "jsonp" || b.jsonp !== !1 && (cg.test(b.url) || e && cg.test(b.data))) {
            var g, h = b.jsonpCallback = f.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback,
                i = a[h],
                j = b.url,
                k = b.data,
                l = "$1" + h + "$2";
            b.jsonp !== !1 && (j = j.replace(cg, l), b.url === j && (e && (k = k.replace(cg, l)), b.data === k && (j += (/\?/.test(j) ? "&" : "?") + b.jsonp + "=" + h))), b.url = j, b.data = k, a[h] = function (a) {
                g = [a]
            }, d.always(function () {
                a[h] = i, g && f.isFunction(i) && a[h](g[0])
            }), b.converters["script json"] = function () {
                g || f.error(h + " was not called");
                return g[0]
            }, b.dataTypes[0] = "json";
            return "script"
        }
    }), f.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /javascript|ecmascript/
        },
        converters: {
            "text script": function (a) {
                f.globalEval(a);
                return a
            }
        }
    }), f.ajaxPrefilter("script", function (a) {
        a.cache === b && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
    }), f.ajaxTransport("script", function (a) {
        if (a.crossDomain) {
            var d, e = c.head || c.getElementsByTagName("head")[0] || c.documentElement;
            return {
                send: function (f, g) {
                    d = c.createElement("script"), d.async = "async", a.scriptCharset && (d.charset = a.scriptCharset), d.src = a.url, d.onload = d.onreadystatechange = function (a, c) {
                        if (c || !d.readyState || /loaded|complete/.test(d.readyState)) d.onload = d.onreadystatechange = null, e && d.parentNode && e.removeChild(d), d = b, c || g(200, "success")
                    }, e.insertBefore(d, e.firstChild)
                },
                abort: function () {
                    d && d.onload(0, 1)
                }
            }
        }
    });
    var ch = a.ActiveXObject ? function () {
            for (var a in cj) cj[a](0, 1)
        } : !1,
        ci = 0,
        cj;
    f.ajaxSettings.xhr = a.ActiveXObject ? function () {
        return !this.isLocal && ck() || cl()
    } : ck,
    function (a) {
        f.extend(f.support, {
            ajax: !! a,
            cors: !! a && "withCredentials" in a
        })
    }(f.ajaxSettings.xhr()), f.support.ajax && f.ajaxTransport(function (c) {
        if (!c.crossDomain || f.support.cors) {
            var d;
            return {
                send: function (e, g) {
                    var h = c.xhr(),
                        i, j;
                    c.username ? h.open(c.type, c.url, c.async, c.username, c.password) : h.open(c.type, c.url, c.async);
                    if (c.xhrFields) for (j in c.xhrFields) h[j] = c.xhrFields[j];
                    c.mimeType && h.overrideMimeType && h.overrideMimeType(c.mimeType), !c.crossDomain && !e["X-Requested-With"] && (e["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (j in e) h.setRequestHeader(j, e[j])
                    } catch (k) {}
                    h.send(c.hasContent && c.data || null), d = function (a, e) {
                        var j, k, l, m, n;
                        try {
                            if (d && (e || h.readyState === 4)) {
                                d = b, i && (h.onreadystatechange = f.noop, ch && delete cj[i]);
                                if (e) h.readyState !== 4 && h.abort();
                                else {
                                    j = h.status, l = h.getAllResponseHeaders(), m = {}, n = h.responseXML, n && n.documentElement && (m.xml = n), m.text = h.responseText;
                                    try {
                                        k = h.statusText
                                    } catch (o) {
                                        k = ""
                                    }!j && c.isLocal && !c.crossDomain ? j = m.text ? 200 : 404 : j === 1223 && (j = 204)
                                }
                            }
                        } catch (p) {
                            e || g(-1, p)
                        }
                        m && g(j, k, m, l)
                    }, !c.async || h.readyState === 4 ? d() : (i = ++ci, ch && (cj || (cj = {}, f(a).unload(ch)), cj[i] = d), h.onreadystatechange = d)
                },
                abort: function () {
                    d && d(0, 1)
                }
            }
        }
    });
    var cm = {}, cn, co, cp = /^(?:toggle|show|hide)$/,
        cq = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,
        cr, cs = [
            ["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"],
            ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"],
            ["opacity"]
        ],
        ct;
    f.fn.extend({
        show: function (a, b, c) {
            var d, e;
            if (a || a === 0) return this.animate(cw("show", 3), a, b, c);
            for (var g = 0, h = this.length; g < h; g++) d = this[g], d.style && (e = d.style.display, !f._data(d, "olddisplay") && e === "none" && (e = d.style.display = ""), e === "" && f.css(d, "display") === "none" && f._data(d, "olddisplay", cx(d.nodeName)));
            for (g = 0; g < h; g++) {
                d = this[g];
                if (d.style) {
                    e = d.style.display;
                    if (e === "" || e === "none") d.style.display = f._data(d, "olddisplay") || ""
                }
            }
            return this
        },
        hide: function (a, b, c) {
            if (a || a === 0) return this.animate(cw("hide", 3), a, b, c);
            var d, e, g = 0,
                h = this.length;
            for (; g < h; g++) d = this[g], d.style && (e = f.css(d, "display"), e !== "none" && !f._data(d, "olddisplay") && f._data(d, "olddisplay", e));
            for (g = 0; g < h; g++) this[g].style && (this[g].style.display = "none");
            return this
        },
        _toggle: f.fn.toggle,
        toggle: function (a, b, c) {
            var d = typeof a == "boolean";
            f.isFunction(a) && f.isFunction(b) ? this._toggle.apply(this, arguments) : a == null || d ? this.each(function () {
                var b = d ? a : f(this).is(":hidden");
                f(this)[b ? "show" : "hide"]()
            }) : this.animate(cw("toggle", 3), a, b, c);
            return this
        },
        fadeTo: function (a, b, c, d) {
            return this.filter(":hidden").css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, d)
        },
        animate: function (a, b, c, d) {
            function g() {
                e.queue === !1 && f._mark(this);
                var b = f.extend({}, e),
                    c = this.nodeType === 1,
                    d = c && f(this).is(":hidden"),
                    g, h, i, j, k, l, m, n, o;
                b.animatedProperties = {};
                for (i in a) {
                    g = f.camelCase(i), i !== g && (a[g] = a[i], delete a[i]), h = a[g], f.isArray(h) ? (b.animatedProperties[g] = h[1], h = a[g] = h[0]) : b.animatedProperties[g] = b.specialEasing && b.specialEasing[g] || b.easing || "swing";
                    if (h === "hide" && d || h === "show" && !d) return b.complete.call(this);
                    c && (g === "height" || g === "width") && (b.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY], f.css(this, "display") === "inline" && f.css(this, "float") === "none" && (!f.support.inlineBlockNeedsLayout || cx(this.nodeName) === "inline" ? this.style.display = "inline-block" : this.style.zoom = 1))
                }
                b.overflow != null && (this.style.overflow = "hidden");
                for (i in a) j = new f.fx(this, b, i), h = a[i], cp.test(h) ? (o = f._data(this, "toggle" + i) || (h === "toggle" ? d ? "show" : "hide" : 0), o ? (f._data(this, "toggle" + i, o === "show" ? "hide" : "show"), j[o]()) : j[h]()) : (k = cq.exec(h), l = j.cur(), k ? (m = parseFloat(k[2]), n = k[3] || (f.cssNumber[i] ? "" : "px"), n !== "px" && (f.style(this, i, (m || 1) + n), l = (m || 1) / j.cur() * l, f.style(this, i, l + n)), k[1] && (m = (k[1] === "-=" ? -1 : 1) * m + l), j.custom(l, m, n)) : j.custom(l, h, ""));
                return !0
            }
            var e = f.speed(b, c, d);
            if (f.isEmptyObject(a)) return this.each(e.complete, [!1]);
            a = f.extend({}, a);
            return e.queue === !1 ? this.each(g) : this.queue(e.queue, g)
        },
        stop: function (a, c, d) {
            typeof a != "string" && (d = c, c = a, a = b), c && a !== !1 && this.queue(a || "fx", []);
            return this.each(function () {
                function h(a, b, c) {
                    var e = b[c];
                    f.removeData(a, c, !0), e.stop(d)
                }
                var b, c = !1,
                    e = f.timers,
                    g = f._data(this);
                d || f._unmark(!0, this);
                if (a == null) for (b in g) g[b].stop && b.indexOf(".run") === b.length - 4 && h(this, g, b);
                else g[b = a + ".run"] && g[b].stop && h(this, g, b);
                for (b = e.length; b--;) e[b].elem === this && (a == null || e[b].queue === a) && (d ? e[b](!0) : e[b].saveState(), c = !0, e.splice(b, 1));
                (!d || !c) && f.dequeue(this, a)
            })
        }
    }), f.each({
        slideDown: cw("show", 1),
        slideUp: cw("hide", 1),
        slideToggle: cw("toggle", 1),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function (a, b) {
        f.fn[a] = function (a, c, d) {
            return this.animate(b, a, c, d)
        }
    }), f.extend({
        speed: function (a, b, c) {
            var d = a && typeof a == "object" ? f.extend({}, a) : {
                complete: c || !c && b || f.isFunction(a) && a,
                duration: a,
                easing: c && b || b && !f.isFunction(b) && b
            };
            d.duration = f.fx.off ? 0 : typeof d.duration == "number" ? d.duration : d.duration in f.fx.speeds ? f.fx.speeds[d.duration] : f.fx.speeds._default;
            if (d.queue == null || d.queue === !0) d.queue = "fx";
            d.old = d.complete, d.complete = function (a) {
                f.isFunction(d.old) && d.old.call(this), d.queue ? f.dequeue(this, d.queue) : a !== !1 && f._unmark(this)
            };
            return d
        },
        easing: {
            linear: function (a, b, c, d) {
                return c + d * a
            },
            swing: function (a, b, c, d) {
                return (-Math.cos(a * Math.PI) / 2 + .5) * d + c
            }
        },
        timers: [],
        fx: function (a, b, c) {
            this.options = b, this.elem = a, this.prop = c, b.orig = b.orig || {}
        }
    }), f.fx.prototype = {
        update: function () {
            this.options.step && this.options.step.call(this.elem, this.now, this), (f.fx.step[this.prop] || f.fx.step._default)(this)
        },
        cur: function () {
            if (this.elem[this.prop] != null && (!this.elem.style || this.elem.style[this.prop] == null)) return this.elem[this.prop];
            var a, b = f.css(this.elem, this.prop);
            return isNaN(a = parseFloat(b)) ? !b || b === "auto" ? 0 : b : a
        },
        custom: function (a, c, d) {
            function h(a) {
                return e.step(a)
            }
            var e = this,
                g = f.fx;
            this.startTime = ct || cu(), this.end = c, this.now = this.start = a, this.pos = this.state = 0, this.unit = d || this.unit || (f.cssNumber[this.prop] ? "" : "px"), h.queue = this.options.queue, h.elem = this.elem, h.saveState = function () {
                e.options.hide && f._data(e.elem, "fxshow" + e.prop) === b && f._data(e.elem, "fxshow" + e.prop, e.start)
            }, h() && f.timers.push(h) && !cr && (cr = setInterval(g.tick, g.interval))
        },
        show: function () {
            var a = f._data(this.elem, "fxshow" + this.prop);
            this.options.orig[this.prop] = a || f.style(this.elem, this.prop), this.options.show = !0, a !== b ? this.custom(this.cur(), a) : this.custom(this.prop === "width" || this.prop === "height" ? 1 : 0, this.cur()), f(this.elem).show()
        },
        hide: function () {
            this.options.orig[this.prop] = f._data(this.elem, "fxshow" + this.prop) || f.style(this.elem, this.prop), this.options.hide = !0, this.custom(this.cur(), 0)
        },
        step: function (a) {
            var b, c, d, e = ct || cu(),
                g = !0,
                h = this.elem,
                i = this.options;
            if (a || e >= i.duration + this.startTime) {
                this.now = this.end, this.pos = this.state = 1, this.update(), i.animatedProperties[this.prop] = !0;
                for (b in i.animatedProperties) i.animatedProperties[b] !== !0 && (g = !1);
                if (g) {
                    i.overflow != null && !f.support.shrinkWrapBlocks && f.each(["", "X", "Y"], function (a, b) {
                        h.style["overflow" + b] = i.overflow[a]
                    }), i.hide && f(h).hide();
                    if (i.hide || i.show) for (b in i.animatedProperties) f.style(h, b, i.orig[b]), f.removeData(h, "fxshow" + b, !0), f.removeData(h, "toggle" + b, !0);
                    d = i.complete, d && (i.complete = !1, d.call(h))
                }
                return !1
            }
            i.duration == Infinity ? this.now = e : (c = e - this.startTime, this.state = c / i.duration, this.pos = f.easing[i.animatedProperties[this.prop]](this.state, c, 0, 1, i.duration), this.now = this.start + (this.end - this.start) * this.pos), this.update();
            return !0
        }
    }, f.extend(f.fx, {
        tick: function () {
            var a, b = f.timers,
                c = 0;
            for (; c < b.length; c++) a = b[c], !a() && b[c] === a && b.splice(c--, 1);
            b.length || f.fx.stop()
        },
        interval: 13,
        stop: function () {
            clearInterval(cr), cr = null
        },
        speeds: {
            slow: 600,
            fast: 200,
            _default: 400
        },
        step: {
            opacity: function (a) {
                f.style(a.elem, "opacity", a.now)
            },
            _default: function (a) {
                a.elem.style && a.elem.style[a.prop] != null ? a.elem.style[a.prop] = a.now + a.unit : a.elem[a.prop] = a.now
            }
        }
    }), f.each(["width", "height"], function (a, b) {
        f.fx.step[b] = function (a) {
            f.style(a.elem, b, Math.max(0, a.now))
        }
    }), f.expr && f.expr.filters && (f.expr.filters.animated = function (a) {
        return f.grep(f.timers, function (b) {
            return a === b.elem
        }).length
    });
    var cy = /^t(?:able|d|h)$/i,
        cz = /^(?:body|html)$/i;
    "getBoundingClientRect" in c.documentElement ? f.fn.offset = function (a) {
        var b = this[0],
            c;
        if (a) return this.each(function (b) {
            f.offset.setOffset(this, a, b)
        });
        if (!b || !b.ownerDocument) return null;
        if (b === b.ownerDocument.body) return f.offset.bodyOffset(b);
        try {
            c = b.getBoundingClientRect()
        } catch (d) {}
        var e = b.ownerDocument,
            g = e.documentElement;
        if (!c || !f.contains(g, b)) return c ? {
            top: c.top,
            left: c.left
        } : {
            top: 0,
            left: 0
        };
        var h = e.body,
            i = cA(e),
            j = g.clientTop || h.clientTop || 0,
            k = g.clientLeft || h.clientLeft || 0,
            l = i.pageYOffset || f.support.boxModel && g.scrollTop || h.scrollTop,
            m = i.pageXOffset || f.support.boxModel && g.scrollLeft || h.scrollLeft,
            n = c.top + l - j,
            o = c.left + m - k;
        return {
            top: n,
            left: o
        }
    } : f.fn.offset = function (a) {
        var b = this[0];
        if (a) return this.each(function (b) {
            f.offset.setOffset(this, a, b)
        });
        if (!b || !b.ownerDocument) return null;
        if (b === b.ownerDocument.body) return f.offset.bodyOffset(b);
        var c, d = b.offsetParent,
            e = b,
            g = b.ownerDocument,
            h = g.documentElement,
            i = g.body,
            j = g.defaultView,
            k = j ? j.getComputedStyle(b, null) : b.currentStyle,
            l = b.offsetTop,
            m = b.offsetLeft;
        while ((b = b.parentNode) && b !== i && b !== h) {
            if (f.support.fixedPosition && k.position === "fixed") break;
            c = j ? j.getComputedStyle(b, null) : b.currentStyle, l -= b.scrollTop, m -= b.scrollLeft, b === d && (l += b.offsetTop, m += b.offsetLeft, f.support.doesNotAddBorder && (!f.support.doesAddBorderForTableAndCells || !cy.test(b.nodeName)) && (l += parseFloat(c.borderTopWidth) || 0, m += parseFloat(c.borderLeftWidth) || 0), e = d, d = b.offsetParent), f.support.subtractsBorderForOverflowNotVisible && c.overflow !== "visible" && (l += parseFloat(c.borderTopWidth) || 0, m += parseFloat(c.borderLeftWidth) || 0), k = c
        }
        if (k.position === "relative" || k.position === "static") l += i.offsetTop, m += i.offsetLeft;
        f.support.fixedPosition && k.position === "fixed" && (l += Math.max(h.scrollTop, i.scrollTop), m += Math.max(h.scrollLeft, i.scrollLeft));
        return {
            top: l,
            left: m
        }
    }, f.offset = {
        bodyOffset: function (a) {
            var b = a.offsetTop,
                c = a.offsetLeft;
            f.support.doesNotIncludeMarginInBodyOffset && (b += parseFloat(f.css(a, "marginTop")) || 0, c += parseFloat(f.css(a, "marginLeft")) || 0);
            return {
                top: b,
                left: c
            }
        },
        setOffset: function (a, b, c) {
            var d = f.css(a, "position");
            d === "static" && (a.style.position = "relative");
            var e = f(a),
                g = e.offset(),
                h = f.css(a, "top"),
                i = f.css(a, "left"),
                j = (d === "absolute" || d === "fixed") && f.inArray("auto", [h, i]) > -1,
                k = {}, l = {}, m, n;
            j ? (l = e.position(), m = l.top, n = l.left) : (m = parseFloat(h) || 0, n = parseFloat(i) || 0), f.isFunction(b) && (b = b.call(a, c, g)), b.top != null && (k.top = b.top - g.top + m), b.left != null && (k.left = b.left - g.left + n), "using" in b ? b.using.call(a, k) : e.css(k)
        }
    }, f.fn.extend({
        position: function () {
            if (!this[0]) return null;
            var a = this[0],
                b = this.offsetParent(),
                c = this.offset(),
                d = cz.test(b[0].nodeName) ? {
                    top: 0,
                    left: 0
                } : b.offset();
            c.top -= parseFloat(f.css(a, "marginTop")) || 0, c.left -= parseFloat(f.css(a, "marginLeft")) || 0, d.top += parseFloat(f.css(b[0], "borderTopWidth")) || 0, d.left += parseFloat(f.css(b[0], "borderLeftWidth")) || 0;
            return {
                top: c.top - d.top,
                left: c.left - d.left
            }
        },
        offsetParent: function () {
            return this.map(function () {
                var a = this.offsetParent || c.body;
                while (a && !cz.test(a.nodeName) && f.css(a, "position") === "static") a = a.offsetParent;
                return a
            })
        }
    }), f.each(["Left", "Top"], function (a, c) {
        var d = "scroll" + c;
        f.fn[d] = function (c) {
            var e, g;
            if (c === b) {
                e = this[0];
                if (!e) return null;
                g = cA(e);
                return g ? "pageXOffset" in g ? g[a ? "pageYOffset" : "pageXOffset"] : f.support.boxModel && g.document.documentElement[d] || g.document.body[d] : e[d]
            }
            return this.each(function () {
                g = cA(this), g ? g.scrollTo(a ? f(g).scrollLeft() : c, a ? c : f(g).scrollTop()) : this[d] = c
            })
        }
    }), f.each(["Height", "Width"], function (a, c) {
        var d = c.toLowerCase();
        f.fn["inner" + c] = function () {
            var a = this[0];
            return a ? a.style ? parseFloat(f.css(a, d, "padding")) : this[d]() : null
        }, f.fn["outer" + c] = function (a) {
            var b = this[0];
            return b ? b.style ? parseFloat(f.css(b, d, a ? "margin" : "border")) : this[d]() : null
        }, f.fn[d] = function (a) {
            var e = this[0];
            if (!e) return a == null ? null : this;
            if (f.isFunction(a)) return this.each(function (b) {
                var c = f(this);
                c[d](a.call(this, b, c[d]()))
            });
            if (f.isWindow(e)) {
                var g = e.document.documentElement["client" + c],
                    h = e.document.body;
                return e.document.compatMode === "CSS1Compat" && g || h && h["client" + c] || g
            }
            if (e.nodeType === 9) return Math.max(e.documentElement["client" + c], e.body["scroll" + c], e.documentElement["scroll" + c], e.body["offset" + c], e.documentElement["offset" + c]);
            if (a === b) {
                var i = f.css(e, d),
                    j = parseFloat(i);
                return f.isNumeric(j) ? j : i
            }
            return this.css(d, typeof a == "string" ? a : a + "px")
        }
    }), a.jQuery = a.$ = f
})(window);
/*
 jCanvas
Copyright 2012, Caleb Evans
Licensed under the MIT license
*/

(function (d, V, aa, O, ba, s, D, e, t) {
    function B() {}
    function E(c) {
        c ? x(ca, c) : E.prefs = ca = B.prototype = x({}, Q);
        return this
    }
    function I(c, a) {
        c.fillStyle = a.fillStyle;
        c.strokeStyle = a.strokeStyle;
        c.lineWidth = a.strokeWidth;
        a.rounded ? (c.lineCap = "round", c.lineJoin = "round") : (c.lineCap = a.strokeCap, c.lineJoin = a.strokeJoin, c.miterLimit = a.miterLimit);
        c.shadowOffsetX = a.shadowX;
        c.shadowOffsetY = a.shadowY;
        c.shadowBlur = a.shadowBlur;
        c.shadowColor = a.shadowColor;
        c.globalAlpha = a.opacity;
        c.globalCompositeOperation = a.compositing
    }
    function y(c) {
        return c && c.getContext ? c.getContext("2d") : e
    }
    function L(c, a, b) {
        b.closed && a.closePath();
        a.fill();
        "transparent" !== b.fillStyle && (a.shadowColor = "transparent");
        0 !== b.strokeWidth && a.stroke();
        b.closed || a.closePath();
        a.restore();
        b.mask && (b.autosave && (a.save(), c = J(c), c.transforms.mask = s, c.savedTransforms = x({}, c.transforms)), a.clip())
    }
    function da(c, a, b) {
        a._toRad = a.inDegrees ? C / 180 : 1;
        c.translate(a.x, a.y);
        c.rotate(a.rotate * a._toRad);
        c.translate(-a.x, -a.y);
        b.rotate += a.rotate * a._toRad
    }
    function ea(c, a, b) {
        1 !== a.scale && (a.scaleX = a.scaleY = a.scale);
        c.translate(a.x, a.y);
        c.scale(a.scaleX, a.scaleY);
        c.translate(-a.x, -a.y);
        b.scaleX *= a.scaleX;
        b.scaleY *= a.scaleY
    }
    function fa(c, a, b) {
        a.translate && (a.translateX = a.translateY = a.translate);
        c.translate(a.translateX, a.translateY);
        b.translateX += a.translateX;
        b.translateY += a.translateY
    }
    function H(c, a, b, f) {
        a._toRad = a.inDegrees ? C / 180 : 1;
        c.save();
        f === t && (f = b);
        !a.fromCenter && !a._centered && (a.x += b / 2, a.y += f / 2, a._centered = s);
        a.rotate && da(c, a, {});
        (1 !== a.scale || 1 !== a.scaleX || 1 !== a.scaleY) && ea(c, a, {});
        (a.translate || a.translateX || a.translateY) && fa(c, a, {})
    }
    function W(c) {
        c.draggable && (c.translateX += c.x, c.translateY += c.y)
    }
    function J(c) {
        var a;
        F.canvas === c ? a = F.data : (a = d.data(c, "jCanvas"), a || (a = {
            layers: [],
            intersects: [],
            drag: {},
            event: {},
            transforms: {
                rotate: 0,
                scaleX: 1,
                scaleY: 1,
                translateX: 0,
                translateY: 0,
                mask: D
            }
        }, a.savedTransforms = x({}, a.transforms), d.data(c, "jCanvas", a)), F.canvas = c, F.data = a);
        return a
    }
    function ga(c, a, b) {
        b && b.visible && (b.method === d.fn.draw ? b.fn.call(c[0], a) : b.method && b.method.call(c, b))
    }
    function G(c,
    a, b, f) {
        var i, g, z = "function" === typeof b,
            A, b = b || {};
        a._args = b;
        if (b.layer && !b._layer) {
            i = d(c);
            a = i.getLayers();
            z && (b = {
                method: d.fn.draw,
                fn: b
            });
            b = x(new B, b);
            if (!z) {
                b.method = d.fn[b.method] || f;
                A = J(c);
                for (g in E.events) E.events.hasOwnProperty(g) && b[g] && (g = X(g), E.events[g](i, A), b._event = s);
                if (b.draggable || b.cursor) {
                    b._event = s;
                    c = ["mousedown", "mousemove", "mouseup"];
                    for (f = 0; f < c.length; f += 1) g = X(c[f]), E.events[g](i, A);
                    A.mouseout || (i.bind("mouseout.jCanvas", function () {
                        A.drag = {};
                        i.drawLayers()
                    }), A.mouseout = s)
                }
            }
            b.layer = s;
            b._layer = s;
            b.index === t && (b.index = a.length);
            a.splice(b.index, 0, b)
        }
        return b
    }
    function ha(c) {
        var a;
        for (a = 0; a < N.length; a += 1) c[N[a]] = c["_" + N[a]]
    }
    function ia(c, a) {
        var b;
        for (b = 0; b < N.length; b += 1) c["_" + N[b]] = c[N[b]], Y[N[b]] = 1, a && delete c[N[b]]
    }
    function ja(c) {
        var a, b, f = [],
            i = 1;
        c.match(/^#?\w+$/i) && ("transparent" === c && (c = "rgba(0,0,0,0)"), b = V.head, a = b.style.color, b.style.color = c, c = d.css(b, "color"), b.style.color = a);
        c.match(/^rgb/i) && (f = c.match(/\d+/gi), c.match(/%/gi) && (i = 2.55), f[0] *= i, f[1] *= i, f[2] *= i, f[3] = f[3] !== t ? ba(f[3]) : 1);
        return f
    }
    function ma(c) {
        var a = 3,
            b;
        "object" !== typeof c.start && (c.start = ja(c.start), c.end = ja(c.end));
        c.now = [];
        if (1 !== c.start[3] || 1 !== c.end[3]) a = 4;
        for (b = 0; b < a; b += 1) c.now[b] = c.start[b] + (c.end[b] - c.start[b]) * c.pos, 3 > b && (c.now[b] = R(c.now[b]));
        1 !== c.start[3] || 1 !== c.end[3] ? c.now = "rgba(" + c.now.join(",") + ")" : (c.now.slice(0, 3), c.now = "rgb(" + c.now.join(",") + ")");
        c.elem.nodeName ? c.elem.style[c.prop] = c.now : c.elem[c.prop] = c.now
    }
    function X(c) {
        "ontouchstart" in window && Z[c] && (c = Z[c]);
        return c
    }
    function M(c) {
        E.events[c] = function (a, b) {
            c = X(c);
            var f = "mouseover" === c || "mouseout" === c ? "mousemove" : c,
                i = b.event;
            b[f] || (a.bind(f + ".jCanvas", function (b) {
                i.x = b.offsetX;
                i.y = b.offsetY;
                i.type = f;
                i.event = b;
                a.drawLayers(s);
                b.preventDefault()
            }), b[f] = s)
        }
    }
    function K(c, a, b) {
        var f, i, g, d, b = b._args;
        b._event && (c = J(c), f = c.event, a = a.isPointInPath(f.x, f.y), i = c.transforms, b.eventX = b.mouseX = f.x, b.eventY = b.mouseY = f.y, b.event = f.event, d = c.transforms.rotate, f = b.eventX, g = b.eventY, b._eventX = f * P(-d) - g * S(-d), b._eventY = g * P(-d) + f * S(-d), b._eventX /= i.scaleX,
        b._eventY /= i.scaleY, !a && (b._hovered && !b._fired) && (b._mousedout = s), a && c.intersects.push(b))
    }
    function T(c, a, b, f, i) {
        a.save();
        a.beginPath();
        a.rect(f[0], i[0], f[1] - f[0], i[1] - i[0]);
        a.clip();
        H(a, b, 0);
        a.beginPath()
    }
    function U(c, a, b) {
        b._event && K(c, a, b);
        a.restore();
        L(c, a, b)
    }
    function ka(c, a, b, f, i) {
        var g = /\b(\d*\.?\d*)\w\w\b/gi,
            z;
        if (F.text === f.text && F.font === f.font && F.maxWidth === f.maxWidth && F.lineHeight === f.lineHeight) f.width = F.width, f.height = F.height;
        else if (!a) {
            f.width = b.measureText(i[0]).width;
            for (a = 1; a < i.length; a += 1) z = b.measureText(i[a]).width, z > f.width && (f.width = z);
            b = c.style.fontSize;
            if (a = f.font.match(g)) c.style.fontSize = f.font.match(g)[0];
            f.height = ba(d.css(c, "fontSize")) * i.length * f.lineHeight;
            c.style.fontSize = b
        }
    }
    var Q, ca, x = d.extend,
        R = O.round,
        C = O.PI,
        S = O.sin,
        P = O.cos,
        na = d.event.fix,
        Z, $, la, F = {}, N, Y;
    d.fn.jCanvas = E;
    E.events = {};
    Q = {
        align: "center",
        autosave: s,
        baseline: "middle",
        bringToFront: D,
        ccw: D,
        closed: D,
        compositing: "source-over",
        cornerRadius: 0,
        cropFromCenter: s,
        disableDrag: D,
        disableEvents: D,
        domain: e,
        draggable: D,
        each: e,
        end: 360,
        fillStyle: "transparent",
        font: "12pt sans-serif",
        fromCenter: s,
        fn: e,
        graph: "y",
        height: e,
        inDegrees: s,
        lineHeight: 1,
        load: e,
        mask: D,
        maxWidth: e,
        method: e,
        miterLimit: 10,
        opacity: 1,
        projection: 0,
        r1: e,
        r2: e,
        radius: 0,
        range: e,
        repeat: "repeat",
        rotate: 0,
        rounded: D,
        scale: 1,
        scaleX: 1,
        scaleY: 1,
        shadowBlur: 0,
        shadowColor: "transparent",
        shadowX: 0,
        shadowY: 0,
        sHeight: e,
        sides: 3,
        source: "",
        start: 0,
        strokeCap: "butt",
        strokeJoin: "miter",
        strokeStyle: "transparent",
        strokeWidth: 1,
        sWidth: e,
        sx: e,
        sy: e,
        text: "",
        translate: 0,
        translateX: 0,
        translateY: 0,
        type: e,
        visible: s,
        width: e,
        x: 0,
        y: 0
    };
    E();
    E.extend = function (c) {
        E.defaults = Q = x(Q, c.props);
        E();
        c.name && (d.fn[c.name] = function b(f) {
            var i, g, d, A = x(new B, f);
            for (g = 0; g < this.length; g += 1) if (i = this[g], d = y(i)) f = G(i, A, f, b), I(d, A), c.fn.call(i, d, A);
            return this
        });
        return d.fn[c.name]
    };
    d.fn.getLayers = function () {
        var c = this[0];
        return !c || !c.getContext ? [] : J(c).layers
    };
    d.fn.getLayer = function (c) {
        var a = this.getLayers(),
            b = d.type(c),
            f, i;
        if (c && c.layer) f = c;
        else if ("number" === b) f = a[c];
        else for (i = 0; i < a.length; i += 1) if (a[i].index = i, a[i].name === c || "regexp" === b && a[i].name.match(c)) {
            f = a[i];
            break
        }
        return f
    };
    d.fn.setLayer = function (c, a) {
        var b, f;
        for (b = 0; b < this.length; b += 1)(f = d(this[b]).getLayer(c)) && x(f, a);
        return this
    };
    d.fn.moveLayer = function (c, a) {
        var b, f, i;
        for (f = 0; f < this.length; f += 1) if (b = d(this[f]), i = b.getLayers(), b = b.getLayer(c)) i.splice(b.index, 1), i.splice(a, 0, b), b.index = a;
        return this
    };
    d.fn.removeLayer = function (c) {
        var a, b, f;
        for (b = 0; b < this.length; b += 1) a = d(this[b]), f = a.getLayers(), (a = a.getLayer(c)) && f.splice(a.index, 1);
        return this
    };
    d.fn.removeLayers = function () {
        var c, a;
        for (c = 0; c < this.length; c += 1) a = d(this[c]).getLayers(), a.length = 0;
        return this
    };
    d.fn.getLayerGroup = function (c) {
        var a = this.getLayers(),
            b = d.type(c),
            f = [],
            i;
        if ("array" === b) return c;
        for (i = 0; i < a.length; i += 1) a[i].index = i, (a[i].group === c || "regexp" === b && a[i].group.match(c)) && f.push(a[i]);
        return f
    };
    d.fn.setLayerGroup = function (c, a) {
        var b, f, i;
        for (f = 0; f < this.length; f += 1) {
            b = d(this[f]);
            b = b.getLayerGroup(c);
            for (i = 0; i < b.length; i += 1) x(b[i], a)
        }
        return this
    };
    d.fn.removeLayerGroup = function (c) {
        var a,
        b, f = d.type(c),
            i;
        if (c !== t) for (b = 0; b < this.length; b += 1) {
            a = d(this[b]);
            a = a.getLayers();
            for (i = 0; i < a.length; i += 1) if (a[i].index = i, a[i].group === c || "regexp" === f && a[i].group.match(c)) a.splice(i, 1), i -= 1
        }
        return this
    };
    d.fn.drawLayer = function (c) {
        var a, b, f, i;
        for (a = 0; a < this.length; a += 1) f = d(this[a]), b = y(this[a]), i = f.getLayer(c), ga(f, b, i);
        return this
    };
    d.fn.drawLayers = function (c) {
        var a, b, f, i, g, z, A, o, u;
        for (b = 0; b < this.length; b += 1) if (a = d(this[b]), f = y(this[b])) {
            J(this[b]);
            a.clearCanvas();
            F.canvas === this[b] ? A = F.data : (A = J(this[b]),
            F.canvas = this[b], F.data = A);
            i = A.layers;
            for (z = 0; z < i.length; z += 1) if (g = i[z], g.index = z, c && (g._fired = D), g._event = !g.disableEvents, ga(a, f, g), g._mousedout) g._mousedout = D, g._fired = s, g._hovered = D, g.mouseout && g.mouseout.call(this[b], g), g.cursor && g._cursor && a.css({
                cursor: g._cursor
            });
            g = A.intersects[A.intersects.length - 1] || {};
            f = A.event;
            z = f.type;
            g[z] || $[z] && (z = $[z]);
            u = g[z];
            o = A.drag;
            if (g._event) {
                if ((g.mouseover || g.mouseout || g.cursor) && !g._hovered && !g._fired) g._fired = s, g._hovered = s, g.mouseover && g.mouseover.call(this[b],
                g), g.cursor && (g._cursor = a.css("cursor"), a.css({
                    cursor: g.cursor
                }));
                u && !g._fired && (g._fired = s, u.call(this[b], g), f.type = e);
                if (g.draggable && !g.disableDrag && ("mousedown" === z || "touchstart" === z)) g.bringToFront && (i.splice(g.index, 1), g.index = i.push(g)), o.layer = g, o.dragging = s, o.startX = g.x, o.startY = g.y, o.endX = g._eventX, o.endY = g._eventY, g.dragstart && g.dragstart.call(this[b], g)
            }
            if (o.layer) {
                if (o.dragging && ("mouseup" === z || "touchend" === z)) o.layer.dragstop && o.layer.dragstop.call(this[b], o.layer), A.drag = {};
                if (o.dragging && ("mousemove" === z || "touchmove" === z)) o.layer.x = o.layer._eventX - (o.endX - o.startX), o.layer.y = o.layer._eventY - (o.endY - o.startY), o.layer.drag && o.layer.drag.call(this[b], o.layer)
            }
        }
        A.intersects = [];
        return this
    };
    d.fn.addLayer = function (c) {
        var a, b, c = c || {};
        for (a = 0; a < this.length; a += 1) if (b = y(this[a])) c.layer = s, c.type && !c.method && (c.method = d.fn[la[c.type]]), c = G(this[a], {}, c, c.method);
        return this
    };
    N = ["width", "height", "opacity", "lineHeight"];
    Y = {};
    d.fn.animateLayer = function () {
        function c(a, b) {
            return function () {
                ha(b);
                a.drawLayers();
                g[4] && g[4].call(a[0], b)
            }
        }
        function a(a, b) {
            return function (c, f) {
                ha(b);
                a.drawLayers();
                g[5] && g[5].call(a[0], c, f, b)
            }
        }
        var b, f, i, g = [].slice.call(arguments, 0);
        "object" === typeof g[0] && !g[0].layer && g.unshift(0);
        "object" === typeof g[2] ? (g.splice(2, 0, g[2].duration || e), g.splice(3, 0, g[3].easing || e), g.splice(4, 0, g[4].complete || e), g.splice(5, 0, g[5].step || e)) : (g[2] === t ? (g.splice(2, 0, e), g.splice(3, 0, e), g.splice(4, 0, e)) : "function" === typeof g[2] && (g.splice(2, 0, e), g.splice(3, 0, e)), g[3] === t) ? (g[3] = e, g.splice(4,
        0, e)) : "function" === typeof g[3] && g.splice(3, 0, e);
        g[1] = x({}, g[1]);
        for (f = 0; f < this.length; f += 1) if (b = d(this[f]), i = y(this[f])) if (J(this[f]), (i = b.getLayer(g[0])) && i.method !== d.fn.draw) ia(i), ia(g[1], s), i.style = Y, d(i).animate(g[1], {
            duration: g[2],
            easing: d.easing[g[3]] ? g[3] : e,
            complete: c(b, i),
            step: a(b, i)
        });
        return this
    };
    d.fn.animateLayerGroup = function (c) {
        var a, b, f = [].slice.call(arguments, 0),
            i, g;
        for (b = 0; b < this.length; b += 1) {
            a = d(this[b]);
            i = a.getLayerGroup(c);
            for (g = 0; g < i.length; g += 1) a.animateLayer.apply(a, [i[g]].concat(f.slice(1)))
        }
    };
    d.fn.delayLayer = function (c, a) {
        var b, f, a = a || 0;
        for (b = 0; b < this.length; b += 1) f = d(this[b]).getLayer(c), d(f).delay(a);
        return this
    };
    d.fn.delayLayerGroup = function (c, a) {
        var b, f, i, g, a = a || 0;
        for (f = 0; f < this.length; f += 1) {
            b = d(this[f]);
            i = b.getLayerGroup(c);
            for (g = 0; g < i.length; g += 1) b.delayLayer.call(b, i[g], a)
        }
    };
    d.fn.stopLayer = function (c, a) {
        var b, f;
        for (b = 0; b < this.length; b += 1) f = d(this[b]).getLayer(c), d(f).stop(a);
        return this
    };
    d.fn.stopLayerGroup = function (c, a) {
        var b, f, i, g;
        for (f = 0; f < this.length; f += 1) {
            b = d(this[f]);
            i = b.getLayerGroup(c);
            for (g = 0; g < i.length; g += 1) b.stopLayer.call(b, i[g], a)
        }
    };
    (function (c) {
        var a;
        for (a = 0; a < c.length; a += 1) d.fx.step[c[a]] = ma
    })("color backgroundColor borderColor borderTopColor borderRightColor borderBottomColor borderLeftColor fillStyle outlineColor strokeStyle shadowColor".split(" "));
    Z = {
        mousedown: "touchstart",
        mouseup: "touchend",
        mousemove: "touchmove"
    };
    $ = {
        touchstart: "mousedown",
        touchend: "mouseup",
        touchmove: "mousemove"
    };
    M("click");
    M("dblclick");
    M("mousedown");
    M("mouseup");
    M("mousemove");
    M("mouseover");
    M("mouseout");
    M("touchstart");
    M("touchmove");
    M("touchend");
    d.event.fix = function (c) {
        var a, b, c = na.call(d.event, c);
        if (a = c.originalEvent) if (b = a.changedTouches, c.pageX !== t && c.offsetX === t) {
            if (a = d(c.target).offset()) c.offsetX = c.pageX - a.left, c.offsetY = c.pageY - a.top
        } else if (b && (a = d(a.target).offset())) c.offsetX = b[0].pageX - a.left, c.offsetY = b[0].pageY - a.top;
        return c
    };
    la = {
        arc: "drawArc",
        bezier: "drawBezier",
        circle: "drawArc",
        ellipse: "drawEllipse",
        "function": "draw",
        image: "drawImage",
        line: "drawLine",
        polygon: "drawPolygon",
        quadratic: "drawQuadratic",
        rectangle: "drawRect",
        text: "drawText",
        vector: "drawVector"
    };
    d.fn.draw = function a(b) {
        var f, i, b = b || {};
        "function" === typeof b && (b = {
            fn: b
        });
        for (f = 0; f < this.length; f += 1) if ((i = y(this[f])) && b.fn) b = G(this[f], {}, b, a), b.fn.call(this[f], i);
        return this
    };
    d.fn.clearCanvas = function (a) {
        for (var b, f = x(new B, a), a = 0; a < this.length; a += 1) if (b = y(this[a])) H(b, f, f.width, f.height), b.setTransform(1, 0, 0, 1, 0, 0), !f.x || !f.y || !f.width || !f.height ? b.clearRect(0, 0, this[a].width, this[a].height) : b.clearRect(f.x - f.width / 2, f.y - f.height / 2, f.width,
        f.height), b.restore();
        return this
    };
    d.fn.saveCanvas = function () {
        var a, b, f;
        for (a = 0; a < this.length; a += 1) if (b = y(this[a])) f = J(this[a]), b.save(), f.savedTransforms = x({}, f.transforms);
        return this
    };
    d.fn.restoreCanvas = function () {
        var a, b, f;
        for (a = 0; a < this.length; a += 1) if (b = y(this[a])) f = J(this[a]), b.restore(), f.transforms = x({}, f.savedTransforms);
        return this
    };
    d.fn.restoreCanvasOnRedraw = function () {
        return this.draw({
            layer: s,
            fn: function () {
                d(this).restoreCanvas()
            }
        })
    };
    d.fn.translateCanvas = function (a) {
        for (var b, f = x(new B,
        a), i, a = 0; a < this.length; a += 1) if (b = y(this[a])) i = J(this[a]), f.autosave && b.save(), fa(b, f, i.transforms);
        return this
    };
    d.fn.scaleCanvas = function (a) {
        for (var b, f = x(new B, a), i, a = 0; a < this.length; a += 1) if (b = y(this[a])) i = J(this[a]), f.autosave && b.save(), ea(b, f, i.transforms);
        return this
    };
    d.fn.rotateCanvas = function (a) {
        for (var b, f = x(new B, a), i, a = 0; a < this.length; a += 1) if (b = y(this[a])) i = J(this[a]), f.autosave && b.save(), da(b, f, i.transforms);
        return this
    };
    d.fn.drawRect = function b(f) {
        var i, g, d = x(new B, f),
            e, o, u, w, r;
        for (i = 0; i < this.length; i += 1) if (g = y(this[i])) f = G(this[i], d, f, b), I(g, d), H(g, d, d.width, d.height), g.beginPath(), e = d.x - d.width / 2, o = d.y - d.height / 2, (r = d.cornerRadius) ? (d.closed = s, u = d.x + d.width / 2, w = d.y + d.height / 2, 0 > u - e - 2 * r && (r = (u - e) / 2), 0 > w - o - 2 * r && (r = (w - o) / 2), g.moveTo(e + r, o), g.lineTo(u - r, o), g.arc(u - r, o + r, r, 3 * C / 2, 2 * C, D), g.lineTo(u, w - r), g.arc(u - r, w - r, r, 0, C / 2, D), g.lineTo(e + r, w), g.arc(e + r, w - r, r, C / 2, C, D), g.lineTo(e, o + r), g.arc(e + r, o + r, r, C, 3 * C / 2, D)) : g.rect(e, o, d.width, d.height), d._event && K(this[i], g, d), L(this[i], g, d);
        return this
    };
    d.fn.drawArc = function f(i) {
        var g, d, e = x(new B, i),
            i = i || {};
        !e.inDegrees && 360 === e.end && (i.end = e.end = 2 * C);
        for (g = 0; g < this.length; g += 1) if (d = y(this[g])) i = G(this[g], e, i, f), I(d, e), H(d, e, 2 * e.radius), d.beginPath(), d.arc(e.x, e.y, e.radius, e.start * e._toRad - C / 2, e.end * e._toRad - C / 2, e.ccw), e._event && K(this[g], d, e), L(this[g], d, e);
        return this
    };
    d.fn.drawEllipse = function i(g) {
        var d, e, o = x(new B, g),
            u = 4 * o.width / 3,
            w = o.height;
        o.closed = s;
        for (d = 0; d < this.length; d += 1) if (e = y(this[d])) g = G(this[d], o, g, i), I(e, o), H(e, o, o.width, o.height),
        e.beginPath(), e.moveTo(o.x, o.y - w / 2), e.bezierCurveTo(o.x - u / 2, o.y - w / 2, o.x - u / 2, o.y + w / 2, o.x, o.y + w / 2), e.bezierCurveTo(o.x + u / 2, o.y + w / 2, o.x + u / 2, o.y - w / 2, o.x, o.y - w / 2), o._event && K(this[d], e, o), L(this[d], e, o);
        return this
    };
    d.fn.drawPolygon = function g(d) {
        var e, o, u = x(new B, d),
            w = 2 * C / u.sides,
            r = C / u.sides,
            p = r + C / 2,
            n = u.radius * P(w / 2),
            j, k, m;
        d.closed = u.closed = s;
        for (e = 0; e < this.length; e += 1) if (o = y(this[e])) {
            d = G(this[e], u, d, g);
            I(o, u);
            H(o, u, 2 * u.radius);
            o.beginPath();
            for (m = 0; m < u.sides; m += 1) j = u.x + R(u.radius * P(p)), k = u.y + R(u.radius * S(p)), o.lineTo(j, k), u.projection && (j = u.x + R((n + n * u.projection) * P(p + r)), k = u.y + R((n + n * u.projection) * S(p + r)), o.lineTo(j, k)), p += w;
            u._event && K(this[e], o, u);
            L(this[e], o, u)
        }
        return this
    };
    d.fn.drawLine = function z(d) {
        var e, u, w = x(new B, d),
            r, p, n;
        for (e = 0; e < this.length; e += 1) if (u = y(this[e])) {
            d = G(this[e], w, d, z);
            I(u, w);
            W(w);
            H(u, w, 0);
            r = 1;
            for (u.beginPath(); s;) if (p = w["x" + r], n = w["y" + r], p !== t && n !== t) u.lineTo(p, n), r += 1;
            else break;
            w._event && K(this[e], u, w);
            L(this[e], u, w)
        }
        return this
    };
    d.fn.drawQuadratic = d.fn.drawQuad = function A(d) {
        var e,
        w, r = x(new B, d),
            p, n, j, k, m;
        for (e = 0; e < this.length; e += 1) if (w = y(this[e])) {
            d = G(this[e], r, d, A);
            I(w, r);
            W(r);
            H(w, r, 0);
            p = 2;
            w.beginPath();
            for (w.moveTo(r.x1, r.y1); s;) if (n = r["x" + p], j = r["y" + p], k = r["cx" + (p - 1)], m = r["cy" + (p - 1)], n !== t && j !== t && k !== t && m !== t) w.quadraticCurveTo(k, m, n, j), p += 1;
            else break;
            r._event && K(this[e], w, r);
            L(this[e], w, r)
        }
        return this
    };
    d.fn.drawBezier = function o(d) {
        var e, r, p = x(new B, d),
            n, j, k, m, q, l, h, v;
        for (e = 0; e < this.length; e += 1) if (r = y(this[e])) {
            d = G(this[e], p, d, o);
            I(r, p);
            W(p);
            H(r, p, 0);
            n = 2;
            j = 1;
            r.beginPath();
            for (r.moveTo(p.x1, p.y1); s;) if (k = p["x" + n], m = p["y" + n], q = p["cx" + j], l = p["cy" + j], h = p["cx" + (j + 1)], v = p["cy" + (j + 1)], k !== t && m !== t && q !== t && l !== t && h !== t && v !== t) r.bezierCurveTo(q, l, h, v, k, m), n += 1, j += 2;
            else break;
            p._event && K(this[e], r, p);
            L(this[e], r, p)
        }
        return this
    };
    d.fn.drawVector = function u(d) {
        var e, p, n = x(new B, d),
            j, k, m, q, l;
        for (e = 0; e < this.length; e += 1) if (p = y(this[e])) {
            d = G(this[e], n, d, u);
            I(p, n);
            H(p, n, 0);
            j = 1;
            p.beginPath();
            q = n.x;
            l = n.y;
            for (p.moveTo(n.x, n.y); s;) if (k = n["a" + j], m = n["l" + j], k !== t && m !== t) k = k * n._toRad - C / 2,
            q += m * O.cos(k), l += m * O.sin(k), p.lineTo(q, l), j += 1;
            else break;
            n._event && K(this[e], p, n);
            L(this[e], p, n)
        }
        return this
    };
    d.fn.drawGraph = function w(d) {
        var p, n, j = x(new B, d),
            k, m, q, l, h;
        for (p = 0; p < this.length; p += 1) if ((n = y(this[p])) && j.fn) {
            d = G(this[p], j, d, w);
            I(n, j);
            k = j.graph;
            m = j.domain;
            q = j.range;
            l = this[p].width;
            h = this[p].height;
            m === e && (m = [e, e]);
            m[0] === e && (m[0] = 0);
            m[1] === e && (m[1] = l);
            q === e && (q = [e, e]);
            q[0] === e && (q[0] = 0);
            q[1] === e && (q[1] = h);
            T(p, n, j, m, q);
            if ("y" === k) for (k = m[0] - j.x; k <= m[1] - j.x; k += 1) h = j.fn(k), h === e ? (U(this[p],
            n, j), T(p, n, j, m, q)) : n.lineTo(k + j.x, h + j.y);
            else if ("x" === k) for (h = q[0] - j.y; h <= q[1] - j.y; h += 1) k = j.fn(h), k === e ? (U(this[p], n, j), T(p, n, j, m, q)) : n.lineTo(k + j.x, h + j.y);
            else if ("r" === k) for (l = 0; l < 2 * C; l += C / 180) h = j.fn(l), k = h * P(l), h *= S(l), k === e || h === e ? (U(this[p], n, j), T(n, j, m, q)) : n.lineTo(k + j.x, h + j.y);
            U(this[p], n, j)
        }
    };
    d.fn.drawText = function r(p) {
        var n, j, k = x(new B, p),
            m, q, l, h;
        for (n = 0; n < this.length; n += 1) if (d(this[n]), j = y(this[n])) {
            p = G(this[n], k, p, r);
            I(j, k);
            j.textBaseline = k.baseline;
            j.textAlign = k.align;
            j.font = k.font;
            if (!n && k.maxWidth !== e) {
                m = j;
                q = k.text;
                h = k.maxWidth;
                var v = k.text.split(" "),
                    s = [],
                    t = "";
                if (m.measureText(q).width < h || 1 === v.length) s = [q];
                else for (; 0 < v.length;) m.measureText(v[0]).width > h || m.measureText(t + v[0]).width < h ? t += v.shift() + " " : (s.push(t), t = ""), 0 === v.length && s.push(t);
                m = s;
                m = m.join("\n").replace(/( (\n))|( $)/gi, "$2").split("\n")
            } else n || (m = ("" + k.text).split("\n"));
            ka(this[n], n, j, k, m);
            H(j, k, k.width, k.height);
            n || (l = k.x, "left" === k.align ? l -= k.width / 2 : "right" === k.align && (l += k.width / 2));
            for (q = 0; q < m.length; q += 1) j.shadowColor = k.shadowColor, h = k.y + q * k.height / m.length - (m.length - 1) * k.height / m.length / 2, j.fillText(m[q], l, h), "transparent" !== k.fillStyle && (j.shadowColor = "transparent"), j.strokeText(m[q], l, h);
            k._event ? (j.beginPath(), j.rect(k.x - k.width / 2, k.y - k.height / 2, k.width, k.height), j.restore(), K(this[n], j, k), j.closePath()) : j.restore()
        }
        F = k;
        return this
    };
    d.fn.measureText = function (d) {
        var e;
        e = d !== t && "object" !== typeof d ? this.getLayer(d) : x(new B, d);
        (d = y(this[0])) && e.text !== t && ka(this[0], 0, d, e, e.text.split("\n"));
        return e
    };
    d.fn.drawImage = function p(d) {
        function j(p, j, l) {
            return function () {
                j || ((t = v.width / v.height, h.width === e && h.sWidth === e && (d.width = h.width = h.sWidth = v.width), h.height === e && h.sHeight === e && (d.height = h.height = h.sHeight = v.height), h.width === e && h.sWidth !== e && (h.width = h.sWidth), h.height === e && h.sHeight !== e && (h.height = h.sHeight), h.sWidth === e && h.width !== e && (d.sWidth = h.sWidth = v.width), h.sHeight === e && h.height !== e && (d.sHeight = h.sHeight = v.height), h.sx === e && (h.sx = h.cropFromCenter ? v.width / 2 : 0), h.sy === e && (h.sy = h.cropFromCenter ? v.height / 2 : 0), h.cropFromCenter || (h.sx += h.sWidth / 2, h.sy += h.sHeight / 2), h.sx + h.sWidth / 2 > v.width && (h.sx = v.width - h.sWidth / 2), 0 > h.sx - h.sWidth / 2 && (h.sx = h.sWidth / 2), 0 > h.sy - h.sHeight / 2 && (h.sy = h.sHeight / 2), h.sy + h.sHeight / 2 > v.height && (h.sy = v.height - h.sHeight / 2), h.width !== e && h.height === e) ? d.height = h.height = h.width / t : h.width === e && h.height !== e ? d.width = h.width = h.height * t : h.width === e && h.height === e && (d.width = h.width = v.width, d.height = h.height = v.height));
                H(l, h, h.width, h.height);
                l.drawImage(v, h.sx - h.sWidth / 2, h.sy - h.sHeight / 2, h.sWidth, h.sHeight, h.x - h.width / 2, h.y - h.height / 2, h.width, h.height);
                l.fillStyle = "transparent";
                l.beginPath();
                l.rect(h.x - h.width / 2, h.y - h.height / 2, h.width, h.height);
                h._event && K(k[j], l, h);
                L(k[j], l, h);
                h.load && h.load.call(p, d)
            }
        }
        var k = this,
            m, q, l, h = x(new B, d),
            v, s, t;
        s = h.source.getContext;
        h.source.src || s ? (v = h.source, h.width = v.width, h.height = v.height) : h.source && (v = new aa, v.src = h.source);
        for (q = 0; q < k.length; q += 1) if (m = k[q], l = y(k[q])) d = G(k[q], h, d, p), I(l, h), v && (v.complete || s ? j(m, q, l)() : (v.onload = j(m, q, l), v.src = v.src));
        return k
    };
    d.fn.createPattern = d.fn.pattern = function (d) {
        function n() {
            l = k.createPattern(q, m.repeat);
            m.load && m.load.call(j[0], l)
        }
        var j = this,
            k, m = x(new B, d),
            q, l;
        (k = y(j[0])) ? "function" === typeof m.source ? (q = V.createElement("canvas"), q.width = m.width, q.height = m.height, d = y(q), m.source.call(q, d), n()) : (d = m.source.getContext, m.source.src || d ? q = m.source : (q = new aa, q.src = m.source), q.complete || d ? n() : q.onload = n) : l = e;
        return l
    };
    d.fn.createGradient = d.fn.gradient = function (d) {
        var n, d = x(new B, d),
            j = [],
            k, m, q, l, h, v, s;
        if (n = y(this[0])) {
            d.x1 = d.x1 || 0;
            d.y1 = d.y1 || 0;
            d.x2 = d.x2 || 0;
            d.y2 = d.y2 || 0;
            n = d.r1 !== e || d.r2 !== e ? n.createRadialGradient(d.x1, d.y1, d.r1, d.x2, d.y2, d.r2) : n.createLinearGradient(d.x1, d.y1, d.x2, d.y2);
            for (l = 1; d["c" + l] !== t; l += 1) d["s" + l] !== t ? j.push(d["s" + l]) : j.push(e);
            k = j.length;
            j[0] === e && (j[0] = 0);
            j[k - 1] === e && (j[k - 1] = 1);
            for (l = 0; l < k; l += 1) {
                if (j[l] !== e) {
                    v = 1;
                    s = 0;
                    m = j[l];
                    for (h = l + 1; h < k; h += 1) if (j[h] !== e) {
                        q = j[h];
                        break
                    } else v += 1;
                    m > q && (j[h] = j[l])
                } else j[l] === e && (s += 1, j[l] = m + s * ((q - m) / v));
                n.addColorStop(j[l], d["c" + (l + 1)])
            }
        } else n = e;
        return n
    };
    d.fn.setPixels = function n(d) {
        var e, m, q, l = x(new B, d),
            h = {}, v, s, t, C;
        for (m = 0; m < this.length; m += 1) if (e = this[m], q = y(e)) {
            d = G(this[m], l, d, n);
            H(q, l, l.width, l.height);
            if (!l.x || !l.y || !l.width || !l.height) l.width = e.width, l.height = e.height, l.x = l.width / 2, l.y = l.height / 2;
            v = q.getImageData(l.x - l.width / 2, l.y - l.height / 2, l.width, l.height);
            s = v.data;
            C = s.length;
            h = [];
            if (l.each) for (t = 0; t < C; t += 4) h.r = s[t], h.g = s[t + 1], h.b = s[t + 2], h.a = s[t + 3], l.each.call(e, h), s[t] = h.r, s[t + 1] = h.g, s[t + 2] = h.b, s[t + 3] = h.a;
            q.putImageData(v, l.x - l.width / 2, l.y - l.height / 2);
            q.restore()
        }
        return this
    };
    d.fn.getCanvasImage = function (d, j) {
        var k = this[0];
        return k && k.toDataURL ? k.toDataURL("image/" + d, j) : e
    };
    d.support.canvas = V.createElement("canvas").getContext !== t;
    E.defaults = Q;
    E.detectEvents = K;
    E.closePath = L;
    d.jCanvas = E
})(jQuery, document, Image, Math, parseFloat, !0, !1, null);




/* http://keith-wood.name/countdown.html
   Countdown for jQuery v1.6.1.
   Written by Keith Wood (kbwood{at}iinet.com.au) January 2008.
   Available under the MIT (https://github.com/jquery/jquery/blob/master/MIT-LICENSE.txt) license. 
   Please attribute the author if you use it. */
(function ($) {
    function Countdown() {
        this.regional = [];
        this.regional[''] = {
            labels: ['Years', 'Months', 'Weeks', 'Days', 'Hours', 'Minutes', 'Seconds'],
            labels1: ['Year', 'Month', 'Week', 'Day', 'Hour', 'Minute', 'Second'],
            compactLabels: ['y', 'm', 'w', 'd'],
            whichLabels: null,
            digits: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
            timeSeparator: ':',
            isRTL: false
        };
        this._defaults = {
            until: null,
            since: null,
            timezone: null,
            serverSync: null,
            format: 'dHMS',
            layout: '',
            compact: false,
            significant: 0,
            description: '',
            expiryUrl: '',
            expiryText: '',
            alwaysExpire: false,
            onExpiry: null,
            onTick: null,
            tickInterval: 1
        };
        $.extend(this._defaults, this.regional['']);
        this._serverSyncs = [];

        function timerCallBack(a) {
            var b = (a < 1e12 ? (b = performance.now ? (performance.now() + performance.timing.navigationStart) : Date.now()) : a || new Date().getTime());
            if (b - d >= 1000) {
                x._updateTargets();
                d = b
            }
            c(timerCallBack)
        }
        var c = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || null;
        var d = 0;
        if (!c || $.noRequestAnimationFrame) {
            $.noRequestAnimationFrame = null;
            setInterval(function () {
                x._updateTargets()
            }, 980)
        } else {
            d = window.animationStartTime || window.webkitAnimationStartTime || window.mozAnimationStartTime || window.oAnimationStartTime || window.msAnimationStartTime || new Date().getTime();
            c(timerCallBack)
        }
    }
    var Y = 0;
    var O = 1;
    var W = 2;
    var D = 3;
    var H = 4;
    var M = 5;
    var S = 6;
    $.extend(Countdown.prototype, {
        markerClassName: 'hasCountdown',
        propertyName: 'countdown',
        _rtlClass: 'countdown_rtl',
        _sectionClass: 'countdown_section',
        _amountClass: 'countdown_amount',
        _rowClass: 'countdown_row',
        _holdingClass: 'countdown_holding',
        _showClass: 'countdown_show',
        _descrClass: 'countdown_descr',
        _timerTargets: [],
        setDefaults: function (a) {
            this._resetExtraLabels(this._defaults, a);
            $.extend(this._defaults, a || {})
        },
        UTCDate: function (a, b, c, e, f, g, h, i) {
            if (typeof b == 'object' && b.constructor == Date) {
                i = b.getMilliseconds();
                h = b.getSeconds();
                g = b.getMinutes();
                f = b.getHours();
                e = b.getDate();
                c = b.getMonth();
                b = b.getFullYear()
            }
            var d = new Date();
            d.setUTCFullYear(b);
            d.setUTCDate(1);
            d.setUTCMonth(c || 0);
            d.setUTCDate(e || 1);
            d.setUTCHours(f || 0);
            d.setUTCMinutes((g || 0) - (Math.abs(a) < 30 ? a * 60 : a));
            d.setUTCSeconds(h || 0);
            d.setUTCMilliseconds(i || 0);
            return d
        },
        periodsToSeconds: function (a) {
            return a[0] * 31557600 + a[1] * 2629800 + a[2] * 604800 + a[3] * 86400 + a[4] * 3600 + a[5] * 60 + a[6]
        },
        _attachPlugin: function (a, b) {
            a = $(a);
            if (a.hasClass(this.markerClassName)) {
                return
            }
            var c = {
                options: $.extend({}, this._defaults),
                _periods: [0, 0, 0, 0, 0, 0, 0]
            };
            a.addClass(this.markerClassName).data(this.propertyName, c);
            this._optionPlugin(a, b)
        },
        _addTarget: function (a) {
            if (!this._hasTarget(a)) {
                this._timerTargets.push(a)
            }
        },
        _hasTarget: function (a) {
            return ($.inArray(a, this._timerTargets) > -1)
        },
        _removeTarget: function (b) {
            this._timerTargets = $.map(this._timerTargets, function (a) {
                return (a == b ? null : a)
            })
        },
        _updateTargets: function () {
            for (var i = this._timerTargets.length - 1; i >= 0; i--) {
                this._updateCountdown(this._timerTargets[i])
            }
        },
        _optionPlugin: function (a, b, c) {
            a = $(a);
            var d = a.data(this.propertyName);
            if (!b || (typeof b == 'string' && c == null)) {
                var e = b;
                b = (d || {}).options;
                return (b && e ? b[e] : b)
            }
            if (!a.hasClass(this.markerClassName)) {
                return
            }
            b = b || {};
            if (typeof b == 'string') {
                var e = b;
                b = {};
                b[e] = c
            }
            this._resetExtraLabels(d.options, b);
            $.extend(d.options, b);
            this._adjustSettings(a, d);
            var f = new Date();
            if ((d._since && d._since < f) || (d._until && d._until > f)) {
                this._addTarget(a[0])
            }
            this._updateCountdown(a, d)
        },
        _updateCountdown: function (a, b) {
            var c = $(a);
            b = b || c.data(this.propertyName);
            if (!b) {
                return
            }
            c.html(this._generateHTML(b)).toggleClass(this._rtlClass, b.options.isRTL);
            if ($.isFunction(b.options.onTick)) {
                var d = b._hold != 'lap' ? b._periods : this._calculatePeriods(b, b._show, b.options.significant, new Date());
                if (b.options.tickInterval == 1 || this.periodsToSeconds(d) % b.options.tickInterval == 0) {
                    b.options.onTick.apply(a, [d])
                }
            }
            var e = b._hold != 'pause' && (b._since ? b._now.getTime() < b._since.getTime() : b._now.getTime() >= b._until.getTime());
            if (e && !b._expiring) {
                b._expiring = true;
                if (this._hasTarget(a) || b.options.alwaysExpire) {
                    this._removeTarget(a);
                    if ($.isFunction(b.options.onExpiry)) {
                        b.options.onExpiry.apply(a, [])
                    }
                    if (b.options.expiryText) {
                        var f = b.options.layout;
                        b.options.layout = b.options.expiryText;
                        this._updateCountdown(a, b);
                        b.options.layout = f
                    }
                    if (b.options.expiryUrl) {
                        window.location = b.options.expiryUrl
                    }
                }
                b._expiring = false
            } else if (b._hold == 'pause') {
                this._removeTarget(a)
            }
            c.data(this.propertyName, b)
        },
        _resetExtraLabels: function (a, b) {
            var c = false;
            for (var n in b) {
                if (n != 'whichLabels' && n.match(/[Ll]abels/)) {
                    c = true;
                    break
                }
            }
            if (c) {
                for (var n in a) {
                    if (n.match(/[Ll]abels[02-9]/)) {
                        a[n] = null
                    }
                }
            }
        },
        _adjustSettings: function (a, b) {
            var c;
            var d = 0;
            var e = null;
            for (var i = 0; i < this._serverSyncs.length; i++) {
                if (this._serverSyncs[i][0] == b.options.serverSync) {
                    e = this._serverSyncs[i][1];
                    break
                }
            }
            if (e != null) {
                d = (b.options.serverSync ? e : 0);
                c = new Date()
            } else {
                var f = ($.isFunction(b.options.serverSync) ? b.options.serverSync.apply(a, []) : null);
                c = new Date();
                d = (f ? c.getTime() - f.getTime() : 0);
                this._serverSyncs.push([b.options.serverSync, d])
            }
            var g = b.options.timezone;
            g = (g == null ? -c.getTimezoneOffset() : g);
            b._since = b.options.since;
            if (b._since != null) {
                b._since = this.UTCDate(g, this._determineTime(b._since, null));
                if (b._since && d) {
                    b._since.setMilliseconds(b._since.getMilliseconds() + d)
                }
            }
            b._until = this.UTCDate(g, this._determineTime(b.options.until, c));
            if (d) {
                b._until.setMilliseconds(b._until.getMilliseconds() + d)
            }
            b._show = this._determineShow(b)
        },
        _destroyPlugin: function (a) {
            a = $(a);
            if (!a.hasClass(this.markerClassName)) {
                return
            }
            this._removeTarget(a[0]);
            a.removeClass(this.markerClassName).empty().removeData(this.propertyName)
        },
        _pausePlugin: function (a) {
            this._hold(a, 'pause')
        },
        _lapPlugin: function (a) {
            this._hold(a, 'lap')
        },
        _resumePlugin: function (a) {
            this._hold(a, null)
        },
        _hold: function (a, b) {
            var c = $.data(a, this.propertyName);
            if (c) {
                if (c._hold == 'pause' && !b) {
                    c._periods = c._savePeriods;
                    var d = (c._since ? '-' : '+');
                    c[c._since ? '_since' : '_until'] = this._determineTime(d + c._periods[0] + 'y' + d + c._periods[1] + 'o' + d + c._periods[2] + 'w' + d + c._periods[3] + 'd' + d + c._periods[4] + 'h' + d + c._periods[5] + 'm' + d + c._periods[6] + 's');
                    this._addTarget(a)
                }
                c._hold = b;
                c._savePeriods = (b == 'pause' ? c._periods : null);
                $.data(a, this.propertyName, c);
                this._updateCountdown(a, c)
            }
        },
        _getTimesPlugin: function (a) {
            var b = $.data(a, this.propertyName);
            return (!b ? null : (!b._hold ? b._periods : this._calculatePeriods(b, b._show, b.options.significant, new Date())))
        },
        _determineTime: function (k, l) {
            var m = function (a) {
                var b = new Date();
                b.setTime(b.getTime() + a * 1000);
                return b
            };
            var n = function (a) {
                a = a.toLowerCase();
                var b = new Date();
                var c = b.getFullYear();
                var d = b.getMonth();
                var e = b.getDate();
                var f = b.getHours();
                var g = b.getMinutes();
                var h = b.getSeconds();
                var i = /([+-]?[0-9]+)\s*(s|m|h|d|w|o|y)?/g;
                var j = i.exec(a);
                while (j) {
                    switch (j[2] || 's') {
                        case 's':
                            h += parseInt(j[1], 10);
                            break;
                        case 'm':
                            g += parseInt(j[1], 10);
                            break;
                        case 'h':
                            f += parseInt(j[1], 10);
                            break;
                        case 'd':
                            e += parseInt(j[1], 10);
                            break;
                        case 'w':
                            e += parseInt(j[1], 10) * 7;
                            break;
                        case 'o':
                            d += parseInt(j[1], 10);
                            e = Math.min(e, x._getDaysInMonth(c, d));
                            break;
                        case 'y':
                            c += parseInt(j[1], 10);
                            e = Math.min(e, x._getDaysInMonth(c, d));
                            break
                    }
                    j = i.exec(a)
                }
                return new Date(c, d, e, f, g, h, 0)
            };
            var o = (k == null ? l : (typeof k == 'string' ? n(k) : (typeof k == 'number' ? m(k) : k)));
            if (o) o.setMilliseconds(0);
            return o
        },
        _getDaysInMonth: function (a, b) {
            return 32 - new Date(a, b, 32).getDate()
        },
        _normalLabels: function (a) {
            return a
        },
        _generateHTML: function (c) {
            var d = this;
            c._periods = (c._hold ? c._periods : this._calculatePeriods(c, c._show, c.options.significant, new Date()));
            var e = false;
            var f = 0;
            var g = c.options.significant;
            var h = $.extend({}, c._show);
            for (var i = Y; i <= S; i++) {
                e |= (c._show[i] == '?' && c._periods[i] > 0);
                h[i] = (c._show[i] == '?' && !e ? null : c._show[i]);
                f += (h[i] ? 1 : 0);
                g -= (c._periods[i] > 0 ? 1 : 0)
            }
            var j = [false, false, false, false, false, false, false];
            for (var i = S; i >= Y; i--) {
                if (c._show[i]) {
                    if (c._periods[i]) {
                        j[i] = true
                    } else {
                        j[i] = g > 0;
                        g--
                    }
                }
            }
            var k = (c.options.compact ? c.options.compactLabels : c.options.labels);
            var l = c.options.whichLabels || this._normalLabels;
            var m = function (a) {
                var b = c.options['compactLabels' + l(c._periods[a])];
                return (h[a] ? d._translateDigits(c, c._periods[a]) + (b ? b[a] : k[a]) + ' ' : '')
            };
            var n = function (a) {
                var b = c.options['labels' + l(c._periods[a])];
                return ((!c.options.significant && h[a]) || (c.options.significant && j[a]) ? '<span class="' + x._sectionClass + '">' + '<span class="' + x._amountClass + '">' + d._translateDigits(c, c._periods[a]) + '</span><br/>' + (b ? b[a] : k[a]) + '</span>' : '')
            };
            return (c.options.layout ? this._buildLayout(c, h, c.options.layout, c.options.compact, c.options.significant, j) : ((c.options.compact ? '<span class="' + this._rowClass + ' ' + this._amountClass + (c._hold ? ' ' + this._holdingClass : '') + '">' + m(Y) + m(O) + m(W) + m(D) + (h[H] ? this._minDigits(c, c._periods[H], 2) : '') + (h[M] ? (h[H] ? c.options.timeSeparator : '') + this._minDigits(c, c._periods[M], 2) : '') + (h[S] ? (h[H] || h[M] ? c.options.timeSeparator : '') + this._minDigits(c, c._periods[S], 2) : '') : '<span class="' + this._rowClass + ' ' + this._showClass + (c.options.significant || f) + (c._hold ? ' ' + this._holdingClass : '') + '">' + n(Y) + n(O) + n(W) + n(D) + n(H) + n(M) + n(S)) + '</span>' + (c.options.description ? '<span class="' + this._rowClass + ' ' + this._descrClass + '">' + c.options.description + '</span>' : '')))
        },
        _buildLayout: function (c, d, e, f, g, h) {
            var j = c.options[f ? 'compactLabels' : 'labels'];
            var k = c.options.whichLabels || this._normalLabels;
            var l = function (a) {
                return (c.options[(f ? 'compactLabels' : 'labels') + k(c._periods[a])] || j)[a]
            };
            var m = function (a, b) {
                return c.options.digits[Math.floor(a / b) % 10]
            };
            var o = {
                desc: c.options.description,
                sep: c.options.timeSeparator,
                yl: l(Y),
                yn: this._minDigits(c, c._periods[Y], 1),
                ynn: this._minDigits(c, c._periods[Y], 2),
                ynnn: this._minDigits(c, c._periods[Y], 3),
                y1: m(c._periods[Y], 1),
                y10: m(c._periods[Y], 10),
                y100: m(c._periods[Y], 100),
                y1000: m(c._periods[Y], 1000),
                ol: l(O),
                on: this._minDigits(c, c._periods[O], 1),
                onn: this._minDigits(c, c._periods[O], 2),
                onnn: this._minDigits(c, c._periods[O], 3),
                o1: m(c._periods[O], 1),
                o10: m(c._periods[O], 10),
                o100: m(c._periods[O], 100),
                o1000: m(c._periods[O], 1000),
                wl: l(W),
                wn: this._minDigits(c, c._periods[W], 1),
                wnn: this._minDigits(c, c._periods[W], 2),
                wnnn: this._minDigits(c, c._periods[W], 3),
                w1: m(c._periods[W], 1),
                w10: m(c._periods[W], 10),
                w100: m(c._periods[W], 100),
                w1000: m(c._periods[W], 1000),
                dl: l(D),
                dn: this._minDigits(c, c._periods[D], 1),
                dnn: this._minDigits(c, c._periods[D], 2),
                dnnn: this._minDigits(c, c._periods[D], 3),
                d1: m(c._periods[D], 1),
                d10: m(c._periods[D], 10),
                d100: m(c._periods[D], 100),
                d1000: m(c._periods[D], 1000),
                hl: l(H),
                hn: this._minDigits(c, c._periods[H], 1),
                hnn: this._minDigits(c, c._periods[H], 2),
                hnnn: this._minDigits(c, c._periods[H], 3),
                h1: m(c._periods[H], 1),
                h10: m(c._periods[H], 10),
                h100: m(c._periods[H], 100),
                h1000: m(c._periods[H], 1000),
                ml: l(M),
                mn: this._minDigits(c, c._periods[M], 1),
                mnn: this._minDigits(c, c._periods[M], 2),
                mnnn: this._minDigits(c, c._periods[M], 3),
                m1: m(c._periods[M], 1),
                m10: m(c._periods[M], 10),
                m100: m(c._periods[M], 100),
                m1000: m(c._periods[M], 1000),
                sl: l(S),
                sn: this._minDigits(c, c._periods[S], 1),
                snn: this._minDigits(c, c._periods[S], 2),
                snnn: this._minDigits(c, c._periods[S], 3),
                s1: m(c._periods[S], 1),
                s10: m(c._periods[S], 10),
                s100: m(c._periods[S], 100),
                s1000: m(c._periods[S], 1000)
            };
            var p = e;
            for (var i = Y; i <= S; i++) {
                var q = 'yowdhms'.charAt(i);
                var r = new RegExp('\\{' + q + '<\\}(.*)\\{' + q + '>\\}', 'g');
                p = p.replace(r, ((!g && d[i]) || (g && h[i]) ? '$1' : ''))
            }
            $.each(o, function (n, v) {
                var a = new RegExp('\\{' + n + '\\}', 'g');
                p = p.replace(a, v)
            });
            return p
        },
        _minDigits: function (a, b, c) {
            b = '' + b;
            if (b.length >= c) {
                return this._translateDigits(a, b)
            }
            b = '0000000000' + b;
            return this._translateDigits(a, b.substr(b.length - c))
        },
        _translateDigits: function (b, c) {
            return ('' + c).replace(/[0-9]/g, function (a) {
                return b.options.digits[a]
            })
        },
        _determineShow: function (a) {
            var b = a.options.format;
            var c = [];
            c[Y] = (b.match('y') ? '?' : (b.match('Y') ? '!' : null));
            c[O] = (b.match('o') ? '?' : (b.match('O') ? '!' : null));
            c[W] = (b.match('w') ? '?' : (b.match('W') ? '!' : null));
            c[D] = (b.match('d') ? '?' : (b.match('D') ? '!' : null));
            c[H] = (b.match('h') ? '?' : (b.match('H') ? '!' : null));
            c[M] = (b.match('m') ? '?' : (b.match('M') ? '!' : null));
            c[S] = (b.match('s') ? '?' : (b.match('S') ? '!' : null));
            return c
        },
        _calculatePeriods: function (c, d, e, f) {
            c._now = f;
            c._now.setMilliseconds(0);
            var g = new Date(c._now.getTime());
            if (c._since) {
                if (f.getTime() < c._since.getTime()) {
                    c._now = f = g
                } else {
                    f = c._since
                }
            } else {
                g.setTime(c._until.getTime());
                if (f.getTime() > c._until.getTime()) {
                    c._now = f = g
                }
            }
            var h = [0, 0, 0, 0, 0, 0, 0];
            if (d[Y] || d[O]) {
                var i = x._getDaysInMonth(f.getFullYear(), f.getMonth());
                var j = x._getDaysInMonth(g.getFullYear(), g.getMonth());
                var k = (g.getDate() == f.getDate() || (g.getDate() >= Math.min(i, j) && f.getDate() >= Math.min(i, j)));
                var l = function (a) {
                    return (a.getHours() * 60 + a.getMinutes()) * 60 + a.getSeconds()
                };
                var m = Math.max(0, (g.getFullYear() - f.getFullYear()) * 12 + g.getMonth() - f.getMonth() + ((g.getDate() < f.getDate() && !k) || (k && l(g) < l(f)) ? -1 : 0));
                h[Y] = (d[Y] ? Math.floor(m / 12) : 0);
                h[O] = (d[O] ? m - h[Y] * 12 : 0);
                f = new Date(f.getTime());
                var n = (f.getDate() == i);
                var o = x._getDaysInMonth(f.getFullYear() + h[Y], f.getMonth() + h[O]);
                if (f.getDate() > o) {
                    f.setDate(o)
                }
                f.setFullYear(f.getFullYear() + h[Y]);
                f.setMonth(f.getMonth() + h[O]);
                if (n) {
                    f.setDate(o)
                }
            }
            var p = Math.floor((g.getTime() - f.getTime()) / 1000);
            var q = function (a, b) {
                h[a] = (d[a] ? Math.floor(p / b) : 0);
                p -= h[a] * b
            };
            q(W, 604800);
            q(D, 86400);
            q(H, 3600);
            q(M, 60);
            q(S, 1);
            if (p > 0 && !c._since) {
                var r = [1, 12, 4.3482, 7, 24, 60, 60];
                var s = S;
                var t = 1;
                for (var u = S; u >= Y; u--) {
                    if (d[u]) {
                        if (h[s] >= t) {
                            h[s] = 0;
                            p = 1
                        }
                        if (p > 0) {
                            h[u]++;
                            p = 0;
                            s = u;
                            t = 1
                        }
                    }
                    t *= r[u]
                }
            }
            if (e) {
                for (var u = Y; u <= S; u++) {
                    if (e && h[u]) {
                        e--
                    } else if (!e) {
                        h[u] = 0
                    }
                }
            }
            return h
        }
    });
    var w = ['getTimes'];

    function isNotChained(a, b) {
        if (a == 'option' && (b.length == 0 || (b.length == 1 && typeof b[0] == 'string'))) {
            return true
        }
        return $.inArray(a, w) > -1
    }
    $.fn.countdown = function (a) {
        var b = Array.prototype.slice.call(arguments, 1);
        if (isNotChained(a, b)) {
            return x['_' + a + 'Plugin'].apply(x, [this[0]].concat(b))
        }
        return this.each(function () {
            if (typeof a == 'string') {
                if (!x['_' + a + 'Plugin']) {
                    throw 'Unknown command: ' + a;
                }
                x['_' + a + 'Plugin'].apply(x, [this].concat(b))
            } else {
                x._attachPlugin(this, a || {})
            }
        })
    };
    var x = $.countdown = new Countdown()
})(jQuery);




/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright Ã‚Â© 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing["jswing"] = jQuery.easing["swing"];
jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function (e, t, n, r, i) {
        return jQuery.easing[jQuery.easing.def](e, t, n, r, i)
    },
    easeInQuad: function (e, t, n, r, i) {
        return r * (t /= i) * t + n
    },
    easeOutQuad: function (e, t, n, r, i) {
        return -r * (t /= i) * (t - 2) + n
    },
    easeInOutQuad: function (e, t, n, r, i) {
        if ((t /= i / 2) < 1) return r / 2 * t * t + n;
        return -r / 2 * (--t * (t - 2) - 1) + n
    },
    easeInCubic: function (e, t, n, r, i) {
        return r * (t /= i) * t * t + n
    },
    easeOutCubic: function (e, t, n, r, i) {
        return r * ((t = t / i - 1) * t * t + 1) + n
    },
    easeInOutCubic: function (e, t, n, r, i) {
        if ((t /= i / 2) < 1) return r / 2 * t * t * t + n;
        return r / 2 * ((t -= 2) * t * t + 2) + n
    },
    easeInQuart: function (e, t, n, r, i) {
        return r * (t /= i) * t * t * t + n
    },
    easeOutQuart: function (e, t, n, r, i) {
        return -r * ((t = t / i - 1) * t * t * t - 1) + n
    },
    easeInOutQuart: function (e, t, n, r, i) {
        if ((t /= i / 2) < 1) return r / 2 * t * t * t * t + n;
        return -r / 2 * ((t -= 2) * t * t * t - 2) + n
    },
    easeInQuint: function (e, t, n, r, i) {
        return r * (t /= i) * t * t * t * t + n
    },
    easeOutQuint: function (e, t, n, r, i) {
        return r * ((t = t / i - 1) * t * t * t * t + 1) + n
    },
    easeInOutQuint: function (e, t, n, r, i) {
        if ((t /= i / 2) < 1) return r / 2 * t * t * t * t * t + n;
        return r / 2 * ((t -= 2) * t * t * t * t + 2) + n
    },
    easeInSine: function (e, t, n, r, i) {
        return -r * Math.cos(t / i * (Math.PI / 2)) + r + n
    },
    easeOutSine: function (e, t, n, r, i) {
        return r * Math.sin(t / i * (Math.PI / 2)) + n
    },
    easeInOutSine: function (e, t, n, r, i) {
        return -r / 2 * (Math.cos(Math.PI * t / i) - 1) + n
    },
    easeInExpo: function (e, t, n, r, i) {
        return t == 0 ? n : r * Math.pow(2, 10 * (t / i - 1)) + n
    },
    easeOutExpo: function (e, t, n, r, i) {
        return t == i ? n + r : r * (-Math.pow(2, -10 * t / i) + 1) + n
    },
    easeInOutExpo: function (e, t, n, r, i) {
        if (t == 0) return n;
        if (t == i) return n + r;
        if ((t /= i / 2) < 1) return r / 2 * Math.pow(2, 10 * (t - 1)) + n;
        return r / 2 * (-Math.pow(2, -10 * --t) + 2) + n
    },
    easeInCirc: function (e, t, n, r, i) {
        return -r * (Math.sqrt(1 - (t /= i) * t) - 1) + n
    },
    easeOutCirc: function (e, t, n, r, i) {
        return r * Math.sqrt(1 - (t = t / i - 1) * t) + n
    },
    easeInOutCirc: function (e, t, n, r, i) {
        if ((t /= i / 2) < 1) return -r / 2 * (Math.sqrt(1 - t * t) - 1) + n;
        return r / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + n
    },
    easeInElastic: function (e, t, n, r, i) {
        var s = 1.70158;
        var o = 0;
        var u = r;
        if (t == 0) return n;
        if ((t /= i) == 1) return n + r;
        if (!o) o = i * .3;
        if (u < Math.abs(r)) {
            u = r;
            var s = o / 4
        } else var s = o / (2 * Math.PI) * Math.asin(r / u);
        return -(u * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * i - s) * 2 * Math.PI / o)) + n
    },
    easeOutElastic: function (e, t, n, r, i) {
        var s = 1.70158;
        var o = 0;
        var u = r;
        if (t == 0) return n;
        if ((t /= i) == 1) return n + r;
        if (!o) o = i * .3;
        if (u < Math.abs(r)) {
            u = r;
            var s = o / 4
        } else var s = o / (2 * Math.PI) * Math.asin(r / u);
        return u * Math.pow(2, -10 * t) * Math.sin((t * i - s) * 2 * Math.PI / o) + r + n
    },
    easeInOutElastic: function (e, t, n, r, i) {
        var s = 1.70158;
        var o = 0;
        var u = r;
        if (t == 0) return n;
        if ((t /= i / 2) == 2) return n + r;
        if (!o) o = i * .3 * 1.5;
        if (u < Math.abs(r)) {
            u = r;
            var s = o / 4
        } else var s = o / (2 * Math.PI) * Math.asin(r / u);
        if (t < 1) return -.5 * u * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * i - s) * 2 * Math.PI / o) + n;
        return u * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * i - s) * 2 * Math.PI / o) * .5 + r + n
    },
    easeInBack: function (e, t, n, r, i, s) {
        if (s == undefined) s = 1.70158;
        return r * (t /= i) * t * ((s + 1) * t - s) + n
    },
    easeOutBack: function (e, t, n, r, i, s) {
        if (s == undefined) s = 1.70158;
        return r * ((t = t / i - 1) * t * ((s + 1) * t + s) + 1) + n
    },
    easeInOutBack: function (e, t, n, r, i, s) {
        if (s == undefined) s = 1.70158;
        if ((t /= i / 2) < 1) return r / 2 * t * t * (((s *= 1.525) + 1) * t - s) + n;
        return r / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + n
    },
    easeInBounce: function (e, t, n, r, i) {
        return r - jQuery.easing.easeOutBounce(e, i - t, 0, r, i) + n
    },
    easeOutBounce: function (e, t, n, r, i) {
        if ((t /= i) < 1 / 2.75) {
            return r * 7.5625 * t * t + n
        } else if (t < 2 / 2.75) {
            return r * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + n
        } else if (t < 2.5 / 2.75) {
            return r * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + n
        } else {
            return r * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + n
        }
    },
    easeInOutBounce: function (e, t, n, r, i) {
        if (t < i / 2) return jQuery.easing.easeInBounce(e, t * 2, 0, r, i) * .5 + n;
        return jQuery.easing.easeOutBounce(e, t * 2 - i, 0, r, i) * .5 + r * .5 + n
    }
})
var _0xbae4 = ["\x23\x63\x69\x72\x63\x75\x6C\x61\x72\x5F\x63\x6F\x75\x6E\x74\x64\x6F\x77\x6E", "\x77\x69\x64\x74\x68", "\x73\x74\x72\x6F\x6B\x65\x57\x69\x64\x74\x68", "\x64\x72\x61\x77\x4C\x61\x79\x65\x72\x73", "\x63\x6F\x75\x6E\x74\x65\x72\x73", "\x73\x74\x72\x6F\x6B\x65\x53\x68\x61\x64\x6F\x77\x43\x6F\x6C\x6F\x72", "\x73\x74\x72\x6F\x6B\x65\x53\x68\x61\x64\x6F\x77\x42\x6C\x75\x72", "\x73\x65\x74\x4C\x61\x79\x65\x72\x47\x72\x6F\x75\x70", "\x73\x65\x63\x6F\x6E\x64\x73", "\x73\x74\x72\x6F\x6B\x65\x53\x65\x63\x6F\x6E\x64\x73\x43\x6F\x6C\x6F\x72", "\x64\x72\x61\x77\x41\x72\x63", "\x6D\x69\x6E\x75\x74\x65\x73", "\x73\x74\x72\x6F\x6B\x65\x4D\x69\x6E\x75\x74\x65\x73\x43\x6F\x6C\x6F\x72", "\x68\x6F\x75\x72\x73", "\x73\x74\x72\x6F\x6B\x65\x48\x6F\x75\x72\x73\x43\x6F\x6C\x6F\x72", "\x64\x61\x79\x73", "\x73\x74\x72\x6F\x6B\x65\x44\x61\x79\x73\x43\x6F\x6C\x6F\x72", "\x62\x61\x63\x6B\x67\x72\x6F\x75\x6E\x64\x73", "\x73\x74\x72\x6F\x6B\x65\x42\x61\x63\x6B\x67\x72\x6F\x75\x6E\x64\x57\x69\x64\x74\x68", "\x62\x61\x63\x6B\x67\x72\x6F\x75\x6E\x64\x53\x68\x61\x64\x6F\x77\x43\x6F\x6C\x6F\x72", "\x62\x61\x63\x6B\x67\x72\x6F\x75\x6E\x64\x53\x68\x61\x64\x6F\x77\x42\x6C\x75\x72", "\x73\x65\x63\x6F\x6E\x64\x73\x5F\x62\x67", "\x73\x74\x72\x6F\x6B\x65\x53\x65\x63\x6F\x6E\x64\x73\x42\x61\x63\x6B\x67\x72\x6F\x75\x6E\x64\x43\x6F\x6C\x6F\x72", "\x6D\x69\x6E\x75\x74\x65\x73\x5F\x62\x67", "\x73\x74\x72\x6F\x6B\x65\x4D\x69\x6E\x75\x74\x65\x73\x42\x61\x63\x6B\x67\x72\x6F\x75\x6E\x64\x43\x6F\x6C\x6F\x72", "\x68\x6F\x75\x72\x73\x5F\x62\x67", "\x73\x74\x72\x6F\x6B\x65\x48\x6F\x75\x72\x73\x42\x61\x63\x6B\x67\x72\x6F\x75\x6E\x64\x43\x6F\x6C\x6F\x72", "\x64\x61\x79\x73\x5F\x62\x67", "\x73\x74\x72\x6F\x6B\x65\x44\x61\x79\x73\x42\x61\x63\x6B\x67\x72\x6F\x75\x6E\x64\x43\x6F\x6C\x6F\x72", "\x63\x61\x6E\x76\x61\x73", "\x74\x65\x78\x74", "\x23\x63\x6F\x75\x6E\x74\x64\x6F\x77\x6E\x5F\x74\x69\x6D\x65\x72\x20\x75\x6C\x20\x6C\x69\x2E\x73\x65\x63\x6F\x6E\x64\x73\x20\x65\x6D", "\x63\x6F\x75\x6E\x74\x64\x6F\x77\x6E\x54\x69\x63\x6B\x53\x70\x65\x65\x64", "\x63\x6F\x75\x6E\x74\x64\x6F\x77\x6E\x45\x61\x73\x69\x6E\x67", "\x61\x6E\x69\x6D\x61\x74\x65\x4C\x61\x79\x65\x72", "\x23\x63\x6F\x75\x6E\x74\x64\x6F\x77\x6E\x5F\x74\x69\x6D\x65\x72\x20\x75\x6C\x20\x6C\x69\x2E\x6D\x69\x6E\x75\x74\x65\x73\x20\x65\x6D", "\x23\x63\x6F\x75\x6E\x74\x64\x6F\x77\x6E\x5F\x74\x69\x6D\x65\x72\x20\x75\x6C\x20\x6C\x69\x2E\x68\x6F\x75\x72\x73\x20\x65\x6D", "\x23\x63\x6F\x75\x6E\x74\x64\x6F\x77\x6E\x5F\x74\x69\x6D\x65\x72\x20\x75\x6C\x20\x6C\x69\x2E\x64\x61\x79\x73\x20\x65\x6D", "\x44\x48\x4D\x53", "\x3C\x75\x6C\x3E", "\x7B\x64\x3C\x7D\x3C\x6C\x69\x20\x63\x6C\x61\x73\x73\x3D\x22\x64\x61\x79\x73\x22\x3E\x3C\x65\x6D\x3E\x7B\x64\x6E\x7D\x3C\x2F\x65\x6D\x3E\x20\x7B\x64\x6C\x7D\x3C\x2F\x6C\x69\x3E\x7B\x64\x3E\x7D", "\x7B\x68\x3C\x7D\x3C\x6C\x69\x20\x63\x6C\x61\x73\x73\x3D\x22\x68\x6F\x75\x72\x73\x22\x3E\x3C\x65\x6D\x3E\x7B\x68\x6E\x7D\x3C\x2F\x65\x6D\x3E\x20\x7B\x68\x6C\x7D\x3C\x2F\x6C\x69\x3E\x7B\x68\x3E\x7D", "\x7B\x6D\x3C\x7D\x3C\x6C\x69\x20\x63\x6C\x61\x73\x73\x3D\x22\x6D\x69\x6E\x75\x74\x65\x73\x22\x3E\x3C\x65\x6D\x3E\x7B\x6D\x6E\x7D\x3C\x2F\x65\x6D\x3E\x20\x7B\x6D\x6C\x7D\x3C\x2F\x6C\x69\x3E\x7B\x6D\x3E\x7D", "\x7B\x73\x3C\x7D\x3C\x6C\x69\x20\x63\x6C\x61\x73\x73\x3D\x22\x73\x65\x63\x6F\x6E\x64\x73\x22\x3E\x3C\x65\x6D\x3E\x7B\x73\x6E\x7D\x3C\x2F\x65\x6D\x3E\x20\x7B\x73\x6C\x7D\x3C\x2F\x6C\x69\x3E\x7B\x73\x3E\x7D", "\x3C\x2F\x75\x6C\x3E", "\x63\x6F\x75\x6E\x74\x64\x6F\x77\x6E", "\x23\x63\x6F\x75\x6E\x74\x64\x6F\x77\x6E\x5F\x74\x69\x6D\x65\x72", "\x72\x67\x62\x61\x28\x31\x30\x31\x2C\x31\x32\x37\x2C\x31\x32\x39\x2C\x30\x2E\x30\x36\x29", "\x72\x67\x62\x61\x28\x31\x30\x31\x2C\x31\x32\x37\x2C\x31\x32\x39\x2C\x30\x2E\x32\x29", "\x65\x61\x73\x65\x4F\x75\x74\x42\x6F\x75\x6E\x63\x65", "\x73\x6C\x6F\x77", "\x72\x67\x62\x61\x28\x30\x2C\x30\x2C\x30\x2C\x30\x2E\x32\x29", "\x65\x78\x74\x65\x6E\x64", "\x6D\x73\x69\x65", "\x62\x72\x6F\x77\x73\x65\x72", "\x76\x65\x72\x73\x69\x6F\x6E", "\x65\x61\x63\x68", "\x63\x69\x72\x63\x75\x6C\x61\x72\x43\x6F\x75\x6E\x74\x64\x6F\x77\x6E", "\x66\x6E", "\x63\x61\x6C\x6C", "\x73\x6C\x69\x63\x65", "\x70\x72\x6F\x74\x6F\x74\x79\x70\x65", "\x61\x70\x70\x6C\x79", "\x6F\x62\x6A\x65\x63\x74", "\x69\x6E\x69\x74", "\x4E\x6F\x20\x66\x6F\x75\x6E\x64\x20\x6D\x65\x74\x68\x6F\x64\x20", "\x65\x72\x72\x6F\x72"];
(function (_0xec89x1) {
    function _0xec89x2() {
        var _0xec89x3 = _0xec89x1(_0xbae4[0]),
            _0xec89x2 = (_0xec89x3[_0xbae4[1]]() * 20 / 100 - _0xec89xb[_0xbae4[2]]) / 2,
            _0xec89x4 = _0xec89x2 * 2 + _0xec89xb[_0xbae4[2]],
            _0xec89x5 = (_0xec89x3[_0xbae4[1]]() - _0xec89x4 * 4) / 3,
            _0xec89x6 = _0xec89x4 / 2,
            _0xec89x7 = _0xec89x4 + _0xec89x6 + _0xec89x5,
            _0xec89x8 = _0xec89x4 + _0xec89x7 + _0xec89x5,
            _0xec89x9 = _0xec89x4 + _0xec89x8 + _0xec89x5,
            _0xec89xa = _0xec89x4 / 2;
        _0xec89x1(_0xbae4[29])[_0xbae4[10]]({
            layer: true,
            name: _0xbae4[27],
            group: _0xbae4[17],
            strokeStyle: _0xec89xb[_0xbae4[28]],
            x: _0xec89x6,
            y: _0xec89xa
        })[_0xbae4[10]]({
            layer: true,
            name: _0xbae4[25],
            group: _0xbae4[17],
            strokeStyle: _0xec89xb[_0xbae4[26]],
            x: _0xec89x7,
            y: _0xec89xa
        })[_0xbae4[10]]({
            layer: true,
            name: _0xbae4[23],
            group: _0xbae4[17],
            strokeStyle: _0xec89xb[_0xbae4[24]],
            x: _0xec89x8,
            y: _0xec89xa
        })[_0xbae4[10]]({
            layer: true,
            name: _0xbae4[21],
            group: _0xbae4[17],
            strokeStyle: _0xec89xb[_0xbae4[22]],
            x: _0xec89x9,
            y: _0xec89xa
        })[_0xbae4[7]](_0xbae4[17], {
            strokeWidth: _0xec89xb[_0xbae4[18]],
            radius: _0xec89x2,
            shadowColor: _0xec89xb[_0xbae4[19]],
            shadowBlur: _0xec89xb[_0xbae4[20]]
        })[_0xbae4[10]]({
            layer: true,
            name: _0xbae4[15],
            group: _0xbae4[4],
            strokeStyle: _0xec89xb[_0xbae4[16]],
            x: _0xec89x6,
            y: _0xec89xa
        })[_0xbae4[10]]({
            layer: true,
            name: _0xbae4[13],
            group: _0xbae4[4],
            strokeStyle: _0xec89xb[_0xbae4[14]],
            x: _0xec89x7,
            y: _0xec89xa
        })[_0xbae4[10]]({
            layer: true,
            name: _0xbae4[11],
            group: _0xbae4[4],
            strokeStyle: _0xec89xb[_0xbae4[12]],
            x: _0xec89x8,
            y: _0xec89xa
        })[_0xbae4[10]]({
            layer: true,
            name: _0xbae4[8],
            group: _0xbae4[4],
            strokeStyle: _0xec89xb[_0xbae4[9]],
            x: _0xec89x9,
            y: _0xec89xa
        })[_0xbae4[7]](_0xbae4[4], {
            strokeWidth: _0xec89xb[_0xbae4[2]],
            radius: _0xec89x2,
            shadowColor: _0xec89xb[_0xbae4[5]],
            shadowBlur: _0xec89xb[_0xbae4[6]]
        })[_0xbae4[3]]();
    };

    function _0xec89x4() {
        _0xec89x1(_0xbae4[29])[_0xbae4[34]](_0xbae4[15], {
            end: _0xec89x1(_0xbae4[37])[_0xbae4[30]]() * 0.9863
        }, _0xec89xb[_0xbae4[32]], _0xec89xb[_0xbae4[33]])[_0xbae4[34]](_0xbae4[13], {
            end: _0xec89x1(_0xbae4[36])[_0xbae4[30]]() * 15
        }, _0xec89xb[_0xbae4[32]], _0xec89xb[_0xbae4[33]])[_0xbae4[34]](_0xbae4[11], {
            end: _0xec89x1(_0xbae4[35])[_0xbae4[30]]() * 6
        }, _0xec89xb[_0xbae4[32]], _0xec89xb[_0xbae4[33]])[_0xbae4[34]](_0xbae4[8], {
            end: _0xec89x1(_0xbae4[31])[_0xbae4[30]]() * 6
        }, _0xec89xb[_0xbae4[32]], _0xec89xb[_0xbae4[33]]);
    };

    function _0xec89x5() {
        _0xec89x1(_0xbae4[46])[_0xbae4[45]]({
            until: new Date(2013, 8, 30, 9),
            timezone: 1,
            format: _0xbae4[38],
            layout: _0xbae4[39] + _0xbae4[40] + _0xbae4[41] + _0xbae4[42] + _0xbae4[43] + _0xbae4[44],
            onTick: function () {
                _0xec89x4();
            }
        });
    };
    var _0xec89xb = {
        strokeDaysBackgroundColor: _0xbae4[47],
        strokeDaysColor: _0xbae4[48],
        strokeHoursBackgroundColor: _0xbae4[47],
        strokeHoursColor: _0xbae4[48],
        strokeMinutesBackgroundColor: _0xbae4[47],
        strokeMinutesColor: _0xbae4[48],
        strokeSecondsBackgroundColor: _0xbae4[47],
        strokeSecondsColor: _0xbae4[48],
        strokeWidth: 17,
        strokeBackgroundWidth: 17,
        countdownEasing: _0xbae4[49],
        countdownTickSpeed: _0xbae4[50],
        backgroundShadowColor: _0xbae4[51],
        backgroundShadowBlur: 0,
        strokeShadowColor: _0xbae4[51],
        strokeShadowBlur: 0
    };
    var _0xec89x3 = {
        init: function (_0xec89x3) {
            _0xec89xb = _0xec89x1[_0xbae4[52]](1, _0xec89xb, _0xec89x3);
            return this[_0xbae4[56]](function () {
                _0xec89x5();
                if (!(_0xec89x1[_0xbae4[54]][_0xbae4[53]] && parseInt(_0xec89x1[_0xbae4[54]][_0xbae4[55]]) < 9)) {
                    _0xec89x2();
                };
            });
        },
        update: function (_0xec89x3) {
            _0xec89xb = _0xec89x1[_0xbae4[52]](1, _0xec89xb, _0xec89x3);
        }
    };
    _0xec89x1[_0xbae4[58]][_0xbae4[57]] = function (_0xec89xb) {
        if (_0xec89x3[_0xec89xb]) {
            return _0xec89x3[_0xec89xb][_0xbae4[62]](this, Array[_0xbae4[61]][_0xbae4[60]][_0xbae4[59]](arguments, 1));
        } else {
            if (typeof _0xec89xb === _0xbae4[63] || !_0xec89xb) {
                return _0xec89x3[_0xbae4[64]][_0xbae4[62]](this, arguments);
            } else {
                _0xec89x1[_0xbae4[66]](_0xbae4[65] + _0xec89xb);
            };
        };
    };
})(jQuery);
/*
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright Ã‚Â© 2001 Robert Penner
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */