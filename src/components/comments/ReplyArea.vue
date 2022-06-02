<template>
<div>
  <div >
    <div class="img-class">
      <span v-if="editDress"
            :style="userInfo.address ? '' : 'color:#999;'">{{ userInfo.address ? userInfo.address : '' }}</span>
      <!-- <el-input class="input-cname"
                :maxlength="100"
                @blur="dressInputBlur"
                @focus="isCloseOne = false"
                v-else
                v-model="userInfo.address"
                ref="addressRef"></el-input> -->
      <el-form  v-else @click.prevent="handleSubmit()">
        <!-- isCloseOne 聚焦的时候要掉接口 -->
        <!-- @blur="dressInputBlur" -->
        <textarea  @focus="isCloseOne = false" :maxlength="100"  ref="addressRef" class="areaStyle" id name="comment" placeholder="请输入你的评论" v-model="userInfo.address"></textarea>
      </el-form>        

    </div>
    <div style="cursor: pointer;">
    <div>

      <el-button @click="dressInputBlur()">save</el-button>
      <el-button @click="cancelComment()">cancel</el-button>
      <el-button @click="deleteComment()">delete</el-button>
    </div>
    </div>
  </div>
</div>
</template>


<script>
export default {
  data() {
    return {
      content:'',
      comStatus:null,
      editDress:false,
      userInfo:{
        address:'文本测试'
      },
      // isCloseOne:false,//调用接口失焦的时候，
    };
  },
  watch:{
    // commentStatus: {
    //   handler(newData, oldData) {
    //     console.log("newData", newData);
    //     console.log("oldData", oldData);
    //     // this.computedYear(newData);
    //     this.comStatus = commentStatus
    //     console.log("this.comStatus",this.comStatus)
    //     this.$nextTick(()=>{
    //       this.comStatus = commentStatus
    //     })
    //   },
    //   deep: true,
    //   immediate: true
    // },
  },
  props:{

    
    // commentStatus: {
    //     type: Number,
    //     default: 1
    // },
  
  },
  methods:{
    cancelComment(){
      if(!editDress){

        this.userInfo.address = ''
      }
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