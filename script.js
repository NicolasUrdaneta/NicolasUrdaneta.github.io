
/* TRANSITIONS */
const swup = new Swup();


/* NAVIGATION MENU */
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
};

/* READ MORE */

function init () {

        let noOfCharac = 300;
        let contents = document.querySelectorAll(".content");
        
    contents.forEach(content => {
            //If text length is less that noOfCharac... then hide the read more button
            if(content.textContent.length < noOfCharac){
                content.nextElementSibling.style.display = "none";
            }
            else{
                let displayText = content.textContent.slice(0,noOfCharac);
                let moreText = content.textContent.slice(noOfCharac);
                content.innerHTML = `${displayText}<span class="dots">...</span><span class="hide more">${moreText}</span>`;
            }
        });

    }

init();
document.addEventListener('swup:contentReplaced', init);   

function readMore(btn){
    let post = btn.parentElement;
    post.querySelector(".dots").classList.toggle("hide");
    post.querySelector(".more").classList.toggle("hide");
    btn.textContent == "Show full abstract" ? btn.textContent = "Hide abstract" : btn.textContent = "Show full abstract";
};


        
