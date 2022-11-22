module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
    // ElementUI按需引入
    ["@babel/preset-env", { "modules": false }] //@babel/preset-env es2015
  ],
  // ElementUI按需引入
  "plugins": [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}
