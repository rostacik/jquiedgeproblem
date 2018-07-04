$(document).ready(function () {
    window.addEventListener("resize", function () {
        debugger;
        console.log("resize event happened");
    });

    $("#closeButton").click(function (e) { //hook to button on click
        window.top.postMessage("close", "*");
    });

    $("body").click(function (e) {
        debugger;
        console.log("click on body");
    });
});

