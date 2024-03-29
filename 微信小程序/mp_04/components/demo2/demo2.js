// components/demo2/demo2.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  options:{
    pureDataPattern:/^_/
  },
  data: {
    rgb: {
      r: 0,
      g: 0,
      b: 0
    },
    fullColor: '0,0,0'

  },

  /**
   * 组件的方法列表
   */
  methods: {
    changeR() {
      this.setData({
        'rgb.r': this.data.rgb.r + 5 > 255 ? 255 : this.data.rgb.r + 5
      })
    },
    changeG() {
      this.setData({
        'rgb.g': this.data.rgb.g + 5 > 255 ? 255 : this.data.rgb.g + 5
      })

    },
    changeB() {
      this.setData({
        'rgb.b': this.data.rgb.b + 5 > 255 ? 255 : this.data.rgb.b + 5
      })
    },

  },
  observers:{
    //监听rgb
    // 'rgb.r,rgb.g,rgb.b':function(newR,newG,newB){
    //   this.setData({
    //     fullColor:`${newR},${newG},${newB}`
    //   })
    // },
    'rgb.**':function(obj){
      this.setData({
        fullColor:`${obj.r},${obj.g},${obj.b}`
      })
    }
  },
  created(){
    console.log('大萨达');
  },
  attached (){
    console.log('发发发');
  },
  lifetimes:{
    created(){
      console.log('大大大');
    },
    attached (){
      console.log('发发发22');
    },
  },
  pageLifetimes:{
    show(){
      this.setData({
        rgb:{
          r: 150,
          g: 50,
          b: 50
        }
      })
    }
  }
})