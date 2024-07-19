import { defineStore } from "pinia";

export const addPic = defineStore("addPic", {
    state: () => {
        return {
            facilityId: this.$route.params.facilityId
            image_list: [],
            image: {
                file: null,
            },
            previewImage: null,
        };
    },
    actions: {
        onFileChange(event) {
            const files = event.target.files[0];
            if (files) {
                this.image.file = files;

                const fileReader = new FileReader();
                fileReader.onload = () => {
                    this.previewImage = fileReader.result;
                };
                fileReader.readAsDataURL(files);
            }
        },
        fetchImageList() {
            axios
                .post("/imageList", { facilityId: this.facilityId })
                .then((response) => {
                    this.image_list = response.data;
                })
                .catch((error) => {
                    console.error(error);
                });
        },
        deleteImage(id) {
            if (confirm("Are you sure you want to delete this Image?")) {
                axios
                    .post(`/delete-image/` + id)
                    .then((response) => {
                        console.log("Image deleted:", response.data);
                        if (response.data) {
                            this.fetchImageList();
                        }
                    })
                    .catch((error) => {
                        console.error(error);
                    });
            }
        },
        uploadImage() {
            if (!this.image.file) {
                alert("Please select an image to upload.");
                return;
            }

            const formData = new FormData();
            formData.append("image", this.image.file);

            const facilityId = this.route.params.facilityId;

            formData.append("facilityId", facilityId); // Fixed the variable name

            axios
                .post("/upload-image", formData)
                .then((response) => {
                    const imageData = response.data;
                    this.image_list.push({
                        id: imageData.id,
                        url: imageData.url,
                    });
                    alert("Upload successful");
                    this.image.file = null;
                    this.previewImage = null;

                    // Auto-reload after successful upload
                    setTimeout(() => {
                        window.location.reload();
                    }, 1000); // Adjust the delay as needed
                })
                .catch((error) => {
                    alert("Error uploading image: " + error.message);
                });
        },
        logout() {
            axios.post("/logout").then(({ data }) => {
                this.checkUser();
            });
        },
        checkUser() {
            axios.post("/check-user").then(({ data }) => {
                if (!data) {
                    window.location.reload();
                    this.router.push("/admin/login");
                }
            });
        },
    },
});
