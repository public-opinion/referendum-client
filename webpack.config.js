

module.exports = {
  devServer: {
    host: '0.0.0.0',
    port: 3000,
    public: `localhost:8000`,
    historyApiFallback: false,
    hot: true,
    inline: true,
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000,
        ignored: /node_modules/,
    },
    disableHostCheck: true,
  }
};