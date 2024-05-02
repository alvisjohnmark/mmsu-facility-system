<template lang="">
  <div class="flex flex-row w-full"><!--Main-->
   <aside class="sticky top-0 shadow-lg shadow-gray-500 w-80 h-screen"><!--Side Nav-->
           
     <div class="flex items-center justify-center h-14 mt-20">
          <img src="/src/mmsu-logo.png" alt="Logo" class="w-36" />
       </div>

           <div class="grid grid-cols-1 mt-20">
            <router-link to="/admin/admindashboard" class="block px-4 py-2 text-gray-800 router-link" trigger="hover" active-class="active-link">
                    <span class="flex items-center">
                        <lord-icon src="https://cdn.lordicon.com/wmwqvixz.json" trigger="morph" state="morph-home-3" colors="primary:#ffffff" class="w-7 h-7 mr-2" />
                        Dashboard
                    </span>
                </router-link>
                <router-link to="/admin/admincalendar" class="block px-4 py-2 text-gray-800 router-link" active-class="active-link">
                    <span class="flex items-center">
                        <lord-icon src="https://cdn.lordicon.com/wmlleaaf.json" trigger="hover" colors="primary:#ffffff" class="w-7 h-7 mr-2" />
                        Calendar
                    </span>
                </router-link> 
                <router-link to="/admin/adminreservation" class="block px-4 py-2 text-gray-800 router-link" active-class="active-link">
                    <span class="flex items-center">
                      <lord-icon src="https://cdn.lordicon.com/omiqopzf.json" trigger="hover" colors="primary:#ffffff" class="w-7 h-7 mr-2" />
                        Reservation 
                    </span>
                </router-link>
                <router-link to="/admin/adminfacilities" class="block px-4 py-2 text-gray-800 router-link" active-class="active-link">
                    <span class="flex items-center">
                      <lord-icon src="https://cdn.lordicon.com/ipnwkgdy.json"  trigger="hover" colors="primary:#ffffff" class="w-7 h-7 mr-2" />
                        Facilities 
                    </span>
                </router-link>
                <router-link to="/admin/adminservices" class="block px-4 py-2 text-gray-800 router-link" active-class="active-link">
                    <span class="flex items-center">
                        <lord-icon src="https://cdn.lordicon.com/iazmohzf.json" trigger="hover" colors="primary:#ffffff" class="w-7 h-7 mr-2" />
                        Services 
                    </span>
                </router-link>              
                <router-link to="/admin/adminreport" class="block px-4 py-2 text-gray-800 router-link" active-class="active-link">
                    <span class="flex items-center">
                        <lord-icon src="https://cdn.lordicon.com/yrbmguoo.json" trigger="hover" colors="primary:#ffffff" class="w-7 h-7 mr-2" />
                        Report 
                    </span>
                </router-link> 
                <router-link to="/admin/login" class="block px-4 py-2 text-gray-800 router-link" active-class="active-link">
                    <span class="flex items-center">
                        <lord-icon src="https://cdn.lordicon.com/whtfgdfm.json" trigger="hover" colors="primary:#ffffff" class="w-7 h-7 mr-2" />
                        Logout 
                    </span>
                </router-link>
          
           </div>
       </aside><!--Side Bav End-->
 
       <div class="bg-gray-100 shadow-xl h-screen w-full" style="overflow: auto">
   <!--Content-->
   <div class="grid grid-cols-1 flex flex-row border-b-4 border-yellow-400">
       <!--Sub Nav-->
       <div class="shadow-md h-20 flex justify-between items-center" style="background-color: #0C4B05">
           
           <span class="flex items-center text-white ml-5 text-xl font-semibold" style="font-family: Advantage">
               <img src="\Icons\Gallery.gif" alt="Gallery Icon" class="w-10 h-10 mr-2" />
               Gallery
           </span>
           <router-link to="/admin/adminfacilities" class="flex items-center text-white text-xl font-semibold mr-7 router-link" active-class="active-link" style="font-family: Advantage">
              <lord-icon
                  src="https://cdn.lordicon.com/ipnwkgdy.json"
                  trigger="hover"
                  colors="primary:#ffffff"
                  style="width:10;height:10"
                  class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300 mr-2" >
              </lord-icon>
               Facilities
            </router-link>
          
       </div>
     </div>
        
            
     <div class="bg-gray-100 shadow-xl h-screen w-full" style="font-family: Advantage">
  <!--Content-->
 

  <div class="p-8">
    <!-- Upload Section -->
    <div class="mb-6">
      <form @submit.prevent="uploadImage" class="flex items-center">
        <label for="uploadInput" class="upload-btn bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300">
          Select Image
          <input type="file" id="uploadInput" @change="onFileChange" style="display: none;" name="image">
        </label>
        <button type="submit" class="bg-white hover:bg-green-700 text-gray-800 hover:text-white font-semibold border-gray-600 border-2 px-4 py-2 ml-4 rounded-md cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300">
          SAVE
        </button>
      </form>
    </div>

    <!-- Result Table -->
    <div class="result-table">
      <table class="w-full">
        <thead>
          <tr>
            <th class="text-left">Image</th>
            <th class="text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(image, index) in image_list" :key="index" class="border-b border-gray-200">
            <td class="py-4">
              <img :src="image.url" alt="Uploaded Image" class="justify-center max-w-full h-auto" style="max-width: 100px; max-height: 100px;">
            </td>
            <td class="py-4">
              <button @click="deleteImage(image.id)" class="bg-red-500 text-white px-4 py-2 rounded-md cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
           
       </div><!--Content End-->
     
   </div>
 </template>
   
   <script>
