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
                location.href = `http://localhost:8000/${data.username}`;
            } else {
                console.log(response);
            }
        }
    });
});