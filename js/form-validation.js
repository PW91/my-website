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
            formCheck("Please, fill in all the fields!");
        } else if (!myContactSectionFormInputEmail.val().match(/^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i)) {
            formCheck("Please, provide valid email address!");
        } else {
            formMessage = myContactSectionForm.serialize();

            $.ajax({
                url: "//formspree.io/wieteska.przemyslaw@gmail.com", 
                method: "POST",
                data: {message: formMessage},
                dataType: "json"
                }).done(function(response) {
                    formCheck("Thank you!");
                    formReset();
                }).fail(function(error) {
                    formCheck("Oops, something went wrong! Please, try again!");
                    formReset();
            })
        }
    }

    // formCheck function:

    function formCheck(message) {
        mySendOverlay.addClass("visible");
        mySendOverlayText.text(message);       
    }

    // formReset function:

    function formReset() {
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