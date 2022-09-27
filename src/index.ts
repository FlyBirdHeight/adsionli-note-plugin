import chart from './view/index';
import { App, DefineComponent } from 'vue';

const component = [chart];
const version = '0.0.1';

const install = (app) => {
    component.map((item) => {
        app.use(item);
    });
};

export default install;