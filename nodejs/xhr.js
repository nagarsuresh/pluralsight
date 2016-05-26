var xhr = new XMLHttpRequest();

xhr.open("GET", "http://www.google.com", false);

xhr.onload = function (response) {
    console.log("Received " + response);
}

xhr.send();