<template>
  <div class="user-table">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column type="selection" v-if="tableConfig.selection"></el-table-column>
      <el-table-column
        :key="item.field"
        :label="item.name"
        :prop="item.field"
        v-for="item in this.configTable.tHead"
        width="180"
      ></el-table-column>
      <!-- <el-table-column label="id" prop="id" width="180"></el-table-column>
      <el-table-column label="name" prop="name" width="180"></el-table-column>
      <el-table-column label="amuont1" prop="amount1"></el-table-column>
      <el-table-column label="amuont2" prop="amount2"></el-table-column>
      <el-table-column label="amuont3" prop="amount3"></el-table-column>-->
      <!-- <el-table-column label="Operation" prop="operation">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" size="small" type="text">edit</el-button>
        </template>
      </el-table-column>-->
    </el-table>
    <!-- <el-pagination
      :current-page="pager.current"
      :page-size="pager.size"
      :total="pager.total"
      @current-change="handleCurrentChange"
      layout="prev, pager, next, jumper"
    ></el-pagination>-->
  </div>
</template>

<script>
export default {
  name: 'table3',
  created() {
    console.log('created111')
    this.initTableConfig()
    this.initData()
  },
  data() {
    return {
      // configOption: {
      //   init: ['id', 'name'],
      // },
      // table组件参数配置
      tableConfig: {
        selection: true,
        tHead: [],
      },
      configTable: {
        tHead: [],
        // tHead: [
        //   {
        //     label: 'id',
        //     field: 'id',
        //   },
        //   {
        //     label: 'name',
        //     field: 'name',
        //   },
        //   {
        //     label: 'amuont1',
        //     field: 'amuont1',
        //   },
        //   {
        //     label: 'amuont2',
        //     field: 'amuont2',
        //   },
        //   {
        //     label: 'amuont3',
        //     field: 'amuont3',
        //   },
        // ],
      },
    }
  },
  props: {
    tableData: {
      type: Array,
      default: () => [],
    },
    config: {
      type: Object,
      default: () => {},
    },
    // pager: {
    //   type: Object,
    //   default: () => {},
    // },
  },
  methods: {
    initTableConfig() {
      let configData = this.config
      for (let key in configData.tHead) {
        if (this.tableConfig[key]) {
          this.tableConfig[key] = configData[key]
        }
      }
    },
    initData() {
      this.tableConfig.tHead = this.config.tHead
      this.tableConfig.selection = this.config.selection
    },
    // handleClick(row) {
    //   console.log(row)
    // },
    // handleCurrentChange() {},
  },
}
</script>

<style lang="stylus" scoped>
.user-table {
  position: relative;

  & >>> .el-pagination {
    padding: 10px 0;
    text-align: center;
  }

  & >>> .el-table td {
    padding: 6px 0;
  }
}

.zdh-submit-btn {
  &.export {
    position: absolute;
    bottom: 7px;
    right: 0;
  }
}

.total {
  padding-bottom: 10px;
  color: #FF6600;
  font-size: 12px;
}
</style>
