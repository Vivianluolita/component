<template>
  <div class="component">
    <!-- <el-row :gutter="60" class="wrap">
      <el-col :span="6">
        <span>接收用户：</span>
      </el-col>
      <el-col :span="12" v-show="isShowUsers">
        <div  v-for="(item, index) in confirmData" :key="index" class="nameShow">
          <span>{{item.name}}</span>
          <div class="icon-delete" @click="deleteItem(index)">x</div>
        </div>
      </el-col>
      <el-col :span="6">
        <button class="btn-green" @click="addPerson">新增人员</button>
      </el-col>
    </el-row>
    <edit-dialog
      ref="editDialog"
      :isShow="dialogAddPerson"
      :isShowUser="isShowUsers"
      @close-dialog="closeDialog"
      @change-user="changeUser"
    ></edit-dialog> -->
  
  </div>
</template>

<script>
import axios from 'axios'
import editDialog from './children/editDialog'
import {mapGetters, mapState, mapMutations} from 'vuex';
export default {
  name: 'HelloWorld',
  components: {
    editDialog
  },
  data () {
    return {
      dialogAddPerson: false,
      user:{},
      isShowUsers:false
    }
  },
  // created() {
  //   var appData = require('../../data.json');
  //   this.user = appData.user;
  //   axios.get('/api/user').then((response)=>{
  //     response = response.body;
  //     if(response.errno = ERR_OK){
  //       this.user = response.data;
  //     }
  //   });  
  //   axios.get('/api/user').then((response) => {
  //     console.log(response);
  //     console.log(response.ok);
  //     response = response.body;
  //     if(response.errno === ERR_OK){
  //       this.user = response.data;
  //     }
  //   })
  // },
  methods: {
    ...mapMutations({
      delTableData:'DEL_TABLEDATA',
      setConfirmData:'SET_COFIRMDATA'
    }),
    addPerson () {
      this.dialogAddPerson = true
    },
    closeDialog() {
      this.dialogAddPerson=false
      // this.$refs.editDialog.cancel()
    },
    deleteItem (index) {
      this.$refs.editDialog.toggleSelection(index)
    },
    changeUser (flag) {
      this.isShowUsers = flag
    }
   
  },
  computed: {
    ...mapState([
        'tableData',
        'confirmData'
    ]),
}
}
</script>

<style lang="stylus" scoped>
.nameShow {
    position: relative;
    float: right;
    margin: 0 10px;
    .icon-delete {
      position: absolute;
      top: -5px;
      right: -5px;
      line-height: 13px;
      width: 15px;
      height: 15px;
      color: #fff;
      border-radius: 50%;
      background-color: #ccc;
      text-align: center;
      font-size: 12px;
      cursor: pointer;
    }
  }
</style>
