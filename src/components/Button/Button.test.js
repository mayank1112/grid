import Enzyme, { shallow } from 'enzyme';
import Button from './Button.jsx';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import toJson from 'enzyme-to-json';

Enzyme.configure({ adapter: new Adapter() });

it('<Button> component should match snapshot', () => {
    const component = shallow(<Button style={{}} onClick={() => { }} onMouseOver={() => { }} onMouseOut={() => { }}>1</Button>);
    expect(toJson(component)).toMatchSnapshot();
});
