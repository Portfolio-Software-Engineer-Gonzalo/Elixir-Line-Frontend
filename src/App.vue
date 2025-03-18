<script>

import SignInComponent from "./elixir-line/security/pages/sign-in.component.vue";
import LayoutElixirLine from "./elixir-line/main-content/pages/layout-elixir-line.component.vue";

export default {
  name: 'app',
  components: {LayoutElixirLine, SingIn: SignInComponent},
  title: 'Elixir Line',


 created() {
    console.log('App created');
 }

}

</script>

<template>

  <div class="sing-in-container flex flex-1 flex-row justify-center items-center">
    <router-view/>
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
