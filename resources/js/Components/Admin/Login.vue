<template>
  <div class="background bg-gray-100">
    <div class="flex justify-center items-center h-screen">
      <div class="bg-white shadow-md shadow-gray-500 rounded-xl p-8 mt-2" style="width: 516px; height: 670px; font-family: 'Advantage', serif;">
        <img src="\src\mmsu-logo.png" alt="Your Logo" class="mx-auto mb-2 mt-0" style="max-width: 230px;">
        <form @submit.prevent="login">
          <div class="mb-4" style="margin-top: 3rem;">
            <input type="text" id="username" v-model="username" class="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-green-800 focus:border-green-800" placeholder="Username" required>
          </div>
          <div class="mb-4" style="margin-bottom: 2rem;">
            <input type="password" id="password" v-model="password" class="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-green-800 focus:border-green-800" placeholder="Password" required>
          </div>
          <div v-if="error" class="notification">
            <div class="icon-container">
              <lord-icon
                src="https://cdn.lordicon.com/keaiyjcx.json"
                trigger="in"
                delay="100"
                state="in-error"
                colors="primary:#ff0000"
                style="width: 50px; height: 50px;"
              ></lord-icon>
              <p>{{ error }}</p>
            </div>
          </div>
          <div class="flex items-center mb-4" style="margin-top: 2rem;">
            <input type="checkbox" id="remember" name="remember" class="mr-2">
            <label for="remember" class="text-gray-700">Remember me</label>
          </div>
          <div class="mb-4" style="margin-top: 1rem;">
            <a href="#" class="text-green-800 hover:underline">Forgot password?</a>
          </div>
          <div class="flex justify-center mt-20">
            <button type="submit" class="w-56 h-10 rounded-xl hover bg-green-800 text-white text-lg px-4 py-2 shadow-md lift-hover flex items-center justify-center">Login</button>
          </div>
          
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      username: '',
      password: '',
      error: '',
    };
  },
  methods: {
    showNotification(message) {
      this.error = message;
      setTimeout(() => {
        this.error = '';
      }, 3000); // Adjust as needed
    },
    
    async login() {
      this.error = '';

      if (!this.username || !this.password) {
        this.showNotification('Please enter both username and password.');
        return;
      }

      const requestData = {
        username: this.username,
        password: this.password,
      };

      axios.post('/login', requestData).then(({ data }) => {
        if (data === 1) {
          this.$router.push('/admin/admindashboard');
          window.location.reload();
        } else {
          this.showNotification('Incorrect username or password');
        }
      });
    },
  },
};
</script>

<style scoped>
/* Your component-specific styles can go here */

.background {
  background-image: url('/src/MMSU_facade.jpg'); /* Adjust the path as needed */
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 100vh;
}

.lift-hover {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.lift-hover:hover {
  transform: translateY(-2px);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.notification {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 25px;
  background-color: rgb(254 202 202);/* Adjust the alpha value for transparency */
  color: #ff0000; /* Adjust the text color */
  border-radius: 5px;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.icon-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>
