import React from 'react';
import Calculator from '../containers/Calculator';
import { render, fireEvent } from '@testing-library/react';

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = render(<Calculator />)
  })

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');
  })

  it("Can add 1 to 4 and get 5", () => {
    const button1 = container.getByTestId('number1')
    const button4 = container.getByTestId('number4')
    const addButton = container.getByTestId('operator-add')
    const runningTotal = container.getByTestId('running-total');
    const equalButton = container.getByTestId('operator-equals');
    fireEvent.click(button1)
    fireEvent.click(addButton)
    fireEvent.click(button4)
    fireEvent.click(equalButton)
    expect(runningTotal.textContent).toEqual('5');
  })

  it("Can subtract 4 from 7 and get 3", () => {
    const button4 = container.getByTestId('number4')
    const button7 = container.getByTestId('number7')
    const subtractButton = container.getByTestId('operator-subtract')
    const runningTotal = container.getByTestId('running-total');
    const equalButton = container.getByTestId('operator-equals');
    fireEvent.click(button7)
    fireEvent.click(subtractButton)
    fireEvent.click(button4)
    fireEvent.click(equalButton)
    expect(runningTotal.textContent).toEqual('3');
  })

  it("Can subtract 4 from 7 and get 3", () => {
    const button4 = container.getByTestId('number4')
    const button7 = container.getByTestId('number7')
    const subtractButton = container.getByTestId('operator-subtract')
    const runningTotal = container.getByTestId('running-total');
    const equalButton = container.getByTestId('operator-equals');
    fireEvent.click(button7)
    fireEvent.click(subtractButton)
    fireEvent.click(button4)
    fireEvent.click(equalButton)
    expect(runningTotal.textContent).toEqual('3');
  })

  it("Can mulitply 3 and 5 and get 15", () => {
    const button3 = container.getByTestId('number3')
    const button5 = container.getByTestId('number5')
    const mulitplyButton = container.getByTestId('operator-multiply')
    const runningTotal = container.getByTestId('running-total');
    const equalButton = container.getByTestId('operator-equals');
    fireEvent.click(button3)
    fireEvent.click(mulitplyButton)
    fireEvent.click(button5)
    fireEvent.click(equalButton)
    expect(runningTotal.textContent).toEqual('15');
  })

  it("Can divide 21 by 7 and get 3", () => {
    const button2 = container.getByTestId('number2')
    const button1 = container.getByTestId('number1')
    const button7 = container.getByTestId('number7')
    const divideButton = container.getByTestId('operator-divide')
    const runningTotal = container.getByTestId('running-total');
    const equalButton = container.getByTestId('operator-equals');
    fireEvent.click(button2)
    fireEvent.click(button1)
    fireEvent.click(divideButton)
    fireEvent.click(button7)
    fireEvent.click(equalButton)
    expect(runningTotal.textContent).toEqual('3');
  })

  it("Can concatenate mulitple button clicks", () => {
    const button1 = container.getByTestId('number1')
    const button2 = container.getByTestId('number2')
    const button3 = container.getByTestId('number3')
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button1)
    fireEvent.click(button2)
    fireEvent.click(button3)
    expect(runningTotal.textContent).toEqual('123');
  })

  it("Can chain mulitple operations together", () => {
    const button2 = container.getByTestId('number2')
    const button3 = container.getByTestId('number3')
    const runningTotal = container.getByTestId('running-total');
    const mulitplyButton = container.getByTestId('operator-multiply')
    const divideButton = container.getByTestId('operator-divide')
    fireEvent.click(button2)
    fireEvent.click(mulitplyButton)
    fireEvent.click(button3)
    fireEvent.click(divideButton)
    fireEvent.click(button2)
    expect(runningTotal.textContent).toEqual('2');
  })

  it("Can clear the running total", () => {
    const button1 = container.getByTestId('number1')
    const addButton = container.getByTestId('operator-add')
    const button2 = container.getByTestId('number2')
    const equalButton = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    const clearTotal = container.getByTestId('clear');
    fireEvent.click(button1)
    fireEvent.click(addButton)
    fireEvent.click(button2)
    fireEvent.click(equalButton)
    fireEvent.click(addButton)
    fireEvent.click(button1)
    fireEvent.click(clearTotal)
    fireEvent.click(equalButton)
    expect(runningTotal.textContent).toEqual('3');
  })

})

