<template>
    <div>
        <ckeditor :editor="ckedit.editor" :config="ckedit.editorConfig"></ckeditor>
    </div>
</template>

<script>
import ClassicEditor from '/js/ckeditor_custom';
import {ckeditStore} from "./ComponentsAdminStore";
import {omMounted} from "vue";
const = ckedit = ckeditStore()

onMounted(() => {
  ckedit.editorData=""
})
</script>
<style>
.ck-editor__editable_inline {
    min-height: 400px;
}
</style>
