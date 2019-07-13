import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('APP', () => {
  it('renders without crashing', () => {
    const component = shallow(<App />)
    component.find('button#generate-numbers').simulate('click');
    expect(component).toMatchSnapshot();
    expect(component.length).toEqual(1)
  })
})
