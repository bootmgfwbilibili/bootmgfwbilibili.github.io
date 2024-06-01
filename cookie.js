function IntializeCookie()
{
    if(document.cookie="")
    {
        document.cookie="11";
    }
    else
    {
        document.cookie[0]="1"
    }
}