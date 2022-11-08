import { App, createApp } from 'vue';
import Main from "./view/Main.vue";
import chart from "./view/index";
const version = "0.0.1";

// createApp(Main).mount("#app");
const app = createApp(Main);
console.log(app);
const install = (app: App) => {
    console.log(app);
    // app.use(chart);
}

export {
    install,
    version
}