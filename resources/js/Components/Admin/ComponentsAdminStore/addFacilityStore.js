import { defineStore } from "pinia";
import ClassicEditor from "/js/ckeditor_custom";
import Swal from "sweetalert2";

export const addFacilities = defineStore("addFacilities", {
    state: () => {
        return {
            editor: ClassicEditor,
            editorData: "ckeditor 5 for laravel and vuejs",
            editorConfig: {},
            step: 1,
            name: "",
            shortdes: "",
            description: "",
            location: "",
            tags: "",
            capacity: 0,
            amount: "",
            monthFrom: "",
            monthTo: "",
            hours: "",
            timePeriod: "",
            prices: [],
            availability: "",
            months: [
                { value: 1, name: "January" },
                { value: 2, name: "February" },
                { value: 3, name: "March" },
                { value: 4, name: "April" },
                { value: 5, name: "May" },
                { value: 6, name: "June" },
                { value: 7, name: "July" },
                { value: 8, name: "August" },
                { value: 9, name: "September" },
                { value: 10, name: "October" },
                { value: 11, name: "November" },
                { value: 12, name: "December" },
            ],
            adminId: null,
        };
    },
    actions: {
        removePrice(index) {
            this.prices.splice(index, 1);
        },
        addPrice() {
            this.prices.push({
                amount: this.amount,
                monthFrom: this.monthFrom,
                monthTo: this.monthTo,
                hours: this.hours,
                timePeriod: this.timePeriod,
            });

            // Clear the form fields after adding a price
            this.amount = "";
            this.monthFrom = "";
            this.monthTo = "";
            this.hours = "";
            this.timePeriod = "";
        },

        nextStep(step) {
            this.step = step;
        },

        prevStep(step) {
            this.step = step;
        },

        async fetchLoggedInAdminId() {
            try {
                const response = await axios.get("/get-admin-id");
                return response.data.admin_id;
            } catch (error) {
                console.error("Error getting logged-in admin ID:", error);
                throw error;
            }
        },

        async saveData() {
            try {
                this.adminId = await this.fetchLoggedInAdminId();

                if (!this.adminId) {
                    console.error(
                        "Admin ID not available. Unable to save data."
                    );
                    return;
                }

                const facilityForm = {
                    admin_id: this.adminId,
                    name: this.name,
                    shortdes: this.shortdes,
                    description: this.description,
                    location: this.location,
                    tags: this.tags,
                    availability: this.availability,
                    capacity: this.capacity,
                    hours: this.hours,
                    timePeriod: this.timePeriod,
                    prices: this.prices,
                };

                const response = await axios.post(
                    "/save-facility",
                    facilityForm
                );
                console.log(
                    "Facility data successfully uploaded:",
                    response.data
                );
                const facilityId = response.data.id;

                await this.savePrices(facilityId);
            } catch (error) {
                console.error("Error uploading facility data:", error);
            }
        },

        async savePrices(facilityId) {
            const pricesData = this.prices.map((price) => ({
                facility_id: facilityId,
                amount: price.amount,
                monthFrom: price.monthFrom,
                monthTo: price.monthTo,
                hours: price.hours,
                timePeriod: price.timePeriod,
            }));

            try {
                const response = await axios.post(
                    "/facility-prices",
                    pricesData
                );
                console.log(
                    "Prices data successfully uploaded:",
                    response.data
                );
                this.resetForm();
                Swal.fire({
                    title: "Facility saved!",
                    text: "Your Facility have been saved successfully.",
                    icon: "success",
                }).then(() => {
                    this.router.push("/admin/adminfacilities");
                });
            } catch (error) {
                console.error("Error uploading prices data:", error);
            }
        },

        resetForm() {
            this.step = 1;
            this.name = "";
            this.shortdes;
            this.description = "";
            this.location = "";
            this.availability = "";
            (this.tags = ""), (this.capacity = 0);
            this.amount = "";
            this.monthFrom = "";
            this.monthTo = "";
            this.hours = "";
            (this.timePeriod = ""), (this.prices = []);
        },

        async mounted() {
            this.editorData = "";
            await this.fetchLoggedInAdminId();
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
            return months[monthValue - 1];
        },

        displayEditorResult() {
            document.getElementById("resultingText").innerHTML =
                this.editorData;
        },

        emptyEditor() {
            this.editorData = "";
        },
    },
});
