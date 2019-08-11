<!--suppress ALL -->
<template>
  <div class="search-wrap">
    <el-select class="item"
               v-for="(select,index) in list"
               :key="index"
               v-model="select.value"
               clearable
               :filterable="select.filterable"
               :placeholder="select.placeholder"
               @change="e => change(select.key, e, index)">
      <el-option
        v-for="item in select.options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <button class="search-btn" @click="$emit('search', summary)">点击</button>
  </div>
</template>

<script>
export default {
  name: 'search',
  props: {
    list: {
      type: Array,
      default: () => {
        return {
          options: [{
            value: null,
            label: null
          }],
          value: null,
          key: null,
          placeholder: null
        }
      }
    }
  },
  computed: {
    summary () {
      let obj = {}
      this.list.map(item => {
        if(item.value) {obj[item.key] = item.value}
      })
      return obj
    }
  },
  created () {},
  mounted () {},
  methods: {
    change (key, value, index) {
      // key    选框的key
      // value  所选值
      // index  第几个框
      this.list[index].value = value
    }
  }
}
</script>

<style lang="stylus" scoped>
  .search-wrap
    .item
      margin: 18px 31px 0 0
  .search-btn
    display: block
    width:148px;
    height:32px;
    margin: 9px auto;
    background:rgba(255,102,0,1);
    opacity:1;
    border-radius:2px;
    font-size:11px;
    font-weight:bold;
    line-height:0px;
    color:rgba(250,248,248,1);
</style>
