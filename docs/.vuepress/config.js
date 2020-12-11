const path = require('path')
module.exports = {
  base: "/sloth/",
  themeConfig: {
    nav: [
      { text: "入门", link: "/" },
      { text: "进阶", link: "/high" },
      { text: "博客", link: "https://felix9ia.github.io/#/blog" },
      { text: "Github", link: "https://github.com/felix9ia/sloth" },
    ],
    sidebarDepth: 2,
    sidebar: ["/"],
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@img': path.resolve(__dirname, './public/img')
      }
    }
  }
};
