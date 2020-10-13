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
            <!-- 表格第一行新增行列 -->
            <el-table-column align="center" width="50px">
              <template slot="header" slot-scope="scope">
                <i
                  @click="addRow(scope, scope.$index)"
                  class="iconfont el-icon-circle-plus-outline"
                ></i>
              </template>
              <template slot-scope="scope">
                <i
                  @click="delRow(scope.$index, scope.row)"
                  class="iconfont el-icon-circle-close"
                ></i>
              </template>
            </el-table-column>
            <!-- 表格第二行，新增列 -->
            <el-table-column
              :key="i"
              align="center"
              header-align="center"
              v-for="(col, i) in colList"
              :prop="i.prop"
            >
              <template slot-scope="scope">
                <i
                  @click="addCol(scope, scope.$index)"
                  class="el-icon-circle-plus-outline"
                ></i>
                <el-button
                  @click.native.prevent="deleteCol(scope.$index, colList)"
                  size="small"
                  >移除</el-button
                >
                <el-input
                  v-model="scope.row[i].btn"
                  :value="col"
                  name="colNameList"
                  size="mini"
                ></el-input>
                <span>55{{ i }}</span>
                <span>66{{ scope.row.length }}</span>
                <span>77{{ scope.row }}</span>
                <span>{{ colList[colList.length] }}</span>
                <span>{{ colList[colList.length] }}</span>
                <span>444{{ scope.row }}</span>
                <span>333{{ scope.row[scope.$index] }}</span>
                <span>111{{ scope.row[scope.$index].btn }}</span>
                <span>222{{ scope.row.btn }}</span>
                <i
                  @click="deleteCol(scope.$index, colList)"
                  class="el-icon-circle-close"
                ></i>
              </template>
              <!-- <template slot-scope="scope">
                <el-input size="mini" v-model="scope.row[col]"></el-input>
              </template>-->
            </el-table-column>
            <!-- <el-table-column align="center" header-align="center" label="操作">
              <template slot-scope="scope">
                <el-button
                  @click.native.prevent="deleteRow(scope.$index, dataList)"
                  size="small"
                  >移除</el-button
                >
              </template>
            </el-table-column> -->
          </el-table>
        </template>
        <el-row>
          <!-- <el-col :span="12">
            <el-button
              @click="addRow(scope, scope.$index)"
              style="width: 100%;"
              type="info"
              >新增行</el-button
            >
          </el-col> -->
          <!-- <el-col :span="12">
            <el-button
              @click="addCol(scope, scope.$index)"
              style="width: 100%;"
              type="info"
              >新增列</el-button
            >
          </el-col> -->
        </el-row>
      </el-form-item>
      <el-form-item label="评级标尺项" prop="rulerItems">
        <xn-table
          ref="saveTab"
          :data="editForm.planDataList"
          style="width: 100%;margin-top: 20px"
          :height="300"
          :showPagination="false"
        >
          <el-table-column align="center" width="50px">
            <template slot="header" slot-scope="scope">
              <xn-col-button @click="addPlanData" type="text" size="small">
                <i class="iconfont icon-add"></i>
              </xn-col-button>
            </template>
            <template slot-scope="scope">
              <xn-col-button
                @click="delPlanData(scope.$index, scope.row)"
                type="text"
                size="small"
              >
                <i class="iconfont icon-shanchu"></i>
              </xn-col-button>
            </template>
          </el-table-column>
          <el-table-column
            prop="regionName"
            label="区间名"
            align="center"
            width="100px"
          >
          </el-table-column>
          <el-table-column label="下限" align="center">
            <template slot-scope="scope">
              <el-form-item
                :prop="'planDataList.' + scope.$index + '.minValue'"
                :rules="[
                  {
                    required: true,
                    trigger: ['blur', 'change'],
                    message: '下限值不能为空'
                  },
                  {
                    validator: validatorMinVal,
                    trigger: ['blur', 'change']
                  }
                ]"
              >
                <xn-select v-model="scope.row.minFlag" style="width: 70px">
                  <xn-option label=">=" value="1"></xn-option>
                  <xn-option label=">" value="2"></xn-option>
                </xn-select>
                <el-input
                  v-model="scope.row.minValue"
                  style="width: 80px"
                  :maxlength="6"
                ></el-input>
              </el-form-item>
            </template>
          </el-table-column>
          <el-table-column label="上限" align="center">
            <template slot-scope="scope">
              <el-form-item
                :prop="'planDataList.' + scope.$index + '.maxValue'"
                :rules="[
                  {
                    required: true,
                    trigger: ['blur', 'change'],
                    message: '上限值不能为空'
                  },
                  {
                    validator: validatorMaxVal,
                    trigger: ['blur', 'change']
                  }
                ]"
              >
                <xn-select v-model="scope.row.maxFlag" style="width: 70px">
                  <xn-option label="<" value="3"></xn-option>
                  <xn-option label="<=" value="4"></xn-option>
                </xn-select>
                <el-input
                  v-model="scope.row.maxValue"
                  style="width: 80px"
                  :maxlength="6"
                ></el-input>
              </el-form-item>
            </template>
          </el-table-column>
        </xn-table>
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
      // dataList: [{ 0: "" }],
      dataList: [],
      colList: [], // 动态获取自己列数据,
      len: 0,
      editForm: {
        guid: "",
        rulerName: "",
        rulerPlans: [],
        rulerItems: [],
        remark: "",
        releaseState: "",
        planDataList:[]
      }
    };
  },
  methods: {
    validatorMinVal(rule, value, callback) {
      let isFloat = true;
      try {
        let parseVal = parseFloat(value);
        let checkVal = parseVal + "";
        if (checkVal === value && 0 <= parseVal && 999.99 > parseVal) {
        } else {
          isFloat = false;
        }
      } catch (e) {
        isFloat = false;
      }
      if (!isFloat) {
        callback(new Error("下限值错误,请输入0-999.99之间浮点数"));
      }
      callback();
    },
    validatorMaxVal(rule, value, callback) {
      let isFloat = true;
      try {
        let parseVal = parseFloat(value);
        let checkVal = parseVal + "";
        if (checkVal === value && 0 <= parseVal && 999.99 > parseVal) {
        } else {
          isFloat = false;
        }
      } catch (e) {
        isFloat = false;
      }
      if (!isFloat) {
        callback(new Error("上限值错误,请输入0-999.99之间浮点数"));
      } else {
        let index = rule["field"].split(".")[1];
        let thisMinVal = this.editForm.planDataList[parseInt(index)][
          "minValue"
        ];
        let checkThisMinVal = parseFloat(thisMinVal) + "";
        let isCheck = true;
        try {
          if (
            checkThisMinVal === thisMinVal &&
            parseFloat(value) >= parseFloat(thisMinVal)
          ) {
          } else {
            isCheck = false;
          }
        } catch (e) {
          isCheck = false;
        }
        if (!isCheck) {
          callback(new Error("上限值必须大于等于下限值"));
        }
      }
      callback();
    },
    //表格
    addPlanData() {
      let len = this.editForm.planDataList.length;
      let regionName = "区间" + (len + 1);
      let buidData = {
        guid: "",
        regionName: regionName,
        maxFlag: "3",
        maxValue: "",
        minFlag: "1",
        minValue: ""
      };
      this.editForm.planDataList.push(buidData);
      this.$refs.editFormRef.validateField("planDataList");
    },
    delPlanData(index, row) {
      this.editForm.planDataList.splice(index, 1);
      let len = this.editForm.planDataList.length;
      if (len > 0) {
        let fIndex = 1;
        for (let temp of this.editForm.planDataList) {
          temp["regionName"] = "区间" + fIndex;
          fIndex++;
        }
      }
      this.$refs.editFormRef.validateField("planDataList");
    },
    rowClassName({ row, rowIndex }) {
      // row.xh = rowIndex + 1;
    },
    handleMultipleStart() {
      console.log("222222");
      // console.log("22222233",params)
    },
    renderHeader(h, { column, $index }) {
      return (
        <div>
          <i
            onClick={this.handleMultipleStart}
            class="el-icon-circle-close"
          ></i>
        </div>
      );
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
      console.log("rows", rows);
      rows.splice(index, 1);
    },
    deleteCol(index, col) {
      //删除改列
      console.log("col", col);
      col.splice(index, 1);
    },
    delRow(param, item) {
      console.log("param", param);
      console.log("item", item);
    },
    addRow(scope, ind) {
      console.log("dataList1", this.dataList);
      console.log("colList2", this.colList);
      console.log("scope.row", scope.row);
      let row = {};
      //当没有列数时，添加一列
      if (this.colList.length == 0) {
        this.colList.push({
          btn: "",
          prop: "item" + this.colList.length
        });
      } else {
        console.log("this.colList", this.colList);
      }
      //添加一列
      this.colList.forEach((item, index) => {
        this.$set(item, "btn", "");
        this.$set(item, "prop", "item" + index);
      });
      this.dataList.push(this.colList);
      // this.dataList = JSON.parse(JSON.stringify(this.dataList));
      // this.colList = JSON.parse(JSON.stringify(this.colList));
      // this.dataList.forEach((item, index) => {
      //   item.forEach((item2, ind) => {
      //     this.$set(item2, "btn", "");
      //   });
      // });

      console.log("dataList", this.dataList);
    },
    addCol(scope, ind) {
      var ind = ind;
      console.log("scope", scope);
      console.log("ind", ind);
      debugger;
      // ind只是行数
      // this.colList.length才是列数 0 undifiend
      if (this.colList.length) {
        this.len = this.colList.length;
      } else {
        this.len = 0;
      }
      console.log("len", this.len);
      //添加列的同时也要添加行
      this.colList[this.len] = { btn: "" };
      this.dataList.forEach((item, index) => {
        if (index == ind) {
          item[this.len] = { btn: "" };
        }
        // item.forEach((item2, ind) => {
        //   this.$set(item2, "btn", "");
        // });
      });
      this.colList.forEach(item => {
        this.$set(item, "btn", "");
      });
      // let row = {
      //   prop: "item" + this.len,
      //   label: this.len
      // };
      this.dataList.forEach(item => {
        item.forEach(item2 => {
          this.$set(item2, "btn", "");
        });
      });
      // $SET无法监听V-MODEL新添加的data时候，用序列化监听
      this.colList = JSON.parse(JSON.stringify(this.colList));
      this.dataList = JSON.parse(JSON.stringify(this.dataList));
      console.log("this.colList.length", this.colList.length);
      console.log("scope.row.length", scope.row.length);
      // this.$set(this.dataList[this.colList.length], "btn", "");
      // this.$set(this.colList[this.colList.length], "btn", "");
      // this.$set(scope.row[this.colList.length], "btn", "444");
      console.log("dataList1", this.dataList);
      console.log("colList2", this.colList);
      this.showTable = false;
      this.$nextTick(() => {
        this.showTable = true;
      });
    }
  }
};
</script>

<style></style>
