import { defineStore } from "pinia";

export const navbarStore = defineStore("navbarStore", {
    state: () => {
        return {
            mobileMenuOpen: false,
        };
    },
    actions: {
        toggleMobileMenu() {
            this.mobileMenuOpen = !this.mobileMenuOpen;
        },
    },
});
