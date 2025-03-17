<script>
export default {
  name: "inventory-management",

  data() {
    return {
      products: null,
      expandedRows: {}
    }
  },

  // methods
  methods : {

    // onRowExpand
    onRowExpand(event) {
      this.$set(this.expandedRows, event.data.id, true);
    },

    // onRowCollapse
    onRowCollapse(event) {
      this.$delete(this.expandedRows, event.data.id);
    },

    // expandAll
    expandAll() {
      this.products.forEach(data => {
        this.$set(this.expandedRows, data.id, true);
      });
    },

    // collapseAll
    collapseAll() {
      this.expandedRows = {};

    }
  },

  created() {
    console.log("Inventory Management created");
  }

}
</script>

<template>

  <div class="inventory-management flex flex-column flex-grow-1">


    <div class="flex flex-column flex-grow-1 w-full h-full overflow-auto">


      <pv-data-table v-model:expandedRows="expandedRows" :value="products" dataKey="id"
                     @rowExpand="onRowExpand" @rowCollapse="onRowCollapse" tableStyle="min-width: 60rem">

        <template #header>
          <div class="flex flex-wrap justify-end gap-2">
            <pv-button text icon="pi pi-plus" label="Expand All" @click="expandAll" />
            <pv-button text icon="pi pi-minus" label="Collapse All" @click="collapseAll" />
          </div>
        </template>



      </pv-data-table>

    </div>
  </div>

</template>

<style scoped>

.inventory-management {
  max-width: 100%;
  max-height: 100%;
}

</style>