export default {
  data() {
    return {
      facilityId: this.$route.params.facilityId,
      image_list: [],
      image: {
        file: null,
      },
      previewImage: null,
    };
  },
  mounted() {
    this.fetchImageList();
  },
  methods: {
    onFileChange(event) {
      const files = event.target.files[0];
      if (files) {
        this.image.file = files;

        const fileReader = new FileReader();
        fileReader.onload = () => {
          this.previewImage = fileReader.result;
        };
        fileReader.readAsDataURL(files);
      }
    },
    fetchImageList() {
      axios.post('/imageList', { facilityId: this.facilityId })
        .then((response) => {
          this.image_list = response.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    deleteImage(id) {
      if (confirm('Are you sure you want to delete this Image?')) {
        axios.post(`/delete-image/` + id)
          .then((response) => {
            console.log('Image deleted:', response.data);
            if (response.data) {
              this.fetchImageList();
            }
          })
          .catch((error) => {
            console.error(error);
          });
      }
    },
    uploadImage() {
      if (!this.image.file) {
        alert('Please select an image to upload.');
        return;
      }

      const formData = new FormData();
      formData.append('image', this.image.file);

      const facilityId = this.$route.params.facilityId;

      formData.append('facilityId', facilityId); // Fixed the variable name

      axios.post('/upload-image', formData)
        .then((response) => {
          const imageData = response.data;
          this.image_list.push({ id: imageData.id, url: imageData.url });
          alert('Upload successful');
          this.image.file = null;
          this.previewImage = null;

          // Auto-reload after successful upload
          setTimeout(() => {
            window.location.reload();
          }, 1000); // Adjust the delay as needed
        })
        .catch((error) => {
          alert('Error uploading image: ' + error.message);
        });
    },

  },
};
</script>
   
   

   <style scoped>
     /* Your component-specific styles can go here */
     .custom-shadow {
       box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.35);
     }
   
     /* Add hover effect to change text color to white and background to #0C4B05 */
     .router-link:hover {
       color: white;
       background-color: #0C4B05; /* Change this to your desired color */
     }
   
     /* Define active link class for white text color and green-800 background */
.active-link {
  color: white;
  background-color: #0C4B05; /* Change this to your desired green-800 color code */
}

.upload-btn {
  display: inline-block;
  padding: 10px 20px;
  background-color: #0C4B05;
  color: #fff;
  cursor: pointer;
  border-radius: 5px;
}

/* Style for the result table */
.result-table {
  margin-top: 20px;
}

.result-table table {
  width: 100%;
  border-collapse: collapse;
}

.result-table th,
.result-table td {
  border: 1px solid #ccc;
  padding: 8px;
  text-align: center;
}

.result-table th {
  background-color: #f2f2f2;
}

</style>