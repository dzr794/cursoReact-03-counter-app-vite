import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe('Probando el archivo 09-promesas', ()=>{
  test('getHeroeByIdAsync debe de retornar un héroe', (done)=>{
    //Arrange
    const id = 1;
    
    //Act
    const answer = getHeroeByIdAsync(id).then( hero => {

      console.log(hero);

      expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' });

      done();
    });
    
  });

  test('getHeroeByIdAsync no debe mostrar un error al no encontrar el héroe', (done) => {
    //Arrange
    const id = 100;

    //Act
    const answer = getHeroeByIdAsync(id).catch(error => {

      expect(error).toBe(`No se pudo encontrar el héroe con el ID:${id}`);

      done();
    });

  });
});