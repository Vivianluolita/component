<template>
  <div>
    <button @click="addItem()">add</button>
    <!--状态值： 1. 只有评论框areaText： save cancel delete -->
    <div v-if="deleteCom">
      <!-- 主输入评论框 -->
      <CommentBox
        :CommentData="CommentData"
        :commentStatus="commentStatus"
        @handleDelete="handleDelete"
        @submit="addNewComment"
      />
    </div>
    <!-- 留言 -->
    <!-- 状态值： 2. 有文本可以回复 -->
    <div v-if="comment && commentStatus === 2">
      <div :key="index" v-for="(item,index) in comment">
        <span>{{index}}</span>
        <i @click="test(index)">test</i>
        <div>
          <CommentItem
            :avatar="item.avatar"
            :content.sync="item.content"
            :id="item.id"
            :time="item.time"
            :type="item.type"
            :user="item.user"
          />
        </div>

        <!-- 留言列表 -->
        <ReplyContainer v-if="item.replies">
          <ReplyItem
            :avatar.sync="item.replies.avatar"
            :content.sync="item.replies.content"
            :id.sync="item.replies.id"
            :time.sync="item.replies.time"
            :user.sync="item.replies.user"
          />
        </ReplyContainer>
      </div>
      <div :key="index" v-for="(item,index) in comment">
        <div v-if="item.user === 'newadd'">
          <span>{{index}}</span>
          <i @click="test(index)">test</i>
          <div>
            <CommentItem
              :avatar="item.avatar"
              :content.sync="item.content"
              :id="item.id"
              :time="item.time"
              :type="item.type"
              :user="item.user"
            />
          </div>
        </div>

        <!-- 留言列表 -->
        <ReplyContainer v-if="item.replies">
          <ReplyItem
            :avatar.sync="item.replies.avatar"
            :content.sync="item.replies.content"
            :id.sync="item.replies.id"
            :time.sync="item.replies.time"
            :user.sync="item.replies.user"
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
    <ReplyBox @submit="addNewComment($event, comment.id)" />-->
  </div>
</template>

<script>
import CommentBox from "./CommentBox.vue";
import CommentItem from "./CommentItem.vue";
import ReplyItem from "./ReplyItem.vue";
import ReplyBox from "./ReplyBox.vue";
import ReplyContainer from "./ReplyContainer.vue";

export default {
  data() {
    return {
      // 控制状态2：删除评论框
      deleteCom:true,
      commentStatus:2,// 1. 只有评论框areaText： save cancel delete 2.只有文本，但是可以编辑。 3. 有文本可以回复 4. 有回复框areaText : save cancel delete 5. 有回复文本，但是可以编
      comment: [
        {
          id: 1,
          user: "qianyilun1",
          time: "2022.5.30",
          content: "评论1",
          replies:null
          // replies: 
            // {
            //   id: 1,
            //   user: "liyujia02-replay",
            //   avatar: "",
            //   time: "2022-5.31",
            //   content: "评论1的回复1",
            //   type: "reply"
            // }
     
          
        },
        {
          id: 2,
          user: "qianuilun2",
          time: "2022.5.30",
          content: "评论1",
          replies: 
            {
              id: 1,
              user: "liyujia02-replay",
              time: "2022-5.31",
              content: "评论1的回复1",
            }
     
          
        },
      
      ]
    };
  },
  props: {
    CommentData: {
      type: Array,
      require: true
    }
   
  },
  components: {
    CommentBox,
    CommentItem,
    ReplyBox,
    ReplyContainer,
    ReplyItem
  },
  methods: {
    test(ind){
      alert(ind)
    },
    addItem(){
      let newComment = {
        id: null,
        user: "newadd",
        avatar: "new",
        time: "2022-6.1",
        content: 'add new'
      };
      this.comment.push(newComment)
    },
    handleDelete(){
      this.deleteCom = false
    },
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
