<template>
    <div>
      <header>
        <Navbar />
      </header>
      <div>
        <div class="headerdiv">
          <h1 class="text-3xl font-serif ml-10">MMSU FACILITY RESERVATION</h1>
          <h4 class="text-xl italic text-gray-700 font-serif ml-10">About Us</h4>
        </div>
        <div>
          CAROUSEL OF FACILITIES HERE 
        </div>
        <div>
          CONTENT HERE
        </div>
      </div>

        <Footer />

    </div>
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
</style>