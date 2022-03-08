console.log('1ra entrega proyecto final');

function product (name, price, quantity) {
    this.name = name;
    this.price = parseInt(price);
    this.quantity = parseInt(quantity);

    this.detail = function() {
        console.log('Compraste ', this.cantidad, ' ', this.nombre, ' Por tan solo: ', 
        this.precio*this.cantidad, ' con un descuento de: ', this.discount);
    }

    this.calculateDiscount = function(price){
        if(price >= 200){
            let result = price * 0.05
            return result
        }else{
            return 0;
        }
    }

    this.calculateTotal = function(price, quantity, discount){
        return (price*quantity)-discount
    }
}

let productQuantity = prompt ('***TIENDA DE DANI***\nIngrese número de productos comprados para ver detalles de la compra');

let products = []

dataInput(productQuantity);
alert('Gracias por tu compra! A continuación te mostramos el detalle y algunas curiosidades')
dataOutput(products);



function dataInput(quantity){
    for (let i = 1; i <= quantity; i++ ){
        let productName = prompt ('Ingrese nombre del producto N°' + i);
        let productPrice = parseInt(prompt ('Ingrese precio del producto N°' + i));
        let productQuantity = parseInt(prompt ('Ingrese la cantidad de ' + productName + ' comprado'));

        products.push(new product(productName, productPrice, productQuantity));
    } 
}
        //Mostrar detalle de la compra
        //Mostrar el producto de mayor precio
        //Mostrar nombres de productos con descuento

function dataOutput(productData){
    alert('***DETALLE DE LA COMPRA***')
    for(product of productData){
        alert('Nombre: ' + product.name +
        '\n Precio: ' + product.price +
        '\n Cantidad: ' + product.quantity +
        '\n Descuento: ' + product.calculateDiscount(product.price) +
        '\n Total: ' + product.calculateTotal(product.price, product.quantity, product.calculateDiscount(product.price))
        );
    }

    //Se pretende mostrar las siguientes curiosidades pero se tiene un error a la hora de mostrar los datos
/*
    alert('**** ALGUNOS DATOS DE TU COMPRA *****' +
    '\n El producto más caro es: '+ calculateHighestPrice(products) + 
    '\n Estos son los productos con descuento: '+ getProductsWithDiscount(products))

}

function calculateHighestPrice(products){
    return Math.max(products.map(product => product.price)
)
}

function getProductsWithDiscount(products){
    let productsWithDiscount = products.filter(product => product.discount>0);
    let productNamesWithDiscount = productsWithDiscount.map(product => product.name);
    return productNamesWithDiscount.join(' - ');
}*/