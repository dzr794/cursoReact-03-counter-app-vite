import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";

describe('Pruebas en 07-deses-arr', ()=>{
  test('Debe retornar un string y un number', ()=>{
    //Arrange
    const [s, n] = retornaArreglo();
    
    //Act
    const elString = typeof s;
    const elNumber = typeof n;
    
    //Assert
    //? more info in: https://jestjs.io/docs/expect
    expect(elString).toBe('string');
    expect(elNumber).toBe( 'number' );
    
  });
});