const client_carousel = document.querySelector(".client-carousel");
const client_arrowIcons = document.querySelectorAll(".client-wrapper i");
const client_firstCardWidth = document.querySelector(".client-wrapper img").offsetWidth;

let isClientDragging = false, clientStartX, clientStartScrollLeft;

client_arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        client_carousel.scrollLeft += icon.id === "left" ? -client_firstCardWidth : client_firstCardWidth;
    })
})

const clientDragging = (e) => {
    if (!isClientDragging) return;
    e.preventDefault();
    client_carousel.scrollLeft = clientStartScrollLeft - (e.pageX - clientStartX);
    client_carousel.classList.add("dragging");
}

const clientDragStart = (e) => {
    isClientDragging = true;
    clientStartX = e.pageX;
    clientStartScrollLeft = client_carousel.scrollLeft
}

const clientDragStop = () => {
    isClientDragging = false;
    client_carousel.classList.remove("dragging");
}


client_carousel.addEventListener("mouseup", clientDragStop);
client_carousel.addEventListener("mousedown", clientDragStart);
client_carousel.addEventListener("mousemove", clientDragging);
