import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Loader from './Loader';
import toJson from 'enzyme-to-json';

Enzyme.configure({ adapter: new Adapter() });
it('<Loader> component should match snapshot', () => {
const wrapper = shallow(<Loader />);
expect(toJson(wrapper)).toMatchSnapshot();
});
