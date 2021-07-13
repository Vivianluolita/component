import MyDialogAnimal from './MyDialogAnimal';
// index.js需要引入MyDiloag并封装和抛出
MyDialogAnimal.install = function (Vue) {
  Vue.component(MyDialogAnimal.name, MyDialogAnimal);
};

export default MyDialogAnimal;

