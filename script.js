const validator = (formSelector, alertClass, onSuccess) => {
  const FORM = document.querySelector(`${formSelector}`);
  const REQUIRED_FIELDS = FORM.querySelectorAll(".required");

  const errorFields = [];
  const result = {};

  REQUIRED_FIELDS.forEach((field) => {
    field.classList.remove(`${alertClass}`);
    if (!field.classList.contains("radio_group")) {
      if (field.value.trim().length === 0) {
        errorFields.push(field);
      } else if (field.getAttribute("type") === "file") {
        result[field.getAttribute("name")] = field.files[0];
      } else {
        result[field.getAttribute("name")] = field.value.trim();
      }
    } else {
      const radioInput = field.querySelector("input[name='age']:checked");
      if (
        !radioInput ||
        !radioInput.value ||
        !radioInput.value.trim().length > 0
      ) {
        errorFields.push(field);
      } else {
        result[radioInput.getAttribute("name")] = radioInput.value.trim();
      }
    }
  });

  if (errorFields.length > 0) {
    errorFields.forEach((errorField) => {
      errorField.classList.add(`${alertClass}`);
    });

    return;
  }

  onSuccess(result);
};

const submitButton = document.querySelector(".submitButton");

submitButton.addEventListener("click", (e) => {
  validator(".form", "alert", (result) => {
    console.dir(result);
  });
});
