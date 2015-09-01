module.exports = {
  entry: './lib/client.js',
  output: {
    path: './dist',
    libraryTarget: 'umd',
    library: 'superagent'
  },
  plugins: []
};
