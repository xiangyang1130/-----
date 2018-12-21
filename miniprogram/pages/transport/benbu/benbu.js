Page({
  data: {
    imageSrc: '../../../pages/picture/love.jpg'
  },
  bupt: function () {
    let that = this;
    wx.navigateTo({
      url: '../benbu/bupt/bupt',
    })
  }
})