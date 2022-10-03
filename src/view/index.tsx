import { defineComponent, computed, withModifiers, App } from 'vue'

type chartPropsType = {}
const chartProps = {}
const Chart = defineComponent({
  name: 'chart',
  props: chartProps,

  setup(props: chartPropsType) {
    const chickChart = () => {
      console.log('click')
    }
    return (
      <div
        onClick={withModifiers(() => {
          chickChart()
        }, ['stop'])}
      >
        Chart
      </div>
    )
  },
})

Chart.install = (app: App) => {
  app.component(Chart.name, Chart)
}

export default Chart
