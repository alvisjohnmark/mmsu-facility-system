<template>
    <div class="grid grid-cols-1 flex flex-row border-b-4 border-yellow-400">
        <!--Sub Nav-->
        <div
            class="shadow-md h-20 flex justify-between"
            style="background-color: #0c4b05"
        >
            <span class="flex items-center text-white font-semibold ml-4">
                <lord-icon
                    src="https://cdn.lordicon.com/iazmohzf.json"
                    trigger="hover"
                    colors="primary:#ffffff"
                    class="w-10 h-10 mr-2"
                />
                Services
            </span>
            <div
                class="flex justify-end px-4 py-2"
                style="font-family: Advantage"
            >
                <!-- <router-link
                            to="/Addservices"
                            class="flex items-center text-white  font-semibold mr-7 router-link"
                            active-class="active-link"
                        >
                            <lord-icon
                                src="https://cdn.lordicon.com/hqymfzvj.json"
                                trigger="hover"
                                colors="primary:#ffffff"
                                style="width: 10; height: 10"
                                class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300 mr-2"
                            >
                            </lord-icon>
                            Add Services
                        </router-link> -->
            </div>
        </div>
    </div>

    <div class="grid grid-cols-1 flex flex-row">
        <!--Sub Nav 1-->
        <div
            class="bg-shadow-gray-300 shadow-md h-16 flex justify-start"
            style="background-color: #c0c0c0"
        >
            <span
                class="flex items-center text-black italic font-semibold ml-4"
                style="font-family: Advantage"
            >
                <img
                    src="\src\mmsu-logo.png"
                    alt="Logo"
                    class="w-12 h-10 mr-2"
                />
                Mariano Marcos State University Services
            </span>
        </div>
    </div>
    <button
        type="button"
        @click="cancelEdit"
        class="bg-gray-500 text-white px-4 m-8 py-2 rounded mt-4"
    >
        Go back
    </button>
    <div class="flex justify-center items-center mt-10">
        <form
            @submit.prevent="editService"
            class="flex flex-col space-y-4 border p-4 rounded bg-gray-100"
            style="font-family: Advantage"
        >
            <div class="flex flex-row space-x-4">
                <div class="w-1/3">
                    <label
                        class="block text-gray-700 font-semibold text-xl"
                        for="service-name"
                        >Service Name</label
                    >
                    <input
                        v-model="service.service_name"
                        class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-800 text-xl"
                        type="text"
                        id="service-name"
                        name="service-name"
                        required
                    />
                </div>
                <div class="w-1/3">
                    <label
                        class="block text-gray-700 font-semibold text-xl"
                        for="service-type"
                        >Type</label
                    >
                    <select
                        v-model="service.type"
                        class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-800 text-xl"
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
                    <label
                        class="block text-gray-700 font-semibold text-xl"
                        for="service-fee"
                        >Fee</label
                    >
                    <input
                        v-model="service.fee"
                        class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-800 text-xl"
                        type="text"
                        id="service-fee"
                        name="service-fee"
                        required
                    />
                </div>
            </div>

            <div class="flex flex-row space-x-4 mt-4">
                <div class="w-1/3">
                    <label
                        class="block text-gray-700 font-semibold text-xl"
                        for="service-unit"
                        >Unit</label
                    >
                    <input
                        v-model="service.unit"
                        class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-800 text-xl"
                        type="text"
                        id="service-unit"
                        name="service-unit"
                        required
                    />
                </div>
                <div class="w-1/3">
                    <label
                        class="block text-gray-700 font-semibold text-xl"
                        for="service-note"
                        >Note</label
                    >
                    <input
                        v-model="service.note"
                        class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-800 text-xl"
                        type="text"
                        id="service-note"
                        name="service-note"
                        required
                    />
                </div>
                <div class="w-1/3">
                    <label
                        class="block text-gray-700 font-semibold text-xl"
                        for="service-month-from"
                        >Month From</label
                    >
                    <input
                        v-model="service.monthFrom"
                        class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-800 text-xl"
                        type="text"
                        id="service-month-from"
                        name="service-month-from"
                        required
                    />
                </div>
            </div>

            <div class="flex flex-row space-x-4 mt-4">
                <div class="w-1/3">
                    <label
                        class="block text-gray-700 font-semibold text-xl"
                        for="service-month-to"
                        >Month To</label
                    >
                    <input
                        v-model="service.monthTo"
                        class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-800 text-xl"
                        type="text"
                        id="service-month-to"
                        name="service-month-to"
                        required
                    />
                </div>
                <!-- Add more fields if needed -->
            </div>

            <!-- Buttons for Submit and Cancel -->
            <div class="flex flex-row justify-end space-x-4">
                <button
                    type="submit"
                    class="px-4 py-2 bg-green-800 text-white rounded text-xl"
                >
                    Save Changes
                </button>
            </div>
        </form>
    </div>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";

export default {
    data() {
        return {
            service: {}, // Initialize an empty service object to store the edited service data
            months: [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
            ],
        };
    },
    methods: {
        fetchServiceData() {
            const serviceId = this.$route.params.id; // Get the service ID from the route params
            axios
                .get(`/get-service/${serviceId}`)
                .then((response) => {
                    this.service = response.data; // Populate the service object with fetched data
                })
                .catch((error) => {
                    console.error("Error fetching service data:", error);
                });
        },

        // getMonthName(monthValue) {
        //     return this.months[monthValue - 1];
        // },

        editService() {
            const serviceId = this.$route.params.id; // Get the service ID from the route params
            axios
                .put(`/update-service/${serviceId}`, this.service)
                .then((response) => {
                    Swal.fire({
                        title: "Services saved!",
                        text: "Your services have been saved successfully.",
                        icon: "success",
                    }).then(() => {
                        // Redirect to the services list after the alert is closed
                        this.$router.push("/admin/adminservices");
                    });
                })
                .catch((error) => {
                    // Handle error while updating service
                    console.error("Error updating service:", error);
                    // Show error message using SweetAlert
                    Swal.fire({
                        title: "Error!",
                        text: "Failed to update service. Please try again.",
                        icon: "error",
                    });
                });
        },
        cancelEdit() {
            this.$router.push("/admin/adminservices");
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
