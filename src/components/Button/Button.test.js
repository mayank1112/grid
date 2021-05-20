import Enzyme, { shallow } from 'enzyme';
import Box from './Button.jsx';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import toJson from 'enzyme-to-json';

Enzyme.configure({ adapter: new Adapter() });

it('<Box> component should match snapshot', () => {
    const component = shallow(<Box style={{}} onClick={() => { }} onMouseOver={() => { }} onMouseOut={() => { }}>1</Box>);
    expect(toJson(component)).toMatchSnapshot();
});
