<template>
  <div>
    <header>
      <!-- Include your Navbar component -->
      <Navbar />
    </header>
    <div>
      <div class="headerdiv">
        <!-- Header content -->
        <h1 class="text-3xl font-serif ml-4">MMSU FACILITY RESERVATION</h1>
        <h4 class="text-xl italic text-gray-700 font-serif ml-4">Facilities</h4>
      </div>
      <div class="quote">
        <!-- Quote content -->
        <h2 class="text-xl font-serif ml-4">"Explore Our Diverse Facilities"</h2>
      </div>

      <div class="shadow-md bg-gray-100 shadow-gray-500">
        <div class="p-4">
          <div
            v-for="(facility, index) in availableFacilities"
            :key="index"
            class="bg-white rounded-lg shadow-md mb-4"
          >
            <!-- Facility Content -->
            <div class="md:flex md:items-start">
              <!-- Desktop view: Carousel on the left -->
              <div class="md:w-1/3 md:pr-4">
                <!-- Image Carousel -->
                <ImageCarousel :src="facility.images" option="full" />
              </div>

              <div class="md:w-2/3 md:pl-4">
                <!-- Mobile view: Carousel on top -->
                <div class="sm:hidden">
                  <!-- Image Carousel -->
                  <!-- <ImageCarousel :src="facility.images" option="full" /> -->
                </div>

                <!-- Facility Details -->
                <div class="px-4 py-2">
                  <h3 class="text-xl font-semibold mt-4">{{ facility.facility_name }}</h3>
                  <p class="text-sm text-gray-600 mb-2"><b>Location:</b> {{ facility.location }}</p>
                  <div class="tags-container mb-4">
                    <!-- Display tags here -->
                    <div
                      v-for="(tag, tagIndex) in facility.tagsArray"
                      :key="tagIndex"
                      class="tag-box inline-block bg-gray-200 rounded-md text-xs px-2 py-1 mr-2 mb-2 hover:bg-gray-300"
                    >
                      {{ tag }}
                    </div>
                  </div>
                  <p class="text-sm text-gray-600 mb-2">{{ facility.shortdes }}</p>
                </div>
                <!-- More details -->
                <div class="flex flex-col sm:flex-row sm:items-center p-4">
                  <div class="text-sm text-gray-600 mb-2 sm:mb-0 sm:mr-4 sm:w-1/3 flex-grow sm:text-left">
                    <b>Capacity:</b> {{ facility.capacity }}
                  </div>
                  <div class="text-sm text-gray-600 mb-2 sm:mb-0 sm:mr-4">
                    <!-- Title for prices -->
                    <p class="mb-2"><b>Rental Price:</b></p>
                    <!-- Display prices -->
                    <div v-for="price in facility.prices" :key="price.id">
                      <!-- Display prices here -->
                      <p>
                        ₱ {{ price.amount }} per {{ price.hours }} hours
                        <span v-if="price.timePeriod === 1">(DAY TIME)</span>
                        <span v-else-if="price.timePeriod === 2">(NIGHT TIME)</span>
                      </p>
                    </div>
                  </div>
                  <!-- Space div in web view -->
                  <div class="hidden sm:block sm:w-1/12"></div>
                  <div class="sm:w-1/3 sm:text-center sm:ml-auto mt-4 sm:mt-0">
                    <!-- Buttons -->
                    <router-link
                      :to="{ name: 'viewmore', params: { facilityId: facility.id } }"
                      class="bg-green-800 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded transition duration-300 text-xs mr-2"
                    >
                      View More
                    </router-link>
                    <router-link
                      :to="{ name: 'reservenow', params: { facilityId: facility.id } }"
                      class="bg-green-800 hover:bg-yellow-400 text-white font-semibold py-3 px-6 rounded transition duration-300 text-xs"
                      active-class="active-link"
                      @click="selectFacility(facility.id)"
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



<script>
import Footer from '../Components/Footer.vue';
import Navbar from '../Components/Navbar.vue';
import axios from 'axios';
import ImageCarousel from '../Components/ImageCarousel.vue';


export default {
  components: {
    Navbar,
    Footer,
    ImageCarousel,
  },
  data() {
    return {
      facilities: [],
      tagsArray: [],
      selectedFacilityId: null,
    };
  },
  computed: {
    // Separating available and unavailable facilities
    availableFacilities() {
      return this.facilities.filter(facility => facility.availability === 1);
    },
    unavailableFacilities() {
      return this.facilities.filter(facility => facility.availability === 0);
    },
  },

  methods: {

    loadFacilities() {
        axios.get('/list-facilities').then(response => {
          this.facilities = response.data;

          // Fetch images for each facility
          this.facilities.forEach(facility => {
            axios.post('/imageList', { facilityId: facility.id }).then(imagesResponse => {
              // Assign fetched images to each facility
              facility.images = imagesResponse.data;
            }).catch(error => {
              console.error('Error fetching images for facility:', error);
            });
          });
        }).catch(error => {
          console.error('Error fetching facilities:', error);
        });
},

    selectFacility(facilityId) {
      this.selectedFacilityId = facilityId;
    },
  },
  mounted() {
    this.loadFacilities();
  },
};
</script>

<style scoped>
.headerdiv {
  background-color: #D9D9D9;
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
  background-color: #E2E8F0; 
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