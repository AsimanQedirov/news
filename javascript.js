
    const baseUrl = 'https://jsonplaceholder.typicode.com/posts';
    var array = [];
    var k = 0;
    var tr = "<tr>";
    $.ajax({
        url: baseUrl,
        type: "GET",
        success: function (api) {
            array = api;
            for (var i = 0; i < array.length; i++) {
                tr = tr +
                    "<td>" + array[i].id + "</td>" +
                    "<td>/" + array[i].userId + "/</td>" +
                    "<td>" + array[i].title + "</td>" +
                    "<td>" + array[i].body + "</td>" +
                    "<td>" + "<i class='fas fa-eye icon-eye' title='View information' data-toggle='modal' data-target='#viewInfo'></i>" +
                    "<i class='far fa-edit' title='Edit information'></i>" +
                    "<i class='fas fa-trash-alt' title='Delete information'></i>" +
                    "</tr>";
                k++;
                $("#tbody").html(tr);
            }
        }
    });
    $("i.icon-eye").click(function(){
        var currentid= $(this).closest("tr").find("td:first-child").text();
        var paragraph = "<p>";
            paragraph = paragraph+ "Id:" + array[currentid]+"<br>"+
            "UserId:" + array[currentid].userId + "<br>"+
            "Title:" + array[currentid].title + "<br>"+
            "Body:1" + array[currentid].body+"<br>"+
            "</p>";
            $(".modal-body").html(paragraph);
    });


$("#saveChange").click(function(){  //change button
    var UserID = $("#UserID").val();
    $("#UserID").val('');
    var Title = $("#Title").val();
    $("#Title").val('');
    var Body = $("#Body").val();
    $("#Body").val('');
    console.log(UserID + " " + Title + " " + Body);
    var postData = {
        UserID: UserID,
        Title: Title,
        Body: Body
    }
    $("#text").text("changes have been saved");
 
    const postUrl = baseUrl;
    $.ajax({
        url: postUrl,
        type: "POST",
        data: postData,
        success: function () {
            k = k  + 1;
            var tr = "<tr>";
            tr = tr +
                "<td>" + k + ".</td>" +
                "<td>/" + postData.UserID + "/</td>" +
                "<td>" + postData.Title + "</td>" +
                "<td>" + postData.Body + "</td>" +
                "<td>" + "<i class='fas fa-eye' title='View information' onclick='viewFunction()' data-toggle='modal' data-target='#myModal'></i>" +
                "<i class='far fa-edit' title='Edit information'></i>" +
                "<i class='fas fa-trash-alt' title='Delete information'></i>" +
                "</tr>";
            $("#tbody tr:last-child").after(tr);
            console.log(array);
        }
    });
});