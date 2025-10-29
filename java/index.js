let ventana;

function abrirVentana(){
    ventana = window.open("prueba.html", "Ventanita", "height=200, width=500");
}

function cerrarVentana(){
    ventana.close();
}

function infoVentana(){
    alert('Nombre: ' + ventana.name + ' Inner height: ' + ventana.innerHeight + ' Outer height: ' + ventana.outerHeight);
}

function moverDerecha(){
    ventana.moveBy(50, 0);
}

function moverIzquierda(){
    ventana.moveBy(-50, 0);
}

function moverArriba(){
    ventana.moveBy(0, -50);
}

function moverAbajo(){
    ventana.moveBy(0, 50);
}

function aumentarxVentana(){
    ventana.resizeBy(50, 0);
}

function disminuirxVentana(){
    ventana.resizeBy(-50, 0);
}

function aumentaryVentana(){
    ventana.resizeBy(0, 50);
}

function disminuiryVentana(){
    ventana.resizeBy(0, -50);
}