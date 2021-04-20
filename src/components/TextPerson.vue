<template>
  <el-dialog
    :close-on-click-modal="true"
    :close-on-press-escape="false"
    :modal-append-to-body="false"
    :show-close="false"
    :visible="isVisible===0?false:true"
    height="407px"
    width="360px"
  >
    <div class="login-wrap">
      <div @click="closeDialog" class="userSetting-header-topHeader-close">
        <i class="el-icon-close" style="width:25px;height:25px;line-height:25px;"></i>
      </div>
      <div>
        232323232
        <!-- <img
          :src="isVisible === 3?imgSrc[1].login_bg:(isVisible === 1?imgSrc[0].login_bg:imgSrc[2].login_bg)"
          @click="loginBannerJump"
          alt
          class="login-bg"
          v-if="showImg"
        />-->
      </div>
      <el-main class="login-input">
        <nn-login-normal
          :findPwdLoginNumber="findPwdLoginNumber"
          @goComponents="goComponents"
          class="login-nomal"
          ref="component2"
          v-if="isVisible === 1"
        ></nn-login-normal>
        <nn-login-register
          :phone_value="phone_value"
          @goComponents="goComponents"
          @transferPhone="transferPhone"
          v-if="isVisible === 2"
        ></nn-login-register>
        <nn-login-leigod
          @goComponents="goComponents"
          @leigodToken="leigodToken"
          v-if="isVisible === 3"
        ></nn-login-leigod>
        <nn-login-bind-phone
          :getLeigodToken="getLeigodToken"
          @goComponents="goComponents"
          v-if="isVisible === 4"
        ></nn-login-bind-phone>
        <nn-login-find-pwd
          @findPwdLogin="findPwdLogin"
          @goComponents="goComponents"
          v-if="isVisible === 5"
        ></nn-login-find-pwd>
      </el-main>
    </div>
  </el-dialog>
</template>

<script>
import LoginRegister from './children/LoginRegister'
import LoginBindPhone from './children/LoginBindPhone'
import LoginNormal from './children/LoginNormal'
import LoginFindPwd from './children/LoginFindPwd'
import LoginLeigodLogin from './children/LoginLeigodLogin'
export default {
   name:'TextPerson',
   components: {
    // 注册
    'nn-login-register': LoginRegister,
    'nn-login-normal': LoginNormal,
    'nn-login-leigod': LoginLeigodLogin,
    'nn-login-bind-phone': LoginBindPhone,
    'nn-login-find-pwd': LoginFindPwd
  },
   data:{
     phone_value: '',
        showDiv : false,
      // 忘记密码登录账号登录回显
      findPwdLoginNumber: '',
      // 雷神登录token
      getLeigodToken: ''
    },
    computed: {
    isVisible () {
      // 用vuex控制弹窗的显示和隐藏
      // 正常情况下，我们不建议使用嵌套的 Dialog，如果需要在页面上同时显示多个 Dialog，可以将它们平级放置。对于确实需要嵌套 Dialog 的场景，我们提供了append-to-body属性。将内层 Dialog 的该属性设置为 true，它就会插入至 body 元素上，从而保证内外层 Dialog 和遮罩层级关系的正确。
      // return this.$store.state.loginShow.isLoginShow
      return 1
    },
    showImg () {
      return (
        this.isVisible !== 4 &&
        this.isVisible !== 5 &&
        this.isVisible !== 6 &&
        this.isVisible !== 7
      )
    }
  },
    methods:{
        getText:function(){
            this.showDiv = true;
            this.$nextTick(function(){
                  var text = document.getElementById('div').innnerHTML;
                 console.log(text);  
            });
        }
    },
  //   watch: {
  //   isVisible (newValue, oldValue) {
  //     if (newValue !== 1 && oldValue !== 5) {
  //       this.findPwdLoginNumber = ''
  //     }
  //   }
  // }
}
</script>

<style  scoped>
</style>