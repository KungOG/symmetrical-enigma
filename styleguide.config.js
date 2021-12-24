const path = require("path");
const { version } = require("./package");

module.exports = {
  title: "Kungog UI",
  components: "src/components/**/index.{js,ts,tsx}",
  styleguideComponents: {
    Wrapper: path.join(__dirname, "styleguide/StyleGuideWrapper"),
  },
  defaultExample: true,
  moduleAliases: {
    "rsg-example": path.resolve(__dirname, "src"),
  },
  usageMode: "expand",
  version,
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.(js|ts)x?$/,
          exclude: /node_modules/,
          loader: "babel-loader",
        },
      ],
      noParse: /\.(css|scss)/,
    },
    resolve: {
      extensions: [".js", "jsx", ".ts", ".tsx", ".json"],
    },
  },
};
