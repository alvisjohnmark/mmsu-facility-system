import { defineStore } from "pinia";

export const adminDashboard = defineStore("adminDashboard", {
    state: () => {
        return {
            isSidePanelOpen: true,
            showModal: false,
            reservationCount: 0,
            facilityCount: 0,
            adminName: "",
        };
    },
    actions: {
        fetchReservationCount() {
            axios
                .get("/getreservationcount") // Update with your actual endpoint
                .then((response) => {
                    this.reservationCount = response.data.reservation_count;
                })
                .catch((error) => {
                    console.error("Error fetching reservation count:", error);
                });
        },
        fetchFacilityCount() {
            axios
                .get("/getfacilitiescount")
                .then((response) => {
                    this.facilityCount = response.data.facilityCount; // Update facilityCount with fetched count
                })
                .catch((error) => {
                    console.error("Error fetching facility count", error);
                });
        },

        getAdminName() {
            axios
                .get("/adminname")
                .then((response) => {
                    this.adminName = response.data.adminName; // Update adminName with fetched name
                })
                .catch((error) => {
                    console.error("Error fetching admin name", error);
                });
        },

        toggleSidePanel() {
            this.isSidePanelOpen = !this.isSidePanelOpen;
        },
        openModal() {
            this.showModal = true;
        },
        closeModal() {
            this.showModal = false;
        },
        animateCount(element, start, end, duration) {},

        logout() {
            axios.post("/logout").then(({ data }) => {
                this.checkUser();
            });
        },
        
        checkUser() {
            axios.post("/check-user").then(({ data }) => {
                if (!data) {
                    window.location.reload()
                    this.$router.push("/admin/login");
                }
            });
        },
    },
});
