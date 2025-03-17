<script>

export default {
  name: "navbar-elixir-line",


  data() {
    return {
      drawer: true,
      visible: false,
      items: [
        { label: "title-home-option", to: "/vitivinicultor/home",                     icon: 'pi pi-home' },
        { label: "title-inventory-option", to: "/vitivinicultor/inventory",           icon: 'pi pi-receipt' },
        { label: "title-winemaking-option", to: '/vitivinicultor/winemaking-process', icon: 'pi pi-spinner-dotted' },
        { label: "title-my-clients-option", to: '/vitivinicultor/clients',            icon: 'pi pi-user' },
        { label: "title-my-orders-option", to: '/vitivinicultor/orders/history',      icon: 'pi pi-list-check' },
        { label: "title-my-products-option", to: '/vitivinicultor/products',          icon: 'pi pi-tags' },
        { label: "title-support-option", to: '/vitivinicultor/Support',               icon: 'pi pi-wrench' },
      ]
    }
  },

  methods: {
    closeDrawer() {
      this.visible = false;
    }
  },


  created() {
    console.log('HeaderContent created');
  }

}
</script>

<template>

  <div class="navbar-elixir-line w-1/6 flex flex-column items-center justify-center">

    <pv-card class="w-full h-full flex flex-column items-center justify-center">


      <template #content>
        <!-- lista de items como contenido -->




      </template>

      <template #footer>



      </template>
    </pv-card>

  </div>


</template>

<style scoped>

</style>