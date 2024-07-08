import { defineStore } from "pinia";

export const adminServices = defineStore("adminServices", {
    state: () => {
        return {
            services: [],
        };
    },
    actions: {
        fetchServices() {
            axios
                .get("/get-services")
                .then((response) => {
                    this.services = response.data; // Assuming the services are returned as an array
                })
                .catch((error) => {
                    console.error("Error fetching services:", error);
                });
        },

        editService(serviceId) {
            this.$router.push({
                name: "edit-services",
                params: { id: serviceId },
            });
        },

        deleteService(index) {
            // Confirm delete action using SweetAlert or any other confirmation approach
            Swal.fire({
                title: "Are you sure?",
                text: "You will not be able to recover this service!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#d33",
                cancelButtonColor: "#3085d6",
                confirmButtonText: "Yes, delete it!",
            }).then((result) => {
                if (result.isConfirmed) {
                    // Call backend to delete the service
                    const serviceIdToDelete = this.services[index].id; // Assuming the service has an 'id'
                    axios
                        .delete(`/delete-services/${serviceIdToDelete}`)
                        .then((response) => {
                            // Remove the service from the local array after successful deletion
                            this.services.splice(index, 1);
                            Swal.fire(
                                "Deleted!",
                                "Your service has been deleted.",
                                "success"
                            );
                        })
                        .catch((error) => {
                            console.error("Error deleting service:", error);
                            Swal.fire(
                                "Error!",
                                "Failed to delete service.",
                                "error"
                            );
                        });
                }
            });
        },

        getMonthName(monthValue) {
            const months = [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
            ];

            return months[monthValue - 1] || ""; // Subtract 1 because JavaScript's month index starts from 0
        },

        logout() {
            axios.post("/logout").then(({ data }) => {
                this.checkUser();
            });
        },
        checkUser() {
            axios.post("/check-user").then(({ data }) => {
                if (!data) {
                    window.location.reload(); // Reload the page after redirecting to login
                    this.$router.push("/admin/login");
                }
            });
        },
    },
});
