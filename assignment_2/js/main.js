function allFieldsFilled(){
    // returns true if non of the fields are empty
    let filled = true;
    $('.form-control').each(function() {
        if ( $(this).val() === '' )
            filled = false;
    });
    return filled;
}

function onlyLetters(selector) {
    // returns true if the value selector contains only letters and spaces
    return /^[a-zA-Z\s]+$/.test($(selector).val());
}

function onlyNumbers(selector) {
    // returns true if the value of a selector contains only numbers
    return /^[0-9]+$/.test($(selector).val());
}

function validEmail (selector) {
    // returns true if the value of the selector is a valid e-mail adress
    return /^([A-Za-z0-9_\-.+])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,})$/.test($(selector).val());
}

function validateForm(){
    let valid = true;

    // Check whether the Name field only contains letters
    if (onlyLetters("#name") === false) {
        valid = false;
        $( "#form-alert" ).text( "The Name field should only contain letters and spaces!" );
    }
    // Check whether the City field only contains letters
    if (onlyLetters("#city") === false) {
        valid = false;
        $( "#form-alert" ).text( "The City field should only contain letters and spaces!" );
    }
    // Check whether the Age field only contains numbers
    if (onlyNumbers("#age") === false) {
        valid = false;
        $( "#form-alert" ).text( "The Age field should only numbers!" );
    }
    // Check whether the Phone number field only contains numbers
    if (onlyNumbers("#phone") === false) {
        valid = false;
        $( "#form-alert" ).text( "The Phone number field should only numbers!" );
    }
    // Check whether the E-mail adress field matches an email address regular expression
    if (validEmail("#mail") === false) {
        valid = false;
        $( "#form-alert" ).text( "The E-mail adress field does not contain a valid e-mail adress!" );
    }
    // Check whether all fields are filled in
    if (allFieldsFilled() === false) {
        valid = false;
        $( "#form-alert" ).text( "Not all fields are filled in!" );
    }

    return valid
}

function writeFormData(){
    let formValues = Object.values(contactForm);
    let i = 0;
    $( "td" ).each(function() {
        $( this ).text( formValues[i]);
        i += 1
    });
}


$(function() {
    $( "#submit" ).click(function() {
        // Assigning the form field values to an object
        contactForm = {
            name_field: $("#name").val(),
            age_field: $("#age").val(),
            city_field: $("#city").val(),
            mail_field: $("#mail").val(),
            phone_field: $("#phone").val(),
        };
        // Validation of the form
        if (validateForm() === false) {
            $( "#form-alert" ).show();
        } else {
            writeFormData();
            $( "#form-alert" ).hide();
            $( "#form-content" ).show();
        }
    });
    $( "#erase" ).click(function() {
        // Assigning the form field values to an object
        $( "input" ).each(function() {
            $(this).val("");
            $( "#form-alert" ).hide();
            $( "#form-content" ).hide();
        });
    });

    // Making the Home & Contact tabs work
    $( "#contact-tab" ).click(function() {
        $("#link-tab").removeClass("active");
        $( "#links" ).removeClass("active");
        $( "#contact-tab" ).addClass("active");
        $( "#contact" ).addClass("active");
    });
    $( "#link-tab" ).click(function() {
        $("#link-tab").addClass("active");
        $( "#links" ).addClass("active");
        $( "#contact-tab" ).removeClass("active");
        $( "#contact" ).removeClass("active");
    });
});
