import { defineComponent, computed, App } from 'vue'

const chartProps = {}

const Chart = defineComponent({
  name: 'chart',
  props: chartProps,

  setup(props) {
    const chickChart = () => {
      console.log('click')
    }
    return <div onClick={chickChart}>Chart</div>
  },
})

Chart.install = (app) => {
  app.component(Chart.name, Chart)
}

export default Chart
