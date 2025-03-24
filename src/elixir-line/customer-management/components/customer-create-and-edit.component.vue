<script>
import CreateAndEdit from "../../../shared/components/create-and-edit.component.vue";

export default {
  name: "customer-create-and-edit",
  components: {CreateAndEdit},

  props: {
    item: null,
    visible: Boolean
  },

  data() {
    return {
      submitted: false
    }
  },

  methods: {

    onCancelRequested() {
      this.$emit('cancel-requested-item');
    },

    onSaveRequested() {
      this.submitted = true;
      this.$emit('save-requested-item', this.item);
    }
  },

  created() {
    console.log('Customer Create and Edit Dialog component created');
  }
}
</script>

<template>

  <div>
    <create-and-edit :entity="item" :visible="visible" entity-name="Customer" @canceled-shared="onCancelRequested"
                     @saved-shared="onSaveRequested">

      <template #content>

        <pv-float-label class="mt-5">
          <label for="person_name">Person Name</label>
          <pv-input-text id="person_name" v-model="item.person_name" :class="{ 'p-invalid': submitted && !item.person_name}"/>
        </pv-float-label>

        <pv-float-label class="mt-5">
          <label for="dni">DNI</label>
          <pv-input-text id="dni" v-model="item.dni" :class="{ 'p-invalid': submitted && !item.dni}"/>
        </pv-float-label>

        <pv-float-label class="mt-5">
          <label for="email">Email</label>
          <pv-input-text id="email" v-model="item.email" :class="{ 'p-invalid': submitted && !item.email}"/>
        </pv-float-label>


        <pv-float-label class="mt-5">
          <label for="business_name">Business Name</label>
          <pv-input-text id="business_name" v-model="item.business_name" :class="{ 'p-invalid': submitted && !item.business_name}"/>
        </pv-float-label>

        <pv-float-label class="mt-5">
          <label for="phone">Phone</label>
          <pv-input-text id="phone" v-model="item.phone" :class="{ 'p-invalid': submitted && !item.phone}"/>
        </pv-float-label>

        <pv-float-label class="mt-5">
          <label for="address">Address</label>
          <pv-input-text id="address" v-model="item.address" :class="{ 'p-invalid': submitted && !item.address}"/>
        </pv-float-label>

        <pv-float-label class="mt-5">
          <label for="country">Country</label>
          <pv-input-text id="country" v-model="item.country" :class="{ 'p-invalid': submitted && !item.country}"/>
        </pv-float-label>

        <pv-float-label class="mt-5">
          <label for="city">City</label>
          <pv-input-text id="city" v-model="item.city" :class="{ 'p-invalid': submitted && !item.city}"/>
        </pv-float-label>

        <pv-float-label class="mt-5">
          <label for="ruc">RUC</label>
          <pv-input-text id="ruc" v-model="item.ruc" :class="{ 'p-invalid': submitted && !item.ruc}"/>
        </pv-float-label>

      </template>

    </create-and-edit>
  </div>

</template>

<style scoped>

</style>