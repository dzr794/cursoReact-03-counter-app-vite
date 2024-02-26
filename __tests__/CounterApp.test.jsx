import {fireEvent, render, screen} from '@testing-library/react'
import { CounterApp } from '../src/CounterApp';

describe('pruebas en <CounterApp />', () => { 
  
  const initVal = 100;

  test('should match with the snapshot', () => {
    const { container } = render( 
      <CounterApp value={initVal} /> 
    );

    expect(container).toMatchSnapshot();
  });

  test('Init value must be 100', () => {
    render( 
      <CounterApp value={initVal} /> 
    );

    expect(screen.getByTestId("counter-value").innerHTML).toContain('100');
  });

  test('Should add 1 to counter value on Click', () => {
    render( 
      <CounterApp value={initVal} /> 
    );

    fireEvent.click( screen.getByTestId('add-1') );
    // screen.debug();
    
    expect( parseInt(screen.getByTestId('counter-value').innerHTML) ).toBe(initVal + 1)
  });

  test('Should substract 1 to counter value on Click', () => {
    render( 
      <CounterApp value={initVal} /> 
    );

    fireEvent.click( screen.getByTestId('substract-1') );
    // screen.debug();
    
    expect( parseInt(screen.getByTestId('counter-value').innerHTML) ).toBe(initVal - 1)
  });

  test('Should reset the counter value on Click', () => {
    render( 
      <CounterApp value={initVal} /> 
    );

    fireEvent.click( screen.getByTestId('add-1') );
    fireEvent.click( screen.getByTestId('add-1') );
    fireEvent.click( screen.getByTestId('add-1') );
    fireEvent.click( screen.getByTestId('reset') );
    // screen.debug();
    
    expect( parseInt(screen.getByTestId('counter-value').innerHTML) ).toBe(initVal)
  });

});