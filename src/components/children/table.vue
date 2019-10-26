<template>
<div class="user-table">
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="name" label="Name" width="180"></el-table-column>
    <el-table-column prop="updateYear" label="Update Year" width="180"></el-table-column>
    <el-table-column prop="region" label="Region"></el-table-column>
    <el-table-column prop="country" label="Country"></el-table-column>
    <el-table-column prop="segment" label="Segment"></el-table-column>
    <el-table-column prop="position" label="Position"></el-table-column>
    <el-table-column prop="uploader" label="Uploader"></el-table-column>
    <el-table-column prop="approver" label="Approver"></el-table-column>
    <el-table-column prop="commentRating" label="Comment/Rating"></el-table-column>
    <el-table-column prop="operation" label="Operation">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">edit</el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-pagination
    @current-change="handleCurrentChange"
    :current-page="pager.current"
    :page-size="pager.size"
    layout="prev, pager, next, jumper"
    :total="pager.total">
  </el-pagination>
</div>
</template>

<script>
export default {
  name: 'user-table',
  data() {
    return {}
  },
  props: {
    tableData: {
      type: Array,
      default: () => []
    },
    pager: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    handleClick(row) {
      console.log(row)
    },
    handleCurrentChange() {}
  }
}
</script>

<style lang="stylus" scoped>
.user-table
  position relative
  & >>> .el-pagination
    padding 10px 0
    text-align center
  & >>> .el-table td
    padding 6px 0
.zdh-submit-btn
  &.export
    position absolute
    bottom 7px
    right 0

.total
  padding-bottom 10px
  color #FF6600
  font-size 12px
</style>
