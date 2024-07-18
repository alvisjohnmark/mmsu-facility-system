<template>
    <div class="container flex ">
        <div class="background" style="font-family: Advantage">
            <div class="flex items-center justify-center">
                <!-- Step 1: Facility Information -->
                <div
                    v-if="add.step === 1"
                    class="bg-gray-100 shadow-gray-400 p-6 rounded-lg shadow-lg mt-10 w-[1000px] mb-8"
                >
                    <!-- Your existing content -->
                    <div
                        class="grid grid-cols-1 flex-row border-b-4 border-yellow-400"
                    ></div>
                    <div
                        class="shadow-md h-20 flex justify-center border-xl"
                        style="background-color: #0c4b05"
                    >
                        <div class="text-white text-4xl font-bold mt-5">
                            Add Facility
                        </div>
                    </div>
                    <!-- Your existing Facility Information form -->
                    <form class="">
                        <div class="mb-4 mt-4">
                            <label
                                class="block text-gray-700 font-semibold text-lg"
                                for="facility-name"
                                >Facility Name</label
                            >
                            <input
                                v-model="add.name"
                                class="w-full text-lg px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-800"
                                type="text"
                                id="facility-name"
                                name="facility-name"
                                placeholder="Enter facility name"
                                required
                            />
                        </div>

                        <div class="mb-4">
                            <label
                                class="block text-gray-700 font-semibold text-lg"
                                for="facility-short-description"
                                >Short Description</label
                            >
                            <input
                                v-model="add.shortdes"
                                class="w-full text-lg px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-800"
                                type="text"
                                id="shortdes"
                                name="shortdes"
                                placeholder="Enter short description"
                                required
                            />
                        </div>

                        <div class="mb-4">
                            <label
                                class="block text-gray-700 font-semibold text-lg"
                                for="facility-description"
                                >Facility Description</label
                            >
                            <ckeditor
                                :editor="add.editor"
                                :config="add.editorConfig"
                                v-model="add.description"
                            ></ckeditor>
                        </div>

                        <div class="mb-4">
                            <label
                                class="block text-gray-700 font-semibold text-lg"
                                for="facility-location"
                                >Location</label
                            >
                            <textarea
                                v-model="add.location"
                                class="w-full text-lg px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-800"
                                id="facility-location"
                                name="facility-location"
                                rows="4"
                                placeholder="Enter Location"
                                required
                            ></textarea>
                        </div>

                        <div class="mb-4">
                            <label
                                class="block text-gray-700 font-semibold text-lg"
                                for="facility-tags"
                                >Tags
                            </label>
                            <input
                                v-model="add.tags"
                                class="w-full text-lg px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-800"
                                type="text"
                                id="facility-tags"
                                name="facility-tags"
                                placeholder="Enter tags (comma-separated)"
                                required
                            />
                        </div>

                        <div class="mb-4">
                            <label
                                class="block text-gray-700 font-semibold text-lg"
                                for="facility-tags"
                                >Availability
                            </label>
                            <input
                                v-model="add.availability"
                                class="w-full text-lg px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-800"
                                type="number"
                                id="facility-availability"
                                name="facility-availability"
                                placeholder="Enter availability (1,0)"
                                required
                            />
                        </div>

                        <div class="mb-4 mt-4">
                            <label
                                class="block text-gray-700 font-semibold text-lg"
                                for="facility-capacity"
                                >Capacity</label
                            >
                            <input
                                v-model="add.capacity"
                                class="w-full text-lg px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-800"
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
                                class="text-lg bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded focus-outline-none focus-ring-2 focus-ring-red-500 mr-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300"
                            >
                                Cancel
                            </router-link>
                            <button
                                class="text-lg bg-green-800 hover:bg-green-700 text-white px-4 py-2 rounded focus-outline-none focus-ring-2 focus-ring-green-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300"
                                @click.prevent="add.nextStep(2)"
                            >
                                Next
                            </button>
                        </div>
                    </form>
                </div>

                <!-- Step 2: Add Prices -->
                <div
                    v-if="add.step === 2"
                    class="bg-gray-100 shadow-gray-400 p-6 rounded-lg shadow-lg mt-[55px] w-[1000px] relative"
                >
                    <div
                        class="grid grid-cols-1 flex-row border-b-4 border-yellow-400"
                    ></div>
                    <div
                        class="shadow-md h-20 flex justify-center"
                        style="background-color: #0c4b05"
                    >
                        <div class="text-white text-4xl font-bold mt-5">
                            Add Prices
                        </div>
                    </div>
                    <!-- Add Prices form -->
                    <div class="mb-4 py-2">
                        <label
                            class="block text-gray-700 font-semibold text-lg"
                            for="amount"
                            >Amount (₱)</label
                        >
                        <div class="relative">
                            <span
                                class="absolute inset-y-0 left-0 flex items-center pl-2 text-lg"
                            >
                                ₱
                            </span>
                            <input
                                v-model="add.amount"
                                class="pl-8 text-lg w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus-ring-2 focus-ring-green-800"
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
                            class="block text-gray-700 font-semibold text-lg"
                            for="month-from"
                            >Month From</label
                        >
                        <select
                            v-model="add.monthFrom"
                            id="month-from"
                            class="w-full text-lg px-4 py-2 border border-gray-300 rounded focus:outline-none focus-ring-2 focus-ring-green-800"
                        >
                            <option
                                v-for="month in add.months"
                                :value="month.value"
                            >
                                {{ month.name }}
                            </option>
                        </select>
                    </div>

                    <!-- Dropdown for Month To -->
                    <div class="mb-4">
                        <label
                            class="block text-gray-700 font-semibold text-lg"
                            for="month-to"
                            >Month To</label
                        >
                        <select
                            v-model="add.monthTo"
                            id="month-to"
                            class="w-full text-lg px-4 py-2 border border-gray-300 rounded focus:outline-none focus-ring-2 focus-ring-green-800"
                        >
                            <option
                                v-for="month in add.months"
                                :value="month.value"
                            >
                                {{ month.name }}
                            </option>
                        </select>
                    </div>

                    <div class="mb-4 py-2">
                        <label
                            class="block text-gray-700 font-semibold text-lg"
                            for="amount"
                            >Hours</label
                        >
                        <input
                            v-model="add.hours"
                            class="w-full text-lg px-4 py-2 border border-gray-300 rounded focus:outline-none focus-ring-2 focus-ring-green-800"
                            type="text"
                            id="hours"
                            name="hours"
                            placeholder="Enter hours"
                            required
                        />
                    </div>

                    <div class="mb-4">
                        <label
                            class="block text-gray-700 font-semibold text-lg"
                            for="time-period"
                            >Time Period</label
                        >
                        <select
                            v-model="add.timePeriod"
                            id="time-period"
                            class="w-full text-lg px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-800"
                        >
                            <option value="1">Daytime</option>
                            <option value="2">Nighttime</option>
                            <option value="3">All day</option>
                        </select>
                    </div>

                    <button
                        class="bg-green-800 text-lg hover:bg-green-700 text-white px-4 py-2 rounded focus-outline-none focus-ring-2 focus-ring-green-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300"
                        @click.prevent="add.addPrice"
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
                                    v-for="(price, index) in add.prices"
                                    :key="index"
                                >
                                    <td class="py-3 px-6 text-center border-b">
                                        ₱{{ price.amount }}
                                    </td>
                                    <td class="py-3 px-6 text-center border-b">
                                        {{ add.getMonthName(price.monthFrom) }}
                                    </td>
                                    <td class="py-3 px-6 text-center border-b">
                                        {{ add.getMonthName(price.monthTo) }}
                                    </td>
                                    <td class="py-3 px-6 text-center border-b">
                                        {{ price.hours }}
                                    </td>
                                    <td class="py-3 px-6 text-center border-b">
                                        {{ price.timePeriod }}
                                    </td>
                                    <td class="py-3 px-6 text-center border-b">
                                        <button
                                            class="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-full focus:outline-none"
                                            @click="add.removePrice(index)"
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
                            @click.prevent="add.prevStep(1)"
                        >
                            Go Back
                        </button>
                        <button
                            class="bg-green-800 hover:bg-green-700 text-white px-4 py-2 rounded focus-outline-none focus-ring-2 focus-ring-green-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300"
                            @click.prevent="add.nextStep(3)"
                        >
                            Confirm
                        </button>
                    </div>
                </div>

                <!-- Step 3: Confirmation Dialog -->
                <div
                    v-if="add.step === 3"
                    class="bg-gray-100 shadow-gray-400 p-6 rounded-lg shadow-lg mt-[50px] w-[1000px] relative"
                >
                    <div
                        class="grid grid-cols-1 flex-row border-b-4 border-yellow-400"
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
                        <p class="mt-2">
                            <strong>Facility Name:</strong> {{ add.name }}
                        </p>
                        <p class="text-justify mt-2">
                            <strong>Short Description:</strong>
                            <span v-html="add.shortdes"></span>
                        </p>
                        <p class="text-justify mt-2">
                            <strong>Facility Description:</strong>
                            <span v-html="add.description"></span>
                        </p>
                        <p class="mt-2"><strong>Tags:</strong> {{ add.tags }}</p>
                        <p class="mt-2">
                            <strong>Facility Location:</strong> {{ add.location }}
                        </p>
                        <p class="mt-2">
                            <strong>Facility Capacity:</strong> {{ add.capacity }}
                        </p>
                        <p class="mt-2"><strong>Prices:</strong>{{ add.amount }}</p>
                        <ul class="list-disc pl-4 mb-4">
                            <li v-for="(price, index) in add.prices" :key="index">
                                ₱{{ price.amount }} per {{ price.hours }} hours
                                from {{ add.getMonthName(price.monthFrom) }} to
                                {{ add.getMonthName(price.monthTo) }}
                            </li>
                        </ul>
                    </div>
                    <div class="flex justify-end">
                        <button 
                            @click="add.saveData"
                            class="bg-green-800 text-white px-4 py-2 rounded mr-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300"
                        >
                            Confirm
                        </button>
                        <button
                            @click="add.prevStep(2)"
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

<script setup>
import { addFacilities } from "./ComponentsAdminStore/addFacilityStore.js" 
const add = addFacilities()

</script>

<style>
.ck-editor__editable_inline {
    min-height: 210px;
}

.container {
    /* Use flex or grid to center content */
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>