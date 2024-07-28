function readme()
{
    cookienum=document.cookie.split(';')[0].split('=')[1].split(',');
    cookienum[0]=0;
    document.cookie="num="+cookienum+";expires=31 Dec 9999 23:59:59 GMT";
    document.getElementById("welcome-dialog").innerHTML="";
    document.getElementById("welcome-dropdown").innerHTML="";
}
function num1()
{
    cookienum=document.cookie.split(';')[0].split('=')[1].split(',');
    cookienum[1]="1";
    cookie=cookienum+";expires=31 Dec 9999 23:59:59 GMT";
    document.cookie=cookie;
    document.getElementById("num1").innerHTML="";
}
function num2()
{
    cookienum=document.cookie.split(';')[0].split('=')[1].split(',');
    cookienum[2]="1";
    cookie=cookienum+";expires=31 Dec 9999 23:59:59 GMT";
    document.cookie=cookie;
    document.getElementById("num2").innerHTML="";
}
function num3()
{
    cookienum=document.cookie.split(';')[0].split('=')[1].split(',');
    cookienum[3]="1";
    cookie=cookienum+";expires=31 Dec 9999 23:59:59 GMT";
    document.cookie=cookie;
    document.getElementById("num3").innerHTML="";
}