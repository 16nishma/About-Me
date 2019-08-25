alert("Welcome to my Javascript page! We're going to get interactive now!");

function makeImageBig(x) {
    x.style.height = "300px"
    x.style.width = "500px"
}

function makeImageOriginalSize(x) {
    x.style.height = "50px"
    x.style.width = "100px"
}

function showHideSection(section) {
    var showHideSection = document.getElementById(section);
    if (showHideSection.style.display == "none") {
        showHideSection.style.display = "block";
        document.getElementById("bragsButton").innerHTML = "Hide Interests";
    } else {
        showHideSection.style.display = "none";
        document.getElementById("bragsButton").innerHTML = "Show Interests";
    }
}




