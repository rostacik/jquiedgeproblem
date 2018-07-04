$(document).ready(function () {
    $("#iframeOpen").click(function (e) {
        var $dialogContainer = window.top.$("<iframe id=\"ifr\" frameborder=\"0\" height=\"100px\" width=\"100px\" src=\"ifrPage.htm\"></iframe>");

        $dialogContainer = $dialogContainer.dialog({
            modal: true
        });

        window.top.addEventListener("message", msgReceived, false);

        function msgReceived(event) {
            window.top.removeEventListener("message", msgReceived, false);
            $dialogContainer.dialog("destroy").remove();
            console.log("dialog closed");
        }
    });
});