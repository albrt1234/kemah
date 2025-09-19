document.addEventListener("DOMContentLoaded", () => {
    const imageInput = document.getElementById("image");
    const previewDiv = document.getElementById("formFile");

    imageInput.addEventListener("change", (event) => {
        previewDiv.innerHTML = "";
        const files = event.target.files;
        for (let i = 0; i < files.length; i++) {
            const url = URL.createObjectURL(files[i]);
            const img = document.createElement('img');
            img.src = url;
            img.style.width = '100px';
            img.style.margin = '5px';
            previewDiv.appendChild(img);
        }
    });
});
