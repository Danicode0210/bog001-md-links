const mdLinks = require('../src/index.js');

describe('mdLinks', () => {

  it('deberia ser una funcion ', () => {
    expect(typeof(mdLinks)).toBe('function');
  });

});
it('Deberia retornar un array con validacion de links de archivos markdown', () => {
  return mdLinks(routeDirectory, { validate: true }).then((res) => {
    expect(res).toStrictEqual(validateLinksDirectory);
  });
});
