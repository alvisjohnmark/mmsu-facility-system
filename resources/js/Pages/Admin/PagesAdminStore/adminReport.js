import { defineStore } from "pinia";

export const adminReport = defineStore("adminReport", {
    state: () => {
        return {
            isSidePanelOpen: true,
            showModal: false,
        };
    },
    actions: {
        toggleSidePanel() {
            this.isSidePanelOpen = !this.isSidePanelOpen;
        },
        openModal() {
            this.showModal = true;
        },
        closeModal() {
            this.showModal = false;
        },
        logout() {
            axios.post("/logout").then(({ data }) => {
                this.checkUser();
            });
        },
        checkUser() {
            axios.post("/check-user").then(({ data }) => {
                if (!data) {
                    this.$router.push("/admin/login");
                    window.location.reload(); // Reload the page after redirecting to login
                }
            });
        },
    },
});
