// Trong React Native, "Metro" là tên gọi của công cụ bundler (trình đóng gói)
//  được sử dụng để đóng gói mã nguồn JavaScript và tài nguyên tĩnh (như hình ảnh, font chữ...) 
//  thành một gói duy nhất có thể chạy trên các thiết bị di động.

const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

config.transformer = {
  ...config.transformer,
  babelTransformerPath: require.resolve('react-native-svg-transformer'),
};
config.resolver = {
  ...config.resolver,
  assetExts: config.resolver.assetExts.filter((ext) => ext !== 'svg'),
  sourceExts: [...config.resolver.sourceExts, 'svg'],
};

module.exports = config;
//