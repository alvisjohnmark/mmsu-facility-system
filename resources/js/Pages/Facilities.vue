<template>
    <div>
        <header>
            <!-- Include your Navbar component -->
            <Navbar />
        </header>
        <div>
            <div class="headerdiv">
                <!-- Header content -->
                <h1 class="text-3xl ml-10 font-serif">
                    MMSU FACILITY RESERVATION
                </h1>
                <h4 class="text-xl italic text-gray-700 ml-10 font-serif">
                    Facilities
                </h4>
            </div>
            <div class="quote">
                <!-- Quote content -->
                <h2 class="text-xl ml-10 font-serif">
                    "Explore Our Diverse Facilities"
                </h2>
            </div>

            <div class="shadow-md bg-gray-100 shadow-gray-500">
                <div class="p-4">
                    <div
                        v-for="(facility, index) in f.availableFacilities"
                        :key="index"
                        class="bg-white rounded-lg shadow-md mb-4"
                    >
                        <!-- Facility Content -->
                        <div class="md:flex md:items-start">
                            <!-- Desktop view: Carousel on the left -->
                            <div class="md:w-1/3 md:pr-4">
                                <!-- Image Carousel -->
                                <ImageCarousel
                                    :src="facility.images"
                                    option="full"
                                />
                            </div>

                            <div class="md:w-2/3 md:pl-4">
                                <!-- Mobile view: Carousel on top -->
                                <div class="sm:hidden">
                                    <!-- Image Carousel -->
                                    <!-- <ImageCarousel :src="facility.images" option="full" /> -->
                                </div>

                                <!-- Facility Details -->
                                <div class="px-4 py-2">
                                    <h3 class="text-xl font-semibold mt-4">
                                        <p class="text-lg"> {{ facility.facility_name }}</p>
                                    </h3>
                                    <p class="text-sm text-gray-600 mb-2">
                                        <p class="text-lg"><span class="font-bold">Location: </span> {{ facility.location }}</p>
                                    </p>
                                    <div class="tags-container mb-4">
                                        <!-- Display tags here -->
                                        <div
                                            
                                            class="tag-box inline-block bg-gray-200 rounded-md text-xs px-2 py-1 mr-2 mb-2 hover:bg-gray-300"
                                        >
                                        <p class="text-lg">{{facility.tags}}</p>
                                        </div>
                                    </div>
                                    <p class="text-sm text-gray-600 mb-2">
                                        <p class="text-lg">{{ facility.shortdes }}</p>
                                    </p>
                                </div>
                                <!-- More details -->
                                <div
                                    class="flex flex-col sm:flex-row sm:items-center p-4"
                                >
                                    <div
                                        class="text-sm text-gray-600 mb-2 sm:mb-0 sm:mr-4 sm:w-1/3 flex-grow sm:text-left"
                                    >
                                        <p class="text-lg"><span class="font-bold">Capacity: </span> {{ facility.capacity }}</p> 
                                    </div>


                                    <div
                                        class="text-sm text-gray-600 mb-2 sm:mb-0 sm:mr-4"
                                    >
                                        <div
                                            v-for="price in facility.prices"
                                            :key="price.id"
                                        >
                                            <p class="mb-2 text-lg">
                                                <b>Rental Price:</b>
                                                    <span class="text-lg">
                                                        ₱ {{ price.amount }} per
                                                        {{ price.hours }} hours
                                                    </span>
                                            </p>
                                        </div>
                                    </div>



                                    <!-- Space div in web view -->
                                    <div
                                        class="hidden sm:block sm:w-1/12"
                                    ></div>
                                    <div
                                        class="sm:w-1/3 sm:text-center sm:ml-auto mt-4 sm:mt-0"
                                    >
                                        <!-- Buttons -->
                                        <router-link
                                            :to="{
                                                name: 'viewmore',
                                                params: {
                                                    facilityId: facility.id,
                                                },
                                            }"
                                            class="bg-green-800 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded transition duration-300 text-xs mr-2"
                                        >
                                            View More
                                        </router-link>
                                        <router-link
                                            :to="{
                                                name: 'reservenow',
                                                params: {
                                                    facilityId: facility.id,
                                                },
                                            }"
                                            class="bg-green-800 hover:bg-yellow-400 text-white font-semibold py-3 px-6 rounded transition duration-300 text-xs"
                                            active-class="active-link"
                                            @click="f.selectFacility(facility.id)"
                                        >
                                            Book Now
                                        </router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script setup>
import Footer from "../Components/Footer.vue";
import Navbar from "../Components/Navbar.vue";
import axios from "axios";
import ImageCarousel from "../Components/ImageCarousel.vue";
import { facilitiesStore } from "./PageStores/facilitiesStore.js";
import { onMounted } from "vue";
const f = facilitiesStore();

onMounted(() => {clear
    f.getFacilities()
});

</script>

<style scoped>
.headerdiv {
    background-color: #d9d9d9;
    padding: 20px;
    text-align: left;
}
.quote {
    padding: 20px;
    text-align: center;
}
.unavailable-facility {
    opacity: 0.6;
    border: 1px solid red;
    padding: 10px;
    margin-bottom: 20px;
}

.tags-container {
    display: flex;
    flex-wrap: wrap;
    /* justify-content: center; 
  align-items: center; 
  margin-top: 10px;  */
}

.tag-box {
    background-color: #e2e8f0;
    padding: 5px 10px;
    margin-right: 10px;
    margin-bottom: 10px;
    border-radius: 5px;

    /* Add more styling as desired */
}

.shadow-around {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.price {
    flex: 0 0 48%;
}

.tags-and-prices {
    display: flex;
}
</style>