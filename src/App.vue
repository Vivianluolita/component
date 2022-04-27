<template>
  <div id="app">
    <el-col :span="2">
      <el-menu
        :default-active="this.$route.path"
        @close="handleClose"
        @open="handleOpen"
        active-text-color="#ffd04b"
        background-color="#545c64"
        class="el-menu-vertical-demo"
        mode="horizontal"
        router
        text-color="#fff"
      >
        <el-menu-item :index="item.name" :key="i" v-for="(item,i) in navList">
          <template slot="title">
            <i class="el-icon-eleme"></i>
            <span>{{ item.navItem }}</span>
          </template>
        </el-menu-item>
      </el-menu>
    </el-col>
    <router-view class="menu-right" />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      navList: [
        { name: '/components/EditPerson', navItem: '添加人员' },
        { name: '/components/ShowPerson', navItem: '展示人员' },
        // { name: '/components/TextPerson', navItem: '测试人员' },
        // { name: '/components/TesElemen', navItem: '测试框架' },
        { name: '/components/TestTable', navItem: '测试表格' },
        { name: '/components/TestTable2', navItem: '测试表格' },
        // { name: '/components/TestTable3', navItem: '测试表格3' },
        { name: '/components/TestTable4', navItem: '测试表格4' },
        { name: '/components/TestTable6', navItem: '测试表格6' },
        { name: '/components/TestTable7', navItem: '测试表格7' },
        // { name: '/my-dialog-animal/MyDialogAnimal', navItem: '测试表格4' },
        // {name:'/components/User',navItem:'用户管理'},
        // {name:'/components/Personnel',navItem:'人员数据'},
        // {name:'/components/Alarm',navItem:'报警中心'},
        // {name:'/components/Asset',navItem:'资产中心'},
        // {name:'/components/Map',navItem:'地图中心'},
      ],
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    },
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.menu-right {
  margin-left: 200px;
}
</style>
