import {render} from '@testing-library/react'
import {FirstApp} from '../src/FirstApp'

describe('Pruebas en <FirstApp />', () => { 
  // test('Should match with snapshot', () => { 
    
  //   const title='Hola, soy Goku';
  //   const {container} = render( <FirstApp title={title}/> );

  //   expect(container).toMatchSnapshot();
  // });  

  test('title should be in h1', () => { 
    const title='Hola, soy Goku';
    const {container, getByText, getByTestId } = render( <FirstApp title={title}/> );
    
    expect( getByText(title) ).toBeTruthy();

    // const h1 = container.querySelector('h1');
    // expect(h1.innerHTML).toContain(title);
    expect( getByTestId('test-title').innerHTML ).toContain(title);
    
  })

  // test('should be only 1 subtitle', () => { 
  //   const title='Hola, soy Goku';
  //   const subTitle='Soy un subtitulo';
  //   const { getByText } = render( 
  //     <FirstApp 
  //       title={ title }
  //       subtitle={ subTitle }
  //     /> 
  //   );

  //   expect(getByText(subTitle).innerHTML).toContain(subTitle);
  // });

  test('should be 3 subtitles', () => { 
    const title='Hola, soy Goku';
    const subTitle='Soy un subtitulo';
    const { getAllByText } = render( 
      <FirstApp 
        title={ title }
        subtitle={ subTitle }
      /> 
    );

    expect(getAllByText(subTitle).length).toBe(3);
  });

});