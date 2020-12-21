import { createApp } from "vue";
import { createStore } from "vuex";
import App from "./App.vue";
import storeConfig from "./store/store-config";

const app = createApp(App);

const store = createStore(storeConfig);
app.use(store);

app.mount("#app");
