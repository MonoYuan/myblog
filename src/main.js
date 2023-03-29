import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
//import store from './store'
//import { createPinia } from 'pinia'
import store from './store'


const app = createApp(App);
app.use(store);
//app.use(store)
app.use(ElementPlus);
// 注册elementplus图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
}
app.use(router);
app.mount('#app');