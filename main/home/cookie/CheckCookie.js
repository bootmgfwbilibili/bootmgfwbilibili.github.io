cookielength=document.cookie.length;
if(cookielength==0)
{
    document.cookie="num=1,0,0,0;expires=31 Dec 9999 23:59:59 GMT";
}
cookienum=document.cookie.split(';')[0].split('=')[1].split(',');
var num1="1";var num2="1";var num3="1";
if(cookienum[0]!="1")
{
    document.getElementById("welcome-dialog").innerHTML="";
    document.getElementById("dialog-header").innerHTML="欢迎回来";
    document.getElementById("welcome-dropdown").innerHTML="";
}
if(cookienum[1]==num1)
{
    document.getElementById("num1").innerHTML="";
}
if(cookienum[2]==num2)
{
    document.getElementById("num2").innerHTML="";
}
if(cookienum[3]==num3)
{
    document.getElementById("num3").innerHTML="";
}