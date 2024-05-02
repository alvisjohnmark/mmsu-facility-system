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
                <!--Updated by jhn--> 
                <router-link
                  to="/admin/adminfacilities"
                  class="block px-4 py-2 text-gray-800 router-link"
                  active-class="active-link"
                >
                  <span class="flex items-center">
                    <lord-icon
                      src="https://cdn.lordicon.com/ipnwkgdy.json"
                      trigger="hover"
                      colors="primary:#ffffff"
                      class="w-7 h-7 mr-2"
                    />
                    Facilities
                    <lord-icon
                      @click="toggleExpand"
                      v-if="!expanded"
                      src="https://cdn.lordicon.com/xcrjfuzb.json"
                      trigger="hover"
                      state="hover-arrow-down-2"
                      colors="primary:#ffffff"
                      class="w-5 h-5 ml-24"
                    />
                    <lord-icon
                      @click="toggleExpand"
                      v-if="expanded"
                      src="https://cdn.lordicon.com/ternnbni.json"
                      trigger="hover"
                      state="hover-arrow-up-2"
                      colors="primary:#ffffff"
                      class="w-5 h-5 ml-24"
                    />
                  </span>
                </router-link>
                <router-link
                  v-if="expanded"
                  to="/addfacilities"
                  class="px-4 py-2 text-gray-800 router-link"
                  active-class="active-link"
                >
                <span class="flex items-center ml-8">
                  <lord-icon src="https://cdn.lordicon.com/hqymfzvj.json" trigger="hover" colors="primary:#ffffff" class="w-7 h-7 mr-2" /> 
                   Add Facility
                </span>
                </router-link>
                <!--Updated by jhn--> 
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

    
      <div class="bg-white shadow-xl h-screen w-full"><!--Content-->
            <div class="grid grid-cols-1 flex flex-row border-b-4 border-yellow-400"><!--Sub Nav-->
                <div class="shadow-md h-20 flex justify-between" style="background-color: #0C4B05">
                    <span class="flex items-center text-white text-xl font-semibold ml-4" style="font-family: Advantage">
                      <lord-icon src="https://cdn.lordicon.com/ipnwkgdy.json" trigger="hover" colors="primary:#ffffff"  class="w-10 h-10 mr-2" />
                      Facilities
                  </span>

                  <div class="flex justify-end px-4 py-2 text-xl" style="font-family: Advantage">
                  <router-link to="/addfacilities" class="flex items-center text-white text-lg font-semibold mr-7 router-link" active-class="active-link">
                      <lord-icon
                          src="https://cdn.lordicon.com/hqymfzvj.json"
                          trigger="hover"
                          colors="primary:#ffffff"
                          style="width:10;height:10"
                          class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300 mr-2" >
                      </lord-icon>
                      Add Facilities
                  </router-link>
              </div>
              </div>
          </div> <!--Sub Nav End-->


          <div class="grid grid-cols-1 flex flex-row"><!--Sub Nav 1-->
                <div class="bg-shadow-gray-300 shadow-md h-16 flex justify-start" style="background-color: #c0c0c0">
                    <span class="flex items-center text-black text-lg italic font-semibold ml-4" style="font-family: Advantage">
                        <img src="\src\mmsu-logo.png" alt="Logo"  class="w-12 h-10 mr-2" />
                        Mariano Marcos State University Facilities
                    </span>
                </div>  
            </div> <!--Sub Nav End 1-->

            
            <!--content na-->
            <div class="content-container">
          <div class="">
  <div class="mt-1 grid grid-cols-1 gap-4 p-6 flex justify-center" style="font-family: Advantage">
    <div v-for="facility in facilities" :key="facility.id" class="bg-white rounded-lg shadow-md">
      <div class="p-4 bg-gray-100">
        <h3 class="font-semibold text-3xl" ><strong>{{ facility.facility_name }}</strong></h3>
        <p class="text-gray-900 text-justify mt-4" v-html="facility.description"></p>  
        <p class="text-gray-900 mt-3">
          <span><strong>Short Description:</strong></span> {{ facility.shortdes }}
        </p>
        <p class="text-gray-900 mt-3">
          <span><strong>Location:</strong></span> {{ facility.location }}
        </p>
        <p class="text-gray-900 mt-3">
          <span><strong>Capacity:</strong></span> {{ facility.capacity }}
        </p>
        <p class="text-gray-900 mt-3">
          <span><strong>Tags:</strong></span> {{ facility.tags }}
        </p>
        <p class="text-gray-900 mt-3">
          <span><strong>Price:</strong></span> {{ facility.amount }}
        </p>
        <div v-for="price in facility.prices" :key="price.id">
                        <p>₱  {{ price.amount }} per {{ price.hours }} hours</p>
                    </div>
        
        <div class="mt-4 flex justify-end">
    <button @click="editFacility(facility.id)" class="bg-green-800 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300">Edit</button>
          <router-link
          v-if="facility.id"
            :to="{ name: 'pic', params: { facilityId: facility.id } }"
            class="bg-green-800 hover:bg-green-700 ml-2 mr-2 text-white font-semibold py-2 px-4 rounded router-link transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300"
            active-class="active-link">
            Pictures
          </router-link>
          <button
            @click="deleteFacility(facility.id)"
            class="bg-red-600 hover:bg-red-500 text-white font-semibold py-2 px-4 rounded transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
      </div><!--Content End-->

  </div>
</template>
<script>
import axios from 'axios';

export default {
  data() {
    return {
      expanded: false,
      isSidePanelOpen: true,
      showModal: false,
      facilities: []
    }
  }, 
  methods: {
    toggleExpand() {
      this.expanded = !this.expanded
    },
    toggleSidePanel() {
      this.isSidePanelOpen = !this.isSidePanelOpen;
    },
    openModal() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
    
    logout() {
        axios.post('/logout').then(({data})=>{
          this.checkUser();
        })
      },

      checkUser(){
        axios.post('/check-user').then(({data})=>{
          if(!data){
            this.$router.push('/admin/login');
            window.location.reload(); // Reload the page after redirecting to login
          }
        })
      },


    loadAdminFacilities() {
      axios.get('/load-admin-acilities') // Send a GET request to fetch admin-specific facilities
          .then(({ data }) => {
            this.facilities = data;
          })
          .catch(error => {
            console.error('Error loading admin facilities:', error);
          });
},

    deleteFacility(id) {
    if (confirm('Are you sure?')) {
      axios.post('/delete-facility/'+id)
        .then(({ data }) => {
          if (data) {
            alert('Success');
            this.loadAdminFacilities(); // Reload facilities after deletion
          } else {
            alert('Error');
          }
        })
        .catch(error => {
          console.error('Error deleting facility:', error);
          alert('Error deleting facility');
        });
    } else {
      alert('Cancelled');
    }
},

editFacility(id) {
    // Here, you can implement the logic to edit a facility
    // For example, you can navigate to an edit facility page using router-link
    // Replace '/edit-facility/' with your desired route for editing a facility
    this.$router.push('/EditFacilities/' + id);
  },
  },

  mounted() {
    this.loadAdminFacilities();
    this.checkUser();
  },

}


</script>


<style lang="">
</style>



<style scoped>
/* Side Navigation Hover Effect Panel */
.router-link:hover {
    color: white;
    background-color: #0C4B05; 
  } 
.active-link {
    color: white;
    background-color: #0C4B05; 
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

.content-container {
  height: 80vh; /* Adjust the height as needed */
  overflow: auto;
}
  
</style>