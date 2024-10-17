const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

// Initialize ScrollReveal
const sr = ScrollReveal();

sr.reveal(".title", {
    ...scrollRevealOption,
    origin: "right",
});

sr.reveal(".slideshow-container", {
    ...scrollRevealOption,
    delay: 500,
});


sr.reveal(".section-one__title",".heading",".section-one__contact", {
    ...scrollRevealOption,
    origin: "right",
});

sr.reveal(".section_container service_container", {
    ...scrollRevealOption,
    delay: 500,
});