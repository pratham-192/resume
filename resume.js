//smooth scroll:-
var navmenuanchortags=document.querySelectorAll(".nav-menu a");
for(var i=0;i<navmenuanchortags.length;i++)
{
    // console.log(navmenuanchortags[i].textContent);
    navmenuanchortags[i].addEventListener("click",function(event){
        event.preventDefault();
        var targetsectionid=this.textContent.trim().toLowerCase();
        var targetsection=document.getElementById(targetsectionid);
        var targetsectioncoords=targetsection.getBoundingClientRect();
        var current=0;
        var target=targetsectioncoords.top;
        var interval=setInterval(function(){
            if(current>=target)
            {
                clearInterval(interval);
                return;
            }
            current+=40;
            window.scrollBy(0,40);
        },25);
        console.log(targetsection);
    })
}