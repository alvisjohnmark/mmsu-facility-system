
<template lang="">
  <div class="flex flex-row w-full"><!--Main-->
    <aside class="sticky top-0 shadow-lg shadow-gray-500 w-80 h-screen"><!--Side Nav-->
      <div class="flex items-center justify-center h-14 mt-20">
         <img src="\src\mmsu-logo.png" alt="Logo" class="w-36" />
      </div>
          <div class="grid grid-cols-1 mt-20 divide-y divide-dashed">
              <router-link to="/admin/admindashboard" class="block px-4 py-2 text-gray-800 router-link" trigger="hover" active-class="active-link">
                    <span class="flex items-center">
                        <lord-icon src="https://cdn.lordicon.com/wmwqvixz.json" trigger="morph" state="morph-home-3" colors="primary:#ffffff" class="w-7 h-7 mr-2" />
                        Dashboard
                    </span>
                </router-link>
                <router-link to="/admin/admincalendar" class="block px-4 py-2 text-gray-800 router-link" active-class="active-link">
                    <span class="flex items-center">
                        <lord-icon src="https://cdn.lordicon.com/wmlleaaf.json" trigger="hover" colors="primary:#ffffff" class="w-7 h-7 mr-2" />
                        Calendar
                    </span>
                </router-link> 
                <router-link to="/admin/adminreservation" class="block px-4 py-2 text-gray-800 router-link" active-class="active-link">
                    <span class="flex items-center">
                      <lord-icon src="https://cdn.lordicon.com/omiqopzf.json" trigger="hover" colors="primary:#ffffff" class="w-7 h-7 mr-2" />
                        Reservation 
                    </span>
                </router-link>
                <router-link to="/admin/adminfacilities" class="block px-4 py-2 text-gray-800 router-link" active-class="active-link">
                    <span class="flex items-center">
                      <lord-icon src="https://cdn.lordicon.com/ipnwkgdy.json"  trigger="hover" colors="primary:#ffffff" class="w-7 h-7 mr-2" />
                        Facilities 
                    </span>
                </router-link>
                <router-link to="/admin/adminservices" class="block px-4 py-2 text-gray-800 router-link" active-class="active-link">
                    <span class="flex items-center">
                        <lord-icon src="https://cdn.lordicon.com/iazmohzf.json" trigger="hover" colors="primary:#ffffff" class="w-7 h-7 mr-2" />
                        Services 
                    </span>
                </router-link>                 
                <router-link to="/admin/adminreport" class="block px-4 py-2 text-gray-800 router-link" active-class="active-link">
                    <span class="flex items-center">
                        <lord-icon src="https://cdn.lordicon.com/yrbmguoo.json" trigger="hover" colors="primary:#ffffff" class="w-7 h-7 mr-2" />
                        Report 
                    </span>
                </router-link> 
                <router-link to="/admin/login" class="block px-4 py-2 text-gray-800 router-link" active-class="active-link">
                <button @click="logout" class="flex items-center">
                  <lord-icon src="https://cdn.lordicon.com/whtfgdfm.json" trigger="hover" colors="primary:#ffffff" class="w-7 h-7 mr-2" />
                  Logout
                </button>
              </router-link>
          </div>
      </aside><!--Side Bav End-->

      <div class="bg-gray-100 min-h-screen w-full"  style="font-family: arial"><!--Content-->
          <div class="grid grid-cols-1 flex flex-row border-b-4 border-yellow-400"><!--Sub Nav-->
              <div class="shadow-md h-20 flex justify-start" style="background-color: #0C4B05">
                  <span class="flex items-center text-white text-xl font-semibold ml-4">
                    <lord-icon src="https://cdn.lordicon.com/iazmohzf.json" trigger="hover" colors="primary:#ffffff" class="w-10 h-10 mr-2" />
                      Services
                  </span>
              </div>
          </div> <!--Sub Nav End--> 


          <div class="flex justify-end mt-7 mr-6">
        <div class="bg-gray-300 rounded-full py-2 px-4 mr-4">
          <router-link :to="{ name: 'addservices' }" class="text-black">Add New Service</router-link>
        </div>
        <router-view></router-view>
      </div>



        <!-- ADD TABLE HERE -->
        <!-- Table section -->
    <table class="m-8">
      <thead>
        <tr>
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
        <!-- Loop through services data -->
        <tr v-for="(service, index) in services" :key="index">
          <td class="px-4 py-2 text-center border">{{ service.service_name }}</td>
          <td class="px-4 py-2 text-center border">{{ service.type }}</td>
          <td class="px-4 py-2 text-center border">{{ service.fee }}</td>
          <td class="px-4 py-2 text-center border">{{ service.unit }}</td>
          <td class="px-4 py-2 text-center border">{{ service.note }}</td>
          <td class="px-4 py-2 text-center border">{{ getMonthName(service.monthFrom) }}</td>
          <td class="px-4 py-2 text-center border">{{ getMonthName(service.monthTo) }}</td>
          <td class="px-4 py-2 text-center border items-center">
              <!-- Edit button -->
              <button @click="editService(service.id)" class="rounded-md px-3 py-1 mr-2 bg-yellow-300 text-black">Edit</button>
              <!-- Delete button -->
              <button @click="deleteService(index)" class="rounded-md px-3 py-1 bg-red-500 text-white mt-3">Delete</button>
            </td>
        </tr>
      </tbody>
    </table>

  </div>
</div>
</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2';

export default {
  data() {
    return {
      services: [], 
    };
  },
  methods: {

    fetchServices() {
      axios.get('/get-services')
        .then(response => {
          this.services = response.data; // Assuming the services are returned as an array
        })
        .catch(error => {
          console.error('Error fetching services:', error);
        });
    },

    editService(serviceId) {
      this.$router.push({ name: 'edit-services', params: { id: serviceId } });
    },


    deleteService(index) {
        // Confirm delete action using SweetAlert or any other confirmation approach
        Swal.fire({
          title: 'Are you sure?',
          text: 'You will not be able to recover this service!',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#d33',
          cancelButtonColor: '#3085d6',
          confirmButtonText: 'Yes, delete it!'

        }).then((result) => {
          if (result.isConfirmed) {
            // Call backend to delete the service
            const serviceIdToDelete = this.services[index].id; // Assuming the service has an 'id'
            axios.delete(`/delete-services/${serviceIdToDelete}`)
              .then(response => {
                // Remove the service from the local array after successful deletion
                this.services.splice(index, 1);
                Swal.fire('Deleted!', 'Your service has been deleted.', 'success');
              })
              .catch(error => {
                console.error('Error deleting service:', error);
                Swal.fire('Error!', 'Failed to delete service.', 'error');
              });
          }
        });
      },
   
    getMonthName(monthValue) {
      const months = [
        'January', 'February', 'March', 'April',
        'May', 'June', 'July', 'August',
        'September', 'October', 'November', 'December'
      ];

      return months[monthValue - 1] || ''; // Subtract 1 because JavaScript's month index starts from 0
    },


    logout() {
      axios.post('/logout').then(({ data }) => {
        this.checkUser();
    });
    },
    checkUser() {
      axios.post('/check-user').then(({ data }) => {
        if (!data) {
          this.$router.push('/admin/login');
          window.location.reload(); // Reload the page after redirecting to login
        }
      });
    }
  },
  mounted() {
    this.checkUser();
    this.fetchServices();
  },
};
</script>



<style lang="">
  
</style>

<style scoped>
.router-link:hover {
color: white;
background-color: #0C4B05;
}
.active-link {
color: white;
background-color: #0C4B05;
}

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


