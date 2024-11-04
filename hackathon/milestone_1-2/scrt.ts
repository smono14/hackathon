const togglebutton = document.getElementById("toggle") as HTMLButtonElement
const educate = document.getElementById("education") as HTMLElement

togglebutton.addEventListener('click', () => {
    if(educate.style.display === 'none'){
        educate.style.display = 'block'
    } else {
        educate.style.display = 'none'
    }
});
