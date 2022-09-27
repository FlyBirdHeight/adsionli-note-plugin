import plugin from "./buildconfig/plugins"
import output from "./buildconfig/output"
import jsx from "acorn-jsx"
export default {
    input: 'src/index.ts',
    output,
    plugins: plugin,
    external: ["vue", "@antv/g2"],
    acornInjectPlugins: [jsx()]
}
