cookie=document.cookie.split(',');
if(cookie[0]!="1")
{
    document.getElementById("welcome-dialog").innerHTML="";
    document.getElementById("dialog-header").innerHTML="欢迎回来";
    document.getElementById("welcome-dropdown").innerHTML="";
}
if(cookie[1]=="1")
{
    document.getElementById("num1").innerHTML="";
}
if(cookie[2]=="1")
{
    document.getElementById("num2").innerHTML="";
}
if(cookie[3]=="1")
{
    document.getElementById("num3").innerHTML="";
}