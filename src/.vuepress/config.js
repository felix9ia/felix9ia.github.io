const {config} = require("vuepress-theme-hope");

module.exports = config({
    title: "Sloth",
    description: "活在当下",

    base: "/sloth/",

    dest: "./dist",
    plugins: {
        "vuepress-plugin-auto-sidebar": {}
    },
    // remove this if you are not using Vue and React in "markdownEnhance: code demo"
    head: [
        [
            "script",
            {src: "https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js"},
        ],
        [
            "script",
            {
                src:
                    "https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js",
            },
        ],
        ["script", {src: "https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js"}],
        [
            "script",
            {src: "https://cdn.jsdelivr.net/npm/@babel/standalone/babel.min.js"},
        ],
    ],

    locales: {
        "/": {
            title: "Sloth",
            description: "贾鹏飞的博客",
        },
    },

    themeConfig: {
        logo: "/logo.svg",
        hostname: "https://vuepress-theme-hope-demo.mrhope.site",

        author: "felix9ia",
        repo: "https://github.com/felix9ia",
        // docsRepo: "https://github.com/vuepress-theme-hope/demo",
        docsDir: "src",
        nav: [
            {text: "博客主页", link: "/", icon: "home"},
            {text: "项目主页", link: "/home/", icon: "home"},
        ],
        // locales: {
        //     "/en/": {
        //         nav: [
        //             {text: "Blog Home", link: "/en", icon: "home"},
        //             {text: "Project Home", link: "/en/home/", icon: "home"},
        //             {
        //                 text: "Guide",
        //                 icon: "creative",
        //                 link: "/en/guide/",
        //             },
        //         ],
        //         sidebar: {
        //             "/": [
        //                 "",
        //                 "home",
        //                 "slides",
        //                 {
        //                     title: "Guide",
        //                     icon: "creative",
        //                     prefix: "guide/",
        //                     children: ["", "page", "markdown", "disable", "encrypt"],
        //                 },
        //             ],
        //         },
        //     },
        // },

        blog: {
            intro: "/intro/",
            sidebarDisplay: "mobile",
            links: {
                Zhihu: "https://www.zhihu.com/people/jia-peng-fei-81",
                Github: "https://github.com/felix9ia",
            },
        },

        footer: {
            display: true,
            content: "Sloth",
        },

        comment: {
            type: "valine",
            appId: "HJkxRfRvuGxbNSExpCIrM6Vv-gzGzoHsz",
            appKey: "49rygaa2PM8bXhP7CchWDyoq",
        },

        copyright: true,

        lastUpdate: {
            timezone: "Asia/Shanghai",
        },

        mdEnhance: {
            // please only enable the features you need
            enableAll: true,
            presentation: {
                plugins: [
                    "highlight",
                    "math",
                    "search",
                    "notes",
                    "zoom",
                    "anything",
                    "audio",
                    "chalkboard",
                ],
            },
        },

        pwa: {
            favicon: "/favicon.ico",
            cachePic: true,
            apple: {
                icon: "/assets/icon/apple-icon-152.png",
                statusBarColor: "black",
            },
            msTile: {
                image: "/assets/icon/ms-icon-144.png",
                color: "#ffffff",
            },
            manifest: {
                icons: [
                    {
                        src: "/assets/icon/chrome-mask-512.png",
                        sizes: "512x512",
                        purpose: "maskable",
                        type: "image/png",
                    },
                    {
                        src: "/assets/icon/chrome-mask-192.png",
                        sizes: "192x192",
                        purpose: "maskable",
                        type: "image/png",
                    },
                    {
                        src: "/assets/icon/chrome-512.png",
                        sizes: "512x512",
                        type: "image/png",
                    },
                    {
                        src: "/assets/icon/chrome-192.png",
                        sizes: "192x192",
                        type: "image/png",
                    },
                ],
                shortcuts: [
                    {
                        name: "Guide",
                        short_name: "Guide",
                        url: "/guide/",
                        icons: [
                            {
                                src: "/assets/icon/guide-maskable.png",
                                sizes: "192x192",
                                purpose: "maskable",
                                type: "image/png",
                            },
                            {
                                src: "/assets/icon/guide-monochrome.png",
                                sizes: "192x192",
                                purpose: "monochrome",
                                type: "image/png",
                            },
                        ],
                    },
                ],
            },
        },
    },
});