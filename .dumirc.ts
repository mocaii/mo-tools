import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'mo-tools',
    logo: 'http://mocaii.cn/favicon.ico',
    socialLinks: {
      github: 'https://github.com/mocaii/mo-tools-fe',
    },
  },
  favicons: ['http://mocaii.cn/favicon.ico'],
  hash: true,
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      },
      'antd',
    ],
  ],
});
