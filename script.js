// Datos iniciales
var nombres = ["Pedro", "Juan", "Diego"];
var cromosomas = ["00000101010101010101", "00101010101101110111", "00100010010000001001"];

document.getElementById("buscarBtn").addEventListener("click", function() {
    buscarSospechoso();
});

function buscarSospechoso() {
    var muestra = document.getElementById("dnaSample").value;
    var maxCoincidencias = 0;
    var sospechoso = "";
    var porcentajeParentesco = 0;

    for (var i = 0; i < cromosomas.length; i++) {
        var coincidencias = 0;
        for (var j = 0; j < muestra.length; j++) {
            if (muestra[j] === cromosomas[i][j]) {
                coincidencias++;
            }
        }
        if (coincidencias > maxCoincidencias) {
            maxCoincidencias = coincidencias;
            sospechoso = nombres[i];
            porcentajeParentesco = (maxCoincidencias / muestra.length) * 100;
        }
    }

    document.getElementById("result").innerHTML = "El sospechoso es: " + sospechoso + " con un porcentaje de parentesco del " + porcentajeParentesco.toFixed(2) + "%.";
}
