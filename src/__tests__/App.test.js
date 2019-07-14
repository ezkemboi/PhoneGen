import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

describe('APP', () => {
  it('renders without crashing', () => {
    const component = shallow(<App />);
    const event = { target: { value: 3 } }
    component.find('button#generate-numbers').simulate('click');
    component.find('input#handle-change-input').simulate('change', event);
    expect(component).toMatchSnapshot();
    expect(component.length).toEqual(1)
  });
})
