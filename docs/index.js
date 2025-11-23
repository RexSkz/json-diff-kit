(function (factory) {
	typeof define === 'function' && define.amd ? define(factory) :
	factory();
})((function () { 'use strict';

	function __$styleInject(css) {
	    if (!css) return;

	    if (typeof window == 'undefined') return;
	    var style = document.createElement('style');
	    style.setAttribute('media', 'screen');

	    style.innerHTML = css;
	    document.head.appendChild(style);
	    return css;
	}

	var react = {exports: {}};

	var react_production_min = {};

	/* eslint-disable no-unused-vars */ var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty$9 = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;
	function toObject(val) {
	    if (val === null || val === undefined) {
	        throw new TypeError('Object.assign cannot be called with null or undefined');
	    }
	    return Object(val);
	}
	function shouldUseNative() {
	    try {
	        if (!Object.assign) {
	            return false;
	        }
	        // Detect buggy property enumeration order in older V8 versions.
	        // https://bugs.chromium.org/p/v8/issues/detail?id=4118
	        var test1 = new String('abc'); // eslint-disable-line no-new-wrappers
	        test1[5] = 'de';
	        if (Object.getOwnPropertyNames(test1)[0] === '5') {
	            return false;
	        }
	        // https://bugs.chromium.org/p/v8/issues/detail?id=3056
	        var test2 = {};
	        for(var i = 0; i < 10; i++){
	            test2['_' + String.fromCharCode(i)] = i;
	        }
	        var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
	            return test2[n];
	        });
	        if (order2.join('') !== '0123456789') {
	            return false;
	        }
	        // https://bugs.chromium.org/p/v8/issues/detail?id=3056
	        var test3 = {};
	        'abcdefghijklmnopqrst'.split('').forEach(function(letter) {
	            test3[letter] = letter;
	        });
	        if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
	            return false;
	        }
	        return true;
	    } catch (err) {
	        // We don't expect any of the above to throw, but better to be safe.
	        return false;
	    }
	}
	var objectAssign = shouldUseNative() ? Object.assign : function(target, source) {
	    var from;
	    var to = toObject(target);
	    var symbols;
	    for(var s = 1; s < arguments.length; s++){
	        from = Object(arguments[s]);
	        for(var key in from){
	            if (hasOwnProperty$9.call(from, key)) {
	                to[key] = from[key];
	            }
	        }
	        if (getOwnPropertySymbols) {
	            symbols = getOwnPropertySymbols(from);
	            for(var i = 0; i < symbols.length; i++){
	                if (propIsEnumerable.call(from, symbols[i])) {
	                    to[symbols[i]] = from[symbols[i]];
	                }
	            }
	        }
	    }
	    return to;
	};

	var l = objectAssign, n$1 = 60103, p = 60106;
	react_production_min.Fragment = 60107;
	react_production_min.StrictMode = 60108;
	react_production_min.Profiler = 60114;
	var q = 60109, r$1 = 60110, t$1 = 60112;
	react_production_min.Suspense = 60113;
	var u = 60115, v = 60116;
	if ("function" === typeof Symbol && Symbol.for) {
	    var w = Symbol.for;
	    n$1 = w("react.element");
	    p = w("react.portal");
	    react_production_min.Fragment = w("react.fragment");
	    react_production_min.StrictMode = w("react.strict_mode");
	    react_production_min.Profiler = w("react.profiler");
	    q = w("react.provider");
	    r$1 = w("react.context");
	    t$1 = w("react.forward_ref");
	    react_production_min.Suspense = w("react.suspense");
	    u = w("react.memo");
	    v = w("react.lazy");
	}
	var x = "function" === typeof Symbol && Symbol.iterator;
	function y$1(a) {
	    if (null === a || "object" !== typeof a) return null;
	    a = x && a[x] || a["@@iterator"];
	    return "function" === typeof a ? a : null;
	}
	function z(a) {
	    for(var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++)b += "&args[]=" + encodeURIComponent(arguments[c]);
	    return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
	}
	var A = {
	    isMounted: function() {
	        return !1;
	    },
	    enqueueForceUpdate: function() {},
	    enqueueReplaceState: function() {},
	    enqueueSetState: function() {}
	}, B$1 = {};
	function C(a, b, c) {
	    this.props = a;
	    this.context = b;
	    this.refs = B$1;
	    this.updater = c || A;
	}
	C.prototype.isReactComponent = {};
	C.prototype.setState = function(a, b) {
	    if ("object" !== typeof a && "function" !== typeof a && null != a) throw Error(z(85));
	    this.updater.enqueueSetState(this, a, b, "setState");
	};
	C.prototype.forceUpdate = function(a) {
	    this.updater.enqueueForceUpdate(this, a, "forceUpdate");
	};
	function D$1() {}
	D$1.prototype = C.prototype;
	function E$1(a, b, c) {
	    this.props = a;
	    this.context = b;
	    this.refs = B$1;
	    this.updater = c || A;
	}
	var F$1 = E$1.prototype = new D$1;
	F$1.constructor = E$1;
	l(F$1, C.prototype);
	F$1.isPureReactComponent = !0;
	var G$1 = {
	    current: null
	}, H$1 = Object.prototype.hasOwnProperty, I$1 = {
	    key: !0,
	    ref: !0,
	    __self: !0,
	    __source: !0
	};
	function J(a, b, c) {
	    var e, d = {}, k = null, h = null;
	    if (null != b) for(e in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (k = "" + b.key), b)H$1.call(b, e) && !I$1.hasOwnProperty(e) && (d[e] = b[e]);
	    var g = arguments.length - 2;
	    if (1 === g) d.children = c;
	    else if (1 < g) {
	        for(var f = Array(g), m = 0; m < g; m++)f[m] = arguments[m + 2];
	        d.children = f;
	    }
	    if (a && a.defaultProps) for(e in g = a.defaultProps, g)void 0 === d[e] && (d[e] = g[e]);
	    return {
	        $$typeof: n$1,
	        type: a,
	        key: k,
	        ref: h,
	        props: d,
	        _owner: G$1.current
	    };
	}
	function K(a, b) {
	    return {
	        $$typeof: n$1,
	        type: a.type,
	        key: b,
	        ref: a.ref,
	        props: a.props,
	        _owner: a._owner
	    };
	}
	function L(a) {
	    return "object" === typeof a && null !== a && a.$$typeof === n$1;
	}
	function escape(a) {
	    var b = {
	        "=": "=0",
	        ":": "=2"
	    };
	    return "$" + a.replace(/[=:]/g, function(a) {
	        return b[a];
	    });
	}
	var M$1 = /\/+/g;
	function N$1(a, b) {
	    return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b.toString(36);
	}
	function O$1(a, b, c, e, d) {
	    var k = typeof a;
	    if ("undefined" === k || "boolean" === k) a = null;
	    var h = !1;
	    if (null === a) h = !0;
	    else switch(k){
	        case "string":
	        case "number":
	            h = !0;
	            break;
	        case "object":
	            switch(a.$$typeof){
	                case n$1:
	                case p:
	                    h = !0;
	            }
	    }
	    if (h) return h = a, d = d(h), a = "" === e ? "." + N$1(h, 0) : e, Array.isArray(d) ? (c = "", null != a && (c = a.replace(M$1, "$&/") + "/"), O$1(d, b, c, "", function(a) {
	        return a;
	    })) : null != d && (L(d) && (d = K(d, c + (!d.key || h && h.key === d.key ? "" : ("" + d.key).replace(M$1, "$&/") + "/") + a)), b.push(d)), 1;
	    h = 0;
	    e = "" === e ? "." : e + ":";
	    if (Array.isArray(a)) for(var g = 0; g < a.length; g++){
	        k = a[g];
	        var f = e + N$1(k, g);
	        h += O$1(k, b, c, f, d);
	    }
	    else if (f = y$1(a), "function" === typeof f) for(a = f.call(a), g = 0; !(k = a.next()).done;)k = k.value, f = e + N$1(k, g++), h += O$1(k, b, c, f, d);
	    else if ("object" === k) throw b = "" + a, Error(z(31, "[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b));
	    return h;
	}
	function P$1(a, b, c) {
	    if (null == a) return a;
	    var e = [], d = 0;
	    O$1(a, e, "", "", function(a) {
	        return b.call(c, a, d++);
	    });
	    return e;
	}
	function Q(a) {
	    if (-1 === a._status) {
	        var b = a._result;
	        b = b();
	        a._status = 0;
	        a._result = b;
	        b.then(function(b) {
	            0 === a._status && (b = b.default, a._status = 1, a._result = b);
	        }, function(b) {
	            0 === a._status && (a._status = 2, a._result = b);
	        });
	    }
	    if (1 === a._status) return a._result;
	    throw a._result;
	}
	var R$1 = {
	    current: null
	};
	function S$1() {
	    var a = R$1.current;
	    if (null === a) throw Error(z(321));
	    return a;
	}
	var T$1 = {
	    ReactCurrentDispatcher: R$1,
	    ReactCurrentBatchConfig: {
	        transition: 0
	    },
	    ReactCurrentOwner: G$1,
	    IsSomeRendererActing: {
	        current: !1
	    },
	    assign: l
	};
	react_production_min.Children = {
	    map: P$1,
	    forEach: function(a, b, c) {
	        P$1(a, function() {
	            b.apply(this, arguments);
	        }, c);
	    },
	    count: function(a) {
	        var b = 0;
	        P$1(a, function() {
	            b++;
	        });
	        return b;
	    },
	    toArray: function(a) {
	        return P$1(a, function(a) {
	            return a;
	        }) || [];
	    },
	    only: function(a) {
	        if (!L(a)) throw Error(z(143));
	        return a;
	    }
	};
	react_production_min.Component = C;
	react_production_min.PureComponent = E$1;
	react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = T$1;
	react_production_min.cloneElement = function(a, b, c) {
	    if (null === a || void 0 === a) throw Error(z(267, a));
	    var e = l({}, a.props), d = a.key, k = a.ref, h = a._owner;
	    if (null != b) {
	        void 0 !== b.ref && (k = b.ref, h = G$1.current);
	        void 0 !== b.key && (d = "" + b.key);
	        if (a.type && a.type.defaultProps) var g = a.type.defaultProps;
	        for(f in b)H$1.call(b, f) && !I$1.hasOwnProperty(f) && (e[f] = void 0 === b[f] && void 0 !== g ? g[f] : b[f]);
	    }
	    var f = arguments.length - 2;
	    if (1 === f) e.children = c;
	    else if (1 < f) {
	        g = Array(f);
	        for(var m = 0; m < f; m++)g[m] = arguments[m + 2];
	        e.children = g;
	    }
	    return {
	        $$typeof: n$1,
	        type: a.type,
	        key: d,
	        ref: k,
	        props: e,
	        _owner: h
	    };
	};
	react_production_min.createContext = function(a, b) {
	    void 0 === b && (b = null);
	    a = {
	        $$typeof: r$1,
	        _calculateChangedBits: b,
	        _currentValue: a,
	        _currentValue2: a,
	        _threadCount: 0,
	        Provider: null,
	        Consumer: null
	    };
	    a.Provider = {
	        $$typeof: q,
	        _context: a
	    };
	    return a.Consumer = a;
	};
	react_production_min.createElement = J;
	react_production_min.createFactory = function(a) {
	    var b = J.bind(null, a);
	    b.type = a;
	    return b;
	};
	react_production_min.createRef = function() {
	    return {
	        current: null
	    };
	};
	react_production_min.forwardRef = function(a) {
	    return {
	        $$typeof: t$1,
	        render: a
	    };
	};
	react_production_min.isValidElement = L;
	react_production_min.lazy = function(a) {
	    return {
	        $$typeof: v,
	        _payload: {
	            _status: -1,
	            _result: a
	        },
	        _init: Q
	    };
	};
	react_production_min.memo = function(a, b) {
	    return {
	        $$typeof: u,
	        type: a,
	        compare: void 0 === b ? null : b
	    };
	};
	react_production_min.useCallback = function(a, b) {
	    return S$1().useCallback(a, b);
	};
	react_production_min.useContext = function(a, b) {
	    return S$1().useContext(a, b);
	};
	react_production_min.useDebugValue = function() {};
	react_production_min.useEffect = function(a, b) {
	    return S$1().useEffect(a, b);
	};
	react_production_min.useImperativeHandle = function(a, b, c) {
	    return S$1().useImperativeHandle(a, b, c);
	};
	react_production_min.useLayoutEffect = function(a, b) {
	    return S$1().useLayoutEffect(a, b);
	};
	react_production_min.useMemo = function(a, b) {
	    return S$1().useMemo(a, b);
	};
	react_production_min.useReducer = function(a, b, c) {
	    return S$1().useReducer(a, b, c);
	};
	react_production_min.useRef = function(a) {
	    return S$1().useRef(a);
	};
	react_production_min.useState = function(a) {
	    return S$1().useState(a);
	};
	react_production_min.version = "17.0.2";

	{
	    react.exports = react_production_min;
	}
	var React = react.exports;

	var reactDom = {exports: {}};

	var reactDom_production_min = {};

	var scheduler = {exports: {}};

	var scheduler_production_min = {};

	(function(exports) {
	    var f, g, h, k;
	    if ("object" === typeof performance && "function" === typeof performance.now) {
	        var l = performance;
	        exports.unstable_now = function() {
	            return l.now();
	        };
	    } else {
	        var p = Date, q = p.now();
	        exports.unstable_now = function() {
	            return p.now() - q;
	        };
	    }
	    if ("undefined" === typeof window || "function" !== typeof MessageChannel) {
	        var t = null, u = null, w = function() {
	            if (null !== t) try {
	                var a = exports.unstable_now();
	                t(!0, a);
	                t = null;
	            } catch (b) {
	                throw setTimeout(w, 0), b;
	            }
	        };
	        f = function(a) {
	            null !== t ? setTimeout(f, 0, a) : (t = a, setTimeout(w, 0));
	        };
	        g = function(a, b) {
	            u = setTimeout(a, b);
	        };
	        h = function() {
	            clearTimeout(u);
	        };
	        exports.unstable_shouldYield = function() {
	            return !1;
	        };
	        k = exports.unstable_forceFrameRate = function() {};
	    } else {
	        var x = window.setTimeout, y = window.clearTimeout;
	        if ("undefined" !== typeof console) {
	            var z = window.cancelAnimationFrame;
	            "function" !== typeof window.requestAnimationFrame && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");
	            "function" !== typeof z && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");
	        }
	        var A = !1, B = null, C = -1, D = 5, E = 0;
	        exports.unstable_shouldYield = function() {
	            return exports.unstable_now() >= E;
	        };
	        k = function() {};
	        exports.unstable_forceFrameRate = function(a) {
	            0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : D = 0 < a ? Math.floor(1E3 / a) : 5;
	        };
	        var F = new MessageChannel, G = F.port2;
	        F.port1.onmessage = function() {
	            if (null !== B) {
	                var a = exports.unstable_now();
	                E = a + D;
	                try {
	                    B(!0, a) ? G.postMessage(null) : (A = !1, B = null);
	                } catch (b) {
	                    throw G.postMessage(null), b;
	                }
	            } else A = !1;
	        };
	        f = function(a) {
	            B = a;
	            A || (A = !0, G.postMessage(null));
	        };
	        g = function(a, b) {
	            C = x(function() {
	                a(exports.unstable_now());
	            }, b);
	        };
	        h = function() {
	            y(C);
	            C = -1;
	        };
	    }
	    function H(a, b) {
	        var c = a.length;
	        a.push(b);
	        a: for(;;){
	            var d = c - 1 >>> 1, e = a[d];
	            if (void 0 !== e && 0 < I(e, b)) a[d] = b, a[c] = e, c = d;
	            else break a;
	        }
	    }
	    function J(a) {
	        a = a[0];
	        return void 0 === a ? null : a;
	    }
	    function K(a) {
	        var b = a[0];
	        if (void 0 !== b) {
	            var c = a.pop();
	            if (c !== b) {
	                a[0] = c;
	                a: for(var d = 0, e = a.length; d < e;){
	                    var m = 2 * (d + 1) - 1, n = a[m], v = m + 1, r = a[v];
	                    if (void 0 !== n && 0 > I(n, c)) void 0 !== r && 0 > I(r, n) ? (a[d] = r, a[v] = c, d = v) : (a[d] = n, a[m] = c, d = m);
	                    else if (void 0 !== r && 0 > I(r, c)) a[d] = r, a[v] = c, d = v;
	                    else break a;
	                }
	            }
	            return b;
	        }
	        return null;
	    }
	    function I(a, b) {
	        var c = a.sortIndex - b.sortIndex;
	        return 0 !== c ? c : a.id - b.id;
	    }
	    var L = [], M = [], N = 1, O = null, P = 3, Q = !1, R = !1, S = !1;
	    function T(a) {
	        for(var b = J(M); null !== b;){
	            if (null === b.callback) K(M);
	            else if (b.startTime <= a) K(M), b.sortIndex = b.expirationTime, H(L, b);
	            else break;
	            b = J(M);
	        }
	    }
	    function U(a) {
	        S = !1;
	        T(a);
	        if (!R) if (null !== J(L)) R = !0, f(V);
	        else {
	            var b = J(M);
	            null !== b && g(U, b.startTime - a);
	        }
	    }
	    function V(a, b) {
	        R = !1;
	        S && (S = !1, h());
	        Q = !0;
	        var c = P;
	        try {
	            T(b);
	            for(O = J(L); null !== O && (!(O.expirationTime > b) || a && !exports.unstable_shouldYield());){
	                var d = O.callback;
	                if ("function" === typeof d) {
	                    O.callback = null;
	                    P = O.priorityLevel;
	                    var e = d(O.expirationTime <= b);
	                    b = exports.unstable_now();
	                    "function" === typeof e ? O.callback = e : O === J(L) && K(L);
	                    T(b);
	                } else K(L);
	                O = J(L);
	            }
	            if (null !== O) var m = !0;
	            else {
	                var n = J(M);
	                null !== n && g(U, n.startTime - b);
	                m = !1;
	            }
	            return m;
	        } finally{
	            O = null, P = c, Q = !1;
	        }
	    }
	    var W = k;
	    exports.unstable_IdlePriority = 5;
	    exports.unstable_ImmediatePriority = 1;
	    exports.unstable_LowPriority = 4;
	    exports.unstable_NormalPriority = 3;
	    exports.unstable_Profiling = null;
	    exports.unstable_UserBlockingPriority = 2;
	    exports.unstable_cancelCallback = function(a) {
	        a.callback = null;
	    };
	    exports.unstable_continueExecution = function() {
	        R || Q || (R = !0, f(V));
	    };
	    exports.unstable_getCurrentPriorityLevel = function() {
	        return P;
	    };
	    exports.unstable_getFirstCallbackNode = function() {
	        return J(L);
	    };
	    exports.unstable_next = function(a) {
	        switch(P){
	            case 1:
	            case 2:
	            case 3:
	                var b = 3;
	                break;
	            default:
	                b = P;
	        }
	        var c = P;
	        P = b;
	        try {
	            return a();
	        } finally{
	            P = c;
	        }
	    };
	    exports.unstable_pauseExecution = function() {};
	    exports.unstable_requestPaint = W;
	    exports.unstable_runWithPriority = function(a, b) {
	        switch(a){
	            case 1:
	            case 2:
	            case 3:
	            case 4:
	            case 5:
	                break;
	            default:
	                a = 3;
	        }
	        var c = P;
	        P = a;
	        try {
	            return b();
	        } finally{
	            P = c;
	        }
	    };
	    exports.unstable_scheduleCallback = function(a, b, c) {
	        var d = exports.unstable_now();
	        "object" === typeof c && null !== c ? (c = c.delay, c = "number" === typeof c && 0 < c ? d + c : d) : c = d;
	        switch(a){
	            case 1:
	                var e = -1;
	                break;
	            case 2:
	                e = 250;
	                break;
	            case 5:
	                e = 1073741823;
	                break;
	            case 4:
	                e = 1E4;
	                break;
	            default:
	                e = 5E3;
	        }
	        e = c + e;
	        a = {
	            id: N++,
	            callback: b,
	            priorityLevel: a,
	            startTime: c,
	            expirationTime: e,
	            sortIndex: -1
	        };
	        c > d ? (a.sortIndex = c, H(M, a), null === J(L) && a === J(M) && (S ? h() : S = !0, g(U, c - d))) : (a.sortIndex = e, H(L, a), R || Q || (R = !0, f(V)));
	        return a;
	    };
	    exports.unstable_wrapCallback = function(a) {
	        var b = P;
	        return function() {
	            var c = P;
	            P = b;
	            try {
	                return a.apply(this, arguments);
	            } finally{
	                P = c;
	            }
	        };
	    };
	})(scheduler_production_min);

	{
	    scheduler.exports = scheduler_production_min;
	}

	var aa = react.exports, m = objectAssign, r = scheduler.exports;
	function y(a) {
	    for(var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++)b += "&args[]=" + encodeURIComponent(arguments[c]);
	    return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
	}
	if (!aa) throw Error(y(227));
	var ba = new Set, ca = {};
	function da(a, b) {
	    ea(a, b);
	    ea(a + "Capture", b);
	}
	function ea(a, b) {
	    ca[a] = b;
	    for(a = 0; a < b.length; a++)ba.add(b[a]);
	}
	var fa = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement), ha = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, ia = Object.prototype.hasOwnProperty, ja = {}, ka = {};
	function la(a) {
	    if (ia.call(ka, a)) return !0;
	    if (ia.call(ja, a)) return !1;
	    if (ha.test(a)) return ka[a] = !0;
	    ja[a] = !0;
	    return !1;
	}
	function ma(a, b, c, d) {
	    if (null !== c && 0 === c.type) return !1;
	    switch(typeof b){
	        case "function":
	        case "symbol":
	            return !0;
	        case "boolean":
	            if (d) return !1;
	            if (null !== c) return !c.acceptsBooleans;
	            a = a.toLowerCase().slice(0, 5);
	            return "data-" !== a && "aria-" !== a;
	        default:
	            return !1;
	    }
	}
	function na(a, b, c, d) {
	    if (null === b || "undefined" === typeof b || ma(a, b, c, d)) return !0;
	    if (d) return !1;
	    if (null !== c) switch(c.type){
	        case 3:
	            return !b;
	        case 4:
	            return !1 === b;
	        case 5:
	            return isNaN(b);
	        case 6:
	            return isNaN(b) || 1 > b;
	    }
	    return !1;
	}
	function B(a, b, c, d, e, f, g) {
	    this.acceptsBooleans = 2 === b || 3 === b || 4 === b;
	    this.attributeName = d;
	    this.attributeNamespace = e;
	    this.mustUseProperty = c;
	    this.propertyName = a;
	    this.type = b;
	    this.sanitizeURL = f;
	    this.removeEmptyString = g;
	}
	var D = {};
	"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
	    D[a] = new B(a, 0, !1, a, null, !1, !1);
	});
	[
	    [
	        "acceptCharset",
	        "accept-charset"
	    ],
	    [
	        "className",
	        "class"
	    ],
	    [
	        "htmlFor",
	        "for"
	    ],
	    [
	        "httpEquiv",
	        "http-equiv"
	    ]
	].forEach(function(a) {
	    var b = a[0];
	    D[b] = new B(b, 1, !1, a[1], null, !1, !1);
	});
	[
	    "contentEditable",
	    "draggable",
	    "spellCheck",
	    "value"
	].forEach(function(a) {
	    D[a] = new B(a, 2, !1, a.toLowerCase(), null, !1, !1);
	});
	[
	    "autoReverse",
	    "externalResourcesRequired",
	    "focusable",
	    "preserveAlpha"
	].forEach(function(a) {
	    D[a] = new B(a, 2, !1, a, null, !1, !1);
	});
	"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
	    D[a] = new B(a, 3, !1, a.toLowerCase(), null, !1, !1);
	});
	[
	    "checked",
	    "multiple",
	    "muted",
	    "selected"
	].forEach(function(a) {
	    D[a] = new B(a, 3, !0, a, null, !1, !1);
	});
	[
	    "capture",
	    "download"
	].forEach(function(a) {
	    D[a] = new B(a, 4, !1, a, null, !1, !1);
	});
	[
	    "cols",
	    "rows",
	    "size",
	    "span"
	].forEach(function(a) {
	    D[a] = new B(a, 6, !1, a, null, !1, !1);
	});
	[
	    "rowSpan",
	    "start"
	].forEach(function(a) {
	    D[a] = new B(a, 5, !1, a.toLowerCase(), null, !1, !1);
	});
	var oa = /[\-:]([a-z])/g;
	function pa(a) {
	    return a[1].toUpperCase();
	}
	"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
	    var b = a.replace(oa, pa);
	    D[b] = new B(b, 1, !1, a, null, !1, !1);
	});
	"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
	    var b = a.replace(oa, pa);
	    D[b] = new B(b, 1, !1, a, "http://www.w3.org/1999/xlink", !1, !1);
	});
	[
	    "xml:base",
	    "xml:lang",
	    "xml:space"
	].forEach(function(a) {
	    var b = a.replace(oa, pa);
	    D[b] = new B(b, 1, !1, a, "http://www.w3.org/XML/1998/namespace", !1, !1);
	});
	[
	    "tabIndex",
	    "crossOrigin"
	].forEach(function(a) {
	    D[a] = new B(a, 1, !1, a.toLowerCase(), null, !1, !1);
	});
	D.xlinkHref = new B("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
	[
	    "src",
	    "href",
	    "action",
	    "formAction"
	].forEach(function(a) {
	    D[a] = new B(a, 1, !1, a.toLowerCase(), null, !0, !0);
	});
	function qa(a, b, c, d) {
	    var e = D.hasOwnProperty(b) ? D[b] : null;
	    var f = null !== e ? 0 === e.type : d ? !1 : !(2 < b.length) || "o" !== b[0] && "O" !== b[0] || "n" !== b[1] && "N" !== b[1] ? !1 : !0;
	    f || (na(b, c, e, d) && (c = null), d || null === e ? la(b) && (null === c ? a.removeAttribute(b) : a.setAttribute(b, "" + c)) : e.mustUseProperty ? a[e.propertyName] = null === c ? 3 === e.type ? !1 : "" : c : (b = e.attributeName, d = e.attributeNamespace, null === c ? a.removeAttribute(b) : (e = e.type, c = 3 === e || 4 === e && !0 === c ? "" : "" + c, d ? a.setAttributeNS(d, b, c) : a.setAttribute(b, c))));
	}
	var ra = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, sa = 60103, ta = 60106, ua = 60107, wa = 60108, xa = 60114, ya = 60109, za = 60110, Aa = 60112, Ba = 60113, Ca = 60120, Da = 60115, Ea = 60116, Fa = 60121, Ga = 60128, Ha = 60129, Ia = 60130, Ja = 60131;
	if ("function" === typeof Symbol && Symbol.for) {
	    var E = Symbol.for;
	    sa = E("react.element");
	    ta = E("react.portal");
	    ua = E("react.fragment");
	    wa = E("react.strict_mode");
	    xa = E("react.profiler");
	    ya = E("react.provider");
	    za = E("react.context");
	    Aa = E("react.forward_ref");
	    Ba = E("react.suspense");
	    Ca = E("react.suspense_list");
	    Da = E("react.memo");
	    Ea = E("react.lazy");
	    Fa = E("react.block");
	    E("react.scope");
	    Ga = E("react.opaque.id");
	    Ha = E("react.debug_trace_mode");
	    Ia = E("react.offscreen");
	    Ja = E("react.legacy_hidden");
	}
	var Ka = "function" === typeof Symbol && Symbol.iterator;
	function La(a) {
	    if (null === a || "object" !== typeof a) return null;
	    a = Ka && a[Ka] || a["@@iterator"];
	    return "function" === typeof a ? a : null;
	}
	var Ma;
	function Na(a) {
	    if (void 0 === Ma) try {
	        throw Error();
	    } catch (c) {
	        var b = c.stack.trim().match(/\n( *(at )?)/);
	        Ma = b && b[1] || "";
	    }
	    return "\n" + Ma + a;
	}
	var Oa = !1;
	function Pa(a, b) {
	    if (!a || Oa) return "";
	    Oa = !0;
	    var c = Error.prepareStackTrace;
	    Error.prepareStackTrace = void 0;
	    try {
	        if (b) if (b = function() {
	            throw Error();
	        }, Object.defineProperty(b.prototype, "props", {
	            set: function() {
	                throw Error();
	            }
	        }), "object" === typeof Reflect && Reflect.construct) {
	            try {
	                Reflect.construct(b, []);
	            } catch (k) {
	                var d = k;
	            }
	            Reflect.construct(a, [], b);
	        } else {
	            try {
	                b.call();
	            } catch (k) {
	                d = k;
	            }
	            a.call(b.prototype);
	        }
	        else {
	            try {
	                throw Error();
	            } catch (k) {
	                d = k;
	            }
	            a();
	        }
	    } catch (k) {
	        if (k && d && "string" === typeof k.stack) {
	            for(var e = k.stack.split("\n"), f = d.stack.split("\n"), g = e.length - 1, h = f.length - 1; 1 <= g && 0 <= h && e[g] !== f[h];)h--;
	            for(; 1 <= g && 0 <= h; g--, h--)if (e[g] !== f[h]) {
	                if (1 !== g || 1 !== h) {
	                    do if (g--, h--, 0 > h || e[g] !== f[h]) return "\n" + e[g].replace(" at new ", " at ");
	                    while (1 <= g && 0 <= h)
	                }
	                break;
	            }
	        }
	    } finally{
	        Oa = !1, Error.prepareStackTrace = c;
	    }
	    return (a = a ? a.displayName || a.name : "") ? Na(a) : "";
	}
	function Qa(a) {
	    switch(a.tag){
	        case 5:
	            return Na(a.type);
	        case 16:
	            return Na("Lazy");
	        case 13:
	            return Na("Suspense");
	        case 19:
	            return Na("SuspenseList");
	        case 0:
	        case 2:
	        case 15:
	            return a = Pa(a.type, !1), a;
	        case 11:
	            return a = Pa(a.type.render, !1), a;
	        case 22:
	            return a = Pa(a.type._render, !1), a;
	        case 1:
	            return a = Pa(a.type, !0), a;
	        default:
	            return "";
	    }
	}
	function Ra(a) {
	    if (null == a) return null;
	    if ("function" === typeof a) return a.displayName || a.name || null;
	    if ("string" === typeof a) return a;
	    switch(a){
	        case ua:
	            return "Fragment";
	        case ta:
	            return "Portal";
	        case xa:
	            return "Profiler";
	        case wa:
	            return "StrictMode";
	        case Ba:
	            return "Suspense";
	        case Ca:
	            return "SuspenseList";
	    }
	    if ("object" === typeof a) switch(a.$$typeof){
	        case za:
	            return (a.displayName || "Context") + ".Consumer";
	        case ya:
	            return (a._context.displayName || "Context") + ".Provider";
	        case Aa:
	            var b = a.render;
	            b = b.displayName || b.name || "";
	            return a.displayName || ("" !== b ? "ForwardRef(" + b + ")" : "ForwardRef");
	        case Da:
	            return Ra(a.type);
	        case Fa:
	            return Ra(a._render);
	        case Ea:
	            b = a._payload;
	            a = a._init;
	            try {
	                return Ra(a(b));
	            } catch (c) {}
	    }
	    return null;
	}
	function Sa(a) {
	    switch(typeof a){
	        case "boolean":
	        case "number":
	        case "object":
	        case "string":
	        case "undefined":
	            return a;
	        default:
	            return "";
	    }
	}
	function Ta(a) {
	    var b = a.type;
	    return (a = a.nodeName) && "input" === a.toLowerCase() && ("checkbox" === b || "radio" === b);
	}
	function Ua(a) {
	    var b = Ta(a) ? "checked" : "value", c = Object.getOwnPropertyDescriptor(a.constructor.prototype, b), d = "" + a[b];
	    if (!a.hasOwnProperty(b) && "undefined" !== typeof c && "function" === typeof c.get && "function" === typeof c.set) {
	        var e = c.get, f = c.set;
	        Object.defineProperty(a, b, {
	            configurable: !0,
	            get: function() {
	                return e.call(this);
	            },
	            set: function(a) {
	                d = "" + a;
	                f.call(this, a);
	            }
	        });
	        Object.defineProperty(a, b, {
	            enumerable: c.enumerable
	        });
	        return {
	            getValue: function() {
	                return d;
	            },
	            setValue: function(a) {
	                d = "" + a;
	            },
	            stopTracking: function() {
	                a._valueTracker = null;
	                delete a[b];
	            }
	        };
	    }
	}
	function Va(a) {
	    a._valueTracker || (a._valueTracker = Ua(a));
	}
	function Wa(a) {
	    if (!a) return !1;
	    var b = a._valueTracker;
	    if (!b) return !0;
	    var c = b.getValue();
	    var d = "";
	    a && (d = Ta(a) ? a.checked ? "true" : "false" : a.value);
	    a = d;
	    return a !== c ? (b.setValue(a), !0) : !1;
	}
	function Xa(a) {
	    a = a || ("undefined" !== typeof document ? document : void 0);
	    if ("undefined" === typeof a) return null;
	    try {
	        return a.activeElement || a.body;
	    } catch (b) {
	        return a.body;
	    }
	}
	function Ya(a, b) {
	    var c = b.checked;
	    return m({}, b, {
	        defaultChecked: void 0,
	        defaultValue: void 0,
	        value: void 0,
	        checked: null != c ? c : a._wrapperState.initialChecked
	    });
	}
	function Za(a, b) {
	    var c = null == b.defaultValue ? "" : b.defaultValue, d = null != b.checked ? b.checked : b.defaultChecked;
	    c = Sa(null != b.value ? b.value : c);
	    a._wrapperState = {
	        initialChecked: d,
	        initialValue: c,
	        controlled: "checkbox" === b.type || "radio" === b.type ? null != b.checked : null != b.value
	    };
	}
	function $a(a, b) {
	    b = b.checked;
	    null != b && qa(a, "checked", b, !1);
	}
	function ab(a, b) {
	    $a(a, b);
	    var c = Sa(b.value), d = b.type;
	    if (null != c) if ("number" === d) {
	        if (0 === c && "" === a.value || a.value != c) a.value = "" + c;
	    } else a.value !== "" + c && (a.value = "" + c);
	    else if ("submit" === d || "reset" === d) {
	        a.removeAttribute("value");
	        return;
	    }
	    b.hasOwnProperty("value") ? bb(a, b.type, c) : b.hasOwnProperty("defaultValue") && bb(a, b.type, Sa(b.defaultValue));
	    null == b.checked && null != b.defaultChecked && (a.defaultChecked = !!b.defaultChecked);
	}
	function cb(a, b, c) {
	    if (b.hasOwnProperty("value") || b.hasOwnProperty("defaultValue")) {
	        var d = b.type;
	        if (!("submit" !== d && "reset" !== d || void 0 !== b.value && null !== b.value)) return;
	        b = "" + a._wrapperState.initialValue;
	        c || b === a.value || (a.value = b);
	        a.defaultValue = b;
	    }
	    c = a.name;
	    "" !== c && (a.name = "");
	    a.defaultChecked = !!a._wrapperState.initialChecked;
	    "" !== c && (a.name = c);
	}
	function bb(a, b, c) {
	    if ("number" !== b || Xa(a.ownerDocument) !== a) null == c ? a.defaultValue = "" + a._wrapperState.initialValue : a.defaultValue !== "" + c && (a.defaultValue = "" + c);
	}
	function db(a) {
	    var b = "";
	    aa.Children.forEach(a, function(a) {
	        null != a && (b += a);
	    });
	    return b;
	}
	function eb(a, b) {
	    a = m({
	        children: void 0
	    }, b);
	    if (b = db(b.children)) a.children = b;
	    return a;
	}
	function fb(a, b, c, d) {
	    a = a.options;
	    if (b) {
	        b = {};
	        for(var e = 0; e < c.length; e++)b["$" + c[e]] = !0;
	        for(c = 0; c < a.length; c++)e = b.hasOwnProperty("$" + a[c].value), a[c].selected !== e && (a[c].selected = e), e && d && (a[c].defaultSelected = !0);
	    } else {
	        c = "" + Sa(c);
	        b = null;
	        for(e = 0; e < a.length; e++){
	            if (a[e].value === c) {
	                a[e].selected = !0;
	                d && (a[e].defaultSelected = !0);
	                return;
	            }
	            null !== b || a[e].disabled || (b = a[e]);
	        }
	        null !== b && (b.selected = !0);
	    }
	}
	function gb(a, b) {
	    if (null != b.dangerouslySetInnerHTML) throw Error(y(91));
	    return m({}, b, {
	        value: void 0,
	        defaultValue: void 0,
	        children: "" + a._wrapperState.initialValue
	    });
	}
	function hb(a, b) {
	    var c = b.value;
	    if (null == c) {
	        c = b.children;
	        b = b.defaultValue;
	        if (null != c) {
	            if (null != b) throw Error(y(92));
	            if (Array.isArray(c)) {
	                if (!(1 >= c.length)) throw Error(y(93));
	                c = c[0];
	            }
	            b = c;
	        }
	        null == b && (b = "");
	        c = b;
	    }
	    a._wrapperState = {
	        initialValue: Sa(c)
	    };
	}
	function ib(a, b) {
	    var c = Sa(b.value), d = Sa(b.defaultValue);
	    null != c && (c = "" + c, c !== a.value && (a.value = c), null == b.defaultValue && a.defaultValue !== c && (a.defaultValue = c));
	    null != d && (a.defaultValue = "" + d);
	}
	function jb(a) {
	    var b = a.textContent;
	    b === a._wrapperState.initialValue && "" !== b && null !== b && (a.value = b);
	}
	var kb = {
	    html: "http://www.w3.org/1999/xhtml",
	    mathml: "http://www.w3.org/1998/Math/MathML",
	    svg: "http://www.w3.org/2000/svg"
	};
	function lb(a) {
	    switch(a){
	        case "svg":
	            return "http://www.w3.org/2000/svg";
	        case "math":
	            return "http://www.w3.org/1998/Math/MathML";
	        default:
	            return "http://www.w3.org/1999/xhtml";
	    }
	}
	function mb(a, b) {
	    return null == a || "http://www.w3.org/1999/xhtml" === a ? lb(b) : "http://www.w3.org/2000/svg" === a && "foreignObject" === b ? "http://www.w3.org/1999/xhtml" : a;
	}
	var nb, ob = function(a) {
	    return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(b, c, d, e) {
	        MSApp.execUnsafeLocalFunction(function() {
	            return a(b, c, d, e);
	        });
	    } : a;
	}(function(a, b) {
	    if (a.namespaceURI !== kb.svg || "innerHTML" in a) a.innerHTML = b;
	    else {
	        nb = nb || document.createElement("div");
	        nb.innerHTML = "<svg>" + b.valueOf().toString() + "</svg>";
	        for(b = nb.firstChild; a.firstChild;)a.removeChild(a.firstChild);
	        for(; b.firstChild;)a.appendChild(b.firstChild);
	    }
	});
	function pb(a, b) {
	    if (b) {
	        var c = a.firstChild;
	        if (c && c === a.lastChild && 3 === c.nodeType) {
	            c.nodeValue = b;
	            return;
	        }
	    }
	    a.textContent = b;
	}
	var qb = {
	    animationIterationCount: !0,
	    borderImageOutset: !0,
	    borderImageSlice: !0,
	    borderImageWidth: !0,
	    boxFlex: !0,
	    boxFlexGroup: !0,
	    boxOrdinalGroup: !0,
	    columnCount: !0,
	    columns: !0,
	    flex: !0,
	    flexGrow: !0,
	    flexPositive: !0,
	    flexShrink: !0,
	    flexNegative: !0,
	    flexOrder: !0,
	    gridArea: !0,
	    gridRow: !0,
	    gridRowEnd: !0,
	    gridRowSpan: !0,
	    gridRowStart: !0,
	    gridColumn: !0,
	    gridColumnEnd: !0,
	    gridColumnSpan: !0,
	    gridColumnStart: !0,
	    fontWeight: !0,
	    lineClamp: !0,
	    lineHeight: !0,
	    opacity: !0,
	    order: !0,
	    orphans: !0,
	    tabSize: !0,
	    widows: !0,
	    zIndex: !0,
	    zoom: !0,
	    fillOpacity: !0,
	    floodOpacity: !0,
	    stopOpacity: !0,
	    strokeDasharray: !0,
	    strokeDashoffset: !0,
	    strokeMiterlimit: !0,
	    strokeOpacity: !0,
	    strokeWidth: !0
	}, rb = [
	    "Webkit",
	    "ms",
	    "Moz",
	    "O"
	];
	Object.keys(qb).forEach(function(a) {
	    rb.forEach(function(b) {
	        b = b + a.charAt(0).toUpperCase() + a.substring(1);
	        qb[b] = qb[a];
	    });
	});
	function sb(a, b, c) {
	    return null == b || "boolean" === typeof b || "" === b ? "" : c || "number" !== typeof b || 0 === b || qb.hasOwnProperty(a) && qb[a] ? ("" + b).trim() : b + "px";
	}
	function tb(a, b) {
	    a = a.style;
	    for(var c in b)if (b.hasOwnProperty(c)) {
	        var d = 0 === c.indexOf("--"), e = sb(c, b[c], d);
	        "float" === c && (c = "cssFloat");
	        d ? a.setProperty(c, e) : a[c] = e;
	    }
	}
	var ub = m({
	    menuitem: !0
	}, {
	    area: !0,
	    base: !0,
	    br: !0,
	    col: !0,
	    embed: !0,
	    hr: !0,
	    img: !0,
	    input: !0,
	    keygen: !0,
	    link: !0,
	    meta: !0,
	    param: !0,
	    source: !0,
	    track: !0,
	    wbr: !0
	});
	function vb(a, b) {
	    if (b) {
	        if (ub[a] && (null != b.children || null != b.dangerouslySetInnerHTML)) throw Error(y(137, a));
	        if (null != b.dangerouslySetInnerHTML) {
	            if (null != b.children) throw Error(y(60));
	            if (!("object" === typeof b.dangerouslySetInnerHTML && "__html" in b.dangerouslySetInnerHTML)) throw Error(y(61));
	        }
	        if (null != b.style && "object" !== typeof b.style) throw Error(y(62));
	    }
	}
	function wb(a, b) {
	    if (-1 === a.indexOf("-")) return "string" === typeof b.is;
	    switch(a){
	        case "annotation-xml":
	        case "color-profile":
	        case "font-face":
	        case "font-face-src":
	        case "font-face-uri":
	        case "font-face-format":
	        case "font-face-name":
	        case "missing-glyph":
	            return !1;
	        default:
	            return !0;
	    }
	}
	function xb(a) {
	    a = a.target || a.srcElement || window;
	    a.correspondingUseElement && (a = a.correspondingUseElement);
	    return 3 === a.nodeType ? a.parentNode : a;
	}
	var yb = null, zb = null, Ab = null;
	function Bb(a) {
	    if (a = Cb(a)) {
	        if ("function" !== typeof yb) throw Error(y(280));
	        var b = a.stateNode;
	        b && (b = Db(b), yb(a.stateNode, a.type, b));
	    }
	}
	function Eb(a) {
	    zb ? Ab ? Ab.push(a) : Ab = [
	        a
	    ] : zb = a;
	}
	function Fb() {
	    if (zb) {
	        var a = zb, b = Ab;
	        Ab = zb = null;
	        Bb(a);
	        if (b) for(a = 0; a < b.length; a++)Bb(b[a]);
	    }
	}
	function Gb(a, b) {
	    return a(b);
	}
	function Hb(a, b, c, d, e) {
	    return a(b, c, d, e);
	}
	function Ib() {}
	var Jb = Gb, Kb = !1, Lb = !1;
	function Mb() {
	    if (null !== zb || null !== Ab) Ib(), Fb();
	}
	function Nb(a, b, c) {
	    if (Lb) return a(b, c);
	    Lb = !0;
	    try {
	        return Jb(a, b, c);
	    } finally{
	        Lb = !1, Mb();
	    }
	}
	function Ob(a, b) {
	    var c = a.stateNode;
	    if (null === c) return null;
	    var d = Db(c);
	    if (null === d) return null;
	    c = d[b];
	    a: switch(b){
	        case "onClick":
	        case "onClickCapture":
	        case "onDoubleClick":
	        case "onDoubleClickCapture":
	        case "onMouseDown":
	        case "onMouseDownCapture":
	        case "onMouseMove":
	        case "onMouseMoveCapture":
	        case "onMouseUp":
	        case "onMouseUpCapture":
	        case "onMouseEnter":
	            (d = !d.disabled) || (a = a.type, d = !("button" === a || "input" === a || "select" === a || "textarea" === a));
	            a = !d;
	            break a;
	        default:
	            a = !1;
	    }
	    if (a) return null;
	    if (c && "function" !== typeof c) throw Error(y(231, b, typeof c));
	    return c;
	}
	var Pb = !1;
	if (fa) try {
	    var Qb = {};
	    Object.defineProperty(Qb, "passive", {
	        get: function() {
	            Pb = !0;
	        }
	    });
	    window.addEventListener("test", Qb, Qb);
	    window.removeEventListener("test", Qb, Qb);
	} catch (a) {
	    Pb = !1;
	}
	function Rb(a, b, c, d, e, f, g, h, k) {
	    var l = Array.prototype.slice.call(arguments, 3);
	    try {
	        b.apply(c, l);
	    } catch (n) {
	        this.onError(n);
	    }
	}
	var Sb = !1, Tb = null, Ub = !1, Vb = null, Wb = {
	    onError: function(a) {
	        Sb = !0;
	        Tb = a;
	    }
	};
	function Xb(a, b, c, d, e, f, g, h, k) {
	    Sb = !1;
	    Tb = null;
	    Rb.apply(Wb, arguments);
	}
	function Yb(a, b, c, d, e, f, g, h, k) {
	    Xb.apply(this, arguments);
	    if (Sb) {
	        if (Sb) {
	            var l = Tb;
	            Sb = !1;
	            Tb = null;
	        } else throw Error(y(198));
	        Ub || (Ub = !0, Vb = l);
	    }
	}
	function Zb(a) {
	    var b = a, c = a;
	    if (a.alternate) for(; b.return;)b = b.return;
	    else {
	        a = b;
	        do b = a, 0 !== (b.flags & 1026) && (c = b.return), a = b.return;
	        while (a)
	    }
	    return 3 === b.tag ? c : null;
	}
	function $b(a) {
	    if (13 === a.tag) {
	        var b = a.memoizedState;
	        null === b && (a = a.alternate, null !== a && (b = a.memoizedState));
	        if (null !== b) return b.dehydrated;
	    }
	    return null;
	}
	function ac(a) {
	    if (Zb(a) !== a) throw Error(y(188));
	}
	function bc(a) {
	    var b = a.alternate;
	    if (!b) {
	        b = Zb(a);
	        if (null === b) throw Error(y(188));
	        return b !== a ? null : a;
	    }
	    for(var c = a, d = b;;){
	        var e = c.return;
	        if (null === e) break;
	        var f = e.alternate;
	        if (null === f) {
	            d = e.return;
	            if (null !== d) {
	                c = d;
	                continue;
	            }
	            break;
	        }
	        if (e.child === f.child) {
	            for(f = e.child; f;){
	                if (f === c) return ac(e), a;
	                if (f === d) return ac(e), b;
	                f = f.sibling;
	            }
	            throw Error(y(188));
	        }
	        if (c.return !== d.return) c = e, d = f;
	        else {
	            for(var g = !1, h = e.child; h;){
	                if (h === c) {
	                    g = !0;
	                    c = e;
	                    d = f;
	                    break;
	                }
	                if (h === d) {
	                    g = !0;
	                    d = e;
	                    c = f;
	                    break;
	                }
	                h = h.sibling;
	            }
	            if (!g) {
	                for(h = f.child; h;){
	                    if (h === c) {
	                        g = !0;
	                        c = f;
	                        d = e;
	                        break;
	                    }
	                    if (h === d) {
	                        g = !0;
	                        d = f;
	                        c = e;
	                        break;
	                    }
	                    h = h.sibling;
	                }
	                if (!g) throw Error(y(189));
	            }
	        }
	        if (c.alternate !== d) throw Error(y(190));
	    }
	    if (3 !== c.tag) throw Error(y(188));
	    return c.stateNode.current === c ? a : b;
	}
	function cc(a) {
	    a = bc(a);
	    if (!a) return null;
	    for(var b = a;;){
	        if (5 === b.tag || 6 === b.tag) return b;
	        if (b.child) b.child.return = b, b = b.child;
	        else {
	            if (b === a) break;
	            for(; !b.sibling;){
	                if (!b.return || b.return === a) return null;
	                b = b.return;
	            }
	            b.sibling.return = b.return;
	            b = b.sibling;
	        }
	    }
	    return null;
	}
	function dc(a, b) {
	    for(var c = a.alternate; null !== b;){
	        if (b === a || b === c) return !0;
	        b = b.return;
	    }
	    return !1;
	}
	var ec, fc, gc, hc, ic = !1, jc = [], kc = null, lc = null, mc = null, nc = new Map, oc = new Map, pc = [], qc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
	function rc(a, b, c, d, e) {
	    return {
	        blockedOn: a,
	        domEventName: b,
	        eventSystemFlags: c | 16,
	        nativeEvent: e,
	        targetContainers: [
	            d
	        ]
	    };
	}
	function sc(a, b) {
	    switch(a){
	        case "focusin":
	        case "focusout":
	            kc = null;
	            break;
	        case "dragenter":
	        case "dragleave":
	            lc = null;
	            break;
	        case "mouseover":
	        case "mouseout":
	            mc = null;
	            break;
	        case "pointerover":
	        case "pointerout":
	            nc.delete(b.pointerId);
	            break;
	        case "gotpointercapture":
	        case "lostpointercapture":
	            oc.delete(b.pointerId);
	    }
	}
	function tc(a, b, c, d, e, f) {
	    if (null === a || a.nativeEvent !== f) return a = rc(b, c, d, e, f), null !== b && (b = Cb(b), null !== b && fc(b)), a;
	    a.eventSystemFlags |= d;
	    b = a.targetContainers;
	    null !== e && -1 === b.indexOf(e) && b.push(e);
	    return a;
	}
	function uc(a, b, c, d, e) {
	    switch(b){
	        case "focusin":
	            return kc = tc(kc, a, b, c, d, e), !0;
	        case "dragenter":
	            return lc = tc(lc, a, b, c, d, e), !0;
	        case "mouseover":
	            return mc = tc(mc, a, b, c, d, e), !0;
	        case "pointerover":
	            var f = e.pointerId;
	            nc.set(f, tc(nc.get(f) || null, a, b, c, d, e));
	            return !0;
	        case "gotpointercapture":
	            return f = e.pointerId, oc.set(f, tc(oc.get(f) || null, a, b, c, d, e)), !0;
	    }
	    return !1;
	}
	function vc(a) {
	    var b = wc(a.target);
	    if (null !== b) {
	        var c = Zb(b);
	        if (null !== c) {
	            if (b = c.tag, 13 === b) {
	                if (b = $b(c), null !== b) {
	                    a.blockedOn = b;
	                    hc(a.lanePriority, function() {
	                        r.unstable_runWithPriority(a.priority, function() {
	                            gc(c);
	                        });
	                    });
	                    return;
	                }
	            } else if (3 === b && c.stateNode.hydrate) {
	                a.blockedOn = 3 === c.tag ? c.stateNode.containerInfo : null;
	                return;
	            }
	        }
	    }
	    a.blockedOn = null;
	}
	function xc(a) {
	    if (null !== a.blockedOn) return !1;
	    for(var b = a.targetContainers; 0 < b.length;){
	        var c = yc(a.domEventName, a.eventSystemFlags, b[0], a.nativeEvent);
	        if (null !== c) return b = Cb(c), null !== b && fc(b), a.blockedOn = c, !1;
	        b.shift();
	    }
	    return !0;
	}
	function zc(a, b, c) {
	    xc(a) && c.delete(b);
	}
	function Ac() {
	    for(ic = !1; 0 < jc.length;){
	        var a = jc[0];
	        if (null !== a.blockedOn) {
	            a = Cb(a.blockedOn);
	            null !== a && ec(a);
	            break;
	        }
	        for(var b = a.targetContainers; 0 < b.length;){
	            var c = yc(a.domEventName, a.eventSystemFlags, b[0], a.nativeEvent);
	            if (null !== c) {
	                a.blockedOn = c;
	                break;
	            }
	            b.shift();
	        }
	        null === a.blockedOn && jc.shift();
	    }
	    null !== kc && xc(kc) && (kc = null);
	    null !== lc && xc(lc) && (lc = null);
	    null !== mc && xc(mc) && (mc = null);
	    nc.forEach(zc);
	    oc.forEach(zc);
	}
	function Bc(a, b) {
	    a.blockedOn === b && (a.blockedOn = null, ic || (ic = !0, r.unstable_scheduleCallback(r.unstable_NormalPriority, Ac)));
	}
	function Cc(a) {
	    function b(b) {
	        return Bc(b, a);
	    }
	    if (0 < jc.length) {
	        Bc(jc[0], a);
	        for(var c = 1; c < jc.length; c++){
	            var d = jc[c];
	            d.blockedOn === a && (d.blockedOn = null);
	        }
	    }
	    null !== kc && Bc(kc, a);
	    null !== lc && Bc(lc, a);
	    null !== mc && Bc(mc, a);
	    nc.forEach(b);
	    oc.forEach(b);
	    for(c = 0; c < pc.length; c++)d = pc[c], d.blockedOn === a && (d.blockedOn = null);
	    for(; 0 < pc.length && (c = pc[0], null === c.blockedOn);)vc(c), null === c.blockedOn && pc.shift();
	}
	function Dc(a, b) {
	    var c = {};
	    c[a.toLowerCase()] = b.toLowerCase();
	    c["Webkit" + a] = "webkit" + b;
	    c["Moz" + a] = "moz" + b;
	    return c;
	}
	var Ec = {
	    animationend: Dc("Animation", "AnimationEnd"),
	    animationiteration: Dc("Animation", "AnimationIteration"),
	    animationstart: Dc("Animation", "AnimationStart"),
	    transitionend: Dc("Transition", "TransitionEnd")
	}, Fc = {}, Gc = {};
	fa && (Gc = document.createElement("div").style, "AnimationEvent" in window || (delete Ec.animationend.animation, delete Ec.animationiteration.animation, delete Ec.animationstart.animation), "TransitionEvent" in window || delete Ec.transitionend.transition);
	function Hc(a) {
	    if (Fc[a]) return Fc[a];
	    if (!Ec[a]) return a;
	    var b = Ec[a], c;
	    for(c in b)if (b.hasOwnProperty(c) && c in Gc) return Fc[a] = b[c];
	    return a;
	}
	var Ic = Hc("animationend"), Jc = Hc("animationiteration"), Kc = Hc("animationstart"), Lc = Hc("transitionend"), Mc = new Map, Nc = new Map, Oc = [
	    "abort",
	    "abort",
	    Ic,
	    "animationEnd",
	    Jc,
	    "animationIteration",
	    Kc,
	    "animationStart",
	    "canplay",
	    "canPlay",
	    "canplaythrough",
	    "canPlayThrough",
	    "durationchange",
	    "durationChange",
	    "emptied",
	    "emptied",
	    "encrypted",
	    "encrypted",
	    "ended",
	    "ended",
	    "error",
	    "error",
	    "gotpointercapture",
	    "gotPointerCapture",
	    "load",
	    "load",
	    "loadeddata",
	    "loadedData",
	    "loadedmetadata",
	    "loadedMetadata",
	    "loadstart",
	    "loadStart",
	    "lostpointercapture",
	    "lostPointerCapture",
	    "playing",
	    "playing",
	    "progress",
	    "progress",
	    "seeking",
	    "seeking",
	    "stalled",
	    "stalled",
	    "suspend",
	    "suspend",
	    "timeupdate",
	    "timeUpdate",
	    Lc,
	    "transitionEnd",
	    "waiting",
	    "waiting"
	];
	function Pc(a, b) {
	    for(var c = 0; c < a.length; c += 2){
	        var d = a[c], e = a[c + 1];
	        e = "on" + (e[0].toUpperCase() + e.slice(1));
	        Nc.set(d, b);
	        Mc.set(d, e);
	        da(e, [
	            d
	        ]);
	    }
	}
	var Qc = r.unstable_now;
	Qc();
	var F = 8;
	function Rc(a) {
	    if (0 !== (1 & a)) return F = 15, 1;
	    if (0 !== (2 & a)) return F = 14, 2;
	    if (0 !== (4 & a)) return F = 13, 4;
	    var b = 24 & a;
	    if (0 !== b) return F = 12, b;
	    if (0 !== (a & 32)) return F = 11, 32;
	    b = 192 & a;
	    if (0 !== b) return F = 10, b;
	    if (0 !== (a & 256)) return F = 9, 256;
	    b = 3584 & a;
	    if (0 !== b) return F = 8, b;
	    if (0 !== (a & 4096)) return F = 7, 4096;
	    b = 4186112 & a;
	    if (0 !== b) return F = 6, b;
	    b = 62914560 & a;
	    if (0 !== b) return F = 5, b;
	    if (a & 67108864) return F = 4, 67108864;
	    if (0 !== (a & 134217728)) return F = 3, 134217728;
	    b = 805306368 & a;
	    if (0 !== b) return F = 2, b;
	    if (0 !== (1073741824 & a)) return F = 1, 1073741824;
	    F = 8;
	    return a;
	}
	function Sc(a) {
	    switch(a){
	        case 99:
	            return 15;
	        case 98:
	            return 10;
	        case 97:
	        case 96:
	            return 8;
	        case 95:
	            return 2;
	        default:
	            return 0;
	    }
	}
	function Tc(a) {
	    switch(a){
	        case 15:
	        case 14:
	            return 99;
	        case 13:
	        case 12:
	        case 11:
	        case 10:
	            return 98;
	        case 9:
	        case 8:
	        case 7:
	        case 6:
	        case 4:
	        case 5:
	            return 97;
	        case 3:
	        case 2:
	        case 1:
	            return 95;
	        case 0:
	            return 90;
	        default:
	            throw Error(y(358, a));
	    }
	}
	function Uc(a, b) {
	    var c = a.pendingLanes;
	    if (0 === c) return F = 0;
	    var d = 0, e = 0, f = a.expiredLanes, g = a.suspendedLanes, h = a.pingedLanes;
	    if (0 !== f) d = f, e = F = 15;
	    else if (f = c & 134217727, 0 !== f) {
	        var k = f & ~g;
	        0 !== k ? (d = Rc(k), e = F) : (h &= f, 0 !== h && (d = Rc(h), e = F));
	    } else f = c & ~g, 0 !== f ? (d = Rc(f), e = F) : 0 !== h && (d = Rc(h), e = F);
	    if (0 === d) return 0;
	    d = 31 - Vc(d);
	    d = c & ((0 > d ? 0 : 1 << d) << 1) - 1;
	    if (0 !== b && b !== d && 0 === (b & g)) {
	        Rc(b);
	        if (e <= F) return b;
	        F = e;
	    }
	    b = a.entangledLanes;
	    if (0 !== b) for(a = a.entanglements, b &= d; 0 < b;)c = 31 - Vc(b), e = 1 << c, d |= a[c], b &= ~e;
	    return d;
	}
	function Wc(a) {
	    a = a.pendingLanes & -1073741825;
	    return 0 !== a ? a : a & 1073741824 ? 1073741824 : 0;
	}
	function Xc(a, b) {
	    switch(a){
	        case 15:
	            return 1;
	        case 14:
	            return 2;
	        case 12:
	            return a = Yc(24 & ~b), 0 === a ? Xc(10, b) : a;
	        case 10:
	            return a = Yc(192 & ~b), 0 === a ? Xc(8, b) : a;
	        case 8:
	            return a = Yc(3584 & ~b), 0 === a && (a = Yc(4186112 & ~b), 0 === a && (a = 512)), a;
	        case 2:
	            return b = Yc(805306368 & ~b), 0 === b && (b = 268435456), b;
	    }
	    throw Error(y(358, a));
	}
	function Yc(a) {
	    return a & -a;
	}
	function Zc(a) {
	    for(var b = [], c = 0; 31 > c; c++)b.push(a);
	    return b;
	}
	function $c(a, b, c) {
	    a.pendingLanes |= b;
	    var d = b - 1;
	    a.suspendedLanes &= d;
	    a.pingedLanes &= d;
	    a = a.eventTimes;
	    b = 31 - Vc(b);
	    a[b] = c;
	}
	var Vc = Math.clz32 ? Math.clz32 : ad, bd = Math.log, cd = Math.LN2;
	function ad(a) {
	    return 0 === a ? 32 : 31 - (bd(a) / cd | 0) | 0;
	}
	var dd = r.unstable_UserBlockingPriority, ed = r.unstable_runWithPriority, fd = !0;
	function gd(a, b, c, d) {
	    Kb || Ib();
	    var e = hd, f = Kb;
	    Kb = !0;
	    try {
	        Hb(e, a, b, c, d);
	    } finally{
	        (Kb = f) || Mb();
	    }
	}
	function id(a, b, c, d) {
	    ed(dd, hd.bind(null, a, b, c, d));
	}
	function hd(a, b, c, d) {
	    if (fd) {
	        var e;
	        if ((e = 0 === (b & 4)) && 0 < jc.length && -1 < qc.indexOf(a)) a = rc(null, a, b, c, d), jc.push(a);
	        else {
	            var f = yc(a, b, c, d);
	            if (null === f) e && sc(a, d);
	            else {
	                if (e) {
	                    if (-1 < qc.indexOf(a)) {
	                        a = rc(f, a, b, c, d);
	                        jc.push(a);
	                        return;
	                    }
	                    if (uc(f, a, b, c, d)) return;
	                    sc(a, d);
	                }
	                jd(a, b, d, null, c);
	            }
	        }
	    }
	}
	function yc(a, b, c, d) {
	    var e = xb(d);
	    e = wc(e);
	    if (null !== e) {
	        var f = Zb(e);
	        if (null === f) e = null;
	        else {
	            var g = f.tag;
	            if (13 === g) {
	                e = $b(f);
	                if (null !== e) return e;
	                e = null;
	            } else if (3 === g) {
	                if (f.stateNode.hydrate) return 3 === f.tag ? f.stateNode.containerInfo : null;
	                e = null;
	            } else f !== e && (e = null);
	        }
	    }
	    jd(a, b, d, e, c);
	    return null;
	}
	var kd = null, ld = null, md = null;
	function nd() {
	    if (md) return md;
	    var a, b = ld, c = b.length, d, e = "value" in kd ? kd.value : kd.textContent, f = e.length;
	    for(a = 0; a < c && b[a] === e[a]; a++);
	    var g = c - a;
	    for(d = 1; d <= g && b[c - d] === e[f - d]; d++);
	    return md = e.slice(a, 1 < d ? 1 - d : void 0);
	}
	function od(a) {
	    var b = a.keyCode;
	    "charCode" in a ? (a = a.charCode, 0 === a && 13 === b && (a = 13)) : a = b;
	    10 === a && (a = 13);
	    return 32 <= a || 13 === a ? a : 0;
	}
	function pd() {
	    return !0;
	}
	function qd() {
	    return !1;
	}
	function rd(a) {
	    function b(b, d, e, f, g) {
	        this._reactName = b;
	        this._targetInst = e;
	        this.type = d;
	        this.nativeEvent = f;
	        this.target = g;
	        this.currentTarget = null;
	        for(var c in a)a.hasOwnProperty(c) && (b = a[c], this[c] = b ? b(f) : f[c]);
	        this.isDefaultPrevented = (null != f.defaultPrevented ? f.defaultPrevented : !1 === f.returnValue) ? pd : qd;
	        this.isPropagationStopped = qd;
	        return this;
	    }
	    m(b.prototype, {
	        preventDefault: function() {
	            this.defaultPrevented = !0;
	            var a = this.nativeEvent;
	            a && (a.preventDefault ? a.preventDefault() : "unknown" !== typeof a.returnValue && (a.returnValue = !1), this.isDefaultPrevented = pd);
	        },
	        stopPropagation: function() {
	            var a = this.nativeEvent;
	            a && (a.stopPropagation ? a.stopPropagation() : "unknown" !== typeof a.cancelBubble && (a.cancelBubble = !0), this.isPropagationStopped = pd);
	        },
	        persist: function() {},
	        isPersistent: pd
	    });
	    return b;
	}
	var sd = {
	    eventPhase: 0,
	    bubbles: 0,
	    cancelable: 0,
	    timeStamp: function(a) {
	        return a.timeStamp || Date.now();
	    },
	    defaultPrevented: 0,
	    isTrusted: 0
	}, td = rd(sd), ud = m({}, sd, {
	    view: 0,
	    detail: 0
	}), vd = rd(ud), wd, xd, yd, Ad = m({}, ud, {
	    screenX: 0,
	    screenY: 0,
	    clientX: 0,
	    clientY: 0,
	    pageX: 0,
	    pageY: 0,
	    ctrlKey: 0,
	    shiftKey: 0,
	    altKey: 0,
	    metaKey: 0,
	    getModifierState: zd,
	    button: 0,
	    buttons: 0,
	    relatedTarget: function(a) {
	        return void 0 === a.relatedTarget ? a.fromElement === a.srcElement ? a.toElement : a.fromElement : a.relatedTarget;
	    },
	    movementX: function(a) {
	        if ("movementX" in a) return a.movementX;
	        a !== yd && (yd && "mousemove" === a.type ? (wd = a.screenX - yd.screenX, xd = a.screenY - yd.screenY) : xd = wd = 0, yd = a);
	        return wd;
	    },
	    movementY: function(a) {
	        return "movementY" in a ? a.movementY : xd;
	    }
	}), Bd = rd(Ad), Cd = m({}, Ad, {
	    dataTransfer: 0
	}), Dd = rd(Cd), Ed = m({}, ud, {
	    relatedTarget: 0
	}), Fd = rd(Ed), Gd = m({}, sd, {
	    animationName: 0,
	    elapsedTime: 0,
	    pseudoElement: 0
	}), Hd = rd(Gd), Id = m({}, sd, {
	    clipboardData: function(a) {
	        return "clipboardData" in a ? a.clipboardData : window.clipboardData;
	    }
	}), Jd = rd(Id), Kd = m({}, sd, {
	    data: 0
	}), Ld = rd(Kd), Md = {
	    Esc: "Escape",
	    Spacebar: " ",
	    Left: "ArrowLeft",
	    Up: "ArrowUp",
	    Right: "ArrowRight",
	    Down: "ArrowDown",
	    Del: "Delete",
	    Win: "OS",
	    Menu: "ContextMenu",
	    Apps: "ContextMenu",
	    Scroll: "ScrollLock",
	    MozPrintableKey: "Unidentified"
	}, Nd = {
	    8: "Backspace",
	    9: "Tab",
	    12: "Clear",
	    13: "Enter",
	    16: "Shift",
	    17: "Control",
	    18: "Alt",
	    19: "Pause",
	    20: "CapsLock",
	    27: "Escape",
	    32: " ",
	    33: "PageUp",
	    34: "PageDown",
	    35: "End",
	    36: "Home",
	    37: "ArrowLeft",
	    38: "ArrowUp",
	    39: "ArrowRight",
	    40: "ArrowDown",
	    45: "Insert",
	    46: "Delete",
	    112: "F1",
	    113: "F2",
	    114: "F3",
	    115: "F4",
	    116: "F5",
	    117: "F6",
	    118: "F7",
	    119: "F8",
	    120: "F9",
	    121: "F10",
	    122: "F11",
	    123: "F12",
	    144: "NumLock",
	    145: "ScrollLock",
	    224: "Meta"
	}, Od = {
	    Alt: "altKey",
	    Control: "ctrlKey",
	    Meta: "metaKey",
	    Shift: "shiftKey"
	};
	function Pd(a) {
	    var b = this.nativeEvent;
	    return b.getModifierState ? b.getModifierState(a) : (a = Od[a]) ? !!b[a] : !1;
	}
	function zd() {
	    return Pd;
	}
	var Qd = m({}, ud, {
	    key: function(a) {
	        if (a.key) {
	            var b = Md[a.key] || a.key;
	            if ("Unidentified" !== b) return b;
	        }
	        return "keypress" === a.type ? (a = od(a), 13 === a ? "Enter" : String.fromCharCode(a)) : "keydown" === a.type || "keyup" === a.type ? Nd[a.keyCode] || "Unidentified" : "";
	    },
	    code: 0,
	    location: 0,
	    ctrlKey: 0,
	    shiftKey: 0,
	    altKey: 0,
	    metaKey: 0,
	    repeat: 0,
	    locale: 0,
	    getModifierState: zd,
	    charCode: function(a) {
	        return "keypress" === a.type ? od(a) : 0;
	    },
	    keyCode: function(a) {
	        return "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
	    },
	    which: function(a) {
	        return "keypress" === a.type ? od(a) : "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
	    }
	}), Rd = rd(Qd), Sd = m({}, Ad, {
	    pointerId: 0,
	    width: 0,
	    height: 0,
	    pressure: 0,
	    tangentialPressure: 0,
	    tiltX: 0,
	    tiltY: 0,
	    twist: 0,
	    pointerType: 0,
	    isPrimary: 0
	}), Td = rd(Sd), Ud = m({}, ud, {
	    touches: 0,
	    targetTouches: 0,
	    changedTouches: 0,
	    altKey: 0,
	    metaKey: 0,
	    ctrlKey: 0,
	    shiftKey: 0,
	    getModifierState: zd
	}), Vd = rd(Ud), Wd = m({}, sd, {
	    propertyName: 0,
	    elapsedTime: 0,
	    pseudoElement: 0
	}), Xd = rd(Wd), Yd = m({}, Ad, {
	    deltaX: function(a) {
	        return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0;
	    },
	    deltaY: function(a) {
	        return "deltaY" in a ? a.deltaY : "wheelDeltaY" in a ? -a.wheelDeltaY : "wheelDelta" in a ? -a.wheelDelta : 0;
	    },
	    deltaZ: 0,
	    deltaMode: 0
	}), Zd = rd(Yd), $d = [
	    9,
	    13,
	    27,
	    32
	], ae = fa && "CompositionEvent" in window, be = null;
	fa && "documentMode" in document && (be = document.documentMode);
	var ce = fa && "TextEvent" in window && !be, de = fa && (!ae || be && 8 < be && 11 >= be), ee = String.fromCharCode(32), fe = !1;
	function ge(a, b) {
	    switch(a){
	        case "keyup":
	            return -1 !== $d.indexOf(b.keyCode);
	        case "keydown":
	            return 229 !== b.keyCode;
	        case "keypress":
	        case "mousedown":
	        case "focusout":
	            return !0;
	        default:
	            return !1;
	    }
	}
	function he(a) {
	    a = a.detail;
	    return "object" === typeof a && "data" in a ? a.data : null;
	}
	var ie = !1;
	function je(a, b) {
	    switch(a){
	        case "compositionend":
	            return he(b);
	        case "keypress":
	            if (32 !== b.which) return null;
	            fe = !0;
	            return ee;
	        case "textInput":
	            return a = b.data, a === ee && fe ? null : a;
	        default:
	            return null;
	    }
	}
	function ke(a, b) {
	    if (ie) return "compositionend" === a || !ae && ge(a, b) ? (a = nd(), md = ld = kd = null, ie = !1, a) : null;
	    switch(a){
	        case "paste":
	            return null;
	        case "keypress":
	            if (!(b.ctrlKey || b.altKey || b.metaKey) || b.ctrlKey && b.altKey) {
	                if (b.char && 1 < b.char.length) return b.char;
	                if (b.which) return String.fromCharCode(b.which);
	            }
	            return null;
	        case "compositionend":
	            return de && "ko" !== b.locale ? null : b.data;
	        default:
	            return null;
	    }
	}
	var le = {
	    color: !0,
	    date: !0,
	    datetime: !0,
	    "datetime-local": !0,
	    email: !0,
	    month: !0,
	    number: !0,
	    password: !0,
	    range: !0,
	    search: !0,
	    tel: !0,
	    text: !0,
	    time: !0,
	    url: !0,
	    week: !0
	};
	function me(a) {
	    var b = a && a.nodeName && a.nodeName.toLowerCase();
	    return "input" === b ? !!le[a.type] : "textarea" === b ? !0 : !1;
	}
	function ne(a, b, c, d) {
	    Eb(d);
	    b = oe(b, "onChange");
	    0 < b.length && (c = new td("onChange", "change", null, c, d), a.push({
	        event: c,
	        listeners: b
	    }));
	}
	var pe = null, qe = null;
	function re(a) {
	    se(a, 0);
	}
	function te(a) {
	    var b = ue(a);
	    if (Wa(b)) return a;
	}
	function ve(a, b) {
	    if ("change" === a) return b;
	}
	var we = !1;
	if (fa) {
	    var xe;
	    if (fa) {
	        var ye = "oninput" in document;
	        if (!ye) {
	            var ze = document.createElement("div");
	            ze.setAttribute("oninput", "return;");
	            ye = "function" === typeof ze.oninput;
	        }
	        xe = ye;
	    } else xe = !1;
	    we = xe && (!document.documentMode || 9 < document.documentMode);
	}
	function Ae() {
	    pe && (pe.detachEvent("onpropertychange", Be), qe = pe = null);
	}
	function Be(a) {
	    if ("value" === a.propertyName && te(qe)) {
	        var b = [];
	        ne(b, qe, a, xb(a));
	        a = re;
	        if (Kb) a(b);
	        else {
	            Kb = !0;
	            try {
	                Gb(a, b);
	            } finally{
	                Kb = !1, Mb();
	            }
	        }
	    }
	}
	function Ce(a, b, c) {
	    "focusin" === a ? (Ae(), pe = b, qe = c, pe.attachEvent("onpropertychange", Be)) : "focusout" === a && Ae();
	}
	function De(a) {
	    if ("selectionchange" === a || "keyup" === a || "keydown" === a) return te(qe);
	}
	function Ee(a, b) {
	    if ("click" === a) return te(b);
	}
	function Fe(a, b) {
	    if ("input" === a || "change" === a) return te(b);
	}
	function Ge(a, b) {
	    return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
	}
	var He = "function" === typeof Object.is ? Object.is : Ge, Ie = Object.prototype.hasOwnProperty;
	function Je(a, b) {
	    if (He(a, b)) return !0;
	    if ("object" !== typeof a || null === a || "object" !== typeof b || null === b) return !1;
	    var c = Object.keys(a), d = Object.keys(b);
	    if (c.length !== d.length) return !1;
	    for(d = 0; d < c.length; d++)if (!Ie.call(b, c[d]) || !He(a[c[d]], b[c[d]])) return !1;
	    return !0;
	}
	function Ke(a) {
	    for(; a && a.firstChild;)a = a.firstChild;
	    return a;
	}
	function Le(a, b) {
	    var c = Ke(a);
	    a = 0;
	    for(var d; c;){
	        if (3 === c.nodeType) {
	            d = a + c.textContent.length;
	            if (a <= b && d >= b) return {
	                node: c,
	                offset: b - a
	            };
	            a = d;
	        }
	        a: {
	            for(; c;){
	                if (c.nextSibling) {
	                    c = c.nextSibling;
	                    break a;
	                }
	                c = c.parentNode;
	            }
	            c = void 0;
	        }
	        c = Ke(c);
	    }
	}
	function Me(a, b) {
	    return a && b ? a === b ? !0 : a && 3 === a.nodeType ? !1 : b && 3 === b.nodeType ? Me(a, b.parentNode) : "contains" in a ? a.contains(b) : a.compareDocumentPosition ? !!(a.compareDocumentPosition(b) & 16) : !1 : !1;
	}
	function Ne() {
	    for(var a = window, b = Xa(); b instanceof a.HTMLIFrameElement;){
	        try {
	            var c = "string" === typeof b.contentWindow.location.href;
	        } catch (d) {
	            c = !1;
	        }
	        if (c) a = b.contentWindow;
	        else break;
	        b = Xa(a.document);
	    }
	    return b;
	}
	function Oe(a) {
	    var b = a && a.nodeName && a.nodeName.toLowerCase();
	    return b && ("input" === b && ("text" === a.type || "search" === a.type || "tel" === a.type || "url" === a.type || "password" === a.type) || "textarea" === b || "true" === a.contentEditable);
	}
	var Pe = fa && "documentMode" in document && 11 >= document.documentMode, Qe = null, Re = null, Se = null, Te = !1;
	function Ue(a, b, c) {
	    var d = c.window === c ? c.document : 9 === c.nodeType ? c : c.ownerDocument;
	    Te || null == Qe || Qe !== Xa(d) || (d = Qe, "selectionStart" in d && Oe(d) ? d = {
	        start: d.selectionStart,
	        end: d.selectionEnd
	    } : (d = (d.ownerDocument && d.ownerDocument.defaultView || window).getSelection(), d = {
	        anchorNode: d.anchorNode,
	        anchorOffset: d.anchorOffset,
	        focusNode: d.focusNode,
	        focusOffset: d.focusOffset
	    }), Se && Je(Se, d) || (Se = d, d = oe(Re, "onSelect"), 0 < d.length && (b = new td("onSelect", "select", null, b, c), a.push({
	        event: b,
	        listeners: d
	    }), b.target = Qe)));
	}
	Pc("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "), 0);
	Pc("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "), 1);
	Pc(Oc, 2);
	for(var Ve = "change selectionchange textInput compositionstart compositionend compositionupdate".split(" "), We = 0; We < Ve.length; We++)Nc.set(Ve[We], 0);
	ea("onMouseEnter", [
	    "mouseout",
	    "mouseover"
	]);
	ea("onMouseLeave", [
	    "mouseout",
	    "mouseover"
	]);
	ea("onPointerEnter", [
	    "pointerout",
	    "pointerover"
	]);
	ea("onPointerLeave", [
	    "pointerout",
	    "pointerover"
	]);
	da("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
	da("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
	da("onBeforeInput", [
	    "compositionend",
	    "keypress",
	    "textInput",
	    "paste"
	]);
	da("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
	da("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
	da("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
	var Xe = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Ye = new Set("cancel close invalid load scroll toggle".split(" ").concat(Xe));
	function Ze(a, b, c) {
	    var d = a.type || "unknown-event";
	    a.currentTarget = c;
	    Yb(d, b, void 0, a);
	    a.currentTarget = null;
	}
	function se(a, b) {
	    b = 0 !== (b & 4);
	    for(var c = 0; c < a.length; c++){
	        var d = a[c], e = d.event;
	        d = d.listeners;
	        a: {
	            var f = void 0;
	            if (b) for(var g = d.length - 1; 0 <= g; g--){
	                var h = d[g], k = h.instance, l = h.currentTarget;
	                h = h.listener;
	                if (k !== f && e.isPropagationStopped()) break a;
	                Ze(e, h, l);
	                f = k;
	            }
	            else for(g = 0; g < d.length; g++){
	                h = d[g];
	                k = h.instance;
	                l = h.currentTarget;
	                h = h.listener;
	                if (k !== f && e.isPropagationStopped()) break a;
	                Ze(e, h, l);
	                f = k;
	            }
	        }
	    }
	    if (Ub) throw a = Vb, Ub = !1, Vb = null, a;
	}
	function G(a, b) {
	    var c = $e(b), d = a + "__bubble";
	    c.has(d) || (af(b, a, 2, !1), c.add(d));
	}
	var bf = "_reactListening" + Math.random().toString(36).slice(2);
	function cf(a) {
	    a[bf] || (a[bf] = !0, ba.forEach(function(b) {
	        Ye.has(b) || df(b, !1, a, null);
	        df(b, !0, a, null);
	    }));
	}
	function df(a, b, c, d) {
	    var e = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : 0, f = c;
	    "selectionchange" === a && 9 !== c.nodeType && (f = c.ownerDocument);
	    var g = $e(f), h = a + "__" + (b ? "capture" : "bubble");
	    g.has(h) || (b && (e |= 4), af(f, a, e, b), g.add(h));
	}
	function af(a, b, c, d) {
	    var e = Nc.get(b);
	    switch(void 0 === e ? 2 : e){
	        case 0:
	            e = gd;
	            break;
	        case 1:
	            e = id;
	            break;
	        default:
	            e = hd;
	    }
	    c = e.bind(null, b, c, a);
	    e = void 0;
	    !Pb || "touchstart" !== b && "touchmove" !== b && "wheel" !== b || (e = !0);
	    d ? void 0 !== e ? a.addEventListener(b, c, {
	        capture: !0,
	        passive: e
	    }) : a.addEventListener(b, c, !0) : void 0 !== e ? a.addEventListener(b, c, {
	        passive: e
	    }) : a.addEventListener(b, c, !1);
	}
	function jd(a, b, c, d, e) {
	    var f = d;
	    if (0 === (b & 1) && 0 === (b & 2) && null !== d) a: for(;;){
	        if (null === d) return;
	        var g = d.tag;
	        if (3 === g || 4 === g) {
	            var h = d.stateNode.containerInfo;
	            if (h === e || 8 === h.nodeType && h.parentNode === e) break;
	            if (4 === g) for(g = d.return; null !== g;){
	                var k = g.tag;
	                if (3 === k || 4 === k) {
	                    if (k = g.stateNode.containerInfo, k === e || 8 === k.nodeType && k.parentNode === e) return;
	                }
	                g = g.return;
	            }
	            for(; null !== h;){
	                g = wc(h);
	                if (null === g) return;
	                k = g.tag;
	                if (5 === k || 6 === k) {
	                    d = f = g;
	                    continue a;
	                }
	                h = h.parentNode;
	            }
	        }
	        d = d.return;
	    }
	    Nb(function() {
	        var d = f, e = xb(c), g = [];
	        a: {
	            var h = Mc.get(a);
	            if (void 0 !== h) {
	                var k = td, x = a;
	                switch(a){
	                    case "keypress":
	                        if (0 === od(c)) break a;
	                    case "keydown":
	                    case "keyup":
	                        k = Rd;
	                        break;
	                    case "focusin":
	                        x = "focus";
	                        k = Fd;
	                        break;
	                    case "focusout":
	                        x = "blur";
	                        k = Fd;
	                        break;
	                    case "beforeblur":
	                    case "afterblur":
	                        k = Fd;
	                        break;
	                    case "click":
	                        if (2 === c.button) break a;
	                    case "auxclick":
	                    case "dblclick":
	                    case "mousedown":
	                    case "mousemove":
	                    case "mouseup":
	                    case "mouseout":
	                    case "mouseover":
	                    case "contextmenu":
	                        k = Bd;
	                        break;
	                    case "drag":
	                    case "dragend":
	                    case "dragenter":
	                    case "dragexit":
	                    case "dragleave":
	                    case "dragover":
	                    case "dragstart":
	                    case "drop":
	                        k = Dd;
	                        break;
	                    case "touchcancel":
	                    case "touchend":
	                    case "touchmove":
	                    case "touchstart":
	                        k = Vd;
	                        break;
	                    case Ic:
	                    case Jc:
	                    case Kc:
	                        k = Hd;
	                        break;
	                    case Lc:
	                        k = Xd;
	                        break;
	                    case "scroll":
	                        k = vd;
	                        break;
	                    case "wheel":
	                        k = Zd;
	                        break;
	                    case "copy":
	                    case "cut":
	                    case "paste":
	                        k = Jd;
	                        break;
	                    case "gotpointercapture":
	                    case "lostpointercapture":
	                    case "pointercancel":
	                    case "pointerdown":
	                    case "pointermove":
	                    case "pointerout":
	                    case "pointerover":
	                    case "pointerup":
	                        k = Td;
	                }
	                var w = 0 !== (b & 4), z = !w && "scroll" === a, u = w ? null !== h ? h + "Capture" : null : h;
	                w = [];
	                for(var t = d, q; null !== t;){
	                    q = t;
	                    var v = q.stateNode;
	                    5 === q.tag && null !== v && (q = v, null !== u && (v = Ob(t, u), null != v && w.push(ef(t, v, q))));
	                    if (z) break;
	                    t = t.return;
	                }
	                0 < w.length && (h = new k(h, x, null, c, e), g.push({
	                    event: h,
	                    listeners: w
	                }));
	            }
	        }
	        if (0 === (b & 7)) {
	            a: {
	                h = "mouseover" === a || "pointerover" === a;
	                k = "mouseout" === a || "pointerout" === a;
	                if (h && 0 === (b & 16) && (x = c.relatedTarget || c.fromElement) && (wc(x) || x[ff])) break a;
	                if (k || h) {
	                    h = e.window === e ? e : (h = e.ownerDocument) ? h.defaultView || h.parentWindow : window;
	                    if (k) {
	                        if (x = c.relatedTarget || c.toElement, k = d, x = x ? wc(x) : null, null !== x && (z = Zb(x), x !== z || 5 !== x.tag && 6 !== x.tag)) x = null;
	                    } else k = null, x = d;
	                    if (k !== x) {
	                        w = Bd;
	                        v = "onMouseLeave";
	                        u = "onMouseEnter";
	                        t = "mouse";
	                        if ("pointerout" === a || "pointerover" === a) w = Td, v = "onPointerLeave", u = "onPointerEnter", t = "pointer";
	                        z = null == k ? h : ue(k);
	                        q = null == x ? h : ue(x);
	                        h = new w(v, t + "leave", k, c, e);
	                        h.target = z;
	                        h.relatedTarget = q;
	                        v = null;
	                        wc(e) === d && (w = new w(u, t + "enter", x, c, e), w.target = q, w.relatedTarget = z, v = w);
	                        z = v;
	                        if (k && x) b: {
	                            w = k;
	                            u = x;
	                            t = 0;
	                            for(q = w; q; q = gf(q))t++;
	                            q = 0;
	                            for(v = u; v; v = gf(v))q++;
	                            for(; 0 < t - q;)w = gf(w), t--;
	                            for(; 0 < q - t;)u = gf(u), q--;
	                            for(; t--;){
	                                if (w === u || null !== u && w === u.alternate) break b;
	                                w = gf(w);
	                                u = gf(u);
	                            }
	                            w = null;
	                        }
	                        else w = null;
	                        null !== k && hf(g, h, k, w, !1);
	                        null !== x && null !== z && hf(g, z, x, w, !0);
	                    }
	                }
	            }
	            a: {
	                h = d ? ue(d) : window;
	                k = h.nodeName && h.nodeName.toLowerCase();
	                if ("select" === k || "input" === k && "file" === h.type) var J = ve;
	                else if (me(h)) if (we) J = Fe;
	                else {
	                    J = De;
	                    var K = Ce;
	                }
	                else (k = h.nodeName) && "input" === k.toLowerCase() && ("checkbox" === h.type || "radio" === h.type) && (J = Ee);
	                if (J && (J = J(a, d))) {
	                    ne(g, J, c, e);
	                    break a;
	                }
	                K && K(a, h, d);
	                "focusout" === a && (K = h._wrapperState) && K.controlled && "number" === h.type && bb(h, "number", h.value);
	            }
	            K = d ? ue(d) : window;
	            switch(a){
	                case "focusin":
	                    if (me(K) || "true" === K.contentEditable) Qe = K, Re = d, Se = null;
	                    break;
	                case "focusout":
	                    Se = Re = Qe = null;
	                    break;
	                case "mousedown":
	                    Te = !0;
	                    break;
	                case "contextmenu":
	                case "mouseup":
	                case "dragend":
	                    Te = !1;
	                    Ue(g, c, e);
	                    break;
	                case "selectionchange":
	                    if (Pe) break;
	                case "keydown":
	                case "keyup":
	                    Ue(g, c, e);
	            }
	            var Q;
	            if (ae) b: {
	                switch(a){
	                    case "compositionstart":
	                        var L = "onCompositionStart";
	                        break b;
	                    case "compositionend":
	                        L = "onCompositionEnd";
	                        break b;
	                    case "compositionupdate":
	                        L = "onCompositionUpdate";
	                        break b;
	                }
	                L = void 0;
	            }
	            else ie ? ge(a, c) && (L = "onCompositionEnd") : "keydown" === a && 229 === c.keyCode && (L = "onCompositionStart");
	            L && (de && "ko" !== c.locale && (ie || "onCompositionStart" !== L ? "onCompositionEnd" === L && ie && (Q = nd()) : (kd = e, ld = "value" in kd ? kd.value : kd.textContent, ie = !0)), K = oe(d, L), 0 < K.length && (L = new Ld(L, a, null, c, e), g.push({
	                event: L,
	                listeners: K
	            }), Q ? L.data = Q : (Q = he(c), null !== Q && (L.data = Q))));
	            if (Q = ce ? je(a, c) : ke(a, c)) d = oe(d, "onBeforeInput"), 0 < d.length && (e = new Ld("onBeforeInput", "beforeinput", null, c, e), g.push({
	                event: e,
	                listeners: d
	            }), e.data = Q);
	        }
	        se(g, b);
	    });
	}
	function ef(a, b, c) {
	    return {
	        instance: a,
	        listener: b,
	        currentTarget: c
	    };
	}
	function oe(a, b) {
	    for(var c = b + "Capture", d = []; null !== a;){
	        var e = a, f = e.stateNode;
	        5 === e.tag && null !== f && (e = f, f = Ob(a, c), null != f && d.unshift(ef(a, f, e)), f = Ob(a, b), null != f && d.push(ef(a, f, e)));
	        a = a.return;
	    }
	    return d;
	}
	function gf(a) {
	    if (null === a) return null;
	    do a = a.return;
	    while (a && 5 !== a.tag)
	    return a ? a : null;
	}
	function hf(a, b, c, d, e) {
	    for(var f = b._reactName, g = []; null !== c && c !== d;){
	        var h = c, k = h.alternate, l = h.stateNode;
	        if (null !== k && k === d) break;
	        5 === h.tag && null !== l && (h = l, e ? (k = Ob(c, f), null != k && g.unshift(ef(c, k, h))) : e || (k = Ob(c, f), null != k && g.push(ef(c, k, h))));
	        c = c.return;
	    }
	    0 !== g.length && a.push({
	        event: b,
	        listeners: g
	    });
	}
	function jf() {}
	var kf = null, lf = null;
	function mf(a, b) {
	    switch(a){
	        case "button":
	        case "input":
	        case "select":
	        case "textarea":
	            return !!b.autoFocus;
	    }
	    return !1;
	}
	function nf(a, b) {
	    return "textarea" === a || "option" === a || "noscript" === a || "string" === typeof b.children || "number" === typeof b.children || "object" === typeof b.dangerouslySetInnerHTML && null !== b.dangerouslySetInnerHTML && null != b.dangerouslySetInnerHTML.__html;
	}
	var of = "function" === typeof setTimeout ? setTimeout : void 0, pf = "function" === typeof clearTimeout ? clearTimeout : void 0;
	function qf(a) {
	    1 === a.nodeType ? a.textContent = "" : 9 === a.nodeType && (a = a.body, null != a && (a.textContent = ""));
	}
	function rf(a) {
	    for(; null != a; a = a.nextSibling){
	        var b = a.nodeType;
	        if (1 === b || 3 === b) break;
	    }
	    return a;
	}
	function sf(a) {
	    a = a.previousSibling;
	    for(var b = 0; a;){
	        if (8 === a.nodeType) {
	            var c = a.data;
	            if ("$" === c || "$!" === c || "$?" === c) {
	                if (0 === b) return a;
	                b--;
	            } else "/$" === c && b++;
	        }
	        a = a.previousSibling;
	    }
	    return null;
	}
	var tf = 0;
	function uf(a) {
	    return {
	        $$typeof: Ga,
	        toString: a,
	        valueOf: a
	    };
	}
	var vf = Math.random().toString(36).slice(2), wf = "__reactFiber$" + vf, xf = "__reactProps$" + vf, ff = "__reactContainer$" + vf, yf = "__reactEvents$" + vf;
	function wc(a) {
	    var b = a[wf];
	    if (b) return b;
	    for(var c = a.parentNode; c;){
	        if (b = c[ff] || c[wf]) {
	            c = b.alternate;
	            if (null !== b.child || null !== c && null !== c.child) for(a = sf(a); null !== a;){
	                if (c = a[wf]) return c;
	                a = sf(a);
	            }
	            return b;
	        }
	        a = c;
	        c = a.parentNode;
	    }
	    return null;
	}
	function Cb(a) {
	    a = a[wf] || a[ff];
	    return !a || 5 !== a.tag && 6 !== a.tag && 13 !== a.tag && 3 !== a.tag ? null : a;
	}
	function ue(a) {
	    if (5 === a.tag || 6 === a.tag) return a.stateNode;
	    throw Error(y(33));
	}
	function Db(a) {
	    return a[xf] || null;
	}
	function $e(a) {
	    var b = a[yf];
	    void 0 === b && (b = a[yf] = new Set);
	    return b;
	}
	var zf = [], Af = -1;
	function Bf(a) {
	    return {
	        current: a
	    };
	}
	function H(a) {
	    0 > Af || (a.current = zf[Af], zf[Af] = null, Af--);
	}
	function I(a, b) {
	    Af++;
	    zf[Af] = a.current;
	    a.current = b;
	}
	var Cf = {}, M = Bf(Cf), N = Bf(!1), Df = Cf;
	function Ef(a, b) {
	    var c = a.type.contextTypes;
	    if (!c) return Cf;
	    var d = a.stateNode;
	    if (d && d.__reactInternalMemoizedUnmaskedChildContext === b) return d.__reactInternalMemoizedMaskedChildContext;
	    var e = {}, f;
	    for(f in c)e[f] = b[f];
	    d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b, a.__reactInternalMemoizedMaskedChildContext = e);
	    return e;
	}
	function Ff(a) {
	    a = a.childContextTypes;
	    return null !== a && void 0 !== a;
	}
	function Gf() {
	    H(N);
	    H(M);
	}
	function Hf(a, b, c) {
	    if (M.current !== Cf) throw Error(y(168));
	    I(M, b);
	    I(N, c);
	}
	function If(a, b, c) {
	    var d = a.stateNode;
	    a = b.childContextTypes;
	    if ("function" !== typeof d.getChildContext) return c;
	    d = d.getChildContext();
	    for(var e in d)if (!(e in a)) throw Error(y(108, Ra(b) || "Unknown", e));
	    return m({}, c, d);
	}
	function Jf(a) {
	    a = (a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext || Cf;
	    Df = M.current;
	    I(M, a);
	    I(N, N.current);
	    return !0;
	}
	function Kf(a, b, c) {
	    var d = a.stateNode;
	    if (!d) throw Error(y(169));
	    c ? (a = If(a, b, Df), d.__reactInternalMemoizedMergedChildContext = a, H(N), H(M), I(M, a)) : H(N);
	    I(N, c);
	}
	var Lf = null, Mf = null, Nf = r.unstable_runWithPriority, Of = r.unstable_scheduleCallback, Pf = r.unstable_cancelCallback, Qf = r.unstable_shouldYield, Rf = r.unstable_requestPaint, Sf = r.unstable_now, Tf = r.unstable_getCurrentPriorityLevel, Uf = r.unstable_ImmediatePriority, Vf = r.unstable_UserBlockingPriority, Wf = r.unstable_NormalPriority, Xf = r.unstable_LowPriority, Yf = r.unstable_IdlePriority, Zf = {}, $f = void 0 !== Rf ? Rf : function() {}, ag = null, bg = null, cg = !1, dg = Sf(), O = 1E4 > dg ? Sf : function() {
	    return Sf() - dg;
	};
	function eg() {
	    switch(Tf()){
	        case Uf:
	            return 99;
	        case Vf:
	            return 98;
	        case Wf:
	            return 97;
	        case Xf:
	            return 96;
	        case Yf:
	            return 95;
	        default:
	            throw Error(y(332));
	    }
	}
	function fg(a) {
	    switch(a){
	        case 99:
	            return Uf;
	        case 98:
	            return Vf;
	        case 97:
	            return Wf;
	        case 96:
	            return Xf;
	        case 95:
	            return Yf;
	        default:
	            throw Error(y(332));
	    }
	}
	function gg(a, b) {
	    a = fg(a);
	    return Nf(a, b);
	}
	function hg(a, b, c) {
	    a = fg(a);
	    return Of(a, b, c);
	}
	function ig() {
	    if (null !== bg) {
	        var a = bg;
	        bg = null;
	        Pf(a);
	    }
	    jg();
	}
	function jg() {
	    if (!cg && null !== ag) {
	        cg = !0;
	        var a = 0;
	        try {
	            var b = ag;
	            gg(99, function() {
	                for(; a < b.length; a++){
	                    var c = b[a];
	                    do c = c(!0);
	                    while (null !== c)
	                }
	            });
	            ag = null;
	        } catch (c) {
	            throw null !== ag && (ag = ag.slice(a + 1)), Of(Uf, ig), c;
	        } finally{
	            cg = !1;
	        }
	    }
	}
	var kg = ra.ReactCurrentBatchConfig;
	function lg(a, b) {
	    if (a && a.defaultProps) {
	        b = m({}, b);
	        a = a.defaultProps;
	        for(var c in a)void 0 === b[c] && (b[c] = a[c]);
	        return b;
	    }
	    return b;
	}
	var mg = Bf(null), ng = null, og = null, pg = null;
	function qg() {
	    pg = og = ng = null;
	}
	function rg(a) {
	    var b = mg.current;
	    H(mg);
	    a.type._context._currentValue = b;
	}
	function sg(a, b) {
	    for(; null !== a;){
	        var c = a.alternate;
	        if ((a.childLanes & b) === b) if (null === c || (c.childLanes & b) === b) break;
	        else c.childLanes |= b;
	        else a.childLanes |= b, null !== c && (c.childLanes |= b);
	        a = a.return;
	    }
	}
	function tg(a, b) {
	    ng = a;
	    pg = og = null;
	    a = a.dependencies;
	    null !== a && null !== a.firstContext && (0 !== (a.lanes & b) && (ug = !0), a.firstContext = null);
	}
	function vg(a, b) {
	    if (pg !== a && !1 !== b && 0 !== b) {
	        if ("number" !== typeof b || 1073741823 === b) pg = a, b = 1073741823;
	        b = {
	            context: a,
	            observedBits: b,
	            next: null
	        };
	        if (null === og) {
	            if (null === ng) throw Error(y(308));
	            og = b;
	            ng.dependencies = {
	                lanes: 0,
	                firstContext: b,
	                responders: null
	            };
	        } else og = og.next = b;
	    }
	    return a._currentValue;
	}
	var wg = !1;
	function xg(a) {
	    a.updateQueue = {
	        baseState: a.memoizedState,
	        firstBaseUpdate: null,
	        lastBaseUpdate: null,
	        shared: {
	            pending: null
	        },
	        effects: null
	    };
	}
	function yg(a, b) {
	    a = a.updateQueue;
	    b.updateQueue === a && (b.updateQueue = {
	        baseState: a.baseState,
	        firstBaseUpdate: a.firstBaseUpdate,
	        lastBaseUpdate: a.lastBaseUpdate,
	        shared: a.shared,
	        effects: a.effects
	    });
	}
	function zg(a, b) {
	    return {
	        eventTime: a,
	        lane: b,
	        tag: 0,
	        payload: null,
	        callback: null,
	        next: null
	    };
	}
	function Ag(a, b) {
	    a = a.updateQueue;
	    if (null !== a) {
	        a = a.shared;
	        var c = a.pending;
	        null === c ? b.next = b : (b.next = c.next, c.next = b);
	        a.pending = b;
	    }
	}
	function Bg(a, b) {
	    var c = a.updateQueue, d = a.alternate;
	    if (null !== d && (d = d.updateQueue, c === d)) {
	        var e = null, f = null;
	        c = c.firstBaseUpdate;
	        if (null !== c) {
	            do {
	                var g = {
	                    eventTime: c.eventTime,
	                    lane: c.lane,
	                    tag: c.tag,
	                    payload: c.payload,
	                    callback: c.callback,
	                    next: null
	                };
	                null === f ? e = f = g : f = f.next = g;
	                c = c.next;
	            }while (null !== c)
	            null === f ? e = f = b : f = f.next = b;
	        } else e = f = b;
	        c = {
	            baseState: d.baseState,
	            firstBaseUpdate: e,
	            lastBaseUpdate: f,
	            shared: d.shared,
	            effects: d.effects
	        };
	        a.updateQueue = c;
	        return;
	    }
	    a = c.lastBaseUpdate;
	    null === a ? c.firstBaseUpdate = b : a.next = b;
	    c.lastBaseUpdate = b;
	}
	function Cg(a, b, c, d) {
	    var e = a.updateQueue;
	    wg = !1;
	    var f = e.firstBaseUpdate, g = e.lastBaseUpdate, h = e.shared.pending;
	    if (null !== h) {
	        e.shared.pending = null;
	        var k = h, l = k.next;
	        k.next = null;
	        null === g ? f = l : g.next = l;
	        g = k;
	        var n = a.alternate;
	        if (null !== n) {
	            n = n.updateQueue;
	            var A = n.lastBaseUpdate;
	            A !== g && (null === A ? n.firstBaseUpdate = l : A.next = l, n.lastBaseUpdate = k);
	        }
	    }
	    if (null !== f) {
	        A = e.baseState;
	        g = 0;
	        n = l = k = null;
	        do {
	            h = f.lane;
	            var p = f.eventTime;
	            if ((d & h) === h) {
	                null !== n && (n = n.next = {
	                    eventTime: p,
	                    lane: 0,
	                    tag: f.tag,
	                    payload: f.payload,
	                    callback: f.callback,
	                    next: null
	                });
	                a: {
	                    var C = a, x = f;
	                    h = b;
	                    p = c;
	                    switch(x.tag){
	                        case 1:
	                            C = x.payload;
	                            if ("function" === typeof C) {
	                                A = C.call(p, A, h);
	                                break a;
	                            }
	                            A = C;
	                            break a;
	                        case 3:
	                            C.flags = C.flags & -4097 | 64;
	                        case 0:
	                            C = x.payload;
	                            h = "function" === typeof C ? C.call(p, A, h) : C;
	                            if (null === h || void 0 === h) break a;
	                            A = m({}, A, h);
	                            break a;
	                        case 2:
	                            wg = !0;
	                    }
	                }
	                null !== f.callback && (a.flags |= 32, h = e.effects, null === h ? e.effects = [
	                    f
	                ] : h.push(f));
	            } else p = {
	                eventTime: p,
	                lane: h,
	                tag: f.tag,
	                payload: f.payload,
	                callback: f.callback,
	                next: null
	            }, null === n ? (l = n = p, k = A) : n = n.next = p, g |= h;
	            f = f.next;
	            if (null === f) if (h = e.shared.pending, null === h) break;
	            else f = h.next, h.next = null, e.lastBaseUpdate = h, e.shared.pending = null;
	        }while (1)
	        null === n && (k = A);
	        e.baseState = k;
	        e.firstBaseUpdate = l;
	        e.lastBaseUpdate = n;
	        Dg |= g;
	        a.lanes = g;
	        a.memoizedState = A;
	    }
	}
	function Eg(a, b, c) {
	    a = b.effects;
	    b.effects = null;
	    if (null !== a) for(b = 0; b < a.length; b++){
	        var d = a[b], e = d.callback;
	        if (null !== e) {
	            d.callback = null;
	            d = c;
	            if ("function" !== typeof e) throw Error(y(191, e));
	            e.call(d);
	        }
	    }
	}
	var Fg = (new aa.Component).refs;
	function Gg(a, b, c, d) {
	    b = a.memoizedState;
	    c = c(d, b);
	    c = null === c || void 0 === c ? b : m({}, b, c);
	    a.memoizedState = c;
	    0 === a.lanes && (a.updateQueue.baseState = c);
	}
	var Kg = {
	    isMounted: function(a) {
	        return (a = a._reactInternals) ? Zb(a) === a : !1;
	    },
	    enqueueSetState: function(a, b, c) {
	        a = a._reactInternals;
	        var d = Hg(), e = Ig(a), f = zg(d, e);
	        f.payload = b;
	        void 0 !== c && null !== c && (f.callback = c);
	        Ag(a, f);
	        Jg(a, e, d);
	    },
	    enqueueReplaceState: function(a, b, c) {
	        a = a._reactInternals;
	        var d = Hg(), e = Ig(a), f = zg(d, e);
	        f.tag = 1;
	        f.payload = b;
	        void 0 !== c && null !== c && (f.callback = c);
	        Ag(a, f);
	        Jg(a, e, d);
	    },
	    enqueueForceUpdate: function(a, b) {
	        a = a._reactInternals;
	        var c = Hg(), d = Ig(a), e = zg(c, d);
	        e.tag = 2;
	        void 0 !== b && null !== b && (e.callback = b);
	        Ag(a, e);
	        Jg(a, d, c);
	    }
	};
	function Lg(a, b, c, d, e, f, g) {
	    a = a.stateNode;
	    return "function" === typeof a.shouldComponentUpdate ? a.shouldComponentUpdate(d, f, g) : b.prototype && b.prototype.isPureReactComponent ? !Je(c, d) || !Je(e, f) : !0;
	}
	function Mg(a, b, c) {
	    var d = !1, e = Cf;
	    var f = b.contextType;
	    "object" === typeof f && null !== f ? f = vg(f) : (e = Ff(b) ? Df : M.current, d = b.contextTypes, f = (d = null !== d && void 0 !== d) ? Ef(a, e) : Cf);
	    b = new b(c, f);
	    a.memoizedState = null !== b.state && void 0 !== b.state ? b.state : null;
	    b.updater = Kg;
	    a.stateNode = b;
	    b._reactInternals = a;
	    d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e, a.__reactInternalMemoizedMaskedChildContext = f);
	    return b;
	}
	function Ng(a, b, c, d) {
	    a = b.state;
	    "function" === typeof b.componentWillReceiveProps && b.componentWillReceiveProps(c, d);
	    "function" === typeof b.UNSAFE_componentWillReceiveProps && b.UNSAFE_componentWillReceiveProps(c, d);
	    b.state !== a && Kg.enqueueReplaceState(b, b.state, null);
	}
	function Og(a, b, c, d) {
	    var e = a.stateNode;
	    e.props = c;
	    e.state = a.memoizedState;
	    e.refs = Fg;
	    xg(a);
	    var f = b.contextType;
	    "object" === typeof f && null !== f ? e.context = vg(f) : (f = Ff(b) ? Df : M.current, e.context = Ef(a, f));
	    Cg(a, c, e, d);
	    e.state = a.memoizedState;
	    f = b.getDerivedStateFromProps;
	    "function" === typeof f && (Gg(a, b, f, c), e.state = a.memoizedState);
	    "function" === typeof b.getDerivedStateFromProps || "function" === typeof e.getSnapshotBeforeUpdate || "function" !== typeof e.UNSAFE_componentWillMount && "function" !== typeof e.componentWillMount || (b = e.state, "function" === typeof e.componentWillMount && e.componentWillMount(), "function" === typeof e.UNSAFE_componentWillMount && e.UNSAFE_componentWillMount(), b !== e.state && Kg.enqueueReplaceState(e, e.state, null), Cg(a, c, e, d), e.state = a.memoizedState);
	    "function" === typeof e.componentDidMount && (a.flags |= 4);
	}
	var Pg = Array.isArray;
	function Qg(a, b, c) {
	    a = c.ref;
	    if (null !== a && "function" !== typeof a && "object" !== typeof a) {
	        if (c._owner) {
	            c = c._owner;
	            if (c) {
	                if (1 !== c.tag) throw Error(y(309));
	                var d = c.stateNode;
	            }
	            if (!d) throw Error(y(147, a));
	            var e = "" + a;
	            if (null !== b && null !== b.ref && "function" === typeof b.ref && b.ref._stringRef === e) return b.ref;
	            b = function(a) {
	                var b = d.refs;
	                b === Fg && (b = d.refs = {});
	                null === a ? delete b[e] : b[e] = a;
	            };
	            b._stringRef = e;
	            return b;
	        }
	        if ("string" !== typeof a) throw Error(y(284));
	        if (!c._owner) throw Error(y(290, a));
	    }
	    return a;
	}
	function Rg(a, b) {
	    if ("textarea" !== a.type) throw Error(y(31, "[object Object]" === Object.prototype.toString.call(b) ? "object with keys {" + Object.keys(b).join(", ") + "}" : b));
	}
	function Sg(a) {
	    function b(b, c) {
	        if (a) {
	            var d = b.lastEffect;
	            null !== d ? (d.nextEffect = c, b.lastEffect = c) : b.firstEffect = b.lastEffect = c;
	            c.nextEffect = null;
	            c.flags = 8;
	        }
	    }
	    function c(c, d) {
	        if (!a) return null;
	        for(; null !== d;)b(c, d), d = d.sibling;
	        return null;
	    }
	    function d(a, b) {
	        for(a = new Map; null !== b;)null !== b.key ? a.set(b.key, b) : a.set(b.index, b), b = b.sibling;
	        return a;
	    }
	    function e(a, b) {
	        a = Tg(a, b);
	        a.index = 0;
	        a.sibling = null;
	        return a;
	    }
	    function f(b, c, d) {
	        b.index = d;
	        if (!a) return c;
	        d = b.alternate;
	        if (null !== d) return d = d.index, d < c ? (b.flags = 2, c) : d;
	        b.flags = 2;
	        return c;
	    }
	    function g(b) {
	        a && null === b.alternate && (b.flags = 2);
	        return b;
	    }
	    function h(a, b, c, d) {
	        if (null === b || 6 !== b.tag) return b = Ug(c, a.mode, d), b.return = a, b;
	        b = e(b, c);
	        b.return = a;
	        return b;
	    }
	    function k(a, b, c, d) {
	        if (null !== b && b.elementType === c.type) return d = e(b, c.props), d.ref = Qg(a, b, c), d.return = a, d;
	        d = Vg(c.type, c.key, c.props, null, a.mode, d);
	        d.ref = Qg(a, b, c);
	        d.return = a;
	        return d;
	    }
	    function l(a, b, c, d) {
	        if (null === b || 4 !== b.tag || b.stateNode.containerInfo !== c.containerInfo || b.stateNode.implementation !== c.implementation) return b = Wg(c, a.mode, d), b.return = a, b;
	        b = e(b, c.children || []);
	        b.return = a;
	        return b;
	    }
	    function n(a, b, c, d, f) {
	        if (null === b || 7 !== b.tag) return b = Xg(c, a.mode, d, f), b.return = a, b;
	        b = e(b, c);
	        b.return = a;
	        return b;
	    }
	    function A(a, b, c) {
	        if ("string" === typeof b || "number" === typeof b) return b = Ug("" + b, a.mode, c), b.return = a, b;
	        if ("object" === typeof b && null !== b) {
	            switch(b.$$typeof){
	                case sa:
	                    return c = Vg(b.type, b.key, b.props, null, a.mode, c), c.ref = Qg(a, null, b), c.return = a, c;
	                case ta:
	                    return b = Wg(b, a.mode, c), b.return = a, b;
	            }
	            if (Pg(b) || La(b)) return b = Xg(b, a.mode, c, null), b.return = a, b;
	            Rg(a, b);
	        }
	        return null;
	    }
	    function p(a, b, c, d) {
	        var e = null !== b ? b.key : null;
	        if ("string" === typeof c || "number" === typeof c) return null !== e ? null : h(a, b, "" + c, d);
	        if ("object" === typeof c && null !== c) {
	            switch(c.$$typeof){
	                case sa:
	                    return c.key === e ? c.type === ua ? n(a, b, c.props.children, d, e) : k(a, b, c, d) : null;
	                case ta:
	                    return c.key === e ? l(a, b, c, d) : null;
	            }
	            if (Pg(c) || La(c)) return null !== e ? null : n(a, b, c, d, null);
	            Rg(a, c);
	        }
	        return null;
	    }
	    function C(a, b, c, d, e) {
	        if ("string" === typeof d || "number" === typeof d) return a = a.get(c) || null, h(b, a, "" + d, e);
	        if ("object" === typeof d && null !== d) {
	            switch(d.$$typeof){
	                case sa:
	                    return a = a.get(null === d.key ? c : d.key) || null, d.type === ua ? n(b, a, d.props.children, e, d.key) : k(b, a, d, e);
	                case ta:
	                    return a = a.get(null === d.key ? c : d.key) || null, l(b, a, d, e);
	            }
	            if (Pg(d) || La(d)) return a = a.get(c) || null, n(b, a, d, e, null);
	            Rg(b, d);
	        }
	        return null;
	    }
	    function x(e, g, h, k) {
	        for(var l = null, t = null, u = g, z = g = 0, q = null; null !== u && z < h.length; z++){
	            u.index > z ? (q = u, u = null) : q = u.sibling;
	            var n = p(e, u, h[z], k);
	            if (null === n) {
	                null === u && (u = q);
	                break;
	            }
	            a && u && null === n.alternate && b(e, u);
	            g = f(n, g, z);
	            null === t ? l = n : t.sibling = n;
	            t = n;
	            u = q;
	        }
	        if (z === h.length) return c(e, u), l;
	        if (null === u) {
	            for(; z < h.length; z++)u = A(e, h[z], k), null !== u && (g = f(u, g, z), null === t ? l = u : t.sibling = u, t = u);
	            return l;
	        }
	        for(u = d(e, u); z < h.length; z++)q = C(u, e, z, h[z], k), null !== q && (a && null !== q.alternate && u.delete(null === q.key ? z : q.key), g = f(q, g, z), null === t ? l = q : t.sibling = q, t = q);
	        a && u.forEach(function(a) {
	            return b(e, a);
	        });
	        return l;
	    }
	    function w(e, g, h, k) {
	        var l = La(h);
	        if ("function" !== typeof l) throw Error(y(150));
	        h = l.call(h);
	        if (null == h) throw Error(y(151));
	        for(var t = l = null, u = g, z = g = 0, q = null, n = h.next(); null !== u && !n.done; z++, n = h.next()){
	            u.index > z ? (q = u, u = null) : q = u.sibling;
	            var w = p(e, u, n.value, k);
	            if (null === w) {
	                null === u && (u = q);
	                break;
	            }
	            a && u && null === w.alternate && b(e, u);
	            g = f(w, g, z);
	            null === t ? l = w : t.sibling = w;
	            t = w;
	            u = q;
	        }
	        if (n.done) return c(e, u), l;
	        if (null === u) {
	            for(; !n.done; z++, n = h.next())n = A(e, n.value, k), null !== n && (g = f(n, g, z), null === t ? l = n : t.sibling = n, t = n);
	            return l;
	        }
	        for(u = d(e, u); !n.done; z++, n = h.next())n = C(u, e, z, n.value, k), null !== n && (a && null !== n.alternate && u.delete(null === n.key ? z : n.key), g = f(n, g, z), null === t ? l = n : t.sibling = n, t = n);
	        a && u.forEach(function(a) {
	            return b(e, a);
	        });
	        return l;
	    }
	    return function(a, d, f, h) {
	        var k = "object" === typeof f && null !== f && f.type === ua && null === f.key;
	        k && (f = f.props.children);
	        var l = "object" === typeof f && null !== f;
	        if (l) switch(f.$$typeof){
	            case sa:
	                a: {
	                    l = f.key;
	                    for(k = d; null !== k;){
	                        if (k.key === l) {
	                            switch(k.tag){
	                                case 7:
	                                    if (f.type === ua) {
	                                        c(a, k.sibling);
	                                        d = e(k, f.props.children);
	                                        d.return = a;
	                                        a = d;
	                                        break a;
	                                    }
	                                    break;
	                                default:
	                                    if (k.elementType === f.type) {
	                                        c(a, k.sibling);
	                                        d = e(k, f.props);
	                                        d.ref = Qg(a, k, f);
	                                        d.return = a;
	                                        a = d;
	                                        break a;
	                                    }
	                            }
	                            c(a, k);
	                            break;
	                        } else b(a, k);
	                        k = k.sibling;
	                    }
	                    f.type === ua ? (d = Xg(f.props.children, a.mode, h, f.key), d.return = a, a = d) : (h = Vg(f.type, f.key, f.props, null, a.mode, h), h.ref = Qg(a, d, f), h.return = a, a = h);
	                }
	                return g(a);
	            case ta:
	                a: {
	                    for(k = f.key; null !== d;){
	                        if (d.key === k) if (4 === d.tag && d.stateNode.containerInfo === f.containerInfo && d.stateNode.implementation === f.implementation) {
	                            c(a, d.sibling);
	                            d = e(d, f.children || []);
	                            d.return = a;
	                            a = d;
	                            break a;
	                        } else {
	                            c(a, d);
	                            break;
	                        }
	                        else b(a, d);
	                        d = d.sibling;
	                    }
	                    d = Wg(f, a.mode, h);
	                    d.return = a;
	                    a = d;
	                }
	                return g(a);
	        }
	        if ("string" === typeof f || "number" === typeof f) return f = "" + f, null !== d && 6 === d.tag ? (c(a, d.sibling), d = e(d, f), d.return = a, a = d) : (c(a, d), d = Ug(f, a.mode, h), d.return = a, a = d), g(a);
	        if (Pg(f)) return x(a, d, f, h);
	        if (La(f)) return w(a, d, f, h);
	        l && Rg(a, f);
	        if ("undefined" === typeof f && !k) switch(a.tag){
	            case 1:
	            case 22:
	            case 0:
	            case 11:
	            case 15:
	                throw Error(y(152, Ra(a.type) || "Component"));
	        }
	        return c(a, d);
	    };
	}
	var Yg = Sg(!0), Zg = Sg(!1), $g = {}, ah = Bf($g), bh = Bf($g), ch = Bf($g);
	function dh(a) {
	    if (a === $g) throw Error(y(174));
	    return a;
	}
	function eh(a, b) {
	    I(ch, b);
	    I(bh, a);
	    I(ah, $g);
	    a = b.nodeType;
	    switch(a){
	        case 9:
	        case 11:
	            b = (b = b.documentElement) ? b.namespaceURI : mb(null, "");
	            break;
	        default:
	            a = 8 === a ? b.parentNode : b, b = a.namespaceURI || null, a = a.tagName, b = mb(b, a);
	    }
	    H(ah);
	    I(ah, b);
	}
	function fh() {
	    H(ah);
	    H(bh);
	    H(ch);
	}
	function gh(a) {
	    dh(ch.current);
	    var b = dh(ah.current);
	    var c = mb(b, a.type);
	    b !== c && (I(bh, a), I(ah, c));
	}
	function hh(a) {
	    bh.current === a && (H(ah), H(bh));
	}
	var P = Bf(0);
	function ih(a) {
	    for(var b = a; null !== b;){
	        if (13 === b.tag) {
	            var c = b.memoizedState;
	            if (null !== c && (c = c.dehydrated, null === c || "$?" === c.data || "$!" === c.data)) return b;
	        } else if (19 === b.tag && void 0 !== b.memoizedProps.revealOrder) {
	            if (0 !== (b.flags & 64)) return b;
	        } else if (null !== b.child) {
	            b.child.return = b;
	            b = b.child;
	            continue;
	        }
	        if (b === a) break;
	        for(; null === b.sibling;){
	            if (null === b.return || b.return === a) return null;
	            b = b.return;
	        }
	        b.sibling.return = b.return;
	        b = b.sibling;
	    }
	    return null;
	}
	var jh = null, kh = null, lh = !1;
	function mh(a, b) {
	    var c = nh(5, null, null, 0);
	    c.elementType = "DELETED";
	    c.type = "DELETED";
	    c.stateNode = b;
	    c.return = a;
	    c.flags = 8;
	    null !== a.lastEffect ? (a.lastEffect.nextEffect = c, a.lastEffect = c) : a.firstEffect = a.lastEffect = c;
	}
	function oh(a, b) {
	    switch(a.tag){
	        case 5:
	            var c = a.type;
	            b = 1 !== b.nodeType || c.toLowerCase() !== b.nodeName.toLowerCase() ? null : b;
	            return null !== b ? (a.stateNode = b, !0) : !1;
	        case 6:
	            return b = "" === a.pendingProps || 3 !== b.nodeType ? null : b, null !== b ? (a.stateNode = b, !0) : !1;
	        case 13:
	            return !1;
	        default:
	            return !1;
	    }
	}
	function ph(a) {
	    if (lh) {
	        var b = kh;
	        if (b) {
	            var c = b;
	            if (!oh(a, b)) {
	                b = rf(c.nextSibling);
	                if (!b || !oh(a, b)) {
	                    a.flags = a.flags & -1025 | 2;
	                    lh = !1;
	                    jh = a;
	                    return;
	                }
	                mh(jh, c);
	            }
	            jh = a;
	            kh = rf(b.firstChild);
	        } else a.flags = a.flags & -1025 | 2, lh = !1, jh = a;
	    }
	}
	function qh(a) {
	    for(a = a.return; null !== a && 5 !== a.tag && 3 !== a.tag && 13 !== a.tag;)a = a.return;
	    jh = a;
	}
	function rh(a) {
	    if (a !== jh) return !1;
	    if (!lh) return qh(a), lh = !0, !1;
	    var b = a.type;
	    if (5 !== a.tag || "head" !== b && "body" !== b && !nf(b, a.memoizedProps)) for(b = kh; b;)mh(a, b), b = rf(b.nextSibling);
	    qh(a);
	    if (13 === a.tag) {
	        a = a.memoizedState;
	        a = null !== a ? a.dehydrated : null;
	        if (!a) throw Error(y(317));
	        a: {
	            a = a.nextSibling;
	            for(b = 0; a;){
	                if (8 === a.nodeType) {
	                    var c = a.data;
	                    if ("/$" === c) {
	                        if (0 === b) {
	                            kh = rf(a.nextSibling);
	                            break a;
	                        }
	                        b--;
	                    } else "$" !== c && "$!" !== c && "$?" !== c || b++;
	                }
	                a = a.nextSibling;
	            }
	            kh = null;
	        }
	    } else kh = jh ? rf(a.stateNode.nextSibling) : null;
	    return !0;
	}
	function sh() {
	    kh = jh = null;
	    lh = !1;
	}
	var th = [];
	function uh() {
	    for(var a = 0; a < th.length; a++)th[a]._workInProgressVersionPrimary = null;
	    th.length = 0;
	}
	var vh = ra.ReactCurrentDispatcher, wh = ra.ReactCurrentBatchConfig, xh = 0, R = null, S = null, T = null, yh = !1, zh = !1;
	function Ah() {
	    throw Error(y(321));
	}
	function Bh(a, b) {
	    if (null === b) return !1;
	    for(var c = 0; c < b.length && c < a.length; c++)if (!He(a[c], b[c])) return !1;
	    return !0;
	}
	function Ch(a, b, c, d, e, f) {
	    xh = f;
	    R = b;
	    b.memoizedState = null;
	    b.updateQueue = null;
	    b.lanes = 0;
	    vh.current = null === a || null === a.memoizedState ? Dh : Eh;
	    a = c(d, e);
	    if (zh) {
	        f = 0;
	        do {
	            zh = !1;
	            if (!(25 > f)) throw Error(y(301));
	            f += 1;
	            T = S = null;
	            b.updateQueue = null;
	            vh.current = Fh;
	            a = c(d, e);
	        }while (zh)
	    }
	    vh.current = Gh;
	    b = null !== S && null !== S.next;
	    xh = 0;
	    T = S = R = null;
	    yh = !1;
	    if (b) throw Error(y(300));
	    return a;
	}
	function Hh() {
	    var a = {
	        memoizedState: null,
	        baseState: null,
	        baseQueue: null,
	        queue: null,
	        next: null
	    };
	    null === T ? R.memoizedState = T = a : T = T.next = a;
	    return T;
	}
	function Ih() {
	    if (null === S) {
	        var a = R.alternate;
	        a = null !== a ? a.memoizedState : null;
	    } else a = S.next;
	    var b = null === T ? R.memoizedState : T.next;
	    if (null !== b) T = b, S = a;
	    else {
	        if (null === a) throw Error(y(310));
	        S = a;
	        a = {
	            memoizedState: S.memoizedState,
	            baseState: S.baseState,
	            baseQueue: S.baseQueue,
	            queue: S.queue,
	            next: null
	        };
	        null === T ? R.memoizedState = T = a : T = T.next = a;
	    }
	    return T;
	}
	function Jh(a, b) {
	    return "function" === typeof b ? b(a) : b;
	}
	function Kh(a) {
	    var b = Ih(), c = b.queue;
	    if (null === c) throw Error(y(311));
	    c.lastRenderedReducer = a;
	    var d = S, e = d.baseQueue, f = c.pending;
	    if (null !== f) {
	        if (null !== e) {
	            var g = e.next;
	            e.next = f.next;
	            f.next = g;
	        }
	        d.baseQueue = e = f;
	        c.pending = null;
	    }
	    if (null !== e) {
	        e = e.next;
	        d = d.baseState;
	        var h = g = f = null, k = e;
	        do {
	            var l = k.lane;
	            if ((xh & l) === l) null !== h && (h = h.next = {
	                lane: 0,
	                action: k.action,
	                eagerReducer: k.eagerReducer,
	                eagerState: k.eagerState,
	                next: null
	            }), d = k.eagerReducer === a ? k.eagerState : a(d, k.action);
	            else {
	                var n = {
	                    lane: l,
	                    action: k.action,
	                    eagerReducer: k.eagerReducer,
	                    eagerState: k.eagerState,
	                    next: null
	                };
	                null === h ? (g = h = n, f = d) : h = h.next = n;
	                R.lanes |= l;
	                Dg |= l;
	            }
	            k = k.next;
	        }while (null !== k && k !== e)
	        null === h ? f = d : h.next = g;
	        He(d, b.memoizedState) || (ug = !0);
	        b.memoizedState = d;
	        b.baseState = f;
	        b.baseQueue = h;
	        c.lastRenderedState = d;
	    }
	    return [
	        b.memoizedState,
	        c.dispatch
	    ];
	}
	function Lh(a) {
	    var b = Ih(), c = b.queue;
	    if (null === c) throw Error(y(311));
	    c.lastRenderedReducer = a;
	    var d = c.dispatch, e = c.pending, f = b.memoizedState;
	    if (null !== e) {
	        c.pending = null;
	        var g = e = e.next;
	        do f = a(f, g.action), g = g.next;
	        while (g !== e)
	        He(f, b.memoizedState) || (ug = !0);
	        b.memoizedState = f;
	        null === b.baseQueue && (b.baseState = f);
	        c.lastRenderedState = f;
	    }
	    return [
	        f,
	        d
	    ];
	}
	function Mh(a, b, c) {
	    var d = b._getVersion;
	    d = d(b._source);
	    var e = b._workInProgressVersionPrimary;
	    if (null !== e) a = e === d;
	    else if (a = a.mutableReadLanes, a = (xh & a) === a) b._workInProgressVersionPrimary = d, th.push(b);
	    if (a) return c(b._source);
	    th.push(b);
	    throw Error(y(350));
	}
	function Nh(a, b, c, d) {
	    var e = U;
	    if (null === e) throw Error(y(349));
	    var f = b._getVersion, g = f(b._source), h = vh.current, k = h.useState(function() {
	        return Mh(e, b, c);
	    }), l = k[1], n = k[0];
	    k = T;
	    var A = a.memoizedState, p = A.refs, C = p.getSnapshot, x = A.source;
	    A = A.subscribe;
	    var w = R;
	    a.memoizedState = {
	        refs: p,
	        source: b,
	        subscribe: d
	    };
	    h.useEffect(function() {
	        p.getSnapshot = c;
	        p.setSnapshot = l;
	        var a = f(b._source);
	        if (!He(g, a)) {
	            a = c(b._source);
	            He(n, a) || (l(a), a = Ig(w), e.mutableReadLanes |= a & e.pendingLanes);
	            a = e.mutableReadLanes;
	            e.entangledLanes |= a;
	            for(var d = e.entanglements, h = a; 0 < h;){
	                var k = 31 - Vc(h), v = 1 << k;
	                d[k] |= a;
	                h &= ~v;
	            }
	        }
	    }, [
	        c,
	        b,
	        d
	    ]);
	    h.useEffect(function() {
	        return d(b._source, function() {
	            var a = p.getSnapshot, c = p.setSnapshot;
	            try {
	                c(a(b._source));
	                var d = Ig(w);
	                e.mutableReadLanes |= d & e.pendingLanes;
	            } catch (q) {
	                c(function() {
	                    throw q;
	                });
	            }
	        });
	    }, [
	        b,
	        d
	    ]);
	    He(C, c) && He(x, b) && He(A, d) || (a = {
	        pending: null,
	        dispatch: null,
	        lastRenderedReducer: Jh,
	        lastRenderedState: n
	    }, a.dispatch = l = Oh.bind(null, R, a), k.queue = a, k.baseQueue = null, n = Mh(e, b, c), k.memoizedState = k.baseState = n);
	    return n;
	}
	function Ph(a, b, c) {
	    var d = Ih();
	    return Nh(d, a, b, c);
	}
	function Qh(a) {
	    var b = Hh();
	    "function" === typeof a && (a = a());
	    b.memoizedState = b.baseState = a;
	    a = b.queue = {
	        pending: null,
	        dispatch: null,
	        lastRenderedReducer: Jh,
	        lastRenderedState: a
	    };
	    a = a.dispatch = Oh.bind(null, R, a);
	    return [
	        b.memoizedState,
	        a
	    ];
	}
	function Rh(a, b, c, d) {
	    a = {
	        tag: a,
	        create: b,
	        destroy: c,
	        deps: d,
	        next: null
	    };
	    b = R.updateQueue;
	    null === b ? (b = {
	        lastEffect: null
	    }, R.updateQueue = b, b.lastEffect = a.next = a) : (c = b.lastEffect, null === c ? b.lastEffect = a.next = a : (d = c.next, c.next = a, a.next = d, b.lastEffect = a));
	    return a;
	}
	function Sh(a) {
	    var b = Hh();
	    a = {
	        current: a
	    };
	    return b.memoizedState = a;
	}
	function Th() {
	    return Ih().memoizedState;
	}
	function Uh(a, b, c, d) {
	    var e = Hh();
	    R.flags |= a;
	    e.memoizedState = Rh(1 | b, c, void 0, void 0 === d ? null : d);
	}
	function Vh(a, b, c, d) {
	    var e = Ih();
	    d = void 0 === d ? null : d;
	    var f = void 0;
	    if (null !== S) {
	        var g = S.memoizedState;
	        f = g.destroy;
	        if (null !== d && Bh(d, g.deps)) {
	            Rh(b, c, f, d);
	            return;
	        }
	    }
	    R.flags |= a;
	    e.memoizedState = Rh(1 | b, c, f, d);
	}
	function Wh(a, b) {
	    return Uh(516, 4, a, b);
	}
	function Xh(a, b) {
	    return Vh(516, 4, a, b);
	}
	function Yh(a, b) {
	    return Vh(4, 2, a, b);
	}
	function Zh(a, b) {
	    if ("function" === typeof b) return a = a(), b(a), function() {
	        b(null);
	    };
	    if (null !== b && void 0 !== b) return a = a(), b.current = a, function() {
	        b.current = null;
	    };
	}
	function $h(a, b, c) {
	    c = null !== c && void 0 !== c ? c.concat([
	        a
	    ]) : null;
	    return Vh(4, 2, Zh.bind(null, b, a), c);
	}
	function ai() {}
	function bi(a, b) {
	    var c = Ih();
	    b = void 0 === b ? null : b;
	    var d = c.memoizedState;
	    if (null !== d && null !== b && Bh(b, d[1])) return d[0];
	    c.memoizedState = [
	        a,
	        b
	    ];
	    return a;
	}
	function ci(a, b) {
	    var c = Ih();
	    b = void 0 === b ? null : b;
	    var d = c.memoizedState;
	    if (null !== d && null !== b && Bh(b, d[1])) return d[0];
	    a = a();
	    c.memoizedState = [
	        a,
	        b
	    ];
	    return a;
	}
	function di(a, b) {
	    var c = eg();
	    gg(98 > c ? 98 : c, function() {
	        a(!0);
	    });
	    gg(97 < c ? 97 : c, function() {
	        var c = wh.transition;
	        wh.transition = 1;
	        try {
	            a(!1), b();
	        } finally{
	            wh.transition = c;
	        }
	    });
	}
	function Oh(a, b, c) {
	    var d = Hg(), e = Ig(a), f = {
	        lane: e,
	        action: c,
	        eagerReducer: null,
	        eagerState: null,
	        next: null
	    }, g = b.pending;
	    null === g ? f.next = f : (f.next = g.next, g.next = f);
	    b.pending = f;
	    g = a.alternate;
	    if (a === R || null !== g && g === R) zh = yh = !0;
	    else {
	        if (0 === a.lanes && (null === g || 0 === g.lanes) && (g = b.lastRenderedReducer, null !== g)) try {
	            var h = b.lastRenderedState, k = g(h, c);
	            f.eagerReducer = g;
	            f.eagerState = k;
	            if (He(k, h)) return;
	        } catch (l) {} finally{}
	        Jg(a, e, d);
	    }
	}
	var Gh = {
	    readContext: vg,
	    useCallback: Ah,
	    useContext: Ah,
	    useEffect: Ah,
	    useImperativeHandle: Ah,
	    useLayoutEffect: Ah,
	    useMemo: Ah,
	    useReducer: Ah,
	    useRef: Ah,
	    useState: Ah,
	    useDebugValue: Ah,
	    useDeferredValue: Ah,
	    useTransition: Ah,
	    useMutableSource: Ah,
	    useOpaqueIdentifier: Ah,
	    unstable_isNewReconciler: !1
	}, Dh = {
	    readContext: vg,
	    useCallback: function(a, b) {
	        Hh().memoizedState = [
	            a,
	            void 0 === b ? null : b
	        ];
	        return a;
	    },
	    useContext: vg,
	    useEffect: Wh,
	    useImperativeHandle: function(a, b, c) {
	        c = null !== c && void 0 !== c ? c.concat([
	            a
	        ]) : null;
	        return Uh(4, 2, Zh.bind(null, b, a), c);
	    },
	    useLayoutEffect: function(a, b) {
	        return Uh(4, 2, a, b);
	    },
	    useMemo: function(a, b) {
	        var c = Hh();
	        b = void 0 === b ? null : b;
	        a = a();
	        c.memoizedState = [
	            a,
	            b
	        ];
	        return a;
	    },
	    useReducer: function(a, b, c) {
	        var d = Hh();
	        b = void 0 !== c ? c(b) : b;
	        d.memoizedState = d.baseState = b;
	        a = d.queue = {
	            pending: null,
	            dispatch: null,
	            lastRenderedReducer: a,
	            lastRenderedState: b
	        };
	        a = a.dispatch = Oh.bind(null, R, a);
	        return [
	            d.memoizedState,
	            a
	        ];
	    },
	    useRef: Sh,
	    useState: Qh,
	    useDebugValue: ai,
	    useDeferredValue: function(a) {
	        var b = Qh(a), c = b[0], d = b[1];
	        Wh(function() {
	            var b = wh.transition;
	            wh.transition = 1;
	            try {
	                d(a);
	            } finally{
	                wh.transition = b;
	            }
	        }, [
	            a
	        ]);
	        return c;
	    },
	    useTransition: function() {
	        var a = Qh(!1), b = a[0];
	        a = di.bind(null, a[1]);
	        Sh(a);
	        return [
	            a,
	            b
	        ];
	    },
	    useMutableSource: function(a, b, c) {
	        var d = Hh();
	        d.memoizedState = {
	            refs: {
	                getSnapshot: b,
	                setSnapshot: null
	            },
	            source: a,
	            subscribe: c
	        };
	        return Nh(d, a, b, c);
	    },
	    useOpaqueIdentifier: function() {
	        if (lh) {
	            var a = !1, b = uf(function() {
	                a || (a = !0, c("r:" + (tf++).toString(36)));
	                throw Error(y(355));
	            }), c = Qh(b)[1];
	            0 === (R.mode & 2) && (R.flags |= 516, Rh(5, function() {
	                c("r:" + (tf++).toString(36));
	            }, void 0, null));
	            return b;
	        }
	        b = "r:" + (tf++).toString(36);
	        Qh(b);
	        return b;
	    },
	    unstable_isNewReconciler: !1
	}, Eh = {
	    readContext: vg,
	    useCallback: bi,
	    useContext: vg,
	    useEffect: Xh,
	    useImperativeHandle: $h,
	    useLayoutEffect: Yh,
	    useMemo: ci,
	    useReducer: Kh,
	    useRef: Th,
	    useState: function() {
	        return Kh(Jh);
	    },
	    useDebugValue: ai,
	    useDeferredValue: function(a) {
	        var b = Kh(Jh), c = b[0], d = b[1];
	        Xh(function() {
	            var b = wh.transition;
	            wh.transition = 1;
	            try {
	                d(a);
	            } finally{
	                wh.transition = b;
	            }
	        }, [
	            a
	        ]);
	        return c;
	    },
	    useTransition: function() {
	        var a = Kh(Jh)[0];
	        return [
	            Th().current,
	            a
	        ];
	    },
	    useMutableSource: Ph,
	    useOpaqueIdentifier: function() {
	        return Kh(Jh)[0];
	    },
	    unstable_isNewReconciler: !1
	}, Fh = {
	    readContext: vg,
	    useCallback: bi,
	    useContext: vg,
	    useEffect: Xh,
	    useImperativeHandle: $h,
	    useLayoutEffect: Yh,
	    useMemo: ci,
	    useReducer: Lh,
	    useRef: Th,
	    useState: function() {
	        return Lh(Jh);
	    },
	    useDebugValue: ai,
	    useDeferredValue: function(a) {
	        var b = Lh(Jh), c = b[0], d = b[1];
	        Xh(function() {
	            var b = wh.transition;
	            wh.transition = 1;
	            try {
	                d(a);
	            } finally{
	                wh.transition = b;
	            }
	        }, [
	            a
	        ]);
	        return c;
	    },
	    useTransition: function() {
	        var a = Lh(Jh)[0];
	        return [
	            Th().current,
	            a
	        ];
	    },
	    useMutableSource: Ph,
	    useOpaqueIdentifier: function() {
	        return Lh(Jh)[0];
	    },
	    unstable_isNewReconciler: !1
	}, ei = ra.ReactCurrentOwner, ug = !1;
	function fi(a, b, c, d) {
	    b.child = null === a ? Zg(b, null, c, d) : Yg(b, a.child, c, d);
	}
	function gi(a, b, c, d, e) {
	    c = c.render;
	    var f = b.ref;
	    tg(b, e);
	    d = Ch(a, b, c, d, f, e);
	    if (null !== a && !ug) return b.updateQueue = a.updateQueue, b.flags &= -517, a.lanes &= ~e, hi(a, b, e);
	    b.flags |= 1;
	    fi(a, b, d, e);
	    return b.child;
	}
	function ii(a, b, c, d, e, f) {
	    if (null === a) {
	        var g = c.type;
	        if ("function" === typeof g && !ji(g) && void 0 === g.defaultProps && null === c.compare && void 0 === c.defaultProps) return b.tag = 15, b.type = g, ki(a, b, g, d, e, f);
	        a = Vg(c.type, null, d, b, b.mode, f);
	        a.ref = b.ref;
	        a.return = b;
	        return b.child = a;
	    }
	    g = a.child;
	    if (0 === (e & f) && (e = g.memoizedProps, c = c.compare, c = null !== c ? c : Je, c(e, d) && a.ref === b.ref)) return hi(a, b, f);
	    b.flags |= 1;
	    a = Tg(g, d);
	    a.ref = b.ref;
	    a.return = b;
	    return b.child = a;
	}
	function ki(a, b, c, d, e, f) {
	    if (null !== a && Je(a.memoizedProps, d) && a.ref === b.ref) if (ug = !1, 0 !== (f & e)) 0 !== (a.flags & 16384) && (ug = !0);
	    else return b.lanes = a.lanes, hi(a, b, f);
	    return li(a, b, c, d, f);
	}
	function mi(a, b, c) {
	    var d = b.pendingProps, e = d.children, f = null !== a ? a.memoizedState : null;
	    if ("hidden" === d.mode || "unstable-defer-without-hiding" === d.mode) if (0 === (b.mode & 4)) b.memoizedState = {
	        baseLanes: 0
	    }, ni(b, c);
	    else if (0 !== (c & 1073741824)) b.memoizedState = {
	        baseLanes: 0
	    }, ni(b, null !== f ? f.baseLanes : c);
	    else return a = null !== f ? f.baseLanes | c : c, b.lanes = b.childLanes = 1073741824, b.memoizedState = {
	        baseLanes: a
	    }, ni(b, a), null;
	    else null !== f ? (d = f.baseLanes | c, b.memoizedState = null) : d = c, ni(b, d);
	    fi(a, b, e, c);
	    return b.child;
	}
	function oi(a, b) {
	    var c = b.ref;
	    if (null === a && null !== c || null !== a && a.ref !== c) b.flags |= 128;
	}
	function li(a, b, c, d, e) {
	    var f = Ff(c) ? Df : M.current;
	    f = Ef(b, f);
	    tg(b, e);
	    c = Ch(a, b, c, d, f, e);
	    if (null !== a && !ug) return b.updateQueue = a.updateQueue, b.flags &= -517, a.lanes &= ~e, hi(a, b, e);
	    b.flags |= 1;
	    fi(a, b, c, e);
	    return b.child;
	}
	function pi(a, b, c, d, e) {
	    if (Ff(c)) {
	        var f = !0;
	        Jf(b);
	    } else f = !1;
	    tg(b, e);
	    if (null === b.stateNode) null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2), Mg(b, c, d), Og(b, c, d, e), d = !0;
	    else if (null === a) {
	        var g = b.stateNode, h = b.memoizedProps;
	        g.props = h;
	        var k = g.context, l = c.contextType;
	        "object" === typeof l && null !== l ? l = vg(l) : (l = Ff(c) ? Df : M.current, l = Ef(b, l));
	        var n = c.getDerivedStateFromProps, A = "function" === typeof n || "function" === typeof g.getSnapshotBeforeUpdate;
	        A || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== d || k !== l) && Ng(b, g, d, l);
	        wg = !1;
	        var p = b.memoizedState;
	        g.state = p;
	        Cg(b, d, g, e);
	        k = b.memoizedState;
	        h !== d || p !== k || N.current || wg ? ("function" === typeof n && (Gg(b, c, n, d), k = b.memoizedState), (h = wg || Lg(b, c, h, d, p, k, l)) ? (A || "function" !== typeof g.UNSAFE_componentWillMount && "function" !== typeof g.componentWillMount || ("function" === typeof g.componentWillMount && g.componentWillMount(), "function" === typeof g.UNSAFE_componentWillMount && g.UNSAFE_componentWillMount()), "function" === typeof g.componentDidMount && (b.flags |= 4)) : ("function" === typeof g.componentDidMount && (b.flags |= 4), b.memoizedProps = d, b.memoizedState = k), g.props = d, g.state = k, g.context = l, d = h) : ("function" === typeof g.componentDidMount && (b.flags |= 4), d = !1);
	    } else {
	        g = b.stateNode;
	        yg(a, b);
	        h = b.memoizedProps;
	        l = b.type === b.elementType ? h : lg(b.type, h);
	        g.props = l;
	        A = b.pendingProps;
	        p = g.context;
	        k = c.contextType;
	        "object" === typeof k && null !== k ? k = vg(k) : (k = Ff(c) ? Df : M.current, k = Ef(b, k));
	        var C = c.getDerivedStateFromProps;
	        (n = "function" === typeof C || "function" === typeof g.getSnapshotBeforeUpdate) || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== A || p !== k) && Ng(b, g, d, k);
	        wg = !1;
	        p = b.memoizedState;
	        g.state = p;
	        Cg(b, d, g, e);
	        var x = b.memoizedState;
	        h !== A || p !== x || N.current || wg ? ("function" === typeof C && (Gg(b, c, C, d), x = b.memoizedState), (l = wg || Lg(b, c, l, d, p, x, k)) ? (n || "function" !== typeof g.UNSAFE_componentWillUpdate && "function" !== typeof g.componentWillUpdate || ("function" === typeof g.componentWillUpdate && g.componentWillUpdate(d, x, k), "function" === typeof g.UNSAFE_componentWillUpdate && g.UNSAFE_componentWillUpdate(d, x, k)), "function" === typeof g.componentDidUpdate && (b.flags |= 4), "function" === typeof g.getSnapshotBeforeUpdate && (b.flags |= 256)) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && p === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && p === a.memoizedState || (b.flags |= 256), b.memoizedProps = d, b.memoizedState = x), g.props = d, g.state = x, g.context = k, d = l) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && p === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && p === a.memoizedState || (b.flags |= 256), d = !1);
	    }
	    return qi(a, b, c, d, f, e);
	}
	function qi(a, b, c, d, e, f) {
	    oi(a, b);
	    var g = 0 !== (b.flags & 64);
	    if (!d && !g) return e && Kf(b, c, !1), hi(a, b, f);
	    d = b.stateNode;
	    ei.current = b;
	    var h = g && "function" !== typeof c.getDerivedStateFromError ? null : d.render();
	    b.flags |= 1;
	    null !== a && g ? (b.child = Yg(b, a.child, null, f), b.child = Yg(b, null, h, f)) : fi(a, b, h, f);
	    b.memoizedState = d.state;
	    e && Kf(b, c, !0);
	    return b.child;
	}
	function ri(a) {
	    var b = a.stateNode;
	    b.pendingContext ? Hf(a, b.pendingContext, b.pendingContext !== b.context) : b.context && Hf(a, b.context, !1);
	    eh(a, b.containerInfo);
	}
	var si = {
	    dehydrated: null,
	    retryLane: 0
	};
	function ti(a, b, c) {
	    var d = b.pendingProps, e = P.current, f = !1, g;
	    (g = 0 !== (b.flags & 64)) || (g = null !== a && null === a.memoizedState ? !1 : 0 !== (e & 2));
	    g ? (f = !0, b.flags &= -65) : null !== a && null === a.memoizedState || void 0 === d.fallback || !0 === d.unstable_avoidThisFallback || (e |= 1);
	    I(P, e & 1);
	    if (null === a) {
	        void 0 !== d.fallback && ph(b);
	        a = d.children;
	        e = d.fallback;
	        if (f) return a = ui(b, a, e, c), b.child.memoizedState = {
	            baseLanes: c
	        }, b.memoizedState = si, a;
	        if ("number" === typeof d.unstable_expectedLoadTime) return a = ui(b, a, e, c), b.child.memoizedState = {
	            baseLanes: c
	        }, b.memoizedState = si, b.lanes = 33554432, a;
	        c = vi({
	            mode: "visible",
	            children: a
	        }, b.mode, c, null);
	        c.return = b;
	        return b.child = c;
	    }
	    if (null !== a.memoizedState) {
	        if (f) return d = wi(a, b, d.children, d.fallback, c), f = b.child, e = a.child.memoizedState, f.memoizedState = null === e ? {
	            baseLanes: c
	        } : {
	            baseLanes: e.baseLanes | c
	        }, f.childLanes = a.childLanes & ~c, b.memoizedState = si, d;
	        c = xi(a, b, d.children, c);
	        b.memoizedState = null;
	        return c;
	    }
	    if (f) return d = wi(a, b, d.children, d.fallback, c), f = b.child, e = a.child.memoizedState, f.memoizedState = null === e ? {
	        baseLanes: c
	    } : {
	        baseLanes: e.baseLanes | c
	    }, f.childLanes = a.childLanes & ~c, b.memoizedState = si, d;
	    c = xi(a, b, d.children, c);
	    b.memoizedState = null;
	    return c;
	}
	function ui(a, b, c, d) {
	    var e = a.mode, f = a.child;
	    b = {
	        mode: "hidden",
	        children: b
	    };
	    0 === (e & 2) && null !== f ? (f.childLanes = 0, f.pendingProps = b) : f = vi(b, e, 0, null);
	    c = Xg(c, e, d, null);
	    f.return = a;
	    c.return = a;
	    f.sibling = c;
	    a.child = f;
	    return c;
	}
	function xi(a, b, c, d) {
	    var e = a.child;
	    a = e.sibling;
	    c = Tg(e, {
	        mode: "visible",
	        children: c
	    });
	    0 === (b.mode & 2) && (c.lanes = d);
	    c.return = b;
	    c.sibling = null;
	    null !== a && (a.nextEffect = null, a.flags = 8, b.firstEffect = b.lastEffect = a);
	    return b.child = c;
	}
	function wi(a, b, c, d, e) {
	    var f = b.mode, g = a.child;
	    a = g.sibling;
	    var h = {
	        mode: "hidden",
	        children: c
	    };
	    0 === (f & 2) && b.child !== g ? (c = b.child, c.childLanes = 0, c.pendingProps = h, g = c.lastEffect, null !== g ? (b.firstEffect = c.firstEffect, b.lastEffect = g, g.nextEffect = null) : b.firstEffect = b.lastEffect = null) : c = Tg(g, h);
	    null !== a ? d = Tg(a, d) : (d = Xg(d, f, e, null), d.flags |= 2);
	    d.return = b;
	    c.return = b;
	    c.sibling = d;
	    b.child = c;
	    return d;
	}
	function yi(a, b) {
	    a.lanes |= b;
	    var c = a.alternate;
	    null !== c && (c.lanes |= b);
	    sg(a.return, b);
	}
	function zi(a, b, c, d, e, f) {
	    var g = a.memoizedState;
	    null === g ? a.memoizedState = {
	        isBackwards: b,
	        rendering: null,
	        renderingStartTime: 0,
	        last: d,
	        tail: c,
	        tailMode: e,
	        lastEffect: f
	    } : (g.isBackwards = b, g.rendering = null, g.renderingStartTime = 0, g.last = d, g.tail = c, g.tailMode = e, g.lastEffect = f);
	}
	function Ai(a, b, c) {
	    var d = b.pendingProps, e = d.revealOrder, f = d.tail;
	    fi(a, b, d.children, c);
	    d = P.current;
	    if (0 !== (d & 2)) d = d & 1 | 2, b.flags |= 64;
	    else {
	        if (null !== a && 0 !== (a.flags & 64)) a: for(a = b.child; null !== a;){
	            if (13 === a.tag) null !== a.memoizedState && yi(a, c);
	            else if (19 === a.tag) yi(a, c);
	            else if (null !== a.child) {
	                a.child.return = a;
	                a = a.child;
	                continue;
	            }
	            if (a === b) break a;
	            for(; null === a.sibling;){
	                if (null === a.return || a.return === b) break a;
	                a = a.return;
	            }
	            a.sibling.return = a.return;
	            a = a.sibling;
	        }
	        d &= 1;
	    }
	    I(P, d);
	    if (0 === (b.mode & 2)) b.memoizedState = null;
	    else switch(e){
	        case "forwards":
	            c = b.child;
	            for(e = null; null !== c;)a = c.alternate, null !== a && null === ih(a) && (e = c), c = c.sibling;
	            c = e;
	            null === c ? (e = b.child, b.child = null) : (e = c.sibling, c.sibling = null);
	            zi(b, !1, e, c, f, b.lastEffect);
	            break;
	        case "backwards":
	            c = null;
	            e = b.child;
	            for(b.child = null; null !== e;){
	                a = e.alternate;
	                if (null !== a && null === ih(a)) {
	                    b.child = e;
	                    break;
	                }
	                a = e.sibling;
	                e.sibling = c;
	                c = e;
	                e = a;
	            }
	            zi(b, !0, c, null, f, b.lastEffect);
	            break;
	        case "together":
	            zi(b, !1, null, null, void 0, b.lastEffect);
	            break;
	        default:
	            b.memoizedState = null;
	    }
	    return b.child;
	}
	function hi(a, b, c) {
	    null !== a && (b.dependencies = a.dependencies);
	    Dg |= b.lanes;
	    if (0 !== (c & b.childLanes)) {
	        if (null !== a && b.child !== a.child) throw Error(y(153));
	        if (null !== b.child) {
	            a = b.child;
	            c = Tg(a, a.pendingProps);
	            b.child = c;
	            for(c.return = b; null !== a.sibling;)a = a.sibling, c = c.sibling = Tg(a, a.pendingProps), c.return = b;
	            c.sibling = null;
	        }
	        return b.child;
	    }
	    return null;
	}
	var Bi, Ci, Di, Ei;
	Bi = function(a, b) {
	    for(var c = b.child; null !== c;){
	        if (5 === c.tag || 6 === c.tag) a.appendChild(c.stateNode);
	        else if (4 !== c.tag && null !== c.child) {
	            c.child.return = c;
	            c = c.child;
	            continue;
	        }
	        if (c === b) break;
	        for(; null === c.sibling;){
	            if (null === c.return || c.return === b) return;
	            c = c.return;
	        }
	        c.sibling.return = c.return;
	        c = c.sibling;
	    }
	};
	Ci = function() {};
	Di = function(a, b, c, d) {
	    var e = a.memoizedProps;
	    if (e !== d) {
	        a = b.stateNode;
	        dh(ah.current);
	        var f = null;
	        switch(c){
	            case "input":
	                e = Ya(a, e);
	                d = Ya(a, d);
	                f = [];
	                break;
	            case "option":
	                e = eb(a, e);
	                d = eb(a, d);
	                f = [];
	                break;
	            case "select":
	                e = m({}, e, {
	                    value: void 0
	                });
	                d = m({}, d, {
	                    value: void 0
	                });
	                f = [];
	                break;
	            case "textarea":
	                e = gb(a, e);
	                d = gb(a, d);
	                f = [];
	                break;
	            default:
	                "function" !== typeof e.onClick && "function" === typeof d.onClick && (a.onclick = jf);
	        }
	        vb(c, d);
	        var g;
	        c = null;
	        for(l in e)if (!d.hasOwnProperty(l) && e.hasOwnProperty(l) && null != e[l]) if ("style" === l) {
	            var h = e[l];
	            for(g in h)h.hasOwnProperty(g) && (c || (c = {}), c[g] = "");
	        } else "dangerouslySetInnerHTML" !== l && "children" !== l && "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && "autoFocus" !== l && (ca.hasOwnProperty(l) ? f || (f = []) : (f = f || []).push(l, null));
	        for(l in d){
	            var k = d[l];
	            h = null != e ? e[l] : void 0;
	            if (d.hasOwnProperty(l) && k !== h && (null != k || null != h)) if ("style" === l) if (h) {
	                for(g in h)!h.hasOwnProperty(g) || k && k.hasOwnProperty(g) || (c || (c = {}), c[g] = "");
	                for(g in k)k.hasOwnProperty(g) && h[g] !== k[g] && (c || (c = {}), c[g] = k[g]);
	            } else c || (f || (f = []), f.push(l, c)), c = k;
	            else "dangerouslySetInnerHTML" === l ? (k = k ? k.__html : void 0, h = h ? h.__html : void 0, null != k && h !== k && (f = f || []).push(l, k)) : "children" === l ? "string" !== typeof k && "number" !== typeof k || (f = f || []).push(l, "" + k) : "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && (ca.hasOwnProperty(l) ? (null != k && "onScroll" === l && G("scroll", a), f || h === k || (f = [])) : "object" === typeof k && null !== k && k.$$typeof === Ga ? k.toString() : (f = f || []).push(l, k));
	        }
	        c && (f = f || []).push("style", c);
	        var l = f;
	        if (b.updateQueue = l) b.flags |= 4;
	    }
	};
	Ei = function(a, b, c, d) {
	    c !== d && (b.flags |= 4);
	};
	function Fi(a, b) {
	    if (!lh) switch(a.tailMode){
	        case "hidden":
	            b = a.tail;
	            for(var c = null; null !== b;)null !== b.alternate && (c = b), b = b.sibling;
	            null === c ? a.tail = null : c.sibling = null;
	            break;
	        case "collapsed":
	            c = a.tail;
	            for(var d = null; null !== c;)null !== c.alternate && (d = c), c = c.sibling;
	            null === d ? b || null === a.tail ? a.tail = null : a.tail.sibling = null : d.sibling = null;
	    }
	}
	function Gi(a, b, c) {
	    var d = b.pendingProps;
	    switch(b.tag){
	        case 2:
	        case 16:
	        case 15:
	        case 0:
	        case 11:
	        case 7:
	        case 8:
	        case 12:
	        case 9:
	        case 14:
	            return null;
	        case 1:
	            return Ff(b.type) && Gf(), null;
	        case 3:
	            fh();
	            H(N);
	            H(M);
	            uh();
	            d = b.stateNode;
	            d.pendingContext && (d.context = d.pendingContext, d.pendingContext = null);
	            if (null === a || null === a.child) rh(b) ? b.flags |= 4 : d.hydrate || (b.flags |= 256);
	            Ci(b);
	            return null;
	        case 5:
	            hh(b);
	            var e = dh(ch.current);
	            c = b.type;
	            if (null !== a && null != b.stateNode) Di(a, b, c, d, e), a.ref !== b.ref && (b.flags |= 128);
	            else {
	                if (!d) {
	                    if (null === b.stateNode) throw Error(y(166));
	                    return null;
	                }
	                a = dh(ah.current);
	                if (rh(b)) {
	                    d = b.stateNode;
	                    c = b.type;
	                    var f = b.memoizedProps;
	                    d[wf] = b;
	                    d[xf] = f;
	                    switch(c){
	                        case "dialog":
	                            G("cancel", d);
	                            G("close", d);
	                            break;
	                        case "iframe":
	                        case "object":
	                        case "embed":
	                            G("load", d);
	                            break;
	                        case "video":
	                        case "audio":
	                            for(a = 0; a < Xe.length; a++)G(Xe[a], d);
	                            break;
	                        case "source":
	                            G("error", d);
	                            break;
	                        case "img":
	                        case "image":
	                        case "link":
	                            G("error", d);
	                            G("load", d);
	                            break;
	                        case "details":
	                            G("toggle", d);
	                            break;
	                        case "input":
	                            Za(d, f);
	                            G("invalid", d);
	                            break;
	                        case "select":
	                            d._wrapperState = {
	                                wasMultiple: !!f.multiple
	                            };
	                            G("invalid", d);
	                            break;
	                        case "textarea":
	                            hb(d, f), G("invalid", d);
	                    }
	                    vb(c, f);
	                    a = null;
	                    for(var g in f)f.hasOwnProperty(g) && (e = f[g], "children" === g ? "string" === typeof e ? d.textContent !== e && (a = [
	                        "children",
	                        e
	                    ]) : "number" === typeof e && d.textContent !== "" + e && (a = [
	                        "children",
	                        "" + e
	                    ]) : ca.hasOwnProperty(g) && null != e && "onScroll" === g && G("scroll", d));
	                    switch(c){
	                        case "input":
	                            Va(d);
	                            cb(d, f, !0);
	                            break;
	                        case "textarea":
	                            Va(d);
	                            jb(d);
	                            break;
	                        case "select":
	                        case "option":
	                            break;
	                        default:
	                            "function" === typeof f.onClick && (d.onclick = jf);
	                    }
	                    d = a;
	                    b.updateQueue = d;
	                    null !== d && (b.flags |= 4);
	                } else {
	                    g = 9 === e.nodeType ? e : e.ownerDocument;
	                    a === kb.html && (a = lb(c));
	                    a === kb.html ? "script" === c ? (a = g.createElement("div"), a.innerHTML = "<script>\x3c/script>", a = a.removeChild(a.firstChild)) : "string" === typeof d.is ? a = g.createElement(c, {
	                        is: d.is
	                    }) : (a = g.createElement(c), "select" === c && (g = a, d.multiple ? g.multiple = !0 : d.size && (g.size = d.size))) : a = g.createElementNS(a, c);
	                    a[wf] = b;
	                    a[xf] = d;
	                    Bi(a, b, !1, !1);
	                    b.stateNode = a;
	                    g = wb(c, d);
	                    switch(c){
	                        case "dialog":
	                            G("cancel", a);
	                            G("close", a);
	                            e = d;
	                            break;
	                        case "iframe":
	                        case "object":
	                        case "embed":
	                            G("load", a);
	                            e = d;
	                            break;
	                        case "video":
	                        case "audio":
	                            for(e = 0; e < Xe.length; e++)G(Xe[e], a);
	                            e = d;
	                            break;
	                        case "source":
	                            G("error", a);
	                            e = d;
	                            break;
	                        case "img":
	                        case "image":
	                        case "link":
	                            G("error", a);
	                            G("load", a);
	                            e = d;
	                            break;
	                        case "details":
	                            G("toggle", a);
	                            e = d;
	                            break;
	                        case "input":
	                            Za(a, d);
	                            e = Ya(a, d);
	                            G("invalid", a);
	                            break;
	                        case "option":
	                            e = eb(a, d);
	                            break;
	                        case "select":
	                            a._wrapperState = {
	                                wasMultiple: !!d.multiple
	                            };
	                            e = m({}, d, {
	                                value: void 0
	                            });
	                            G("invalid", a);
	                            break;
	                        case "textarea":
	                            hb(a, d);
	                            e = gb(a, d);
	                            G("invalid", a);
	                            break;
	                        default:
	                            e = d;
	                    }
	                    vb(c, e);
	                    var h = e;
	                    for(f in h)if (h.hasOwnProperty(f)) {
	                        var k = h[f];
	                        "style" === f ? tb(a, k) : "dangerouslySetInnerHTML" === f ? (k = k ? k.__html : void 0, null != k && ob(a, k)) : "children" === f ? "string" === typeof k ? ("textarea" !== c || "" !== k) && pb(a, k) : "number" === typeof k && pb(a, "" + k) : "suppressContentEditableWarning" !== f && "suppressHydrationWarning" !== f && "autoFocus" !== f && (ca.hasOwnProperty(f) ? null != k && "onScroll" === f && G("scroll", a) : null != k && qa(a, f, k, g));
	                    }
	                    switch(c){
	                        case "input":
	                            Va(a);
	                            cb(a, d, !1);
	                            break;
	                        case "textarea":
	                            Va(a);
	                            jb(a);
	                            break;
	                        case "option":
	                            null != d.value && a.setAttribute("value", "" + Sa(d.value));
	                            break;
	                        case "select":
	                            a.multiple = !!d.multiple;
	                            f = d.value;
	                            null != f ? fb(a, !!d.multiple, f, !1) : null != d.defaultValue && fb(a, !!d.multiple, d.defaultValue, !0);
	                            break;
	                        default:
	                            "function" === typeof e.onClick && (a.onclick = jf);
	                    }
	                    mf(c, d) && (b.flags |= 4);
	                }
	                null !== b.ref && (b.flags |= 128);
	            }
	            return null;
	        case 6:
	            if (a && null != b.stateNode) Ei(a, b, a.memoizedProps, d);
	            else {
	                if ("string" !== typeof d && null === b.stateNode) throw Error(y(166));
	                c = dh(ch.current);
	                dh(ah.current);
	                rh(b) ? (d = b.stateNode, c = b.memoizedProps, d[wf] = b, d.nodeValue !== c && (b.flags |= 4)) : (d = (9 === c.nodeType ? c : c.ownerDocument).createTextNode(d), d[wf] = b, b.stateNode = d);
	            }
	            return null;
	        case 13:
	            H(P);
	            d = b.memoizedState;
	            if (0 !== (b.flags & 64)) return b.lanes = c, b;
	            d = null !== d;
	            c = !1;
	            null === a ? void 0 !== b.memoizedProps.fallback && rh(b) : c = null !== a.memoizedState;
	            if (d && !c && 0 !== (b.mode & 2)) if (null === a && !0 !== b.memoizedProps.unstable_avoidThisFallback || 0 !== (P.current & 1)) 0 === V && (V = 3);
	            else {
	                if (0 === V || 3 === V) V = 4;
	                null === U || 0 === (Dg & 134217727) && 0 === (Hi & 134217727) || Ii(U, W);
	            }
	            if (d || c) b.flags |= 4;
	            return null;
	        case 4:
	            return fh(), Ci(b), null === a && cf(b.stateNode.containerInfo), null;
	        case 10:
	            return rg(b), null;
	        case 17:
	            return Ff(b.type) && Gf(), null;
	        case 19:
	            H(P);
	            d = b.memoizedState;
	            if (null === d) return null;
	            f = 0 !== (b.flags & 64);
	            g = d.rendering;
	            if (null === g) if (f) Fi(d, !1);
	            else {
	                if (0 !== V || null !== a && 0 !== (a.flags & 64)) for(a = b.child; null !== a;){
	                    g = ih(a);
	                    if (null !== g) {
	                        b.flags |= 64;
	                        Fi(d, !1);
	                        f = g.updateQueue;
	                        null !== f && (b.updateQueue = f, b.flags |= 4);
	                        null === d.lastEffect && (b.firstEffect = null);
	                        b.lastEffect = d.lastEffect;
	                        d = c;
	                        for(c = b.child; null !== c;)f = c, a = d, f.flags &= 2, f.nextEffect = null, f.firstEffect = null, f.lastEffect = null, g = f.alternate, null === g ? (f.childLanes = 0, f.lanes = a, f.child = null, f.memoizedProps = null, f.memoizedState = null, f.updateQueue = null, f.dependencies = null, f.stateNode = null) : (f.childLanes = g.childLanes, f.lanes = g.lanes, f.child = g.child, f.memoizedProps = g.memoizedProps, f.memoizedState = g.memoizedState, f.updateQueue = g.updateQueue, f.type = g.type, a = g.dependencies, f.dependencies = null === a ? null : {
	                            lanes: a.lanes,
	                            firstContext: a.firstContext
	                        }), c = c.sibling;
	                        I(P, P.current & 1 | 2);
	                        return b.child;
	                    }
	                    a = a.sibling;
	                }
	                null !== d.tail && O() > Ji && (b.flags |= 64, f = !0, Fi(d, !1), b.lanes = 33554432);
	            }
	            else {
	                if (!f) if (a = ih(g), null !== a) {
	                    if (b.flags |= 64, f = !0, c = a.updateQueue, null !== c && (b.updateQueue = c, b.flags |= 4), Fi(d, !0), null === d.tail && "hidden" === d.tailMode && !g.alternate && !lh) return b = b.lastEffect = d.lastEffect, null !== b && (b.nextEffect = null), null;
	                } else 2 * O() - d.renderingStartTime > Ji && 1073741824 !== c && (b.flags |= 64, f = !0, Fi(d, !1), b.lanes = 33554432);
	                d.isBackwards ? (g.sibling = b.child, b.child = g) : (c = d.last, null !== c ? c.sibling = g : b.child = g, d.last = g);
	            }
	            return null !== d.tail ? (c = d.tail, d.rendering = c, d.tail = c.sibling, d.lastEffect = b.lastEffect, d.renderingStartTime = O(), c.sibling = null, b = P.current, I(P, f ? b & 1 | 2 : b & 1), c) : null;
	        case 23:
	        case 24:
	            return Ki(), null !== a && null !== a.memoizedState !== (null !== b.memoizedState) && "unstable-defer-without-hiding" !== d.mode && (b.flags |= 4), null;
	    }
	    throw Error(y(156, b.tag));
	}
	function Li(a) {
	    switch(a.tag){
	        case 1:
	            Ff(a.type) && Gf();
	            var b = a.flags;
	            return b & 4096 ? (a.flags = b & -4097 | 64, a) : null;
	        case 3:
	            fh();
	            H(N);
	            H(M);
	            uh();
	            b = a.flags;
	            if (0 !== (b & 64)) throw Error(y(285));
	            a.flags = b & -4097 | 64;
	            return a;
	        case 5:
	            return hh(a), null;
	        case 13:
	            return H(P), b = a.flags, b & 4096 ? (a.flags = b & -4097 | 64, a) : null;
	        case 19:
	            return H(P), null;
	        case 4:
	            return fh(), null;
	        case 10:
	            return rg(a), null;
	        case 23:
	        case 24:
	            return Ki(), null;
	        default:
	            return null;
	    }
	}
	function Mi(a, b) {
	    try {
	        var c = "", d = b;
	        do c += Qa(d), d = d.return;
	        while (d)
	        var e = c;
	    } catch (f) {
	        e = "\nError generating stack: " + f.message + "\n" + f.stack;
	    }
	    return {
	        value: a,
	        source: b,
	        stack: e
	    };
	}
	function Ni(a, b) {
	    try {
	        console.error(b.value);
	    } catch (c) {
	        setTimeout(function() {
	            throw c;
	        });
	    }
	}
	var Oi = "function" === typeof WeakMap ? WeakMap : Map;
	function Pi(a, b, c) {
	    c = zg(-1, c);
	    c.tag = 3;
	    c.payload = {
	        element: null
	    };
	    var d = b.value;
	    c.callback = function() {
	        Qi || (Qi = !0, Ri = d);
	        Ni(a, b);
	    };
	    return c;
	}
	function Si(a, b, c) {
	    c = zg(-1, c);
	    c.tag = 3;
	    var d = a.type.getDerivedStateFromError;
	    if ("function" === typeof d) {
	        var e = b.value;
	        c.payload = function() {
	            Ni(a, b);
	            return d(e);
	        };
	    }
	    var f = a.stateNode;
	    null !== f && "function" === typeof f.componentDidCatch && (c.callback = function() {
	        "function" !== typeof d && (null === Ti ? Ti = new Set([
	            this
	        ]) : Ti.add(this), Ni(a, b));
	        var c = b.stack;
	        this.componentDidCatch(b.value, {
	            componentStack: null !== c ? c : ""
	        });
	    });
	    return c;
	}
	var Ui = "function" === typeof WeakSet ? WeakSet : Set;
	function Vi(a) {
	    var b = a.ref;
	    if (null !== b) if ("function" === typeof b) try {
	        b(null);
	    } catch (c) {
	        Wi(a, c);
	    }
	    else b.current = null;
	}
	function Xi(a, b) {
	    switch(b.tag){
	        case 0:
	        case 11:
	        case 15:
	        case 22:
	            return;
	        case 1:
	            if (b.flags & 256 && null !== a) {
	                var c = a.memoizedProps, d = a.memoizedState;
	                a = b.stateNode;
	                b = a.getSnapshotBeforeUpdate(b.elementType === b.type ? c : lg(b.type, c), d);
	                a.__reactInternalSnapshotBeforeUpdate = b;
	            }
	            return;
	        case 3:
	            b.flags & 256 && qf(b.stateNode.containerInfo);
	            return;
	        case 5:
	        case 6:
	        case 4:
	        case 17:
	            return;
	    }
	    throw Error(y(163));
	}
	function Yi(a, b, c) {
	    switch(c.tag){
	        case 0:
	        case 11:
	        case 15:
	        case 22:
	            b = c.updateQueue;
	            b = null !== b ? b.lastEffect : null;
	            if (null !== b) {
	                a = b = b.next;
	                do {
	                    if (3 === (a.tag & 3)) {
	                        var d = a.create;
	                        a.destroy = d();
	                    }
	                    a = a.next;
	                }while (a !== b)
	            }
	            b = c.updateQueue;
	            b = null !== b ? b.lastEffect : null;
	            if (null !== b) {
	                a = b = b.next;
	                do {
	                    var e = a;
	                    d = e.next;
	                    e = e.tag;
	                    0 !== (e & 4) && 0 !== (e & 1) && (Zi(c, a), $i(c, a));
	                    a = d;
	                }while (a !== b)
	            }
	            return;
	        case 1:
	            a = c.stateNode;
	            c.flags & 4 && (null === b ? a.componentDidMount() : (d = c.elementType === c.type ? b.memoizedProps : lg(c.type, b.memoizedProps), a.componentDidUpdate(d, b.memoizedState, a.__reactInternalSnapshotBeforeUpdate)));
	            b = c.updateQueue;
	            null !== b && Eg(c, b, a);
	            return;
	        case 3:
	            b = c.updateQueue;
	            if (null !== b) {
	                a = null;
	                if (null !== c.child) switch(c.child.tag){
	                    case 5:
	                        a = c.child.stateNode;
	                        break;
	                    case 1:
	                        a = c.child.stateNode;
	                }
	                Eg(c, b, a);
	            }
	            return;
	        case 5:
	            a = c.stateNode;
	            null === b && c.flags & 4 && mf(c.type, c.memoizedProps) && a.focus();
	            return;
	        case 6:
	            return;
	        case 4:
	            return;
	        case 12:
	            return;
	        case 13:
	            null === c.memoizedState && (c = c.alternate, null !== c && (c = c.memoizedState, null !== c && (c = c.dehydrated, null !== c && Cc(c))));
	            return;
	        case 19:
	        case 17:
	        case 20:
	        case 21:
	        case 23:
	        case 24:
	            return;
	    }
	    throw Error(y(163));
	}
	function aj(a, b) {
	    for(var c = a;;){
	        if (5 === c.tag) {
	            var d = c.stateNode;
	            if (b) d = d.style, "function" === typeof d.setProperty ? d.setProperty("display", "none", "important") : d.display = "none";
	            else {
	                d = c.stateNode;
	                var e = c.memoizedProps.style;
	                e = void 0 !== e && null !== e && e.hasOwnProperty("display") ? e.display : null;
	                d.style.display = sb("display", e);
	            }
	        } else if (6 === c.tag) c.stateNode.nodeValue = b ? "" : c.memoizedProps;
	        else if ((23 !== c.tag && 24 !== c.tag || null === c.memoizedState || c === a) && null !== c.child) {
	            c.child.return = c;
	            c = c.child;
	            continue;
	        }
	        if (c === a) break;
	        for(; null === c.sibling;){
	            if (null === c.return || c.return === a) return;
	            c = c.return;
	        }
	        c.sibling.return = c.return;
	        c = c.sibling;
	    }
	}
	function bj(a, b) {
	    if (Mf && "function" === typeof Mf.onCommitFiberUnmount) try {
	        Mf.onCommitFiberUnmount(Lf, b);
	    } catch (f) {}
	    switch(b.tag){
	        case 0:
	        case 11:
	        case 14:
	        case 15:
	        case 22:
	            a = b.updateQueue;
	            if (null !== a && (a = a.lastEffect, null !== a)) {
	                var c = a = a.next;
	                do {
	                    var d = c, e = d.destroy;
	                    d = d.tag;
	                    if (void 0 !== e) if (0 !== (d & 4)) Zi(b, c);
	                    else {
	                        d = b;
	                        try {
	                            e();
	                        } catch (f) {
	                            Wi(d, f);
	                        }
	                    }
	                    c = c.next;
	                }while (c !== a)
	            }
	            break;
	        case 1:
	            Vi(b);
	            a = b.stateNode;
	            if ("function" === typeof a.componentWillUnmount) try {
	                a.props = b.memoizedProps, a.state = b.memoizedState, a.componentWillUnmount();
	            } catch (f) {
	                Wi(b, f);
	            }
	            break;
	        case 5:
	            Vi(b);
	            break;
	        case 4:
	            cj(a, b);
	    }
	}
	function dj(a) {
	    a.alternate = null;
	    a.child = null;
	    a.dependencies = null;
	    a.firstEffect = null;
	    a.lastEffect = null;
	    a.memoizedProps = null;
	    a.memoizedState = null;
	    a.pendingProps = null;
	    a.return = null;
	    a.updateQueue = null;
	}
	function ej(a) {
	    return 5 === a.tag || 3 === a.tag || 4 === a.tag;
	}
	function fj(a) {
	    a: {
	        for(var b = a.return; null !== b;){
	            if (ej(b)) break a;
	            b = b.return;
	        }
	        throw Error(y(160));
	    }
	    var c = b;
	    b = c.stateNode;
	    switch(c.tag){
	        case 5:
	            var d = !1;
	            break;
	        case 3:
	            b = b.containerInfo;
	            d = !0;
	            break;
	        case 4:
	            b = b.containerInfo;
	            d = !0;
	            break;
	        default:
	            throw Error(y(161));
	    }
	    c.flags & 16 && (pb(b, ""), c.flags &= -17);
	    a: b: for(c = a;;){
	        for(; null === c.sibling;){
	            if (null === c.return || ej(c.return)) {
	                c = null;
	                break a;
	            }
	            c = c.return;
	        }
	        c.sibling.return = c.return;
	        for(c = c.sibling; 5 !== c.tag && 6 !== c.tag && 18 !== c.tag;){
	            if (c.flags & 2) continue b;
	            if (null === c.child || 4 === c.tag) continue b;
	            else c.child.return = c, c = c.child;
	        }
	        if (!(c.flags & 2)) {
	            c = c.stateNode;
	            break a;
	        }
	    }
	    d ? gj(a, c, b) : hj(a, c, b);
	}
	function gj(a, b, c) {
	    var d = a.tag, e = 5 === d || 6 === d;
	    if (e) a = e ? a.stateNode : a.stateNode.instance, b ? 8 === c.nodeType ? c.parentNode.insertBefore(a, b) : c.insertBefore(a, b) : (8 === c.nodeType ? (b = c.parentNode, b.insertBefore(a, c)) : (b = c, b.appendChild(a)), c = c._reactRootContainer, null !== c && void 0 !== c || null !== b.onclick || (b.onclick = jf));
	    else if (4 !== d && (a = a.child, null !== a)) for(gj(a, b, c), a = a.sibling; null !== a;)gj(a, b, c), a = a.sibling;
	}
	function hj(a, b, c) {
	    var d = a.tag, e = 5 === d || 6 === d;
	    if (e) a = e ? a.stateNode : a.stateNode.instance, b ? c.insertBefore(a, b) : c.appendChild(a);
	    else if (4 !== d && (a = a.child, null !== a)) for(hj(a, b, c), a = a.sibling; null !== a;)hj(a, b, c), a = a.sibling;
	}
	function cj(a, b) {
	    for(var c = b, d = !1, e, f;;){
	        if (!d) {
	            d = c.return;
	            a: for(;;){
	                if (null === d) throw Error(y(160));
	                e = d.stateNode;
	                switch(d.tag){
	                    case 5:
	                        f = !1;
	                        break a;
	                    case 3:
	                        e = e.containerInfo;
	                        f = !0;
	                        break a;
	                    case 4:
	                        e = e.containerInfo;
	                        f = !0;
	                        break a;
	                }
	                d = d.return;
	            }
	            d = !0;
	        }
	        if (5 === c.tag || 6 === c.tag) {
	            a: for(var g = a, h = c, k = h;;)if (bj(g, k), null !== k.child && 4 !== k.tag) k.child.return = k, k = k.child;
	            else {
	                if (k === h) break a;
	                for(; null === k.sibling;){
	                    if (null === k.return || k.return === h) break a;
	                    k = k.return;
	                }
	                k.sibling.return = k.return;
	                k = k.sibling;
	            }
	            f ? (g = e, h = c.stateNode, 8 === g.nodeType ? g.parentNode.removeChild(h) : g.removeChild(h)) : e.removeChild(c.stateNode);
	        } else if (4 === c.tag) {
	            if (null !== c.child) {
	                e = c.stateNode.containerInfo;
	                f = !0;
	                c.child.return = c;
	                c = c.child;
	                continue;
	            }
	        } else if (bj(a, c), null !== c.child) {
	            c.child.return = c;
	            c = c.child;
	            continue;
	        }
	        if (c === b) break;
	        for(; null === c.sibling;){
	            if (null === c.return || c.return === b) return;
	            c = c.return;
	            4 === c.tag && (d = !1);
	        }
	        c.sibling.return = c.return;
	        c = c.sibling;
	    }
	}
	function ij(a, b) {
	    switch(b.tag){
	        case 0:
	        case 11:
	        case 14:
	        case 15:
	        case 22:
	            var c = b.updateQueue;
	            c = null !== c ? c.lastEffect : null;
	            if (null !== c) {
	                var d = c = c.next;
	                do 3 === (d.tag & 3) && (a = d.destroy, d.destroy = void 0, void 0 !== a && a()), d = d.next;
	                while (d !== c)
	            }
	            return;
	        case 1:
	            return;
	        case 5:
	            c = b.stateNode;
	            if (null != c) {
	                d = b.memoizedProps;
	                var e = null !== a ? a.memoizedProps : d;
	                a = b.type;
	                var f = b.updateQueue;
	                b.updateQueue = null;
	                if (null !== f) {
	                    c[xf] = d;
	                    "input" === a && "radio" === d.type && null != d.name && $a(c, d);
	                    wb(a, e);
	                    b = wb(a, d);
	                    for(e = 0; e < f.length; e += 2){
	                        var g = f[e], h = f[e + 1];
	                        "style" === g ? tb(c, h) : "dangerouslySetInnerHTML" === g ? ob(c, h) : "children" === g ? pb(c, h) : qa(c, g, h, b);
	                    }
	                    switch(a){
	                        case "input":
	                            ab(c, d);
	                            break;
	                        case "textarea":
	                            ib(c, d);
	                            break;
	                        case "select":
	                            a = c._wrapperState.wasMultiple, c._wrapperState.wasMultiple = !!d.multiple, f = d.value, null != f ? fb(c, !!d.multiple, f, !1) : a !== !!d.multiple && (null != d.defaultValue ? fb(c, !!d.multiple, d.defaultValue, !0) : fb(c, !!d.multiple, d.multiple ? [] : "", !1));
	                    }
	                }
	            }
	            return;
	        case 6:
	            if (null === b.stateNode) throw Error(y(162));
	            b.stateNode.nodeValue = b.memoizedProps;
	            return;
	        case 3:
	            c = b.stateNode;
	            c.hydrate && (c.hydrate = !1, Cc(c.containerInfo));
	            return;
	        case 12:
	            return;
	        case 13:
	            null !== b.memoizedState && (jj = O(), aj(b.child, !0));
	            kj(b);
	            return;
	        case 19:
	            kj(b);
	            return;
	        case 17:
	            return;
	        case 23:
	        case 24:
	            aj(b, null !== b.memoizedState);
	            return;
	    }
	    throw Error(y(163));
	}
	function kj(a) {
	    var b = a.updateQueue;
	    if (null !== b) {
	        a.updateQueue = null;
	        var c = a.stateNode;
	        null === c && (c = a.stateNode = new Ui);
	        b.forEach(function(b) {
	            var d = lj.bind(null, a, b);
	            c.has(b) || (c.add(b), b.then(d, d));
	        });
	    }
	}
	function mj(a, b) {
	    return null !== a && (a = a.memoizedState, null === a || null !== a.dehydrated) ? (b = b.memoizedState, null !== b && null === b.dehydrated) : !1;
	}
	var nj = Math.ceil, oj = ra.ReactCurrentDispatcher, pj = ra.ReactCurrentOwner, X = 0, U = null, Y = null, W = 0, qj = 0, rj = Bf(0), V = 0, sj = null, tj = 0, Dg = 0, Hi = 0, uj = 0, vj = null, jj = 0, Ji = Infinity;
	function wj() {
	    Ji = O() + 500;
	}
	var Z = null, Qi = !1, Ri = null, Ti = null, xj = !1, yj = null, zj = 90, Aj = [], Bj = [], Cj = null, Dj = 0, Ej = null, Fj = -1, Gj = 0, Hj = 0, Ij = null, Jj = !1;
	function Hg() {
	    return 0 !== (X & 48) ? O() : -1 !== Fj ? Fj : Fj = O();
	}
	function Ig(a) {
	    a = a.mode;
	    if (0 === (a & 2)) return 1;
	    if (0 === (a & 4)) return 99 === eg() ? 1 : 2;
	    0 === Gj && (Gj = tj);
	    if (0 !== kg.transition) {
	        0 !== Hj && (Hj = null !== vj ? vj.pendingLanes : 0);
	        a = Gj;
	        var b = 4186112 & ~Hj;
	        b &= -b;
	        0 === b && (a = 4186112 & ~a, b = a & -a, 0 === b && (b = 8192));
	        return b;
	    }
	    a = eg();
	    0 !== (X & 4) && 98 === a ? a = Xc(12, Gj) : (a = Sc(a), a = Xc(a, Gj));
	    return a;
	}
	function Jg(a, b, c) {
	    if (50 < Dj) throw Dj = 0, Ej = null, Error(y(185));
	    a = Kj(a, b);
	    if (null === a) return null;
	    $c(a, b, c);
	    a === U && (Hi |= b, 4 === V && Ii(a, W));
	    var d = eg();
	    1 === b ? 0 !== (X & 8) && 0 === (X & 48) ? Lj(a) : (Mj(a, c), 0 === X && (wj(), ig())) : (0 === (X & 4) || 98 !== d && 99 !== d || (null === Cj ? Cj = new Set([
	        a
	    ]) : Cj.add(a)), Mj(a, c));
	    vj = a;
	}
	function Kj(a, b) {
	    a.lanes |= b;
	    var c = a.alternate;
	    null !== c && (c.lanes |= b);
	    c = a;
	    for(a = a.return; null !== a;)a.childLanes |= b, c = a.alternate, null !== c && (c.childLanes |= b), c = a, a = a.return;
	    return 3 === c.tag ? c.stateNode : null;
	}
	function Mj(a, b) {
	    for(var c = a.callbackNode, d = a.suspendedLanes, e = a.pingedLanes, f = a.expirationTimes, g = a.pendingLanes; 0 < g;){
	        var h = 31 - Vc(g), k = 1 << h, l = f[h];
	        if (-1 === l) {
	            if (0 === (k & d) || 0 !== (k & e)) {
	                l = b;
	                Rc(k);
	                var n = F;
	                f[h] = 10 <= n ? l + 250 : 6 <= n ? l + 5E3 : -1;
	            }
	        } else l <= b && (a.expiredLanes |= k);
	        g &= ~k;
	    }
	    d = Uc(a, a === U ? W : 0);
	    b = F;
	    if (0 === d) null !== c && (c !== Zf && Pf(c), a.callbackNode = null, a.callbackPriority = 0);
	    else {
	        if (null !== c) {
	            if (a.callbackPriority === b) return;
	            c !== Zf && Pf(c);
	        }
	        15 === b ? (c = Lj.bind(null, a), null === ag ? (ag = [
	            c
	        ], bg = Of(Uf, jg)) : ag.push(c), c = Zf) : 14 === b ? c = hg(99, Lj.bind(null, a)) : (c = Tc(b), c = hg(c, Nj.bind(null, a)));
	        a.callbackPriority = b;
	        a.callbackNode = c;
	    }
	}
	function Nj(a) {
	    Fj = -1;
	    Hj = Gj = 0;
	    if (0 !== (X & 48)) throw Error(y(327));
	    var b = a.callbackNode;
	    if (Oj() && a.callbackNode !== b) return null;
	    var c = Uc(a, a === U ? W : 0);
	    if (0 === c) return null;
	    var d = c;
	    var e = X;
	    X |= 16;
	    var f = Pj();
	    if (U !== a || W !== d) wj(), Qj(a, d);
	    do try {
	        Rj();
	        break;
	    } catch (h) {
	        Sj(a, h);
	    }
	    while (1)
	    qg();
	    oj.current = f;
	    X = e;
	    null !== Y ? d = 0 : (U = null, W = 0, d = V);
	    if (0 !== (tj & Hi)) Qj(a, 0);
	    else if (0 !== d) {
	        2 === d && (X |= 64, a.hydrate && (a.hydrate = !1, qf(a.containerInfo)), c = Wc(a), 0 !== c && (d = Tj(a, c)));
	        if (1 === d) throw b = sj, Qj(a, 0), Ii(a, c), Mj(a, O()), b;
	        a.finishedWork = a.current.alternate;
	        a.finishedLanes = c;
	        switch(d){
	            case 0:
	            case 1:
	                throw Error(y(345));
	            case 2:
	                Uj(a);
	                break;
	            case 3:
	                Ii(a, c);
	                if ((c & 62914560) === c && (d = jj + 500 - O(), 10 < d)) {
	                    if (0 !== Uc(a, 0)) break;
	                    e = a.suspendedLanes;
	                    if ((e & c) !== c) {
	                        Hg();
	                        a.pingedLanes |= a.suspendedLanes & e;
	                        break;
	                    }
	                    a.timeoutHandle = of(Uj.bind(null, a), d);
	                    break;
	                }
	                Uj(a);
	                break;
	            case 4:
	                Ii(a, c);
	                if ((c & 4186112) === c) break;
	                d = a.eventTimes;
	                for(e = -1; 0 < c;){
	                    var g = 31 - Vc(c);
	                    f = 1 << g;
	                    g = d[g];
	                    g > e && (e = g);
	                    c &= ~f;
	                }
	                c = e;
	                c = O() - c;
	                c = (120 > c ? 120 : 480 > c ? 480 : 1080 > c ? 1080 : 1920 > c ? 1920 : 3E3 > c ? 3E3 : 4320 > c ? 4320 : 1960 * nj(c / 1960)) - c;
	                if (10 < c) {
	                    a.timeoutHandle = of(Uj.bind(null, a), c);
	                    break;
	                }
	                Uj(a);
	                break;
	            case 5:
	                Uj(a);
	                break;
	            default:
	                throw Error(y(329));
	        }
	    }
	    Mj(a, O());
	    return a.callbackNode === b ? Nj.bind(null, a) : null;
	}
	function Ii(a, b) {
	    b &= ~uj;
	    b &= ~Hi;
	    a.suspendedLanes |= b;
	    a.pingedLanes &= ~b;
	    for(a = a.expirationTimes; 0 < b;){
	        var c = 31 - Vc(b), d = 1 << c;
	        a[c] = -1;
	        b &= ~d;
	    }
	}
	function Lj(a) {
	    if (0 !== (X & 48)) throw Error(y(327));
	    Oj();
	    if (a === U && 0 !== (a.expiredLanes & W)) {
	        var b = W;
	        var c = Tj(a, b);
	        0 !== (tj & Hi) && (b = Uc(a, b), c = Tj(a, b));
	    } else b = Uc(a, 0), c = Tj(a, b);
	    0 !== a.tag && 2 === c && (X |= 64, a.hydrate && (a.hydrate = !1, qf(a.containerInfo)), b = Wc(a), 0 !== b && (c = Tj(a, b)));
	    if (1 === c) throw c = sj, Qj(a, 0), Ii(a, b), Mj(a, O()), c;
	    a.finishedWork = a.current.alternate;
	    a.finishedLanes = b;
	    Uj(a);
	    Mj(a, O());
	    return null;
	}
	function Vj() {
	    if (null !== Cj) {
	        var a = Cj;
	        Cj = null;
	        a.forEach(function(a) {
	            a.expiredLanes |= 24 & a.pendingLanes;
	            Mj(a, O());
	        });
	    }
	    ig();
	}
	function Wj(a, b) {
	    var c = X;
	    X |= 1;
	    try {
	        return a(b);
	    } finally{
	        X = c, 0 === X && (wj(), ig());
	    }
	}
	function Xj(a, b) {
	    var c = X;
	    X &= -2;
	    X |= 8;
	    try {
	        return a(b);
	    } finally{
	        X = c, 0 === X && (wj(), ig());
	    }
	}
	function ni(a, b) {
	    I(rj, qj);
	    qj |= b;
	    tj |= b;
	}
	function Ki() {
	    qj = rj.current;
	    H(rj);
	}
	function Qj(a, b) {
	    a.finishedWork = null;
	    a.finishedLanes = 0;
	    var c = a.timeoutHandle;
	    -1 !== c && (a.timeoutHandle = -1, pf(c));
	    if (null !== Y) for(c = Y.return; null !== c;){
	        var d = c;
	        switch(d.tag){
	            case 1:
	                d = d.type.childContextTypes;
	                null !== d && void 0 !== d && Gf();
	                break;
	            case 3:
	                fh();
	                H(N);
	                H(M);
	                uh();
	                break;
	            case 5:
	                hh(d);
	                break;
	            case 4:
	                fh();
	                break;
	            case 13:
	                H(P);
	                break;
	            case 19:
	                H(P);
	                break;
	            case 10:
	                rg(d);
	                break;
	            case 23:
	            case 24:
	                Ki();
	        }
	        c = c.return;
	    }
	    U = a;
	    Y = Tg(a.current, null);
	    W = qj = tj = b;
	    V = 0;
	    sj = null;
	    uj = Hi = Dg = 0;
	}
	function Sj(a, b) {
	    do {
	        var c = Y;
	        try {
	            qg();
	            vh.current = Gh;
	            if (yh) {
	                for(var d = R.memoizedState; null !== d;){
	                    var e = d.queue;
	                    null !== e && (e.pending = null);
	                    d = d.next;
	                }
	                yh = !1;
	            }
	            xh = 0;
	            T = S = R = null;
	            zh = !1;
	            pj.current = null;
	            if (null === c || null === c.return) {
	                V = 1;
	                sj = b;
	                Y = null;
	                break;
	            }
	            a: {
	                var f = a, g = c.return, h = c, k = b;
	                b = W;
	                h.flags |= 2048;
	                h.firstEffect = h.lastEffect = null;
	                if (null !== k && "object" === typeof k && "function" === typeof k.then) {
	                    var l = k;
	                    if (0 === (h.mode & 2)) {
	                        var n = h.alternate;
	                        n ? (h.updateQueue = n.updateQueue, h.memoizedState = n.memoizedState, h.lanes = n.lanes) : (h.updateQueue = null, h.memoizedState = null);
	                    }
	                    var A = 0 !== (P.current & 1), p = g;
	                    do {
	                        var C;
	                        if (C = 13 === p.tag) {
	                            var x = p.memoizedState;
	                            if (null !== x) C = null !== x.dehydrated ? !0 : !1;
	                            else {
	                                var w = p.memoizedProps;
	                                C = void 0 === w.fallback ? !1 : !0 !== w.unstable_avoidThisFallback ? !0 : A ? !1 : !0;
	                            }
	                        }
	                        if (C) {
	                            var z = p.updateQueue;
	                            if (null === z) {
	                                var u = new Set;
	                                u.add(l);
	                                p.updateQueue = u;
	                            } else z.add(l);
	                            if (0 === (p.mode & 2)) {
	                                p.flags |= 64;
	                                h.flags |= 16384;
	                                h.flags &= -2981;
	                                if (1 === h.tag) if (null === h.alternate) h.tag = 17;
	                                else {
	                                    var t = zg(-1, 1);
	                                    t.tag = 2;
	                                    Ag(h, t);
	                                }
	                                h.lanes |= 1;
	                                break a;
	                            }
	                            k = void 0;
	                            h = b;
	                            var q = f.pingCache;
	                            null === q ? (q = f.pingCache = new Oi, k = new Set, q.set(l, k)) : (k = q.get(l), void 0 === k && (k = new Set, q.set(l, k)));
	                            if (!k.has(h)) {
	                                k.add(h);
	                                var v = Yj.bind(null, f, l, h);
	                                l.then(v, v);
	                            }
	                            p.flags |= 4096;
	                            p.lanes = b;
	                            break a;
	                        }
	                        p = p.return;
	                    }while (null !== p)
	                    k = Error((Ra(h.type) || "A React component") + " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.");
	                }
	                5 !== V && (V = 2);
	                k = Mi(k, h);
	                p = g;
	                do {
	                    switch(p.tag){
	                        case 3:
	                            f = k;
	                            p.flags |= 4096;
	                            b &= -b;
	                            p.lanes |= b;
	                            var J = Pi(p, f, b);
	                            Bg(p, J);
	                            break a;
	                        case 1:
	                            f = k;
	                            var K = p.type, Q = p.stateNode;
	                            if (0 === (p.flags & 64) && ("function" === typeof K.getDerivedStateFromError || null !== Q && "function" === typeof Q.componentDidCatch && (null === Ti || !Ti.has(Q)))) {
	                                p.flags |= 4096;
	                                b &= -b;
	                                p.lanes |= b;
	                                var L = Si(p, f, b);
	                                Bg(p, L);
	                                break a;
	                            }
	                    }
	                    p = p.return;
	                }while (null !== p)
	            }
	            Zj(c);
	        } catch (va) {
	            b = va;
	            Y === c && null !== c && (Y = c = c.return);
	            continue;
	        }
	        break;
	    }while (1)
	}
	function Pj() {
	    var a = oj.current;
	    oj.current = Gh;
	    return null === a ? Gh : a;
	}
	function Tj(a, b) {
	    var c = X;
	    X |= 16;
	    var d = Pj();
	    U === a && W === b || Qj(a, b);
	    do try {
	        ak();
	        break;
	    } catch (e) {
	        Sj(a, e);
	    }
	    while (1)
	    qg();
	    X = c;
	    oj.current = d;
	    if (null !== Y) throw Error(y(261));
	    U = null;
	    W = 0;
	    return V;
	}
	function ak() {
	    for(; null !== Y;)bk(Y);
	}
	function Rj() {
	    for(; null !== Y && !Qf();)bk(Y);
	}
	function bk(a) {
	    var b = ck(a.alternate, a, qj);
	    a.memoizedProps = a.pendingProps;
	    null === b ? Zj(a) : Y = b;
	    pj.current = null;
	}
	function Zj(a) {
	    var b = a;
	    do {
	        var c = b.alternate;
	        a = b.return;
	        if (0 === (b.flags & 2048)) {
	            c = Gi(c, b, qj);
	            if (null !== c) {
	                Y = c;
	                return;
	            }
	            c = b;
	            if (24 !== c.tag && 23 !== c.tag || null === c.memoizedState || 0 !== (qj & 1073741824) || 0 === (c.mode & 4)) {
	                for(var d = 0, e = c.child; null !== e;)d |= e.lanes | e.childLanes, e = e.sibling;
	                c.childLanes = d;
	            }
	            null !== a && 0 === (a.flags & 2048) && (null === a.firstEffect && (a.firstEffect = b.firstEffect), null !== b.lastEffect && (null !== a.lastEffect && (a.lastEffect.nextEffect = b.firstEffect), a.lastEffect = b.lastEffect), 1 < b.flags && (null !== a.lastEffect ? a.lastEffect.nextEffect = b : a.firstEffect = b, a.lastEffect = b));
	        } else {
	            c = Li(b);
	            if (null !== c) {
	                c.flags &= 2047;
	                Y = c;
	                return;
	            }
	            null !== a && (a.firstEffect = a.lastEffect = null, a.flags |= 2048);
	        }
	        b = b.sibling;
	        if (null !== b) {
	            Y = b;
	            return;
	        }
	        Y = b = a;
	    }while (null !== b)
	    0 === V && (V = 5);
	}
	function Uj(a) {
	    var b = eg();
	    gg(99, dk.bind(null, a, b));
	    return null;
	}
	function dk(a, b) {
	    do Oj();
	    while (null !== yj)
	    if (0 !== (X & 48)) throw Error(y(327));
	    var c = a.finishedWork;
	    if (null === c) return null;
	    a.finishedWork = null;
	    a.finishedLanes = 0;
	    if (c === a.current) throw Error(y(177));
	    a.callbackNode = null;
	    var d = c.lanes | c.childLanes, e = d, f = a.pendingLanes & ~e;
	    a.pendingLanes = e;
	    a.suspendedLanes = 0;
	    a.pingedLanes = 0;
	    a.expiredLanes &= e;
	    a.mutableReadLanes &= e;
	    a.entangledLanes &= e;
	    e = a.entanglements;
	    for(var g = a.eventTimes, h = a.expirationTimes; 0 < f;){
	        var k = 31 - Vc(f), l = 1 << k;
	        e[k] = 0;
	        g[k] = -1;
	        h[k] = -1;
	        f &= ~l;
	    }
	    null !== Cj && 0 === (d & 24) && Cj.has(a) && Cj.delete(a);
	    a === U && (Y = U = null, W = 0);
	    1 < c.flags ? null !== c.lastEffect ? (c.lastEffect.nextEffect = c, d = c.firstEffect) : d = c : d = c.firstEffect;
	    if (null !== d) {
	        e = X;
	        X |= 32;
	        pj.current = null;
	        kf = fd;
	        g = Ne();
	        if (Oe(g)) {
	            if ("selectionStart" in g) h = {
	                start: g.selectionStart,
	                end: g.selectionEnd
	            };
	            else a: if (h = (h = g.ownerDocument) && h.defaultView || window, (l = h.getSelection && h.getSelection()) && 0 !== l.rangeCount) {
	                h = l.anchorNode;
	                f = l.anchorOffset;
	                k = l.focusNode;
	                l = l.focusOffset;
	                try {
	                    h.nodeType, k.nodeType;
	                } catch (va) {
	                    h = null;
	                    break a;
	                }
	                var n = 0, A = -1, p = -1, C = 0, x = 0, w = g, z = null;
	                b: for(;;){
	                    for(var u;;){
	                        w !== h || 0 !== f && 3 !== w.nodeType || (A = n + f);
	                        w !== k || 0 !== l && 3 !== w.nodeType || (p = n + l);
	                        3 === w.nodeType && (n += w.nodeValue.length);
	                        if (null === (u = w.firstChild)) break;
	                        z = w;
	                        w = u;
	                    }
	                    for(;;){
	                        if (w === g) break b;
	                        z === h && ++C === f && (A = n);
	                        z === k && ++x === l && (p = n);
	                        if (null !== (u = w.nextSibling)) break;
	                        w = z;
	                        z = w.parentNode;
	                    }
	                    w = u;
	                }
	                h = -1 === A || -1 === p ? null : {
	                    start: A,
	                    end: p
	                };
	            } else h = null;
	            h = h || {
	                start: 0,
	                end: 0
	            };
	        } else h = null;
	        lf = {
	            focusedElem: g,
	            selectionRange: h
	        };
	        fd = !1;
	        Ij = null;
	        Jj = !1;
	        Z = d;
	        do try {
	            ek();
	        } catch (va) {
	            if (null === Z) throw Error(y(330));
	            Wi(Z, va);
	            Z = Z.nextEffect;
	        }
	        while (null !== Z)
	        Ij = null;
	        Z = d;
	        do try {
	            for(g = a; null !== Z;){
	                var t = Z.flags;
	                t & 16 && pb(Z.stateNode, "");
	                if (t & 128) {
	                    var q = Z.alternate;
	                    if (null !== q) {
	                        var v = q.ref;
	                        null !== v && ("function" === typeof v ? v(null) : v.current = null);
	                    }
	                }
	                switch(t & 1038){
	                    case 2:
	                        fj(Z);
	                        Z.flags &= -3;
	                        break;
	                    case 6:
	                        fj(Z);
	                        Z.flags &= -3;
	                        ij(Z.alternate, Z);
	                        break;
	                    case 1024:
	                        Z.flags &= -1025;
	                        break;
	                    case 1028:
	                        Z.flags &= -1025;
	                        ij(Z.alternate, Z);
	                        break;
	                    case 4:
	                        ij(Z.alternate, Z);
	                        break;
	                    case 8:
	                        h = Z;
	                        cj(g, h);
	                        var J = h.alternate;
	                        dj(h);
	                        null !== J && dj(J);
	                }
	                Z = Z.nextEffect;
	            }
	        } catch (va) {
	            if (null === Z) throw Error(y(330));
	            Wi(Z, va);
	            Z = Z.nextEffect;
	        }
	        while (null !== Z)
	        v = lf;
	        q = Ne();
	        t = v.focusedElem;
	        g = v.selectionRange;
	        if (q !== t && t && t.ownerDocument && Me(t.ownerDocument.documentElement, t)) {
	            null !== g && Oe(t) && (q = g.start, v = g.end, void 0 === v && (v = q), "selectionStart" in t ? (t.selectionStart = q, t.selectionEnd = Math.min(v, t.value.length)) : (v = (q = t.ownerDocument || document) && q.defaultView || window, v.getSelection && (v = v.getSelection(), h = t.textContent.length, J = Math.min(g.start, h), g = void 0 === g.end ? J : Math.min(g.end, h), !v.extend && J > g && (h = g, g = J, J = h), h = Le(t, J), f = Le(t, g), h && f && (1 !== v.rangeCount || v.anchorNode !== h.node || v.anchorOffset !== h.offset || v.focusNode !== f.node || v.focusOffset !== f.offset) && (q = q.createRange(), q.setStart(h.node, h.offset), v.removeAllRanges(), J > g ? (v.addRange(q), v.extend(f.node, f.offset)) : (q.setEnd(f.node, f.offset), v.addRange(q))))));
	            q = [];
	            for(v = t; v = v.parentNode;)1 === v.nodeType && q.push({
	                element: v,
	                left: v.scrollLeft,
	                top: v.scrollTop
	            });
	            "function" === typeof t.focus && t.focus();
	            for(t = 0; t < q.length; t++)v = q[t], v.element.scrollLeft = v.left, v.element.scrollTop = v.top;
	        }
	        fd = !!kf;
	        lf = kf = null;
	        a.current = c;
	        Z = d;
	        do try {
	            for(t = a; null !== Z;){
	                var K = Z.flags;
	                K & 36 && Yi(t, Z.alternate, Z);
	                if (K & 128) {
	                    q = void 0;
	                    var Q = Z.ref;
	                    if (null !== Q) {
	                        var L = Z.stateNode;
	                        switch(Z.tag){
	                            case 5:
	                                q = L;
	                                break;
	                            default:
	                                q = L;
	                        }
	                        "function" === typeof Q ? Q(q) : Q.current = q;
	                    }
	                }
	                Z = Z.nextEffect;
	            }
	        } catch (va) {
	            if (null === Z) throw Error(y(330));
	            Wi(Z, va);
	            Z = Z.nextEffect;
	        }
	        while (null !== Z)
	        Z = null;
	        $f();
	        X = e;
	    } else a.current = c;
	    if (xj) xj = !1, yj = a, zj = b;
	    else for(Z = d; null !== Z;)b = Z.nextEffect, Z.nextEffect = null, Z.flags & 8 && (K = Z, K.sibling = null, K.stateNode = null), Z = b;
	    d = a.pendingLanes;
	    0 === d && (Ti = null);
	    1 === d ? a === Ej ? Dj++ : (Dj = 0, Ej = a) : Dj = 0;
	    c = c.stateNode;
	    if (Mf && "function" === typeof Mf.onCommitFiberRoot) try {
	        Mf.onCommitFiberRoot(Lf, c, void 0, 64 === (c.current.flags & 64));
	    } catch (va) {}
	    Mj(a, O());
	    if (Qi) throw Qi = !1, a = Ri, Ri = null, a;
	    if (0 !== (X & 8)) return null;
	    ig();
	    return null;
	}
	function ek() {
	    for(; null !== Z;){
	        var a = Z.alternate;
	        Jj || null === Ij || (0 !== (Z.flags & 8) ? dc(Z, Ij) && (Jj = !0) : 13 === Z.tag && mj(a, Z) && dc(Z, Ij) && (Jj = !0));
	        var b = Z.flags;
	        0 !== (b & 256) && Xi(a, Z);
	        0 === (b & 512) || xj || (xj = !0, hg(97, function() {
	            Oj();
	            return null;
	        }));
	        Z = Z.nextEffect;
	    }
	}
	function Oj() {
	    if (90 !== zj) {
	        var a = 97 < zj ? 97 : zj;
	        zj = 90;
	        return gg(a, fk);
	    }
	    return !1;
	}
	function $i(a, b) {
	    Aj.push(b, a);
	    xj || (xj = !0, hg(97, function() {
	        Oj();
	        return null;
	    }));
	}
	function Zi(a, b) {
	    Bj.push(b, a);
	    xj || (xj = !0, hg(97, function() {
	        Oj();
	        return null;
	    }));
	}
	function fk() {
	    if (null === yj) return !1;
	    var a = yj;
	    yj = null;
	    if (0 !== (X & 48)) throw Error(y(331));
	    var b = X;
	    X |= 32;
	    var c = Bj;
	    Bj = [];
	    for(var d = 0; d < c.length; d += 2){
	        var e = c[d], f = c[d + 1], g = e.destroy;
	        e.destroy = void 0;
	        if ("function" === typeof g) try {
	            g();
	        } catch (k) {
	            if (null === f) throw Error(y(330));
	            Wi(f, k);
	        }
	    }
	    c = Aj;
	    Aj = [];
	    for(d = 0; d < c.length; d += 2){
	        e = c[d];
	        f = c[d + 1];
	        try {
	            var h = e.create;
	            e.destroy = h();
	        } catch (k) {
	            if (null === f) throw Error(y(330));
	            Wi(f, k);
	        }
	    }
	    for(h = a.current.firstEffect; null !== h;)a = h.nextEffect, h.nextEffect = null, h.flags & 8 && (h.sibling = null, h.stateNode = null), h = a;
	    X = b;
	    ig();
	    return !0;
	}
	function gk(a, b, c) {
	    b = Mi(c, b);
	    b = Pi(a, b, 1);
	    Ag(a, b);
	    b = Hg();
	    a = Kj(a, 1);
	    null !== a && ($c(a, 1, b), Mj(a, b));
	}
	function Wi(a, b) {
	    if (3 === a.tag) gk(a, a, b);
	    else for(var c = a.return; null !== c;){
	        if (3 === c.tag) {
	            gk(c, a, b);
	            break;
	        } else if (1 === c.tag) {
	            var d = c.stateNode;
	            if ("function" === typeof c.type.getDerivedStateFromError || "function" === typeof d.componentDidCatch && (null === Ti || !Ti.has(d))) {
	                a = Mi(b, a);
	                var e = Si(c, a, 1);
	                Ag(c, e);
	                e = Hg();
	                c = Kj(c, 1);
	                if (null !== c) $c(c, 1, e), Mj(c, e);
	                else if ("function" === typeof d.componentDidCatch && (null === Ti || !Ti.has(d))) try {
	                    d.componentDidCatch(b, a);
	                } catch (f) {}
	                break;
	            }
	        }
	        c = c.return;
	    }
	}
	function Yj(a, b, c) {
	    var d = a.pingCache;
	    null !== d && d.delete(b);
	    b = Hg();
	    a.pingedLanes |= a.suspendedLanes & c;
	    U === a && (W & c) === c && (4 === V || 3 === V && (W & 62914560) === W && 500 > O() - jj ? Qj(a, 0) : uj |= c);
	    Mj(a, b);
	}
	function lj(a, b) {
	    var c = a.stateNode;
	    null !== c && c.delete(b);
	    b = 0;
	    0 === b && (b = a.mode, 0 === (b & 2) ? b = 1 : 0 === (b & 4) ? b = 99 === eg() ? 1 : 2 : (0 === Gj && (Gj = tj), b = Yc(62914560 & ~Gj), 0 === b && (b = 4194304)));
	    c = Hg();
	    a = Kj(a, b);
	    null !== a && ($c(a, b, c), Mj(a, c));
	}
	var ck;
	ck = function(a, b, c) {
	    var d = b.lanes;
	    if (null !== a) if (a.memoizedProps !== b.pendingProps || N.current) ug = !0;
	    else if (0 !== (c & d)) ug = 0 !== (a.flags & 16384) ? !0 : !1;
	    else {
	        ug = !1;
	        switch(b.tag){
	            case 3:
	                ri(b);
	                sh();
	                break;
	            case 5:
	                gh(b);
	                break;
	            case 1:
	                Ff(b.type) && Jf(b);
	                break;
	            case 4:
	                eh(b, b.stateNode.containerInfo);
	                break;
	            case 10:
	                d = b.memoizedProps.value;
	                var e = b.type._context;
	                I(mg, e._currentValue);
	                e._currentValue = d;
	                break;
	            case 13:
	                if (null !== b.memoizedState) {
	                    if (0 !== (c & b.child.childLanes)) return ti(a, b, c);
	                    I(P, P.current & 1);
	                    b = hi(a, b, c);
	                    return null !== b ? b.sibling : null;
	                }
	                I(P, P.current & 1);
	                break;
	            case 19:
	                d = 0 !== (c & b.childLanes);
	                if (0 !== (a.flags & 64)) {
	                    if (d) return Ai(a, b, c);
	                    b.flags |= 64;
	                }
	                e = b.memoizedState;
	                null !== e && (e.rendering = null, e.tail = null, e.lastEffect = null);
	                I(P, P.current);
	                if (d) break;
	                else return null;
	            case 23:
	            case 24:
	                return b.lanes = 0, mi(a, b, c);
	        }
	        return hi(a, b, c);
	    }
	    else ug = !1;
	    b.lanes = 0;
	    switch(b.tag){
	        case 2:
	            d = b.type;
	            null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2);
	            a = b.pendingProps;
	            e = Ef(b, M.current);
	            tg(b, c);
	            e = Ch(null, b, d, a, e, c);
	            b.flags |= 1;
	            if ("object" === typeof e && null !== e && "function" === typeof e.render && void 0 === e.$$typeof) {
	                b.tag = 1;
	                b.memoizedState = null;
	                b.updateQueue = null;
	                if (Ff(d)) {
	                    var f = !0;
	                    Jf(b);
	                } else f = !1;
	                b.memoizedState = null !== e.state && void 0 !== e.state ? e.state : null;
	                xg(b);
	                var g = d.getDerivedStateFromProps;
	                "function" === typeof g && Gg(b, d, g, a);
	                e.updater = Kg;
	                b.stateNode = e;
	                e._reactInternals = b;
	                Og(b, d, a, c);
	                b = qi(null, b, d, !0, f, c);
	            } else b.tag = 0, fi(null, b, e, c), b = b.child;
	            return b;
	        case 16:
	            e = b.elementType;
	            a: {
	                null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2);
	                a = b.pendingProps;
	                f = e._init;
	                e = f(e._payload);
	                b.type = e;
	                f = b.tag = hk(e);
	                a = lg(e, a);
	                switch(f){
	                    case 0:
	                        b = li(null, b, e, a, c);
	                        break a;
	                    case 1:
	                        b = pi(null, b, e, a, c);
	                        break a;
	                    case 11:
	                        b = gi(null, b, e, a, c);
	                        break a;
	                    case 14:
	                        b = ii(null, b, e, lg(e.type, a), d, c);
	                        break a;
	                }
	                throw Error(y(306, e, ""));
	            }
	            return b;
	        case 0:
	            return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : lg(d, e), li(a, b, d, e, c);
	        case 1:
	            return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : lg(d, e), pi(a, b, d, e, c);
	        case 3:
	            ri(b);
	            d = b.updateQueue;
	            if (null === a || null === d) throw Error(y(282));
	            d = b.pendingProps;
	            e = b.memoizedState;
	            e = null !== e ? e.element : null;
	            yg(a, b);
	            Cg(b, d, null, c);
	            d = b.memoizedState.element;
	            if (d === e) sh(), b = hi(a, b, c);
	            else {
	                e = b.stateNode;
	                if (f = e.hydrate) kh = rf(b.stateNode.containerInfo.firstChild), jh = b, f = lh = !0;
	                if (f) {
	                    a = e.mutableSourceEagerHydrationData;
	                    if (null != a) for(e = 0; e < a.length; e += 2)f = a[e], f._workInProgressVersionPrimary = a[e + 1], th.push(f);
	                    c = Zg(b, null, d, c);
	                    for(b.child = c; c;)c.flags = c.flags & -3 | 1024, c = c.sibling;
	                } else fi(a, b, d, c), sh();
	                b = b.child;
	            }
	            return b;
	        case 5:
	            return gh(b), null === a && ph(b), d = b.type, e = b.pendingProps, f = null !== a ? a.memoizedProps : null, g = e.children, nf(d, e) ? g = null : null !== f && nf(d, f) && (b.flags |= 16), oi(a, b), fi(a, b, g, c), b.child;
	        case 6:
	            return null === a && ph(b), null;
	        case 13:
	            return ti(a, b, c);
	        case 4:
	            return eh(b, b.stateNode.containerInfo), d = b.pendingProps, null === a ? b.child = Yg(b, null, d, c) : fi(a, b, d, c), b.child;
	        case 11:
	            return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : lg(d, e), gi(a, b, d, e, c);
	        case 7:
	            return fi(a, b, b.pendingProps, c), b.child;
	        case 8:
	            return fi(a, b, b.pendingProps.children, c), b.child;
	        case 12:
	            return fi(a, b, b.pendingProps.children, c), b.child;
	        case 10:
	            a: {
	                d = b.type._context;
	                e = b.pendingProps;
	                g = b.memoizedProps;
	                f = e.value;
	                var h = b.type._context;
	                I(mg, h._currentValue);
	                h._currentValue = f;
	                if (null !== g) if (h = g.value, f = He(h, f) ? 0 : ("function" === typeof d._calculateChangedBits ? d._calculateChangedBits(h, f) : 1073741823) | 0, 0 === f) {
	                    if (g.children === e.children && !N.current) {
	                        b = hi(a, b, c);
	                        break a;
	                    }
	                } else for(h = b.child, null !== h && (h.return = b); null !== h;){
	                    var k = h.dependencies;
	                    if (null !== k) {
	                        g = h.child;
	                        for(var l = k.firstContext; null !== l;){
	                            if (l.context === d && 0 !== (l.observedBits & f)) {
	                                1 === h.tag && (l = zg(-1, c & -c), l.tag = 2, Ag(h, l));
	                                h.lanes |= c;
	                                l = h.alternate;
	                                null !== l && (l.lanes |= c);
	                                sg(h.return, c);
	                                k.lanes |= c;
	                                break;
	                            }
	                            l = l.next;
	                        }
	                    } else g = 10 === h.tag ? h.type === b.type ? null : h.child : h.child;
	                    if (null !== g) g.return = h;
	                    else for(g = h; null !== g;){
	                        if (g === b) {
	                            g = null;
	                            break;
	                        }
	                        h = g.sibling;
	                        if (null !== h) {
	                            h.return = g.return;
	                            g = h;
	                            break;
	                        }
	                        g = g.return;
	                    }
	                    h = g;
	                }
	                fi(a, b, e.children, c);
	                b = b.child;
	            }
	            return b;
	        case 9:
	            return e = b.type, f = b.pendingProps, d = f.children, tg(b, c), e = vg(e, f.unstable_observedBits), d = d(e), b.flags |= 1, fi(a, b, d, c), b.child;
	        case 14:
	            return e = b.type, f = lg(e, b.pendingProps), f = lg(e.type, f), ii(a, b, e, f, d, c);
	        case 15:
	            return ki(a, b, b.type, b.pendingProps, d, c);
	        case 17:
	            return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : lg(d, e), null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2), b.tag = 1, Ff(d) ? (a = !0, Jf(b)) : a = !1, tg(b, c), Mg(b, d, e), Og(b, d, e, c), qi(null, b, d, !0, a, c);
	        case 19:
	            return Ai(a, b, c);
	        case 23:
	            return mi(a, b, c);
	        case 24:
	            return mi(a, b, c);
	    }
	    throw Error(y(156, b.tag));
	};
	function ik(a, b, c, d) {
	    this.tag = a;
	    this.key = c;
	    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
	    this.index = 0;
	    this.ref = null;
	    this.pendingProps = b;
	    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
	    this.mode = d;
	    this.flags = 0;
	    this.lastEffect = this.firstEffect = this.nextEffect = null;
	    this.childLanes = this.lanes = 0;
	    this.alternate = null;
	}
	function nh(a, b, c, d) {
	    return new ik(a, b, c, d);
	}
	function ji(a) {
	    a = a.prototype;
	    return !(!a || !a.isReactComponent);
	}
	function hk(a) {
	    if ("function" === typeof a) return ji(a) ? 1 : 0;
	    if (void 0 !== a && null !== a) {
	        a = a.$$typeof;
	        if (a === Aa) return 11;
	        if (a === Da) return 14;
	    }
	    return 2;
	}
	function Tg(a, b) {
	    var c = a.alternate;
	    null === c ? (c = nh(a.tag, b, a.key, a.mode), c.elementType = a.elementType, c.type = a.type, c.stateNode = a.stateNode, c.alternate = a, a.alternate = c) : (c.pendingProps = b, c.type = a.type, c.flags = 0, c.nextEffect = null, c.firstEffect = null, c.lastEffect = null);
	    c.childLanes = a.childLanes;
	    c.lanes = a.lanes;
	    c.child = a.child;
	    c.memoizedProps = a.memoizedProps;
	    c.memoizedState = a.memoizedState;
	    c.updateQueue = a.updateQueue;
	    b = a.dependencies;
	    c.dependencies = null === b ? null : {
	        lanes: b.lanes,
	        firstContext: b.firstContext
	    };
	    c.sibling = a.sibling;
	    c.index = a.index;
	    c.ref = a.ref;
	    return c;
	}
	function Vg(a, b, c, d, e, f) {
	    var g = 2;
	    d = a;
	    if ("function" === typeof a) ji(a) && (g = 1);
	    else if ("string" === typeof a) g = 5;
	    else a: switch(a){
	        case ua:
	            return Xg(c.children, e, f, b);
	        case Ha:
	            g = 8;
	            e |= 16;
	            break;
	        case wa:
	            g = 8;
	            e |= 1;
	            break;
	        case xa:
	            return a = nh(12, c, b, e | 8), a.elementType = xa, a.type = xa, a.lanes = f, a;
	        case Ba:
	            return a = nh(13, c, b, e), a.type = Ba, a.elementType = Ba, a.lanes = f, a;
	        case Ca:
	            return a = nh(19, c, b, e), a.elementType = Ca, a.lanes = f, a;
	        case Ia:
	            return vi(c, e, f, b);
	        case Ja:
	            return a = nh(24, c, b, e), a.elementType = Ja, a.lanes = f, a;
	        default:
	            if ("object" === typeof a && null !== a) switch(a.$$typeof){
	                case ya:
	                    g = 10;
	                    break a;
	                case za:
	                    g = 9;
	                    break a;
	                case Aa:
	                    g = 11;
	                    break a;
	                case Da:
	                    g = 14;
	                    break a;
	                case Ea:
	                    g = 16;
	                    d = null;
	                    break a;
	                case Fa:
	                    g = 22;
	                    break a;
	            }
	            throw Error(y(130, null == a ? a : typeof a, ""));
	    }
	    b = nh(g, c, b, e);
	    b.elementType = a;
	    b.type = d;
	    b.lanes = f;
	    return b;
	}
	function Xg(a, b, c, d) {
	    a = nh(7, a, d, b);
	    a.lanes = c;
	    return a;
	}
	function vi(a, b, c, d) {
	    a = nh(23, a, d, b);
	    a.elementType = Ia;
	    a.lanes = c;
	    return a;
	}
	function Ug(a, b, c) {
	    a = nh(6, a, null, b);
	    a.lanes = c;
	    return a;
	}
	function Wg(a, b, c) {
	    b = nh(4, null !== a.children ? a.children : [], a.key, b);
	    b.lanes = c;
	    b.stateNode = {
	        containerInfo: a.containerInfo,
	        pendingChildren: null,
	        implementation: a.implementation
	    };
	    return b;
	}
	function jk(a, b, c) {
	    this.tag = b;
	    this.containerInfo = a;
	    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
	    this.timeoutHandle = -1;
	    this.pendingContext = this.context = null;
	    this.hydrate = c;
	    this.callbackNode = null;
	    this.callbackPriority = 0;
	    this.eventTimes = Zc(0);
	    this.expirationTimes = Zc(-1);
	    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
	    this.entanglements = Zc(0);
	    this.mutableSourceEagerHydrationData = null;
	}
	function kk(a, b, c) {
	    var d = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
	    return {
	        $$typeof: ta,
	        key: null == d ? null : "" + d,
	        children: a,
	        containerInfo: b,
	        implementation: c
	    };
	}
	function lk(a, b, c, d) {
	    var e = b.current, f = Hg(), g = Ig(e);
	    a: if (c) {
	        c = c._reactInternals;
	        b: {
	            if (Zb(c) !== c || 1 !== c.tag) throw Error(y(170));
	            var h = c;
	            do {
	                switch(h.tag){
	                    case 3:
	                        h = h.stateNode.context;
	                        break b;
	                    case 1:
	                        if (Ff(h.type)) {
	                            h = h.stateNode.__reactInternalMemoizedMergedChildContext;
	                            break b;
	                        }
	                }
	                h = h.return;
	            }while (null !== h)
	            throw Error(y(171));
	        }
	        if (1 === c.tag) {
	            var k = c.type;
	            if (Ff(k)) {
	                c = If(c, k, h);
	                break a;
	            }
	        }
	        c = h;
	    } else c = Cf;
	    null === b.context ? b.context = c : b.pendingContext = c;
	    b = zg(f, g);
	    b.payload = {
	        element: a
	    };
	    d = void 0 === d ? null : d;
	    null !== d && (b.callback = d);
	    Ag(e, b);
	    Jg(e, g, f);
	    return g;
	}
	function mk(a) {
	    a = a.current;
	    if (!a.child) return null;
	    switch(a.child.tag){
	        case 5:
	            return a.child.stateNode;
	        default:
	            return a.child.stateNode;
	    }
	}
	function nk(a, b) {
	    a = a.memoizedState;
	    if (null !== a && null !== a.dehydrated) {
	        var c = a.retryLane;
	        a.retryLane = 0 !== c && c < b ? c : b;
	    }
	}
	function ok(a, b) {
	    nk(a, b);
	    (a = a.alternate) && nk(a, b);
	}
	function pk() {
	    return null;
	}
	function qk(a, b, c) {
	    var d = null != c && null != c.hydrationOptions && c.hydrationOptions.mutableSources || null;
	    c = new jk(a, b, null != c && !0 === c.hydrate);
	    b = nh(3, null, null, 2 === b ? 7 : 1 === b ? 3 : 0);
	    c.current = b;
	    b.stateNode = c;
	    xg(b);
	    a[ff] = c.current;
	    cf(8 === a.nodeType ? a.parentNode : a);
	    if (d) for(a = 0; a < d.length; a++){
	        b = d[a];
	        var e = b._getVersion;
	        e = e(b._source);
	        null == c.mutableSourceEagerHydrationData ? c.mutableSourceEagerHydrationData = [
	            b,
	            e
	        ] : c.mutableSourceEagerHydrationData.push(b, e);
	    }
	    this._internalRoot = c;
	}
	qk.prototype.render = function(a) {
	    lk(a, this._internalRoot, null, null);
	};
	qk.prototype.unmount = function() {
	    var a = this._internalRoot, b = a.containerInfo;
	    lk(null, a, null, function() {
	        b[ff] = null;
	    });
	};
	function rk(a) {
	    return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType && (8 !== a.nodeType || " react-mount-point-unstable " !== a.nodeValue));
	}
	function sk(a, b) {
	    b || (b = a ? 9 === a.nodeType ? a.documentElement : a.firstChild : null, b = !(!b || 1 !== b.nodeType || !b.hasAttribute("data-reactroot")));
	    if (!b) for(var c; c = a.lastChild;)a.removeChild(c);
	    return new qk(a, 0, b ? {
	        hydrate: !0
	    } : void 0);
	}
	function tk(a, b, c, d, e) {
	    var f = c._reactRootContainer;
	    if (f) {
	        var g = f._internalRoot;
	        if ("function" === typeof e) {
	            var h = e;
	            e = function() {
	                var a = mk(g);
	                h.call(a);
	            };
	        }
	        lk(b, g, a, e);
	    } else {
	        f = c._reactRootContainer = sk(c, d);
	        g = f._internalRoot;
	        if ("function" === typeof e) {
	            var k = e;
	            e = function() {
	                var a = mk(g);
	                k.call(a);
	            };
	        }
	        Xj(function() {
	            lk(b, g, a, e);
	        });
	    }
	    return mk(g);
	}
	ec = function(a) {
	    if (13 === a.tag) {
	        var b = Hg();
	        Jg(a, 4, b);
	        ok(a, 4);
	    }
	};
	fc = function(a) {
	    if (13 === a.tag) {
	        var b = Hg();
	        Jg(a, 67108864, b);
	        ok(a, 67108864);
	    }
	};
	gc = function(a) {
	    if (13 === a.tag) {
	        var b = Hg(), c = Ig(a);
	        Jg(a, c, b);
	        ok(a, c);
	    }
	};
	hc = function(a, b) {
	    return b();
	};
	yb = function(a, b, c) {
	    switch(b){
	        case "input":
	            ab(a, c);
	            b = c.name;
	            if ("radio" === c.type && null != b) {
	                for(c = a; c.parentNode;)c = c.parentNode;
	                c = c.querySelectorAll("input[name=" + JSON.stringify("" + b) + '][type="radio"]');
	                for(b = 0; b < c.length; b++){
	                    var d = c[b];
	                    if (d !== a && d.form === a.form) {
	                        var e = Db(d);
	                        if (!e) throw Error(y(90));
	                        Wa(d);
	                        ab(d, e);
	                    }
	                }
	            }
	            break;
	        case "textarea":
	            ib(a, c);
	            break;
	        case "select":
	            b = c.value, null != b && fb(a, !!c.multiple, b, !1);
	    }
	};
	Gb = Wj;
	Hb = function(a, b, c, d, e) {
	    var f = X;
	    X |= 4;
	    try {
	        return gg(98, a.bind(null, b, c, d, e));
	    } finally{
	        X = f, 0 === X && (wj(), ig());
	    }
	};
	Ib = function() {
	    0 === (X & 49) && (Vj(), Oj());
	};
	Jb = function(a, b) {
	    var c = X;
	    X |= 2;
	    try {
	        return a(b);
	    } finally{
	        X = c, 0 === X && (wj(), ig());
	    }
	};
	function uk(a, b) {
	    var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
	    if (!rk(b)) throw Error(y(200));
	    return kk(a, b, null, c);
	}
	var vk = {
	    Events: [
	        Cb,
	        ue,
	        Db,
	        Eb,
	        Fb,
	        Oj,
	        {
	            current: !1
	        }
	    ]
	}, wk = {
	    findFiberByHostInstance: wc,
	    bundleType: 0,
	    version: "17.0.2",
	    rendererPackageName: "react-dom"
	};
	var xk = {
	    bundleType: wk.bundleType,
	    version: wk.version,
	    rendererPackageName: wk.rendererPackageName,
	    rendererConfig: wk.rendererConfig,
	    overrideHookState: null,
	    overrideHookStateDeletePath: null,
	    overrideHookStateRenamePath: null,
	    overrideProps: null,
	    overridePropsDeletePath: null,
	    overridePropsRenamePath: null,
	    setSuspenseHandler: null,
	    scheduleUpdate: null,
	    currentDispatcherRef: ra.ReactCurrentDispatcher,
	    findHostInstanceByFiber: function(a) {
	        a = cc(a);
	        return null === a ? null : a.stateNode;
	    },
	    findFiberByHostInstance: wk.findFiberByHostInstance || pk,
	    findHostInstancesForRefresh: null,
	    scheduleRefresh: null,
	    scheduleRoot: null,
	    setRefreshHandler: null,
	    getCurrentFiber: null
	};
	if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
	    var yk = __REACT_DEVTOOLS_GLOBAL_HOOK__;
	    if (!yk.isDisabled && yk.supportsFiber) try {
	        Lf = yk.inject(xk), Mf = yk;
	    } catch (a) {}
	}
	reactDom_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = vk;
	reactDom_production_min.createPortal = uk;
	reactDom_production_min.findDOMNode = function(a) {
	    if (null == a) return null;
	    if (1 === a.nodeType) return a;
	    var b = a._reactInternals;
	    if (void 0 === b) {
	        if ("function" === typeof a.render) throw Error(y(188));
	        throw Error(y(268, Object.keys(a)));
	    }
	    a = cc(b);
	    a = null === a ? null : a.stateNode;
	    return a;
	};
	reactDom_production_min.flushSync = function(a, b) {
	    var c = X;
	    if (0 !== (c & 48)) return a(b);
	    X |= 1;
	    try {
	        if (a) return gg(99, a.bind(null, b));
	    } finally{
	        X = c, ig();
	    }
	};
	reactDom_production_min.hydrate = function(a, b, c) {
	    if (!rk(b)) throw Error(y(200));
	    return tk(null, a, b, !0, c);
	};
	reactDom_production_min.render = function(a, b, c) {
	    if (!rk(b)) throw Error(y(200));
	    return tk(null, a, b, !1, c);
	};
	reactDom_production_min.unmountComponentAtNode = function(a) {
	    if (!rk(a)) throw Error(y(40));
	    return a._reactRootContainer ? (Xj(function() {
	        tk(null, null, a, !1, function() {
	            a._reactRootContainer = null;
	            a[ff] = null;
	        });
	    }), !0) : !1;
	};
	reactDom_production_min.unstable_batchedUpdates = Wj;
	reactDom_production_min.unstable_createPortal = function(a, b) {
	    return uk(a, b, 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null);
	};
	reactDom_production_min.unstable_renderSubtreeIntoContainer = function(a, b, c, d) {
	    if (!rk(c)) throw Error(y(200));
	    if (null == a || void 0 === a._reactInternals) throw Error(y(38));
	    return tk(a, b, c, !1, d);
	};
	reactDom_production_min.version = "17.0.2";

	var schedulerTracing_production_min = {};

	var b = 0;
	schedulerTracing_production_min.__interactionsRef = null;
	schedulerTracing_production_min.__subscriberRef = null;
	schedulerTracing_production_min.unstable_clear = function(a) {
	    return a();
	};
	schedulerTracing_production_min.unstable_getCurrent = function() {
	    return null;
	};
	schedulerTracing_production_min.unstable_getThreadID = function() {
	    return ++b;
	};
	schedulerTracing_production_min.unstable_subscribe = function() {};
	schedulerTracing_production_min.unstable_trace = function(a, d, c) {
	    return c();
	};
	schedulerTracing_production_min.unstable_unsubscribe = function() {};
	schedulerTracing_production_min.unstable_wrap = function(a) {
	    return a;
	};

	function checkDCE() {
	    /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */ if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function') {
	        return;
	    }
	    try {
	        // Verify that the code above has been dead code eliminated (DCE'd).
	        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
	    } catch (err) {
	        // DevTools shouldn't crash React, no matter what.
	        // We should still report in case we break this code.
	        console.error(err);
	    }
	}
	{
	    // DCE check should happen before ReactDOM bundle executes so that
	    // DevTools can report bad minification during injection.
	    checkDCE();
	    reactDom.exports = reactDom_production_min;
	}
	var ReactDOM = reactDom.exports;

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */ function isObject$4(value) {
	    var type = typeof value;
	    return value != null && (type == 'object' || type == 'function');
	}
	var isObject_1 = isObject$4;

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	var freeGlobal$1 = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
	var _freeGlobal = freeGlobal$1;

	var freeGlobal = _freeGlobal;
	/** Detect free variable `self`. */ var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
	/** Used as a reference to the global object. */ var root$9 = freeGlobal || freeSelf || Function('return this')();
	var _root = root$9;

	var root$8 = _root;
	/**
	 * Gets the timestamp of the number of milliseconds that have elapsed since
	 * the Unix epoch (1 January 1970 00:00:00 UTC).
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Date
	 * @returns {number} Returns the timestamp.
	 * @example
	 *
	 * _.defer(function(stamp) {
	 *   console.log(_.now() - stamp);
	 * }, _.now());
	 * // => Logs the number of milliseconds it took for the deferred invocation.
	 */ var now$1 = function() {
	    return root$8.Date.now();
	};
	var now_1 = now$1;

	/** Used to match a single whitespace character. */ var reWhitespace = /\s/;
	/**
	 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
	 * character of `string`.
	 *
	 * @private
	 * @param {string} string The string to inspect.
	 * @returns {number} Returns the index of the last non-whitespace character.
	 */ function trimmedEndIndex$1(string) {
	    var index = string.length;
	    while(index-- && reWhitespace.test(string.charAt(index))){}
	    return index;
	}
	var _trimmedEndIndex = trimmedEndIndex$1;

	var trimmedEndIndex = _trimmedEndIndex;
	/** Used to match leading whitespace. */ var reTrimStart = /^\s+/;
	/**
	 * The base implementation of `_.trim`.
	 *
	 * @private
	 * @param {string} string The string to trim.
	 * @returns {string} Returns the trimmed string.
	 */ function baseTrim$1(string) {
	    return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, '') : string;
	}
	var _baseTrim = baseTrim$1;

	var root$7 = _root;
	/** Built-in value references. */ var Symbol$4 = root$7.Symbol;
	var _Symbol = Symbol$4;

	var Symbol$3 = _Symbol;
	/** Used for built-in method references. */ var objectProto$b = Object.prototype;
	/** Used to check objects for own properties. */ var hasOwnProperty$8 = objectProto$b.hasOwnProperty;
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */ var nativeObjectToString$1 = objectProto$b.toString;
	/** Built-in value references. */ var symToStringTag$1 = Symbol$3 ? Symbol$3.toStringTag : undefined;
	/**
	 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the raw `toStringTag`.
	 */ function getRawTag$1(value) {
	    var isOwn = hasOwnProperty$8.call(value, symToStringTag$1), tag = value[symToStringTag$1];
	    try {
	        value[symToStringTag$1] = undefined;
	        var unmasked = true;
	    } catch (e) {}
	    var result = nativeObjectToString$1.call(value);
	    if (unmasked) {
	        if (isOwn) {
	            value[symToStringTag$1] = tag;
	        } else {
	            delete value[symToStringTag$1];
	        }
	    }
	    return result;
	}
	var _getRawTag = getRawTag$1;

	/** Used for built-in method references. */ var objectProto$a = Object.prototype;
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */ var nativeObjectToString = objectProto$a.toString;
	/**
	 * Converts `value` to a string using `Object.prototype.toString`.
	 *
	 * @private
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 */ function objectToString$1(value) {
	    return nativeObjectToString.call(value);
	}
	var _objectToString = objectToString$1;

	var Symbol$2 = _Symbol, getRawTag = _getRawTag, objectToString = _objectToString;
	/** `Object#toString` result references. */ var nullTag = '[object Null]', undefinedTag = '[object Undefined]';
	/** Built-in value references. */ var symToStringTag = Symbol$2 ? Symbol$2.toStringTag : undefined;
	/**
	 * The base implementation of `getTag` without fallbacks for buggy environments.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */ function baseGetTag$5(value) {
	    if (value == null) {
	        return value === undefined ? undefinedTag : nullTag;
	    }
	    return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
	}
	var _baseGetTag = baseGetTag$5;

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */ function isObjectLike$5(value) {
	    return value != null && typeof value == 'object';
	}
	var isObjectLike_1 = isObjectLike$5;

	var baseGetTag$4 = _baseGetTag, isObjectLike$4 = isObjectLike_1;
	/** `Object#toString` result references. */ var symbolTag$1 = '[object Symbol]';
	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */ function isSymbol$1(value) {
	    return typeof value == 'symbol' || isObjectLike$4(value) && baseGetTag$4(value) == symbolTag$1;
	}
	var isSymbol_1 = isSymbol$1;

	var baseTrim = _baseTrim, isObject$3 = isObject_1, isSymbol = isSymbol_1;
	/** Used as references for various `Number` constants. */ var NAN = 0 / 0;
	/** Used to detect bad signed hexadecimal string values. */ var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
	/** Used to detect binary string values. */ var reIsBinary = /^0b[01]+$/i;
	/** Used to detect octal string values. */ var reIsOctal = /^0o[0-7]+$/i;
	/** Built-in method references without a dependency on `root`. */ var freeParseInt = parseInt;
	/**
	 * Converts `value` to a number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {number} Returns the number.
	 * @example
	 *
	 * _.toNumber(3.2);
	 * // => 3.2
	 *
	 * _.toNumber(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toNumber(Infinity);
	 * // => Infinity
	 *
	 * _.toNumber('3.2');
	 * // => 3.2
	 */ function toNumber$1(value) {
	    if (typeof value == 'number') {
	        return value;
	    }
	    if (isSymbol(value)) {
	        return NAN;
	    }
	    if (isObject$3(value)) {
	        var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
	        value = isObject$3(other) ? other + '' : other;
	    }
	    if (typeof value != 'string') {
	        return value === 0 ? value : +value;
	    }
	    value = baseTrim(value);
	    var isBinary = reIsBinary.test(value);
	    return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
	}
	var toNumber_1 = toNumber$1;

	var isObject$2 = isObject_1, now = now_1, toNumber = toNumber_1;
	/** Error message constants. */ var FUNC_ERROR_TEXT = 'Expected a function';
	/* Built-in method references for those with the same name as other `lodash` methods. */ var nativeMax = Math.max, nativeMin = Math.min;
	/**
	 * Creates a debounced function that delays invoking `func` until after `wait`
	 * milliseconds have elapsed since the last time the debounced function was
	 * invoked. The debounced function comes with a `cancel` method to cancel
	 * delayed `func` invocations and a `flush` method to immediately invoke them.
	 * Provide `options` to indicate whether `func` should be invoked on the
	 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
	 * with the last arguments provided to the debounced function. Subsequent
	 * calls to the debounced function return the result of the last `func`
	 * invocation.
	 *
	 * **Note:** If `leading` and `trailing` options are `true`, `func` is
	 * invoked on the trailing edge of the timeout only if the debounced function
	 * is invoked more than once during the `wait` timeout.
	 *
	 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
	 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
	 *
	 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
	 * for details over the differences between `_.debounce` and `_.throttle`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to debounce.
	 * @param {number} [wait=0] The number of milliseconds to delay.
	 * @param {Object} [options={}] The options object.
	 * @param {boolean} [options.leading=false]
	 *  Specify invoking on the leading edge of the timeout.
	 * @param {number} [options.maxWait]
	 *  The maximum time `func` is allowed to be delayed before it's invoked.
	 * @param {boolean} [options.trailing=true]
	 *  Specify invoking on the trailing edge of the timeout.
	 * @returns {Function} Returns the new debounced function.
	 * @example
	 *
	 * // Avoid costly calculations while the window size is in flux.
	 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
	 *
	 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
	 * jQuery(element).on('click', _.debounce(sendMail, 300, {
	 *   'leading': true,
	 *   'trailing': false
	 * }));
	 *
	 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
	 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
	 * var source = new EventSource('/stream');
	 * jQuery(source).on('message', debounced);
	 *
	 * // Cancel the trailing debounced invocation.
	 * jQuery(window).on('popstate', debounced.cancel);
	 */ function debounce(func, wait, options) {
	    var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
	    if (typeof func != 'function') {
	        throw new TypeError(FUNC_ERROR_TEXT);
	    }
	    wait = toNumber(wait) || 0;
	    if (isObject$2(options)) {
	        leading = !!options.leading;
	        maxing = 'maxWait' in options;
	        maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
	        trailing = 'trailing' in options ? !!options.trailing : trailing;
	    }
	    function invokeFunc(time) {
	        var args = lastArgs, thisArg = lastThis;
	        lastArgs = lastThis = undefined;
	        lastInvokeTime = time;
	        result = func.apply(thisArg, args);
	        return result;
	    }
	    function leadingEdge(time) {
	        // Reset any `maxWait` timer.
	        lastInvokeTime = time;
	        // Start the timer for the trailing edge.
	        timerId = setTimeout(timerExpired, wait);
	        // Invoke the leading edge.
	        return leading ? invokeFunc(time) : result;
	    }
	    function remainingWait(time) {
	        var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
	        return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
	    }
	    function shouldInvoke(time) {
	        var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
	        // Either this is the first call, activity has stopped and we're at the
	        // trailing edge, the system time has gone backwards and we're treating
	        // it as the trailing edge, or we've hit the `maxWait` limit.
	        return lastCallTime === undefined || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
	    }
	    function timerExpired() {
	        var time = now();
	        if (shouldInvoke(time)) {
	            return trailingEdge(time);
	        }
	        // Restart the timer.
	        timerId = setTimeout(timerExpired, remainingWait(time));
	    }
	    function trailingEdge(time) {
	        timerId = undefined;
	        // Only invoke if we have `lastArgs` which means `func` has been
	        // debounced at least once.
	        if (trailing && lastArgs) {
	            return invokeFunc(time);
	        }
	        lastArgs = lastThis = undefined;
	        return result;
	    }
	    function cancel() {
	        if (timerId !== undefined) {
	            clearTimeout(timerId);
	        }
	        lastInvokeTime = 0;
	        lastArgs = lastCallTime = lastThis = timerId = undefined;
	    }
	    function flush() {
	        return timerId === undefined ? result : trailingEdge(now());
	    }
	    function debounced() {
	        var time = now(), isInvoking = shouldInvoke(time);
	        lastArgs = arguments;
	        lastThis = this;
	        lastCallTime = time;
	        if (isInvoking) {
	            if (timerId === undefined) {
	                return leadingEdge(lastCallTime);
	            }
	            if (maxing) {
	                // Handle invocations in a tight loop.
	                clearTimeout(timerId);
	                timerId = setTimeout(timerExpired, wait);
	                return invokeFunc(lastCallTime);
	            }
	        }
	        if (timerId === undefined) {
	            timerId = setTimeout(timerExpired, wait);
	        }
	        return result;
	    }
	    debounced.cancel = cancel;
	    debounced.flush = flush;
	    return debounced;
	}
	var debounce_1 = debounce;

	// Keep only the fields that are valid in JSON
	const cleanFields = (obj)=>{
	    if (typeof obj === 'undefined' || obj === null || typeof obj === 'bigint' || Number.isNaN(obj) || obj === Infinity || obj === -Infinity) {
	        return undefined;
	    }
	    if ([
	        'string',
	        'number',
	        'boolean'
	    ].includes(typeof obj)) {
	        return obj;
	    }
	    if (Array.isArray(obj)) {
	        return obj.map(cleanFields).filter((t)=>typeof t !== 'undefined');
	    }
	    const result = {};
	    for (const [key, value] of Object.entries(obj)){
	        const cleaned = cleanFields(value);
	        if (typeof cleaned !== 'undefined') {
	            result[key] = cleaned;
	        }
	    }
	    return result;
	};

	/**
	 * If we use `a.push(...b)`, it will result in `Maximum call stack size exceeded` error.
	 * The reason is unclear, it may be a bug of V8, so we should implement a push method by ourselves.
	 */ const concat = (a, b, prependEach = false)=>{
	    if (!Array.isArray(a) || !Array.isArray(b)) {
	        throw new Error('Both arguments should be arrays.');
	    }
	    const lenA = a.length;
	    const lenB = b.length;
	    const len = lenA + lenB;
	    const result = new Array(len);
	    if (prependEach) {
	        for(let i = 0; i < lenB; i++){
	            result[i] = b[lenB - i - 1];
	        }
	        for(let i = 0; i < lenA; i++){
	            result[i + lenB] = a[i];
	        }
	        return result;
	    }
	    for(let i = 0; i < lenA; i++){
	        result[i] = a[i];
	    }
	    for(let i = 0; i < lenB; i++){
	        result[i + lenA] = b[i];
	    }
	    return result;
	};

	const detectCircular = (value, map = new Map())=>{
	    // primitive types should not be checked
	    if (typeof value !== 'object' || value === null) {
	        return false;
	    }
	    // value has appeared
	    if (map.has(value)) {
	        return true;
	    }
	    map.set(value, true);
	    // value is an array
	    if (Array.isArray(value)) {
	        for(let i = 0; i < value.length; i++){
	            if (detectCircular(value[i], map)) {
	                return true;
	            }
	        }
	        return false;
	    }
	    // value is an object
	    for(const key in value){
	        if (detectCircular(value[key], map)) {
	            return true;
	        }
	    }
	    return false;
	};

	// https://gist.github.com/RexSkz/c4f78a6e143e9008f9c717623b7a2bc1
	const stringify = (obj, replacer, space, depth = Infinity, undefinedBehavior)=>{
	    if (!obj || typeof obj !== 'object') {
	        let result = undefined;
	        if (!Number.isNaN(obj) && obj !== Infinity && obj !== -Infinity && typeof obj !== 'bigint') {
	            result = JSON.stringify(obj, replacer, space);
	        }
	        if (result === undefined) {
	            switch(undefinedBehavior){
	                case UndefinedBehavior.throw:
	                    throw new Error(`Value is not valid in JSON, got ${String(obj)}`);
	                case UndefinedBehavior.stringify:
	                    return stringifyInvalidValue(obj);
	                default:
	                    throw new Error(`Should not reach here, please report this bug.`);
	            }
	        }
	        return result;
	    }
	    const t = depth < 1 ? '"..."' : Array.isArray(obj) ? `[${obj.map((v)=>stringify(v, replacer, space, depth - 1, undefinedBehavior)).join(',')}]` : `{${Object.keys(obj).map((k)=>`"${k}": ${stringify(obj[k], replacer, space, depth - 1, undefinedBehavior)}`).join(', ')}}`;
	    return JSON.stringify(JSON.parse(t), replacer, space);
	};
	const stringifyInvalidValue = (value)=>{
	    if (value === undefined) {
	        return 'undefined';
	    }
	    if (value === Infinity) {
	        return 'Infinity';
	    }
	    if (value === -Infinity) {
	        return '-Infinity';
	    }
	    if (Number.isNaN(value)) {
	        return 'NaN';
	    }
	    if (typeof value === 'bigint') {
	        return `${value}n`;
	    }
	    return String(value);
	};

	const formatValue = (value, depth = Infinity, pretty = false, undefinedBehavior = UndefinedBehavior.stringify)=>{
	    if (value === null) {
	        return 'null';
	    }
	    if (Array.isArray(value) || typeof value === 'object') {
	        return stringify(value, undefined, pretty ? 1 : undefined, depth, undefinedBehavior);
	    }
	    return stringify(value, undefined, undefined, undefined, undefinedBehavior);
	};

	const getOrderByType = (value)=>{
	    if (typeof value === 'boolean') {
	        return 0;
	    }
	    if (typeof value === 'number') {
	        return 1;
	    }
	    if (typeof value === 'string') {
	        return 2;
	    }
	    if (value === null) {
	        return 3;
	    }
	    if (Array.isArray(value)) {
	        return 4;
	    }
	    if (typeof value === 'object') {
	        return 5;
	    }
	    if (typeof value === 'symbol') {
	        return 6;
	    }
	    if (typeof value === 'function') {
	        return 7;
	    }
	    if (typeof value === 'bigint') {
	        return 8;
	    }
	    return -1;
	};
	/**
	 * The compare function to correct the order for "array" or "object":
	 * - The order for 2 values with different types are: boolean, number, string, null, array, object.
	 * - The order for 2 values with the same type is according to the type:
	 *   - For boolean, number, string: use the `<` sign.
	 *   - For array and object: preserve the original order (or do we have a better idea?)
	 */ const cmp = (a, b, options)=>{
	    const orderByMapA = options.keyOrdersMap?.get(a);
	    const orderByMapB = options.keyOrdersMap?.get(b);
	    if (orderByMapA !== undefined && orderByMapB !== undefined) {
	        return orderByMapA - orderByMapB;
	    }
	    const orderByTypeA = getOrderByType(a);
	    const orderByTypeB = getOrderByType(b);
	    if (orderByTypeA !== orderByTypeB) {
	        return orderByTypeA - orderByTypeB;
	    }
	    if (a === null && b === null || Array.isArray(a) && Array.isArray(b) || orderByTypeA === 5 && orderByTypeB === 5) {
	        return 0;
	    }
	    switch(typeof a){
	        case 'number':
	            if (Number.isNaN(a) && Number.isNaN(b) || a === Infinity && b === Infinity || a === -Infinity && b === -Infinity) {
	                return 0;
	            }
	            return a - b;
	        case 'string':
	            if (options.ignoreCase) {
	                a = a.toLowerCase();
	                b = b.toLowerCase();
	            }
	            return a < b ? -1 : a > b ? 1 : 0;
	        case 'boolean':
	            return +a - +b;
	        case 'symbol':
	        case 'function':
	            return String(a).localeCompare(String(b));
	    }
	    if (typeof a === 'bigint' && typeof b === 'bigint') {
	        const result = BigInt(a) - BigInt(b);
	        return result < 0 ? -1 : result > 0 ? 1 : 0;
	    }
	    return String(a).localeCompare(String(b));
	};

	const getType = (value)=>{
	    if (Array.isArray(value)) {
	        return 'array';
	    }
	    if (value === null) {
	        return 'null';
	    }
	    return typeof value;
	};

	const prettyAppendLines = (linesLeft, linesRight, keyLeft, keyRight, valueLeft, valueRight, level, options)=>{
	    const valueCmpOptions = {
	        ignoreCase: options.ignoreCase
	    };
	    const _resultLeft = formatValue(valueLeft, options.maxDepth, true, options.undefinedBehavior).split('\n');
	    const _resultRight = formatValue(valueRight, options.maxDepth, true, options.undefinedBehavior).split('\n');
	    if (cmp(valueLeft, valueRight, valueCmpOptions) !== 0) {
	        if (options.showModifications) {
	            const maxLines = Math.max(_resultLeft.length, _resultRight.length);
	            for(let i = _resultLeft.length; i < maxLines; i++){
	                _resultLeft.push('');
	            }
	            for(let i = _resultRight.length; i < maxLines; i++){
	                _resultRight.push('');
	            }
	            linesLeft.push({
	                level,
	                type: 'modify',
	                text: keyLeft ? `"${keyLeft}": ${_resultLeft[0]}` : _resultLeft[0]
	            });
	            for(let i = 1; i < _resultLeft.length; i++){
	                linesLeft.push({
	                    level: level + (_resultLeft[i].match(/^\s+/)?.[0]?.length || 0),
	                    type: 'modify',
	                    text: _resultLeft[i].replace(/^\s+/, '').replace(/,$/g, '')
	                });
	            }
	            for(let i = _resultLeft.length; i < maxLines; i++){
	                linesLeft.push({
	                    level,
	                    type: 'equal',
	                    text: ''
	                });
	            }
	            linesRight.push({
	                level,
	                type: 'modify',
	                text: keyRight ? `"${keyRight}": ${_resultRight[0]}` : _resultRight[0]
	            });
	            for(let i = 1; i < _resultRight.length; i++){
	                linesRight.push({
	                    level: level + (_resultRight[i].match(/^\s+/)?.[0]?.length || 0),
	                    type: 'modify',
	                    text: _resultRight[i].replace(/^\s+/, '').replace(/,$/g, '')
	                });
	            }
	            for(let i = _resultRight.length; i < maxLines; i++){
	                linesRight.push({
	                    level,
	                    type: 'equal',
	                    text: ''
	                });
	            }
	        } else {
	            linesLeft.push({
	                level,
	                type: 'remove',
	                text: keyLeft ? `"${keyLeft}": ${_resultLeft[0]}` : _resultLeft[0]
	            });
	            for(let i = 1; i < _resultLeft.length; i++){
	                linesLeft.push({
	                    level: level + (_resultLeft[i].match(/^\s+/)?.[0]?.length || 0),
	                    type: 'remove',
	                    text: _resultLeft[i].replace(/^\s+/, '').replace(/,$/g, '')
	                });
	            }
	            for(let i = 0; i < _resultRight.length; i++){
	                linesLeft.push({
	                    level,
	                    type: 'equal',
	                    text: ''
	                });
	            }
	            for(let i = 0; i < _resultLeft.length; i++){
	                linesRight.push({
	                    level,
	                    type: 'equal',
	                    text: ''
	                });
	            }
	            linesRight.push({
	                level,
	                type: 'add',
	                text: keyRight ? `"${keyRight}": ${_resultRight[0]}` : _resultRight[0]
	            });
	            for(let i = 1; i < _resultRight.length; i++){
	                linesRight.push({
	                    level: level + (_resultRight[i].match(/^\s+/)?.[0]?.length || 0),
	                    type: 'add',
	                    text: _resultRight[i].replace(/^\s+/, '').replace(/,$/g, '')
	                });
	            }
	        }
	    } else {
	        const maxLines = Math.max(_resultLeft.length, _resultRight.length);
	        for(let i = _resultLeft.length; i < maxLines; i++){
	            _resultLeft.push('');
	        }
	        for(let i = _resultRight.length; i < maxLines; i++){
	            _resultRight.push('');
	        }
	        linesLeft.push({
	            level,
	            type: 'equal',
	            text: keyLeft ? `"${keyLeft}": ${_resultLeft[0]}` : _resultLeft[0]
	        });
	        for(let i = 1; i < _resultLeft.length; i++){
	            linesLeft.push({
	                level: level + (_resultLeft[i].match(/^\s+/)?.[0]?.length || 0),
	                type: 'equal',
	                text: _resultLeft[i].replace(/^\s+/, '').replace(/,$/g, '')
	            });
	        }
	        linesRight.push({
	            level,
	            type: 'equal',
	            text: keyRight ? `"${keyRight}": ${_resultRight[0]}` : _resultRight[0]
	        });
	        for(let i = 1; i < _resultRight.length; i++){
	            linesRight.push({
	                level: level + (_resultRight[i].match(/^\s+/)?.[0]?.length || 0),
	                type: 'equal',
	                text: _resultRight[i].replace(/^\s+/, '').replace(/,$/g, '')
	            });
	        }
	    }
	};

	const sortKeys = (arr, options)=>{
	    return arr.sort((a, b)=>cmp(a, b, {
	            ignoreCase: options.ignoreCaseForKey
	        }));
	};

	const diffObject = (lhs, rhs, level = 1, options, arrayDiffFunc)=>{
	    if (level > (options.maxDepth || Infinity)) {
	        return [
	            [
	                {
	                    level,
	                    type: 'equal',
	                    text: '...'
	                }
	            ],
	            [
	                {
	                    level,
	                    type: 'equal',
	                    text: '...'
	                }
	            ]
	        ];
	    }
	    let linesLeft = [];
	    let linesRight = [];
	    if (lhs === null && rhs === null || lhs === undefined && rhs === undefined) {
	        return [
	            linesLeft,
	            linesRight
	        ];
	    } else if (lhs === null || lhs === undefined) {
	        const addedLines = stringify(rhs, undefined, 1, undefined, options.undefinedBehavior).split('\n');
	        for(let i = 0; i < addedLines.length; i++){
	            linesLeft.push({
	                level,
	                type: 'equal',
	                text: ''
	            });
	            linesRight.push({
	                level: level + (addedLines[i].match(/^\s+/)?.[0]?.length || 0),
	                type: 'add',
	                text: addedLines[i].replace(/^\s+/, '').replace(/,$/g, '')
	            });
	        }
	        return [
	            linesLeft,
	            linesRight
	        ];
	    } else if (rhs === null || rhs === undefined) {
	        const addedLines = stringify(lhs, undefined, 1, undefined, options.undefinedBehavior).split('\n');
	        for(let i = 0; i < addedLines.length; i++){
	            linesLeft.push({
	                level: level + (addedLines[i].match(/^\s+/)?.[0]?.length || 0),
	                type: 'remove',
	                text: addedLines[i].replace(/^\s+/, '').replace(/,$/g, '')
	            });
	            linesRight.push({
	                level,
	                type: 'equal',
	                text: ''
	            });
	        }
	        return [
	            linesLeft,
	            linesRight
	        ];
	    }
	    const keysLeft = Object.keys(lhs);
	    const keysRight = Object.keys(rhs);
	    const keyOrdersMap = new Map();
	    if (!options.preserveKeyOrder) {
	        sortKeys(keysLeft, options);
	        sortKeys(keysRight, options);
	    } else if (options.preserveKeyOrder === 'before') {
	        for(let i = 0; i < keysLeft.length; i++){
	            keyOrdersMap.set(keysLeft[i], i);
	        }
	        for(let i = 0; i < keysRight.length; i++){
	            if (!keyOrdersMap.has(keysRight[i])) {
	                keyOrdersMap.set(keysRight[i], keysLeft.length + i);
	            }
	        }
	        keysRight.sort((a, b)=>keyOrdersMap.get(a) - keyOrdersMap.get(b));
	    } else if (options.preserveKeyOrder === 'after') {
	        for(let i = 0; i < keysRight.length; i++){
	            keyOrdersMap.set(keysRight[i], i);
	        }
	        for(let i = 0; i < keysLeft.length; i++){
	            if (!keyOrdersMap.has(keysLeft[i])) {
	                keyOrdersMap.set(keysLeft[i], keysRight.length + i);
	            }
	        }
	        keysLeft.sort((a, b)=>keyOrdersMap.get(a) - keyOrdersMap.get(b));
	    }
	    const keysCmpOptions = {
	        ignoreCase: options.ignoreCaseForKey,
	        keyOrdersMap
	    };
	    while(keysLeft.length || keysRight.length){
	        const keyLeft = keysLeft[0];
	        const keyRight = keysRight[0];
	        const keyCmpResult = cmp(keyLeft, keyRight, keysCmpOptions);
	        if (keyCmpResult === 0) {
	            if (getType(lhs[keyLeft]) !== getType(rhs[keyRight])) {
	                prettyAppendLines(linesLeft, linesRight, keyLeft, keyRight, lhs[keyLeft], rhs[keyRight], level, options);
	            } else if (Array.isArray(lhs[keyLeft])) {
	                const arrLeft = [
	                    ...lhs[keyLeft]
	                ];
	                const arrRight = [
	                    ...rhs[keyRight]
	                ];
	                const [resLeft, resRight] = arrayDiffFunc(arrLeft, arrRight, keyLeft, keyRight, level, options, [], []);
	                linesLeft = concat(linesLeft, resLeft);
	                linesRight = concat(linesRight, resRight);
	            } else if (lhs[keyLeft] === null) {
	                linesLeft.push({
	                    level,
	                    type: 'equal',
	                    text: `"${keyLeft}": null`
	                });
	                linesRight.push({
	                    level,
	                    type: 'equal',
	                    text: `"${keyRight}": null`
	                });
	            } else if (typeof lhs[keyLeft] === 'object') {
	                const result = diffObject(lhs[keyLeft], rhs[keyRight], level + 1, options, arrayDiffFunc);
	                linesLeft.push({
	                    level,
	                    type: 'equal',
	                    text: `"${keyLeft}": {`
	                });
	                linesLeft = concat(linesLeft, result[0]);
	                linesLeft.push({
	                    level,
	                    type: 'equal',
	                    text: '}'
	                });
	                linesRight.push({
	                    level,
	                    type: 'equal',
	                    text: `"${keyRight}": {`
	                });
	                linesRight = concat(linesRight, result[1]);
	                linesRight.push({
	                    level,
	                    type: 'equal',
	                    text: '}'
	                });
	            } else {
	                prettyAppendLines(linesLeft, linesRight, keyLeft, keyRight, lhs[keyLeft], rhs[keyRight], level, options);
	            }
	        } else if (keysLeft.length && keysRight.length) {
	            if (keyCmpResult < 0) {
	                const addedLines = stringify(lhs[keyLeft], undefined, 1, undefined, options.undefinedBehavior).split('\n');
	                for(let i = 0; i < addedLines.length; i++){
	                    const text = addedLines[i].replace(/^\s+/, '').replace(/,$/g, '');
	                    linesLeft.push({
	                        level: level + (addedLines[i].match(/^\s+/)?.[0]?.length || 0),
	                        type: 'remove',
	                        text: i ? text : `"${keyLeft}": ${text}`
	                    });
	                    linesRight.push({
	                        level,
	                        type: 'equal',
	                        text: ''
	                    });
	                }
	            } else {
	                const addedLines = stringify(rhs[keyRight], undefined, 1, undefined, options.undefinedBehavior).split('\n');
	                for(let i = 0; i < addedLines.length; i++){
	                    const text = addedLines[i].replace(/^\s+/, '').replace(/,$/g, '');
	                    linesLeft.push({
	                        level,
	                        type: 'equal',
	                        text: ''
	                    });
	                    linesRight.push({
	                        level: level + (addedLines[i].match(/^\s+/)?.[0]?.length || 0),
	                        type: 'add',
	                        text: i ? text : `"${keyRight}": ${text}`
	                    });
	                }
	            }
	        } else if (keysLeft.length) {
	            const addedLines = stringify(lhs[keyLeft], undefined, 1, undefined, options.undefinedBehavior).split('\n');
	            for(let i = 0; i < addedLines.length; i++){
	                const text = addedLines[i].replace(/^\s+/, '').replace(/,$/g, '');
	                linesLeft.push({
	                    level: level + (addedLines[i].match(/^\s+/)?.[0]?.length || 0),
	                    type: 'remove',
	                    text: i ? text : `"${keyLeft}": ${text}`
	                });
	                linesRight.push({
	                    level,
	                    type: 'equal',
	                    text: ''
	                });
	            }
	        } else if (keysRight.length) {
	            const addedLines = stringify(rhs[keyRight], undefined, 1, undefined, options.undefinedBehavior).split('\n');
	            for(let i = 0; i < addedLines.length; i++){
	                const text = addedLines[i].replace(/^\s+/, '').replace(/,$/g, '');
	                linesLeft.push({
	                    level,
	                    type: 'equal',
	                    text: ''
	                });
	                linesRight.push({
	                    level: level + (addedLines[i].match(/^\s+/)?.[0]?.length || 0),
	                    type: 'add',
	                    text: i ? text : `"${keyRight}": ${text}`
	                });
	            }
	        }
	        if (!keyLeft) {
	            keysRight.shift();
	        } else if (!keyRight) {
	            keysLeft.shift();
	        } else if (keyCmpResult === 0) {
	            keysLeft.shift();
	            keysRight.shift();
	        } else if (keyCmpResult < 0) {
	            keysLeft.shift();
	        } else {
	            keysRight.shift();
	        }
	    }
	    if (linesLeft.length !== linesRight.length) {
	        throw new Error('Diff error: length not match for left & right, please report a bug with your data.');
	    }
	    return [
	        linesLeft,
	        linesRight
	    ];
	};

	/**
	 * Removes all key-value entries from the list cache.
	 *
	 * @private
	 * @name clear
	 * @memberOf ListCache
	 */ function listCacheClear$1() {
	    this.__data__ = [];
	    this.size = 0;
	}
	var _listCacheClear = listCacheClear$1;

	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */ function eq$2(value, other) {
	    return value === other || value !== value && other !== other;
	}
	var eq_1 = eq$2;

	var eq$1 = eq_1;
	/**
	 * Gets the index at which the `key` is found in `array` of key-value pairs.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} key The key to search for.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */ function assocIndexOf$4(array, key) {
	    var length = array.length;
	    while(length--){
	        if (eq$1(array[length][0], key)) {
	            return length;
	        }
	    }
	    return -1;
	}
	var _assocIndexOf = assocIndexOf$4;

	var assocIndexOf$3 = _assocIndexOf;
	/** Used for built-in method references. */ var arrayProto = Array.prototype;
	/** Built-in value references. */ var splice = arrayProto.splice;
	/**
	 * Removes `key` and its value from the list cache.
	 *
	 * @private
	 * @name delete
	 * @memberOf ListCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */ function listCacheDelete$1(key) {
	    var data = this.__data__, index = assocIndexOf$3(data, key);
	    if (index < 0) {
	        return false;
	    }
	    var lastIndex = data.length - 1;
	    if (index == lastIndex) {
	        data.pop();
	    } else {
	        splice.call(data, index, 1);
	    }
	    --this.size;
	    return true;
	}
	var _listCacheDelete = listCacheDelete$1;

	var assocIndexOf$2 = _assocIndexOf;
	/**
	 * Gets the list cache value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf ListCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */ function listCacheGet$1(key) {
	    var data = this.__data__, index = assocIndexOf$2(data, key);
	    return index < 0 ? undefined : data[index][1];
	}
	var _listCacheGet = listCacheGet$1;

	var assocIndexOf$1 = _assocIndexOf;
	/**
	 * Checks if a list cache value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf ListCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */ function listCacheHas$1(key) {
	    return assocIndexOf$1(this.__data__, key) > -1;
	}
	var _listCacheHas = listCacheHas$1;

	var assocIndexOf = _assocIndexOf;
	/**
	 * Sets the list cache `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf ListCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the list cache instance.
	 */ function listCacheSet$1(key, value) {
	    var data = this.__data__, index = assocIndexOf(data, key);
	    if (index < 0) {
	        ++this.size;
	        data.push([
	            key,
	            value
	        ]);
	    } else {
	        data[index][1] = value;
	    }
	    return this;
	}
	var _listCacheSet = listCacheSet$1;

	var listCacheClear = _listCacheClear, listCacheDelete = _listCacheDelete, listCacheGet = _listCacheGet, listCacheHas = _listCacheHas, listCacheSet = _listCacheSet;
	/**
	 * Creates an list cache object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */ function ListCache$4(entries) {
	    var index = -1, length = entries == null ? 0 : entries.length;
	    this.clear();
	    while(++index < length){
	        var entry = entries[index];
	        this.set(entry[0], entry[1]);
	    }
	}
	// Add methods to `ListCache`.
	ListCache$4.prototype.clear = listCacheClear;
	ListCache$4.prototype['delete'] = listCacheDelete;
	ListCache$4.prototype.get = listCacheGet;
	ListCache$4.prototype.has = listCacheHas;
	ListCache$4.prototype.set = listCacheSet;
	var _ListCache = ListCache$4;

	var ListCache$3 = _ListCache;
	/**
	 * Removes all key-value entries from the stack.
	 *
	 * @private
	 * @name clear
	 * @memberOf Stack
	 */ function stackClear$1() {
	    this.__data__ = new ListCache$3;
	    this.size = 0;
	}
	var _stackClear = stackClear$1;

	/**
	 * Removes `key` and its value from the stack.
	 *
	 * @private
	 * @name delete
	 * @memberOf Stack
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */ function stackDelete$1(key) {
	    var data = this.__data__, result = data['delete'](key);
	    this.size = data.size;
	    return result;
	}
	var _stackDelete = stackDelete$1;

	/**
	 * Gets the stack value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Stack
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */ function stackGet$1(key) {
	    return this.__data__.get(key);
	}
	var _stackGet = stackGet$1;

	/**
	 * Checks if a stack value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Stack
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */ function stackHas$1(key) {
	    return this.__data__.has(key);
	}
	var _stackHas = stackHas$1;

	var baseGetTag$3 = _baseGetTag, isObject$1 = isObject_1;
	/** `Object#toString` result references. */ var asyncTag = '[object AsyncFunction]', funcTag$1 = '[object Function]', genTag = '[object GeneratorFunction]', proxyTag = '[object Proxy]';
	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */ function isFunction$2(value) {
	    if (!isObject$1(value)) {
	        return false;
	    }
	    // The use of `Object#toString` avoids issues with the `typeof` operator
	    // in Safari 9 which returns 'object' for typed arrays and other constructors.
	    var tag = baseGetTag$3(value);
	    return tag == funcTag$1 || tag == genTag || tag == asyncTag || tag == proxyTag;
	}
	var isFunction_1 = isFunction$2;

	var root$6 = _root;
	/** Used to detect overreaching core-js shims. */ var coreJsData$1 = root$6['__core-js_shared__'];
	var _coreJsData = coreJsData$1;

	var coreJsData = _coreJsData;
	/** Used to detect methods masquerading as native. */ var maskSrcKey = function() {
	    var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
	    return uid ? 'Symbol(src)_1.' + uid : '';
	}();
	/**
	 * Checks if `func` has its source masked.
	 *
	 * @private
	 * @param {Function} func The function to check.
	 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
	 */ function isMasked$1(func) {
	    return !!maskSrcKey && maskSrcKey in func;
	}
	var _isMasked = isMasked$1;

	/** Used for built-in method references. */ var funcProto$1 = Function.prototype;
	/** Used to resolve the decompiled source of functions. */ var funcToString$1 = funcProto$1.toString;
	/**
	 * Converts `func` to its source code.
	 *
	 * @private
	 * @param {Function} func The function to convert.
	 * @returns {string} Returns the source code.
	 */ function toSource$2(func) {
	    if (func != null) {
	        try {
	            return funcToString$1.call(func);
	        } catch (e) {}
	        try {
	            return func + '';
	        } catch (e) {}
	    }
	    return '';
	}
	var _toSource = toSource$2;

	var isFunction$1 = isFunction_1, isMasked = _isMasked, isObject = isObject_1, toSource$1 = _toSource;
	/**
	 * Used to match `RegExp`
	 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
	 */ var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
	/** Used to detect host constructors (Safari). */ var reIsHostCtor = /^\[object .+?Constructor\]$/;
	/** Used for built-in method references. */ var funcProto = Function.prototype, objectProto$9 = Object.prototype;
	/** Used to resolve the decompiled source of functions. */ var funcToString = funcProto.toString;
	/** Used to check objects for own properties. */ var hasOwnProperty$7 = objectProto$9.hasOwnProperty;
	/** Used to detect if a method is native. */ var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty$7).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
	/**
	 * The base implementation of `_.isNative` without bad shim checks.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function,
	 *  else `false`.
	 */ function baseIsNative$1(value) {
	    if (!isObject(value) || isMasked(value)) {
	        return false;
	    }
	    var pattern = isFunction$1(value) ? reIsNative : reIsHostCtor;
	    return pattern.test(toSource$1(value));
	}
	var _baseIsNative = baseIsNative$1;

	/**
	 * Gets the value at `key` of `object`.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {string} key The key of the property to get.
	 * @returns {*} Returns the property value.
	 */ function getValue$2(object, key) {
	    return object == null ? undefined : object[key];
	}
	var _getValue = getValue$2;

	var baseIsNative = _baseIsNative, getValue$1 = _getValue;
	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */ function getNative$6(object, key) {
	    var value = getValue$1(object, key);
	    return baseIsNative(value) ? value : undefined;
	}
	var _getNative = getNative$6;

	var getNative$5 = _getNative, root$5 = _root;
	/* Built-in method references that are verified to be native. */ var Map$4 = getNative$5(root$5, 'Map');
	var _Map = Map$4;

	var getNative$4 = _getNative;
	/* Built-in method references that are verified to be native. */ var nativeCreate$4 = getNative$4(Object, 'create');
	var _nativeCreate = nativeCreate$4;

	var nativeCreate$3 = _nativeCreate;
	/**
	 * Removes all key-value entries from the hash.
	 *
	 * @private
	 * @name clear
	 * @memberOf Hash
	 */ function hashClear$1() {
	    this.__data__ = nativeCreate$3 ? nativeCreate$3(null) : {};
	    this.size = 0;
	}
	var _hashClear = hashClear$1;

	/**
	 * Removes `key` and its value from the hash.
	 *
	 * @private
	 * @name delete
	 * @memberOf Hash
	 * @param {Object} hash The hash to modify.
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */ function hashDelete$1(key) {
	    var result = this.has(key) && delete this.__data__[key];
	    this.size -= result ? 1 : 0;
	    return result;
	}
	var _hashDelete = hashDelete$1;

	var nativeCreate$2 = _nativeCreate;
	/** Used to stand-in for `undefined` hash values. */ var HASH_UNDEFINED$2 = '__lodash_hash_undefined__';
	/** Used for built-in method references. */ var objectProto$8 = Object.prototype;
	/** Used to check objects for own properties. */ var hasOwnProperty$6 = objectProto$8.hasOwnProperty;
	/**
	 * Gets the hash value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Hash
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */ function hashGet$1(key) {
	    var data = this.__data__;
	    if (nativeCreate$2) {
	        var result = data[key];
	        return result === HASH_UNDEFINED$2 ? undefined : result;
	    }
	    return hasOwnProperty$6.call(data, key) ? data[key] : undefined;
	}
	var _hashGet = hashGet$1;

	var nativeCreate$1 = _nativeCreate;
	/** Used for built-in method references. */ var objectProto$7 = Object.prototype;
	/** Used to check objects for own properties. */ var hasOwnProperty$5 = objectProto$7.hasOwnProperty;
	/**
	 * Checks if a hash value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Hash
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */ function hashHas$1(key) {
	    var data = this.__data__;
	    return nativeCreate$1 ? data[key] !== undefined : hasOwnProperty$5.call(data, key);
	}
	var _hashHas = hashHas$1;

	var nativeCreate = _nativeCreate;
	/** Used to stand-in for `undefined` hash values. */ var HASH_UNDEFINED$1 = '__lodash_hash_undefined__';
	/**
	 * Sets the hash `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Hash
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the hash instance.
	 */ function hashSet$1(key, value) {
	    var data = this.__data__;
	    this.size += this.has(key) ? 0 : 1;
	    data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED$1 : value;
	    return this;
	}
	var _hashSet = hashSet$1;

	var hashClear = _hashClear, hashDelete = _hashDelete, hashGet = _hashGet, hashHas = _hashHas, hashSet = _hashSet;
	/**
	 * Creates a hash object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */ function Hash$1(entries) {
	    var index = -1, length = entries == null ? 0 : entries.length;
	    this.clear();
	    while(++index < length){
	        var entry = entries[index];
	        this.set(entry[0], entry[1]);
	    }
	}
	// Add methods to `Hash`.
	Hash$1.prototype.clear = hashClear;
	Hash$1.prototype['delete'] = hashDelete;
	Hash$1.prototype.get = hashGet;
	Hash$1.prototype.has = hashHas;
	Hash$1.prototype.set = hashSet;
	var _Hash = Hash$1;

	var Hash = _Hash, ListCache$2 = _ListCache, Map$3 = _Map;
	/**
	 * Removes all key-value entries from the map.
	 *
	 * @private
	 * @name clear
	 * @memberOf MapCache
	 */ function mapCacheClear$1() {
	    this.size = 0;
	    this.__data__ = {
	        'hash': new Hash,
	        'map': new (Map$3 || ListCache$2),
	        'string': new Hash
	    };
	}
	var _mapCacheClear = mapCacheClear$1;

	/**
	 * Checks if `value` is suitable for use as unique object key.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	 */ function isKeyable$1(value) {
	    var type = typeof value;
	    return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
	}
	var _isKeyable = isKeyable$1;

	var isKeyable = _isKeyable;
	/**
	 * Gets the data for `map`.
	 *
	 * @private
	 * @param {Object} map The map to query.
	 * @param {string} key The reference key.
	 * @returns {*} Returns the map data.
	 */ function getMapData$4(map, key) {
	    var data = map.__data__;
	    return isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
	}
	var _getMapData = getMapData$4;

	var getMapData$3 = _getMapData;
	/**
	 * Removes `key` and its value from the map.
	 *
	 * @private
	 * @name delete
	 * @memberOf MapCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */ function mapCacheDelete$1(key) {
	    var result = getMapData$3(this, key)['delete'](key);
	    this.size -= result ? 1 : 0;
	    return result;
	}
	var _mapCacheDelete = mapCacheDelete$1;

	var getMapData$2 = _getMapData;
	/**
	 * Gets the map value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf MapCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */ function mapCacheGet$1(key) {
	    return getMapData$2(this, key).get(key);
	}
	var _mapCacheGet = mapCacheGet$1;

	var getMapData$1 = _getMapData;
	/**
	 * Checks if a map value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf MapCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */ function mapCacheHas$1(key) {
	    return getMapData$1(this, key).has(key);
	}
	var _mapCacheHas = mapCacheHas$1;

	var getMapData = _getMapData;
	/**
	 * Sets the map `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf MapCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the map cache instance.
	 */ function mapCacheSet$1(key, value) {
	    var data = getMapData(this, key), size = data.size;
	    data.set(key, value);
	    this.size += data.size == size ? 0 : 1;
	    return this;
	}
	var _mapCacheSet = mapCacheSet$1;

	var mapCacheClear = _mapCacheClear, mapCacheDelete = _mapCacheDelete, mapCacheGet = _mapCacheGet, mapCacheHas = _mapCacheHas, mapCacheSet = _mapCacheSet;
	/**
	 * Creates a map cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */ function MapCache$2(entries) {
	    var index = -1, length = entries == null ? 0 : entries.length;
	    this.clear();
	    while(++index < length){
	        var entry = entries[index];
	        this.set(entry[0], entry[1]);
	    }
	}
	// Add methods to `MapCache`.
	MapCache$2.prototype.clear = mapCacheClear;
	MapCache$2.prototype['delete'] = mapCacheDelete;
	MapCache$2.prototype.get = mapCacheGet;
	MapCache$2.prototype.has = mapCacheHas;
	MapCache$2.prototype.set = mapCacheSet;
	var _MapCache = MapCache$2;

	var ListCache$1 = _ListCache, Map$2 = _Map, MapCache$1 = _MapCache;
	/** Used as the size to enable large array optimizations. */ var LARGE_ARRAY_SIZE = 200;
	/**
	 * Sets the stack `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Stack
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the stack cache instance.
	 */ function stackSet$1(key, value) {
	    var data = this.__data__;
	    if (data instanceof ListCache$1) {
	        var pairs = data.__data__;
	        if (!Map$2 || pairs.length < LARGE_ARRAY_SIZE - 1) {
	            pairs.push([
	                key,
	                value
	            ]);
	            this.size = ++data.size;
	            return this;
	        }
	        data = this.__data__ = new MapCache$1(pairs);
	    }
	    data.set(key, value);
	    this.size = data.size;
	    return this;
	}
	var _stackSet = stackSet$1;

	var ListCache = _ListCache, stackClear = _stackClear, stackDelete = _stackDelete, stackGet = _stackGet, stackHas = _stackHas, stackSet = _stackSet;
	/**
	 * Creates a stack cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */ function Stack$1(entries) {
	    var data = this.__data__ = new ListCache(entries);
	    this.size = data.size;
	}
	// Add methods to `Stack`.
	Stack$1.prototype.clear = stackClear;
	Stack$1.prototype['delete'] = stackDelete;
	Stack$1.prototype.get = stackGet;
	Stack$1.prototype.has = stackHas;
	Stack$1.prototype.set = stackSet;
	var _Stack = Stack$1;

	/** Used to stand-in for `undefined` hash values. */ var HASH_UNDEFINED = '__lodash_hash_undefined__';
	/**
	 * Adds `value` to the array cache.
	 *
	 * @private
	 * @name add
	 * @memberOf SetCache
	 * @alias push
	 * @param {*} value The value to cache.
	 * @returns {Object} Returns the cache instance.
	 */ function setCacheAdd$1(value) {
	    this.__data__.set(value, HASH_UNDEFINED);
	    return this;
	}
	var _setCacheAdd = setCacheAdd$1;

	/**
	 * Checks if `value` is in the array cache.
	 *
	 * @private
	 * @name has
	 * @memberOf SetCache
	 * @param {*} value The value to search for.
	 * @returns {number} Returns `true` if `value` is found, else `false`.
	 */ function setCacheHas$1(value) {
	    return this.__data__.has(value);
	}
	var _setCacheHas = setCacheHas$1;

	var MapCache = _MapCache, setCacheAdd = _setCacheAdd, setCacheHas = _setCacheHas;
	/**
	 *
	 * Creates an array cache object to store unique values.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [values] The values to cache.
	 */ function SetCache$1(values) {
	    var index = -1, length = values == null ? 0 : values.length;
	    this.__data__ = new MapCache;
	    while(++index < length){
	        this.add(values[index]);
	    }
	}
	// Add methods to `SetCache`.
	SetCache$1.prototype.add = SetCache$1.prototype.push = setCacheAdd;
	SetCache$1.prototype.has = setCacheHas;
	var _SetCache = SetCache$1;

	/**
	 * A specialized version of `_.some` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {boolean} Returns `true` if any element passes the predicate check,
	 *  else `false`.
	 */ function arraySome$1(array, predicate) {
	    var index = -1, length = array == null ? 0 : array.length;
	    while(++index < length){
	        if (predicate(array[index], index, array)) {
	            return true;
	        }
	    }
	    return false;
	}
	var _arraySome = arraySome$1;

	/**
	 * Checks if a `cache` value for `key` exists.
	 *
	 * @private
	 * @param {Object} cache The cache to query.
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */ function cacheHas$1(cache, key) {
	    return cache.has(key);
	}
	var _cacheHas = cacheHas$1;

	var SetCache = _SetCache, arraySome = _arraySome, cacheHas = _cacheHas;
	/** Used to compose bitmasks for value comparisons. */ var COMPARE_PARTIAL_FLAG$3 = 1, COMPARE_UNORDERED_FLAG$1 = 2;
	/**
	 * A specialized version of `baseIsEqualDeep` for arrays with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Array} array The array to compare.
	 * @param {Array} other The other array to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} stack Tracks traversed `array` and `other` objects.
	 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
	 */ function equalArrays$2(array, other, bitmask, customizer, equalFunc, stack) {
	    var isPartial = bitmask & COMPARE_PARTIAL_FLAG$3, arrLength = array.length, othLength = other.length;
	    if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
	        return false;
	    }
	    // Check that cyclic values are equal.
	    var arrStacked = stack.get(array);
	    var othStacked = stack.get(other);
	    if (arrStacked && othStacked) {
	        return arrStacked == other && othStacked == array;
	    }
	    var index = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG$1 ? new SetCache : undefined;
	    stack.set(array, other);
	    stack.set(other, array);
	    // Ignore non-index properties.
	    while(++index < arrLength){
	        var arrValue = array[index], othValue = other[index];
	        if (customizer) {
	            var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
	        }
	        if (compared !== undefined) {
	            if (compared) {
	                continue;
	            }
	            result = false;
	            break;
	        }
	        // Recursively compare arrays (susceptible to call stack limits).
	        if (seen) {
	            if (!arraySome(other, function(othValue, othIndex) {
	                if (!cacheHas(seen, othIndex) && (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
	                    return seen.push(othIndex);
	                }
	            })) {
	                result = false;
	                break;
	            }
	        } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
	            result = false;
	            break;
	        }
	    }
	    stack['delete'](array);
	    stack['delete'](other);
	    return result;
	}
	var _equalArrays = equalArrays$2;

	var root$4 = _root;
	/** Built-in value references. */ var Uint8Array$2 = root$4.Uint8Array;
	var _Uint8Array = Uint8Array$2;

	/**
	 * Converts `map` to its key-value pairs.
	 *
	 * @private
	 * @param {Object} map The map to convert.
	 * @returns {Array} Returns the key-value pairs.
	 */ function mapToArray$1(map) {
	    var index = -1, result = Array(map.size);
	    map.forEach(function(value, key) {
	        result[++index] = [
	            key,
	            value
	        ];
	    });
	    return result;
	}
	var _mapToArray = mapToArray$1;

	/**
	 * Converts `set` to an array of its values.
	 *
	 * @private
	 * @param {Object} set The set to convert.
	 * @returns {Array} Returns the values.
	 */ function setToArray$1(set) {
	    var index = -1, result = Array(set.size);
	    set.forEach(function(value) {
	        result[++index] = value;
	    });
	    return result;
	}
	var _setToArray = setToArray$1;

	var Symbol$1 = _Symbol, Uint8Array$1 = _Uint8Array, eq = eq_1, equalArrays$1 = _equalArrays, mapToArray = _mapToArray, setToArray = _setToArray;
	/** Used to compose bitmasks for value comparisons. */ var COMPARE_PARTIAL_FLAG$2 = 1, COMPARE_UNORDERED_FLAG = 2;
	/** `Object#toString` result references. */ var boolTag$1 = '[object Boolean]', dateTag$1 = '[object Date]', errorTag$1 = '[object Error]', mapTag$2 = '[object Map]', numberTag$1 = '[object Number]', regexpTag$1 = '[object RegExp]', setTag$2 = '[object Set]', stringTag$1 = '[object String]', symbolTag = '[object Symbol]';
	var arrayBufferTag$1 = '[object ArrayBuffer]', dataViewTag$2 = '[object DataView]';
	/** Used to convert symbols to primitives and strings. */ var symbolProto = Symbol$1 ? Symbol$1.prototype : undefined, symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;
	/**
	 * A specialized version of `baseIsEqualDeep` for comparing objects of
	 * the same `toStringTag`.
	 *
	 * **Note:** This function only supports comparing values with tags of
	 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {string} tag The `toStringTag` of the objects to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} stack Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */ function equalByTag$1(object, other, tag, bitmask, customizer, equalFunc, stack) {
	    switch(tag){
	        case dataViewTag$2:
	            if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
	                return false;
	            }
	            object = object.buffer;
	            other = other.buffer;
	        case arrayBufferTag$1:
	            if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array$1(object), new Uint8Array$1(other))) {
	                return false;
	            }
	            return true;
	        case boolTag$1:
	        case dateTag$1:
	        case numberTag$1:
	            // Coerce booleans to `1` or `0` and dates to milliseconds.
	            // Invalid dates are coerced to `NaN`.
	            return eq(+object, +other);
	        case errorTag$1:
	            return object.name == other.name && object.message == other.message;
	        case regexpTag$1:
	        case stringTag$1:
	            // Coerce regexes to strings and treat strings, primitives and objects,
	            // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
	            // for more details.
	            return object == other + '';
	        case mapTag$2:
	            var convert = mapToArray;
	        case setTag$2:
	            var isPartial = bitmask & COMPARE_PARTIAL_FLAG$2;
	            convert || (convert = setToArray);
	            if (object.size != other.size && !isPartial) {
	                return false;
	            }
	            // Assume cyclic values are equal.
	            var stacked = stack.get(object);
	            if (stacked) {
	                return stacked == other;
	            }
	            bitmask |= COMPARE_UNORDERED_FLAG;
	            // Recursively compare objects (susceptible to call stack limits).
	            stack.set(object, other);
	            var result = equalArrays$1(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
	            stack['delete'](object);
	            return result;
	        case symbolTag:
	            if (symbolValueOf) {
	                return symbolValueOf.call(object) == symbolValueOf.call(other);
	            }
	    }
	    return false;
	}
	var _equalByTag = equalByTag$1;

	/**
	 * Appends the elements of `values` to `array`.
	 *
	 * @private
	 * @param {Array} array The array to modify.
	 * @param {Array} values The values to append.
	 * @returns {Array} Returns `array`.
	 */ function arrayPush$1(array, values) {
	    var index = -1, length = values.length, offset = array.length;
	    while(++index < length){
	        array[offset + index] = values[index];
	    }
	    return array;
	}
	var _arrayPush = arrayPush$1;

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */ var isArray$3 = Array.isArray;
	var isArray_1 = isArray$3;

	var arrayPush = _arrayPush, isArray$2 = isArray_1;
	/**
	 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
	 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
	 * symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @param {Function} symbolsFunc The function to get the symbols of `object`.
	 * @returns {Array} Returns the array of property names and symbols.
	 */ function baseGetAllKeys$1(object, keysFunc, symbolsFunc) {
	    var result = keysFunc(object);
	    return isArray$2(object) ? result : arrayPush(result, symbolsFunc(object));
	}
	var _baseGetAllKeys = baseGetAllKeys$1;

	/**
	 * A specialized version of `_.filter` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {Array} Returns the new filtered array.
	 */ function arrayFilter$1(array, predicate) {
	    var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
	    while(++index < length){
	        var value = array[index];
	        if (predicate(value, index, array)) {
	            result[resIndex++] = value;
	        }
	    }
	    return result;
	}
	var _arrayFilter = arrayFilter$1;

	/**
	 * This method returns a new empty array.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {Array} Returns the new empty array.
	 * @example
	 *
	 * var arrays = _.times(2, _.stubArray);
	 *
	 * console.log(arrays);
	 * // => [[], []]
	 *
	 * console.log(arrays[0] === arrays[1]);
	 * // => false
	 */ function stubArray$1() {
	    return [];
	}
	var stubArray_1 = stubArray$1;

	var arrayFilter = _arrayFilter, stubArray = stubArray_1;
	/** Used for built-in method references. */ var objectProto$6 = Object.prototype;
	/** Built-in value references. */ var propertyIsEnumerable$1 = objectProto$6.propertyIsEnumerable;
	/* Built-in method references for those with the same name as other `lodash` methods. */ var nativeGetSymbols = Object.getOwnPropertySymbols;
	/**
	 * Creates an array of the own enumerable symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of symbols.
	 */ var getSymbols$1 = !nativeGetSymbols ? stubArray : function(object) {
	    if (object == null) {
	        return [];
	    }
	    object = Object(object);
	    return arrayFilter(nativeGetSymbols(object), function(symbol) {
	        return propertyIsEnumerable$1.call(object, symbol);
	    });
	};
	var _getSymbols = getSymbols$1;

	/**
	 * The base implementation of `_.times` without support for iteratee shorthands
	 * or max array length checks.
	 *
	 * @private
	 * @param {number} n The number of times to invoke `iteratee`.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the array of results.
	 */ function baseTimes$1(n, iteratee) {
	    var index = -1, result = Array(n);
	    while(++index < n){
	        result[index] = iteratee(index);
	    }
	    return result;
	}
	var _baseTimes = baseTimes$1;

	var baseGetTag$2 = _baseGetTag, isObjectLike$3 = isObjectLike_1;
	/** `Object#toString` result references. */ var argsTag$2 = '[object Arguments]';
	/**
	 * The base implementation of `_.isArguments`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 */ function baseIsArguments$1(value) {
	    return isObjectLike$3(value) && baseGetTag$2(value) == argsTag$2;
	}
	var _baseIsArguments = baseIsArguments$1;

	var baseIsArguments = _baseIsArguments, isObjectLike$2 = isObjectLike_1;
	/** Used for built-in method references. */ var objectProto$5 = Object.prototype;
	/** Used to check objects for own properties. */ var hasOwnProperty$4 = objectProto$5.hasOwnProperty;
	/** Built-in value references. */ var propertyIsEnumerable = objectProto$5.propertyIsEnumerable;
	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */ var isArguments$1 = baseIsArguments(function() {
	    return arguments;
	}()) ? baseIsArguments : function(value) {
	    return isObjectLike$2(value) && hasOwnProperty$4.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
	};
	var isArguments_1 = isArguments$1;

	var isBuffer$2 = {exports: {}};

	/**
	 * This method returns `false`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {boolean} Returns `false`.
	 * @example
	 *
	 * _.times(2, _.stubFalse);
	 * // => [false, false]
	 */ function stubFalse() {
	    return false;
	}
	var stubFalse_1 = stubFalse;

	(function(module, exports) {
	    var root = _root, stubFalse = stubFalse_1;
	    /** Detect free variable `exports`. */ var freeExports = exports && !exports.nodeType && exports;
	    /** Detect free variable `module`. */ var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;
	    /** Detect the popular CommonJS extension `module.exports`. */ var moduleExports = freeModule && freeModule.exports === freeExports;
	    /** Built-in value references. */ var Buffer = moduleExports ? root.Buffer : undefined;
	    /* Built-in method references for those with the same name as other `lodash` methods. */ var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;
	    /**
	 * Checks if `value` is a buffer.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.3.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
	 * @example
	 *
	 * _.isBuffer(new Buffer(2));
	 * // => true
	 *
	 * _.isBuffer(new Uint8Array(2));
	 * // => false
	 */ var isBuffer = nativeIsBuffer || stubFalse;
	    module.exports = isBuffer;
	})(isBuffer$2, isBuffer$2.exports);

	/** Used as references for various `Number` constants. */ var MAX_SAFE_INTEGER$1 = 9007199254740991;
	/** Used to detect unsigned integer values. */ var reIsUint = /^(?:0|[1-9]\d*)$/;
	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */ function isIndex$1(value, length) {
	    var type = typeof value;
	    length = length == null ? MAX_SAFE_INTEGER$1 : length;
	    return !!length && (type == 'number' || type != 'symbol' && reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
	}
	var _isIndex = isIndex$1;

	/** Used as references for various `Number` constants. */ var MAX_SAFE_INTEGER = 9007199254740991;
	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */ function isLength$2(value) {
	    return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}
	var isLength_1 = isLength$2;

	var baseGetTag$1 = _baseGetTag, isLength$1 = isLength_1, isObjectLike$1 = isObjectLike_1;
	/** `Object#toString` result references. */ var argsTag$1 = '[object Arguments]', arrayTag$1 = '[object Array]', boolTag = '[object Boolean]', dateTag = '[object Date]', errorTag = '[object Error]', funcTag = '[object Function]', mapTag$1 = '[object Map]', numberTag = '[object Number]', objectTag$2 = '[object Object]', regexpTag = '[object RegExp]', setTag$1 = '[object Set]', stringTag = '[object String]', weakMapTag$1 = '[object WeakMap]';
	var arrayBufferTag = '[object ArrayBuffer]', dataViewTag$1 = '[object DataView]', float32Tag = '[object Float32Array]', float64Tag = '[object Float64Array]', int8Tag = '[object Int8Array]', int16Tag = '[object Int16Array]', int32Tag = '[object Int32Array]', uint8Tag = '[object Uint8Array]', uint8ClampedTag = '[object Uint8ClampedArray]', uint16Tag = '[object Uint16Array]', uint32Tag = '[object Uint32Array]';
	/** Used to identify `toStringTag` values of typed arrays. */ var typedArrayTags = {};
	typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
	typedArrayTags[argsTag$1] = typedArrayTags[arrayTag$1] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag$1] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag$1] = typedArrayTags[numberTag] = typedArrayTags[objectTag$2] = typedArrayTags[regexpTag] = typedArrayTags[setTag$1] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag$1] = false;
	/**
	 * The base implementation of `_.isTypedArray` without Node.js optimizations.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 */ function baseIsTypedArray$1(value) {
	    return isObjectLike$1(value) && isLength$1(value.length) && !!typedArrayTags[baseGetTag$1(value)];
	}
	var _baseIsTypedArray = baseIsTypedArray$1;

	/**
	 * The base implementation of `_.unary` without support for storing metadata.
	 *
	 * @private
	 * @param {Function} func The function to cap arguments for.
	 * @returns {Function} Returns the new capped function.
	 */ function baseUnary$1(func) {
	    return function(value) {
	        return func(value);
	    };
	}
	var _baseUnary = baseUnary$1;

	var _nodeUtil = {exports: {}};

	(function(module, exports) {
	    var freeGlobal = _freeGlobal;
	    /** Detect free variable `exports`. */ var freeExports = exports && !exports.nodeType && exports;
	    /** Detect free variable `module`. */ var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;
	    /** Detect the popular CommonJS extension `module.exports`. */ var moduleExports = freeModule && freeModule.exports === freeExports;
	    /** Detect free variable `process` from Node.js. */ var freeProcess = moduleExports && freeGlobal.process;
	    /** Used to access faster Node.js helpers. */ var nodeUtil = function() {
	        try {
	            // Use `util.types` for Node.js 10+.
	            var types = freeModule && freeModule.require && freeModule.require('util').types;
	            if (types) {
	                return types;
	            }
	            // Legacy `process.binding('util')` for Node.js < 10.
	            return freeProcess && freeProcess.binding && freeProcess.binding('util');
	        } catch (e) {}
	    }();
	    module.exports = nodeUtil;
	})(_nodeUtil, _nodeUtil.exports);

	var baseIsTypedArray = _baseIsTypedArray, baseUnary = _baseUnary, nodeUtil = _nodeUtil.exports;
	/* Node.js helper references. */ var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
	/**
	 * Checks if `value` is classified as a typed array.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 * @example
	 *
	 * _.isTypedArray(new Uint8Array);
	 * // => true
	 *
	 * _.isTypedArray([]);
	 * // => false
	 */ var isTypedArray$2 = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
	var isTypedArray_1 = isTypedArray$2;

	var baseTimes = _baseTimes, isArguments = isArguments_1, isArray$1 = isArray_1, isBuffer$1 = isBuffer$2.exports, isIndex = _isIndex, isTypedArray$1 = isTypedArray_1;
	/** Used for built-in method references. */ var objectProto$4 = Object.prototype;
	/** Used to check objects for own properties. */ var hasOwnProperty$3 = objectProto$4.hasOwnProperty;
	/**
	 * Creates an array of the enumerable property names of the array-like `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @param {boolean} inherited Specify returning inherited property names.
	 * @returns {Array} Returns the array of property names.
	 */ function arrayLikeKeys$1(value, inherited) {
	    var isArr = isArray$1(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer$1(value), isType = !isArr && !isArg && !isBuff && isTypedArray$1(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
	    for(var key in value){
	        if ((inherited || hasOwnProperty$3.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
	        (key == 'length' || // Node.js 0.10 has enumerable non-index properties on buffers.
	        isBuff && (key == 'offset' || key == 'parent') || // PhantomJS 2 has enumerable non-index properties on typed arrays.
	        isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset') || // Skip index properties.
	        isIndex(key, length)))) {
	            result.push(key);
	        }
	    }
	    return result;
	}
	var _arrayLikeKeys = arrayLikeKeys$1;

	/** Used for built-in method references. */ var objectProto$3 = Object.prototype;
	/**
	 * Checks if `value` is likely a prototype object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	 */ function isPrototype$1(value) {
	    var Ctor = value && value.constructor, proto = typeof Ctor == 'function' && Ctor.prototype || objectProto$3;
	    return value === proto;
	}
	var _isPrototype = isPrototype$1;

	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */ function overArg$1(func, transform) {
	    return function(arg) {
	        return func(transform(arg));
	    };
	}
	var _overArg = overArg$1;

	var overArg = _overArg;
	/* Built-in method references for those with the same name as other `lodash` methods. */ var nativeKeys$1 = overArg(Object.keys, Object);
	var _nativeKeys = nativeKeys$1;

	var isPrototype = _isPrototype, nativeKeys = _nativeKeys;
	/** Used for built-in method references. */ var objectProto$2 = Object.prototype;
	/** Used to check objects for own properties. */ var hasOwnProperty$2 = objectProto$2.hasOwnProperty;
	/**
	 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */ function baseKeys$1(object) {
	    if (!isPrototype(object)) {
	        return nativeKeys(object);
	    }
	    var result = [];
	    for(var key in Object(object)){
	        if (hasOwnProperty$2.call(object, key) && key != 'constructor') {
	            result.push(key);
	        }
	    }
	    return result;
	}
	var _baseKeys = baseKeys$1;

	var isFunction = isFunction_1, isLength = isLength_1;
	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */ function isArrayLike$1(value) {
	    return value != null && isLength(value.length) && !isFunction(value);
	}
	var isArrayLike_1 = isArrayLike$1;

	var arrayLikeKeys = _arrayLikeKeys, baseKeys = _baseKeys, isArrayLike = isArrayLike_1;
	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */ function keys$1(object) {
	    return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
	}
	var keys_1 = keys$1;

	var baseGetAllKeys = _baseGetAllKeys, getSymbols = _getSymbols, keys = keys_1;
	/**
	 * Creates an array of own enumerable property names and symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names and symbols.
	 */ function getAllKeys$1(object) {
	    return baseGetAllKeys(object, keys, getSymbols);
	}
	var _getAllKeys = getAllKeys$1;

	var getAllKeys = _getAllKeys;
	/** Used to compose bitmasks for value comparisons. */ var COMPARE_PARTIAL_FLAG$1 = 1;
	/** Used for built-in method references. */ var objectProto$1 = Object.prototype;
	/** Used to check objects for own properties. */ var hasOwnProperty$1 = objectProto$1.hasOwnProperty;
	/**
	 * A specialized version of `baseIsEqualDeep` for objects with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} stack Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */ function equalObjects$1(object, other, bitmask, customizer, equalFunc, stack) {
	    var isPartial = bitmask & COMPARE_PARTIAL_FLAG$1, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
	    if (objLength != othLength && !isPartial) {
	        return false;
	    }
	    var index = objLength;
	    while(index--){
	        var key = objProps[index];
	        if (!(isPartial ? key in other : hasOwnProperty$1.call(other, key))) {
	            return false;
	        }
	    }
	    // Check that cyclic values are equal.
	    var objStacked = stack.get(object);
	    var othStacked = stack.get(other);
	    if (objStacked && othStacked) {
	        return objStacked == other && othStacked == object;
	    }
	    var result = true;
	    stack.set(object, other);
	    stack.set(other, object);
	    var skipCtor = isPartial;
	    while(++index < objLength){
	        key = objProps[index];
	        var objValue = object[key], othValue = other[key];
	        if (customizer) {
	            var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
	        }
	        // Recursively compare objects (susceptible to call stack limits).
	        if (!(compared === undefined ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
	            result = false;
	            break;
	        }
	        skipCtor || (skipCtor = key == 'constructor');
	    }
	    if (result && !skipCtor) {
	        var objCtor = object.constructor, othCtor = other.constructor;
	        // Non `Object` object instances with different constructors are not equal.
	        if (objCtor != othCtor && 'constructor' in object && 'constructor' in other && !(typeof objCtor == 'function' && objCtor instanceof objCtor && typeof othCtor == 'function' && othCtor instanceof othCtor)) {
	            result = false;
	        }
	    }
	    stack['delete'](object);
	    stack['delete'](other);
	    return result;
	}
	var _equalObjects = equalObjects$1;

	var getNative$3 = _getNative, root$3 = _root;
	/* Built-in method references that are verified to be native. */ var DataView$1 = getNative$3(root$3, 'DataView');
	var _DataView = DataView$1;

	var getNative$2 = _getNative, root$2 = _root;
	/* Built-in method references that are verified to be native. */ var Promise$2 = getNative$2(root$2, 'Promise');
	var _Promise = Promise$2;

	var getNative$1 = _getNative, root$1 = _root;
	/* Built-in method references that are verified to be native. */ var Set$2 = getNative$1(root$1, 'Set');
	var _Set = Set$2;

	var getNative = _getNative, root = _root;
	/* Built-in method references that are verified to be native. */ var WeakMap$2 = getNative(root, 'WeakMap');
	var _WeakMap = WeakMap$2;

	var DataView = _DataView, Map$1 = _Map, Promise$1 = _Promise, Set$1 = _Set, WeakMap$1 = _WeakMap, baseGetTag = _baseGetTag, toSource = _toSource;
	/** `Object#toString` result references. */ var mapTag = '[object Map]', objectTag$1 = '[object Object]', promiseTag = '[object Promise]', setTag = '[object Set]', weakMapTag = '[object WeakMap]';
	var dataViewTag = '[object DataView]';
	/** Used to detect maps, sets, and weakmaps. */ var dataViewCtorString = toSource(DataView), mapCtorString = toSource(Map$1), promiseCtorString = toSource(Promise$1), setCtorString = toSource(Set$1), weakMapCtorString = toSource(WeakMap$1);
	/**
	 * Gets the `toStringTag` of `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */ var getTag$1 = baseGetTag;
	// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
	if (DataView && getTag$1(new DataView(new ArrayBuffer(1))) != dataViewTag || Map$1 && getTag$1(new Map$1) != mapTag || Promise$1 && getTag$1(Promise$1.resolve()) != promiseTag || Set$1 && getTag$1(new Set$1) != setTag || WeakMap$1 && getTag$1(new WeakMap$1) != weakMapTag) {
	    getTag$1 = function(value) {
	        var result = baseGetTag(value), Ctor = result == objectTag$1 ? value.constructor : undefined, ctorString = Ctor ? toSource(Ctor) : '';
	        if (ctorString) {
	            switch(ctorString){
	                case dataViewCtorString:
	                    return dataViewTag;
	                case mapCtorString:
	                    return mapTag;
	                case promiseCtorString:
	                    return promiseTag;
	                case setCtorString:
	                    return setTag;
	                case weakMapCtorString:
	                    return weakMapTag;
	            }
	        }
	        return result;
	    };
	}
	var _getTag = getTag$1;

	var Stack = _Stack, equalArrays = _equalArrays, equalByTag = _equalByTag, equalObjects = _equalObjects, getTag = _getTag, isArray = isArray_1, isBuffer = isBuffer$2.exports, isTypedArray = isTypedArray_1;
	/** Used to compose bitmasks for value comparisons. */ var COMPARE_PARTIAL_FLAG = 1;
	/** `Object#toString` result references. */ var argsTag = '[object Arguments]', arrayTag = '[object Array]', objectTag = '[object Object]';
	/** Used for built-in method references. */ var objectProto = Object.prototype;
	/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
	/**
	 * A specialized version of `baseIsEqual` for arrays and objects which performs
	 * deep comparisons and tracks traversed objects enabling objects with circular
	 * references to be compared.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */ function baseIsEqualDeep$1(object, other, bitmask, customizer, equalFunc, stack) {
	    var objIsArr = isArray(object), othIsArr = isArray(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
	    objTag = objTag == argsTag ? objectTag : objTag;
	    othTag = othTag == argsTag ? objectTag : othTag;
	    var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
	    if (isSameTag && isBuffer(object)) {
	        if (!isBuffer(other)) {
	            return false;
	        }
	        objIsArr = true;
	        objIsObj = false;
	    }
	    if (isSameTag && !objIsObj) {
	        stack || (stack = new Stack);
	        return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
	    }
	    if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
	        var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'), othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');
	        if (objIsWrapped || othIsWrapped) {
	            var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
	            stack || (stack = new Stack);
	            return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
	        }
	    }
	    if (!isSameTag) {
	        return false;
	    }
	    stack || (stack = new Stack);
	    return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
	}
	var _baseIsEqualDeep = baseIsEqualDeep$1;

	var baseIsEqualDeep = _baseIsEqualDeep, isObjectLike = isObjectLike_1;
	/**
	 * The base implementation of `_.isEqual` which supports partial comparisons
	 * and tracks traversed objects.
	 *
	 * @private
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @param {boolean} bitmask The bitmask flags.
	 *  1 - Unordered comparison
	 *  2 - Partial comparison
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 */ function baseIsEqual$1(value, other, bitmask, customizer, stack) {
	    if (value === other) {
	        return true;
	    }
	    if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
	        return value !== value && other !== other;
	    }
	    return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual$1, stack);
	}
	var _baseIsEqual = baseIsEqual$1;

	var baseIsEqual = _baseIsEqual;
	/**
	 * This method is like `_.isEqual` except that it accepts `customizer` which
	 * is invoked to compare values. If `customizer` returns `undefined`, comparisons
	 * are handled by the method instead. The `customizer` is invoked with up to
	 * six arguments: (objValue, othValue [, index|key, object, other, stack]).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * function isGreeting(value) {
	 *   return /^h(?:i|ello)$/.test(value);
	 * }
	 *
	 * function customizer(objValue, othValue) {
	 *   if (isGreeting(objValue) && isGreeting(othValue)) {
	 *     return true;
	 *   }
	 * }
	 *
	 * var array = ['hello', 'goodbye'];
	 * var other = ['hi', 'goodbye'];
	 *
	 * _.isEqualWith(array, other, customizer);
	 * // => true
	 */ function isEqualWith(value, other, customizer) {
	    customizer = typeof customizer == 'function' ? customizer : undefined;
	    var result = customizer ? customizer(value, other) : undefined;
	    return result === undefined ? baseIsEqual(value, other, undefined, customizer) : !!result;
	}
	var isEqualWith_1 = isEqualWith;

	const isEqual = (a, b, options)=>{
	    if (options.ignoreCase) {
	        return typeof a === 'string' && typeof b === 'string' && a.toLowerCase() === b.toLowerCase();
	    }
	    if (typeof a === 'symbol' && typeof b === 'symbol') {
	        return a.toString() === b.toString();
	    }
	    if (options.recursiveEqual) {
	        return isEqualWith_1(a, b, (a, b)=>options.ignoreCase ? typeof a === 'string' && typeof b === 'string' ? a.toLowerCase() === b.toLowerCase() : undefined : undefined);
	    }
	    return a === b;
	};

	const shallowSimilarity = (left, right)=>{
	    if (left === right) {
	        return 1;
	    }
	    if (left === null || right === null) {
	        return 0;
	    }
	    if (typeof left !== 'object' || typeof right !== 'object') {
	        return 0;
	    }
	    let intersection = 0;
	    for(const key in left){
	        if (Object.prototype.hasOwnProperty.call(left, key) && Object.prototype.hasOwnProperty.call(right, key) && left[key] === right[key]) {
	            intersection++;
	        }
	    }
	    return Math.max(intersection / Object.keys(left).length, intersection / Object.keys(right).length);
	};

	// Shared utility for array diff
	const addArrayOpeningBrackets = (linesLeft, linesRight, keyLeft, keyRight, level)=>{
	    if (keyLeft && keyRight) {
	        linesLeft.push({
	            level,
	            type: 'equal',
	            text: `"${keyLeft}": [`
	        });
	        linesRight.push({
	            level,
	            type: 'equal',
	            text: `"${keyRight}": [`
	        });
	    } else {
	        linesLeft.push({
	            level,
	            type: 'equal',
	            text: '['
	        });
	        linesRight.push({
	            level,
	            type: 'equal',
	            text: '['
	        });
	    }
	};
	const addArrayClosingBrackets = (linesLeft, linesRight, level)=>{
	    linesLeft.push({
	        level,
	        type: 'equal',
	        text: ']'
	    });
	    linesRight.push({
	        level,
	        type: 'equal',
	        text: ']'
	    });
	};
	const addMaxDepthPlaceholder = (linesLeft, linesRight, level)=>{
	    linesLeft.push({
	        level: level + 1,
	        type: 'equal',
	        text: '...'
	    });
	    linesRight.push({
	        level: level + 1,
	        type: 'equal',
	        text: '...'
	    });
	};

	const lcs$1 = (arrLeft, arrRight, keyLeft, keyRight, level, options)=>{
	    const f = Array(arrLeft.length + 1).fill(0).map(()=>Array(arrRight.length + 1).fill(0));
	    const backtrack = Array(arrLeft.length + 1).fill(0).map(()=>Array(arrRight.length + 1).fill(0));
	    for(let i = 1; i <= arrLeft.length; i++){
	        backtrack[i][0] = 'up';
	    }
	    for(let j = 1; j <= arrRight.length; j++){
	        backtrack[0][j] = 'left';
	    }
	    for(let i = 1; i <= arrLeft.length; i++){
	        for(let j = 1; j <= arrRight.length; j++){
	            const typeI = getType(arrLeft[i - 1]);
	            const typeJ = getType(arrRight[j - 1]);
	            if (typeI === typeJ && (typeI === 'array' || typeI === 'object')) {
	                if (options.recursiveEqual) {
	                    if (isEqual(arrLeft[i - 1], arrRight[j - 1], options) || shallowSimilarity(arrLeft[i - 1], arrRight[j - 1]) > 0.5) {
	                        f[i][j] = f[i - 1][j - 1] + 1;
	                        backtrack[i][j] = 'diag';
	                    } else if (f[i - 1][j] >= f[i][j - 1]) {
	                        f[i][j] = f[i - 1][j];
	                        backtrack[i][j] = 'up';
	                    } else {
	                        f[i][j] = f[i][j - 1];
	                        backtrack[i][j] = 'left';
	                    }
	                } else {
	                    // this is a diff-specific logic, when 2 values are both arrays or both objects, the
	                    // algorithm should assume they are equal in order to diff recursively later
	                    f[i][j] = f[i - 1][j - 1] + 1;
	                    backtrack[i][j] = 'diag';
	                }
	            } else if (isEqual(arrLeft[i - 1], arrRight[j - 1], options)) {
	                f[i][j] = f[i - 1][j - 1] + 1;
	                backtrack[i][j] = 'diag';
	            } else if (f[i - 1][j] >= f[i][j - 1]) {
	                f[i][j] = f[i - 1][j];
	                backtrack[i][j] = 'up';
	            } else {
	                f[i][j] = f[i][j - 1];
	                backtrack[i][j] = 'left';
	            }
	        }
	    }
	    let i = arrLeft.length;
	    let j = arrRight.length;
	    let tLeft = [];
	    let tRight = [];
	    // this is a backtracking process, all new lines should be unshifted to the result, not
	    // pushed to the result
	    while(i > 0 || j > 0){
	        if (backtrack[i][j] === 'diag') {
	            const type = getType(arrLeft[i - 1]);
	            if (options.recursiveEqual && (type === 'array' || type === 'object') && isEqual(arrLeft[i - 1], arrRight[j - 1], options)) {
	                const reversedLeft = [];
	                const reversedRight = [];
	                prettyAppendLines(reversedLeft, reversedRight, '', '', arrLeft[i - 1], arrRight[j - 1], level + 1, options);
	                tLeft = concat(tLeft, reversedLeft.reverse(), true);
	                tRight = concat(tRight, reversedRight.reverse(), true);
	            } else if (type === 'array') {
	                const [l, r] = diffArrayLCS(arrLeft[i - 1], arrRight[j - 1], keyLeft, keyRight, level + 1, options);
	                tLeft = concat(tLeft, l.reverse(), true);
	                tRight = concat(tRight, r.reverse(), true);
	            } else if (type === 'object') {
	                const [l, r] = diffObject(arrLeft[i - 1], arrRight[j - 1], level + 2, options, diffArrayLCS);
	                tLeft.unshift({
	                    level: level + 1,
	                    type: 'equal',
	                    text: '}'
	                });
	                tRight.unshift({
	                    level: level + 1,
	                    type: 'equal',
	                    text: '}'
	                });
	                tLeft = concat(tLeft, l.reverse(), true);
	                tRight = concat(tRight, r.reverse(), true);
	                tLeft.unshift({
	                    level: level + 1,
	                    type: 'equal',
	                    text: '{'
	                });
	                tRight.unshift({
	                    level: level + 1,
	                    type: 'equal',
	                    text: '{'
	                });
	            } else {
	                const reversedLeft = [];
	                const reversedRight = [];
	                prettyAppendLines(reversedLeft, reversedRight, '', '', arrLeft[i - 1], arrRight[j - 1], level + 1, options);
	                tLeft = concat(tLeft, reversedLeft.reverse(), true);
	                tRight = concat(tRight, reversedRight.reverse(), true);
	            }
	            i--;
	            j--;
	        } else if (backtrack[i][j] === 'up') {
	            if (options.showModifications && i > 1 && backtrack[i - 1][j] === 'left') {
	                const typeLeft = getType(arrLeft[i - 1]);
	                const typeRight = getType(arrRight[j - 1]);
	                if (typeLeft === typeRight) {
	                    if (typeLeft === 'array') {
	                        const [l, r] = diffArrayLCS(arrLeft[i - 1], arrRight[j - 1], keyLeft, keyRight, level + 1, options);
	                        tLeft = concat(tLeft, l.reverse(), true);
	                        tRight = concat(tRight, r.reverse(), true);
	                    } else if (typeLeft === 'object') {
	                        const [l, r] = diffObject(arrLeft[i - 1], arrRight[j - 1], level + 2, options, diffArrayLCS);
	                        tLeft.unshift({
	                            level: level + 1,
	                            type: 'equal',
	                            text: '}'
	                        });
	                        tRight.unshift({
	                            level: level + 1,
	                            type: 'equal',
	                            text: '}'
	                        });
	                        tLeft = concat(tLeft, l.reverse(), true);
	                        tRight = concat(tRight, r.reverse(), true);
	                        tLeft.unshift({
	                            level: level + 1,
	                            type: 'equal',
	                            text: '{'
	                        });
	                        tRight.unshift({
	                            level: level + 1,
	                            type: 'equal',
	                            text: '{'
	                        });
	                    } else {
	                        tLeft.unshift({
	                            level: level + 1,
	                            type: 'modify',
	                            text: formatValue(arrLeft[i - 1], undefined, undefined, options.undefinedBehavior)
	                        });
	                        tRight.unshift({
	                            level: level + 1,
	                            type: 'modify',
	                            text: formatValue(arrRight[j - 1], undefined, undefined, options.undefinedBehavior)
	                        });
	                    }
	                } else {
	                    const reversedLeft = [];
	                    const reversedRight = [];
	                    prettyAppendLines(reversedLeft, reversedRight, '', '', arrLeft[i - 1], arrRight[j - 1], level + 1, options);
	                    tLeft = concat(tLeft, reversedLeft.reverse(), true);
	                    tRight = concat(tRight, reversedRight.reverse(), true);
	                }
	                i--;
	                j--;
	            } else {
	                const removedLines = stringify(arrLeft[i - 1], undefined, 1, undefined, options.undefinedBehavior).split('\n');
	                for(let i = removedLines.length - 1; i >= 0; i--){
	                    tLeft.unshift({
	                        level: level + 1 + (removedLines[i].match(/^\s+/)?.[0]?.length || 0),
	                        type: 'remove',
	                        text: removedLines[i].replace(/^\s+/, '').replace(/,$/g, '')
	                    });
	                    tRight.unshift({
	                        level: level + 1,
	                        type: 'equal',
	                        text: ''
	                    });
	                }
	                i--;
	            }
	        } else {
	            const addedLines = stringify(arrRight[j - 1], undefined, 1, undefined, options.undefinedBehavior).split('\n');
	            for(let i = addedLines.length - 1; i >= 0; i--){
	                tLeft.unshift({
	                    level: level + 1,
	                    type: 'equal',
	                    text: ''
	                });
	                tRight.unshift({
	                    level: level + 1 + (addedLines[i].match(/^\s+/)?.[0]?.length || 0),
	                    type: 'add',
	                    text: addedLines[i].replace(/^\s+/, '').replace(/,$/g, '')
	                });
	            }
	            j--;
	        }
	    }
	    return [
	        tLeft,
	        tRight
	    ];
	};
	const diffArrayLCS = (arrLeft, arrRight, keyLeft, keyRight, level, options, linesLeft = [], linesRight = [])=>{
	    addArrayOpeningBrackets(linesLeft, linesRight, keyLeft, keyRight, level);
	    if (level >= (options.maxDepth || Infinity)) {
	        addMaxDepthPlaceholder(linesLeft, linesRight, level);
	    } else {
	        const [tLeftReverse, tRightReverse] = lcs$1(arrLeft, arrRight, keyLeft, keyRight, level, options);
	        linesLeft = concat(linesLeft, tLeftReverse);
	        linesRight = concat(linesRight, tRightReverse);
	    }
	    addArrayClosingBrackets(linesLeft, linesRight, level);
	    return [
	        linesLeft,
	        linesRight
	    ];
	};

	// Recursively checks if all objects (including in nested arrays) have the compare key
	function allObjectsHaveCompareKey(arr, compareKey) {
	    for (const item of arr){
	        const type = getType(item);
	        if (type === 'object') {
	            if (!(compareKey in item)) return false;
	            // Check nested arrays in object values
	            for (const value of Object.values(item)){
	                if (Array.isArray(value) && !allObjectsHaveCompareKey(value, compareKey)) {
	                    return false;
	                }
	            }
	        } else if (Array.isArray(item)) {
	            if (!allObjectsHaveCompareKey(item, compareKey)) return false;
	        }
	    }
	    return true;
	}
	// Recursively diff arrays, using compareKey if all elements have it, otherwise fallback to diffArrayNormal
	function diffArrayRecursive(arrLeft, arrRight, keyLeft, keyRight, level, options, linesLeft = [], linesRight = []) {
	    if (!options.compareKey) {
	        // Fallback to normal diff if no compare key is specified
	        return diffArrayNormal(arrLeft, arrRight, keyLeft, keyRight, level, options, linesLeft, linesRight);
	    }
	    // If arrays are not of objects, or not all objects have the compare key (including nested), fallback to unordered LCS diff
	    const isObjectArray = (arr)=>arr.every((item)=>getType(item) === 'object');
	    if (!isObjectArray(arrLeft) || !isObjectArray(arrRight) || !allObjectsHaveCompareKey(arrLeft, options.compareKey) || !allObjectsHaveCompareKey(arrRight, options.compareKey)) {
	        // Use unordered LCS for arrays of primitives, mixed types, or missing compare key
	        return diffArrayNormal(arrLeft, arrRight, keyLeft, keyRight, level, options, linesLeft, linesRight);
	    }
	    addArrayOpeningBrackets(linesLeft, linesRight, keyLeft, keyRight, level);
	    if (level >= (options.maxDepth || Infinity)) {
	        addMaxDepthPlaceholder(linesLeft, linesRight, level);
	    } else {
	        const leftProcessed = new Set();
	        const rightProcessed = new Set();
	        // First pass: find matching objects by compareKey
	        for(let i = 0; i < arrLeft.length; i++){
	            const leftItem = arrLeft[i];
	            if (leftProcessed.has(i)) continue;
	            // Skip if left item is not an object or doesn't have the compare key
	            if (getType(leftItem) !== 'object' || !(options.compareKey in leftItem)) {
	                continue;
	            }
	            const leftKeyValue = leftItem[options.compareKey];
	            // Find matching item in right array
	            let matchIndex = -1;
	            for(let j = 0; j < arrRight.length; j++){
	                if (rightProcessed.has(j)) continue;
	                const rightItem = arrRight[j];
	                if (getType(rightItem) !== 'object' || !(options.compareKey in rightItem)) {
	                    continue;
	                }
	                const rightKeyValue = rightItem[options.compareKey];
	                // Compare key values
	                if (isEqual(leftKeyValue, rightKeyValue, options)) {
	                    matchIndex = j;
	                    break;
	                }
	            }
	            if (matchIndex !== -1) {
	                // Found a match, compare the objects
	                const rightItem = arrRight[matchIndex];
	                const leftType = getType(leftItem);
	                const rightType = getType(rightItem);
	                if (leftType !== rightType) {
	                    prettyAppendLines(linesLeft, linesRight, '', '', leftItem, rightItem, level + 1, options);
	                } else if (leftType === 'object') {
	                    // Always recurse into diffObject for aligned objects, regardless of recursiveEqual/isEqual
	                    linesLeft.push({
	                        level: level + 1,
	                        type: 'equal',
	                        text: '{'
	                    });
	                    linesRight.push({
	                        level: level + 1,
	                        type: 'equal',
	                        text: '{'
	                    });
	                    // For each key, if value is array, apply recursive diff logic
	                    const keys = Array.from(new Set([
	                        ...Object.keys(leftItem),
	                        ...Object.keys(rightItem)
	                    ]));
	                    for (const key of keys){
	                        const lVal = leftItem[key];
	                        const rVal = rightItem[key];
	                        if (Array.isArray(lVal) && Array.isArray(rVal)) {
	                            // Recursively diff arrays
	                            const [arrL, arrR] = diffArrayRecursive(lVal, rVal, key, key, level + 2, options, [], []);
	                            linesLeft = concat(linesLeft, arrL);
	                            linesRight = concat(linesRight, arrR);
	                        } else if (Array.isArray(lVal) || Array.isArray(rVal)) {
	                            // If only one side is array, treat as modification
	                            prettyAppendLines(linesLeft, linesRight, key, key, lVal, rVal, level + 2, options);
	                        } else {
	                            // Use diffObject for non-array values
	                            const [leftLines, rightLines] = diffObject({
	                                [key]: lVal
	                            }, {
	                                [key]: rVal
	                            }, level + 2, options, diffArrayRecursive);
	                            linesLeft = concat(linesLeft, leftLines);
	                            linesRight = concat(linesRight, rightLines);
	                        }
	                    }
	                    linesLeft.push({
	                        level: level + 1,
	                        type: 'equal',
	                        text: '}'
	                    });
	                    linesRight.push({
	                        level: level + 1,
	                        type: 'equal',
	                        text: '}'
	                    });
	                } else if (leftType === 'array') {
	                    // For nested arrays, recursively apply the same logic
	                    const [resLeft, resRight] = diffArrayRecursive(leftItem, rightItem, '', '', level + 1, options, [], []);
	                    linesLeft = concat(linesLeft, resLeft);
	                    linesRight = concat(linesRight, resRight);
	                } else if (isEqual(leftItem, rightItem, options)) {
	                    linesLeft.push({
	                        level: level + 1,
	                        type: 'equal',
	                        text: formatValue(leftItem, undefined, undefined, options.undefinedBehavior)
	                    });
	                    linesRight.push({
	                        level: level + 1,
	                        type: 'equal',
	                        text: formatValue(rightItem, undefined, undefined, options.undefinedBehavior)
	                    });
	                } else {
	                    if (options.showModifications) {
	                        linesLeft.push({
	                            level: level + 1,
	                            type: 'modify',
	                            text: formatValue(leftItem, undefined, undefined, options.undefinedBehavior)
	                        });
	                        linesRight.push({
	                            level: level + 1,
	                            type: 'modify',
	                            text: formatValue(rightItem, undefined, undefined, options.undefinedBehavior)
	                        });
	                    } else {
	                        linesLeft.push({
	                            level: level + 1,
	                            type: 'remove',
	                            text: formatValue(leftItem, undefined, undefined, options.undefinedBehavior)
	                        });
	                        linesLeft.push({
	                            level: level + 1,
	                            type: 'equal',
	                            text: ''
	                        });
	                        linesRight.push({
	                            level: level + 1,
	                            type: 'equal',
	                            text: ''
	                        });
	                        linesRight.push({
	                            level: level + 1,
	                            type: 'add',
	                            text: formatValue(rightItem, undefined, undefined, options.undefinedBehavior)
	                        });
	                    }
	                }
	                leftProcessed.add(i);
	                rightProcessed.add(matchIndex);
	            }
	        }
	        // Second pass: handle remaining items (unmatched)
	        for(let i = 0; i < arrLeft.length; i++){
	            if (leftProcessed.has(i)) continue;
	            const leftItem = arrLeft[i];
	            const removedLines = stringify(leftItem, undefined, 1, undefined, options.undefinedBehavior).split('\n');
	            for(let j = 0; j < removedLines.length; j++){
	                linesLeft.push({
	                    level: level + 1 + (removedLines[j].match(/^\s+/)?.[0]?.length || 0),
	                    type: 'remove',
	                    text: removedLines[j].replace(/^\s+/, '').replace(/,$/g, '')
	                });
	                linesRight.push({
	                    level: level + 1,
	                    type: 'equal',
	                    text: ''
	                });
	            }
	        }
	        for(let i = 0; i < arrRight.length; i++){
	            if (rightProcessed.has(i)) continue;
	            const rightItem = arrRight[i];
	            const addedLines = stringify(rightItem, undefined, 1, undefined, options.undefinedBehavior).split('\n');
	            for(let j = 0; j < addedLines.length; j++){
	                linesLeft.push({
	                    level: level + 1,
	                    type: 'equal',
	                    text: ''
	                });
	                linesRight.push({
	                    level: level + 1 + (addedLines[j].match(/^\s+/)?.[0]?.length || 0),
	                    type: 'add',
	                    text: addedLines[j].replace(/^\s+/, '').replace(/,$/g, '')
	                });
	            }
	        }
	    }
	    addArrayClosingBrackets(linesLeft, linesRight, level);
	    return [
	        linesLeft,
	        linesRight
	    ];
	}
	const diffArrayCompareKey = diffArrayRecursive;

	/**
	 * Diffs two objects, using compare-key logic for nested arrays if possible.
	 *
	 * @param leftObj The left object
	 * @param rightObj The right object
	 * @param level The current diff level
	 * @param options The diff options
	 * @param fallbackArrayDiff The fallback array diff function (e.g., diffArrayNormal or diffArrayLCS)
	 * @param compareKeyArrayDiff The compare-key array diff function
	 * @param allObjectsHaveCompareKey The function to check if all objects in an array have the compare key
	 * @returns [DiffResult[], DiffResult[]]
	 */ function diffObjectWithArraySupport(leftObj, rightObj, level, options, fallbackArrayDiff, compareKeyArrayDiff, allObjectsHaveCompareKey) {
	    let linesLeft = [];
	    let linesRight = [];
	    const keys = Array.from(new Set([
	        ...Object.keys(leftObj || {}),
	        ...Object.keys(rightObj || {})
	    ]));
	    for (const key of keys){
	        const lVal = leftObj ? leftObj[key] : undefined;
	        const rVal = rightObj ? rightObj[key] : undefined;
	        if (Array.isArray(lVal) && Array.isArray(rVal) && options.compareKey) {
	            if (allObjectsHaveCompareKey(lVal, options.compareKey) && allObjectsHaveCompareKey(rVal, options.compareKey)) {
	                // Use compare-key diff for this property
	                const [arrL, arrR] = compareKeyArrayDiff(lVal, rVal, '', '', level + 2, options, [], []);
	                linesLeft = concat(linesLeft, arrL);
	                linesRight = concat(linesRight, arrR);
	                continue;
	            }
	        }
	        if (Array.isArray(lVal) && Array.isArray(rVal)) {
	            // Fallback to normal diff for arrays
	            const [arrL, arrR] = fallbackArrayDiff(lVal, rVal, '', '', level + 2, options, [], []);
	            linesLeft = concat(linesLeft, arrL);
	            linesRight = concat(linesRight, arrR);
	        } else if (Array.isArray(lVal) || Array.isArray(rVal)) {
	            // If only one side is array, treat as modification
	            prettyAppendLines(linesLeft, linesRight, key, key, lVal, rVal, level + 2, options);
	        } else {
	            // Use diffObject for non-array values
	            const [leftLines, rightLines] = diffObject({
	                [key]: lVal
	            }, {
	                [key]: rVal
	            }, level + 2, options, fallbackArrayDiff);
	            linesLeft = concat(linesLeft, leftLines);
	            linesRight = concat(linesRight, rightLines);
	        }
	    }
	    return [
	        linesLeft,
	        linesRight
	    ];
	}

	const diffArrayNormal = (arrLeft, arrRight, keyLeft, keyRight, level, options, linesLeft = [], linesRight = [])=>{
	    arrLeft = [
	        ...arrLeft
	    ];
	    arrRight = [
	        ...arrRight
	    ];
	    addArrayOpeningBrackets(linesLeft, linesRight, keyLeft, keyRight, level);
	    if (level >= (options.maxDepth || Infinity)) {
	        addMaxDepthPlaceholder(linesLeft, linesRight, level);
	    } else {
	        while(arrLeft.length || arrRight.length){
	            const itemLeft = arrLeft[0];
	            const itemRight = arrRight[0];
	            const leftType = getType(itemLeft);
	            const rightType = getType(itemRight);
	            if (arrLeft.length && arrRight.length) {
	                if (leftType !== rightType) {
	                    prettyAppendLines(linesLeft, linesRight, '', '', itemLeft, itemRight, level + 1, options);
	                } else if (options.recursiveEqual && [
	                    'object',
	                    'array'
	                ].includes(leftType) && isEqual(itemLeft, itemRight, options)) {
	                    prettyAppendLines(linesLeft, linesRight, '', '', itemLeft, itemRight, level + 1, options);
	                } else if (leftType === 'object') {
	                    linesLeft.push({
	                        level: level + 1,
	                        type: 'equal',
	                        text: '{'
	                    });
	                    linesRight.push({
	                        level: level + 1,
	                        type: 'equal',
	                        text: '{'
	                    });
	                    let objLeft, objRight;
	                    if (options.arrayDiffMethod === 'compare-key') {
	                        [objLeft, objRight] = diffObjectWithArraySupport(itemLeft, itemRight, level, options, diffArrayNormal, diffArrayCompareKey, allObjectsHaveCompareKey);
	                    } else {
	                        [objLeft, objRight] = diffObject(itemLeft, itemRight, level + 2, options, diffArrayNormal);
	                    }
	                    linesLeft = concat(linesLeft, objLeft);
	                    linesRight = concat(linesRight, objRight);
	                    linesLeft.push({
	                        level: level + 1,
	                        type: 'equal',
	                        text: '}'
	                    });
	                    linesRight.push({
	                        level: level + 1,
	                        type: 'equal',
	                        text: '}'
	                    });
	                } else if (leftType === 'array') {
	                    // For nested arrays, check for compare-key logic
	                    if (options.compareKey && allObjectsHaveCompareKey(itemLeft, options.compareKey) && allObjectsHaveCompareKey(itemRight, options.compareKey)) {
	                        const [resLeft, resRight] = diffArrayCompareKey(itemLeft, itemRight, '', '', level + 1, options, [], []);
	                        linesLeft = concat(linesLeft, resLeft);
	                        linesRight = concat(linesRight, resRight);
	                    } else {
	                        const [resLeft, resRight] = diffArrayNormal(itemLeft, itemRight, '', '', level + 1, options, [], []);
	                        linesLeft = concat(linesLeft, resLeft);
	                        linesRight = concat(linesRight, resRight);
	                    }
	                } else if (cmp(itemLeft, itemRight, {
	                    ignoreCase: options.ignoreCase
	                }) === 0) {
	                    linesLeft.push({
	                        level: level + 1,
	                        type: 'equal',
	                        text: formatValue(itemLeft, undefined, undefined, options.undefinedBehavior)
	                    });
	                    linesRight.push({
	                        level: level + 1,
	                        type: 'equal',
	                        text: formatValue(itemRight, undefined, undefined, options.undefinedBehavior)
	                    });
	                } else {
	                    if (options.showModifications) {
	                        linesLeft.push({
	                            level: level + 1,
	                            type: 'modify',
	                            text: formatValue(itemLeft, undefined, undefined, options.undefinedBehavior)
	                        });
	                        linesRight.push({
	                            level: level + 1,
	                            type: 'modify',
	                            text: formatValue(itemRight, undefined, undefined, options.undefinedBehavior)
	                        });
	                    } else {
	                        linesLeft.push({
	                            level: level + 1,
	                            type: 'remove',
	                            text: formatValue(itemLeft, undefined, undefined, options.undefinedBehavior)
	                        });
	                        linesLeft.push({
	                            level: level + 1,
	                            type: 'equal',
	                            text: ''
	                        });
	                        linesRight.push({
	                            level: level + 1,
	                            type: 'equal',
	                            text: ''
	                        });
	                        linesRight.push({
	                            level: level + 1,
	                            type: 'add',
	                            text: formatValue(itemRight, undefined, undefined, options.undefinedBehavior)
	                        });
	                    }
	                }
	                arrLeft.shift();
	                arrRight.shift();
	            } else if (arrLeft.length) {
	                const removedLines = formatValue(itemLeft, undefined, true, options.undefinedBehavior).split('\n');
	                for(let i = 0; i < removedLines.length; i++){
	                    linesLeft.push({
	                        level: level + 1 + (removedLines[i].match(/^\s+/)?.[0]?.length || 0),
	                        type: 'remove',
	                        text: removedLines[i].replace(/^\s+/, '').replace(/,$/g, '')
	                    });
	                    linesRight.push({
	                        level: level + 1,
	                        type: 'equal',
	                        text: ''
	                    });
	                }
	                arrLeft.shift();
	            } else if (arrRight.length) {
	                const addedLines = formatValue(itemRight, undefined, true, options.undefinedBehavior).split('\n');
	                for(let i = 0; i < addedLines.length; i++){
	                    linesLeft.push({
	                        level: level + 1,
	                        type: 'equal',
	                        text: ''
	                    });
	                    linesRight.push({
	                        level: level + 1 + (addedLines[i].match(/^\s+/)?.[0]?.length || 0),
	                        type: 'add',
	                        text: addedLines[i].replace(/^\s+/, '').replace(/,$/g, '')
	                    });
	                }
	                arrRight.shift();
	            }
	        }
	    }
	    addArrayClosingBrackets(linesLeft, linesRight, level);
	    return [
	        linesLeft,
	        linesRight
	    ];
	};

	const sortInnerArrays = (source, options)=>{
	    if (!source || typeof source !== 'object') {
	        return source;
	    }
	    if (Array.isArray(source)) {
	        const result = [
	            ...source
	        ];
	        result.sort((a, b)=>cmp(a, b, {
	                ignoreCase: options?.ignoreCase
	            }));
	        return result.map((item)=>sortInnerArrays(item, options));
	    }
	    const result = {
	        ...source
	    };
	    for(const key in result){
	        result[key] = sortInnerArrays(result[key], options);
	    }
	    return result;
	};

	var UndefinedBehavior = /*#__PURE__*/ function(UndefinedBehavior) {
	    UndefinedBehavior["stringify"] = "stringify";
	    UndefinedBehavior["ignore"] = "ignore";
	    UndefinedBehavior["throw"] = "throw";
	    return UndefinedBehavior;
	}({});
	const EQUAL_EMPTY_LINE = {
	    level: 0,
	    type: 'equal',
	    text: ''
	};
	const EQUAL_LEFT_BRACKET_LINE = {
	    level: 0,
	    type: 'equal',
	    text: '{'
	};
	const EQUAL_RIGHT_BRACKET_LINE = {
	    level: 0,
	    type: 'equal',
	    text: '}'
	};
	let Differ = class Differ {
	    detectCircular(source) {
	        if (this.options.detectCircular) {
	            if (detectCircular(source)) {
	                throw new Error(`Circular reference detected in object (with keys ${Object.keys(source).map((t)=>`"${t}"`).join(', ')})`);
	            }
	        }
	    }
	    sortResultLines(left, right) {
	        for(let k = 0; k < left.length; k++){
	            let changed = false;
	            for(let i = 1; i < left.length; i++){
	                if (left[i].type === 'remove' && left[i - 1].type === 'equal' && right[i].type === 'equal' && right[i - 1].type === 'add') {
	                    const t1 = left[i - 1];
	                    left[i - 1] = left[i];
	                    left[i] = t1;
	                    const t2 = right[i - 1];
	                    right[i - 1] = right[i];
	                    right[i] = t2;
	                    changed = true;
	                }
	            }
	            if (!changed) {
	                break;
	            }
	        }
	    }
	    calculateLineNumbers(result) {
	        let lineNumber = 0;
	        for (const item of result){
	            if (!item.text) {
	                continue;
	            }
	            item.lineNumber = ++lineNumber;
	        }
	    }
	    calculateCommas(result) {
	        const nextLine = Array(result.length).fill(0);
	        for(let i = result.length - 1; i > 0; i--){
	            if (result[i].text) {
	                nextLine[i - 1] = i;
	            } else {
	                nextLine[i - 1] = nextLine[i];
	            }
	        }
	        for(let i = 0; i < result.length; i++){
	            if (!result[i].text.endsWith('{') && !result[i].text.endsWith('[') && result[i].text && nextLine[i] && result[i].level <= result[nextLine[i]].level) {
	                result[i].comma = true;
	            }
	        }
	    }
	    diff(sourceLeft, sourceRight) {
	        this.detectCircular(sourceLeft);
	        this.detectCircular(sourceRight);
	        if (this.options.arrayDiffMethod === 'unorder-normal' || this.options.arrayDiffMethod === 'unorder-lcs') {
	            sourceLeft = sortInnerArrays(sourceLeft, this.options);
	            sourceRight = sortInnerArrays(sourceRight, this.options);
	        }
	        if (this.options.undefinedBehavior === "ignore") {
	            sourceLeft = cleanFields(sourceLeft) ?? null;
	            sourceRight = cleanFields(sourceRight) ?? null;
	        }
	        let resultLeft = [];
	        let resultRight = [];
	        const typeLeft = getType(sourceLeft);
	        const typeRight = getType(sourceRight);
	        if (typeLeft !== typeRight) {
	            const strLeft = stringify(sourceLeft, undefined, 1, this.options.maxDepth, this.options.undefinedBehavior);
	            resultLeft = strLeft.split('\n').map((line)=>({
	                    level: line.match(/^\s+/)?.[0]?.length || 0,
	                    type: 'remove',
	                    text: line.replace(/^\s+/, '').replace(/,$/g, ''),
	                    comma: line.endsWith(',')
	                }));
	            const strRight = stringify(sourceRight, undefined, 1, this.options.maxDepth, this.options.undefinedBehavior);
	            resultRight = strRight.split('\n').map((line)=>({
	                    level: line.match(/^\s+/)?.[0]?.length || 0,
	                    type: 'add',
	                    text: line.replace(/^\s+/, '').replace(/,$/g, ''),
	                    comma: line.endsWith(',')
	                }));
	            const lLength = resultLeft.length;
	            const rLength = resultRight.length;
	            resultLeft = concat(resultLeft, Array(rLength).fill(0).map(()=>({
	                    ...EQUAL_EMPTY_LINE
	                })));
	            resultRight = concat(resultRight, Array(lLength).fill(0).map(()=>({
	                    ...EQUAL_EMPTY_LINE
	                })), true);
	        } else if (typeLeft === 'object') {
	            [resultLeft, resultRight] = diffObject(sourceLeft, sourceRight, 1, this.options, this.arrayDiffFunc);
	            resultLeft.unshift({
	                ...EQUAL_LEFT_BRACKET_LINE
	            });
	            resultLeft.push({
	                ...EQUAL_RIGHT_BRACKET_LINE
	            });
	            resultRight.unshift({
	                ...EQUAL_LEFT_BRACKET_LINE
	            });
	            resultRight.push({
	                ...EQUAL_RIGHT_BRACKET_LINE
	            });
	        } else if (typeLeft === 'array') {
	            [resultLeft, resultRight] = this.arrayDiffFunc(sourceLeft, sourceRight, '', '', 0, this.options);
	        } else if (sourceLeft !== sourceRight) {
	            if (this.options.ignoreCase) {
	                if (typeof sourceLeft === 'string' && typeof sourceRight === 'string' && sourceLeft.toLowerCase() === sourceRight.toLowerCase()) {
	                    resultLeft = [
	                        {
	                            level: 0,
	                            type: 'equal',
	                            text: sourceLeft
	                        }
	                    ];
	                    resultRight = [
	                        {
	                            level: 0,
	                            type: 'equal',
	                            text: sourceRight
	                        }
	                    ];
	                }
	            } else if (this.options.showModifications) {
	                resultLeft = [
	                    {
	                        level: 0,
	                        type: 'modify',
	                        text: stringify(sourceLeft, undefined, undefined, this.options.maxDepth, this.options.undefinedBehavior)
	                    }
	                ];
	                resultRight = [
	                    {
	                        level: 0,
	                        type: 'modify',
	                        text: stringify(sourceRight, undefined, undefined, this.options.maxDepth, this.options.undefinedBehavior)
	                    }
	                ];
	            } else {
	                resultLeft = [
	                    {
	                        level: 0,
	                        type: 'remove',
	                        text: stringify(sourceLeft, undefined, undefined, this.options.maxDepth, this.options.undefinedBehavior)
	                    },
	                    {
	                        ...EQUAL_EMPTY_LINE
	                    }
	                ];
	                resultRight = [
	                    {
	                        ...EQUAL_EMPTY_LINE
	                    },
	                    {
	                        level: 0,
	                        type: 'add',
	                        text: stringify(sourceRight, undefined, undefined, this.options.maxDepth, this.options.undefinedBehavior)
	                    }
	                ];
	            }
	        } else {
	            resultLeft = [
	                {
	                    level: 0,
	                    type: 'equal',
	                    text: stringify(sourceLeft, undefined, undefined, this.options.maxDepth, this.options.undefinedBehavior)
	                }
	            ];
	            resultRight = [
	                {
	                    level: 0,
	                    type: 'equal',
	                    text: stringify(sourceRight, undefined, undefined, this.options.maxDepth, this.options.undefinedBehavior)
	                }
	            ];
	        }
	        this.sortResultLines(resultLeft, resultRight);
	        this.calculateLineNumbers(resultLeft);
	        this.calculateLineNumbers(resultRight);
	        this.calculateCommas(resultLeft);
	        this.calculateCommas(resultRight);
	        return [
	            resultLeft,
	            resultRight
	        ];
	    }
	    constructor({ detectCircular = true, maxDepth = Infinity, showModifications = true, arrayDiffMethod = 'normal', ignoreCase = false, ignoreCaseForKey = false, recursiveEqual = false, preserveKeyOrder, compareKey, undefinedBehavior = "stringify" } = {}){
	        this.options = {
	            detectCircular,
	            maxDepth,
	            showModifications,
	            arrayDiffMethod,
	            ignoreCase,
	            ignoreCaseForKey,
	            recursiveEqual,
	            preserveKeyOrder,
	            compareKey,
	            undefinedBehavior
	        };
	        if (arrayDiffMethod === 'compare-key') {
	            this.arrayDiffFunc = diffArrayCompareKey;
	        } else if (arrayDiffMethod === 'lcs' || arrayDiffMethod === 'unorder-lcs') {
	            this.arrayDiffFunc = diffArrayLCS;
	        } else {
	            this.arrayDiffFunc = diffArrayNormal;
	        }
	    }
	};

	const isExpandLine = (segment)=>{
	    return 'hasLinesBefore' in segment || 'hasLinesAfter' in segment;
	};
	const getSegmentHeight = (segment, itemHeight, expandLineHeight)=>{
	    return isExpandLine(segment) ? expandLineHeight : itemHeight * (segment.end - segment.start + 1);
	};
	/**
	 * Merge two segments array into one, divide the segment if necessary.
	 */ const mergeSegments = (tokens, diffs)=>{
	    const result = [];
	    let token;
	    let diff;
	    if (tokens.length && diffs.length) {
	        tokens = [
	            ...tokens
	        ];
	        diffs = [
	            ...diffs
	        ];
	        token = {
	            ...tokens.shift()
	        };
	        diff = {
	            ...diffs.shift()
	        };
	        while(1){
	            if (token.start === diff.start) {
	                const end = Math.min(token.end, diff.end);
	                result.push({
	                    ...token,
	                    ...diff,
	                    end
	                });
	                token.start = diff.start = end;
	            } else if (token.start < diff.start) {
	                const end = Math.min(token.end, diff.start);
	                result.push({
	                    ...diff,
	                    ...token,
	                    end
	                });
	                token.start = end;
	            } else {
	                const end = Math.min(token.start, diff.end);
	                result.push({
	                    ...token,
	                    ...diff,
	                    end
	                });
	                diff.start = end;
	            }
	            if (!tokens.length || !diffs.length) break;
	            if (token.start === token.end) token = {
	                ...tokens.shift()
	            };
	            if (diff.start === diff.end) diff = {
	                ...diffs.shift()
	            };
	        }
	    }
	    if (!tokens.length) result.push(...diffs.map((d)=>({
	            ...d,
	            token: token.token || 'plain'
	        })));
	    if (!diffs.length) result.push(...tokens);
	    return result;
	};

	const calculatePlaceholderHeight = (segments, accTop, startSegment, startLine, endSegment, endLine, itemHeight, expandLineHeight, totalHeight)=>{
	    if (!accTop.length) {
	        return [
	            0,
	            0
	        ];
	    }
	    let topHeight = 0;
	    let bottomHeight = 0;
	    const startSegmentItem = segments[startSegment];
	    if (isExpandLine(startSegmentItem)) {
	        topHeight = accTop[startSegment];
	    } else {
	        topHeight = accTop[startSegment] + (startLine - startSegmentItem.start) * itemHeight;
	    }
	    const endSegmentItem = segments[endSegment];
	    if (isExpandLine(endSegmentItem)) {
	        bottomHeight = totalHeight - accTop[endSegment] - expandLineHeight;
	    } else {
	        bottomHeight = totalHeight - accTop[endSegment] - (endLine - endSegmentItem.start) * itemHeight;
	    }
	    return [
	        topHeight,
	        bottomHeight
	    ];
	};

	const findVisibleLines = (segments, accTop, viewportTop, viewportBottom, itemHeight, expandLineHeight)=>{
	    if (!accTop.length) {
	        return [
	            0,
	            0,
	            0,
	            0
	        ];
	    }
	    let startSegment = 0;
	    let endSegment = 0;
	    let startLine = 0;
	    let endLine = 0;
	    let l = 0;
	    let r = segments.length - 1;
	    // start segment
	    while(1){
	        const m = Math.floor((l + r) / 2);
	        const top = accTop[m];
	        const bottom = top + getSegmentHeight(segments[m], itemHeight, expandLineHeight);
	        if (bottom <= viewportTop) {
	            l = m + 1;
	        } else {
	            r = m;
	        }
	        if (l === r) {
	            startSegment = l;
	            break;
	        }
	    }
	    // start line
	    const startSegmentItem = segments[startSegment];
	    if (isExpandLine(startSegmentItem)) {
	        startLine = startSegmentItem.start;
	    } else {
	        startLine = startSegmentItem.start + Math.floor((viewportTop - accTop[startSegment]) / itemHeight);
	    }
	    // end segment
	    l = 0;
	    r = segments.length - 1;
	    while(1){
	        const m = Math.floor((l + r + 1) / 2);
	        const top = accTop[m];
	        if (top >= viewportBottom) {
	            r = m - 1;
	        } else {
	            l = m;
	        }
	        if (l === r) {
	            endSegment = l;
	            break;
	        }
	    }
	    // end line
	    const endSegmentItem = segments[endSegment];
	    if (isExpandLine(endSegmentItem)) {
	        endLine = endSegmentItem.end;
	    } else {
	        endLine = endSegmentItem.start + Math.ceil((viewportBottom - accTop[endSegment]) / itemHeight);
	    }
	    return [
	        startSegment,
	        startLine,
	        endSegment,
	        endLine
	    ];
	};

	var bin = {};

	Object.defineProperty(bin, "__esModule", {
	    value: true
	});
	bin.applyPatch = bin.calcPatch = lcs_1 = bin.lcs = bin.diff = bin.diff_core = void 0;
	function diff_internal(state, c) {
	    const { b, eq, stack_base } = state;
	    let { i, N, j, M, Z, stack_top } = state;
	    for(;;){
	        switch(c){
	            case 0:
	                {
	                    Z_block: while(N > 0 && M > 0){
	                        b.fill(0, 0, 2 * Z);
	                        const W = N - M;
	                        const L = N + M;
	                        const parity = L & 1;
	                        const offsetx = i + N - 1;
	                        const offsety = j + M - 1;
	                        const hmax = (L + parity) / 2;
	                        let z;
	                        h_loop: for(let h = 0; h <= hmax; h++){
	                            const kmin = 2 * Math.max(0, h - M) - h;
	                            const kmax = h - 2 * Math.max(0, h - N);
	                            for(let k = kmin; k <= kmax; k += 2){
	                                const gkm = b[k - 1 - Z * Math.floor((k - 1) / Z)];
	                                const gkp = b[k + 1 - Z * Math.floor((k + 1) / Z)];
	                                const u = k === -h || k !== h && gkm < gkp ? gkp : gkm + 1;
	                                const v = u - k;
	                                let x = u;
	                                let y = v;
	                                while(x < N && y < M && eq(i + x, j + y))x++, y++;
	                                b[k - Z * Math.floor(k / Z)] = x;
	                                if (parity === 1 && (z = W - k) >= 1 - h && z < h && x + b[Z + z - Z * Math.floor(z / Z)] >= N) {
	                                    if (h > 1 || x !== u) {
	                                        stack_base[stack_top++] = i + x;
	                                        stack_base[stack_top++] = N - x;
	                                        stack_base[stack_top++] = j + y;
	                                        stack_base[stack_top++] = M - y;
	                                        N = u;
	                                        M = v;
	                                        Z = 2 * (Math.min(N, M) + 1);
	                                        continue Z_block;
	                                    } else break h_loop;
	                                }
	                            }
	                            for(let k = kmin; k <= kmax; k += 2){
	                                const pkm = b[Z + k - 1 - Z * Math.floor((k - 1) / Z)];
	                                const pkp = b[Z + k + 1 - Z * Math.floor((k + 1) / Z)];
	                                const u = k === -h || k !== h && pkm < pkp ? pkp : pkm + 1;
	                                const v = u - k;
	                                let x = u;
	                                let y = v;
	                                while(x < N && y < M && eq(offsetx - x, offsety - y))x++, y++;
	                                b[Z + k - Z * Math.floor(k / Z)] = x;
	                                if (parity === 0 && (z = W - k) >= -h && z <= h && x + b[z - Z * Math.floor(z / Z)] >= N) {
	                                    if (h > 0 || x !== u) {
	                                        stack_base[stack_top++] = i + N - u;
	                                        stack_base[stack_top++] = u;
	                                        stack_base[stack_top++] = j + M - v;
	                                        stack_base[stack_top++] = v;
	                                        N = N - x;
	                                        M = M - y;
	                                        Z = 2 * (Math.min(N, M) + 1);
	                                        continue Z_block;
	                                    } else break h_loop;
	                                }
	                            }
	                        }
	                        if (N === M) continue;
	                        if (M > N) {
	                            i += N;
	                            j += N;
	                            M -= N;
	                            N = 0;
	                        } else {
	                            i += M;
	                            j += M;
	                            N -= M;
	                            M = 0;
	                        }
	                        break;
	                    }
	                    if (N + M !== 0) {
	                        if (state.pxe === i || state.pye === j) {
	                            state.pxe = i + N;
	                            state.pye = j + M;
	                        } else {
	                            const sx = state.pxs;
	                            state.oxs = state.pxs;
	                            state.oxe = state.pxe;
	                            state.oys = state.pys;
	                            state.oye = state.pye;
	                            state.pxs = i;
	                            state.pxe = i + N;
	                            state.pys = j;
	                            state.pye = j + M;
	                            if (sx >= 0) {
	                                state.i = i;
	                                state.N = N;
	                                state.j = j;
	                                state.M = M;
	                                state.Z = Z;
	                                state.stack_top = stack_top;
	                                return 1;
	                            }
	                        }
	                    }
	                }
	            case 1:
	                {
	                    if (stack_top === 0) return 2;
	                    M = stack_base[--stack_top];
	                    j = stack_base[--stack_top];
	                    N = stack_base[--stack_top];
	                    i = stack_base[--stack_top];
	                    Z = 2 * (Math.min(N, M) + 1);
	                    c = 0;
	                }
	        }
	    }
	}
	let DiffGen = class DiffGen {
	    [Symbol.iterator]() {
	        return this;
	    }
	    next() {
	        const { state, result } = this;
	        if (this.c > 1) {
	            result.done = true;
	            result.value = undefined;
	            return result;
	        }
	        const c = diff_internal(state, this.c);
	        this.c = c;
	        if (c === 1) {
	            result.value = [
	                state.oxs,
	                state.oxe,
	                state.oys,
	                state.oye
	            ];
	            return result;
	        }
	        if (state.pxs >= 0) {
	            result.value = [
	                state.pxs,
	                state.pxe,
	                state.pys,
	                state.pye
	            ];
	            return result;
	        }
	        result.done = true;
	        result.value = undefined;
	        return result;
	    }
	    constructor(state){
	        this.state = state;
	        this.c = 0;
	        this.result = {
	            value: null,
	            done: false
	        };
	    }
	};
	function diff_core(i, N, j, M, eq) {
	    const Z = (Math.min(N, M) + 1) * 2;
	    const L = N + M;
	    const b = new (L < 256 ? Uint8Array : L < 65536 ? Uint16Array : Uint32Array)(2 * Z);
	    return new DiffGen({
	        i,
	        N,
	        j,
	        M,
	        Z,
	        b,
	        eq,
	        pxs: -1,
	        pxe: -1,
	        pys: -1,
	        pye: -1,
	        oxs: -1,
	        oxe: -1,
	        oys: -1,
	        oye: -1,
	        stack_top: 0,
	        stack_base: []
	    });
	}
	bin.diff_core = diff_core;
	function diff(xs, ys) {
	    let [i, N, M] = [
	        0,
	        xs.length,
	        ys.length
	    ];
	    while(i < N && i < M && xs[i] === ys[i])i++;
	    if (i === N && i === M) return [][Symbol.iterator]();
	    while(xs[--N] === ys[--M] && N > i && M > i);
	    const eq = (x, y)=>xs[x] === ys[y];
	    return diff_core(i, N + 1 - i, i, M + 1 - i, eq);
	}
	bin.diff = diff;
	let LCSGen = class LCSGen {
	    [Symbol.iterator]() {
	        return this;
	    }
	    next() {
	        const rec = this.diff.next();
	        if (rec.done) {
	            const { i, j, N } = this;
	            if (i < N) {
	                rec.done = false;
	                rec.value = [
	                    i,
	                    j,
	                    N - i
	                ];
	                this.i = N;
	            }
	            return rec;
	        }
	        const v = rec.value;
	        const sx = v[0];
	        const ex = v[1];
	        const ey = v[3];
	        const { i, j } = this;
	        if (i !== sx) {
	            v.length--;
	            v[0] = i;
	            v[1] = j;
	            v[2] = sx - i;
	        }
	        this.i = ex;
	        this.j = ey;
	        return rec;
	    }
	    constructor(diff, N){
	        this.diff = diff;
	        this.N = N;
	        this.i = 0;
	        this.j = 0;
	    }
	};
	function lcs(xs, ys) {
	    return new LCSGen(diff(xs, ys), xs.length);
	}
	var lcs_1 = bin.lcs = lcs;
	function* calcPatch(xs, ys) {
	    const slice = ArrayBuffer.isView(xs) ? Uint8Array.prototype.subarray : xs.slice;
	    for (const v of diff(xs, ys)){
	        v[2] = slice.call(ys, v[2], v[3]);
	        yield v;
	    }
	}
	bin.calcPatch = calcPatch;
	function* applyPatch(xs, patch) {
	    let i = 0;
	    const slice = ArrayBuffer.isView(xs) ? Uint8Array.prototype.subarray : xs.slice;
	    for (const [dels, dele, ins] of patch){
	        if (i < dels) yield slice.call(xs, i, dels);
	        if (ins.length > 0) yield ins;
	        i = dele;
	    }
	    if (i < xs.length) yield slice.call(xs, i);
	}
	bin.applyPatch = applyPatch;

	const getOriginalIndices = (arr, separatorLength)=>{
	    const result = [];
	    let index = 0;
	    for (const item of arr){
	        result.push(index);
	        index += item.length + separatorLength;
	    }
	    result.push(index - separatorLength);
	    return result;
	};
	const filterEmptyParts = (arr)=>{
	    return arr.filter((item)=>item.end > item.start);
	};
	const getInlineDiff = (l, r, options)=>{
	    let resultL = [];
	    let resultR = [];
	    let lastL = 0;
	    let lastR = 0;
	    if (options.mode === 'word') {
	        const wordSeparator = options.wordSeparator || ' ';
	        const lArr = l.split(wordSeparator);
	        const rArr = r.split(wordSeparator);
	        /**
	     * The iter array contains the information about replacement, which is an array of
	     * tuple `[startL, startR, length]`.
	     *
	     * e.g. `[1, 2, 3]` means replace `lArr[1...1+3]` to `rArr[2...2+3]` (include the end).
	     */ const iter = [
	            ...lcs_1(lArr, rArr)
	        ];
	        const separatorLength = wordSeparator.length;
	        const indicesL = getOriginalIndices(lArr, separatorLength);
	        const indicesR = getOriginalIndices(rArr, separatorLength);
	        for (const [sl, sr, length] of iter){
	            if (sl > lastL) {
	                resultL.push({
	                    type: 'remove',
	                    start: indicesL[lastL],
	                    end: indicesL[sl]
	                });
	            }
	            if (sr > lastR) {
	                resultR.push({
	                    type: 'add',
	                    start: indicesR[lastR],
	                    end: indicesR[sr]
	                });
	            }
	            lastL = sl + length;
	            lastR = sr + length;
	            resultL.push({
	                start: indicesL[sl],
	                end: indicesL[lastL]
	            });
	            resultR.push({
	                start: indicesR[sr],
	                end: indicesR[lastR]
	            });
	        }
	        if (l.length > lastL) {
	            resultL.push({
	                type: 'remove',
	                start: indicesL[lastL],
	                end: l.length
	            });
	        }
	        if (r.length > lastR) {
	            resultR.push({
	                type: 'add',
	                start: indicesR[lastR],
	                end: r.length
	            });
	        }
	        resultL = filterEmptyParts(resultL);
	        resultR = filterEmptyParts(resultR);
	        return [
	            resultL,
	            resultR
	        ];
	    }
	    const iter = lcs_1(l, r);
	    for (const [sl, sr, length] of iter){
	        if (sl > lastL) {
	            resultL.push({
	                type: 'remove',
	                start: lastL,
	                end: sl
	            });
	        }
	        if (sr > lastR) {
	            resultR.push({
	                type: 'add',
	                start: lastR,
	                end: sr
	            });
	        }
	        lastL = sl + length;
	        lastR = sr + length;
	        resultL.push({
	            start: sl,
	            end: lastL
	        });
	        resultR.push({
	            start: sr,
	            end: lastR
	        });
	    }
	    if (l.length > lastL) {
	        resultL.push({
	            type: 'remove',
	            start: lastL,
	            end: l.length
	        });
	    }
	    if (r.length > lastR) {
	        resultR.push({
	            type: 'add',
	            start: lastR,
	            end: r.length
	        });
	    }
	    resultL = filterEmptyParts(resultL);
	    resultR = filterEmptyParts(resultR);
	    return [
	        resultL,
	        resultR
	    ];
	};

	const syntaxHighlightLine = (enabled, text, offset)=>{
	    if (!enabled) {
	        return [
	            {
	                token: 'plain',
	                start: offset,
	                end: text.length + offset
	            }
	        ];
	    }
	    if (text === 'undefined' || text === 'Infinity' || text === '-Infinity' || text === 'NaN' || /^\d+n$/i.test(text) || text.startsWith('Symbol(') || text.startsWith('function') || text.startsWith('(')) {
	        return [
	            {
	                token: 'invalid',
	                start: offset,
	                end: text.length + offset
	            }
	        ];
	    }
	    if (!Number.isNaN(Number(text))) {
	        return [
	            {
	                token: 'number',
	                start: offset,
	                end: text.length + offset
	            }
	        ];
	    }
	    if (text === 'true' || text === 'false') {
	        return [
	            {
	                token: 'boolean',
	                start: offset,
	                end: text.length + offset
	            }
	        ];
	    }
	    if (text === 'null') {
	        return [
	            {
	                token: 'null',
	                start: offset,
	                end: text.length + offset
	            }
	        ];
	    }
	    if (text.startsWith('"')) {
	        if (text.endsWith(': [') || text.endsWith(': {')) {
	            return [
	                {
	                    token: 'key',
	                    start: offset,
	                    end: text.length - 3 + offset
	                },
	                {
	                    token: 'punctuation',
	                    start: text.length - 3,
	                    end: text.length - 2 + offset
	                },
	                {
	                    token: 'plain',
	                    start: text.length - 2,
	                    end: text.length - 1 + offset
	                },
	                {
	                    token: 'punctuation',
	                    start: text.length - 1,
	                    end: text.length + offset
	                }
	            ];
	        }
	        let pairedQuoteIndex = 1;
	        while(pairedQuoteIndex < text.length){
	            if (text[pairedQuoteIndex] === '"') break;
	            if (text[pairedQuoteIndex] === '\\') ++pairedQuoteIndex;
	            ++pairedQuoteIndex;
	        }
	        if (pairedQuoteIndex === text.length - 1) {
	            return [
	                {
	                    token: 'string',
	                    start: offset,
	                    end: text.length + offset
	                }
	            ];
	        }
	        return [
	            {
	                token: 'key',
	                start: offset,
	                end: pairedQuoteIndex + 1 + offset
	            },
	            {
	                token: 'punctuation',
	                start: pairedQuoteIndex + 1,
	                end: pairedQuoteIndex + 2 + offset
	            },
	            {
	                token: 'plain',
	                start: pairedQuoteIndex + 2,
	                end: pairedQuoteIndex + 3 + offset
	            },
	            ...syntaxHighlightLine(enabled, text.substring(pairedQuoteIndex + 3), offset + pairedQuoteIndex + 3)
	        ];
	    }
	    if (text === '{' || text === '}' || text === '[' || text === ']') {
	        return [
	            {
	                token: 'punctuation',
	                start: offset,
	                end: text.length + offset
	            }
	        ];
	    }
	    // should this be expected?
	    return [
	        {
	            token: 'plain',
	            start: offset,
	            end: text.length + offset
	        }
	    ];
	};

	const defaultOptions = {
	    threshold: 8,
	    margin: 3
	};
	const getSegments = (l, r, options, jsonsAreEqual)=>{
	    if (!options || jsonsAreEqual) {
	        return [
	            {
	                start: 0,
	                end: l.length,
	                isEqual: false
	            }
	        ];
	    }
	    const segments = [];
	    for(let i = 0; i < l.length; i++){
	        if (l[i].type === 'equal' && r[i].type === 'equal') {
	            if (segments.length && segments[segments.length - 1].isEqual) {
	                segments[segments.length - 1].end++;
	            } else {
	                segments.push({
	                    start: i,
	                    end: i + 1,
	                    isEqual: true
	                });
	            }
	        } else {
	            if (segments.length && !segments[segments.length - 1].isEqual) {
	                segments[segments.length - 1].end++;
	            } else {
	                segments.push({
	                    start: i,
	                    end: i + 1,
	                    isEqual: false
	                });
	            }
	        }
	    }
	    const _options = options === true ? defaultOptions : {
	        ...defaultOptions,
	        ...options
	    };
	    const { threshold, margin } = _options;
	    if (threshold < margin * 2 + 1) {
	        // eslint-disable-next-line no-console, max-len
	        console.warn(`Threshold (${threshold}) is no more than 2 margins + 1 "expand" line (${margin} * 2 + 1), it's not necessary to hide unchanged areas which have less than ${margin * 2 + 1} lines.`);
	    }
	    const result = [];
	    for(let i = 0; i < segments.length; i++){
	        const segment = segments[i];
	        if (!segment.isEqual || segment.end - segment.start < threshold || segment.end - segment.start <= margin * 2 + 1) {
	            result.push(segment);
	            continue;
	        }
	        if (!i) {
	            result.push({
	                hasLinesBefore: true,
	                hasLinesAfter: false,
	                start: 0,
	                end: segment.end - margin,
	                isEqual: true
	            });
	            result.push({
	                start: segment.end - margin,
	                end: segment.end,
	                isEqual: true
	            });
	        } else if (i === segments.length - 1) {
	            result.push({
	                start: segment.start,
	                end: segment.start + margin,
	                isEqual: true
	            });
	            result.push({
	                hasLinesBefore: false,
	                hasLinesAfter: true,
	                start: segment.start + margin,
	                end: l.length,
	                isEqual: true
	            });
	        } else {
	            result.push({
	                start: segment.start,
	                end: segment.start + margin,
	                isEqual: true
	            });
	            result.push({
	                hasLinesBefore: true,
	                hasLinesAfter: true,
	                start: segment.start + margin,
	                end: segment.end - margin,
	                isEqual: true
	            });
	            result.push({
	                start: segment.end - margin,
	                end: segment.end,
	                isEqual: true
	            });
	        }
	    }
	    return result;
	};

	const DEFAULT_INDENT = 2;
	const DEFAULT_EXPAND_MORE_LINES_LIMIT = 20;
	const DEFAULT_TEXTS = {
	    noChangeDetected: 'No change detected',
	    showLinesBefore: '⭡ Show %d lines before',
	    showLinesAfter: '⭣ Show %d lines after',
	    showAll: '⭥ Show all unchanged lines'
	};
	const Viewer = (props)=>{
	    const [linesLeft, linesRight] = props.diff;
	    const jsonsAreEqual = react.exports.useMemo(()=>{
	        return linesLeft.length === linesRight.length && linesLeft.every((item)=>item.type === 'equal') && linesRight.every((item)=>item.type === 'equal');
	    }, [
	        linesLeft,
	        linesRight
	    ]);
	    const mergedTexts = {
	        ...DEFAULT_TEXTS,
	        ...props.texts
	    };
	    const lineNumberWidth = props.lineNumbers ? `calc(${String(linesLeft.length).length}ch + 16px)` : 0;
	    const indent = props.indent ?? DEFAULT_INDENT;
	    const indentChar = indent === 'tab' ? '\t' : ' ';
	    const indentSize = indent === 'tab' ? 1 : indent;
	    const inlineDiffOptions = {
	        mode: props.inlineDiffOptions?.mode || 'char',
	        wordSeparator: props.inlineDiffOptions?.wordSeparator || ''
	    };
	    const hideUnchangedLines = props.hideUnchangedLines ?? false;
	    const { scrollContainer: _scrollContainer = 'body', itemHeight = 18, expandLineHeight = 26 } = !props.virtual || props.virtual === true ? {} : props.virtual;
	    const scrollContainer = _scrollContainer === 'body' ? document.body : document.querySelector(_scrollContainer);
	    const totalColumns = props.lineNumbers ? 4 : 2;
	    // Use these refs to keep the diff data and segments sync,
	    // or it may cause runtime error because of their mismatch.
	    // Do not use the states to render, use the refs to render and use `updateViewer` to update.
	    const linesLeftRef = react.exports.useRef(linesLeft);
	    const linesRightRef = react.exports.useRef(linesRight);
	    const segmentsRef = react.exports.useRef(getSegments(linesLeft, linesRight, hideUnchangedLines, jsonsAreEqual));
	    const accTopRef = react.exports.useRef([]);
	    const totalHeightRef = react.exports.useRef(0);
	    const tbodyRef = react.exports.useRef(null);
	    const [, forceUpdate] = react.exports.useState({});
	    const updateViewer = ()=>{
	        accTopRef.current = [];
	        if (props.virtual) {
	            let acc = 0;
	            for (const segment of segmentsRef.current){
	                if (isExpandLine(segment)) {
	                    accTopRef.current.push(acc);
	                    acc += expandLineHeight;
	                } else {
	                    accTopRef.current.push(acc);
	                    acc += itemHeight * (segment.end - segment.start);
	                }
	            }
	            totalHeightRef.current = segmentsRef.current.reduce((acc, segment)=>{
	                if (!isExpandLine(segment)) {
	                    return acc + (segment.end - segment.start) * itemHeight;
	                }
	                return acc + expandLineHeight;
	            }, 0);
	        }
	        forceUpdate({});
	    };
	    react.exports.useEffect(()=>{
	        linesLeftRef.current = linesLeft;
	        linesRightRef.current = linesRight;
	        segmentsRef.current = getSegments(linesLeft, linesRight, hideUnchangedLines, jsonsAreEqual);
	        updateViewer();
	    }, [
	        hideUnchangedLines,
	        linesLeft,
	        linesRight
	    ]);
	    react.exports.useEffect(()=>{
	        if (!props.virtual || !scrollContainer) {
	            return;
	        }
	        const onScroll = ()=>forceUpdate({});
	        scrollContainer.addEventListener('scroll', onScroll);
	        return ()=>{
	            scrollContainer.removeEventListener('scroll', onScroll);
	        };
	    }, [
	        props.virtual,
	        scrollContainer
	    ]);
	    const onExpandBefore = (segmentIndex)=>(lines)=>{
	            const newSegments = [
	                ...segmentsRef.current
	            ];
	            const newSegment = newSegments[segmentIndex];
	            newSegments[segmentIndex] = {
	                ...newSegment,
	                end: Math.max(newSegment.end - lines, newSegment.start)
	            };
	            if (segmentIndex + 1 < segmentsRef.current.length - 1) {
	                newSegments[segmentIndex + 1] = {
	                    ...newSegments[segmentIndex + 1],
	                    start: Math.max(newSegment.end - lines, newSegment.start)
	                };
	            }
	            segmentsRef.current = newSegments;
	            updateViewer();
	        };
	    const onExpandAfter = (segmentIndex)=>(lines)=>{
	            const newSegments = [
	                ...segmentsRef.current
	            ];
	            const newSegment = newSegments[segmentIndex];
	            newSegments[segmentIndex] = {
	                ...newSegment,
	                start: Math.min(newSegment.start + lines, newSegment.end)
	            };
	            if (segmentIndex > 1) {
	                newSegments[segmentIndex - 1] = {
	                    ...newSegments[segmentIndex - 1],
	                    end: Math.min(newSegment.start + lines, newSegment.end)
	                };
	            }
	            segmentsRef.current = newSegments;
	            updateViewer();
	        };
	    const onExpandAll = (segmentIndex)=>()=>{
	            const newSegments = [
	                ...segmentsRef.current
	            ];
	            const newSegment = newSegments[segmentIndex];
	            newSegments[segmentIndex] = {
	                ...newSegment,
	                start: newSegment.start,
	                end: newSegment.start
	            };
	            if (segmentIndex + 1 < segmentsRef.current.length - 1) {
	                newSegments[segmentIndex + 1] = {
	                    ...newSegments[segmentIndex + 1],
	                    start: newSegment.start
	                };
	            } else {
	                newSegments[segmentIndex - 1] = {
	                    ...newSegments[segmentIndex - 1],
	                    end: newSegment.end
	                };
	            }
	            segmentsRef.current = newSegments;
	            updateViewer();
	        };
	    const renderInlineResult = (text, info = [], comma = false, syntaxHighlightEnabled = false)=>/*#__PURE__*/ react.exports.createElement(react.exports.Fragment, null, info.map((item, index)=>{
	            const frag = text.slice(item.start, item.end);
	            if (!item.type && !item.token) {
	                return frag;
	            }
	            const className = [
	                item.type ? `inline-diff-${item.type}` : '',
	                item.token ? `token ${item.token}` : ''
	            ].filter(Boolean).join(' ');
	            return /*#__PURE__*/ react.exports.createElement("span", {
	                key: `${index}-${item.type}-${frag}`,
	                className: className
	            }, frag);
	        }), comma && (syntaxHighlightEnabled ? /*#__PURE__*/ react.exports.createElement("span", {
	            className: "token punctuation"
	        }, ",") : ','));
	    const renderLine = (index, syntaxHighlightEnabled)=>{
	        const l = linesLeftRef.current[index];
	        const r = linesRightRef.current[index];
	        const [lDiff, rDiff] = props.highlightInlineDiff && l.type === 'modify' && r.type === 'modify' ? getInlineDiff(l.text, r.text, inlineDiffOptions) : [
	            [],
	            []
	        ];
	        const lTokens = syntaxHighlightLine(syntaxHighlightEnabled, l.text, 0);
	        const rTokens = syntaxHighlightLine(syntaxHighlightEnabled, r.text, 0);
	        const lResult = mergeSegments(lTokens, lDiff);
	        const rResult = mergeSegments(rTokens, rDiff);
	        const bgLeft = l.type !== 'equal' ? props.bgColour?.[l.type] ?? '' : '';
	        const bgRight = r.type !== 'equal' ? props.bgColour?.[r.type] ?? '' : '';
	        return(// eslint-disable-next-line react/no-array-index-key
	        /*#__PURE__*/ react.exports.createElement("tr", {
	            key: index
	        }, props.lineNumbers && /*#__PURE__*/ react.exports.createElement("td", {
	            className: `line-${l.type} line-number`,
	            style: {
	                backgroundColor: bgLeft
	            }
	        }, l.lineNumber), /*#__PURE__*/ react.exports.createElement("td", {
	            className: `line-${l.type}`,
	            style: {
	                backgroundColor: bgLeft
	            }
	        }, /*#__PURE__*/ react.exports.createElement("pre", null, l.text && indentChar.repeat(l.level * indentSize), renderInlineResult(l.text, lResult, l.comma, syntaxHighlightEnabled))), props.lineNumbers && /*#__PURE__*/ react.exports.createElement("td", {
	            className: `line-${r.type} line-number`,
	            style: {
	                backgroundColor: bgRight
	            }
	        }, r.lineNumber), /*#__PURE__*/ react.exports.createElement("td", {
	            className: `line-${r.type}`,
	            style: {
	                backgroundColor: bgRight
	            }
	        }, /*#__PURE__*/ react.exports.createElement("pre", null, r.text && indentChar.repeat(r.level * indentSize), renderInlineResult(r.text, rResult, r.comma, syntaxHighlightEnabled)))));
	    };
	    const renderExpandLine = (hasLinesBefore, hasLinesAfter, expandMoreLinesLimit, index)=>{
	        return /*#__PURE__*/ react.exports.createElement(react.exports.Fragment, null, hasLinesBefore && /*#__PURE__*/ react.exports.createElement("button", {
	            onClick: ()=>onExpandBefore(index)(expandMoreLinesLimit)
	        }, mergedTexts.showLinesBefore.replaceAll('%d', String(expandMoreLinesLimit))), /*#__PURE__*/ react.exports.createElement("button", {
	            onClick: ()=>onExpandAll(index)()
	        }, mergedTexts.showAll), hasLinesAfter && /*#__PURE__*/ react.exports.createElement("button", {
	            onClick: ()=>onExpandAfter(index)(expandMoreLinesLimit)
	        }, mergedTexts.showLinesAfter.replaceAll('%d', String(expandMoreLinesLimit))));
	    };
	    const renderSegment = (segment, index, renderStart, renderEnd, syntaxHighlightEnabled)=>{
	        let { start, end } = segment;
	        start = Math.max(start, renderStart);
	        end = Math.min(end, renderEnd);
	        if (start === end) {
	            return null;
	        }
	        if (!isExpandLine(segment)) {
	            return Array(end - start).fill(0).map((_, index)=>renderLine(start + index, syntaxHighlightEnabled));
	        }
	        const { hasLinesBefore, hasLinesAfter } = segment;
	        const expandMoreLinesLimit = typeof hideUnchangedLines === 'boolean' ? DEFAULT_EXPAND_MORE_LINES_LIMIT : hideUnchangedLines.expandMoreLinesLimit || DEFAULT_EXPAND_MORE_LINES_LIMIT;
	        return [
	            /*#__PURE__*/ react.exports.createElement("tr", {
	                key: `expand-line-${index}`,
	                className: "expand-line"
	            }, /*#__PURE__*/ react.exports.createElement("td", {
	                colSpan: totalColumns,
	                className: `${hasLinesBefore ? 'has-lines-before' : ''} ${hasLinesAfter ? 'has-lines-after' : ''}`
	            }, typeof hideUnchangedLines !== 'boolean' && hideUnchangedLines.expandLineRenderer ? hideUnchangedLines.expandLineRenderer({
	                hasLinesBefore,
	                hasLinesAfter,
	                onExpandBefore: onExpandBefore(index),
	                onExpandAfter: onExpandAfter(index),
	                onExpandAll: onExpandAll(index)
	            }) : renderExpandLine(hasLinesBefore, hasLinesAfter, expandMoreLinesLimit, index)))
	        ];
	    };
	    const renderTbody = (syntaxHighlightEnabled)=>{
	        if (jsonsAreEqual && hideUnchangedLines) {
	            return /*#__PURE__*/ react.exports.createElement("tr", {
	                key: "message-line",
	                className: "message-line"
	            }, /*#__PURE__*/ react.exports.createElement("td", {
	                colSpan: totalColumns
	            }, mergedTexts.noChangeDetected));
	        }
	        if (!props.virtual) {
	            return segmentsRef.current.map((item, index)=>renderSegment(item, index, 0, linesLeftRef.current.length, syntaxHighlightEnabled));
	        }
	        const containerHeight = scrollContainer?.clientHeight ?? 0;
	        const scrollTop = scrollContainer?.scrollTop ?? 0;
	        const scrollBottom = scrollTop + containerHeight;
	        let t = tbodyRef.current;
	        let firstElementTop = t?.offsetTop ?? 0;
	        while(t?.offsetParent && t?.offsetParent !== scrollContainer){
	            t = t.offsetParent;
	            firstElementTop += t.offsetTop;
	        }
	        if (firstElementTop > scrollBottom || firstElementTop + totalHeightRef.current < scrollTop) {
	            return /*#__PURE__*/ react.exports.createElement("tr", null, /*#__PURE__*/ react.exports.createElement("td", {
	                colSpan: totalColumns,
	                style: {
	                    height: `${totalHeightRef.current}px`
	                }
	            }));
	        }
	        const viewportTop = scrollTop - firstElementTop;
	        const viewportBottom = scrollBottom - firstElementTop;
	        const [startSegment, startLine, endSegment, endLine] = findVisibleLines(segmentsRef.current, accTopRef.current, viewportTop, viewportBottom, itemHeight, expandLineHeight);
	        const [topHeight, bottomHeight] = calculatePlaceholderHeight(segmentsRef.current, accTopRef.current, startSegment, startLine, endSegment, endLine, itemHeight, expandLineHeight, totalHeightRef.current);
	        const visibleSegments = segmentsRef.current.slice(startSegment, endSegment + 1);
	        return visibleSegments.length ? /*#__PURE__*/ react.exports.createElement(react.exports.Fragment, null, /*#__PURE__*/ react.exports.createElement("tr", null, /*#__PURE__*/ react.exports.createElement("td", {
	            colSpan: totalColumns,
	            style: {
	                height: topHeight,
	                padding: 0
	            }
	        })), visibleSegments.map((segment, index)=>renderSegment(segment, index, startLine, endLine, syntaxHighlightEnabled)), /*#__PURE__*/ react.exports.createElement("tr", null, /*#__PURE__*/ react.exports.createElement("td", {
	            colSpan: totalColumns,
	            style: {
	                height: bottomHeight,
	                padding: 0
	            }
	        }))) : /*#__PURE__*/ react.exports.createElement("tr", null, /*#__PURE__*/ react.exports.createElement("td", {
	            colSpan: totalColumns,
	            style: {
	                height: `${totalHeightRef.current}px`
	            }
	        }));
	    };
	    const renderMeasureLine = ()=>/*#__PURE__*/ react.exports.createElement("colgroup", {
	            className: "measure-line"
	        }, props.lineNumbers && /*#__PURE__*/ react.exports.createElement("col", {
	            style: {
	                width: lineNumberWidth
	            }
	        }), /*#__PURE__*/ react.exports.createElement("col", null), props.lineNumbers && /*#__PURE__*/ react.exports.createElement("col", {
	            style: {
	                width: lineNumberWidth
	            }
	        }), /*#__PURE__*/ react.exports.createElement("col", null));
	    const classes = [
	        'json-diff-viewer',
	        props.virtual && 'json-diff-viewer-virtual',
	        props.syntaxHighlight && `json-diff-viewer-theme-${props.syntaxHighlight.theme || 'monokai'}`,
	        props.className
	    ].filter(Boolean).join(' ');
	    const syntaxHighlightEnabled = !!props.syntaxHighlight;
	    return /*#__PURE__*/ react.exports.createElement("table", {
	        className: classes,
	        style: props.style
	    }, renderMeasureLine(), /*#__PURE__*/ react.exports.createElement("tbody", {
	        ref: tbodyRef
	    }, renderTbody(syntaxHighlightEnabled)));
	};
	Viewer.displayName = 'Viewer';

	var prism = {exports: {}};

	(function(module) {
	    /* **********************************************
	     Begin prism-core.js
	********************************************** */ /// <reference lib="WebWorker"/>
	    var _self = typeof window !== 'undefined' ? window // if in browser
	     : typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope ? self // if in worker
	     : {} // if in node js
	    ;
	    /**
	 * Prism: Lightweight, robust, elegant syntax highlighting
	 *
	 * @license MIT <https://opensource.org/licenses/MIT>
	 * @author Lea Verou <https://lea.verou.me>
	 * @namespace
	 * @public
	 */ var Prism = function(_self) {
	        // Private helper vars
	        var lang = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i;
	        var uniqueId = 0;
	        // The grammar object for plaintext
	        var plainTextGrammar = {};
	        var _ = {
	            /**
			 * By default, Prism will attempt to highlight all code elements (by calling {@link Prism.highlightAll}) on the
			 * current page after the page finished loading. This might be a problem if e.g. you wanted to asynchronously load
			 * additional languages or plugins yourself.
			 *
			 * By setting this value to `true`, Prism will not automatically highlight all code elements on the page.
			 *
			 * You obviously have to change this value before the automatic highlighting started. To do this, you can add an
			 * empty Prism object into the global scope before loading the Prism script like this:
			 *
			 * ```js
			 * window.Prism = window.Prism || {};
			 * Prism.manual = true;
			 * // add a new <script> to load Prism's script
			 * ```
			 *
			 * @default false
			 * @type {boolean}
			 * @memberof Prism
			 * @public
			 */ manual: _self.Prism && _self.Prism.manual,
	            /**
			 * By default, if Prism is in a web worker, it assumes that it is in a worker it created itself, so it uses
			 * `addEventListener` to communicate with its parent instance. However, if you're using Prism manually in your
			 * own worker, you don't want it to do this.
			 *
			 * By setting this value to `true`, Prism will not add its own listeners to the worker.
			 *
			 * You obviously have to change this value before Prism executes. To do this, you can add an
			 * empty Prism object into the global scope before loading the Prism script like this:
			 *
			 * ```js
			 * window.Prism = window.Prism || {};
			 * Prism.disableWorkerMessageHandler = true;
			 * // Load Prism's script
			 * ```
			 *
			 * @default false
			 * @type {boolean}
			 * @memberof Prism
			 * @public
			 */ disableWorkerMessageHandler: _self.Prism && _self.Prism.disableWorkerMessageHandler,
	            /**
			 * A namespace for utility methods.
			 *
			 * All function in this namespace that are not explicitly marked as _public_ are for __internal use only__ and may
			 * change or disappear at any time.
			 *
			 * @namespace
			 * @memberof Prism
			 */ util: {
	                encode: function encode(tokens) {
	                    if (tokens instanceof Token) {
	                        return new Token(tokens.type, encode(tokens.content), tokens.alias);
	                    } else if (Array.isArray(tokens)) {
	                        return tokens.map(encode);
	                    } else {
	                        return tokens.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/\u00a0/g, ' ');
	                    }
	                },
	                /**
				 * Returns the name of the type of the given value.
				 *
				 * @param {any} o
				 * @returns {string}
				 * @example
				 * type(null)      === 'Null'
				 * type(undefined) === 'Undefined'
				 * type(123)       === 'Number'
				 * type('foo')     === 'String'
				 * type(true)      === 'Boolean'
				 * type([1, 2])    === 'Array'
				 * type({})        === 'Object'
				 * type(String)    === 'Function'
				 * type(/abc+/)    === 'RegExp'
				 */ type: function(o) {
	                    return Object.prototype.toString.call(o).slice(8, -1);
	                },
	                /**
				 * Returns a unique number for the given object. Later calls will still return the same number.
				 *
				 * @param {Object} obj
				 * @returns {number}
				 */ objId: function(obj) {
	                    if (!obj['__id']) {
	                        Object.defineProperty(obj, '__id', {
	                            value: ++uniqueId
	                        });
	                    }
	                    return obj['__id'];
	                },
	                /**
				 * Creates a deep clone of the given object.
				 *
				 * The main intended use of this function is to clone language definitions.
				 *
				 * @param {T} o
				 * @param {Record<number, any>} [visited]
				 * @returns {T}
				 * @template T
				 */ clone: function deepClone(o, visited) {
	                    visited = visited || {};
	                    var clone;
	                    var id;
	                    switch(_.util.type(o)){
	                        case 'Object':
	                            id = _.util.objId(o);
	                            if (visited[id]) {
	                                return visited[id];
	                            }
	                            clone = /** @type {Record<string, any>} */ {};
	                            visited[id] = clone;
	                            for(var key in o){
	                                if (o.hasOwnProperty(key)) {
	                                    clone[key] = deepClone(o[key], visited);
	                                }
	                            }
	                            return /** @type {any} */ clone;
	                        case 'Array':
	                            id = _.util.objId(o);
	                            if (visited[id]) {
	                                return visited[id];
	                            }
	                            clone = [];
	                            visited[id] = clone;
	                            /** @type {any} */ o.forEach(function(v, i) {
	                                clone[i] = deepClone(v, visited);
	                            });
	                            return /** @type {any} */ clone;
	                        default:
	                            return o;
	                    }
	                },
	                /**
				 * Returns the Prism language of the given element set by a `language-xxxx` or `lang-xxxx` class.
				 *
				 * If no language is set for the element or the element is `null` or `undefined`, `none` will be returned.
				 *
				 * @param {Element} element
				 * @returns {string}
				 */ getLanguage: function(element) {
	                    while(element){
	                        var m = lang.exec(element.className);
	                        if (m) {
	                            return m[1].toLowerCase();
	                        }
	                        element = element.parentElement;
	                    }
	                    return 'none';
	                },
	                /**
				 * Sets the Prism `language-xxxx` class of the given element.
				 *
				 * @param {Element} element
				 * @param {string} language
				 * @returns {void}
				 */ setLanguage: function(element, language) {
	                    // remove all `language-xxxx` classes
	                    // (this might leave behind a leading space)
	                    element.className = element.className.replace(RegExp(lang, 'gi'), '');
	                    // add the new `language-xxxx` class
	                    // (using `classList` will automatically clean up spaces for us)
	                    element.classList.add('language-' + language);
	                },
	                /**
				 * Returns the script element that is currently executing.
				 *
				 * This does __not__ work for line script element.
				 *
				 * @returns {HTMLScriptElement | null}
				 */ currentScript: function() {
	                    if (typeof document === 'undefined') {
	                        return null;
	                    }
	                    if ('currentScript' in document && 1 < 2 /* hack to trip TS' flow analysis */ ) {
	                        return /** @type {any} */ document.currentScript;
	                    }
	                    // IE11 workaround
	                    // we'll get the src of the current script by parsing IE11's error stack trace
	                    // this will not work for inline scripts
	                    try {
	                        throw new Error();
	                    } catch (err) {
	                        // Get file src url from stack. Specifically works with the format of stack traces in IE.
	                        // A stack will look like this:
	                        //
	                        // Error
	                        //    at _.util.currentScript (http://localhost/components/prism-core.js:119:5)
	                        //    at Global code (http://localhost/components/prism-core.js:606:1)
	                        var src = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(err.stack) || [])[1];
	                        if (src) {
	                            var scripts = document.getElementsByTagName('script');
	                            for(var i in scripts){
	                                if (scripts[i].src == src) {
	                                    return scripts[i];
	                                }
	                            }
	                        }
	                        return null;
	                    }
	                },
	                /**
				 * Returns whether a given class is active for `element`.
				 *
				 * The class can be activated if `element` or one of its ancestors has the given class and it can be deactivated
				 * if `element` or one of its ancestors has the negated version of the given class. The _negated version_ of the
				 * given class is just the given class with a `no-` prefix.
				 *
				 * Whether the class is active is determined by the closest ancestor of `element` (where `element` itself is
				 * closest ancestor) that has the given class or the negated version of it. If neither `element` nor any of its
				 * ancestors have the given class or the negated version of it, then the default activation will be returned.
				 *
				 * In the paradoxical situation where the closest ancestor contains __both__ the given class and the negated
				 * version of it, the class is considered active.
				 *
				 * @param {Element} element
				 * @param {string} className
				 * @param {boolean} [defaultActivation=false]
				 * @returns {boolean}
				 */ isActive: function(element, className, defaultActivation) {
	                    var no = 'no-' + className;
	                    while(element){
	                        var classList = element.classList;
	                        if (classList.contains(className)) {
	                            return true;
	                        }
	                        if (classList.contains(no)) {
	                            return false;
	                        }
	                        element = element.parentElement;
	                    }
	                    return !!defaultActivation;
	                }
	            },
	            /**
			 * This namespace contains all currently loaded languages and the some helper functions to create and modify languages.
			 *
			 * @namespace
			 * @memberof Prism
			 * @public
			 */ languages: {
	                /**
				 * The grammar for plain, unformatted text.
				 */ plain: plainTextGrammar,
	                plaintext: plainTextGrammar,
	                text: plainTextGrammar,
	                txt: plainTextGrammar,
	                /**
				 * Creates a deep copy of the language with the given id and appends the given tokens.
				 *
				 * If a token in `redef` also appears in the copied language, then the existing token in the copied language
				 * will be overwritten at its original position.
				 *
				 * ## Best practices
				 *
				 * Since the position of overwriting tokens (token in `redef` that overwrite tokens in the copied language)
				 * doesn't matter, they can technically be in any order. However, this can be confusing to others that trying to
				 * understand the language definition because, normally, the order of tokens matters in Prism grammars.
				 *
				 * Therefore, it is encouraged to order overwriting tokens according to the positions of the overwritten tokens.
				 * Furthermore, all non-overwriting tokens should be placed after the overwriting ones.
				 *
				 * @param {string} id The id of the language to extend. This has to be a key in `Prism.languages`.
				 * @param {Grammar} redef The new tokens to append.
				 * @returns {Grammar} The new language created.
				 * @public
				 * @example
				 * Prism.languages['css-with-colors'] = Prism.languages.extend('css', {
				 *     // Prism.languages.css already has a 'comment' token, so this token will overwrite CSS' 'comment' token
				 *     // at its original position
				 *     'comment': { ... },
				 *     // CSS doesn't have a 'color' token, so this token will be appended
				 *     'color': /\b(?:red|green|blue)\b/
				 * });
				 */ extend: function(id, redef) {
	                    var lang = _.util.clone(_.languages[id]);
	                    for(var key in redef){
	                        lang[key] = redef[key];
	                    }
	                    return lang;
	                },
	                /**
				 * Inserts tokens _before_ another token in a language definition or any other grammar.
				 *
				 * ## Usage
				 *
				 * This helper method makes it easy to modify existing languages. For example, the CSS language definition
				 * not only defines CSS highlighting for CSS documents, but also needs to define highlighting for CSS embedded
				 * in HTML through `<style>` elements. To do this, it needs to modify `Prism.languages.markup` and add the
				 * appropriate tokens. However, `Prism.languages.markup` is a regular JavaScript object literal, so if you do
				 * this:
				 *
				 * ```js
				 * Prism.languages.markup.style = {
				 *     // token
				 * };
				 * ```
				 *
				 * then the `style` token will be added (and processed) at the end. `insertBefore` allows you to insert tokens
				 * before existing tokens. For the CSS example above, you would use it like this:
				 *
				 * ```js
				 * Prism.languages.insertBefore('markup', 'cdata', {
				 *     'style': {
				 *         // token
				 *     }
				 * });
				 * ```
				 *
				 * ## Special cases
				 *
				 * If the grammars of `inside` and `insert` have tokens with the same name, the tokens in `inside`'s grammar
				 * will be ignored.
				 *
				 * This behavior can be used to insert tokens after `before`:
				 *
				 * ```js
				 * Prism.languages.insertBefore('markup', 'comment', {
				 *     'comment': Prism.languages.markup.comment,
				 *     // tokens after 'comment'
				 * });
				 * ```
				 *
				 * ## Limitations
				 *
				 * The main problem `insertBefore` has to solve is iteration order. Since ES2015, the iteration order for object
				 * properties is guaranteed to be the insertion order (except for integer keys) but some browsers behave
				 * differently when keys are deleted and re-inserted. So `insertBefore` can't be implemented by temporarily
				 * deleting properties which is necessary to insert at arbitrary positions.
				 *
				 * To solve this problem, `insertBefore` doesn't actually insert the given tokens into the target object.
				 * Instead, it will create a new object and replace all references to the target object with the new one. This
				 * can be done without temporarily deleting properties, so the iteration order is well-defined.
				 *
				 * However, only references that can be reached from `Prism.languages` or `insert` will be replaced. I.e. if
				 * you hold the target object in a variable, then the value of the variable will not change.
				 *
				 * ```js
				 * var oldMarkup = Prism.languages.markup;
				 * var newMarkup = Prism.languages.insertBefore('markup', 'comment', { ... });
				 *
				 * assert(oldMarkup !== Prism.languages.markup);
				 * assert(newMarkup === Prism.languages.markup);
				 * ```
				 *
				 * @param {string} inside The property of `root` (e.g. a language id in `Prism.languages`) that contains the
				 * object to be modified.
				 * @param {string} before The key to insert before.
				 * @param {Grammar} insert An object containing the key-value pairs to be inserted.
				 * @param {Object<string, any>} [root] The object containing `inside`, i.e. the object that contains the
				 * object to be modified.
				 *
				 * Defaults to `Prism.languages`.
				 * @returns {Grammar} The new grammar object.
				 * @public
				 */ insertBefore: function(inside, before, insert, root) {
	                    root = root || /** @type {any} */ _.languages;
	                    var grammar = root[inside];
	                    /** @type {Grammar} */ var ret = {};
	                    for(var token in grammar){
	                        if (grammar.hasOwnProperty(token)) {
	                            if (token == before) {
	                                for(var newToken in insert){
	                                    if (insert.hasOwnProperty(newToken)) {
	                                        ret[newToken] = insert[newToken];
	                                    }
	                                }
	                            }
	                            // Do not insert token which also occur in insert. See #1525
	                            if (!insert.hasOwnProperty(token)) {
	                                ret[token] = grammar[token];
	                            }
	                        }
	                    }
	                    var old = root[inside];
	                    root[inside] = ret;
	                    // Update references in other language definitions
	                    _.languages.DFS(_.languages, function(key, value) {
	                        if (value === old && key != inside) {
	                            this[key] = ret;
	                        }
	                    });
	                    return ret;
	                },
	                // Traverse a language definition with Depth First Search
	                DFS: function DFS(o, callback, type, visited) {
	                    visited = visited || {};
	                    var objId = _.util.objId;
	                    for(var i in o){
	                        if (o.hasOwnProperty(i)) {
	                            callback.call(o, i, o[i], type || i);
	                            var property = o[i];
	                            var propertyType = _.util.type(property);
	                            if (propertyType === 'Object' && !visited[objId(property)]) {
	                                visited[objId(property)] = true;
	                                DFS(property, callback, null, visited);
	                            } else if (propertyType === 'Array' && !visited[objId(property)]) {
	                                visited[objId(property)] = true;
	                                DFS(property, callback, i, visited);
	                            }
	                        }
	                    }
	                }
	            },
	            plugins: {},
	            /**
			 * This is the most high-level function in Prism’s API.
			 * It fetches all the elements that have a `.language-xxxx` class and then calls {@link Prism.highlightElement} on
			 * each one of them.
			 *
			 * This is equivalent to `Prism.highlightAllUnder(document, async, callback)`.
			 *
			 * @param {boolean} [async=false] Same as in {@link Prism.highlightAllUnder}.
			 * @param {HighlightCallback} [callback] Same as in {@link Prism.highlightAllUnder}.
			 * @memberof Prism
			 * @public
			 */ highlightAll: function(async, callback) {
	                _.highlightAllUnder(document, async, callback);
	            },
	            /**
			 * Fetches all the descendants of `container` that have a `.language-xxxx` class and then calls
			 * {@link Prism.highlightElement} on each one of them.
			 *
			 * The following hooks will be run:
			 * 1. `before-highlightall`
			 * 2. `before-all-elements-highlight`
			 * 3. All hooks of {@link Prism.highlightElement} for each element.
			 *
			 * @param {ParentNode} container The root element, whose descendants that have a `.language-xxxx` class will be highlighted.
			 * @param {boolean} [async=false] Whether each element is to be highlighted asynchronously using Web Workers.
			 * @param {HighlightCallback} [callback] An optional callback to be invoked on each element after its highlighting is done.
			 * @memberof Prism
			 * @public
			 */ highlightAllUnder: function(container, async, callback) {
	                var env = {
	                    callback: callback,
	                    container: container,
	                    selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
	                };
	                _.hooks.run('before-highlightall', env);
	                env.elements = Array.prototype.slice.apply(env.container.querySelectorAll(env.selector));
	                _.hooks.run('before-all-elements-highlight', env);
	                for(var i = 0, element; element = env.elements[i++];){
	                    _.highlightElement(element, async === true, env.callback);
	                }
	            },
	            /**
			 * Highlights the code inside a single element.
			 *
			 * The following hooks will be run:
			 * 1. `before-sanity-check`
			 * 2. `before-highlight`
			 * 3. All hooks of {@link Prism.highlight}. These hooks will be run by an asynchronous worker if `async` is `true`.
			 * 4. `before-insert`
			 * 5. `after-highlight`
			 * 6. `complete`
			 *
			 * Some the above hooks will be skipped if the element doesn't contain any text or there is no grammar loaded for
			 * the element's language.
			 *
			 * @param {Element} element The element containing the code.
			 * It must have a class of `language-xxxx` to be processed, where `xxxx` is a valid language identifier.
			 * @param {boolean} [async=false] Whether the element is to be highlighted asynchronously using Web Workers
			 * to improve performance and avoid blocking the UI when highlighting very large chunks of code. This option is
			 * [disabled by default](https://prismjs.com/faq.html#why-is-asynchronous-highlighting-disabled-by-default).
			 *
			 * Note: All language definitions required to highlight the code must be included in the main `prism.js` file for
			 * asynchronous highlighting to work. You can build your own bundle on the
			 * [Download page](https://prismjs.com/download.html).
			 * @param {HighlightCallback} [callback] An optional callback to be invoked after the highlighting is done.
			 * Mostly useful when `async` is `true`, since in that case, the highlighting is done asynchronously.
			 * @memberof Prism
			 * @public
			 */ highlightElement: function(element, async, callback) {
	                // Find language
	                var language = _.util.getLanguage(element);
	                var grammar = _.languages[language];
	                // Set language on the element, if not present
	                _.util.setLanguage(element, language);
	                // Set language on the parent, for styling
	                var parent = element.parentElement;
	                if (parent && parent.nodeName.toLowerCase() === 'pre') {
	                    _.util.setLanguage(parent, language);
	                }
	                var code = element.textContent;
	                var env = {
	                    element: element,
	                    language: language,
	                    grammar: grammar,
	                    code: code
	                };
	                function insertHighlightedCode(highlightedCode) {
	                    env.highlightedCode = highlightedCode;
	                    _.hooks.run('before-insert', env);
	                    env.element.innerHTML = env.highlightedCode;
	                    _.hooks.run('after-highlight', env);
	                    _.hooks.run('complete', env);
	                    callback && callback.call(env.element);
	                }
	                _.hooks.run('before-sanity-check', env);
	                // plugins may change/add the parent/element
	                parent = env.element.parentElement;
	                if (parent && parent.nodeName.toLowerCase() === 'pre' && !parent.hasAttribute('tabindex')) {
	                    parent.setAttribute('tabindex', '0');
	                }
	                if (!env.code) {
	                    _.hooks.run('complete', env);
	                    callback && callback.call(env.element);
	                    return;
	                }
	                _.hooks.run('before-highlight', env);
	                if (!env.grammar) {
	                    insertHighlightedCode(_.util.encode(env.code));
	                    return;
	                }
	                if (async && _self.Worker) {
	                    var worker = new Worker(_.filename);
	                    worker.onmessage = function(evt) {
	                        insertHighlightedCode(evt.data);
	                    };
	                    worker.postMessage(JSON.stringify({
	                        language: env.language,
	                        code: env.code,
	                        immediateClose: true
	                    }));
	                } else {
	                    insertHighlightedCode(_.highlight(env.code, env.grammar, env.language));
	                }
	            },
	            /**
			 * Low-level function, only use if you know what you’re doing. It accepts a string of text as input
			 * and the language definitions to use, and returns a string with the HTML produced.
			 *
			 * The following hooks will be run:
			 * 1. `before-tokenize`
			 * 2. `after-tokenize`
			 * 3. `wrap`: On each {@link Token}.
			 *
			 * @param {string} text A string with the code to be highlighted.
			 * @param {Grammar} grammar An object containing the tokens to use.
			 *
			 * Usually a language definition like `Prism.languages.markup`.
			 * @param {string} language The name of the language definition passed to `grammar`.
			 * @returns {string} The highlighted HTML.
			 * @memberof Prism
			 * @public
			 * @example
			 * Prism.highlight('var foo = true;', Prism.languages.javascript, 'javascript');
			 */ highlight: function(text, grammar, language) {
	                var env = {
	                    code: text,
	                    grammar: grammar,
	                    language: language
	                };
	                _.hooks.run('before-tokenize', env);
	                if (!env.grammar) {
	                    throw new Error('The language "' + env.language + '" has no grammar.');
	                }
	                env.tokens = _.tokenize(env.code, env.grammar);
	                _.hooks.run('after-tokenize', env);
	                return Token.stringify(_.util.encode(env.tokens), env.language);
	            },
	            /**
			 * This is the heart of Prism, and the most low-level function you can use. It accepts a string of text as input
			 * and the language definitions to use, and returns an array with the tokenized code.
			 *
			 * When the language definition includes nested tokens, the function is called recursively on each of these tokens.
			 *
			 * This method could be useful in other contexts as well, as a very crude parser.
			 *
			 * @param {string} text A string with the code to be highlighted.
			 * @param {Grammar} grammar An object containing the tokens to use.
			 *
			 * Usually a language definition like `Prism.languages.markup`.
			 * @returns {TokenStream} An array of strings and tokens, a token stream.
			 * @memberof Prism
			 * @public
			 * @example
			 * let code = `var foo = 0;`;
			 * let tokens = Prism.tokenize(code, Prism.languages.javascript);
			 * tokens.forEach(token => {
			 *     if (token instanceof Prism.Token && token.type === 'number') {
			 *         console.log(`Found numeric literal: ${token.content}`);
			 *     }
			 * });
			 */ tokenize: function(text, grammar) {
	                var rest = grammar.rest;
	                if (rest) {
	                    for(var token in rest){
	                        grammar[token] = rest[token];
	                    }
	                    delete grammar.rest;
	                }
	                var tokenList = new LinkedList();
	                addAfter(tokenList, tokenList.head, text);
	                matchGrammar(text, tokenList, grammar, tokenList.head, 0);
	                return toArray(tokenList);
	            },
	            /**
			 * @namespace
			 * @memberof Prism
			 * @public
			 */ hooks: {
	                all: {},
	                /**
				 * Adds the given callback to the list of callbacks for the given hook.
				 *
				 * The callback will be invoked when the hook it is registered for is run.
				 * Hooks are usually directly run by a highlight function but you can also run hooks yourself.
				 *
				 * One callback function can be registered to multiple hooks and the same hook multiple times.
				 *
				 * @param {string} name The name of the hook.
				 * @param {HookCallback} callback The callback function which is given environment variables.
				 * @public
				 */ add: function(name, callback) {
	                    var hooks = _.hooks.all;
	                    hooks[name] = hooks[name] || [];
	                    hooks[name].push(callback);
	                },
	                /**
				 * Runs a hook invoking all registered callbacks with the given environment variables.
				 *
				 * Callbacks will be invoked synchronously and in the order in which they were registered.
				 *
				 * @param {string} name The name of the hook.
				 * @param {Object<string, any>} env The environment variables of the hook passed to all callbacks registered.
				 * @public
				 */ run: function(name, env) {
	                    var callbacks = _.hooks.all[name];
	                    if (!callbacks || !callbacks.length) {
	                        return;
	                    }
	                    for(var i = 0, callback; callback = callbacks[i++];){
	                        callback(env);
	                    }
	                }
	            },
	            Token: Token
	        };
	        _self.Prism = _;
	        // Typescript note:
	        // The following can be used to import the Token type in JSDoc:
	        //
	        //   @typedef {InstanceType<import("./prism-core")["Token"]>} Token
	        /**
		 * Creates a new token.
		 *
		 * @param {string} type See {@link Token#type type}
		 * @param {string | TokenStream} content See {@link Token#content content}
		 * @param {string|string[]} [alias] The alias(es) of the token.
		 * @param {string} [matchedStr=""] A copy of the full string this token was created from.
		 * @class
		 * @global
		 * @public
		 */ function Token(type, content, alias, matchedStr) {
	            /**
			 * The type of the token.
			 *
			 * This is usually the key of a pattern in a {@link Grammar}.
			 *
			 * @type {string}
			 * @see GrammarToken
			 * @public
			 */ this.type = type;
	            /**
			 * The strings or tokens contained by this token.
			 *
			 * This will be a token stream if the pattern matched also defined an `inside` grammar.
			 *
			 * @type {string | TokenStream}
			 * @public
			 */ this.content = content;
	            /**
			 * The alias(es) of the token.
			 *
			 * @type {string|string[]}
			 * @see GrammarToken
			 * @public
			 */ this.alias = alias;
	            // Copy of the full string this token was created from
	            this.length = (matchedStr || '').length | 0;
	        }
	        /**
		 * A token stream is an array of strings and {@link Token Token} objects.
		 *
		 * Token streams have to fulfill a few properties that are assumed by most functions (mostly internal ones) that process
		 * them.
		 *
		 * 1. No adjacent strings.
		 * 2. No empty strings.
		 *
		 *    The only exception here is the token stream that only contains the empty string and nothing else.
		 *
		 * @typedef {Array<string | Token>} TokenStream
		 * @global
		 * @public
		 */ /**
		 * Converts the given token or token stream to an HTML representation.
		 *
		 * The following hooks will be run:
		 * 1. `wrap`: On each {@link Token}.
		 *
		 * @param {string | Token | TokenStream} o The token or token stream to be converted.
		 * @param {string} language The name of current language.
		 * @returns {string} The HTML representation of the token or token stream.
		 * @memberof Token
		 * @static
		 */ Token.stringify = function stringify(o, language) {
	            if (typeof o == 'string') {
	                return o;
	            }
	            if (Array.isArray(o)) {
	                var s = '';
	                o.forEach(function(e) {
	                    s += stringify(e, language);
	                });
	                return s;
	            }
	            var env = {
	                type: o.type,
	                content: stringify(o.content, language),
	                tag: 'span',
	                classes: [
	                    'token',
	                    o.type
	                ],
	                attributes: {},
	                language: language
	            };
	            var aliases = o.alias;
	            if (aliases) {
	                if (Array.isArray(aliases)) {
	                    Array.prototype.push.apply(env.classes, aliases);
	                } else {
	                    env.classes.push(aliases);
	                }
	            }
	            _.hooks.run('wrap', env);
	            var attributes = '';
	            for(var name in env.attributes){
	                attributes += ' ' + name + '="' + (env.attributes[name] || '').replace(/"/g, '&quot;') + '"';
	            }
	            return '<' + env.tag + ' class="' + env.classes.join(' ') + '"' + attributes + '>' + env.content + '</' + env.tag + '>';
	        };
	        /**
		 * @param {RegExp} pattern
		 * @param {number} pos
		 * @param {string} text
		 * @param {boolean} lookbehind
		 * @returns {RegExpExecArray | null}
		 */ function matchPattern(pattern, pos, text, lookbehind) {
	            pattern.lastIndex = pos;
	            var match = pattern.exec(text);
	            if (match && lookbehind && match[1]) {
	                // change the match to remove the text matched by the Prism lookbehind group
	                var lookbehindLength = match[1].length;
	                match.index += lookbehindLength;
	                match[0] = match[0].slice(lookbehindLength);
	            }
	            return match;
	        }
	        /**
		 * @param {string} text
		 * @param {LinkedList<string | Token>} tokenList
		 * @param {any} grammar
		 * @param {LinkedListNode<string | Token>} startNode
		 * @param {number} startPos
		 * @param {RematchOptions} [rematch]
		 * @returns {void}
		 * @private
		 *
		 * @typedef RematchOptions
		 * @property {string} cause
		 * @property {number} reach
		 */ function matchGrammar(text, tokenList, grammar, startNode, startPos, rematch) {
	            for(var token in grammar){
	                if (!grammar.hasOwnProperty(token) || !grammar[token]) {
	                    continue;
	                }
	                var patterns = grammar[token];
	                patterns = Array.isArray(patterns) ? patterns : [
	                    patterns
	                ];
	                for(var j = 0; j < patterns.length; ++j){
	                    if (rematch && rematch.cause == token + ',' + j) {
	                        return;
	                    }
	                    var patternObj = patterns[j];
	                    var inside = patternObj.inside;
	                    var lookbehind = !!patternObj.lookbehind;
	                    var greedy = !!patternObj.greedy;
	                    var alias = patternObj.alias;
	                    if (greedy && !patternObj.pattern.global) {
	                        // Without the global flag, lastIndex won't work
	                        var flags = patternObj.pattern.toString().match(/[imsuy]*$/)[0];
	                        patternObj.pattern = RegExp(patternObj.pattern.source, flags + 'g');
	                    }
	                    /** @type {RegExp} */ var pattern = patternObj.pattern || patternObj;
	                    for(var currentNode = startNode.next, pos = startPos; currentNode !== tokenList.tail; pos += currentNode.value.length, currentNode = currentNode.next){
	                        if (rematch && pos >= rematch.reach) {
	                            break;
	                        }
	                        var str = currentNode.value;
	                        if (tokenList.length > text.length) {
	                            // Something went terribly wrong, ABORT, ABORT!
	                            return;
	                        }
	                        if (str instanceof Token) {
	                            continue;
	                        }
	                        var removeCount = 1; // this is the to parameter of removeBetween
	                        var match;
	                        if (greedy) {
	                            match = matchPattern(pattern, pos, text, lookbehind);
	                            if (!match || match.index >= text.length) {
	                                break;
	                            }
	                            var from = match.index;
	                            var to = match.index + match[0].length;
	                            var p = pos;
	                            // find the node that contains the match
	                            p += currentNode.value.length;
	                            while(from >= p){
	                                currentNode = currentNode.next;
	                                p += currentNode.value.length;
	                            }
	                            // adjust pos (and p)
	                            p -= currentNode.value.length;
	                            pos = p;
	                            // the current node is a Token, then the match starts inside another Token, which is invalid
	                            if (currentNode.value instanceof Token) {
	                                continue;
	                            }
	                            // find the last node which is affected by this match
	                            for(var k = currentNode; k !== tokenList.tail && (p < to || typeof k.value === 'string'); k = k.next){
	                                removeCount++;
	                                p += k.value.length;
	                            }
	                            removeCount--;
	                            // replace with the new match
	                            str = text.slice(pos, p);
	                            match.index -= pos;
	                        } else {
	                            match = matchPattern(pattern, 0, str, lookbehind);
	                            if (!match) {
	                                continue;
	                            }
	                        }
	                        // eslint-disable-next-line no-redeclare
	                        var from = match.index;
	                        var matchStr = match[0];
	                        var before = str.slice(0, from);
	                        var after = str.slice(from + matchStr.length);
	                        var reach = pos + str.length;
	                        if (rematch && reach > rematch.reach) {
	                            rematch.reach = reach;
	                        }
	                        var removeFrom = currentNode.prev;
	                        if (before) {
	                            removeFrom = addAfter(tokenList, removeFrom, before);
	                            pos += before.length;
	                        }
	                        removeRange(tokenList, removeFrom, removeCount);
	                        var wrapped = new Token(token, inside ? _.tokenize(matchStr, inside) : matchStr, alias, matchStr);
	                        currentNode = addAfter(tokenList, removeFrom, wrapped);
	                        if (after) {
	                            addAfter(tokenList, currentNode, after);
	                        }
	                        if (removeCount > 1) {
	                            // at least one Token object was removed, so we have to do some rematching
	                            // this can only happen if the current pattern is greedy
	                            /** @type {RematchOptions} */ var nestedRematch = {
	                                cause: token + ',' + j,
	                                reach: reach
	                            };
	                            matchGrammar(text, tokenList, grammar, currentNode.prev, pos, nestedRematch);
	                            // the reach might have been extended because of the rematching
	                            if (rematch && nestedRematch.reach > rematch.reach) {
	                                rematch.reach = nestedRematch.reach;
	                            }
	                        }
	                    }
	                }
	            }
	        }
	        /**
		 * @typedef LinkedListNode
		 * @property {T} value
		 * @property {LinkedListNode<T> | null} prev The previous node.
		 * @property {LinkedListNode<T> | null} next The next node.
		 * @template T
		 * @private
		 */ /**
		 * @template T
		 * @private
		 */ function LinkedList() {
	            /** @type {LinkedListNode<T>} */ var head = {
	                value: null,
	                prev: null,
	                next: null
	            };
	            /** @type {LinkedListNode<T>} */ var tail = {
	                value: null,
	                prev: head,
	                next: null
	            };
	            head.next = tail;
	            /** @type {LinkedListNode<T>} */ this.head = head;
	            /** @type {LinkedListNode<T>} */ this.tail = tail;
	            this.length = 0;
	        }
	        /**
		 * Adds a new node with the given value to the list.
		 *
		 * @param {LinkedList<T>} list
		 * @param {LinkedListNode<T>} node
		 * @param {T} value
		 * @returns {LinkedListNode<T>} The added node.
		 * @template T
		 */ function addAfter(list, node, value) {
	            // assumes that node != list.tail && values.length >= 0
	            var next = node.next;
	            var newNode = {
	                value: value,
	                prev: node,
	                next: next
	            };
	            node.next = newNode;
	            next.prev = newNode;
	            list.length++;
	            return newNode;
	        }
	        /**
		 * Removes `count` nodes after the given node. The given node will not be removed.
		 *
		 * @param {LinkedList<T>} list
		 * @param {LinkedListNode<T>} node
		 * @param {number} count
		 * @template T
		 */ function removeRange(list, node, count) {
	            var next = node.next;
	            for(var i = 0; i < count && next !== list.tail; i++){
	                next = next.next;
	            }
	            node.next = next;
	            next.prev = node;
	            list.length -= i;
	        }
	        /**
		 * @param {LinkedList<T>} list
		 * @returns {T[]}
		 * @template T
		 */ function toArray(list) {
	            var array = [];
	            var node = list.head.next;
	            while(node !== list.tail){
	                array.push(node.value);
	                node = node.next;
	            }
	            return array;
	        }
	        if (!_self.document) {
	            if (!_self.addEventListener) {
	                // in Node.js
	                return _;
	            }
	            if (!_.disableWorkerMessageHandler) {
	                // In worker
	                _self.addEventListener('message', function(evt) {
	                    var message = JSON.parse(evt.data);
	                    var lang = message.language;
	                    var code = message.code;
	                    var immediateClose = message.immediateClose;
	                    _self.postMessage(_.highlight(code, _.languages[lang], lang));
	                    if (immediateClose) {
	                        _self.close();
	                    }
	                }, false);
	            }
	            return _;
	        }
	        // Get current script and highlight
	        var script = _.util.currentScript();
	        if (script) {
	            _.filename = script.src;
	            if (script.hasAttribute('data-manual')) {
	                _.manual = true;
	            }
	        }
	        function highlightAutomaticallyCallback() {
	            if (!_.manual) {
	                _.highlightAll();
	            }
	        }
	        if (!_.manual) {
	            // If the document state is "loading", then we'll use DOMContentLoaded.
	            // If the document state is "interactive" and the prism.js script is deferred, then we'll also use the
	            // DOMContentLoaded event because there might be some plugins or languages which have also been deferred and they
	            // might take longer one animation frame to execute which can create a race condition where only some plugins have
	            // been loaded when Prism.highlightAll() is executed, depending on how fast resources are loaded.
	            // See https://github.com/PrismJS/prism/issues/2102
	            var readyState = document.readyState;
	            if (readyState === 'loading' || readyState === 'interactive' && script && script.defer) {
	                document.addEventListener('DOMContentLoaded', highlightAutomaticallyCallback);
	            } else {
	                if (window.requestAnimationFrame) {
	                    window.requestAnimationFrame(highlightAutomaticallyCallback);
	                } else {
	                    window.setTimeout(highlightAutomaticallyCallback, 16);
	                }
	            }
	        }
	        return _;
	    }(_self);
	    if (module.exports) {
	        module.exports = Prism;
	    }
	    // hack for components to work correctly in node.js
	    if (typeof commonjsGlobal !== 'undefined') {
	        commonjsGlobal.Prism = Prism;
	    }
	    // some additional documentation/types
	    /**
	 * The expansion of a simple `RegExp` literal to support additional properties.
	 *
	 * @typedef GrammarToken
	 * @property {RegExp} pattern The regular expression of the token.
	 * @property {boolean} [lookbehind=false] If `true`, then the first capturing group of `pattern` will (effectively)
	 * behave as a lookbehind group meaning that the captured text will not be part of the matched text of the new token.
	 * @property {boolean} [greedy=false] Whether the token is greedy.
	 * @property {string|string[]} [alias] An optional alias or list of aliases.
	 * @property {Grammar} [inside] The nested grammar of this token.
	 *
	 * The `inside` grammar will be used to tokenize the text value of each token of this kind.
	 *
	 * This can be used to make nested and even recursive language definitions.
	 *
	 * Note: This can cause infinite recursion. Be careful when you embed different languages or even the same language into
	 * each another.
	 * @global
	 * @public
	 */ /**
	 * @typedef Grammar
	 * @type {Object<string, RegExp | GrammarToken | Array<RegExp | GrammarToken>>}
	 * @property {Grammar} [rest] An optional grammar object that will be appended to this grammar.
	 * @global
	 * @public
	 */ /**
	 * A function which will invoked after an element was successfully highlighted.
	 *
	 * @callback HighlightCallback
	 * @param {Element} element The element successfully highlighted.
	 * @returns {void}
	 * @global
	 * @public
	 */ /**
	 * @callback HookCallback
	 * @param {Object<string, any>} env The environment variables of the hook.
	 * @returns {void}
	 * @global
	 * @public
	 */ /* **********************************************
	     Begin prism-markup.js
	********************************************** */ Prism.languages.markup = {
	        'comment': {
	            pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
	            greedy: true
	        },
	        'prolog': {
	            pattern: /<\?[\s\S]+?\?>/,
	            greedy: true
	        },
	        'doctype': {
	            // https://www.w3.org/TR/xml/#NT-doctypedecl
	            pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
	            greedy: true,
	            inside: {
	                'internal-subset': {
	                    pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
	                    lookbehind: true,
	                    greedy: true,
	                    inside: null // see below
	                },
	                'string': {
	                    pattern: /"[^"]*"|'[^']*'/,
	                    greedy: true
	                },
	                'punctuation': /^<!|>$|[[\]]/,
	                'doctype-tag': /^DOCTYPE/i,
	                'name': /[^\s<>'"]+/
	            }
	        },
	        'cdata': {
	            pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
	            greedy: true
	        },
	        'tag': {
	            pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
	            greedy: true,
	            inside: {
	                'tag': {
	                    pattern: /^<\/?[^\s>\/]+/,
	                    inside: {
	                        'punctuation': /^<\/?/,
	                        'namespace': /^[^\s>\/:]+:/
	                    }
	                },
	                'special-attr': [],
	                'attr-value': {
	                    pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
	                    inside: {
	                        'punctuation': [
	                            {
	                                pattern: /^=/,
	                                alias: 'attr-equals'
	                            },
	                            {
	                                pattern: /^(\s*)["']|["']$/,
	                                lookbehind: true
	                            }
	                        ]
	                    }
	                },
	                'punctuation': /\/?>/,
	                'attr-name': {
	                    pattern: /[^\s>\/]+/,
	                    inside: {
	                        'namespace': /^[^\s>\/:]+:/
	                    }
	                }
	            }
	        },
	        'entity': [
	            {
	                pattern: /&[\da-z]{1,8};/i,
	                alias: 'named-entity'
	            },
	            /&#x?[\da-f]{1,8};/i
	        ]
	    };
	    Prism.languages.markup['tag'].inside['attr-value'].inside['entity'] = Prism.languages.markup['entity'];
	    Prism.languages.markup['doctype'].inside['internal-subset'].inside = Prism.languages.markup;
	    // Plugin to make entity title show the real entity, idea by Roman Komarov
	    Prism.hooks.add('wrap', function(env) {
	        if (env.type === 'entity') {
	            env.attributes['title'] = env.content.replace(/&amp;/, '&');
	        }
	    });
	    Object.defineProperty(Prism.languages.markup.tag, 'addInlined', {
	        /**
		 * Adds an inlined language to markup.
		 *
		 * An example of an inlined language is CSS with `<style>` tags.
		 *
		 * @param {string} tagName The name of the tag that contains the inlined language. This name will be treated as
		 * case insensitive.
		 * @param {string} lang The language key.
		 * @example
		 * addInlined('style', 'css');
		 */ value: function addInlined(tagName, lang) {
	            var includedCdataInside = {};
	            includedCdataInside['language-' + lang] = {
	                pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
	                lookbehind: true,
	                inside: Prism.languages[lang]
	            };
	            includedCdataInside['cdata'] = /^<!\[CDATA\[|\]\]>$/i;
	            var inside = {
	                'included-cdata': {
	                    pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
	                    inside: includedCdataInside
	                }
	            };
	            inside['language-' + lang] = {
	                pattern: /[\s\S]+/,
	                inside: Prism.languages[lang]
	            };
	            var def = {};
	            def[tagName] = {
	                pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function() {
	                    return tagName;
	                }), 'i'),
	                lookbehind: true,
	                greedy: true,
	                inside: inside
	            };
	            Prism.languages.insertBefore('markup', 'cdata', def);
	        }
	    });
	    Object.defineProperty(Prism.languages.markup.tag, 'addAttribute', {
	        /**
		 * Adds an pattern to highlight languages embedded in HTML attributes.
		 *
		 * An example of an inlined language is CSS with `style` attributes.
		 *
		 * @param {string} attrName The name of the tag that contains the inlined language. This name will be treated as
		 * case insensitive.
		 * @param {string} lang The language key.
		 * @example
		 * addAttribute('style', 'css');
		 */ value: function(attrName, lang) {
	            Prism.languages.markup.tag.inside['special-attr'].push({
	                pattern: RegExp(/(^|["'\s])/.source + '(?:' + attrName + ')' + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source, 'i'),
	                lookbehind: true,
	                inside: {
	                    'attr-name': /^[^\s=]+/,
	                    'attr-value': {
	                        pattern: /=[\s\S]+/,
	                        inside: {
	                            'value': {
	                                pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
	                                lookbehind: true,
	                                alias: [
	                                    lang,
	                                    'language-' + lang
	                                ],
	                                inside: Prism.languages[lang]
	                            },
	                            'punctuation': [
	                                {
	                                    pattern: /^=/,
	                                    alias: 'attr-equals'
	                                },
	                                /"|'/
	                            ]
	                        }
	                    }
	                }
	            });
	        }
	    });
	    Prism.languages.html = Prism.languages.markup;
	    Prism.languages.mathml = Prism.languages.markup;
	    Prism.languages.svg = Prism.languages.markup;
	    Prism.languages.xml = Prism.languages.extend('markup', {});
	    Prism.languages.ssml = Prism.languages.xml;
	    Prism.languages.atom = Prism.languages.xml;
	    Prism.languages.rss = Prism.languages.xml;
	    /* **********************************************
	     Begin prism-css.js
	********************************************** */ (function(Prism) {
	        var string = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
	        Prism.languages.css = {
	            'comment': /\/\*[\s\S]*?\*\//,
	            'atrule': {
	                pattern: RegExp('@[\\w-](?:' + /[^;{\s"']|\s+(?!\s)/.source + '|' + string.source + ')*?' + /(?:;|(?=\s*\{))/.source),
	                inside: {
	                    'rule': /^@[\w-]+/,
	                    'selector-function-argument': {
	                        pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
	                        lookbehind: true,
	                        alias: 'selector'
	                    },
	                    'keyword': {
	                        pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
	                        lookbehind: true
	                    }
	                }
	            },
	            'url': {
	                // https://drafts.csswg.org/css-values-3/#urls
	                pattern: RegExp('\\burl\\((?:' + string.source + '|' + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ')\\)', 'i'),
	                greedy: true,
	                inside: {
	                    'function': /^url/i,
	                    'punctuation': /^\(|\)$/,
	                    'string': {
	                        pattern: RegExp('^' + string.source + '$'),
	                        alias: 'url'
	                    }
	                }
	            },
	            'selector': {
	                pattern: RegExp('(^|[{}\\s])[^{}\\s](?:[^{};"\'\\s]|\\s+(?![\\s{])|' + string.source + ')*(?=\\s*\\{)'),
	                lookbehind: true
	            },
	            'string': {
	                pattern: string,
	                greedy: true
	            },
	            'property': {
	                pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
	                lookbehind: true
	            },
	            'important': /!important\b/i,
	            'function': {
	                pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
	                lookbehind: true
	            },
	            'punctuation': /[(){};:,]/
	        };
	        Prism.languages.css['atrule'].inside.rest = Prism.languages.css;
	        var markup = Prism.languages.markup;
	        if (markup) {
	            markup.tag.addInlined('style', 'css');
	            markup.tag.addAttribute('style', 'css');
	        }
	    })(Prism);
	    /* **********************************************
	     Begin prism-clike.js
	********************************************** */ Prism.languages.clike = {
	        'comment': [
	            {
	                pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
	                lookbehind: true,
	                greedy: true
	            },
	            {
	                pattern: /(^|[^\\:])\/\/.*/,
	                lookbehind: true,
	                greedy: true
	            }
	        ],
	        'string': {
	            pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
	            greedy: true
	        },
	        'class-name': {
	            pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
	            lookbehind: true,
	            inside: {
	                'punctuation': /[.\\]/
	            }
	        },
	        'keyword': /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
	        'boolean': /\b(?:false|true)\b/,
	        'function': /\b\w+(?=\()/,
	        'number': /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
	        'operator': /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
	        'punctuation': /[{}[\];(),.:]/
	    };
	    /* **********************************************
	     Begin prism-javascript.js
	********************************************** */ Prism.languages.javascript = Prism.languages.extend('clike', {
	        'class-name': [
	            Prism.languages.clike['class-name'],
	            {
	                pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
	                lookbehind: true
	            }
	        ],
	        'keyword': [
	            {
	                pattern: /((?:^|\})\s*)catch\b/,
	                lookbehind: true
	            },
	            {
	                pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
	                lookbehind: true
	            }
	        ],
	        // Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
	        'function': /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
	        'number': {
	            pattern: RegExp(/(^|[^\w$])/.source + '(?:' + // constant
	            (/NaN|Infinity/.source + '|' + // binary integer
	            /0[bB][01]+(?:_[01]+)*n?/.source + '|' + // octal integer
	            /0[oO][0-7]+(?:_[0-7]+)*n?/.source + '|' + // hexadecimal integer
	            /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source + '|' + // decimal bigint
	            /\d+(?:_\d+)*n/.source + '|' + // decimal number (integer or float) but no bigint
	            /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source) + ')' + /(?![\w$])/.source),
	            lookbehind: true
	        },
	        'operator': /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
	    });
	    Prism.languages.javascript['class-name'][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;
	    Prism.languages.insertBefore('javascript', 'keyword', {
	        'regex': {
	            pattern: RegExp(// lookbehind
	            // eslint-disable-next-line regexp/no-dupe-characters-character-class
	            /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source + // Regex pattern:
	            // There are 2 regex patterns here. The RegExp set notation proposal added support for nested character
	            // classes if the `v` flag is present. Unfortunately, nested CCs are both context-free and incompatible
	            // with the only syntax, so we have to define 2 different regex patterns.
	            /\//.source + '(?:' + /(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source + '|' + // `v` flag syntax. This supports 3 levels of nested character classes.
	            /(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source + ')' + // lookahead
	            /(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),
	            lookbehind: true,
	            greedy: true,
	            inside: {
	                'regex-source': {
	                    pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
	                    lookbehind: true,
	                    alias: 'language-regex',
	                    inside: Prism.languages.regex
	                },
	                'regex-delimiter': /^\/|\/$/,
	                'regex-flags': /^[a-z]+$/
	            }
	        },
	        // This must be declared before keyword because we use "function" inside the look-forward
	        'function-variable': {
	            pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
	            alias: 'function'
	        },
	        'parameter': [
	            {
	                pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
	                lookbehind: true,
	                inside: Prism.languages.javascript
	            },
	            {
	                pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
	                lookbehind: true,
	                inside: Prism.languages.javascript
	            },
	            {
	                pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
	                lookbehind: true,
	                inside: Prism.languages.javascript
	            },
	            {
	                pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
	                lookbehind: true,
	                inside: Prism.languages.javascript
	            }
	        ],
	        'constant': /\b[A-Z](?:[A-Z_]|\dx?)*\b/
	    });
	    Prism.languages.insertBefore('javascript', 'string', {
	        'hashbang': {
	            pattern: /^#!.*/,
	            greedy: true,
	            alias: 'comment'
	        },
	        'template-string': {
	            pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
	            greedy: true,
	            inside: {
	                'template-punctuation': {
	                    pattern: /^`|`$/,
	                    alias: 'string'
	                },
	                'interpolation': {
	                    pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
	                    lookbehind: true,
	                    inside: {
	                        'interpolation-punctuation': {
	                            pattern: /^\$\{|\}$/,
	                            alias: 'punctuation'
	                        },
	                        rest: Prism.languages.javascript
	                    }
	                },
	                'string': /[\s\S]+/
	            }
	        },
	        'string-property': {
	            pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
	            lookbehind: true,
	            greedy: true,
	            alias: 'property'
	        }
	    });
	    Prism.languages.insertBefore('javascript', 'operator', {
	        'literal-property': {
	            pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
	            lookbehind: true,
	            alias: 'property'
	        }
	    });
	    if (Prism.languages.markup) {
	        Prism.languages.markup.tag.addInlined('script', 'javascript');
	        // add attribute support for all DOM events.
	        // https://developer.mozilla.org/en-US/docs/Web/Events#Standard_events
	        Prism.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source, 'javascript');
	    }
	    Prism.languages.js = Prism.languages.javascript;
	    /* **********************************************
	     Begin prism-file-highlight.js
	********************************************** */ (function() {
	        if (typeof Prism === 'undefined' || typeof document === 'undefined') {
	            return;
	        }
	        // https://developer.mozilla.org/en-US/docs/Web/API/Element/matches#Polyfill
	        if (!Element.prototype.matches) {
	            Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
	        }
	        var LOADING_MESSAGE = 'Loading…';
	        var FAILURE_MESSAGE = function(status, message) {
	            return '✖ Error ' + status + ' while fetching file: ' + message;
	        };
	        var FAILURE_EMPTY_MESSAGE = '✖ Error: File does not exist or is empty';
	        var EXTENSIONS = {
	            'js': 'javascript',
	            'py': 'python',
	            'rb': 'ruby',
	            'ps1': 'powershell',
	            'psm1': 'powershell',
	            'sh': 'bash',
	            'bat': 'batch',
	            'h': 'c',
	            'tex': 'latex'
	        };
	        var STATUS_ATTR = 'data-src-status';
	        var STATUS_LOADING = 'loading';
	        var STATUS_LOADED = 'loaded';
	        var STATUS_FAILED = 'failed';
	        var SELECTOR = 'pre[data-src]:not([' + STATUS_ATTR + '="' + STATUS_LOADED + '"])' + ':not([' + STATUS_ATTR + '="' + STATUS_LOADING + '"])';
	        /**
		 * Loads the given file.
		 *
		 * @param {string} src The URL or path of the source file to load.
		 * @param {(result: string) => void} success
		 * @param {(reason: string) => void} error
		 */ function loadFile(src, success, error) {
	            var xhr = new XMLHttpRequest();
	            xhr.open('GET', src, true);
	            xhr.onreadystatechange = function() {
	                if (xhr.readyState == 4) {
	                    if (xhr.status < 400 && xhr.responseText) {
	                        success(xhr.responseText);
	                    } else {
	                        if (xhr.status >= 400) {
	                            error(FAILURE_MESSAGE(xhr.status, xhr.statusText));
	                        } else {
	                            error(FAILURE_EMPTY_MESSAGE);
	                        }
	                    }
	                }
	            };
	            xhr.send(null);
	        }
	        /**
		 * Parses the given range.
		 *
		 * This returns a range with inclusive ends.
		 *
		 * @param {string | null | undefined} range
		 * @returns {[number, number | undefined] | undefined}
		 */ function parseRange(range) {
	            var m = /^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(range || '');
	            if (m) {
	                var start = Number(m[1]);
	                var comma = m[2];
	                var end = m[3];
	                if (!comma) {
	                    return [
	                        start,
	                        start
	                    ];
	                }
	                if (!end) {
	                    return [
	                        start,
	                        undefined
	                    ];
	                }
	                return [
	                    start,
	                    Number(end)
	                ];
	            }
	            return undefined;
	        }
	        Prism.hooks.add('before-highlightall', function(env) {
	            env.selector += ', ' + SELECTOR;
	        });
	        Prism.hooks.add('before-sanity-check', function(env) {
	            var pre = /** @type {HTMLPreElement} */ env.element;
	            if (pre.matches(SELECTOR)) {
	                env.code = ''; // fast-path the whole thing and go to complete
	                pre.setAttribute(STATUS_ATTR, STATUS_LOADING); // mark as loading
	                // add code element with loading message
	                var code = pre.appendChild(document.createElement('CODE'));
	                code.textContent = LOADING_MESSAGE;
	                var src = pre.getAttribute('data-src');
	                var language = env.language;
	                if (language === 'none') {
	                    // the language might be 'none' because there is no language set;
	                    // in this case, we want to use the extension as the language
	                    var extension = (/\.(\w+)$/.exec(src) || [
	                        ,
	                        'none'
	                    ])[1];
	                    language = EXTENSIONS[extension] || extension;
	                }
	                // set language classes
	                Prism.util.setLanguage(code, language);
	                Prism.util.setLanguage(pre, language);
	                // preload the language
	                var autoloader = Prism.plugins.autoloader;
	                if (autoloader) {
	                    autoloader.loadLanguages(language);
	                }
	                // load file
	                loadFile(src, function(text) {
	                    // mark as loaded
	                    pre.setAttribute(STATUS_ATTR, STATUS_LOADED);
	                    // handle data-range
	                    var range = parseRange(pre.getAttribute('data-range'));
	                    if (range) {
	                        var lines = text.split(/\r\n?|\n/g);
	                        // the range is one-based and inclusive on both ends
	                        var start = range[0];
	                        var end = range[1] == null ? lines.length : range[1];
	                        if (start < 0) {
	                            start += lines.length;
	                        }
	                        start = Math.max(0, Math.min(start - 1, lines.length));
	                        if (end < 0) {
	                            end += lines.length;
	                        }
	                        end = Math.max(0, Math.min(end, lines.length));
	                        text = lines.slice(start, end).join('\n');
	                        // add data-start for line numbers
	                        if (!pre.hasAttribute('data-start')) {
	                            pre.setAttribute('data-start', String(start + 1));
	                        }
	                    }
	                    // highlight code
	                    code.textContent = text;
	                    Prism.highlightElement(code);
	                }, function(error) {
	                    // mark as failed
	                    pre.setAttribute(STATUS_ATTR, STATUS_FAILED);
	                    code.textContent = error;
	                });
	            }
	        });
	        Prism.plugins.fileHighlight = {
	            /**
			 * Executes the File Highlight plugin for all matching `pre` elements under the given container.
			 *
			 * Note: Elements which are already loaded or currently loading will not be touched by this method.
			 *
			 * @param {ParentNode} [container=document]
			 */ highlight: function highlight(container) {
	                var elements = (container || document).querySelectorAll(SELECTOR);
	                for(var i = 0, element; element = elements[i++];){
	                    Prism.highlightElement(element);
	                }
	            }
	        };
	        var logged = false;
	        /** @deprecated Use `Prism.plugins.fileHighlight.highlight` instead. */ Prism.fileHighlight = function() {
	            if (!logged) {
	                console.warn('Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead.');
	                logged = true;
	            }
	            Prism.plugins.fileHighlight.highlight.apply(this, arguments);
	        };
	    })();
	})(prism);
	var Prism$1 = prism.exports;

	(function(Prism1) {
	    Prism1.languages.typescript = Prism1.languages.extend('javascript', {
	        'class-name': {
	            pattern: /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,
	            lookbehind: true,
	            greedy: true,
	            inside: null // see below
	        },
	        'builtin': /\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/
	    });
	    // The keywords TypeScript adds to JavaScript
	    Prism1.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/, // keywords that have to be followed by an identifier
	    /\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/, // This is for `import type *, {}`
	    /\btype\b(?=\s*(?:[\{*]|$))/);
	    // doesn't work with TS because TS is too complex
	    delete Prism1.languages.typescript['parameter'];
	    delete Prism1.languages.typescript['literal-property'];
	    // a version of typescript specifically for highlighting types
	    var typeInside = Prism1.languages.extend('typescript', {});
	    delete typeInside['class-name'];
	    Prism1.languages.typescript['class-name'].inside = typeInside;
	    Prism1.languages.insertBefore('typescript', 'function', {
	        'decorator': {
	            pattern: /@[$\w\xA0-\uFFFF]+/,
	            inside: {
	                'at': {
	                    pattern: /^@/,
	                    alias: 'operator'
	                },
	                'function': /^[\s\S]+/
	            }
	        },
	        'generic-function': {
	            // e.g. foo<T extends "bar" | "baz">( ...
	            pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,
	            greedy: true,
	            inside: {
	                'function': /^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,
	                'generic': {
	                    pattern: /<[\s\S]+/,
	                    alias: 'class-name',
	                    inside: typeInside
	                }
	            }
	        }
	    });
	    Prism1.languages.ts = Prism1.languages.typescript;
	})(Prism);

	(function(Prism1) {
	    var javascript = Prism1.util.clone(Prism1.languages.javascript);
	    var space = /(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source;
	    var braces = /(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source;
	    var spread = /(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;
	    /**
		 * @param {string} source
		 * @param {string} [flags]
		 */ function re(source, flags) {
	        source = source.replace(/<S>/g, function() {
	            return space;
	        }).replace(/<BRACES>/g, function() {
	            return braces;
	        }).replace(/<SPREAD>/g, function() {
	            return spread;
	        });
	        return RegExp(source, flags);
	    }
	    spread = re(spread).source;
	    Prism1.languages.jsx = Prism1.languages.extend('markup', javascript);
	    Prism1.languages.jsx.tag.pattern = re(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source);
	    Prism1.languages.jsx.tag.inside['tag'].pattern = /^<\/?[^\s>\/]*/;
	    Prism1.languages.jsx.tag.inside['attr-value'].pattern = /=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/;
	    Prism1.languages.jsx.tag.inside['tag'].inside['class-name'] = /^[A-Z]\w*(?:\.[A-Z]\w*)*$/;
	    Prism1.languages.jsx.tag.inside['comment'] = javascript['comment'];
	    Prism1.languages.insertBefore('inside', 'attr-name', {
	        'spread': {
	            pattern: re(/<SPREAD>/.source),
	            inside: Prism1.languages.jsx
	        }
	    }, Prism1.languages.jsx.tag);
	    Prism1.languages.insertBefore('inside', 'special-attr', {
	        'script': {
	            // Allow for two levels of nesting
	            pattern: re(/=<BRACES>/.source),
	            alias: 'language-javascript',
	            inside: {
	                'script-punctuation': {
	                    pattern: /^=(?=\{)/,
	                    alias: 'punctuation'
	                },
	                rest: Prism1.languages.jsx
	            }
	        }
	    }, Prism1.languages.jsx.tag);
	    // The following will handle plain text inside tags
	    var stringifyToken = function(token) {
	        if (!token) {
	            return '';
	        }
	        if (typeof token === 'string') {
	            return token;
	        }
	        if (typeof token.content === 'string') {
	            return token.content;
	        }
	        return token.content.map(stringifyToken).join('');
	    };
	    var walkTokens = function(tokens) {
	        var openedTags = [];
	        for(var i = 0; i < tokens.length; i++){
	            var token = tokens[i];
	            var notTagNorBrace = false;
	            if (typeof token !== 'string') {
	                if (token.type === 'tag' && token.content[0] && token.content[0].type === 'tag') {
	                    // We found a tag, now find its kind
	                    if (token.content[0].content[0].content === '</') {
	                        // Closing tag
	                        if (openedTags.length > 0 && openedTags[openedTags.length - 1].tagName === stringifyToken(token.content[0].content[1])) {
	                            // Pop matching opening tag
	                            openedTags.pop();
	                        }
	                    } else {
	                        if (token.content[token.content.length - 1].content === '/>') ; else {
	                            // Opening tag
	                            openedTags.push({
	                                tagName: stringifyToken(token.content[0].content[1]),
	                                openedBraces: 0
	                            });
	                        }
	                    }
	                } else if (openedTags.length > 0 && token.type === 'punctuation' && token.content === '{') {
	                    // Here we might have entered a JSX context inside a tag
	                    openedTags[openedTags.length - 1].openedBraces++;
	                } else if (openedTags.length > 0 && openedTags[openedTags.length - 1].openedBraces > 0 && token.type === 'punctuation' && token.content === '}') {
	                    // Here we might have left a JSX context inside a tag
	                    openedTags[openedTags.length - 1].openedBraces--;
	                } else {
	                    notTagNorBrace = true;
	                }
	            }
	            if (notTagNorBrace || typeof token === 'string') {
	                if (openedTags.length > 0 && openedTags[openedTags.length - 1].openedBraces === 0) {
	                    // Here we are inside a tag, and not inside a JSX context.
	                    // That's plain text: drop any tokens matched.
	                    var plainText = stringifyToken(token);
	                    // And merge text with adjacent text
	                    if (i < tokens.length - 1 && (typeof tokens[i + 1] === 'string' || tokens[i + 1].type === 'plain-text')) {
	                        plainText += stringifyToken(tokens[i + 1]);
	                        tokens.splice(i + 1, 1);
	                    }
	                    if (i > 0 && (typeof tokens[i - 1] === 'string' || tokens[i - 1].type === 'plain-text')) {
	                        plainText = stringifyToken(tokens[i - 1]) + plainText;
	                        tokens.splice(i - 1, 1);
	                        i--;
	                    }
	                    tokens[i] = new Prism1.Token('plain-text', plainText, null, plainText);
	                }
	            }
	            if (token.content && typeof token.content !== 'string') {
	                walkTokens(token.content);
	            }
	        }
	    };
	    Prism1.hooks.add('after-tokenize', function(env) {
	        if (env.language !== 'jsx' && env.language !== 'tsx') {
	            return;
	        }
	        walkTokens(env.tokens);
	    });
	})(Prism);

	(function(Prism1) {
	    var typescript = Prism1.util.clone(Prism1.languages.typescript);
	    Prism1.languages.tsx = Prism1.languages.extend('jsx', typescript);
	    // doesn't work with TS because TS is too complex
	    delete Prism1.languages.tsx['parameter'];
	    delete Prism1.languages.tsx['literal-property'];
	    // This will prevent collisions between TSX tags and TS generic types.
	    // Idea by https://github.com/karlhorky
	    // Discussion: https://github.com/PrismJS/prism/issues/2594#issuecomment-710666928
	    var tag = Prism1.languages.tsx.tag;
	    tag.pattern = RegExp(/(^|[^\w$]|(?=<\/))/.source + '(?:' + tag.pattern.source + ')', tag.pattern.flags);
	    tag.lookbehind = true;
	})(Prism);

	var e = [], t = [];
	function n(n, r) {
	    if (n && "undefined" != typeof document) {
	        var a, s = !0 === r.prepend ? "prepend" : "append", d = !0 === r.singleTag, i = "string" == typeof r.container ? document.querySelector(r.container) : document.getElementsByTagName("head")[0];
	        if (d) {
	            var u = e.indexOf(i);
	            -1 === u && (u = e.push(i) - 1, t[u] = {}), a = t[u] && t[u][s] ? t[u][s] : t[u][s] = c();
	        } else a = c();
	        65279 === n.charCodeAt(0) && (n = n.substring(1)), a.styleSheet ? a.styleSheet.cssText += n : a.appendChild(document.createTextNode(n));
	    }
	    function c() {
	        var e = document.createElement("style");
	        if (e.setAttribute("type", "text/css"), r.attributes) for(var t = Object.keys(r.attributes), n = 0; n < t.length; n++)e.setAttribute(t[n], r.attributes[t[n]]);
	        var a = "prepend" === s ? "afterbegin" : "beforeend";
	        return i.insertAdjacentElement(a, e), e;
	    }
	}

	var css = "/**\n * prism.js default theme for JavaScript, CSS and HTML\n * Based on dabblet (http://dabblet.com)\n * @author Lea Verou\n */\n\ncode[class*=\"language-\"],\npre[class*=\"language-\"] {\n\tcolor: black;\n\tbackground: none;\n\ttext-shadow: 0 1px white;\n\tfont-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;\n\tfont-size: 1em;\n\ttext-align: left;\n\twhite-space: pre;\n\tword-spacing: normal;\n\tword-break: normal;\n\tword-wrap: normal;\n\tline-height: 1.5;\n\n\t-moz-tab-size: 4;\n\t-o-tab-size: 4;\n\ttab-size: 4;\n\n\t-webkit-hyphens: none;\n\t-moz-hyphens: none;\n\t-ms-hyphens: none;\n\thyphens: none;\n}\n\npre[class*=\"language-\"]::-moz-selection, pre[class*=\"language-\"] ::-moz-selection,\ncode[class*=\"language-\"]::-moz-selection, code[class*=\"language-\"] ::-moz-selection {\n\ttext-shadow: none;\n\tbackground: #b3d4fc;\n}\n\npre[class*=\"language-\"]::selection, pre[class*=\"language-\"] ::selection,\ncode[class*=\"language-\"]::selection, code[class*=\"language-\"] ::selection {\n\ttext-shadow: none;\n\tbackground: #b3d4fc;\n}\n\n@media print {\n\tcode[class*=\"language-\"],\n\tpre[class*=\"language-\"] {\n\t\ttext-shadow: none;\n\t}\n}\n\n/* Code blocks */\npre[class*=\"language-\"] {\n\tpadding: 1em;\n\tmargin: .5em 0;\n\toverflow: auto;\n}\n\n:not(pre) > code[class*=\"language-\"],\npre[class*=\"language-\"] {\n\tbackground: #f5f2f0;\n}\n\n/* Inline code */\n:not(pre) > code[class*=\"language-\"] {\n\tpadding: .1em;\n\tborder-radius: .3em;\n\twhite-space: normal;\n}\n\n.token.comment,\n.token.prolog,\n.token.doctype,\n.token.cdata {\n\tcolor: slategray;\n}\n\n.token.punctuation {\n\tcolor: #999;\n}\n\n.token.namespace {\n\topacity: .7;\n}\n\n.token.property,\n.token.tag,\n.token.boolean,\n.token.number,\n.token.constant,\n.token.symbol,\n.token.deleted {\n\tcolor: #905;\n}\n\n.token.selector,\n.token.attr-name,\n.token.string,\n.token.char,\n.token.builtin,\n.token.inserted {\n\tcolor: #690;\n}\n\n.token.operator,\n.token.entity,\n.token.url,\n.language-css .token.string,\n.style .token.string {\n\tcolor: #9a6e3a;\n\t/* This background color was intended by the author of this theme. */\n\tbackground: hsla(0, 0%, 100%, .5);\n}\n\n.token.atrule,\n.token.attr-value,\n.token.keyword {\n\tcolor: #07a;\n}\n\n.token.function,\n.token.class-name {\n\tcolor: #DD4A68;\n}\n\n.token.regex,\n.token.important,\n.token.variable {\n\tcolor: #e90;\n}\n\n.token.important,\n.token.bold {\n\tfont-weight: bold;\n}\n.token.italic {\n\tfont-style: italic;\n}\n\n.token.entity {\n\tcursor: help;\n}\n";
	n(css, {});

	const GeneratedCode = ({ code })=>{
	    const html = React.useMemo(()=>{
	        return Prism$1.highlight(code, Prism$1.languages.tsx, 'tsx');
	    }, [
	        code
	    ]);
	    return /*#__PURE__*/ React.createElement("pre", {
	        className: "language-tsx",
	        dangerouslySetInnerHTML: {
	            __html: html
	        }
	    });
	};

	const jsStringify = (obj)=>{
	    const code = JSON.stringify(obj, null, 2);
	    return code.replace(/^(\s+)"([^"]+)":/gm, '$1$2:').replace(/: "([^'"]+)"(,?)\n/g, ': \'$1\'$2\n');
	};

	const Label = ({ title, tip })=>{
	    return /*#__PURE__*/ React.createElement("span", {
	        className: "label"
	    }, /*#__PURE__*/ React.createElement("span", {
	        className: "label-wrapper"
	    }, /*#__PURE__*/ React.createElement("span", {
	        className: "label-question-mark"
	    }, "?"), !!tip && /*#__PURE__*/ React.createElement("div", {
	        className: "label-tip"
	    }, tip)), title);
	};

	const getValue = ()=>{
	    const hash = window.location.hash ? window.location.hash.slice(1) : '';
	    const query = new URLSearchParams(hash);
	    return {
	        l: query.get('l') || '',
	        r: query.get('r') || ''
	    };
	};
	const useInitialValues = ()=>{
	    const [initialValues, setInitialValues] = React.useState(getValue());
	    React.useEffect(()=>{
	        const hashChange = ()=>{
	            const newValue = getValue();
	            if (initialValues.l !== newValue.l || initialValues.r !== newValue.r) {
	                setInitialValues(newValue);
	            }
	        };
	        window.addEventListener('hashchange', hashChange);
	        return ()=>{
	            window.removeEventListener('hashchange', hashChange);
	        };
	    }, []);
	    return initialValues;
	};
	const updateInitialValues = (l, r)=>{
	    const hash = window.location.hash ? window.location.hash.slice(1) : '';
	    const query = new URLSearchParams(hash);
	    query.set('l', l);
	    query.set('r', r);
	    window.location.hash = query.toString();
	};

	const Playground = (props)=>{
	    // differ props
	    const [detectCircular] = React.useState(true);
	    const [maxDepth, setMaxDepth] = React.useState(Infinity);
	    const [showModifications, setShowModifications] = React.useState(true);
	    const [arrayDiffMethod, setArrayDiffMethod] = React.useState('lcs');
	    const [ignoreCase, setIgnoreCase] = React.useState(false);
	    const [ignoreCaseForKey, setIgnoreCaseForKey] = React.useState(false);
	    const [recursiveEqual, setRecursiveEqual] = React.useState(true);
	    const [preserveKeyOrder, setPreserveKeyOrder] = React.useState(undefined);
	    const [compareKey, setCompareKey] = React.useState('');
	    // viewer props
	    const [indent, setIndent] = React.useState(4);
	    const [lineNumbers, setLineNumbers] = React.useState(true);
	    const [highlightInlineDiff, setHighlightInlineDiff] = React.useState(true);
	    const [inlineDiffMode, setInlineDiffMode] = React.useState('word');
	    const [inlineDiffSeparator, setInlineDiffSeparator] = React.useState(' ');
	    const [hideUnchangedLines, setHideUnchangedLines] = React.useState(true);
	    const [syntaxHighlight, setSyntaxHighlight] = React.useState(false);
	    const [virtual, setVirtual] = React.useState(false);
	    const differOptions = React.useMemo(()=>({
	            detectCircular,
	            maxDepth,
	            showModifications,
	            arrayDiffMethod,
	            ignoreCase,
	            ignoreCaseForKey,
	            recursiveEqual,
	            preserveKeyOrder,
	            compareKey: compareKey || undefined
	        }), [
	        detectCircular,
	        maxDepth,
	        showModifications,
	        arrayDiffMethod,
	        ignoreCase,
	        ignoreCaseForKey,
	        recursiveEqual,
	        preserveKeyOrder,
	        compareKey
	    ]);
	    const differ = React.useMemo(()=>new Differ(differOptions), [
	        differOptions
	    ]);
	    const [diff, setDiff] = React.useState(differ.diff('', ''));
	    const [fullscreen, setFullscreen] = React.useState(false);
	    const [error, setError] = React.useState('');
	    const _triggerDiff = (before, after)=>{
	        try {
	            const result = differ.diff(JSON.parse(String(before || 'null')), JSON.parse(String(after || 'null')));
	            setError('');
	            setDiff(result);
	        } catch (e) {
	            setError(e.message);
	            console.error(e); // eslint-disable-line no-console
	        }
	    };
	    const triggerDiff = React.useCallback(debounce_1(_triggerDiff, 500), [
	        differ
	    ]);
	    const inlineDiffOptions = React.useMemo(()=>({
	            mode: inlineDiffMode,
	            wordSeparator: inlineDiffSeparator
	        }), [
	        inlineDiffMode,
	        inlineDiffSeparator
	    ]);
	    const virtualOptions = React.useMemo(()=>{
	        return virtual && {
	            scrollContainer: '.playground .layout-right .results',
	            itemHeight: 16,
	            expandLineHeight: 27
	        };
	    }, [
	        virtual
	    ]);
	    const viewerOptions = React.useMemo(()=>({
	            indent,
	            lineNumbers,
	            highlightInlineDiff,
	            inlineDiffOptions,
	            hideUnchangedLines,
	            syntaxHighlight: syntaxHighlight ? {
	                theme: 'monokai'
	            } : false,
	            virtual: virtualOptions
	        }), [
	        indent,
	        lineNumbers,
	        highlightInlineDiff,
	        inlineDiffOptions,
	        hideUnchangedLines,
	        syntaxHighlight,
	        virtualOptions
	    ]);
	    const code = `
const d = new Differ(${jsStringify(differOptions)});
const diff = d.diff(before, after);

const viewerProps = ${jsStringify(viewerOptions)};
return (
  <Viewer
    diff={diff}
    {...viewerProps}
  />
);
`.trim();
	    // inputs
	    const { l, r } = useInitialValues();
	    const beforeRef = React.useRef(l || '');
	    const afterRef = React.useRef(r || '');
	    const beforeInputRef = React.useRef(null);
	    const afterInputRef = React.useRef(null);
	    const setBefore = (value, diff)=>{
	        beforeRef.current = value;
	        updateInitialValues(beforeRef.current, afterRef.current);
	        if (diff) {
	            triggerDiff(beforeRef.current, afterRef.current);
	        }
	    };
	    const setAfter = (value, diff)=>{
	        afterRef.current = value;
	        updateInitialValues(beforeRef.current, afterRef.current);
	        if (diff) {
	            triggerDiff(beforeRef.current, afterRef.current);
	        }
	    };
	    const clearAll = ()=>{
	        beforeRef.current = '';
	        afterRef.current = '';
	        updateInitialValues('', '');
	    };
	    const beautify = ()=>{
	        let before = '';
	        let after = '';
	        try {
	            if (beforeRef) {
	                before = JSON.stringify(JSON.parse(beforeRef.current || 'null'), null, 2);
	            }
	            if (afterRef) {
	                after = JSON.stringify(JSON.parse(afterRef.current || 'null'), null, 2);
	            }
	        } catch (e) {
	            setError(e.message);
	            console.error(e); // eslint-disable-line no-console
	        }
	        if (before || after) {
	            beforeInputRef.current.value = before;
	            afterInputRef.current.value = after;
	            setBefore(before, false);
	            setAfter(after, false);
	            updateInitialValues(before, after);
	        }
	    };
	    React.useEffect(()=>{
	        if (l !== beforeRef.current || r !== afterRef.current) {
	            setBefore(l || '', false);
	            setAfter(r || '', false);
	            triggerDiff(l, r);
	        }
	    }, [
	        l,
	        r
	    ]);
	    React.useEffect(()=>{
	        _triggerDiff(beforeRef.current, afterRef.current);
	    }, [
	        differOptions
	    ]);
	    return /*#__PURE__*/ React.createElement("div", {
	        className: "playground"
	    }, /*#__PURE__*/ React.createElement("div", {
	        className: "layout-left"
	    }, /*#__PURE__*/ React.createElement("div", {
	        className: "logo"
	    }, "JSON Diff Kit"), /*#__PURE__*/ React.createElement("div", {
	        className: "back",
	        onClick: props.onSwitch
	    }, "Go to docs & demo"), /*#__PURE__*/ React.createElement("div", {
	        className: "config"
	    }, /*#__PURE__*/ React.createElement("form", null, /*#__PURE__*/ React.createElement("legend", null, "DIFFER CONFIGURATION"), /*#__PURE__*/ React.createElement("label", {
	        htmlFor: "detect-circular"
	    }, /*#__PURE__*/ React.createElement(Label, {
	        title: "Detect circular references",
	        tip: /*#__PURE__*/ React.createElement(React.Fragment, null, "Whether to detect circular reference in source objects before diff starts. Default is ", /*#__PURE__*/ React.createElement("code", null, "true"), ". If you are confident about your data (maybe it's from ", /*#__PURE__*/ React.createElement("code", null, "JSON.parse"), " or an API response), you can set it to ", /*#__PURE__*/ React.createElement("code", null, "false"), " to improve performance, but the algorithm may not stop if circular reference does show up.")
	    }), /*#__PURE__*/ React.createElement("input", {
	        type: "checkbox",
	        id: "detect-circular",
	        checked: detectCircular,
	        disabled: true
	    })), /*#__PURE__*/ React.createElement("label", {
	        htmlFor: "max-depth"
	    }, /*#__PURE__*/ React.createElement(Label, {
	        title: "Max depth",
	        tip: /*#__PURE__*/ React.createElement(React.Fragment, null, "If there are nested objects in your data, you can set a max depth to limit the diff to a certain level. Default is ", /*#__PURE__*/ React.createElement("code", null, "Infinity"), ". If you set it to ", /*#__PURE__*/ React.createElement("code", null, "0"), ", only the top level will be diffed.")
	    }), /*#__PURE__*/ React.createElement("label", {
	        htmlFor: "max-depth-infinity",
	        style: {
	            margin: '0 4px 0 0'
	        }
	    }, "∞ ", /*#__PURE__*/ React.createElement("input", {
	        type: "checkbox",
	        id: "max-depth-infinity",
	        checked: maxDepth === Infinity,
	        onChange: (e)=>setMaxDepth(e.target.checked ? Infinity : 0)
	    })), /*#__PURE__*/ React.createElement("input", {
	        type: "number",
	        id: "max-depth",
	        value: maxDepth === Infinity ? undefined : maxDepth,
	        onChange: (e)=>setMaxDepth(Number(e.target.value)),
	        min: 0,
	        max: 10,
	        step: 1,
	        disabled: maxDepth === Infinity,
	        style: {
	            width: '3em'
	        }
	    })), /*#__PURE__*/ React.createElement("label", {
	        htmlFor: "show-modifications"
	    }, /*#__PURE__*/ React.createElement(Label, {
	        title: "Show modifications",
	        tip: /*#__PURE__*/ React.createElement(React.Fragment, null, "Support recognizing modifications, default ", /*#__PURE__*/ React.createElement("code", null, "true"), " means the differ will output the ", /*#__PURE__*/ React.createElement("code", null, "* modified"), " sign apart from the basic ", /*#__PURE__*/ React.createElement("code", null, "+ add"), " and ", /*#__PURE__*/ React.createElement("code", null, "- remove"), " sign. If you prefer Git-style output, please set it to ", /*#__PURE__*/ React.createElement("code", null, "false"), ".")
	    }), /*#__PURE__*/ React.createElement("input", {
	        type: "checkbox",
	        id: "show-modifications",
	        checked: showModifications,
	        onChange: (e)=>setShowModifications(e.target.checked)
	    })), /*#__PURE__*/ React.createElement("label", {
	        htmlFor: "array-diff-method"
	    }, /*#__PURE__*/ React.createElement(Label, {
	        title: "Array diff method",
	        tip: /*#__PURE__*/ React.createElement(React.Fragment, null, "The way to diff arrays, default is ", /*#__PURE__*/ React.createElement("code", null, '"normal"'), ", using ", /*#__PURE__*/ React.createElement("code", null, '"lcs"'), " may get a better result but much slower. ", /*#__PURE__*/ React.createElement("code", null, '"unorder-normal"'), " and ", /*#__PURE__*/ React.createElement("code", null, '"unorder-lcs"'), " are for unordered arrays (the order of elements in the array doesn't matter). ", /*#__PURE__*/ React.createElement("code", null, '"compare-key"'), " matches objects by a specific key property.")
	    }), /*#__PURE__*/ React.createElement("select", {
	        id: "array-diff-method",
	        value: arrayDiffMethod,
	        onChange: (e)=>setArrayDiffMethod(e.target.value)
	    }, /*#__PURE__*/ React.createElement("option", {
	        value: "normal"
	    }, "normal (default)"), /*#__PURE__*/ React.createElement("option", {
	        value: "lcs"
	    }, "lcs"), /*#__PURE__*/ React.createElement("option", {
	        value: "unorder-normal"
	    }, "unorder-normal"), /*#__PURE__*/ React.createElement("option", {
	        value: "unorder-lcs"
	    }, "unorder-lcs"), /*#__PURE__*/ React.createElement("option", {
	        value: "compare-key"
	    }, "compare-key"))), arrayDiffMethod === 'compare-key' && /*#__PURE__*/ React.createElement("label", {
	        htmlFor: "compare-key"
	    }, /*#__PURE__*/ React.createElement(Label, {
	        title: "Compare key",
	        tip: "The key to use for matching objects in arrays. Objects with the same value for this key will be matched and compared, regardless of their position in the array."
	    }), /*#__PURE__*/ React.createElement("input", {
	        type: "text",
	        id: "compare-key",
	        value: compareKey,
	        onChange: (e)=>setCompareKey(e.target.value),
	        placeholder: "e.g., oid, userId, id"
	    })), /*#__PURE__*/ React.createElement("label", {
	        htmlFor: "ignore-case"
	    }, /*#__PURE__*/ React.createElement(Label, {
	        title: "Ignore case",
	        tip: "Whether to ignore case when comparing string values."
	    }), /*#__PURE__*/ React.createElement("input", {
	        type: "checkbox",
	        id: "ignore-case",
	        checked: ignoreCase,
	        onChange: (e)=>setIgnoreCase(e.target.checked)
	    })), /*#__PURE__*/ React.createElement("label", {
	        htmlFor: "ignore-case-for-key"
	    }, /*#__PURE__*/ React.createElement(Label, {
	        title: "Ignore case for key",
	        tip: "Whether to ignore case when comparing object keys."
	    }), /*#__PURE__*/ React.createElement("input", {
	        type: "checkbox",
	        id: "ignore-case-for-key",
	        checked: ignoreCaseForKey,
	        onChange: (e)=>setIgnoreCaseForKey(e.target.checked)
	    })), /*#__PURE__*/ React.createElement("label", {
	        htmlFor: "recursive-equal"
	    }, /*#__PURE__*/ React.createElement(Label, {
	        title: "Recursive equal",
	        tip: "Whether to use recursive equal to compare objects. This can provide a better output when there are unchanged object items in an array, but it may cause performance issues when the data is very large."
	    }), /*#__PURE__*/ React.createElement("input", {
	        type: "checkbox",
	        id: "recursive-equal",
	        checked: recursiveEqual,
	        onChange: (e)=>setRecursiveEqual(e.target.checked)
	    })), /*#__PURE__*/ React.createElement("label", {
	        htmlFor: "preserve-key-order"
	    }, /*#__PURE__*/ React.createElement(Label, {
	        title: "Preserve key order",
	        tip: /*#__PURE__*/ React.createElement(React.Fragment, null, "Sometimes you do not want the keys in result be sorted, for example ", /*#__PURE__*/ React.createElement("code", null, "start_time"), " and ", /*#__PURE__*/ React.createElement("code", null, "end_time"), " will be swapped by default. You can set this option to let the differ preserve the key order according to ", /*#__PURE__*/ React.createElement("code", null, "before"), " or ", /*#__PURE__*/ React.createElement("code", null, "after"), ".")
	    }), /*#__PURE__*/ React.createElement("select", {
	        id: "preserve-key-order",
	        value: preserveKeyOrder,
	        onChange: (e)=>setPreserveKeyOrder(e.target.value === 'sort' ? undefined : e.target.value)
	    }, /*#__PURE__*/ React.createElement("option", {
	        value: "sort"
	    }, "sort (default)"), /*#__PURE__*/ React.createElement("option", {
	        value: "before"
	    }, 'by "before"'), /*#__PURE__*/ React.createElement("option", {
	        value: "after"
	    }, 'by "after"'))))), /*#__PURE__*/ React.createElement("div", {
	        className: "config"
	    }, /*#__PURE__*/ React.createElement("form", null, /*#__PURE__*/ React.createElement("legend", null, "VIEWER CONFIGURATION"), /*#__PURE__*/ React.createElement("label", {
	        htmlFor: "indent"
	    }, /*#__PURE__*/ React.createElement(Label, {
	        title: "Indent",
	        tip: /*#__PURE__*/ React.createElement(React.Fragment, null, "Controls the indent in the ", /*#__PURE__*/ React.createElement("code", null, "<Viewer>"), " component.")
	    }), /*#__PURE__*/ React.createElement("input", {
	        type: "number",
	        id: "indent",
	        min: 1,
	        max: 16,
	        value: indent,
	        onChange: (e)=>setIndent(Number(e.target.value))
	    })), /*#__PURE__*/ React.createElement("label", {
	        htmlFor: "line-numbers"
	    }, /*#__PURE__*/ React.createElement(Label, {
	        title: "Line numbers",
	        tip: /*#__PURE__*/ React.createElement(React.Fragment, null, "Whether to show line numbers.")
	    }), /*#__PURE__*/ React.createElement("input", {
	        type: "checkbox",
	        id: "line-numbers",
	        checked: lineNumbers,
	        onChange: (e)=>setLineNumbers(e.target.checked)
	    })), /*#__PURE__*/ React.createElement("label", {
	        htmlFor: "highlight-inline-diff"
	    }, /*#__PURE__*/ React.createElement(Label, {
	        title: "Highlight inline diff",
	        tip: /*#__PURE__*/ React.createElement(React.Fragment, null, "Whether to show the inline diff highlight. For example, if the left value ", /*#__PURE__*/ React.createElement("code", null, '"JSON diff can\'t be possible"'), " is changed to the right value ", /*#__PURE__*/ React.createElement("code", null, '"JSON diff is possible"'), ", it will be recognized as we first remove ", /*#__PURE__*/ React.createElement("code", null, "can't be"), " and then add ", /*#__PURE__*/ React.createElement("code", null, "is"), ". This feature is powered by ", /*#__PURE__*/ React.createElement("a", {
	            href: "https://github.com/gliese1337/fast-myers-diff",
	            target: "_blank",
	            rel: "noreferrer"
	        }, "gliese1337/fast-myers-diff"), ". Note: the ", /*#__PURE__*/ React.createElement("code", null, "showModification"), " must be enabled, or you will not see modified lines.")
	    }), /*#__PURE__*/ React.createElement("input", {
	        type: "checkbox",
	        id: "highlight-inline-diff",
	        checked: highlightInlineDiff,
	        onChange: (e)=>setHighlightInlineDiff(e.target.checked)
	    })), /*#__PURE__*/ React.createElement("label", {
	        htmlFor: "inline-diff-mode"
	    }, /*#__PURE__*/ React.createElement(Label, {
	        title: "Inline diff mode",
	        tip: /*#__PURE__*/ React.createElement(React.Fragment, null, 'Control the inline diff behaviour. If the inline diff sources are sentences, we can diff them "by word" instead of "by character". For normal sentences, just set the method to ', /*#__PURE__*/ React.createElement("code", null, "word"), " and the separator to ", /*#__PURE__*/ React.createElement("code", null, '" "'), ' (a half-width space) works like a charm. But if you prefer the Git-style output, you can leave this props default, which is diffing "by character".')
	    }), /*#__PURE__*/ React.createElement("select", {
	        id: "inline-diff-mode",
	        disabled: !highlightInlineDiff,
	        value: inlineDiffMode,
	        onChange: (e)=>setInlineDiffMode(e.target.value)
	    }, /*#__PURE__*/ React.createElement("option", {
	        value: "char"
	    }, "char (default)"), /*#__PURE__*/ React.createElement("option", {
	        value: "word"
	    }, "word"))), /*#__PURE__*/ React.createElement("label", {
	        htmlFor: "inline-diff-separator"
	    }, /*#__PURE__*/ React.createElement(Label, {
	        title: "Word separator",
	        tip: "The separator to split the inline diff sources, default is a half-width space."
	    }), /*#__PURE__*/ React.createElement("input", {
	        id: "inline-diff-separator",
	        disabled: !highlightInlineDiff,
	        value: inlineDiffSeparator,
	        onChange: (e)=>setInlineDiffSeparator(e.target.value),
	        placeholder: "Works when mode = char"
	    })), /*#__PURE__*/ React.createElement("label", {
	        htmlFor: "syntax-highlight"
	    }, /*#__PURE__*/ React.createElement(Label, {
	        title: "Syntax highlight",
	        tip: "Support syntax highlight. The viewer component will render like prismjs, and you can write your own style. Please don't forget to import the corresponding CSS file, e.g. import 'json-diff-kit/viewer-monokai.less';"
	    }), /*#__PURE__*/ React.createElement("input", {
	        type: "checkbox",
	        id: "syntax-highlight",
	        checked: syntaxHighlight,
	        onChange: (e)=>setSyntaxHighlight(e.target.checked)
	    })), /*#__PURE__*/ React.createElement("label", {
	        htmlFor: "hide-unchanged-lines"
	    }, /*#__PURE__*/ React.createElement(Label, {
	        title: "Hide unchanged lines",
	        tip: "Whether to hide the unchanged lines (like what GitHub and GitLab does)."
	    }), /*#__PURE__*/ React.createElement("input", {
	        type: "checkbox",
	        id: "hide-unchanged-lines",
	        checked: hideUnchangedLines,
	        onChange: (e)=>setHideUnchangedLines(e.target.checked)
	    })), /*#__PURE__*/ React.createElement("label", {
	        htmlFor: "use-virtual-scroll"
	    }, /*#__PURE__*/ React.createElement(Label, {
	        title: "Use virtual scroll (experimental)",
	        tip: "Whether to use virtual scroll. This can improve the rendering performance when the data is very large, but it's not well-tested."
	    }), /*#__PURE__*/ React.createElement("input", {
	        type: "checkbox",
	        id: "use-virtual-scroll",
	        checked: virtual,
	        onChange: (e)=>setVirtual(e.target.checked)
	    })))), /*#__PURE__*/ React.createElement("div", {
	        className: "config"
	    }, /*#__PURE__*/ React.createElement("form", null, /*#__PURE__*/ React.createElement("legend", null, "GENERATEDE CODE"), /*#__PURE__*/ React.createElement(GeneratedCode, {
	        code: code
	    }))), /*#__PURE__*/ React.createElement("div", {
	        className: "statistics"
	    }, /*#__PURE__*/ React.createElement("img", {
	        src: "https://img.shields.io/npm/v/json-diff-kit.svg?style=flat",
	        style: {
	            marginRight: 8
	        }
	    }), /*#__PURE__*/ React.createElement("iframe", {
	        src: "https://ghbtns.com/github-btn.html?user=rexskz&repo=json-diff-kit&type=star&count=true",
	        frameBorder: "0",
	        scrolling: "0",
	        width: "90",
	        height: "20",
	        title: "GitHub"
	    }))), /*#__PURE__*/ React.createElement("div", {
	        className: `layout-right${fullscreen ? ' layout-right-fullscreen' : ''}`
	    }, /*#__PURE__*/ React.createElement("div", {
	        className: "title"
	    }, "INPUTS", /*#__PURE__*/ React.createElement("span", {
	        className: "control-button",
	        onClick: clearAll
	    }, "[CLEAR ALL]"), /*#__PURE__*/ React.createElement("span", {
	        className: "control-button",
	        onClick: beautify
	    }, "[BEAUTIFY]")), /*#__PURE__*/ React.createElement("div", {
	        className: "inputs"
	    }, /*#__PURE__*/ React.createElement("textarea", {
	        ref: beforeInputRef,
	        placeholder: "before",
	        defaultValue: beforeRef.current,
	        onChange: (e)=>setBefore(e.target.value, true)
	    }), /*#__PURE__*/ React.createElement("textarea", {
	        ref: afterInputRef,
	        placeholder: "after",
	        defaultValue: afterRef.current,
	        onChange: (e)=>setAfter(e.target.value, true)
	    })), /*#__PURE__*/ React.createElement("div", {
	        className: "title"
	    }, "DIFF RESULTS", /*#__PURE__*/ React.createElement("span", {
	        className: "control-button",
	        onClick: ()=>setFullscreen((pre)=>!pre)
	    }, "[", fullscreen ? 'EXIT ' : '', "PAGE FULLSCREEN]"), !!error && /*#__PURE__*/ React.createElement("span", {
	        className: "error"
	    }, error)), /*#__PURE__*/ React.createElement("div", {
	        className: "results"
	    }, /*#__PURE__*/ React.createElement(Viewer, {
	        diff: diff,
	        ...viewerOptions
	    }))));
	};
	Playground.displayName = 'Playground';

	var lib = function(e) {
	    var t = {};
	    function r(n) {
	        if (t[n]) return t[n].exports;
	        var o = t[n] = {
	            i: n,
	            l: !1,
	            exports: {}
	        };
	        return e[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports;
	    }
	    return r.m = e, r.c = t, r.d = function(e, t, n) {
	        r.o(e, t) || Object.defineProperty(e, t, {
	            enumerable: !0,
	            get: n
	        });
	    }, r.r = function(e) {
	        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
	            value: "Module"
	        }), Object.defineProperty(e, "__esModule", {
	            value: !0
	        });
	    }, r.t = function(e, t) {
	        if (1 & t && (e = r(e)), 8 & t) return e;
	        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
	        var n = Object.create(null);
	        if (r.r(n), Object.defineProperty(n, "default", {
	            enumerable: !0,
	            value: e
	        }), 2 & t && "string" != typeof e) for(var o in e)r.d(n, o, (function(t) {
	            return e[t];
	        }).bind(null, o));
	        return n;
	    }, r.n = function(e) {
	        var t = e && e.__esModule ? function() {
	            return e.default;
	        } : function() {
	            return e;
	        };
	        return r.d(t, "a", t), t;
	    }, r.o = function(e, t) {
	        return Object.prototype.hasOwnProperty.call(e, t);
	    }, r.p = "", r(r.s = 3);
	}([
	    function(e, t) {
	        e.exports = react.exports;
	    },
	    function(e, t, r) {
	        e.exports = r(4)();
	    },
	    function(e, t) {
	        e.exports = function(e) {
	            var t = {};
	            function r(n) {
	                if (t[n]) return t[n].exports;
	                var o = t[n] = {
	                    i: n,
	                    l: !1,
	                    exports: {}
	                };
	                return e[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports;
	            }
	            return r.m = e, r.c = t, r.d = function(e, t, n) {
	                r.o(e, t) || Object.defineProperty(e, t, {
	                    enumerable: !0,
	                    get: n
	                });
	            }, r.r = function(e) {
	                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
	                    value: "Module"
	                }), Object.defineProperty(e, "__esModule", {
	                    value: !0
	                });
	            }, r.t = function(e, t) {
	                if (1 & t && (e = r(e)), 8 & t) return e;
	                if (4 & t && "object" == typeof e && e && e.__esModule) return e;
	                var n = Object.create(null);
	                if (r.r(n), Object.defineProperty(n, "default", {
	                    enumerable: !0,
	                    value: e
	                }), 2 & t && "string" != typeof e) for(var o in e)r.d(n, o, (function(t) {
	                    return e[t];
	                }).bind(null, o));
	                return n;
	            }, r.n = function(e) {
	                var t = e && e.__esModule ? function() {
	                    return e.default;
	                } : function() {
	                    return e;
	                };
	                return r.d(t, "a", t), t;
	            }, r.o = function(e, t) {
	                return Object.prototype.hasOwnProperty.call(e, t);
	            }, r.p = "", r(r.s = 0);
	        }([
	            function(e, t, r) {
	                r.r(t), r.d(t, "validateHTMLColorName", function() {
	                    return n;
	                }), r.d(t, "validateHTMLColor", function() {
	                    return o;
	                });
	                const n = (e)=>{
	                    let t = !1;
	                    return "string" == typeof e && [
	                        "IndianRed",
	                        "LightCoral",
	                        "Salmon",
	                        "DarkSalmon",
	                        "LightSalmon",
	                        "Crimson",
	                        "Red",
	                        "FireBrick",
	                        "DarkRed",
	                        "Pink",
	                        "LightPink",
	                        "HotPink",
	                        "DeepPink",
	                        "MediumVioletRed",
	                        "PaleVioletRed",
	                        "LightSalmon",
	                        "Coral",
	                        "Tomato",
	                        "OrangeRed",
	                        "DarkOrange",
	                        "Orange",
	                        "Gold",
	                        "Yellow",
	                        "LightYellow",
	                        "LemonChiffon",
	                        "LightGoldenrodYellow",
	                        "PapayaWhip",
	                        "Moccasin",
	                        "PeachPuff",
	                        "PaleGoldenrod",
	                        "Khaki",
	                        "DarkKhaki",
	                        "Lavender",
	                        "Thistle",
	                        "Plum",
	                        "Violet",
	                        "Orchid",
	                        "Fuchsia",
	                        "Magenta",
	                        "MediumOrchid",
	                        "MediumPurple",
	                        "RebeccaPurple",
	                        "BlueViolet",
	                        "DarkViolet",
	                        "DarkOrchid",
	                        "DarkMagenta",
	                        "Purple",
	                        "Indigo",
	                        "SlateBlue",
	                        "DarkSlateBlue",
	                        "MediumSlateBlue",
	                        "GreenYellow",
	                        "Chartreuse",
	                        "LawnGreen",
	                        "Lime",
	                        "LimeGreen",
	                        "PaleGreen",
	                        "LightGreen",
	                        "MediumSpringGreen",
	                        "SpringGreen",
	                        "MediumSeaGreen",
	                        "SeaGreen",
	                        "ForestGreen",
	                        "Green",
	                        "DarkGreen",
	                        "YellowGreen",
	                        "OliveDrab",
	                        "Olive",
	                        "DarkOliveGreen",
	                        "MediumAquamarine",
	                        "DarkSeaGreen",
	                        "LightSeaGreen",
	                        "DarkCyan",
	                        "Teal",
	                        "Aqua",
	                        "Cyan",
	                        "LightCyan",
	                        "PaleTurquoise",
	                        "Aquamarine",
	                        "Turquoise",
	                        "MediumTurquoise",
	                        "DarkTurquoise",
	                        "CadetBlue",
	                        "SteelBlue",
	                        "LightSteelBlue",
	                        "PowderBlue",
	                        "LightBlue",
	                        "SkyBlue",
	                        "LightSkyBlue",
	                        "DeepSkyBlue",
	                        "DodgerBlue",
	                        "CornflowerBlue",
	                        "MediumSlateBlue",
	                        "RoyalBlue",
	                        "Blue",
	                        "MediumBlue",
	                        "DarkBlue",
	                        "Navy",
	                        "MidnightBlue",
	                        "Cornsilk",
	                        "BlanchedAlmond",
	                        "Bisque",
	                        "NavajoWhite",
	                        "Wheat",
	                        "BurlyWood",
	                        "Tan",
	                        "RosyBrown",
	                        "SandyBrown",
	                        "Goldenrod",
	                        "DarkGoldenrod",
	                        "Peru",
	                        "Chocolate",
	                        "SaddleBrown",
	                        "Sienna",
	                        "Brown",
	                        "Maroon",
	                        "White",
	                        "Snow",
	                        "HoneyDew",
	                        "MintCream",
	                        "Azure",
	                        "AliceBlue",
	                        "GhostWhite",
	                        "WhiteSmoke",
	                        "SeaShell",
	                        "Beige",
	                        "OldLace",
	                        "FloralWhite",
	                        "Ivory",
	                        "AntiqueWhite",
	                        "Linen",
	                        "LavenderBlush",
	                        "MistyRose",
	                        "Gainsboro",
	                        "LightGray",
	                        "Silver",
	                        "DarkGray",
	                        "Gray",
	                        "DimGray",
	                        "LightSlateGray",
	                        "SlateGray",
	                        "DarkSlateGray",
	                        "Black",
	                        "Transparent"
	                    ].map((r)=>{
	                        e.toLowerCase() === r.toLowerCase() && (t = !0);
	                    }), t;
	                }, o = (e)=>{
	                    if ("string" == typeof e) {
	                        const t = /^#([\da-f]{3}){1,2}$|^#([\da-f]{4}){1,2}$|(rgb|hsl)a?\((\s*-?\d+%?\s*,){2}(\s*-?\d+%?\s*,?\s*\)?)(,\s*(0?\.\d+)?|1)?\)/i;
	                        return !(!e || !t.test(e));
	                    }
	                };
	                t.default = (e)=>!(!e || !n(e) && !o(e));
	            }
	        ]);
	    },
	    function(e, t, r) {
	        r.r(t);
	        var n = r(0), o = r.n(n), a = r(1), i = r.n(a), l = r(2), s = r.n(l);
	        r(6);
	        function u(e) {
	            for(var t = 1; t < arguments.length; t++){
	                var r = null != arguments[t] ? arguments[t] : {}, n = Object.keys(r);
	                "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
	                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
	                }))), n.forEach(function(t) {
	                    c(e, t, r[t]);
	                });
	            }
	            return e;
	        }
	        function c(e, t, r) {
	            return t in e ? Object.defineProperty(e, t, {
	                value: r,
	                enumerable: !0,
	                configurable: !0,
	                writable: !0
	            }) : e[t] = r, e;
	        }
	        var f = function(e) {
	            var t = e.colorBackground, r = void 0 === t ? "" : t, n = e.colorOctocat, a = void 0 === n ? "" : n, i = e.repo, l = void 0 === i ? "" : i, c = e.side, f = void 0 === c ? "right" : c, d = e.text, p = void 0 === d ? "Fork me on GitHub" : d, m = e.isDocumentation, h = void 0 !== m && m, y = e.isPride, v = void 0 !== y && y, b = h ? {
	                position: "relative"
	            } : u({
	                position: "absolute",
	                top: "0"
	            }, "left" === f ? {
	                left: "0"
	            } : {
	                right: "0"
	            });
	            return o.a.createElement("a", {
	                href: l,
	                className: "fork-me-on-github",
	                "aria-label": p,
	                style: u({}, b)
	            }, function(e) {
	                var t = e.isPride, r = e.colorBackground, n = e.colorOctocat, a = e.side, i = n && s()(n) ? n : "white", l = "left" === a ? {
	                    transform: "scale(-1, 1)"
	                } : {};
	                return o.a.createElement(o.a.Fragment, null, t && o.a.createElement("svg", {
	                    style: {
	                        width: "0",
	                        height: "0",
	                        position: "absolute"
	                    },
	                    "aria-hidden": "true",
	                    focusable: "false"
	                }, o.a.createElement("linearGradient", {
	                    id: "prideGradient",
	                    x2: "1",
	                    y2: "1"
	                }, o.a.createElement("stop", {
	                    offset: "0%",
	                    stopColor: "#f00000"
	                }), o.a.createElement("stop", {
	                    offset: "16.67%",
	                    stopColor: "#f00000"
	                }), o.a.createElement("stop", {
	                    offset: "16.67%",
	                    stopColor: "#ff8000"
	                }), o.a.createElement("stop", {
	                    offset: "33.33%",
	                    stopColor: "#ff8000"
	                }), o.a.createElement("stop", {
	                    offset: "33.33%",
	                    stopColor: "#ffff00"
	                }), o.a.createElement("stop", {
	                    offset: "50%",
	                    stopColor: "#ffff00"
	                }), o.a.createElement("stop", {
	                    offset: "50%",
	                    stopColor: "#007940"
	                }), o.a.createElement("stop", {
	                    offset: "66.67%",
	                    stopColor: "#007940"
	                }), o.a.createElement("stop", {
	                    offset: "66.67%",
	                    stopColor: "#4040ff"
	                }), o.a.createElement("stop", {
	                    offset: "83.33%",
	                    stopColor: "#4040ff"
	                }), o.a.createElement("stop", {
	                    offset: "83.33%",
	                    stopColor: "#a000c0"
	                }), o.a.createElement("stop", {
	                    offset: "100%",
	                    stopColor: "#a000c0"
	                }))), o.a.createElement("svg", {
	                    width: "80",
	                    height: "80",
	                    viewBox: "0 0 250 250",
	                    style: u({
	                        border: "0",
	                        color: i,
	                        fill: t ? "url(#prideGradient) #f00000" : r && s()(r) ? r : "black"
	                    }, l),
	                    "aria-hidden": "true"
	                }, o.a.createElement("path", {
	                    d: "M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"
	                }), o.a.createElement("path", {
	                    d: "M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",
	                    fill: "currentColor",
	                    style: {
	                        transformOrigin: "130px 106px"
	                    },
	                    className: "octo-arm"
	                }), o.a.createElement("path", {
	                    d: "M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",
	                    fill: "currentColor",
	                    className: "octo-body"
	                })));
	            }({
	                isPride: v,
	                colorBackground: r,
	                colorOctocat: a,
	                side: f
	            }));
	        };
	        f.propTypes = {
	            colorBackground: i.a.string,
	            colorOctocat: i.a.string,
	            isDocumentation: i.a.bool,
	            isPride: i.a.bool,
	            repo: i.a.string.isRequired,
	            side: i.a.oneOf([
	                "left",
	                "right"
	            ]),
	            text: i.a.string
	        }, t.default = f;
	    },
	    function(e, t, r) {
	        var n = r(5);
	        function o() {}
	        function a() {}
	        a.resetWarningCache = o, e.exports = function() {
	            function e(e, t, r, o, a, i) {
	                if (i !== n) {
	                    var l = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
	                    throw l.name = "Invariant Violation", l;
	                }
	            }
	            function t() {
	                return e;
	            }
	            e.isRequired = e;
	            var r = {
	                array: e,
	                bool: e,
	                func: e,
	                number: e,
	                object: e,
	                string: e,
	                symbol: e,
	                any: e,
	                arrayOf: t,
	                element: e,
	                elementType: e,
	                instanceOf: t,
	                node: e,
	                objectOf: t,
	                oneOf: t,
	                oneOfType: t,
	                shape: t,
	                exact: t,
	                checkPropTypes: a,
	                resetWarningCache: o
	            };
	            return r.PropTypes = r, r;
	        };
	    },
	    function(e, t, r) {
	        e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
	    },
	    function(e, t, r) {
	        var n = r(7);
	        "string" == typeof n && (n = [
	            [
	                e.i,
	                n,
	                ""
	            ]
	        ]);
	        var o = {
	            hmr: !0,
	            transform: void 0,
	            insertInto: void 0
	        };
	        r(9)(n, o);
	        n.locals && (e.exports = n.locals);
	    },
	    function(e, t, r) {
	        (e.exports = r(8)(!1)).push([
	            e.i,
	            "@keyframes octocat-wave {\n  0%,\n  100% {\n    transform: rotate(0); }\n  20%,\n  60% {\n    transform: rotate(-25deg); }\n  40%,\n  80% {\n    transform: rotate(10deg); } }\n\n.fork-me-on-github:hover .octo-arm {\n  animation: octocat-wave 560ms ease-in-out; }\n\n@media (max-width: 500px) {\n  .fork-me-on-github:hover .octo-arm {\n    animation: none; }\n  .fork-me-on-github .octo-arm {\n    animation: octocat-wave 560ms ease-in-out; } }\n",
	            ""
	        ]);
	    },
	    function(e, t, r) {
	        e.exports = function(e) {
	            var t = [];
	            return t.toString = function() {
	                return this.map(function(t) {
	                    var r = function(e, t) {
	                        var r = e[1] || "", n = e[3];
	                        if (!n) return r;
	                        if (t && "function" == typeof btoa) {
	                            var o = (i = n, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(i)))) + " */"), a = n.sources.map(function(e) {
	                                return "/*# sourceURL=" + n.sourceRoot + e + " */";
	                            });
	                            return [
	                                r
	                            ].concat(a).concat([
	                                o
	                            ]).join("\n");
	                        }
	                        var i;
	                        return [
	                            r
	                        ].join("\n");
	                    }(t, e);
	                    return t[2] ? "@media " + t[2] + "{" + r + "}" : r;
	                }).join("");
	            }, t.i = function(e, r) {
	                "string" == typeof e && (e = [
	                    [
	                        null,
	                        e,
	                        ""
	                    ]
	                ]);
	                for(var n = {}, o = 0; o < this.length; o++){
	                    var a = this[o][0];
	                    null != a && (n[a] = !0);
	                }
	                for(o = 0; o < e.length; o++){
	                    var i = e[o];
	                    null != i[0] && n[i[0]] || (r && !i[2] ? i[2] = r : r && (i[2] = "(" + i[2] + ") and (" + r + ")"), t.push(i));
	                }
	            }, t;
	        };
	    },
	    function(e, t, r) {
	        var n, o, a = {}, i = (n = function() {
	            return window && document && document.all && !window.atob;
	        }, function() {
	            return void 0 === o && (o = n.apply(this, arguments)), o;
	        }), l = function(e) {
	            var t = {};
	            return function(e, r) {
	                if ("function" == typeof e) return e();
	                if (void 0 === t[e]) {
	                    var n = (function(e, t) {
	                        return t ? t.querySelector(e) : document.querySelector(e);
	                    }).call(this, e, r);
	                    if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement) try {
	                        n = n.contentDocument.head;
	                    } catch (e) {
	                        n = null;
	                    }
	                    t[e] = n;
	                }
	                return t[e];
	            };
	        }(), s = null, u = 0, c = [], f = r(10);
	        function d(e, t) {
	            for(var r = 0; r < e.length; r++){
	                var n = e[r], o = a[n.id];
	                if (o) {
	                    o.refs++;
	                    for(var i = 0; i < o.parts.length; i++)o.parts[i](n.parts[i]);
	                    for(; i < n.parts.length; i++)o.parts.push(b(n.parts[i], t));
	                } else {
	                    var l = [];
	                    for(i = 0; i < n.parts.length; i++)l.push(b(n.parts[i], t));
	                    a[n.id] = {
	                        id: n.id,
	                        refs: 1,
	                        parts: l
	                    };
	                }
	            }
	        }
	        function p(e, t) {
	            for(var r = [], n = {}, o = 0; o < e.length; o++){
	                var a = e[o], i = t.base ? a[0] + t.base : a[0], l = {
	                    css: a[1],
	                    media: a[2],
	                    sourceMap: a[3]
	                };
	                n[i] ? n[i].parts.push(l) : r.push(n[i] = {
	                    id: i,
	                    parts: [
	                        l
	                    ]
	                });
	            }
	            return r;
	        }
	        function m(e, t) {
	            var r = l(e.insertInto);
	            if (!r) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	            var n = c[c.length - 1];
	            if ("top" === e.insertAt) n ? n.nextSibling ? r.insertBefore(t, n.nextSibling) : r.appendChild(t) : r.insertBefore(t, r.firstChild), c.push(t);
	            else if ("bottom" === e.insertAt) r.appendChild(t);
	            else {
	                if ("object" != typeof e.insertAt || !e.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	                var o = l(e.insertAt.before, r);
	                r.insertBefore(t, o);
	            }
	        }
	        function h(e) {
	            if (null === e.parentNode) return !1;
	            e.parentNode.removeChild(e);
	            var t = c.indexOf(e);
	            t >= 0 && c.splice(t, 1);
	        }
	        function y(e) {
	            var t = document.createElement("style");
	            if (void 0 === e.attrs.type && (e.attrs.type = "text/css"), void 0 === e.attrs.nonce) {
	                var n = function() {
	                    return r.nc;
	                }();
	                n && (e.attrs.nonce = n);
	            }
	            return v(t, e.attrs), m(e, t), t;
	        }
	        function v(e, t) {
	            Object.keys(t).forEach(function(r) {
	                e.setAttribute(r, t[r]);
	            });
	        }
	        function b(e, t) {
	            var r, n, o, a;
	            if (t.transform && e.css) {
	                if (!(a = "function" == typeof t.transform ? t.transform(e.css) : t.transform.default(e.css))) return function() {};
	                e.css = a;
	            }
	            if (t.singleton) {
	                var i = u++;
	                r = s || (s = y(t)), n = O.bind(null, r, i, !1), o = O.bind(null, r, i, !0);
	            } else e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (r = function(e) {
	                var t = document.createElement("link");
	                return void 0 === e.attrs.type && (e.attrs.type = "text/css"), e.attrs.rel = "stylesheet", v(t, e.attrs), m(e, t), t;
	            }(t), n = (function(e, t, r) {
	                var n = r.css, o = r.sourceMap, a = void 0 === t.convertToAbsoluteUrls && o;
	                (t.convertToAbsoluteUrls || a) && (n = f(n));
	                o && (n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + " */");
	                var i = new Blob([
	                    n
	                ], {
	                    type: "text/css"
	                }), l = e.href;
	                e.href = URL.createObjectURL(i), l && URL.revokeObjectURL(l);
	            }).bind(null, r, t), o = function() {
	                h(r), r.href && URL.revokeObjectURL(r.href);
	            }) : (r = y(t), n = (function(e, t) {
	                var r = t.css, n = t.media;
	                n && e.setAttribute("media", n);
	                if (e.styleSheet) e.styleSheet.cssText = r;
	                else {
	                    for(; e.firstChild;)e.removeChild(e.firstChild);
	                    e.appendChild(document.createTextNode(r));
	                }
	            }).bind(null, r), o = function() {
	                h(r);
	            });
	            return n(e), function(t) {
	                if (t) {
	                    if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
	                    n(e = t);
	                } else o();
	            };
	        }
	        e.exports = function(e, t) {
	            if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
	            (t = t || {}).attrs = "object" == typeof t.attrs ? t.attrs : {}, t.singleton || "boolean" == typeof t.singleton || (t.singleton = i()), t.insertInto || (t.insertInto = "head"), t.insertAt || (t.insertAt = "bottom");
	            var r = p(e, t);
	            return d(r, t), function(e) {
	                for(var n = [], o = 0; o < r.length; o++){
	                    var i = r[o];
	                    (l = a[i.id]).refs--, n.push(l);
	                }
	                e && d(p(e, t), t);
	                for(o = 0; o < n.length; o++){
	                    var l;
	                    if (0 === (l = n[o]).refs) {
	                        for(var s = 0; s < l.parts.length; s++)l.parts[s]();
	                        delete a[l.id];
	                    }
	                }
	            };
	        };
	        var g, C = (g = [], function(e, t) {
	            return g[e] = t, g.filter(Boolean).join("\n");
	        });
	        function O(e, t, r, n) {
	            var o = r ? "" : n.css;
	            if (e.styleSheet) e.styleSheet.cssText = C(t, o);
	            else {
	                var a = document.createTextNode(o), i = e.childNodes;
	                i[t] && e.removeChild(i[t]), i.length ? e.insertBefore(a, i[t]) : e.appendChild(a);
	            }
	        }
	    },
	    function(e, t) {
	        e.exports = function(e) {
	            var t = "undefined" != typeof window && window.location;
	            if (!t) throw new Error("fixUrls requires window.location");
	            if (!e || "string" != typeof e) return e;
	            var r = t.protocol + "//" + t.host, n = r + t.pathname.replace(/\/[^\/]*$/, "/");
	            return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(e, t) {
	                var o, a = t.trim().replace(/^"(.*)"$/, function(e, t) {
	                    return t;
	                }).replace(/^'(.*)'$/, function(e, t) {
	                    return t;
	                });
	                return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(a) ? e : (o = 0 === a.indexOf("//") ? a : 0 === a.indexOf("/") ? r + a : n + a.replace(/^\.\//, ""), "url(" + JSON.stringify(o) + ")");
	            });
	        };
	    }
	]);

	const ForkMeOnGithub = lib.default;
	const Docs = (props)=>{
	    // differ props
	    const [detectCircular] = React.useState(true);
	    const [maxDepth, setMaxDepth] = React.useState(Infinity);
	    const [showModifications, setShowModifications] = React.useState(true);
	    const [arrayDiffMethod, setArrayDiffMethod] = React.useState('lcs');
	    const [ignoreCase, setIgnoreCase] = React.useState(false);
	    const [recursiveEqual, setRecursiveEqual] = React.useState(true);
	    const [preserveKeyOrder, setPreserveKeyOrder] = React.useState(undefined);
	    const [compareKey, setCompareKey] = React.useState('');
	    // viewer props
	    const [indent, setIndent] = React.useState(4);
	    const [lineNumbers, setLineNumbers] = React.useState(true);
	    const [highlightInlineDiff, setHighlightInlineDiff] = React.useState(true);
	    const [inlineDiffMode, setInlineDiffMode] = React.useState('word');
	    const [inlineDiffSeparator, setInlineDiffSeparator] = React.useState(' ');
	    const [hideUnchangedLines, setHideUnchangedLines] = React.useState(true);
	    const [syntaxHighlight, setSyntaxHighlight] = React.useState(true);
	    const [useVirtual, setUseVirtual] = React.useState(false);
	    const differOptions = React.useMemo(()=>({
	            detectCircular,
	            maxDepth,
	            showModifications,
	            arrayDiffMethod,
	            ignoreCase,
	            recursiveEqual,
	            preserveKeyOrder,
	            compareKey
	        }), [
	        detectCircular,
	        maxDepth,
	        showModifications,
	        arrayDiffMethod,
	        ignoreCase,
	        recursiveEqual,
	        preserveKeyOrder,
	        compareKey
	    ]);
	    const differ = React.useMemo(()=>new Differ(differOptions), [
	        differOptions
	    ]);
	    const [before1] = React.useState({
	        a: 1,
	        b: 2,
	        d: [
	            1,
	            5,
	            4
	        ],
	        e: [
	            '1',
	            2,
	            {
	                f: 3,
	                g: null,
	                h: [
	                    5
	                ],
	                i: []
	            },
	            9
	        ],
	        m: [],
	        q: 'JSON diff can\'t be possible',
	        r: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
	        s: 1024
	    });
	    const [after1] = React.useState({
	        b: 2,
	        c: 3,
	        d: [
	            1,
	            3,
	            4,
	            6
	        ],
	        e: [
	            '1',
	            2,
	            3,
	            {
	                f: 4,
	                g: false,
	                i: [
	                    7,
	                    8
	                ]
	            },
	            10
	        ],
	        j: {
	            k: 11,
	            l: 12
	        },
	        m: [
	            {
	                n: 1,
	                o: 2
	            },
	            {
	                p: 3
	            }
	        ],
	        q: 'JSON diff is possible!',
	        r: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed quasi architecto beatae incididunt ut labore et dolore magna aliqua.',
	        s: '1024'
	    });
	    const diff1 = React.useMemo(()=>differ.diff(before1, after1), [
	        differ,
	        before1,
	        after1
	    ]);
	    const [before2] = React.useState([
	        2,
	        4,
	        3
	    ]);
	    const [after2] = React.useState([
	        2,
	        5,
	        4,
	        3,
	        1
	    ]);
	    const diff2 = React.useMemo(()=>differ.diff(before2, after2), [
	        differ,
	        before2,
	        after2
	    ]);
	    const [before3] = React.useState({
	        a: 1,
	        b: [
	            2
	        ]
	    });
	    const [after3] = React.useState(666);
	    const diff3 = React.useMemo(()=>differ.diff(before3, after3), [
	        differ,
	        before3,
	        after3
	    ]);
	    const [before4] = React.useState(233);
	    const [after4] = React.useState(666);
	    const diff4 = React.useMemo(()=>differ.diff(before4, after4), [
	        differ,
	        before4,
	        after4
	    ]);
	    const [before5] = React.useState([
	        0,
	        1,
	        2,
	        3,
	        4,
	        5,
	        6,
	        7,
	        8,
	        9,
	        10,
	        11,
	        12,
	        13,
	        14,
	        15,
	        16,
	        17,
	        18,
	        19,
	        20,
	        21,
	        22,
	        23,
	        24,
	        25,
	        26,
	        27,
	        28,
	        29,
	        30,
	        31,
	        32,
	        33,
	        34,
	        35,
	        36,
	        37,
	        38,
	        39,
	        40,
	        41,
	        42,
	        43,
	        44,
	        45,
	        46,
	        47,
	        48,
	        49
	    ]);
	    const [after5] = React.useState([
	        0,
	        1,
	        2,
	        3,
	        4,
	        5,
	        6,
	        7,
	        8,
	        99,
	        10,
	        11,
	        12,
	        13,
	        14,
	        15,
	        16,
	        17,
	        1818,
	        1919,
	        20,
	        21,
	        22,
	        23,
	        24,
	        25,
	        26,
	        27,
	        28,
	        29,
	        30,
	        31,
	        32,
	        33,
	        34,
	        35,
	        36,
	        37,
	        38,
	        39,
	        40,
	        41,
	        42,
	        43,
	        44,
	        45,
	        46,
	        47,
	        48,
	        49
	    ]);
	    const diff5 = React.useMemo(()=>differ.diff(before5, after5), [
	        differ,
	        before5,
	        after5
	    ]);
	    const [before6] = React.useState([
	        {
	            text: 'hello world'
	        }
	    ]);
	    const [after6] = React.useState([
	        {
	            text: 'above'
	        },
	        {
	            text: 'hello world'
	        },
	        {
	            text: 'below'
	        }
	    ]);
	    const diff6 = React.useMemo(()=>differ.diff(before6, after6), [
	        differ,
	        before6,
	        after6
	    ]);
	    const [before7] = React.useState({
	        a: undefined,
	        b: 123n,
	        c: {
	            c1: Symbol('foo'),
	            c2: Symbol('bar')
	        },
	        d: ()=>alert(1),
	        e: Infinity,
	        f: NaN,
	        h: [
	            undefined,
	            123n,
	            Symbol('foo'),
	            Symbol('bar'),
	            ()=>alert(1),
	            Infinity,
	            NaN,
	            -Infinity
	        ]
	    });
	    const [after7] = React.useState({
	        a: undefined,
	        b: 123n,
	        c: {
	            c1: Symbol('foo'),
	            c3: Symbol('baz')
	        },
	        d: ()=>alert(2),
	        e: Infinity,
	        f: NaN,
	        g: -Infinity,
	        h: [
	            undefined,
	            123n,
	            Symbol('foo'),
	            Symbol('baz'),
	            ()=>alert(2),
	            Infinity,
	            NaN,
	            -Infinity
	        ]
	    });
	    const diff7 = React.useMemo(()=>differ.diff(before7, after7), [
	        differ,
	        before7,
	        after7
	    ]);
	    const openInPlayground = (l, r)=>{
	        updateInitialValues(JSON.stringify(l, null, 2), JSON.stringify(r, null, 2));
	        props.onSwitch();
	    };
	    const viewerCommonProps = {
	        indent,
	        lineNumbers,
	        highlightInlineDiff,
	        inlineDiffOptions: {
	            mode: inlineDiffMode,
	            wordSeparator: inlineDiffSeparator || ''
	        },
	        hideUnchangedLines,
	        syntaxHighlight: syntaxHighlight ? {
	            theme: 'monokai'
	        } : false,
	        virtual: useVirtual ? {} : false
	    };
	    return /*#__PURE__*/ React.createElement("div", {
	        className: "demo-root"
	    }, /*#__PURE__*/ React.createElement("h1", null, "JSON Diff Kit"), /*#__PURE__*/ React.createElement("div", {
	        className: "statistics"
	    }, /*#__PURE__*/ React.createElement("img", {
	        src: "https://img.shields.io/npm/v/json-diff-kit.svg"
	    }), /*#__PURE__*/ React.createElement("img", {
	        src: "https://img.shields.io/npm/dm/json-diff-kit.svg"
	    }), /*#__PURE__*/ React.createElement("img", {
	        src: "https://codecov.io/gh/RexSkz/json-diff-kit/branch/main/graph/badge.svg?token=8YRG3M4WTO"
	    }), /*#__PURE__*/ React.createElement("iframe", {
	        src: "https://ghbtns.com/github-btn.html?user=rexskz&repo=json-diff-kit&type=star&count=true",
	        frameBorder: "0",
	        scrolling: "0",
	        width: "150",
	        height: "20",
	        title: "GitHub"
	    })), /*#__PURE__*/ React.createElement("p", null, "A better JSON differ & viewer library written in TypeScript."), /*#__PURE__*/ React.createElement("div", {
	        className: "banner",
	        onClick: props.onSwitch
	    }, "Click to try out the playground!"), /*#__PURE__*/ React.createElement("h2", null, "Differ Configuration"), /*#__PURE__*/ React.createElement("div", {
	        className: "diff-config"
	    }, /*#__PURE__*/ React.createElement("form", null, /*#__PURE__*/ React.createElement("label", {
	        htmlFor: "detect-circular"
	    }, "Detect circular references:", /*#__PURE__*/ React.createElement("input", {
	        type: "checkbox",
	        id: "detect-circular",
	        checked: detectCircular,
	        disabled: true
	    })), /*#__PURE__*/ React.createElement("blockquote", null, "Whether to detect circular reference in source objects before diff starts. Default is ", /*#__PURE__*/ React.createElement("code", null, "true"), ". If you are confident about your data (maybe it's from ", /*#__PURE__*/ React.createElement("code", null, "JSON.parse"), " or an API response), you can set it to ", /*#__PURE__*/ React.createElement("code", null, "false"), " to improve performance, but the algorithm may not stop if circular reference does show up."), /*#__PURE__*/ React.createElement("label", {
	        htmlFor: "max-depth"
	    }, "Max depth:", /*#__PURE__*/ React.createElement("input", {
	        type: "number",
	        id: "max-depth",
	        value: maxDepth === Infinity ? undefined : maxDepth,
	        onChange: (e)=>setMaxDepth(Number(e.target.value)),
	        min: 0,
	        max: 10,
	        step: 1,
	        disabled: maxDepth === Infinity,
	        style: {
	            width: '3em'
	        }
	    }), /*#__PURE__*/ React.createElement("label", {
	        htmlFor: "max-depth-infinity",
	        style: {
	            margin: '0 0 0 4px'
	        }
	    }, "(", /*#__PURE__*/ React.createElement("input", {
	        type: "checkbox",
	        id: "max-depth-infinity",
	        checked: maxDepth === Infinity,
	        onChange: (e)=>setMaxDepth(e.target.checked ? Infinity : 0)
	    }), "infinity)")), /*#__PURE__*/ React.createElement("blockquote", null, "Max depth, default ", /*#__PURE__*/ React.createElement("code", null, "Infinity"), " means no depth limit."), /*#__PURE__*/ React.createElement("label", {
	        htmlFor: "show-modifications"
	    }, "Show modifications:", /*#__PURE__*/ React.createElement("input", {
	        type: "checkbox",
	        id: "show-modifications",
	        checked: showModifications,
	        onChange: (e)=>setShowModifications(e.target.checked)
	    })), /*#__PURE__*/ React.createElement("blockquote", null, "Support recognizing modifications, default ", /*#__PURE__*/ React.createElement("code", null, "true"), " means the differ will output the ", /*#__PURE__*/ React.createElement("code", null, "* modified"), " sign apart from the basic ", /*#__PURE__*/ React.createElement("code", null, "+ add"), " and ", /*#__PURE__*/ React.createElement("code", null, "- remove"), " sign. If you prefer Git-style output, please set it to ", /*#__PURE__*/ React.createElement("code", null, "false"), "."), /*#__PURE__*/ React.createElement("label", {
	        htmlFor: "array-diff-method"
	    }, "Array diff method:", /*#__PURE__*/ React.createElement("select", {
	        id: "array-diff-method",
	        value: arrayDiffMethod,
	        onChange: (e)=>setArrayDiffMethod(e.target.value)
	    }, /*#__PURE__*/ React.createElement("option", {
	        value: "normal"
	    }, "normal (default)"), /*#__PURE__*/ React.createElement("option", {
	        value: "lcs"
	    }, "lcs"), /*#__PURE__*/ React.createElement("option", {
	        value: "unorder-normal"
	    }, "unorder-normal"), /*#__PURE__*/ React.createElement("option", {
	        value: "unorder-lcs"
	    }, "unorder-lcs"), /*#__PURE__*/ React.createElement("option", {
	        value: "compare-key"
	    }, "compare-key"))), /*#__PURE__*/ React.createElement("blockquote", null, "The way to diff arrays, default is ", /*#__PURE__*/ React.createElement("code", null, '"normal"'), ", using ", /*#__PURE__*/ React.createElement("code", null, '"lcs"'), " may get a better result but much slower. ", /*#__PURE__*/ React.createElement("code", null, '"unorder-normal"'), " and ", /*#__PURE__*/ React.createElement("code", null, '"unorder-lcs"'), " are for unordered arrays (the order of elements in the array doesn't matter). ", /*#__PURE__*/ React.createElement("code", null, '"compare-key"'), " matches objects by a specific key property."), /*#__PURE__*/ React.createElement("label", {
	        htmlFor: "ignore-case"
	    }, "Ignore case:", /*#__PURE__*/ React.createElement("input", {
	        type: "checkbox",
	        id: "ignore-case",
	        checked: ignoreCase,
	        onChange: (e)=>setIgnoreCase(e.target.checked)
	    })), /*#__PURE__*/ React.createElement("blockquote", null, "Whether to ignore case when comparing string values."), /*#__PURE__*/ React.createElement("label", {
	        htmlFor: "recursive-equal"
	    }, "Recursive equal:", /*#__PURE__*/ React.createElement("input", {
	        type: "checkbox",
	        id: "recursive-equal",
	        checked: recursiveEqual,
	        onChange: (e)=>setRecursiveEqual(e.target.checked)
	    })), /*#__PURE__*/ React.createElement("blockquote", null, "Whether to use recursive equal to compare objects. This can provide a better output when there are unchanged object items in an array, but it may cause performance issues when the data is very large."), /*#__PURE__*/ React.createElement("label", {
	        htmlFor: "preserve-key-order"
	    }, "Preserve key order:", /*#__PURE__*/ React.createElement("select", {
	        id: "preserve-key-order",
	        value: preserveKeyOrder,
	        onChange: (e)=>setPreserveKeyOrder(e.target.value === 'sort' ? undefined : e.target.value)
	    }, /*#__PURE__*/ React.createElement("option", {
	        value: "sort"
	    }, "sort (default)"), /*#__PURE__*/ React.createElement("option", {
	        value: "before"
	    }, 'by "before"'), /*#__PURE__*/ React.createElement("option", {
	        value: "after"
	    }, 'by "after"'))), /*#__PURE__*/ React.createElement("blockquote", null, "Sometimes you do not want the keys in result be sorted, for example ", /*#__PURE__*/ React.createElement("code", null, "start_time"), " and ", /*#__PURE__*/ React.createElement("code", null, "end_time"), " will be swapped by default. You can set this option to let the differ preserve the key order according to ", /*#__PURE__*/ React.createElement("code", null, "before"), " or ", /*#__PURE__*/ React.createElement("code", null, "after"), "."))), /*#__PURE__*/ React.createElement("h2", null, "Viewer Configuration"), /*#__PURE__*/ React.createElement("div", {
	        className: "view-config"
	    }, /*#__PURE__*/ React.createElement("form", null, /*#__PURE__*/ React.createElement("label", {
	        htmlFor: "indent"
	    }, "Indent:", /*#__PURE__*/ React.createElement("input", {
	        type: "number",
	        id: "indent",
	        min: 1,
	        max: 16,
	        value: indent,
	        onChange: (e)=>setIndent(Number(e.target.value))
	    })), /*#__PURE__*/ React.createElement("blockquote", null, "Controls the indent in the ", /*#__PURE__*/ React.createElement("code", null, "<Viewer>"), " component."), /*#__PURE__*/ React.createElement("label", {
	        htmlFor: "line-numbers"
	    }, "Line numbers:", /*#__PURE__*/ React.createElement("input", {
	        type: "checkbox",
	        id: "line-numbers",
	        checked: lineNumbers,
	        onChange: (e)=>setLineNumbers(e.target.checked)
	    })), /*#__PURE__*/ React.createElement("blockquote", null, "Whether to show line numbers."), /*#__PURE__*/ React.createElement("label", {
	        htmlFor: "highlight-inline-diff"
	    }, "Highlight inline diff:", /*#__PURE__*/ React.createElement("input", {
	        type: "checkbox",
	        id: "highlight-inline-diff",
	        checked: highlightInlineDiff,
	        onChange: (e)=>setHighlightInlineDiff(e.target.checked)
	    })), /*#__PURE__*/ React.createElement("blockquote", null, "Whether to show the inline diff highlight. For example, if the left value ", /*#__PURE__*/ React.createElement("code", null, '"JSON diff can\'t be possible"'), " is changed to the right value ", /*#__PURE__*/ React.createElement("code", null, '"JSON diff is possible"'), ", it will be recognized as we first remove ", /*#__PURE__*/ React.createElement("code", null, "can't be"), " and then add ", /*#__PURE__*/ React.createElement("code", null, "is"), ". This feature is powered by ", /*#__PURE__*/ React.createElement("a", {
	        href: "https://github.com/gliese1337/fast-myers-diff",
	        target: "_blank",
	        rel: "noreferrer"
	    }, "gliese1337/fast-myers-diff"), ". Note: the ", /*#__PURE__*/ React.createElement("code", null, "showModification"), " must be enabled, or you will not see modified lines."), /*#__PURE__*/ React.createElement("label", {
	        htmlFor: "inline-diff-options"
	    }, "Inline diff options:", /*#__PURE__*/ React.createElement("span", null, "Diff method"), /*#__PURE__*/ React.createElement("select", {
	        id: "inline-diff-mode",
	        value: inlineDiffMode,
	        onChange: (e)=>setInlineDiffMode(e.target.value)
	    }, /*#__PURE__*/ React.createElement("option", {
	        value: "char"
	    }, "char (default)"), /*#__PURE__*/ React.createElement("option", {
	        value: "word"
	    }, "word")), /*#__PURE__*/ React.createElement("span", null, "Word separator"), /*#__PURE__*/ React.createElement("input", {
	        id: "inline-diff-separator",
	        value: inlineDiffSeparator,
	        onChange: (e)=>setInlineDiffSeparator(e.target.value),
	        placeholder: "Works when mode = char"
	    })), /*#__PURE__*/ React.createElement("blockquote", null, 'You can control the inline diff behaviour. If the inline diff sources are sentences, we can diff them "by word" instead of "by character". For normal sentences, just set the method to ', /*#__PURE__*/ React.createElement("code", null, "word"), " and the separator to ", /*#__PURE__*/ React.createElement("code", null, '" "'), ' (a half-width space) like this demo. But if you prefer the Git-style output, you can leave this props default, which is diffing "by character".'), /*#__PURE__*/ React.createElement("label", {
	        htmlFor: "hide-unchanged-lines"
	    }, "Hide unchanged lines:", /*#__PURE__*/ React.createElement("input", {
	        type: "checkbox",
	        id: "hide-unchanged-lines",
	        checked: hideUnchangedLines,
	        onChange: (e)=>setHideUnchangedLines(e.target.checked)
	    })), /*#__PURE__*/ React.createElement("blockquote", null, "Whether to hide the unchanged lines (like what GitHub and GitLab does)."), /*#__PURE__*/ React.createElement("label", {
	        htmlFor: "syntax-highlight"
	    }, "Syntax highlight:", /*#__PURE__*/ React.createElement("input", {
	        type: "checkbox",
	        id: "syntax-highlight",
	        checked: syntaxHighlight,
	        onChange: (e)=>setSyntaxHighlight(e.target.checked)
	    })), /*#__PURE__*/ React.createElement("blockquote", null, "Support syntax highlight. The viewer component will render like prismjs, and you can write your own style. Please don't forget to import the corresponding CSS file, e.g. ", /*#__PURE__*/ React.createElement("code", null, "import 'json-diff-kit/viewer-monokai.less';")), /*#__PURE__*/ React.createElement("label", {
	        htmlFor: "use-virtual"
	    }, "Use virtual:", /*#__PURE__*/ React.createElement("input", {
	        type: "checkbox",
	        id: "use-virtual",
	        checked: useVirtual,
	        onChange: (e)=>setUseVirtual(e.target.checked)
	    })), /*#__PURE__*/ React.createElement("blockquote", null, "Whether to use virtual list to render the diff. This can improve the performance when the diff result is very large."))), /*#__PURE__*/ React.createElement("div", {
	        className: "diff-result"
	    }, /*#__PURE__*/ React.createElement("h2", null, "Examples"), /*#__PURE__*/ React.createElement("p", null, /*#__PURE__*/ React.createElement("button", {
	        onClick: ()=>openInPlayground(before1, after1)
	    }, "⬇️ Playground"), " An regular example with 2 objects."), /*#__PURE__*/ React.createElement(Viewer, {
	        diff: diff1,
	        ...viewerCommonProps
	    }), /*#__PURE__*/ React.createElement("p", null, /*#__PURE__*/ React.createElement("button", {
	        onClick: ()=>openInPlayground(before2, after2)
	    }, "⬇️ Playground"), " An example with 2 arrays."), /*#__PURE__*/ React.createElement(Viewer, {
	        diff: diff2,
	        ...viewerCommonProps
	    }), /*#__PURE__*/ React.createElement("p", null, /*#__PURE__*/ React.createElement("button", {
	        onClick: ()=>openInPlayground(before3, after3)
	    }, "⬇️ Playground"), ' 2 variables with different types. The algorithm always returns the result "left is removed, right is added".'), /*#__PURE__*/ React.createElement(Viewer, {
	        diff: diff3,
	        ...viewerCommonProps
	    }), /*#__PURE__*/ React.createElement("p", null, /*#__PURE__*/ React.createElement("button", {
	        onClick: ()=>openInPlayground(before4, after4)
	    }, "⬇️ Playground"), ' 2 variables with the same primitive type. The algorithm always returns the result "left is modified to right" (if ', /*#__PURE__*/ React.createElement("code", null, "showModification"), " is set to ", /*#__PURE__*/ React.createElement("code", null, "false"), ', it will return the result "left is removed, right is added").'), /*#__PURE__*/ React.createElement(Viewer, {
	        diff: diff4,
	        ...viewerCommonProps
	    }), /*#__PURE__*/ React.createElement("p", null, /*#__PURE__*/ React.createElement("button", {
	        onClick: ()=>openInPlayground(before5, after5)
	    }, "⬇️ Playground"), " Most of the lines are equal, only small amount of lines are different. You can use the ", /*#__PURE__*/ React.createElement("code", null, "hideUnchangedLines"), " prop to hide the unchanged parts and make the result shorter. Notice: when the ", /*#__PURE__*/ React.createElement("code", null, "diff"), " prop is changed, the expand status will be reset, it's your responsibility to keep the ", /*#__PURE__*/ React.createElement("code", null, "diff"), " props unchanged (you may want to use ", /*#__PURE__*/ React.createElement("code", null, "useState"), " or ", /*#__PURE__*/ React.createElement("code", null, "useMemo"), ")."), /*#__PURE__*/ React.createElement(Viewer, {
	        diff: diff5,
	        ...viewerCommonProps
	    }), /*#__PURE__*/ React.createElement("p", null, /*#__PURE__*/ React.createElement("button", {
	        onClick: ()=>openInPlayground(before6, after6)
	    }, "⬇️ Playground"), " An example for the recursive equal. If the differ option ", /*#__PURE__*/ React.createElement("code", null, "recursiveEqual"), " is set to ", /*#__PURE__*/ React.createElement("code", null, "true"), ", the object items should be treated as equal."), /*#__PURE__*/ React.createElement(Viewer, {
	        diff: diff6,
	        ...viewerCommonProps
	    }), /*#__PURE__*/ React.createElement("p", null, /*#__PURE__*/ React.createElement("button", {
	        disabled: true
	    }, "⚠️ Playground not available"), " Sometimes there may be values that can't be serialized to JSON, like ", /*#__PURE__*/ React.createElement("code", null, "undefined"), ", ", /*#__PURE__*/ React.createElement("code", null, "BigInt"), ", ", /*#__PURE__*/ React.createElement("code", null, "Symbol"), ", ", /*#__PURE__*/ React.createElement("code", null, "function"), ", ", /*#__PURE__*/ React.createElement("code", null, "Infinity"), ", ", /*#__PURE__*/ React.createElement("code", null, "-Infinity"), " and ", /*#__PURE__*/ React.createElement("code", null, "NaN"), ". The differ and viewer can handle them correctly."), /*#__PURE__*/ React.createElement(Viewer, {
	        diff: diff7,
	        ...viewerCommonProps
	    })), /*#__PURE__*/ React.createElement("div", {
	        className: "demo-footer"
	    }, /*#__PURE__*/ React.createElement("p", null, "Made with ♥ by Rex Zeng")), /*#__PURE__*/ React.createElement(ForkMeOnGithub, {
	        repo: "https://github.com/rexskz/json-diff-kit"
	    }));
	};

	const Index = ()=>{
	    const [usePlayground, setUsePlayground] = React.useState(true);
	    return usePlayground ? /*#__PURE__*/ React.createElement(Playground, {
	        onSwitch: ()=>setUsePlayground(false)
	    }) : /*#__PURE__*/ React.createElement(Docs, {
	        onSwitch: ()=>setUsePlayground(true)
	    });
	};
	ReactDOM.render(/*#__PURE__*/ React.createElement(React.StrictMode, null, /*#__PURE__*/ React.createElement(Index, null)), document.getElementById('root'));

}));
