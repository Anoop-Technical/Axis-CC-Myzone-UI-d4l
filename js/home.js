$(document).ready(function () {
    $('.form-control').not('.fakeinput').on('keyup blur', function (e) {
        $(this).closest('.form-group').removeClass('has-error');
        $(this).removeClass("invalid");
    });
    $('input[type="checkbox"],input[type="radio"]').on('click', function () {
        $(this).removeClass("error ,invalid");
        $(this).closest('.form-group').removeClass('has-error');
    });
    $(".form-control").focusin(function () {
        $(this).closest(".form-group").addClass("is-focused");
    });
    $(".form-control").focusout(function () {
        $(this).closest(".form-group").removeClass("is-focused");
    });

    $.validator.addMethod("mobileNumber", function (value, element) {
        return this.optional(element) || value.match(/^[6-9]\d+$/) && value.length >= 10;
    }, "Invalid mobile number!");

    $("#mob-verification-form").validate({
        ignore: [],
        errorClass: 'invalid',
        errorPlacement: function (error, element) {
            var errorText = error.text();
            if (element.closest('.form-group').find('.help-block').length < 1) {
                element.closest('.form-group').append('<span class="help-block">');
            }
            element.closest('.form-group').addClass('has-error');
            element.closest('.form-group').find('.help-block').html(errorText);
        },
        highlight: function (element, errorClass) {
            $(element).addClass(errorClass).parent().prev().children("select").addClass(errorClass);
            if ($(element).attr('type') == 'radio' || $(element).attr('type') == 'checkbox') {
                $(element).parent().parent().addClass(errorClass);
            }
        },
        rules: {
            mobile: {
                required: true,
                mobileNumber: true,
            }
        },
        submitHandler: function (form) {
            form.submit();
        }
    });
});

// numeric Input Only
function numOnly(evt) {
    var k;
    document.all ? k = evt.keyCode : k = evt.which;
    return (k == 0 || k == 9 || k == 8 || k == 32 || (k >= 48 && k <= 57));
}

function alpha(event) {
    var value = String.fromCharCode(event.which);
    var pattern = new RegExp(/^[a-zA-Z0-9 .,-]+$/i);
    return pattern.test(value);
}

