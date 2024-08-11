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
    cookienum[1]=1;
    document.cookie="num="+cookienum+";expires=31 Dec 9999 23:59:59 GMT";
    document.getElementById("num1-para").innerHTML="";
}
function num2()
{
    cookienum=document.cookie.split(';')[0].split('=')[1].split(',');
    cookienum[2]=2;
    document.cookie="num="+cookienum+";expires=31 Dec 9999 23:59:59 GMT";
    document.getElementById("num2-para").innerHTML="";
}
function num3()
{
    cookienum=document.cookie.split(';')[0].split('=')[1].split(',');
    cookienum[3]=1;
    document.cookie="num="+cookienum+";expires=31 Dec 9999 23:59:59 GMT";
    document.getElementById("num3-para").innerHTML="";
}