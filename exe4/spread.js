const products = {
    name: 'Caneta Bic Preta',
    price: 2.5,
    desconto: 0.2,
}

function clone(obj) {
    return { ...obj } // Spread operator
}