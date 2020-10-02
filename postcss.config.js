module.exports = {
  plugins: [
    require("postcss-import")(),
    require("@hail2u/css-mqpacker")(),
    require("cssnano")({ preset: "advanced" }),
  ],
};
