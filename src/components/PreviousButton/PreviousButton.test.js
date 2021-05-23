import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import PreviousButton from './PreviousButton';
import toJson from 'enzyme-to-json';

Enzyme.configure({ adapter: new Adapter() });
const mockClick = jest.fn();

it('<PreviousButton> component should match snapshot when button is enabled', () => {
    const wrapper = shallow(<PreviousButton onClick={mockClick} disabled={false} />);
    expect(toJson(wrapper)).toMatchSnapshot();
});

it('<PreviousButton> component should match snapshot when button is disabled', () => {
    const wrapper = shallow(<PreviousButton onClick={mockClick} disabled={true} />);
    expect(toJson(wrapper)).toMatchSnapshot();
});

it('<PreviousButton> should call onClick function on click of button', () => {
    const wrapper = mount(<PreviousButton onClick={mockClick} disabled={false} />);
    const button = wrapper.find('button');
    button.simulate('click');
    expect(mockClick).toHaveBeenCalledTimes(1);
});
