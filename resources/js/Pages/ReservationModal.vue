<template lang="">
    <div>
        <!-- Modal -->
<div class="fixed inset-0 z-50 flex items-center justify-center">
    <div class="overlay"></div>
    <div class="bg-gray-200 rounded-md shadow-lg">
        <!-- Modal content goes here -->
        <div class="flex justify-end">
            <lord-icon src="https://cdn.lordicon.com/zxvuvcnc.json" trigger="hover" colors="primary:#0c4b05"
                @click="closeModal"
                class="w-8 h-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300 rounded-md">
            </lord-icon>
        </div>
        <!-- Content Section -->
        <div class="justify-center gap-14 m-5 text-lg font-semibold" style="font-family: Calibri">
            <div class="justify-between grid grid-cols-2 gap-4 w-full">
                <!-- Reservation Details -->
                <div class="bg-emerald-800 rounded-lg w-full h-full text-white p-2">
                  <div>Facility: {{reservation.reservation_details.facility_name}}</div>
                    <div>Event Name: {{reservation.reservation_details.event_name}}</div>
                    <div>Purpose: {{reservation.reservation_details.purpose}}</div>
                    <div>Participants: {{reservation.reservation_details.participants}}</div>
                    <div>Event Date: {{reservation.reservation_details.eventDateFrom}} to {{reservation.reservation_details.eventDateTo}}</div>
                    <div>Start Time: {{reservation.reservation_details.startTime}}</div>
                    <div>End Time: {{reservation.reservation_details.endTime}}</div>
                </div>
                <!-- Contact Information -->
                <div class="bg-emerald-800 rounded-lg w-full h-full text-white p-2">
                    <div>Name: {{ reservation.reservation_details.fname }} {{ reservation.reservation_details.mname }} {{ reservation.reservation_details.lname }}</div>
                    <div>Email: {{ reservation.reservation_details.email }}</div>
                    <div>Phone: {{ reservation.reservation_details.phone }}</div>
                    <div v-if="reservation.reservation_details.mmsu_affiliated === 1">
                        MMSU Affiliated: Yes
                        <div v-if="reservation.reservation_details.university_id !== null">Univ_id: {{ reservation.reservation_details.university_id }}</div>
                        <div v-if="reservation.reservation_details.college !== null">College: {{ reservation.reservation_details.college }}</div>
                        <div v-if="reservation.reservation_details.department !== null">Department: {{ reservation.reservation_details.department }}</div>
                    </div>
                    <div v-else>
                        MMSU Affiliated: No
                        <div v-if="reservation.reservation_details.officeAgency !== null">Office/Agency: {{ reservation.reservation_details.officeAgency }}</div>
                    </div>
                </div>
                <!-- Services Details -->
                <div class="col-span-2 bg-emerald-800 rounded-lg w-full h-full text-white p-2" v-for="reservation in reservation.services_details">
                    <div>Service Name: {{ reservation.service_name }}</div>
                    <div v-if="reservation.quantity !== null">Quantity: {{ reservation.quantity }}</div>
                    <div v-if="reservation.remarks !== null">Remarks: {{ reservation.remarks }}</div>
                    <div>Total: {{ reservation.total_prices }}</div>
                </div>

                <!-- Add more fields as needed -->
            </div>
        </div>
        <!-- Content End -->
    </div>
</div>
<!-- Modal End -->

    </div>
</template>
<script>
export default {
  props: {
    reservation: {
      type: Object,
      default: null
    }
  },
    data() {
      return {
        
      }
    },
  methods: {
    closeModal(){
      this.$emit('close');
    }
  }

}
</script>


<style lang="">
    
</style>