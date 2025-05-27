
function toggleDetalle(elemento) {
    elemento.classList.toggle("activo");
}

function toggleTitulo(elemento) {
    const detalle = elemento.nextElementSibling;
    if (detalle.style.display === "block") {
        detalle.style.display = "none";
        elemento.classList.remove("abierto");
    } else {
        detalle.style.display = "block";
        elemento.classList.add("abierto");
    }
}

let preguntaActual = 0;
function verificar(boton, respuestaCorrecta) {
    const pregunta = boton.parentElement;
    const botones = pregunta.querySelectorAll("button");
    const esCorrecta = Array.from(botones).indexOf(boton) === respuestaCorrecta;

    botones.forEach((b, i) => {
        b.style.backgroundColor = i === respuestaCorrecta ? "#00ccaa" : "#ff4d4d";
        b.disabled = true;
    });

    setTimeout(() => {
        pregunta.style.display = "none";
        const preguntas = document.querySelectorAll(".pregunta");
        if (preguntaActual + 1 < preguntas.length) {
            preguntaActual++;
            preguntas[preguntaActual].style.display = "block";
        } else {
            const resultado = document.getElementById("resultado-quiz");
            resultado.textContent = "Has completado el quiz sobre ciberseguridad en redes sociales.";
        }
    }, 1000);
}
