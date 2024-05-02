
<template>
    <div>
        <!-- Go Back button -->
    <button @click="goBack" class="bg-gray-500 text-white px-4 py-2 rounded mt-4">
      Go Back
    </button>

          
<div class="m-8">
  <form @submit.prevent="addService" class="flex flex-col space-y-4"  style="font-family: Advantage">
    <div class="flex flex-row space-x-4">
      <div class="w-1/3">
        <label class="block text-gray-700 font-semibold" for="service-name">Service Name</label>
        <input
          v-model="serviceName"
          class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-800"
          type="text"
          id="service-name"
          name="service-name"
          placeholder="Enter service name"
          required
        />
      </div>
      <div class="w-1/3">
        <label class="block text-gray-700 font-semibold" for="service-type">Type</label>
        <select
          v-model="serviceType"
          id="service-type"
          class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-800"
        >
        <option value="audiovisual">Audiovisual</option>
        <option value="food">Food</option>
        <option value="tech">Tech</option>
        <option value="seating">Seating</option>
          <!-- Add other types as needed -->
        </select>
      </div>
      <div class="w-1/3">
        <label class="block text-gray-700 font-semibold" for="service-fee">Fee</label>
        <input
          v-model="serviceFee"
          class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-800"
          type="number"
          id="service-fee"
          name="service-fee"
          placeholder="Enter service fee"
          required
        />
      </div>
      <div class="w-1/3">
  <label class="block text-gray-700 font-semibold" for="service-unit">Unit</label>
  <input
    v-model="serviceUnit"
    class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-800"
    type="text"
    id="service-unit"
    name="service-unit"
    placeholder="Enter unit"
  />
</div>
<div class="w-2/3">
  <label class="block text-gray-700 font-semibold" for="service-note">Note</label>
  <textarea
    v-model="serviceNote"
    class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-800"
    id="service-note"
    name="service-note"
    rows="3"
    placeholder="Enter note"
  ></textarea>
</div>
    </div>
  
    <div class="flex flex-row space-x-4">
      <div class="w-1/2">
        <label class="block text-gray-700 font-semibold" for="month-from">Month From</label>
        <select
          v-model="monthFrom"
          id="month-from"
          class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-800"
        >
          <option v-for="(month, index) in months" :key="index" :value="index + 1">{{ month }}</option>
        </select>
      </div>
      <div class="w-1/2">
        <label class="block text-gray-700 font-semibold" for="month-to">Month To</label>
        <select
          v-model="monthTo"
          id="month-to"
          class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-800"
        >
          <option v-for="(month, index) in months" :key="index" :value="index + 1">{{ month }}</option>
        </select>
      </div>
     
          </div>
  
          <button
  type="submit"
  class="bg-green-800 hover:bg-green-700 text-white px-4 py-2 rounded focus-outline-none focus-ring-2 focus-ring-green-500 mx-auto transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 hover:duration-300 "
  >
    Confirm
    </button>
        </form>
    </div>
  
      <!-- Display the result in a table -->
      <div class="m-8">
        <table class="w-full border-collapse">
    <thead>
      <tr class="bg-gray-200">
        <th class="px-4 py-2 text-center border">Service Name</th>
        <th class="px-4 py-2 text-center border">Type</th>
        <th class="px-4 py-2 text-center border">Fee</th>
        <th class="px-4 py-2 text-center border">Unit</th>
        <th class="px-4 py-2 text-center border">Note</th>
        <th class="px-4 py-2 text-center border">Month From</th>
        <th class="px-4 py-2 text-center border">Month To</th>
        <th class="px-4 py-2 text-center border">Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(service, index) in services" :key="index" :class="index % 2 === 0 ? 'bg-gray-100' : 'bg-white'">
        <td class="px-4 py-2 text-center border">{{ service.service_name }}</td>
        <td class="px-4 py-2 text-center border">{{ service.type }}</td>
        <td class="px-4 py-2 text-center border">{{ service.fee }}</td>
        <td class="px-4 py-2 text-center border">{{ service.unit }}</td>
        <td class="px-4 py-2 text-center border">{{ service.note }}</td>
        <td class="px-4 py-2 text-center border">{{ getMonthName(service.monthFrom) }}</td>
        <td class="px-4 py-2 text-center border">{{ getMonthName(service.monthTo) }}</td>
        <td class="px-4 py-2 text-center border">
          <button @click="deleteService(index)" class="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded">
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  </table>

   <!-- Button to add services to the table -->
   <button @click="saveServices" class="bg-green-800 hover:bg-green-700 text-white px-4 py-2 rounded mt-4">
        Add Services
      </button>
  </div> 
        
    </div>
