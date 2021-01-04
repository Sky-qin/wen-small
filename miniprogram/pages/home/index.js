//index.js
const app = getApp()

Page({
  data: {
    title: "home"
  },

  onLoad: function() {
    console.log("onLoad-home")
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              this.setData({
                avatarUrl: res.userInfo.avatarUrl,
                userInfo: res.userInfo
              })
            }
          })
        }
      }
    })
  },



  onGetOpenid: function() {
    // 调用云函数
    console.log('ssssss')
  },
})
