document.addEventListener("DOMContentLoaded", function () {
  setTimeout(() => {
    document.getElementById("loading-screen").classList.remove("active");
    document.getElementById("intro-screen").classList.add("active");
  }, 3000); // 3-second delay before transitioning
});
