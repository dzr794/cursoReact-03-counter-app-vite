import {render, screen} from '@testing-library/react'
import {FirstApp} from '../src/FirstApp'

describe('Pruebas en <FirstApp />', () => { 
  
  const title = 'Holi soy el título';
  const subTitle = 'Soy el subtitulo';

  test('Debe hacer match con el snapshot', () => { 
    const {container} = render( 
      <FirstApp 
        title={ title }
      />
    );

    expect(container).toMatchSnapshot();
  })

  test('El titulo debe ser un H1', () => { 
    render( 
      <FirstApp 
        title={ title }
      />
    );

    expect( screen.getByRole('heading', { level:1 }).innerHTML ).toContain( title );
  });

  test('Deben haber 2 subrtitulos', () => {
    render( 
      <FirstApp 
        title={ title }
        subtitle={ subTitle }
      />
    );

    expect( screen.getAllByText(subTitle).length ).toBe(2);
  });

});