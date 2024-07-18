<template>
    <header>
        <Navbar />
    </header>
    <main>
        <div>
            <!-- Full-width image section -->
            <div class="relative">
                <img
                    src="src/fem-hall-facade.jpg"
                    alt="Background Image"
                    class="w-full bg-opacity-50 background-img "
                />
                <div
                    class="absolute inset-0 flex items-center justify-center bg-opacity-70"
                >
                    <div class="text-center text-black p-4 md:p-8">
                        <h1
                            class="text-2xl md:text-4xl lg:text-5xl font-bold text-black"
                        >
                            Welcome to MMSU Facility Reservation
                        </h1>
                        <p
                            class="text-lg md:text-lg lg:text-xl mt-2 text-black font-bold"
                        >
                            Your gateway to hassle-free facility booking and
                            event planning. Explore our diverse range of
                            facilities, check rates, and reserve with ease.
                            Let's make your events unforgettable
                        </p>
                        <br />
                        <router-link
                            to="/facilities"
                            class="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4 text-base md:text-lg"
                        >
                            Make New Reservation
                        </router-link>
                    </div>
                </div>
            </div>

            <!-- Rest of your content -->

            <div class="bg-white p-4 md:p-8">
                <!-- First section -->
                <h1 class="text-lg md:text-xl lg:text-2xl">
                    description
                </h1>
            </div>

            <div class="bg-gray-100 p-4 md:p-8">
                <!-- Second section -->
                <p class="text-base md:text-lg lg:text-xl">
                    more description
                </p>
            </div>

            <!-- FAQs Section -->
            <div class="bg-gray-200 p-4 md:p-8">
                <h2
                    class="text-lg md:text-xl lg:text-2xl text-center font-semibold mb-4"
                >
                    Frequently Asked Questions
                </h2>
                <div class="mx-auto w-full max-w-lg">
                    <div v-for="(faq, index) in home.faqs" :key="index" class="mb-4">
                        <button
                            class="bg-gray-400 w-full p-2 text-left font-semibold rounded-lg text-center"
                            @click="home.toggleFAQ(index)"
                        >
                            {{ faq.question }}
                        </button>
                        <div
                            v-if="faq.open"
                            class="bg-white p-4 mt-2 rounded-lg"
                        >
                            {{ faq.answer }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
    <footer>
        <Footer />
    </footer>
</template>

<script setup>
import Navbar from "../Components/Navbar.vue";
import Footer from "../Components/Footer.vue";
import { homeStore } from "./PageStores/homeStore.js";
const home = homeStore()
</script>

<style>
/* Add responsive styles using media queries */

@media screen and (max-width: 768px) {
    /* Adjust styles for smaller screens */
    .text-base {
        font-size: 14px;
        line-height: 1.5; /* Ensure appropriate line height for readability */
    }
    .text-lg {
        font-size: 16px;
        line-height: 1.6;
    }
    .text-xl {
        font-size: 18px;
        line-height: 1.7;
    }
    .p-4 {
        padding: 8px;
    }
    .p-8 {
        padding: 16px;
    }
    /* Add more responsive styles as needed */
}

/* .div-1 {
    background-image: url("/../../images/mmsupic.jpg");
} */

.background-img {
  opacity: 0.7;
 }
</style>
