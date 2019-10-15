<template>
  <div class="component">
    <el-row :gutter="60" class="wrap">
      <el-col :span="18">
        <span>接收用户：</span>
      </el-col>
      <el-col :span="6">
        <button class="btn btn-green" @click="addPerson">新增人员</button>
      </el-col>
    </el-row>
    <edit-dialog
      :isShow="dialogAddPerson"
      @close-dialog="dialogAddPerson=false"
    ></edit-dialog>
    <!-- <tab :option="tabOption" @change="onTabChange">
      <button slot="button" class="edit" @click="add">+ Add New Trend</button>
    </tab>
    <search :list="searchList" @search="search"></search>
    <myTable :tableData="tableList"></myTable> -->
    <!-- <my-first-label :title="$t('txt.claims')">
      <my-letter-search>
        <my-letter slot="letter" initLetter="A" name="claims" @update="changeClaimsLetter"></my-letter>
        <my-search-list
          v-if="bevolGoodsClaims"
          slot="searchList"
          :letter="claimsLetter"
          ref="claims"
          name="claims"
          :list="bevolGoodsClaims"
          @inputValChange="inputValClaimsChange"
        ></my-search-list>
      </my-letter-search>
    </my-first-label>
    <div v-show="selectedClaims.length" class="zdh-query-item">
      <span class="zdh-query-label font1-12-333">{{$t('txt.claims')}}:</span>
      <ul v-show="selectedClaims.length" class="ctgrys-show-list">
        <li v-for="(item, idxx) in selectedClaims">
          {{item.title}}
          <i @click="removeClaim(item)" class="el-icon-close zdh-pointer"></i>
        </li>
      </ul>
    </div> -->
  </div>
</template>

