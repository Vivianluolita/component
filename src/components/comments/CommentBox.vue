<template>
  <form @submit.prevent="handleSubmit()" action class="grid">
    <textarea class="areaStyle" id name="comment" placeholder="请输入你的评论" v-model="content"></textarea>
    <!-- <fieldset class="py-4"> -->
    <input class="px-4 py-1 bg-blue-600 rounded text-white" type="submit" value="save" />
    <input class="px-4 py-1 bg-white rounded border ml-3" type="reset" value="cancel" />
    <input class="px-4 py-1 bg-white rounded border ml-3" type="reset" value="delete" />
    <!-- </fieldset> -->
  </form>
</template>


<script>
export default {
  data() {
    return {
      content:'',
    };
  },

  methods:{
  
    handleSubmit(){
      this.$emit('submit',this.content)
      this.content = ''
    },

  }
}
</script>

<style>
.areaStyle{
  width: 100%;
}
/* .bg-gray-50{
  background-color: rgb(107 114 128);
}
.p-2{
  padding: 2px;
} */
</style>