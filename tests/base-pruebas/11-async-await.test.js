import { getImagen } from "../../src/base-pruebas/11-async-await";

describe('Pruebas en 11-async-await', ()=>{
  test('La funcion debe retornar una url de una imagen', async ()=>{
    //Arrange
    const url = await getImagen();
    console.log(url);
    expect(url).toEqual( expect.any(String) );
    //Act
    
    //Assert
    // expect( answer ).toBe(  );
    
  });
});