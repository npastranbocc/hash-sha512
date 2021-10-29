module.exports = {
  publicPath: "/hash-sha512/",
  lintOnSave: false,
  transpileDependencies: ["vuex-persist"],
  pwa: {
    name: "Hash Sha512 App",
    themeColor: "#432e8b",
    msTileColor: "#FFF",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "black",
    workboxPluginMode: "InjectManifest",
    workboxOptions: {
      swSrc: "src/registerServiceWorker.js",
    },
    manifestOptions: {
      name: "Hash Sha512 App",
      short_name: "Hash Sha512",
      start_url: ".",
      display: "standalone",
      theme_color: "#432e8b",
    },
  },
};
