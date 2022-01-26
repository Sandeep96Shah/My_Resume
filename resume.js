var navMenu=document.querySelectorAll('nav a');
for(var i=0;i<navMenu.length;i++){
  navMenu[i].addEventListener('click',function(event){
    event.preventDefault();
    let id=this.textContent.trim().toLowerCase();
    console.log(id);
    let idName=document.getElementById(id);
    let pos=idName.getBoundingClientRect();
    let current=0;
    let target=pos.y;
    let check=setInterval(function(){
      if(current>=target){
        clearInterval(check);
        return;
      }
      current+=50;
      window.scrollBy(0,50);
    },50);
 });
}


var progressBars=document.querySelectorAll('.skill-progress>div');
var skillsContainer=document.getElementById('skill-container');
window.addEventListener('scroll',checkScroll);
var animationDone=false;
function initializeBars(){
  for(let bar of progressBars){
    bar.style.width=0+'%';
  }
}
initializeBars();
function fillBars(){
  for(let bar of progressBars){
    let targetWidth=bar.getAttribute('data-bar-width');
    let currentWidth=0;
    let interval=setInterval(function(){
      if(currentWidth>targetWidth){
        clearInterval(interval);
        return;
      }
      currentWidth++;
      bar.style.width=currentWidth+'%';
    },10);
  }
}
function checkScroll(){
  var cordinate=skillsContainer.getBoundingClientRect();
  if(!animationDone && cordinate.top<window.innerHeight){
    animationDone=true;
    console.log("skills container");
    fillBars();
  }
}
