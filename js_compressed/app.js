"use strict";document.addEventListener("DOMContentLoaded",function(){function e(){var e=window.innerHeight/2,t=window.pageYOffset;t>b.offsetTop-e&&(y.style.visibility="visible",y.classList.add("fadeIn")),t>L.offsetTop-e&&(p.style.visibility="visible",p.classList.add("fadeIn")),t>L.offsetTop+g.offsetTop-e&&(g.style.visibility="visible",g.classList.add("fadeIn")),t>k.offsetTop-1.5*e&&(w.style.visibility="visible",w.classList.add("fadeIn")),t>k.offsetTop-e&&(T.style.visibility="visible",T.classList.add("fadeIn")),t>E.offsetTop-e&&(I.style.visibility="visible",I.classList.add("fadeIn")),t>E.offsetTop+x.offsetTop-1.5*e&&(x.style.visibility="visible",x.classList.add("fadeIn"))}function t(){var e=u.offsetTop,t=window.pageYOffset,s=b.offsetTop-t,i=L.offsetTop-t,n=k.offsetTop-t,l=E.offsetTop-t;window.innerWidth>768&&(t>O?(e+20>s&&(u.removeAttribute("class"),u.classList.add("arrow-about-section"),o(1,0)),e+20>i&&(u.removeAttribute("class"),u.classList.add("arrow-coding-section"),o(2,1)),e+20>n&&(u.removeAttribute("class"),u.classList.add("arrow-future-section"),o(3,2)),e+20>l&&(u.removeAttribute("class"),u.classList.add("arrow-contact-section"),o(4,3))):e<s?(u.removeAttribute("class"),u.classList.add("arrow-hello-section"),o(0,1)):e<i?(u.removeAttribute("class"),u.classList.add("arrow-about-section"),o(1,2)):e<n?(u.removeAttribute("class"),u.classList.add("arrow-coding-section"),o(2,3)):e<l&&(u.removeAttribute("class"),u.classList.add("arrow-future-section"),o(3,4))),O=t,t<b.offsetTop&&(m.style.bottom=-t/9+"vw",m.style.transform="scale("+(1+t/1e3)+")"),v.style.transform="rotate("+(s+100)/100+"deg)",A.style.transform="rotate("+(n+100)/-100+"deg)";for(var r=0;r<S.length;r++)S[r].style.transform="rotate("+-i/5+"deg)";for(var r=0;r<q.length;r++)q[r].style.transform="rotate("+i/5+"deg)"}function o(e,t){d[t].classList.remove("bolded"),d[e].classList.add("bolded")}function s(){h[B].classList.remove("animated","tada"),B=Math.round(2*Math.random()),h[B].classList.add("animated","tada")}function i(){function e(){setTimeout(function(){a[o].parentElement.style.visibility="visible",a[o].parentElement.classList.remove("bounceOutLeft"),a[o].parentElement.classList.add("bounceInLeft"),o++,o<a.length&&e()},50)}for(var t=0;t<c.length;t++)c[t].classList.toggle("clicked-button");if(r.classList.toggle("clicked-button-list"),r.classList.contains("clicked-button-list")){var o=0;e()}else for(var o=0;o<a.length;o++)a[o].parentElement.classList.remove("bounceInLeft"),a[o].parentElement.classList.add("bounceOutLeft")}function n(){for(var e=0;e<c.length;e++)c[e].classList.toggle("clicked-button");r.classList.toggle("clicked-button-list");for(var t=0;t<a.length;t++)a[t].parentElement.classList.remove("bounceInLeft"),a[t].parentElement.classList.add("bounceOutLeft")}var l=document.querySelector(".mobile-menu-button"),r=document.querySelector(".mobile-menu-list"),c=document.querySelectorAll(".mobile-menu-button span"),a=document.querySelectorAll("header nav .mobile-menu-list ul li a"),d=document.querySelectorAll("header nav .desktop-menu li a"),u=document.querySelector("#arrow"),f=document.querySelector(".hello-section"),m=document.querySelector(".hello-section-photo"),b=document.querySelector(".about-section"),v=document.querySelector(".about-section-skew-wrapper"),y=document.querySelector(".about-section-main-text"),L=document.querySelector(".coding-section"),p=document.querySelector(".coding-section-main-text"),g=document.querySelector(".coding-section-support-text"),w=document.querySelector(".coding-section-text-note"),S=(document.querySelectorAll(".coding-section-skill-single .progress-radial"),document.querySelectorAll(".progress-radial")),q=document.querySelectorAll(".progress-radial .overlay p"),h=document.querySelectorAll(".coding-section-project"),k=document.querySelector(".future-section"),A=document.querySelector(".future-section-skew-wrapper"),T=document.querySelector(".future-section-main-text"),E=document.querySelector(".contact-section"),I=document.querySelector(".contact-section-main-text"),x=document.querySelector(".contact-section-support-text"),O=0,B=0;/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)&&(f.classList.add(".fixed-background"),L.classList.add(".fixed-background"),E.classList.add(".fixed-background")),smoothScroll.init({selector:".page-scroll",speed:500,offset:0}),window.addEventListener("resize",function(){setTimeout(t,100)}),window.addEventListener("scroll",t),window.addEventListener("scroll",e),l.addEventListener("click",i);for(var M=0;M<a.length;M++)a[M].addEventListener("click",n);setInterval(s,3e3)});