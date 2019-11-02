<template>
    <div id="app">
        <div id="div" v-if="showDiv">这是一段文本</div>
        <button @click="getText">获取div内容</button>
    </div>
</template>

<script>
export default {
   name:'TextPerson',
   data:{
        showDiv : false
    },
    methods:{
        getText:function(){
            this.showDiv = true;
            this.$nextTick(function(){
                  var text = document.getElementById('div').innnerHTML;
                 console.log(text);  
            });
        }
    }
}
</script>

<style lang="stylus" scoped>

</style>