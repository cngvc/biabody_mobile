module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@constants': './src/constants',
          '@components': './src/components',
          '@assets': './src/assets',
          '@features': './src/features',
          '@providers': './src/providers',
          '@themes': './src/themes',
          '@store': './src/store',
          '@navigation': './src/navigation',
          '@hooks': './src/hooks',
        },
      },
    ],
  ],
};
