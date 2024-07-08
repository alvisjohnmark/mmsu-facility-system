import { defineStore } from "pinia";
// import reservationModal from "../ReservationModal.vue"; /fix path

export const adminReservation = defineStore("adminReservation", {
    state: () => {
        return {
            // components: {
            //     reservationModal,  /fix 
            // },
            expanded: false,
            reservations: [],
            isSidePanelOpen: true,
            showModal: false,
            selectedReservation: [],
            selectedStatus: "all",
            filteredReservations: [],
            status: "Pending",
            notification: null,
            showRescheduleModal: false,

            modifiedReservation: {
                reservation_details: {
                    eventDateFrom: "",
                    eventDateTo: "",
                },
            },
        };
    },
    actions: {
        filterReservations() {
            if (this.selectedStatus === "all") {
                this.filteredReservations = this.reservations; // Show all reservations
            } else {
                const selectedStatus = parseInt(this.selectedStatus);
                this.filteredReservations = this.reservations.filter(
                    (reservation) =>
                        reservation.reservation_details.Status ===
                        selectedStatus
                );
            }
        },

        showStartDatePicker() {
            flatpickr("#startDatePicker", {
                dateFormat: "Y-m-d",
                onClose: (selectedDates) => {
                    this.modifiedReservation.reservation_details.eventDateFrom =
                        selectedDates[0];
                },
                // Add other Flatpickr options if needed
            }).open();
        },
        showEndDatePicker() {
            flatpickr("#endDatePicker", {
                dateFormat: "Y-m-d",
                onClose: (selectedDates) => {
                    this.modifiedReservation.reservation_details.eventDateTo =
                        selectedDates[0];
                },
                // Add other Flatpickr options if needed
            }).open();
        },

        toggleExpand() {
            this.expanded = !this.expanded;
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

        loadAdminReservations() {
            axios
                .get("/reservations") // Adjust the API endpoint to fetch admin-specific reservations
                .then(({ data }) => {
                    this.reservations = data;
                    this.filteredReservations = data;
                })
                .catch((error) => {
                    console.error("Error loading admin reservations:", error);
                });
        },

        showNotification(message, statusClass) {
            this.notification = { message, statusClass };
            setTimeout(() => {
                this.notification = null;
            }, 3000); // Hide the notification after 3 seconds (adjust as needed)
        },

        //-------------------APPROVE RESERVATION-------------------------//
        approveReservation(reservationId) {
            axios
                .post(`/approve-reservation/${reservationId}`)
                .then((response) => {
                    // Assuming the API returns the updated reservation data,
                    // you might want to update the local data or refresh the reservation list
                    this.loadAdminReservations(); // Update the reservations after approval
                    this.showNotification(
                        "Reservation Approved!",
                        "notification-success"
                    );
                    // Show SweetAlert2 confirmation
                    Swal.fire({
                        title: "Approved!",
                        text: "This Reservation has been approved",
                        icon: "success",
                    });
                })
                .catch((error) => {
                    console.error("Error approving reservation:", error);
                    this.showNotification(
                        "Failed to approve reservation",
                        "notification-error"
                    );
                });
        },

        //----------------------DECLINE THE RESERVATION-----------------//
        confirmDecline(reservationId) {
            Swal.fire({
                title: "Are you sure?",
                text: "You will not be able to recover this reservation!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#d33",
                cancelButtonColor: "#3085d6",
                confirmButtonText: "Decline",
            }).then((result) => {
                if (result.isConfirmed) {
                    this.declineReservation(reservationId);
                }
            });
        },
        declineReservation(reservationId) {
            axios
                .post(`/cancel-reservation/${reservationId}`)
                .then((response) => {
                    this.loadAdminReservations(); // Update the reservations after decline
                    this.showNotification(
                        "Reservation Declined!",
                        "notification-cancelled"
                    );

                    // Show SweetAlert2 confirmation
                    Swal.fire(
                        "Declined!",
                        "This Reservation has been declined.",
                        "success"
                    );
                })
                .catch((error) => {
                    console.error("Error declining reservation:", error);
                    this.showNotification(
                        "Failed to decline reservation",
                        "notification-error"
                    );
                });
        },

        //-----------------RESCHEDULE--------------------------//
        openRescheduleModal(reservation) {
            this.selectedReservation = reservation;
            this.showRescheduleModal = true;
            this.modifiedReservation = { ...reservation }; // Create a copy for modifications
        },

        saveRescheduledReservation() {
            const reservationId =
                this.modifiedReservation.reservation_details.reservation_id;
            console.log(
                "Event Date From (before Axios):",
                this.modifiedReservation.reservation_details.eventDateFrom
            );
            console.log(
                "Event Date To (before Axios):",
                this.modifiedReservation.reservation_details.eventDateTo
            );
            // Format the date to 'YYYY-MM-DD HH:MM:SS' before sending to the server
            const formattedEventDateFrom = new Date(
                this.modifiedReservation.reservation_details.eventDateFrom
            )
                .toISOString()
                .slice(0, 19)
                .replace("T", " ");
            const formattedEventDateTo = new Date(
                this.modifiedReservation.reservation_details.eventDateTo
            )
                .toISOString()
                .slice(0, 19)
                .replace("T", " ");

            axios
                .post(`/reschedule-reservation/${reservationId}`, {
                    eventDateFrom: formattedEventDateFrom,
                    eventDateTo: formattedEventDateTo,
                    startTime:
                        this.modifiedReservation.reservation_details.startTime,
                    endTime:
                        this.modifiedReservation.reservation_details.endTime,
                })
                .then((response) => {
                    this.loadAdminReservations(); // Update the reservations after rescheduling
                    this.showNotification(
                        "Reservation Rescheduled!",
                        "notification-reschedule"
                    );
                    this.showRescheduleModal = false; // Close the modal after successful reschedule
                })
                .catch((error) => {
                    console.error("Error rescheduling reservation:", error);
                    this.showNotification(
                        "Failed to reschedule reservation",
                        "notification-error"
                    );
                });
        },

        //--------------COLOR OF STATUS ------------------//
        getStatusText(status) {
            switch (status) {
                case 0:
                    return "Pending";
                case 1:
                    return "Approved";
                case 2:
                    return "Finished";
                case 3:
                    return "Declined";
                default:
                    return "Unknown";
            }
        },

        toggleSidePanel() {
            this.isSidePanelOpen = !this.isSidePanelOpen;
        },
        openModal(reservation) {
            this.selectedReservation = reservation;
            this.showModal = true;
        },
        closeModal() {
            this.showModal = false;
        },
    },
    getters: {
        statusClass() {
            return {
                "bg-yellow-500": this.status === "Pending",
                "bg-green-800": this.status === "Approved",
                "bg-red-500": this.status === "Cancelled",
                "bg-yellow-400": this.status === "Reschedule",
            };
        },
    },
});
