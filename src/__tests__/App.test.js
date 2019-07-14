import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

describe('APP', () => {
  const component = shallow(<App />);
  const contacts = [
    "024776563",
    "046455020",
    "0943165218"
  ]
  const event = { target: { value: 3 } }
  const option = { target: { value: 'Descending' } }
  const ascendingOption = { target: { value: 'Ascending' } }

  // Setting local storage
  jest.spyOn(window.localStorage.__proto__, 'setItem');
  jest.spyOn(window.localStorage.__proto__, 'getItem');
  jest.spyOn(window.localStorage.__proto__, 'clear');
  jest.useFakeTimers();

  // Set some number of contacts in local storage
  beforeEach(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  });

  it('renders without crashing including Component Did Mount Call', () => {
    const getComponent = () => shallow(<App />);
    // Call method above so that it will call componentDidMount()
    getComponent();
    expect(component).toMatchSnapshot();
    expect(component.length).toEqual(1)
  });

  it('generates contacts', () => {
    component.find('input#handle-change-input').simulate('change', event);
    component.find('button#generate-numbers').simulate('click');
    expect(localStorage.setItem).toHaveBeenCalled();
  });

  it('clears contacts from local storage', () => {
    component.find('button.clear-button').simulate('click');
    const contacts = JSON.parse(localStorage.getItem("contacts"));
    expect(localStorage.clear).toHaveBeenCalled();
    expect(contacts).toBeNull();
  });

  it('orders contacts in descending order', () => {
    component.find('select.order-contacts').simulate('change', option);
    const contacts = JSON.parse(localStorage.getItem("contacts"));
    expect(contacts).toBeInstanceOf(Array);
    expect(contacts.length).toBe(3);
    expect(localStorage.getItem).toHaveBeenCalled();
  });

  it('orders contacts in ascending order', () => {
    component.find('select.order-contacts').simulate('change', ascendingOption);
    const contacts = JSON.parse(localStorage.getItem("contacts"));
    expect(localStorage.getItem).toHaveBeenCalled();
    expect(contacts).toBeInstanceOf(Array);
    expect(contacts.length).toBe(3);
  });
});
