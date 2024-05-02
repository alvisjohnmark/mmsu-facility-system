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
          class="w-full"
        />
        <div class="absolute inset-0 flex items-center justify-center bg-opacity-70 bg-white">
          <div class="text-center text-black p-4 md:p-8">
            <h1 class="text-2xl md:text-4xl lg:text-5xl font-bold">
              Welcome to MMSU Facility Reservationassasa
            </h1>
            <p class="text-base md:text-lg lg:text-xl mt-2">
              Your gateway to hassle-free facility booking and event planning.
              Explore our diverse range of facilities, check rates, and reserve
              with ease. Let's make your events unforgettable!
            </p>
            <br>
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
        <h4 class="text-base md:text-lg lg:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit...
        </h4>
        <h1 class="text-lg md:text-xl lg:text-2xl">
          THIS IS FOR THE RANDOMIZED IMAGE CAROUSEL
        </h1>
      </div>

      <div class="bg-gray-100 p-4 md:p-8">
        <!-- Second section -->
        <p class="text-base md:text-lg lg:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit...
        </p>
        <p class="text-base md:text-lg lg:text-xl">
          Insert text here
        </p>
        <!-- Add more responsive text here -->
      </div>

      <!-- FAQs Section -->
      <div class="bg-gray-200 p-4 md:p-8">
        <h2 class="text-lg md:text-xl lg:text-2xl text-center font-semibold mb-4">
          Frequently Asked Questions
        </h2>
        <div class="mx-auto w-full max-w-lg">
          <div v-for="(faq, index) in faqs" :key="index" class="mb-4">
            <button
              class="bg-gray-400 w-full p-2 text-left font-semibold rounded-lg text-center"
              @click="toggleFAQ(index)"
            >
              {{ faq.question }}
            </button>
            <div v-if="faq.open" class="bg-white p-4 mt-2 rounded-lg">
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

<script>
import Navbar from "../Components/Navbar.vue";
import Footer from "../Components/Footer.vue";

export default {
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      faqs: [
      { question: 'What is this service?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', open: false },
        { question: 'How can I make a reservation?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', open: false },
        { question: 'Are there any additional fees?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', open: false },
        { question: 'How do I cancel a reservation?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', open: false },
      ],
    };
  },
  methods: {
    toggleFAQ(index) {
      this.faqs.forEach((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }
      });
    },
  },
};
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
</style>
