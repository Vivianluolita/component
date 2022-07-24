<template>
  <!-- demo 可编辑表格带校验带新增 -->
  <div id="app">
    <h3>vue+ElementUI 表单嵌套表格逐行校验（新增、编辑）的完美解决方案</h3>
    <p>--大话主席</p>
    <el-form :model="form" :rules="rules" ref="form">
      <el-table
        :data="form.datas"
        :row-class-name="tableRowClassName"
        @row-click="saveTableData"
        @row-dblclick="handdleRow"
        highlight-current-row
        style="width: 100%"
      >
        <el-table-column label="序号" prop="id" width="60"></el-table-column>

        <el-table-column label="姓名" prop="name">
          <template slot-scope="scope">
            <!-- <template v-if="scope.row.action == 'view'">
              {{scope.row.name}}
            </template>-->
            <template>
              <el-form-item :prop="'datas.'+scope.$index + '.name'" :rules="rules.name">
                <el-input
                  size="mini"
                  style="width: 120px;"
                  v-model.trim="scope.row.name"
                  v-show="scope.row.index == currentRowIndex"
                ></el-input>
                <div id="app" style="background:#fff">
                  <p>
                    <span v-tooltip="{ ref: 'tooltipRef' }">name</span>
                  </p>

                  <div class="tooltip-content" ref="tooltipRef" style="background:#fff">
                    <p>Let's use some HTML in this tooltip</p>
                    <ol>
                      <li>
                        set
                        <b>v-tooltip</b> with the
                        <b>ref</b> attribute
                      </li>
                    </ol>
                  </div>
                </div>
                <span v-show="scope.row.index != currentRowIndex">{{scope.row.name}}</span>
              </el-form-item>
            </template>
          </template>
        </el-table-column>

        <el-table-column label="年龄" prop="name">
          <template slot-scope="scope">
            <!-- <template v-if="scope.row.action == 'view'">
              {{scope.row.age}}
            </template>-->
            <template>
              <el-form-item :prop="'datas.'+scope.$index + '.age'" :rules="rules.age">
                <el-input
                  size="mini"
                  style="width: 60px;"
                  v-model.number="scope.row.age"
                  v-show="scope.row.index == currentRowIndex"
                ></el-input>
                <span v-show="scope.row.index != currentRowIndex">{{scope.row.age}}</span>
              </el-form-item>
            </template>
          </template>
        </el-table-column>

        <el-table-column label="操作" prop="operation">
          <template slot-scope="scope">
            <template v-if="scope.row.action == 'view'">
              <el-button @click="click_edit(scope.row, scope.$index)" size="mini">编辑</el-button>
              <el-button @click="click_delete(scope.row, scope.$index)" size="mini">删除</el-button>
            </template>
            <template v-else-if="scope.row.action == 'add'">
              <el-button @click="click_add( scope.row, scope.$index)" size="mini">新增</el-button>
              <el-button @click="click_reset(scope.row, scope.$index)" size="mini">重置</el-button>
            </template>
            <!-- <template v-else>
              <el-button size="mini" @click="click_save(scope.row, scope.$index)">保存</el-button>
              <el-button size="mini" @click="click_cancle(scope.row, scope.$index)">取消</el-button>
            </template>-->
          </template>
        </el-table-column>
      </el-table>
    </el-form>
  </div>
</template>


<script>
export default {
  created() {
    //处理数据，为已有数据添加action:'view'
    this.form.datas.map(item => {
      this.$set(item,"action","view")
      return item;
    });
    //再插入一条添加操作的数据
    this.form.datas.unshift({
      id:undefined,
      name:undefined,
      age:undefined,
      action: "add"
    });
  },
  data() {
    return {
       form: {
          datas: [
            { id: 1, name: "张三", age:20 },
            { id: 2, name: "李四", age:32 },
          ],
        },
        currentRowIndex:null,
        
        //表单验证规则
        rules: {
          name: [{
            type: 'string',
            required: true,
            trigger: 'blur',
            message: '请输入姓名',
          }],
          age: [{
            type: 'number',
            required: true,
            trigger: 'blur',
            message: '请输入年龄',
          },
          {
            type: 'number',
            trigger: 'blur',
            min: 0,
            max: 120,
            message: '年龄最小0，最大120',
          }],
        }
    };
  },
  methods:{
    /**
     * 保存数据
     */
    saveTableData(row) {
    // 如果点击行为编辑行则不保存
      if (row.index == this.currentRowIndex) return false;
      // saveData
    },
    /**
   * 设置当前列被选中，将本行数据临时存储
   * @params{ row } row为每一行数据
   */
    handdleRow(row) {
      this.currentRowIndex = row.index;
      this.currentRow = row;
    },
    /**
   * 将每一行的索引放到row中
   * @params{ row } 每一行数据
   * @params{ rowIndx } 每一行的索引
   */
    tableRowClassName({ row, rowIndex }) {
      console.log("rowIndex",rowIndex)
      console.log("row.index",row.index)
      row.index = rowIndex;
    },
    //对部分表单字段进行校验
      validateField(form,index){
        let result = true;
        for (let item of this.$refs[form].fields) {
          if(item.prop.split(".")[1] == index){
            this.$refs[form].validateField(item.prop,(error)=>{
              if(error!=""){
                result = false;
              }
            });
          }
          if(!result) break;
        }
        return result;
      },
      
      //对部分表单字段进行重置
      resetField(form,index){
        this.$refs[form].fields.forEach(item=>{
          if(item.prop.split(".")[1] == index){
            item.resetField();
          }
        })
      },
      
      //新增操作
      click_add(item,index) {
        if( !this.validateField('form',index) ) return;
        //模拟新增一条数据
        let itemClone = JSON.parse(JSON.stringify(item));
        itemClone.id = this.form.datas.length;
        itemClone.action = "view";
        this.form.datas.push(itemClone);
        this.resetField('form',index);
      },
      
      //新增-重置操作
      click_reset(item,index) {
        this.resetField('form',index);
      },
      
      //编辑-保存操作
      click_save(item,index) {
        if( !this.validateField('form',index) ) return;
        item.action = "view";
      },
      
      //编辑-取消操作
      click_cancle(item,index) {
        this.resetField('form',index);
        item.action = "view";
      },
      
      //编辑操作
      click_edit(item,index) {
        item.action = "edit";
        this.currentRowIndex = item.index;
      },
      //删除操作
      click_delete(item,index) {
        this.$confirm("确定删除该条数据(ID" + item.id + ")吗?", "提示", {
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            type: "warning"
          })
          .then(() => {
            //模拟删除一条数据
            this.form.datas.splice(index,1);
          })
          .catch(() => {});
      },
    

  }
}

// 多表单校验注意不同的名字
// let formList = [];

// for (let i = 1; i <= 4; i++) {
//     let validItem = new Promise((resolve, reject) => {
//       this.$refs["ruleForm" + i].validate(valid => {
//         if (valid) {
//           resolve();
//         }
//       });
// });

// formList.push(validItem);
// }

// Promise.all(formList).then(function() {
//     console.log("表单验证成功");
// });

</script>

<style lang="stylus" scoped>
.tooltip-red {
  background-color: #fff !important;
  display: block !important;
  visibility: show !important;
}

.tooltip-content {
  background: red !important;

  ::deep .vue-tooltip {
    background: red !important;
  }

  >>> .vue-tooltip {
    background: red !important;
  }

  /deep/ .vue-tooltip {
    background: red !important;
  }
}

::deep .vue-tooltip {
  background: red !important;
}

>>> .vue-tooltip {
  background: red !important;
}

/deep/ .vue-tooltip {
  background: red !important;
}
</style>