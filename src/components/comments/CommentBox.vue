<template>
  <div>
    <div v-if="commentStatus === 1">
      <div class="img-class">
        <span
          :style="userInfo.address ? '' : 'color:#999;'"
          v-if="editDress"
        >{{ userInfo.address ? userInfo.address : '' }}</span>

        <el-form @click.prevent="handleSubmit()" v-else>
          <textarea
            :maxlength="100"
            @focus="isCloseOne = false"
            class="areaStyle"
            id
            name="comment"
            placeholder="请输入你的评论"
            ref="addressRef"
            v-model="userInfo.address"
          ></textarea>
        </el-form>
      </div>
      <div v-if="editDress">
        <el-button @click="dressInputClick">modify</el-button>
      </div>
      <div v-if="!editDress">
        <el-button @click="btnSave()">save</el-button>
        <el-button @click="btnCancel()">cancel</el-button>
        <el-button @click="btnDelete()">delete</el-button>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      targetValue:'',
      content:'',
      comStatus:null,
      editDress:true,
      userInfo:{
        address:'文本测试'
      },
      isCloseOne:false,//调用接口失焦的时候，
    };
  },
  watch:{
    commentStatus: {
      handler(newData, oldData) {
        console.log("newData", newData);
        console.log("oldData", oldData);
        // this.computedYear(newData);
        this.comStatus = this.commentStatus
        console.log("this.comStatus",this.comStatus)
        this.$nextTick(()=>{
          this.comStatus = this.commentStatus
        })
      },
      deep: true,
      immediate: true
    },
  },
  props:{

    
    commentStatus: {
        type: Number,
        default: null
    },
    CommentData: {
        type: Array,
        default: null
    },
  
  },
  methods:{
    changeValue(e){
      this.targetValue = e.target.value;
      this.$emit('input', this.targetValue);
    },
    btnSave(){
      this.editDress = true
    },
    btnCancel(){
      console.log("222222")
      this.userInfo.address = ''
      // this.editDress = false
    },
    btnDelete(){
      this.userInfo.address = ''
      this.editDress = false
      this.$emit('handleDelete')
    },
    handleSubmit(){
      this.$emit('submit',this.content)
      this.content = ''
    },
    // 编辑单位地址
    dressInputBlur () {
      this.editTag = '1'
      this.editDress = true
      let reg = /^[\u4E00-\u9FA5A-Za-z0-9_\\/()/-_《》-]+$/
      if (this.userInfo.address) {
        if (new RegExp(reg).test(this.userInfo.address) == false) {
          console.log(
            'new RegExp(reg).test(this.userInfo.address)',
            this.userInfo.address
          )
          this.$message({
            type: 'error',
            message: '单位地址格式不正确',
          })
        } else {
          // 掉后台接口
          // this.editCompanyBasic()
        }
      }
    },
    dressInputClick () {
      this.editDress = false
      var that = this
      this.$nextTick(() => {
        that.$refs.addressRef.focus()
      })
    },
     // 编辑企业基本信息
    // editCompanyBasic () {
    //   // let reg = /^[a-zA-Z0-9\u4e00-\u9fa5]+$/

    //   // if (reg.test(this.userInfo.cname)) {}
    //   let info = JSON.parse(localStorage.getItem('info'))
    //   // var taxcodeParam = info.taxcode'
    //   let params = {
    //     nsrid: info.nsrid,
    //     address: this.userInfo.address,
    //     phone: this.userInfo.phone,
    //     khyh: this.userInfo.khyh,
    //     yhzh: this.userInfo.yhzh,
    //   }
    //   console.log('paramssss', params)
    //   if (info && info.nsrid && info.customerid) {
    //     companyBasicInfoEditApi({ ...params }).then((res) => {
    //       if (res.code === '000') {
    //         if (this.editTag == '1') {
    //           this.$message.success('单位地址修改成功')
    //           this.editDress = true
    //           this.isCloseOne = true
    //         } else if (this.editTag == '2') {
    //           this.$message.success('电话号码修改成功')
    //           this.editPhone = true
    //           this.isCloseTwo = true
    //         } else if (this.editTag == '3') {
    //           this.$message.success('开户银行修改成功')
    //           this.editBank = true
    //           this.isCloseThree = true
    //         } else if (this.editTag == '4') {
    //           this.$message.success('银行账号修改成功')
    //           this.editBankNum = true
    //           this.isCloseFour = true
    //         }
    //       } else {
    //         this.$message.error(res.msg)
    //       }
    //     })
   
    //   }
    // },

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