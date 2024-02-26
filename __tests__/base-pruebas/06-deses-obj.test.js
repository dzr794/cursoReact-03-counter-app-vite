import { usContext } from "../../src/base-pruebas/06-deses-obj";


describe('Pruebas en 06-deses-obj', ()=>{
  //Arrange
  const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
  };
  
  //Act
  const answer = usContext(persona);

  test('Se espera un objeto especifico', ()=>{
    
    
    //Assert
    //? more info in: https://jestjs.io/docs/expect
    expect(answer).toEqual({
      nombreClave: 'Ironman',
      anios: 45,
      latlng: {
        lat: 14.1232,
        lng: -12.3232
      }
    } );
    
  });

  test('lat y lng deben ser numberos', () => { 

    //Assert
    //? more info in: https://jestjs.io/docs/expect
    expect(answer.latlng.lat).toEqual(expect.any(Number));
    expect(answer.latlng.lng).toEqual(expect.any(Number));
  });

});