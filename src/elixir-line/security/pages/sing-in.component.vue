<script>


export default {
  name: "sing-in",

  data() {
    return {
      username: '',
      password: ''
    };
  },


  methods: {
    onSingIn(){

    }
  }


}

</script>

<template>
  <div class="sing-in-container">
    <pv-splitter style="height: 100vh; width: 100vw;" class="mb-8">
      <pv-splitter-panel size="50" class="flex items-center justify-center">
        <h1 class="text-center"> Elixir Line </h1>
      </pv-splitter-panel>
      <pv-splitter-panel size="50" class="flex items-center justify-center"> Panel 2 </pv-splitter-panel>
    </pv-splitter>
  </div>
</template>

<style scoped>
.sing-in-container {
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
}
</style>