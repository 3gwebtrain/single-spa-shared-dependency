const singleSpaAngularWebpack = require("single-spa-angular/lib/webpack")
  .default;

module.exports = (angularWebpackConfig, options) => {
  const singleSpaWebpackConfig = singleSpaAngularWebpack(
    angularWebpackConfig,
    options
  );

  singleSpaWebpackConfig.externals = [
    /^rxjs$/,
    /^rxjs\/operators$/,

    /^zone\.js$/,
    /^@angular\/router$/,
    /^@angular\/compiler$/,
    /^@angular\/common$/,
    /^@angualr\/core$/,
    /^@angular\/platform-browser$/,
  ];
  // Feel free to modify this webpack config however you'd like to
  return singleSpaWebpackConfig;
};
