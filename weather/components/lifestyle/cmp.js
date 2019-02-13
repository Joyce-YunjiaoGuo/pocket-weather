// components/lifestyle/cmp.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    lifeDetail: Object,
    index: Number
  },

  attached() {
    this.getSrc();
  },

  /**
   * 组件的初始数据
   */
  data: {
    imgSrc: "",
    title: "",
    typeObj: {
      'comf': "舒适度",
      'drsg': "穿衣",
      'flu': "感冒",
      'sport': "运动",
      'trav': "旅行",
      'uv': "紫外线",
      'cw': "洗车",
      'air': "空气质量"

    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    getSrc() {
      const type = this.data.lifeDetail.type;
      const title = this.data.typeObj[type];
      const src = `/images/lifestyle-icons/${type}.png`;
      this.setData({
        imgSrc: src,
        title
      })
    }
  }
})
