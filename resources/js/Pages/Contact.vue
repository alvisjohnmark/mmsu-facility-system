<template>
   <header>
        <Navbar />
      </header>
  <div>

    <div class="headerdiv">
          <h1 class="text-3xl font-serif ml-10">MMSU FACILITY RESERVATION</h1>
          <h4 class="text-xl italic text-gray-700 font-serif ml-10">Contact Us</h4>
    </div>

    <div class="contact-details">
      <p>Owner: John Doe</p>
      <p>Email: <a href="mailto:contact@example.com">contact@example.comasdads</a></p>
      <p>Phone: <a href="tel:+123456789">+123 456 789</a></p>
    </div>

    <!-- Map container with margins -->
    <div class="map-container">
      <div class="map-inner">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6153.270374637179!2d120.55082861184938!3d18.059708356058007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338ec1eaaaacac43%3A0x204fbb814dc4172e!2sMariano%20Marcos%20State%20University!5e0!3m2!1sen!2sph!4v1697176800284!5m2!1sen!2sph"
          width="100%"
          height="400"
          style="border:0;"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </div>
  <Footer>
     <Footer />
  </Footer>
 
</template>


<script>

import Navbar from "../Components/Navbar.vue"
import Footer from "../Components/Footer.vue"

export default {
    components:{
        Navbar,
        Footer
    }
}
</script>


<style scoped>

.headerdiv {
  background-color: #D9D9D9;
  padding: 20px;
  text-align: left;
}
.contact-details {
  margin: 20px;
  text-align: center;
}

.map-container {
  margin: 20px auto;
  text-align: center;
}

.map-inner {
  margin-left: 20px; /* Adjust the left margin for the map as needed */
  margin-right: 20px; /* Adjust the right margin for the map as needed */
}

.title-text {
  margin-left: 20px; /* Adjust the left margin for the title text as needed */
}
</style>
