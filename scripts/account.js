var returnUrl = "/mob"; //返回地址
var shadowName = ""; //影子账号名
var apiUrl=BasicServer.ServerUrl
//展示验证错误
function showVerifyError(verifyErrorList) {
    if (verifyErrorList != undefined && verifyErrorList != null && verifyErrorList.length > 0) {
        var msg = "";
        for (var i = 0; i < verifyErrorList.length; i++) {
            msg += verifyErrorList[i].msg + "\n";
        }
        alert(msg)
    }
}

//用户登录
function login() {
    var userName=$("#userName").val();
    var password=$("#password").val();

    if (!verifyLogin(userName, password)) {
        return;
    }

    var parms = new Object();
    parms["UserName"] = userName;
    parms["Password"] = password;
    parms["AppKey"]='openauth';
    $.post(apiUrl+"/SSO/Login/Login", parms, loginResponse)
}

//验证登录
function verifyLogin(accountName, password) {
    if (accountName.length == 0) {
        alert("请输入帐号名");
        return false;
    }
    if (password.length == 0) {
        alert("请输入密码");
        return false;
    }
    return true;
}

//处理登录的反馈信息
function loginResponse(data) {
    var result = eval("(" + data + ")");
    if (result.Success) {
        window.location.href = result.ReturnUrl;
    }
    else {
        showVerifyError(result.content);
    }
}

//用户注册
function register() {
    var userName = $("#userName").val();
    var passWord = $("#passWord").val();
    var confirmPwd = $("#confirmPwd").val();

    if (!verifyRegister(userName, passWord, confirmPwd)) {
        return;
    }

    var parms = new Object();
    parms["Account"] = userName;
    parms["Password"] = password;
    parms["AppKey"]='openauth';
    $.post(apiUrl+"/SSO/Login/Register", parms, registerResponse)
}

//验证注册
function verifyRegister(userName, passWord, confirmPwd) {
    if (userName.length == 0) {
        alert("请输入帐号名");
        return false;
    }
    if (passWord.length == 0) {
        alert("请输入密码");
        return false;
    }
    if (passWord != confirmPwd) {
        alert("两次输入的密码不一样");
        return false;
    }
    return true;
}

//处理注册的反馈信息
function registerResponse(data) {
    var result = eval("(" + data + ")");
    if (result.success) {
        window.location.href = "login.html";
    }
    else {
        alert("注册失败"+result.message);
    }
}

