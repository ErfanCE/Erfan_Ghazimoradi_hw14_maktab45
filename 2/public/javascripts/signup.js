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
                console.log(response);
            }
        }
    });
});