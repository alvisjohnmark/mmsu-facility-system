import { defineStore } from "pinia";

export const adminFacilities = defineStore("adminFacilities", {
    state: () => {
        return {
            expanded: false,
            isSidePanelOpen: true,
            showModal: false,
            facilities: [],
            a: ["Unavailable", "Available"],
        };
    },
    actions: {
        toggleExpand() {
            this.expanded = !this.expanded;
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

        loadAdminFacilities() {
            axios
                .get("/load-admin-facilities") // Send a GET request to fetch admin-specific facilities
                .then(({ data }) => {
                    this.facilities = data;
                })
                .catch((error) => {
                    console.error("Error loading admin facilities:", error);
                });
        },

        deleteFacility(id) {
            if (confirm("Are you sure?")) {
                axios
                    .post("/delete-facility/" + id)
                    .then(({ data }) => {
                        if (data) {
                            alert("Success");
                            this.loadAdminFacilities(); // Reload facilities after deletion
                        } else {
                            alert("Error");
                        }
                    })
                    .catch((error) => {
                        console.error("Error deleting facility:", error);
                        alert("Error deleting facility");
                    });
            } else {
                alert("Cancelled");
            }
        },

        editFacility(id) {
            // Here, you can implement the logic to edit a facility
            // For example, you can navigate to an edit facility page using router-link
            // Replace '/edit-facility/' with your desired route for editing a facility
            this.router.push("/EditFacilities/" + id);
        },
    },
});
