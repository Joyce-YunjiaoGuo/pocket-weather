//index.js
//获取应用实例
const app = getApp()
import { getImgSrc } from '../../utils/imgsrc.js';
Page({
  data: {
    basic: {},
    now: {},
    forecast: [],
    lifestyle: [],
    imgSrc: '',
    value: '北京'
  },
  //事件处理函数

  onLoad: function () {
    this._asyncUpdate(this.data.value);
  
  },

  _asyncUpdate(value) {
    wx.showLoading({
      title: '加载中',
    })
    this._getData(value).then((res) => {
      if(res.data.HeWeather6[0].status == 'unknown location') {
        wx.hideLoading();
        wx.showToast({
          title: '搜索不到哦~换个城市吧',
          icon: 'none'
        })
        return
      }
      if (!res.data.HeWeather6[0].lifestyle) {
        this.setData({
          basic: res.data.HeWeather6[0].basic,
          now: res.data.HeWeather6[0].now,
          forecast: res.data.HeWeather6[0].daily_forecast,
          lifestyle: {}
        })
        wx.hideLoading();
        wx.showToast({
          title: '海外城市暂不提供生活指数哦~',
          icon: 'none'
        })
      }else {
        this.setData({
          basic: res.data.HeWeather6[0].basic,
          now: res.data.HeWeather6[0].now,
          forecast: res.data.HeWeather6[0].daily_forecast,
          lifestyle: res.data.HeWeather6[0].lifestyle
        })
        wx.hideLoading();
      }
      const forecast = this.data.forecast;
      forecast.forEach(ele => {
        ele.imgSrc = getImgSrc(ele.cond_code_d);
      })
      const imgSrc = getImgSrc(this.data.now.cond_code);
      this.setData({
        imgSrc,
        forecast
      })
      
    })
        
  },



  setLocation(){
    wx.showLoading({
      title: '加载中',
    })
    this._getLocation().then((res) => {
      const value = res.latitude + ','+ res.longitude;
      this._asyncUpdate(value);
  
    })
    wx.hideLoading();
  },

  
  _getLocation() {
    return new Promise(function (resolve, reject) {
      wx.getLocation({
        success: res => {
          resolve(res);
        },
        fail: () => {
          reject("系统异常，请重试！");
        }
      })
    })
    
    
  },

  _getData(city) {
    return new Promise(function (resolve, reject) {
        wx.request({
          url: 'https://free-api.heweather.net/s6/weather?location=' + city+ '&key=HE1902111341151054',
          success: (res) => {
            resolve(res);
          },
          fail: () => {
            reject("系统异常，请重试！")
          }
        })
      })
  },

  onBlur(e) {
    const value = e.detail.value;
    this.setData({
      value
    })
    // this._asyncUpdate(value);
  },

  onSearch(e) {
    const value = e.detail.value || this.data.value;
    
    this.setData({
      value
    })
    this._asyncUpdate(value);
  }
  
})
