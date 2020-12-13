const path = require('path')
module.exports = {
  base: "/sloth/",
  themeConfig: {
    nav: [
      { text: "Sloth", link: "/" },
      { text: "技术", link: "/computer/" },
      { text: "阅读", link: "/reading/" },
      { text: "运动", link: "/health/" },
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
