<template>
    <div>
    <ckeditor :editor="editor" :config="editorConfig"></ckeditor>
    </div>
  </template>

<script>
    import ClassicEditor from '/js/ckeditor_custom';

   
export default {
  data(){
    return{
      editor: ClassicEditor,
      editorData: 'ckeditor 5 for laravel and vuejs',
      editorConfig:{
        

      }
    }
  }, 
  mounted() {
    this.editorData="";
  },
  methods:{
    displayEditorResult(){
      document.getElementById('resultingText').innerHTML = this.editorData;
    },
    emptyEditor(){
      this.editorData='';
    }
  }
};
</script>
<style>
.ck-editor__editable_inline {
    min-height: 400px;
}
</style>