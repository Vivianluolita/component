<template>
  <!-- layout -->
  <div class="scrollerY blank-container">
    <div class="table-header" style="margin-left: 15px;margin-bottom: 5px">
      <button
        @click="saveTable"
        class="el-button el-button--primary el-button--small is-plain"
        type="button"
      >
        <span>保存</span>
      </button>
      <button
        @click="addTable"
        class="el-button el-button--primary el-button--small is-plain"
        type="button"
      >
        <i class="iconfont icon-add"></i>
        <span>新增</span>
      </button>
      <button
        @click="delTable()"
        class="el-button el-button--primary el-button--small is-plain"
        type="button"
      >
        <i class="iconfont icon-shanchu"></i>
        <span>删除</span>
      </button>
    </div>
    <el-form :model="tableForm" ref="xnTableForm">
      <el-table :data="tableForm.tableData" :showPagination="false" ref="xnTable">
        <!-- <el-col prop="id" type="selection" width="40" /> -->
        <el-col
          label="规则类型"
          label-class-name="must"
          prop="ruleType"
          showOverflowTooltip
          width="200"
        >
          <template slot-scope="scope">
            <el-form-item
              :prop="'tableData.'+ scope.$index + '.ruleType'"
              :rules="tableRules.verifyClass"
            >
              <el-select placeholder="请选择" v-model="scope.row.ruleType" width="100%">
                <el-option
                  :key="item.enumCode"
                  :label="item.enumName"
                  :value="item.enumCode"
                  v-for="item in ruleTypeSelect"
                ></el-option>
              </el-select>
            </el-form-item>
          </template>
        </el-col>
        <el-col align="center" label="验证类型" label-class-name="must" showOverflowTooltip>
          <template slot-scope="scope">
            <el-form-item
              :prop="'tableData.'+ scope.$index + '.verifyClass'"
              :rules="tableRules.verifyClass"
            >
              <el-input maxlength="100" placeholder="请输入内容" v-model="scope.row.verifyClass"></el-input>
            </el-form-item>
          </template>
        </el-col>
        <el-col align="center" label="验证类型说明" label-class-name="must" showOverflowTooltip>
          <template slot-scope="scope">
            <el-form-item
              :prop="'tableData.'+ scope.$index + '.verifyClassDesc'"
              :rules="tableRules.verifyClass"
            >
              <el-input maxlength="100" placeholder="请输入内容" v-model="scope.row.verifyClassDesc"></el-input>
            </el-form-item>
          </template>
        </el-col>
      </el-table>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'TestElemen',
  data() {
    return {
      ruleType: '',
      ruleTypeSelect: [],
      tableForm: {
        tableData: [
          {
            ruleType: [
              {
                enumCode: '1',
                enumName: '2',
              },
              {
                enumCode: '1',
                enumName: '2',
              },
              {
                enumCode: '1',
                enumName: '2',
              },
            ],
            verifyClass: [
              {
                enumCode: '1',
                enumName: '2',
              },
              {
                enumCode: '1',
                enumName: '2',
              },
              {
                enumCode: '1',
                enumName: '2',
              },
            ],
            verifyClassDesc: '上海市普陀区金沙江路 1518 弄',
          },
          {
            ruleType: [
              {
                enumCode: '1',
                enumName: '2',
              },
              {
                enumCode: '1',
                enumName: '2',
              },
              {
                enumCode: '1',
                enumName: '2',
              },
            ],
            verifyClass: [
              {
                enumCode: '1',
                enumName: '2',
              },
              {
                enumCode: '1',
                enumName: '2',
              },
              {
                enumCode: '1',
                enumName: '2',
              },
            ],
            verifyClassDesc: '上海市普陀区金沙江路 1518 弄',
          },
          {
            ruleType: [
              {
                enumCode: '1',
                enumName: '2',
              },
              {
                enumCode: '1',
                enumName: '2',
              },
              {
                enumCode: '1',
                enumName: '2',
              },
            ],
            verifyClass: [
              {
                enumCode: '1',
                enumName: '2',
              },
              {
                enumCode: '1',
                enumName: '2',
              },
              {
                enumCode: '1',
                enumName: '2',
              },
            ],
            verifyClassDesc: '上海市普陀区金沙江路 1518 弄',
          },
        ],
      },
      tableRules: {
        ruleType: [{ required: true, message: '规则类型不能为空' }],
        verifyClass: [
          { required: true, message: '验证类型不能为空' },
          { max: 100, message: '长度在100个字符以内' },
        ],
        verifyClassDesc: [
          { required: true, message: '验证类型说明不能为空' },
          { max: 600, message: '长度在600个字符以内' },
        ],
      },
    }
  },
  computed: {
    must(obj) {
      if (
        obj.columnIndex === 0 ||
        obj.columnIndex === 1 ||
        obj.columnIndex === 2
      ) {
        return 'must'
      }
    },
  },
}
</script>

<style scope="sass">
.bg-purple-dark {
  background: #99a9bf;
}
</style>