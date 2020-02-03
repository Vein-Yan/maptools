module.exports = {
  publicPath:
    process.env.NODE_ENV === 'production'
      ? `https://cdn.jsdelivr.net/npm/maptools-vue@0.0.2/docs/`
      : '/',
  outputDir: './docs/',
  assetsDir: './assets/',
  devServer: {
    open: true,
  },
}
