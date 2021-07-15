import MyDialogContent from './MyDialogContent';
// index.js需要引入MyDiloag并封装和抛出
MyDialogContent.install = function (Vue) {
  Vue.component(MyDialogContent.name, MyDialogContent);
};

export default MyDialogContent;

