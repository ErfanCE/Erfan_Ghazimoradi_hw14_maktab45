$('#loginForm').on('submit', function (event) {
    event.preventDefault();

    let data = {
        username: $('#username').val(),
        password: $('#password').val(),
    };


    $.ajax({
        type: "POST",
        url: "http://localhost:8000/getLogin",
        data,
        success: function (response) {
            if (response === 'login') {
                location.href = `http://localhost:8000/profile-${data.username}`;
            } else {
                errorAlert(response)
            }
        }
    });
});

function errorAlert(status) {
    let errorMsg;

    if (status === 'empty') {
        errorMsg = 'Fill out all fields.';
    } else if (status === 'signup') {
        errorMsg = 'Username and Password do not Match.'
    } else {
        errorMsg = 'Something went wrong! try again.'
    }

    $('.error-alert').css('opacity', '1');
    $('.error-alert').html(`<p>${errorMsg}</p>`);

    setTimeout(function () {
        $('.error-alert').css({
            opacity: '0',
            transition: '0.3s'
        });
    }, 1500);
}