<script>
// import search from "./children/search";
// import tab from "./children/tab";
// import table from "./children/table";
import editDialog from './children/editDialog'
export default {
  name: 'HelloWorld',
  components: {
    editDialog
    // search,
    // tab,
    // table
  },
  data () {
    return {
      dialogAddPerson: false,
      // searchList: [
      //   {
      //     options: [
      //       {
      //         value: '1',
      //         label: 'Source1'
      //       }, {
      //         value: '2',
      //         label: 'Source2'
      //       }, {
      //         value: '3',
      //         label: 'Source3'
      //       }, {
      //         value: '4',
      //         label: 'Source4'
      //       }, {
      //         value: '5',
      //         label: 'Source5'
      //       }
      //     ],
      //     value: '',
      //     key: 'source',
      //     placeholder: 'Source'
      //   },
      //   {
      //     options: [
      //       {
      //         value: '1',
      //         label: 'Sub-source1'
      //       }, {
      //         value: '2',
      //         label: 'Sub-source2'
      //       }, {
      //         value: '3',
      //         label: 'Sub-source3'
      //       }, {
      //         value: '4',
      //         label: 'Sub-source4'
      //       }, {
      //         value: '5',
      //         label: 'Sub-source5'
      //       }
      //     ],
      //     value: '',
      //     key: 'sub-source',
      //     placeholder: 'Sub-source'
      //   },
      //   {
      //     options: [
      //       {
      //         value: '1',
      //         label: 'Segment1'
      //       }, {
      //         value: '2',
      //         label: 'Segment2'
      //       }, {
      //         value: '3',
      //         label: 'Segment3'
      //       }, {
      //         value: '4',
      //         label: 'Segment4'
      //       }, {
      //         value: '5',
      //         label: 'Segment5'
      //       }
      //     ],
      //     value: '',
      //     key: 'segment',
      //     placeholder: 'Segment'
      //   },
      //   {
      //     options: [
      //       {
      //         value: '1',
      //         label: 'Target Demographic Care1'
      //       }, {
      //         value: '2',
      //         label: 'Target Demographic Care2'
      //       }, {
      //         value: '3',
      //         label: 'Target Demographic Care3'
      //       }, {
      //         value: '4',
      //         label: 'Target Demographic Care4'
      //       }, {
      //         value: '5',
      //         label: 'Target Demographic Care5'
      //       }
      //     ],
      //     value: '',
      //     key: 'target',
      //     placeholder: 'Target Demographic Care'
      //   },
      //   {
      //     options: [
      //       {
      //         value: '1',
      //         label: 'Year1'
      //       }, {
      //         value: '2',
      //         label: 'Year2'
      //       }, {
      //         value: '3',
      //         label: 'Year3'
      //       }, {
      //         value: '4',
      //         label: 'Year4'
      //       }, {
      //         value: '5',
      //         label: 'Year5'
      //       }
      //     ],
      //     value: '',
      //     key: 'year',
      //     placeholder: 'Year'
      //   },
      //   {
      //     options: [
      //       {
      //         value: '1',
      //         label: 'Key Words1'
      //       }, {
      //         value: '2',
      //         label: 'Key Words2'
      //       }, {
      //         value: '3',
      //         label: 'Key Words3'
      //       }, {
      //         value: '4',
      //         label: 'Key Words4'
      //       }, {
      //         value: '5',
      //         label: 'Key Words5'
      //       }
      //     ],
      //     value: '',
      //     key: 'words',
      //     placeholder: 'Key Words'
      //   },
      //   {
      //     options: [
      //       {
      //         value: '1',
      //         label: 'Focus Product1'
      //       }, {
      //         value: '2',
      //         label: 'Focus Product2'
      //       }, {
      //         value: '3',
      //         label: 'Focus Product3'
      //       }, {
      //         value: '4',
      //         label: 'Focus Product4'
      //       }, {
      //         value: '5',
      //         label: 'Focus Product5'
      //       }
      //     ],
      //     value: '',
      //     key: 'product',
      //     placeholder: 'Focus Product'
      //   },
      //   {
      //     options: [
      //       {
      //         value: '1',
      //         label: 'Submitted by1'
      //       }, {
      //         value: '2',
      //         label: 'Submitted by2'
      //       }, {
      //         value: '3',
      //         label: 'Submitted by3'
      //       }, {
      //         value: '4',
      //         label: 'Submitted by4'
      //       }, {
      //         value: '5',
      //         label: 'Submitted by5'
      //       }
      //     ],
      //     value: '',
      //     key: 'submit',
      //     placeholder: 'Submitted by'
      //   }
      // ],
      // tabOption: {
      //   activeName: '1',
      //   list: [
      //     {
      //       label: 'Approved',
      //       value: '1'
      //     },
      //     {
      //       label: 'Pending Approval',
      //       value: '2',
      //       badge: '100+'
      //     },
      //     {
      //       label: 'Denied',
      //       value: '3',
      //       badge: '10'
      //     },
      //     {
      //       label: 'Draft',
      //       value: '4'
      //     }

      //   ]

      // },
      // tableList: []
    }
  },
  methods: {
    addPerson () {
      console.log("111");
      this.dialogAddPerson = true
    }
    // onTabChange (e) {
    //   // 点击以后 badge 应该要变
    //   this.tabOption.activeName = e
    // },
    // inputValClaimsChange (obj) {
    //   // console.log('inputValClaimsChange', obj)
    //   if (obj.check) {
    //     const newCatgrys = [...obj.catgry, ...this.selectedClaims]
    //     const res = new Map()
    //     this.selectedClaims = newCatgrys.filter((a) => !res.has(a.id || a.ids) && res.set(a.id || a.ids, 1))
    //     // console.log(this.selectedClaims)
    //   } else {
    //     obj.catgry.forEach(c => {
    //       this.selectedClaims = this.selectedClaims.filter(item => {
    //         return (c.id || c.ids) != (item.id || item.ids)
    //       })
    //     })
    //   }
    // },
    // removeClaim (claim) {
    //   debugger
    //   let idx = this.$refs['claims'].inputVal.indexOf(claim.id || claim.ids)
    //   if (idx != -1) {
    //     this.$refs['claims'].inputVal.splice(idx, 1)
    //   }
    //   this.selectedClaims.splice(this.selectedClaims.indexOf(claim), 1)
    // },
  }
}
</script>

<style lang="stylus" scoped>

</style>
