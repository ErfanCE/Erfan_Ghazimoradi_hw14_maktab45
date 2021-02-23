$('#editForm').on('submit', function (event) {
    event.preventDefault();

    let data = {
        username: $('#username').val(),
        password: $('#password').val(),
        email: $('#email').val(),
        gender: $('#gender').val(),
        isLoggedIn: false
    };


    $.ajax({
        type: "POST",
        url: "http://localhost:8000/updateUser",
        data,
        success: function (response) {
            if (response === 'edit') {
                location.href = 'http://localhost:8000/login';
            }
        }
    });
});