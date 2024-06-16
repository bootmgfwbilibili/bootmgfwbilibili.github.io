function readme()
{
    cookie=document.cookie.split(',');
    cookie[0]="0"
    document.cookie=cookie;
    document.getElementById("welcome-dialog").innerHTML="";
    document.getElementById("welcome-dropdown").innerHTML="";
    document.getElementById("welcome-para").innerHTML="";
}
function num1()
{
    cookie=document.cookie.split(',');
    cookie[1]=num1;
    document.cookie=cookie;
    document.getElementById("num1").innerHTML="";
}
function num2()
{
    cookie=document.cookie.split(',');
    cookie[2]=num2;
    document.cookie=cookie;
    document.getElementById("num2").innerHTML="";
}
function num3()
{
    cookie=document.cookie.split(',');
    cookie[3]=num3;
    document.cookie=cookie;
    document.getElementById("num3").innerHTML="";
}