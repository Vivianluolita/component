<template>
  <div>
    <el-table :data="tableData" :span-method="arraySpanMethod" border style="width: 100%">
      <el-table-column label="ID" prop="id" width="180"></el-table-column>
      <el-table-column label="姓名" prop="name"></el-table-column>
      <el-table-column label="数值 1" prop="amount1" sortable></el-table-column>
      <el-table-column label="数值 2" prop="amount2" sortable></el-table-column>
      <el-table-column label="数值 3" prop="amount3" sortable></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          id: '12987122',
          name: '王小虎',
          amount1: '234',
          amount2: '3.2',
          amount3: 10,
        },
        {
          id: '12987123',
          name: '王小虎',
          amount1: '165',
          amount2: '4.43',
          amount3: 12,
        },
        {
          id: '12987124',
          name: '王小虎',
          amount1: '324',
          amount2: '1.9',
          amount3: 9,
        },
        {
          id: '12987125',
          name: '王小虎',
          amount1: '621',
          amount2: '2.2',
          amount3: 17,
        },
        {
          id: '12987126',
          name: '王小虎',
          amount1: '539',
          amount2: '4.1',
          amount3: 15,
        },
      ],
    }
  },
  methods: {
    arraySpanMethod({ row, column, rowIndex, columnIndex }) {
      console.log('row', row)
      console.log('column', column)
      console.log('rowIndex', rowIndex)
      console.log('columnIndex', columnIndex)
      //row, column, rowIndex, columnIndex 当前行 当前列 当前行号,当前列号,
      //该函数可以返回一个包含两个元素的数组，第一个元素代表rowspan，第二个元素代表colspan。 也可以返回一个键名为rowspan和colspan的对象。
      if (rowIndex % 2 === 0) {
        if (columnIndex === 0) {
          return [1, 2]
        } else if (columnIndex === 1) {
          return [0, 0]
        }
      }
    },
  },
}
</script>

<style>
</style>