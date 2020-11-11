let about = document.getElementById("about");
let contact = document.getElementById("contact");
let btnAbout = document.getElementById("btn-about");
let btnContact = document.getElementById("btn-contact");

btnAbout.addEventListener('click', function () {
    about.scrollIntoView(true);
});

btnContact.addEventListener('click', function () {
    contact.scrollIntoView(true);
});

let github = document.getElementById("github");
let facebook = document.getElementById("facebook");

github.addEventListener('click', function() {
    window.open("https://github.com/eugeniachareun");
});

facebook.addEventListener('click', function() {
    window.open("http://facebook.com/euge.chareun");
});