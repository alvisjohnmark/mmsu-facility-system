import { defineStore } from "pinia";
import "@fortawesome/fontawesome-free/css/all.min.css";

export const viewmoreStore = defineStore("viewmoreStore", {
    state: () => {
        return {
            facility: {},
            facilityPrices: [],
            tagsArray: [],
            reviews: [],
            displayedReviews: [],
            selectedFacilityId: null,

            facilityImages: [], // Example data declaration
            images: [],

            overallRating: 0,
            showReviewForm: false,
            averageRating: null,
            totalReviews: 0,
            showAll: false,
        };
    },
    actions: {
        selectFacility(facilityId) {
            this.selectedFacilityId = facilityId;
        },

        goBack() {
            // Redirect to /facilities when canceled
            this.router.push("/facilities");
        },
        loadFacilityDetails() {
            const facilityId = this.route.params.facilityId;

            // Get the current month (assuming it's 1-12)
            const currentMonth = new Date().getMonth() + 1;

            axios.get(`/list-facilities/${facilityId}`).then((response) => {
                this.facility = response.data;
                console.log(this.facility);
            });

            axios.get(`/facility-pricing/${facilityId}`).then((response) => {
                // Filter prices for the current month
                const prices = response.data;
                this.facilityPrices = prices.filter((price) => {
                    return (
                        (price.monthFrom <= currentMonth &&
                            price.monthTo >= currentMonth) ||
                        price.monthTo === null // Include prices that are indefinite
                    );
                });
            });
        },

        fetchFacilityReviews() {
            const facilityId = this.route.params.facilityId;
            axios
                .get(`/facility-reviews/${facilityId}`)
                .then((response) => {
                    this.reviews = response.data.reviews;
                    this.reviews = response.data.reviews;
                    // Compute overall rating based on fetched reviews
                    this.computeOverallRating();
                    // Show top 5 reviews initially
                    this.displayedReviews = this.reviews.slice(0, 5);
                })
                .catch((error) => {
                    console.error("Error fetching reviews:", error);
                });
        },

        computeOverallRating() {
            // Calculate overall rating based on fetched reviews
            if (this.reviews.length > 0) {
                const sum = this.reviews.reduce(
                    (acc, review) => acc + review.rating,
                    0
                );
                this.overallRating = Math.round(sum / this.reviews.length);
            }
        },

        showAllReviews() {
            // Show all reviews when View More button is clicked
            this.displayedReviews = this.reviews;
        },

        closeReviewForm() {
            this.showReviewForm = false;
        },

        toggleReviews() {
            // Change the displayed reviews based on the flag
            if (this.showAll) {
                this.displayedReviews = this.reviews.slice(0, 5); // Show only the top 5 reviews
            } else {
                this.displayedReviews = this.reviews; // Show all reviews
            }
            // Toggle the flag value
            this.showAll = !this.showAll;
        },

        formatDate(timestamp) {
            const date = new Date(timestamp);
            // Format the date as needed (e.g., MM/DD/YYYY)
            const formattedDate = `${
                date.getMonth() + 1
            }/${date.getDate()}/${date.getFullYear()}`;
            return formattedDate;
        },
    },
    getters: {
        averageRating() {
            if (this.reviews.length === 0) {
                return 0; // Return default value when there are no reviews
            }

            const sum = this.reviews.reduce(
                (acc, review) => acc + review.rating,
                0
            );
            return Math.round(sum / this.reviews.length);
        },
    },
});
