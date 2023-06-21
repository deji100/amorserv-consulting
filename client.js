const carousel = document.querySelector(".client-carousel");
const arrowIcons = document.querySelectorAll(".client-wrapper i");
const firstCardWidth = document.querySelector(".client-wrapper img").offsetWidth;

let isDragging = false, startX, startScrollLeft;

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        carousel.scrollLeft += icon.id === "left" ? -firstCardWidth : firstCardWidth;
    })
})

const dragging = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
    carousel.classList.add("dragging");
}

const dragStart = (e) => {
    isDragging = true;
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft
}

const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
}


carousel.addEventListener("mouseup", dragStop);
carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
