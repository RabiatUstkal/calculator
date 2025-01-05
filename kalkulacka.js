// Logická část kalkulačky
// Lukáš Lacina 4.B <lacinal@jirovcovka.net>

var vstup1, vstup2, vysledek;
var tlPlus, tlMinus, tlKrat, tlDeleno;

document.addEventListener("DOMContentLoaded", function() {
    // Načtení vstupů a tlačítek
    vstup1 = document.getElementById("vstup1");
    vstup2 = document.getElementById("vstup2");
    vysledek = document.getElementById("vysledek");

    tlPlus = document.getElementById("tlPlus");
    tlMinus = document.getElementById("tlMinus");
    tlKrat = document.getElementById("tlKrat");
    tlDeleno = document.getElementById("tlDeleno");

    // Připojení funkcí k tlačítkům
    tlPlus.addEventListener("click", function() {
        operation("+");
    });

    tlMinus.addEventListener("click", function() {
        operation("-");
    });

    tlKrat.addEventListener("click", function() {
        operation("*");
    });

    tlDeleno.addEventListener("click", function() {
        operation("/");
    });
});

function operation(operace) {
    var cislo1 = parseFloat(vstup1.value);
    var cislo2 = parseFloat(vstup2.value);

    // Kontrola, zda jsou vstupy platná čísla
    if (isNaN(cislo1) || isNaN(cislo2)) {
        vysledek.textContent = "ERROR";
        return;
    }

    var vysl;
    switch (operace) {
        case "+":
            vysl = cislo1 + cislo2;
            break;
        case "-":
            vysl = cislo1 - cislo2;
            break;
        case "*":
            vysl = cislo1 * cislo2;
            break;
        case "/":
            if (cislo2 === 0) {
                vysledek.textContent = "ERROR";
                return;
            }
            vysl = cislo1 / cislo2;
            break;
        default:
            vysledek.textContent = "ERROR";
            return;
    }

    vysledek.textContent = vysl;
}
