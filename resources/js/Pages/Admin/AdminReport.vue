<template lang="">
    <div class="flex flex-row w-full"><!--Main-->
        <aside class="sticky top-0 shadow-lg shadow-gray-500 w-80 h-screen"><!--Side Nav-->
            
            <div class="flex items-center justify-center h-14 mt-20 ">
              <img src="/src/mmsu-logo.png" alt="Logo" class="w-36" />
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

        
            <div class="bg-gray-100 shadow-xl h-screen w-full" style="overflow: auto">
            <div class="grid grid-cols-1 flex flex-row border-b-4 border-yellow-400"><!--Sub Nav-->
                <div class="shadow-md h-20 flex justify-start" style="background-color: #0C4B05">
                    <span class="flex items-center text-white text-xl font-semibold ml-4"  style="font-family: Advantage">
                        <img src="\Icons\Report.gif" alt="Report Icon"  class="w-10 h-10 mr-2" />
                        Report
                    </span>
                </div>
            </div> <!--Sub Nav End-->   

          
    <!--Form!-->
    <form class="shadow-lg m-5 bg-white rounded-lg space-y-1 overflow-auto">
              <div class="flex justify-end">
                <div class="flex flex-row">
                    <div class="basis-8 ml-56 mt-10">
                        <p class="text-sm font-semibold text-justify">Date:</p>
                    </div>
                    <div class="basis-4/5 mt-9 mr-28">
                         <input type="text" id="fname" name="fname" class="border-b-2 border-black">
                    </div>  
                </div>
              </div>

              <div class="mt-5 flex justify-center">
                <p class="text-md font-bold mt-5">REQUEST FOR RESERVATION OF FACILITIES AND SERVICES</p>
              </div>
                <!--AAAAAAAAAA-->
              <div class="flex flex-row">
                <div class="basis-8 ml-56 mt-10">
                    <p class="text-sm font-semibold text-justify">A.</p>
                </div>
                <div class="basis-4/5 mt-10">
                    <p class="text-sm font-semibold text-justify underline">Instruction and Conditions:</p>
                </div>  
              </div>

              <div class="flex flex-row">
                <div class="basis-8 ml-72 mt-4">
                    <p class="text-sm font-semibold text-justify">1.</p>
                </div>
                <div class="basis-4/5 mt-4">
                    <p class="text-sm font-semibold text-justify">This form is available for free at the office of the BUSINESS DOCTORATE.</p>
                </div>  
              </div>

              <div class="flex flex-row">
                <div class="basis-8 ml-72">
                        <p class="text-sm font-semibold text-justify">2.</p>
                </div>
                <div class="basis-1/2">
                        <p class="text-sm font-semibold text-justify">The requesting party must fill up all required information called for and submit it to the Business Affairs Directorate.</p>
                </div>
              </div>

              <div class="flex flex-row">
                <div class="basis-8 ml-72">
                        <p class="text-sm font-semibold text-justify">3.</p>
                </div>
                <div class="basis-1/2">
                        <p class="text-sm font-semibold text-justify">The Business Directorate chall verify the information furnished by the requesting party. If there is no conflict on the use of the facilities and/or services on the schedule time, the request shall be endorsed to the University President.</p>
                </div>
              </div>

              <div class="flex flex-row">
                <div class="basis-8 ml-72">
                        <p class="text-sm font-semibold text-justify">4.</p>
                </div>
                <div class="basis-1/2">
                        <p class="text-sm font-semibold text-justify">The Business Directorate shall inform the requesting party of the action of the University President.</p>
                </div>
              </div>

              <div class="flex flex-row">
                <div class="basis-8 ml-72">
                        <p class="text-sm font-semibold text-justify">5.</p>
                </div>
                <div class="basis-1/2">
                        <p class="text-sm font-semibold text-justify">If the request is approved, the requesting party shall pay to the Cashier's Office the amount of the total rental fee at least seven(7) days before the scheduled occasion. The rates are printed at the back of this form. The rates, however, are subject to change without prior notice. Information as to existing rates can be obtained from the Businness Directorate.</p>
                </div>
              </div>

              <div class="flex flex-row">
                <div class="basis-8 ml-72">
                        <p class="text-sm font-semibold text-justify">6.</p>
                </div>
                <div class="basis-1/2">
                        <p class="text-sm font-semibold text-justify">Upon payment, the Official Receipt shal be presented to the guard on duty/caretaker/janitor of the facilities requested.</p>
                </div>
              </div>

              <div class="flex flex-row">
                <div class="basis-8 ml-72">
                        <p class="text-sm font-semibold text-justify">7.</p>
                </div>
                <div class="basis-1/2">
                        <p class="text-sm font-semibold text-justify">The requesting party shall, in additon, pay the cost of damages of facilities due to carelessness or lack of required diligence by the requesting party or any ither of his/her guest.</p>
                </div>
              </div>

              <div class="flex flex-row">
                <div class="basis-8 ml-72">
                        <p class="text-sm font-semibold text-justify">8.</p>
                </div>
                <div class="basis-1/2">
                        <p class="text-sm font-semibold text-justify">Moreover, the requesting party shall pay overtime salaries of the technicians and janitors when the activity is held during a non-working day or beyond office hours.</p>
                </div>
              </div>
              <!--AAAAAAAAAA-->

              <!--BBBBBBBBBB-->
              <div class="flex flex-row">
                <div class="basis-8 ml-56 mt-5">
                    <p class="text-sm font-semibold text-justify">B.</p>
                </div>
                <div class="basis-4/5 mt-5">
                    <p class="text-sm font-semibold text-justify underline">Type of Facilities/Services Requested: (Please check approriate box/boxes)</p>
                </div>  
              </div>
              
              <div class="flex flex-row">
                <div class="basis-8 ml-56 mt-4">
                    <p><input type="checkbox" id="" name="" value=""></p>
                </div>
                <div class="basis-64 mt-4">
                    <p class="text-sm font-semibold text-justify">Teatro Ilocandia Hall</p>
                </div>
                <div class="basis-20 mt-4">
                    <input type="text" id="hall" name="pin" maxlength="4" size="4" class="border-b-2 border-black"> 
                </div>
                <div class="basis-8 ml-16 mt-4">
                    <p><input type="checkbox" id="" name="" value=""></p>
                </div>
                <div class="basis-64 mt-4">
                    <p class="text-sm font-semibold text-justify">Tables (state number)</p>
                </div>
                <div class="basis-8 ml-1 mt-4">
                    <input type="text" id="tables" name="tables" maxlength="4" size="4" class="border-b-2 border-black">
                </div>
              </div>

              <div class="flex flex-row">
                <div class="basis-8 ml-56">
                    <p><input type="checkbox" id="" name="" value=""></p>
                </div>
                <div class="basis-64">
                    <p class="text-sm font-semibold text-justify">Teatro Ilocandia Basement</p>
                </div>
                <div class="basis-20">
                    <input type="text" id="base" name="base" maxlength="4" size="4" class="border-b-2 border-black"> 
                </div>
                <div class="basis-8 ml-16">
                    <p><input type="checkbox" id="" name="" value=""></p>
                </div>
                <div class="basis-64">
                    <p class="text-sm font-semibold text-justify">Sound System</p>
                </div>
                <div class="basis-8 ml-1">
                    <input type="text" id="tables" name="tables" maxlength="4" size="4" class="border-b-2 border-black">
                </div>
              </div>

              <div class="flex flex-row">
                <div class="basis-8 ml-56">
                    <p><input type="checkbox" id="" name="" value=""></p>
                </div>
                <div class="basis-64">
                    <p class="text-sm font-semibold text-justify">Univ. Review Board Center (URC)</p>
                </div>
                <div class="basis-20">
                    <input type="text" id="base" name="base" maxlength="4" size="4" class="border-b-2 border-black"> 
                </div>
                <div class="basis-8 ml-16">
                    <p><input type="checkbox" id="" name="" value=""></p>
                </div>
                <div class="basis-64">
                    <p class="text-sm font-semibold text-justify">Others: Please sepcify</p>
                </div>
              </div>

              <div class="flex flex-row">
                <div class="basis-8 ml-56">
                    <p><input type="checkbox" id="" name="" value=""></p>
                </div>
                <div class="basis-64">
                    <p class="text-sm font-semibold text-justify">Sunken Garden</p>
                </div>
                <div class="basis-20">
                    <input type="text" id="base" name="base" maxlength="4" size="4" class="border-b-2 border-black"> 
                </div>
                <div class="basis-64 ml-24">
                  <input type="text" id="base" name="base" maxlength="18" size="15" class="border-b-2 border-black"> 
                </div>
                <div class="basis-8 ml-1">
                    <input type="text" id="tables" name="tables" maxlength="4" size="4" class="border-b-2 border-black">
                </div>
              </div>

              <div class="flex flex-row">
                <div class="basis-8 ml-56">
                    <p><input type="checkbox" id="" name="" value=""></p>
                </div>
                <div class="basis-64">
                    <p class="text-sm font-semibold text-justify">Hotel Mess Hall</p>
                </div>
                <div class="basis-20">
                    <input type="text" id="base" name="base" maxlength="4" size="4" class="border-b-2 border-black"> 
                </div>
                <div class="basis-64 ml-24">
                  <input type="text" id="base" name="base" maxlength="18" size="15" class="border-b-2 border-black"> 
                </div>
                <div class="basis-8 ml-1">
                    <input type="text" id="tables" name="tables" maxlength="4" size="4" class="border-b-2 border-black">
                </div>
              </div>

              <div class="flex flex-row relative"> <!-- Use relative positioning -->
                  <div class="basis-8 ml-56">
                      <p><input type="checkbox" id="" name="" value=""></p>
                  </div>
                  <div class="basis-64 relative"> <!-- Use relative positioning -->
                      <p class="text-sm font-semibold text-justify">Athletic Facilities</p>
                      <div class="absolute top-0 left-96 mt-4"> <!-- Absolute positioning to overlay the border box -->
                          <div class="border-2 border-black w-96 h-48 flex items-start justify-start">
                            <div class="basis-32 ml-32 mt-6">
                              <input type="text" id="tables" name="tables" maxlength="15" size="15" class="border-b-2 border-black">
                            </div>
                            <div class="absolute top-0 left-1.4 basis-32 ml-32 mt-14">
                              <input type="text" id="tables" name="tables" maxlength="15" size="15" class="border-b-2 border-black">
                            </div>
                            <div class="absolute top-0 left-24 mt-32">
                              <input type="text" id="tables" name="tables" maxlength="22" size="22" class="border-b-2 border-black">
                            </div>
                            <div class="absolute top-0 left-24 mt-40">
                              <div class="w-52">
                                <p class="text-sm font-semibold text-justify">(Signature over Printed Name)</p>
                              </div>
                            </div>
                          </div>
                      </div>
                  </div>  
                  <div class="basis-20 mt-2">
                      <input type="text" id="base" name="base" maxlength="4" size="4" class="border-b-2 border-black"> 
                  </div>
              </div>
                

              <div class="flex flex-row">
                <div class="basis-8 ml-56">
                    <p><input type="checkbox" id="" name="" value=""></p>
                </div>
                <div class="basis-64">
                    <p class="text-sm font-semibold text-justify">Covered Court</p>
                </div>
                <div class="basis-20">
                    <input type="text" id="base" name="base" maxlength="4" size="4" class="border-b-2 border-black"> 
                </div>
                <div class="basis-32 ml-16 mt-3">
                    <p class="text-sm font-semibold text-justify">Total Assessment:</p>
                </div>
              </div>

              <div class="flex flex-row">
                <div class="basis-8 ml-56">
                    <p><input type="checkbox" id="" name="" value=""></p>
                </div>
                <div class="basis-64">
                    <p class="text-sm font-semibold text-justify">Univ. Function Hall (UFH)</p>
                </div>
                <div class="basis-20">
                    <input type="text" id="base" name="base" maxlength="4" size="4" class="border-b-2 border-black"> 
                </div>
                <div class="basis-32 ml-16 mt-2">
                    <p class="text-sm font-semibold text-justify">Required Deposit:</p>
                </div>
              </div>

              <div class="flex flex-row">
                <div class="basis-8 ml-56">
                    <p><input type="checkbox" id="" name="" value=""></p>
                </div>
                <div class="basis-64">
                    <p class="text-sm font-semibold text-justify">Mansion</p>
                </div>
                <div class="basis-20">
                    <input type="text" id="base" name="base" maxlength="4" size="4" class="border-b-2 border-black"> 
                </div>
              </div>

              <div class="flex flex-row">
                <div class="basis-8 ml-56">
                    <p><input type="checkbox" id="" name="" value=""></p>
                </div>
                <div class="basis-64">
                    <p class="text-sm font-semibold text-justify">Chairs (state number)</p>
                </div>
                <div class="basis-20">
                    <input type="text" id="base" name="base" maxlength="4" size="4" class="border-b-2 border-black"> 
                </div>
                <div class="basis-32 ml-16 mt-4">
                    <p class="text-sm font-semibold text-justify">Assessed by:</p>
                </div>
              </div>
              <!--BBBBBBBBBB-->

              <!--CCCCCCCCCC-->
              <div class="flex flex-row">
                <div class="basis-8 ml-56 mt-11">
                    <p class="text-sm font-semibold text-justify">C.</p>
                </div>
                <div class="basis-4/5 mt-11">
                    <p class="text-sm font-semibold text-justify underline">Purpose for which the facility/service is requested:</p>
                </div>  
              </div>

              <div class="flex flex-row">
                <div class="basis-64 ml-64">
                  <input type="text" id="base" name="base" maxlength="89" size="100" class="border-b-2 border-black">
                </div>
              </div>

              <div class="flex flex-row">
                <div class="basis-64 ml-64">
                  <input type="text" id="base" name="base" maxlength="89" size="100" class="border-b-2 border-black">
                </div>
              </div>

              <div class="flex flex-row">
                <div class="basis-28 ml-56 mt-3">
                    <p class="text-sm font-semibold text-justify">Date and Time:</p>
                </div>
                <div class="basis-4/5 mt-1 mr-5">
                  <input type="text" id="base" name="base" maxlength="20" size="80" class="border-b-2 border-black">
                </div>  
              </div>


              <div class="flex flex-row">
                <div class="basis-7/12 ml-56 mt-3">
                    <p class="text-sm font-semibold text-justify">CONFORME: (The signature of the requesting party shall be conclusively presumed that he/she understand all the terms and condition hereby set forth and binds himself/herself there to if approved by the University President)</p>
                </div>
              </div>

              <div class="flex flex-row">
                <div class="basis-1/4  ml-56 mt-12">
                  <input type="text" id="base" name="base" maxlength="30" size="30" class="border-b-2 border-black">
                </div>
                <div class="basis-28 ml-20 mt-14">
                    <p class="text-sm font-semibold text-justify">APPROVED:</p>
                </div>
              </div>

              <div class="flex flex-row">
                  <div class="basis-32 ml-72 mt-1">
                    <p class="text-sm font-semibold text-justify">(Requesting Party)</p>
                  </div>    
              </div>

                <div class="flex flex-row">
                    <div class="basis-14 ml-56 mt-2">
                        <p class="text-sm font-semibold text-justify">Address:</p>
                    </div>
                    <div class="basis-4/5 mr-31">
                      <input type="text" id="base" name="base" maxlength="16" size="15" class="border-b-2 border-black">
                    </div>  
                </div>

                <div class="flex flex-row">
                  <div class="basis-48 ml-56 mt-2">
                      <p class="text-sm font-semibold text-justify">Tell. No./Cell. No.:</p>
                  </div>
                  <div class="basis-1/4">
                    <input type="text" id="base" name="base" maxlength="11" size="11" class="border-b-2 border-black">
                  </div> 
                  <div class="basis-4/5 ml-40">
                      <p class="text-sm font-bold text-justify">SHIRLEY C. AGRUPIS</p> 
                      <div class="flex flex-row ml-9">
                          <div class="basis-8">
                              <p class="text-sm font-semibold text-justify mr-16">President</p>
                          </div>    
                      </div>
                  </div>
               </div>

               <div class="flex flex-row">
                <div class="basis-11/12 ml-56 mt-3">
                    <p class="text-sm  font-bold text-justify">NOTE: Preparation time allowed is one(1) hour before reserved time.</p>
                </div>
              </div>

              <div class="flex flex-row justify-end mr-72">
                <div class="basis-96 ml-56 mt-3 border-2 border-black text-center">
                    <p class="text-xs font-semibold italic text-justify mr-3 ml-3">Disclaimer: Reproduction of this form is allowed subject to compliance to the Control Of Document Information Procedure established by MMSU</p>
                </div>
              </div>

              
              <!--CCCCCCCCCC-->

            </form>


        </div><!--Content End-->
    </div>
    


    
</template>
<script>
export default {
    data() {
    return {

      isSidePanelOpen: true,
      showModal: false,

    };
  },
  methods: {
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
      }

},
mounted() {
      this.checkUser();
    
    },
    
};
    
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


    
</style>