<script>

import SignInComponent from "./elixir-line/security/pages/sign-in.component.vue";

export default {
  name: 'app',
  components: {SingIn: SignInComponent},
  title: 'Elixir Line',

 created() {
    console.log('App created');
 }

}

</script>

<template>

  <sing-in class="sing-in-container"></sing-in>

</template>

<style scoped>

.sing-in-container {
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
}

</style>
