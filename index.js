gsap.registerPlugin(ScrollTrigger, SplitText);

const tl = gsap.timeline()

tl.to("h1", {duration: 0.5, x: 0, opacity: 1})
tl.to(".tagline", {duration: 0.5, x: 0, opacity: 1}, "=-0.5")
tl.to(".in-text-hero-img-container", {duration: 0.5, y: 0, opacity: 1})
tl.to(".hero-img-container", {duration: 0.5, y: 0, opacity: 1}, "=-0.5")
tl.to(".hero-link", {duration: 0.5, y: 0, opacity: 1})

// Set initial styles
// gsap.set(".about-img", { y: 100, opacity: 0 })
// gsap.set(".about-text", { y: 100, opacity: 0 })
// gsap.set(".poem", { y: 100, opacity: 0 })

// Create separate timelines
gsap.to(".about-img", {
  y: 0,
  opacity: 1,
  duration: 0.5,
  scrollTrigger: {
    trigger: ".about-img",
    start: "top 90%"
  }
})

gsap.to(".about-text", {
  y: 0,
  opacity: 1,
  duration: 0.5,
  scrollTrigger: {
    trigger: ".about-text",
    start: "top 90%"
  }
})

gsap.to(".poem", {
  y: 0,
  opacity: 1,
  duration: 0.5,
  scrollTrigger: {
    trigger: ".poem",
    start: "top 90%"
  }
})

const split = new SplitText(".poem-text div", {
  type: "words, chars",
  charsClass: "char",
  wordsClass: "word"
});

gsap.from(split.chars, {
  scrollTrigger: {
    trigger: ".poem-text",
    start: "top 100%",
  },
  opacity: 0,
  y: 20,
  stagger: 0.015,
  duration: 0.5,
  ease: "back.out"
});

gsap.set(".contact-heading", { y: 100, opacity: 0 })
gsap.set("form", { y: 100, opacity: 0 })

gsap.to(".contact-heading", {duration: 0.5, opacity: 1, y: 0, scrollTrigger: {trigger: ".contact-heading"}})
gsap.to("form", {duration: 0.5, opacity: 1, y: 0, scrollTrigger: {trigger: "form"}})

gsap.from(".social-media-link", {duration: 0.5, scale: 0, scrollTrigger: {trigger: ".social-media-link"}, stagger: 0.2, ease: "back.out"})

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault() //remove with formspree
  setTimeout(() => {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
  }, 3000);
});