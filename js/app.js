window.addEventListener("scroll", ()=> {
    let elButton = document.getElementById("sign_up-icon__circle");
    if (window.pageYOffset > 1700) {
        elButton.classList.add("active")
    } else {
        elButton.classList.remove("active")
    }
  
});

function myFunction() {
    let elNavbar = document.getElementById("navbar");
    elNavbar.classList.toggle("active");
}
