//para que se esperece a que se cargue el dom
document.addEventListener("DOMContentLoaded", function() {
    let formulario = document.getElementById("calculoForm");

    formulario.addEventListener("submit", function(event) {
        // para que no recargue la pagina
        event.preventDefault();

        // peso del usuario
        let peso = parseFloat(document.getElementById("calcular").value);

        if (!isNaN(peso)) {  //verificar que sea number
            // Evaluar el peso y llamar a la función
            switch (evaluarPeso(peso)) {
                case "menorOIgual30":
                    calculoHollidaySegar(peso);
                    break;
                case "mayorQue30":
                    calculoSuperficieCorporal(peso);
                    break;
            }
        }
    });

    function evaluarPeso(peso) {
        return peso <= 30 ? "menorOIgual30" : "mayorQue30";
    }
    function alert(mensaje) {
        document.getElementById("resultadoHidratacion").innerHTML = mensaje;
        document.getElementById("resultadoSuperficieCorporal").innerHTML = "";
    }
    const calculoHollidaySegar = function (peso) {
        let volumen;
        if (peso <= 10) {
            volumen = peso * 100;
        } else if (peso > 10 && peso <= 20) {
            volumen = 10 * 100 + (peso - 10) * 50;
        } else if (peso > 20) {
            volumen = 10 * 100 + 10 * 50 + (peso - 20) * 20;
        }
        let horas = 24;
        let mantenimiento = (volumen / horas).toFixed(2);
        let calculoTotal = (mantenimiento * 1.5).toFixed(2);
        alert("Volumen Diario: " + volumen + " cc" + "\n" + "Flujo Horario: " + mantenimiento + " cc/h" + "\n" + "m+m/2: : " + calculoTotal + " cc/h");
    };

    const calculoSuperficieCorporal = function (peso) {
        let superficie = ((peso * 4) + 7) / (peso + 90);
        let opcion1 = superficie * 1500;
        let opcion2 = superficie * 2000;
        alert("Superficie Corporal por 1500: " + Math.round(opcion1) + " cc" + "\n" + "Superficie Corporal por 2000: " + Math.round(opcion2) + " cc");
    }

});
