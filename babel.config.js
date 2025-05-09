module.exports = function (api) {
  api.cache(true);

  return {
    presets: ['babel-preset-expo'],
    plugins: [
      '@babel/plugin-proposal-export-namespace-from',
      ['react-native-unistyles/plugin', { debugger: true }],
      'react-native-reanimated/plugin',
    ],
  };
};
