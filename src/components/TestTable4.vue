<template>
  <div>
    <!-- 1. 只用my-dialog，可以控制引导阴影，但是取消之后，原内容也跟着阴影消失，因为把文本内容内嵌到最外面一层的slot里面了。 closeMyDialog会将slot内容一起消失-->
    <!-- <my-dialog :visible="ifCloseMyDialog" @closeMyDialog="closeMyDialog" class="dialogQuide">
      <div class="content">222</div>
      <div class="content">333</div>
    </my-dialog>-->
    <!-- animaltion -->
    <!-- 2. 用my-dialog，MyDialogAnimal一起可以解决蒙版消失后，文本内容一起消失的问题。但是文本内容是放在my-dialog-animal里面的，动画也是放在my-dialog-animal里面的，外层的my-dialog只是控制阴影的消失。-->
    <div class="pos-bg">
      <my-dialog :visible="firstFlag">
        <my-dialog-animal @positionFun="positionFun"></my-dialog-animal>
      </my-dialog>
    </div>
    <!-- 3.因为我的功能是 my-dialog-animal没用封装成组件，所以我就把my-dialog直接放在my-dialog-animal。vue的页面里面-->
  </div>
</template>

<script>
import MyDialog from './my-dialog/MyDialog.vue'
import MyDialogAnimal from './my-dialog-animal/MyDialogAnimal.vue'
export default {
  components: { MyDialog ,MyDialogAnimal},
  data(){
    return{
      ifCloseMyDialog:true,
      firstFlag:true
    }
  },
  methods:{
    closeMyDialog(){
      console.log("2222")
      this.ifCloseMyDialog = false
    },
    positionFun(){
      console.log("2222")
      this.firstFlag = false
    }
  }
}
</script>

<style scoped>
.content{
  width: 300px;
  height: 200px;
  display: block;
  line-height: 200px;
  text-align: center;
  background-color: aqua;
}
.pos-bg{
        width: 1100px;
        margin: 0 auto;
        height: 84vh;
        /* background: url("../assets/logo.png") no-repeat; */
        /* background-color:burlywood; */
        opacity: 0.5;
        background: #000;
        background-size: 100%;
    }

</style>