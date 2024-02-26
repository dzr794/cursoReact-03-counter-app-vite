import { getSaludo } from '../../src/base-pruebas/02-template-string';


describe('Test of file 02-template-string.js', ()=>{
  test('Test name', ()=>{
    //Arrange
    const name = 'David';
    
    //Act
    const resp = getSaludo( name );
    
    //Assert
    //? more info in: https://jestjs.io/docs/expect
    expect(resp).toBe(`Hola ${name}` );

  })
})