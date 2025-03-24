<script>
import {FilterMatchMode} from "@primevue/core";

export default {
  name: "data-manager",

  inheritAttrs: false,

  props: {
    items: { type: Array, required: true },
    title: { type: { singular: '', plural: ''}, required: true },
    dynamic: { type: Boolean, default: false },
    columns: { type: Array, default: () => []}
  },

  data() {
    return {
      selectedItems: [],
      filters: null,
      rows: 4 // Default number of rows
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
    this.initFilters();
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

      <template #end>
        <pv-button icon="pi pi-download" label="Export" severity="help" @click="exportToCsv($event)"/>
      </template>
    </pv-toolbar>
    <!-- ========================================================================================= -->



    <!-- ===================================== Data table section ===================================== -->
    <div class="data-table-container flex flex-column flex-1 overflow-auto">
      <pv-data-table
          ref="dt"
          v-model:selection="selectedItems"
          :filters="filters"
          :paginator="true"
          :rows="rows"
          :rows-per-page-options="[5, 10, 15, 20]"
          :value="items"
          current-page-report-template="Showing {first} to {last} of {totalRecords} ${{title.plural}}"
          data-key="id"
          paginator-template="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
          class="w-full h-full"
          scrollable
          scrollHeight="flex"
          style="table-layout: fixed;" >


        <pv-column :exportable="false" selection-mode="multiple" style="width: 3em" />

        <slot name="custom-columns-manager"></slot>

        <pv-column :exportable="false" style="min-width: 8rem; max-width: 10rem; white-space: nowrap;">
          <template #body="slotProps">
            <pv-button icon="pi pi-pencil" outlined rounded class="mr-2" @click="editItem(slotProps.data)" />
            <pv-button icon="pi pi-trash" outlined rounded severity="danger" @click="confirmDeleteItem(slotProps.data)" />
          </template>
        </pv-column>

      </pv-data-table>
    </div>
    <!-- ========================================================================================= -->


  </div>


</template>

<style scoped>

</style>