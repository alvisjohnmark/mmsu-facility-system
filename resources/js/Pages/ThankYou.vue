<template>
    <div class="thanku-page">
      <h1 class="text-xl font-serif ml-10">Thank you! Your request has been submitted for review.Please check you email for Status Update of your reservation </h1>
      <br>
        <p><router-link to="/">Go Home</router-link></p>
    </div>
  </template>
  
  <script>
  export default {
      
  }
  </script>
  
  <style scoped>
  .thanku-page {
    height: 100vh; /* 100% of the viewport height */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  </style>
  