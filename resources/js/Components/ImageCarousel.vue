<template>
  <div>
    <splide :options="options_check">
      <splide-slide class="w-full flex items-center" v-for="(image, index) in src" :key="index">
        <img :src="getImageUrl(image)"  />
      </splide-slide>
    </splide>
  </div>
</template>

<script>


export default {
  props: {
    option: String,
    src: Array,
  },
  data() {
    return {
      options_full: {
      rewind: true,
      autoWidth: true,
      heightRatio: 0.5,
      gap: '1rem',
      autoplay: true,
      perPage: 1, // Ensure this option is set to 1 to display one image at a time
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
    options_check() {
      if (this.option === 'full') return this.options_full;
      return this.options_tn;
    },
  },
  methods: {
    getImageUrl(image) {
      const baseUrl = '/storage/images/'; // Update with your base image storage path
      return baseUrl + image.filename;
      },

  },
};
</script>

<style scoped>

.custom-image {
  width: 100%; /* Adjust width as needed */
  height: auto; /* Maintain aspect ratio */
  max-width: 100%; /* Ensure image doesn't overflow */
  max-height: 100%; /* Ensure image doesn't overflow */
}

/* Customize the color of arrows */
.splide__arrow--prev,
.splide__arrow--next {
  color: red !important; /* Change to your desired arrow color */
}

/* Customize the color of indicators */
.splide__pagination__page {
  background-color: blue !important; /* Change to your desired indicator color */
}

/* Customize the active indicator color */
.splide__pagination__page.is-active {
  background-color: green !important; /* Change to your desired active indicator color */
}

</style>
