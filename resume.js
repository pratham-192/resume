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
/// adding the skill section js feature
// 1) handle scroll event
// 2) skill section is visible or not on screen
var progressBars = document.querySelectorAll(".skill-progress > div");
var skillscontainer=document.getElementById("skill-container");
window.addEventListener('scroll',checkScroll);


function initialiseBar(bar) {
    bar.setAttribute("data-visited", false);
    bar.style.width = 0 + '%';
}
for (var bar of progressBars) {
    initialiseBar(bar);
}


var animationdone=false;
function checkScroll() {

    for (let bar of progressBars) {
        var coords = bar.getBoundingClientRect();
        if ((bar.getAttribute("data-visited") == "false") &&
            (coords.top <= (window.innerHeight - coords.height))) {
            bar.setAttribute("data-visited", true);
            fillbars(bar);
        } else if (coords.top > window.innerHeight) {
            bar.setAttribute("data-visited", false);
            initialiseBar(bar);
        }

    }
}
function fillbars(bar) {

    var currentWidth = 0;
    var targetWidth = bar.getAttribute("data");
    var interval = setInterval(function () {
        if (currentWidth >= targetWidth) {
            clearInterval(interval);
            return;
        }
        currentWidth++;
        bar.style.width = currentWidth + '%';
    }, 5);

}