import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

import Vuetify from "vuetify";
import colors from "vuetify/es5/util/colors";

Vue.use(Vuetify, {
  theme: {
    primary: colors.indigo.base,
    secondary: colors.indigo.darken3,
    accent: colors.indigo.accent4
  },
  iconfont: "fa"
});
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
