let randNum = Math.floor(Math.random() * 7);

switch (randNum) {
    case 0:
        document.getElementById("space").innerHTML = 'Only turn right';
        break;
    case 1:
        document.getElementById("space").innerHTML = 'Only pickup green items';
        break;
    case 2:
        document.getElementById("space").innerHTML = 'No sprinting';
        break;
    case 3:
        document.getElementById("space").innerHTML = 'Pistols only';
        break;
    case 4:
        document.getElementById("space").innerHTML = 'Axe only for first circle';
        break;
    case 5:
        document.getElementById("space").innerHTML = 'Stay crouched';
        break;
    case 6:
        document.getElementById("space").innerHTML = 'Use Peely you fucking nerd';
        break;
    default:
        break;
}
