<template>

 <div>
   <button
    class="pt-4 text-blue-600"
    :class="[showCommentBox ? 'pb-2' : 'pb-10']"
    @click="clickReply()"
    v-if="!showCommentBox"
  >
    回复
  </button>
  <ReplyArea
    ref="editComment"
    v-if="showCommentBox"
    class="mb-4"
    @handleReplyDel='handleReplyDel'
    @submit="handSubmit"/>
   
</div>


</template>


<script>
import ReplyArea from "./ReplyArea.vue";
export default {
  data() {
    return {
     showCommentBox:false,
     commentStatus:null
    };
  },
  components:{
    ReplyArea
  },
  methods:{

    handleReplyDel(){
      console.log("handleReplyDel1")
      this.showCommentBox = false
     
    },
    handSubmit(){
      this.emit('submit', $event);
      this.showCommentBox = false;
    },
    clickReply(){
      // this.$refs.editComment.editDress = true
      this.showCommentBox = !this.showCommentBox
      // this.commentStatus = 3
    }
  }
}
</script>

<style>
</style>