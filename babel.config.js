module.exports = {
  // 配置plugins，为了使用vant不然没有样式引入入
  // 需要安装 cnpm install antd babel-plugin-import --save
  // cnpm install babel-plugin-import --save
  plugins: [ 
    [
      "import",
      {
        libraryName: "vant",
        libraryDirectory: "es",
        style: true
      },
      "vant"
    ]
  ],
  presets: [
    '@vue/cli-plugin-babel/preset'
    // "@vue/app"
  ]
}
