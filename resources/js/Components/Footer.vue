<template>
    <footer class="custom-footer">
      <div class="flex items-center justify-center">
        <div class="container p-7 center-text"> <!-- Added 'center-text' class -->
          <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
            <!-- Quick Links -->
            <div class="footer-section">
              <h5 class="footer-heading">Quick Links</h5>
              <ul class="list-none mt-2">
                <li>
                  <router-link to="/about" class="footer-link">About Us</router-link>
                </li>
                <li>
                  <router-link to="/facilities" class="footer-link">Facilities</router-link>
                </li>
              </ul>
            </div>
  
            <!-- Connect With Us -->
            <div class="footer-section">
              <h5 class="footer-heading">Connect With Us</h5>
              <ul class="list-none mt-2">
                <li><a href="https://www.facebook.com" class="footer-link">Facebook Page</a></li>
                <li><a href="https://www.mmsu.edu.ph" class="footer-link">MMSU Website</a></li>
              </ul>
            </div>
  
            <!-- Contact Us -->
            <div class="footer-section">
              <h5 class="footer-heading">Contact Us</h5>
              <ul class="list-none mt-2">
                <li>Email: <a href="mailto:contact@example.com" class="footer-link">contact@example.com</a></li>
                <li>Phone: <a href="tel:+123456789" class="footer-link">+123 456 789</a></li>
                <li>Owner: John Doe</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Copyright section -->
      <div class="footer-copyright">
        © 2023 OJT GROUP
        <!-- <a class="footer-link" href="https://yourwebsite.com">Your Website</a> -->
      </div>
    </footer>
  </template>
  
  <script>
  import { RouterLink } from "vue-router"
  
  export default {
      name: "Footer",
  

  };
  </script>
  
  <style scoped>
  .center-text {
    text-align: center;
  }
  .custom-footer {
  background-color: #0C4B05;
  color: white;
  border-top: 10px solid #FFCD00;
  text-align: center;
}

.footer-section {
  margin-bottom: 20px;

}

.footer-heading {
  font-weight: bold;
  text-transform: uppercase;
  color: #ffffff;
}

.footer-link {
  color: #ffffff;
  text-decoration: none;
}

.footer-link:hover {
  text-decoration: underline;
}

.footer-copyright {
  background-color: #0c7a00;
  color: white;
  text-align: center;
  padding: 1rem 0;
}

.footer-copyright a {
  color: #FFCD00;
  text-decoration: none;
}

.footer-copyright a:hover {
  text-decoration: underline;
}

/* Added CSS for sticky footer */
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
}

#app {
  min-height: 100%;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
}

  </style>
  
  