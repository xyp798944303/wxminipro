// custom-tab-bar/index.js
Component({
    data: {
        active: 0,
        list: [{
            text: "资料",
            icon: "newspaper-o",
            url: "/pages/material/material"
        },
        {
            text: "上传",
            icon: "upgrade",
            url: "/pages/upload/upload"
        },
        {
            text: "我的",
            icon: "user-o",
            url: "/pages/mine/mine"
        },
        ]
    },
    methods: {
        onChange: function (e) {
            var i = e.detail;
            this.setData({
                active: i
            })
            wx.switchTab({
                url: this.data.list[i].url,
            })
            console.log(this.data.active,i)
        }
    }
})
