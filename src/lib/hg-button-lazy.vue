<template>
  <button @click="ClickHandler()" :class="styles" :disabled="disabled">{{ text }}</button>
</template>

<script>
  export default {
    name: 'hg-button-lazy',
    data () {
      return {}
    },
    props: {
      /* 按钮中显示的文字 */
      text: {
        type: String,
        default: 'hgButton'
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
      /* 矢量图标 */
      icon: String,
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
    },
    methods: {
      /* 按钮点击时触发的事件，用于父组件中使用 */
      ClickHandler () {
        this.$emit('click')
      }
    },
    computed: {
      /* 根据不同的props，展示按钮样式 */
      styles: {
        get () {
          return [this.design, this.icon, this.type, this.size]
        }
      }
    }
  }
</script>

<style scoped >
  button {
    /*width: 100px;*/
    /*height: 30px;*/
    outline: none; /*outline 去除原生的button样式*/
    font-weight: bolder;
    /*动画设置*/
    transition: border 0.8s;
    -webkit-transition: border 0.8s;
    transition: background-color 0.1s;
    -webkit-transition: background-color 0.1s;
  }
  /*随button文字长度改变*/
  .hg_small{
    padding: 2px 10px;
  }
  .hg_smaller{
    padding: 5px 10px;
  }
  .hg_normal{
    padding: 7px 25px;
  }
  .hg_large{
    padding: 12px 27px;
  }
  .hg_long{
    width: 100%;
    height: 30px;
  }
  /*normal style*/
  .normal {
    border: 1px solid rgb(135, 135, 136);
    background-color: #ffffff;
    font-size: 12px;
    color: rgb(92, 90, 90);
  }
  .normal:hover {
    cursor: pointer;
    background-color: #F4F4F5;
  }
  .normal:active {
    color: #000;
    border: 1px solid rgb(135, 135, 136);
    background-color: #F4F4F5;
  }
  .normal:disabled {
    cursor: not-allowed;
    background-color: rgb(241, 243, 245);
    opacity: 0.8;
  }
  /* primary style */
  .primary {
    color: #ffffff;
    background-color: #3a8ee6;
    font-size: 12px;
    border: none;
  }
  .primary:active {
    background-color: rgb(192, 215, 250);
    color: rgb(105, 83, 233);
    border: none;
  }
  .primary:hover{
    cursor: pointer;
    background-color: rgb(125, 174, 248);
  }
  .primary:disabled{
    background:linear-gradient(to left, #e5e8ec, rgba(255, 255, 255, 0.87));
    color: #b3b3b3;
    border: 1px solid #edf5ff;
    cursor: not-allowed;
  }
  /* warning style*/
  .warning {
    color: #ffffff;
    background-color: #fc903a;
    font-size: 12px;
    border: none;
  }
  .warning:active {
    background-color: rgb(233, 202, 157);
    color: #cb7628;
    border: none;
  }
  .warning:hover{
    cursor: pointer;
    background-color: #fc903a;
  }
  .warning:disabled{
    background:linear-gradient(to left, #e5e8ec, rgba(255, 255, 255, 0.87));
    color: #b3b3b3;
    border: 1px solid #edf5ff;
    cursor: not-allowed;
  }
  /* error style*/
  .error {
    color: #ffffff;
    background-color: rgb(250, 96, 96);
    font-size: 12px;
    border: none;
  }
  .error:active {
    background-color: rgb(243, 181, 181);
    color: rgb(245, 60, 60);
    border: none;
  }
  .error:hover{
    cursor: pointer;
    background-color: rgb(238, 127, 127);
  }
  .error:disabled{
    background:linear-gradient(to left, #e5e8ec, rgba(255, 255, 255, 0.87));
    color: #b3b3b3;
    border: 1px solid #edf5ff;
    cursor: not-allowed;
  }
  /* success style */
  .success {
    color: #ffffff;
    background-color: #5DAF34;
    font-size: 12px;
    border: none;
  }
  .success:active {
    background-color: rgb(185, 218, 168);
    color: rgb(70, 153, 29);
    border: none;
  }
  .success:hover{
    cursor: pointer;
    background-color: rgb(129, 211, 85);
  }
  .success:disabled{
    background:linear-gradient(to left, #e5e8ec, rgba(255, 255, 255, 0.87));
    color: #b3b3b3;
    border: 1px solid #edf5ff;
    cursor: not-allowed;
  }
  /* info style */
  .info {
    color: #ffffff;
    background-color: #A6A9AD;
    font-size: 12px;
    border: none;
  }
  .info:active {
    background-color: rgb(212, 214, 218);
    color: rgb(141, 144, 146);
    border: none;
  }
  .info:hover{
    cursor: pointer;
    background-color: rgb(176, 178, 182);
  }
  .info:disabled{
    background:linear-gradient(to left, #e5e8ec, rgba(255, 255, 255, 0.87));
    color: #b3b3b3;
    border: 1px solid #edf5ff;
    cursor: not-allowed;
  }
  /* 方块 */
  .block {
    border-radius: 0;
  }
  /* 半圆 */
  .oval {
    border-radius: 50px;
  }
  /* 圆角 */
  .fillet {
    border-radius: 5px;
  }
  /* 圆 */
  .circle {
    padding: 10px;
    border-radius: 50%;
  }

  /* hg_primary style */
  .hg_primary {
    color: #ffffff;
    background:linear-gradient(to left, #2769f3, #49bcff);
    font-size: 12px;
    border: none;
  }
  .hg_primary:active {
    box-shadow: 0 0 5px 1px #2769f3;
    color: rgb(255, 255, 255);
    border: none;
  }
  .hg_primary:hover{
    cursor: pointer;
    background: linear-gradient(to left, #49bcff, #2769f3);
  }
  .hg_primary:disabled{
    background:linear-gradient(to left, #e5e8ec, rgba(255, 255, 255, 0.87));
    color: #b3b3b3;
    border: 1px solid #edf5ff;
    cursor: not-allowed;
  }
  /* hg_success style */
  .hg_success {
    color: #ffffff;
    background:linear-gradient(to left, #37a426, #e0ffd2);
    font-size: 12px;
    border: none;
  }
  .hg_success:active {
    box-shadow: 0 0 5px 1px #37a426;
    color: rgb(255, 255, 255);
    border: none;
  }
  .hg_success:hover{
    cursor: pointer;
    background: linear-gradient(to left, #e0ffd2, #37a426);
  }
  .hg_success:disabled{
    background:linear-gradient(to left, #e5e8ec, rgba(255, 255, 255, 0.87));
    color: #b3b3b3;
    border: 1px solid #edf5ff;
    cursor: not-allowed;
  }
  /* hg_error style */
  .hg_error {
    color: #ffffff;
    background:linear-gradient(to left, #fc5d6c, #ffbac1);
    font-size: 12px;
    border: none;
  }
  .hg_error:active {
    box-shadow: 0 0 5px 1px #fc5d6c;
    color: rgb(255, 255, 255);
    border: none;
  }
  .hg_error:hover{
    cursor: pointer;
    background:linear-gradient(to left,#ffbac1, #fc3e47);
  }
  .hg_error:disabled{
    background:linear-gradient(to left, #e5e8ec, rgba(255, 255, 255, 0.87));
    color: #b3b3b3;
    border: 1px solid #edf5ff;
    cursor: not-allowed;
  }
  /* hg_warning style */
  .hg_warning {
    color: #ffffff;
    background:linear-gradient(to left, #fc903a, #ffe3b6);
    font-size: 12px;
    border: none;
  }
  .hg_warning:active {
    color: rgb(255, 255, 255);
    box-shadow: 0 0 5px 1px #fc903a;
    border: none;
  }
  .hg_warning:hover{
    cursor: pointer;
    background:linear-gradient(to left, #ffe3b6, #fc903a);
  }
  .hg_warning:disabled{
    background:linear-gradient(to left, #e5e8ec, rgba(255, 255, 255, 0.87));
    color: #b3b3b3;
    border: 1px solid #edf5ff;
    cursor: not-allowed;
  }
  /* hg_info style */
  .hg_info {
    color: #ffffff;
    background:linear-gradient(to left, #A6A9AD, #e5e8ec);
    font-size: 12px;
    border: none;
  }
  .hg_info:active {
    box-shadow: 0 0 5px 1px #A6A9AD;
    color: #A6A9AD;
    border: none;
  }
  .hg_info:hover{
    cursor: pointer;
    background:linear-gradient(to left, #e5e8ec,#A6A9AD);
  }
  .hg_info:disabled{
    background:linear-gradient(to left, #e5e8ec, rgba(255, 255, 255, 0.87));
    color: #b3b3b3;
    border: 1px solid #edf5ff;
    cursor: not-allowed;
  }
  /* hg_b_primary style border*/
  .hg_b_primary {
    font-size: 12px;
    /* 按钮设置边框 */
    color: #2769f3;
    background-color: #edf5ff;
    border: 1px solid #2769f3;
  }
  .hg_b_primary:active {
    background: linear-gradient(to top right, #49bcff, #2769f3);
    color: rgb(255, 255, 255);
    border: none;
  }
  .hg_b_primary:hover{
    cursor: pointer;
    color: #ffffff;
    background-color: #2769f3;
    border: 1px solid #edf5ff;
  }
  .hg_b_primary:disabled{
    background:linear-gradient(to left, #e5e8ec, rgba(255, 255, 255, 0.87));
    color: #b3b3b3;
    border: 1px solid #edf5ff;
    cursor: not-allowed;
  }
  /* hg_b_success style border*/
  .hg_b_success {
    font-size: 12px;
    /* 按钮设置边框 */
    color: #37a426;
    background-color: #e0ffd2;
    border: 1px solid #37a426;
  }
  .hg_b_success:active {
    background: linear-gradient(to top right, #e0ffd2,#37a426);
    color: rgb(255, 255, 255);
    border: none;
  }
  .hg_b_success:hover{
    cursor: pointer;
    color: #ffffff;
    background-color: #37a426;
    border: 1px solid #edf5ff;
  }
  .hg_b_success:disabled{
    background:linear-gradient(to left, #e5e8ec, rgba(255, 255, 255, 0.87));
    color: #b3b3b3;
    border: 1px solid #edf5ff;
    cursor: not-allowed;
  }
  /* hg_b_error style border*/
  .hg_b_error {
    font-size: 12px;
    /* 按钮设置边框 */
    color: #fc3e47;
    background-color: #ffbac1;
    border: 1px solid #fc3e47;
  }
  .hg_b_error:active {
    background: linear-gradient(to top right, #ffbac1,#fc3e47);
    color: rgb(255, 255, 255);
    border: none;
  }
  .hg_b_error:hover{
    cursor: pointer;
    color: #ffffff;
    background-color: #fc3e47;
    border: 1px solid #ffbac1;
  }
  .hg_b_error:disabled{
    background:linear-gradient(to left, #e5e8ec, rgba(255, 255, 255, 0.87));
    color: #b3b3b3;
    border: 1px solid #edf5ff;
    cursor: not-allowed;
  }
  /* hg_b_warning style border*/
  .hg_b_warning {
    font-size: 12px;
    /* 按钮设置边框 */
    color: #fc903a;
    background-color: #ffe3b6;
    border: 1px solid #fc903a;
  }
  .hg_b_warning:active {
    background: linear-gradient(to top right, #ffe3b6,#fc903a);
    color: rgb(255, 255, 255);
    border: none;
  }
  .hg_b_warning:hover{
    cursor: pointer;
    color: #ffffff;
    background-color: #fc903a;
    border: 1px solid #ffe3b6;
  }
  .hg_b_warning:disabled{
    background:linear-gradient(to left, #e5e8ec, rgba(255, 255, 255, 0.87));
    color: #b3b3b3;
    border: 1px solid #edf5ff;
    cursor: not-allowed;
  }
  /* hg_b_info style border*/
  .hg_b_info {
    font-size: 12px;
    /* 按钮设置边框 */
    color: #b3b3b3;
    background-color: #e5e8ec;
    border: 1px solid #b3b3b3;
  }
  .hg_b_info:active {
    background: linear-gradient(to top right, #e5e8ec,#b3b3b3);
    color: rgb(255, 255, 255);
    border: none;
  }
  .hg_b_info:hover{
    cursor: pointer;
    color: #ffffff;
    background-color: #b3b3b3;
    border: 1px solid #e5e8ec;
  }
  .hg_b_info:disabled{
    background:linear-gradient(to left, #e5e8ec, rgba(255, 255, 255, 0.87));
    color: #b3b3b3;
    border: 1px solid #edf5ff;
    cursor: not-allowed;
  }
  /* hg_moreColor style border*/
  .hg_moreColor {
    font-size: 12px;
    /* 按钮设置边框 */
    color: #ffffff;
    background: linear-gradient(45deg,#feac5e,#c779d0,#4bc0c8);
    border: none;
  }
  .hg_moreColor:active {
    background: linear-gradient(to right, #d08853, #9952a2, #419fa7);
    color: rgb(255, 255, 255);
    border: none;
  }
  .hg_moreColor:hover{
    background: linear-gradient(to right,#4bc0c8,#c779d0,#feac5e);
    cursor: pointer;
    color: #ffffff;
  }
  .hg_moreColor:disabled{
    background: linear-gradient(45deg,rgba(254,172,94,0.5),rgba(199,121,208,0.5),rgba(75,192,200,0.5));
    color: #e5e8ec;
    border: none;
    cursor: not-allowed;
  }
  /* hg_dashed style border*/
  .hg_dashed {
    font-size: 12px;
    /* 按钮设置边框 */
    color: #ffffff;
    background:none;
    border: 1px dashed #ffffff;
  }
  .hg_dashed:active {
    color: #3f9ed7;
    background:none;
    border: 1px dashed #3f9ed7;
  }
  .hg_dashed:hover{
    color: #3f9ed7;
    background:none;
    border: 1px dashed #3f9ed7;
    cursor: pointer;
  }
  .hg_dashed:disabled{
    background:linear-gradient(to left, #e5e8ec, rgba(255, 255, 255, 0.87));
    color: #b3b3b3;
    border: 1px dashed #edf5ff;
    cursor: not-allowed;
  }
  /* hg_solid style border*/
  .hg_solid {
    font-size: 12px;
    /* 按钮设置边框 */
    color: #ffffff;
    background:none;
    border: 1px solid #ffffff;
  }
  .hg_solid:active {
    color: #3f9ed7;
    background:none;
    border: 1px solid #3f9ed7;
  }
  .hg_solid:hover{
    color: #3f9ed7;
    background:none;
    border: 1px solid #3f9ed7;
    cursor: pointer;
  }
  .hg_solid:disabled{
    background:linear-gradient(to left, #e5e8ec, rgba(255, 255, 255, 0.87));
    color: #b3b3b3;
    border: 1px solid #edf5ff;
    cursor: not-allowed;
  }
  /* hg_text style border*/
  .hg_text {
    font-size: 12px;
    /* 按钮设置边框 */
    color: #ffffff;
    background:none;
    border: none;
  }
  .hg_text:active {
    color: #3f9ed7;
    background:none;
    border: none;
  }
  .hg_text:hover{
    color: #3f9ed7;
    background:none;
    border: none;
    cursor: pointer;
  }
  .hg_text:disabled{
    background:linear-gradient(to left, #e5e8ec, rgba(255, 255, 255, 0.87));
    color: #b3b3b3;
    border: 1px solid #edf5ff;
    cursor: not-allowed;
  }
</style>
