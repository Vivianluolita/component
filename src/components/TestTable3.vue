<template>
  <div>
    <tableThree :config="config" :tableData="tableList"></tableThree>
  </div>
</template>

<script>
import tableThree from './children/table3'
export default {
  name: 'TestTable3',
  components: {
    tableThree,
  },
  data() {
    return {
      tableList: [
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
      config: {
        tHead: [
          {
            label: 'id',
            field: 'id',
          },
          {
            label: 'name',
            field: 'name',
          },
          {
            label: 'amuont1',
            field: 'amuont1',
          },
          {
            label: 'amuont2',
            field: 'amuont2',
          },
          {
            label: 'amuont3',
            field: 'amuont3',
          },
        ],
      },
    }
  },
}
</script>

<style>
</style>