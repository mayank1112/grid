import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Card from './Card';
import toJson from 'enzyme-to-json';
import axios from 'axios';
import { act } from 'react-dom/test-utils';

Enzyme.configure({ adapter: new Adapter() });

it('<Card> component should match snapshot', () => {
    const wrapper = shallow(<Card card={{ name: 'mockName', url: 'mockUrl' }} />);
    expect(toJson(wrapper)).toMatchSnapshot();
});

it('<Card> should call axios', async () => {
    const mockAxios = jest.spyOn(axios, 'get').mockResolvedValue(Promise.resolve({ data: { sprites: {} } }));
    await act(async () => {
        mount(<Card card={{ name: 'mockName', url: 'mockUrl' }} />);
    });
    expect(mockAxios).toHaveBeenCalledTimes(1);
});
