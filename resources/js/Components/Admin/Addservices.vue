<template>
    <div class="flex flex-row w-full">
        <!--Main-->

        <div class="bg-gray-100 w-full" style="font-family: arial">
            <!--Content-->
            <div
                class="grid grid-cols-1 flex flex-row border-b-4 border-yellow-400"
            >
                <!--Sub Nav-->
                <div
                    class="shadow-md h-20 flex justify-between"
                    style="background-color: #0c4b05"
                >
                    <span
                        class="flex items-center text-white font-semibold ml-4"
                    >
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
            <!-- Go Back button -->
            <button
                @click="goBack"
                class="bg-gray-500 text-white px-4 m-8 py-2 rounded mt-4"
            >
                Go Back
            </button>
            <div class="bg-gray-100 ">
                <div class="flex justify-center marg">
                    <form
                        @submit.prevent="addService"
                        class="flex flex-col space-y-4 border p-12 rounded-lg shadow-md w-full"
                        style="font-family: sans-serif"
                    >
                        <div class="flex flex-col">
                            <div class="">
                                <label
                                    class="block text-gray-700 font-semibold"
                                    for="service-name"
                                    >Service Name</label
                                >
                                <input
                                    v-model="serviceName"
                                    class="w-full py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-800"
                                    type="text"
                                    id="service-name"
                                    name="service-name"
                                    required
                                />
                            </div>
                            <div class="">
                                <label
                                    class="block text-gray-700 font-semibold"
                                    for="service-type"
                                    >Type</label
                                >
                                <select
                                    v-model="serviceType"
                                    id="service-type"
                                    class="w-full py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-800"
                                >
                                    <option value="audiovisual">
                                        Audiovisual
                                    </option>
                                    <option value="food">Food</option>
                                    <option value="tech">Tech</option>
                                    <option value="seating">Seating</option>
                                    <!-- Add other types as needed -->
                                </select>
                            </div>
                            <div class="">
                                <label
                                    class="block text-gray-700 font-semibold"
                                    for="service-fee"
                                    >Fee</label
                                >
                                <input
                                    v-model="serviceFee"
                                    class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-800"
                                    type="number"
                                    id="service-fee"
                                    name="service-fee"
                                    required
                                />
                            </div>
                            <div class="">
                                <label
                                    class="block text-gray-700 font-semibold"
                                    for="service-unit"
                                    >Unit</label
                                >
                                <input
                                    v-model="serviceUnit"
                                    class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-800"
                                    type="text"
                                    id="service-unit"
                                    name="service-unit"
                                />
                            </div>
                            <div class="w-2/3">
                                <label
                                    class="block text-gray-700 font-semibold"
                                    for="service-note"
                                    >Note</label
                                >
                                <textarea
                                    v-model="serviceNote"
                                    class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-800"
                                    id="service-note"
                                    name="service-note"
                                    rows="5"
                                    cols="50"
                                    placeholder="Enter note"
                                ></textarea>
                            </div>
                        </div>

                        <div class="flex flex-row space-x-4">
                            <div class="w-1/2">
                                <label
                                    class="block text-gray-700 font-semibold"
                                    for="month-from"
                                    >Month From</label
                                >
                                <select
                                    v-model="monthFrom"
                                    id="month-from"
                                    class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-800"
                                >
                                    <option
                                        v-for="(month, index) in months"
                                        :key="index"
                                        :value="index + 1"
                                    >
                                        {{ month }}
                                    </option>
                                </select>
                            </div>
                            <div class="w-1/2">
                                <label
                                    class="block text-gray-700 font-semibold"
                                    for="month-to"
                                    >Month To</label
                                >
                                <select
                                    v-model="monthTo"
                                    id="month-to"
                                    class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-800"
                                >
                                    <option
                                        v-for="(month, index) in months"
                                        :key="index"
                                        :value="index + 1"
                                    >
                                        {{ month }}
                                    </option>
                                </select>
                            </div>
                        </div>

                        <button
                            type="submit"
                            class="bg-green-800 hover:bg-green-700 text-white px-4 py-2 rounded focus-outline-none focus-ring-2 focus-ring-green-500 mx-auto transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 hover:duration-300"
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
                                <th class="px-4 py-2 text-center border">
                                    Service Name
                                </th>
                                <th class="px-4 py-2 text-center border">
                                    Type
                                </th>
                                <th class="px-4 py-2 text-center border">
                                    Fee
                                </th>
                                <th class="px-4 py-2 text-center border">
                                    Unit
                                </th>
                                <th class="px-4 py-2 text-center border">
                                    Note
                                </th>
                                <th class="px-4 py-2 text-center border">
                                    Month From
                                </th>
                                <th class="px-4 py-2 text-center border">
                                    Month To
                                </th>
                                <th class="px-4 py-2 text-center border">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr
                                v-for="(service, index) in services"
                                :key="index"
                                :class="
                                    index % 2 === 0 ? 'bg-gray-100' : 'bg-white'
                                "
                            >
                                <td class="px-4 py-2 text-center border">
                                    <span class="">{{
                                        service.service_name
                                    }}</span>
                                </td>
                                <td class="px-4 py-2 text-center border">
                                    <span class="">{{ service.type }}</span>
                                </td>
                                <td class="px-4 py-2 text-center border">
                                    <span class="">{{ service.fee }}</span>
                                </td>
                                <td class="px-4 py-2 text-center border">
                                    <span class="">{{ service.unit }}</span>
                                </td>
                                <td class="px-4 py-2 text-center border">
                                    <span class="">{{ service.note }}</span>
                                </td>
                                <td class="px-4 py-2 text-center border">
                                    <span class="">{{
                                        getMonthName(service.monthFrom)
                                    }}</span>
                                </td>
                                <td class="px-4 py-2 text-center border">
                                    <span class="">{{
                                        getMonthName(service.monthTo)
                                    }}</span>
                                </td>
                                <td class="px-4 py-2 text-center border">
                                    <button
                                        @click="deleteService(index)"
                                        class="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <!-- Button to add services to the table -->
                    <button
                        @click="saveServices"
                        class="bg-green-800 hover:bg-green-700 text-white px-4 py-2 rounded mt-4"
                    >
                        Save Changes
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";

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
            console.log("Adding service...");
            console.log("Service Name:", this.serviceName);
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
            axios
                .post("/save-services", this.services)
                .then((response) => {
                    // Clear the services array after successful saving
                    this.services = [];

                    // Show success message using SweetAlert
                    Swal.fire({
                        title: "Services saved!",
                        text: "Your services have been saved successfully.",
                        icon: "success",
                    }).then(() => {
                        // Redirect to the first part after the alert is closed
                        this.$router.push("/admin/adminservices");
                    });
                })
                .catch((error) => {
                    console.error("Error saving services:", error);
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
    },
};
</script>

<style scoped>
/* Result Table Styles */
.m-8 table {
    width: 100%;
    border-collapse: collapse;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.m-8 th,
.m-8 td {
    border: 1px solid #ddd;
    padding: 16px;
    text-align: center;
    font-size: 14px;
}

.m-8 th {
    background-color: #0c4b05;
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
.slide-enter-active,
.slide-leave-active {
    transition: transform 0.3s ease-in-out;
}

.slide-enter,
.slide-leave-to {
    transform: translateX(-100%);
}

.transition-transform {
    transition: transform 0.3s ease-in-out;
}

.transition-margin {
    transition: margin-right 0.3s ease-in-out;
}

.slide-main-enter-active,
.slide-main-leave-active {
    transition: margin-right 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55);
}

.slide-main-enter,
.slide-main-leave-to {
    margin-right: 0;
}

.marg{
    margin-left: 200px;
    margin-right: 200px
}
</style>
