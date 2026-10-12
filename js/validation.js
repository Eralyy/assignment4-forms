const basicForm = document.getElementById("basic-form");

basicForm.addEventListener("submit", function (event) {
  event.preventDefault();
  basicForm.querySelector(".result").textContent = "Fields are valid. Nothing was sent.";
});

basicForm.addEventListener("input", function () {
  basicForm.querySelector(".result").textContent = "";
});

function validateForm(form) {
  const password = form.querySelector("#password");
  const confirmation = form.querySelector("#confirm-password");

  if (password) {
    password.setCustomValidity("");
    if (password.value.length > 0 && password.value.length < 8) {
      password.setCustomValidity("Use at least 8 characters.");
    }

    confirmation.setCustomValidity("");
    if (confirmation.value !== password.value) {
      confirmation.setCustomValidity("Passwords must match.");
    }
  }

  const fields = form.querySelectorAll("input, textarea, select");
  fields.forEach(function (field) {
    if (field.type !== "checkbox") {
      field.classList.toggle("is-valid", field.validity.valid);
      field.classList.toggle("is-invalid", !field.validity.valid);
    }
  });

  return form.checkValidity();
}

document.querySelectorAll(".bootstrap-form").forEach(function (form) {
  const result = form.querySelector(".result");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    form.classList.add("checked");
    result.textContent = "";
    if (validateForm(form)) {
      result.textContent = "Fields are valid. Nothing was sent.";
    }
  });

  form.addEventListener("input", function () {
    result.textContent = "";
    if (form.classList.contains("checked")) {
      validateForm(form);
    }
  });

  form.addEventListener("reset", function () {
    form.classList.remove("checked");
    result.textContent = "";
    form.querySelectorAll("input, textarea, select").forEach(function (field) {
      field.classList.remove("is-valid", "is-invalid");
      field.setCustomValidity("");
    });
  });
});
