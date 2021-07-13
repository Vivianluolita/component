<template>
  <div>
    <my-dialog :visible="ifCloseMyDialog" @closeMyDialog="closeMyDialog" class="dialogQuide">
      <div class="content">222</div>
      <div class="content">333</div>
    </my-dialog>
  </div>
</template>

<script>
import MyDialog from './my-dialog/MyDialog.vue'
export default {
  components: { MyDialog },
  data(){
    return{
      ifCloseMyDialog:true
    }
  },
  methods:{
    closeMyDialog(){
      console.log("2222")
      this.ifCloseMyDialog = false
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
</style>