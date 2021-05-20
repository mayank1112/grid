# INPUT
read -p "Enter component name ('Counter' being default value): " name
componentName=${componentName:-Counter}

# FOLDERS
mkdir './src/components';
mkdir './src/utils';
mkdir "./src/components/${componentName}"

# JSX
FN="./src/components/${componentName}/${componentName}.jsx"
echo "import {get${componentName}Data} from '../utils/get${componentName}Data.js'" > $FN
echo "const ${componentName} = () => { const ${componentName}Data = get${componentName}Data(); return (<div className='content${componentName}'>{${componentName}Data}</div>); };" >> $FN
echo "export default ${componentName};" >> $FN

# CSS
echo ".content${componentName} { color: black; }" > "./src/components/${componentName}/${componentName}.css" > "./src/components/${componentName}.css"
echo "@media (max-width: 768px) { .content${componentName} { color: gray; } }" >> "./src/components/${componentName}/${componentName}.css"

# JS
echo "export const get${componentName}Data = () => { return '${componentName} data'; };" > "./src/utils/get${componentName}Data.js"

# JS UNNIT TEST
echo "import Enzyme from 'enzyme';" > "./src/utils/get${componentName}Data.test.js"
echo "import Adapter from '@wojtekmaj/enzyme-adapter-react-17';" >> "./src/utils/get${componentName}Data.test.js"
echo "import { get${componentName}Data } from './get${componentName}Data.js';" >> "./src/utils/get${componentName}Data.test.js"
echo "Enzyme.configure({ adapter: new Adapter() });" >> "./src/utils/get${componentName}Data.test.js"
echo "it('get${componentName}Data should return correct value', () => {" >> "./src/utils/get${componentName}Data.test.js"
echo "const actual = get${componentName}Data();" >> "./src/utils/get${componentName}Data.test.js"
echo "const expected = '${componentName} data';" >> "./src/utils/get${componentName}Data.test.js"
echo "expect(actual).toBe(expected);" >> "./src/utils/get${componentName}Data.test.js"
echo "});" >> "./src/utils/get${componentName}Data.test.js"

# JSX UNNIT TEST
echo "import Enzyme, { shallow } from 'enzyme';" > "./src/components/${componentName}/${componentName}.test.js"
echo "import Adapter from '@wojtekmaj/enzyme-adapter-react-17';" >> "./src/components/${componentName}/${componentName}.test.js"
echo "import ${componentName} from './${componentName}';" >> "./src/components/${componentName}/${componentName}.test.js"
echo "import toJson from 'enzyme-to-json';" >> "./src/components/${componentName}/${componentName}.test.js"
echo "Enzyme.configure({ adapter: new Adapter() });" >> "./src/components/${componentName}/${componentName}.test.js"
echo "it('<${componentName}> component should match snapshot', () => {" >> "./src/components/${componentName}/${componentName}.test.js"
echo "const wrapper = shallow(<${componentName} />);" >> "./src/components/${componentName}/${componentName}.test.js"
echo "expect(toJson(wrapper)).toMatchSnapshot();" >> "./src/components/${componentName}/${componentName}.test.js"
echo "});" >> "./src/components/${componentName}/${componentName}.test.js"
