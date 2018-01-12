document.getElementById('button').addEventListener("click", function () {
    var nameValue, emailValue, messageValue;

    nameValue = document.getElementById('contactName').value;
    emailValue = document.getElementById('contactEmail').value;
    messageValue = document.getElementById('contactText').value;

    console.log(nameValue);
    console.log(emailValue);
    console.log(messageValue);
});