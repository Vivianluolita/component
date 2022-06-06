<template>
<div>
  <el-button @click="addComment">add</el-button>
  <div v-for="(item,index) in editor.allComment" :key="index">
    <span>{{index}}</span>
  <!-- <Comments v-model="CommentData"/> -->
  <Comments/>
  </div>
</div>
</template>

<script>

import Comments from "./comments/Comments.vue";
export default {
  data() {
    return {
      editor:{
      CommentData:[],
      allComment:[[
            {
              id: 1,
              user: "liyujia",
              avatar: "",
              time: "2022.5.30",
              content: "评论1",
              type: "comment",
              replies: 
                {
                  id: 1,
                  user: "liyujia02-replay",
                  avatar: "",
                  time: "2022-5.31",
                  content: "评论1的回复1",
                  type: "reply"
                }
        
              
            },
            {
              id: 1,
              user: "liyujia",
              avatar: "",
              time: "2022.5.30",
              content: "评论2",
              type: "comment",
              replies: 
                {
                  id: 1,
                  user: "liyujia02-replay",
                  avatar: "",
                  time: "2022-5.31",
                  content: "评论2的回复1",
                  type: "reply"
                },
    
            
              
            }],
            [
           
            {
              id: 1,
              user: "liyujia",
              avatar: "",
              time: "2022.5.30",
              content: "评论2-1",
              type: "comment",
              replies: 
                {
                  id: 1,
                  user: "liyujia02-replay",
                  avatar: "",
                  time: "2022-5.31",
                  content: "评论2-1的回复1",
                  type: "reply"
                },
    
            
              
            }],
      ]},
      // 控制状态2：删除评论框
      deleteCom:true,
      commentStatus:2,// 1. 只有评论框areaText： save cancel delete 2.只有文本，但是可以编辑。 3. 有文本可以回复 4. 有回复框areaText : save cancel delete 5. 有回复文本，但是可以编
      comment: [
        {
          id: 1,
          user: "liyujia",
          avatar: "",
          time: "2022.5.30",
          content: "评论1",
          type: "comment",
          replies: 
            {
              id: 1,
              user: "liyujia02-replay",
              avatar: "",
              time: "2022-5.31",
              content: "评论1的回复1",
              type: "reply"
            }
     
          
        },
        {
          id: 1,
          user: "liyujia",
          avatar: "",
          time: "2022.5.30",
          content: "评论2",
          type: "comment",
          replies: 
            {
              id: 1,
              user: "liyujia02-replay",
              avatar: "",
              time: "2022-5.31",
              content: "评论2的回复1",
              type: "reply"
            },
 
        
          
        }
      ]
    };
  },
  components: {
    Comments
  },
  methods: {
    addComment(){

    }
  }
};
</script>

<style></style>
