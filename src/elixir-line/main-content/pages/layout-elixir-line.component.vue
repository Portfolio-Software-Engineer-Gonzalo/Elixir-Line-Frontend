<script>
import ToolbarElixirLine from "../../../public/components/toolbar-elixir-line.component.vue";
import NavbarElixirLine from "../../../public/components/navbar-elixir-line.component.vue";

export default {
  name: "layout-elixir-line",
  components: {NavbarElixirLine, ToolbarElixirLine},



  created() {
    //visualización de la página
    console.log("Layout Elixir Line created");
    this.$router.push("/vitivinicultor/supplies");
  }


}
</script>

<template>

  <div class="home-elixir-line flex flex-column flex-1 w-full h-full">

    <div class="toolbar-elixir-line w-full"
         style="background-color: var(--vino-tinto-color);" >
      <toolbar-elixir-line/>
    </div>


    <div class="content-container flex flex-row flex-1 w-full h-full">

      <div class="navbar-elixir-line w-1/6 h-full flex flex-column border-top-1 border-white"
           style="background-color: var(--vino-tinto-color);">
        <navbar-elixir-line/>
      </div>

      <main class="view-container flex flex-column flex-1 w-5/6 h-full overflow-auto">
        <router-view/>
      </main>

    </div>



  </div>


</template>

<style scoped>

.view-container {
  margin-left: 80px;

}


</style>