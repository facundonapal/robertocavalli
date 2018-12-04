!function() {
    "use strict";
    function t() {
        return "cf-marker-" + Math.random().toString().slice(2)
    }
    function e() {
        for (var t = [], e = 0; e < arguments.length; e++)
            t[e] = arguments[e];
        (n = console.warn || console.log).call.apply(n, [console, "[ROCKET LOADER] "].concat(t));
        var n
    }
    function n(t, e) {
        var n = e.parentNode;
        n && f(t, n, e)
    }
    function r(t, e) {
        f(t, e, e.childNodes[0])
    }
    function i(t) {
        var e = t.parentNode;
        e && e.removeChild(t)
    }
    function o(t) {
        var e = t.namespaceURI === S ? "xlink:href" : "src";
        return t.getAttribute(e)
    }
    function a(t) {
        return !(t.type && !w[t.type.trim()]) && ((!x || !t.hasAttribute("nomodule")) && !(!x && "module" === t.type))
    }
    function c(t, e) {
        return function(n) {
            if (e(),
            t)
                return t.call(this, n)
        }
    }
    function s(t, e) {
        t.onload = c(t.onload, e),
        t.onerror = c(t.onerror, e)
    }
    function u(t) {
        var e = document.createElementNS(t.namespaceURI, "script");
        e.textContent = t.textContent;
        for (var n = 0; n < t.attributes.length; n++) {
            var r = t.attributes[n];
            r.namespaceURI ? e.setAttributeNS(r.namespaceURI, r.name, r.value) : e.setAttribute(r.name, r.value)
        }
        return e
    }
    function p(t, e) {
        var n = new g(e);
        t.dispatchEvent(n)
    }
    function l(e) {
        var n = e.namespaceURI === S
          , r = t();
        e.setAttribute(r, "");
        var o = n ? "<svg>" + e.outerHTML + "</svg>" : e.outerHTML;
        P.call(document, o);
        var a = document.querySelector("[" + r + "]");
        if (a) {
            a.removeAttribute(r);
            var c = n && a.parentNode;
            c && i(c)
        }
        return a
    }
    function d(t) {
        if (t && "handleEvent"in t) {
            var e = t.handleEvent;
            return "function" == typeof e ? e.bind(t) : e
        }
        return t
    }
    function f(t, e, n) {
        var r = n ? function(t) {
            return e.insertBefore(t, n)
        }
        : function(t) {
            return e.appendChild(t)
        }
        ;
        Array.prototype.slice.call(t).forEach(r)
    }
    function h(t, e) {
        function n() {
            this.constructor = t
        }
        E(t, e),
        t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
        new n)
    }
    function v() {
        var t = window;
        "undefined" != typeof Promise && (t.__cfQR = {
            done: new Promise(function(t) {
                return O = t
            }
            )
        })
    }
    function m(t) {
        var e = new I(t)
          , n = new _(e);
        e.harvestScriptsInDocument(),
        new C(e,{
            blocking: !0,
            docWriteSimulator: n,
            callback: function() {}
        }).run()
    }
    function y(t) {
        var e = new I(t)
          , n = new _(e);
        e.harvestScriptsInDocument();
        var r = new C(e,{
            blocking: !1,
            docWriteSimulator: n,
            callback: function() {
                r.removePreloadHints(),
                b(t)
            }
        });
        r.insertPreloadHints(),
        D.runOnLoad(function() {
            r.run()
        })
    }
    function b(t) {
        var e = new L(t);
        D.simulateStateBeforeDeferScriptsActivation(),
        e.harvestDeferScriptsInDocument(),
        new C(e,{
            blocking: !1,
            callback: function() {
                D.simulateStateAfterDeferScriptsActivation(),
                O && O()
            }
        }).run()
    }
    var S = "http://www.w3.org/2000/svg"
      , w = {
        "application/ecmascript": !0,
        "application/javascript": !0,
        "application/x-ecmascript": !0,
        "application/x-javascript": !0,
        "text/ecmascript": !0,
        "text/javascript": !0,
        "text/javascript1.0": !0,
        "text/javascript1.1": !0,
        "text/javascript1.2": !0,
        "text/javascript1.3": !0,
        "text/javascript1.4": !0,
        "text/javascript1.5": !0,
        "text/jscript": !0,
        "text/livescript": !0,
        "text/x-ecmascript": !0,
        "text/x-javascript": !0,
        module: !0
    }
      , x = void 0 !== document.createElement("script").noModule
      , g = function() {
        var t = window;
        return t.__rocketLoaderEventCtor || Object.defineProperty(t, "__rocketLoaderEventCtor", {
            value: Event
        }),
        t.__rocketLoaderEventCtor
    }()
      , P = document.write
      , k = document.writeln
      , E = Object.setPrototypeOf || {
        __proto__: []
    }instanceof Array && function(t, e) {
        t.__proto__ = e
    }
    || function(t, e) {
        for (var n in e)
            e.hasOwnProperty(n) && (t[n] = e[n])
    }
      , A = function() {
        function t(t) {
            this.nonce = t,
            this.items = []
        }
        return Object.defineProperty(t.prototype, "hasItems", {
            get: function() {
                return this.items.length > 0
            },
            enumerable: !0,
            configurable: !0
        }),
        t.prototype.pop = function() {
            return this.items.pop()
        }
        ,
        t.prototype.forEach = function(t) {
            this.items.forEach(function(e) {
                var n = e.script;
                return t(n)
            })
        }
        ,
        t.prototype.harvestScripts = function(t, e) {
            var n = this
              , r = e.filter
              , i = e.mutate;
            Array.prototype.slice.call(t.querySelectorAll("script")).filter(r).reverse().forEach(function(t) {
                i(t),
                n.pushScriptOnStack(t)
            })
        }
        ,
        t.prototype.pushScriptOnStack = function(t) {
            var e = t.parentNode
              , n = this.createPlaceholder(t)
              , r = !!o(t);
            e.replaceChild(n, t),
            this.items.push({
                script: t,
                placeholder: n,
                external: r,
                async: r && t.hasAttribute("async"),
                executable: a(t)
            })
        }
        ,
        t.prototype.hasNonce = function(t) {
            return 0 === t.type.indexOf(this.nonce)
        }
        ,
        t.prototype.removeNonce = function(t) {
            t.type = t.type.substr(this.nonce.length)
        }
        ,
        t.prototype.makeNonExecutable = function(t) {
            t.type = this.nonce + t.type
        }
        ,
        t.prototype.isPendingDeferScript = function(t) {
            return t.hasAttribute("defer") || t.type === this.nonce + "module" && !t.hasAttribute("async")
        }
        ,
        t
    }()
      , I = function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return h(e, t),
        e.prototype.harvestScriptsInDocument = function() {
            var t = this;
            this.harvestScripts(document, {
                filter: function(e) {
                    return t.hasNonce(e)
                },
                mutate: function(e) {
                    t.isPendingDeferScript(e) || t.removeNonce(e)
                }
            })
        }
        ,
        e.prototype.harvestScriptsAfterDocWrite = function(t) {
            var e = this;
            this.harvestScripts(t, {
                filter: a,
                mutate: function(t) {
                    e.isPendingDeferScript(t) && e.makeNonExecutable(t)
                }
            })
        }
        ,
        e.prototype.createPlaceholder = function(t) {
            return document.createComment(t.outerHTML)
        }
        ,
        e
    }(A)
      , L = function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return h(e, t),
        e.prototype.harvestDeferScriptsInDocument = function() {
            var t = this;
            this.harvestScripts(document, {
                filter: function(e) {
                    return t.hasNonce(e) && t.isPendingDeferScript(e)
                },
                mutate: function(e) {
                    return t.removeNonce(e)
                }
            })
        }
        ,
        e.prototype.createPlaceholder = function(t) {
            var e = u(t);
            return this.makeNonExecutable(e),
            e
        }
        ,
        e
    }(A)
      , _ = function() {
        function t(t) {
            this.scriptStack = t
        }
        return t.prototype.enable = function(t) {
            var e = this;
            this.insertionPointMarker = t,
            this.buffer = "",
            document.write = function() {
                for (var t = [], n = 0; n < arguments.length; n++)
                    t[n] = arguments[n];
                return e.write(t, !1)
            }
            ,
            document.writeln = function() {
                for (var t = [], n = 0; n < arguments.length; n++)
                    t[n] = arguments[n];
                return e.write(t, !0)
            }
        }
        ,
        t.prototype.flushWrittenContentAndDisable = function() {
            document.write = P,
            document.writeln = k,
            this.buffer.length && (document.contains(this.insertionPointMarker) ? this.insertionPointMarker.parentNode === document.head ? this.insertContentInHead() : this.insertContentInBody() : e("Insertion point marker for document.write was detached from document:", "Markup will not be inserted"))
        }
        ,
        t.prototype.insertContentInHead = function() {
            var t = new DOMParser
              , e = "<!DOCTYPE html><head>" + this.buffer + "</head>"
              , i = t.parseFromString(e, "text/html");
            if (this.scriptStack.harvestScriptsAfterDocWrite(i),
            n(i.head.childNodes, this.insertionPointMarker),
            i.body.childNodes.length) {
                for (var o = Array.prototype.slice.call(i.body.childNodes), a = this.insertionPointMarker.nextSibling; a; )
                    o.push(a),
                    a = a.nextSibling;
                document.body || P.call(document, "<body>"),
                r(o, document.body)
            }
        }
        ,
        t.prototype.insertContentInBody = function() {
            var t = this.insertionPointMarker.parentElement
              , e = document.createElement(t.tagName);
            e.innerHTML = this.buffer,
            this.scriptStack.harvestScriptsAfterDocWrite(e),
            n(e.childNodes, this.insertionPointMarker)
        }
        ,
        t.prototype.write = function(t, e) {
            var n = document.currentScript;
            n && o(n) && n.hasAttribute("async") ? (r = e ? k : P).call.apply(r, [document].concat(t)) : this.buffer += t.map(String).join(e ? "\n" : "");
            var r
        }
        ,
        t
    }()
      , H = function() {
        function t() {
            var t = this;
            this.simulatedReadyState = "loading",
            this.bypassEventsInProxies = !1,
            this.nativeWindowAddEventListener = window.addEventListener;
            try {
                Object.defineProperty(document, "readyState", {
                    get: function() {
                        return t.simulatedReadyState
                    }
                })
            } catch (e) {}
            this.createConditionalEventListenerProxy(document, ["DOMContentLoaded", "readystatechange"]),
            this.createConditionalEventListenerProxy(window, ["load"]),
            this.updateInlineHandlers()
        }
        return t.prototype.runOnLoad = function(t) {
            var e = this;
            this.nativeWindowAddEventListener.call(window, "load", function(n) {
                if (!e.bypassEventsInProxies)
                    return t(n)
            })
        }
        ,
        t.prototype.updateInlineHandlers = function() {
            this.proxyInlineHandler(document, "onreadystatechange"),
            this.proxyInlineHandler(window, "onload"),
            document.body && this.proxyInlineHandler(document.body, "onload")
        }
        ,
        t.prototype.simulateStateBeforeDeferScriptsActivation = function() {
            this.bypassEventsInProxies = !0,
            this.simulatedReadyState = "interactive",
            p(document, "readystatechange"),
            this.bypassEventsInProxies = !1
        }
        ,
        t.prototype.simulateStateAfterDeferScriptsActivation = function() {
            var t = this;
            this.bypassEventsInProxies = !0,
            p(document, "DOMContentLoaded"),
            this.simulatedReadyState = "complete",
            p(document, "readystatechange"),
            p(window, "load"),
            this.bypassEventsInProxies = !1,
            window.setTimeout(function() {
                return t.bypassEventsInProxies = !0
            }, 0)
        }
        ,
        t.prototype.createConditionalEventListenerProxy = function(t, e) {
            var n = this
              , r = t.addEventListener
              , i = t.removeEventListener;
            t.addEventListener = function(i, o) {
                for (var a = [], c = 2; c < arguments.length; c++)
                    a[c - 2] = arguments[c];
                var s = o && o.__rocketLoaderProxiedHandler;
                if (!s) {
                    var u = d(o);
                    if ("function" == typeof u) {
                        var p = n;
                        s = function(t) {
                            if (p.bypassEventsInProxies || e.indexOf(i) < 0)
                                return u.call(this, t)
                        }
                        ,
                        Object.defineProperty(o, "__rocketLoaderProxiedHandler", {
                            value: s
                        })
                    } else
                        s = o
                }
                r.call.apply(r, [t, i, s].concat(a))
            }
            ,
            t.removeEventListener = function(e, n) {
                for (var r = [], o = 2; o < arguments.length; o++)
                    r[o - 2] = arguments[o];
                var a = n && n.__rocketLoaderProxiedHandler || n;
                i.call.apply(i, [t, e, a].concat(r))
            }
        }
        ,
        t.prototype.proxyInlineHandler = function(t, e) {
            var n = t[e];
            if (n && !n.__rocketLoaderInlineHandlerProxy) {
                var r = this;
                t[e] = function(t) {
                    if (r.bypassEventsInProxies)
                        return n.call(this, t)
                }
            }
        }
        ,
        t
    }()
      , D = function() {
        var t = window;
        return t.__rocketLoaderLoadProgressSimulator || Object.defineProperty(t, "__rocketLoaderLoadProgressSimulator", {
            value: new H
        }),
        t.__rocketLoaderLoadProgressSimulator
    }()
      , C = function() {
        function t(t, e) {
            this.scriptStack = t,
            this.settings = e,
            this.preloadHints = []
        }
        return t.prototype.insertPreloadHints = function() {
            var t = this;
            this.scriptStack.forEach(function(e) {
                var n = o(e);
                if (n) {
                    var r = document.createElement("link");
                    r.setAttribute("rel", "preload"),
                    r.setAttribute("as", "script"),
                    r.setAttribute("href", n),
                    e.crossOrigin && r.setAttribute("crossorigin", e.crossOrigin),
                    document.head.appendChild(r),
                    t.preloadHints.push(r)
                }
            })
        }
        ,
        t.prototype.removePreloadHints = function() {
            this.preloadHints.forEach(function(t) {
                return i(t)
            })
        }
        ,
        t.prototype.run = function() {
            for (var t = this, e = this; this.scriptStack.hasItems; ) {
                var n = function() {
                    var n = e.settings.docWriteSimulator
                      , r = e.scriptStack.pop();
                    n && !r.async && n.enable(r.placeholder);
                    var i = e.activateScript(r);
                    return i ? r.external && r.executable && !r.async ? (s(i, function() {
                        t.finalizeActivation(r),
                        t.run()
                    }),
                    {
                        value: void 0
                    }) : void e.finalizeActivation(r) : (n && n.flushWrittenContentAndDisable(),
                    "continue")
                }();
                if ("object" == typeof n)
                    return n.value
            }
            this.scriptStack.hasItems || this.settings.callback()
        }
        ,
        t.prototype.finalizeActivation = function(t) {
            this.settings.docWriteSimulator && !t.async && this.settings.docWriteSimulator.flushWrittenContentAndDisable(),
            D.updateInlineHandlers(),
            i(t.placeholder)
        }
        ,
        t.prototype.activateScript = function(t) {
            var n = t.script
              , r = t.placeholder
              , i = t.external
              , o = t.async
              , a = r.parentNode;
            if (!document.contains(r))
                return e("Placeholder for script \n" + n.outerHTML + "\n was detached from document.", "Script will not be executed."),
                null;
            var c = this.settings.blocking && i && !o ? l(n) : u(n);
            return c ? (a.insertBefore(c, r),
            c) : (e("Failed to create activatable copy of script \n" + n.outerHTML + "\n", "Script will not be executed."),
            null)
        }
        ,
        t
    }()
      , N = "data-cf-nonce"
      , O = void 0;
    !function() {
        var t = document.currentScript;
        if (t) {
            var n = t.getAttribute(N);
            if (n) {
                var r = !t.hasAttribute("defer");
                i(t),
                D.updateInlineHandlers(),
                r ? m(n) : (v(),
                y(n))
            } else
                e("Activator script doesn't have nonce. No scripts will be executed.")
        } else
            e("Can't obtain activator script. No scripts will be executed.")
    }()
}();
