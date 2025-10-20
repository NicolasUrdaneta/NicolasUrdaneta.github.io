
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

        let noOfCharac = 0;
        let contents = document.querySelectorAll(".content");
        
    contents.forEach(content => {
            //If text length is less that noOfCharac... then hide the read more button
            if(content.textContent.length < noOfCharac){
                content.nextElementSibling.style.display = "none";
            }
            else{
                let displayText = content.textContent.slice(0,noOfCharac);
                let moreText = content.textContent.slice(noOfCharac);
                content.innerHTML = `${displayText}<span class="dots"></span><span class="hide more">${moreText}</span>`;
            }
        });

    }

init();
document.addEventListener('swup:contentReplaced', init);   

function readMore(btn){
    let post = btn.parentElement;
    post.querySelector(".dots").classList.toggle("hide");
    post.querySelector(".more").classList.toggle("hide");
    btn.textContent == "Show abstract" ? btn.textContent = "Hide abstract" : btn.textContent = "Show abstract";
};


/* TRIANGLE TO DISPLAY MORE CONTENT */ 
function readMoreTriangle(container) {
    var text = container.querySelector('.hidden-text');
    var triangle = container.querySelector('.triangle-button');

    // Check if the click target is inside the hidden text
    if (event.target.closest('.hidden-text')) {
        event.stopPropagation();  // Prevent the click event propagation
        return;  // Exit the function without toggling the visibility
    }



    if (text.style.display === "none" || text.style.display === "") {
        text.style.display = "block";
        triangle.classList.add('down');
        triangle.classList.add('gray');
    } else {
        text.style.display = "none";
        triangle.classList.remove('down');
        triangle.classList.remove('gray');
    }
}

// Fixes in google analytics
var approvedDomains = ['nicolasurdaneta.github.io'];

function isApprovedDomain() {
  return approvedDomains.includes(window.location.hostname);
}
if (isApprovedDomain()) {
    // Your new GA code here
    gtag('config', 'G-NEWTRACKINGID');  // For GA4
}
