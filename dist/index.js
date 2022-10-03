
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
import { defineComponent, createVNode, withModifiers, createTextVNode } from 'vue';

var chartProps = {};
var Chart = defineComponent({
  name: 'chart',
  props: chartProps,
  setup: function setup(props) {
    var chickChart = function chickChart() {
      console.log('click');
    };

    return createVNode("div", {
      "onClick": withModifiers(function () {
        chickChart();
      }, ['stop'])
    }, [createTextVNode("Chart")]);
  }
});

Chart.install = function (app) {
  app.component(Chart.name, Chart);
};

var install = function install(app) {
  app.mount('#app');
};

export { install as default };
//# sourceMappingURL=index.js.map
