var ua = navigator.userAgent.toLowerCase();
if(window.navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)) 
{
    window.location.href="/message/mobile/index.html"
} 
else if (ua.match(/MicroMessenger/i)=="micromessenger") 
{  
    window.location.href="/message/wechat/index.html"
}
else
{
    window.location.href="/main/home/index.html"
}