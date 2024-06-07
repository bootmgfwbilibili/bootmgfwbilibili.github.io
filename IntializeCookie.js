length=document.cookie.length;
if(length<9)
{
    document.cookie="1,1,0,0,0";
}
else
{
    cookie=document.cookie.split(',');
    window.alert(cookie);
    window.alert(typeof cookie);
    cookie[0]=0;
    window.alert(cookie);
}