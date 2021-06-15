<template>
  <el-dialog
    :before-close="handleClose"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
    :visible.sync="isVisible"
    title="选择员工test"
    width="768px"
  >
    <div class="dialog-content">
      <div class="user-table">
        <el-table
          :data="tableDataAll.slice((currentPage-1)*pagesize,currentPage*pagesize)"
          :row-key="getRowKeys"
          @selection-change="handleSelectionChange"
          ref="multipleTable"
          style="width: 100%"
          tooltip-effect="dark"
        >
          <el-table-column :reserve-selection="true" type="selection" width="55"></el-table-column>
          <el-table-column label="姓名" prop="name" width="180"></el-table-column>
          <el-table-column label="部门" prop="date" width="180"></el-table-column>
          <el-table-column label="邮箱" prop="address"></el-table-column>
        </el-table>
        <!-- 分页 -->
        <el-pagination
          :current-page.sync="currentPage"
          :page-size="pagesize"
          :page-sizes="[5, 10, 20, 40]"
          :total="tableDataAll.length"
          @current-change="handleCurrentChange"
          @size-change="handleSizeChange"
          class="zdh-ta-center"
          layout="prev, pager, next, jumper"
        ></el-pagination>
        <div class="dialog-footer">
          <el-button @click="cancel" size="small" type="info">取消</el-button>
          <el-button @click="confirm" size="small" type="primary">确定</el-button>
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
            isShowUser: false,
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
        // isShowUser: {
        //     type: Boolean,
        //     default: false
        // },
    },
    methods: {
        ...mapMutations({
            setTableDate:'SET_TABLEDATE',
            setConfirmData:'SET_COFIRMDATA',
            setCancelData:'SET_CONCELDATA',
            setCancelChecked:'SET_CANCELCHECKED',
            setClearChecked:'SET_CLEARCHECKED',
            deleteConfirmData:'DELETE_CONFIRMDATA'
        }),
        // ...mapActions([
        //     'getStepDataApi'
        // ]),
        
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
        handleClose() {
            this.cancel()
        },
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
           this.$refs.multipleTable.toggleRowSelection(this.confirmData[index]);
           this.deleteConfirmData(index)
        },
       
        confirm () {
            this.$message('success')
            this.isVisible = false;
            this.isShowUser = true;
            this.$emit("change-user",this.isShowUser)
            this.setConfirmData(this.multipleSelection)
        },
        cancel () {
            this.isVisible=false
            this.isShowUser = false;
            // //取消的时候的回显数据为上一次显示的数据
            this.setCancelData(this.confirmData)
            //过滤取消数据
            this.setCancelChecked()
            //取消选中效果
            this.clearChecked()
            //将取消时点击的数据置空
            this.setClearChecked()
            // this.$emit("change-user",this.isShowUser)

        },
        clearChecked () {
            if(this.cancelChecked){
                this.cancelChecked.forEach(row => {
                this.$refs.multipleTable.toggleRowSelection(row);
                });
            }
        }
    },
    // created() {
    //     console.log(this.tableData)
    // },
    computed: {
        ...mapState([
            'tableData',
            'confirmData',
            'cancelChecked'
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

.dialog-footer {
  padding-top: 30px;
  text-align: center;

  & >>> .el-button {
    margin: 0 10px;
    width: 156px;
  }
}
</style>