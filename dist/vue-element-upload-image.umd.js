(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vue-element-upload-image"] = factory();
	else
		root["vue-element-upload-image"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 9662:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isCallable = __webpack_require__(614);
var tryToString = __webpack_require__(6330);

var $TypeError = TypeError;

// `Assert: IsCallable(argument) is true`
module.exports = function (argument) {
  if (isCallable(argument)) return argument;
  throw $TypeError(tryToString(argument) + ' is not a function');
};


/***/ }),

/***/ 6077:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isCallable = __webpack_require__(614);

var $String = String;
var $TypeError = TypeError;

module.exports = function (argument) {
  if (typeof argument == 'object' || isCallable(argument)) return argument;
  throw $TypeError("Can't set " + $String(argument) + ' as a prototype');
};


/***/ }),

/***/ 1223:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(5112);
var create = __webpack_require__(30);
var defineProperty = (__webpack_require__(3070).f);

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  defineProperty(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ 5787:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isPrototypeOf = __webpack_require__(7976);

var $TypeError = TypeError;

module.exports = function (it, Prototype) {
  if (isPrototypeOf(Prototype, it)) return it;
  throw $TypeError('Incorrect invocation');
};


/***/ }),

/***/ 9670:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isObject = __webpack_require__(111);

var $String = String;
var $TypeError = TypeError;

// `Assert: Type(argument) is Object`
module.exports = function (argument) {
  if (isObject(argument)) return argument;
  throw $TypeError($String(argument) + ' is not an object');
};


/***/ }),

/***/ 4019:
/***/ (function(module) {

// eslint-disable-next-line es-x/no-typed-arrays -- safe
module.exports = typeof ArrayBuffer != 'undefined' && typeof DataView != 'undefined';


/***/ }),

/***/ 260:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var NATIVE_ARRAY_BUFFER = __webpack_require__(4019);
var DESCRIPTORS = __webpack_require__(9781);
var global = __webpack_require__(7854);
var isCallable = __webpack_require__(614);
var isObject = __webpack_require__(111);
var hasOwn = __webpack_require__(2597);
var classof = __webpack_require__(648);
var tryToString = __webpack_require__(6330);
var createNonEnumerableProperty = __webpack_require__(8880);
var defineBuiltIn = __webpack_require__(8052);
var defineProperty = (__webpack_require__(3070).f);
var isPrototypeOf = __webpack_require__(7976);
var getPrototypeOf = __webpack_require__(9518);
var setPrototypeOf = __webpack_require__(7674);
var wellKnownSymbol = __webpack_require__(5112);
var uid = __webpack_require__(9711);
var InternalStateModule = __webpack_require__(9909);

var enforceInternalState = InternalStateModule.enforce;
var getInternalState = InternalStateModule.get;
var Int8Array = global.Int8Array;
var Int8ArrayPrototype = Int8Array && Int8Array.prototype;
var Uint8ClampedArray = global.Uint8ClampedArray;
var Uint8ClampedArrayPrototype = Uint8ClampedArray && Uint8ClampedArray.prototype;
var TypedArray = Int8Array && getPrototypeOf(Int8Array);
var TypedArrayPrototype = Int8ArrayPrototype && getPrototypeOf(Int8ArrayPrototype);
var ObjectPrototype = Object.prototype;
var TypeError = global.TypeError;

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var TYPED_ARRAY_TAG = uid('TYPED_ARRAY_TAG');
var TYPED_ARRAY_CONSTRUCTOR = 'TypedArrayConstructor';
// Fixing native typed arrays in Opera Presto crashes the browser, see #595
var NATIVE_ARRAY_BUFFER_VIEWS = NATIVE_ARRAY_BUFFER && !!setPrototypeOf && classof(global.opera) !== 'Opera';
var TYPED_ARRAY_TAG_REQUIRED = false;
var NAME, Constructor, Prototype;

var TypedArrayConstructorsList = {
  Int8Array: 1,
  Uint8Array: 1,
  Uint8ClampedArray: 1,
  Int16Array: 2,
  Uint16Array: 2,
  Int32Array: 4,
  Uint32Array: 4,
  Float32Array: 4,
  Float64Array: 8
};

var BigIntArrayConstructorsList = {
  BigInt64Array: 8,
  BigUint64Array: 8
};

var isView = function isView(it) {
  if (!isObject(it)) return false;
  var klass = classof(it);
  return klass === 'DataView'
    || hasOwn(TypedArrayConstructorsList, klass)
    || hasOwn(BigIntArrayConstructorsList, klass);
};

var getTypedArrayConstructor = function (it) {
  var proto = getPrototypeOf(it);
  if (!isObject(proto)) return;
  var state = getInternalState(proto);
  return (state && hasOwn(state, TYPED_ARRAY_CONSTRUCTOR)) ? state[TYPED_ARRAY_CONSTRUCTOR] : getTypedArrayConstructor(proto);
};

var isTypedArray = function (it) {
  if (!isObject(it)) return false;
  var klass = classof(it);
  return hasOwn(TypedArrayConstructorsList, klass)
    || hasOwn(BigIntArrayConstructorsList, klass);
};

var aTypedArray = function (it) {
  if (isTypedArray(it)) return it;
  throw TypeError('Target is not a typed array');
};

var aTypedArrayConstructor = function (C) {
  if (isCallable(C) && (!setPrototypeOf || isPrototypeOf(TypedArray, C))) return C;
  throw TypeError(tryToString(C) + ' is not a typed array constructor');
};

var exportTypedArrayMethod = function (KEY, property, forced, options) {
  if (!DESCRIPTORS) return;
  if (forced) for (var ARRAY in TypedArrayConstructorsList) {
    var TypedArrayConstructor = global[ARRAY];
    if (TypedArrayConstructor && hasOwn(TypedArrayConstructor.prototype, KEY)) try {
      delete TypedArrayConstructor.prototype[KEY];
    } catch (error) {
      // old WebKit bug - some methods are non-configurable
      try {
        TypedArrayConstructor.prototype[KEY] = property;
      } catch (error2) { /* empty */ }
    }
  }
  if (!TypedArrayPrototype[KEY] || forced) {
    defineBuiltIn(TypedArrayPrototype, KEY, forced ? property
      : NATIVE_ARRAY_BUFFER_VIEWS && Int8ArrayPrototype[KEY] || property, options);
  }
};

var exportTypedArrayStaticMethod = function (KEY, property, forced) {
  var ARRAY, TypedArrayConstructor;
  if (!DESCRIPTORS) return;
  if (setPrototypeOf) {
    if (forced) for (ARRAY in TypedArrayConstructorsList) {
      TypedArrayConstructor = global[ARRAY];
      if (TypedArrayConstructor && hasOwn(TypedArrayConstructor, KEY)) try {
        delete TypedArrayConstructor[KEY];
      } catch (error) { /* empty */ }
    }
    if (!TypedArray[KEY] || forced) {
      // V8 ~ Chrome 49-50 `%TypedArray%` methods are non-writable non-configurable
      try {
        return defineBuiltIn(TypedArray, KEY, forced ? property : NATIVE_ARRAY_BUFFER_VIEWS && TypedArray[KEY] || property);
      } catch (error) { /* empty */ }
    } else return;
  }
  for (ARRAY in TypedArrayConstructorsList) {
    TypedArrayConstructor = global[ARRAY];
    if (TypedArrayConstructor && (!TypedArrayConstructor[KEY] || forced)) {
      defineBuiltIn(TypedArrayConstructor, KEY, property);
    }
  }
};

for (NAME in TypedArrayConstructorsList) {
  Constructor = global[NAME];
  Prototype = Constructor && Constructor.prototype;
  if (Prototype) enforceInternalState(Prototype)[TYPED_ARRAY_CONSTRUCTOR] = Constructor;
  else NATIVE_ARRAY_BUFFER_VIEWS = false;
}

for (NAME in BigIntArrayConstructorsList) {
  Constructor = global[NAME];
  Prototype = Constructor && Constructor.prototype;
  if (Prototype) enforceInternalState(Prototype)[TYPED_ARRAY_CONSTRUCTOR] = Constructor;
}

// WebKit bug - typed arrays constructors prototype is Object.prototype
if (!NATIVE_ARRAY_BUFFER_VIEWS || !isCallable(TypedArray) || TypedArray === Function.prototype) {
  // eslint-disable-next-line no-shadow -- safe
  TypedArray = function TypedArray() {
    throw TypeError('Incorrect invocation');
  };
  if (NATIVE_ARRAY_BUFFER_VIEWS) for (NAME in TypedArrayConstructorsList) {
    if (global[NAME]) setPrototypeOf(global[NAME], TypedArray);
  }
}

if (!NATIVE_ARRAY_BUFFER_VIEWS || !TypedArrayPrototype || TypedArrayPrototype === ObjectPrototype) {
  TypedArrayPrototype = TypedArray.prototype;
  if (NATIVE_ARRAY_BUFFER_VIEWS) for (NAME in TypedArrayConstructorsList) {
    if (global[NAME]) setPrototypeOf(global[NAME].prototype, TypedArrayPrototype);
  }
}

// WebKit bug - one more object in Uint8ClampedArray prototype chain
if (NATIVE_ARRAY_BUFFER_VIEWS && getPrototypeOf(Uint8ClampedArrayPrototype) !== TypedArrayPrototype) {
  setPrototypeOf(Uint8ClampedArrayPrototype, TypedArrayPrototype);
}

if (DESCRIPTORS && !hasOwn(TypedArrayPrototype, TO_STRING_TAG)) {
  TYPED_ARRAY_TAG_REQUIRED = true;
  defineProperty(TypedArrayPrototype, TO_STRING_TAG, { get: function () {
    return isObject(this) ? this[TYPED_ARRAY_TAG] : undefined;
  } });
  for (NAME in TypedArrayConstructorsList) if (global[NAME]) {
    createNonEnumerableProperty(global[NAME], TYPED_ARRAY_TAG, NAME);
  }
}

module.exports = {
  NATIVE_ARRAY_BUFFER_VIEWS: NATIVE_ARRAY_BUFFER_VIEWS,
  TYPED_ARRAY_TAG: TYPED_ARRAY_TAG_REQUIRED && TYPED_ARRAY_TAG,
  aTypedArray: aTypedArray,
  aTypedArrayConstructor: aTypedArrayConstructor,
  exportTypedArrayMethod: exportTypedArrayMethod,
  exportTypedArrayStaticMethod: exportTypedArrayStaticMethod,
  getTypedArrayConstructor: getTypedArrayConstructor,
  isView: isView,
  isTypedArray: isTypedArray,
  TypedArray: TypedArray,
  TypedArrayPrototype: TypedArrayPrototype
};


/***/ }),

/***/ 1318:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(5656);
var toAbsoluteIndex = __webpack_require__(1400);
var lengthOfArrayLike = __webpack_require__(6244);

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = lengthOfArrayLike(O);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ 9671:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var bind = __webpack_require__(9974);
var IndexedObject = __webpack_require__(8361);
var toObject = __webpack_require__(7908);
var lengthOfArrayLike = __webpack_require__(6244);

// `Array.prototype.{ findLast, findLastIndex }` methods implementation
var createMethod = function (TYPE) {
  var IS_FIND_LAST_INDEX = TYPE == 1;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that);
    var index = lengthOfArrayLike(self);
    var value, result;
    while (index-- > 0) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (result) switch (TYPE) {
        case 0: return value; // findLast
        case 1: return index; // findLastIndex
      }
    }
    return IS_FIND_LAST_INDEX ? -1 : undefined;
  };
};

module.exports = {
  // `Array.prototype.findLast` method
  // https://github.com/tc39/proposal-array-find-from-last
  findLast: createMethod(0),
  // `Array.prototype.findLastIndex` method
  // https://github.com/tc39/proposal-array-find-from-last
  findLastIndex: createMethod(1)
};


/***/ }),

/***/ 4326:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(1702);

var toString = uncurryThis({}.toString);
var stringSlice = uncurryThis(''.slice);

module.exports = function (it) {
  return stringSlice(toString(it), 8, -1);
};


/***/ }),

/***/ 648:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__(1694);
var isCallable = __webpack_require__(614);
var classofRaw = __webpack_require__(4326);
var wellKnownSymbol = __webpack_require__(5112);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var $Object = Object;

// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && isCallable(O.callee) ? 'Arguments' : result;
};


/***/ }),

/***/ 7741:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(1702);

var $Error = Error;
var replace = uncurryThis(''.replace);

var TEST = (function (arg) { return String($Error(arg).stack); })('zxcasd');
var V8_OR_CHAKRA_STACK_ENTRY = /\n\s*at [^:]*:[^\n]*/;
var IS_V8_OR_CHAKRA_STACK = V8_OR_CHAKRA_STACK_ENTRY.test(TEST);

module.exports = function (stack, dropEntries) {
  if (IS_V8_OR_CHAKRA_STACK && typeof stack == 'string' && !$Error.prepareStackTrace) {
    while (dropEntries--) stack = replace(stack, V8_OR_CHAKRA_STACK_ENTRY, '');
  } return stack;
};


/***/ }),

/***/ 9920:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var hasOwn = __webpack_require__(2597);
var ownKeys = __webpack_require__(3887);
var getOwnPropertyDescriptorModule = __webpack_require__(1236);
var definePropertyModule = __webpack_require__(3070);

module.exports = function (target, source, exceptions) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};


/***/ }),

/***/ 8544:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__(7293);

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  // eslint-disable-next-line es-x/no-object-getprototypeof -- required for testing
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),

/***/ 8880:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(9781);
var definePropertyModule = __webpack_require__(3070);
var createPropertyDescriptor = __webpack_require__(9114);

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ 9114:
/***/ (function(module) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ 8052:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isCallable = __webpack_require__(614);
var definePropertyModule = __webpack_require__(3070);
var makeBuiltIn = __webpack_require__(6339);
var defineGlobalProperty = __webpack_require__(3072);

module.exports = function (O, key, value, options) {
  if (!options) options = {};
  var simple = options.enumerable;
  var name = options.name !== undefined ? options.name : key;
  if (isCallable(value)) makeBuiltIn(value, name, options);
  if (options.global) {
    if (simple) O[key] = value;
    else defineGlobalProperty(key, value);
  } else {
    try {
      if (!options.unsafe) delete O[key];
      else if (O[key]) simple = true;
    } catch (error) { /* empty */ }
    if (simple) O[key] = value;
    else definePropertyModule.f(O, key, {
      value: value,
      enumerable: false,
      configurable: !options.nonConfigurable,
      writable: !options.nonWritable
    });
  } return O;
};


/***/ }),

