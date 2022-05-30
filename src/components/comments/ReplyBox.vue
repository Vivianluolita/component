<template>

 <div>
   <button
    class="pt-4 text-blue-600"
    :class="[showCommentBox ? 'pb-2' : 'pb-10']"
    @click="showCommentBox = !showCommentBox"
  >
    回复
  </button>
  <CommentBox
    v-if="showCommentBox"
    class="mb-4"
    @submit="handSubmit"
  />
</div>


</template>


<script>
import CommentBox from "./CommentBox.vue";
export default {
  data() {
    return {
     showCommentBox:false,
    };
  },
  methods:{
    handSubmit(){
      this.emit('submit', $event);
      this.showCommentBox = false;
    }
  }
}
</script>

<style>
</style>