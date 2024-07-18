<template>
    <div>
        <header>
            <Navbar />
        </header>
        <div class="headerdiv">
            <button
                @click.prevent="v.goBack"
                class="mr-2 bg-green-700 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded ml-10"
            >
                Go Back
            </button>
        </div>

        <div>
            <FacilityImageSlider :src="v.facilityImages" option="full" />
        </div>

        <div class="bg-white shadow-gray-500">
            <div class="grid grid-cols-1 gap-4 p-6 flex justify-center">
                <!-- First Row -->
                <div class="bg-light-gray rounded-lg shadow-md p-4">
                    <h1 class="font-bold font-serif text-2xl uppercase">
                        {{ v.facility.facility_name }}
                    </h1>
                    <p class="italic mb-4">
                        <b>LOCATION: </b>{{ v.facility.location }}
                    </p>
                    <div class="description-text">
                        <p class="mb-4" v-html="v.facility.description"></p>
                    </div>
                </div>

                <!-- Second Row with Two Separate Cards -->
                <div class="flex justify-between gap-6">
                    <!-- First Card -->
                    <div
                        class="w-1/2 bg-white rounded-lg shadow-md p-4 shadow-around"
                    >
                        <h3 class="font-bold mb-2">Highlights/Key Features</h3>
                        <div class="tags-section">
                            <div class="tags-container text-l">
                                <div
                                    class="tag-box"
                                >
                                    {{ v.facility.tags }}
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Second Card -->
                    <div
                        class="w-1/2 bg-white rounded-lg shadow-md p-4 shadow-around"
                    >
                        <h3 class="font-bold mb-2">
                            Capacity: {{ v.facility.capacity }}
                        </h3>

                        <h3 class="font-bold mb-2">Rental Price</h3>
                        <div class="price-container">
                            <div
                                v-for="price in v.facilityPrices"
                                :key="price.id"
                                class="price"
                            >
                                <p class="text-green-600">
                                    <span v-if="price.timePeriod === 1">
                                        <i
                                            class="fas fa-sun text-yellow-500"
                                        ></i>
                                        <!-- Sun icon for daytime -->
                                        <span class="ml-1">DAY TIME:</span>
                                    </span>
                                    <span v-else-if="price.timePeriod === 2">
                                        <i
                                            class="fas fa-moon text-indigo-500"
                                        ></i>
                                        <!-- Moon icon for nighttime -->
                                        <span class="ml-1">NIGHT TIME:</span>
                                    </span>
                                    ₱ {{ price.amount }} per
                                    {{ price.hours }} hours
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Right-aligned router link -->
                <div class="flex justify-end mr-5">
                    <router-link
                        :to="{
                            name: 'reservenow',
                            params: { facilityId: v.facility.id },
                        }"
                        class="bg-green-800 hover:bg-yellow-400 text-white font-semibold py-4 px-9 rounded transition duration-300 text-sm"
                        active-class="active-link"
                        @click="v.selectFacility(v.facility.id)"
                        style="font-size: 14px"
                    >
                        Book Now
                    </router-link>
                </div>
            </div>

            <!-- Main content -->
            <div class="main-content mx-10">
                <!-- Modal overlay -->
                <div class="modal-overlay" v-if="v.showReviewForm">
                    <!-- Modal content -->
                    <div class="modal">
                        <!-- Close button -->

                        <!-- ReviewForm component -->
                        <ReviewForm />
                        <button
                            @click="v.closeReviewForm"
                            class="bg-red-500 text-white font-bold py-2 px-4 rounded mb-4"
                        >
                            X
                        </button>
                    </div>
                </div>

                <!-- Facility Reviews section -->
                <div
                    class="facility-reviews mt-2 flex justify-between items-center"
                >
                    <h2 class="mb-4">FACILITY REVIEWS</h2>
                    <button
                        @click="v.showReviewForm = true"
                        v-if="!v.showReviewForm"
                        class="bg-yellow-500 text-white font-bold py-2 px-4 rounded"
                    >
                        Write a Review
                    </button>
                </div>

                <!-- Display the average rating -->
                <div class="flex items-center mb-4">
                    <i
                        v-for="i in v.averageRating"
                        :key="i"
                        class="fas fa-star filled"
                    ></i>
                    <span class="ml-2"
                        >{{ v.averageRating.toFixed(1) }} stars ({{
                            v.reviews.length
                        }}
                        reviews)</span
                    >
                </div>

                <!-- Display top 5 reviews -->
                <div
                    v-for="(review, index) in v.displayedReviews"
                    :key="review.id"
                    class="review-card mb-4"
                >
                    <!-- Review card -->
                    <!-- Name and Date -->
                    <div class="review-header flex items-center">
                        <p class="font-bold">{{ review.review_name }} |</p>
                        <!-- Display date -->
                        <p class="text-sm italic ml-1">
                            {{ v.formatDate(review.created_at) }}
                        </p>
                    </div>

                    <!-- Star rating -->
                    <div class="star-rating">
                        <i
                            v-for="i in review.rating"
                            :key="i"
                            class="fas fa-star filled"
                        ></i>
                    </div>

                    <!-- Comment -->
                    <p>{{ review.comment }}</p>
                </div>

                <!-- View More button -->
                <button
                    v-if="!v.showReviewForm && v.reviews.length > 4"
                    @click="v.toggleReviews"
                    class="bg-blue-500 text-white font-bold py-2 px-4 rounded mb-4"
                >
                    {{ showAll ? "View Less" : "View More" }}
                </button>
            </div>
        </div>
    </div>

    <div>
        <Footer />
    </div>
