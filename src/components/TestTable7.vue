<template>

 <div>
   <el-form :model="form" :rules="tableRules" ref="tableForm">
     <el-table :data="form.tableData" width="100%" stripe>
     <el-table-column type="index" label="序号" width="50"/>
        <el-table-column prop="name" label="名称">
          <template slot-scope="scope">
            <el-form-item :prop="'tableData.' + scope.$index +'.name'" :rules='tableRules.name'>
              <el-input @blur="cancelEdit(scope.$index,scope.row)" v-if="scope.row.flag" v-model="scope.row.name"/>
              <span v-else>{{scope.row.name}}</span>
            </el-form-item>
          </template>
        </el-table-column>
        <el-table-column prop="sex" label="名称">
          <template slot-scope="scope">
            <el-form-item :prop="'tableData.' + scope.$index +'.sex'" :rules='tableRules.sex'>
              <el-input @blur="cancelEdit(scope.$index,scope.row)" v-if="scope.row.flag" v-model="scope.row.sex"/>
              <span v-else>{{scope.row.sex}}</span>
            </el-form-item>
          </template>
        </el-table-column>
        <!-- <el-table-column prop="type" label="类型">
          <template slot-scope="scope">
            <el-form-item :prop="'tableData.' + scope.$index +'.type'" :rules='tableRules.type'>
              <el-select v-model="scope.row.type" placeholder="请选择" clearable>
                <el-option v-for="item in typeOption" :key="item.value" :label="item.label" :value="item.value"/>
              </el-select>
            </el-form-item>
            <span v-if="!scope.row.flag">{{scope.row.name}}</span>
          </template>
        </el-table-column> -->
        <el-table-column prop="operation" label="操作" width="60px">
          <template slot-scope="scope">
            <div @click.stop="remove(scope.$index)">删除</div>
          </template>
          <template slot-scope="scope">
            <div @click.stop="edit(scope.$index,scope.row)">编辑</div>
          </template>
        </el-table-column>
      </el-table>
    </el-form>
    <div style="text-align: center;margin-top: 30px">
      <el-button @click="cancel">取消</el-button>
      <el-button type="primary" @click.stop="submit()">提交</el-button>
    </div>
</div>
</template>


<script>
export default {
  data() {
    return {
       form:{
        tableData:[{name:'lii',typeOption:[{label:'shuxue',value:'yuyu'}],sex:'女',flag:false}],
      },
      typeOption:[{
        value: "0",
        label: "可爱"
      },{
        value: "1",
        label: "美好"
      }],
      tableRules:{
        name: [{required: true, message: '请输入名称'}],
        sex: [{required: true, message: '请输入性别'}],
        type: [{required: true, message: '请选择类型'}],
      },
      tableForm:{
        name:'',
        type:'',
        sex:''
      },
    };
  },
  methods:{
    add() {
      this.form.tableData.push({
        id:null,
        name:'',
        type:''
      })
    },
    submit() {
      this.$refs['tableForm'].validate((valid)=>{
        if (valid) {
          this.save()
        } else {
          this.$message({
            message: "请正确填写所有必填信息。",
            type: 'error',
          });
          return
        }
      })
  },
  edit(index,row){
    console.log("index",index)
    console.log("row",row)
    row.flag = true
  },
  cancelEdit(index,row){
    console.log("index",index)
    console.log("row",row)
    row.flag = false
  },
    save() {},
    remove(index) {
      this.form.tableData.splice(index,1)
    },
    cancel() {
      this.$router.go(-1);
    },

  }
}
</script>

<style>


</style>