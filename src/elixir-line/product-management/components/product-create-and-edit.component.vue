<script>
import CreateAndEdit from "../../../shared/components/create-and-edit.component.vue";

export default {
  name: "product-create-and-edit",
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
    console.log('Products Create and Edit Dialog component created');
  }
}
</script>

<template>


  <div>
    <create-and-edit :entity="item" :visible="visible" entity-name="Customer" @canceled-shared="onCancelRequested"
                     @saved-shared="onSaveRequested">

      <template #content>

        <pv-float-label class="mt-5">
          <label for="name">Name</label>
          <pv-input-text id="name" v-model="item.name" :class="{ 'p-invalid': submitted && !item.name}"/>
        </pv-float-label>

        <pv-float-label class="mt-5">
          <label for="variety">Variety</label>
          <pv-input-text id="variety" v-model="item.variety" :class="{ 'p-invalid': submitted && !item.variety}"/>
        </pv-float-label>

        <pv-float-label class="mt-5">
          <label for="year">Year</label>
          <pv-input-text id="year" v-model="item.year" :class="{ 'p-invalid': submitted && !item.year}"/>
        </pv-float-label>


        <pv-float-label class="mt-5">
          <label for="wine_type">Wine Type</label>
          <pv-input-text id="wine_type" v-model="item.wine_type" :class="{ 'p-invalid': submitted && !item.wine_type}"/>
        </pv-float-label>

        <pv-float-label class="mt-5">
          <label for="batch_number">Batch Number</label>
          <pv-input-text id="batch_number" v-model="item.batch_number" :class="{ 'p-invalid': submitted && !item.batch_number}"/>
        </pv-float-label>

        <pv-float-label class="mt-5">
          <label for="photo_url">Photo URL</label>
          <pv-input-text id="photo_url" v-model="item.photo_url" :class="{ 'p-invalid': submitted && !item.photo_url}"/>
        </pv-float-label>

        <pv-float-label class="mt-5">
          <label for="quality_data_id">Quality Data ID</label>
          <pv-input-text id="quality_data_id" v-model="item.quality_data_id" :class="{ 'p-invalid': submitted && !item.quality_data_id}"/>
        </pv-float-label>

        <pv-float-label class="mt-5">
          <label for="production_process_id">Production Process ID</label>
          <pv-input-text id="production_process_id" v-model="item.production_process_id" :class="{ 'p-invalid': submitted && !item.production_process_id}"/>
        </pv-float-label>

        <pv-float-label class="mt-5">
          <label for="stock_id">Stock ID</label>
          <pv-input-text id="stock_id" v-model="item.stock_id" :class="{ 'p-invalid': submitted && !item.stock_id}"/>
        </pv-float-label>

        <pv-float-label class="mt-5">
          <label for="distribution_id">Distribution ID</label>
          <pv-input-text id="distribution_id" v-model="item.distribution_id" :class="{ 'p-invalid': submitted && !item.distribution_id}"/>
        </pv-float-label>


      </template>

    </create-and-edit>
  </div>

</template>

<style scoped>

</style>