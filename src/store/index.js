import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";

import state from "./state";
import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";

// Modules
import control from "./control";
import main from "./main";

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  modules: ["main", "control"],
});

export default new Vuex.Store({
  getters,
  mutations,
  state,
  actions,
  modules: {
    control,
    main,
  },
  strict: false,
  plugins: [vuexLocal.plugin],
});
