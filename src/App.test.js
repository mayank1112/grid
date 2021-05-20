import Enzyme, { mount, shallow } from 'enzyme';
import App from './App.js';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import axios from 'axios';
import { act } from 'react-dom/cjs/react-dom-test-utils.development';
import React from 'react';
import toJson from 'enzyme-to-json';

Enzyme.configure({ adapter: new Adapter() });

it('<App> component should call hook', () => {
    jest.spyOn(axios, 'get').mockImplementation(() => Promise.resolve({ data: { value: "2" } }));
    jest.spyOn(React, 'useState').mockImplementation(init => ["1", jest.fn()]);

    let wrapper;
    act(() => {
        wrapper = mount(<App />);
        wrapper.update();
    });
    const component = shallow(<App />);
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(toJson(wrapper)).toMatchSnapshot();
});
