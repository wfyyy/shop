$(function () {
    var apiUrl = BasicServer.ServerUrl;
    var roleId = GetQueryString("id");
    $.post(apiUrl + 'Handle/RoleHandle/LoadAllRoles', '', function (data) {
        var reuslt = eval(data);
        var html = "";
        if (data.list.length > 0) {
            for (var i = 0; i < data.list.length; i++) {
                html += "<div class='proItme '>"
                html += "<a href='detail.html?id=" + data.list[i].id + "'>"
                html += "<span class='proDt'>"
                html += "<strong class='proDD DD1'>角色名称：" + data.list[i].Name + "</strong>"
                html += " <b class='proDD DD3'>当前状态：" + data.list[i].Status + "</b>"
                html += " <p class='proDD DD4'>角色类型：" + data.list[i].Type + "</p>"
                html += "</span>"
                html += "</a>"
                html += "</div>";
            }
            $("#categoryProductListBlock").html(html);
        }
        else {
            $("#categoryProductListBlock").html("没有数据");
        }
    });
    $("#submit").click(function () {
        var name = $("#roleName").val();
        var type = $("#roleType").val();
        $.post(apiUrl + '/Handle/RoleHandle/AddOrUpdate', { Id: roleId, Name: name, Type: type }, function (data) {
            var result = eval(data);
            if (result.statusCode == "200") {
                alert("添加成功！");
                window.location.href = 'list.html';
            }
            else {
                alert("添加失败");
                window.location.href = 'list.html';
            }
        });
    });


    $("#add").click(function () {
        $("#content").hide();
        $("#addRole").show();
        $(".searchBox").hide();
    });

    $("#return").click(function () {
        $("#addRole").hide();
        $("#content").show();
        $(".searchBox").show();
    });
});
