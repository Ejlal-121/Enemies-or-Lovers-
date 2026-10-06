function makeMatch() {
    var name1 = document.getElementById("name1").value.trim();
    var name2 = document.getElementById("name2").value.trim();
    var result = document.getElementById("result");
    if (name1 == "" || name2 == "") {
        result.innerHTML = "<p>Please type both names !</p>";
        return;
    }

    if (name1.toLowerCase() == name2.toLowerCase()) {
        result.innerHTML = "<p>ARE YOU KIDDING? \n 😂</p>";
        return;
    }
    var score = Math.floor(Math.random() * 101);

    var message = "";
    var color = "";

    if (score >= 70) {
        message = "Even Cupid is jealous of you two 🏹";
        color = "#830f37";
    } else if (score >= 40) {
        message = "50/50 chance. Like pineapple on pizza 🍕";
        color = "#ec6a85";
    } else {
        message = "Even Wi-Fi has a better connection than you two  🥀 ";
        color = "#ffbfc3";
    }

    result.innerHTML =
        "<div class='pop'>" +
        "<h3>" + name1 + " 💞 " + name2 + "</h3>" +
        "<p id='score' style='color:" + color + "'>" + score + "%</p>" +
        "<p>" + message + "</p>" +
        "</div>";
}