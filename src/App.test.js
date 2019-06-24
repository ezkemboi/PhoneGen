import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('APP', () => {
  it('expect 1+1 to equal 2', () => {
    expect(1 + 1).toEqual(2)
  });

  it('renders without crashing', () => {
    shallow(<App />);
  })
})
