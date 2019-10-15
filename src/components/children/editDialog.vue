<template>
    <el-dialog
        title="选择员工"
        width="768px"
        :visible.sync="isVisible"
        :close-on-click-modal="false"
        :close-on-press-escape="false"
    >
    <div class="dialog-content">
        <div class="user-table">
        <el-table 
            ref="multipleTable"
            :data="tableData" 
            tooltip-effect="dark"
            style="width: 100%"
            @selection-change="handleSelectionChange">
            <el-table-column
            type="selection"
            width="55">
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="180"></el-table-column>
            <el-table-column prop="date" label="部门" width="180"></el-table-column>
            <el-table-column prop="address" label="邮箱"></el-table-column>
        </el-table>
    <!-- <el-pagination
        @current-change="handleCurrentChange"
        :current-page="pager.current"
        :page-size="pager.size"
        layout="prev, pager, next, jumper"
        :total="pager.total">
    </el-pagination> -->
        <div class="dialog-footer">
            <el-button type="info" size="small" @click="isVisible=false">取消</el-button>
            <el-button type="primary" size="small" @click="confirm">确定</el-button>
        </div>
    </div>
        <!-- <editPerson :tableData="tableList"></editPerson> -->
    </div>
  </el-dialog>
</template>

<script>
// import editPerson from './editPerson'
export default {
    name:'editDialog',
    components: {
        // editPerson
    },
    data() {
        return {
            tableData: [{
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
                }, {
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
                }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
                }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
                }, {
                date: '2016-05-08',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
                }, {
                date: '2016-05-06',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
                }, {
                date: '2016-05-07',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }],
            multipleSelection: []
        }
    },
    props:{
        isShow: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        toggleSelection(rows) {
            if (rows) {
                rows.forEach(row => {
                this.$refs.multipleTable.toggleRowSelection(row);
                });
            } else {
                this.$refs.multipleTable.clearSelection();
            }
        },
        handleSelectionChange(val) {
            this.multipleSelection = val;
        },
        confirm () {
            this.$message('success')
            this.isVisible = false;
        }
    },
    computed: {
        isVisible: {
            get () {
                return this.isShow
            },
            set (val) {
                this.$emit('close-dialog')
            }
        }
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
.dialog-footer
  padding-top 30px
  text-align center
  & >>> .el-button
    margin: 0 10px
    width 156px
</style>