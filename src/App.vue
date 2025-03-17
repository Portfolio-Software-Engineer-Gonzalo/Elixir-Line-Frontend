<script>

import SignInComponent from "./elixir-line/security/pages/sign-in.component.vue";
import LayoutElixirLine from "./elixir-line/main-content/pages/layout-elixir-line.component.vue";

export default {
  name: 'app',
  components: {LayoutElixirLine, SingIn: SignInComponent},
  title: 'Elixir Line',

  data() {
    return {
      isAuthenticated: false
    };
  },

  methods: {
    onLoginSuccess() {
      this.isAuthenticated = true;
    }
  },

 created() {
    console.log('App created');
 }

}

</script>

<template>

  <div id="app">
    <div v-if="!isAuthenticated"  class="flex flex-column flex-grow-1 sing-in-container">
      <sing-in @login-success="onLoginSuccess"/>
    </div>

    <div v-if="isAuthenticated"  class="flex flex-column flex-1 flex-grow-1 sing-in-container">
      <layout-elixir-line class="flex flex-1"/>
    </div>

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
