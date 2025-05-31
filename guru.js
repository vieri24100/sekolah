function previewFoto(inputElement, previewContainerId) {
  const file = inputElement.files[0];
  const previewContainer = document.getElementById(previewContainerId);
  previewContainer.innerHTML = ""; // Kosongkan preview sebelumnya

  if (file && file.type.startsWith("image/")) {
    const reader = new FileReader();

    reader.onload = function (e) {
      const img = document.createElement("img");
      img.src = e.target.result;
      previewContainer.appendChild(img);
    };

    reader.readAsDataURL(file);
  } else {
    previewContainer.textContent = "File bukan gambar.";
  }
}

// Pasang event listener untuk setiap input
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("fotoKepala").addEventListener("change", function () {
    previewFoto(this, "previewKepala");
  });

  document.getElementById("fotoWakil").addEventListener("change", function () {
    previewFoto(this, "previewWakil");
  });

  document
    .getElementById("fotoKurikulum")
    .addEventListener("change", function () {
      previewFoto(this, "previewKurikulum");
    });

  document.getElementById("fotoGuru1").addEventListener("change", function () {
    previewFoto(this, "previewGuru1");
  });

  document.getElementById("fotoGuru2").addEventListener("change", function () {
    previewFoto(this, "previewGuru2");
  });

  document.getElementById("fotoBahasa").addEventListener("change", function () {
    previewFoto(this, "previewBahasa");
  });
});
