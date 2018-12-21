Page({
  data: {
    imageSrc: '../../../pages/picture/wukesong.jpg'
  },
  dong: function () {
    let that = this;
    wx.navigateTo({
      url: '../wukesong/dong/dong',
    })
  }
})
