
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
import { defineComponent, openBlock, createElementBlock, createElementVNode, createApp } from 'vue';

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var _hoisted_1 = /*#__PURE__*/createElementVNode("h1", null, "Adsionli", -1
/* HOISTED */
);

var _hoisted_2 = [_hoisted_1];
var __default__ = {
  name: "Main"
};
var script = /*#__PURE__*/defineComponent(_objectSpread2(_objectSpread2({}, __default__), {}, {
  emits: [],
  setup: function setup(__props, _ref) {
    _ref.emit;
    return function (_ctx, _cache) {
      return openBlock(), createElementBlock("div", null, _hoisted_2);
    };
  }
}));

script.__file = "src/view/Main.vue";

var version = "0.0.1"; // createApp(Main).mount("#app");

var app = createApp(script);
console.log(app);

var install = function install(app) {
  console.log(app); // app.use(chart);
};

export { install, version };
//# sourceMappingURL=index.js.map
