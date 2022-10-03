import chart from './view/index';
import { App, DefineComponent, createApp } from 'vue';
// import Main from "./view/Main.vue"

const component = [chart];
const version = '0.0.1';
// console.log(123);
const install = (app: App) => {
    app.mount('#app')
};

export default install;