/***/ 3072:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);

// eslint-disable-next-line es-x/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;

module.exports = function (key, value) {
  try {
    defineProperty(global, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ 9781:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__(7293);

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  // eslint-disable-next-line es-x/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),

/***/ 317:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);
var isObject = __webpack_require__(111);

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ 3678:
/***/ (function(module) {

module.exports = {
  IndexSizeError: { s: 'INDEX_SIZE_ERR', c: 1, m: 1 },
  DOMStringSizeError: { s: 'DOMSTRING_SIZE_ERR', c: 2, m: 0 },
  HierarchyRequestError: { s: 'HIERARCHY_REQUEST_ERR', c: 3, m: 1 },
  WrongDocumentError: { s: 'WRONG_DOCUMENT_ERR', c: 4, m: 1 },
  InvalidCharacterError: { s: 'INVALID_CHARACTER_ERR', c: 5, m: 1 },
  NoDataAllowedError: { s: 'NO_DATA_ALLOWED_ERR', c: 6, m: 0 },
  NoModificationAllowedError: { s: 'NO_MODIFICATION_ALLOWED_ERR', c: 7, m: 1 },
  NotFoundError: { s: 'NOT_FOUND_ERR', c: 8, m: 1 },
  NotSupportedError: { s: 'NOT_SUPPORTED_ERR', c: 9, m: 1 },
  InUseAttributeError: { s: 'INUSE_ATTRIBUTE_ERR', c: 10, m: 1 },
  InvalidStateError: { s: 'INVALID_STATE_ERR', c: 11, m: 1 },
  SyntaxError: { s: 'SYNTAX_ERR', c: 12, m: 1 },
  InvalidModificationError: { s: 'INVALID_MODIFICATION_ERR', c: 13, m: 1 },
  NamespaceError: { s: 'NAMESPACE_ERR', c: 14, m: 1 },
  InvalidAccessError: { s: 'INVALID_ACCESS_ERR', c: 15, m: 1 },
  ValidationError: { s: 'VALIDATION_ERR', c: 16, m: 0 },
  TypeMismatchError: { s: 'TYPE_MISMATCH_ERR', c: 17, m: 1 },
  SecurityError: { s: 'SECURITY_ERR', c: 18, m: 1 },
  NetworkError: { s: 'NETWORK_ERR', c: 19, m: 1 },
  AbortError: { s: 'ABORT_ERR', c: 20, m: 1 },
  URLMismatchError: { s: 'URL_MISMATCH_ERR', c: 21, m: 1 },
  QuotaExceededError: { s: 'QUOTA_EXCEEDED_ERR', c: 22, m: 1 },
  TimeoutError: { s: 'TIMEOUT_ERR', c: 23, m: 1 },
  InvalidNodeTypeError: { s: 'INVALID_NODE_TYPE_ERR', c: 24, m: 1 },
  DataCloneError: { s: 'DATA_CLONE_ERR', c: 25, m: 1 }
};


/***/ }),

/***/ 8113:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(5005);

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),

/***/ 7392:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);
var userAgent = __webpack_require__(8113);

var process = global.process;
var Deno = global.Deno;
var versions = process && process.versions || Deno && Deno.version;
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
if (!version && userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = +match[1];
  }
}

module.exports = version;


/***/ }),

/***/ 748:
/***/ (function(module) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ 2109:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);
var getOwnPropertyDescriptor = (__webpack_require__(1236).f);
var createNonEnumerableProperty = __webpack_require__(8880);
var defineBuiltIn = __webpack_require__(8052);
var defineGlobalProperty = __webpack_require__(3072);
var copyConstructorProperties = __webpack_require__(9920);
var isForced = __webpack_require__(4705);

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
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || defineGlobalProperty(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.dontCallGetSet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty == typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    defineBuiltIn(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ 7293:
/***/ (function(module) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ 9974:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(1702);
var aCallable = __webpack_require__(9662);
var NATIVE_BIND = __webpack_require__(4374);

var bind = uncurryThis(uncurryThis.bind);

// optional / simple context binding
module.exports = function (fn, that) {
  aCallable(fn);
  return that === undefined ? fn : NATIVE_BIND ? bind(fn, that) : function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ 4374:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__(7293);

module.exports = !fails(function () {
  // eslint-disable-next-line es-x/no-function-prototype-bind -- safe
  var test = (function () { /* empty */ }).bind();
  // eslint-disable-next-line no-prototype-builtins -- safe
  return typeof test != 'function' || test.hasOwnProperty('prototype');
});


/***/ }),

/***/ 6916:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var NATIVE_BIND = __webpack_require__(4374);

var call = Function.prototype.call;

module.exports = NATIVE_BIND ? call.bind(call) : function () {
  return call.apply(call, arguments);
};


/***/ }),

/***/ 6530:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(9781);
var hasOwn = __webpack_require__(2597);

var FunctionPrototype = Function.prototype;
// eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;

var EXISTS = hasOwn(FunctionPrototype, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS || (DESCRIPTORS && getDescriptor(FunctionPrototype, 'name').configurable));

module.exports = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};


/***/ }),

/***/ 1702:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var NATIVE_BIND = __webpack_require__(4374);

var FunctionPrototype = Function.prototype;
var bind = FunctionPrototype.bind;
var call = FunctionPrototype.call;
var uncurryThis = NATIVE_BIND && bind.bind(call, call);

module.exports = NATIVE_BIND ? function (fn) {
  return fn && uncurryThis(fn);
} : function (fn) {
  return fn && function () {
    return call.apply(fn, arguments);
  };
};


/***/ }),

/***/ 5005:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);
var isCallable = __webpack_require__(614);

var aFunction = function (argument) {
  return isCallable(argument) ? argument : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(global[namespace]) : global[namespace] && global[namespace][method];
};


/***/ }),

/***/ 8173:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var aCallable = __webpack_require__(9662);

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
module.exports = function (V, P) {
  var func = V[P];
  return func == null ? undefined : aCallable(func);
};


/***/ }),

/***/ 7854:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line es-x/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof __webpack_require__.g == 'object' && __webpack_require__.g) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();


/***/ }),

/***/ 2597:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(1702);
var toObject = __webpack_require__(7908);

var hasOwnProperty = uncurryThis({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es-x/no-object-hasown -- safe
module.exports = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject(it), key);
};


/***/ }),

/***/ 3501:
/***/ (function(module) {

module.exports = {};


/***/ }),

/***/ 490:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(5005);

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ 4664:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(9781);
var fails = __webpack_require__(7293);
var createElement = __webpack_require__(317);

// Thanks to IE8 for its funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es-x/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ 8361:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(1702);
var fails = __webpack_require__(7293);
var classof = __webpack_require__(4326);

var $Object = Object;
var split = uncurryThis(''.split);

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !$Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split(it, '') : $Object(it);
} : $Object;


/***/ }),

/***/ 9587:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isCallable = __webpack_require__(614);
var isObject = __webpack_require__(111);
var setPrototypeOf = __webpack_require__(7674);

// makes subclassing work correct for wrapped built-ins
module.exports = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    isCallable(NewTarget = dummy.constructor) &&
    NewTarget !== Wrapper &&
    isObject(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) setPrototypeOf($this, NewTargetPrototype);
  return $this;
};


/***/ }),

/***/ 2788:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(1702);
var isCallable = __webpack_require__(614);
var store = __webpack_require__(5465);

var functionToString = uncurryThis(Function.toString);

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable(store.inspectSource)) {
  store.inspectSource = function (it) {
    return functionToString(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ 9909:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__(8536);
var global = __webpack_require__(7854);
var uncurryThis = __webpack_require__(1702);
var isObject = __webpack_require__(111);
var createNonEnumerableProperty = __webpack_require__(8880);
var hasOwn = __webpack_require__(2597);
var shared = __webpack_require__(5465);
var sharedKey = __webpack_require__(6200);
var hiddenKeys = __webpack_require__(3501);

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError = global.TypeError;
var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap());
  var wmget = uncurryThis(store.get);
  var wmhas = uncurryThis(store.has);
  var wmset = uncurryThis(store.set);
  set = function (it, metadata) {
    if (wmhas(store, it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    wmset(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget(store, it) || {};
  };
  has = function (it) {
    return wmhas(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    if (hasOwn(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return hasOwn(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return hasOwn(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ 614:
/***/ (function(module) {

// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
module.exports = function (argument) {
  return typeof argument == 'function';
};


/***/ }),

/***/ 4705:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__(7293);
var isCallable = __webpack_require__(614);

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : isCallable(detection) ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ 111:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isCallable = __webpack_require__(614);

module.exports = function (it) {
  return typeof it == 'object' ? it !== null : isCallable(it);
};


/***/ }),

/***/ 1913:
/***/ (function(module) {

module.exports = false;


/***/ }),

/***/ 2190:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(5005);
var isCallable = __webpack_require__(614);
var isPrototypeOf = __webpack_require__(7976);
var USE_SYMBOL_AS_UID = __webpack_require__(3307);

var $Object = Object;

module.exports = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn('Symbol');
  return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
};


/***/ }),

/***/ 6244:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toLength = __webpack_require__(7466);

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
module.exports = function (obj) {
  return toLength(obj.length);
};


/***/ }),

/***/ 6339:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__(7293);
var isCallable = __webpack_require__(614);
var hasOwn = __webpack_require__(2597);
var DESCRIPTORS = __webpack_require__(9781);
var CONFIGURABLE_FUNCTION_NAME = (__webpack_require__(6530).CONFIGURABLE);
var inspectSource = __webpack_require__(2788);
var InternalStateModule = __webpack_require__(9909);

var enforceInternalState = InternalStateModule.enforce;
var getInternalState = InternalStateModule.get;
// eslint-disable-next-line es-x/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;

var CONFIGURABLE_LENGTH = DESCRIPTORS && !fails(function () {
  return defineProperty(function () { /* empty */ }, 'length', { value: 8 }).length !== 8;
});

var TEMPLATE = String(String).split('String');

var makeBuiltIn = module.exports = function (value, name, options) {
  if (String(name).slice(0, 7) === 'Symbol(') {
    name = '[' + String(name).replace(/^Symbol\(([^)]*)\)/, '$1') + ']';
  }
  if (options && options.getter) name = 'get ' + name;
  if (options && options.setter) name = 'set ' + name;
  if (!hasOwn(value, 'name') || (CONFIGURABLE_FUNCTION_NAME && value.name !== name)) {
    if (DESCRIPTORS) defineProperty(value, 'name', { value: name, configurable: true });
    else value.name = name;
  }
  if (CONFIGURABLE_LENGTH && options && hasOwn(options, 'arity') && value.length !== options.arity) {
    defineProperty(value, 'length', { value: options.arity });
  }
  try {
    if (options && hasOwn(options, 'constructor') && options.constructor) {
      if (DESCRIPTORS) defineProperty(value, 'prototype', { writable: false });
    // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
    } else if (value.prototype) value.prototype = undefined;
  } catch (error) { /* empty */ }
  var state = enforceInternalState(value);
  if (!hasOwn(state, 'source')) {
    state.source = TEMPLATE.join(typeof name == 'string' ? name : '');
  } return value;
};

// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString = makeBuiltIn(function toString() {
  return isCallable(this) && getInternalState(this).source || inspectSource(this);
}, 'toString');


/***/ }),

/***/ 4758:
/***/ (function(module) {

var ceil = Math.ceil;
var floor = Math.floor;

// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es-x/no-math-trunc -- safe
module.exports = Math.trunc || function trunc(x) {
  var n = +x;
  return (n > 0 ? floor : ceil)(n);
};


/***/ }),

/***/ 133:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* eslint-disable es-x/no-symbol -- required for testing */
var V8_VERSION = __webpack_require__(7392);
var fails = __webpack_require__(7293);

// eslint-disable-next-line es-x/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  var symbol = Symbol();
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});


/***/ }),

/***/ 8536:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);
var isCallable = __webpack_require__(614);
var inspectSource = __webpack_require__(2788);

var WeakMap = global.WeakMap;

module.exports = isCallable(WeakMap) && /native code/.test(inspectSource(WeakMap));


/***/ }),

/***/ 6277:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toString = __webpack_require__(1340);

module.exports = function (argument, $default) {
  return argument === undefined ? arguments.length < 2 ? '' : $default : toString(argument);
};


/***/ }),

/***/ 30:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* global ActiveXObject -- old IE, WSH */
var anObject = __webpack_require__(9670);
var definePropertiesModule = __webpack_require__(6048);
var enumBugKeys = __webpack_require__(748);
var hiddenKeys = __webpack_require__(3501);
var html = __webpack_require__(490);
var documentCreateElement = __webpack_require__(317);
var sharedKey = __webpack_require__(6200);

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
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

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
// eslint-disable-next-line es-x/no-object-create -- safe
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : definePropertiesModule.f(result, Properties);
};


/***/ }),

/***/ 6048:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(9781);
var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__(3353);
var definePropertyModule = __webpack_require__(3070);
var anObject = __webpack_require__(9670);
var toIndexedObject = __webpack_require__(5656);
var objectKeys = __webpack_require__(1956);

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es-x/no-object-defineproperties -- safe
exports.f = DESCRIPTORS && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var props = toIndexedObject(Properties);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], props[key]);
  return O;
};


/***/ }),

/***/ 3070:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(9781);
var IE8_DOM_DEFINE = __webpack_require__(4664);
var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__(3353);
var anObject = __webpack_require__(9670);
var toPropertyKey = __webpack_require__(4948);

var $TypeError = TypeError;
// eslint-disable-next-line es-x/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ENUMERABLE = 'enumerable';
var CONFIGURABLE = 'configurable';
var WRITABLE = 'writable';

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
    var current = $getOwnPropertyDescriptor(O, P);
    if (current && current[WRITABLE]) {
      O[P] = Attributes.value;
      Attributes = {
        configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
        writable: false
      };
    }
  } return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw $TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ 1236:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(9781);
