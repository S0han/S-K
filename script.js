//Get the date and new text to be subsittued in HTML
var yearNow = new Date();
currentYear = "Copyright " + yearNow.getFullYear();

//pull contents of html file and store it in this variable
var elCurrentYear = document.querySelector('.footer');
//fill variable with new text content to be sent bakct to HTML file
elCurrentYear.textContent = currentYear;
