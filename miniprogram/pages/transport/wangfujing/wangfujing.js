Page({
  data: {
    imageSrc: '../../../pages/picture/wangfujing.jpg'
  },
  chi: function () {
    let that = this;
    wx.navigateTo({
      url: '../wangfujing/chi/chi',
    })
  }
})
