let Mock = require("mockjs")
let data = [{
    title: "中国npm镜像源升级公告",
    author: "fengmk2",
    browse: "46306",
    reply: "11"
},
{
    title: "中国npm镜像源升级公告",
    author: "fengmk2",
    browse: "46306",
    reply: "11"
},
{
    title: "中国npm镜像源升级公告",
    author: "fengmk2",
    browse: "46306",
    reply: "11"
},
{
    title: "中国npm镜像源升级公告",
    author: "fengmk2",
    browse: "46306",
    reply: "11"
},
{
    title: "中国npm镜像源升级公告",
    author: "fengmk2",
    browse: "46306",
    reply: "11"
},
{
    title: "中国npm镜像源升级公告",
    author: "fengmk2",
    browse: "46306",
    reply: "11"
},
{
    title: "中国npm镜像源升级公告",
    author: "fengmk2",
    browse: "46306",
    reply: "11"
},
{
    title: "中国npm镜像源升级公告",
    author: "fengmk2",
    browse: "46306",
    reply: "11"
},
{
    title: "中国npm镜像源升级公告",
    author: "fengmk2",
    browse: "46306",
    reply: "11"
},
{
    title: "中国npm镜像源升级公告",
    author: "fengmk2",
    browse: "46306",
    reply: "11"
}, {
    title: "中国npm镜像源升级公告",
    author: "fengmk2",
    browse: "46306",
    reply: "11"
}, {
    title: "中国npm镜像源升级公告",
    author: "fengmk2",
    browse: "46306",
    reply: "11"
}, {
    title: "中国npm镜像源升级公告",
    author: "fengmk2",
    browse: "46306",
    reply: "11"
},
]
Mock.mock("/api/homeindex", "get", function (config) {
    console.log(config)
    return data

})
Mock.mock(/\/api\/homeindex\/\d/, "delete", function (config) {
    console.log(config.url)
    let arr = config.url.split("/")
    let id = arr.pop()
    data.splice(id, 1)
    data.forEach(function (item, index) {
        item.id = index
    })
    return data
})