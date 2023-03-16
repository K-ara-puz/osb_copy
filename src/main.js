import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './vuex/store'
// import { swiper2 } from './swiperSlider'

const app = createApp(App)
app.use(router);
app.use(store);
// app.use(swiper2);
app.mount("#app");

