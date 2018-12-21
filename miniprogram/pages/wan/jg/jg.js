let data = require("../../../libs/jiaogongwan.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },
 
  /**
   * 生命周期函数--监听页面加载
   */
  //跳转商家页面
  goshop(e) {
    let id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: '../shops 1/shops?id=' + id
    })

  },
  onLoad: function (options) {
    console.log(data.shops)

    //本地请求的资源
    this.setData({
      shops: data.shops
    })
  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },


  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})