<template>
    <div class="container flex justify-center items-center">
        <div class="background" style="font-family: Advantage">
            <div class="flex items-center">
                <!-- Step 1: Facility Information -->

                <div
                    v-if="step === 1"
                    class="bg-gray-100 shadow-gray-400 p-6 rounded-lg shadow-lg mt-[55px] w-[1000px] relative mt-2"
                >
                    <!-- Your existing content -->
                    <div
                        class="shadow-md h-20 flex justify-center"
                        style="background-color: #0c4b05"
                    >
                        <div class="text-white text-4xl font-bold mt-5">
                            Edit Facility
                        </div>
                    </div>
                    <!-- Your existing Facility Information form -->
                    <form class="">
                        <div class="mb-4 mt-4">
                            <label
                                class="block text-gray-700 font-semibold"
                                for="facility-name"
                                >Facility Name</label
                            >
                            <input
                                v-model="name"
                                class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-800"
                                type="text"
                                id="facility-name"
                                name="facility-name"
                                placeholder="Enter facility name"
                                required
                            />
                        </div>

                        <div class="mb-4">
                            <label
                                class="block text-gray-700 font-semibold"
                                for="facility-description"
                                >Facility Description</label
                            >
                            <ckeditor
                                :editor="editor"
                                :config="editorConfig"
                                v-model="description"
                            ></ckeditor>
                            <!-- <textarea
              v-model="description"
              class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-800"
              id="facility-description"
              name="facility-description"
              rows="4"
              placeholder="Enter facility description"
              required
            ></textarea> -->
                        </div>

                        <div class="mb-4 mt-4">
                            <label
                                class="block text-gray-700 font-semibold"
                                for="facility-shortdes"
                                >Short Description</label
                            >
                            <input
                                v-model="shortdes"
                                class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-800"
                                type="text"
                                id="facility-shortdes"
                                name="facility-shortdes"
                                placeholder="Enter short description"
                                required
                            />
                        </div>

                        <div class="mb-4">
                            <label
                                class="block text-gray-700 font-semibold"
                                for="facility-location"
                                >Location</label
                            >
                            <textarea
                                v-model="location"
                                class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-800"
                                id="facility-location"
                                name="facility-location"
                                rows="4"
                                placeholder="Enter Location"
                                required
                            ></textarea>
                        </div>

                        <div class="mb-4 mt-4">
                            <label
                                class="block text-gray-700 font-semibold"
                                for="facility-tags"
                                >Tags</label
                            >
                            <input
                                v-model="tags"
                                class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-800"
                                type="texts"
                                id="facility-tags"
                                name="facility-tags"
                                placeholder="Enter tags"
                                required
                            />
                        </div>

                        <div class="mb-4 mt-4">
                            <label
                                class="block text-gray-700 font-semibold"
                                for="facility-capacity"
                                >Availability</label
                            >
                            <input
                                v-model="availability"
                                class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-800"
                                type="number"
                                id="facility-capacity"
                                name="facility-capacity"
                                placeholder="Enter Availability (1,0)"
                                required
                            />
                        </div>

                        <div class="mb-4 mt-4">
                            <label
                                class="block text-gray-700 font-semibold"
                                for="facility-capacity"
                                >Capacity</label
                            >
                            <input
                                v-model="capacity"
                                class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-800"
                                type="number"
                                id="facility-capacity"
                                name="facility-capacity"
                                placeholder="Enter capacity"
                                required
                            />
                        </div>

                        <!-- ... -->

                        <div class="flex justify-center">
                            <router-link
                                to="/admin/adminfacilities"
                                class="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded focus-outline-none focus-ring-2 focus-ring-red-500 mr-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300"
                            >
                                Cancel
                            </router-link>
                            <button
                                class="bg-green-800 hover:bg-green-700 text-white px-4 py-2 rounded focus-outline-none focus-ring-2 focus-ring-green-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300"
                                @click.prevent="nextStep(2)"
                            >
                                Next
                            </button>
                        </div>
                    </form>
                </div>

                <!-- Step 2: Add Prices -->
                <div
                    v-if="step === 2"
                    class="bg-gray-100 shadow-gray-400 p-6 rounded-lg shadow-lg mt-[55px] w-[1000px] relative mt-2"
                >
                    <div
                        class="grid grid-cols-1 flex flex-row border-b-4 border-yellow-400"
                    ></div>
                    <div
                        class="shadow-md h-20 flex justify-center"
                        style="background-color: #0c4b05"
                    >
                        <div class="text-white text-4xl font-bold mt-5">
                            Edit Prices
                        </div>
                    </div>
                    <!-- Add Prices form -->
                    <div class="mb-4 py-2">
                        <label
                            class="block text-gray-700 font-semibold"
                            for="amount"
                            >Amount (₱)</label
                        >
                        <div class="relative">
                            <span
                                class="absolute inset-y-0 left-0 flex items-center pl-2"
                            >
                                ₱
                            </span>
                            <input
                                v-model="amount"
                                class="pl-8 w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus-ring-2 focus-ring-green-800"
                                type="number"
                                id="amount"
                                name="amount"
                                placeholder="Enter amount"
                                required
                            />
                        </div>
                    </div>

                    <div class="mb-4">
                        <label
                            class="block text-gray-700 font-semibold"
                            for="month-from"
                            >Month From</label
                        >
                        <select
                            v-model="monthFrom"
                            id="month-from"
                            class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus-ring-2 focus-ring-green-800"
                        >
                            <option
                                v-for="month in months"
                                :value="month.value"
                            >
                                {{ month.name }}
                            </option>
                        </select>
                    </div>

                    <!-- Dropdown for Month To -->
                    <div class="mb-4">
                        <label
                            class="block text-gray-700 font-semibold"
                            for="month-to"
                            >Month To</label
                        >
                        <select
                            v-model="monthTo"
                            id="month-to"
                            class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus-ring-2 focus-ring-green-800"
                        >
                            <option
                                v-for="month in months"
                                :value="month.value"
                            >
                                {{ month.name }}
                            </option>
                        </select>
                    </div>

                    <div class="mb-4 py-2">
                        <label
                            class="block text-gray-700 font-semibold"
                            for="amount"
                            >Hours</label
                        >
                        <input
                            v-model="hours"
                            class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus-ring-2 focus-ring-green-800"
                            type="text"
                            id="hours"
                            name="hours"
                            placeholder="Enter hours"
                            required
                        />
                    </div>

                    <div class="mb-4">
                        <label
                            class="block text-gray-700 font-semibold"
                            for="time-period"
                            >Time Period</label
                        >
                        <select
                            v-model="timePeriod"
                            id="time-period"
                            class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-800"
                            name="timePeriod"
                            placeholder="Select Time Period"
                        >
                            <option value="1">Daytime</option>
                            <option value="2">Nighttime</option>
                            <option value="3">All day</option>
                        </select>
                    </div>

                    <button
                        class="bg-green-800 hover:bg-green-700 text-white px-4 py-2 rounded focus-outline-none focus-ring-2 focus-ring-green-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300"
                        @click.prevent="addPrice"
                    >
                        Add
                    </button>

                    <!-- Prices table -->
                    <div class="flex justify-center mt-4">
                        <table
                            class="min-w-full bg-white border border-gray-300 shadow-md rounded-md overflow-hidden"
                        >
                            <thead>
                                <tr>
                                    <th
                                        class="py-3 px-6 text-center bg-gray-200 border-b"
                                    >
                                        Amount (₱)
                                    </th>
                                    <th
                                        class="py-3 px-6 text-center bg-gray-200 border-b"
                                    >
                                        Month From
                                    </th>
                                    <th
                                        class="py-3 px-6 text-center bg-gray-200 border-b"
                                    >
                                        Month To
                                    </th>
                                    <th
                                        class="py-3 px-6 text-center bg-gray-200 border-b"
                                    >
                                        Hours
                                    </th>
                                    <th
                                        class="py-3 px-6 text-center bg-gray-200 border-b"
                                    >
                                        Time Period
                                    </th>
                                    <th
                                        class="py-3 px-6 text-center bg-gray-200 border-b"
                                    >
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr
                                    v-for="(price, index) in prices"
                                    :key="index"
                                >
                                    <td class="py-3 px-6 text-center border-b">
                                        ₱{{ price.amount }}
                                    </td>
                                    <td class="py-3 px-6 text-center border-b">
                                        {{ getMonthName(price.monthFrom) }}
                                    </td>
                                    <td class="py-3 px-6 text-center border-b">
                                        {{ getMonthName(price.monthTo) }}
                                    </td>
                                    <td class="py-3 px-6 text-center border-b">
                                        {{ price.hours }}
                                    </td>
                                    <td class="py-3 px-6 text-center border-b">
                                        {{ price.timePeriod }}
                                    </td>

                                    <td class="py-3 px-6 text-center border-b">
                                        <button
                                            class="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-full focus:outline-none transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300"
                                            @click="removePrice(index)"
                                        >
                                            Remove
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="flex justify-center mt-5">
                        <button
                            class="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded focus-outline-none focus-ring-2 focus-ring-red-500 mr-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300"
                            @click.prevent="prevStep(1)"
                        >
                            Go Back
                        </button>
                        <button
                            class="bg-green-800 hover:bg-green-700 text-white px-4 py-2 rounded focus-outline-none focus-ring-2 focus-ring-green-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300"
                            @click.prevent="nextStep(3)"
                        >
                            Confirm
                        </button>
                    </div>
                </div>

                <!-- Step 3: Confirmation Dialog -->
                <div
                    v-if="step === 3"
                    class="bg-gray-100 shadow-gray-400 p-6 rounded-lg shadow-lg mt-[50px] w-[1000px] relative"
                >
                    <div
                        class="grid grid-cols-1 flex flex-row border-b-4 border-yellow-400"
                    ></div>
                    <div
                        class="shadow-md h-20 flex justify-center"
                        style="background-color: #0c4b05"
                    >
                        <div class="text-white text-4xl font-bold mt-5">
                            Confirmation
                        </div>
                    </div>
                    <!-- Display confirmation details -->
                    <div class="overflow-auto max-h-96">
                        <!-- Set a maximum height and enable overflow scrolling -->
                        <!-- Display confirmation details -->
                        <p class="mt-2 text-xl">
                            <strong>Facility Name:</strong> {{ name }}
                        </p>
                        <p class="text-justify mt-2 text-xl">
                            <strong>Facility Description:</strong>
                            <span v-html="description"></span>
                        </p>
                        <p class="text-justify mt-2 text-xl">
                            <strong>Short Description:</strong>
                            <span v-html="shortdes"></span>
                        </p>
                        <p class="mt-2 text-xl">
                            <strong>Facility Location:</strong> {{ location }}
                        </p>
                        <p class="mt-2 text-xl">
                            <strong>Facility Capacity:</strong> {{ capacity }}
                        </p>
                        <p class="mt-2 text-xl">
                            <strong>Tags:</strong> {{ tags }}
                        </p>
                        <p class="mt-2 text-xl">
                            <strong>Prices:</strong>{{ amount }}
                        </p>
                        <ul class="list-disc pl-4 mb-4">
                            <li v-for="(price, index) in prices" :key="index">
                                ₱{{ price.amount }} per {{ price.hours }} hours
                                from {{ getMonthName(price.monthFrom) }} to
                                {{ getMonthName(price.monthTo) }}
                            </li>
                        </ul>
                    </div>
                    <div class="flex justify-end">
                        <button
                            @click="saveData"
                            class="bg-green-500 text-white px-4 py-2 rounded mr-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300"
                        >
                            Confirm
                        </button>
                        <button
                            @click="prevStep(2)"
                            class="bg-red-500 text-white px-4 py-2 rounded transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import ClassicEditor from "/js/ckeditor_custom";
