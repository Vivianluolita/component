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
            :data="tableDataAll" 
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
        <!-- 分页 -->
        <el-pagination
            v-if="pager.total>0"
            class="zdh-ta-center"
            @current-change="handleCurrentChange"
            :current-page.sync="pager.current"
            :page-size="10"
            layout="prev, pager, next, jumper"
            :total="pager.total">
        </el-pagination>
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
import {mapGetters, mapState, mapMutations} from 'vuex';
// import editPerson from './editPerson'
export default {
    name:'editDialog',
    components: {
        // editPerson
    },
    data() {
        return {
            tableDataAll: [{
                date: '2016-05-03',
                name: '王小虎12',
                address: '上海市普陀区金沙江路 1518 弄'
                }, {
                date: '2016-05-02',
                name: '王小虎23',
                address: '上海市普陀区金沙江路 1518 弄'
                }, {
                date: '2016-05-04',
                name: '王小虎34',
                address: '上海市普陀区金沙江路 1518 弄'
                }, {
                date: '2016-05-01',
                name: '王小虎44',
                address: '上海市普陀区金沙江路 1518 弄'
                }, {
                date: '2016-05-08',
                name: '王小虎55',
                address: '上海市普陀区金沙江路 1518 弄'
                }, {
                date: '2016-05-06',
                name: '王小虎63',
                address: '上海市普陀区金沙江路 1518 弄'
                }, {
                date: '2016-05-07',
                name: '王小虎47',
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
        ...mapMutations({
            setTableDate:'SET_TABLEDATE'
        }),
        ...mapActions([
            'setPagerApi'
        ]),
        // 分页 查询参数组合
        getParams () {
            const { current, size } = this.pager
            return {
                // ...this.pageParam,
                current,
                size,
                desc: ['asc'],
            }
        },
        // 分页跳转
        pageChange (current) {
        this.setPagerApi({ ...this.pager, current })
        const searchParams = this.getParams()
        this.getTableDataApi(searchParams)
        },
        // 分页跳转 设置页码
        async handleCurrentChange (current) {
            // 更新分页 页数
            await this.setPagerApi({ ...this.pager, ...current })
            const searchParams = {...this.getParams()}
            // await this.getTabListDataApi({...searchParams})
        },
        // 分页 设置page
        setPagerApi ({commit}, pager) {
            console.log(pager)
            commit(UPDATE_SEARCH, {pager})
        },
        handleSelectionChange(val) {
            this.multipleSelection = val;
            console.log("handleSelectionChange"+this.multipleSelection)
            // this.setPerson({ ...multipleSelection })
            this.setTableDate(this.multipleSelection)
            // this.$emit("add-person",this.multipleSelection)
        },
        toggleSelection(index) {
            //先切状态再删
            console.log(this.tableData[index])
           this.$refs.multipleTable.toggleRowSelection(this.tableData[index]);
         
        },
       
        confirm () {
            this.$message('success')
            this.isVisible = false;
        }
    },
    created() {
        console.log(this.tableData)
    },
    computed: {
        ...mapState([
            'tableData'
        ]),
        ...mapGetters([
            'pager'
        ]),
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