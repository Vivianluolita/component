import MyDialog from './MyDialog';
// index.js需要引入MyDiloag并封装和抛出
MyDialog.install = function (Vue) {
  Vue.component(MyDialog.name, MyDialog);
};

export default MyDialog;

