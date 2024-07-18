import { defineStore } from "pinia";
import Swal from "sweetalert2";

export const reserveStore = defineStore("reserveStore", {
    state: () => {
        return {
            facilityId: ["facilityId"],
            currentStep: 1,
            selectedFacility: "", //null?
            purpose: "",
            eventDateFrom: "",
            eventDateTo: "",
            startTime: "",
            endTime: "",
            event_name: "",
            participants: 0,
            totalPrice: 0,
            reservation_status: 0,
            currentMonthFacilityPrice: "Not available",
            estimatedTotal: 0, //or etoy ti maisave ty estimation na haha

            isConflict: false, // Flag to track conflict status

            services: [], // Fetch services from the backend and populate here
            serviceSelection: [], // Tracks Yes/No selection for each service
            quantities: [], // Stores quantities for services with Yes selection
            remarks: [], // Stores remarks for services with Yes selection

            selectedServices: {}, // Initialize selectedServices as an empty object

            contactInfo: {
                fname: "",
                mname: "",
                lname: "",
                address: "",
                email: "",
                phone: "",
                mmsu_affiliated: "",
                college: "",
                department: "",
                university_id: "",
                officeAgency: "",
            },
        };
    },
    actions: {
        async validateConflict() {
            if (
                !this.eventDateFrom ||
                !this.eventDateTo ||
                !this.startTime ||
                !this.endTime
            ) {
                Swal.fire({
                    title: "Oops!",
                    text: "Please Select Time & Date",
                    icon: "warning",
                });
                return;
            }

            try {
                const response = await axios.get("/check-conflict", {
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
                        icon: "warning",
                    });
                } else {
                    this.nextStep();
                }
            } catch (error) {
                console.error("Error checking conflict:", error);
            }
        },

        handleAffiliatedChange() {
            if (this.contactInfo.mmsu_affiliated === "No") {
                // Reset affiliated fields to empty or null
                this.contactInfo.university_id = "";
                this.contactInfo.college = "";
                this.contactInfo.department = "";
                this.contactInfo.officeAgency = ""; // Reset office/agency field when 'No' is selected
            } else {
                // Reset the office/agency field when changing from 'No' to 'Yes'
                this.contactInfo.officeAgency = "";
            }
        },

        cancelReservation() {
            // Redirect to /facilities when canceled
            this.$router.push("/facilities");
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
            if (!time) return ""; // Return empty string if time is not set
            const [hours, minutes] = time.split(":");
            let formattedTime = "";
            let suffix = "";

            if (parseInt(hours) < 12) {
                suffix = "AM";
                formattedTime = `${hours}:${minutes}`;
            } else {
                suffix = "PM";
                formattedTime = `${parseInt(hours) - 12}:${minutes}`;
            }

            return `${formattedTime.padStart(2, "0")} ${suffix}`;
        },

        //---------------------------------------------------------------------------------------------------------------------------------//

        async submitReservation() {
            const selectedServices = this.services.filter(
                (service, index) => this.serviceSelection[index]
            );
            // Transform 'Yes' to 1 and 'No' to 0

            try {
                const clientData = {
                    fname: this.contactInfo.fname,
                    mname: this.contactInfo.mname,
                    lname: this.contactInfo.lname,
                    address: this.contactInfo.address,
                    email: this.contactInfo.email,
                    phone: this.contactInfo.phone,
                    mmsu_affiliated:
                        this.contactInfo.mmsu_affiliated === "Yes" ? 1 : 0,
                    university_id: this.contactInfo.university_id,
                    college: this.contactInfo.college,
                    department: this.contactInfo.department,
                    officeAgency: this.contactInfo.officeAgency,
                };

                const clientResponse = await axios.post(
                    "/save-client",
                    clientData
                );
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
                    reservation_status: this.reservation_status,
                    // estimatedTotal: this.estimatedTotal
                };

                const reservationResponse = await axios.post(
                    "/save-reservation",
                    reservationData
                );

                // Prepare services availed data dynamically
                const servicesAvailedData = selectedServices.map(
                    (service, index) => {
                        const quantity = this.quantities[index] || null;
                        const remarks = this.remarks[index] || null;

                        return {
                            service_id: service.id,
                            chosen: this.serviceSelection[index],
                            quantity,
                            additionalRequest: remarks,
                            total_price: service.fee * (quantity || 1), // Compute total price based on fee and quantity
                        };
                    }
                );

                // Save services availed information
                const servicesResponse = await axios.post(
                    "/save-services-availed",
                    { services: servicesAvailedData }
                );

                console.log("All data saved successfully");
                this.$router.push({ name: "thank-you" }); // Replace 'thank-you' with your route name
            } catch (error) {
                console.error("Error saving reservation data:", error);
                // Handle errors here
            }
        },

        //-------------------------------------------------------------------------------------------------------------------------//
        toggleFields(index, value) {
            // Reset quantities and remarks when changing selection
            if (value === "No") {
                this.quantities[index] = null;
                this.remarks[index] = null;
            }
        },
        // Fetch services from the backend using a method like fetchServices() in your component
        async fetchServices() {
            try {
                const response = await axios.get("/services"); // Replace with your endpoint
                this.services = response.data;
                this.initializeSelection(); // Initialize selection arrays based on service count
            } catch (error) {
                console.error("Error fetching services:", error);
            }
        },
        initializeSelection() {
            // Initialize selection arrays based on the number of services fetched
            this.serviceSelection = new Array(this.services.length).fill("No");
            this.quantities = new Array(this.services.length).fill(null);
            this.remarks = new Array(this.services.length).fill(null);
        },

        getSelectedServices() {
            const selectedServices = [];
            this.services.forEach((service, index) => {
                if (this.serviceSelection[index] === "Yes") {
                    const quantity =
                        this.quantities[index] !== null
                            ? this.quantities[index]
                            : "None";
                    const tempRemarks =
                        this.remarks[index] !== null ? this.remarks[index] : "";

                    // Check if remarks were an empty string (typed and then erased)
                    const remarks =
                        tempRemarks.trim() === "" ? "None" : tempRemarks;

                    selectedServices.push({
                        service_name: service.service_name,
                        chosen: this.serviceSelection[index],
                        quantity,
                        additionalRequest: remarks,
                        total_price:
                            service.fee * (quantity !== "None" ? quantity : 1),
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
                const response = await axios.get(
                    `/list-facilities/${this.facilityId}`
                );
                console.log(response.data); // Log the response to the console
                this.selectedFacility = response.data;

                // Fetch pricing details for the selected facility
                const facilityId = this.selectedFacility.id; // Assuming selectedFacility has an 'id' property
                const pricingResponse = await axios.get(
                    `/facility-pricing/${facilityId}`
                );
                console.log(pricingResponse.data); // Log the pricing details to the console
                this.facilityPrices = pricingResponse.data;
            } catch (error) {
                console.error("Error fetching facility details:", error);
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
            onClose: (selectedDates) => {
                self.eventDateFrom = self.formatDate(selectedDates[0]);
                endDatePicker.set("minDate", selectedDates[0]); // Set minimum date for the end date picker
            },
            onChange: (selectedDates) => {
                if (selectedDates.length > 0) {
                    endDatePicker.set("minDate", selectedDates[0]);
                }
            },
        });

        // Initialize Flatpickr for end date picker
        const endDatePicker = flatpickr("#endDatePicker", {
            dateFormat: "Y-m-d", // Customize date format as needed
            minDate: today, // Set minimum date as today
            onClose: (selectedDates) => {
                self.eventDateTo = self.formatDate(selectedDates[0]);
            },
        });

        // Fetch facility prices...
        try {
            const response = await axios.get(
                `/facility-pricing/${this.facilityId}`
            );
            const facilityPrices = response.data; // Assuming this is your fetched facility prices array

            const currentDate = new Date();
            const currentMonth = currentDate.getMonth() + 1; // Current month, considering January is 0

            // Find the facility price for the current month
            const currentFacilityPrice = facilityPrices.find(
                (price) =>
                    currentMonth >= price.monthFrom &&
                    currentMonth <= price.monthTo
            );

            if (currentFacilityPrice) {
                this.currentMonthFacilityPrice = currentFacilityPrice.amount;
            }
        } catch (error) {
            console.error("Error fetching facility details:", error);
        }
    },
    getters: {
        totalCostOfServices() {
            // Calculate totalCostOfServices based on other data properties
            // e sum na lang dagity naiavail ta price HAHAHA
            return this.getSelectedServices().reduce(
                (total, service) => total + service.total_price,
                0
            );
        },
    },
});
