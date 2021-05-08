import ButtonComponent from './hg-button-lazy';
const hgButtonLazy = {
  install:function (Vue) {
    Vue.component('hgButtonLazy',ButtonComponent)
  }
};
if(typeof window !== 'undefined' && window.Vue){
  window.Vue.use(hgButtonLazy)
}
export default hgButtonLazy
