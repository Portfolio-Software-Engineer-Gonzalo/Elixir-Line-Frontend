<script>
import CustomerCreateAndEdit from "../../customer-management/components/customer-create-and-edit.component.vue";
import Product from "../model/product.entity.js";
import {ProductApiService} from "../services/product-api.service.js";

export default {
  name: "product-management",

  components: {CustomerCreateAndEdit},


  data() {
    return {
      title: {singular: 'Product', plural: 'Products'},
      itemsArray: [],


      item: new Product({}),
      productApiService: null,

      selectedItems: [],
      createAndEditDialogIsVisible: false,
      isEdit: false,
      submitted: false,
    };
  },


  methods: {

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

    getAllItem() {

      this.productApiService.getAllResources().then(response => {
        this.itemsArray = response.data.map(newItem => new Product(newItem));

        console.log("Products resources", this.itemsArray);
      }).catch(error => {
        console.error("Error getting Products",error);
      });
    },

  },

  created() {
    this.productApiService = new ProductApiService('/products');

    this.getAllItem();

    console.log("Product Management Created");
  }



}
</script>

<template>

  <div class="view-all-products flex flex-column flex-1 h-full overflow-hidden pl-6 pr-6">

    <div class="border-bottom-2 w-full">
      <h2>{{title.plural}} Management</h2>
    </div>

    <div class="card-container flex flex-column flex-1 overflow-scroll pt-6" >

      <div class="flex flex-wrap justify-content-center gap-4 w-full h-full ">

        <pv-card v-for="item in itemsArray" :key="item.id" :title="title"
                 class="flex flex-column justify-content-between w-20rem h-25rem p-4">

          <!--Imagen de encabezado del producto-->
          <template #header>
            <div class="flex justify-content-center items-center w-full">
              <img :src="item.photo_url" alt="product image" class="h-8rem object-cover">
            </div>
          </template>

          <template #content>
            <div class="text-center">
              <h3>{{item.name}}</h3>
              <p>{{item.description}}</p>
            </div>
          </template>

          <template #footer="slotProps">
            <div class="flex justify-content-center gap-2">
              <pv-button icon="pi pi-pencil" outlined rounded class="mr-2" @click="editItem(slotProps.data)" />
              <pv-button icon="pi pi-trash" outlined rounded severity="danger" @click="confirmDeleteItem(slotProps.data)" />
              <pv-button icon="pi pi-eye" outlined rounded severity="info" @click="editItem(slotProps.data)" />
            </div>
          </template>

        </pv-card>
      </div>
    </div>
  </div>

</template>

<style scoped>

</style>