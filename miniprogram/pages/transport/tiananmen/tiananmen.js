Page({
  data: {
    imageSrc: '../../../pages/picture/tiananmen.jpg'
  },
  zhishi: function () {
    let that = this;
    wx.navigateTo({
      url: '../tiananmen/zhishi/zhishi',
    })
  }
})
