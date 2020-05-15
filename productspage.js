// Open
function openModal(id) {
  const modal = document.querySelector("#my-modal" + id);
  modal.style.display = "block";
}

// Close
function closeModal(id) {
  const modal = document.querySelector("#my-modal" + id);
  modal.style.display = "none";
}

// Close If Outside Click

const modal = document.querySelectorAll(".modal");
modal.forEach(function (item) {
  item.addEventListener("click", function () {
    console.log("click");
    item.style.display = "none";
  });
});
