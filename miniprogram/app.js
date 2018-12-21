//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    temperature: {},
    light: {},
    humidity: {} 
  },
  globalData:{
userInfo:null,
    ctxPath: 'http://tianqi.moji.com/'
  },
  globalData: {
    userInfo: null,
    ctxPath: 'http://trip.elong.com/xidan/'
  },
  globalData: {
    userInfo: null,
    ctxPath: 'http://www.mafengwo.cn/poi/3512.html'
  },
  globalData: {
    userInfo: null,
    ctxPath: 'https://baike.so.com/doc/2183432-2310313.html'
  },
  globalData: {
    userInfo: null,
    ctxPath: 'http://beijing.lotour.com/wukesongtiyuguan/'
  },
  globalData: {
    userInfo: null,
    ctxPath: 'http://image.so.com/i?src=360pic_strong&z=1&i=0&cmg=f8bbef98926aa49ff5ebd9977f5da017&q=%E5%A5%A5%E6%9E%97%E5%8C%B9%E5%85%8B%E5%85%AC%E5%9B%AD%E5%A4%9C%E6%99%AF'
  },
  globalData: {
    userInfo: null,
    ctxPath: 'https://baike.so.com/doc/3361908-3539672.html'
  },
})
