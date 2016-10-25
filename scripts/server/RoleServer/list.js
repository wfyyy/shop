$(function () {
    var apiUrl = BasicServer.ServerUrl;
    var roleId = GetQueryString("id");
    var result;
    // var data = new FormData();
    // data.append("file", file);
    // data.append("key", key);
    // data.append("scope", scope);
    // data.append("token", token);
    // var url = 'http://api.map.baidu.com/geocoder/v2/?ak=C93b5178d7a8ebdb830b9b557abce78b&callback=renderReverse&location=36.7207599,119.1735968&output=json&pois=0';
    // var url="http://localhost:52789/api/RoleHandle/LoadAllRoles";
    $.get('scripts/server/RoleServer/data.json', "", function (data) {
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
    // var url="data.json";
    //   $.ajax({
    //          type: "get",
    //          url: url,

    //      });
    //      window.renderReverse=function(data){
    //          result=data;
    //          console.log(data);
    //      }
    // var reuslt = eval(data);
    // var html = "";
    // if (data.list.length() > 0) {
    //     for (var i = 0; i < data.list.length(); i++) {
    //         html += "<div class='proItme '>"
    //         html += "<a href='detail.html?id=" + data.list[i].id + "'>"
    //         html += "<span class='proDt'>"
    //         html += "<strong class='proDD DD1'>角色名称：" + data.list[i].Name + "</strong>"
    //         html += " <b class='proDD DD3'>当前状态：" + data.list[i].Status + "</b>"
    //         html += " <p class='proDD DD4'>角色类型：" + data.list[i].Type + "</p>"
    //         html += "</span>"
    //         html += "</a>"
    //         html += "</div>";
    //     }
    //     $("#categoryProductListBlock").html(html);
    // }
    // else {
    //     $("#categoryProductListBlock").html("没有数据");
    // }




    function successfunction(data) {
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
    };

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
