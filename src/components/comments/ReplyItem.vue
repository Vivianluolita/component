<template>
  <div>
    <div class="flex">
      <!-- 即使在 public 文件夹下，也需要使用 / 绝对路径引用它下面的文件，省略 Public -->
      <img :src="avatar" alt class="w-12 h-12 mr-4 rounded-full" />
      <div>
        <p>{{ user }}</p>
        <p class="text-gray-600 text-sm">{{ time }}</p>
      </div>

      <!-- 菜单考右对齐
    <span class="ml-auto">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5 text-gray-500"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"
        />
      </svg>
      </span>-->
    </div>
    <p class="text-gray-600 py-4">reply : {{ content }}</p>
    <textarea
      :maxlength="100"
      :value="content"
      @focus="isCloseOne = false"
      @input="onInput"
      class="areaStyle"
      id
      name="comment"
      placeholder="请输入你的评论reply"
      ref="addressRef"
    ></textarea>
    <!-- 只有评论进行回复，回复不进行回复 -->
    <!-- <ReplyBox  @submit="addNewComment($event, comment.id)" /> -->
  </div>
</template>


<script>
import ReplyBox from "./ReplyBox.vue";
export default {
  data() {
    return {
    
    };
  },
  components:{
    ReplyBox
  },
  props:{
    avatar: {
        type: String,
        default: ''
    },
    user: {
        type: String,
        default: ''
    },
    content: {
        type: String,
        default: ''
    },
    time: {
        type: String,
        default: ''
    },
    id: {
        type: Number,
        default: ''
    },
  
  },
  methods:{
    onInput(event){
       this.$emit('update:content', event.target.value)
    }


  }
}
</script>

<style>
</style>