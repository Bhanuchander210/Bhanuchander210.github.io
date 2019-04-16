function hide() {
    var x = document.getElementById("hideContent");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function toggle(evt,className) {
  makeDisplay ('show', 'none')
  makeDisplay (className, 'block');
  x = document.getElementsByClassName('cmnBtn');
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" currentBtn", "");
  }
  evt.currentTarget.className += " currentBtn";
}

function makeDisplay (className, disType)
{
    var list = document.getElementsByClassName(className);
     for (i = 0; i < list.length; i++) {
       list[i].style.display = disType;
     }
}

function openTab(evt, idName, cmnClass) {
  var i, tabcontent, tablinks;
  makeDisplay(cmnClass, "none");
  tablinks = document.getElementsByClassName(evt.currentTarget.className);
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(idName).style.display = "block";
  evt.currentTarget.className += " active";
}

window.onscroll = function() {
    if (! document.getElementById("myBtn"))
    return;
    scrollFunction()
    scrollBotFunction()
};

function getDocHeight() {
    var D = document;
    return Math.max(
        D.body.scrollHeight, D.documentElement.scrollHeight,
        D.body.offsetHeight, D.documentElement.offsetHeight,
        D.body.clientHeight, D.documentElement.clientHeight
    );
}

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    }
    else {
        document.getElementById("myBtn").style.display = "none";

    }
}

function scrollBotFunction(){
    var max = getDocHeight() - 3000
   if(document.body.scrollTop < max && document.documentElement.scrollTop < max) {
        document.getElementById("myBottomBtn").style.display = "block";
   }
   else {
        document.getElementById("myBottomBtn").style.display = "none";
   }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// When the user clicks on the button, scroll to the top of the document
function bottomFunction() {
    document.body.scrollTop = document.body.scrollHeight;
    document.documentElement.scrollTop = document.documentElement.scrollHeight;
}