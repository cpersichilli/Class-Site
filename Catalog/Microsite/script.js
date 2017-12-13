var divs = ["Div1", "Div2", "Div3"];
    var visibleDivId = null;
    function divVisibility(divId) {
        if(visibleDivId === divId) {
            visibleDivId = null;
        } else {
            visibleDivId = divId;
        }
        hideNonVisibleDivs();
    }
    function hideNonVisibleDivs() {
        var i, divId, div;
        for(i = 0; i < divs.length; i++) {
            divId = divs[i];
            div = document.getElementById(divId);
            if(visibleDivId === divId) {
                div.style.display = "block";
            } else {
                div.style.display = "none";
            }
        }
    }

const one = document.querySelector('.one');

function setProperty(duration) {
  one.style.setProperty('--animation-time', duration +'s');
}

function changeAnimationTime() {
  const animationDuration = Math.random();
  setProperty(animationDuration);
}

setInterval(changeAnimationTime, 1000);