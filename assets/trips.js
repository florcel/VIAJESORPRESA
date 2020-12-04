function Trips() {


    this.buildList = function(containerId, sourceData) {
        var container = document.getElementById(containerId);
        container.innerHTML = "";
        var html = '';

        sourceData.forEach(product => {
            if(product.origen === cityInput && product.rango == priceInput) {
            html = html + this.buildHtmlProduct(product); 
            }})
        container.innerHTML = html;
        return html.length;
    }

    this.buildHtmlProduct = function(product) {

        return `
        <div class="contenedor-viajes">
        <div class="viaje" id="${product.id}">
            <img src=${product.img} alt="VIAJE">
            <div class="contenido-viaje">
            <h3>${product.destination}</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p class="precio">$${product.price}</p>
            <p class="precio">${product.nights} Noches</p>
            <a href="viaje.html" class="boton boton-amarillo" >Ver esta opción</a>
            <input type="button" value="X" id="remove" width="25%" class="boton boton-rojo" onclick="Descartar()"></input>
        </div>
        </div>
        `
    }


}
