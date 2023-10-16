const btnBar = document.getElementById("bar-line");
const menuBar = document.getElementById("menu-bar");
const btnClose = document.getElementById("btn-close");

if (btnBar) {
  btnBar.addEventListener("click", () => {
    menuBar.classList.add("show");
  });
}

if (btnClose) {
  btnClose.addEventListener("click", () => {
    menuBar.classList.remove("show");
  });
}

// handleGetFormData function to get form data
function handleGetFormData() {
    const name = document.getElementById("name").value;
    const city = document.getElementById("city").value;
    const email = document.getElementById("email").value;
    const zipCode = document.getElementById("zip-code").value;
    const status = document.getElementById("status").checked;
    return {
      name,
      city,
      email,
      zipCode,
      status
    };
  }
  
  // isNumber function to check if input is a number
  function isNumber(input) {
    return !isNaN(input);
  }
  
  // checkboxIsChecked function to check if checkbox is checked
  function checkboxIsChecked() {
    return document.getElementById("status").checked;
  }
  
  // validateFormData function to validate form data
  function validateFormData(data) {
    if (
      data !== null &&
      isNumber(data.zipCode) &&
      checkboxIsChecked()
    ) {
      return true;
    } else {
      return false;
    }
  }
  
  function submit() {
    event.preventDefault();
    const formData = handleGetFormData();
    console.log(formData)
    if (validateFormData(formData)) {
      document.getElementById("warning").innerText = "";
    } else {
      document.getElementById("warning").innerText = "Periksa form anda sekali lagi";
    }
  }
  
  document.getElementById("submit-form").addEventListener("submit", submit);
