$('#signupForm').on('submit', function (event) {
    event.preventDefault();

    let data = {
        username: $('#username').val(),
        password: $('#password').val(),
        email: $('#email').val(),
        gender: $('#gender').val()
    };

    $.ajax({
        type: "POST",
        url: "http://localhost:8000/getSignup",
        data,
        success: function (response) {
            if (response === 'create') {
                location.href = 'http://localhost:8000/login';
            } else {
                errorAlert(response);
            }
        }
    });

});

function errorAlert(status) {
    let errorMsg;

    if (status === 'empty') {
        errorMsg = 'Fill out all fields.';
    } else if (status === 'exist') {
        errorMsg = 'This username is already taken.'
    } else {
        errorMsg = 'Something went wrong! try again.'
    }

    $('.error-alert').css('display', 'block');
    $('.error-alert').html(`<p>${errorMsg}</p>`);

    setTimeout(function () {
        $('.error-alert').fadeOut(500);
    }, 1500);
}