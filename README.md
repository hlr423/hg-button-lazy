# hg-button-lazy
> Encapsulation of button color, shape, size, binding event.Easy to use

# Install
> npm install hg-button-lazy

# Usage
### main.js:
    import Vue from 'vue'
    import App from './App.vue'
    import hg-button-lazy from 'hg-button-lazy'
    Vue.use(hg-button-lazy)
### template:
            <hg-button-lazy v-for="item in buttonData" :key="item.id" :text="item.text" :size="item.siez" :design="item.design"  :type="item.type"  @click="item.onClick"></hg-button-lazy>
### Default
     /* 按钮中显示的文字 */
        text: {
          type: String,
          default: 'hgButtonLazy'
        },
        /* 是否启用按钮 */
        disabled: {
          type: Boolean,
          default: false
        },
        /* 按钮形状 */
        design: {
          type: String,
          default: 'block'
        },
        /* 内置按钮style */
        type: {
          type: String,
          default: 'hg_primary'
        },
        /* 按钮大小 */
        size: {
          type: String,
          default: 'hg_normal'
        }

### button Data type
    buttonData=[{
              text: '提交',
              design: 'fillet',
              size:'hg_normal',
              type: 'success',
              onClick: (val) => this.handClick(val)
            }]
 
 ### button style Constructor Options
 
 type| design  | size | disabled | onClick
 -----| ----- | ------ | --------- | ---------
 normal   | block  | hg_smaller | true | event
 primary  | oval   | hg_normal  | false  
 warning  | fillet | hg_large   |   
 error    | circle | hg_small   | 
 success  |        | hg_long    | 
 info     |        | 
 hg_primary|  
 hg_success|  
 hg_error  |  
 hg_warning|  
 hg_info   |  
 hg_b_primary |  
 hg_b_success |  
 hg_b_error   |  
 hg_b_warning |  
 hg_b_info    |  
 hg_moreColor |  
 hg_dashed    |   
 hg_solid     |   
 hg_text      | 

### Show image 
![qq](http://m.qpic.cn/psc?/V50M3WYz0pWdNd390OyF1NYgVs1kyah5/45NBuzDIW489QBoVep5mcSDHyRTsdQeCzJnpR5Cf.zU9xsM7WKgB3GlQO4tq9Isweh8KhtcOe6ZRBd4x49LC4JfrXQdshZWuZDSSat1qKMI!/b&bo=cQL2AgAAAAADF7U!&rf=viewer_4
 "button show image")  
