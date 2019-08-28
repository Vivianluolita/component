<template>
  <ul class="some-search-letters">
    <li v-for="(item,idx) in letter" :key="idx">
      <label>
        <input :name="name" :checked="item === initLetter" :value="item" type="radio" @click="update(item)">
        <span :class="{active: item === initLetter}">{{item}}</span>
      </label>
    </li>
  </ul>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      default: ''
    },
    initLetter: {
      type: String,
      default: 'A'
    }
  },
  data () {
    return {
      letter: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
    }
  },
  methods: {
    update (item) {
      this.$emit('update', item)
    }
  },
  mounted () {
    this.update(this.initLetter)
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
    label
      display: inline-block;
      span
        display inline-block

.some-search-letters
  margin-bottom: 14px;
  & li label span
    font1()
    font-size 12px
    width 31px
    text-align center
    color #232323
    line-height 32px
    cursor pointer
    &.active{
      color $themeColor3
    }
</style>
