<template>
  <div>
    <!--状态值： 1. 只有评论框areaText： save cancel delete 2.只有文本，但是可以编辑。  -->
    <div>
      <!-- 主输入评论框 -->
      <CommentBox :commentStatus='commentStatus' @submit="addNewComment" />
    </div>
    <!-- 留言 -->
    <!-- 状态值： 3. 有文本可以回复 4. 有回复框areaText : save cancel delete 5. 有回复文本，但是可以编辑 -->
    <div v-if="comment && commentStatus === 3">
      <div  :key="index" v-for="(item,index) in comment">
        <div>
          <CommentItem
            :avatar="item.avatar"
            :content="item.content"
            :time="item.time"
            :user="item.user"
            :id="item.id"
            :type="item.type"
          />
        </div>

        <!-- 留言列表 -->
        <ReplyContainer v-if="item.replies">
          <ReplyItem
       
            :id="item.replies.id"
            :avatar="item.replies.avatar"
            :content="item.replies.content"
            :key="item.replies.id"
            :time="item.replies.time"
            :user="item.replies.user"
          />
        </ReplyContainer>
      </div>  
    </div>
    <!--  -->
    <!-- <div v-if="comment">
      <div  :key="index" v-for="(item,index) in comment">
        <div>
          <CommentItem
            :avatar="item.avatar"
            :content="item.content"
            :time="item.time"
            :user="item.user"
            :id="item.id"
            :type="item.type"
          />
        </div>

        <ReplyContainer v-if="item.replies">
          <ReplyItem
            v-for="reply in item.replies"
            :id="reply.id"
            :avatar="reply.avatar"
            :content="reply.content"
            :key="reply.id"
            :time="reply.time"
            :user="reply.user"
          />
        </ReplyContainer>
      </div>  
    </div>
    <ReplyBox @submit="addNewComment($event, comment.id)" /> -->
  </div>
</template>

<script>
import CommentBox from "./comments/CommentBox.vue";
import CommentItem from "./comments/CommentItem.vue";
import ReplyItem from "./comments/ReplyItem.vue";
import ReplyBox from "./comments/ReplyBox.vue";
import ReplyContainer from "./comments/ReplyContainer.vue";

export default {
  data() {
    return {
      commentStatus:3,// 1. 只有评论框areaText： save cancel delete 2.只有文本，但是可以编辑。 3. 有文本可以回复 4. 有回复框areaText : save cancel delete 5. 有回复文本，但是可以编
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
    CommentBox,
    CommentItem,
    ReplyBox,
    ReplyContainer,
    ReplyItem
  },
  methods: {
    addNewComment(content, replyTo) {
      // $event, comment.id
      // 此处要掉接口，后台会返回新的回复
      let newComment = {
        id: 2,
        user: "liyujia02",
        avatar: "",
        time: "2022-6.1",
        content: content
      };
      let replayTo = 1; //有回复
      if (!replayTo) {
        this.comment.unshift(newComment);
      } else {
        // this.comment.value.find((c) => c.id === replyTo).replies.unshift(newComment);
        this.comment.unshift(newComment);
      }
    }
  }
};
</script>

<style></style>
