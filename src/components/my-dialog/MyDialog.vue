<template>
  <transition @after-enter="afterEnter" @after-leave="afterLeave" name="dialog-fade">
    <div>
      <!-- md-wapper为外层阴影，visibles控制整体阴影消失 -->
      <div @click="handleOut()" class="md-wapper" v-show="visibles"></div>
      <!-- handleOut 为点击任意位置阴影消失 -->
      <!-- md-wapper md-content合起来为整个阴影部分-->
      <div @click="handleOut()" class="md-content">
        <slot name="cpu"></slot>
        <slot name="yingpan"></slot>
        <!-- 如果只定义了两个具名插槽，剩下的没定义可以统统将剩下的起名为default -->
        <!-- 如果做引导页可以试试用具名插槽定位。 -->
        <slot name="default"></slot>
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
    
    .md-content{
        /* z-index: 11; */
        position: fixed;
        /* left: 0;
        top: 0; */
        width: 100%;
        height: 100%;
        opacity: .8;
        background: #000;
        left: 0;
        top: 0;
    }
</style>


