cookie=document.cookie.split(';');
cookienum=cookie[0];
cookienumcut=cookienum.split(',');
length=cookienumcut.length;
window.alert(document.cookie);
window.alert(cookienum);
window.alert(cookienumcut);
window.alert(length);
if(length<4)
{
    document.cookie="1,0,0,0;expires=31 Dec 9999 23:59:59 GMT";
}