var elementToObserve = document.getElementById("marketList");
var observer = new MutationObserver(function (mutation) {
    var offerDiv = document.getElementById("offers");
    if (offerDiv != null) {
        var offers = [...offerDiv.children[1].children];
        offers.shift();
        offers.forEach(element => {
            if (element.children[5].children[0].children[0].currentSrc == null) {
                document.getElementById(element.id).style.backgroundColor = "rgb(255, 0, 0, 0.3)";
            }
        });
    }
});
observer.observe(elementToObserve, { subtree: true, childList: true });
