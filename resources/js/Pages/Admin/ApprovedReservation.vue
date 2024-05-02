<template lang="">
    <div class="flex flex-row  w-full"><!--Main-->
      <aside class="sticky top-0 shadow-lg shadow-gray-500 w-80 h-screen"><!--Side Nav-->
            
            <div class="flex items-center justify-center h-14 mt-20">
           <img src="\src\mmsu-logo.png" alt="Logo" class="w-36" />
        </div>
            <div class="grid grid-cols-1 mt-20">
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
  
             <!--Updated by jhn-->
             <router-link
                  to="/admin/adminreservation"
                  class="block px-4 py-2 text-gray-800 router-link"
                  active-class="active-link"
                >
                  <span class="flex items-center">
                    <lord-icon
                      src="https://cdn.lordicon.com/omiqopzf.json"
                      trigger="hover"
                      colors="primary:#ffffff"
                      class="w-7 h-7 mr-2"
                    />
                    Reservation
                    <lord-icon
                      @click="toggleExpand"
                      v-if="!expanded"
                      src="https://cdn.lordicon.com/xcrjfuzb.json"
                      trigger="hover"
                      state="hover-arrow-down-2"
                      colors="primary:#ffffff"
                      class="w-5 h-5 ml-20"
                    />
                    <lord-icon
                      @click="toggleExpand"
                      v-if="expanded"
                      src="https://cdn.lordicon.com/ternnbni.json"
                      trigger="hover"
                      state="hover-arrow-up-2"
                      colors="primary:#ffffff"
                      class="w-5 h-5 ml-20"
                    />
                  </span>
                </router-link>
  
                <router-link
                  v-if="expanded"
                  to="/admin/approved"
                  class="px-4 py-2 text-gray-800 router-link"
                  active-class="active-link"
                >
                <span class="flex items-center ml-8">
                  <lord-icon src="https://cdn.lordicon.com/lomfljuq.json" trigger="morph"  colors="primary:#ffffff" class="w-7 h-7 mr-2" /> 
                   Approved Request
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
    
        <div class="bg-gray-100 shadow-xl h-screen w-full" style="overflow: auto"><!--Content-->
            <div class="grid grid-cols-1 flex flex-row border-b-4 border-yellow-400"><!--Sub Nav-->
                <div class="shadow-md h-20 flex justify-start" style="background-color: #0C4B05">
                    <span class="flex items-center text-white text-xl font-semibold ml-4" style="font-family: Advantage">
                        <img src="\Icons\Reservation.gif" alt="Reservation Icon" class="w-10 h-10 mr-2" />
                        Reservation
                    </span>
                </div>
            </div><!-- Sub Nav End --> 
  
            <div class="grid grid-cols-1 flex flex-row"><!--Sub Nav 1-->
                <div class="bg-shadow-gray-100 shadow-md h-12 flex justify-start items-center" style="background-color: #c0c0c0">
                    <span class="flex items-center text-black text-xl italic font-semibold" style="font-family: Advantage">
                        <img src="\src\mmsu-logo.png" alt="Logo" class="w-12 h-10 mr-2" />
                        Facility Reservation Request
                    </span>
                </div>
            </div> <!--Sub Nav End 1-->
  
  
            
  
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left rtl:text-right text-black dark:text-black">
                    <thead class="text-xs text-white uppercase bg-green-800 dark:text-white">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Facility
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Purpose
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Event Name
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Participants
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Date of Event
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Time
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Status
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Details
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class=" border-b border-green-800" v-for="reservation in approvedReservations" :key="reservation.id">
                            <th scope="row" class="px-6 py-4 font-medium text-black dark:text-black">
                                {{ reservation.facility_name }}
                            </th>
                            <td class="px-6 py-4">
                                {{ reservation.event_name }}
                            </td>
                            <td class="px-6 py-4">
                                {{ reservation.purpose }}
                            </td>
                            <td class="px-6 py-4">
                                {{ reservation.participants }}
                            </td>
                            <td class="px-6 py-4">
                                {{ reservation.eventDateFrom }} to {{ reservation.eventDateTo }}
                            </td>
                            <td class="px-6 py-4">
                                {{ reservation.startTime }} to {{ reservation.endTime }}
                            </td>
                            <td class="px-6 py-4">
                            <div
                                :class="[
                                {
                                    'bg-yellow-300': reservation && reservation.Status === 1,
                                },
                                'hover:bg-white-200',
                                'text-black',
                                'font-semibold',
                                'py-2',
                                'px-4',
                                'rounded-md'
                                ]"
                            >
                                    {{ getStatusText(reservation && reservation.Status) }}
                            </div>
                            </td>
                            <td class="px-6 py-4">
                            <button @click="openModal(reservation)" class="bg-green-800 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300">View</button>
                            </td>
                            <td class="px-6 py-4">
                            <!-- ADD THE TOTAL HERE -->
                            </td>
                        </tr>
                        </tbody>

                </table>
            </div> 
        </div><!--Content End-->
        <div>
            <reservationModal v-if="showModal" :reservation="selectedReservation" @close="closeModal"></reservationModal>

    
          <div>
        </div>
      </div>
   
  
  
       
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import reservationModal from '../ReservationModal.vue';
  // import approvedModal from '../ApprovedModal.vue';
  import Swal from 'sweetalert2';

  
  
    export default {
      components: {
        reservationModal
        //approvedModal
      },
        data() {
          return {
            expanded: true,

            reservations: [], // All reservations
            approvedReservations: [], // Separate variable for approved reservations

            isSidePanelOpen: true,
            showModal: false,
            selectedReservation: [], 
            notification: null,
            showRescheduleModal: false, 

          };
    },
    
    methods: {
  
      toggleExpand(){
        this.expanded = !this.expanded;   
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
  
    async loadApprovedReservations() {
        axios.get('/approved-reservations')
            .then(({ data }) => {
            this.approvedReservations = data; // Assign fetched data to 'approvedReservations'
            })
            .catch(error => {
            console.error('Error loading approved reservations:', error);
            });
        },
        
      showNotification(message, statusClass) {
        this.notification = { message, statusClass };
        setTimeout(() => {
          this.notification = null;
        }, 3000); // Hide the notification after 3 seconds (adjust as needed)
      },
  
  
     
        //--------------COLOR OF STATUS ------------------//
        getStatusText(status) {
      switch (status) {
        case 0:
          return 'Pending';
        case 1:
          return 'Approved';
        case 2:
          return 'Cancelled';
        case 3:
          return 'Finished';
        default:
          return 'Unknown';
      }
    },
          
  
      toggleSidePanel() {
        this.isSidePanelOpen = !this.isSidePanelOpen;
      },
      openModal(reservation) {
        this.selectedReservation = reservation;
        this.showModal = true;
      },
      closeModal() {
        this.showModal = false;
      },
    },
    computed: {
      statusClass() {
        return {
          'bg-yellow-500': this.status === 'Pending',
          'bg-green-800': this.status === 'Approved',
          'bg-red-500': this.status === 'Cancelled',
          'bg-yellow-400': this.status === 'Reschedule', 
        };
      },
    },
    mounted () {
      this.checkUser();
      this.loadApprovedReservations()
    },
  
  };
  </script>
  
  <style lang="">
  /* Add any additional styles for the modal here */
  </style>
  
  <style scoped>
  /* ... (your existing styles) */
  /* Side Navigation Hover Effect Panel */
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
  .overlay {
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.5); /* Adjust the alpha value for transparency */
    z-index: -1; /* Push the overlay behind the modal */
  }
  .notification {
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 10px;
    background-color: #4caf50; /* Green background color */
    color: rgb(0, 0, 0);
    border-radius: 5px;
    z-index: 1;
  }
  
  .notification-success {
    background-color: #4caf50; /* Green background color for success */
    color: white;
  }
  
  .notification-reschedule {
    background-color: #4caf50; /* Red background color for error */
    color: white;
  }
  
  /* Add these styles to your CSS file */
  .modal-content.reschedule-content {
    padding: 20px;
  }
  
  .reschedule-grid {
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }
  
  .reschedule-row {
    display: flex;
    align-items: center;
  }
  
  .reschedule-row label {
    font-weight: bold;
    margin-right: 10px;
  }
  
  .date-input,
  #startTimeInput,
  #endTimeInput {
    border: 1px solid #ccc;
    padding: 8px;
    border-radius: 4px;
    width: calc(100% - 90px);
  }
  
  .buttons {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
  }
  
  /* Additional styles for buttons */
  button {
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  
  </style>