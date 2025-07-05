const { getDefaultConfig } = require('expo/metro-config');

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

// Enable CSS support for React Native Web
config.resolver.platforms = ['ios', 'android', 'native', 'web'];

// Add support for additional file extensions if needed
config.resolver.assetExts.push(
  // Add any additional asset extensions here
  'db',
  'mp3',
  'ttf',
  'obj',
  'png',
  'jpg'
);

// Configure transformer for better compatibility
config.transformer.getTransformOptions = async () => ({
  transform: {
    experimentalImportSupport: false,
    inlineRequires: true,
  },
});

module.exports = config;
