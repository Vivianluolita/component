<template>
  <div class="re-guide">
    <div class="re-content">
      <div class="re-cbtn" v-if="step=='one'">
        <div class="btn-block" type="primary">
          <span class="btn-edit"></span>
          <span class="btn-word">发布新职位</span>
        </div>
      </div>
      <div class="g-btn" v-else>
        <div class="btn-tr">置顶</div>
      </div>

      <transition @after-enter="afterEnter" @before-enter="beforeEnter" @enter="enter" name="fade">
        <div class="ta-show" v-if="show">
          <div>
            <!-- :class="[step === 'two' ? 'two-line' :'']" -->
            <div class="job-line" id="line"></div>
            <div class="j-tips" id="word">{{info}}</div>
            <div class="ta-btn" id="btn">
              <div @click="doGuideCode" class="btn-know">我知道了，马上体验</div>
              <div @click="doNextFun" class="btn-next" v-if="step == 'one'">下一步</div>
            </div>
          </div>
          <!-- <div>
                        <div class="ta-btn">
                            <div class="btn-know" @click="doGuideCode">我知道了，马上体验</div>
                            <div class="btn-next" @click="doNextFun">下一步</div>
                        </div>

                        <div class="t-tips">2，使用职位置顶，并选择置顶天数，即可在同类职位之上被学生优先看到</div>
                        <div class="tip-line"></div>
          </div>-->
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
    // import { getGuideCode} from '@/network/request'
    // import MyDialog from '../my-dialog/MyDialog.vue'
    export default {
        name: "MyDialogAnimal",
        components: { MyDialog },
        data(){
            return{
                show:false,
                step:'one',
                info:'1，发布新职位，招聘更多优秀人才' //
            }
        },
        created() {
            setTimeout(()=>{
                this.show =true
            },500)

        },
        methods:{
            beforeEnter(el){
                el.style.transform = "translate(-400px, 238px)"
            },
            enter(el, done){
                el.offsetWidth    // 这句话，没有实际的作用，但是，如果不写，出不来动画效果；  // 可以认为 el.offsetWidth 会强制动画刷新
                // enter 表示动画 开始之后的样式，这里，可以设置小球完成动画之后的，结束状态
                el.style.transform = "translate(782px, 238px)"
                el.style.transition = 'all 1.5s ease'
                //done()
            },
            afterEnter(el){
                // 动画完成之后，会调用 afterEnter
                //  el.style.transition = 'all 0.1s ease'
                this.show = false
            },
            doGuideCode(){
                // this.getGuidTip();
                // this.$emit("positionFun")
            },
            doNextFun(){
                this.step = 'two'
                this.info = '2，使用职位置顶，并选择置顶天数，即可被学生优先看到'
                let lineDom = document.getElementById('line')
                if(lineDom){
                    /*lineDom.style.transform = 'translate(782px, 258px)';*/
                    lineDom.style.transform = 'translate(0px, 130px) rotateX(180deg)  ';
                    lineDom.style.transition = 'all 1s ease';
                }
                let wordDom = document.getElementById('word')
                if(wordDom){
                    wordDom.style.transform = 'translate(0px, -40px) rotateX(360deg)  ';
                    wordDom.style.transition = 'all 1s ease';
                }
                let btnDom = document.getElementById('btn')
                if(btnDom){
                    btnDom.style.transform = 'translate(0px, -150px) rotateX(360deg)  ';
                    btnDom.style.transition = 'all 1s ease';
                }

            },
            getGuidTip(){
                getGuideCode({guide:1}).then(res =>{
                })
            }
        }
    }
</script>

<style scoped lang="stylus">
.re-guide {
  height: 100%;
  position: relative;

  /* height: 100vh; */
  .re-content {
    position: relative;
    width: 1100px;
    margin: 0 auto;

    .re-cbtn {
      position: absolute;
      left: 915px;
      top: 172px;
      width: 170px;
      height: 60px;
      background-color: #ffffff;
      justify-content: center;
      align-items: center;
      border-radius: 2px;
      display: flex;
      align-items: center;
      justify-content: center;

      .btn-block {
        display: flex;
        width: 140px;
        height: 40px;
        background: #437FFF;
        border-radius: 4px;
        align-items: center;
        color: #FFFFFF;
        justify-content: space-evenly;

        &:hover {
          cursor: pointer;
        }

        .btn-edit {
          display: inline-block;
          width: 16px;
          height: 16px;
          line-height: 16px;
          background: url('../../assets/logo.png') no-repeat;
          background-size: 16px 16px;
        }

        .btn-word {
          display: inline-block;
        }
      }
    }

    .g-btn {
      width: 60px;
      height: 52px;
      /* background: #FFFFFF; */
      position: absolute;
      left: 920px;
      top: 486px;
      display: flex;
      align-items: center;
      justify-content: center;

      .btn-tr {
        width: 96px;
        height: 32px;
        background: #FFFFFF;
        border-radius: 4px;
        line-height: 32px;
        color: #437fff;
        text-align: center;
      }
    }

    .ta-show {
      .tip-line {
        background: url('../../assets/logo.png') no-repeat;
        width: 32px;
        height: 32px;
        transform: rotateX(180deg);
        /* transform: rotate(45deg); */
      }

      .job-line {
        background: url('../../assets/logo.png') no-repeat;
        width: 48px;
        height: 48px;
      }

      .two-line {
        transform: rotateX(180deg);
      }

      .ta-btn {
        margin: 0 0 20px -288px;
        display: flex;

        .btn-know {
          background: url('../../assets/logo.png') no-repeat;
          background-size: 100% 100%;
          width: 64px;
          height: 64px;
          line-height: 64px;
          text-align: center;
          color: #ffffff;

          &:hover {
            cursor: pointer;
          }
        }

        .btn-next {
          margin-left: 70px;
          /* width: 60px; */
          background: url('../../assets/logo.png') no-repeat;
          background-size: 100% 100%;
          width: 90px;
          height: 90px;
          line-height: 90px;
          text-align: center;
          color: #ffffff;

          &:hover {
            /* color: #437fff; */
            cursor: pointer;
          }
        }
      }

      .t-tips {
        height: 34px;
        font-size: 22px;
        margin: 0 0 20px -326px;
        font-family: SourceHanSansCN-Medium, SourceHanSansCN;
        font-weight: 500;
        color: #FFFFFF;
        line-height: 51px;
      }

      .j-tips {
        height: 34px;
        font-size: 22px;
        font-family: SourceHanSansCN-Medium, SourceHanSansCN;
        color: #FFFFFF;
        line-height: 51px;
        margin: 0 0 20px -288px;
      }
    }
  }
}
</style>

