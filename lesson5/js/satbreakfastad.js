function showBannerFri() {
    if (weekday=="Friday") {
        document.getElementsByClassName("hiddenban")
        [0].classList.toggle("hiddenban");
    }
}