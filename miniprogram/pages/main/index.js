//index.js
const app = getApp()

Page({
  data: {
    title: "main"
  },

  onLoad: function() {

    // 获取用户信息
    wx.getSetting({
      success: res => {
        console.log('getSetting', res)
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
})
