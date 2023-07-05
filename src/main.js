import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/router";
import store from "./vuex/store";
import popupsController from "./popups-controller/popupsController";
import helperFunctions from "./helperGlobalFunctions";
import vue3GoogleLogin from "vue3-google-login";

const app = createApp(App);
app.use(router);
app.use(store);
app.use(vue3GoogleLogin, {
  clientId: "158374272250-1m3t9fm1p1ftha8opdaikugs400c7qc3.apps.googleusercontent.com",
});
// Next line give us possibility to call this.$root.popupsController
app.config.globalProperties.popupsController = popupsController;
app.config.globalProperties.helperFunctions = helperFunctions;
app.mount("#app");
