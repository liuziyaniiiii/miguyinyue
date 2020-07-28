import request from "../../utils/request";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    choiceList:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    let result = await request('/getChoiceListData')
    this.setData({
      choiceList:result.retMsg.playlist
    })
  },
  // 点击加载更多
  async toMore(){
    let second = await request('/getChoiceSecondData')

    this.setData({
      choiceList:this.data.choiceList.concat(second.retMsg.playlist)
    })
  },
  

  // 跳转到song的页面
  toSong(event){
    let {id} = event.currentTarget.dataset
    // console.log(event)
    //路由传参query
    wx.navigateTo({
      url: '/pages/song/song?musicId='+id,
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

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