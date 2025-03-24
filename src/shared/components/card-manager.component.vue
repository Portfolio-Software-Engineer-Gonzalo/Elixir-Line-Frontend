<script>
import {FilterMatchMode} from "@primevue/core";

export default {
  name: "card-manager",

  inheritAttrs: false,

  props: {
    items: { type: Array, required: true },
    title: { type: { singular: '', plural: ''}, required: true },
    image: { type: String, default: null },
  },

  data() {
    return {
      selectedItems: [],
      filters: null,
    }
  },


  watch: {
    items(newItems) {
      console.log("Items received in data-manager:", newItems);
    }
  },


  methods: {

    initFilters() {
      this.filters = { global: { value: null, matchMode: FilterMatchMode.CONTAINS } };
    },

    newItem() {
      this.$emit('new-item-requested-manager');
    },

    confirmDeleteSelected() {
      this.$confirm.require({
        message:      `Are you sure you want to delete the selected ${this.title.plural}?`,
        header:       'Confirmation',
        icon:         'pi pi-exclamation-triangle',
        rejectClass:  'p-button-secondary p-button=outlined',
        rejectLabel:  'Cancel',
        acceptLabel:  'Delete',
        acceptClass:  'p-button-danger',
        accept:       () => this.$emit('delete-selected-items-requested-shared-manager', this.selectedItems),
        reject:       () => {}
      });
    },

    exportToCsv() {
      this.$refs.dt.exportCSV();
    },

    editItem(item) {
      this.$emit('edit-item-requested-manager', item);
    },

    confirmDeleteItem(item) {
      this.$confirm.require({
        message:      `Are you sure you want to delete the selected ${this.title.singular}?`,
        header:       'Confirmation',
        icon:         'pi pi-exclamation-triangle',
        rejectClass:  'p-button-secondary p-button=outlined',
        rejectLabel:  'Cancel',
        acceptLabel:  'Delete',
        acceptClass:  'p-button-danger',
        accept:       () => this.$emit('delete-item-requested-shared-manager', item),
        reject:       () => {}
      })
    },

  },


  created() {
    console.log('Card Manager created');

  }
}
</script>

<template>


  <pv-toast/>
  <pv-confirm-dialog/>

  <div class="flex flex-column flex-1 w-full h-full overflow-hidden">

    <!-- ===================================== Title section ===================================== -->
    <h2>Manage {{ title.plural }}</h2>
    <!-- ========================================================================================= -->

    <!-- ===================================== Toolbar section ===================================== -->
    <pv-toolbar>
      <template #start>
        <pv-button class="mr-2" icon="pi pi-plus" label="New" severity="success" @click="newItem"/>
        <pv-button :disabled="!selectedItems || !selectedItems.length" icon="pi pi-trash" label="Delete" severity="danger"
                   @click="confirmDeleteSelected"/>
      </template>
    </pv-toolbar>
    <!-- ========================================================================================= -->

    <div class="card-container flex flex-column flex-1 overflow-scroll" >

      <div class="flex flex-wrap justify-content-center gap-4 w-full">

        <pv-card>

          <!-- Imagen opcional -->
          <template #header v-if="image">
            <img :src="image" alt="Card Image" class="w-full h-40 object-cover rounded-t-lg">
          </template>

          <!-- Título dinámico -->
          <template #title>
            <h3 class="text-lg font-bold text-gray-900">{{ title }}</h3>
          </template>

          <!-- Contenido personalizado con slot -->
          <template #content>
            <slot name="content-card"></slot>
          </template>


          <template #footer="slotProps">
            <pv-button icon="pi pi-pencil" outlined rounded class="mr-2" @click="editItem(slotProps.data)" />
            <pv-button icon="pi pi-trash" outlined rounded severity="danger" @click="confirmDeleteItem(slotProps.data)" />
          </template>

        </pv-card>
      </div>

    </div>

  </div>




</template>

<style scoped>

</style>