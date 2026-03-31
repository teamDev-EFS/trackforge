/** Keeps PostCSS local so D:\\postcss.config.mjs on the drive root is not used. */
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
