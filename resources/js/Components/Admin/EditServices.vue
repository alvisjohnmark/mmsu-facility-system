<template>
  <form @submit.prevent="editService" class="flex flex-col space-y-4" style="font-family: Advantage">
    

    <div class="flex flex-row space-x-4">
  <div class="w-1/3">
    <label class="block text-gray-700 font-semibold" for="service-name">Service Name</label>
    <input
      v-model="service.service_name"
      class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-800"
      type="text"
      id="service-name"
      name="service-name"
      required
    />
  </div>
  <div class="w-1/3">
    <label class="block text-gray-700 font-semibold" for="service-type">Type</label>
    <select
      v-model="service.type"
      class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-800"
      id="service-type"
      name="service-type"
      required
    >
      <option value="">Select Type</option>
      <option value="audiovisual">Audiovisual</option>
      <option value="food">Food</option>
      <option value="tech">Tech</option>
      <option value="seating">Seating</option>
    </select>
  </div>
  <div class="w-1/3">
    <label class="block text-gray-700 font-semibold" for="service-fee">Fee</label>
    <input
      v-model="service.fee"
      class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-800"
      type="text"
      id="service-fee"
      name="service-fee"
      required
    />
  </div>
</div>

<div class="flex flex-row space-x-4 mt-4">
  <div class="w-1/3">
    <label class="block text-gray-700 font-semibold" for="service-unit">Unit</label>
    <input
      v-model="service.unit"
      class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-800"
      type="text"
      id="service-unit"
      name="service-unit"
      required
    />
  </div>
  <div class="w-1/3">
    <label class="block text-gray-700 font-semibold" for="service-note">Note</label>
    <input
      v-model="service.note"
      class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-800"
      type="text"
      id="service-note"
      name="service-note"
      required
    />
  </div>
  <div class="w-1/3">
    <label class="block text-gray-700 font-semibold" for="service-month-from">Month From</label>
    <input
      v-model="service.monthFrom"
      class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-800"
      type="text"
      id="service-month-from"
      name="service-month-from"
      required
    />
  </div>
</div>

<div class="flex flex-row space-x-4 mt-4">
  <div class="w-1/3">
    <label class="block text-gray-700 font-semibold" for="service-month-to">Month To</label>
    <input
      v-model="service.monthTo"
      class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-800"
      type="text"
      id="service-month-to"
      name="service-month-to"
      required
    />
  </div>
  <!-- Add more fields if needed -->
</div>

    <!-- Buttons for Submit and Cancel -->
    <div class="flex flex-row space-x-4">

      <button type="submit" class="px-4 py-2 bg-blue-500 text-white rounded">Save Changes</button>

      <button type="button" @click="cancelEdit" class="px-4 py-2 bg-gray-500 text-white rounded">Cancel</button>
    </div>



  </form>
</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2'

export default {
  data() {
    return {
      service: {}, // Initialize an empty service object to store the edited service data
    };
  },
  methods: {
    fetchServiceData() {
      const serviceId = this.$route.params.id; // Get the service ID from the route params
      axios.get(`/get-service/${serviceId}`)
        .then(response => {
          this.service = response.data; // Populate the service object with fetched data
        })
        .catch(error => {
          console.error('Error fetching service data:', error);
        });
    },

    editService() {
      const serviceId = this.$route.params.id; // Get the service ID from the route params
          axios.put(`/update-service/${serviceId}`, this.service)
            .then(response => {
              Swal.fire({
                title: 'Services saved!',
                text: 'Your services have been saved successfully.',
                icon: 'success',
              }).then(() => {
                // Redirect to the services list after the alert is closed
                this.$router.push('/admin/adminservices');
              });
            })
    .catch(error => {
      // Handle error while updating service
      console.error('Error updating service:', error);
      // Show error message using SweetAlert
      Swal.fire({
        title: 'Error!',
        text: 'Failed to update service. Please try again.',
        icon: 'error',
      });
    });
    },
    cancelEdit() {
      this.$router.push('/admin/adminservices');
    },
  },
  mounted() {
    this.fetchServiceData(); // Fetch the service data on component mount
  },
};
</script>

<style>
/* Your component-specific styles here */
</style>
