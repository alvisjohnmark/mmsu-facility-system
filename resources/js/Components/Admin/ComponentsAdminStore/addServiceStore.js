import { defineStore } from "pinia";

export const addServices = defineStore("addServices", {
    state: () => {
        return {
            isSidePanelOpen: true,
            showModal: false,
            serviceName: "",
            serviceType: "",
            serviceFee: "",
            monthFrom: "",
            monthTo: "",
            serviceUnit: "",
            serviceNote: "",
            services: [],
            months: [
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
            ],
        };
    },
    actions: {
       
    },
});
