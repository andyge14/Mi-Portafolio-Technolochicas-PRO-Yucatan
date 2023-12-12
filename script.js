const nombre = "Andrea Guzmán Estrella"

alert(nombre);

let elementoHTMLTitulo = document.getElementById('titulo');

let elementoDetypewriter = new Typewriter(elementoHTMLTitulo, {
    loop: true
});

elementoDetypewriter.typeString('Desarrolladora Web')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Diseñadora y Soporte')
    .pauseFor(2500)
    .deleteAll()
    .typeString('<strong>Andrea del Rosario Guzmán Estrella </strong>')
    .pauseFor(2500)
    .start();