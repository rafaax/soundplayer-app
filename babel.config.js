module.exports = function (api) {
    api.cache(true);
    return {
      presets: ['babel-preset-expo'],
      plugins: [
        [
          'expo-router/babel',
          {
            // Set the appRoot to your new screens directory
            appRoot: './src/screens',
          },
        ],
      ],
    };
  };
