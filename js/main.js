const nextButtons = document.querySelectorAll(".next-button");
const prevButtons = document.querySelectorAll(".prev-button");
const slidePage = document.querySelector(".slide-page");

let formData = {};

const showNextSlide = () => {
  const presentMarginLeft = +slidePage.style.marginLeft.split("%")[0];

  if (presentMarginLeft - 25 > -100) {
    slidePage.style.marginLeft = `${presentMarginLeft - 25}%`;
  } else {
    console.dir(formData);
  }
};

const showPrevSlide = () => {
  const presentMarginLeft = +slidePage.style.marginLeft.split("%")[0];
  slidePage.style.marginLeft = `${presentMarginLeft + 25}%`;
};

nextButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const slideId = button.closest(".slide").id;
    validator(`#${slideId}`, "alert", (result) => {
      formData = { ...formData, ...result };
      showNextSlide();
    });
  });
});

prevButtons.forEach((button) => {
  button.addEventListener("click", () => {
    showPrevSlide();
  });
});
