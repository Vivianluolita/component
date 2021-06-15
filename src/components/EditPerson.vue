<template>
  <div class="component">
    <el-row :gutter="60" class="wrap">
      <el-col :span="6">
        <span>接收用户：</span>
      </el-col>
      <el-col :span="12" v-show="isShowUsers">
        <div :key="index" class="nameShow" v-for="(item, index) in confirmData">
          <span>{{item.name}}</span>
          <div @click="deleteItem(index)" class="icon-delete">x</div>
        </div>
      </el-col>
      <el-col :span="6">
        <button @click="addPerson" class="btn-green">新增人员</button>
        <button @click="testPerson" class="btn-green">testdialog</button>
      </el-col>
    </el-row>
    <edit-dialog
      :isShow="dialogAddPerson"
      :isShowUser="isShowUsers"
      @change-user="changeUser"
      @close-dialog="closeDialog"
      @popdialog="popdialog"
      ref="editDialog"
    ></edit-dialog>
    <test-dialog
      :isShow="dialogTestPerson"
      :isShowUser="isShowUsers"
      @change-user="changeUser"
      @close-dialog="closeTestDialog"
      ref="editDialog"
    ></test-dialog>
  </div>
</template>

<script>
import axios from 'axios'
import editDialog from './children/editDialog'
import testDialog from './children/testDialog'
import {mapGetters, mapState, mapMutations} from 'vuex';
export default {
  name: 'HelloWorld',
  components: {
    editDialog,
    testDialog,
  },
  data () {
    return {
      dialogAddPerson: false,
      dialogTestPerson: false,
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
      console.log("111");
      this.dialogAddPerson = true
    },
    closeDialog() {
      this.dialogAddPerson=false
      // this.$refs.editDialog.cancel()
    },
    closeTestDialog() {
      this.dialogTestPerson=false
      // this.$refs.editDialog.cancel()
    },
    deleteItem (index) {
      this.$refs.editDialog.toggleSelection(index)
    },
    changeUser (flag) {
      this.isShowUsers = flag
    },
    testPerson(){
      this.dialogTestPerson = true
    },
    popdialog(){
      this.dialogTestPerson = true
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
