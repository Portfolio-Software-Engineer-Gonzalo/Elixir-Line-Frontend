<script>
export default {
  name: "toolbar-elixir-line",

  data() {
    return {
      items: [
        {label: 'sign-in', to: "/home/sign-in", icon: 'pi pi-user'},
        {label: 'sign-up', to: "/home/sign-up", icon: 'pi pi-user-plus'}
      ]
    }

  },

  created()
  {
    console.log('Toolbar Home Elixir Line Created');
  }
}

</script>

<template>

  <div class="toolbar-elixir-line">
    <div class="p-toolbar-group-left">
      <router-link v-for="item in items" :key="item.label" :to="item.to" class="p-button p-button-text">
        <i :class="item.icon"></i>
        <span>{{ $t(item.label) }}</span>
      </router-link>
    </div>

  </div>


</template>

<style scoped>

</style>