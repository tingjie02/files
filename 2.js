const allNavElement = document.getElementsByTagName("nav");
for (let i = 0; i < allNavElement.length; i++) {
    var element = document.getElementsByTagName("nav")[i];
    element.setAttribute("style", "display: none !important;");
}
const bodyElement = document.getElementsByTagName("body")[0]
bodyElement.setAttribute("style", "margin-top: 0 !important;");
