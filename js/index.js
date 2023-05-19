var emailorPhno=sessionStorage.getItem("E&M");
var pass=sessionStorage.getItem("pass");
var inputTags=document.getElementsByClassName("inputTag");

function loginFun()
{
    var userGivenID=inputTags[0].value
    var userGivenPass=inputTags[1].value
    var formTag=document.forms
if(userGivenID==emailorPhno && userGivenPass==pass)
{
    document.getElementById("loginButton").type="submit"
    formTag[0].action="./html/home.html"
}
else if(userGivenID!=emailorPhno && userGivenPass==pass)
{
    document.getElementById("status").innerHTML="Wrong User Id"
    document.getElementById("emailDiv").style.borderColor="red"
    document.getElementById("passDiv").style.borderColor="royalblue"

    document.body.style.backgroundImage="linear-gradient(75deg,red,#C0C0C0)"
}
else if(userGivenID==emailorPhno && userGivenPass!=pass)
{
    document.getElementById("status").innerHTML="Wrong password"
    document.getElementById("passDiv").style.borderColor="red"
    document.getElementById("emailDiv").style.borderColor="royalblue"

    document.body.style.backgroundImage="linear-gradient(75deg,#FFD700,red)"
}
else{
    document.getElementById("status").innerHTML="Wrong User Id and Password"
    document.getElementById("emailDiv").style.borderColor="red"
    document.getElementById("passDiv").style.borderColor="red"
    document.body.style.backgroundImage="linear-gradient(75deg,red,red)"

    }
}
function visiblepassword()
{
    inputTags[1].type="text"
    document.getElementById("visibleLogo").src="./aasssets/logos/open.png"
    document.getElementById("visibleLogo").style.transform="rotateY(180deg)"
    document.getElementById("visibleLogo").style.transition="transform 0.2s"

}
function invisiblepassword()
{
    inputTags[1].type="password"
    document.getElementById("visibleLogo").src="./aasssets/logos/close .png"
    document.getElementById("visibleLogo").style.transform="rotateY(0deg)"
    document.getElementById("visibleLogo").style.transition="transform 0.2s"

}