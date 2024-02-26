import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";

describe('probando el archivo 08-imp-exp', ()=>{
  test('La funcion debe de retornar un objeto cuyo ID sea igual al enviado por parametros', ()=>{
    //Arrange
    const id = 1;

    
    //Act
    const answer = getHeroeById(id);
    
    //Assert
    //? more info in: https://jestjs.io/docs/expect
    expect(answer).toEqual({ "id": 1, "name": "Batman", "owner": "DC" } );
    
  });

  test('La funcion debe de retornar undefined', () => { 
    //Arrange
    const id = 1000;

    //Act
    const answer = getHeroeById(id);

    //Assert
    //? more info in: https://jestjs.io/docs/expect
    expect(answer).toBe(undefined);
    expect(answer).toBeFalsy();
  });

  test('Debe retornar arreglo con los heroes de DC', () => {
    //Arrange
    const owner = 'DC';

    //Act
    const answer = getHeroesByOwner(owner);
    
    //Assert
    //? more info in: https://jestjs.io/docs/expect
    expect(answer.length).toBe(3);
    expect(answer).toEqual([
      { id: 1, name: 'Batman', owner: 'DC' },
      { id: 3, name: 'Superman', owner: 'DC' },
      { id: 4, name: 'Flash', owner: 'DC' }
    ]);
  });

  test('Debe retornar 2 heroes de Marvel', () => {
    //Arrange
    const owner = 'Marvel';

    //Act
    const answer = getHeroesByOwner(owner);

    //Assert
    //? more info in: https://jestjs.io/docs/expect
    expect(answer.length).toBe(2);
    
  });

});