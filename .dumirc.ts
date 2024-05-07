import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'mo-tools',
    logo: 'http://mocaii.cn/favicon.ico',
    socialLinks: {
      github: 'https://github.com/mocaii/mo-tools',
    },
  },
  favicons: ['http://mocaii.cn/favicon.ico'],
  hash: true,
});
