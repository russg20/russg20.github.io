const loadImages = document.querySelectorAll("[data-src]");
const imgOptions = {
    threshold: 0,
    rootMargin: "0px 0px -10px 0px"
};

function firstLoadImg(img) {
    const src = img.getAttribute("data-src");
    if(!src) {
        return;
    }
    img.src = src;
};

const imgObserve = new IntersectionObserver((entries, imgObserve) => {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            return;
        } else {
            firstLoadImg(entry.target);
            imgObserve.unobserve(entry.target);
        }
    })
}, imgOptions);

loadImages.forEach(image => {
    imgObserve.observe(image);
});