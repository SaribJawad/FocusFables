function animations() {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-links ul");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  });

  gsap.from("nav", {
    y: -100,
    opacity: 0,
    duration: 4,
    delay: -0.5,
    ease: Expo.easeInOut,
  });

  gsap.from(".page-1-content", {
    opacity: 0,
    duration: 2,
    delay: -0.1,
    ease: Expo.easeInOut,
  });

  gsap.from(".scroll", {
    y: 100,
    opacity: 0,
    duration: 4,
    delay: -0.5,
    ease: Expo.easeInOut,
  });

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".page-2",
      scroller: "body",
      start: "-20% 10%",
      end: "10% 10%",
      scrub: 2,
    },
  });

  tl.from(".page-2-r-cont", {
    opacity: 0,
  });

  let tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".page-3",
      scroller: "body",
      start: "-20% 10%",
      end: "60% 10%",
      scrub: 2,
    },
  });

  tl2.from("#work1", { opacity: 0, y: -10, duration: 10, delay: 2 });
  tl2.from("#work2", { opacity: 0, y: -10, duration: 10, delay: 2 });
  tl2.from("#work3", { opacity: 0, y: -10, duration: 10, delay: 2 });
  tl2.from("#work4", { opacity: 0, y: -10, duration: 10, delay: 2 });

  let tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: ".page-4",
      scroller: "body",
      start: "-20% 10%",
      end: "20% 10%",
      scrub: 2,
    },
  });

  tl3.from(".page-4 .mail", {
    y: 400,
    duration: 5,
  });
}

function smoothScroll() {
  // smooth scrolling
  const lenis = new Lenis();

  lenis.on("scroll", (e) => {});

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
}

animations();
smoothScroll();

document.querySelectorAll(".nav-links a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
