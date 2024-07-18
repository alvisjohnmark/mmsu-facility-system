import { defineStore } from "pinia";

export const facilitiesStore = defineStore("facilitiesStore", {
    state: () => {
        return {
            facilities: [],
            tagsArray: [], //useless
            selectedFacilityId: null,
            availability: null,
        };
    },
    actions: {
        getFacilities() {
            axios
                .get("/list-facilities")
                .then((response) => {
                    this.facilities = response.data;
                    console.log(this.facilities);

                    // Fetch images for each facility
                    this.facilities.forEach((facility) => {
                        axios
                            .post("/imageList", { facilityId: facility.id })
                            .then((imagesResponse) => {
                                // Assign fetched images to each facility
                                facility.images = imagesResponse.data;
                                console.log(facility);
                            })
                            .catch((error) => {
                                console.error(
                                    "Error fetching images for facility:",
                                    error
                                );
                            });
                    });
                })
                .catch((error) => {
                    console.error("Error fetching facilities:", error);
                });
        },
        selectFacility(facilityId) {
            this.selectedFacilityId = facilityId;
        },

        

        // async fetchData() {
        //     try {
        //         const response = await fetch("http://localhost:8085/admin/adminfacilities,http://localhost:8085/admin/adminfacilities");
        //         const data = await response.json();
        //         const s = data.tags; // Assuming the API returns an array of tags

        //         // Now you can use tagsArray safely
        //         console.log(s);
        //     } catch (error) {
        //         console.error("Error fetching data:", error);
        //     }
        // },
    },
    getters: {
        // Separating available and unavailable facilities
        availableFacilities() {
            return this.facilities.filter(
                (facility) => facility.availability === 1
            );
        },
        unavailableFacilities() {
            return this.facilities.filter(
                (facility) => facility.availability === 0
            );
        },
    },
});
