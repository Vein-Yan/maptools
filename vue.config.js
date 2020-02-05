module.exports = {
  publicPath:
    process.env.NODE_ENV === 'production'
      ? `https://cdn.jsdelivr.net/npm/maptools-vue@0.0.3/docs/`
      : '/',
  outputDir: './docs/',
  assetsDir: './assets/',
  devServer: {
    hot: true, // 热更新
    open: true,
  },
}
