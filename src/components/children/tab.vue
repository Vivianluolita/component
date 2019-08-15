<template>
  <div class="tab-wrap">
    <div class="tab">
      <div class="tab-item"
           :class="{active: option.activeName===item.value}"
           v-for="(item,index) in option.list"
           :key="index"
           @click="change(item.value)">
        <span class="label">{{item.label}}</span>
        <span v-if="item.badge" class="new">{{item.badge}}</span>
      </div>
    </div>
    <slot name="button"></slot>
  </div>
</template>

<script>
export default {
  name: 'tab',
  props: {
    option: {
      type: Object,
      default: () => {
        return {
          activeName: null,
          list: [
            {
              label: null,
              value: null
            }
          ]
        }
      }
    }
  },
  methods: {
    change (active) {
      this.activeName = active
      this.$emit('change', active)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .tab-wrap
    display: flex;
    align-items: flex-end;
    justify-content: space-between
    height:55px;
    font-size:11px;
    border-top:1px solid rgba(112,112,112,.1);
    border-bottom:1px solid rgba(204,204,204,1);
    .tab
      display: flex
      height:32px;
      align-items: flex-end;
      .tab-item
        padding: 0 20px;
        min-width:112px;
        width:auto;
        height:30px;
        margin-right: 3px;
        line-height: 30px;
        white-space: nowrap
        font-weight: bold;
        text-align: center
        color: #000;
        background:rgba(255,255,255,1);
        border: 1px solid #ccc
        border-bottom: none
        border-radius:2px 2px 0px 0px;
        &.active{
          color: #fff;
          height:32px;
          background:rgba(33,189,187,1);
        }
        .new{
          height:24px;
          padding: 0 5px;
          line-height: 24px;
          font-size:11px;
          color: #fff;
          background:rgba(255,102,0,1);
          border-radius:12px;
        }
    .edit
      width:162px;
      height:32px;
      font-size:11px;
      margin-bottom: 6px;
      font-weight: bold;
      color: #fff;
      white-space: nowrap
      background:rgba(255,102,0,1);
      border-radius:2px;
</style>
