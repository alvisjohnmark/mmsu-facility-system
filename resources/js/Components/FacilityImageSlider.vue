<template>
    <div>
      <splide :options="selectedOptions">
        <splide-slide v-for="(image, index) in images" :key="index">
          <img :src="getImageUrl(image)" class="custom-image" />
        </splide-slide>
      </splide>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    props: {
      option: String,
      src: Array,
    },
    data() {
      return {
        images: [], // Define an empty array initially
  
        options_full: {
          rewind: true, 
          autoWidth: true,
          autoplay: true,
          perPage: 2, // Show 2 images at a time
          gap: 20, // Adjust the gap between images
          fixedWidth: '400px', // Adjust the width of the images
          height: '400px', // Adjust the height of the images
        },
        options_tn: {
          fixedWidth: '20rem',
          fixedHeight: '20rem',
          gap: 20,
          rewind: true, 
          pagination: false,
          autoplay: true,
        },
      };
    },
    computed: {
      selectedOptions() {
        return this.option === 'full' ? this.options_full : this.options_tn;
      },
    },
    methods: {
      async fetchImages() {
        try {
          const response = await axios.get(`/facility-images/${this.$route.params.facilityId}`);
          const fetchedImages = response.data.images;
          this.images = fetchedImages;
        } catch (error) {
          console.error('Error fetching images:', error);
        }
      },
  
      getImageUrl(image) {
        const baseUrl = '/storage/images/';
        return baseUrl + image.filename;
      },
    },
    async mounted() {
      await this.fetchImages();
    },
  };
  </script>
  
  <style scoped>
  .image-container {
    display: flex;
    justify-content: center;
  }
  .custom-image {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain; /* Maintain image aspect ratio */
  }
  </style>
  