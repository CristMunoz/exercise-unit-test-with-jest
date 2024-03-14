// Importar la función sum del archivo app.js
const { sum } = require('./app.js');

// Comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

// Prueba para la funcion "fromEuroToDollar"
test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

// Prueba para la funcion "fromDollarToYen"
test("One dollar should be 156.5 yens", function() {
    // Importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js');

    // Uso la función como debe ser usada
    const yens = fromDollarToYen(20);

    // Si 1 dolar son 156.5 yenes, entonces 20 dolares debe ser (20 * 156.5)
    const expected = 20 * 156.5;

    // Hago mi comparación (la prueba)
    expect(fromDollarToYen(20)).toBe(3130); // 1 dolar son 156.5 yenes, entonces 20 dolares deberían ser = (20 * 156.5)
})

// Prueba para la funcion "fromYenToPound"
test("One yen should be 0.87 pounds", function() {
    // Importo la funcion desde app.js
    const { fromYenToPound } = require('./app.js');

    // Uso la función como debe ser usada
    const yens = fromYenToPound(20);

    // Si 1 yen son 0.87 libras, entonces 20 yenes debe ser (20 * 0.87)
    const expected = 20 * 0.87;

    // Hago mi comparación (la prueba)
    expect(fromYenToPound(20)).toBe(17.4); // 1 yen son 0.87 libras, entonces 20 yenes deberían ser = (20 * 0.87)
})