</template>




<script>
import axios from 'axios';
import Swal from 'sweetalert2'

export default {
        data() {
        return {
            isSidePanelOpen: true,
            showModal: false,
            serviceName: "",
            serviceType: "",
            serviceFee: "",
            monthFrom: "",
            monthTo: "",
            serviceUnit: "",
            serviceNote: "",
            services: [],
            months: [
            'January', 'February', 'March', 'April',
            'May', 'June', 'July', 'August',
            'September', 'October', 'November', 'December'
            ],
        };
        },

    methods: {
        toggleSidePanel() {
            this.isSidePanelOpen = !this.isSidePanelOpen;
        },
        topenModal() {
            this.showModal = true;
        },
        closeModal() {
            this.showModal = false;
        },

        addService() {

            console.log('Adding service...');
            console.log('Service Name:', this.serviceName);
            this.services.push({
                    service_name: this.serviceName,
                    type: this.serviceType,
                    fee: this.serviceFee,
                    unit: this.serviceUnit,
                    note: this.serviceNote,
                    monthFrom: this.monthFrom,
                    monthTo: this.monthTo,
                });

            this.serviceName = "";
            this.serviceType = "";
            this.serviceFee = "";
            this.serviceUnit = "";
            this.serviceNote = "";
            this.monthFrom = "";
            this.monthTo = "";
        },


        getMonthName(monthValue) {
            return this.months[monthValue - 1];
        },


        saveServices() {
    // Send services data to the backend
    axios.post('/save-services', this.services)
        .then(response => {
            // Clear the services array after successful saving
            this.services = [];

            // Show success message using SweetAlert
            Swal.fire({
                title: 'Services saved!',
                text: 'Your services have been saved successfully.',
                icon: 'success',
            }).then(() => {
                // Redirect to the first part after the alert is closed
                this.$router.push('/admin/adminservices');
            });
        })
        .catch(error => {
            console.error('Error saving services:', error);
            // Handle error scenarios if needed
        });
},


        goBack() {
        // Go back to the previous page in the history
        this.$router.go(-1);
        },

        deleteService(index) {
        this.services.splice(index, 1);
  },
    }

};
</script>



<style scoped>

/* Result Table Styles */
.m-8 table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .m-8 th, .m-8 td {
  border: 1px solid #ddd;
  padding: 16px;
  text-align: center;
  font-size: 14px;
  }
  
  .m-8 th {
  background-color: #0C4B05;
  color: white;
  font-weight: bold;
  text-transform: uppercase;
  }
  
  .m-8 tbody tr:nth-child(even) {
  background-color: #f8f8f8;
  }
  
  .m-8 tbody tr:hover {
  background-color: #f0f0f0;
  transition: background-color 0.3s ease;
  }
  
  /* Button Style */
  .m-8 button {
  padding: 12px 18px;
  background-color: #0C4B05;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-size: 14px;
  }
  
  .m-8 button:hover {
  background-color: #084104;
  }
  
  .centered-content {
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: margin 0.3s ease-in-out;
    }
  .slide-enter-active, .slide-leave-active {
  transition: transform 0.3s ease-in-out;
  
  }
  
  .slide-enter, .slide-leave-to {
  transform: translateX(-100%);
  }
  
  .transition-transform {
  transition: transform 0.3s ease-in-out;
  }
  
  .transition-margin {
  transition: margin-right 0.3s ease-in-out;
  }
  
  .slide-main-enter-active, .slide-main-leave-active {
  transition: margin-right 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55);
  }
  
  .slide-main-enter, .slide-main-leave-to {
  margin-right: 0;
  }
  
    
</style>