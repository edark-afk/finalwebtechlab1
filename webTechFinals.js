var fullName = document.getElementById("fullName");
var email = document.getElementById("email");
var age = document.getElementById("age");
var address = document.getElementById("address");
var phone = document.getElementById("phone");
var birthday = document.getElementById("birthday");
var course = document.getElementById("course");
var school = document.getElementById("school");
var favoriteColor = document.getElementById("favoriteColor");

var showInfoButton = document.getElementById("showInfo");
var output = document.getElementById("output");

showInfoButton.addEventListener("click", function () {
  // gender

  var selectedGender = document.querySelector('input[name="gender"]:checked');

  var gender = "";

  if (selectedGender != null) {
    gender = selectedGender.value;
  } else {
    gender = "Not selected";
  }

  // hobbies

  // DOM Selection Method 3:
  // getElementsByClassName()

  var hobbyElements = document.getElementsByClassName("hobby");

  var hobbies = [];

  for (var i = 0; i < hobbyElements.length; i++) {
    if (hobbyElements[i].checked) {
      hobbies.push(hobbyElements[i].value);
    }
  }

  if (hobbies.length == 0) {
    hobbies.push("None");
  }

  // output

  output.innerHTML =
    '<div class="info-item">' +
    "<strong>Full Name:</strong> " +
    fullName.value +
    "</div>" +
    '<div class="info-item">' +
    "<strong>Email Address:</strong> " +
    email.value +
    "</div>" +
    '<div class="info-item">' +
    "<strong>Age:</strong> " +
    age.value +
    "</div>" +
    '<div class="info-item">' +
    "<strong>Address:</strong> " +
    address.value +
    "</div>" +
    '<div class="info-item">' +
    "<strong>Phone Number:</strong> " +
    phone.value +
    "</div>" +
    '<div class="info-item">' +
    "<strong>Birthday:</strong> " +
    birthday.value +
    "</div>" +
    '<div class="info-item">' +
    "<strong>Course:</strong> " +
    course.value +
    "</div>" +
    '<div class="info-item">' +
    "<strong>School:</strong> " +
    school.value +
    "</div>" +
    '<div class="info-item">' +
    "<strong>Favorite Color:</strong> " +
    favoriteColor.value +
    "</div>" +
    '<div class="info-item">' +
    "<strong>Gender:</strong> " +
    gender +
    "</div>" +
    '<div class="info-item">' +
    "<strong>Hobbies:</strong> " +
    hobbies.join(", ") +
    "</div>";
});
