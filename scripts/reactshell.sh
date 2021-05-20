# INPUT
read -p "Enter component name ('Counter' being default value): " name
componentName=${componentName:-Counter}

# FOLDERS
mkdir './src/components';
mkdir './src/utils';
mkdir "./src/components/${componentName}"

# JSX
FN="./src/components/${componentName}/${componentName}.jsx"
echo "import PropTypes from 'prop-types';" > $FN
echo "import {get${componentName}Data} from '../../utils/get${componentName}Data.js';" > $FN
echo "import './${componentName}.css';" >> $FN
echo "const ${componentName} = () => { const ${componentName}Data = get${componentName}Data(); return (<div className='content${componentName}'>{${componentName}Data}</div>); };" >> $FN
echo "${componentName}.propTypes = {};" >> $FN
echo "export default ${componentName};" >> $FN

# CSS
FN="./src/components/${componentName}/${componentName}.css"
echo ".content${componentName} { color: black; }" > $FN
echo "@media (max-width: 768px) { .content${componentName} { color: gray; } }" >> $FN

# JS
FN="./src/utils/get${componentName}Data.js"
echo "export const get${componentName}Data = () => { return '${componentName} data'; };" > $FN

# JS UNNIT TEST
FN="./src/utils/get${componentName}Data.test.js"
echo "import Enzyme from 'enzyme';" > $FN
echo "import Adapter from '@wojtekmaj/enzyme-adapter-react-17';" >> $FN
echo "import { get${componentName}Data } from './get${componentName}Data.js';" >> $FN
echo "Enzyme.configure({ adapter: new Adapter() });" >> $FN
echo "it('get${componentName}Data should return correct value', () => {" >> $FN
echo "const actual = get${componentName}Data();" >> $FN
echo "const expected = '${componentName} data';" >> $FN
echo "expect(actual).toBe(expected);" >> $FN
echo "});" >> $FN

# JSX UNNIT TEST
FN="./src/components/${componentName}/${componentName}.test.js"
echo "import Enzyme, { shallow } from 'enzyme';" > $FN
echo "import Adapter from '@wojtekmaj/enzyme-adapter-react-17';" >>  $FN
echo "import ${componentName} from './${componentName}';" >>  $FN
echo "import toJson from 'enzyme-to-json';" >>  $FN
echo "Enzyme.configure({ adapter: new Adapter() });" >>  $FN
echo "it('<${componentName}> component should match snapshot', () => {" >>  $FN
echo "const wrapper = shallow(<${componentName} />);" >>  $FN
echo "expect(toJson(wrapper)).toMatchSnapshot();" >>  $FN
echo "});" >>  $FN
