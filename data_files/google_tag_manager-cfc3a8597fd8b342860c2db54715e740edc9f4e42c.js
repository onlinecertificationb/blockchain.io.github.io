var isGoogleTagManagerInit=!1,googleTagManagerInit=function(){if(!isGoogleTagManagerInit&&(isGoogleTagManagerInit=!0,!location.search.match(/disable_gtm=1/g))){var e="true"===document.getElementById("visitor-country").getAttribute("data-iseuropean"),a=-1<window.location.hostname.indexOf("mygreatlearning.com")?"GTM-5CCNGLQ":"GTM-PKTMWB8",t=e?"GTM-MV7H6QT":a;"xxx"!=t&&"{}"!=t&&function(e,a,t,n,g){e[n]=e[n]||[],e[n].push({"gtm.start":(new Date).getTime(),event:"gtm.js"});var o=a.getElementsByTagName(t)[0],i=a.createElement(t),r="dataLayer"!=n?"&l="+n:"";i.async=!0,i.src="https://www.googletagmanager.com/gtm.js?id="+g+r,o.parentNode.insertBefore(i,o)}(window,document,"script","dataLayer",t)}};googleTagManagerInit();