Component({
  data: {
    selected: 0,
    color: "#7A7E83",
    selectedColor: "#3cc51f",
    list: [{
      "pagePath": "/pages/home/index",
      "selectedIconPath": "./images/code-db-inc-dec.png",
      "text": "首页"
    },
    {
      "pagePath": "/pages/index/index",
      "text": "xxx"
    }, 
    {
      "pagePath": "/pages/main/index",
      "text": "aaaa"
    }]
  },
  attached() {
  },
  onLoad(options) {
    console.log('onLoad监听页面加载');
    debugger
  },
  onShow() {
    console.log('onShow监听小程序显示');
    console.log("selected", this.selected)
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({url})
      this.setData({
        selected: data.index
      })
      getApp().globalData.selected = data.index
    }
  }
})