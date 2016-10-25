$(function () {
    var apiUrl = BasicServer.ServerUrl;
    var roleId = GetQueryString("id");
    $.post(apiUrl + 'Handle/RoleHandle/GetRole', { id: roleId }, function (data) {
        var result = eval(data);
        if (result.Name != undefined) {
            $("#name").html("角色名称" + data.Name);
            $("#status").html("当前状态" + data.Status);
            $("#type").html("角色类型" + data.Type);
        }
    });

    $("#delete").click(function (data) {
        $.post(apiUrl + 'Handle/RoleHandle/DeleteRole', { id: roleId }, function (data) {
            var result = eval(data);
            if (result.statusCode == "200") {
                alert("删除成功！");
                window.location.href = 'list.html';
            }
            else {
                alert("删除失败！");
                window.location.href = 'list.html';
            }
        });
    });

    $("#edit").click(function () {
        $("#content").hide();
        $("#editform").show();
    });

    $("#submit").click(function () {
        var name = $("#roleName").val();
        var type = $("#roleType").val();
        $.post(apiUrl + 'Handle/RoleHandle/AddOrUpdateRole', { Id: roleId, Name: name, Type: type }, function (data) {
            var result = eval(data);
            if (result.statusCode == "200") {
                alert("编辑成功！");
            }
            else {
                alert("编辑失败！");
            }
            window.location.reload();
        });
    });

    $("#return").click(function () {
        $("#editform").hide();
        $("#content").show();
    });
});

