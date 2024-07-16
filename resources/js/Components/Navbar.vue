<template>
    <nav
        class="flex-no-wrap relative flex w-full items-center justify-between bg-[#0C4B05] py-2 shadow-md lg:flex-wrap lg:justify-start lg:py-4"
    >
        <div class="flex w-full flex-wrap items-center justify-between px-3">
            <!-- Hamburger button for mobile view -->
            <button
                class="block border-0 bg-transparent px-2 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
                type="button"
                @click="toggleMobileMenu"
                aria-label="Toggle navigation"
            >
                <!-- Hamburger icon -->
                <span class="w-7">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="h-7 w-7"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                            clip-rule="evenodd"
                        />
                    </svg>
                </span>
            </button>

            <!-- Collapsible navigation container -->
            <div
                class="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto"
                id="navbarSupportedContent1"
                data-te-collapse-item
            >
                <!-- Logo -->
                <router-link to="/">
                    <img
                        src="\src\mmsu-logo.png"
                        style="height: 70px"
                        alt="TE Logo"
                        loading="lazy"
                        class="ml-20"
                    />
                </router-link>

                <!-- Left navigation links using router-link -->
                <ul
                    class="list-style-none ml-auto mr-auto flex flex-col pl-0 lg:flex-row"
                    data-te-navbar-nav-ref
                >
                    <li class="mb-4 lg:mb-0 lg:pr-10" data-te-nav-item-ref>
                        <!-- Facilities link -->
                        <router-link to="/facilities" class="text-white"
                            >Facilities</router-link
                        >
                    </li>
                    <li class="mb-4 lg:mb-0 lg:pr-10" data-te-nav-item-ref>
                        <!-- About link -->
                        <router-link to="/about" class="text-white"
                            >About</router-link
                        >
                    </li>
                    <li class="mb-4 lg:mb-0 lg:pr-10" data-te-nav-item-ref>
                        <!-- Contact link -->
                        <router-link to="/contact" class="text-white"
                            >Contact</router-link
                        >
                    </li>
                </ul>
            </div>

            <!-- Button for "Book Now" using router-link with right margin -->
            <!-- Button for "Book Now" using router-link with right margin -->
            <router-link
                v-if="$route.path !== '/facilities'"
                to="/facilities"
                class="bg-[#fbbd08] hover:bg-yellow-400 text-black font-bold py-2 px-4 rounded-lg mr-10"
                data-te-nav-link-ref
                >Book Now</router-link
            >
            <!-- <router-link
        :to="{ name: 'reservenow', params: { facilityId: null } }" 
        class="bg-[#fbbd08] hover:bg-yellow-400 text-black font-bold py-2 px-4 rounded-full  mr-10"
        data-te-nav-link-ref
      >Book Now</router-link> -->

            <!-- Side navigation container -->
            <div
                :class="{ 'lg:w-1/2': mobileMenuOpen }"
                class="bg-white fixed top-0 left-0 h-full overflow-auto z-50 lg:hidden shadow-md transition-all duration-300"
                v-show="mobileMenuOpen"
            >
                <!-- Side navigation content -->
                <div class="p-8">
                    <!-- Adjust the padding as needed -->
                    <!-- Close button (to close the side navigation) -->
                    <button
                        @click="toggleMobileMenu"
                        class="text-gray-600 hover:text-gray-800 focus:outline-none"
                    >
                        <!-- Close icon -->
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            class="h-6 w-6"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clip-rule="evenodd"
                            />
                        </svg>
                    </button>

                    <!-- Logo -->
                    <router-link to="/">
                        <img
                            src="\src\mmsu-logo.png"
                            style="height: 70px"
                            alt="Logo"
                            class="mt-4 mb-6 cursor-pointer hover:opacity-75"
                        />
                    </router-link>

                    <!-- Side navigation links -->
                    <ul>
                        <li>
                            <router-link to="/facilities"
                                >Facilities</router-link
                            >
                        </li>
                        <li>
                            <router-link to="/about">About</router-link>
                        </li>
                        <li>
                            <router-link to="/contact">Contact</router-link>
                        </li>
                        <!-- Add more router links or content here -->
                    </ul>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
import { RouterLink } from "vue-router";

export default {
    name: "Navbar",

    data() {
        return {
            mobileMenuOpen: false,
        };
    },
    methods: {
        toggleMobileMenu() {
            this.mobileMenuOpen = !this.mobileMenuOpen;
        },
    },
    components: {
        RouterLink,
    },
};
</script>

<style scoped>
nav {
    border-bottom: 5px solid #ffcd00;
}
</style>
