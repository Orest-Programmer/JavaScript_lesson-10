$('#submitGet').bind('click', function () {

    let userData = {
        surName: $('#surName').val(),
        name: $('#name').val(),
        age: $('#age').val(),
        place: $('#place').val(),
    };
    if (userData.age < 0 || userData.age > 100) {
        console.log('Age validation error!');
        alert('Validation Error! Age is over 100 or < 0 : ' + userData.age);
    } else {
        $.ajax({
            type: 'GET',
            // data: JSON.stringify(userData),
            contentType: 'application/json',
            url: "http://localhost:3000/userGet?surName=" + userData.surName + '.ValidatedByGET' +
                "&userName=" + userData.name + '.ValidatedByGET' +
                "&age=" + userData.age + '.ValidatedByGET' +
                "&place=" + userData.place + '.ValidatedByGET',
            success: function (data) {
                console.log(JSON.stringify(data));
            }
        });
    }
});

$('#submitPost').bind('click', function () {

    let userData = {
        surName: $('#surNamePost').val(),
        name: $('#namePost').val(),
        age: $('#agePost').val(),
        place: $('#placePost').val(),
    };
    if (userData.age < 0 || userData.age > 100) {
        console.log('Age validation error!');
        alert('Validation Error! Age is over 100 or < 0 : ' + userData.age);
    } else {
        $.ajax({
            type: 'POST',
            data: JSON.stringify(userData),
            contentType: 'application/json',
            url: "http://localhost:3000/userPost",
            success: function (data) {
                console.log(JSON.stringify(data));
            }
        });
    }
});