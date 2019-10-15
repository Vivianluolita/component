<template>
  <el-dialog
    title="选择员工"
    width="768px"
    :visible.sync="isVisible"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
  >
    <div class="dialog-content">
        222
    </div>
  </el-dialog>
</template>

<script>
export default {
    name:'editDialog',
    data() {
        return {

        }
    },
    props:{
        isShow: {
            type: Boolean,
            default: false
        }
    },
    computed: {
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

<style>

</style>