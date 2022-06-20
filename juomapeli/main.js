window.onload = () => {
    console.log('Loaded')
}

function github(){window.open("https://github.com/Hakkerikakkeri");}


function vaihda() {
    let sanat = ["Drink", "Drink fast", "Take Tequila"];
    const random = Math.floor(Math.random() * sanat.length);

    document.getElementById('sana-vaihto').innerHTML = sanat[random];

    var notification = document.getElementById("ilmoitus");

    notification.className = "show";

    setTimeout(function(){ notification.className = notification.className.replace("show", ""); }, 3000);
}