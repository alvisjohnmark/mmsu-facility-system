
require('./bootstrap');

import App from './Components/App.vue';
import Navbar from './Components/Navbar.vue';
import Footer from './Components/Footer.vue'
import ImageCarousel from './Components/ImageCarousel.vue'
import AdminDashboard from './Pages/Admin/AdminDashboard.vue';
import Addfacilities from './Components/Admin/Addfacilities.vue';
import Addservices from './Components/Admin/Addservices.vue';
import EditServices from './Components/Admin/EditServices.vue';
import ReviewForm from './Components/ReviewForm.vue';
import { createApp, markRaw } from 'vue/dist/vue.esm-bundler.js';
import { createRouter, createWebHistory, useRoute } from 'vue-router'
import router from "./router"
import { createPinia } from 'pinia';
import '../css/app.css';
import VueSplide from '@splidejs/vue-splide';
import CKEditor from '@ckeditor/ckeditor5-vue';
import FullCalendar from '@fullcalendar/vue3';

// pinia js

const pinia = createPinia()

pinia.use(({store}) => {
    store.router = markRaw(router)
    store.route = markRaw(useRoute())
})

const app = createApp(App);

app.use(pinia);
app.use(router);
app.component('Navbar', Navbar);
app.component('Footer', Footer);
app.component('ImageCarousel', ImageCarousel);
app.component('AdminDashboard', AdminDashboard);
app.component('Addfacilities', Addfacilities);
app.component('Addservices', Addservices);
app.component('EditServices', EditServices);
app.component('ReviewForm', ReviewForm);

app.mount('#app');
app.use(CKEditor);
app.use( VueSplide );

app.mixin({
  data() {
    return {
      authenticated: window.authenticated,
    };
  },
});