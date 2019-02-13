// components/dailyForecast/cmp.js
import {getImgSrc} from '../../utils/imgsrc.js';


Component({
    attached() {
      this.getDate();
      
    },
    
  /**
   * 组件的属性列表
   */
  properties: {
    daily: Object
  },

  


  /**
   * 组件的初始数据
   */
  data: {
    date: '',
    imgSrc: ''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    getDate() {
      const date = this.properties.daily.date.substring(5, 10);
      this.setData({
        date
      })
    }
    
  }
})
