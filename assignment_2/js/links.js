function allFieldsFilled(){
    // returns true if non of the fields are empty
    let filled = true;
    $('.form-control').each(function() {
        if ( $(this).val() === '' )
            filled = false;
    });
    return filled;
}


function validURL (selector) {
    // returns true if the value of the selector start with "https://"
    return /^https:\/\/([A-Za-z0-9_\-\/.+]+)$/.test($(selector).val());
}


function validateForm(){
    let valid = true;
    // Check whether the URL field starts with https://
    if (validURL("#url") === false) {
        valid = false;
        $( "#form-alert" ).text( "The URL field should begin with https:// !" );
    }
    // Check whether all fields are filled in
    if (allFieldsFilled() === false) {
        valid = false;
        $( "#form-alert" ).text( "Please fill in both fields before clicking on the button!" );
    }
    return valid
}


$(function() {
    // Setting up the button to toggle the display of the unordered list
    let onOff = "on";
    $( "#display" ).click(function() {
        if (onOff === "on") {
            $( "#links_list" ).hide();
            onOff = "off";
            $( "#display" ).text( "Show list" );
        } else {
            $( "#links_list" ).show();
            onOff = "on";
            $( "#display" ).text( "Hide list" );
        }
    });
    // Validating the fields and adding the content to the unordered list
    $( "#add" ).click(function() {
        if (validateForm() === false) {
            $( "#form-alert" ).show();
        } else {
            $( "#form-alert" ).hide();
            let linkName = $("#linkname").val();
            let URL = $("#url").val();
            $("#links_list").append('<li><a href="' + URL + '" target="_blank">' + linkName + '</a></li>');
        }
    });
    // Activating the deletion mode
    let deleteMode = "off";
    $( "#delete" ).click(function() {
        if (deleteMode === "off") {
            deleteMode = "on";
            $( "#delete" ).text( "Deactivate delete mode" );
            $( "a" ).click(function(){
                if (deleteMode === "on") {
                    event.preventDefault();
                    $(this).parent().remove();
                }
            });
        } else {
            deleteMode = "off";
            $( "#delete" ).text( "Activate delete mode" );
        }
    });
});