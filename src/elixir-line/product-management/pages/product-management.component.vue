<script>
import Product from "../model/product.entity.js";
import {ProductApiService} from "../services/product-api.service.js";
import ProductCreateAndEdit from "../components/product-create-and-edit.component.vue";
import {StockApiService} from "../services/stock-api.service.js";
import Stock from "../model/stock.entity.js";

export default {
  name: "product-management",

  components: {ProductCreateAndEdit},


  data() {
    return {
      title: {singular: 'Product', plural: 'Products'},


      itemsArray: [],
      item: new Product({}),
      productApiService: null,

      itemsArrayStocks: [],
      itemStock: new Stock({}),
      stockApiService: null,


      selectedItems: [],
      createAndEditDialogIsVisible: false,
      isEdit: false,
      submitted: false,
    };
  },


    methods: {
      //#region Utility Methods
      notifySuccessfulAction(message) {
        this.$toast.add({severity: 'success', summary: 'Success', detail: message, life: 3000});
      },

      findIndexById(id) {
        return this.itemsArray.findIndex(item => item.id === id);
      },
      //#endregion


      //#region Event Handlers
      onNewItem() {
        this.item = new Product({});
        this.isEdit = false;
        this.submitted = false;
        this.createAndEditDialogIsVisible = true;
      },

      onEditItem(itemAux) {
        console.log("Item on edit item: ", itemAux);
        this.item = new Product(itemAux);
        this.isEdit = true;
        this.submitted = false;
        this.createAndEditDialogIsVisible = true;
      },

      onDeleteItem(itemAux) {
        this.item = new Product(itemAux);
        this.deleteItem();
      },

      onDeleteSelectedItems(selectedItems) {
        this.selectedItems = selectedItems;
        this.deleteSelectedItem();
      },

      onCancelRequestedManagement() {
        this.createAndEditDialogIsVisible = false;
        this.submitted = false;
        this.isEdit = false;
      },

      onSaveRequestedManagement(itemAux) {
        console.log('onSaveRequestedManagement', itemAux);
        this.submitted = true

        if (itemAux.id) {
          this.updateItem();
        } else {
          this.createItem();
        }

        this.createAndEditDialogIsVisible = false;
        this.isEdit = false;
      },
      //#endregion


      //#region Actions Methods
      createItem() {
        this.productApiService.create(this.item).then(response => {
          let newItem = new Product(response.data);
          this.itemsArray.push(newItem);
          this.notifySuccessfulAction('Product created successfully');
        }).catch(error => {
          console.error("Error creating a Product", error);
        });
      },

      updateItem() {
        this.productApiService.update(this.item.id, this.item).then(response => {
          let index = this.findIndexById(this.item.id);
          this.itemsArray[index] = new Product(response.data);
          this.notifySuccessfulAction('Product updated successfully');
        }).catch(error => {
          console.error("Error updating a Product", error);
        });
      },

      deleteItem() {
        this.productApiService.delete(this.item.id).then(() => {
          let index = this.findIndexById(this.item.id);
          this.itemsArray.splice(index, 1);
          this.notifySuccessfulAction('Product deleted successfully');
        }).catch(error => {
          console.error("Error deleting a Product", error);
        });
      },

      deleteSelectedItem() {
        this.selectedItems.forEach((variable) => {
          this.productApiService.delete(variable.id).then(() => {
            let index = this.findIndexById(variable.id);
            this.itemsArray.splice(index, 1);
          }).catch(error => {
            console.error("Error deleting a Product", error);
          });
        });

        this.notifySuccessfulAction('Products deleted successfully');
      },
      //#endregion

      async getAllItems() {
        try {
          // Obtener productos y stocks de manera asincrónica
          const [productsResponse, stocksResponse] = await Promise.all([
            this.productApiService.getAllResources(),  // Obtener productos
            this.stockApiService.getAllResources()     // Obtener stocks
          ]);

          // Mapear los productos y stocks a sus respectivos objetos
          this.itemsArray = productsResponse.data.map(newItem => new Product(newItem));
          this.itemsArrayStocks = stocksResponse.data.map(newItem => new Stock(newItem));

          console.log("Products resources", this.itemsArray);
          console.log("Stock resources", this.itemsArrayStocks);

          // Combinar datos de productos y stocks
          this.combineData();
        } catch (error) {
          console.error("Error getting Products or Stocks", error);
        }
      },

      // Combinar datos de productos con stock por product-id
      combineData() {
        this.itemsArray.forEach((product) => {
          // Buscar el stock que coincide con el product_id del producto
          const stock = this.itemsArrayStocks.find((stock) => stock.product_id == product.id);
          if (stock) {
            // Añadir el stock al producto directamente
            product.stock = stock;  // Puedes agregar directamente el stock al objeto 'product'
          }
          console.log("AGREGANDO STOCK", product);
        });


        console.log(this.itemsArray);
      },


    },

    created() {
      this.productApiService = new ProductApiService('/products');
      this.stockApiService = new StockApiService('/stocks');

      this.getAllItems();

      console.log("Product Management Created");
    },


}
</script>

<template>

  <div class="view-all-products flex flex-column flex-1 h-full overflow-hidden pl-6 pr-6">

    <div class="border-bottom-2 w-full">
      <h2>{{title.plural}} Management</h2>
    </div>

    <div class="card-container flex flex-column flex-1 overflow-scroll pt-6" >

      <div class="flex flex-wrap justify-content-center gap-4 w-full h-full ">

        <pv-card v-for="item in itemsArray" :key="item.id" :title="title" :data="item"
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
              <div class="flex flex-row items-center w-full">
                <p class="w-full">Price: S/. {{item.price}}</p>
                <p class="w-full" v-if="item.stock">Stock: {{item.stock.total_available}}</p>
                <p class="w-full" v-else>Stock: No disponible</p>
              </div>
            </div>
          </template>

          <template #footer=>
            <div class="flex justify-content-center gap-2">
              <pv-button icon="pi pi-pencil" outlined rounded class="mr-2" @click="onEditItem(item)" />
              <pv-button icon="pi pi-trash" outlined rounded severity="danger" @click="onDeleteItem(item)" />
              <pv-button icon="pi pi-eye" outlined rounded severity="info" @click="onDeleteItem(item.data)" />
            </div>
          </template>
        </pv-card>

        <product-create-and-edit
            :edit = "isEdit"
            :item="item"
            :visible="createAndEditDialogIsVisible"
            v-on:cancel-requested-item="onCancelRequestedManagement"
            v-on:save-requested-item="onSaveRequestedManagement($event)">
        </product-create-and-edit>
      </div>

    </div>
  </div>

</template>

<style scoped>

</style>