var call = __webpack_require__(6916);
var propertyIsEnumerableModule = __webpack_require__(5296);
var createPropertyDescriptor = __webpack_require__(9114);
var toIndexedObject = __webpack_require__(5656);
var toPropertyKey = __webpack_require__(4948);
var hasOwn = __webpack_require__(2597);
var IE8_DOM_DEFINE = __webpack_require__(4664);

// eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPropertyKey(P);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
};


/***/ }),

/***/ 8006:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(6324);
var enumBugKeys = __webpack_require__(748);

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es-x/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ 5181:
/***/ (function(__unused_webpack_module, exports) {

// eslint-disable-next-line es-x/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ 9518:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var hasOwn = __webpack_require__(2597);
var isCallable = __webpack_require__(614);
var toObject = __webpack_require__(7908);
var sharedKey = __webpack_require__(6200);
var CORRECT_PROTOTYPE_GETTER = __webpack_require__(8544);

var IE_PROTO = sharedKey('IE_PROTO');
var $Object = Object;
var ObjectPrototype = $Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
// eslint-disable-next-line es-x/no-object-getprototypeof -- safe
module.exports = CORRECT_PROTOTYPE_GETTER ? $Object.getPrototypeOf : function (O) {
  var object = toObject(O);
  if (hasOwn(object, IE_PROTO)) return object[IE_PROTO];
  var constructor = object.constructor;
  if (isCallable(constructor) && object instanceof constructor) {
    return constructor.prototype;
  } return object instanceof $Object ? ObjectPrototype : null;
};


/***/ }),

/***/ 7976:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(1702);

module.exports = uncurryThis({}.isPrototypeOf);


/***/ }),

/***/ 6324:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(1702);
var hasOwn = __webpack_require__(2597);
var toIndexedObject = __webpack_require__(5656);
var indexOf = (__webpack_require__(1318).indexOf);
var hiddenKeys = __webpack_require__(3501);

var push = uncurryThis([].push);

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (hasOwn(O, key = names[i++])) {
    ~indexOf(result, key) || push(result, key);
  }
  return result;
};


/***/ }),

/***/ 1956:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(6324);
var enumBugKeys = __webpack_require__(748);

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es-x/no-object-keys -- safe
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ 5296:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;


/***/ }),

/***/ 7674:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* eslint-disable no-proto -- safe */
var uncurryThis = __webpack_require__(1702);
var anObject = __webpack_require__(9670);
var aPossiblePrototype = __webpack_require__(6077);

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es-x/no-object-setprototypeof -- safe
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    // eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
    setter = uncurryThis(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set);
    setter(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),

/***/ 2140:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var call = __webpack_require__(6916);
var isCallable = __webpack_require__(614);
var isObject = __webpack_require__(111);

var $TypeError = TypeError;

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
module.exports = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
  if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  throw $TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ 3887:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(5005);
var uncurryThis = __webpack_require__(1702);
var getOwnPropertyNamesModule = __webpack_require__(8006);
var getOwnPropertySymbolsModule = __webpack_require__(5181);
var anObject = __webpack_require__(9670);

var concat = uncurryThis([].concat);

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ 4488:
/***/ (function(module) {

var $TypeError = TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw $TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ 6200:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var shared = __webpack_require__(2309);
var uid = __webpack_require__(9711);

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ 5465:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);
var defineGlobalProperty = __webpack_require__(3072);

var SHARED = '__core-js_shared__';
var store = global[SHARED] || defineGlobalProperty(SHARED, {});

module.exports = store;


/***/ }),

/***/ 2309:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var IS_PURE = __webpack_require__(1913);
var store = __webpack_require__(5465);

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.23.3',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2014-2022 Denis Pushkarev (zloirock.ru)',
  license: 'https://github.com/zloirock/core-js/blob/v3.23.3/LICENSE',
  source: 'https://github.com/zloirock/core-js'
});


/***/ }),

/***/ 1400:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toIntegerOrInfinity = __webpack_require__(9303);

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toIntegerOrInfinity(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ 5656:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(8361);
var requireObjectCoercible = __webpack_require__(4488);

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ 9303:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var trunc = __webpack_require__(4758);

// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
module.exports = function (argument) {
  var number = +argument;
  // eslint-disable-next-line no-self-compare -- NaN check
  return number !== number || number === 0 ? 0 : trunc(number);
};


/***/ }),

/***/ 7466:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toIntegerOrInfinity = __webpack_require__(9303);

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toIntegerOrInfinity(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ 7908:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(4488);

var $Object = Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return $Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ 4590:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toPositiveInteger = __webpack_require__(3002);

var $RangeError = RangeError;

module.exports = function (it, BYTES) {
  var offset = toPositiveInteger(it);
  if (offset % BYTES) throw $RangeError('Wrong offset');
  return offset;
};


/***/ }),

/***/ 3002:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toIntegerOrInfinity = __webpack_require__(9303);

var $RangeError = RangeError;

module.exports = function (it) {
  var result = toIntegerOrInfinity(it);
  if (result < 0) throw $RangeError("The argument can't be less than 0");
  return result;
};


/***/ }),

/***/ 7593:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var call = __webpack_require__(6916);
var isObject = __webpack_require__(111);
var isSymbol = __webpack_require__(2190);
var getMethod = __webpack_require__(8173);
var ordinaryToPrimitive = __webpack_require__(2140);
var wellKnownSymbol = __webpack_require__(5112);

var $TypeError = TypeError;
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
module.exports = function (input, pref) {
  if (!isObject(input) || isSymbol(input)) return input;
  var exoticToPrim = getMethod(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call(exoticToPrim, input, pref);
    if (!isObject(result) || isSymbol(result)) return result;
    throw $TypeError("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};


/***/ }),

/***/ 4948:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toPrimitive = __webpack_require__(7593);
var isSymbol = __webpack_require__(2190);

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
module.exports = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : key + '';
};


/***/ }),

/***/ 1694:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(5112);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),

/***/ 1340:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var classof = __webpack_require__(648);

var $String = String;

module.exports = function (argument) {
  if (classof(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
  return $String(argument);
};


/***/ }),

/***/ 6330:
/***/ (function(module) {

var $String = String;

module.exports = function (argument) {
  try {
    return $String(argument);
  } catch (error) {
    return 'Object';
  }
};


/***/ }),

/***/ 9711:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(1702);

var id = 0;
var postfix = Math.random();
var toString = uncurryThis(1.0.toString);

module.exports = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36);
};


/***/ }),

/***/ 3307:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* eslint-disable es-x/no-symbol -- required for testing */
var NATIVE_SYMBOL = __webpack_require__(133);

module.exports = NATIVE_SYMBOL
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ 3353:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(9781);
var fails = __webpack_require__(7293);

// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
module.exports = DESCRIPTORS && fails(function () {
  // eslint-disable-next-line es-x/no-object-defineproperty -- required for testing
  return Object.defineProperty(function () { /* empty */ }, 'prototype', {
    value: 42,
    writable: false
  }).prototype != 42;
});


/***/ }),

/***/ 5112:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);
var shared = __webpack_require__(2309);
var hasOwn = __webpack_require__(2597);
var uid = __webpack_require__(9711);
var NATIVE_SYMBOL = __webpack_require__(133);
var USE_SYMBOL_AS_UID = __webpack_require__(3307);

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var symbolFor = Symbol && Symbol['for'];
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!hasOwn(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
    var description = 'Symbol.' + name;
    if (NATIVE_SYMBOL && hasOwn(Symbol, name)) {
      WellKnownSymbolsStore[name] = Symbol[name];
    } else if (USE_SYMBOL_AS_UID && symbolFor) {
      WellKnownSymbolsStore[name] = symbolFor(description);
    } else {
      WellKnownSymbolsStore[name] = createWellKnownSymbol(description);
    }
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ 6699:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2109);
var $includes = (__webpack_require__(1318).includes);
var fails = __webpack_require__(7293);
var addToUnscopables = __webpack_require__(1223);

// FF99+ bug
var BROKEN_ON_SPARSE = fails(function () {
  return !Array(1).includes();
});

// `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes
$({ target: 'Array', proto: true, forced: BROKEN_ON_SPARSE }, {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('includes');


/***/ }),

/***/ 8675:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__(260);
var lengthOfArrayLike = __webpack_require__(6244);
var toIntegerOrInfinity = __webpack_require__(9303);

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.at` method
// https://github.com/tc39/proposal-relative-indexing-method
exportTypedArrayMethod('at', function at(index) {
  var O = aTypedArray(this);
  var len = lengthOfArrayLike(O);
  var relativeIndex = toIntegerOrInfinity(index);
  var k = relativeIndex >= 0 ? relativeIndex : len + relativeIndex;
  return (k < 0 || k >= len) ? undefined : O[k];
});


/***/ }),

/***/ 2958:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__(260);
var $findLastIndex = (__webpack_require__(9671).findLastIndex);

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.findLastIndex` method
// https://github.com/tc39/proposal-array-find-from-last
exportTypedArrayMethod('findLastIndex', function findLastIndex(predicate /* , thisArg */) {
  return $findLastIndex(aTypedArray(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
});


/***/ }),

