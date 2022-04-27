<template>

 <div>
  <div id="root">
    <header>
    test
    </header>
    <main>
      content
    </main>
</div>

</div>

</template>


<script>
export default {
  data() {
    return {
    
    };
  },
  methods:{
  


  }
}
</script>

<style>
 body {
      margin: 0;
      padding: 0;
    }
    #root {
      display: flex;
      flex-direction: column;
      height: 100vh;
    }

    header {
      height: 50px;
      flex: 0 0 auto;
      background: orange;
    }

    main {
      flex-grow: 1;
      background-color: blueviolet;
    }


</style>