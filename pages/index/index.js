import request from '../../utils/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bannerList:[],//banner轮播图
    tuijianList:[],//推荐歌单的内容区
    newSongQuestList:[],//新歌速递的信息
    newDiscData:[],//新碟上架的信息
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    //获取头部轮播图数据
    let bannerListData = await request('/getBannersData')
    this.setData({
      bannerList:bannerListData.result.results
    })

    //获取推荐歌单信息
    let tuijianData = await request('/getTuijianData')
    this.setData({
      tuijianList:tuijianData.msg
    })

    //获取新歌速递的信息/getNewSongData
    let newSongQuestData = await request('/getNewSongData')
    this.setData({
      newSongQuestList:newSongQuestData.result
    })

  //  获取新碟上架的信息
    let newDiscData = await request('/getNewDiscData')
    this.setData({
      newDiscData:newDiscData.result.results
    })
  },

  toSongList(){
    wx.navigateTo({
      url: '/pages/songList/songList',
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