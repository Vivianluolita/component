<template>
  <ul :style="{ marginLeft: ml + 'px'}" class="some-search-items">
    <li v-for="(item,idx) in list" :key="idx" >
      <label>
        <input
          v-model="inputVal"
          :value="noLetter ? (needIds ? item.id : item.title) : (item.id || item.ids)"
          :name="name"
          type="checkbox"
          v-if="!redType"
          @change="inputValChange($event, item)"
        >
        <span
          :class="{'red-one': redType}"
          :title="noLetter ? item['name' + $utils.U($i18n.locale)] : (item.title || item.name || item['claim' + $utils.U($i18n.locale)])"
          :style="{width: w + 'px', textAlign: tl}"
        >
          {{noLetter ? item['name' + $utils.U($i18n.locale)] : (item.title || item.name || item['claim' + $utils.U($i18n.locale)])}}
          <i v-if="showIcon" :class="!redType ? 'el-icon-check':'el-icon-close'"></i>
        </span>
      </label>
    </li>
    <li class="zdh-no-claims-tip" v-if="!list.length">No data</li>
  </ul>
</template>
<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => []
    },
    name: {
      type: String,
      default: ''
    },
    letter: {
      type: String,
      default: 'All'
    },
    w: {
      type: String,
      default: 'auto'
    },
    tl: {
      type: String,
      default: 'left'
    },
    ml: {
      type: String,
      default: '0'
    },
    showIcon: {
      type: Boolean,
      default: true
    },
    redType: {
      type: Boolean,
      default: false
    },
    iid: {
      type: Number,
      default: -1
    },
    needIds: {
      type: Boolean,
      default: false
    },
    nameValue: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      inputVal: [],
      curList: []
    }
  },
  computed: {
    noLetter () {
      return this.letter === 'All'
    },
    getIds () {
      return
    },
    // 对category数据进行筛选
    getList () {
      this.curList = []
      this.list.forEach((item) => {
        //非字符筛选
        if (this.noLetter) {
          //不包含父类
          if (this.iid === -1) {
            return this.curList = this.list
          //包含父类
          } else {
            if (item.pid2 != 0 && item.pid2 == this.iid) {
              this.curList.push(item)
            }
          }
        //字符筛选
        } else {
          let firstLetter = (item.title || item.claimEn).charAt(0).toUpperCase()
          if(firstLetter === this.letter.toUpperCase()) {
            this.curList.push(item)
          }
        }
      })
      // console.log(this.curList)
      return this.curList
    }
  },
  methods: {
    inputValChange (e, input) {
      let obj = {
        check: e.target.checked,
        catgry: [input],
      }
      console.log('obj',obj)
      this.$emit('inputValChange', obj)
    },
    //全选非全选
    check (check = false) {
      // console.log('check all !',check)
      if(check) {
        this.curList.forEach(item => {
          var val = this.noLetter ? (this.needIds ? item.id : (this.nameValue ? item['name' + this.$utils.U(this.$i18n.locale)] : item.nameEn)) : item.claimEn
          this.inputVal.push(val)
          // this.inputVal.push(item)
        });
      } else {
        this.inputVal = []
      }
      let obj = {
        check: check,
        catgry: this.curList,
      }
      console.log('obj',obj)
      this.$emit('inputValChange', obj)
    },
  }
};
</script>
<style lang="stylus" scoped>
@import '~assets/styles/varibles.styl'

input
  position absolute
  clip rect(0,0,0,0)

ul
  font-size 0px
  li
    display inline-block
    span
      display inline-block


.some-search-items
  & li
    margin-right 10px
    margin-bottom 4px
    cursor pointer
  & li label
    display: inline-block;
  & li label input[type="checkbox"]:checked + span
    color $themeColor3
    border 1px solid $themeColor3
    i
      display inline
      color $themeColor3
  & li label span
    font1()
    font-size 12px
    line-height 32px
    height: 32px
    padding-left 7px
    padding-right 24px
    border 1px solid transparent
    transition all .2s linear
    position relative
    cursor pointer
    ddd()
    i
      display none
      position absolute
      right 0
      top 0
      bottom 0
      margin auto
      line-height: 32px;
      padding-right: 6px;
      color #ffffff
      font2()
  & li label span.red-one
    border 1px solid $themeColor2
    color $themeColor2
    i
      display inline !important
      color $themeColor2
</style>
