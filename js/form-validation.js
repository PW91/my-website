"use strict";

$(document).ready(function() {

//-----VARIABLES: 

    var myContactSectionForm = $("form"),
        myContactSectionFormInputName = $("form #name"),
        myContactSectionFormInputEmail = $("form #email"),
        myContactSectionFormTextarea = $("form textarea"),
        mySendOverlay = $(".send-overlay"),
        mySendOverlayText = $(".send-overlay-container p"),
        myCloseOverlayButton = $(".close-button"),
        formMessage;



//-----FUNCTION DEFINITIONS:

    // formValidation function:

    function formValidation(event) {
        event.preventDefault();

        if (myContactSectionFormInputName.val() === "" || myContactSectionFormInputEmail.val() === "" || myContactSectionFormTextarea.val() === "") {
            formFillCheck("Fill in all the fields, please!");
        } else {
            formMessage = myContactSectionForm.serialize();

            $.ajax({
                url: "//formspree.io/wieteska.przemyslaw@gmail.com", 
                method: "POST",
                data: {message: formMessage},
                dataType: "json"
                }).done(function(response) {
                    formReset("Thank you!");
                }).fail(function(error) {
                    formReset("Oops, something went wrong! Please, try again!");
            })
        }
    }

    // formFillCheck function:

    function formFillCheck(message) {
        mySendOverlay.addClass("visible");
        mySendOverlayText.text(message);       
    }

    // formReset function:

    function formReset(message) {
        mySendOverlay.addClass("visible");
        mySendOverlayText.text(message);
        myContactSectionFormInputName.val("");
        myContactSectionFormInputEmail.val("");
        myContactSectionFormTextarea.val("");
        myContactSectionFormInputName.attr("placeholder", "Your name");
        myContactSectionFormInputEmail.attr("placeholder", "Your email address");
        myContactSectionFormTextarea.attr("placeholder", "Your message");
    }

    // closeOverlay function:

    function closeOverlay() {
        mySendOverlay.removeClass("visible");
    }



//-----EVENT LISTENERS:

    // formValidation when submit:

    myContactSectionForm.on("submit", formValidation);

    // closeOverlay when click:

    myCloseOverlayButton.on("click", closeOverlay);
})