/***/ 3408:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__(260);
var $findLast = (__webpack_require__(9671).findLast);

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.findLast` method
// https://github.com/tc39/proposal-array-find-from-last
exportTypedArrayMethod('findLast', function findLast(predicate /* , thisArg */) {
  return $findLast(aTypedArray(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
});


/***/ }),

/***/ 3462:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(7854);
var call = __webpack_require__(6916);
var ArrayBufferViewCore = __webpack_require__(260);
var lengthOfArrayLike = __webpack_require__(6244);
var toOffset = __webpack_require__(4590);
var toIndexedObject = __webpack_require__(7908);
var fails = __webpack_require__(7293);

var RangeError = global.RangeError;
var Int8Array = global.Int8Array;
var Int8ArrayPrototype = Int8Array && Int8Array.prototype;
var $set = Int8ArrayPrototype && Int8ArrayPrototype.set;
var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

var WORKS_WITH_OBJECTS_AND_GEERIC_ON_TYPED_ARRAYS = !fails(function () {
  // eslint-disable-next-line es-x/no-typed-arrays -- required for testing
  var array = new Uint8ClampedArray(2);
  call($set, array, { length: 1, 0: 3 }, 1);
  return array[1] !== 3;
});

// https://bugs.chromium.org/p/v8/issues/detail?id=11294 and other
var TO_OBJECT_BUG = WORKS_WITH_OBJECTS_AND_GEERIC_ON_TYPED_ARRAYS && ArrayBufferViewCore.NATIVE_ARRAY_BUFFER_VIEWS && fails(function () {
  var array = new Int8Array(2);
  array.set(1);
  array.set('2', 1);
  return array[0] !== 0 || array[1] !== 2;
});

// `%TypedArray%.prototype.set` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.set
exportTypedArrayMethod('set', function set(arrayLike /* , offset */) {
  aTypedArray(this);
  var offset = toOffset(arguments.length > 1 ? arguments[1] : undefined, 1);
  var src = toIndexedObject(arrayLike);
  if (WORKS_WITH_OBJECTS_AND_GEERIC_ON_TYPED_ARRAYS) return call($set, this, src, offset);
  var length = this.length;
  var len = lengthOfArrayLike(src);
  var index = 0;
  if (len + offset > length) throw RangeError('Wrong length');
  while (index < len) this[offset + index] = src[index++];
}, !WORKS_WITH_OBJECTS_AND_GEERIC_ON_TYPED_ARRAYS || TO_OBJECT_BUG);


/***/ }),

/***/ 1118:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

// TODO: Remove from `core-js@4`
__webpack_require__(2958);


/***/ }),

/***/ 7380:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

// TODO: Remove from `core-js@4`
__webpack_require__(3408);


/***/ }),

/***/ 2801:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2109);
var getBuiltIn = __webpack_require__(5005);
var createPropertyDescriptor = __webpack_require__(9114);
var defineProperty = (__webpack_require__(3070).f);
var hasOwn = __webpack_require__(2597);
var anInstance = __webpack_require__(5787);
var inheritIfRequired = __webpack_require__(9587);
var normalizeStringArgument = __webpack_require__(6277);
var DOMExceptionConstants = __webpack_require__(3678);
var clearErrorStack = __webpack_require__(7741);
var IS_PURE = __webpack_require__(1913);

var DOM_EXCEPTION = 'DOMException';
var Error = getBuiltIn('Error');
var NativeDOMException = getBuiltIn(DOM_EXCEPTION);

var $DOMException = function DOMException() {
  anInstance(this, DOMExceptionPrototype);
  var argumentsLength = arguments.length;
  var message = normalizeStringArgument(argumentsLength < 1 ? undefined : arguments[0]);
  var name = normalizeStringArgument(argumentsLength < 2 ? undefined : arguments[1], 'Error');
  var that = new NativeDOMException(message, name);
  var error = Error(message);
  error.name = DOM_EXCEPTION;
  defineProperty(that, 'stack', createPropertyDescriptor(1, clearErrorStack(error.stack, 1)));
  inheritIfRequired(that, this, $DOMException);
  return that;
};

var DOMExceptionPrototype = $DOMException.prototype = NativeDOMException.prototype;

var ERROR_HAS_STACK = 'stack' in Error(DOM_EXCEPTION);
var DOM_EXCEPTION_HAS_STACK = 'stack' in new NativeDOMException(1, 2);
var FORCED_CONSTRUCTOR = ERROR_HAS_STACK && !DOM_EXCEPTION_HAS_STACK;

// `DOMException` constructor patch for `.stack` where it's required
// https://webidl.spec.whatwg.org/#es-DOMException-specialness
$({ global: true, constructor: true, forced: IS_PURE || FORCED_CONSTRUCTOR }, { // TODO: fix export logic
  DOMException: FORCED_CONSTRUCTOR ? $DOMException : NativeDOMException
});

var PolyfilledDOMException = getBuiltIn(DOM_EXCEPTION);
var PolyfilledDOMExceptionPrototype = PolyfilledDOMException.prototype;

if (PolyfilledDOMExceptionPrototype.constructor !== PolyfilledDOMException) {
  if (!IS_PURE) {
    defineProperty(PolyfilledDOMExceptionPrototype, 'constructor', createPropertyDescriptor(1, PolyfilledDOMException));
  }

  for (var key in DOMExceptionConstants) if (hasOwn(DOMExceptionConstants, key)) {
    var constant = DOMExceptionConstants[key];
    var constantName = constant.s;
    if (!hasOwn(PolyfilledDOMException, constantName)) {
      defineProperty(PolyfilledDOMException, constantName, createPropertyDescriptor(6, constant.c));
    }
  }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ entry_lib; }
});

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
/* eslint-disable no-var */
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/package/VueElementUploadImage/index.vue?vue&type=template&id=2917fc16&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ele-upload-image"},[(!_vm.crop)?_c('el-upload',{directives:[{name:"show",rawName:"v-show",value:(_vm.isShowUpload),expression:"isShowUpload"}],ref:"upload",style:({
      marginBottom: _vm.multiple && _vm.computedValues.length ? '20px' : '0px'
    }),attrs:{"accept":_vm.accept,"action":_vm.action,"before-upload":_vm.handleBeforeUpload,"data":_vm.data,"disabled":_vm.uploading,"drag":Boolean(_vm.drag),"headers":_vm.headers,"http-request":_vm.httpRequest,"limit":_vm.limit,"list-type":_vm.drag ? 'picture' : 'picture-card',"multiple":_vm.multiple,"name":_vm.name,"on-change":_vm.handleChange,"on-error":_vm.handleUploadError,"on-exceed":_vm.handleExceed,"on-success":_vm.handleUploadSuccess,"show-file-list":false,"withCredentials":_vm.withCredentials}},[_c('div',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.uploading),expression:"uploading"}]},[(_vm.drag)?[_c('i',{staticClass:"el-icon-upload"}),_c('div',{staticClass:"el-upload__text"},[_vm._v(" 将文件拖到此处，或 "),_c('em',[_vm._v("点击上传")])])]:[_c('div',{style:({
            width: _vm.size + 'px',
            height: _vm.size + 'px',
            lineHeight: _vm.size + 'px'
          })},[_c('i',{staticClass:"el-icon-plus"})])]],2),(_vm.showTip)?_c('div',{staticClass:"el-upload__tip",attrs:{"slot":"tip"},slot:"tip"},[_vm._v(" 请上传 "),_c('b',{staticStyle:{"color":"#f56c6c"}},[_vm._v(_vm._s(_vm.fileType.length ? _vm.fileType.join('/') : '图片'))]),_vm._v(" 格式文件 "),(_vm.fileSize)?[_vm._v(" ，且大小不超过 "),_c('b',{staticStyle:{"color":"#f56c6c"}},[_vm._v(_vm._s(_vm.fileSize)+"MB")])]:_vm._e()],2):_vm._e()]):_vm._e(),(_vm.crop)?_c('div',[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.isShowUpload),expression:"isShowUpload"}],staticClass:"el-upload el-upload--picture-card",staticStyle:{"margin-bottom":"20px"},style:({
        width: _vm.size + 'px',
        height: _vm.size + 'px',
        lineHeight: _vm.size + 'px'
      }),on:{"click":function($event){_vm.isShowCrop = true}}},[_c('i',{staticClass:"el-icon-plus avatar-uploader-icon"})]),(_vm.isShowCrop)?_c('cropper',{ref:"cropper",staticClass:"ele-upload-image--cropper",attrs:{"field":_vm.name,"headers":_vm.headers,"height":_vm.cropHeight,"noCircle":_vm.cropHeight !== _vm.cropWidth,"params":_vm.data,"url":_vm.action,"width":_vm.cropWidth,"withCredentials":_vm.withCredentials,"img-format":"png"},on:{"crop-success":_vm.handleCropSuccess,"crop-upload-fail":_vm.handleCropUploadError,"crop-upload-success":_vm.handleCropUploadSuccess,"src-file-set":_vm.handleSetFileSet},model:{value:(_vm.isShowCrop),callback:function ($$v) {_vm.isShowCrop=$$v},expression:"isShowCrop"}}):_vm._e()],1):_vm._e(),_c('ele-gallery',{attrs:{"lazy":_vm.lazy,"remove-fn":_vm.handleRemove,"size":_vm.size,"sliceSingle":true,"source":_vm.value,"thumbSuffix":_vm.thumbSuffix,"title":_vm.title}})],1)}
var staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./node_modules/vue-image-crop-upload/upload-2.vue?vue&type=template&id=d93e530c&
var upload_2vue_type_template_id_d93e530c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.value),expression:"value"}],staticClass:"vue-image-crop-upload"},[_c('div',{staticClass:"vicp-wrap"},[_c('div',{staticClass:"vicp-close",on:{"click":_vm.off}},[_c('i',{staticClass:"vicp-icon4"})]),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.step == 1),expression:"step == 1"}],staticClass:"vicp-step1"},[_c('div',{staticClass:"vicp-drop-area",on:{"dragleave":_vm.preventDefault,"dragover":_vm.preventDefault,"dragenter":_vm.preventDefault,"click":_vm.handleClick,"drop":_vm.handleChange}},[_c('i',{directives:[{name:"show",rawName:"v-show",value:(_vm.loading != 1),expression:"loading != 1"}],staticClass:"vicp-icon1"},[_c('i',{staticClass:"vicp-icon1-arrow"}),_c('i',{staticClass:"vicp-icon1-body"}),_c('i',{staticClass:"vicp-icon1-bottom"})]),_c('span',{directives:[{name:"show",rawName:"v-show",value:(_vm.loading !== 1),expression:"loading !== 1"}],staticClass:"vicp-hint"},[_vm._v(_vm._s(_vm.lang.hint))]),_c('span',{directives:[{name:"show",rawName:"v-show",value:(!_vm.isSupported),expression:"!isSupported"}],staticClass:"vicp-no-supported-hint"},[_vm._v(_vm._s(_vm.lang.noSupported))]),(_vm.step == 1)?_c('input',{directives:[{name:"show",rawName:"v-show",value:(false),expression:"false"}],ref:"fileinput",attrs:{"type":"file","accept":"image/*"},on:{"change":_vm.handleChange}}):_vm._e()]),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.hasError),expression:"hasError"}],staticClass:"vicp-error"},[_c('i',{staticClass:"vicp-icon2"}),_vm._v(" "+_vm._s(_vm.errorMsg)+" ")]),_c('div',{staticClass:"vicp-operate"},[_c('a',{on:{"click":_vm.off,"mousedown":_vm.ripple}},[_vm._v(_vm._s(_vm.lang.btn.off))])])]),(_vm.step == 2)?_c('div',{staticClass:"vicp-step2"},[_c('div',{staticClass:"vicp-crop"},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(true),expression:"true"}],staticClass:"vicp-crop-left"},[_c('div',{staticClass:"vicp-img-container",on:{"wheel":function($event){$event.preventDefault();return _vm.handleMouseWheel.apply(null, arguments)}}},[_c('img',{ref:"img",staticClass:"vicp-img",style:(_vm.sourceImgStyle),attrs:{"src":_vm.sourceImgUrl,"draggable":"false"},on:{"drag":_vm.preventDefault,"dragstart":_vm.preventDefault,"dragend":_vm.preventDefault,"dragleave":_vm.preventDefault,"dragover":_vm.preventDefault,"dragenter":_vm.preventDefault,"drop":_vm.preventDefault,"touchstart":_vm.imgStartMove,"touchmove":_vm.imgMove,"touchend":_vm.createImg,"touchcancel":_vm.createImg,"mousedown":_vm.imgStartMove,"mousemove":_vm.imgMove,"mouseup":_vm.createImg,"mouseout":_vm.createImg}}),_c('div',{staticClass:"vicp-img-shade vicp-img-shade-1",style:(_vm.sourceImgShadeStyle)}),_c('div',{staticClass:"vicp-img-shade vicp-img-shade-2",style:(_vm.sourceImgShadeStyle)})]),_c('div',{staticClass:"vicp-range"},[_c('input',{attrs:{"type":"range","step":"1","min":"0","max":"100"},domProps:{"value":_vm.scale.range},on:{"mousemove":_vm.zoomChange}}),_c('i',{staticClass:"vicp-icon5",on:{"mousedown":_vm.startZoomSub,"mouseout":_vm.endZoomSub,"mouseup":_vm.endZoomSub}}),_c('i',{staticClass:"vicp-icon6",on:{"mousedown":_vm.startZoomAdd,"mouseout":_vm.endZoomAdd,"mouseup":_vm.endZoomAdd}})]),(!_vm.noRotate)?_c('div',{staticClass:"vicp-rotate"},[_c('i',{on:{"click":_vm.rotateImg}},[_vm._v("↻")])]):_vm._e()]),_c('div',{directives:[{name:"show",rawName:"v-show",value:(true),expression:"true"}],staticClass:"vicp-crop-right"},[_c('div',{staticClass:"vicp-preview"},[(!_vm.noSquare)?_c('div',{staticClass:"vicp-preview-item"},[_c('img',{style:(_vm.previewStyle),attrs:{"src":_vm.createImgUrl}}),_c('span',[_vm._v(_vm._s(_vm.lang.preview))])]):_vm._e(),(!_vm.noCircle)?_c('div',{staticClass:"vicp-preview-item vicp-preview-item-circle"},[_c('img',{style:(_vm.previewStyle),attrs:{"src":_vm.createImgUrl}}),_c('span',[_vm._v(_vm._s(_vm.lang.preview))])]):_vm._e()])])]),_c('div',{staticClass:"vicp-operate"},[_c('a',{on:{"click":function($event){return _vm.setStep(1)},"mousedown":_vm.ripple}},[_vm._v(_vm._s(_vm.lang.btn.back))]),_c('a',{staticClass:"vicp-operate-btn",on:{"click":_vm.prepareUpload,"mousedown":_vm.ripple}},[_vm._v(_vm._s(_vm.lang.btn.save))])])]):_vm._e(),(_vm.step == 3)?_c('div',{staticClass:"vicp-step3"},[_c('div',{staticClass:"vicp-upload"},[_c('span',{directives:[{name:"show",rawName:"v-show",value:(_vm.loading === 1),expression:"loading === 1"}],staticClass:"vicp-loading"},[_vm._v(_vm._s(_vm.lang.loading))]),_c('div',{staticClass:"vicp-progress-wrap"},[_c('span',{directives:[{name:"show",rawName:"v-show",value:(_vm.loading === 1),expression:"loading === 1"}],staticClass:"vicp-progress",style:(_vm.progressStyle)})]),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.hasError),expression:"hasError"}],staticClass:"vicp-error"},[_c('i',{staticClass:"vicp-icon2"}),_vm._v(" "+_vm._s(_vm.errorMsg)+" ")]),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.loading === 2),expression:"loading === 2"}],staticClass:"vicp-success"},[_c('i',{staticClass:"vicp-icon3"}),_vm._v(" "+_vm._s(_vm.lang.success)+" ")])]),_c('div',{staticClass:"vicp-operate"},[_c('a',{on:{"click":function($event){return _vm.setStep(2)},"mousedown":_vm.ripple}},[_vm._v(_vm._s(_vm.lang.btn.back))]),_c('a',{on:{"click":_vm.off,"mousedown":_vm.ripple}},[_vm._v(_vm._s(_vm.lang.btn.close))])])]):_vm._e(),_c('canvas',{directives:[{name:"show",rawName:"v-show",value:(false),expression:"false"}],ref:"canvas",attrs:{"width":_vm.width,"height":_vm.height}})])])}
var upload_2vue_type_template_id_d93e530c_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/vue-image-crop-upload/utils/language.js
/* harmony default export */ var language = ({
  zh: {
    hint: '点击，或拖动图片至此处',
    loading: '正在上传……',
    noSupported: '浏览器不支持该功能，请使用IE10以上或其他现在浏览器！',
    success: '上传成功',
    fail: '图片上传失败',
    preview: '头像预览',
    btn: {
      off: '取消',
      close: '关闭',
      back: '上一步',
      save: '保存'
    },
    error: {
      onlyImg: '仅限图片格式',
      outOfSize: '单文件大小不能超过 ',
      lowestPx: '图片最低像素为（宽*高）：'
    }
  },
  'zh-tw': {
    hint: '點擊，或拖動圖片至此處',
    loading: '正在上傳……',
    noSupported: '瀏覽器不支持該功能，請使用IE10以上或其他現代瀏覽器！',
    success: '上傳成功',
    fail: '圖片上傳失敗',
    preview: '頭像預覽',
    btn: {
      off: '取消',
      close: '關閉',
      back: '上一步',
      save: '保存'
    },
    error: {
      onlyImg: '僅限圖片格式',
      outOfSize: '單文件大小不能超過 ',
      lowestPx: '圖片最低像素為（寬*高）：'
    }
  },
  en: {
    hint: 'Click or drag the file here to upload',
    loading: 'Uploading…',
    noSupported: 'Browser is not supported, please use IE10+ or other browsers',
    success: 'Upload success',
    fail: 'Upload failed',
    preview: 'Preview',
    btn: {
      off: 'Cancel',
      close: 'Close',
      back: 'Back',
      save: 'Save'
    },
    error: {
      onlyImg: 'Image only',
      outOfSize: 'Image exceeds size limit: ',
      lowestPx: 'Image\'s size is too low. Expected at least: '
    }
  },
  ro: {
    hint: 'Atinge sau trage fișierul aici',
    loading: 'Se încarcă',
    noSupported: 'Browser-ul tău nu suportă acest feature. Te rugăm încearcă cu alt browser.',
    success: 'S-a încărcat cu succes',
    fail: 'A apărut o problemă la încărcare',
    preview: 'Previzualizează',
    btn: {
      off: 'Anulează',
      close: 'Închide',
      back: 'Înapoi',
      save: 'Salvează'
    },
    error: {
      onlyImg: 'Doar imagini',
      outOfSize: 'Imaginea depășește limita de: ',
      loewstPx: 'Imaginea este prea mică; Minim: '
    }
  },
  ru: {
    hint: 'Нажмите, или перетащите файл в это окно',
    loading: 'Загружаю……',
    noSupported: 'Ваш браузер не поддерживается, пожалуйста, используйте IE10 + или другие браузеры',
    success: 'Загрузка выполнена успешно',
    fail: 'Ошибка загрузки',
    preview: 'Предпросмотр',
    btn: {
      off: 'Отменить',
      close: 'Закрыть',
      back: 'Назад',
      save: 'Сохранить'
    },
    error: {
      onlyImg: 'Только изображения',
      outOfSize: 'Изображение превышает предельный размер: ',
      lowestPx: 'Минимальный размер изображения: '
    }
  },
  'pt-br': {
    hint: 'Clique ou arraste o arquivo aqui para carregar',
    loading: 'Carregando...',
    noSupported: 'Browser não suportado, por favor utilize o Internet Explorer 10+ ou outro browser',
    success: 'Imagem carregada com sucesso',
    fail: 'Ocorreu um erro ao carregar a imagem',
    preview: 'Pré-visualização',
    btn: {
      off: 'Cancelar',
      close: 'Fechar',
      back: 'Voltar',
      save: 'Salvar'
    },
    error: {
      onlyImg: 'Por favor envie apenas imagens',
      outOfSize: 'A imagem excede o limite de tamanho suportado: ',
      lowestPx: 'O tamanho da imagem é muito pequeno. Tamanho mínimo: '
    }
  },
  'pt-pt': {
    hint: 'Clique ou arraste o arquivo para a janela para carregar',
    loading: 'A processar...',
    noSupported: 'Browser não suportado, por favor utilize o Internet Explorer 10+ ou outro browser',
    success: 'Imagem carregada com sucesso',
    fail: 'Ocorreu um erro ao carregar a imagem',
    preview: 'Pré-visualização',
    btn: {
      off: 'Cancelar',
      close: 'Fechar',
      back: 'Voltar',
      save: 'Guardar'
    },
    error: {
      onlyImg: 'Por favor envie apenas imagens',
      outOfSize: 'A imagem excede o limite de tamanho suportado: ',
      lowestPx: 'O tamanho da imagem é muito pequeno. Tamanho mínimo: '
    }
  },
  fr: {
    hint: 'Cliquez ou glissez le fichier ici.',
    loading: 'Téléchargement…',
    noSupported: 'Votre navigateur n\'est pas supporté. Utilisez IE10 + ou un autre navigateur s\'il vous plaît.',
    success: 'Téléchargement réussi',
    fail: 'Téléchargement echoué',
    preview: 'Aperçu',
    btn: {
      off: 'Annuler',
      close: 'Fermer',
      back: 'Retour',
      save: 'Enregistrer'
    },
    error: {
      onlyImg: 'Image uniquement',
      outOfSize: 'L\'image sélectionnée dépasse la taille maximum: ',
      lowestPx: 'L\'image sélectionnée est trop petite. Dimensions attendues: '
    }
  },
  nl: {
    hint: 'Klik hier of sleep een afbeelding in dit vlak',
    loading: 'Uploaden…',
    noSupported: 'Je browser wordt helaas niet ondersteund. Gebruik IE10+ of een andere browser.',
    success: 'Upload succesvol',
    fail: 'Upload mislukt',
    preview: 'Voorbeeld',
    btn: {
      off: 'Annuleren',
      close: 'Sluiten',
      back: 'Terug',
      save: 'Opslaan'
    },
    error: {
      onlyImg: 'Alleen afbeeldingen',
      outOfSize: 'De afbeelding is groter dan: ',
      lowestPx: 'De afbeelding is te klein! Minimale afmetingen: '
    }
  },
  tr: {
    hint: 'Tıkla veya yüklemek istediğini buraya sürükle',
    loading: 'Yükleniyor…',
    noSupported: 'Tarayıcı desteklenmiyor, lütfen IE10+ veya farklı tarayıcı kullanın',
    success: 'Yükleme başarılı',
    fail: 'Yüklemede hata oluştu',
    preview: 'Önizle',
    btn: {
      off: 'İptal',
      close: 'Kapat',
      back: 'Geri',
      save: 'Kaydet'
    },
    error: {
      onlyImg: 'Sadece resim',
      outOfSize: 'Resim yükleme limitini aşıyor: ',
      lowestPx: 'Resmin boyutu çok küçük. En az olması gereken: '
    }
  },
  'es-MX': {
    hint: 'Selecciona o arrastra una imagen',
    loading: 'Subiendo...',
    noSupported: 'Tu navegador no es soportado, por favor usa IE10+ u otros navegadores más recientes',
    success: 'Subido exitosamente',
    fail: 'Sucedió un error',
    preview: 'Vista previa',
    btn: {
      off: 'Cancelar',
      close: 'Cerrar',
      back: 'Atrás',
      save: 'Guardar'
    },
    error: {
      onlyImg: 'Únicamente imágenes',
      outOfSize: 'La imagen excede el tamaño maximo:',
      lowestPx: 'La imagen es demasiado pequeña. Se espera por lo menos:'
    }
  },
  de: {
    hint: 'Klick hier oder zieh eine Datei hier rein zum Hochladen',
    loading: 'Hochladen…',
    noSupported: 'Browser wird nicht unterstützt, bitte verwende IE10+ oder andere Browser',
    success: 'Upload erfolgreich',
    fail: 'Upload fehlgeschlagen',
    preview: 'Vorschau',
    btn: {
      off: 'Abbrechen',
      close: 'Schließen',
      back: 'Zurück',
      save: 'Speichern'
    },
    error: {
      onlyImg: 'Nur Bilder',
      outOfSize: 'Das Bild ist zu groß: ',
      lowestPx: 'Das Bild ist zu klein. Mindestens: '
    }
  },
  ja: {
    hint: 'クリック・ドラッグしてファイルをアップロード',
    loading: 'アップロード中...',
    noSupported: 'このブラウザは対応されていません。IE10+かその他の主要ブラウザをお使いください。',
    success: 'アップロード成功',
    fail: 'アップロード失敗',
    preview: 'プレビュー',
    btn: {
      off: 'キャンセル',
      close: '閉じる',
      back: '戻る',
      save: '保存'
    },
    error: {
      onlyImg: '画像のみ',
      outOfSize: '画像サイズが上限を超えています。上限: ',
      lowestPx: '画像が小さすぎます。最小サイズ: '
    }
  },
  ua: {
    hint: 'Натисніть, або перетягніть файл в це вікно',
    loading: 'Завантажую……',
    noSupported: 'Ваш браузер не підтримується, будь ласка скористайтесь IE10 + або іншими браузерами',
    success: 'Завантаження виконано успішно',
    fail: 'Помилка завантаження',
    preview: 'Попередній перегляд',
    btn: {
      off: 'Відмінити',
      close: 'Закрити',
      back: 'Назад',
      save: 'Зберегти'
    },
    error: {
      onlyImg: 'Тільки зображення',
      outOfSize: 'Зображення перевищує граничний розмір: ',
      lowestPx: 'Мінімальний розмір зображення: '
    }
  },
  it: {
    hint: 'Clicca o trascina qui il file per caricarlo',
    loading: 'Caricamento del file…',
    noSupported: 'Browser non supportato, per favore usa IE10+ o un altro browser',
    success: 'Caricamento completato',
    fail: 'Caricamento fallito',
    preview: 'Anteprima',
    btn: {
      off: 'Annulla',
      close: 'Chiudi',
      back: 'Indietro',
      save: 'Salva'
    },
    error: {
      onlyImg: 'Sono accettate solo immagini',
      outOfSize: 'L\'immagine eccede i limiti di dimensione: ',
      lowestPx: 'L\'immagine è troppo piccola. Il requisito minimo è: '
    }
  },
  ar: {
    hint: 'اضغط أو اسحب الملف هنا للتحميل',
    loading: 'جاري التحميل...',
    noSupported: 'المتصفح غير مدعوم ، يرجى استخدام IE10 + أو متصفح أخر',
    success: 'تم التحميل بنجاح',
    fail: 'فشل التحميل',
    preview: 'معاينه',
    btn: {
      off: 'إلغاء',
      close: 'إغلاق',
      back: 'رجوع',
      save: 'حفظ'
    },
    error: {
      onlyImg: 'صور فقط',
      outOfSize: 'تتجاوز الصوره الحجم المحدد: ',
      lowestPx: 'حجم الصورة صغير جدا. من المتوقع على الأقل: '
    }
  },
  ug: {
    hint: 'مەزكۇر دائىرىنى چىكىپ رەسىم تاللاڭ ياكى رەسىمنى سۆرەپ ئەكىرىڭ',
    loading: 'يوللىنىۋاتىدۇ...',
    noSupported: 'تور كۆرگۈچ بۇ ئىقتىدارنى قوللىمايدۇ ، يۇقىرى نەشىردىكى تور كۆرگۈچنى ئىشلىتىڭ',
    success: 'غەلبىلىك بولدى',
    fail: 'مەغلۇب بولدى',
    preview: 'ئۈنۈم رەسىم',
    btn: {
      off: 'بولدى قىلىش',
      close: 'تاقاش',
      back: 'ئالدىنقى قەدەم',
      save: 'ساقلاش'
    },
    error: {
      onlyImg: 'پەقەت رەسىم فورماتىنىلا قوللايدۇ',
      outOfSize: 'رەسىم چوڭ - كىچىكلىكى چەكتىن ئىشىپ كەتتى',
      lowestPx: 'رەسىمنىڭ ئەڭ كىچىك ئۆلچىمى :'
    }
  },
  th: {
    hint: 'คลิ๊กหรือลากรูปมาที่นี่',
    loading: 'กำลังอัพโหลด…',
    noSupported: 'เบราเซอร์ไม่รองรับ, กรุณาใช้ IE เวอร์ชั่น 10 ขึ้นไป หรือใช้เบราเซอร์ตัวอื่น',
    success: 'อัพโหลดสำเร็จ',
    fail: 'อัพโหลดล้มเหลว',
    preview: 'ตัวอย่าง',
    btn: {
      off: 'ยกเลิก',
      close: 'ปิด',
      back: 'กลับ',
      save: 'บันทึก'
    },
    error: {
      onlyImg: 'ไฟล์ภาพเท่านั้น',
      outOfSize: 'ไฟล์ใหญ่เกินกำหนด: ',
      lowestPx: 'ไฟล์เล็กเกินไป. อย่างน้อยต้องมีขนาด: '
    }
  },
  mm: {
    hint: 'ဖိုင်ကို ဤနေရာတွင် နှိပ်၍ (သို့) ဆွဲထည့်၍ တင်ပါ',
    loading: 'တင်နေသည်…',
    noSupported: 'ဤဘရောက်ဇာကို အထောက်အပံ့ မပေးပါ၊ ကျေးဇူးပြု၍ IE10+ သို့မဟုတ် အခြား ဘရောက်ဇာ ကို အသုံးပြုပါ',
    success: 'ဖိုင်တင်နေမှု မပြီးမြောက်ပါ',
    fail: 'ဖိုင်တင်နေမှု မအောင်မြင်ပါ',
    preview: 'အစမ်းကြည့်',
    btn: {
      off: 'မလုပ်တော့ပါ',
      close: 'ပိတ်မည်',
      back: 'နောက်သို့',
      save: 'သိမ်းမည်'
    },
    error: {
      onlyImg: 'ဓာတ်ပုံ သီးသန့်သာ',
      outOfSize: 'ဓာတ်ပုံဆိုဒ် ကြီးလွန်းသည် ။ အများဆုံး ဆိုဒ် : ',
      lowestPx: 'ဓာတ်ပုံဆိုဒ် သေးလွန်းသည်။ အနည်းဆုံး ဆိုဒ် : '
    }
  },
  se: {
    hint: 'Klicka eller dra en fil hit för att ladda upp den',
    loading: 'Laddar upp…',
    noSupported: 'Din webbläsare stöds inte, vänligen använd IE10+ eller andra webbläsare',
    success: 'Uppladdning lyckades',
    fail: 'Uppladdning misslyckades',
    preview: 'Förhandsgranska',
    btn: {
      off: 'Avbryt',
      close: 'Stäng',
      back: 'Tillbaka',
      save: 'Spara'
    },
    error: {
      onlyImg: 'Endast bilder',
      outOfSize: 'Bilden är större än max-gränsen: ',
      lowestPx: 'Bilden är för liten. Minimum är: '
    }
  },
  pl: {
    hint: 'Kliknij lub upuść plik tutaj',
    loading: 'Wgrywanie…',
    noSupported: 'Twoja przeglądarka nie jest wspierana, użyj IE10+ lub innej przeglądarki',
    success: 'Błąd',
    fail: 'Sukces',
    preview: 'Podgląd',
    btn: {
      off: 'Anuluj',
      close: 'Zamknij',
      back: 'Wstecz',
      save: 'Zapisz'
    },
    error: {
      onlyImg: 'Tylko obrazki',
      outOfSize: 'Rozmiar obrazka przekracza: ',
      lowestPx: 'Obrazek jest za mały. Minimalne wymiary to: '
    }
  },
  vi: {
    hint: 'Bấm hoặc kéo thả file để tải lên',
    loading: 'Đang tải lên...',
    noSupported: 'Trình duyệt không hỗ trợ, hãy sử dụng IE10+ hoặc trình duyệt khác',
    success: 'Tải lên thành công',
    fail: 'Tải lên thất bại',
    preview: 'Xem trước',
    btn: {
      off: 'Huỷ',
      close: 'Đóng',
      back: 'Trở lại',
      save: 'Lưu'
    },
    error: {
      onlyImg: 'Chỉ hình ảnh',
      outOfSize: 'Hình ảnh vượt quá giới hạn cho phép: ',
      lowestPx: 'Kích thước hình quá nhỏ. Kích thước tối thiểu: '
    }
  },
  fa: {
    hint: 'برای بارگذاری تصویر کلیک کنید یا تصویر را به این ناحیه درگ کنید',
    loading: 'در حال بارگذاری ...',
    noSupported: 'نسخه یا نوع مرورگر شما از این قابلیت پشتیبانی نمیکند. لطفا از اینترنت اکسپلورر ورژن بالاتر از ده یا مرورگرهای دیگر استفاده کنید',
    success: 'بارگذاری با موفقیت انجام شد',
    fail: 'بارگذاری انجام نشد',
    preview: 'پیشنمایش',
    btn: {
      off: 'لغو',
      close: 'بستن',
      back: 'بازگشت',
      save: 'ذخیره'
    },
    error: {
      onlyImg: 'فقط تصویر',
      outOfSize: 'حجم تصویر بیش از اندازه‌ی مجاز است: ',
      lowestPx: 'حجم تصویر بسیار پایین است، حداقل سایز تصویر: '
    }
  },
  da: {
    hint: 'Klik eller træk en fil herhen for at uploade',
    loading: 'Uploader…',
    noSupported: 'Din browser er ikke understøttet, benyt venligst IE10+ eller en anden browser',
    success: 'Upload lykkedes',
    fail: 'Upload mislykkedes',
    preview: 'Preview',
    btn: {
      off: 'Fortryd',
      close: 'Luk',
      back: 'Tilbage',
      save: 'Gem'
    },
    error: {
      onlyImg: 'Kun billeder',
      outOfSize: 'Billedet overskrider størrelsesgrænsen: ',
      lowestPx: 'Billedet er for lille. Minimumsstørrelsen er: '
    }
  },
  ko: {
    hint: '클릭 또는 드래그하여 이미지를 업로드하세요.',
    loading: '업로드 중…',
    noSupported: '죄송합니다, 인터넷 익스플로러 버전 10 이상 혹은 다른 브라우저를 사용해주세요.',
    success: '업로드 성공',
    fail: '업로드 실패',
    preview: '미리보기',
    btn: {
      off: '취소',
      close: '닫기',
      back: '뒤로가기',
      save: '저장'
    },
    error: {
      onlyImg: '이미지만 업로드 할 수 있습니다.',
      outOfSize: '업로드 할 수 있는 최대 이미지 사이즈를 초과했습니다: ',
      lowestPx: '이미지의 크기는 적어도 다음 사이즈보다 커야 합니다: '
    }
  }
});
;// CONCATENATED MODULE: ./node_modules/vue-image-crop-upload/utils/mimes.js
/* harmony default export */ var mimes = ({
  'jpg': 'image/jpeg',
  'png': 'image/png',
  'gif': 'image/gif',
  'svg': 'image/svg+xml',
  'psd': 'image/photoshop'
});
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-exception.stack.js
var web_dom_exception_stack = __webpack_require__(2801);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.at.js
var es_typed_array_at = __webpack_require__(8675);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.set.js
var es_typed_array_set = __webpack_require__(3462);
// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.typed-array.find-last.js
var esnext_typed_array_find_last = __webpack_require__(7380);
// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.typed-array.find-last-index.js
var esnext_typed_array_find_last_index = __webpack_require__(1118);
;// CONCATENATED MODULE: ./node_modules/vue-image-crop-upload/utils/data2blob.js






/**
 * database64文件格式转换为2进制
 *
 * @param  {[String]} data dataURL 的格式为 “data:image/png;base64,****”,逗号之前都是一些说明性的文字，我们只需要逗号之后的就行了
 * @param  {[String]} mime [description]
 * @return {[blob]}      [description]
 */
/* harmony default export */ function data2blob(data, mime) {
  data = data.split(',')[1];
  data = window.atob(data);
  var ia = new Uint8Array(data.length);

  for (var i = 0; i < data.length; i++) {
    ia[i] = data.charCodeAt(i);
  }

  ; // canvas.toDataURL 返回的默认格式就是 image/png

  return new Blob([ia], {
    type: mime
  });
}
;
;// CONCATENATED MODULE: ./node_modules/vue-image-crop-upload/utils/effectRipple.js
/**
 * 点击波纹效果
 *
 * @param  {[event]} e        [description]
 * @param  {[Object]} arg_opts [description]
 * @return {[bollean]}          [description]
 */
/* harmony default export */ function effectRipple(e, arg_opts) {
  var opts = Object.assign({
    ele: e.target,
    // 波纹作用元素
    type: 'hit',
    // hit点击位置扩散　center中心点扩展
    bgc: 'rgba(0, 0, 0, 0.15)' // 波纹颜色

  }, arg_opts),
      target = opts.ele;

  if (target) {
    var rect = target.getBoundingClientRect(),
        ripple = target.querySelector('.e-ripple');

    if (!ripple) {
      ripple = document.createElement('span');
      ripple.className = 'e-ripple';
      ripple.style.height = ripple.style.width = Math.max(rect.width, rect.height) + 'px';
      target.appendChild(ripple);
    } else {
      ripple.className = 'e-ripple';
    }

    switch (opts.type) {
      case 'center':
        ripple.style.top = rect.height / 2 - ripple.offsetHeight / 2 + 'px';
        ripple.style.left = rect.width / 2 - ripple.offsetWidth / 2 + 'px';
        break;

      default:
        ripple.style.top = e.pageY - rect.top - ripple.offsetHeight / 2 - document.body.scrollTop + 'px';
        ripple.style.left = e.pageX - rect.left - ripple.offsetWidth / 2 - document.body.scrollLeft + 'px';
    }

    ripple.style.backgroundColor = opts.bgc;
    ripple.className = 'e-ripple z-active';
    return false;
  }
}
;
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-80[0].rules[0].use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./node_modules/vue-image-crop-upload/upload-2.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ var upload_2vue_type_script_lang_js_ = ({
  props: {
    // 域，上传文件name，触发事件会带上（如果一个页面多个图片上传控件，可以做区分
    field: {
      type: String,
      'default': 'avatar'
    },
    // 原名key，类似于id，触发事件会带上（如果一个页面多个图片上传控件，可以做区分
    ki: {
      type: String,
      'default': '0'
    },
    // 显示该控件与否
    value: {
      'default': true
    },
    // 上传地址
    url: {
      type: String,
      'default': ''
    },
    // 其他要上传文件附带的数据，对象格式
    params: {
      type: Object,
      'default': null
    },
    //Add custom headers
    headers: {
      type: Object,
      'default': null
    },
    // 剪裁图片的宽
    width: {
      type: Number,
      default: 200
    },
    // 剪裁图片的高
    height: {
      type: Number,
      default: 200
    },
    // 不显示旋转功能
    noRotate: {
      type: Boolean,
      default: true
    },
    // 不预览圆形图片
    noCircle: {
      type: Boolean,
      default: false
    },
    // 不预览方形图片
    noSquare: {
      type: Boolean,
      default: false
    },
    // 单文件大小限制
    maxSize: {
      type: Number,
      'default': 10240
    },
    // 语言类型
    langType: {
      type: String,
      'default': 'zh'
    },
    // 语言包
    langExt: {
      type: Object,
      'default': null
    },
    // 图片上传格式
    imgFormat: {
      type: String,
      'default': 'png'
    },
    // 图片背景 jpg情况下生效
    imgBgc: {
      type: String,
      'default': '#fff'
    },
    // 是否支持跨域
    withCredentials: {
      type: Boolean,
      'default': false
    },
    method: {
      type: String,
      'default': 'POST'
    },
    initialImgUrl: {
      type: String,
      'default': ''
    }
  },

  data() {
    let that = this,
        {
      imgFormat,
      langType,
      langExt,
      width,
      height
    } = that,
        isSupported = true,
        allowImgFormat = ['jpg', 'png'],
        tempImgFormat = allowImgFormat.indexOf(imgFormat) === -1 ? 'jpg' : imgFormat,
        lang = language[langType] ? language[langType] : language.en,
        mime = mimes[tempImgFormat]; // 规范图片格式

    that.imgFormat = tempImgFormat;

    if (langExt) {
      Object.assign(lang, langExt);
    }

    if (typeof FormData != 'function') {
      isSupported = false;
    }

    return {
      // 图片的mime
      mime,
      // 语言包
      lang,
      // 浏览器是否支持该控件
      isSupported,
      // 浏览器是否支持触屏事件
      isSupportTouch: document.hasOwnProperty("ontouchstart"),
      // 步骤
      step: 1,
      //1选择文件 2剪裁 3上传
      // 上传状态及进度
      loading: 0,
      //0未开始 1正在 2成功 3错误
      progress: 0,
      // 是否有错误及错误信息
      hasError: false,
      errorMsg: '',
      // 需求图宽高比
      ratio: width / height,
      // 原图地址、生成图片地址
      sourceImg: null,
      sourceImgUrl: this.initialImgUrl,
      createImgUrl: this.initialImgUrl,
      // 原图片拖动事件初始值
      sourceImgMouseDown: {
        on: false,
        mX: 0,
        //鼠标按下的坐标
        mY: 0,
        x: 0,
        //scale原图坐标
        y: 0
      },
      // 生成图片预览的容器大小
      previewContainer: {
        width: 100,
        height: 100
      },
      // 原图容器宽高
      sourceImgContainer: {
        // sic
        width: 240,
        height: 184 // 如果生成图比例与此一致会出现bug，先改成特殊的格式吧，哈哈哈

      },
      // 原图展示属性
      scale: {
        zoomAddOn: false,
        //按钮缩放事件开启
        zoomSubOn: false,
        //按钮缩放事件开启
        range: 1,
        //最大100
        x: 0,
        y: 0,
        width: 0,
        height: 0,
        maxWidth: 0,
        maxHeight: 0,
        minWidth: 0,
        //最宽
        minHeight: 0,
        naturalWidth: 0,
        //原宽
        naturalHeight: 0
      }
    };
  },

  computed: {
    // 进度条样式
    progressStyle() {
      let {
        progress
      } = this;
      return {
        width: progress + '%'
      };
    },

    // 原图样式
    sourceImgStyle() {
      let {
        scale,
        sourceImgMasking
      } = this,
          top = scale.y + sourceImgMasking.y + 'px',
          left = scale.x + sourceImgMasking.x + 'px';
      return {
        top,
        left,
        width: scale.width + 'px',
        height: scale.height + 'px' // 兼容 Opera

      };
    },

    // 原图蒙版属性
    sourceImgMasking() {
      let {
        width,
        height,
        ratio,
        sourceImgContainer
      } = this,
          sic = sourceImgContainer,
          sicRatio = sic.width / sic.height,
          // 原图容器宽高比
      x = 0,
          y = 0,
          w = sic.width,
          h = sic.height,
          scale = 1;

      if (ratio < sicRatio) {
        scale = sic.height / height;
        w = sic.height * ratio;
        x = (sic.width - w) / 2;
      }

      if (ratio > sicRatio) {
        scale = sic.width / width;
        h = sic.width / ratio;
        y = (sic.height - h) / 2;
      }

      return {
        scale,
        // 蒙版相对需求宽高的缩放
        x,
        y,
        width: w,
        height: h
      };
    },

    // 原图遮罩样式
    sourceImgShadeStyle() {
      let {
        sourceImgMasking,
        sourceImgContainer
      } = this,
          sic = sourceImgContainer,
          sim = sourceImgMasking,
          w = sim.width == sic.width ? sim.width : (sic.width - sim.width) / 2,
          h = sim.height == sic.height ? sim.height : (sic.height - sim.height) / 2;
      return {
        width: w + 'px',
        height: h + 'px'
      };
    },

    previewStyle() {
      let {
        width,
        height,
        ratio,
        previewContainer
      } = this,
          pc = previewContainer,
          w = pc.width,
          h = pc.height,
          pcRatio = w / h;

      if (ratio < pcRatio) {
        w = pc.height * ratio;
      }

      if (ratio > pcRatio) {
        h = pc.width / ratio;
      }

      return {
        width: w + 'px',
        height: h + 'px'
      };
    }

  },
  watch: {
    value(newValue) {
      if (newValue && this.loading != 1) {
        this.reset();
      }
    }

  },
  methods: {
    // 点击波纹效果
    ripple(e) {
      effectRipple(e);
    },

    // 关闭控件
    off() {
      setTimeout(() => {
        this.$emit('input', false);

        if (this.step == 3 && this.loading == 2) {
          this.setStep(1);
        }
      }, 200);
    },

    // 设置步骤
    setStep(no) {
      // 延时是为了显示动画效果呢，哈哈哈
      setTimeout(() => {
        this.step = no;
      }, 200);
    },

    /* 图片选择区域函数绑定
     ---------------------------------------------------------------*/
    preventDefault(e) {
      e.preventDefault();
      return false;
    },

    handleClick(e) {
      if (this.loading !== 1) {
        if (e.target !== this.$refs.fileinput) {
          e.preventDefault();

          if (document.activeElement !== this.$refs) {
            this.$refs.fileinput.click();
          }
        }
      }
    },

    handleChange(e) {
      e.preventDefault();

      if (this.loading !== 1) {
        let files = e.target.files || e.dataTransfer.files;
        this.reset();

        if (this.checkFile(files[0])) {
          this.setSourceImg(files[0]);
        }
      }
    },

    /* ---------------------------------------------------------------*/
    // 检测选择的文件是否合适
    checkFile(file) {
      let that = this,
          {
        lang,
        maxSize
      } = that; // 仅限图片

      if (file.type.indexOf('image') === -1) {
        that.hasError = true;
        that.errorMsg = lang.error.onlyImg;
        return false;
      } // 超出大小


      if (file.size / 1024 > maxSize) {
        that.hasError = true;
        that.errorMsg = lang.error.outOfSize + maxSize + 'kb';
        return false;
      }

      return true;
    },

    // 重置控件
    reset() {
      let that = this;
      that.loading = 0;
      that.hasError = false;
      that.errorMsg = '';
      that.progress = 0;
    },

    // 设置图片源
    setSourceImg(file) {
      this.$emit('src-file-set', file.name, file.type, file.size);
      let that = this,
          fr = new FileReader();

      fr.onload = function (e) {
        that.sourceImgUrl = fr.result;
        that.startCrop();
      };

      fr.readAsDataURL(file);
    },

    // 剪裁前准备工作
    startCrop() {
      let that = this,
          {
        width,
        height,
        ratio,
        scale,
        sourceImgUrl,
        sourceImgMasking,
        lang
      } = that,
          sim = sourceImgMasking,
          img = new Image();
      img.src = sourceImgUrl;

      img.onload = function () {
        let nWidth = img.naturalWidth,
            nHeight = img.naturalHeight,
            nRatio = nWidth / nHeight,
            w = sim.width,
            h = sim.height,
            x = 0,
            y = 0; // 图片像素不达标

        if (nWidth < width || nHeight < height) {
          that.hasError = true;
          that.errorMsg = lang.error.lowestPx + width + '*' + height;
          return false;
        }

        if (ratio > nRatio) {
          h = w / nRatio;
          y = (sim.height - h) / 2;
        }

        if (ratio < nRatio) {
          w = h * nRatio;
          x = (sim.width - w) / 2;
        }

        scale.range = 0;
        scale.x = x;
        scale.y = y;
        scale.width = w;
        scale.height = h;
        scale.minWidth = w;
        scale.minHeight = h;
        scale.maxWidth = nWidth * sim.scale;
        scale.maxHeight = nHeight * sim.scale;
        scale.naturalWidth = nWidth;
        scale.naturalHeight = nHeight;
        that.sourceImg = img;
        that.createImg();
        that.setStep(2);
      };
    },

    // 鼠标按下图片准备移动
    imgStartMove(e) {
      e.preventDefault(); // 支持触摸事件，则鼠标事件无效

      if (this.isSupportTouch && !e.targetTouches) {
        return false;
      }

      let et = e.targetTouches ? e.targetTouches[0] : e,
          {
        sourceImgMouseDown,
        scale
      } = this,
          simd = sourceImgMouseDown;
      simd.mX = et.screenX;
      simd.mY = et.screenY;
      simd.x = scale.x;
      simd.y = scale.y;
      simd.on = true;
    },

    // 鼠标按下状态下移动，图片移动
    imgMove(e) {
      e.preventDefault(); // 支持触摸事件，则鼠标事件无效

      if (this.isSupportTouch && !e.targetTouches) {
        return false;
      }

      let et = e.targetTouches ? e.targetTouches[0] : e,
          {
        sourceImgMouseDown: {
          on,
          mX,
          mY,
          x,
          y
        },
        scale,
        sourceImgMasking
      } = this,
          sim = sourceImgMasking,
          nX = et.screenX,
          nY = et.screenY,
          dX = nX - mX,
          dY = nY - mY,
          rX = x + dX,
          rY = y + dY;
      if (!on) return;

      if (rX > 0) {
        rX = 0;
      }

      if (rY > 0) {
        rY = 0;
      }

      if (rX < sim.width - scale.width) {
        rX = sim.width - scale.width;
      }

      if (rY < sim.height - scale.height) {
        rY = sim.height - scale.height;
      }

      scale.x = rX;
      scale.y = rY;
    },

    // 顺时针旋转图片
    rotateImg(e) {
      let {
        sourceImg,
        scale: {
          naturalWidth,
          naturalHeight
        }
      } = this,
          width = naturalHeight,
          height = naturalWidth,
          canvas = this.$refs.canvas,
          ctx = canvas.getContext('2d');
      canvas.width = width;
      canvas.height = height;
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = 'rgba(0,0,0,0)';
      ctx.fillRect(0, 0, width, height);
      ctx.translate(width, 0);
      ctx.rotate(Math.PI * 90 / 180);
      ctx.drawImage(sourceImg, 0, 0, naturalWidth, naturalHeight);
      let imgUrl = canvas.toDataURL(mimes.png);
      this.sourceImgUrl = imgUrl;
      this.startCrop();
    },

    handleMouseWheel(e) {
      e = e || window.event;
      let {
        scale
      } = this;

      if (e.wheelDelta) {
        //判断浏览器IE，谷歌滑轮事件
        if (e.wheelDelta > 0) {
          //当滑轮向上滚动时
          this.zoomImg(scale.range >= 100 ? 100 : ++scale.range);
        }

        if (e.wheelDelta < 0) {
          this.zoomImg(scale.range <= 0 ? 0 : --scale.range);
        }
      } else if (e.detail) {
        //Firefox滑轮事件
        if (e.detail > 0) {
          //当滑轮向上滚动时
          this.zoomImg(scale.range >= 100 ? 100 : ++scale.range);
        }

        if (e.detail < 0) {
          this.zoomImg(scale.range <= 0 ? 0 : --scale.range);
        }
      }
    },

    // 按钮按下开始放大
    startZoomAdd(e) {
      let that = this,
          {
        scale
      } = that;
      scale.zoomAddOn = true;

      function zoom() {
        if (scale.zoomAddOn) {
          let range = scale.range >= 100 ? 100 : ++scale.range;
          that.zoomImg(range);
          setTimeout(function () {
            zoom();
          }, 60);
        }
      }

      zoom();
    },

    // 按钮松开或移开取消放大
    endZoomAdd(e) {
      this.scale.zoomAddOn = false;
    },

    // 按钮按下开始缩小
    startZoomSub(e) {
      let that = this,
          {
        scale
      } = that;
      scale.zoomSubOn = true;

      function zoom() {
        if (scale.zoomSubOn) {
          let range = scale.range <= 0 ? 0 : --scale.range;
          that.zoomImg(range);
          setTimeout(function () {
            zoom();
          }, 60);
        }
      }

      zoom();
    },

    // 按钮松开或移开取消缩小
    endZoomSub(e) {
      let {
        scale
      } = this;
      scale.zoomSubOn = false;
    },

    zoomChange(e) {
      this.zoomImg(e.target.value);
    },

    // 缩放原图
    zoomImg(newRange) {
      let that = this,
          {
        sourceImgMasking,
        sourceImgMouseDown,
        scale
      } = this,
          {
        maxWidth,
        maxHeight,
        minWidth,
        minHeight,
        width,
        height,
        x,
        y,
        range
      } = scale,
          sim = sourceImgMasking,
          // 蒙版宽高
      sWidth = sim.width,
          sHeight = sim.height,
          // 新宽高
      nWidth = minWidth + (maxWidth - minWidth) * newRange / 100,
          nHeight = minHeight + (maxHeight - minHeight) * newRange / 100,
          // 新坐标（根据蒙版中心点缩放）
      nX = sWidth / 2 - nWidth / width * (sWidth / 2 - x),
          nY = sHeight / 2 - nHeight / height * (sHeight / 2 - y); // 判断新坐标是否超过蒙版限制

      if (nX > 0) {
        nX = 0;
      }

      if (nY > 0) {
        nY = 0;
      }

      if (nX < sWidth - nWidth) {
        nX = sWidth - nWidth;
      }

      if (nY < sHeight - nHeight) {
        nY = sHeight - nHeight;
      } // 赋值处理


      scale.x = nX;
      scale.y = nY;
      scale.width = nWidth;
      scale.height = nHeight;
      scale.range = newRange;
      setTimeout(function () {
        if (scale.range == newRange) {
          that.createImg();
        }
      }, 300);
    },

    // 生成需求图片
    createImg(e) {
      let that = this,
          {
        imgFormat,
        imgBgc,
        mime,
        sourceImg,
        scale: {
          x,
          y,
          width,
          height
        },
        sourceImgMasking: {
          scale
        }
      } = that,
          canvas = that.$refs.canvas,
          ctx = canvas.getContext('2d');

      if (e) {
        // 取消鼠标按下移动状态
        that.sourceImgMouseDown.on = false;
      }

      canvas.width = that.width;
      canvas.height = that.height;
      ctx.clearRect(0, 0, that.width, that.height);

      if (imgFormat == 'png') {
        ctx.fillStyle = 'rgba(0,0,0,0)';
      } else {
        // 如果jpg 为透明区域设置背景，默认白色
        ctx.fillStyle = imgBgc;
      }

      ctx.fillRect(0, 0, that.width, that.height);
      ctx.drawImage(sourceImg, x / scale, y / scale, width / scale, height / scale);
      that.createImgUrl = canvas.toDataURL(mime);
    },

    prepareUpload() {
      let {
        url,
        createImgUrl,
        field,
        ki
      } = this;
      this.$emit('crop-success', createImgUrl, field, ki);

      if (typeof url == 'string' && url) {
        this.upload();
      } else {
        this.off();
      }
    },

    // 上传图片
    upload() {
      let that = this,
          {
        lang,
        imgFormat,
        mime,
        url,
        params,
        headers,
        field,
        ki,
        createImgUrl,
        withCredentials,
        method
      } = this,
          fmData = new FormData(); // 添加其他参数

      if (typeof params == 'object' && params) {
        Object.keys(params).forEach(k => {
          fmData.append(k, params[k]);
        });
      } // 将field的添加放到表单域的最后，以支持阿里云OSS的表单上传


      fmData.append(field, data2blob(createImgUrl, mime), field + '.' + imgFormat); // 监听进度回调

      const uploadProgress = function (event) {
        if (event.lengthComputable) {
          that.progress = 100 * Math.round(event.loaded) / event.total;
        }
      }; // 上传文件


      that.reset();
      that.loading = 1;
      that.setStep(3);
      new Promise(function (resolve, reject) {
        let client = new XMLHttpRequest();
        client.open(method, url, true);
        client.withCredentials = withCredentials;

        client.onreadystatechange = function () {
          if (this.readyState !== 4) {
            return;
          }

          if (this.status === 200 || this.status === 201 || this.staus === 202) {
            resolve(JSON.parse(this.responseText));
          } else {
            reject(this.status);
          }
        };

        client.upload.addEventListener("progress", uploadProgress, false); //监听进度
        // 设置header

        if (typeof headers == 'object' && headers) {
          Object.keys(headers).forEach(k => {
            client.setRequestHeader(k, headers[k]);
          });
        }

        client.send(fmData);
      }).then( // 上传成功
      function (resData) {
        if (that.value) {
          that.loading = 2;
          that.$emit('crop-upload-success', resData, field, ki);
        }
      }, // 上传失败
      function (sts) {
        if (that.value) {
          that.loading = 3;
          that.hasError = true;
          that.errorMsg = lang.fail;
          that.$emit('crop-upload-fail', sts, field, ki);
        }
      });
    }

  },

  handleEscClose(e) {
    if (this.value && (e.key == 'Escape' || e.keyCode == 27)) {
      this.off();
    }
  },

  created() {
    // 绑定按键esc隐藏此插件事件
    document.addEventListener('keyup', this.handleEscClose);
  },

  beforeDestroy() {
    document.removeEventListener('keyup', this.handleEscClose);
  },

  mounted() {
    if (this.sourceImgUrl) {
      this.startCrop();
    }
  }

});
;// CONCATENATED MODULE: ./node_modules/vue-image-crop-upload/upload-2.vue?vue&type=script&lang=js&
 /* harmony default export */ var vue_image_crop_upload_upload_2vue_type_script_lang_js_ = (upload_2vue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-52[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-52[0].rules[0].use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-52[0].rules[0].use[2]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./node_modules/vue-image-crop-upload/upload-2.vue?vue&type=style&index=0&lang=css&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./node_modules/vue-image-crop-upload/upload-2.vue?vue&type=style&index=0&lang=css&

;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

;// CONCATENATED MODULE: ./node_modules/vue-image-crop-upload/upload-2.vue



;


/* normalize component */

var component = normalizeComponent(
  vue_image_crop_upload_upload_2vue_type_script_lang_js_,
  upload_2vue_type_template_id_d93e530c_render,
  upload_2vue_type_template_id_d93e530c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var upload_2 = (component.exports);
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./node_modules/vue-ele-gallery/lib/EleGallery.vue?vue&type=template&id=5268d882&
var EleGalleryvue_type_template_id_5268d882_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.source)?_c('div',{staticClass:"ele-gallery"},[_c('div',{staticClass:"el-upload-list el-upload-list--picture-card"},_vm._l((_vm.computedSources),function(source,index){return _c('li',{key:index,staticClass:"el-upload-list__item"},[_vm._t("default",function(){return [(source.type === 'image')?_c('el-image',{style:(_vm.computedStyle),attrs:{"lazy":_vm.lazy,"src":source.thumb,"fit":"cover"}}):(source.type === 'video')?_c('video',{style:(_vm.computedStyle),attrs:{"src":source.thumb}}):(source.type === 'iframe')?_c('div',{staticClass:"ele-gallery-iframe embed-responsive embed-responsive-16by9",style:(_vm.computedStyle)},[_c('iframe',{attrs:{"src":source.thumb,"allowfullscreen":"true","border":"0","frameborder":"no","framespacing":"0","scrolling":"no"}})]):_vm._e()]},null,{source: source, index: index}),_c('span',{staticClass:"el-upload-list__item-actions"},[_c('span',{on:{"click":function($event){return _vm.handlePreview(index, source)}}},[_c('i',{class:_vm.viewClass})]),(_vm.removeFn)?_c('span',{on:{"click":function($event){return _vm.handleRemove(index)}}},[_c('i',{staticClass:"el-icon-delete"})]):_vm._e(),_vm._t("action",null,null,{source: source, index: index})],2)],2)}),0),_c('ele-gallery-dialog',{ref:"dialog",attrs:{"carouselAttrs":_vm.carouselAttrs,"sliceSingle":_vm.sliceSingle,"sources":_vm.computedSources,"title":_vm.title,"type":_vm.type}})],1):_vm._e()}
var EleGalleryvue_type_template_id_5268d882_staticRenderFns = []


// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__(6699);
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./node_modules/vue-ele-gallery/lib/components/EleGalleryDialog.vue?vue&type=template&id=bfa03e68&
var EleGalleryDialogvue_type_template_id_bfa03e68_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('el-dialog',{staticStyle:{"text-align":"center"},attrs:{"visible":_vm.isShowPreview,"append-to-body":""},on:{"update:visible":function($event){_vm.isShowPreview=$event},"open":function($event){_vm.isShowCarousel = true},"closed":function($event){_vm.isShowCarousel = false}}},[_c('div',{attrs:{"slot":"title"},slot:"title"},[_vm._v(_vm._s(_vm.sourceTitle || _vm.title))]),(_vm.type === 'video')?[(_vm.isShowPreview)?_c('video',{staticClass:"ele-gallery-video",attrs:{"src":_vm.sources[_vm.initialIndex].src,"autoplay":"autoplay","controls":"controls","width":"100%"}}):_vm._e()]:(_vm.type === 'iframe')?[(_vm.isShowPreview)?_c('div',{staticClass:"ele-gallery-iframe embed-responsive embed-responsive-16by9"},[_c('iframe',{attrs:{"src":_vm.sources[_vm.initialIndex].src,"allowfullscreen":"true","border":"0","frameborder":"no","framespacing":"0","scrolling":"no"}})]):_vm._e()]:(_vm.type === 'image')?[((_vm.sliceSingle && _vm.sources[_vm.initialIndex]) || _vm.sources.length === 1)?_c('img',{staticClass:"ele-gallery-image",attrs:{"src":_vm.sources[_vm.initialIndex].src}}):[(_vm.isShowCarousel)?_c('el-carousel',_vm._b({attrs:{"initial-index":_vm.initialIndex,"indicator-position":"outside"},on:{"change":_vm.handleCarouselChange}},'el-carousel',_vm.carouselAttrs,false),_vm._l((_vm.sources),function(image,index){return _c('el-carousel-item',{key:index},[_c('img',{staticClass:"ele-gallery-image",attrs:{"src":image.src}})])}),1):_vm._e()]]:_vm._e()],2)}
var EleGalleryDialogvue_type_template_id_bfa03e68_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-80[0].rules[0].use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./node_modules/vue-ele-gallery/lib/components/EleGalleryDialog.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var EleGalleryDialogvue_type_script_lang_js_ = ({
  name: 'ele-gallery-dialog',
  props: {
    type: String,
    title: String,
    sources: Array,
    sliceSingle: {
      type: Boolean,
      default: false
    },
    carouselAttrs: Object
  },

  data() {
    return {
      isShowCarousel: false,
      sourceTitle: '',
      initialIndex: 0,
      isShowPreview: false
    };
  },

  methods: {
    startPreview(index) {
      this.isShowPreview = true;
      this.initialIndex = index;
      this.sourceTitle = this.sources[index].title;
    },

    handleCarouselChange(index) {
      if (this.sources[index] && this.sources[index].title) {
        this.sourceTitle = this.sources[index].title;
      } else {
        this.sourceTitle = '';
      }
    }

  }
});
;// CONCATENATED MODULE: ./node_modules/vue-ele-gallery/lib/components/EleGalleryDialog.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_EleGalleryDialogvue_type_script_lang_js_ = (EleGalleryDialogvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/vue-ele-gallery/lib/components/EleGalleryDialog.vue





/* normalize component */
;
var EleGalleryDialog_component = normalizeComponent(
  components_EleGalleryDialogvue_type_script_lang_js_,
  EleGalleryDialogvue_type_template_id_bfa03e68_render,
  EleGalleryDialogvue_type_template_id_bfa03e68_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var EleGalleryDialog = (EleGalleryDialog_component.exports);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-80[0].rules[0].use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./node_modules/vue-ele-gallery/lib/EleGallery.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var EleGalleryvue_type_script_lang_js_ = ({
  name: 'ele-gallery',
  props: {
    // 类型(支持图片, 视频, iframe)
    type: {
      type: String,
      default: 'image',

      validator(value) {
        return ['image', 'video', 'iframe'].includes(value);
      }

    },
    // 缩略图大小, 宽 === 高时, 简略写法
    size: Number,
    // 缩略图宽度, 当给定width时, 会覆盖size的值
    width: Number,
    // 缩略图高度, 当给定height时, 会覆盖size值
    height: Number,
    // 缩略图是否懒加载
    lazy: {
      type: Boolean,
      default: false
    },
    // 源
    source: [String, Array, Object],
    // 缩略图后缀
    // 当type为image时, 且未指定thumb, 可通过thumbSuffix设置缩略图
    thumbSuffix: String,
    // 缩略图样式
    thumbStyle: Object,
    // 轮播图属性
    carouselAttrs: Object,
    // 删除函数
    removeFn: Function,
    // 统一的弹框标题
    title: String,
    // 强制多张图片按照单张显示
    sliceSingle: {
      type: Boolean,
      default: false
    }
  },
  components: {
    EleGalleryDialog: EleGalleryDialog
  },
  computed: {
    viewClass() {
      if (this.type === 'video' || this.type === 'iframe') {
        return 'el-icon-video-play';
      } else {
        return 'el-icon-zoom-in';
      }
    },

    computedStyle() {
      let width = this.width || this.size;
      let height = this.height || this.size;

      if (this.type === 'image') {
        width = width ? width + 'px' : '150px';
        height = height ? height + 'px' : '150px';
      } else if (this.type === 'video') {
        width = width ? width + 'px' : '360px';
        height = height ? height + 'px' : 'auto';
      } else if (this.type === 'iframe') {
        width = width ? width + 'px' : '360px';
        height = height ? height + 'px' : 'auto';
      }

      return Object.assign({}, {
        width,
        height,
        display: 'block'
      }, this.thumbStyle);
    },

    // 缩略图
    thumbs() {
      return this.computedSources.map(item => {
        return item.thumb;
      });
    },

    computedSources() {
      const sources = this.source;

      if (typeof sources === 'string') {
        // 传入参数为 string
        return [this.getStringSource(sources)];
      } else if (sources instanceof Array) {
        // 传入参数为 array, 数据里面既可以有string 又可以有 object
        const res = [];
        sources.forEach(item => {
          if (item instanceof Object) {
            res.push(this.getObjectSource(item));
          } else if (typeof item === 'string') {
            res.push(this.getStringSource(item));
          } else {
            console.warn('数组元素错误', sources, item);
          }
        });
        return res;
      } else if (sources instanceof Object) {
        // 传入参数为 object
        return [this.getObjectSource(sources)];
      } else {
        return [];
      }
    }

  },
  methods: {
    // 点击查看
    handlePreview(index) {
      this.$refs.dialog.startPreview(index);
    },

    handleRemove(index) {
      this.removeFn(index);
    },

    // 获取字符串形式来源
    getStringSource(src) {
      let thumb = src;

      if (this.type === 'image' && this.thumbSuffix) {
        thumb += this.thumbSuffix;
      }

      return {
        type: this.type,
        src: src,
        thumb: thumb
      };
    },

    // 获取对象形式来源
    getObjectSource(source) {
      source.type = source.thumb ? 'image' : this.type;
      source.thumb = source.thumb || source.src;
      return source;
    }

  }
});
;// CONCATENATED MODULE: ./node_modules/vue-ele-gallery/lib/EleGallery.vue?vue&type=script&lang=js&
 /* harmony default export */ var lib_EleGalleryvue_type_script_lang_js_ = (EleGalleryvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-52[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-52[0].rules[0].use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-52[0].rules[0].use[2]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./node_modules/vue-ele-gallery/lib/EleGallery.vue?vue&type=style&index=0&lang=css&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./node_modules/vue-ele-gallery/lib/EleGallery.vue?vue&type=style&index=0&lang=css&

;// CONCATENATED MODULE: ./node_modules/vue-ele-gallery/lib/EleGallery.vue



;


/* normalize component */

var EleGallery_component = normalizeComponent(
  lib_EleGalleryvue_type_script_lang_js_,
  EleGalleryvue_type_template_id_5268d882_render,
  EleGalleryvue_type_template_id_5268d882_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var EleGallery = (EleGallery_component.exports);
;// CONCATENATED MODULE: ./node_modules/vue-ele-gallery/lib/index.js


if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('ele-gallery', EleGallery);
}

/* harmony default export */ var lib = (EleGallery);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-80[0].rules[0].use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/package/VueElementUploadImage/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var VueElementUploadImagevue_type_script_lang_js_ = ({
  name: 'EleUploadImage',
  props: {
    // 值
    value: {
      type: [String, Array],

      default() {
        return [];
      }

    },
    // 是否剪裁
    crop: {
      type: Boolean,
      default: false
    },
    // 图片显示大小
    size: {
      type: Number,
      default: 150
    },
    // 裁剪高度
    cropHeight: {
      type: Number
    },
    // 裁剪宽度
    cropWidth: {
      type: Number
    },
    // 大小限制(MB)
    fileSize: {
      type: Number
    },
    // 响应处理函数
    responseFn: Function,
    // 文件类型, 例如['png', 'jpg', 'jpeg']
    fileType: {
      type: Array,
      default: () => []
    },
    // 是否显示上传成功的提示
    isShowSuccessTip: {
      type: Boolean,
      default: true
    },
    // 缩略图后缀, 例如七牛云缩略图样式 (?imageView2/1/w/20/h/20)
    thumbSuffix: {
      type: String,
      default: ''
    },
    // 是否显示提示
    isShowTip: {
      type: Boolean,
      default: true
    },
    // 弹窗标题
    title: String,
    // 图片懒加载
    lazy: {
      type: Boolean,
      default: false
    },
    // 上传地址 (同官网)
    action: {
      type: String,
      required: true
    },
    // 设置上传的请求头部(同官网)
    headers: Object,
    // 文件个数显示(同官网)
    limit: Number,
    // 是否启用拖拽上传 (同官网)
    drag: {
      type: Boolean,
      default: false
    },
    // 	支持发送 cookie 凭证信息 (同官网)
    withCredentials: {
      type: Boolean,
      default: false
    },
    // 是否支持多选文件 (同官网)
    multiple: {
      type: Boolean,
      default: false
    },
    // 上传时附带的额外参数(同官网)
    data: Object,
    // 上传的文件字段名 (同官网)
    name: {
      type: String,
      default: 'file'
    },
    // 覆盖默认的上传行为，可以自定义上传的实现 (同官网)
    httpRequest: Function,
    // 接受上传的文件类型（thumbnail-mode 模式下此参数无效）(同官网)
    accept: String,
    // 删除前的操作
    beforeRemove: Function
  },
  components: {
    Cropper: upload_2,
    EleGallery: lib
  },

  data() {
    return {
      cropData: {},
      isShowCrop: false,
      uploading: false,
      fileList: []
    };
  },

  computed: {
    // 是否显示提示
    showTip() {
      return this.isShowTip && (this.fileType.length || this.fileSize);
    },

    computedValues() {
      if (this.value) {
        if (typeof this.value === 'string') {
          return [this.value];
        } else {
          return [...this.value];
        }
      } else {
        return [];
      }
    },

    isShowUpload() {
      if (this.multiple) {
        return true;
      } else {
        return this.computedValues.length === 0;
      }
    },

    successFiles() {
      return this.fileList.filter(file => file.status === 'success');
    }

  },
  watch: {
    isShowCrop(value) {
      if (value === false) {
        this.cropData = {};
      }
    }

  },
  methods: {
    handleSetFileSet(fileName, fileType, fileSize) {
      const uid = this.cropData.uid || new Date().getTime();
      this.cropData = {
        name: fileName,
        percentage: 0,
        size: fileSize,
        type: fileType,
        status: 'ready',
        uid: uid
      };
    },

    handleCropSuccess(b64Data) {
      this.cropData.url = b64Data;
    },

    handleCropUploadError(status) {
      this.$message.error('上传失败, 请重试');
      this.$emit('error', status);
    },

    handleCropUploadSuccess(response) {
      this.cropData.status = 'success';
      this.cropData.percentage = 100;
      this.cropData.response = response;
      const file = Object.assign({}, this.cropData);
      let index = this.fileList.findIndex(item => item.uid === file.uid);

      if (index > -1) {
        this.fileList.splice(index, 1, file);
      } else {
        this.fileList.push(file);
      }

      this.handleUploadSuccess(response, file, this.fileList);
    },

    // 上传前校检格式和大小
    handleBeforeUpload(file) {
      let isImg = false;

      if (this.fileType.length) {
        let fileExtension = '';

        if (file.name.lastIndexOf('.') > -1) {
          fileExtension = file.name.slice(file.name.lastIndexOf('.') + 1);
        }

        isImg = this.fileType.some(type => {
          if (file.type.indexOf(type) > -1) return true;
          if (fileExtension && fileExtension.indexOf(type) > -1) return true;
          return false;
        });
      } else {
        isImg = file.type.indexOf('image') > -1;
      }

      if (!isImg) {
        this.$message.error(`文件格式不正确, 请上传${this.fileType.join('/')}图片格式文件!`);
        return false;
      }

      if (this.fileSize) {
        const isLt = file.size / 1024 / 1024 < this.fileSize;

        if (!isLt) {
          this.$message.error(`上传头像图片大小不能超过 ${this.fileSize} MB!`);
          return false;
        }
      }

      this.uploading = true;
      return true;
    },

    handleChange(file, fileList) {
      this.uploading = false;
      this.fileList = fileList;
    },

    // 文件个数超出
    handleExceed() {
      this.$message.error(`最多上传${this.limit}张图片`);
    },

    // 上传失败
    handleUploadError(err) {
      this.uploading = false;
      this.$message.error('上传失败, 请重试');
      this.$emit('error', err);
    },

    // 上传成功回调
    handleUploadSuccess(response, file) {
      let url = response;
      this.uploading = false;

      if (this.isShowSuccessTip) {
        this.$message.success('上传成功');
      }

      if (this.responseFn) {
        url = this.responseFn(response, file, this.successFiles);
      }

      if (this.multiple) {
        if (Array.isArray(this.value)) {
          this.$emit('input', [...this.value, url]);
        } else {
          this.$emit('input', [url]);
        }
      } else {
        this.$emit('input', url);
      }
    },

    doRemove(index) {
      if (this.multiple) {
        const data = [...this.computedValues];
        data.splice(index, 1);
        this.$emit('input', data || []);
      } else {
        this.$emit('input', null);
      }
    },

    handleRemove(index) {
      if (!this.beforeRemove) {
        this.doRemove(index);
      } else if (typeof this.beforeRemove === 'function') {
        const file = this.multiple ? this.computedValues[index] : this.computedValues;
        const before = this.beforeRemove(file, this.computedValues);

        if (before && before.then) {
          before.then(() => {
            this.doRemove(index);
          }, () => {});
        } else if (before !== false) {
          this.doRemove(index);
        }
      }
    }

  },

  mounted() {
    // 插入到body中, 避免弹出层被遮盖
    if (this.crop && this.$refs.cropper) {
      document.body.appendChild(this.$refs.cropper.$el);
    }
  }

});
;// CONCATENATED MODULE: ./src/package/VueElementUploadImage/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var package_VueElementUploadImagevue_type_script_lang_js_ = (VueElementUploadImagevue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-52[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-52[0].rules[0].use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-52[0].rules[0].use[2]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/package/VueElementUploadImage/index.vue?vue&type=style&index=0&lang=css&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/package/VueElementUploadImage/index.vue?vue&type=style&index=0&lang=css&

;// CONCATENATED MODULE: ./src/package/VueElementUploadImage/index.vue



;


/* normalize component */

var VueElementUploadImage_component = normalizeComponent(
  package_VueElementUploadImagevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var VueElementUploadImage = (VueElementUploadImage_component.exports);
;// CONCATENATED MODULE: ./src/package/index.js


if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component(VueElementUploadImage.name, VueElementUploadImage);
}

/* harmony default export */ var src_package = (VueElementUploadImage);
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = (src_package);


}();
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=vue-element-upload-image.umd.js.map