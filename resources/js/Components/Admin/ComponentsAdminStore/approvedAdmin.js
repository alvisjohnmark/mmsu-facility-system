import { defineStore } from "pinia";

export const approvedAdmin = defineStore("approvedAdmin", {
    state: () => {
        return {
            expanded: true,
            isSidePanelOpen: true,
            showModal: false,
            status: "Approved",
            notification: null,
        };
    },
    actions: {
        showNotification(message, statusClass) {
            this.notification = { message, statusClass };
            setTimeout(() => {
                this.notification = null;
            }, 3000); // Hide the notification after 3 seconds (adjust as needed)
        },
        approveReservation() {
            this.status = "Approved";
            this.showNotification(
                "Reservation Approved!",
                "notification-success"
            );
        },
        rescheduleReservation() {
            this.status = "Reschedule";
            this.showNotification(
                "Reservation Rescheduled!",
                "notification-reschedule"
            );
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
    },
    getters: {
        statusClass() {
            return {
              'bg-yellow-500': this.status === 'Pending',
              'bg-green-800': this.status === 'Approved',
              'bg-yellow-400': this.status === 'Reschedule', // Use 'bg-red-800' for the Reschedule status
              // Add more conditions for other statuses if needed
            };
          },
    }
});
