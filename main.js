import "./about.scss";
// import "./responsive.scss";
import { gsap } from "gsap";
// import { SlowMo } from "gsap/EasePack";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const navbar = document.querySelector(".navbar");
const mobileNav = document.querySelector(".mobileNav");
const menuIcon = document.querySelector("#menu");
const cancelIcon = document.querySelector("#cancel");

menuIcon.addEventListener("click", toggleNav);
cancelIcon.addEventListener("click", toggleNav);

function toggleNav() {
  if (navbar.classList.contains("open")) {
    navbar.classList.remove("open");
    mobileNav.classList.remove("open");

    cancelIcon.classList.add("d-none");
    menuIcon.classList.remove("d-none");
  } else {
    navbar.classList.add("open");
    mobileNav.classList.add("open");

    menuIcon.classList.add("d-none");
    cancelIcon.classList.remove("d-none");
  }
}

let timeLineBurger = gsap.timeline({
  scrollTrigger: {
    trigger: ".imgBurgerCon",
    toggleActions: "restart pause reverse none",
    scrub: 7,
  },
  SlowMo: 0.5,
});

timeLineBurger.to(".imgBurgerCon", {
  y: 70,
  ease: "power2.inOut",
  duration: 3,
});

let timeLineDelivery = gsap.timeline({
  scrollTrigger: {
    trigger: ".imgBurgerCon",
    toggleActions: "restart pause reverse none",
    scrub: 7,
  },
  SlowMo: 0.5,
});

timeLineDelivery.to(".imgDeliveryCon", {
  y: -70,
  ease: "power2.inOut",
  duration: 3,
});

// Select all elements with the class "imgAnimate"
const images = gsap.utils.toArray(".imgAnimate");

// Loop through each image
images.forEach((image) => {
  gsap.to(image, {
    opacity: 1, // Ease-in by changing opacity from 0 to 1
    duration: 1, // Duration of the animation
    ease: "power2.inOut", // Easing function (you can adjust this)
    scrollTrigger: {
      trigger: image, // Use the image itself as the trigger
      start: "top 80%", // Start the animation when 80% of the image is visible
    },
  });
});
