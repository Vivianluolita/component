<template>
  <div>
    <el-form>
      <el-form-item prop="servin">
        <template>
          <el-table
            :data="dataList"
            :row-class-name="rowClassName"
            border
            ref="tb"
            style="width: 100%;"
            v-if="showTable"
          >
            <!-- <el-table-column :render-header="renderHeader" width="50"></el-table-column> -->
            <!-- <el-table-column align="center" header-align="center" label="比例下限"></el-table-column> -->
            <!-- <el-table-column
              :render-header="renderHeaderTwo"
              align="center"
              header-align="center"
              label="比例上限"
            >
          
            </el-table-column>-->
            <el-table-column align="center" label="序号" prop="xh" width="50"></el-table-column>
            <el-table-column
              :key="i"
              align="center"
              header-align="center"
              v-for="(col,i) in colList"
            >
              <!-- <template slot="header" slot-scope="scope">
                <el-button @click.native.prevent="deleteCol(scope.$index, colList)" size="small">移除</el-button>
                <el-input :value="col" name="colNameList" size="mini" v-model="scope.row.btn"></el-input>
                <i @click="deleteCol(scope.$index, colList)" class="el-icon-circle-close"></i>
              </template>-->
              <template slot-scope="scope">
                <el-button @click.native.prevent="deleteCol(scope.$index, colList)" size="small">移除</el-button>
                <el-input :value="col" name="colNameList" size="mini"></el-input>
                <span>{{colList[colList.length]}}</span>
                <i @click="deleteCol(scope.$index, colList)" class="el-icon-circle-close"></i>
              </template>
              <!-- <template slot-scope="scope">
                <el-input size="mini" v-model="scope.row[col]"></el-input>
              </template>-->
            </el-table-column>
            <el-table-column align="center" header-align="center" label="操作">
              <!-- <template slot-scope="scope">
                <el-button @click.native.prevent="deleteRow(scope.$index, dataList)" size="small">移除</el-button>
              </template>-->
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
        //  
      dataList: [{0:
      ''}],
      colList: [], // 动态获取自己列数据
    }
  },
  methods: {
    rowClassName({ row, rowIndex }) {
  
      // row.xh = rowIndex + 1;
    },
    handleMultipleStart(){
      console.log("222222")
      // console.log("22222233",params)
    },
    renderHeader(h,{ column, $index }) {
         return (
             <div>
                <i onClick={this.handleMultipleStart}  class="el-icon-circle-close"></i>
             </div>
         )
    },
    // renderHeaderTwo(h) {
    //      return (
    //          <div>
    //             <span>比例上限</span>
    //             <i  class="el-icon-circle-plus-outline"></i>

    //          </div>
    //      )
    // },
    deleteRow(index, rows) {
      //删除改行
      console.log("rows",rows)
      rows.splice(index, 1)
    },
    deleteCol(index, col) {
      //删除改列
      console.log("col",col)
      col.splice(index, 1)
    },
    addRow() {
      console.log("dataList",this.dataList)
      console.log("colList",this.colList)
      let row = {}
      this.colList.forEach((col,index) => {
        // row[index].btn = '111'
      })
      this.dataList.push(row)
      console.log("row",row)
      console.log("dataList",this.dataList)
    },
    addCol() {
      this.colList[this.colList.length] = ''
      // this.colList[this.colList.length].btn = '111'
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