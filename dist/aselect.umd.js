(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('jquery'), require('@popperjs/core'), require('bootstrap')) :
  typeof define === 'function' && define.amd ? define(['jquery', '@popperjs/core', 'bootstrap'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.ASelect = factory(global.jQuery, global.Popper));
})(this, (function ($$k, Popper) { 'use strict';

  function _arrayLikeToArray(r, a) {
    (null == a || a > r.length) && (a = r.length);
    for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
    return n;
  }
  function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
  }
  function _defineProperties(e, r) {
    for (var t = 0; t < r.length; t++) {
      var o = r[t];
      o.enumerable = o.enumerable || false, o.configurable = true, "value" in o && (o.writable = true), Object.defineProperty(e, _toPropertyKey(o.key), o);
    }
  }
  function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), Object.defineProperty(e, "prototype", {
      writable: false
    }), e;
  }
  function _createForOfIteratorHelper(r, e) {
    var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    if (!t) {
      if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e) {
        t && (r = t);
        var n = 0,
          F = function () {};
        return {
          s: F,
          n: function () {
            return n >= r.length ? {
              done: true
            } : {
              done: false,
              value: r[n++]
            };
          },
          e: function (r) {
            throw r;
          },
          f: F
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var o,
      a = true,
      u = false;
    return {
      s: function () {
        t = t.call(r);
      },
      n: function () {
        var r = t.next();
        return a = r.done, r;
      },
      e: function (r) {
        u = true, o = r;
      },
      f: function () {
        try {
          a || null == t.return || t.return();
        } finally {
          if (u) throw o;
        }
      }
    };
  }
  function _defineProperty(e, r, t) {
    return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
      value: t,
      enumerable: true,
      configurable: true,
      writable: true
    }) : e[r] = t, e;
  }
  function ownKeys$2(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r && (o = o.filter(function (r) {
        return Object.getOwnPropertyDescriptor(e, r).enumerable;
      })), t.push.apply(t, o);
    }
    return t;
  }
  function _objectSpread2(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = null != arguments[r] ? arguments[r] : {};
      r % 2 ? ownKeys$2(Object(t), true).forEach(function (r) {
        _defineProperty(e, r, t[r]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$2(Object(t)).forEach(function (r) {
        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
      });
    }
    return e;
  }
  function _toPrimitive(t, r) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r);
      if ("object" != typeof i) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (String )(t);
  }
  function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == typeof i ? i : i + "";
  }
  function _unsupportedIterableToArray(r, a) {
    if (r) {
      if ("string" == typeof r) return _arrayLikeToArray(r, a);
      var t = {}.toString.call(r).slice(8, -1);
      return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
    }
  }

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  var check = function (it) {
    return it && it.Math === Math && it;
  };

  // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
  var globalThis_1 =
    // eslint-disable-next-line es/no-global-this -- safe
    check(typeof globalThis == 'object' && globalThis) ||
    check(typeof window == 'object' && window) ||
    // eslint-disable-next-line no-restricted-globals -- safe
    check(typeof self == 'object' && self) ||
    check(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
    check(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
    // eslint-disable-next-line no-new-func -- fallback
    (function () { return this; })() || Function('return this')();

  var objectGetOwnPropertyDescriptor = {};

  var fails$s = function (exec) {
    try {
      return !!exec();
    } catch (error) {
      return true;
    }
  };

  var fails$r = fails$s;

  // Detect IE8's incomplete defineProperty implementation
  var descriptors = !fails$r(function () {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] !== 7;
  });

  var fails$q = fails$s;

  var functionBindNative = !fails$q(function () {
    // eslint-disable-next-line es/no-function-prototype-bind -- safe
    var test = (function () { /* empty */ }).bind();
    // eslint-disable-next-line no-prototype-builtins -- safe
    return typeof test != 'function' || test.hasOwnProperty('prototype');
  });

  var NATIVE_BIND$3 = functionBindNative;

  var call$i = Function.prototype.call;
  // eslint-disable-next-line es/no-function-prototype-bind -- safe
  var functionCall = NATIVE_BIND$3 ? call$i.bind(call$i) : function () {
    return call$i.apply(call$i, arguments);
  };

  var objectPropertyIsEnumerable = {};

  var $propertyIsEnumerable = {}.propertyIsEnumerable;
  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var getOwnPropertyDescriptor$2 = Object.getOwnPropertyDescriptor;

  // Nashorn ~ JDK8 bug
  var NASHORN_BUG = getOwnPropertyDescriptor$2 && !$propertyIsEnumerable.call({ 1: 2 }, 1);

  // `Object.prototype.propertyIsEnumerable` method implementation
  // https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
  objectPropertyIsEnumerable.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
    var descriptor = getOwnPropertyDescriptor$2(this, V);
    return !!descriptor && descriptor.enumerable;
  } : $propertyIsEnumerable;

  var createPropertyDescriptor$4 = function (bitmap, value) {
    return {
      enumerable: !(bitmap & 1),
      configurable: !(bitmap & 2),
      writable: !(bitmap & 4),
      value: value
    };
  };

  var NATIVE_BIND$2 = functionBindNative;

  var FunctionPrototype$2 = Function.prototype;
  var call$h = FunctionPrototype$2.call;
  // eslint-disable-next-line es/no-function-prototype-bind -- safe
  var uncurryThisWithBind = NATIVE_BIND$2 && FunctionPrototype$2.bind.bind(call$h, call$h);

  var functionUncurryThis = NATIVE_BIND$2 ? uncurryThisWithBind : function (fn) {
    return function () {
      return call$h.apply(fn, arguments);
    };
  };

  var uncurryThis$n = functionUncurryThis;

  var toString$9 = uncurryThis$n({}.toString);
  var stringSlice$5 = uncurryThis$n(''.slice);

  var classofRaw$2 = function (it) {
    return stringSlice$5(toString$9(it), 8, -1);
  };

  var uncurryThis$m = functionUncurryThis;
  var fails$p = fails$s;
  var classof$b = classofRaw$2;

  var $Object$4 = Object;
  var split = uncurryThis$m(''.split);

  // fallback for non-array-like ES3 and non-enumerable old V8 strings
  var indexedObject = fails$p(function () {
    // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
    // eslint-disable-next-line no-prototype-builtins -- safe
    return !$Object$4('z').propertyIsEnumerable(0);
  }) ? function (it) {
    return classof$b(it) === 'String' ? split(it, '') : $Object$4(it);
  } : $Object$4;

  // we can't use just `it == null` since of `document.all` special case
  // https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
  var isNullOrUndefined$6 = function (it) {
    return it === null || it === undefined;
  };

  var isNullOrUndefined$5 = isNullOrUndefined$6;

  var $TypeError$f = TypeError;

  // `RequireObjectCoercible` abstract operation
  // https://tc39.es/ecma262/#sec-requireobjectcoercible
  var requireObjectCoercible$7 = function (it) {
    if (isNullOrUndefined$5(it)) throw new $TypeError$f("Can't call method on " + it);
    return it;
  };

  // toObject with fallback for non-array-like ES3 strings
  var IndexedObject$2 = indexedObject;
  var requireObjectCoercible$6 = requireObjectCoercible$7;

  var toIndexedObject$6 = function (it) {
    return IndexedObject$2(requireObjectCoercible$6(it));
  };

  // https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
  var documentAll = typeof document == 'object' && document.all;

  // `IsCallable` abstract operation
  // https://tc39.es/ecma262/#sec-iscallable
  // eslint-disable-next-line unicorn/no-typeof-undefined -- required for testing
  var isCallable$n = typeof documentAll == 'undefined' && documentAll !== undefined ? function (argument) {
    return typeof argument == 'function' || argument === documentAll;
  } : function (argument) {
    return typeof argument == 'function';
  };

  var isCallable$m = isCallable$n;

  var isObject$i = function (it) {
    return typeof it == 'object' ? it !== null : isCallable$m(it);
  };

  var globalThis$p = globalThis_1;
  var isCallable$l = isCallable$n;

  var aFunction = function (argument) {
    return isCallable$l(argument) ? argument : undefined;
  };

  var getBuiltIn$7 = function (namespace, method) {
    return arguments.length < 2 ? aFunction(globalThis$p[namespace]) : globalThis$p[namespace] && globalThis$p[namespace][method];
  };

  var uncurryThis$l = functionUncurryThis;

  var objectIsPrototypeOf = uncurryThis$l({}.isPrototypeOf);

  var globalThis$o = globalThis_1;

  var navigator = globalThis$o.navigator;
  var userAgent$5 = navigator && navigator.userAgent;

  var environmentUserAgent = userAgent$5 ? String(userAgent$5) : '';

  var globalThis$n = globalThis_1;
  var userAgent$4 = environmentUserAgent;

  var process$3 = globalThis$n.process;
  var Deno$1 = globalThis$n.Deno;
  var versions = process$3 && process$3.versions || Deno$1 && Deno$1.version;
  var v8 = versions && versions.v8;
  var match, version;

  if (v8) {
    match = v8.split('.');
    // in old Chrome, versions of V8 isn't V8 = Chrome / 10
    // but their correct versions are not interesting for us
    version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
  }

  // BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
  // so check `userAgent` even if `.v8` exists, but 0
  if (!version && userAgent$4) {
    match = userAgent$4.match(/Edge\/(\d+)/);
    if (!match || match[1] >= 74) {
      match = userAgent$4.match(/Chrome\/(\d+)/);
      if (match) version = +match[1];
    }
  }

  var environmentV8Version = version;

  /* eslint-disable es/no-symbol -- required for testing */
  var V8_VERSION$3 = environmentV8Version;
  var fails$o = fails$s;
  var globalThis$m = globalThis_1;

  var $String$5 = globalThis$m.String;

  // eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
  var symbolConstructorDetection = !!Object.getOwnPropertySymbols && !fails$o(function () {
    var symbol = Symbol('symbol detection');
    // Chrome 38 Symbol has incorrect toString conversion
    // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
    // nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
    // of course, fail.
    return !$String$5(symbol) || !(Object(symbol) instanceof Symbol) ||
      // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
      !Symbol.sham && V8_VERSION$3 && V8_VERSION$3 < 41;
  });

  /* eslint-disable es/no-symbol -- required for testing */
  var NATIVE_SYMBOL$1 = symbolConstructorDetection;

  var useSymbolAsUid = NATIVE_SYMBOL$1 &&
    !Symbol.sham &&
    typeof Symbol.iterator == 'symbol';

  var getBuiltIn$6 = getBuiltIn$7;
  var isCallable$k = isCallable$n;
  var isPrototypeOf$3 = objectIsPrototypeOf;
  var USE_SYMBOL_AS_UID$1 = useSymbolAsUid;

  var $Object$3 = Object;

  var isSymbol$2 = USE_SYMBOL_AS_UID$1 ? function (it) {
    return typeof it == 'symbol';
  } : function (it) {
    var $Symbol = getBuiltIn$6('Symbol');
    return isCallable$k($Symbol) && isPrototypeOf$3($Symbol.prototype, $Object$3(it));
  };

  var $String$4 = String;

  var tryToString$4 = function (argument) {
    try {
      return $String$4(argument);
    } catch (error) {
      return 'Object';
    }
  };

  var isCallable$j = isCallable$n;
  var tryToString$3 = tryToString$4;

  var $TypeError$e = TypeError;

  // `Assert: IsCallable(argument) is true`
  var aCallable$8 = function (argument) {
    if (isCallable$j(argument)) return argument;
    throw new $TypeError$e(tryToString$3(argument) + ' is not a function');
  };

  var aCallable$7 = aCallable$8;
  var isNullOrUndefined$4 = isNullOrUndefined$6;

  // `GetMethod` abstract operation
  // https://tc39.es/ecma262/#sec-getmethod
  var getMethod$4 = function (V, P) {
    var func = V[P];
    return isNullOrUndefined$4(func) ? undefined : aCallable$7(func);
  };

  var call$g = functionCall;
  var isCallable$i = isCallable$n;
  var isObject$h = isObject$i;

  var $TypeError$d = TypeError;

  // `OrdinaryToPrimitive` abstract operation
  // https://tc39.es/ecma262/#sec-ordinarytoprimitive
  var ordinaryToPrimitive$1 = function (input, pref) {
    var fn, val;
    if (pref === 'string' && isCallable$i(fn = input.toString) && !isObject$h(val = call$g(fn, input))) return val;
    if (isCallable$i(fn = input.valueOf) && !isObject$h(val = call$g(fn, input))) return val;
    if (pref !== 'string' && isCallable$i(fn = input.toString) && !isObject$h(val = call$g(fn, input))) return val;
    throw new $TypeError$d("Can't convert object to primitive value");
  };

  var sharedStore = {exports: {}};

  var globalThis$l = globalThis_1;

  // eslint-disable-next-line es/no-object-defineproperty -- safe
  var defineProperty$5 = Object.defineProperty;

  var defineGlobalProperty$3 = function (key, value) {
    try {
      defineProperty$5(globalThis$l, key, { value: value, configurable: true, writable: true });
    } catch (error) {
      globalThis$l[key] = value;
    } return value;
  };

  var globalThis$k = globalThis_1;
  var defineGlobalProperty$2 = defineGlobalProperty$3;

  var SHARED = '__core-js_shared__';
  var store$3 = sharedStore.exports = globalThis$k[SHARED] || defineGlobalProperty$2(SHARED, {});

  (store$3.versions || (store$3.versions = [])).push({
    version: '3.47.0',
    mode: 'global',
    copyright: '© 2014-2025 Denis Pushkarev (zloirock.ru), 2025 CoreJS Company (core-js.io)',
    license: 'https://github.com/zloirock/core-js/blob/v3.47.0/LICENSE',
    source: 'https://github.com/zloirock/core-js'
  });

  var sharedStoreExports = sharedStore.exports;

  var store$2 = sharedStoreExports;

  var shared$4 = function (key, value) {
    return store$2[key] || (store$2[key] = value || {});
  };

  var requireObjectCoercible$5 = requireObjectCoercible$7;

  var $Object$2 = Object;

  // `ToObject` abstract operation
  // https://tc39.es/ecma262/#sec-toobject
  var toObject$7 = function (argument) {
    return $Object$2(requireObjectCoercible$5(argument));
  };

  var uncurryThis$k = functionUncurryThis;
  var toObject$6 = toObject$7;

  var hasOwnProperty = uncurryThis$k({}.hasOwnProperty);

  // `HasOwnProperty` abstract operation
  // https://tc39.es/ecma262/#sec-hasownproperty
  // eslint-disable-next-line es/no-object-hasown -- safe
  var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
    return hasOwnProperty(toObject$6(it), key);
  };

  var uncurryThis$j = functionUncurryThis;

  var id$1 = 0;
  var postfix = Math.random();
  var toString$8 = uncurryThis$j(1.1.toString);

  var uid$3 = function (key) {
    return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString$8(++id$1 + postfix, 36);
  };

  var globalThis$j = globalThis_1;
  var shared$3 = shared$4;
  var hasOwn$b = hasOwnProperty_1;
  var uid$2 = uid$3;
  var NATIVE_SYMBOL = symbolConstructorDetection;
  var USE_SYMBOL_AS_UID = useSymbolAsUid;

  var Symbol$1 = globalThis$j.Symbol;
  var WellKnownSymbolsStore = shared$3('wks');
  var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol$1['for'] || Symbol$1 : Symbol$1 && Symbol$1.withoutSetter || uid$2;

  var wellKnownSymbol$k = function (name) {
    if (!hasOwn$b(WellKnownSymbolsStore, name)) {
      WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn$b(Symbol$1, name)
        ? Symbol$1[name]
        : createWellKnownSymbol('Symbol.' + name);
    } return WellKnownSymbolsStore[name];
  };

  var call$f = functionCall;
  var isObject$g = isObject$i;
  var isSymbol$1 = isSymbol$2;
  var getMethod$3 = getMethod$4;
  var ordinaryToPrimitive = ordinaryToPrimitive$1;
  var wellKnownSymbol$j = wellKnownSymbol$k;

  var $TypeError$c = TypeError;
  var TO_PRIMITIVE = wellKnownSymbol$j('toPrimitive');

  // `ToPrimitive` abstract operation
  // https://tc39.es/ecma262/#sec-toprimitive
  var toPrimitive$1 = function (input, pref) {
    if (!isObject$g(input) || isSymbol$1(input)) return input;
    var exoticToPrim = getMethod$3(input, TO_PRIMITIVE);
    var result;
    if (exoticToPrim) {
      if (pref === undefined) pref = 'default';
      result = call$f(exoticToPrim, input, pref);
      if (!isObject$g(result) || isSymbol$1(result)) return result;
      throw new $TypeError$c("Can't convert object to primitive value");
    }
    if (pref === undefined) pref = 'number';
    return ordinaryToPrimitive(input, pref);
  };

  var toPrimitive = toPrimitive$1;
  var isSymbol = isSymbol$2;

  // `ToPropertyKey` abstract operation
  // https://tc39.es/ecma262/#sec-topropertykey
  var toPropertyKey$2 = function (argument) {
    var key = toPrimitive(argument, 'string');
    return isSymbol(key) ? key : key + '';
  };

  var globalThis$i = globalThis_1;
  var isObject$f = isObject$i;

  var document$3 = globalThis$i.document;
  // typeof document.createElement is 'object' in old IE
  var EXISTS$1 = isObject$f(document$3) && isObject$f(document$3.createElement);

  var documentCreateElement$2 = function (it) {
    return EXISTS$1 ? document$3.createElement(it) : {};
  };

  var DESCRIPTORS$b = descriptors;
  var fails$n = fails$s;
  var createElement$1 = documentCreateElement$2;

  // Thanks to IE8 for its funny defineProperty
  var ie8DomDefine = !DESCRIPTORS$b && !fails$n(function () {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty(createElement$1('div'), 'a', {
      get: function () { return 7; }
    }).a !== 7;
  });

  var DESCRIPTORS$a = descriptors;
  var call$e = functionCall;
  var propertyIsEnumerableModule = objectPropertyIsEnumerable;
  var createPropertyDescriptor$3 = createPropertyDescriptor$4;
  var toIndexedObject$5 = toIndexedObject$6;
  var toPropertyKey$1 = toPropertyKey$2;
  var hasOwn$a = hasOwnProperty_1;
  var IE8_DOM_DEFINE$1 = ie8DomDefine;

  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var $getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;

  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
  objectGetOwnPropertyDescriptor.f = DESCRIPTORS$a ? $getOwnPropertyDescriptor$1 : function getOwnPropertyDescriptor(O, P) {
    O = toIndexedObject$5(O);
    P = toPropertyKey$1(P);
    if (IE8_DOM_DEFINE$1) try {
      return $getOwnPropertyDescriptor$1(O, P);
    } catch (error) { /* empty */ }
    if (hasOwn$a(O, P)) return createPropertyDescriptor$3(!call$e(propertyIsEnumerableModule.f, O, P), O[P]);
  };

  var objectDefineProperty = {};

  var DESCRIPTORS$9 = descriptors;
  var fails$m = fails$s;

  // V8 ~ Chrome 36-
  // https://bugs.chromium.org/p/v8/issues/detail?id=3334
  var v8PrototypeDefineBug = DESCRIPTORS$9 && fails$m(function () {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty(function () { /* empty */ }, 'prototype', {
      value: 42,
      writable: false
    }).prototype !== 42;
  });

  var isObject$e = isObject$i;

  var $String$3 = String;
  var $TypeError$b = TypeError;

  // `Assert: Type(argument) is Object`
  var anObject$d = function (argument) {
    if (isObject$e(argument)) return argument;
    throw new $TypeError$b($String$3(argument) + ' is not an object');
  };

  var DESCRIPTORS$8 = descriptors;
  var IE8_DOM_DEFINE = ie8DomDefine;
  var V8_PROTOTYPE_DEFINE_BUG$1 = v8PrototypeDefineBug;
  var anObject$c = anObject$d;
  var toPropertyKey = toPropertyKey$2;

  var $TypeError$a = TypeError;
  // eslint-disable-next-line es/no-object-defineproperty -- safe
  var $defineProperty = Object.defineProperty;
  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
  var ENUMERABLE = 'enumerable';
  var CONFIGURABLE$1 = 'configurable';
  var WRITABLE = 'writable';

  // `Object.defineProperty` method
  // https://tc39.es/ecma262/#sec-object.defineproperty
  objectDefineProperty.f = DESCRIPTORS$8 ? V8_PROTOTYPE_DEFINE_BUG$1 ? function defineProperty(O, P, Attributes) {
    anObject$c(O);
    P = toPropertyKey(P);
    anObject$c(Attributes);
    if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
      var current = $getOwnPropertyDescriptor(O, P);
      if (current && current[WRITABLE]) {
        O[P] = Attributes.value;
        Attributes = {
          configurable: CONFIGURABLE$1 in Attributes ? Attributes[CONFIGURABLE$1] : current[CONFIGURABLE$1],
          enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
          writable: false
        };
      }
    } return $defineProperty(O, P, Attributes);
  } : $defineProperty : function defineProperty(O, P, Attributes) {
    anObject$c(O);
    P = toPropertyKey(P);
    anObject$c(Attributes);
    if (IE8_DOM_DEFINE) try {
      return $defineProperty(O, P, Attributes);
    } catch (error) { /* empty */ }
    if ('get' in Attributes || 'set' in Attributes) throw new $TypeError$a('Accessors not supported');
    if ('value' in Attributes) O[P] = Attributes.value;
    return O;
  };

  var DESCRIPTORS$7 = descriptors;
  var definePropertyModule$4 = objectDefineProperty;
  var createPropertyDescriptor$2 = createPropertyDescriptor$4;

  var createNonEnumerableProperty$5 = DESCRIPTORS$7 ? function (object, key, value) {
    return definePropertyModule$4.f(object, key, createPropertyDescriptor$2(1, value));
  } : function (object, key, value) {
    object[key] = value;
    return object;
  };

  var makeBuiltIn$3 = {exports: {}};

  var DESCRIPTORS$6 = descriptors;
  var hasOwn$9 = hasOwnProperty_1;

  var FunctionPrototype$1 = Function.prototype;
  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var getDescriptor = DESCRIPTORS$6 && Object.getOwnPropertyDescriptor;

  var EXISTS = hasOwn$9(FunctionPrototype$1, 'name');
  // additional protection from minified / mangled / dropped function names
  var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
  var CONFIGURABLE = EXISTS && (!DESCRIPTORS$6 || (DESCRIPTORS$6 && getDescriptor(FunctionPrototype$1, 'name').configurable));

  var functionName = {
    PROPER: PROPER,
    CONFIGURABLE: CONFIGURABLE
  };

  var uncurryThis$i = functionUncurryThis;
  var isCallable$h = isCallable$n;
  var store$1 = sharedStoreExports;

  var functionToString = uncurryThis$i(Function.toString);

  // this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
  if (!isCallable$h(store$1.inspectSource)) {
    store$1.inspectSource = function (it) {
      return functionToString(it);
    };
  }

  var inspectSource$3 = store$1.inspectSource;

  var globalThis$h = globalThis_1;
  var isCallable$g = isCallable$n;

  var WeakMap$1 = globalThis$h.WeakMap;

  var weakMapBasicDetection = isCallable$g(WeakMap$1) && /native code/.test(String(WeakMap$1));

  var shared$2 = shared$4;
  var uid$1 = uid$3;

  var keys = shared$2('keys');

  var sharedKey$3 = function (key) {
    return keys[key] || (keys[key] = uid$1(key));
  };

  var hiddenKeys$5 = {};

  var NATIVE_WEAK_MAP = weakMapBasicDetection;
  var globalThis$g = globalThis_1;
  var isObject$d = isObject$i;
  var createNonEnumerableProperty$4 = createNonEnumerableProperty$5;
  var hasOwn$8 = hasOwnProperty_1;
  var shared$1 = sharedStoreExports;
  var sharedKey$2 = sharedKey$3;
  var hiddenKeys$4 = hiddenKeys$5;

  var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
  var TypeError$2 = globalThis$g.TypeError;
  var WeakMap = globalThis$g.WeakMap;
  var set$1, get, has;

  var enforce = function (it) {
    return has(it) ? get(it) : set$1(it, {});
  };

  var getterFor = function (TYPE) {
    return function (it) {
      var state;
      if (!isObject$d(it) || (state = get(it)).type !== TYPE) {
        throw new TypeError$2('Incompatible receiver, ' + TYPE + ' required');
      } return state;
    };
  };

  if (NATIVE_WEAK_MAP || shared$1.state) {
    var store = shared$1.state || (shared$1.state = new WeakMap());
    /* eslint-disable no-self-assign -- prototype methods protection */
    store.get = store.get;
    store.has = store.has;
    store.set = store.set;
    /* eslint-enable no-self-assign -- prototype methods protection */
    set$1 = function (it, metadata) {
      if (store.has(it)) throw new TypeError$2(OBJECT_ALREADY_INITIALIZED);
      metadata.facade = it;
      store.set(it, metadata);
      return metadata;
    };
    get = function (it) {
      return store.get(it) || {};
    };
    has = function (it) {
      return store.has(it);
    };
  } else {
    var STATE = sharedKey$2('state');
    hiddenKeys$4[STATE] = true;
    set$1 = function (it, metadata) {
      if (hasOwn$8(it, STATE)) throw new TypeError$2(OBJECT_ALREADY_INITIALIZED);
      metadata.facade = it;
      createNonEnumerableProperty$4(it, STATE, metadata);
      return metadata;
    };
    get = function (it) {
      return hasOwn$8(it, STATE) ? it[STATE] : {};
    };
    has = function (it) {
      return hasOwn$8(it, STATE);
    };
  }

  var internalState = {
    set: set$1,
    get: get,
    has: has,
    enforce: enforce,
    getterFor: getterFor
  };

  var uncurryThis$h = functionUncurryThis;
  var fails$l = fails$s;
  var isCallable$f = isCallable$n;
  var hasOwn$7 = hasOwnProperty_1;
  var DESCRIPTORS$5 = descriptors;
  var CONFIGURABLE_FUNCTION_NAME$1 = functionName.CONFIGURABLE;
  var inspectSource$2 = inspectSource$3;
  var InternalStateModule$3 = internalState;

  var enforceInternalState = InternalStateModule$3.enforce;
  var getInternalState$2 = InternalStateModule$3.get;
  var $String$2 = String;
  // eslint-disable-next-line es/no-object-defineproperty -- safe
  var defineProperty$4 = Object.defineProperty;
  var stringSlice$4 = uncurryThis$h(''.slice);
  var replace$3 = uncurryThis$h(''.replace);
  var join = uncurryThis$h([].join);

  var CONFIGURABLE_LENGTH = DESCRIPTORS$5 && !fails$l(function () {
    return defineProperty$4(function () { /* empty */ }, 'length', { value: 8 }).length !== 8;
  });

  var TEMPLATE = String(String).split('String');

  var makeBuiltIn$2 = makeBuiltIn$3.exports = function (value, name, options) {
    if (stringSlice$4($String$2(name), 0, 7) === 'Symbol(') {
      name = '[' + replace$3($String$2(name), /^Symbol\(([^)]*)\).*$/, '$1') + ']';
    }
    if (options && options.getter) name = 'get ' + name;
    if (options && options.setter) name = 'set ' + name;
    if (!hasOwn$7(value, 'name') || (CONFIGURABLE_FUNCTION_NAME$1 && value.name !== name)) {
      if (DESCRIPTORS$5) defineProperty$4(value, 'name', { value: name, configurable: true });
      else value.name = name;
    }
    if (CONFIGURABLE_LENGTH && options && hasOwn$7(options, 'arity') && value.length !== options.arity) {
      defineProperty$4(value, 'length', { value: options.arity });
    }
    try {
      if (options && hasOwn$7(options, 'constructor') && options.constructor) {
        if (DESCRIPTORS$5) defineProperty$4(value, 'prototype', { writable: false });
      // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
      } else if (value.prototype) value.prototype = undefined;
    } catch (error) { /* empty */ }
    var state = enforceInternalState(value);
    if (!hasOwn$7(state, 'source')) {
      state.source = join(TEMPLATE, typeof name == 'string' ? name : '');
    } return value;
  };

  // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
  // eslint-disable-next-line no-extend-native -- required
  Function.prototype.toString = makeBuiltIn$2(function toString() {
    return isCallable$f(this) && getInternalState$2(this).source || inspectSource$2(this);
  }, 'toString');

  var makeBuiltInExports = makeBuiltIn$3.exports;

  var isCallable$e = isCallable$n;
  var definePropertyModule$3 = objectDefineProperty;
  var makeBuiltIn$1 = makeBuiltInExports;
  var defineGlobalProperty$1 = defineGlobalProperty$3;

  var defineBuiltIn$9 = function (O, key, value, options) {
    if (!options) options = {};
    var simple = options.enumerable;
    var name = options.name !== undefined ? options.name : key;
    if (isCallable$e(value)) makeBuiltIn$1(value, name, options);
    if (options.global) {
      if (simple) O[key] = value;
      else defineGlobalProperty$1(key, value);
    } else {
      try {
        if (!options.unsafe) delete O[key];
        else if (O[key]) simple = true;
      } catch (error) { /* empty */ }
      if (simple) O[key] = value;
      else definePropertyModule$3.f(O, key, {
        value: value,
        enumerable: false,
        configurable: !options.nonConfigurable,
        writable: !options.nonWritable
      });
    } return O;
  };

  var objectGetOwnPropertyNames = {};

  var ceil = Math.ceil;
  var floor$1 = Math.floor;

  // `Math.trunc` method
  // https://tc39.es/ecma262/#sec-math.trunc
  // eslint-disable-next-line es/no-math-trunc -- safe
  var mathTrunc = Math.trunc || function trunc(x) {
    var n = +x;
    return (n > 0 ? floor$1 : ceil)(n);
  };

  var trunc = mathTrunc;

  // `ToIntegerOrInfinity` abstract operation
  // https://tc39.es/ecma262/#sec-tointegerorinfinity
  var toIntegerOrInfinity$4 = function (argument) {
    var number = +argument;
    // eslint-disable-next-line no-self-compare -- NaN check
    return number !== number || number === 0 ? 0 : trunc(number);
  };

  var toIntegerOrInfinity$3 = toIntegerOrInfinity$4;

  var max$1 = Math.max;
  var min$2 = Math.min;

  // Helper for a popular repeating case of the spec:
  // Let integer be ? ToInteger(index).
  // If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
  var toAbsoluteIndex$1 = function (index, length) {
    var integer = toIntegerOrInfinity$3(index);
    return integer < 0 ? max$1(integer + length, 0) : min$2(integer, length);
  };

  var toIntegerOrInfinity$2 = toIntegerOrInfinity$4;

  var min$1 = Math.min;

  // `ToLength` abstract operation
  // https://tc39.es/ecma262/#sec-tolength
  var toLength$2 = function (argument) {
    var len = toIntegerOrInfinity$2(argument);
    return len > 0 ? min$1(len, 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
  };

  var toLength$1 = toLength$2;

  // `LengthOfArrayLike` abstract operation
  // https://tc39.es/ecma262/#sec-lengthofarraylike
  var lengthOfArrayLike$5 = function (obj) {
    return toLength$1(obj.length);
  };

  var toIndexedObject$4 = toIndexedObject$6;
  var toAbsoluteIndex = toAbsoluteIndex$1;
  var lengthOfArrayLike$4 = lengthOfArrayLike$5;

  // `Array.prototype.{ indexOf, includes }` methods implementation
  var createMethod$3 = function (IS_INCLUDES) {
    return function ($this, el, fromIndex) {
      var O = toIndexedObject$4($this);
      var length = lengthOfArrayLike$4(O);
      if (length === 0) return !IS_INCLUDES && -1;
      var index = toAbsoluteIndex(fromIndex, length);
      var value;
      // Array#includes uses SameValueZero equality algorithm
      // eslint-disable-next-line no-self-compare -- NaN check
      if (IS_INCLUDES && el !== el) while (length > index) {
        value = O[index++];
        // eslint-disable-next-line no-self-compare -- NaN check
        if (value !== value) return true;
      // Array#indexOf ignores holes, Array#includes - not
      } else for (;length > index; index++) {
        if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
      } return !IS_INCLUDES && -1;
    };
  };

  var arrayIncludes = {
    // `Array.prototype.includes` method
    // https://tc39.es/ecma262/#sec-array.prototype.includes
    includes: createMethod$3(true),
    // `Array.prototype.indexOf` method
    // https://tc39.es/ecma262/#sec-array.prototype.indexof
    indexOf: createMethod$3(false)
  };

  var uncurryThis$g = functionUncurryThis;
  var hasOwn$6 = hasOwnProperty_1;
  var toIndexedObject$3 = toIndexedObject$6;
  var indexOf$1 = arrayIncludes.indexOf;
  var hiddenKeys$3 = hiddenKeys$5;

  var push$2 = uncurryThis$g([].push);

  var objectKeysInternal = function (object, names) {
    var O = toIndexedObject$3(object);
    var i = 0;
    var result = [];
    var key;
    for (key in O) !hasOwn$6(hiddenKeys$3, key) && hasOwn$6(O, key) && push$2(result, key);
    // Don't enum bug & hidden keys
    while (names.length > i) if (hasOwn$6(O, key = names[i++])) {
      ~indexOf$1(result, key) || push$2(result, key);
    }
    return result;
  };

  // IE8- don't enum bug keys
  var enumBugKeys$3 = [
    'constructor',
    'hasOwnProperty',
    'isPrototypeOf',
    'propertyIsEnumerable',
    'toLocaleString',
    'toString',
    'valueOf'
  ];

  var internalObjectKeys$1 = objectKeysInternal;
  var enumBugKeys$2 = enumBugKeys$3;

  var hiddenKeys$2 = enumBugKeys$2.concat('length', 'prototype');

  // `Object.getOwnPropertyNames` method
  // https://tc39.es/ecma262/#sec-object.getownpropertynames
  // eslint-disable-next-line es/no-object-getownpropertynames -- safe
  objectGetOwnPropertyNames.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
    return internalObjectKeys$1(O, hiddenKeys$2);
  };

  var objectGetOwnPropertySymbols = {};

  // eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
  objectGetOwnPropertySymbols.f = Object.getOwnPropertySymbols;

  var getBuiltIn$5 = getBuiltIn$7;
  var uncurryThis$f = functionUncurryThis;
  var getOwnPropertyNamesModule$1 = objectGetOwnPropertyNames;
  var getOwnPropertySymbolsModule = objectGetOwnPropertySymbols;
  var anObject$b = anObject$d;

  var concat$1 = uncurryThis$f([].concat);

  // all object keys, includes non-enumerable and symbols
  var ownKeys$1 = getBuiltIn$5('Reflect', 'ownKeys') || function ownKeys(it) {
    var keys = getOwnPropertyNamesModule$1.f(anObject$b(it));
    var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
    return getOwnPropertySymbols ? concat$1(keys, getOwnPropertySymbols(it)) : keys;
  };

  var hasOwn$5 = hasOwnProperty_1;
  var ownKeys = ownKeys$1;
  var getOwnPropertyDescriptorModule = objectGetOwnPropertyDescriptor;
  var definePropertyModule$2 = objectDefineProperty;

  var copyConstructorProperties$1 = function (target, source, exceptions) {
    var keys = ownKeys(source);
    var defineProperty = definePropertyModule$2.f;
    var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      if (!hasOwn$5(target, key) && !(exceptions && hasOwn$5(exceptions, key))) {
        defineProperty(target, key, getOwnPropertyDescriptor(source, key));
      }
    }
  };

  var fails$k = fails$s;
  var isCallable$d = isCallable$n;

  var replacement = /#|\.prototype\./;

  var isForced$3 = function (feature, detection) {
    var value = data[normalize(feature)];
    return value === POLYFILL ? true
      : value === NATIVE ? false
      : isCallable$d(detection) ? fails$k(detection)
      : !!detection;
  };

  var normalize = isForced$3.normalize = function (string) {
    return String(string).replace(replacement, '.').toLowerCase();
  };

  var data = isForced$3.data = {};
  var NATIVE = isForced$3.NATIVE = 'N';
  var POLYFILL = isForced$3.POLYFILL = 'P';

  var isForced_1 = isForced$3;

  var globalThis$f = globalThis_1;
  var getOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f;
  var createNonEnumerableProperty$3 = createNonEnumerableProperty$5;
  var defineBuiltIn$8 = defineBuiltIn$9;
  var defineGlobalProperty = defineGlobalProperty$3;
  var copyConstructorProperties = copyConstructorProperties$1;
  var isForced$2 = isForced_1;

  /*
    options.target         - name of the target object
    options.global         - target is the global object
    options.stat           - export as static methods of target
    options.proto          - export as prototype methods of target
    options.real           - real prototype method for the `pure` version
    options.forced         - export even if the native feature is available
    options.bind           - bind methods to the target, required for the `pure` version
    options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
    options.unsafe         - use the simple assignment of property instead of delete + defineProperty
    options.sham           - add a flag to not completely full polyfills
    options.enumerable     - export as enumerable property
    options.dontCallGetSet - prevent calling a getter on target
    options.name           - the .name of the function if it does not match the key
  */
  var _export = function (options, source) {
    var TARGET = options.target;
    var GLOBAL = options.global;
    var STATIC = options.stat;
    var FORCED, target, key, targetProperty, sourceProperty, descriptor;
    if (GLOBAL) {
      target = globalThis$f;
    } else if (STATIC) {
      target = globalThis$f[TARGET] || defineGlobalProperty(TARGET, {});
    } else {
      target = globalThis$f[TARGET] && globalThis$f[TARGET].prototype;
    }
    if (target) for (key in source) {
      sourceProperty = source[key];
      if (options.dontCallGetSet) {
        descriptor = getOwnPropertyDescriptor$1(target, key);
        targetProperty = descriptor && descriptor.value;
      } else targetProperty = target[key];
      FORCED = isForced$2(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
      // contained in target
      if (!FORCED && targetProperty !== undefined) {
        if (typeof sourceProperty == typeof targetProperty) continue;
        copyConstructorProperties(sourceProperty, targetProperty);
      }
      // add a flag to not completely full polyfills
      if (options.sham || (targetProperty && targetProperty.sham)) {
        createNonEnumerableProperty$3(sourceProperty, 'sham', true);
      }
      defineBuiltIn$8(target, key, sourceProperty, options);
    }
  };

  var classof$a = classofRaw$2;

  // `IsArray` abstract operation
  // https://tc39.es/ecma262/#sec-isarray
  // eslint-disable-next-line es/no-array-isarray -- safe
  var isArray$2 = Array.isArray || function isArray(argument) {
    return classof$a(argument) === 'Array';
  };

  var $TypeError$9 = TypeError;
  var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF; // 2 ** 53 - 1 == 9007199254740991

  var doesNotExceedSafeInteger$1 = function (it) {
    if (it > MAX_SAFE_INTEGER) throw $TypeError$9('Maximum allowed index exceeded');
    return it;
  };

  var DESCRIPTORS$4 = descriptors;
  var definePropertyModule$1 = objectDefineProperty;
  var createPropertyDescriptor$1 = createPropertyDescriptor$4;

  var createProperty$2 = function (object, key, value) {
    if (DESCRIPTORS$4) definePropertyModule$1.f(object, key, createPropertyDescriptor$1(0, value));
    else object[key] = value;
  };

  var wellKnownSymbol$i = wellKnownSymbol$k;

  var TO_STRING_TAG$2 = wellKnownSymbol$i('toStringTag');
  var test = {};
  // eslint-disable-next-line unicorn/no-immediate-mutation -- ES3 syntax limitation
  test[TO_STRING_TAG$2] = 'z';

  var toStringTagSupport = String(test) === '[object z]';

  var TO_STRING_TAG_SUPPORT$2 = toStringTagSupport;
  var isCallable$c = isCallable$n;
  var classofRaw$1 = classofRaw$2;
  var wellKnownSymbol$h = wellKnownSymbol$k;

  var TO_STRING_TAG$1 = wellKnownSymbol$h('toStringTag');
  var $Object$1 = Object;

  // ES3 wrong here
  var CORRECT_ARGUMENTS = classofRaw$1(function () { return arguments; }()) === 'Arguments';

  // fallback for IE11 Script Access Denied error
  var tryGet = function (it, key) {
    try {
      return it[key];
    } catch (error) { /* empty */ }
  };

  // getting tag from ES6+ `Object.prototype.toString`
  var classof$9 = TO_STRING_TAG_SUPPORT$2 ? classofRaw$1 : function (it) {
    var O, tag, result;
    return it === undefined ? 'Undefined' : it === null ? 'Null'
      // @@toStringTag case
      : typeof (tag = tryGet(O = $Object$1(it), TO_STRING_TAG$1)) == 'string' ? tag
      // builtinTag case
      : CORRECT_ARGUMENTS ? classofRaw$1(O)
      // ES3 arguments fallback
      : (result = classofRaw$1(O)) === 'Object' && isCallable$c(O.callee) ? 'Arguments' : result;
  };

  var uncurryThis$e = functionUncurryThis;
  var fails$j = fails$s;
  var isCallable$b = isCallable$n;
  var classof$8 = classof$9;
  var getBuiltIn$4 = getBuiltIn$7;
  var inspectSource$1 = inspectSource$3;

  var noop = function () { /* empty */ };
  var construct = getBuiltIn$4('Reflect', 'construct');
  var constructorRegExp = /^\s*(?:class|function)\b/;
  var exec$1 = uncurryThis$e(constructorRegExp.exec);
  var INCORRECT_TO_STRING = !constructorRegExp.test(noop);

  var isConstructorModern = function isConstructor(argument) {
    if (!isCallable$b(argument)) return false;
    try {
      construct(noop, [], argument);
      return true;
    } catch (error) {
      return false;
    }
  };

  var isConstructorLegacy = function isConstructor(argument) {
    if (!isCallable$b(argument)) return false;
    switch (classof$8(argument)) {
      case 'AsyncFunction':
      case 'GeneratorFunction':
      case 'AsyncGeneratorFunction': return false;
    }
    try {
      // we can't check .prototype since constructors produced by .bind haven't it
      // `Function#toString` throws on some built-it function in some legacy engines
      // (for example, `DOMQuad` and similar in FF41-)
      return INCORRECT_TO_STRING || !!exec$1(constructorRegExp, inspectSource$1(argument));
    } catch (error) {
      return true;
    }
  };

  isConstructorLegacy.sham = true;

  // `IsConstructor` abstract operation
  // https://tc39.es/ecma262/#sec-isconstructor
  var isConstructor$3 = !construct || fails$j(function () {
    var called;
    return isConstructorModern(isConstructorModern.call)
      || !isConstructorModern(Object)
      || !isConstructorModern(function () { called = true; })
      || called;
  }) ? isConstructorLegacy : isConstructorModern;

  var isArray$1 = isArray$2;
  var isConstructor$2 = isConstructor$3;
  var isObject$c = isObject$i;
  var wellKnownSymbol$g = wellKnownSymbol$k;

  var SPECIES$5 = wellKnownSymbol$g('species');
  var $Array$1 = Array;

  // a part of `ArraySpeciesCreate` abstract operation
  // https://tc39.es/ecma262/#sec-arrayspeciescreate
  var arraySpeciesConstructor$1 = function (originalArray) {
    var C;
    if (isArray$1(originalArray)) {
      C = originalArray.constructor;
      // cross-realm fallback
      if (isConstructor$2(C) && (C === $Array$1 || isArray$1(C.prototype))) C = undefined;
      else if (isObject$c(C)) {
        C = C[SPECIES$5];
        if (C === null) C = undefined;
      }
    } return C === undefined ? $Array$1 : C;
  };

  var arraySpeciesConstructor = arraySpeciesConstructor$1;

  // `ArraySpeciesCreate` abstract operation
  // https://tc39.es/ecma262/#sec-arrayspeciescreate
  var arraySpeciesCreate$2 = function (originalArray, length) {
    return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
  };

  var fails$i = fails$s;
  var wellKnownSymbol$f = wellKnownSymbol$k;
  var V8_VERSION$2 = environmentV8Version;

  var SPECIES$4 = wellKnownSymbol$f('species');

  var arrayMethodHasSpeciesSupport$3 = function (METHOD_NAME) {
    // We can't use this feature detection in V8 since it causes
    // deoptimization and serious performance degradation
    // https://github.com/zloirock/core-js/issues/677
    return V8_VERSION$2 >= 51 || !fails$i(function () {
      var array = [];
      var constructor = array.constructor = {};
      constructor[SPECIES$4] = function () {
        return { foo: 1 };
      };
      return array[METHOD_NAME](Boolean).foo !== 1;
    });
  };

  var $$j = _export;
  var fails$h = fails$s;
  var isArray = isArray$2;
  var isObject$b = isObject$i;
  var toObject$5 = toObject$7;
  var lengthOfArrayLike$3 = lengthOfArrayLike$5;
  var doesNotExceedSafeInteger = doesNotExceedSafeInteger$1;
  var createProperty$1 = createProperty$2;
  var arraySpeciesCreate$1 = arraySpeciesCreate$2;
  var arrayMethodHasSpeciesSupport$2 = arrayMethodHasSpeciesSupport$3;
  var wellKnownSymbol$e = wellKnownSymbol$k;
  var V8_VERSION$1 = environmentV8Version;

  var IS_CONCAT_SPREADABLE = wellKnownSymbol$e('isConcatSpreadable');

  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/679
  var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION$1 >= 51 || !fails$h(function () {
    var array = [];
    array[IS_CONCAT_SPREADABLE] = false;
    return array.concat()[0] !== array;
  });

  var isConcatSpreadable = function (O) {
    if (!isObject$b(O)) return false;
    var spreadable = O[IS_CONCAT_SPREADABLE];
    return spreadable !== undefined ? !!spreadable : isArray(O);
  };

  var FORCED$1 = !IS_CONCAT_SPREADABLE_SUPPORT || !arrayMethodHasSpeciesSupport$2('concat');

  // `Array.prototype.concat` method
  // https://tc39.es/ecma262/#sec-array.prototype.concat
  // with adding support of @@isConcatSpreadable and @@species
  $$j({ target: 'Array', proto: true, arity: 1, forced: FORCED$1 }, {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    concat: function concat(arg) {
      var O = toObject$5(this);
      var A = arraySpeciesCreate$1(O, 0);
      var n = 0;
      var i, k, length, len, E;
      for (i = -1, length = arguments.length; i < length; i++) {
        E = i === -1 ? O : arguments[i];
        if (isConcatSpreadable(E)) {
          len = lengthOfArrayLike$3(E);
          doesNotExceedSafeInteger(n + len);
          for (k = 0; k < len; k++, n++) if (k in E) createProperty$1(A, n, E[k]);
        } else {
          doesNotExceedSafeInteger(n + 1);
          createProperty$1(A, n++, E);
        }
      }
      A.length = n;
      return A;
    }
  });

  var classofRaw = classofRaw$2;
  var uncurryThis$d = functionUncurryThis;

  var functionUncurryThisClause = function (fn) {
    // Nashorn bug:
    //   https://github.com/zloirock/core-js/issues/1128
    //   https://github.com/zloirock/core-js/issues/1130
    if (classofRaw(fn) === 'Function') return uncurryThis$d(fn);
  };

  var uncurryThis$c = functionUncurryThisClause;
  var aCallable$6 = aCallable$8;
  var NATIVE_BIND$1 = functionBindNative;

  var bind$7 = uncurryThis$c(uncurryThis$c.bind);

  // optional / simple context binding
  var functionBindContext = function (fn, that) {
    aCallable$6(fn);
    return that === undefined ? fn : NATIVE_BIND$1 ? bind$7(fn, that) : function (/* ...args */) {
      return fn.apply(that, arguments);
    };
  };

  var bind$6 = functionBindContext;
  var uncurryThis$b = functionUncurryThis;
  var IndexedObject$1 = indexedObject;
  var toObject$4 = toObject$7;
  var lengthOfArrayLike$2 = lengthOfArrayLike$5;
  var arraySpeciesCreate = arraySpeciesCreate$2;

  var push$1 = uncurryThis$b([].push);

  // `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation
  var createMethod$2 = function (TYPE) {
    var IS_MAP = TYPE === 1;
    var IS_FILTER = TYPE === 2;
    var IS_SOME = TYPE === 3;
    var IS_EVERY = TYPE === 4;
    var IS_FIND_INDEX = TYPE === 6;
    var IS_FILTER_REJECT = TYPE === 7;
    var NO_HOLES = TYPE === 5 || IS_FIND_INDEX;
    return function ($this, callbackfn, that, specificCreate) {
      var O = toObject$4($this);
      var self = IndexedObject$1(O);
      var length = lengthOfArrayLike$2(self);
      var boundFunction = bind$6(callbackfn, that);
      var index = 0;
      var create = specificCreate || arraySpeciesCreate;
      var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_REJECT ? create($this, 0) : undefined;
      var value, result;
      for (;length > index; index++) if (NO_HOLES || index in self) {
        value = self[index];
        result = boundFunction(value, index, O);
        if (TYPE) {
          if (IS_MAP) target[index] = result; // map
          else if (result) switch (TYPE) {
            case 3: return true;              // some
            case 5: return value;             // find
            case 6: return index;             // findIndex
            case 2: push$1(target, value);      // filter
          } else switch (TYPE) {
            case 4: return false;             // every
            case 7: push$1(target, value);      // filterReject
          }
        }
      }
      return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
    };
  };

  var arrayIteration = {
    // `Array.prototype.forEach` method
    // https://tc39.es/ecma262/#sec-array.prototype.foreach
    forEach: createMethod$2(0),
    // `Array.prototype.map` method
    // https://tc39.es/ecma262/#sec-array.prototype.map
    map: createMethod$2(1),
    // `Array.prototype.filter` method
    // https://tc39.es/ecma262/#sec-array.prototype.filter
    filter: createMethod$2(2),
    // `Array.prototype.find` method
    // https://tc39.es/ecma262/#sec-array.prototype.find
    find: createMethod$2(5)};

  var $$i = _export;
  var $filter = arrayIteration.filter;
  var arrayMethodHasSpeciesSupport$1 = arrayMethodHasSpeciesSupport$3;

  var HAS_SPECIES_SUPPORT$1 = arrayMethodHasSpeciesSupport$1('filter');

  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  // with adding support of @@species
  $$i({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT$1 }, {
    filter: function filter(callbackfn /* , thisArg */) {
      return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  var objectDefineProperties = {};

  var internalObjectKeys = objectKeysInternal;
  var enumBugKeys$1 = enumBugKeys$3;

  // `Object.keys` method
  // https://tc39.es/ecma262/#sec-object.keys
  // eslint-disable-next-line es/no-object-keys -- safe
  var objectKeys$1 = Object.keys || function keys(O) {
    return internalObjectKeys(O, enumBugKeys$1);
  };

  var DESCRIPTORS$3 = descriptors;
  var V8_PROTOTYPE_DEFINE_BUG = v8PrototypeDefineBug;
  var definePropertyModule = objectDefineProperty;
  var anObject$a = anObject$d;
  var toIndexedObject$2 = toIndexedObject$6;
  var objectKeys = objectKeys$1;

  // `Object.defineProperties` method
  // https://tc39.es/ecma262/#sec-object.defineproperties
  // eslint-disable-next-line es/no-object-defineproperties -- safe
  objectDefineProperties.f = DESCRIPTORS$3 && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
    anObject$a(O);
    var props = toIndexedObject$2(Properties);
    var keys = objectKeys(Properties);
    var length = keys.length;
    var index = 0;
    var key;
    while (length > index) definePropertyModule.f(O, key = keys[index++], props[key]);
    return O;
  };

  var getBuiltIn$3 = getBuiltIn$7;

  var html$2 = getBuiltIn$3('document', 'documentElement');

  /* global ActiveXObject -- old IE, WSH */
  var anObject$9 = anObject$d;
  var definePropertiesModule = objectDefineProperties;
  var enumBugKeys = enumBugKeys$3;
  var hiddenKeys$1 = hiddenKeys$5;
  var html$1 = html$2;
  var documentCreateElement$1 = documentCreateElement$2;
  var sharedKey$1 = sharedKey$3;

  var GT = '>';
  var LT = '<';
  var PROTOTYPE = 'prototype';
  var SCRIPT = 'script';
  var IE_PROTO$1 = sharedKey$1('IE_PROTO');

  var EmptyConstructor = function () { /* empty */ };

  var scriptTag = function (content) {
    return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
  };

  // Create object with fake `null` prototype: use ActiveX Object with cleared prototype
  var NullProtoObjectViaActiveX = function (activeXDocument) {
    activeXDocument.write(scriptTag(''));
    activeXDocument.close();
    var temp = activeXDocument.parentWindow.Object;
    // eslint-disable-next-line no-useless-assignment -- avoid memory leak
    activeXDocument = null;
    return temp;
  };

  // Create object with fake `null` prototype: use iframe Object with cleared prototype
  var NullProtoObjectViaIFrame = function () {
    // Thrash, waste and sodomy: IE GC bug
    var iframe = documentCreateElement$1('iframe');
    var JS = 'java' + SCRIPT + ':';
    var iframeDocument;
    iframe.style.display = 'none';
    html$1.appendChild(iframe);
    // https://github.com/zloirock/core-js/issues/475
    iframe.src = String(JS);
    iframeDocument = iframe.contentWindow.document;
    iframeDocument.open();
    iframeDocument.write(scriptTag('document.F=Object'));
    iframeDocument.close();
    return iframeDocument.F;
  };

  // Check for document.domain and active x support
  // No need to use active x approach when document.domain is not set
  // see https://github.com/es-shims/es5-shim/issues/150
  // variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
  // avoid IE GC bug
  var activeXDocument;
  var NullProtoObject = function () {
    try {
      activeXDocument = new ActiveXObject('htmlfile');
    } catch (error) { /* ignore */ }
    NullProtoObject = typeof document != 'undefined'
      ? document.domain && activeXDocument
        ? NullProtoObjectViaActiveX(activeXDocument) // old IE
        : NullProtoObjectViaIFrame()
      : NullProtoObjectViaActiveX(activeXDocument); // WSH
    var length = enumBugKeys.length;
    while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
    return NullProtoObject();
  };

  hiddenKeys$1[IE_PROTO$1] = true;

  // `Object.create` method
  // https://tc39.es/ecma262/#sec-object.create
  // eslint-disable-next-line es/no-object-create -- safe
  var objectCreate = Object.create || function create(O, Properties) {
    var result;
    if (O !== null) {
      EmptyConstructor[PROTOTYPE] = anObject$9(O);
      result = new EmptyConstructor();
      EmptyConstructor[PROTOTYPE] = null;
      // add "__proto__" for Object.getPrototypeOf polyfill
      result[IE_PROTO$1] = O;
    } else result = NullProtoObject();
    return Properties === undefined ? result : definePropertiesModule.f(result, Properties);
  };

  var wellKnownSymbol$d = wellKnownSymbol$k;
  var create$3 = objectCreate;
  var defineProperty$3 = objectDefineProperty.f;

  var UNSCOPABLES = wellKnownSymbol$d('unscopables');
  var ArrayPrototype$1 = Array.prototype;

  // Array.prototype[@@unscopables]
  // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
  if (ArrayPrototype$1[UNSCOPABLES] === undefined) {
    defineProperty$3(ArrayPrototype$1, UNSCOPABLES, {
      configurable: true,
      value: create$3(null)
    });
  }

  // add a key to Array.prototype[@@unscopables]
  var addToUnscopables$2 = function (key) {
    ArrayPrototype$1[UNSCOPABLES][key] = true;
  };

  var $$h = _export;
  var $find = arrayIteration.find;
  var addToUnscopables$1 = addToUnscopables$2;

  var FIND = 'find';
  var SKIPS_HOLES = true;

  // Shouldn't skip holes
  // eslint-disable-next-line es/no-array-prototype-find -- testing
  if (FIND in []) Array(1)[FIND](function () { SKIPS_HOLES = false; });

  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  $$h({ target: 'Array', proto: true, forced: SKIPS_HOLES }, {
    find: function find(callbackfn /* , that = undefined */) {
      return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
  addToUnscopables$1(FIND);

  var call$d = functionCall;
  var anObject$8 = anObject$d;
  var getMethod$2 = getMethod$4;

  var iteratorClose$2 = function (iterator, kind, value) {
    var innerResult, innerError;
    anObject$8(iterator);
    try {
      innerResult = getMethod$2(iterator, 'return');
      if (!innerResult) {
        if (kind === 'throw') throw value;
        return value;
      }
      innerResult = call$d(innerResult, iterator);
    } catch (error) {
      innerError = true;
      innerResult = error;
    }
    if (kind === 'throw') throw value;
    if (innerError) throw innerResult;
    anObject$8(innerResult);
    return value;
  };

  var anObject$7 = anObject$d;
  var iteratorClose$1 = iteratorClose$2;

  // call something on iterator step with safe closing on error
  var callWithSafeIterationClosing$1 = function (iterator, fn, value, ENTRIES) {
    try {
      return ENTRIES ? fn(anObject$7(value)[0], value[1]) : fn(value);
    } catch (error) {
      iteratorClose$1(iterator, 'throw', error);
    }
  };

  var iterators = {};

  var wellKnownSymbol$c = wellKnownSymbol$k;
  var Iterators$3 = iterators;

  var ITERATOR$4 = wellKnownSymbol$c('iterator');
  var ArrayPrototype = Array.prototype;

  // check on default Array iterator
  var isArrayIteratorMethod$2 = function (it) {
    return it !== undefined && (Iterators$3.Array === it || ArrayPrototype[ITERATOR$4] === it);
  };

  var classof$7 = classof$9;
  var getMethod$1 = getMethod$4;
  var isNullOrUndefined$3 = isNullOrUndefined$6;
  var Iterators$2 = iterators;
  var wellKnownSymbol$b = wellKnownSymbol$k;

  var ITERATOR$3 = wellKnownSymbol$b('iterator');

  var getIteratorMethod$3 = function (it) {
    if (!isNullOrUndefined$3(it)) return getMethod$1(it, ITERATOR$3)
      || getMethod$1(it, '@@iterator')
      || Iterators$2[classof$7(it)];
  };

  var call$c = functionCall;
  var aCallable$5 = aCallable$8;
  var anObject$6 = anObject$d;
  var tryToString$2 = tryToString$4;
  var getIteratorMethod$2 = getIteratorMethod$3;

  var $TypeError$8 = TypeError;

  var getIterator$2 = function (argument, usingIterator) {
    var iteratorMethod = arguments.length < 2 ? getIteratorMethod$2(argument) : usingIterator;
    if (aCallable$5(iteratorMethod)) return anObject$6(call$c(iteratorMethod, argument));
    throw new $TypeError$8(tryToString$2(argument) + ' is not iterable');
  };

  var bind$5 = functionBindContext;
  var call$b = functionCall;
  var toObject$3 = toObject$7;
  var callWithSafeIterationClosing = callWithSafeIterationClosing$1;
  var isArrayIteratorMethod$1 = isArrayIteratorMethod$2;
  var isConstructor$1 = isConstructor$3;
  var lengthOfArrayLike$1 = lengthOfArrayLike$5;
  var createProperty = createProperty$2;
  var getIterator$1 = getIterator$2;
  var getIteratorMethod$1 = getIteratorMethod$3;

  var $Array = Array;

  // `Array.from` method implementation
  // https://tc39.es/ecma262/#sec-array.from
  var arrayFrom = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject$3(arrayLike);
    var IS_CONSTRUCTOR = isConstructor$1(this);
    var argumentsLength = arguments.length;
    var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    if (mapping) mapfn = bind$5(mapfn, argumentsLength > 2 ? arguments[2] : undefined);
    var iteratorMethod = getIteratorMethod$1(O);
    var index = 0;
    var length, result, step, iterator, next, value;
    // if the target is not iterable or it's an array with the default iterator - use a simple case
    if (iteratorMethod && !(this === $Array && isArrayIteratorMethod$1(iteratorMethod))) {
      result = IS_CONSTRUCTOR ? new this() : [];
      iterator = getIterator$1(O, iteratorMethod);
      next = iterator.next;
      for (;!(step = call$b(next, iterator)).done; index++) {
        value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
        createProperty(result, index, value);
      }
    } else {
      length = lengthOfArrayLike$1(O);
      result = IS_CONSTRUCTOR ? new this(length) : $Array(length);
      for (;length > index; index++) {
        value = mapping ? mapfn(O[index], index) : O[index];
        createProperty(result, index, value);
      }
    }
    result.length = index;
    return result;
  };

  var wellKnownSymbol$a = wellKnownSymbol$k;

  var ITERATOR$2 = wellKnownSymbol$a('iterator');
  var SAFE_CLOSING = false;

  try {
    var called = 0;
    var iteratorWithReturn = {
      next: function () {
        return { done: !!called++ };
      },
      'return': function () {
        SAFE_CLOSING = true;
      }
    };
    // eslint-disable-next-line unicorn/no-immediate-mutation -- ES3 syntax limitation
    iteratorWithReturn[ITERATOR$2] = function () {
      return this;
    };
    // eslint-disable-next-line es/no-array-from, no-throw-literal -- required for testing
    Array.from(iteratorWithReturn, function () { throw 2; });
  } catch (error) { /* empty */ }

  var checkCorrectnessOfIteration$3 = function (exec, SKIP_CLOSING) {
    try {
      if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
    } catch (error) { return false; } // workaround of old WebKit + `eval` bug
    var ITERATION_SUPPORT = false;
    try {
      var object = {};
      // eslint-disable-next-line unicorn/no-immediate-mutation -- ES3 syntax limitation
      object[ITERATOR$2] = function () {
        return {
          next: function () {
            return { done: ITERATION_SUPPORT = true };
          }
        };
      };
      exec(object);
    } catch (error) { /* empty */ }
    return ITERATION_SUPPORT;
  };

  var $$g = _export;
  var from = arrayFrom;
  var checkCorrectnessOfIteration$2 = checkCorrectnessOfIteration$3;

  var INCORRECT_ITERATION = !checkCorrectnessOfIteration$2(function (iterable) {
    // eslint-disable-next-line es/no-array-from -- required for testing
    Array.from(iterable);
  });

  // `Array.from` method
  // https://tc39.es/ecma262/#sec-array.from
  $$g({ target: 'Array', stat: true, forced: INCORRECT_ITERATION }, {
    from: from
  });

  var $$f = _export;
  var $includes = arrayIncludes.includes;
  var fails$g = fails$s;
  var addToUnscopables = addToUnscopables$2;

  // FF99+ bug
  var BROKEN_ON_SPARSE = fails$g(function () {
    // eslint-disable-next-line es/no-array-prototype-includes -- detection
    return !Array(1).includes();
  });

  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  $$f({ target: 'Array', proto: true, forced: BROKEN_ON_SPARSE }, {
    includes: function includes(el /* , fromIndex = 0 */) {
      return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
  addToUnscopables('includes');

  var fails$f = fails$s;

  var arrayMethodIsStrict$2 = function (METHOD_NAME, argument) {
    var method = [][METHOD_NAME];
    return !!method && fails$f(function () {
      // eslint-disable-next-line no-useless-call -- required for testing
      method.call(null, argument || function () { return 1; }, 1);
    });
  };

  var $$e = _export;
  var uncurryThis$a = functionUncurryThis;
  var IndexedObject = indexedObject;
  var toIndexedObject$1 = toIndexedObject$6;
  var arrayMethodIsStrict$1 = arrayMethodIsStrict$2;

  var nativeJoin = uncurryThis$a([].join);

  var ES3_STRINGS = IndexedObject !== Object;
  var FORCED = ES3_STRINGS || !arrayMethodIsStrict$1('join', ',');

  // `Array.prototype.join` method
  // https://tc39.es/ecma262/#sec-array.prototype.join
  $$e({ target: 'Array', proto: true, forced: FORCED }, {
    join: function join(separator) {
      return nativeJoin(toIndexedObject$1(this), separator === undefined ? ',' : separator);
    }
  });

  var $$d = _export;
  var $map = arrayIteration.map;
  var arrayMethodHasSpeciesSupport = arrayMethodHasSpeciesSupport$3;

  var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');

  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  // with adding support of @@species
  $$d({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
    map: function map(callbackfn /* , thisArg */) {
      return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  var internalMetadata = {exports: {}};

  var objectGetOwnPropertyNamesExternal = {};

  var uncurryThis$9 = functionUncurryThis;

  var arraySlice$2 = uncurryThis$9([].slice);

  /* eslint-disable es/no-object-getownpropertynames -- safe */
  var classof$6 = classofRaw$2;
  var toIndexedObject = toIndexedObject$6;
  var $getOwnPropertyNames = objectGetOwnPropertyNames.f;
  var arraySlice$1 = arraySlice$2;

  var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
    ? Object.getOwnPropertyNames(window) : [];

  var getWindowNames = function (it) {
    try {
      return $getOwnPropertyNames(it);
    } catch (error) {
      return arraySlice$1(windowNames);
    }
  };

  // fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
  objectGetOwnPropertyNamesExternal.f = function getOwnPropertyNames(it) {
    return windowNames && classof$6(it) === 'Window'
      ? getWindowNames(it)
      : $getOwnPropertyNames(toIndexedObject(it));
  };

  // FF26- bug: ArrayBuffers are non-extensible, but Object.isExtensible does not report it
  var fails$e = fails$s;

  var arrayBufferNonExtensible = fails$e(function () {
    if (typeof ArrayBuffer == 'function') {
      var buffer = new ArrayBuffer(8);
      // eslint-disable-next-line es/no-object-isextensible, es/no-object-defineproperty -- safe
      if (Object.isExtensible(buffer)) Object.defineProperty(buffer, 'a', { value: 8 });
    }
  });

  var fails$d = fails$s;
  var isObject$a = isObject$i;
  var classof$5 = classofRaw$2;
  var ARRAY_BUFFER_NON_EXTENSIBLE = arrayBufferNonExtensible;

  // eslint-disable-next-line es/no-object-isextensible -- safe
  var $isExtensible = Object.isExtensible;
  var FAILS_ON_PRIMITIVES$1 = fails$d(function () { $isExtensible(1); });

  // `Object.isExtensible` method
  // https://tc39.es/ecma262/#sec-object.isextensible
  var objectIsExtensible = (FAILS_ON_PRIMITIVES$1 || ARRAY_BUFFER_NON_EXTENSIBLE) ? function isExtensible(it) {
    if (!isObject$a(it)) return false;
    if (ARRAY_BUFFER_NON_EXTENSIBLE && classof$5(it) === 'ArrayBuffer') return false;
    return $isExtensible ? $isExtensible(it) : true;
  } : $isExtensible;

  var fails$c = fails$s;

  var freezing = !fails$c(function () {
    // eslint-disable-next-line es/no-object-isextensible, es/no-object-preventextensions -- required for testing
    return Object.isExtensible(Object.preventExtensions({}));
  });

  var $$c = _export;
  var uncurryThis$8 = functionUncurryThis;
  var hiddenKeys = hiddenKeys$5;
  var isObject$9 = isObject$i;
  var hasOwn$4 = hasOwnProperty_1;
  var defineProperty$2 = objectDefineProperty.f;
  var getOwnPropertyNamesModule = objectGetOwnPropertyNames;
  var getOwnPropertyNamesExternalModule = objectGetOwnPropertyNamesExternal;
  var isExtensible = objectIsExtensible;
  var uid = uid$3;
  var FREEZING = freezing;

  var REQUIRED = false;
  var METADATA = uid('meta');
  var id = 0;

  var setMetadata = function (it) {
    defineProperty$2(it, METADATA, { value: {
      objectID: 'O' + id++, // object ID
      weakData: {}          // weak collections IDs
    } });
  };

  var fastKey$1 = function (it, create) {
    // return a primitive with prefix
    if (!isObject$9(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
    if (!hasOwn$4(it, METADATA)) {
      // can't set metadata to uncaught frozen object
      if (!isExtensible(it)) return 'F';
      // not necessary to add metadata
      if (!create) return 'E';
      // add missing metadata
      setMetadata(it);
    // return object ID
    } return it[METADATA].objectID;
  };

  var getWeakData = function (it, create) {
    if (!hasOwn$4(it, METADATA)) {
      // can't set metadata to uncaught frozen object
      if (!isExtensible(it)) return true;
      // not necessary to add metadata
      if (!create) return false;
      // add missing metadata
      setMetadata(it);
    // return the store of weak collections IDs
    } return it[METADATA].weakData;
  };

  // add metadata on freeze-family methods calling
  var onFreeze = function (it) {
    if (FREEZING && REQUIRED && isExtensible(it) && !hasOwn$4(it, METADATA)) setMetadata(it);
    return it;
  };

  var enable = function () {
    meta.enable = function () { /* empty */ };
    REQUIRED = true;
    var getOwnPropertyNames = getOwnPropertyNamesModule.f;
    var splice = uncurryThis$8([].splice);
    var test = {};
    // eslint-disable-next-line unicorn/no-immediate-mutation -- ES3 syntax limitation
    test[METADATA] = 1;

    // prevent exposing of metadata key
    if (getOwnPropertyNames(test).length) {
      getOwnPropertyNamesModule.f = function (it) {
        var result = getOwnPropertyNames(it);
        for (var i = 0, length = result.length; i < length; i++) {
          if (result[i] === METADATA) {
            splice(result, i, 1);
            break;
          }
        } return result;
      };

      $$c({ target: 'Object', stat: true, forced: true }, {
        getOwnPropertyNames: getOwnPropertyNamesExternalModule.f
      });
    }
  };

  var meta = internalMetadata.exports = {
    enable: enable,
    fastKey: fastKey$1,
    getWeakData: getWeakData,
    onFreeze: onFreeze
  };

  hiddenKeys[METADATA] = true;

  var internalMetadataExports = internalMetadata.exports;

  var bind$4 = functionBindContext;
  var call$a = functionCall;
  var anObject$5 = anObject$d;
  var tryToString$1 = tryToString$4;
  var isArrayIteratorMethod = isArrayIteratorMethod$2;
  var lengthOfArrayLike = lengthOfArrayLike$5;
  var isPrototypeOf$2 = objectIsPrototypeOf;
  var getIterator = getIterator$2;
  var getIteratorMethod = getIteratorMethod$3;
  var iteratorClose = iteratorClose$2;

  var $TypeError$7 = TypeError;

  var Result = function (stopped, result) {
    this.stopped = stopped;
    this.result = result;
  };

  var ResultPrototype = Result.prototype;

  var iterate$4 = function (iterable, unboundFunction, options) {
    var that = options && options.that;
    var AS_ENTRIES = !!(options && options.AS_ENTRIES);
    var IS_RECORD = !!(options && options.IS_RECORD);
    var IS_ITERATOR = !!(options && options.IS_ITERATOR);
    var INTERRUPTED = !!(options && options.INTERRUPTED);
    var fn = bind$4(unboundFunction, that);
    var iterator, iterFn, index, length, result, next, step;

    var stop = function (condition) {
      if (iterator) iteratorClose(iterator, 'normal');
      return new Result(true, condition);
    };

    var callFn = function (value) {
      if (AS_ENTRIES) {
        anObject$5(value);
        return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
      } return INTERRUPTED ? fn(value, stop) : fn(value);
    };

    if (IS_RECORD) {
      iterator = iterable.iterator;
    } else if (IS_ITERATOR) {
      iterator = iterable;
    } else {
      iterFn = getIteratorMethod(iterable);
      if (!iterFn) throw new $TypeError$7(tryToString$1(iterable) + ' is not iterable');
      // optimisation for array iterators
      if (isArrayIteratorMethod(iterFn)) {
        for (index = 0, length = lengthOfArrayLike(iterable); length > index; index++) {
          result = callFn(iterable[index]);
          if (result && isPrototypeOf$2(ResultPrototype, result)) return result;
        } return new Result(false);
      }
      iterator = getIterator(iterable, iterFn);
    }

    next = IS_RECORD ? iterable.next : iterator.next;
    while (!(step = call$a(next, iterator)).done) {
      try {
        result = callFn(step.value);
      } catch (error) {
        iteratorClose(iterator, 'throw', error);
      }
      if (typeof result == 'object' && result && isPrototypeOf$2(ResultPrototype, result)) return result;
    } return new Result(false);
  };

  var isPrototypeOf$1 = objectIsPrototypeOf;

  var $TypeError$6 = TypeError;

  var anInstance$3 = function (it, Prototype) {
    if (isPrototypeOf$1(Prototype, it)) return it;
    throw new $TypeError$6('Incorrect invocation');
  };

  var defineProperty$1 = objectDefineProperty.f;
  var hasOwn$3 = hasOwnProperty_1;
  var wellKnownSymbol$9 = wellKnownSymbol$k;

  var TO_STRING_TAG = wellKnownSymbol$9('toStringTag');

  var setToStringTag$4 = function (target, TAG, STATIC) {
    if (target && !STATIC) target = target.prototype;
    if (target && !hasOwn$3(target, TO_STRING_TAG)) {
      defineProperty$1(target, TO_STRING_TAG, { configurable: true, value: TAG });
    }
  };

  var uncurryThis$7 = functionUncurryThis;
  var aCallable$4 = aCallable$8;

  var functionUncurryThisAccessor = function (object, key, method) {
    try {
      // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
      return uncurryThis$7(aCallable$4(Object.getOwnPropertyDescriptor(object, key)[method]));
    } catch (error) { /* empty */ }
  };

  var isObject$8 = isObject$i;

  var isPossiblePrototype$1 = function (argument) {
    return isObject$8(argument) || argument === null;
  };

  var isPossiblePrototype = isPossiblePrototype$1;

  var $String$1 = String;
  var $TypeError$5 = TypeError;

  var aPossiblePrototype$1 = function (argument) {
    if (isPossiblePrototype(argument)) return argument;
    throw new $TypeError$5("Can't set " + $String$1(argument) + ' as a prototype');
  };

  /* eslint-disable no-proto -- safe */
  var uncurryThisAccessor = functionUncurryThisAccessor;
  var isObject$7 = isObject$i;
  var requireObjectCoercible$4 = requireObjectCoercible$7;
  var aPossiblePrototype = aPossiblePrototype$1;

  // `Object.setPrototypeOf` method
  // https://tc39.es/ecma262/#sec-object.setprototypeof
  // Works with __proto__ only. Old v8 can't work with null proto objects.
  // eslint-disable-next-line es/no-object-setprototypeof -- safe
  var objectSetPrototypeOf = Object.setPrototypeOf || ('__proto__' in {} ? function () {
    var CORRECT_SETTER = false;
    var test = {};
    var setter;
    try {
      setter = uncurryThisAccessor(Object.prototype, '__proto__', 'set');
      setter(test, []);
      CORRECT_SETTER = test instanceof Array;
    } catch (error) { /* empty */ }
    return function setPrototypeOf(O, proto) {
      requireObjectCoercible$4(O);
      aPossiblePrototype(proto);
      if (!isObject$7(O)) return O;
      if (CORRECT_SETTER) setter(O, proto);
      else O.__proto__ = proto;
      return O;
    };
  }() : undefined);

  var isCallable$a = isCallable$n;
  var isObject$6 = isObject$i;
  var setPrototypeOf$2 = objectSetPrototypeOf;

  // makes subclassing work correct for wrapped built-ins
  var inheritIfRequired$1 = function ($this, dummy, Wrapper) {
    var NewTarget, NewTargetPrototype;
    if (
      // it can work only with native `setPrototypeOf`
      setPrototypeOf$2 &&
      // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
      isCallable$a(NewTarget = dummy.constructor) &&
      NewTarget !== Wrapper &&
      isObject$6(NewTargetPrototype = NewTarget.prototype) &&
      NewTargetPrototype !== Wrapper.prototype
    ) setPrototypeOf$2($this, NewTargetPrototype);
    return $this;
  };

  var $$b = _export;
  var globalThis$e = globalThis_1;
  var uncurryThis$6 = functionUncurryThis;
  var isForced$1 = isForced_1;
  var defineBuiltIn$7 = defineBuiltIn$9;
  var InternalMetadataModule = internalMetadataExports;
  var iterate$3 = iterate$4;
  var anInstance$2 = anInstance$3;
  var isCallable$9 = isCallable$n;
  var isNullOrUndefined$2 = isNullOrUndefined$6;
  var isObject$5 = isObject$i;
  var fails$b = fails$s;
  var checkCorrectnessOfIteration$1 = checkCorrectnessOfIteration$3;
  var setToStringTag$3 = setToStringTag$4;
  var inheritIfRequired = inheritIfRequired$1;

  var collection$1 = function (CONSTRUCTOR_NAME, wrapper, common) {
    var IS_MAP = CONSTRUCTOR_NAME.indexOf('Map') !== -1;
    var IS_WEAK = CONSTRUCTOR_NAME.indexOf('Weak') !== -1;
    var ADDER = IS_MAP ? 'set' : 'add';
    var NativeConstructor = globalThis$e[CONSTRUCTOR_NAME];
    var NativePrototype = NativeConstructor && NativeConstructor.prototype;
    var Constructor = NativeConstructor;
    var exported = {};

    var fixMethod = function (KEY) {
      var uncurriedNativeMethod = uncurryThis$6(NativePrototype[KEY]);
      defineBuiltIn$7(NativePrototype, KEY,
        KEY === 'add' ? function add(value) {
          uncurriedNativeMethod(this, value === 0 ? 0 : value);
          return this;
        } : KEY === 'delete' ? function (key) {
          return IS_WEAK && !isObject$5(key) ? false : uncurriedNativeMethod(this, key === 0 ? 0 : key);
        } : KEY === 'get' ? function get(key) {
          return IS_WEAK && !isObject$5(key) ? undefined : uncurriedNativeMethod(this, key === 0 ? 0 : key);
        } : KEY === 'has' ? function has(key) {
          return IS_WEAK && !isObject$5(key) ? false : uncurriedNativeMethod(this, key === 0 ? 0 : key);
        } : function set(key, value) {
          uncurriedNativeMethod(this, key === 0 ? 0 : key, value);
          return this;
        }
      );
    };

    var REPLACE = isForced$1(
      CONSTRUCTOR_NAME,
      !isCallable$9(NativeConstructor) || !(IS_WEAK || NativePrototype.forEach && !fails$b(function () {
        new NativeConstructor().entries().next();
      }))
    );

    if (REPLACE) {
      // create collection constructor
      Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);
      InternalMetadataModule.enable();
    } else if (isForced$1(CONSTRUCTOR_NAME, true)) {
      var instance = new Constructor();
      // early implementations not supports chaining
      var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) !== instance;
      // V8 ~ Chromium 40- weak-collections throws on primitives, but should return false
      var THROWS_ON_PRIMITIVES = fails$b(function () { instance.has(1); });
      // most early implementations doesn't supports iterables, most modern - not close it correctly
      // eslint-disable-next-line no-new -- required for testing
      var ACCEPT_ITERABLES = checkCorrectnessOfIteration$1(function (iterable) { new NativeConstructor(iterable); });
      // for early implementations -0 and +0 not the same
      var BUGGY_ZERO = !IS_WEAK && fails$b(function () {
        // V8 ~ Chromium 42- fails only with 5+ elements
        var $instance = new NativeConstructor();
        var index = 5;
        while (index--) $instance[ADDER](index, index);
        return !$instance.has(-0);
      });

      if (!ACCEPT_ITERABLES) {
        Constructor = wrapper(function (dummy, iterable) {
          anInstance$2(dummy, NativePrototype);
          var that = inheritIfRequired(new NativeConstructor(), dummy, Constructor);
          if (!isNullOrUndefined$2(iterable)) iterate$3(iterable, that[ADDER], { that: that, AS_ENTRIES: IS_MAP });
          return that;
        });
        Constructor.prototype = NativePrototype;
        NativePrototype.constructor = Constructor;
      }

      if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
        fixMethod('delete');
        fixMethod('has');
        IS_MAP && fixMethod('get');
      }

      if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);

      // weak collections should not contains .clear method
      if (IS_WEAK && NativePrototype.clear) delete NativePrototype.clear;
    }

    exported[CONSTRUCTOR_NAME] = Constructor;
    $$b({ global: true, constructor: true, forced: Constructor !== NativeConstructor }, exported);

    setToStringTag$3(Constructor, CONSTRUCTOR_NAME);

    if (!IS_WEAK) common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);

    return Constructor;
  };

  var makeBuiltIn = makeBuiltInExports;
  var defineProperty = objectDefineProperty;

  var defineBuiltInAccessor$2 = function (target, name, descriptor) {
    if (descriptor.get) makeBuiltIn(descriptor.get, name, { getter: true });
    if (descriptor.set) makeBuiltIn(descriptor.set, name, { setter: true });
    return defineProperty.f(target, name, descriptor);
  };

  var defineBuiltIn$6 = defineBuiltIn$9;

  var defineBuiltIns$1 = function (target, src, options) {
    for (var key in src) defineBuiltIn$6(target, key, src[key], options);
    return target;
  };

  var fails$a = fails$s;

  var correctPrototypeGetter = !fails$a(function () {
    function F() { /* empty */ }
    F.prototype.constructor = null;
    // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
    return Object.getPrototypeOf(new F()) !== F.prototype;
  });

  var hasOwn$2 = hasOwnProperty_1;
  var isCallable$8 = isCallable$n;
  var toObject$2 = toObject$7;
  var sharedKey = sharedKey$3;
  var CORRECT_PROTOTYPE_GETTER = correctPrototypeGetter;

  var IE_PROTO = sharedKey('IE_PROTO');
  var $Object = Object;
  var ObjectPrototype = $Object.prototype;

  // `Object.getPrototypeOf` method
  // https://tc39.es/ecma262/#sec-object.getprototypeof
  // eslint-disable-next-line es/no-object-getprototypeof -- safe
  var objectGetPrototypeOf = CORRECT_PROTOTYPE_GETTER ? $Object.getPrototypeOf : function (O) {
    var object = toObject$2(O);
    if (hasOwn$2(object, IE_PROTO)) return object[IE_PROTO];
    var constructor = object.constructor;
    if (isCallable$8(constructor) && object instanceof constructor) {
      return constructor.prototype;
    } return object instanceof $Object ? ObjectPrototype : null;
  };

  var fails$9 = fails$s;
  var isCallable$7 = isCallable$n;
  var isObject$4 = isObject$i;
  var getPrototypeOf$1 = objectGetPrototypeOf;
  var defineBuiltIn$5 = defineBuiltIn$9;
  var wellKnownSymbol$8 = wellKnownSymbol$k;

  var ITERATOR$1 = wellKnownSymbol$8('iterator');
  var BUGGY_SAFARI_ITERATORS$1 = false;

  // `%IteratorPrototype%` object
  // https://tc39.es/ecma262/#sec-%iteratorprototype%-object
  var IteratorPrototype$2, PrototypeOfArrayIteratorPrototype, arrayIterator;

  /* eslint-disable es/no-array-prototype-keys -- safe */
  if ([].keys) {
    arrayIterator = [].keys();
    // Safari 8 has buggy iterators w/o `next`
    if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS$1 = true;
    else {
      PrototypeOfArrayIteratorPrototype = getPrototypeOf$1(getPrototypeOf$1(arrayIterator));
      if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype$2 = PrototypeOfArrayIteratorPrototype;
    }
  }

  var NEW_ITERATOR_PROTOTYPE = !isObject$4(IteratorPrototype$2) || fails$9(function () {
    var test = {};
    // FF44- legacy iterators case
    return IteratorPrototype$2[ITERATOR$1].call(test) !== test;
  });

  if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype$2 = {};

  // `%IteratorPrototype%[@@iterator]()` method
  // https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
  if (!isCallable$7(IteratorPrototype$2[ITERATOR$1])) {
    defineBuiltIn$5(IteratorPrototype$2, ITERATOR$1, function () {
      return this;
    });
  }

  var iteratorsCore = {
    IteratorPrototype: IteratorPrototype$2,
    BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS$1
  };

  var IteratorPrototype$1 = iteratorsCore.IteratorPrototype;
  var create$2 = objectCreate;
  var createPropertyDescriptor = createPropertyDescriptor$4;
  var setToStringTag$2 = setToStringTag$4;
  var Iterators$1 = iterators;

  var returnThis$1 = function () { return this; };

  var iteratorCreateConstructor = function (IteratorConstructor, NAME, next, ENUMERABLE_NEXT) {
    var TO_STRING_TAG = NAME + ' Iterator';
    IteratorConstructor.prototype = create$2(IteratorPrototype$1, { next: createPropertyDescriptor(+!ENUMERABLE_NEXT, next) });
    setToStringTag$2(IteratorConstructor, TO_STRING_TAG, false);
    Iterators$1[TO_STRING_TAG] = returnThis$1;
    return IteratorConstructor;
  };

  var $$a = _export;
  var call$9 = functionCall;
  var FunctionName = functionName;
  var isCallable$6 = isCallable$n;
  var createIteratorConstructor = iteratorCreateConstructor;
  var getPrototypeOf = objectGetPrototypeOf;
  var setPrototypeOf$1 = objectSetPrototypeOf;
  var setToStringTag$1 = setToStringTag$4;
  var createNonEnumerableProperty$2 = createNonEnumerableProperty$5;
  var defineBuiltIn$4 = defineBuiltIn$9;
  var wellKnownSymbol$7 = wellKnownSymbol$k;
  var Iterators = iterators;
  var IteratorsCore = iteratorsCore;

  var PROPER_FUNCTION_NAME$1 = FunctionName.PROPER;
  var CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;
  var IteratorPrototype = IteratorsCore.IteratorPrototype;
  var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
  var ITERATOR = wellKnownSymbol$7('iterator');
  var KEYS = 'keys';
  var VALUES = 'values';
  var ENTRIES = 'entries';

  var returnThis = function () { return this; };

  var iteratorDefine = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
    createIteratorConstructor(IteratorConstructor, NAME, next);

    var getIterationMethod = function (KIND) {
      if (KIND === DEFAULT && defaultIterator) return defaultIterator;
      if (!BUGGY_SAFARI_ITERATORS && KIND && KIND in IterablePrototype) return IterablePrototype[KIND];

      switch (KIND) {
        case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
        case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
        case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
      }

      return function () { return new IteratorConstructor(this); };
    };

    var TO_STRING_TAG = NAME + ' Iterator';
    var INCORRECT_VALUES_NAME = false;
    var IterablePrototype = Iterable.prototype;
    var nativeIterator = IterablePrototype[ITERATOR]
      || IterablePrototype['@@iterator']
      || DEFAULT && IterablePrototype[DEFAULT];
    var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
    var anyNativeIterator = NAME === 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
    var CurrentIteratorPrototype, methods, KEY;

    // fix native
    if (anyNativeIterator) {
      CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
      if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
        if (getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
          if (setPrototypeOf$1) {
            setPrototypeOf$1(CurrentIteratorPrototype, IteratorPrototype);
          } else if (!isCallable$6(CurrentIteratorPrototype[ITERATOR])) {
            defineBuiltIn$4(CurrentIteratorPrototype, ITERATOR, returnThis);
          }
        }
        // Set @@toStringTag to native iterators
        setToStringTag$1(CurrentIteratorPrototype, TO_STRING_TAG, true);
      }
    }

    // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
    if (PROPER_FUNCTION_NAME$1 && DEFAULT === VALUES && nativeIterator && nativeIterator.name !== VALUES) {
      if (CONFIGURABLE_FUNCTION_NAME) {
        createNonEnumerableProperty$2(IterablePrototype, 'name', VALUES);
      } else {
        INCORRECT_VALUES_NAME = true;
        defaultIterator = function values() { return call$9(nativeIterator, this); };
      }
    }

    // export additional methods
    if (DEFAULT) {
      methods = {
        values: getIterationMethod(VALUES),
        keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
        entries: getIterationMethod(ENTRIES)
      };
      if (FORCED) for (KEY in methods) {
        if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
          defineBuiltIn$4(IterablePrototype, KEY, methods[KEY]);
        }
      } else $$a({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
    }

    // define iterator
    if (IterablePrototype[ITERATOR] !== defaultIterator) {
      defineBuiltIn$4(IterablePrototype, ITERATOR, defaultIterator, { name: DEFAULT });
    }
    Iterators[NAME] = defaultIterator;

    return methods;
  };

  // `CreateIterResultObject` abstract operation
  // https://tc39.es/ecma262/#sec-createiterresultobject
  var createIterResultObject$2 = function (value, done) {
    return { value: value, done: done };
  };

  var getBuiltIn$2 = getBuiltIn$7;
  var defineBuiltInAccessor$1 = defineBuiltInAccessor$2;
  var wellKnownSymbol$6 = wellKnownSymbol$k;
  var DESCRIPTORS$2 = descriptors;

  var SPECIES$3 = wellKnownSymbol$6('species');

  var setSpecies$2 = function (CONSTRUCTOR_NAME) {
    var Constructor = getBuiltIn$2(CONSTRUCTOR_NAME);

    if (DESCRIPTORS$2 && Constructor && !Constructor[SPECIES$3]) {
      defineBuiltInAccessor$1(Constructor, SPECIES$3, {
        configurable: true,
        get: function () { return this; }
      });
    }
  };

  var create$1 = objectCreate;
  var defineBuiltInAccessor = defineBuiltInAccessor$2;
  var defineBuiltIns = defineBuiltIns$1;
  var bind$3 = functionBindContext;
  var anInstance$1 = anInstance$3;
  var isNullOrUndefined$1 = isNullOrUndefined$6;
  var iterate$2 = iterate$4;
  var defineIterator$1 = iteratorDefine;
  var createIterResultObject$1 = createIterResultObject$2;
  var setSpecies$1 = setSpecies$2;
  var DESCRIPTORS$1 = descriptors;
  var fastKey = internalMetadataExports.fastKey;
  var InternalStateModule$2 = internalState;

  var setInternalState$2 = InternalStateModule$2.set;
  var internalStateGetterFor = InternalStateModule$2.getterFor;

  var collectionStrong$1 = {
    getConstructor: function (wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
      var Constructor = wrapper(function (that, iterable) {
        anInstance$1(that, Prototype);
        setInternalState$2(that, {
          type: CONSTRUCTOR_NAME,
          index: create$1(null),
          first: null,
          last: null,
          size: 0
        });
        if (!DESCRIPTORS$1) that.size = 0;
        if (!isNullOrUndefined$1(iterable)) iterate$2(iterable, that[ADDER], { that: that, AS_ENTRIES: IS_MAP });
      });

      var Prototype = Constructor.prototype;

      var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);

      var define = function (that, key, value) {
        var state = getInternalState(that);
        var entry = getEntry(that, key);
        var previous, index;
        // change existing entry
        if (entry) {
          entry.value = value;
        // create new entry
        } else {
          state.last = entry = {
            index: index = fastKey(key, true),
            key: key,
            value: value,
            previous: previous = state.last,
            next: null,
            removed: false
          };
          if (!state.first) state.first = entry;
          if (previous) previous.next = entry;
          if (DESCRIPTORS$1) state.size++;
          else that.size++;
          // add to index
          if (index !== 'F') state.index[index] = entry;
        } return that;
      };

      var getEntry = function (that, key) {
        var state = getInternalState(that);
        // fast case
        var index = fastKey(key);
        var entry;
        if (index !== 'F') return state.index[index];
        // frozen object case
        for (entry = state.first; entry; entry = entry.next) {
          if (entry.key === key) return entry;
        }
      };

      defineBuiltIns(Prototype, {
        // `{ Map, Set }.prototype.clear()` methods
        // https://tc39.es/ecma262/#sec-map.prototype.clear
        // https://tc39.es/ecma262/#sec-set.prototype.clear
        clear: function clear() {
          var that = this;
          var state = getInternalState(that);
          var entry = state.first;
          while (entry) {
            entry.removed = true;
            if (entry.previous) entry.previous = entry.previous.next = null;
            entry = entry.next;
          }
          state.first = state.last = null;
          state.index = create$1(null);
          if (DESCRIPTORS$1) state.size = 0;
          else that.size = 0;
        },
        // `{ Map, Set }.prototype.delete(key)` methods
        // https://tc39.es/ecma262/#sec-map.prototype.delete
        // https://tc39.es/ecma262/#sec-set.prototype.delete
        'delete': function (key) {
          var that = this;
          var state = getInternalState(that);
          var entry = getEntry(that, key);
          if (entry) {
            var next = entry.next;
            var prev = entry.previous;
            delete state.index[entry.index];
            entry.removed = true;
            if (prev) prev.next = next;
            if (next) next.previous = prev;
            if (state.first === entry) state.first = next;
            if (state.last === entry) state.last = prev;
            if (DESCRIPTORS$1) state.size--;
            else that.size--;
          } return !!entry;
        },
        // `{ Map, Set }.prototype.forEach(callbackfn, thisArg = undefined)` methods
        // https://tc39.es/ecma262/#sec-map.prototype.foreach
        // https://tc39.es/ecma262/#sec-set.prototype.foreach
        forEach: function forEach(callbackfn /* , that = undefined */) {
          var state = getInternalState(this);
          var boundFunction = bind$3(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
          var entry;
          while (entry = entry ? entry.next : state.first) {
            boundFunction(entry.value, entry.key, this);
            // revert to the last existing entry
            while (entry && entry.removed) entry = entry.previous;
          }
        },
        // `{ Map, Set}.prototype.has(key)` methods
        // https://tc39.es/ecma262/#sec-map.prototype.has
        // https://tc39.es/ecma262/#sec-set.prototype.has
        has: function has(key) {
          return !!getEntry(this, key);
        }
      });

      defineBuiltIns(Prototype, IS_MAP ? {
        // `Map.prototype.get(key)` method
        // https://tc39.es/ecma262/#sec-map.prototype.get
        get: function get(key) {
          var entry = getEntry(this, key);
          return entry && entry.value;
        },
        // `Map.prototype.set(key, value)` method
        // https://tc39.es/ecma262/#sec-map.prototype.set
        set: function set(key, value) {
          return define(this, key === 0 ? 0 : key, value);
        }
      } : {
        // `Set.prototype.add(value)` method
        // https://tc39.es/ecma262/#sec-set.prototype.add
        add: function add(value) {
          return define(this, value = value === 0 ? 0 : value, value);
        }
      });
      if (DESCRIPTORS$1) defineBuiltInAccessor(Prototype, 'size', {
        configurable: true,
        get: function () {
          return getInternalState(this).size;
        }
      });
      return Constructor;
    },
    setStrong: function (Constructor, CONSTRUCTOR_NAME, IS_MAP) {
      var ITERATOR_NAME = CONSTRUCTOR_NAME + ' Iterator';
      var getInternalCollectionState = internalStateGetterFor(CONSTRUCTOR_NAME);
      var getInternalIteratorState = internalStateGetterFor(ITERATOR_NAME);
      // `{ Map, Set }.prototype.{ keys, values, entries, @@iterator }()` methods
      // https://tc39.es/ecma262/#sec-map.prototype.entries
      // https://tc39.es/ecma262/#sec-map.prototype.keys
      // https://tc39.es/ecma262/#sec-map.prototype.values
      // https://tc39.es/ecma262/#sec-map.prototype-@@iterator
      // https://tc39.es/ecma262/#sec-set.prototype.entries
      // https://tc39.es/ecma262/#sec-set.prototype.keys
      // https://tc39.es/ecma262/#sec-set.prototype.values
      // https://tc39.es/ecma262/#sec-set.prototype-@@iterator
      defineIterator$1(Constructor, CONSTRUCTOR_NAME, function (iterated, kind) {
        setInternalState$2(this, {
          type: ITERATOR_NAME,
          target: iterated,
          state: getInternalCollectionState(iterated),
          kind: kind,
          last: null
        });
      }, function () {
        var state = getInternalIteratorState(this);
        var kind = state.kind;
        var entry = state.last;
        // revert to the last existing entry
        while (entry && entry.removed) entry = entry.previous;
        // get next entry
        if (!state.target || !(state.last = entry = entry ? entry.next : state.state.first)) {
          // or finish the iteration
          state.target = null;
          return createIterResultObject$1(undefined, true);
        }
        // return step by kind
        if (kind === 'keys') return createIterResultObject$1(entry.key, false);
        if (kind === 'values') return createIterResultObject$1(entry.value, false);
        return createIterResultObject$1([entry.key, entry.value], false);
      }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

      // `{ Map, Set }.prototype[@@species]` accessors
      // https://tc39.es/ecma262/#sec-get-map-@@species
      // https://tc39.es/ecma262/#sec-get-set-@@species
      setSpecies$1(CONSTRUCTOR_NAME);
    }
  };

  var collection = collection$1;
  var collectionStrong = collectionStrong$1;

  // `Map` constructor
  // https://tc39.es/ecma262/#sec-map-objects
  collection('Map', function (init) {
    return function Map() { return init(this, arguments.length ? arguments[0] : undefined); };
  }, collectionStrong);

  var $$9 = _export;
  var toObject$1 = toObject$7;
  var nativeKeys = objectKeys$1;
  var fails$8 = fails$s;

  var FAILS_ON_PRIMITIVES = fails$8(function () { nativeKeys(1); });

  // `Object.keys` method
  // https://tc39.es/ecma262/#sec-object.keys
  $$9({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
    keys: function keys(it) {
      return nativeKeys(toObject$1(it));
    }
  });

  var TO_STRING_TAG_SUPPORT$1 = toStringTagSupport;
  var classof$4 = classof$9;

  // `Object.prototype.toString` method implementation
  // https://tc39.es/ecma262/#sec-object.prototype.tostring
  var objectToString = TO_STRING_TAG_SUPPORT$1 ? {}.toString : function toString() {
    return '[object ' + classof$4(this) + ']';
  };

  var TO_STRING_TAG_SUPPORT = toStringTagSupport;
  var defineBuiltIn$3 = defineBuiltIn$9;
  var toString$7 = objectToString;

  // `Object.prototype.toString` method
  // https://tc39.es/ecma262/#sec-object.prototype.tostring
  if (!TO_STRING_TAG_SUPPORT) {
    defineBuiltIn$3(Object.prototype, 'toString', toString$7, { unsafe: true });
  }

  /* global Bun, Deno -- detection */
  var globalThis$d = globalThis_1;
  var userAgent$3 = environmentUserAgent;
  var classof$3 = classofRaw$2;

  var userAgentStartsWith = function (string) {
    return userAgent$3.slice(0, string.length) === string;
  };

  var environment = (function () {
    if (userAgentStartsWith('Bun/')) return 'BUN';
    if (userAgentStartsWith('Cloudflare-Workers')) return 'CLOUDFLARE';
    if (userAgentStartsWith('Deno/')) return 'DENO';
    if (userAgentStartsWith('Node.js/')) return 'NODE';
    if (globalThis$d.Bun && typeof Bun.version == 'string') return 'BUN';
    if (globalThis$d.Deno && typeof Deno.version == 'object') return 'DENO';
    if (classof$3(globalThis$d.process) === 'process') return 'NODE';
    if (globalThis$d.window && globalThis$d.document) return 'BROWSER';
    return 'REST';
  })();

  var ENVIRONMENT$1 = environment;

  var environmentIsNode = ENVIRONMENT$1 === 'NODE';

  var globalThis$c = globalThis_1;

  var path$1 = globalThis$c;

  var isConstructor = isConstructor$3;
  var tryToString = tryToString$4;

  var $TypeError$4 = TypeError;

  // `Assert: IsConstructor(argument) is true`
  var aConstructor$1 = function (argument) {
    if (isConstructor(argument)) return argument;
    throw new $TypeError$4(tryToString(argument) + ' is not a constructor');
  };

  var anObject$4 = anObject$d;
  var aConstructor = aConstructor$1;
  var isNullOrUndefined = isNullOrUndefined$6;
  var wellKnownSymbol$5 = wellKnownSymbol$k;

  var SPECIES$2 = wellKnownSymbol$5('species');

  // `SpeciesConstructor` abstract operation
  // https://tc39.es/ecma262/#sec-speciesconstructor
  var speciesConstructor$1 = function (O, defaultConstructor) {
    var C = anObject$4(O).constructor;
    var S;
    return C === undefined || isNullOrUndefined(S = anObject$4(C)[SPECIES$2]) ? defaultConstructor : aConstructor(S);
  };

  var NATIVE_BIND = functionBindNative;

  var FunctionPrototype = Function.prototype;
  var apply$2 = FunctionPrototype.apply;
  var call$8 = FunctionPrototype.call;

  // eslint-disable-next-line es/no-function-prototype-bind, es/no-reflect -- safe
  var functionApply = typeof Reflect == 'object' && Reflect.apply || (NATIVE_BIND ? call$8.bind(apply$2) : function () {
    return call$8.apply(apply$2, arguments);
  });

  var $TypeError$3 = TypeError;

  var validateArgumentsLength$1 = function (passed, required) {
    if (passed < required) throw new $TypeError$3('Not enough arguments');
    return passed;
  };

  var userAgent$2 = environmentUserAgent;

  // eslint-disable-next-line redos/no-vulnerable -- safe
  var environmentIsIos = /(?:ipad|iphone|ipod).*applewebkit/i.test(userAgent$2);

  var globalThis$b = globalThis_1;
  var apply$1 = functionApply;
  var bind$2 = functionBindContext;
  var isCallable$5 = isCallable$n;
  var hasOwn$1 = hasOwnProperty_1;
  var fails$7 = fails$s;
  var html = html$2;
  var arraySlice = arraySlice$2;
  var createElement = documentCreateElement$2;
  var validateArgumentsLength = validateArgumentsLength$1;
  var IS_IOS$1 = environmentIsIos;
  var IS_NODE$2 = environmentIsNode;

  var set = globalThis$b.setImmediate;
  var clear = globalThis$b.clearImmediate;
  var process$2 = globalThis$b.process;
  var Dispatch = globalThis$b.Dispatch;
  var Function$1 = globalThis$b.Function;
  var MessageChannel = globalThis$b.MessageChannel;
  var String$1 = globalThis$b.String;
  var counter = 0;
  var queue$2 = {};
  var ONREADYSTATECHANGE = 'onreadystatechange';
  var $location, defer, channel, port;

  fails$7(function () {
    // Deno throws a ReferenceError on `location` access without `--location` flag
    $location = globalThis$b.location;
  });

  var run = function (id) {
    if (hasOwn$1(queue$2, id)) {
      var fn = queue$2[id];
      delete queue$2[id];
      fn();
    }
  };

  var runner = function (id) {
    return function () {
      run(id);
    };
  };

  var eventListener = function (event) {
    run(event.data);
  };

  var globalPostMessageDefer = function (id) {
    // old engines have not location.origin
    globalThis$b.postMessage(String$1(id), $location.protocol + '//' + $location.host);
  };

  // Node.js 0.9+ & IE10+ has setImmediate, otherwise:
  if (!set || !clear) {
    set = function setImmediate(handler) {
      validateArgumentsLength(arguments.length, 1);
      var fn = isCallable$5(handler) ? handler : Function$1(handler);
      var args = arraySlice(arguments, 1);
      queue$2[++counter] = function () {
        apply$1(fn, undefined, args);
      };
      defer(counter);
      return counter;
    };
    clear = function clearImmediate(id) {
      delete queue$2[id];
    };
    // Node.js 0.8-
    if (IS_NODE$2) {
      defer = function (id) {
        process$2.nextTick(runner(id));
      };
    // Sphere (JS game engine) Dispatch API
    } else if (Dispatch && Dispatch.now) {
      defer = function (id) {
        Dispatch.now(runner(id));
      };
    // Browsers with MessageChannel, includes WebWorkers
    // except iOS - https://github.com/zloirock/core-js/issues/624
    } else if (MessageChannel && !IS_IOS$1) {
      channel = new MessageChannel();
      port = channel.port2;
      channel.port1.onmessage = eventListener;
      defer = bind$2(port.postMessage, port);
    // Browsers with postMessage, skip WebWorkers
    // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
    } else if (
      globalThis$b.addEventListener &&
      isCallable$5(globalThis$b.postMessage) &&
      !globalThis$b.importScripts &&
      $location && $location.protocol !== 'file:' &&
      !fails$7(globalPostMessageDefer)
    ) {
      defer = globalPostMessageDefer;
      globalThis$b.addEventListener('message', eventListener, false);
    // IE8-
    } else if (ONREADYSTATECHANGE in createElement('script')) {
      defer = function (id) {
        html.appendChild(createElement('script'))[ONREADYSTATECHANGE] = function () {
          html.removeChild(this);
          run(id);
        };
      };
    // Rest old browsers
    } else {
      defer = function (id) {
        setTimeout(runner(id), 0);
      };
    }
  }

  var task$1 = {
    set: set};

  var globalThis$a = globalThis_1;
  var DESCRIPTORS = descriptors;

  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

  // Avoid NodeJS experimental warning
  var safeGetBuiltIn$1 = function (name) {
    if (!DESCRIPTORS) return globalThis$a[name];
    var descriptor = getOwnPropertyDescriptor(globalThis$a, name);
    return descriptor && descriptor.value;
  };

  var Queue$2 = function () {
    this.head = null;
    this.tail = null;
  };

  Queue$2.prototype = {
    add: function (item) {
      var entry = { item: item, next: null };
      var tail = this.tail;
      if (tail) tail.next = entry;
      else this.head = entry;
      this.tail = entry;
    },
    get: function () {
      var entry = this.head;
      if (entry) {
        var next = this.head = entry.next;
        if (next === null) this.tail = null;
        return entry.item;
      }
    }
  };

  var queue$1 = Queue$2;

  var userAgent$1 = environmentUserAgent;

  var environmentIsIosPebble = /ipad|iphone|ipod/i.test(userAgent$1) && typeof Pebble != 'undefined';

  var userAgent = environmentUserAgent;

  var environmentIsWebosWebkit = /web0s(?!.*chrome)/i.test(userAgent);

  var globalThis$9 = globalThis_1;
  var safeGetBuiltIn = safeGetBuiltIn$1;
  var bind$1 = functionBindContext;
  var macrotask = task$1.set;
  var Queue$1 = queue$1;
  var IS_IOS = environmentIsIos;
  var IS_IOS_PEBBLE = environmentIsIosPebble;
  var IS_WEBOS_WEBKIT = environmentIsWebosWebkit;
  var IS_NODE$1 = environmentIsNode;

  var MutationObserver$1 = globalThis$9.MutationObserver || globalThis$9.WebKitMutationObserver;
  var document$2 = globalThis$9.document;
  var process$1 = globalThis$9.process;
  var Promise$1 = globalThis$9.Promise;
  var microtask$1 = safeGetBuiltIn('queueMicrotask');
  var notify$1, toggle, node, promise, then;

  // modern engines have queueMicrotask method
  if (!microtask$1) {
    var queue = new Queue$1();

    var flush = function () {
      var parent, fn;
      if (IS_NODE$1 && (parent = process$1.domain)) parent.exit();
      while (fn = queue.get()) try {
        fn();
      } catch (error) {
        if (queue.head) notify$1();
        throw error;
      }
      if (parent) parent.enter();
    };

    // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
    // also except WebOS Webkit https://github.com/zloirock/core-js/issues/898
    if (!IS_IOS && !IS_NODE$1 && !IS_WEBOS_WEBKIT && MutationObserver$1 && document$2) {
      toggle = true;
      node = document$2.createTextNode('');
      new MutationObserver$1(flush).observe(node, { characterData: true });
      notify$1 = function () {
        node.data = toggle = !toggle;
      };
    // environments with maybe non-completely correct, but existent Promise
    } else if (!IS_IOS_PEBBLE && Promise$1 && Promise$1.resolve) {
      // Promise.resolve without an argument throws an error in LG WebOS 2
      promise = Promise$1.resolve(undefined);
      // workaround of WebKit ~ iOS Safari 10.1 bug
      promise.constructor = Promise$1;
      then = bind$1(promise.then, promise);
      notify$1 = function () {
        then(flush);
      };
    // Node.js without promises
    } else if (IS_NODE$1) {
      notify$1 = function () {
        process$1.nextTick(flush);
      };
    // for other environments - macrotask based on:
    // - setImmediate
    // - MessageChannel
    // - window.postMessage
    // - onreadystatechange
    // - setTimeout
    } else {
      // `webpack` dev server bug on IE global methods - use bind(fn, global)
      macrotask = bind$1(macrotask, globalThis$9);
      notify$1 = function () {
        macrotask(flush);
      };
    }

    microtask$1 = function (fn) {
      if (!queue.head) notify$1();
      queue.add(fn);
    };
  }

  var microtask_1 = microtask$1;

  var hostReportErrors$1 = function (a, b) {
    try {
      // eslint-disable-next-line no-console -- safe
      arguments.length === 1 ? console.error(a) : console.error(a, b);
    } catch (error) { /* empty */ }
  };

  var perform$3 = function (exec) {
    try {
      return { error: false, value: exec() };
    } catch (error) {
      return { error: true, value: error };
    }
  };

  var globalThis$8 = globalThis_1;

  var promiseNativeConstructor = globalThis$8.Promise;

  var globalThis$7 = globalThis_1;
  var NativePromiseConstructor$3 = promiseNativeConstructor;
  var isCallable$4 = isCallable$n;
  var isForced = isForced_1;
  var inspectSource = inspectSource$3;
  var wellKnownSymbol$4 = wellKnownSymbol$k;
  var ENVIRONMENT = environment;
  var V8_VERSION = environmentV8Version;

  NativePromiseConstructor$3 && NativePromiseConstructor$3.prototype;
  var SPECIES$1 = wellKnownSymbol$4('species');
  var SUBCLASSING = false;
  var NATIVE_PROMISE_REJECTION_EVENT$1 = isCallable$4(globalThis$7.PromiseRejectionEvent);

  var FORCED_PROMISE_CONSTRUCTOR$5 = isForced('Promise', function () {
    var PROMISE_CONSTRUCTOR_SOURCE = inspectSource(NativePromiseConstructor$3);
    var GLOBAL_CORE_JS_PROMISE = PROMISE_CONSTRUCTOR_SOURCE !== String(NativePromiseConstructor$3);
    // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
    // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
    // We can't detect it synchronously, so just check versions
    if (!GLOBAL_CORE_JS_PROMISE && V8_VERSION === 66) return true;
    // We can't use @@species feature detection in V8 since it causes
    // deoptimization and performance degradation
    // https://github.com/zloirock/core-js/issues/679
    if (!V8_VERSION || V8_VERSION < 51 || !/native code/.test(PROMISE_CONSTRUCTOR_SOURCE)) {
      // Detect correctness of subclassing with @@species support
      var promise = new NativePromiseConstructor$3(function (resolve) { resolve(1); });
      var FakePromise = function (exec) {
        exec(function () { /* empty */ }, function () { /* empty */ });
      };
      var constructor = promise.constructor = {};
      constructor[SPECIES$1] = FakePromise;
      SUBCLASSING = promise.then(function () { /* empty */ }) instanceof FakePromise;
      if (!SUBCLASSING) return true;
    // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    } return !GLOBAL_CORE_JS_PROMISE && (ENVIRONMENT === 'BROWSER' || ENVIRONMENT === 'DENO') && !NATIVE_PROMISE_REJECTION_EVENT$1;
  });

  var promiseConstructorDetection = {
    CONSTRUCTOR: FORCED_PROMISE_CONSTRUCTOR$5,
    REJECTION_EVENT: NATIVE_PROMISE_REJECTION_EVENT$1,
    SUBCLASSING: SUBCLASSING
  };

  var newPromiseCapability$2 = {};

  var aCallable$3 = aCallable$8;

  var $TypeError$2 = TypeError;

  var PromiseCapability = function (C) {
    var resolve, reject;
    this.promise = new C(function ($$resolve, $$reject) {
      if (resolve !== undefined || reject !== undefined) throw new $TypeError$2('Bad Promise constructor');
      resolve = $$resolve;
      reject = $$reject;
    });
    this.resolve = aCallable$3(resolve);
    this.reject = aCallable$3(reject);
  };

  // `NewPromiseCapability` abstract operation
  // https://tc39.es/ecma262/#sec-newpromisecapability
  newPromiseCapability$2.f = function (C) {
    return new PromiseCapability(C);
  };

  var $$8 = _export;
  var IS_NODE = environmentIsNode;
  var globalThis$6 = globalThis_1;
  var path = path$1;
  var call$7 = functionCall;
  var defineBuiltIn$2 = defineBuiltIn$9;
  var setPrototypeOf = objectSetPrototypeOf;
  var setToStringTag = setToStringTag$4;
  var setSpecies = setSpecies$2;
  var aCallable$2 = aCallable$8;
  var isCallable$3 = isCallable$n;
  var isObject$3 = isObject$i;
  var anInstance = anInstance$3;
  var speciesConstructor = speciesConstructor$1;
  var task = task$1.set;
  var microtask = microtask_1;
  var hostReportErrors = hostReportErrors$1;
  var perform$2 = perform$3;
  var Queue = queue$1;
  var InternalStateModule$1 = internalState;
  var NativePromiseConstructor$2 = promiseNativeConstructor;
  var PromiseConstructorDetection = promiseConstructorDetection;
  var newPromiseCapabilityModule$3 = newPromiseCapability$2;

  var PROMISE = 'Promise';
  var FORCED_PROMISE_CONSTRUCTOR$4 = PromiseConstructorDetection.CONSTRUCTOR;
  var NATIVE_PROMISE_REJECTION_EVENT = PromiseConstructorDetection.REJECTION_EVENT;
  var NATIVE_PROMISE_SUBCLASSING = PromiseConstructorDetection.SUBCLASSING;
  var getInternalPromiseState = InternalStateModule$1.getterFor(PROMISE);
  var setInternalState$1 = InternalStateModule$1.set;
  var NativePromisePrototype$1 = NativePromiseConstructor$2 && NativePromiseConstructor$2.prototype;
  var PromiseConstructor = NativePromiseConstructor$2;
  var PromisePrototype = NativePromisePrototype$1;
  var TypeError$1 = globalThis$6.TypeError;
  var document$1 = globalThis$6.document;
  var process = globalThis$6.process;
  var newPromiseCapability$1 = newPromiseCapabilityModule$3.f;
  var newGenericPromiseCapability = newPromiseCapability$1;

  var DISPATCH_EVENT = !!(document$1 && document$1.createEvent && globalThis$6.dispatchEvent);
  var UNHANDLED_REJECTION = 'unhandledrejection';
  var REJECTION_HANDLED = 'rejectionhandled';
  var PENDING = 0;
  var FULFILLED = 1;
  var REJECTED = 2;
  var HANDLED = 1;
  var UNHANDLED = 2;

  var Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;

  // helpers
  var isThenable = function (it) {
    var then;
    return isObject$3(it) && isCallable$3(then = it.then) ? then : false;
  };

  var callReaction = function (reaction, state) {
    var value = state.value;
    var ok = state.state === FULFILLED;
    var handler = ok ? reaction.ok : reaction.fail;
    var resolve = reaction.resolve;
    var reject = reaction.reject;
    var domain = reaction.domain;
    var result, then, exited;
    try {
      if (handler) {
        if (!ok) {
          if (state.rejection === UNHANDLED) onHandleUnhandled(state);
          state.rejection = HANDLED;
        }
        if (handler === true) result = value;
        else {
          if (domain) domain.enter();
          result = handler(value); // can throw
          if (domain) {
            domain.exit();
            exited = true;
          }
        }
        if (result === reaction.promise) {
          reject(new TypeError$1('Promise-chain cycle'));
        } else if (then = isThenable(result)) {
          call$7(then, result, resolve, reject);
        } else resolve(result);
      } else reject(value);
    } catch (error) {
      if (domain && !exited) domain.exit();
      reject(error);
    }
  };

  var notify = function (state, isReject) {
    if (state.notified) return;
    state.notified = true;
    microtask(function () {
      var reactions = state.reactions;
      var reaction;
      while (reaction = reactions.get()) {
        callReaction(reaction, state);
      }
      state.notified = false;
      if (isReject && !state.rejection) onUnhandled(state);
    });
  };

  var dispatchEvent = function (name, promise, reason) {
    var event, handler;
    if (DISPATCH_EVENT) {
      event = document$1.createEvent('Event');
      event.promise = promise;
      event.reason = reason;
      event.initEvent(name, false, true);
      globalThis$6.dispatchEvent(event);
    } else event = { promise: promise, reason: reason };
    if (!NATIVE_PROMISE_REJECTION_EVENT && (handler = globalThis$6['on' + name])) handler(event);
    else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
  };

  var onUnhandled = function (state) {
    call$7(task, globalThis$6, function () {
      var promise = state.facade;
      var value = state.value;
      var IS_UNHANDLED = isUnhandled(state);
      var result;
      if (IS_UNHANDLED) {
        result = perform$2(function () {
          if (IS_NODE) {
            process.emit('unhandledRejection', value, promise);
          } else dispatchEvent(UNHANDLED_REJECTION, promise, value);
        });
        // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
        state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;
        if (result.error) throw result.value;
      }
    });
  };

  var isUnhandled = function (state) {
    return state.rejection !== HANDLED && !state.parent;
  };

  var onHandleUnhandled = function (state) {
    call$7(task, globalThis$6, function () {
      var promise = state.facade;
      if (IS_NODE) {
        process.emit('rejectionHandled', promise);
      } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
    });
  };

  var bind = function (fn, state, unwrap) {
    return function (value) {
      fn(state, value, unwrap);
    };
  };

  var internalReject = function (state, value, unwrap) {
    if (state.done) return;
    state.done = true;
    if (unwrap) state = unwrap;
    state.value = value;
    state.state = REJECTED;
    notify(state, true);
  };

  var internalResolve = function (state, value, unwrap) {
    if (state.done) return;
    state.done = true;
    if (unwrap) state = unwrap;
    try {
      if (state.facade === value) throw new TypeError$1("Promise can't be resolved itself");
      var then = isThenable(value);
      if (then) {
        microtask(function () {
          var wrapper = { done: false };
          try {
            call$7(then, value,
              bind(internalResolve, wrapper, state),
              bind(internalReject, wrapper, state)
            );
          } catch (error) {
            internalReject(wrapper, error, state);
          }
        });
      } else {
        state.value = value;
        state.state = FULFILLED;
        notify(state, false);
      }
    } catch (error) {
      internalReject({ done: false }, error, state);
    }
  };

  // constructor polyfill
  if (FORCED_PROMISE_CONSTRUCTOR$4) {
    // 25.4.3.1 Promise(executor)
    PromiseConstructor = function Promise(executor) {
      anInstance(this, PromisePrototype);
      aCallable$2(executor);
      call$7(Internal, this);
      var state = getInternalPromiseState(this);
      try {
        executor(bind(internalResolve, state), bind(internalReject, state));
      } catch (error) {
        internalReject(state, error);
      }
    };

    PromisePrototype = PromiseConstructor.prototype;

    // eslint-disable-next-line no-unused-vars -- required for `.length`
    Internal = function Promise(executor) {
      setInternalState$1(this, {
        type: PROMISE,
        done: false,
        notified: false,
        parent: false,
        reactions: new Queue(),
        rejection: false,
        state: PENDING,
        value: null
      });
    };

    // `Promise.prototype.then` method
    // https://tc39.es/ecma262/#sec-promise.prototype.then
    Internal.prototype = defineBuiltIn$2(PromisePrototype, 'then', function then(onFulfilled, onRejected) {
      var state = getInternalPromiseState(this);
      var reaction = newPromiseCapability$1(speciesConstructor(this, PromiseConstructor));
      state.parent = true;
      reaction.ok = isCallable$3(onFulfilled) ? onFulfilled : true;
      reaction.fail = isCallable$3(onRejected) && onRejected;
      reaction.domain = IS_NODE ? process.domain : undefined;
      if (state.state === PENDING) state.reactions.add(reaction);
      else microtask(function () {
        callReaction(reaction, state);
      });
      return reaction.promise;
    });

    OwnPromiseCapability = function () {
      var promise = new Internal();
      var state = getInternalPromiseState(promise);
      this.promise = promise;
      this.resolve = bind(internalResolve, state);
      this.reject = bind(internalReject, state);
    };

    newPromiseCapabilityModule$3.f = newPromiseCapability$1 = function (C) {
      return C === PromiseConstructor || C === PromiseWrapper
        ? new OwnPromiseCapability(C)
        : newGenericPromiseCapability(C);
    };

    if (isCallable$3(NativePromiseConstructor$2) && NativePromisePrototype$1 !== Object.prototype) {
      nativeThen = NativePromisePrototype$1.then;

      if (!NATIVE_PROMISE_SUBCLASSING) {
        // make `Promise#then` return a polyfilled `Promise` for native promise-based APIs
        defineBuiltIn$2(NativePromisePrototype$1, 'then', function then(onFulfilled, onRejected) {
          var that = this;
          return new PromiseConstructor(function (resolve, reject) {
            call$7(nativeThen, that, resolve, reject);
          }).then(onFulfilled, onRejected);
        // https://github.com/zloirock/core-js/issues/640
        }, { unsafe: true });
      }

      // make `.constructor === Promise` work for native promise-based APIs
      try {
        delete NativePromisePrototype$1.constructor;
      } catch (error) { /* empty */ }

      // make `instanceof Promise` work for native promise-based APIs
      if (setPrototypeOf) {
        setPrototypeOf(NativePromisePrototype$1, PromisePrototype);
      }
    }
  }

  // `Promise` constructor
  // https://tc39.es/ecma262/#sec-promise-executor
  $$8({ global: true, constructor: true, wrap: true, forced: FORCED_PROMISE_CONSTRUCTOR$4 }, {
    Promise: PromiseConstructor
  });

  PromiseWrapper = path.Promise;

  setToStringTag(PromiseConstructor, PROMISE, false);
  setSpecies(PROMISE);

  var NativePromiseConstructor$1 = promiseNativeConstructor;
  var checkCorrectnessOfIteration = checkCorrectnessOfIteration$3;
  var FORCED_PROMISE_CONSTRUCTOR$3 = promiseConstructorDetection.CONSTRUCTOR;

  var promiseStaticsIncorrectIteration = FORCED_PROMISE_CONSTRUCTOR$3 || !checkCorrectnessOfIteration(function (iterable) {
    NativePromiseConstructor$1.all(iterable).then(undefined, function () { /* empty */ });
  });

  var $$7 = _export;
  var call$6 = functionCall;
  var aCallable$1 = aCallable$8;
  var newPromiseCapabilityModule$2 = newPromiseCapability$2;
  var perform$1 = perform$3;
  var iterate$1 = iterate$4;
  var PROMISE_STATICS_INCORRECT_ITERATION$1 = promiseStaticsIncorrectIteration;

  // `Promise.all` method
  // https://tc39.es/ecma262/#sec-promise.all
  $$7({ target: 'Promise', stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION$1 }, {
    all: function all(iterable) {
      var C = this;
      var capability = newPromiseCapabilityModule$2.f(C);
      var resolve = capability.resolve;
      var reject = capability.reject;
      var result = perform$1(function () {
        var $promiseResolve = aCallable$1(C.resolve);
        var values = [];
        var counter = 0;
        var remaining = 1;
        iterate$1(iterable, function (promise) {
          var index = counter++;
          var alreadyCalled = false;
          remaining++;
          call$6($promiseResolve, C, promise).then(function (value) {
            if (alreadyCalled) return;
            alreadyCalled = true;
            values[index] = value;
            --remaining || resolve(values);
          }, reject);
        });
        --remaining || resolve(values);
      });
      if (result.error) reject(result.value);
      return capability.promise;
    }
  });

  var $$6 = _export;
  var FORCED_PROMISE_CONSTRUCTOR$2 = promiseConstructorDetection.CONSTRUCTOR;
  var NativePromiseConstructor = promiseNativeConstructor;
  var getBuiltIn$1 = getBuiltIn$7;
  var isCallable$2 = isCallable$n;
  var defineBuiltIn$1 = defineBuiltIn$9;

  var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;

  // `Promise.prototype.catch` method
  // https://tc39.es/ecma262/#sec-promise.prototype.catch
  $$6({ target: 'Promise', proto: true, forced: FORCED_PROMISE_CONSTRUCTOR$2, real: true }, {
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });

  // makes sure that native promise-based APIs `Promise#catch` properly works with patched `Promise#then`
  if (isCallable$2(NativePromiseConstructor)) {
    var method = getBuiltIn$1('Promise').prototype['catch'];
    if (NativePromisePrototype['catch'] !== method) {
      defineBuiltIn$1(NativePromisePrototype, 'catch', method, { unsafe: true });
    }
  }

  var $$5 = _export;
  var call$5 = functionCall;
  var aCallable = aCallable$8;
  var newPromiseCapabilityModule$1 = newPromiseCapability$2;
  var perform = perform$3;
  var iterate = iterate$4;
  var PROMISE_STATICS_INCORRECT_ITERATION = promiseStaticsIncorrectIteration;

  // `Promise.race` method
  // https://tc39.es/ecma262/#sec-promise.race
  $$5({ target: 'Promise', stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION }, {
    race: function race(iterable) {
      var C = this;
      var capability = newPromiseCapabilityModule$1.f(C);
      var reject = capability.reject;
      var result = perform(function () {
        var $promiseResolve = aCallable(C.resolve);
        iterate(iterable, function (promise) {
          call$5($promiseResolve, C, promise).then(capability.resolve, reject);
        });
      });
      if (result.error) reject(result.value);
      return capability.promise;
    }
  });

  var $$4 = _export;
  var newPromiseCapabilityModule = newPromiseCapability$2;
  var FORCED_PROMISE_CONSTRUCTOR$1 = promiseConstructorDetection.CONSTRUCTOR;

  // `Promise.reject` method
  // https://tc39.es/ecma262/#sec-promise.reject
  $$4({ target: 'Promise', stat: true, forced: FORCED_PROMISE_CONSTRUCTOR$1 }, {
    reject: function reject(r) {
      var capability = newPromiseCapabilityModule.f(this);
      var capabilityReject = capability.reject;
      capabilityReject(r);
      return capability.promise;
    }
  });

  var anObject$3 = anObject$d;
  var isObject$2 = isObject$i;
  var newPromiseCapability = newPromiseCapability$2;

  var promiseResolve$1 = function (C, x) {
    anObject$3(C);
    if (isObject$2(x) && x.constructor === C) return x;
    var promiseCapability = newPromiseCapability.f(C);
    var resolve = promiseCapability.resolve;
    resolve(x);
    return promiseCapability.promise;
  };

  var $$3 = _export;
  var getBuiltIn = getBuiltIn$7;
  var FORCED_PROMISE_CONSTRUCTOR = promiseConstructorDetection.CONSTRUCTOR;
  var promiseResolve = promiseResolve$1;

  getBuiltIn('Promise');

  // `Promise.resolve` method
  // https://tc39.es/ecma262/#sec-promise.resolve
  $$3({ target: 'Promise', stat: true, forced: FORCED_PROMISE_CONSTRUCTOR }, {
    resolve: function resolve(x) {
      return promiseResolve(this, x);
    }
  });

  var classof$2 = classof$9;

  var $String = String;

  var toString$6 = function (argument) {
    if (classof$2(argument) === 'Symbol') throw new TypeError('Cannot convert a Symbol value to a string');
    return $String(argument);
  };

  var anObject$2 = anObject$d;

  // `RegExp.prototype.flags` getter implementation
  // https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
  var regexpFlags$1 = function () {
    var that = anObject$2(this);
    var result = '';
    if (that.hasIndices) result += 'd';
    if (that.global) result += 'g';
    if (that.ignoreCase) result += 'i';
    if (that.multiline) result += 'm';
    if (that.dotAll) result += 's';
    if (that.unicode) result += 'u';
    if (that.unicodeSets) result += 'v';
    if (that.sticky) result += 'y';
    return result;
  };

  var fails$6 = fails$s;
  var globalThis$5 = globalThis_1;

  // babel-minify and Closure Compiler transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
  var $RegExp$2 = globalThis$5.RegExp;

  var UNSUPPORTED_Y$1 = fails$6(function () {
    var re = $RegExp$2('a', 'y');
    re.lastIndex = 2;
    return re.exec('abcd') !== null;
  });

  // UC Browser bug
  // https://github.com/zloirock/core-js/issues/1008
  UNSUPPORTED_Y$1 || fails$6(function () {
    return !$RegExp$2('a', 'y').sticky;
  });

  var BROKEN_CARET = UNSUPPORTED_Y$1 || fails$6(function () {
    // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
    var re = $RegExp$2('^r', 'gy');
    re.lastIndex = 2;
    return re.exec('str') !== null;
  });

  var regexpStickyHelpers = {
    BROKEN_CARET: BROKEN_CARET};

  var fails$5 = fails$s;
  var globalThis$4 = globalThis_1;

  // babel-minify and Closure Compiler transpiles RegExp('.', 's') -> /./s and it causes SyntaxError
  var $RegExp$1 = globalThis$4.RegExp;

  var regexpUnsupportedDotAll = fails$5(function () {
    var re = $RegExp$1('.', 's');
    return !(re.dotAll && re.test('\n') && re.flags === 's');
  });

  var fails$4 = fails$s;
  var globalThis$3 = globalThis_1;

  // babel-minify and Closure Compiler transpiles RegExp('(?<a>b)', 'g') -> /(?<a>b)/g and it causes SyntaxError
  var $RegExp = globalThis$3.RegExp;

  var regexpUnsupportedNcg = fails$4(function () {
    var re = $RegExp('(?<a>b)', 'g');
    return re.exec('b').groups.a !== 'b' ||
      'b'.replace(re, '$<a>c') !== 'bc';
  });

  /* eslint-disable regexp/no-empty-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing */
  /* eslint-disable regexp/no-useless-quantifier -- testing */
  var call$4 = functionCall;
  var uncurryThis$5 = functionUncurryThis;
  var toString$5 = toString$6;
  var regexpFlags = regexpFlags$1;
  var stickyHelpers = regexpStickyHelpers;
  var shared = shared$4;
  var create = objectCreate;
  var getInternalState$1 = internalState.get;
  var UNSUPPORTED_DOT_ALL = regexpUnsupportedDotAll;
  var UNSUPPORTED_NCG = regexpUnsupportedNcg;

  var nativeReplace = shared('native-string-replace', String.prototype.replace);
  var nativeExec = RegExp.prototype.exec;
  var patchedExec = nativeExec;
  var charAt$4 = uncurryThis$5(''.charAt);
  var indexOf = uncurryThis$5(''.indexOf);
  var replace$2 = uncurryThis$5(''.replace);
  var stringSlice$3 = uncurryThis$5(''.slice);

  var UPDATES_LAST_INDEX_WRONG = (function () {
    var re1 = /a/;
    var re2 = /b*/g;
    call$4(nativeExec, re1, 'a');
    call$4(nativeExec, re2, 'a');
    return re1.lastIndex !== 0 || re2.lastIndex !== 0;
  })();

  var UNSUPPORTED_Y = stickyHelpers.BROKEN_CARET;

  // nonparticipating capturing group, copied from es5-shim's String#split patch.
  var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

  var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG;

  if (PATCH) {
    patchedExec = function exec(string) {
      var re = this;
      var state = getInternalState$1(re);
      var str = toString$5(string);
      var raw = state.raw;
      var result, reCopy, lastIndex, match, i, object, group;

      if (raw) {
        raw.lastIndex = re.lastIndex;
        result = call$4(patchedExec, raw, str);
        re.lastIndex = raw.lastIndex;
        return result;
      }

      var groups = state.groups;
      var sticky = UNSUPPORTED_Y && re.sticky;
      var flags = call$4(regexpFlags, re);
      var source = re.source;
      var charsAdded = 0;
      var strCopy = str;

      if (sticky) {
        flags = replace$2(flags, 'y', '');
        if (indexOf(flags, 'g') === -1) {
          flags += 'g';
        }

        strCopy = stringSlice$3(str, re.lastIndex);
        // Support anchored sticky behavior.
        if (re.lastIndex > 0 && (!re.multiline || re.multiline && charAt$4(str, re.lastIndex - 1) !== '\n')) {
          source = '(?: ' + source + ')';
          strCopy = ' ' + strCopy;
          charsAdded++;
        }
        // ^(? + rx + ) is needed, in combination with some str slicing, to
        // simulate the 'y' flag.
        reCopy = new RegExp('^(?:' + source + ')', flags);
      }

      if (NPCG_INCLUDED) {
        reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
      }
      if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

      match = call$4(nativeExec, sticky ? reCopy : re, strCopy);

      if (sticky) {
        if (match) {
          match.input = stringSlice$3(match.input, charsAdded);
          match[0] = stringSlice$3(match[0], charsAdded);
          match.index = re.lastIndex;
          re.lastIndex += match[0].length;
        } else re.lastIndex = 0;
      } else if (UPDATES_LAST_INDEX_WRONG && match) {
        re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
      }
      if (NPCG_INCLUDED && match && match.length > 1) {
        // Fix browsers whose `exec` methods don't consistently return `undefined`
        // for NPCG, like IE8. NOTE: This doesn't work for /(.?)?/
        call$4(nativeReplace, match[0], reCopy, function () {
          for (i = 1; i < arguments.length - 2; i++) {
            if (arguments[i] === undefined) match[i] = undefined;
          }
        });
      }

      if (match && groups) {
        match.groups = object = create(null);
        for (i = 0; i < groups.length; i++) {
          group = groups[i];
          object[group[0]] = match[group[1]];
        }
      }

      return match;
    };
  }

  var regexpExec$2 = patchedExec;

  var $$2 = _export;
  var exec = regexpExec$2;

  // `RegExp.prototype.exec` method
  // https://tc39.es/ecma262/#sec-regexp.prototype.exec
  $$2({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {
    exec: exec
  });

  var isObject$1 = isObject$i;
  var classof$1 = classofRaw$2;
  var wellKnownSymbol$3 = wellKnownSymbol$k;

  var MATCH$1 = wellKnownSymbol$3('match');

  // `IsRegExp` abstract operation
  // https://tc39.es/ecma262/#sec-isregexp
  var isRegexp = function (it) {
    var isRegExp;
    return isObject$1(it) && ((isRegExp = it[MATCH$1]) !== undefined ? !!isRegExp : classof$1(it) === 'RegExp');
  };

  var isRegExp = isRegexp;

  var $TypeError$1 = TypeError;

  var notARegexp = function (it) {
    if (isRegExp(it)) {
      throw new $TypeError$1("The method doesn't accept regular expressions");
    } return it;
  };

  var wellKnownSymbol$2 = wellKnownSymbol$k;

  var MATCH = wellKnownSymbol$2('match');

  var correctIsRegexpLogic = function (METHOD_NAME) {
    var regexp = /./;
    try {
      '/./'[METHOD_NAME](regexp);
    } catch (error1) {
      try {
        regexp[MATCH] = false;
        return '/./'[METHOD_NAME](regexp);
      } catch (error2) { /* empty */ }
    } return false;
  };

  var $$1 = _export;
  var uncurryThis$4 = functionUncurryThis;
  var notARegExp = notARegexp;
  var requireObjectCoercible$3 = requireObjectCoercible$7;
  var toString$4 = toString$6;
  var correctIsRegExpLogic = correctIsRegexpLogic;

  var stringIndexOf$1 = uncurryThis$4(''.indexOf);

  // `String.prototype.includes` method
  // https://tc39.es/ecma262/#sec-string.prototype.includes
  $$1({ target: 'String', proto: true, forced: !correctIsRegExpLogic('includes') }, {
    includes: function includes(searchString /* , position = 0 */) {
      return !!~stringIndexOf$1(
        toString$4(requireObjectCoercible$3(this)),
        toString$4(notARegExp(searchString)),
        arguments.length > 1 ? arguments[1] : undefined
      );
    }
  });

  var uncurryThis$3 = functionUncurryThis;
  var toIntegerOrInfinity$1 = toIntegerOrInfinity$4;
  var toString$3 = toString$6;
  var requireObjectCoercible$2 = requireObjectCoercible$7;

  var charAt$3 = uncurryThis$3(''.charAt);
  var charCodeAt = uncurryThis$3(''.charCodeAt);
  var stringSlice$2 = uncurryThis$3(''.slice);

  var createMethod$1 = function (CONVERT_TO_STRING) {
    return function ($this, pos) {
      var S = toString$3(requireObjectCoercible$2($this));
      var position = toIntegerOrInfinity$1(pos);
      var size = S.length;
      var first, second;
      if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
      first = charCodeAt(S, position);
      return first < 0xD800 || first > 0xDBFF || position + 1 === size
        || (second = charCodeAt(S, position + 1)) < 0xDC00 || second > 0xDFFF
          ? CONVERT_TO_STRING
            ? charAt$3(S, position)
            : first
          : CONVERT_TO_STRING
            ? stringSlice$2(S, position, position + 2)
            : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
    };
  };

  var stringMultibyte = {
    // `String.prototype.at` method
    // https://github.com/mathiasbynens/String.prototype.at
    charAt: createMethod$1(true)
  };

  var charAt$2 = stringMultibyte.charAt;
  var toString$2 = toString$6;
  var InternalStateModule = internalState;
  var defineIterator = iteratorDefine;
  var createIterResultObject = createIterResultObject$2;

  var STRING_ITERATOR = 'String Iterator';
  var setInternalState = InternalStateModule.set;
  var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);

  // `String.prototype[@@iterator]` method
  // https://tc39.es/ecma262/#sec-string.prototype-@@iterator
  defineIterator(String, 'String', function (iterated) {
    setInternalState(this, {
      type: STRING_ITERATOR,
      string: toString$2(iterated),
      index: 0
    });
  // `%StringIteratorPrototype%.next` method
  // https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
  }, function next() {
    var state = getInternalState(this);
    var string = state.string;
    var index = state.index;
    var point;
    if (index >= string.length) return createIterResultObject(undefined, true);
    point = charAt$2(string, index);
    state.index += point.length;
    return createIterResultObject(point, false);
  });

  // TODO: Remove from `core-js@4` since it's moved to entry points

  var call$3 = functionCall;
  var defineBuiltIn = defineBuiltIn$9;
  var regexpExec$1 = regexpExec$2;
  var fails$3 = fails$s;
  var wellKnownSymbol$1 = wellKnownSymbol$k;
  var createNonEnumerableProperty$1 = createNonEnumerableProperty$5;

  var SPECIES = wellKnownSymbol$1('species');
  var RegExpPrototype$1 = RegExp.prototype;

  var fixRegexpWellKnownSymbolLogic = function (KEY, exec, FORCED, SHAM) {
    var SYMBOL = wellKnownSymbol$1(KEY);

    var DELEGATES_TO_SYMBOL = !fails$3(function () {
      // String methods call symbol-named RegExp methods
      var O = {};
      // eslint-disable-next-line unicorn/no-immediate-mutation -- ES3 syntax limitation
      O[SYMBOL] = function () { return 7; };
      return ''[KEY](O) !== 7;
    });

    var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails$3(function () {
      // Symbol-named RegExp methods call .exec
      var execCalled = false;
      var re = /a/;

      if (KEY === 'split') {
        // We can't use real regex here since it causes deoptimization
        // and serious performance degradation in V8
        // https://github.com/zloirock/core-js/issues/306
        // RegExp[@@split] doesn't call the regex's exec method, but first creates
        // a new one. We need to return the patched regex when creating the new one.
        var constructor = {};
        // eslint-disable-next-line unicorn/no-immediate-mutation -- ES3 syntax limitation
        constructor[SPECIES] = function () { return re; };
        re = { constructor: constructor, flags: '' };
        // eslint-disable-next-line unicorn/no-immediate-mutation -- ES3 syntax limitation
        re[SYMBOL] = /./[SYMBOL];
      }

      re.exec = function () {
        execCalled = true;
        return null;
      };

      re[SYMBOL]('');
      return !execCalled;
    });

    if (
      !DELEGATES_TO_SYMBOL ||
      !DELEGATES_TO_EXEC ||
      FORCED
    ) {
      var nativeRegExpMethod = /./[SYMBOL];
      var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
        var $exec = regexp.exec;
        if ($exec === regexpExec$1 || $exec === RegExpPrototype$1.exec) {
          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
            // The native String method already delegates to @@method (this
            // polyfilled function), leasing to infinite recursion.
            // We avoid it by directly calling the native @@method method.
            return { done: true, value: call$3(nativeRegExpMethod, regexp, str, arg2) };
          }
          return { done: true, value: call$3(nativeMethod, str, regexp, arg2) };
        }
        return { done: false };
      });

      defineBuiltIn(String.prototype, KEY, methods[0]);
      defineBuiltIn(RegExpPrototype$1, SYMBOL, methods[1]);
    }

    if (SHAM) createNonEnumerableProperty$1(RegExpPrototype$1[SYMBOL], 'sham', true);
  };

  var charAt$1 = stringMultibyte.charAt;

  // `AdvanceStringIndex` abstract operation
  // https://tc39.es/ecma262/#sec-advancestringindex
  var advanceStringIndex$1 = function (S, index, unicode) {
    return index + (unicode ? charAt$1(S, index).length : 1);
  };

  var uncurryThis$2 = functionUncurryThis;
  var toObject = toObject$7;

  var floor = Math.floor;
  var charAt = uncurryThis$2(''.charAt);
  var replace$1 = uncurryThis$2(''.replace);
  var stringSlice$1 = uncurryThis$2(''.slice);
  // eslint-disable-next-line redos/no-vulnerable -- safe
  var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
  var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d{1,2})/g;

  // `GetSubstitution` abstract operation
  // https://tc39.es/ecma262/#sec-getsubstitution
  var getSubstitution$1 = function (matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return replace$1(replacement, symbols, function (match, ch) {
      var capture;
      switch (charAt(ch, 0)) {
        case '$': return '$';
        case '&': return matched;
        case '`': return stringSlice$1(str, 0, position);
        case "'": return stringSlice$1(str, tailPos);
        case '<':
          capture = namedCaptures[stringSlice$1(ch, 1, -1)];
          break;
        default: // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? charAt(ch, 1) : captures[f - 1] + charAt(ch, 1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  };

  var globalThis$2 = globalThis_1;
  var fails$2 = fails$s;

  // babel-minify and Closure Compiler transpiles RegExp('.', 'd') -> /./d and it causes SyntaxError
  var RegExp$1 = globalThis$2.RegExp;

  var FLAGS_GETTER_IS_CORRECT = !fails$2(function () {
    var INDICES_SUPPORT = true;
    try {
      RegExp$1('.', 'd');
    } catch (error) {
      INDICES_SUPPORT = false;
    }

    var O = {};
    // modern V8 bug
    var calls = '';
    var expected = INDICES_SUPPORT ? 'dgimsy' : 'gimsy';

    var addGetter = function (key, chr) {
      // eslint-disable-next-line es/no-object-defineproperty -- safe
      Object.defineProperty(O, key, { get: function () {
        calls += chr;
        return true;
      } });
    };

    var pairs = {
      dotAll: 's',
      global: 'g',
      ignoreCase: 'i',
      multiline: 'm',
      sticky: 'y'
    };

    if (INDICES_SUPPORT) pairs.hasIndices = 'd';

    for (var key in pairs) addGetter(key, pairs[key]);

    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    var result = Object.getOwnPropertyDescriptor(RegExp$1.prototype, 'flags').get.call(O);

    return result !== expected || calls !== expected;
  });

  var regexpFlagsDetection = { correct: FLAGS_GETTER_IS_CORRECT };

  var call$2 = functionCall;
  var hasOwn = hasOwnProperty_1;
  var isPrototypeOf = objectIsPrototypeOf;
  var regExpFlagsDetection = regexpFlagsDetection;
  var regExpFlagsGetterImplementation = regexpFlags$1;

  var RegExpPrototype = RegExp.prototype;

  var regexpGetFlags = regExpFlagsDetection.correct ? function (it) {
    return it.flags;
  } : function (it) {
    return (!regExpFlagsDetection.correct && isPrototypeOf(RegExpPrototype, it) && !hasOwn(it, 'flags'))
      ? call$2(regExpFlagsGetterImplementation, it)
      : it.flags;
  };

  var call$1 = functionCall;
  var anObject$1 = anObject$d;
  var isCallable$1 = isCallable$n;
  var classof = classofRaw$2;
  var regexpExec = regexpExec$2;

  var $TypeError = TypeError;

  // `RegExpExec` abstract operation
  // https://tc39.es/ecma262/#sec-regexpexec
  var regexpExecAbstract = function (R, S) {
    var exec = R.exec;
    if (isCallable$1(exec)) {
      var result = call$1(exec, R, S);
      if (result !== null) anObject$1(result);
      return result;
    }
    if (classof(R) === 'RegExp') return call$1(regexpExec, R, S);
    throw new $TypeError('RegExp#exec called on incompatible receiver');
  };

  var apply = functionApply;
  var call = functionCall;
  var uncurryThis$1 = functionUncurryThis;
  var fixRegExpWellKnownSymbolLogic = fixRegexpWellKnownSymbolLogic;
  var fails$1 = fails$s;
  var anObject = anObject$d;
  var isCallable = isCallable$n;
  var isObject = isObject$i;
  var toIntegerOrInfinity = toIntegerOrInfinity$4;
  var toLength = toLength$2;
  var toString$1 = toString$6;
  var requireObjectCoercible$1 = requireObjectCoercible$7;
  var advanceStringIndex = advanceStringIndex$1;
  var getMethod = getMethod$4;
  var getSubstitution = getSubstitution$1;
  var getRegExpFlags = regexpGetFlags;
  var regExpExec = regexpExecAbstract;
  var wellKnownSymbol = wellKnownSymbol$k;

  var REPLACE = wellKnownSymbol('replace');
  var max = Math.max;
  var min = Math.min;
  var concat = uncurryThis$1([].concat);
  var push = uncurryThis$1([].push);
  var stringIndexOf = uncurryThis$1(''.indexOf);
  var stringSlice = uncurryThis$1(''.slice);

  var maybeToString = function (it) {
    return it === undefined ? it : String(it);
  };

  // IE <= 11 replaces $0 with the whole match, as if it was $&
  // https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
  var REPLACE_KEEPS_$0 = (function () {
    // eslint-disable-next-line regexp/prefer-escape-replacement-dollar-char -- required for testing
    return 'a'.replace(/./, '$0') === '$0';
  })();

  // Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
  var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
    if (/./[REPLACE]) {
      return /./[REPLACE]('a', '$0') === '';
    }
    return false;
  })();

  var REPLACE_SUPPORTS_NAMED_GROUPS = !fails$1(function () {
    var re = /./;
    re.exec = function () {
      var result = [];
      result.groups = { a: '7' };
      return result;
    };
    // eslint-disable-next-line regexp/no-useless-dollar-replacements -- false positive
    return ''.replace(re, '$<a>') !== '7';
  });

  // @@replace logic
  fixRegExpWellKnownSymbolLogic('replace', function (_, nativeReplace, maybeCallNative) {
    var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';

    return [
      // `String.prototype.replace` method
      // https://tc39.es/ecma262/#sec-string.prototype.replace
      function replace(searchValue, replaceValue) {
        var O = requireObjectCoercible$1(this);
        var replacer = isObject(searchValue) ? getMethod(searchValue, REPLACE) : undefined;
        return replacer
          ? call(replacer, searchValue, O, replaceValue)
          : call(nativeReplace, toString$1(O), searchValue, replaceValue);
      },
      // `RegExp.prototype[@@replace]` method
      // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
      function (string, replaceValue) {
        var rx = anObject(this);
        var S = toString$1(string);

        if (
          typeof replaceValue == 'string' &&
          stringIndexOf(replaceValue, UNSAFE_SUBSTITUTE) === -1 &&
          stringIndexOf(replaceValue, '$<') === -1
        ) {
          var res = maybeCallNative(nativeReplace, rx, S, replaceValue);
          if (res.done) return res.value;
        }

        var functionalReplace = isCallable(replaceValue);
        if (!functionalReplace) replaceValue = toString$1(replaceValue);

        var flags = toString$1(getRegExpFlags(rx));
        var global = stringIndexOf(flags, 'g') !== -1;
        var fullUnicode;
        if (global) {
          fullUnicode = stringIndexOf(flags, 'u') !== -1;
          rx.lastIndex = 0;
        }

        var results = [];
        var result;
        while (true) {
          result = regExpExec(rx, S);
          if (result === null) break;

          push(results, result);
          if (!global) break;

          var matchStr = toString$1(result[0]);
          if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        }

        var accumulatedResult = '';
        var nextSourcePosition = 0;
        for (var i = 0; i < results.length; i++) {
          result = results[i];

          var matched = toString$1(result[0]);
          var position = max(min(toIntegerOrInfinity(result.index), S.length), 0);
          var captures = [];
          var replacement;
          // NOTE: This is equivalent to
          //   captures = result.slice(1).map(maybeToString)
          // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
          // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
          // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
          for (var j = 1; j < result.length; j++) push(captures, maybeToString(result[j]));
          var namedCaptures = result.groups;
          if (functionalReplace) {
            var replacerArgs = concat([matched], captures, position, S);
            if (namedCaptures !== undefined) push(replacerArgs, namedCaptures);
            replacement = toString$1(apply(replaceValue, undefined, replacerArgs));
          } else {
            replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
          }
          if (position >= nextSourcePosition) {
            accumulatedResult += stringSlice(S, nextSourcePosition, position) + replacement;
            nextSourcePosition = position + matched.length;
          }
        }

        return accumulatedResult + stringSlice(S, nextSourcePosition);
      }
    ];
  }, !REPLACE_SUPPORTS_NAMED_GROUPS || !REPLACE_KEEPS_$0 || REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE);

  // a string of all valid unicode whitespaces
  var whitespaces$2 = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' +
    '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

  var uncurryThis = functionUncurryThis;
  var requireObjectCoercible = requireObjectCoercible$7;
  var toString = toString$6;
  var whitespaces$1 = whitespaces$2;

  var replace = uncurryThis(''.replace);
  var ltrim = RegExp('^[' + whitespaces$1 + ']+');
  var rtrim = RegExp('(^|[^' + whitespaces$1 + '])[' + whitespaces$1 + ']+$');

  // `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
  var createMethod = function (TYPE) {
    return function ($this) {
      var string = toString(requireObjectCoercible($this));
      if (TYPE & 1) string = replace(string, ltrim, '');
      if (TYPE & 2) string = replace(string, rtrim, '$1');
      return string;
    };
  };

  var stringTrim = {
    // `String.prototype.trim` method
    // https://tc39.es/ecma262/#sec-string.prototype.trim
    trim: createMethod(3)
  };

  var PROPER_FUNCTION_NAME = functionName.PROPER;
  var fails = fails$s;
  var whitespaces = whitespaces$2;

  var non = '\u200B\u0085\u180E';

  // check that a method works with the correct list
  // of whitespaces and has a correct name
  var stringTrimForced = function (METHOD_NAME) {
    return fails(function () {
      return !!whitespaces[METHOD_NAME]()
        || non[METHOD_NAME]() !== non
        || (PROPER_FUNCTION_NAME && whitespaces[METHOD_NAME].name !== METHOD_NAME);
    });
  };

  var $ = _export;
  var $trim = stringTrim.trim;
  var forcedStringTrimMethod = stringTrimForced;

  // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim
  $({ target: 'String', proto: true, forced: forcedStringTrimMethod('trim') }, {
    trim: function trim() {
      return $trim(this);
    }
  });

  // iterable DOM collections
  // flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
  var domIterables = {
    CSSRuleList: 0,
    CSSStyleDeclaration: 0,
    CSSValueList: 0,
    ClientRectList: 0,
    DOMRectList: 0,
    DOMStringList: 0,
    DOMTokenList: 1,
    DataTransferItemList: 0,
    FileList: 0,
    HTMLAllCollection: 0,
    HTMLCollection: 0,
    HTMLFormElement: 0,
    HTMLSelectElement: 0,
    MediaList: 0,
    MimeTypeArray: 0,
    NamedNodeMap: 0,
    NodeList: 1,
    PaintRequestList: 0,
    Plugin: 0,
    PluginArray: 0,
    SVGLengthList: 0,
    SVGNumberList: 0,
    SVGPathSegList: 0,
    SVGPointList: 0,
    SVGStringList: 0,
    SVGTransformList: 0,
    SourceBufferList: 0,
    StyleSheetList: 0,
    TextTrackCueList: 0,
    TextTrackList: 0,
    TouchList: 0
  };

  // in old WebKit versions, `element.classList` is not an instance of global `DOMTokenList`
  var documentCreateElement = documentCreateElement$2;

  var classList = documentCreateElement('span').classList;
  var DOMTokenListPrototype$1 = classList && classList.constructor && classList.constructor.prototype;

  var domTokenListPrototype = DOMTokenListPrototype$1 === Object.prototype ? undefined : DOMTokenListPrototype$1;

  var $forEach = arrayIteration.forEach;
  var arrayMethodIsStrict = arrayMethodIsStrict$2;

  var STRICT_METHOD = arrayMethodIsStrict('forEach');

  // `Array.prototype.forEach` method implementation
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  var arrayForEach = !STRICT_METHOD ? function forEach(callbackfn /* , thisArg */) {
    return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  // eslint-disable-next-line es/no-array-prototype-foreach -- safe
  } : [].forEach;

  var globalThis$1 = globalThis_1;
  var DOMIterables = domIterables;
  var DOMTokenListPrototype = domTokenListPrototype;
  var forEach = arrayForEach;
  var createNonEnumerableProperty = createNonEnumerableProperty$5;

  var handlePrototype = function (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
      createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);
    } catch (error) {
      CollectionPrototype.forEach = forEach;
    }
  };

  for (var COLLECTION_NAME in DOMIterables) {
    if (DOMIterables[COLLECTION_NAME]) {
      handlePrototype(globalThis$1[COLLECTION_NAME] && globalThis$1[COLLECTION_NAME].prototype);
    }
  }

  handlePrototype(DOMTokenListPrototype);

  // Store original val function
  var originalVal = $$k.fn.val;
  $$k.fn.val = function (value) {
    if (value === undefined) {
      return originalVal.call(this);
    }
    return this.each(function () {
      var instance = $$k(this).data("aselect");
      if (instance) {
        instance.selectRow(value, false);
      } else {
        originalVal.call($$k(this), value);
      }
    });
  };

  /** ------------------------
   *  UTILITIES
   *  ----------------------*/
  function generateUniqueId() {
    var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "a-select-";
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    return prefix + Array.from({
      length: 8
    }, function () {
      return chars.charAt(Math.floor(Math.random() * chars.length));
    }).join("");
  }
  function scrollIntoView($el, $container) {
    var animate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    if (!$el.length) return;
    var elTop = $el.position().top;
    var elHeight = $el.outerHeight() * 3;
    var containerHeight = $container.height();
    var currentScroll = $container.scrollTop();
    var targetScroll = null;
    if (elTop + elHeight > containerHeight + currentScroll) {
      targetScroll = elTop + elHeight - containerHeight;
    } else if (currentScroll > 0 && elTop - elHeight < currentScroll) {
      targetScroll = Math.max(elTop - elHeight, 0);
    }
    if (targetScroll !== null) {
      animate ? $container.stop().animate({
        scrollTop: targetScroll
      }, 100) : $container.scrollTop(targetScroll);
    }
  }
  function convertCamelNotationToSentence(str) {
    if (!str) return "";
    var trimmed = str.replace(/^[a-z]+/, ""); // Remove the first word (everything before the first uppercase letter)
    var sentence = trimmed.replace(/([A-Z])/g, " $1").trim(); // Insert space before each uppercase letter
    return sentence;
  }
  function showTooltip($el, text) {
    if ($el && $el.length) {
      hideTooltip($el);
      $el.attr("data-bs-toggle", "tooltip").attr("title", text).tooltip("dispose") // Dispose any existing tooltip
      .tooltip({
        placement: "bottom",
        trigger: "hover" // Show on hover
      });
    } else {
      console.warn("Element does not exist in DOM", $el);
    }
  }
  function hideTooltip($el) {
    if ($el && $el.length) {
      $el.tooltip("dispose");
      $el.removeAttr("data-bs-toggle").removeAttr("title");
    } else {
      console.warn("Element does not exist in DOM", $el);
    }
  }
  function getScrollableParents($ctx) {
    return $ctx.parents().filter(function () {
      return $$k(this).css("overflow") === "auto" || $$k(this).css("overflow-y") === "scroll" || $$k(this).css("overflow-x") === "scroll";
    });
  }

  /** ------------------------
   *  CONFIGURATION
   *  ----------------------*/

  var dataAttrs = {
    instance: "aselect",
    quickLinks: "data-quicklink",
    showClearButton: "data-show-clear-button",
    headers: "data-headers",
    ajaxUrl: "data-url",
    uniqueBy: "data-unique-by",
    creatable: "data-creatable",
    dependsOn: "data-depends-on",
    hideExcluded: "data-hide-excluded",
    multiple: "multiple"
  };
  $$k.fn.aSelect = function (options) {
    if (typeof options === 'string') {
      var method = options;
      return this.each(function () {
        var instance = $$k(this).data(dataAttrs.instance);
        if (instance && typeof instance[method] === 'function') {
          instance[method]();
        }
      });
    }
    var defaultOptions = $$k.fn.aSelect.defaults || {};
    var settings = $$k.extend({
      onOpen: null,
      uniqueBy: [],
      onClose: null,
      onChange: null,
      showClearButton: false,
      quickLinks: "",
      dependsOn: [],
      ajaxUrl: null,
      headers: [],
      creatable: false,
      hideExcluded: true,
      placeHolder: "-- Select --",
      getAjaxDefaultPayload: function getAjaxDefaultPayload() {
        return {};
      },
      id: generateUniqueId()
    }, defaultOptions, options);
    return this.each(function () {
      var $select = $$k(this);
      if (!$select.data(dataAttrs.instance)) {
        if ($select.attr(dataAttrs.quickLinks)) {
          settings.quickLinks = $$k($select.attr(dataAttrs.quickLinks)).prop("outerHTML");
        }
        if ($select.attr(dataAttrs.showClearButton)) {
          settings.showClearButton = $select.attr(dataAttrs.showClearButton) == "true";
        }
        if ($select.attr(dataAttrs.headers)) {
          settings.headers = $select.attr(dataAttrs.headers).split(",").map(function (h) {
            return h.trim();
          });
        }
        if ($select.attr(dataAttrs.ajaxUrl)) {
          settings.ajaxUrl = $select.attr(dataAttrs.ajaxUrl);
        }
        if ($select.attr(dataAttrs.uniqueBy)) {
          settings.uniqueBy = $select.attr(dataAttrs.uniqueBy).split(",").map(function (h) {
            return h.trim();
          });
        }
        if ($select.attr(dataAttrs.creatable)) {
          settings.creatable = $select.attr(dataAttrs.creatable) == "true";
        }
        if ($select.attr(dataAttrs.hideExcluded)) {
          settings.hideExcluded = $select.attr(dataAttrs.hideExcluded) == "true";
        }
        if ($select.attr(dataAttrs.multiple)) {
          settings.multiple = $select.prop(dataAttrs.multiple);
        }
        var dependOnAttr = $select.attr(dataAttrs.dependsOn);
        if (dependOnAttr) {
          settings.dependsOn = JSON.parse(dependOnAttr);
        }
        var $placeHolderItem = $select.find("option[value=\"".concat($select.val(), "\"]"));
        if ($placeHolderItem.length) {
          settings.placeHolder = $placeHolderItem.text() || settings.placeHolder;
        }
        $select.data(dataAttrs.instance, new ASelect($select, settings));
      }
    });
  };

  /** ------------------------
       *  Main Class
       *  ----------------------*/
  var ASelect = /*#__PURE__*/function () {
    function ASelect($select, options) {
      _classCallCheck(this, ASelect);
      this.$select = $select;
      this.options = options;
      this.isServerSide = !!options.ajaxUrl;
      this.pageSize = 20;
      this.currentPage = 0;
      this.hasMorePages = true;
      this.isLoading = false;
      this.initComplete = false;
      this.uniqueSelectors = options.uniqueBy || [];
      this.isMultiple = options.multiple;
      this.init();
    }
    return _createClass(ASelect, [{
      key: "init",
      value: function init() {
        this.buildBaseStructure();
        this.initializePopper();
        if (this.$select.is(":disabled") || this.$select.is("[readonly]")) {
          this.disableSelect();
        }
        this.setupMutationObservers();
        if (this.isServerSide) {
          this.initializeServerSide();
        } else {
          this.initializeClientSide();
        }
      }
    }, {
      key: "buildBaseStructure",
      value: function buildBaseStructure() {
        this.$wrapper = $$k("<div class=\"a-select-wrapper\" data-aselect-id=\"".concat(this.options.id, "\"\"></div>"));
        this.$wrapper.data('select', this.$select);
        this.$display = $$k("<div class=\"a-select-display\" tabindex=\"0\"></div>").text(this.options.placeHolder);
        if (!this.isMultiple) {
          this.$display.css('min-height', "".concat(this.$select.outerHeight(), "px"));
        }
        this.$display.addClass(this.$select.attr("class") || "");
        this.updateDisplayContent();
        if (this.isServerSide) {
          showTooltip(this.$display, "Loading...");
        }
        this.$dropdown = $$k("<div class=\"a-select-dropdown card shadow-lg\" data-aselect-id=\"".concat(this.options.id, "\" style=\"display: none; z-index: 9999;\"></div>"));
        this.$filterConatiner = $$k('<div class="a-select-filter-container px-1 p-2"></div>');
        this.$search = $$k('<input type="text" class="form-control form-control-sm" placeholder="Search..."/>');
        this.$tableContainer = $$k("<div class=\"a-select-table-container overflow-y-auto\" style=\"max-height: 400px;\"></div>");
        this.$table = $$k("<table class=\"table table-sm a-select-table mb-0\" style=\"margin-bottom: 0;\"></table>");
        this.$tableHead = $$k("<thead class=\"bg-light position-sticky\" style=\"z-index: 1;top:-1px\"></thead>");
        this.$tableHeadRow = $$k("<tr></tr>");
        this.$tableBody = $$k("<tbody></tbody>");
        this.$filterConatiner.append(this.$search).append(this.options.quickLinks);
        this.$tableHead.append(this.$tableHeadRow);
        this.$table.append(this.$tableHead).append(this.$tableBody);
        this.$tableContainer.append(this.$table);
        this.$dropdown.append(this.$filterConatiner).append(this.$tableContainer);
        this.$wrapper.append(this.$display).append(this.$dropdown);
        if (this.options.showClearButton) {
          this.$clearButton = $$k('<button type="button" class="a-select-clear-button btn btn-sm position-absolute" tabindex="-1" aria-label="Clear selection"><i class="bi bi-x"></i></button>');
          this.$wrapper.append(this.$clearButton);
        }
        this.$select.addClass("a-select-hidden").attr("data-aselect-id", this.options.id);
        this.$select.after(this.$wrapper);
      }
    }, {
      key: "initializeClientSide",
      value: function initializeClientSide() {
        var hasTableData = false;
        if (this.options.headers.length) {
          var _iterator = _createForOfIteratorHelper(this.options.headers),
            _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var key = _step.value;
              var label = convertCamelNotationToSentence(key);
              this.$tableHeadRow.append("<th>".concat(label, "</th>"));
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
          hasTableData = true;
        }
        var self = this;
        this.$select.find("option").each(function () {
          var $opt = $$k(this);
          if (!$opt.val()) return;
          var $row = $$k('<tr role="option"></tr>').attr("data-select-id", $opt.val());
          if (hasTableData) {
            // Add data attribute columns
            self.options.headers.forEach(function (h) {
              var value = $opt.data("".concat(h.toLowerCase())) || "";
              $row.append("<td>".concat(value, "</td>"));
            });
          } else {
            $row.append("<td>".concat($opt.text(), "</td>"));
          }
          self.$tableBody.append($row);
        });
        this.finalizeInitialization();
      }
    }, {
      key: "initializeServerSide",
      value: function initializeServerSide() {
        var _this = this;
        this.appendPlaceholderOption();
        this.checkDependentFields();
        this.bindDependentFields();
        this.buildTableSchema().then(function () {
          _this.finalizeInitialization();
        });
      }
    }, {
      key: "bindDependentFields",
      value: function bindDependentFields() {
        var self = this;
        this.options.dependsOn.forEach(function (dep) {
          var $depField = $$k(dep.selector);
          if ($depField.length) {
            $depField.on("change.aSelect", function () {
              console.log("Dependent val changed:", $depField.val());
              self.reload = true;
              self.selectRow("");
              self.checkDependentFields();
            });
          }
        });
      }
    }, {
      key: "appendPlaceholderOption",
      value: function appendPlaceholderOption() {
        var $opt = $$k('<option>').val('').text(this.options.placeHolder).attr('data-a', '1');
        this.$select.append($opt);
      }
    }, {
      key: "finalizeInitialization",
      value: function finalizeInitialization() {
        var initialVal = this.$select.val();
        if (initialVal) {
          this.selectRow(initialVal, false);
        }
        if (this.isServerSide) {
          hideTooltip(this.$display);
        }
        this.bindEvents();
        this.updateClearButtonVisibility();
        this.initComplete = true;
      }
    }, {
      key: "waitForInit",
      value: function waitForInit(callback) {
        var _this2 = this;
        var checkInit = setInterval(function () {
          if (_this2.initComplete) {
            clearInterval(checkInit);
            callback();
          }
        }, 50);
      }
    }, {
      key: "bindEvents",
      value: function bindEvents() {
        var _this3 = this;
        this.updateEventsOnDisplay();
        this.setupSearchEvent();
        this.setupTableRowClickEvent();
        this.setupMouseEvents();
        this.setupDropdownKeyboardNavigation();
        if (this.options.showClearButton) {
          this.$clearButton.on("click.aSelect", function (e) {
            e.stopPropagation();
            _this3.selectRow(""); // This will clear selection for both single and multiple
            if (!_this3.isMultiple) {
              _this3.closeDropdown();
            }
          });
        }
      }
    }, {
      key: "setupDropdownKeyboardNavigation",
      value: function setupDropdownKeyboardNavigation() {
        var self = this;
        this.$dropdown.on("keydown.aSelect", function (e) {
          var $rows = self.$tableBody.find("tr:visible").not(".aselect-ignore, .a-select-row-exclude");
          if (self.options.creatable && e.key === "Enter" && $rows.length == 1 && $rows.first().hasClass("a-select-creatable-row")) {
            e.preventDefault();
            var searchText = self.$search.val().trim();
            if (searchText) {
              self.handleCreatableEntry(searchText);
            }
            return;
          }
          var $current = $rows.filter(".table-warning");

          // If no warning, start from primary or first
          if (!$current.length) {
            $current = $rows.filter(".table-primary").first();
          }
          if (e.key === "ArrowDown") {
            e.preventDefault();
            var $next = $rows.first();
            if ($current.length) {
              $next = $current.nextAll(":visible").not(".aselect-ignore, .a-select-row-exclude").first();
            }
            if ($next.length) {
              $current.removeClass("table-warning");
              $next.addClass("table-warning");
              scrollIntoView($next, self.$tableContainer);
            }
          } else if (e.key === "ArrowUp") {
            e.preventDefault();
            var $prev = $rows.first();
            if ($current.length) {
              $prev = $current.prevAll(":visible").not(".aselect-ignore, .a-select-row-exclude").first();
            }
            if ($prev.length) {
              $current.removeClass("table-warning");
              $prev.addClass("table-warning");
              scrollIntoView($prev, self.$tableContainer);
            }
          } else if (e.key === "Enter" || e.key === "Tab") {
            e.preventDefault();
            var id = $current.attr("data-select-id");
            if (id) {
              self.selectRow(id); // This will remove warning via highlightRow()
              self.closeDropdown();
            }
          } else if (e.key === "Escape") {
            e.preventDefault();
            self.closeDropdown();
          }
        });
      }
    }, {
      key: "setupMouseEvents",
      value: function setupMouseEvents() {
        var self = this;
        this.$tableBody.on("mouseenter.aSelect", "tr:not(.aselect-ignore)", function () {
          self.$tableBody.find("tr").removeClass("table-warning");
          $$k(this).addClass("table-warning");
        });
        this.$tableBody.on("mouseleave.aSelect", "tr:not(.aselect-ignore)", function () {
          $$k(this).removeClass("table-warning");
        });
      }
    }, {
      key: "setupTableRowClickEvent",
      value: function setupTableRowClickEvent() {
        var self = this;
        this.$tableBody.on("click.aSelect", "tr:not(.aselect-ignore)", function () {
          var $row = $$k(this);
          if ($row.hasClass("a-select-row-exclude")) {
            return;
          }
          if (self.options.creatable && $row.hasClass("a-select-creatable-row")) {
            var searchText = self.$search.val().trim();
            if (searchText) {
              self.handleCreatableEntry(searchText);
            }
            return;
          }
          var val = $row.attr("data-select-id");
          if (self.isMultiple) {
            var currentValues = self.$select.val() || [];
            if (currentValues.includes(val)) {
              // Deselect if already selected
              self.deselectValue(val);
            } else {
              // Select if not already selected
              self.selectRow(val);
            }
            // Don't close dropdown for multi-select to allow multiple selections
          } else {
            self.selectRow(val);
            self.closeDropdown();
          }
        });
      }
    }, {
      key: "setupSearchEvent",
      value: function setupSearchEvent() {
        var debounceTimer;
        var self = this;
        this.$search.on("input.aSelect", function () {
          var rawVal = $$k(this).val().trim();
          var val = rawVal.toLowerCase();
          if (self.isServerSide && self.bitImplementPagination) {
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(function () {
              if (self.loadedValSearchResult != val) {
                self.loadedValSearchResult = val;
                self.loadServerData(true).then(function () {
                  self.updateSelectedValueIfNeedOnSearch(self);
                  self.handleCreatableOption(rawVal);
                  self.excludeRows();
                });
              }
            }, 300);
          } else {
            self.$tableBody.find("tr").each(function () {
              var $row = $$k(this);
              var text = $row.text().toLowerCase();
              $row.toggle(text.includes(val));
            });
            self.updateSelectedValueIfNeedOnSearch(self);
            self.handleCreatableOption(rawVal);
          }
        });
      }
    }, {
      key: "handleCreatableOption",
      value: function handleCreatableOption(rawVal) {
        if (this.options.creatable && rawVal.length > 0) {
          var visibleRows = this.$tableBody.find("tr:visible").not('.a-select-creatable-row, .aselect-ignore');
          if (visibleRows.length === 0) {
            this.showCreatableOption(rawVal);
          } else {
            this.hideCreatableOption();
          }
        } else {
          this.hideCreatableOption();
        }
      }
    }, {
      key: "showCreatableOption",
      value: function showCreatableOption(searchText) {
        // Remove existing creatable option if any
        this.hideCreatableOption();

        // Add creatable option row
        var $creatableRow = $$k("\n                    <tr class=\"a-select-creatable-row table-success\" data-creatable-row=\"true\">\n                        <td colspan=\"".concat(this.$tableHeadRow.find('th').length, "\">\n                            <i class=\"bi bi-plus me-1\"></i>Create new: \"").concat(searchText, "\"\n                        </td>\n                    </tr>\n                "));
        this.$tableBody.prepend($creatableRow);
      }
    }, {
      key: "hideCreatableOption",
      value: function hideCreatableOption() {
        this.$tableBody.find('.a-select-creatable-row').remove();
      }
    }, {
      key: "handleCreatableEntry",
      value: function handleCreatableEntry(value) {
        var newValue = "new:" + value;
        var $newOption = $$k('<option>').val(newValue).text(value).attr('data-new', 'true');
        this.$select.append($newOption);
        this.selectRow(newValue);
        this.closeDropdown();
        this.$search.val(''); // Clear search
        this.hideCreatableOption();
        this.$select.trigger('newentry', [newValue, value]);
      }
    }, {
      key: "initializePopper",
      value: function initializePopper() {
        this.popperInstance = Popper.createPopper(this.$display[0], this.$dropdown[0], {
          placement: "bottom-start",
          modifiers: [{
            name: "computeStyles",
            options: {
              gpuAcceleration: false // true by default
            }
          }, {
            name: "preventScroll",
            enabled: true
          }]
        });
      }
    }, {
      key: "disableSelect",
      value: function disableSelect() {
        this.$wrapper.addClass("a-select-disabled");
        this.updateEventsOnDisplay();
      }
    }, {
      key: "enableSelect",
      value: function enableSelect() {
        this.$wrapper.removeClass("a-select-disabled");
        this.updateEventsOnDisplay();
      }
    }, {
      key: "updateEventsOnDisplay",
      value: function updateEventsOnDisplay() {
        if (this.$wrapper.hasClass("a-select-disabled")) {
          this.$display.off("click.aSelect keydown.aSelect");
          this.$display.attr("tabindex", "-1");
          this.$display.attr("aria-disabled", "true");
        } else {
          // Toggle dropdown on display click
          var self = this;
          this.$display.off("click.aSelect").on("click.aSelect", function (e) {
            e.stopPropagation();
            if (self.$dropdown.is(":visible")) {
              self.closeDropdown();
            } else {
              self.openDropdown();
            }
          });

          // Keyboard navigation
          this.$display.off("keydown.aSelect").on("keydown.aSelect", function (e) {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              self.openDropdown();
            } else if (e.key === "ArrowDown" && !$dropdown.is(":visible")) {
              e.preventDefault();
              self.openDropdown();
              var $first = self.$tableBody.find("tr:visible").first();
              if ($first.length) {
                $first.addClass("table-warning");
              }
            }
          });
          this.$display.attr("tabindex", "0");
          this.$display.attr("aria-disabled", "false");
        }
      }
    }, {
      key: "closeDropdown",
      value: function closeDropdown() {
        this.$dropdown.hide();
        this.$tableBody.find("tr.table-warning").removeClass("table-warning");
        this.$wrapper.removeClass("a-select-open");
        if (!this.$dropdown.parent().is(this.$wrapper)) {
          this.$dropdown.detach().appendTo(this.$wrapper);
        }
        if (this.$scrollableParents) {
          this.$scrollableParents.each(function () {
            $$k(this).off("scroll.aSelect");
          });
        }
        $$k(document).off("mousedown.aSelect focusin.aSelect");
        this.$display.trigger("focus");
      }
    }, {
      key: "afterDropdownOpenDataLoad",
      value: function afterDropdownOpenDataLoad() {
        this.excludeRows();
        this.setUpStylesOnDropdownOpen();
      }
    }, {
      key: "setUpStylesOnDropdownOpen",
      value: function setUpStylesOnDropdownOpen() {
        this.$dropdown.css({
          minWidth: this.$wrapper.outerWidth(),
          maxWidth: "80vw",
          width: "max-content"
        });
      }
    }, {
      key: "adjustDropdownPosition",
      value: function adjustDropdownPosition() {
        var scrollableParent = this.$dropdown.parent();
        while (scrollableParent.length && !scrollableParent.is("body")) {
          var overflowY = scrollableParent.css("overflowY");
          if (overflowY === "auto" || overflowY === "scroll") break;
          scrollableParent = scrollableParent.parent();
        }
        var wrapperOffset = this.$wrapper.offset();
        var scrollableOffset = scrollableParent.offset();
        var wrapperBottom = wrapperOffset.top - scrollableOffset.top + this.$wrapper.outerHeight();
        var spaceAbove = wrapperOffset.top - scrollableOffset.top;
        var spaceBelow = scrollableParent.innerHeight() - wrapperBottom;
        var maxHeight = Math.min(416, spaceBelow);
        if (maxHeight < 200 && spaceAbove > 200) {
          this.popperInstance.setOptions({
            placement: "top-start"
          });
          maxHeight = 200;
        } else {
          this.popperInstance.setOptions({
            placement: "bottom-start"
          });
        }
        this.$tableContainer.css("max-height", maxHeight - 63 + "px"); // search bar height 47px + 16px gap below
        this.popperInstance.update();
      }
    }, {
      key: "scrollIntoSelectedRow",
      value: function scrollIntoSelectedRow() {
        var selectedVal = this.$select.val();
        var $selectedRow = this.$tableBody.find("tr[data-select-id=\"".concat(selectedVal, "\"]:visible"));
        if ($selectedRow.length) {
          scrollIntoView($selectedRow, this.$tableContainer, false);
        }
      }
    }, {
      key: "openDropdown",
      value: function openDropdown() {
        var _this4 = this;
        if (!this.$dropdown.parent().is("body")) {
          this.$dropdown.detach().appendTo("body");
        }
        this.$dropdown.show();
        if (this.options.ajaxUrl) {
          if (this.reload || !this.initialDataLoaded || this.loadedValSearchResult != this.$search.val() && this.bitImplementPagination) {
            this.loadedValSearchResult = this.$search.val();
            this.reload = false;
            this.initialDataLoaded = true;
            this.loadServerData(true).then(function () {
              _this4.afterDropdownOpenDataLoad();
            });
          } else {
            this.excludeRows();
          }
        } else {
          this.afterDropdownOpenDataLoad();
        }
        this.$wrapper.addClass("a-select-open");
        this.popperInstance.update();
        this.$search[0].focus({
          preventScroll: true
        });
        setTimeout(function () {
          _this4.adjustDropdownPosition();
        }, 0);
        this.$scrollableParents = getScrollableParents(this.$select);
        if (this.$scrollableParents) {
          this.$scrollableParents.each(function () {
            $$k(this).on("scroll.aSelect", this.closeDropdown);
          });
        }
        this.scrollIntoSelectedRow();

        // Close on outside click
        var self = this;
        $$k(document).on("mousedown.aSelect focusin.aSelect", function (e) {
          if (!($$k(e.target).closest(".a-select-wrapper[data-aselect-id=\"".concat(self.options.id, "\"]")).length || $$k(e.target).closest(".a-select-dropdown[data-aselect-id=\"".concat(self.options.id, "\"]")).length)) {
            self.closeDropdown();
          }
        });
      }
    }, {
      key: "loadServerData",
      value: function loadServerData() {
        var _this5 = this;
        var reset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        return new Promise(function (resolve, reject) {
          var headerLength = _this5.$table.find("thead tr td, thead tr th").length;
          if (reset) {
            _this5.currentPage = 0;
            _this5.hasMorePages = true;
            _this5.$tableBody.empty();
          }
          if (_this5.isLoading || !_this5.hasMorePages) {
            resolve(); // still resolve to keep chain going
            return;
          }
          _this5.isLoading = true;
          $$k.ajax({
            url: _this5.options.ajaxUrl,
            method: "POST",
            data: _objectSpread2(_objectSpread2({}, _this5.options.getAjaxDefaultPayload()), {}, {
              start: _this5.currentPage * _this5.pageSize,
              length: _this5.$filterConatinerpageSize,
              search: _this5.bitImplementPagination ? _this5.$search.val() : "",
              valColumn: _this5.valColumn,
              selectedValue: _this5.$select.val(),
              onlyFetchSelectedRow: false,
              initialLoad: false,
              headers: _this5.options.headers,
              dependsOn: _objectSpread2({}, _this5.getDependentFields())
            }),
            success: function success(response) {
              _this5.isLoading = false;
              var rows = response.data || [];
              if (!rows.length) {
                if (_this5.$tableBody.find("tr").length == 0) {
                  _this5.$tableBody.append("<tr class=\"table-danger aselect-ignore\"><td colspan=\"".concat(headerLength || 1, "\" class=\"text-center\">No data</td></tr>"));
                }
                _this5.hasMorePages = false;
                resolve([]);
                return;
              }
              rows.forEach(function (row) {
                _this5.upsertSelectOption(row);
                _this5.appendRowIfDoesNotExist(row);
              });
              if (rows.length < _this5.pageSize) {
                _this5.hasMorePages = false;
              } else {
                _this5.currentPage++;
              }
              resolve(rows);
            },
            error: function error(xhr, status, _error) {
              _this5.isLoading = false;
              _this5.$tableBody.append('<tr class="table-danger aselect-ignore"><td colspan="' + (headerLength || 1) + '">Error loading data</td></tr>');
              resolve();
            }
          });
        });
      }
    }, {
      key: "upsertSelectOption",
      value: function upsertSelectOption(row) {
        var value = row[this.valColumn];
        var text = row[this.textColumn];
        var $opt = this.$select.find("option[value=\"".concat(value, "\"]"));
        if ($opt.length === 0) {
          $opt = $$k("<option>").val(value).text(text).attr("data-a", "1");
          for (var key in row) {
            $opt.attr("data-".concat(key.toLowerCase()), row[key]);
          }
          this.$select.append($opt);
        } else {
          $opt.text(text);
          for (var _key in row) {
            $opt.attr("data-".concat(_key.toLowerCase()), row[_key]);
          }
        }
      }
    }, {
      key: "appendRowIfDoesNotExist",
      value: function appendRowIfDoesNotExist(row) {
        var appendAtTop = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var selectedValue = this.$select.val();
        var value = row[this.valColumn];
        if (this.$tableBody.find("[data-select-id=\"".concat(value, "\"]")).length == 0) {
          var $tr = $$k("<tr>").attr("data-select-id", value);
          for (var key in row) {
            if (this.skippedColumn.includes(key)) continue;
            $tr.append("<td>".concat(row[key], "</td>"));
          }
          if (selectedValue == value) {
            $tr.addClass("table-primary");
          }
          if (appendAtTop) this.$tableBody.prepend($tr);else this.$tableBody.append($tr);
        }
      }
    }, {
      key: "getDependentFields",
      value: function getDependentFields() {
        var result = {};
        this.options.dependsOn.forEach(function (dep) {
          var $depField = $$k(dep.selector);
          if ($depField.length) {
            result[dep.param] = $depField.val();
          }
        });
        return result;
      }
    }, {
      key: "setupMutationObservers",
      value: function setupMutationObservers() {
        var _this6 = this;
        this.observers = [];
        var attributeObserver = new MutationObserver(function (mutations) {
          mutations.forEach(function (mutation) {
            if (mutation.type === "attributes" && mutation.attributeName === "value") {
              var selectedVal = _this6.$select.attr("value");
              if (selectedVal !== _this6.$select.data("last-val")) {
                _this6.$select.data("last-val", selectedVal);
                if (_this6.initComplete) {
                  _this6.selectRow(selectedVal);
                } else {
                  _this6.waitForInit(function () {
                    _this6.selectRow(selectedVal);
                  });
                }
              }
            } else if (mutation.type === "attributes" && (mutation.attributeName === "disabled" || mutation.attributeName == "readonly")) {
              if (_this6.$select.is(":disabled") || _this6.$select.is("[readonly]")) {
                _this6.disableSelect();
              } else {
                _this6.enableSelect();
              }
            }
          });
        });
        attributeObserver.observe(this.$select[0], {
          attributes: true,
          attributeFilter: ["value", "disabled", "readonly"]
        });
        this.observers.push(attributeObserver);

        // Observe option changes only in client-side mode
        if (!this.isServerSide) {
          var selectOptionsObserver = new MutationObserver(function (mutations) {
            var optionChanged = false;
            mutations.forEach(function (mutation) {
              if (mutation.type === "childList" && mutation.addedNodes.length > 0) {
                optionChanged = true;
              }
            });
            if (optionChanged) {
              _this6.refresh();
            }
          });
          selectOptionsObserver.observe(this.$select[0], {
            childList: true,
            subtree: false // only direct children (i.e., <option>)
          });
          this.observers.push(selectOptionsObserver);
        }
      }
    }, {
      key: "highlightRow",
      value: function highlightRow(val) {
        var scrollToView = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
        this.$table.find("tbody tr").removeClass("table-primary");
        var $row = this.$table.find("[data-select-id=\"".concat(val, "\"]"));
        if ($row.length) {
          $row.addClass("table-primary");
          if (this.$wrapper.hasClass("a-select-open") && scrollToView) {
            scrollIntoView($row, this.$tableContainer);
          }
        }
        this.$tableBody.find("tbody tr").removeClass("table-warning");
      }
    }, {
      key: "showSelectedValue",
      value: function showSelectedValue(val, triggerChange) {
        if (this.isMultiple) {
          var currentValues = this.$select.val();
          if (currentValues.includes(val)) ; else {
            currentValues.push(val);
            originalVal.call(this.$select, currentValues);
          }
        } else {
          originalVal.call(this.$select, val);
        }
        if (triggerChange) {
          this.$select.trigger("change");
        }
        this.updateDisplayContent();
        this.highlightSelectedRows(val);
      }
    }, {
      key: "highlightSelectedRows",
      value: function highlightSelectedRows() {
        var _this7 = this;
        var scrollToView = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
        this.$table.find("tbody tr").removeClass("table-primary");
        if (this.isMultiple) {
          var selectedValues = this.$select.val() || [];
          selectedValues.forEach(function (val) {
            var $row = _this7.$table.find("[data-select-id=\"".concat(val, "\"]"));
            if ($row.length) {
              $row.addClass("table-primary");
            }
          });
        } else {
          var $row = this.$table.find("[data-select-id=\"".concat(this.$select.val(), "\"]"));
          if ($row.length) {
            $row.addClass("table-primary");
            if (this.$wrapper.hasClass("a-select-open") && scrollToView) {
              scrollIntoView($row, this.$tableContainer);
            }
          }
        }
        this.$tableBody.find("tbody tr").removeClass("table-warning");
      }
    }, {
      key: "selectRow",
      value: function selectRow(val) {
        var _this8 = this;
        var triggerChange = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
        var $opt = this.$select.find("option[value=\"".concat(val, "\"]"));
        if ($opt.length && (!this.options.ajaxUrl || $opt.attr("data-new"))) {
          this.showSelectedValue(val, triggerChange);
          this.updateClearButtonVisibility();
        } else if (this.options.ajaxUrl) {
          if (!val) {
            this.showSelectedValue(val, triggerChange);
            this.updateClearButtonVisibility();
            return;
          } else {
            var $selectedRow = this.$tableBody.find("[data-select-id=\"".concat(val, "\"]"));
            if ($selectedRow.length && $opt.length) {
              this.showSelectedValue(val, triggerChange);
              this.updateClearButtonVisibility();
            } else {
              if ($opt.length && $opt.text()) {
                this.$display.text($opt.text());
                this.updateClearButtonVisibility();
              }
              $$k.ajax({
                url: this.options.ajaxUrl,
                type: "POST",
                data: _objectSpread2({
                  start: -1,
                  length: -1,
                  search: "",
                  selectedValue: val,
                  valColumn: this.valColumn,
                  onlyFetchSelectedRow: true,
                  initialLoad: false,
                  headers: this.options.headers,
                  dependsOn: _objectSpread2({}, this.getDependentFields())
                }, this.options.getAjaxDefaultPayload()),
                success: function success(response) {
                  var row = response.selectedRow;
                  if (row) {
                    _this8.upsertSelectOption(row);
                    _this8.appendRowIfDoesNotExist(row, true);
                    _this8.showSelectedValue(val, triggerChange);
                    _this8.updateClearButtonVisibility();
                  }
                },
                error: function error(xhr, status, _error2) {
                  _this8.$tableBody.append('<tr class="table-danger aselect-ignore"><td colspan="' + (headerLength || 1) + '">Error loading data</td></tr>');
                }
              });
            }
          }
        }
      }
    }, {
      key: "updateClearButtonVisibility",
      value: function updateClearButtonVisibility() {
        if (this.options.showClearButton) {
          var selectedVal = this.$select.val();
          if (this.isMultiple) {
            var selectedValues = selectedVal || [];
            if (selectedValues.length > 0) {
              this.$clearButton.show();
            } else {
              this.$clearButton.hide();
            }
          } else {
            if (selectedVal) {
              this.$clearButton.show();
            } else {
              this.$clearButton.hide();
            }
          }
        }
      }
    }, {
      key: "buildTableSchema",
      value: function buildTableSchema() {
        var _this9 = this;
        return new Promise(function (resolve, reject) {
          var data = _objectSpread2({
            start: 0,
            length: 0,
            search: "",
            initialLoad: true,
            onlyFetchSelectedRow: false,
            dependsOn: _objectSpread2({}, _this9.getDependentFields())
          }, _this9.options.getAjaxDefaultPayload());
          $$k.ajax({
            url: _this9.options.ajaxUrl,
            type: "POST",
            data: data,
            success: function success(response) {
              _this9.bitImplementPagination = response.bitImplementPagination;
              _this9.skippedColumn = (response.vcSkippedColumns || "").split(",").map(function (x) {
                return x.trim();
              }).filter(function (x) {
                return x;
              });
              _this9.textColumn = response.vcTextColumn;
              _this9.valColumn = response.vcValColumn;
              var rows = response.data || [];
              _this9.options.headers = Object.keys(rows[0]);
              var visibleHeaders = _this9.options.headers.filter(function (key) {
                return !_this9.skippedColumn.includes(key);
              });
              if (visibleHeaders.length > 1) {
                var _iterator2 = _createForOfIteratorHelper(visibleHeaders),
                  _step2;
                try {
                  for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                    var key = _step2.value;
                    var label = convertCamelNotationToSentence(key);
                    _this9.$tableHeadRow.append("<th>".concat(label, "</th>"));
                  }
                } catch (err) {
                  _iterator2.e(err);
                } finally {
                  _iterator2.f();
                }
              }
              if (_this9.bitImplementPagination) {
                _this9.$tableContainer.on("scroll", function () {
                  if (!_this9.hasMorePages || _this9.isLoading) return;
                  var scrollTop = _this9.$tableContainer.scrollTop();
                  var scrollHeight = _this9.$tableContainer[0].scrollHeight;
                  var containerHeight = _this9.$tableContainer.innerHeight();

                  // Load more when near bottom
                  if (scrollTop + containerHeight >= scrollHeight - 50) {
                    _this9.loadServerData();
                  }
                });
              }
              resolve([]);
            },
            error: function error() {
              _this9.$tableBody.html("<tr><td>Error loading data</td></tr>");
              resolve([]);
            }
          });
        });
      }
    }, {
      key: "checkDependentFields",
      value: function checkDependentFields() {
        if (!this.options.dependsOn || this.options.dependsOn.length === 0) return true;
        var allValid = true;
        var missingFields = [];
        this.options.dependsOn.forEach(function (dep) {
          var $depField = $$k(dep.selector);
          if ($depField.length && (!$depField.val() || $depField.val() === "")) {
            allValid = false;
            var label = $depField.data("label");
            missingFields.push(label);
          }
        });
        if (allValid) {
          if (this.$wrapper.hasClass("a-select-disabled")) {
            this.enableSelect();
          }
          hideTooltip(this.$wrapper);
        } else {
          if (!this.$wrapper.hasClass("a-select-disabled")) {
            this.disableSelect();
          }
          showTooltip(this.$wrapper, "Please select ".concat(missingFields.join(" and "), " first"));
        }
        return allValid;
      }
    }, {
      key: "updateSelectedValueIfNeedOnSearch",
      value: function updateSelectedValueIfNeedOnSearch(self) {
        if (!self.isMultiple) {
          var selectedVal = this.$select.val();
          var $selectedRow = this.$tableBody.find("tr[data-select-id=\"".concat(selectedVal, "\"]:visible"));
          if (!$selectedRow.length) {
            // Selected row is not visible, select the topmost visible row
            var $firstVisible = this.$tableBody.find("tr:visible").not(".aselect-ignore").first();
            if ($firstVisible.length) {
              var newVal = $firstVisible.attr("data-select-id");
              if (newVal) {
                this.selectRow(newVal);
              }
            }
          }
        }
      }
    }, {
      key: "getUniqueValuesToExclude",
      value: function getUniqueValuesToExclude() {
        var _this0 = this;
        var excludedValues = [];
        this.uniqueSelectors.forEach(function (selector) {
          $$k(selector).not(_this0.$select).each(function () {
            var value = $$k(this).val();
            if (value) {
              excludedValues.push(value);
            }
          });
        });
        return excludedValues;
      }
    }, {
      key: "excludeRows",
      value: function excludeRows() {
        var _this1 = this;
        if (this.uniqueSelectors.length > 0) {
          var excludedValues = this.getUniqueValuesToExclude();
          this.$tableBody.find('tr[data-select-id]').each(function (index, row) {
            var $row = $$k(row);
            var rowValue = $row.attr('data-select-id');
            if (excludedValues.includes(rowValue)) {
              $row.addClass('a-select-row-exclude');
              if (_this1.options.hideExcluded) {
                $row.addClass('d-none');
              }
            } else {
              $row.removeClass('a-select-row-exclude');
              if (_this1.options.hideExcluded) {
                $row.removeClass('d-none');
              }
            }
          });
        }
      }
    }, {
      key: "deselectValue",
      value: function deselectValue(value) {
        if (this.isMultiple) {
          var currentValues = this.$select.val() || [];
          var newValues = currentValues.filter(function (val) {
            return val != value;
          });
          originalVal.call(this.$select, newValues);
          this.$select.trigger('change');
          this.updateDisplayContent();
          this.highlightSelectedRows();
          this.updateClearButtonVisibility();
        }
      }
    }, {
      key: "updateDisplayContent",
      value: function updateDisplayContent() {
        var _this10 = this;
        if (this.isMultiple) {
          this.$select.val() || [];
          var selectedOptions = this.$select.find('option:selected');
          if (selectedOptions.length === 0) {
            this.$display.text(this.options.placeHolder);
            this.$display.removeClass('a-select-multiple-display');
          } else {
            this.$display.addClass('a-select-multiple-display');

            // Create chips for selected items
            var chips = selectedOptions.map(function (index, option) {
              var $option = $$k(option);
              return "\n                        <span class=\"a-select-chip\">\n                            ".concat($option.text(), "\n                            <button type=\"button\" class=\"a-select-chip-remove\" data-value=\"").concat($option.val(), "\">\n                                <i class=\"bi bi-x\"></i>\n                            </button>\n                        </span>\n                    ");
            }).get().join('');
            this.$display.html(chips);

            // Add click event for chip remove buttons
            this.$display.find('.a-select-chip-remove').on('click', function (e) {
              e.stopPropagation();
              var value = $$k(e.currentTarget).data('value');
              _this10.deselectValue(value);
            });
          }
        } else {
          var selectedVal = this.$select.val();
          var $selectedOption = this.$select.find("option[value=\"".concat(selectedVal, "\"]"));
          var displayText = $selectedOption.length ? $selectedOption.text() : this.options.placeHolder;
          this.$display.text(displayText);
        }
      }
    }, {
      key: "cleanUp",
      value: function cleanUp() {
        this.$wrapper.find('*').off('.aSelect'); // Remove all plugin events
        $$k(document).off('.aSelect');
        this.$wrapper.tooltip('dispose');
        var _iterator3 = _createForOfIteratorHelper(this.observers),
          _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var observer = _step3.value;
            observer.disconnect();
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
        this.$select.find("option[data-a]").remove();
        this.$select.removeClass('a-select-hidden').css('display', '').removeData(dataAttrs.instance);
        this.$wrapper.remove();
      }
    }, {
      key: "destroy",
      value: function destroy() {
        this.cleanUp();
      }
    }, {
      key: "refresh",
      value: function refresh() {
        // Destroy existing instance
        this.cleanUp();
        this.$select.aSelect(this.options);
      }
    }]);
  }();
  window.ASelect = ASelect;

  return ASelect;

}));
