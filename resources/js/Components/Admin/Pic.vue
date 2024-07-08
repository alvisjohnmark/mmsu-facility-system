<template lang="">
    <div class="flex flex-row w-full">
        <!--Main-->
        <aside class="sticky top-0 shadow-lg shadow-gray-500 w-80 h-screen">
            <!--Side Nav-->

            <div class="flex items-center justify-center h-14 mt-20">
                <img src="/src/mmsu-logo.png" alt="Logo" class="w-36" />
            </div>

            <div class="grid grid-cols-1 mt-20">
                <router-link
                    to="/admin/admindashboard"
                    class="block px-4 py-2 text-gray-800 router-link"
                    trigger="hover"
                    active-class="active-link"
                >
                    <span class="flex items-center">
                        <lord-icon
                            src="https://cdn.lordicon.com/wmwqvixz.json"
                            trigger="morph"
                            state="morph-home-3"
                            colors="primary:#ffffff"
                            class="w-7 h-7 mr-2"
                        />
                        Dashboard
                    </span>
                </router-link>
                <router-link
                    to="/admin/admincalendar"
                    class="block px-4 py-2 text-gray-800 router-link"
                    active-class="active-link"
                >
                    <span class="flex items-center">
                        <lord-icon
                            src="https://cdn.lordicon.com/wmlleaaf.json"
                            trigger="hover"
                            colors="primary:#ffffff"
                            class="w-7 h-7 mr-2"
                        />
                        Calendar
                    </span>
                </router-link>
                <router-link
                    to="/admin/adminreservation"
                    class="block px-4 py-2 text-gray-800 router-link"
                    active-class="active-link"
                >
                    <span class="flex items-center">
                        <lord-icon
                            src="https://cdn.lordicon.com/omiqopzf.json"
                            trigger="hover"
                            colors="primary:#ffffff"
                            class="w-7 h-7 mr-2"
                        />
                        Reservation
                    </span>
                </router-link>
                <router-link
                    to="/admin/adminfacilities"
                    class="block px-4 py-2 text-gray-800 router-link"
                    active-class="active-link"
                >
                    <span class="flex items-center">
                        <lord-icon
                            src="https://cdn.lordicon.com/ipnwkgdy.json"
                            trigger="hover"
                            colors="primary:#ffffff"
                            class="w-7 h-7 mr-2"
                        />
                        Facilities
                    </span>
                </router-link>
                <router-link
                    to="/admin/adminservices"
                    class="block px-4 py-2 text-gray-800 router-link"
                    active-class="active-link"
                >
                    <span class="flex items-center">
                        <lord-icon
                            src="https://cdn.lordicon.com/iazmohzf.json"
                            trigger="hover"
                            colors="primary:#ffffff"
                            class="w-7 h-7 mr-2"
                        />
                        Services
                    </span>
                </router-link>
                <router-link
                    to="/admin/adminreport"
                    class="block px-4 py-2 text-gray-800 router-link"
                    active-class="active-link"
                >
                    <span class="flex items-center">
                        <lord-icon
                            src="https://cdn.lordicon.com/yrbmguoo.json"
                            trigger="hover"
                            colors="primary:#ffffff"
                            class="w-7 h-7 mr-2"
                        />
                        Report
                    </span>
                </router-link>
                <router-link
                    to="/admin/login"
                    class="block px-4 py-2 text-gray-800 router-link"
                    active-class="active-link"
                >
                    <span class="flex items-center">
                        <lord-icon
                            src="https://cdn.lordicon.com/whtfgdfm.json"
                            trigger="hover"
                            colors="primary:#ffffff"
                            class="w-7 h-7 mr-2"
                        />
                        Logout
                    </span>
                </router-link>
            </div>
        </aside>
        <!--Side Bav End-->

        <div
            class="bg-gray-100 shadow-xl h-screen w-full"
            style="overflow: auto"
        >
            <!--Content-->
            <div
                class="grid grid-cols-1 flex flex-row border-b-4 border-yellow-400"
            >
                <!--Sub Nav-->
                <div
                    class="shadow-md h-20 flex justify-between items-center"
                    style="background-color: #0c4b05"
                >
                    <span
                        class="flex items-center text-white ml-5 text-xl font-semibold"
                        style="font-family: Advantage"
                    >
                        <img
                            src="\Icons\Gallery.gif"
                            alt="Gallery Icon"
                            class="w-10 h-10 mr-2"
                        />
                        Gallery
                    </span>
                    <router-link
                        to="/admin/adminfacilities"
                        class="flex items-center text-white text-xl font-semibold mr-7 router-link"
                        active-class="active-link"
                        style="font-family: Advantage"
                    >
                        <lord-icon
                            src="https://cdn.lordicon.com/ipnwkgdy.json"
                            trigger="hover"
                            colors="primary:#ffffff"
                            style="width: 10; height: 10"
                            class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300 mr-2"
                        >
                        </lord-icon>
                        Facilities
                    </router-link>
                </div>
            </div>

            <div
                class="bg-gray-100 shadow-xl h-screen w-full"
                style="font-family: Advantage"
            >
                <!--Content-->

                <div class="p-8">
                    <!-- Upload Section -->
                    <div class="mb-6">
                        <form
                            @submit.prevent="add.uploadImage"
                            class="flex items-center"
                        >
                            <label
                                for="uploadInput"
                                class="upload-btn bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300"
                            >
                                Select Image
                                <input
                                    type="file"
                                    id="uploadInput"
                                    @change="add.onFileChange"
                                    style="display: none"
                                    name="image"
                                />
                            </label>
                            <button
                                type="submit"
                                class="bg-white hover:bg-green-700 text-gray-800 hover:text-white font-semibold border-gray-600 border-2 px-4 py-2 ml-4 rounded-md cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300"
                            >
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
                                <tr
                                    v-for="(image, index) in add.image_list"
                                    :key="index"
                                    class="border-b border-gray-200"
                                >
                                    <td class="py-4">
                                        <img
                                            :src="add.image.url"
                                            alt="Uploaded Image"
                                            class="justify-center max-w-full h-auto"
                                            style="
                                                max-width: 100px;
                                                max-height: 100px;
                                            "
                                        />
                                    </td>
                                    <td class="py-4">
                                        <button
                                            @click="add.deleteImage(image.id)"
                                            class="bg-red-500 text-white px-4 py-2 rounded-md cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <!--Content End-->
    </div>
</template>

<script setup>
import { addPic } from "./ComponentsAdminStore/addPic.js";
import { onMounted } from "vue";
const add = addPic();
onMounted(() => {
    add.fetchImageList();
});
</script>

<style scoped>
/* Your component-specific styles can go here */
.custom-shadow {
    box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.35);
}

/* Add hover effect to change text color to white and background to #0C4B05 */
.router-link:hover {
    color: white;
    background-color: #0c4b05; /* Change this to your desired color */
}

/* Define active link class for white text color and green-800 background */
.active-link {
    color: white;
    background-color: #0c4b05; /* Change this to your desired green-800 color code */
}

.upload-btn {
    display: inline-block;
    padding: 10px 20px;
    background-color: #0c4b05;
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
