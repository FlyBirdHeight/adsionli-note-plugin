import { defineComponent, createVNode, createTextVNode } from 'vue';

var chartProps = {};
var Chart = defineComponent({
  name: 'chart',
  props: chartProps,
  setup: function setup(props) {
    var chickChart = function chickChart() {
      console.log('click');
    };

    return createVNode("div", {
      "onClick": chickChart
    }, [createTextVNode("Chart")]);
  }
});

Chart.install = function (app) {
  app.component(Chart.name, Chart);
};

var component = [Chart];

var install = function install(app) {
  component.map(function (item) {
    app.use(item);
  });
};

export { install as default };
