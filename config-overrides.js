module.exports = function override(config, env) {
  return {
    ...config,
    resolve: {
      ...config.resolve,
      extensions: [".js", ".jsx", ".scss", ".css", ".json", ".svg"]
    }
  };
};