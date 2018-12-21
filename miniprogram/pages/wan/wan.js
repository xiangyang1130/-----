Page({
  data: {
    motto: '学生餐厅价格较教工餐厅略高',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    tempFilePaths: null,
    imageSrc: '../../img/14.jpg'
  },

  //确定餐厅

  validate1: function (res) {
    var that = this;
    wx.showActionSheet({
      itemList: ['学生', '教工'],
      itemColor: "black",
      success: function (res) {
        if (res.tapIndex == 0) {
          wx.navigateTo
            ({
              url: '../wan/xy/xy',
            })
        } else if (res.tapIndex == 1) {
          wx.navigateTo
            ({
              url: '../wan/jg/jg',
            })

        }

      }
    })

  },
  validate2: function (res) {
    var that = this;
    wx.showActionSheet({
      itemList: ['学生'],
      itemColor: "black",
      success: function (res) {
        if (res.tapIndex == 0) {
          wx.navigateTo
            ({
              url: '../zhong/xs/xs',
            })
        } 

      }
    })

  },

  onLoad: function () 
  {
    wx.showModal({
      title: '餐厅选择',
      content: '食堂高峰期为17:20~17:40注意错峰~',
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  }
})