const carousel = document.querySelector(".carousel");
const arrowIcons = document.querySelectorAll(".wrapper i");
const firstCardWidth = document.querySelector(".card").offsetWidth;


let isDragging = false, isClicking= false, startX, startScrollLeft;

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        isClicking = true;
        carousel.scrollLeft += icon.id === "left" ? -firstCardWidth : firstCardWidth;
        isClicking = false;
    });
});

const dragging = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
    carousel.classList.add("dragging");
};

const dragStart = (e) => {
    isDragging = true;
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft
};

const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
};

const autoPlay = () => {
    const interval = setInterval(() => {
        if (isDragging || isClicking) return;
        carousel.scrollLeft += firstCardWidth;
        if (Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
            carousel.classList.add("no-transition");
            carousel.scrollLeft = 0;
            carousel.classList.remove("no-transition");
        };
    }, 5000);

    return () => clearInterval(interval);
};

autoPlay();

// const infiniteScroll = () => {
//     if (Math.ceil(carousel.scrollLeft) === 0) {
//         carousel.classList.add("no-transition");
//         carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
//         carousel.classList.remove("no-transition");
//     }else if (Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
//         carousel.classList.add("no-transition");
//         carousel.scrollLeft = carousel.offsetWidth;
//         carousel.classList.remove("no-transition");
//     }
// }


carousel.addEventListener("mouseup", dragStop);
carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
// carousel.addEventListener("scroll", infiniteScroll);































// const carousel = document.querySelector(".carousel"),
// firstImage = document.querySelectorAll(".carousel .trust-card")[0],
// arrowIcons = document.querySelectorAll(".wrapper i");

// let isDragStart = false, prevPageX, prevScrollLeft,
// firstImageWidth = firstImage.clientWidth + 14; 
// let scrollWidth = carousel.scrollWidth - carousel.clientWidth - 1;

// const showHideIcons = () => {
//     arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
//     arrowIcons[1].style.display = carousel.scrollLeft > scrollWidth ? "none" : "block";

//     console.log("scrollLeft:", carousel.scrollLeft)
//     console.log("scrollWidth:", scrollWidth);
// }

// arrowIcons.forEach(icon => {
//     icon.addEventListener("click", () => {
//         carousel.scrollLeft += icon.id == "left" ? -firstImageWidth: firstImageWidth;
//         setTimeout(() => showHideIcons(), 60);
//     })
// })

// const dragStart = (e) => {
//     isDragStart = true;
//     prevPageX = e.pageX;
//     prevScrollLeft = carousel.scrollLeft;
// }

// const dragging = (e) => {
//     if (!isDragStart) return;
//     e.preventDefault();
//     carousel.classList.add("dragging");
//     let positionDiff = e.pageX - prevPageX
//     carousel.scrollLeft =  prevScrollLeft - positionDiff;
//     showHideIcons();
// }

// const dragStop = () => {
//     isDragStart = false;
//     carousel.classList.remove("dragging");
// }

// carousel.addEventListener("mousedown", dragStart)
// carousel.addEventListener("mousemove", dragging)
// carousel.addEventListener("mouseup", dragStop)