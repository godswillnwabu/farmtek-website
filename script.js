// HEADER SLIDE DOWN ON SCROLL
const navBarDiv = document.querySelector("#navBar");

window.addEventListener("scroll", function() {
  const scrollHeight = window.scrollY;
  const headerHeight = navBarDiv.getBoundingClientRect().height;

  if (scrollHeight > headerHeight) {
    navBarDiv.classList.add("fixedToTop");
  } 
  else {
    navBarDiv.classList.remove("fixedToTop");
  }
});

// FADE/SLIDE JAVASCRIPT CUSTOMIZATION
// Get the scrollable elements in the document
const scrollElements = document.querySelectorAll(".js-scroll");

// Use the froEach method to style the elements to zero opacity 
scrollElements.forEach((el) => {
  el.style.opacity = 0;
  scrollElements.forEach(function(el) {
    el.onanimationend = () => {
      el.style.opacity = 1;
    }
  })
})

var throttleTimer;

const throttle = (callback, time) => {
  if (throttleTimer) return;

  throttleTimer = true;
  setTimeout(() => {
    callback();
    throttleTimer = false;
  }, time);
}

// Detecting When an Element Is in View
const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

// Assign a class name to the element 
const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};
// To reset the function back to default when it is out of view
// const hideScrollElement = (element) => {
//   element.classList.remove("scrolled");
// };

// We’ll then combine our logic with the display function and use the forEach method to call the function on all js-scroll element
const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    }
    //  else if (elementOutofView(el)) {
    //   hideScrollElement(el)
    // }
  })
}

// Add a function listener to the window on scroll
window.addEventListener("scroll", () => { 
  throttle(() => {
    handleScrollAnimation();
  }, 250);
});

// CODE FOR REVEALING OF THE LINK TO HOME
const linkToHome = document.querySelector(".link-to-top");

window.addEventListener("scroll", function() {
    const scrollHeigth = window.scrollY;
    
    if (scrollHeigth > 300) {
        linkToHome.classList.add("show-link");
    }
    else {
        linkToHome.classList.remove("show-link");
    }
});

// JUST FOR THE FOOTER DATE
const d = new Date();
document.getElementById("year").innerHTML = d.getFullYear();
