"use strict";

$(document).ready(function() {
    var myContactSectionForm = $("form"),
        myContactSectionFormInputName = $("form #name"),
        myContactSectionFormInputEmail = $("form #email"),
        myContactSectionFormTextarea = $("form textarea"),
        mySendOverlay = $(".send-overlay"),
        mySendOverlayText = $(".send-overlay-container p"),
        myCloseOverlayButton = $(".close-button"),
        formContent;
        //formName,
        //formEmail,
        //formMessage;

    myContactSectionForm.on("submit", formValidation);

    myCloseOverlayButton.on("click", function() {
        mySendOverlay.removeClass("visible");
    })

    function formValidation(event) {
        event.preventDefault();

        if (myContactSectionFormInputName.val() === "" || myContactSectionFormInputEmail.val() === "" || myContactSectionFormTextarea.val() === "") {
            formFillCheck("Fill in all the fields, please!");
        } else {
            //formMessage = myContactSectionForm.serialize();

            formContent = {
                formName: myContactSectionFormInputName.val(),
                formEmail: myContactSectionFormInputEmail.val(),
                formMessage: myContactSectionFormTextarea.val()
            }

            $.ajax({
                url: "//formspree.io/wieteska.przemyslaw@gmail.com", 
                method: "POST",
                data: JSON.stringify(formContent)/*{message: formContent}*/,
                dataType: "json"
                }).done(function(response) {
                    formReset("Thank you!");
                }).fail(function(error) {
                    formReset("Oops, something went wrong! Please, try again!");
            })
        }
    }

    function formFillCheck(message) {
        mySendOverlay.addClass("visible");
        mySendOverlayText.text(message);       
    }

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
})