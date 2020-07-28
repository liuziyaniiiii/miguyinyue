import request from "../../utils/request";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone:'',
    password:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  //收集表单项数据
  handleInput(event){
    // console.log('input:' ,event.detail.value)
    let type = event.currentTarget.id;
    this.setData({
      [type]:event.detail.value
    })
  },

  async login(){
    //1.收集表单项数据
    let {phone,password} =this.data;
    //2.前端验证
    if(!phone || !password){
      // wx.showToast({
      //   title:'用户名/密码错误',
      //   icon:'none'
      // })
      this.showToast('用户名/密码错误')
    }else{
    //  3.后端验证
      let result = await request('/getLoginData')
      // console.log(result)
      this.showToast('登录成功','success')
    // 1. 保存用户数据至本地
      wx.setStorageSync('userInfo',JSON.stringify(result.result.userInfo))
    //  2.跳转到个人中心界面
      wx.switchTab({
        url: '/pages/personal/personal'
      })
    }
  },

  //showToast提示
  showToast(title='',icon='none'){
    wx.showToast({
      title,
      icon
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