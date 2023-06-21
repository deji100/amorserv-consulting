const openElements = document.querySelectorAll(".faq .questions li .question div .icon-plus");
const closeElements = document.querySelectorAll(".faq .questions li .question div .icon-minus");
const contents = document.querySelectorAll(".faq .questions li p");


for (let i = 0; i < openElements.length; i++) {
    openElements[i].addEventListener('click', () => {
        openElements[i].style.display = "none";
        closeElements[i].style.display = "block";
        contents[i].style.maxHeight = contents[i].scrollHeight + "px";
    })
}

for (let i = 0; i < closeElements.length; i++) {
    closeElements[i].addEventListener('click', () => {
        closeElements[i].style.display = "none"
        openElements[i].style.display = "block"
        contents[i].style.maxHeight = 0;
    })
}

