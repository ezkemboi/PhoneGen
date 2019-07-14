import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

describe('APP', () => {
  const component = shallow(<App />);
  const event = { target: { value: 3 } }
  it('renders without crashing', () => {
    expect(component).toMatchSnapshot();
    expect(component.length).toEqual(1)
  });
  it('generates contacts', () => {
    component.find('input#handle-change-input').simulate('change', event);
    component.find('button#generate-numbers').simulate('click');
  });
  it('clears contacts from local storage', () => {
    component.find('button.clear-button').simulate('click');
  });
});
