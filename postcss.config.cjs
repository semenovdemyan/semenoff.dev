module.exports = {
  plugins: [
    require('postcss-preset-env')({
      stage: 0, // уровень экспериментальных фич (0 - самые новые)
      browsers: 'last 2 versions', // поддержка последних двух версий браузеров
    }),
    require('autoprefixer'),
    require('postcss-nested'),
  ],
};
