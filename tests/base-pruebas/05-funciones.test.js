import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe('testing file: 05-funciones.js', ()=>{
  test('getUser debe de retornar un objeto', ()=>{
    //Arrange
    const test_user = {
      uid: 'ABC123',
      username: 'El_Papi1502'
    };
    
    //Act
    const answer = getUser();
    
    //Assert
    //? more info in: https://jestjs.io/docs/expect
    expect( answer ).toEqual( test_user );
    
  });


  test('getUsuarioActivo debe retornar un objeto', () => {
    const name = 'David';

    const result = getUsuarioActivo(name);

    expect(result.username ).toBe( name );
  });

});