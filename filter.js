window.addEventListener('DOMContentLoaded', init);

var filterChoice;
function init() {
    var asian = document.getElementsByClassName("asian");
    var mexican = document.getElementsByClassName("mexican");
    var italian = document.getElementsByClassName("italian");
    filterChoice = document.querySelectorAll("button");
    filterChoice[0].addEventListener("click", event => {
        for (let i = 0; i < asian.length; i++) {
            asian[i].style.visibility = "visible";
        }
        for (let i = 0; i < mexican.length; i++) {
            mexican[i].style.visibility = "hidden";
        }
        for (let i = 0; i < italian.length; i++) {
            italian[i].style.visibility = "hidden";
        }
    })
    filterChoice[1].addEventListener("click", event => {
        for (let i = 0; i < asian.length; i++) {
            asian[i].style.visibility = "hidden";
        }
        for (let i = 0; i < mexican.length; i++) {
            mexican[i].style.visibility = "visible";
        }
        for (let i = 0; i < italian.length; i++) {
            italian[i].style.visibility = "hidden";
        }
    })
    filterChoice[2].addEventListener("click", event => {
        for (let i = 0; i < asian.length; i++) {
            asian[i].style.visibility = "hidden";
        }
        for (let i = 0; i < mexican.length; i++) {
            mexican[i].style.visibility = "hidden";
        }
        for (let i = 0; i < italian.length; i++) {
            italian[i].style.visibility = "visible";
        }
    })
    filterChoice[3].addEventListener("click", event => {
        for (let i = 0; i < asian.length; i++) {
            asian[i].style.visibility = "visible";
        }
        for (let i = 0; i < mexican.length; i++) {
            mexican[i].style.visibility = "visible";
        }
        for (let i = 0; i < italian.length; i++) {
            italian[i].style.visibility = "visible";
        }
    })
}