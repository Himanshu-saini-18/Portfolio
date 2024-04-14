var typed = new Typed(".text", {
    strings: ["FrontEnd Developer", "Backend Developer"],
    typeSpeed: 100,
    backSpeed:100,
    backDelay:1000,
    loop:true
  });

  let aboutMeText = document.querySelector(".aboutme");
  const readMore = document.querySelector(".read-more");
  readMore.addEventListener("click", function () {
      readMore.classList.toggle("clicked");
      if (readMore.classList.contains("clicked")) {
          aboutMeText.textContent =
              "Hi! I'm Himanshu Saini, a passionate fresher eager to kickstart my journey as a frontend developer, with a solid foundation in backend technologies.I'm deeply passionate about crafting engaging and user-friendly interfaces using HTML, CSS, JavaScript and frontend frameworks like React.js.In addition to my frontend skills, I also have a strong understanding of backend technologies such as Node.js, Express.js, and databases like MongoDB and MySQL.What excites me about frontend development is the opportunity to blend creativity with technical problem-solving. I'm fascinated by the impact that well-designed interfaces can have on user experiences.As a fresher entering the field, I'm eager to learn and grow, constantly seeking new challenges that will help me evolve as a frontend developer.";
          readMore.textContent = "Read Less";
      } else {
          aboutMeText.textContent =
              "Hi! I'm Himanshu Saini, a passionate fresher eager to kickstart my journey as a frontend developer, with a solid foundation in backend technologies.I'm deeply passionate about crafting engaging and user-friendly interfaces using HTML, CSS, JavaScript and frontend frameworks like React.js.In addition to my frontend skills, I also have a strong understanding of backend technologies such as Node.js, Express.js, and databases like MongoDB and MySQL. Let's collaborate and bring your vision to life!...";
          readMore.textContent = "Read More";
      }
  });


const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const projList = document.querySelector(".project-list");

let scrollAmount = 0;
const scrollStep = calculateStep();

prevBtn.addEventListener("click", () => {
    console.log("prev-btn clicked");
    scrollAmount -= scrollStep;
    if (scrollAmount < 0) {
        scrollAmount = 0;
    }
    slideTo(scrollAmount);
    updateButtonVisibility();
});
nextBtn.addEventListener("click", () => {
    scrollAmount += scrollStep;
    console.log(scrollAmount);
    if (scrollAmount > projList.scrollWidth - projList.clientWidth) {
        scrollAmount = projList.scrollWidth - projList.clientWidth;
    }
    slideTo(scrollAmount);
    updateButtonVisibility();
});

// Function to calculate scroll step dynamically based on image sizes
function calculateStep() {
    const firstImage = document.querySelector(".overlay");
    const imageWidth = firstImage.clientWidth;
    // Add some additional padding or margin to the step if needed
    return imageWidth + 16; // Adjust this value as needed
}

function slideTo(amount) {
    projList.scrollTo({
        left: amount,
        behavior: "smooth",
    });
}
function updateButtonVisibility() {
    // Check if at the beginning or end of the scrollable content
    if (scrollAmount <= 0) {
        prevBtn.style.display = "none";
    } else {
        prevBtn.style.display = "block";
    }
    if (scrollAmount >= projList.scrollWidth - projList.clientWidth) {
        nextBtn.style.display = "none";
    } else {
        nextBtn.style.display = "block";
    }
}