</template>

<script setup>
import "@fortawesome/fontawesome-free/css/all.min.css";
import Footer from "../Components/Footer.vue";
import Navbar from "../Components/Navbar.vue";
import ReviewForm from "../Components/ReviewForm.vue";
import FacilityImageSlider from "../Components/FacilityImageSlider.vue";
import { onMounted } from "vue";
import { viewmoreStore } from "./PageStores/viewmoreStore.js";
const v = viewmoreStore()

onMounted(() => {
    v.loadFacilityDetails();
    v.fetchFacilityReviews();
});
</script>

<style scoped>
.headerdiv {
    background-color: #dedede;
    padding: 20px;
    text-align: left;
}

.bg-light-green {
    background-color: #edffe7; /* Light green color */
}

.description-text {
    max-width: 95%;
    margin-left: auto;
    margin-right: auto;
}

/* Style for tags */
.tags-section {
    margin-top: 20px;
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

.tags-column,
.prices-column {
    flex: 1;
}

.prices-column {
    flex: 1;
}

.separator {
    width: 20px; /* Adjust the width as needed */
}

/* Styling for the review section */
.review-section {
    margin-top: 30px;
}

.review-card {
    border: 1px solid #ccc;
    padding: 15px;
    margin-top: 20px;
    border-radius: 8px;
}

.rating {
    color: #ffd700; /* Gold color for stars */
    margin-bottom: 10px;
}

.rating i {
    font-size: 1.2rem;
    margin-right: 5px;
}

.filled {
    color: #ffd700; /* Color for filled stars */
}

.review-content h3 {
    margin-top: 0;
    margin-bottom: 8px;
}

.review-content p {
    margin-bottom: 15px;
}

/* Styling for the modal overlay */
/* .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 999;
} */

/* Styles for the modal */
.modal {
    /* max-width: 568px;
    min-width: 368px;
    max-height: 560px; */
    border-radius: 50px;
    margin-left: 25%;
    margin-top: 5%;
    display: flex;
    justify-content: center;
    align-items: start;
    width: 50%;
    height: 75%;
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    overflow-y: auto;
    border: 5px solid #0c4b05;
    
}

/* Button styles */
button {
    font-weight: bold;
    cursor: pointer;
}

/* Space above footer */
.Footer {
    margin-top: 20px;
}

/* Centerized leave a review */
.facility-reviews h2 {
    text-align: left;
    font-size: 24px;
    font-weight: bold;
}
</style>
