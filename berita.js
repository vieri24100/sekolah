function previewImage(input, previewId) {
  const preview = document.getElementById(previewId);
  preview.innerHTML = ""; // clear previous preview
  if (input.files && input.files[0]) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const img = document.createElement("img");
      img.src = e.target.result;
      img.style.maxWidth = "200px";
      img.style.borderRadius = "6px";
      img.style.marginTop = "10px";
      preview.appendChild(img);
    };
    reader.readAsDataURL(input.files[0]);
  }
}

// Pasang event listener untuk input file
document.getElementById("upload1").addEventListener("change", function () {
  previewImage(this, "preview1");
});
document.getElementById("upload2").addEventListener("change", function () {
  previewImage(this, "preview2");
});
document.getElementById("upload3").addEventListener("change", function () {
  previewImage(this, "preview3");
});
