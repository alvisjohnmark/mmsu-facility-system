<template>
  <div >
    <header class="bg-green-700 p-4 text-white text-center">
      <!-- Header Content -->
      <h1 class="text-xl font-bold">REQUEST FOR RESERVATION OF FACILITIES AND SERVICES</h1>
    </header>
    <div class="reservation-form"> 
      <form @submit.prevent="submitReservation">
        <!-- Step 1: Location and Event Information -->

        <div v-show="currentStep === 1">
            <h2 class="font-bold text-lg mb-4">Event Information</h2>
            <table class="shadow-md bg-white rounded-lg overflow-hidden border border-gray-300">
              <tr>
                <td>Facility Name:</td>
                <td>{{ selectedFacility ? selectedFacility.facility_name : 'No facility selected' }}</td>
              </tr>
              <tr>
                <td>Purpose of Event:</td>
                <td><input type="text" v-model="purpose" required></td>
              </tr>
              <tr>
                <td>Event Name:</td>
                <td><input type="text" v-model="event_name" required></td>
              </tr>
              <tr>
                <td>Expected Participants:</td>
                <td><input type="number" v-model="participants" required></td>
              </tr>
  <tr>
        <td>Event Date:</td>
        <td>
          <div class="date-picker">
            <input
              type="text"
              v-model="eventDateFrom"
              class="date-input"
              placeholder="Start Date"
              id="startDatePicker"
            />
            <input
              type="text"
              v-model="eventDateTo"
              class="date-input"
              placeholder="End Date"
              id="endDatePicker"
            />
          </div>
        </td>
      </tr>
              <tr>
              <td>Start Time:</td>
              <td><input type="time" v-model="startTime" @change="setTimeFormat" required></td>
              </tr>
              <tr>
                <td>End Time:</td>
                <td><input type="time" v-model="endTime" @change="setTimeFormat" required></td>
              </tr>
              
            </table>

            <p class="mt-4 text-sm text-gray-600">
              <strong>Disclaimer:</strong> For events spanning multiple days, the program schedule should maintain consistent timing throughout the duration.
            </p>


          <!-- Navigation buttons -->
                      <div class="mt-2">
                        <button @click.prevent="cancelReservation" class="mr-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">Cancel</button>
          <button @click.prevent="validateConflict" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Next</button>
                    </div>
        </div>
    
        <!-- Step 2: Services -->
        <div v-show="currentStep === 2">
          <h2 class="font-bold text-lg mb-4">Do you want to avail any of the Services? </h2>
          <h5>(Click Yes to avail)</h5>
          <br>
          <table class="shadow-md bg-white rounded-lg overflow-hidden ">
            <thead>
              <tr>
                <th>Services</th>
                <th>YES</th>
                <th>NO</th>
                <th>Quantity</th>
                <th>Remarks</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(service, index) in services" :key="service.id">
                <td>{{ service.service_name }}</td>
                <td>
                  <input type="radio" :name="'selection-' + index" value="Yes" v-model="serviceSelection[index]" @change="toggleFields(index, 'Yes')">
                </td>
                <td>
                  <input type="radio" :name="'selection-' + index" value="No" v-model="serviceSelection[index]" @change="toggleFields(index, 'No')">
                </td>
                <td v-if="serviceSelection[index] === 'Yes' && service.type !== 'audiovisual'">
                  <input type="number" v-model="quantities[index]" placeholder="Quantity">
                </td>
                <td v-else>
                  <!-- Render blank cell for No selection or audiovisual services -->
                </td>
                <td v-if="serviceSelection[index] === 'Yes' && (service.type === 'tech' || service.type === 'seating' || service.type === 'food' || service.type === 'audiovisual')">
                  <input type="text" v-model="remarks[index]" placeholder="Remarks">
                </td>

                <td v-else>
                  <!-- Render blank cell for No selection or non-audiovisual services -->
                </td>
              </tr>
            </tbody>
          </table>

          <!-- Navigation buttons -->
          <div class="mt-2">
            <button @click.prevent="prevStep" class="mr-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">Previous</button>
            <button @click.prevent="nextStep" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Next</button>
          </div>
         </div>
    
        <!-- Step 3: Contact Information -->
        <div v-show="currentStep === 3">
          <!-- Contact Information fields -->
          <h2 class="font-bold text-lg mb-4">Contact Information</h2>
          <table class="shadow-md bg-white rounded-lg overflow-hidden border border-gray-300">
              <tr>
                  <td><label for="fname">First Name:</label></td>
                  <td><input type="text" id="fname" v-model="contactInfo.fname"></td>
              </tr>
              <tr>
                  <td><label for="mname">Middle Name:</label></td>
                  <td><input type="text" id="mname" v-model="contactInfo.mname"></td>
              </tr>
              <tr>
                  <td><label for="lname">Last Name:</label></td>
                  <td><input type="text" id="lname" v-model="contactInfo.lname"></td>
              </tr>
              <tr>
                  <td><label for="address">Address:</label></td>
                  <td><input type="text" id="address" v-model="contactInfo.address"></td>
              </tr>
              <tr>
                  <td><label for="email">Email:</label></td>
                  <td><input type="email" id="email" v-model="contactInfo.email"></td>
              </tr>
              <tr>
                  <td><label for="phone">Phone:</label></td>
                  <td><input type="tel" id="phone" v-model="contactInfo.phone"></td>
              </tr>

            <tr>
              <td><label for="affiliated">MMSU Affiliated:</label></td>
              <td colspan="2">
                <div style="display: flex; align-items: center;">
                  <label for="affiliatedYes" style="margin-right: 10px; margin-left: 10px;">Yes</label>
                  <input type="radio" id="affiliatedYes" value="Yes" v-model="contactInfo.mmsu_affiliated" @change="handleAffiliatedChange">
                  <label for="affiliatedNo" style="margin-left: 15px;">No</label>
                  <input type="radio" id="affiliatedNo" value="No" v-model="contactInfo.mmsu_affiliated" @change="handleAffiliatedChange">
                </div>
              </td>
            </tr>

            <tr v-if="contactInfo.mmsu_affiliated === 'Yes'">
              <td colspan="2"><b>If you are affiliated with the university, please provide the following: </b></td>
            </tr>
            <tr v-if="contactInfo.mmsu_affiliated === 'Yes'">
              <td><label for="university_id">University ID (Student Number or Employee Number): </label></td>
              <td><input type="text" id="university_id" v-model="contactInfo.university_id"></td>
            </tr>
            <tr v-if="contactInfo.mmsu_affiliated === 'Yes'">
              <td><label for="college">College Name:</label></td>
              <td><input type="text" id="college" v-model="contactInfo.college"></td>
            </tr>
            <tr v-if="contactInfo.mmsu_affiliated === 'Yes'">
              <td><label for="department">Office or Department Name:</label></td>
              <td><input type="text" id="department" v-model="contactInfo.department"></td>
            </tr>
            <tr v-if="contactInfo.mmsu_affiliated === 'No'">
              <td><label for="officeAgency">Office/Agency:</label></td>
              <td><input type="text" id="officeAgency" v-model="contactInfo.officeAgency"></td>
            </tr>
                  
          </table>
          <!-- Navigation buttons -->
          <div class="mt-2">
            <button @click.prevent="prevStep" class="mr-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">Previous</button>
            <button @click.prevent="nextStep" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Next</button>
          </div>
        </div>
    

        <div v-show="currentStep === 4">
          <!-- Content for Step 4 -->
          <!-- Reservation Details -->
              <h2 class="font-bold text-lg mb-4">Reservation Details</h2>
                <p>Facility: {{ selectedFacility.facility_name }}</p>
                <p>Purpose: {{ purpose }}</p>
                <p>Event Date: {{ eventDateFrom }} - {{ eventDateTo }}</p>
                <p>Selected Time: {{ formatTime(startTime) }} - {{ formatTime(endTime) }}</p>
                <p>Event Name: {{ event_name }}</p>
                <p>Participants: {{ participants }}</p>
                <!-- <p>Total Price: {{ totalPrice }}</p> -->
                <p>Estimated Total Price: {{ estimatedTotal }}</p>
             <br>
              <!-- Services Availed -->
              <h2 class="font-bold text-lg mb-4">Services Availed</h2>
              
                <!-- Display services availed hereeee -->
                <ul>
                  <li v-for="(selectedService, index) in getSelectedServices()" :key="index">
                    {{ selectedService.service_name }} - <b>Quantity:</b> {{ selectedService.quantity }} |  <b>Remarks:</b> {{ selectedService.additionalRequest }}
                  </li>
                </ul>
              
              <br>        
              <!-- Contact Information -->
                <h2 class="font-bold text-lg mb-4">Contact Information</h2>
                <p>Name: {{ contactInfo.fname }} {{ contactInfo.mname }} {{ contactInfo.lname }}</p>
                <p>Address: {{ contactInfo.address }}</p>
                <p>Email: {{ contactInfo.email }}</p>
                <p>Contact Number: {{ contactInfo.phone }}</p>
                <div v-if="contactInfo.mmsu_affiliated === 'Yes'">
                  <p>University ID: {{ contactInfo.university_id }}</p>
                  <p>College Name: {{ contactInfo.college }}</p>
                  <p>Department Name: {{ contactInfo.department }}</p>
                </div>
                <div v-else-if="contactInfo.mmsu_affiliated === 'No'">
                  <p>Office/Agency: <input type="text" v-model="contactInfo.officeAgency"></p>
                </div>
                <br>

            <!-- Facility & Services Availed -->
                      <h2 class="font-bold text-lg mb-4">Facility & Services Availed</h2>

                      <!-- Facility -->
                      <p>Facility Price for Current Month: {{ currentMonthFacilityPrice }}</p>
                      

                      <br>
                      <!-- Services -->
                      <h2 class="font-bold text-lg mb-4">Services:</h2>
                      <ul>
                        <li v-for="(selectedService, index) in getSelectedServices()" :key="index">
                          {{ selectedService.service_name }} -
                          <b>Quantity:</b> {{ selectedService.quantity }} |
                          <b>Total Price:</b> {{ selectedService.total_price }}
                        </li>
                      </ul>
                      <br>
                      <p><b>Total Cost of Services Availed:</b> {{ totalCostOfServices }}</p>
                                              <!-- Disclaimer -->

                      <p class="mt-4 text-sm text-gray-600 ">
                        <strong>Disclaimer:</strong> Prices may vary. This represents the facility price and total cost of services obtained. The final total will be included in the emailed form.
                      </p>
                                                        

              <br><hr>

              <div>
                <p>By completing this form, I acknowledge that I have read and agree to the Data Privacy and Security Policy and privacy practices of Mariano Marcos State University (MMSU), 
                  including the potential transfer of my personal information to MMSU affiliates and third-party service providers for the purposes outlined in the policy.</p>
              </div>
          <!-- Navigation buttons -->

                  <div class="mt-2">
                  <button @click.prevent="prevStep" class="mr-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">Previous</button>
                  <button type="submit" class="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded">Submit</button>
                </div>
      
        </div>

      </form>
    </div>
    <!-- <Footer /> -->
  </div>
