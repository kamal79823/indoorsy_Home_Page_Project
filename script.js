gsap.registerPlugin(ScrollTrigger);

// Hero animations
gsap.from(".hero h1", { opacity: 0, y: -50, duration: 1 });
gsap.from(".hero p", { opacity: 0, y: 20, duration: 1, delay: 0.5 });
gsap.from(".btn", { opacity: 0, scale: 0.8, duration: 0.8, delay: 1 });

// Services animation
gsap.from(".service", {
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.3,
    scrollTrigger: {
        trigger: "#services",
        start: "top 80%",
    },
});

// Smooth scrolling
document.querySelectorAll("nav a").forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Counter animation
function animateCounters() {
    document.querySelectorAll(".counter").forEach(counter => {
        let target = +counter.getAttribute("data-target");
        let count = 0;
        let speed = 50;

        let updateCount = setInterval(() => {
            if (count < target) {
                count += Math.ceil(target / 100);
                counter.innerText = count;
            } else {
                counter.innerText = target;
                clearInterval(updateCount);
            }
        }, speed);
    });
}

// Activate counter animation on scroll
ScrollTrigger.create({
    trigger: "#stats",
    start: "top 75%",
    onEnter: animateCounters,
});