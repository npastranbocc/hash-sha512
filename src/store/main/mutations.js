const mutations = {
  SET_PREFIX(stateMain, payload) {
    stateMain.prefix = payload;
  },
  ENABLE_PREFIX(stateMain, payload) {
    stateMain.enabledPrefix = payload;
  },
};

export default mutations;
