function readme()
{
    cookie=document.cookie.split(';');
    cookienum=cookie[0];
    cookienumcut=cookienum.split(',');
    cookienumcut[0]="0"
    cookienum=cookienumcut;
    cookie[0]=cookienum;
    document.cookie=cookie;
    document.getElementById("welcome-dialog").innerHTML="";
    document.getElementById("welcome-dropdown").innerHTML="";
}
function num1()
{
    cookie=document.cookie.split(';');
    cookienum=cookie[0];
    cookienumcut=cookienum.split(',');
    cookienumcut[1]=1;
    cookienum=cookienumcut;
    cookie[0]=cookienum;
    document.cookie=cookie;
    document.getElementById("num1").innerHTML="";
}
function num2()
{
    cookie=document.cookie.split(';');
    cookienum=cookie[0];
    cookienumcut=cookienum.split(',');
    cookienumcut[2]=1;
    cookienum=cookienumcut;
    cookie[0]=cookienum;
    document.cookie=cookie;
    document.getElementById("num2").innerHTML="";
}
function num3()
{
    cookie=document.cookie.split(';');
    cookienum=cookie[0];
    cookienumcut=cookienum.split(',');
    cookienumcut[3]=1;
    cookienum=cookienumcut;
    cookie[0]=cookienum;
    document.cookie=cookie;
    document.getElementById("num3").innerHTML="";
}