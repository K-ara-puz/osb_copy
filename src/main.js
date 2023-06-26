import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './vuex/store'
import popupsController from './popups-controller/popupsController'
import helperFunctions from './helperGlobalFunctions'

const app = createApp(App)
app.use(router);
app.use(store);
// Next line give us possibility to call this.$root.popupsController
app.config.globalProperties.popupsController = popupsController;
app.config.globalProperties.helperFunctions = helperFunctions;
app.mount("#app");

