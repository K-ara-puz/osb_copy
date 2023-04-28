import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './vuex/store'
import popupsController from './popups-controller/popupsController'

const app = createApp(App)
app.use(router);
app.use(store);
// Next line give us possibility to call this.$root.popupsController
app.config.globalProperties.popupsController = popupsController;
app.mount("#app");

