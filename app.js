'use strict'
/***************************************************
 * Referenciamos el textarea para inserta el texto ↓
 * *************************************************
 */
var insertarTxt = document.getElementById('txt-area');

/***************************************************
 * Creamos función para limpiar el textarea ↓
 * *************************************************
 */

function erase() {
    document.getElementById('txt-area').value = "";
}
/***************************************************
 * Creamos la clase y el constructor Auto ↓
 * *************************************************
 */
class Auto {
    constructor(acelerar, parar, tiempo,punto1, punto2, distancia) {
        this.acelerar = acelerar;
        this.tiempo = tiempo;
        this.para = parar;
        this.punto1 = punto1;
        this.punto2 = punto2;
        this.distancia = distancia;
    }

    /***********************************************************************
     * Creamos el metodo iniciar e ingresamos punto de partida y punto final
     * *********************************************************************
     */
    iniciar() {
        this.punto1 = Math.floor(Math.random() * 1) + 1;
        this.punto2 = Math.floor(Math.random() * 40) + 40;
        insertarTxt.value += (`Punto inicial: ${this.punto1} Km \n`);
        insertarTxt.value += (`Punto final: ${this.punto2} Km \n`);
        this.acelerar = (Math.floor(Math.random() * 40) + 30);
        insertarTxt.value += (`Durante el recorrido, hubo una aceleración promedio de ${this.acelerar} Km/h \n`);
        this.parar = (Math.floor(Math.random() * 3) + 1);
        this.tiempo = (Math.floor(Math.random() * 30) + 5);
        insertarTxt.value += (`El usuario paro ${this.parar} veces y se demoro ${this.tiempo} minutos \n`);
        this.distancia = (this.punto2 / this.tiempo);
        insertarTxt.value +=(`Su distancia total fue ${this.distancia} Km/h`);
        
    }

}

/***************************************************
 * Instanciamos la clase Auto con el nombre start
 * *************************************************
 */

let start = new Auto();




