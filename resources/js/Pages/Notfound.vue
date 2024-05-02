<template>
    <div class="not-found-page">
      <h1>Not Found</h1>
      <p>Oops, we couldn't find the page. Try going <router-link to="/">Home</router-link></p>
    </div>
  </template>
  
  <script>
  export default {
      
  }
  </script>
  
  <style scoped>
  .not-found-page {
    height: 100vh; /* 100% of the viewport height */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;  
  }
  </style>
  