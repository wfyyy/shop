$(function(){
    var apiUlr=BasicServer.ServerUrl
    $.post(apiUlr+'Handle/RoleHandle/LoadAllRoles','',function(data){
        var result=eval(data);
        for(var i = 0;i < data.list.length; i++){
            
        }
    });
});