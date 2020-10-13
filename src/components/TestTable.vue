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
        <el-table
          ref="saveTab"
          :data="editForm.rulerItems"
          style="width: 100%;margin-top: 20px"
          :height="250"
          :showPagination="false"
        >
          <el-table-column align="center" width="50px">
            <template slot="header" slot-scope="scope">
              <xn-col-button @click="addRulerItem" type="text" size="small">
                <i class="iconfont icon-add"></i>
              </xn-col-button>
            </template>
            <template slot-scope="scope">
              <xn-col-button
                @click="delRulerItem(scope.$index, scope.row)"
                type="text"
                size="small"
              >
                <i class="iconfont icon-shanchu"></i>
              </xn-col-button>
            </template>
          </el-table-column>
          <el-table-column label="评级项" align="center">
            <template slot-scope="scope">
              <el-form-item
                :prop="'rulerItems.' + scope.$index + '.rulerItem'"
                :rules="[
                  {
                    required: true,
                    trigger: ['blur', 'change'],
                    message: '评级项不能为空'
                  },
                  {
                    validator: validatorRulerItem,
                    trigger: ['blur', 'change']
                  }
                ]"
              >
                <el-input
                  v-model="scope.row.rulerItem"
                  style="width: 98%"
                  :maxlength="30"
                ></el-input>
              </el-form-item>
            </template>
          </el-table-column>
          <el-table-column label="得分下限" align="center" width="220px">
            <template slot-scope="scope">
              <el-form-item
                :prop="'rulerItems.' + scope.$index + '.scoreMin'"
                :rules="[
                  {
                    required: true,
                    trigger: ['blur', 'change'],
                    message: '得分下限不能为空'
                  },
                  {
                    validator: validatorScoreMin,
                    trigger: ['blur', 'change']
                  }
                ]"
              >
                <el-input
                  v-model="scope.row.scoreMin"
                  style="width: 98%"
                  :maxlength="6"
                ></el-input>
              </el-form-item>
            </template>
          </el-table-column>
        </el-table>
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
        releaseState: ""
      }
    };
  },
  methods: {
    delRulerItem(index, row) {
      this.editForm.rulerItems.splice(index, 1);
      this.$refs.editFormRef.validateField("rulerItems");
    },
    addRulerItem() {
      let len = this.editForm.rulerItems.length;
      let buidData = {
        guid: "",
        rulerItem: "",
        scoreMin: ""
      };
      this.editForm.rulerItems.push(buidData);
      this.$refs.editFormRef.validateField("rulerItems");
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
      if (this.colList.length == 0) {
        this.colList.push({
          btn: ""
        });
      } else {
        console.log("this.colList", this.colList);
      }
      // this.colList.push({
      //   btn: ""
      // });
      // this.colList.forEach((item, index) => {
      //   this.$set(item, "btn", "");
      // });
      this.dataList.push(this.colList);
      // this.dataList.forEach((item, index) => {
      //   item.forEach((item2, ind) => {
      //     this.$set(item2, "btn", "");
      //   });
      // });

      console.log("dataList", this.dataList);
    },
    addCol(scope, ind) {
      // ind只是行数
      // this.colList.length才是列数 0 undifiend
      if (this.colList.length) {
        this.len = this.colList.length;
      } else {
        this.len = 0;
      }
      console.log("len", this.len);
      this.colList[this.len] = { btn: "" };
      this.colList.forEach((item, index) => {
        this.$set(item, "btn", "");
      });
      // let row = {
      //   prop: "item" + this.len,
      //   label: this.len
      // };
      this.dataList.forEach((item, index) => {
        item.forEach((item2, ind) => {
          this.$set(item2, "btn", "");
        });
      });
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
