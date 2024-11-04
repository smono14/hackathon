var togglebutton = document.getElementById("toggle");
var educate = document.getElementById("education");
togglebutton.addEventListener('click', function () {
    if (educate.style.display === 'none') {
        educate.style.display = 'block';
    }
    else {
        educate.style.display = 'none';
    }
});
