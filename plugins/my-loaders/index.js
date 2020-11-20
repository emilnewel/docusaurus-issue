module.exports = function (context, options) {
  return {
    name: "loaders",
    configureWebpack(config, isServer) {
      return {
        module: {
          rules: [
            {
              test: /\.(gif|png|jpe?g|svg)$/i,
              exclude: /\.(mdx?)$/i,
              use: ["file-loader", { loader: "image-webpack-loader" }],
            },
            {
              test: /\.(woff(2)?|ttf)(\?v=\d+\.\d+\.\d+)?$/,
              use: [
                {
                  loader: "file-loader",
                  options: {
                    name: "[name].[ext]",
                    outputPath: "fonts/",
                  },
                },
              ],
            },
          ],
        },
      };
    },
  };
};
