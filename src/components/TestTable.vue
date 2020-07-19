<template>
  <div>
    <el-form>
      <el-form-item prop="servin">
        <template>
          <el-table :data="dataList" border style="width: 100%;" v-if="showTable">
            <el-table-column
              :key="i"
              align="center"
              header-align="center"
              v-for="(col,i) in colList"
            >
              <template slot="header" slot-scope="scope">
                <el-button @click.native.prevent="deleteCol(scope.$index, colList)" size="small">移除</el-button>
                <el-input :value="col" name="colNameList" size="mini"></el-input>
              </template>
              <template slot-scope="scope">
                <el-input size="mini" v-model="scope.row[col]"></el-input>
              </template>
            </el-table-column>
            <el-table-column align="center" header-align="center" label="操作">
              <template slot-scope="scope">
                <el-button @click.native.prevent="deleteRow(scope.$index, dataList)" size="small">移除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </template>
        <el-row>
          <el-col :span="12">
            <el-button @click="addRow()" style="width: 100%;" type="info">新增行</el-button>
          </el-col>
          <el-col :span="12">
            <el-button @click="addCol()" style="width: 100%;" type="info">新增列</el-button>
          </el-col>
        </el-row>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  // mixins: [mixinViewModule],
  data() {
    return {
      showTable: true,
      dataList: [],
      colList: [], // 动态获取自己列数据
    }
  },
  methods: {
    deleteRow(index, rows) {
      //删除改行
      rows.splice(index, 1)
    },
    deleteCol(index, col) {
      //删除改列
      col.splice(index, 1)
    },
    addRow() {
      let row = {}
      this.colList.forEach(col => {
        row[col] = ''
      })
    },
    addCol() {
      this.colList[this.colList.length] = ''
      this.showTable = false
      this.$nextTick(() => {
        this.showTable = true
      })
    },
  },
}
</script>

<style>
</style>