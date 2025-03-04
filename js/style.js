document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".zoom-container").forEach(container => {
        container.addEventListener("click", function () {
            this.classList.toggle("zoom-active");
        });
    });
});
