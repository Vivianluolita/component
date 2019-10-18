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
            :data="tableDataAll.slice((currentPage-1)*pagesize,currentPage*pagesize)" 
            tooltip-effect="dark"
            style="width: 100%"
            :row-key="getRowKeys"
            @selection-change="handleSelectionChange">
            <el-table-column
            :reserve-selection="true"
            type="selection"
            width="55">
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="180"></el-table-column>
            <el-table-column prop="date" label="部门" width="180"></el-table-column>
            <el-table-column prop="address" label="邮箱"></el-table-column>
        </el-table>
        <!-- 分页 -->
        <el-pagination
            class="zdh-ta-center"
            @size-change="handleSizeChange" 
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage"
            :page-sizes="[5, 10, 20, 40]"
            :page-size="pagesize" 
            layout="prev, pager, next, jumper"
            :total="tableDataAll.length">
        </el-pagination>
        <div class="dialog-footer">
            <el-button type="info" size="small" @click="cancel">取消</el-button>
            <el-button type="primary" size="small" @click="confirm">确定</el-button>
        </div>
    </div>
    </div>
  </el-dialog>
</template>

<script>
import axios from 'axios'
import {mapGetters, mapState, mapMutations,mapActions} from 'vuex';
// import editPerson from './editPerson'
export default {
    name:'editDialog',
    components: {
        // editPerson
    },
    data() {
        return {
            currentPage: 1, //默认显示页面为1
			pagesize: 5, //    每页的数据条数
            tableDataAll: [],
            multipleSelection: [],
            //点击确定按钮后将上面选中的数据存入该数组
            dataSure:[],
            //记录每行的key值
            getRowKeys(row){
                return row.id
            },
            //表格select选中的条数
            select_order_number:'',
            //表格select选中的id
            select_orderId:[]

        }
    },
    created() {
        axios.get('/api/getTable').then((response)=>{
            this.tableDataAll = response.data.datas;
        });  
    },
    props:{
        isShow: {
            type: Boolean,
            default: false
        },
        isShowUser: {
            type: Boolean,
            default: false
        },
    },
    methods: {
        ...mapMutations({
            setTableDate:'SET_TABLEDATE'
        }),
        ...mapActions([
            'getStepDataApi'
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
        // pageChange (current) {
        // this.setPagerApi({ ...this.pager, current })
        // const searchParams = this.getParams()
        // this.getTableDataApi(searchParams)
        // },
        //每页下拉显示数据
        handleSizeChange: function(size) {
            this.pagesize = size;
            /*console.log(this.pagesize) */
        },
        //点击第几页
        handleCurrentChange: function(currentPage) {
            this.currentPage = currentPage;
            /*console.log(this.currentPage) */
        },
        // 分页跳转 设置页码
        // async handleCurrentChange (current) {
        //     await this.setPagerApi({ ...this.pager, ...current })
        //     const searchParams = {...this.getParams()}
        //     // await this.getTabListDataApi({...searchParams})
        // },
        // 分页 设置page
        // setPagerApi ({commit}, pager) {
        //     console.log(pager)
        //     commit(UPDATE_SEARCH, {pager})
        // },
        handleSelectionChange(val) {
            this.multipleSelection = val;
            console.log("handleSelectionChange"+this.multipleSelection)
            this.select_order_number = this.multipleSelection.length
            this.select_orderId = []
            if (val) {
                val.forEach(row => {
                    if (row) {
                        this.select_orderId.push(row.id)
                    }
                })
            }
            // this.setPerson({ ...multipleSelection })
            this.setTableDate(this.multipleSelection)
            // if(this.isShowUser){
            //     this.setTableDate(this.multipleSelection)
            // }
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
            this.isShowUser = true;
            this.$emit("change-user",this.isShowUser)
            this.setConfirmDate(this.multipleSelection)
        },
        cancel () {
            this.isVisible=false
            this.isShowUser = false;
            // this.$emit("change-user",this.isShowUser)

        }
    },
    // created() {
    //     console.log(this.tableData)
    // },
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