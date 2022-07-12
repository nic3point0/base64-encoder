

let data_url = ""

// Copy data URL to clipboard
document.querySelector("#upload_data_cpy").addEventListener("click", e => {
    // TODO check if not empty
    const clipboard = navigator.clipboard;
    clipboard
        .writeText(data_url)
        .then(_ => console.log("Copied data URL"));
    e.preventDefault();
});



var dropper = document.querySelector("#file_input");
var results = document.getElementById("results");
const dropBox = document.querySelector("#drop_box");

dropper.addEventListener("dragenter", e => {

    e.stopPropagation();
    e.preventDefault();

    dropBox.classList.add("dropbox_border_hover");


}, false);

dropper.addEventListener("dragover", e => {
    e.stopPropagation();
    e.preventDefault();
});

dropper.addEventListener("dragleave", e => {
    
    e.stopPropagation();
    e.preventDefault();
    dropBox.classList.remove("dropbox_border_hover");

});

dropper.addEventListener("drop", e => {

    e.stopPropagation();
    e.preventDefault();

    dropBox.classList.remove("dropbox_border_hover");

    if(e.dataTransfer.files.length > 0){
        const file = e.dataTransfer.files[0];
        uploadFile(file);
    }

});

const file_picker_field = document.querySelector("#file_picker_feild");
file_picker_field.addEventListener("change", _ => {
    const file = file_picker_field.files[0];
    uploadFile(file);
});

function uploadFile(file){

    const reader = new FileReader();
    reader.onload = _ => {
        data_url = reader.result;
        document.querySelector("#upload_data_url").textContent = data_url;
    };
    reader.readAsDataURL(file);

}
