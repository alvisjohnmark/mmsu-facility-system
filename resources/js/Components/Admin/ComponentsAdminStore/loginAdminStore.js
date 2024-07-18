import { defineStore } from "pinia";

export const loginAdmin = defineStore("loginAdmin", {
    state: () => {
        return {
            username: "",
            password: "",
            error: "",
        };
    },
    actions: {
        showNotification(message) {
            this.error = message;
            setTimeout(() => {
                this.error = "";
            }, 3000); // Adjust as neededsss
        },

        async login() {
            this.error = "";
            if (!this.username || !this.password) {
                this.showNotification(
                    "Please enter both username and password."
                );
                return;
            }

            const requestData = {
                username: this.username,
                password: this.password,
            };

            axios.post(`/login`, requestData).then(({ data }) => {
                if (data === 1) {
                    window.location.reload();
                    this.$router.push("/admin/admindashboard");
                } else {
                    this.showNotification("Incorrect username or password");
                }
            });
        },
    },
});
