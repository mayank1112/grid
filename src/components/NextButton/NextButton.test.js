import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import NextButton from './NextButton';
import toJson from 'enzyme-to-json';

Enzyme.configure({ adapter: new Adapter() });
const mockClick = jest.fn();

it('<NextButton> component should match snapshot when button is enabled', () => {
    const wrapper = shallow(<NextButton onClick={mockClick} disabled={false} />);
    expect(toJson(wrapper)).toMatchSnapshot();
});

it('<NextButton> component should match snapshot when button is disabled', () => {
    const wrapper = shallow(<NextButton onClick={mockClick} disabled={true} />);
    expect(toJson(wrapper)).toMatchSnapshot();
});

it('<NextButton> should not call onClick function on click of disabled button', () => {
    const wrapper = mount(<NextButton onClick={mockClick} disabled={true} />);
    const button = wrapper.find('.nextButton');
    button.simulate('click');
    expect(mockClick).not.toHaveBeenCalled();
});


it('<NextButton> should call onClick function on click of button', () => {
    const wrapper = mount(<NextButton onClick={mockClick} disabled={false} />);
    const button = wrapper.find('button');
    button.simulate('click');
    expect(mockClick).toHaveBeenCalledTimes(1);
});
