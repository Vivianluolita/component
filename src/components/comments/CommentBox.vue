<template>
  <form action="" class="grid" @submit.prevent="handleSubmit()">
    <textarea
      v-model="content"
      name="comment"
      id=""
      placeholder="请输入你的评论"
      class="bg-gray-50 p-2 rounded"
    ></textarea>
    <fieldset class="py-4">
      <input
        type="submit"
        value="评论"
        class="px-4 py-1 bg-blue-600 rounded text-white"
      />
      <input
        type="reset"
        value="取消"
        class="px-4 py-1 bg-white rounded border ml-3"
      />
    </fieldset>
  </form>
</template>


<script>
export default {
  data() {
    return {
      content:'222',
    };
  },

  methods:{
  
    handleSubmit(){
      this.$emit('submit')
      this.content = ''
    },

  }
}
</script>

<style>
</style>