import Swal from "sweetalert2";

export default {
    data() {
        return {
            id: 0,
            editor: ClassicEditor,
            editorData: "",
            editorConfig: {},
            step: 1,
            name: "",
            description: "",
            shortdes: "",
            location: "",
            capacity: 0,
            tags: "",
            amount: "",
            monthFrom: "",
            availability: "",
            monthTo: "",
            hours: "",
            timePeriod: "",
            prices: [],
            months: [
                { value: 1, name: "January" },
                { value: 2, name: "February" },
                { value: 3, name: "March" },
                { value: 4, name: "April" },
                { value: 5, name: "May" },
                { value: 6, name: "June" },
                { value: 7, name: "July" },
                { value: 8, name: "August" },
                { value: 9, name: "September" },
                { value: 10, name: "October" },
                { value: 11, name: "November" },
                { value: 12, name: "December" },
                // ... (other months)
            ],
        };
    },
    methods: {
        nextStep(step) {
            this.step = step;
        },
        prevStep(step) {
            this.step = step;
        },
        addPrice() {
            const isOverlap = this.prices.some((price) => {
                const existingFrom = price.monthFrom;
                const existingTo = price.monthTo;

                return (
                    (this.monthFrom >= existingFrom &&
                        this.monthFrom <= existingTo) ||
                    (this.monthTo >= existingFrom &&
                        this.monthTo <= existingTo) ||
                    (this.monthFrom <= existingFrom &&
                        this.monthTo >= existingTo)
                );
            });

            if (isOverlap) {
                alert("Selected month range conflicts with existing entries");
                return;
            }

            this.prices.push({
                amount: this.amount,
                monthFrom: this.monthFrom,
                monthTo: this.monthTo,
                hours: this.hours,
                timePeriod: this.timePeriod,
            });

            this.amount = "";
            this.monthFrom = "";
            this.monthTo = "";
            this.hours = "";
            this.timePeriod = "";
        },
        removePrice(index) {
            this.prices.splice(index, 1);
        },
        saveData() {
            const facilityForm = {
                facility_name: this.name,
                shortdes: this.shortdes,
                description: this.description,
                location: this.location,
                capacity: this.capacity,
                tags: this.tags,
                availability: this.availability,
            };

            axios
                .post("/save-edited-facility/" + this.id, facilityForm)
                .then((response) => {
                    const facilityId = response.data.id;
                    this.savePrices(facilityId);
                    // Show success message after facility update
                    Swal.fire({
                        title: "Facility updated!",
                        text: "Your facility has been updated successfully.",
                        icon: "success",
                    });
                })
                .catch((error) => {
                    console.error("Error uploading facility data:", error);
                });
        },
        savePrices(facilityId) {
            const pricesData = this.prices.map((price) => ({
                facility_id: this.id,
                amount: price.amount,
                monthFrom: price.monthFrom,
                monthTo: price.monthTo,
                hours: price.hours,
                timePeriod: price.timePeriod,
            }));

            axios
                .post("/save-edited-facility-prices/" + this.id, pricesData)
                .then((response) => {
                    this.resetForm();
                })
                .catch((error) => {
                    console.error("Error uploading prices data:", error);
                });
        },

        resetForm() {
            this.step = 1;
            this.name = "";
            this.description = "";
            (this.shortdes = ""), (this.location = "");
            this.capacity = 0;
            this.tags = "";
            this.amount = "";
            this.monthFrom = "";
            this.monthTo = "";
            this.hours = "";
            this.availability = "";
            (this.timePeriod = ""), (this.prices = []);
            this.$router.push("/admin/adminfacilities");
        },

        getMonthName(monthValue) {
            const months = [
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
            ];
            return months[monthValue - 1];
        },

        displayEditorResult() {
            document.getElementById("resultingText").innerHTML =
                this.editorData;
        },

        emptyEditor() {
            this.editorData = "";
        },
    },

    mounted() {
        const facilityId = this.$route.params.id;
        this.id = facilityId;

        if (facilityId) {
            axios
                .post(`/list-facilities/${facilityId}`)
                .then((response) => {
                    const facilityData = response.data;

                    // Update the component data properties with the fetched data
                    this.name = facilityData.facility_name;
                    this.description = facilityData.description;
                    this.shortdes = facilityData.shortdes;
                    this.location = facilityData.location;
                    this.availability = facilityData.availability;
                    this.capacity = facilityData.capacity;
                    this.tags = facilityData.tags;

                    // Fetch prices associated with the facility
                    axios
                        .post(`/facility-prices/${facilityId}`)
                        .then((response) => {
                            // Check if response.data is an array before mapping
                            // Assuming prices are stored in a separate table
                            this.prices = response.data.map((price) => ({
                                amount: price.amount,
                                hours: price.hours,
                                timePeriod: price.timePeriod,
                                monthFrom: price.monthFrom,
                                monthTo: price.monthTo,
                            }));
                            console.log("Prices response:", this.prices);
                        })
                        .catch((error) => {
                            console.error(
                                "Invalid data format received for facility prices:",
                                response.data
                            );
                        });
                })
                .catch((error) => {
                    console.error("Error fetching facility data:", error);
                });
        }

        this.editorData = ""; // Reset the editor data
    },
};
</script>

<style>
/* You can add your own styling here if needed */
</style>
