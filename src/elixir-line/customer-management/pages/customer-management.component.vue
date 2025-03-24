<script>
import DataManager from "../../../shared/components/data-manager.component.vue";
import {Customer} from "../model/customer.entity.js";
import {CustomerApiService} from "../services/customer-api.service.js";
import CustomerCreateAndEdit from "../components/customer-create-and-edit.component.vue";

export default {
  name: "customer-management",
  components: {CustomerCreateAndEdit, DataManager},

  data() {
    return {
      title: {singular: 'Customer', plural: 'Customers'},
      itemsArray: [],

      item: new Customer({}),
      customerApiService: null,

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
      this.item = new Customer({});
      this.isEdit = false;
      this.submitted = false;
      this.createAndEditDialogIsVisible = true;
    },

    onEditItem(itemAux) {
      console.log("Item: ", itemAux);
      this.item = new Customer(itemAux);
      this.isEdit = true;
      this.submitted = false;
      this.createAndEditDialogIsVisible = true;
    },

    onDeleteItem(itemAux) {
      this.item = new Customer(itemAux);
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
      this.customerApiService.create(this.item).then(response => {
        let newItem= new Customer(response.data);
        this.itemsArray.push(newItem);
        this.notifySuccessfulAction('Customer created successfully');
      }).catch(error => {
        console.error("Error creating a Customer",error);
      });
    },

    updateItem() {
      this.customerApiService.update(this.item.id, this.item).then(response => {
        let index = this.findIndexById(this.item.id);
        this.itemsArray[index] = new Customer(response.data);
        this.notifySuccessfulAction('Customer updated successfully');
      }).catch(error => {
        console.error("Error updating a Customer",error);
      });
    },

    deleteItem() {
      this.customerApiService.delete(this.item.id).then(() => {
        let index = this.findIndexById(this.item.id);
        this.itemsArray.splice(index, 1);
        this.notifySuccessfulAction('Customer deleted successfully');
      }).catch(error => {
        console.error("Error deleting a Customer",error);
      });
    },

    deleteSelectedItem() {
      this.selectedItems.forEach((variable) => {
        this.customerApiService.delete(variable.id).then(() => {
          let index = this.findIndexById(variable.id);
          this.itemsArray.splice(index, 1);
        }).catch(error => {
          console.error("Error deleting a Customer",error);
        });
      });

      this.notifySuccessfulAction('Customers deleted successfully');
    },
    //#endregion

    getAllItem() {

      this.customerApiService.getAllResources().then(response => {
        this.itemsArray = response.data.map(newItem => new Customer(newItem));

        console.log("Customer resources", this.itemsArray);
      }).catch(error => {
        console.error("Error getting Customers",error);
      });
    },

  },

  created() {
    this.customerApiService = new CustomerApiService('/customers');

    this.getAllItem();

    console.log('Customer Management component created');
  }


}
</script>

<template>

    <div
        class="flex flex-column flex-1 justify-content-center align-content-between pl-6 pr-6 pt-2 pb-2 h-full" >


        <data-manager :title="title"
                      :items="itemsArray"
                      v-on:new-item-requested-manager="onNewItem"
                      v-on:edit-item-requested-manager="onEditItem($event)"
                      v-on:delete-item-requested-shared-manager="onDeleteItem($event)"
                      v-on:delete-selected-items-requested-shared-manager="onDeleteSelectedItems($event)">

          <template #custom-columns-manager class="flex flex-row flex-wrap gap-2 w-full p-2" >
            <pv-column :sortable="true" field="person_name" header="Person Name" style="min-width: 8rem"/>
            <pv-column :sortable="true" field="dni" header="DNI" style="min-width: 8rem"/>
            <pv-column :sortable="true" field="email" header="Email" style="min-width: 8rem"/>
            <pv-column :sortable="true" field="business_name" header="Business Name" style="min-width: 8rem"/>
            <pv-column :sortable="true" field="phone" header="Phone" style="min-width: 8rem"/>
            <pv-column :sortable="true" field="address" header="Address" style="min-width: 8rem"/>
            <pv-column :sortable="true" field="country" header="Country" style="min-width: 8rem"/>
            <pv-column :sortable="true" field="city" header="City" style="min-width: 8rem"/>
            <pv-column :sortable="true" field="ruc" header="RUC" style="min-width: 8rem"/>
          </template>

        </data-manager>


        <customer-create-and-edit
            :edit = "isEdit"
            :item="item"
            :visible="createAndEditDialogIsVisible"
            v-on:cancel-requested-item="onCancelRequestedManagement"
            v-on:save-requested-item="onSaveRequestedManagement($event)">
        </customer-create-and-edit>

      </div>


</template>

<style scoped>

</style>