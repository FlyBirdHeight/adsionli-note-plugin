import chart from './view/index';
import { App, DefineComponent } from 'vue';

const component = [chart];
const version = '0.0.1';
const install = (app: App) => {
    component.map((item: any) => {
        app.use(item);
    });
};

export default install;