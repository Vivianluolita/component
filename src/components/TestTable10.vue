<template>
  <div>
    <!-- 主输入评论框 -->
    <CommentBox @submit="addNewComment" />
    <!-- 留言 -->
    <CommentItem
      :user="comment.user"
      :avatar="comment.avatar"
      :time="comment.time"
      :content="comment.content"
    />
    <!-- 留言列表 -->
    <ReplyContainer v-if="comment.replies">
      <CommentItem
        v-for="reply in comment.replies"
        :key="reply.id"
        :user="reply.user"
        :avatar="reply.avatar"
        :time="reply.time"
        :content="reply.content"
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
        user: "liyujia",
        avatar: "",
        time: "2022.5.30",
        content: "liililiilililili",
        replies: [
          {
            id: 1,
            user: "liyujia02",
            avatar: "",
            time: "2022-5.31",
            content: "3333333333"
          },
          {
            id: 2,
            user: "liyujia02",
            avatar: "",
            time: "2022-6.1",
            content: "111111"
          },
          {
            id: 3,
            user: "liyujia02",
            avatar: "",
            time: "2022-6.2",
            content: "222222222"
          },
        ]
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
    addNewComment() {
      // $event, comment.id
      // 此处要掉接口，后台会返回新的回复
      let newComment = '我是回复'
      let replayTo = true //有回复
      if(!replayTo){
        this.comments.value.unshift(newComment);
      }else{
        comments.value.find((c) => c.id === replyTo).replies.unshift(newComment);
      }
    },
  }
};
</script>

<style></style>