</template>

<script>

import Footer from '../Components/Footer.vue';
import Navbar from '../Components/Navbar.vue';

import axios from 'axios';
import Swal from 'sweetalert2'


export default {

  props: ['facilityId'], // Receive the facilityId as a prop

   data() {
      return {// Assign the facilityId received as a prop
          currentStep: 1,
          selectedFacility: '', //null?
          purpose: '',
          eventDateFrom: '',
          eventDateTo: '',
          startTime: '',
          endTime: '',
          event_name: '',
          participants: 0,
          currentMonthFacilityPrice: 'Not available',
          estimatedTotal: 0, //or etoy ti maisave ty estimation na haha

          isConflict: false, // Flag to track conflict status
        

          services: [], // Fetch services from the backend and populate here
          serviceSelection: [], // Tracks Yes/No selection for each service
          quantities: [], // Stores quantities for services with Yes selection
          remarks: [], // Stores remarks for services with Yes selection

          selectedServices: {}, // Initialize selectedServices as an empty object

          contactInfo: {
              fname: '',
              mname: '',
              lname: '',
              address: '',
              email: '',
              phone: '',
              mmsu_affiliated: '',
              college: '',
              department: '',
              university_id: '',
              officeAgency:''
      }

      };
    },
 
  methods: {
           
//-------------------------------------------------------------------------------------//
//-------------------------------------------------------------------------------------//



          async validateConflict() {
            if (!this.eventDateFrom || !this.eventDateTo || !this.startTime || !this.endTime) {
              Swal.fire({
                  title: "Oops!",
                  text: "Please Select Time & Date",
                  icon: "warning"
                });
              return;
            }

            try {
              const response = await axios.get('/check-conflict', {
                params: {
                  eventDateFrom: this.eventDateFrom,
                  eventDateTo: this.eventDateTo,
                  startTime: this.startTime,
                  endTime: this.endTime,
                },
              });

              if (response.data.hasConflict) {
                Swal.fire({
                  title: "Oops! There's a Conflict!",
                  text: "Please choose a different time slot.",
                  icon: "warning"
                });
              } else {
                this.nextStep();
              }
            } catch (error) {
              console.error('Error checking conflict:', error);
            }
          },


            handleAffiliatedChange() {
              if (this.contactInfo.mmsu_affiliated === 'No') {
                  // Reset affiliated fields to empty or null
                  this.contactInfo.university_id = '';
                  this.contactInfo.college = '';
                  this.contactInfo.department = '';
                  this.contactInfo.officeAgency = ''; // Reset office/agency field when 'No' is selected
                } else {
                  // Reset the office/agency field when changing from 'No' to 'Yes'
                  this.contactInfo.officeAgency = '';
                }
              },

            cancelReservation() {
            // Redirect to /facilities when canceled
            this.$router.push('/facilities');
            },
                    
            nextStep() {
            if (this.currentStep < 4) {
                this.currentStep++;
            }
            },
            prevStep() {
            if (this.currentStep > 1) {
                this.currentStep--;
            }
            },

                // Function to format time to AM/PM
                formatTime(time) {
                      if (!time) return ''; // Return empty string if time is not set
                      const [hours, minutes] = time.split(':');
                      let formattedTime = '';
                      let suffix = '';

                      if (parseInt(hours) < 12) {
                        suffix = 'AM';
                        formattedTime = `${hours}:${minutes}`;
                      } else {
                        suffix = 'PM';
                        formattedTime = `${parseInt(hours) - 12}:${minutes}`;
                      }

                      return `${formattedTime.padStart(2, '0')} ${suffix}`;
                  },

//---------------------------------------------------------------------------------------------------------------------------------//

     async submitReservation() {
              
              const selectedServices = this.services.filter((service, index) => this.serviceSelection[index]);
              // Transform 'Yes' to 1 and 'No' to 0
             
              try{
                     const clientData = {
                          fname: this.contactInfo.fname,
                          mname: this.contactInfo.mname,
                          lname: this.contactInfo.lname,
                          address: this.contactInfo.address,
                          email: this.contactInfo.email,
                          phone: this.contactInfo.phone,
                          mmsu_affiliated: this.contactInfo.mmsu_affiliated === 'Yes' ? 1 : 0,
                          university_id: this.contactInfo.university_id,
                          college: this.contactInfo.college,
                          department: this.contactInfo.department,
                          officeAgency:this.contactInfo.officeAgency,
                      };

                      const clientResponse = await axios.post('/save-client', clientData);
                          const reservationData = {
                              facilityId: this.facilityId,
                              purpose: this.purpose,
                              eventDateFrom: this.eventDateFrom,
                              eventDateTo: this.eventDateTo,
                              startTime: this.startTime,
                              endTime: this.endTime,
                              event_name: this.event_name,
                              participants: this.participants,
                              totalPrice: this.totalPrice,
                              };

                              const reservationResponse = await axios.post('/save-reservation', reservationData);

                                // Prepare services availed data dynamically
                              const servicesAvailedData = selectedServices.map((service, index) => {
                                const quantity = this.quantities[index] || null;
                                  const remarks = this.remarks[index] || null;

                                  return {
                                        service_id: service.id,
                                        chosen: this.serviceSelection[index],
                                        quantity,
                                        additionalRequest: remarks,
                                        total_price: service.fee * (quantity || 1), // Compute total price based on fee and quantity
                                      };
                                    });

                                    // Save services availed information
                                const servicesResponse = await axios.post('/save-services-availed', { services: servicesAvailedData });

                                    console.log('All data saved successfully');
                                    this.$router.push({ name: 'thank-you' }); // Replace 'thank-you' with your route name
                                  } catch (error) {
                                    console.error('Error saving reservation data:', error);
                                    // Handle errors here
                                  }
                      },

//-------------------------------------------------------------------------------------------------------------------------//
                              toggleFields(index, value) {
                                  // Reset quantities and remarks when changing selection
                                  if (value === 'No') {
                                    this.quantities[index] = null;
                                    this.remarks[index] = null;
                                  }
                                },
                                // Fetch services from the backend using a method like fetchServices() in your component
                                async fetchServices() {
                                  try {
                                    const response = await axios.get('/services'); // Replace with your endpoint
                                    this.services = response.data;
                                    this.initializeSelection(); // Initialize selection arrays based on service count
                                  } catch (error) {
                                    console.error('Error fetching services:', error);
                                  }
                                },
                                initializeSelection() {
                                  // Initialize selection arrays based on the number of services fetched
                                  this.serviceSelection = new Array(this.services.length).fill('No');
                                  this.quantities = new Array(this.services.length).fill(null);
                                  this.remarks = new Array(this.services.length).fill(null);
                                },

                                getSelectedServices() {
                                  const selectedServices = [];
                                  this.services.forEach((service, index) => {
                                    if (this.serviceSelection[index] === 'Yes') {
                                      const quantity = this.quantities[index] !== null ? this.quantities[index] : 'None';
                                      const tempRemarks = this.remarks[index] !== null ? this.remarks[index] : '';
                                      
                                      // Check if remarks were an empty string (typed and then erased)
                                      const remarks = tempRemarks.trim() === '' ? 'None' : tempRemarks;
                                      
                                      selectedServices.push({
                                        service_name: service.service_name,
                                        chosen: this.serviceSelection[index],
                                        quantity,
                                        additionalRequest: remarks,
                                        total_price: service.fee * (quantity !== 'None' ? quantity : 1),
                                      });
                                    }
                                  });
                                  return selectedServices;
                                },
   



 //--------------------------------------------------------------------------------------------------------------------------------------//                             
            //for the name of the facility (displayed sa may form)
        selectFacility(facility) {
            this.selectedFacility = facility;
            },
                    async fetchFacilityDetails() {
                        try {
                            const response = await axios.get(`/list-facilities/${this.facilityId}`);
                            console.log(response.data); // Log the response to the console
                            this.selectedFacility = response.data;

                            // Fetch pricing details for the selected facility
                          const facilityId = this.selectedFacility.id; // Assuming selectedFacility has an 'id' property
                          const pricingResponse = await axios.get(`/facility-pricing/${facilityId}`);
                          console.log(pricingResponse.data); // Log the pricing details to the console
                          this.facilityPrices = pricingResponse.data;
                        } catch (error) {
                            console.error('Error fetching facility details:', error);
                        }
                    },


                    formatDate(date) {
                  const year = date.getFullYear();
                  const month = String(date.getMonth() + 1).padStart(2, "0");
                  const day = String(date.getDate()).padStart(2, "0");
                  return `${year}-${month}-${day}`;
                },
                          },

                        created() {
                            this.fetchFacilityDetails();
                            this.fetchServices();
                            },


     async mounted() {
        this.fetchFacilityDetails();
          this.fetchServices();

              const self = this;

                 // Get today's date
                  const today = new Date();

                  // Initialize Flatpickr for start date picker
                            const startDatePicker = flatpickr("#startDatePicker", {
                              dateFormat: "Y-m-d", // Customize date format as needed
                              minDate: today, // Set minimum date as today
                              onClose: selectedDates => {
                                self.eventDateFrom = self.formatDate(selectedDates[0]);
                                endDatePicker.set("minDate", selectedDates[0]); // Set minimum date for the end date picker
                              },
                              onChange: selectedDates => {
                                if (selectedDates.length > 0) {
                                  endDatePicker.set("minDate", selectedDates[0]);
                                }
                              },
                            });

                            // Initialize Flatpickr for end date picker
                            const endDatePicker = flatpickr("#endDatePicker", {
                              dateFormat: "Y-m-d", // Customize date format as needed
                              minDate: today, // Set minimum date as today
                              onClose: selectedDates => {
                                self.eventDateTo = self.formatDate(selectedDates[0]);
                              },
                            });

                // Fetch facility prices...
                  try {
                    const response = await axios.get(`/facility-pricing/${this.facilityId}`);
                    const facilityPrices = response.data; // Assuming this is your fetched facility prices array

                    const currentDate = new Date();
                    const currentMonth = currentDate.getMonth() + 1; // Current month, considering January is 0

                    // Find the facility price for the current month
                    const currentFacilityPrice = facilityPrices.find(
                      price => currentMonth >= price.monthFrom && currentMonth <= price.monthTo
                    );

                    if (currentFacilityPrice) {
                      this.currentMonthFacilityPrice = currentFacilityPrice.amount;
                    }
                  } catch (error) {
                    console.error('Error fetching facility details:', error);
                  }

          },

              computed: {
                totalCostOfServices() {
                  // Calculate totalCostOfServices based on other data properties
                  // e sum na lang dagity naiavail ta price HAHAHA 
                  return this.getSelectedServices().reduce((total, service) => total + service.total_price, 0);
                },
            },


}

</script>

<style scoped>

.reservation-form {
      max-width: 600px; /* Adjust the width as needed */
      margin: auto; /* Center the form horizontally */
      padding: 20px; /* Add padding for better appearance */
    }

    table {
      width: 100%;
      border-collapse: collapse;
    }

    td {
      padding: 10px;
      border: 1px solid #ddd;
    }

    input {
      width: 100%;
      padding: 8px;
      box-sizing: border-box;
    }

    button {
      padding: 10px;
      margin-top: 10px;
      cursor: pointer;
    }

    .date-picker {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.date-input {
  width: calc(50% - 10px); /* Adjust width as needed */
  padding: 8px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px; /* Adjust font size as needed */
  outline: none;
}

/* Additional styles for the custom date picker */
.date-picker-calendar {
  position: absolute;
  z-index: 1000;
  background-color: white;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
}

.date-picker-calendar.show {
  display: block;
}
    
</style>