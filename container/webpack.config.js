const webpack = require("webpack");

module.exports = {
  plugins: [
    new webpack.LoaderOptionsPlugin({
      test: require.resolve("jquery"),
      options: {
        exposes: ["$", "jQuery"],
      },
    }),
  ],
};
