"use strict";$(document).ready(function(){function e(e){e.preventDefault(),""===n.val()||""===s.val()||""===i.val()?a("Fill in all the fields, please!"):(o=t.serialize(),$.ajax({url:"//formspree.io/wieteska.przemyslaw@gmail.com",method:"POST",data:{message:o},dataType:"json"}).done(function(e){l("Thank you!")}).fail(function(e){l("Oops, something went wrong! Please, try again!")}))}function a(e){r.addClass("visible"),m.text(e)}function l(e){r.addClass("visible"),m.text(e),n.val(""),s.val(""),i.val(""),n.attr("placeholder","Your name"),s.attr("placeholder","Your email address"),i.attr("placeholder","Your message")}var o,t=$("form"),n=$("form #name"),s=$("form #email"),i=$("form textarea"),r=$(".send-overlay"),m=$(".send-overlay-container p"),d=$(".close-button");t.on("submit",e),d.on("click",function(){r.removeClass("visible")})});