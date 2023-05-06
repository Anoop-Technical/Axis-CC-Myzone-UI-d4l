$(document).ready(function () {
    // $("#otpModal").modal('show');
    $('.form-control').not('.fakeinput').on('keyup blur', function (e) {
        $(this).closest('.form-group').removeClass('has-error');
        $(this).removeClass("invalid");
    });
    $('input[type="checkbox"],input[type="radio"]').on('click', function () {
        $(this).removeClass("error ,invalid");
        $(this).closest('.form-group').removeClass('has-error');
    });
    $('select').selectmenu();
    $('select').on('change selectmenuchange', function () {
        $(this).closest('.form-group').removeClass('has-error');
    });
    $(".form-group .ui-selectmenu-button").on("focus", function () {
        $(this).closest(".form-group").addClass("is-focused");
    });
    $(".form-group .ui-selectmenu-button").on("focusout", function () {
        $(this).closest(".form-group").removeClass("is-focused");
    });

    $(".form-control").focusin(function () {
        $(this).closest(".form-group").addClass("is-focused");
    });
    $(".form-control").focusout(function () {
        $(this).closest(".form-group").removeClass("is-focused");
    });
    $.validator.addMethod("pan", function (value, element) {
        return this.optional(element) || /^[a-zA-Z]{3}[Pp][a-zA-Z][0-9]{4}[a-zA-Z]$/.test(value) && value.length == 10;
    }, "* Invalid PAN No");
    $.validator.addMethod("mobileNumber", function (value, element) {
        return this.optional(element) || value.match(/^[6-9]\d+$/) && value.length >= 10;
    }, "Invalid mobile number!");
    $.validator.addMethod(
        "email",
        function (value, element) {
            return (
                this.optional(element) ||
                /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
                    value
                )
            );
        },
        "Enter valid email address !"
    );
    $(".emp_details").hide();
    $( "#residencePincode" ).focusin(function() {
        $( ".emp_details" ).slideDown();
    });
      
    $.validator.addMethod("GreaterThanZero", function (value, element) {
        return this.optional(element) || value.match(/^[1-9][0-9,]*$/);
    }, "* should not start with Zero");
    var date = new Date();
    var m = date.getMonth(),
        d = date.getDate(),
        y = date.getFullYear();
    var defaultyear = y - 21;
    $('#dob').datepicker({
        dateFormat: 'yy-mm-dd',
        changeMonth: true,
        changeYear: true,
        yearRange: "-58:+0",
        maxDate: "-20y",
        defaultDate: new Date(defaultyear, m, d)
    });
    $("#axis-form-details").validate({
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
            fullName: {
                required: true,
            },
            emailId: {
                required: true,
                email: true
            },
            gender: {
                required: true,
            },
            pancard: {
                required: true,
                pan: true
            },
            dob: {
                required: true,
            },
            empType: {
                required: true,
            },
            customizedName: {
                required: true,
            },
            qualification: {
                required: true,
            },
            marital_status: {
                required: true,
            },
            mother_name: {
                required: true,
            },
            residenceAddress: {
                required: true,
            },
            residenceCity: {
                required: true,
            },
            residencePincode: {
                required: true
            },
            company_name: {
                required: true,
            },
            annual_income: {
                required: true,
            },
            mode_of_income: {
                required: true,
            },
            Work_exp: {
                required: true,
            },
            office_address: {
                required: true,
            },
            office_city: {
                required: true,
            },
            office_pincode: {
                required: true,
            },
            prefer_address: {
                required: true,
            },
            check_show: {
                required: true,
            },
        },
        submitHandler: function (form) {
            form.submit();
        }
    });

    // OTP Verification Form
    $("#otp-verification-form").validate({
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
            otp: {
                required: true,
                minlength: 4,
                maxlength: 4
            }
        },
        messages: {
            otp: {
                required: "OTP is required",
                minlength: "Minimum 4 digits",
                maxlength: "Maximum 4 digits"
            }
        },
        submitHandler: function (form) {
            form.submit();
        }
    });
});
$(".NumericFormat").autoNumeric({
    mDec: "0",
    lZero: "deny",
    vMax: "9999999"
});
// Character Input Only
function CharsetKeyOnly(evt) {
    var k;
    document.all ? k = evt.keyCode : k = evt.which;
    return ((k > 64 && k < 91) || (k > 96 && k < 123) || k == 8 || k == 32 || k == 0 || k == 9);
}

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

// OTP Digit Values 
$('.digit-group').find('.digit').each(function () {
    $(this).attr('maxlength', 1);
    var otpTypedVal = '';

    $(this).on('keyup', function (e) {
        if ($(this).val().length < 1) {
            return false;
        }
        if ($('#digit-1').val().length > 0 && $('#digit-2').val().length > 0 && $('#digit-3').val().length > 0 && $('#digit-4').val().length > 0) {
            $('.digit-group .form-group').removeClass('has-error');
        }
        otpTypedVal = $('#digit-1').val() + $('#digit-2').val() + $('#digit-3').val() + $('#digit-4').val();

        $('#otp').val(otpTypedVal);
        var parent = $($(this).parent());

        if (e.keyCode === 8 || e.keyCode === 37) {
            var prev = parent.find('input#' + $(this).data('previous'));
            if (prev.length) {
                $(prev).select();
            }
        } else if ((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 65 && e.keyCode <= 90) || (e.keyCode >= 96 && e.keyCode <= 105) || e.keyCode === 39) {
            var next = parent.find('input#' + $(this).data('next'));
            if (next.length) {
                $(next).select();
            }
        }
    });
});

// OTP Forword & Backward
$(".digit").keyup(function () {
    if (this.value.length == this.maxLength) {
        $(this).next(".digit").focus();
    } else {
        $(this).prev(".digit").focus();
        var textVal = $('#otp').val();
        var b = textVal.slice(0,-1)
        $("#otp").val(b);
    }
});

$('#fullName').bind('keypress', OnlyCharSpace);
$('#mother_name').bind('keypress', OnlyCharSpace);
$('#customizedName').bind('keypress', OnlyCharSpace);
$('#office_city').bind('keypress', OnlyCharSpace);
$('#residenceCity').bind('keypress', OnlyCharSpace);
$('#company_name').bind('keypress', OnlyCharSpace);
$('#residencePincode').bind('keypress', OnlyNumeric);
$('#office_pincode').bind('keypress', OnlyNumeric);
$('#mobile').bind('keypress', OnlyNumeric);
$('#annual_income').bind('keypress', OnlyNumeric);

