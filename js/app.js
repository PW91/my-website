"use strict";

document.addEventListener("DOMContentLoaded", function() {

//-----VARIABLES: 
        
    // Navigation variables:

    var myMobileMenuButton = document.querySelector(".mobile-menu-button"),
        myMobileMenu = document.querySelector(".mobile-menu-list"),
        myMobileMenuButtonSpans = document.querySelectorAll(".mobile-menu-button span"),
        myMobileMenuLinks = document.querySelectorAll("header nav .mobile-menu-list ul li a"),
        myDesktopMenuLinks = document.querySelectorAll("header nav .desktop-menu li a"),
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
                    desktopMenuBoldedLinks(1, 0);
                }
                if ((arrowPosition + 20) > codingOffset) {
                    myDesktopMenuArrow.removeAttribute("class");
                    myDesktopMenuArrow.classList.add("arrow-coding-section");
                    desktopMenuBoldedLinks(2, 1);
                 }
                if ((arrowPosition + 20) > futureOffset) {
                    myDesktopMenuArrow.removeAttribute("class");
                    myDesktopMenuArrow.classList.add("arrow-future-section");
                    desktopMenuBoldedLinks(3, 2);
                }
                if ((arrowPosition + 20) > contactOffset) {
                    myDesktopMenuArrow.removeAttribute("class");
                    myDesktopMenuArrow.classList.add("arrow-contact-section");
                    desktopMenuBoldedLinks(4, 3);
                }
            } else {
                if (arrowPosition < aboutOffset) {
                    myDesktopMenuArrow.removeAttribute("class");
                    myDesktopMenuArrow.classList.add("arrow-hello-section");
                    desktopMenuBoldedLinks(0, 1);
                } else
                if (arrowPosition < codingOffset) {
                    myDesktopMenuArrow.removeAttribute("class");
                    myDesktopMenuArrow.classList.add("arrow-about-section");
                    desktopMenuBoldedLinks(1, 2);
                 } else
                if (arrowPosition < futureOffset) {
                    myDesktopMenuArrow.removeAttribute("class");
                    myDesktopMenuArrow.classList.add("arrow-coding-section");
                    desktopMenuBoldedLinks(2, 3);
                } else
                if (arrowPosition < contactOffset) {
                    myDesktopMenuArrow.removeAttribute("class");
                    myDesktopMenuArrow.classList.add("arrow-future-section");
                    desktopMenuBoldedLinks(3, 4);
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

    // boldedLinks function:

    function desktopMenuBoldedLinks(add, remove) {
        myDesktopMenuLinks[remove].classList.remove("bolded");
        myDesktopMenuLinks[add].classList.add("bolded");     
    }

    // tadaProjectsAnimation function:

    function tadaProjectsAnimation() {
        myCodingSectionProjects[initialTada].classList.remove("animated", "tada");     
        initialTada = Math.round(Math.random() * 2);
        myCodingSectionProjects[initialTada].classList.add("animated", "tada");
    }

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

    // MobileMenu when click:
    
    myMobileMenuButton.addEventListener("click", mobileMenuButtonClick);

    // MobileMenuLinks when click:
    
    for (var i = 0; i < myMobileMenuLinks.length; i++) {
        myMobileMenuLinks[i].addEventListener("click", mobileMenuLinkClick);
    }  



//-----SET INTERVALS:

    // tadaProjectsAnimation interval:

    setInterval(tadaProjectsAnimation, 3000);
})