<template>
  <div>
    <!-- 主输入评论框 -->
    <CommentBox @submit="addNewComment" />
    <!-- 留言 -->
    <CommentItem
      :avatar="comment.avatar"
      :content="comment.content"
      :time="comment.time"
      :user="comment.user"
    />
    <!-- 留言列表 -->
    <ReplyContainer v-if="comment.replies">
      <CommentItem
        :avatar="reply.avatar"
        :content="reply.content"
        :key="reply.id"
        :time="reply.time"
        :user="reply.user"
        v-for="reply in comment.replies"
      />
    </ReplyContainer>
    <ReplyBox @submit="addNewComment($event, comment.id)" />
  </div>
</template>

<script>
import CommentBox from "./comments/CommentBox.vue";
import CommentItem from "./comments/CommentItem.vue";
import ReplyBox from "./comments/ReplyBox.vue";
import ReplyContainer from "./comments/ReplyContainer.vue";

export default {
  data() {
    return {
      comment: {
        id:1,
        user: "liyujia",
        avatar: "",
        time: "2022.5.30",
        content: "liililiilililili",
        replies: [
          {
            id: 1,
            user: "liyujia02-replay",
            avatar: "",
            time: "2022-5.31",
            content: "3333333333"
          },
          // {
          //   id: 2,
          //   user: "liyujia02",
          //   avatar: "",
          //   time: "2022-6.1",
          //   content: "111111"
          // },
          // {
          //   id: 3,
          //   user: "liyujia02",
          //   avatar: "",
          //   time: "2022-6.2",
          //   content: "222222222"
          // },
        ],
     
      }
    };
  },
  components: {
    CommentBox,
    CommentItem,
    ReplyBox,
    ReplyContainer
  },
  methods: {
    addNewComment(content, replyTo) {
      // $event, comment.id
      // 此处要掉接口，后台会返回新的回复
      let newComment =     {
             id: 2,
             user: "liyujia02",
            avatar: "",
            time: "2022-6.1",
            content: content
           }
      let replayTo = 1 //有回复
      if(!replayTo){
        this.comment.unshift(newComment);
      }else{
        // this.comment.value.find((c) => c.id === replyTo).replies.unshift(newComment);
        this.comment.unshift(newComment);
      }
    },
  }
};
</script>

<style></style>
