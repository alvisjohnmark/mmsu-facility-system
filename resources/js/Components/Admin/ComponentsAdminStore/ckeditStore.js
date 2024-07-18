import { defineStore } from "pinia";
import ClassicEditor from '/js/ckeditor_custom';

export const ckeditStore = defineStore("ckeditStore", {
    state: () => {
        return {
            editor: ClassicEditor,
            editorData: "ckeditor 5 for laravel and vuejs",
            editorConfig: {},
        };
    },
    actions: {
        displayEditorResult() {
            document.getElementById("resultingText").innerHTML =
                this.editorData;
        },
        emptyEditor() {
            this.editorData = "";
        },
    },
});
