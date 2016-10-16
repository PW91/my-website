"use strict";

document.addEventListener("DOMContentLoaded", function() {

//-----VARIABLES: 
        
    // Navigation variables:

    var myMobileMenuButton = document.querySelector(".mobile-menu-button"),
        myMobileMenu = document.querySelector(".mobile-menu-list"),
        myMobileMenuButtonSpans = document.querySelectorAll(".mobile-menu-button span"),
        myMobileMenuLinks = document.querySelectorAll("header nav .mobile-menu-list ul li a"),
        myDesktopMenuArrow = document.querySelector("#arrow"),

    // Hello section variables:

        myHelloSection = document.querySelector(".hello-section"),
        myHelloSectionPhoto = document.querySelector(".hello-section-photo"),

    // About section variables:

        myAboutSection = document.querySelector(".about-section"),
        myAboutSectionSkewWrapper = document.querySelector(".about-section-skew-wrapper"),
        myAboutSectionMainText = document.querySelector(".about-section-main-text"),

    // Coding section variables:

        myCodingSection = document.querySelector(".coding-section"),
        myCodingSectionMainText = document.querySelector(".coding-section-main-text"),
        myCodingSectionSupportText = document.querySelector(".coding-section-support-text"),
        myCodingSectionTextNote = document.querySelector(".coding-section-text-note"),
        myCodingSectionSkillSingle = document.querySelectorAll(".coding-section-skill-single .progress-radial"),
        myCodingSectionProgressRadial = document.querySelectorAll(".progress-radial"),
        myCodingSectionProgressRadialInsideText = document.querySelectorAll(".progress-radial .overlay p"), 
        myCodingSectionProjects = document.querySelectorAll(".coding-section-project"),

    // Future section variables:

        myFutureSection = document.querySelector(".future-section"),
        myFutureSectionSkewWrapper = document.querySelector(".future-section-skew-wrapper"),
        myFutureSectionMainText = document.querySelector(".future-section-main-text"), 

    // Contact section variables:

        myContactSection = document.querySelector(".contact-section"),
        myContactSectionMainText = document.querySelector(".contact-section-main-text"),
        myContactSectionSupportText = document.querySelector(".contact-section-support-text"),

    // Form validation variables:

    /*    myContactSectionForm = document.querySelector("form"),
        myContactSectionFormInputName = document.querySelector("form #name"),
        myContactSectionFormInputEmail = document.querySelector("form #email"),
        myContactSectionFormTextarea = document.querySelector("form textarea"),
        mySendOverlay = document.querySelector(".send-overlay"),
        mySendOverlayText = document.querySelector(".send-overlay-container p"),
        myCloseOverlayButton = document.querySelector(".close-button"),
        formMessage,*/

    // Additional variables:

        lastScrollValue = 0,
        initialTada = 0;



//-----FUNCTION DEFINITIONS:

    // textShowUp function:
    
    function textShowUp() {
        var halfWindowHeight = window.innerHeight / 2,
            scrollValue = window.pageYOffset;
        
            if (scrollValue > myAboutSection.offsetTop - halfWindowHeight) {
                myAboutSectionMainText.style.visibility = "visible";
                myAboutSectionMainText.classList.add("fadeIn");
            }
            if (scrollValue > myCodingSection.offsetTop - halfWindowHeight) {
                myCodingSectionMainText.style.visibility = "visible";
                myCodingSectionMainText.classList.add("fadeIn");
            }
            if (scrollValue > (myCodingSection.offsetTop + myCodingSectionSupportText.offsetTop) - halfWindowHeight) {
                myCodingSectionSupportText.style.visibility = "visible";
                myCodingSectionSupportText.classList.add("fadeIn");
            }
            if (scrollValue > myFutureSection.offsetTop - halfWindowHeight * 1.5) {
                myCodingSectionTextNote.style.visibility = "visible";
                myCodingSectionTextNote.classList.add("fadeIn");
            }
            if (scrollValue > myFutureSection.offsetTop - halfWindowHeight) {
                myFutureSectionMainText.style.visibility = "visible";
                myFutureSectionMainText.classList.add("fadeIn");
            }
            if(scrollValue > myContactSection.offsetTop - halfWindowHeight) {
                myContactSectionMainText.style.visibility = "visible";
                myContactSectionMainText.classList.add("fadeIn");
            }
            if(scrollValue > (myContactSection.offsetTop + myContactSectionSupportText.offsetTop) - halfWindowHeight * 1.5) {
                myContactSectionSupportText.style.visibility = "visible";
                myContactSectionSupportText.classList.add("fadeIn");
            }
        }

    // mainParallax function:

    function mainParallax() {
        var arrowPosition = myDesktopMenuArrow.offsetTop,
            scrollValue = window.pageYOffset,
            aboutOffset = myAboutSection.offsetTop-scrollValue,
            codingOffset = myCodingSection.offsetTop-scrollValue,
            futureOffset = myFutureSection.offsetTop-scrollValue,
            contactOffset = myContactSection.offsetTop-scrollValue;

        // Navigation arrow:

        if (window.innerWidth > 768) {
            if (scrollValue > lastScrollValue) {
                if ((arrowPosition + 20) > aboutOffset) {
                    myDesktopMenuArrow.removeAttribute("class");
                    myDesktopMenuArrow.classList.add("arrow-about-section");
                }
                if ((arrowPosition + 20) > codingOffset) {
                    myDesktopMenuArrow.removeAttribute("class");
                    myDesktopMenuArrow.classList.add("arrow-coding-section");
                 }
                if ((arrowPosition + 20) > futureOffset) {
                    myDesktopMenuArrow.removeAttribute("class");
                    myDesktopMenuArrow.classList.add("arrow-future-section");
                }
                if ((arrowPosition + 20) > contactOffset) {
                    myDesktopMenuArrow.removeAttribute("class");
                    myDesktopMenuArrow.classList.add("arrow-contact-section");
                }
            } else {
                if (arrowPosition < aboutOffset) {
                    myDesktopMenuArrow.removeAttribute("class");
                    myDesktopMenuArrow.classList.add("arrow-hello-section");
                } else
                if (arrowPosition < codingOffset) {
                    myDesktopMenuArrow.removeAttribute("class");
                    myDesktopMenuArrow.classList.add("arrow-about-section");
                 } else
                if (arrowPosition < futureOffset) {
                    myDesktopMenuArrow.removeAttribute("class");
                    myDesktopMenuArrow.classList.add("arrow-coding-section");
                } else
                if (arrowPosition < contactOffset) {
                    myDesktopMenuArrow.removeAttribute("class");
                    myDesktopMenuArrow.classList.add("arrow-future-section");
                }
            }
        }

        lastScrollValue = scrollValue;

        // Hello section photo scrolling:

        if (scrollValue < myAboutSection.offsetTop) {
            myHelloSectionPhoto.style.bottom = (-scrollValue) / 9 + "vw";
            myHelloSectionPhoto.style.transform = "scale(" + (1 + scrollValue / 1000) + ")"; 
        } 

        // About and future sections rotation:

        myAboutSectionSkewWrapper.style.transform = "rotate(" + ((aboutOffset + 100) / 100) + "deg)";    
        myFutureSectionSkewWrapper.style.transform = "rotate(" + ((futureOffset + 100) / -100) + "deg)";

        // Coding section skills rotation:
        
        for (var i = 0; i < myCodingSectionProgressRadial.length; i++) {
            myCodingSectionProgressRadial[i].style.transform = "rotate(" + (-codingOffset) / 5 + "deg)";
        }
        
        for (var i = 0; i < myCodingSectionProgressRadialInsideText.length; i++) {
            myCodingSectionProgressRadialInsideText[i].style.transform = "rotate(" + (codingOffset)/5 + "deg)";
        }
    }

    // tadaProjectsAnimation function:

    function tadaProjectsAnimation() {
        myCodingSectionProjects[initialTada].classList.remove("animated", "tada");     
        initialTada = Math.round(Math.random() * 2);
        myCodingSectionProjects[initialTada].classList.add("animated", "tada");
    }

    // formValidation function:

/*    function formValidation() {
        event.preventDefault();

        if (myContactSectionFormInputName.value === "" || myContactSectionFormInputEmail.value === "" || myContactSectionFormTextarea.value === "") {
            formFillCheck("Fill in all the fields, please!");       
        } else {
            formMessage = String("NAME: " + myContactSectionFormInputName.value + " EMAIL ADDRESS: " + myContactSectionFormInputEmail.value + " MESSAGE: " + myContactSectionFormTextarea.value);

            var request = new XMLHttpRequest(); 
            request.open("POST", "http://formspree.io/wieteska.przemyslaw@gmail.com", true);
            //request.setRequestHeader('Accept', 'application/json; charset=utf-8');
            //request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
            //request.setRequestHeader('Access-Control-Allow-Origin', '*');
            //request.setRequestHeader('Access-Control-Allow-Methods:','DELETE, HEAD, GET, OPTIONS, POST, PUT');
            //request.setRequestHeader('Access-Control-Allow-Headers: Content-Type, Content-Range, Content-Disposition, Content-Description');
            //request.setRequestHeader('Access-Control-Max-Age','1728000');

            request.onload = function() {
                if (request.readyState != 4 || request.status != 200) {
                    formReset("Oops, something went wrong! Try again, please!")
                } else {
                    formReset("Thank you!");
                } 
            }
            request.send(formMessage);
        }
    }

    // formFillCheck function:

    function formFillCheck(message) {
        mySendOverlay.classList.add("visible");
        mySendOverlayText.innerHTML = message;
    }

    // formReset function:

    function formReset(message) {
        mySendOverlay.classList.add("visible");
        mySendOverlayText.innerHTML = message;
        myContactSectionFormInputName.value = "";
        myContactSectionFormInputEmail.value = "";
        myContactSectionFormTextarea.value = "";
        myContactSectionFormInputName.setAttribute("placeholder", "Your name");
        myContactSectionFormInputEmail.setAttribute("placeholder", "Your email address");
        myContactSectionFormTextarea.setAttribute("placeholder", "Your message");
    }

    // closeOverlay function:

    function closeOverlay() {
        mySendOverlay.classList.remove("visible");
    }*/

    // mobileMenuButtonClick function:

    function mobileMenuButtonClick() {
        for (var i = 0; i < myMobileMenuButtonSpans.length; i++) {
            myMobileMenuButtonSpans[i].classList.toggle("clicked-button");  
        }

        myMobileMenu.classList.toggle("clicked-button-list");

        if (myMobileMenu.classList.contains("clicked-button-list")) {
            var j = 0;

            // internal mobileMenuLinksAnimation function:
            
            function mobileMenuLinksAnimation() {

                setTimeout(function() {
                    myMobileMenuLinks[j].parentElement.style.visibility = "visible";
                    myMobileMenuLinks[j].parentElement.classList.remove("bounceOutLeft");  
                    myMobileMenuLinks[j].parentElement.classList.add("bounceInLeft");  
                    j++;
                    if (j < myMobileMenuLinks.length) {
                        mobileMenuLinksAnimation();
                    }
                }, 50)
            }
            mobileMenuLinksAnimation();
        } else {
            for (var j = 0; j < myMobileMenuLinks.length; j++) {
                myMobileMenuLinks[j].parentElement.classList.remove("bounceInLeft"); 
                myMobileMenuLinks[j].parentElement.classList.add("bounceOutLeft");                         
            }
        }     
    }

    // mobileMenuLinkClick function:

    function mobileMenuLinkClick() {
        for (var i = 0; i < myMobileMenuButtonSpans.length; i++) {
            myMobileMenuButtonSpans[i].classList.toggle("clicked-button");
        }
        myMobileMenu.classList.toggle("clicked-button-list");

        for (var j = 0; j < myMobileMenuLinks.length; j++) {
            myMobileMenuLinks[j].parentElement.classList.remove("bounceInLeft"); 
            myMobileMenuLinks[j].parentElement.classList.add("bounceOutLeft");                         
        }
    }



//-----SMOOTH SCROLL INICIALIZATION:

    smoothScroll.init({
        selector: '.page-scroll',
        speed: 500,
        offset: 0,
    })



//-----EVENT LISTENERS:

    // MainParallax when resize:
    
    window.addEventListener("resize", function () {
        setTimeout(mainParallax, 100);
    })

    // MainParallax when scroll:
    
    window.addEventListener("scroll", mainParallax);

    // textShowUp when scroll:

    window.addEventListener("scroll", textShowUp);

    // MobileMenuButton when click:
    
    myMobileMenuButton.addEventListener("click", mobileMenuButtonClick);

    // MobileMenuLinks when click:
    
    for (var i = 0; i < myMobileMenuLinks.length; i++) {
        myMobileMenuLinks[i].addEventListener("click", mobileMenuLinkClick);
    }  

    // formValidation when submit:

   /* myContactSectionForm.addEventListener("submit", formValidation);

    // closeOverlayButton when click;

    myCloseOverlayButton.addEventListener("click", closeOverlay); */



//-----SET INTERVALS:

    // tadaProjectsAnimation interval:

    setInterval(tadaProjectsAnimation, 3000);
})