<template>
  <transition @after-enter="afterEnter" @after-leave="afterLeave" name="dialog-fade">
    <div>
      <!-- md-wapper为外层阴影，visibles控制整体阴影消失 -->
      <div @click="handleOut()" class="md-wapper" v-show="visibles"></div>
      <!-- handleOut 为点击任意位置阴影消失 -->
      <!-- md-wapper md-content合起来为整个阴影部分-->
      <div @click="handleOut()" class="md-content">
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<script>
    export default {
        name: "MyDialog",
        data(){
            return{
              visibles:true
            }
        },
        props:{
            visible: {
                type: Boolean,
                default: false
            },
            closeOnClickModal: {
                type: Boolean,
                default: true
            },
        },
        methods:{
            afterEnter(){

            },
            afterLeave(){

            },
            handleOut(){
                this.visibles =false
                // console.log("this.closeOnClickModal")
                // console.log("this.closeOnClickModal",this.closeOnClickModal)
                // if(this.closeOnClickModal){
                //     this.$emit("closeMyDialog")
                // }
            }
        },

    }
</script>

<style scoped >
    .md-wapper{
        z-index: 10;
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        opacity: .5;
        background: #000;
    }
    .md-content{
        z-index: 11;
        position: fixed;
        /* left: 0;
        top: 0; */
        width: 100%;
        height: 100%;
    }
</style>


