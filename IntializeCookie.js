length=document.cookie.length;
if(length<5)
{
    document.cookie="11000";
}
else
{
    cookie=document.cookie.split();
    window.alert(cookie);
    window.alert(typeof cookie)
}