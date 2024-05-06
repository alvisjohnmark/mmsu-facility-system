<template lang="">
  <div class="flex flex-row w-full" style="overflow: auto"><!--Main-->
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
      </aside><!--Side Nav End-->
  

      <div class="bg-gray-100 shadow-xl min-h-screen w-full" style="font-family: Advantage"><!--Content-->
          <div class="grid grid-cols-1 flex-row border-b-4 border-yellow-400"><!--Sub Nav-->
              <div class="shadow-md h-20 flex justify-between" style="background-color: #0C4B05">
                  <span class="flex items-center text-white text-xl font-semibold ml-4">
                          <lord-icon src="https://cdn.lordicon.com/uwinmnkh.json" trigger="hover" colors="primary:#ffffff"  class="w-10 h-10 mr-2" />
                          Overview
                        </span>
                        <span class="text-white text-xl mr-4 flex items-center">
                          Hello, {{ adminName }}
                        </span>
                  </div>
              </div> <!--Sub Nav End-->
              
              <div class="mt-6 flex justify-evenly flex-row h-36"><!--Main Box-->

                  <div class="shadow lg border-r-4 border-yellow-400 basis-1/4 rounded-lg text-center" style="background-color: #0C4B05"><!--Box 1-->
                      <span class="flex items-center text-white text-lg font-normal mt-2">
                          <lord-icon src="https://cdn.lordicon.com/omiqopzf.json" trigger="hover" colors="primary:#ffffff" class="w-10 h-10 mr-2" />
                          <router-link to="/reservation">
                          Reservations
                          </router-link>
                      </span>
                      <div class="mt-5">
                        <span id="countReservations" class="font-bold text-4xl text-white">{{ reservationCount }}</span>
                      </div>
                  </div><!--Box 1 End-->


                  <div class="shadow lg border-r-4 border-yellow-400 basis-1/4 rounded-lg text-center" style="background-color: #0C4B05"><!--Box 2-->
                      <span class="flex items-center text-white text-lg font-normal mt-2">
                          <lord-icon src="https://cdn.lordicon.com/ipnwkgdy.json"  trigger="hover" colors="primary:#ffffff" class="w-10 h-10 mr-2" />
                          <router-link to="adminfacilities">
                          Facilities
                          </router-link>
                      </span>

                      <div class="mt-5">
                        <span id="countFacilities" class="font-bold text-4xl text-white">{{ facilityCount }}</span>
                      </div>

                  </div><!--Box 2 End-->
                  <div class="shadow lg border-r-4 border-yellow-400 basis-1/4 rounded-lg text-center" style="background-color: #0C4B05"><!--Box 3-->
                      <span class="flex items-center text-white text-lg font-normal mt-2">
                          <lord-icon src="https://cdn.lordicon.com/ncitidvz.json" trigger="hover" colors="primary:#ffffff" class="w-10 h-10 mr-2" />
                          <router-link to="/Payments">
                          Payments
                          </router-link>
                      </span>

                      <div class="mt-5">
                          <span id="countPayments" class="font-bold text-4xl text-white">0</span>
                      </div>
                  </div><!--Box 3 End-->
              </div><!--Main Box End-->
              <div class="grid grid-rows-4 grid-flow-col  justify-evenly">
                  <div class="row-span-4 shadow-lg shadow-gray-500 w-[500px] h-[500px] mt-12 overflow-y-auto rounded-md" >
                      <div class="grid grid-cols-1  flex-row">
                          <div class="shadow-md h-12 flex justify-start" style="background-color: #0C4B05">
                              <span class="flex items-center text-white text-lg font-normal ml-4">
                              <lord-icon src="https://cdn.lordicon.com/lznlxwtc.json" trigger="hover" state="loop-bell" colors="primary:#ffffff" class="w-10 h-10 mr-2" />
                              Recent Activity
                              </span>
                          </div>
                      </div>
                  </div>
                  <div class="row-span-2 col-span-2 shadow-lg shadow-gray-500 w-[350px] mt-10 overflow-y-auto rounded-md">
                      <div class="grid grid-cols-1  flex-row">
                          <div class="shadow-md h-12 flex justify-start" style="background-color: #0C4B05">
                              <span class="flex items-center text-white text-lg font-normal ml-4">
                              <lord-icon src="https://cdn.lordicon.com/lznlxwtc.json" trigger="hover" colors="primary:#ffffff" class="w-10 h-10 mr-2" />
                              Upcoming Events
                              </span>
                          </div>
                      </div>
                  </div>
                  <div class="row-span-2 col-span-2 shadow-lg shadow-gray-500 mt-5 w-[350px] overflow-y-auto rounded-md">
                      <div class="grid grid-cols-1 flex-row">
                          <div class="shadow-md h-12 flex justify-start" style="background-color: #0C4B05">
                              <span class="flex items-center text-white text-lg font-normal ml-4">
                              <lord-icon src="https://cdn.lordicon.com/xljvqlng.json" trigger="hover" colors="primary:#ffffff" class="w-10 h-10 mr-2" />
                              Tasks?
                              </span>
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

    isSidePanelOpen: true,  
    showModal: false,
    reservationCount: 0,
    facilityCount: 0,
    adminName: ''
  };
},
methods: {
  
  fetchReservationCount() {
      axios.get('/getreservationcount') // Update with your actual endpoint
        .then(response => {
          this.reservationCount = response.data.reservation_count;
        })
        .catch(error => {
          console.error('Error fetching reservation count:', error);
        });
    },
    fetchFacilityCount() {
      axios.get('/getfacilitiescount')
        .then(response => {
          this.facilityCount = response.data.facilityCount; // Update facilityCount with fetched count
        })
        .catch(error => {
          console.error('Error fetching facility count', error);
        });
    },

    getAdminName() {
      axios.get('/adminname')
        .then(response => {
          this.adminName = response.data.adminName; // Update adminName with fetched name
        })
        .catch(error => {
          console.error('Error fetching admin name', error);
        });
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
  animateCount(element, start, end, duration) {
    
  },

  logout() {
        axios.post('/logout').then(({data})=>{
          this.checkUser();
        })
      },

      checkUser(){
        axios.post('/check-user').then(({data})=>{
          if(!data){
            this.$router.push('/admin/login')
          }
        })
      }
},
mounted() {

  this.fetchReservationCount();
  this.fetchFacilityCount();
  this.getAdminName(); 

  const countElementReservations = document.getElementById('countReservations');
  const countElementFacilities = document.getElementById('countFacilities');
  const countElementPayments = document.getElementById('countPayments');

  this.animateCount(countElementReservations, 100, 0, 500);
  this.animateCount(countElementFacilities, 50, 0, 500);
  this.animateCount(countElementPayments, 100, 0, 500);

  this.checkUser();
},
// ... rest of your code
};
</script>

<style scoped>
/* Add or modify existing styles as needed */
.router-link:hover {
color: white;
background-color: #0C4B05; 
} 

.active-link {
color: white;
background-color: #0C4B05; 
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


@keyframes countAnimation {
from { transform: translateY(0); opacity: 0; }
to { transform: translateY(-20px); opacity: 1; }
}

.count-animation {
animation: countAnimation 1s ease-in-out;
}

/* Responsive Styling */
@media (max-width: 1024px) {
.lg\:hidden {
  display: none !important; /* Change to none */
}

.basis-72 {
  flex-basis: 100% !important;
}

.centered-content {
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}
}
</style>