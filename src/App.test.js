import Enzyme, { mount, shallow } from 'enzyme';
import App from './App.js';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import axios from 'axios';
import { act } from 'react-dom/cjs/react-dom-test-utils.development';
import React from 'react';
import toJson from 'enzyme-to-json';

Enzyme.configure({ adapter: new Adapter() });

it('<App> component should call axios', () => {
    jest.spyOn(axios, 'get').mockImplementation(() => Promise.resolve({ data: { value: "2" } }));
    jest.spyOn(React, 'useState').mockImplementation(init => ["1", jest.fn()]);

    let wrapper;
    act(() => {
        wrapper = mount(<App />);
        wrapper.update();
    });

    expect(axios.get).toHaveBeenCalledTimes(1);
});

it('<App> component should match snapshot', () => {
    jest.spyOn(axios, 'get').mockImplementation(() => Promise.resolve({ data: { value: "2" } }));
    jest.spyOn(React, 'useState').mockImplementation(init => ["1", jest.fn()]);

    const component = shallow(<App />);
    expect(toJson(component)).toMatchSnapshot();
});
