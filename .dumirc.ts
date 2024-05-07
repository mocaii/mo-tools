import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'mo-tools',
    logo: 'http://mocaii.cn/favicon.ico',
  },
  favicons: ['http://mocaii.cn/favicon.ico'],
  hash: true,
});
