# INPUT
read -p "Enter component name ('Counter' being default value): " name
componentName=${componentName:-Counter}

# FOLDERS
mkdir "./src/components"
mkdir "./src/utils"
mkdir "./src/containers"
mkdir "./src/components/${componentName}"
mkdir "./src/containers/${componentName}Container"

# COMPONENT
FN="./src/components/${componentName}/${componentName}.jsx"
echo "import PropTypes from 'prop-types';" > $FN
echo "import {useEffect} from 'react';" >> $FN
echo "import {get${componentName}Data} from '../../utils/get${componentName}Data.js';" >> $FN
echo "import './${componentName}.css';" >> $FN
echo "" >> $FN
echo "const ${componentName} = () => {" >> $FN
echo "useEffect(() => {});" >> $FN
echo "const ${componentName}Data = get${componentName}Data(); return (<div className='content${componentName}'>{${componentName}Data}</div>); };" >> $FN
echo "${componentName}.propTypes = {};" >> $FN
echo "export default ${componentName};" >> $FN

# COMPONENT CSS
FN="./src/components/${componentName}/${componentName}.css"
echo "" >> $FN

if ["$1" == '-c'] then
# CONTAINER
FN="./src/containers/${componentName}Container/${componentName}Container.jsx"
echo "import {useEffect} from 'react';" > $FN
echo "import ${componentName} from '../../components/${componentName}';" >> $FN
echo "" >> $FN
echo "const ${componentName}Container = () => {" >> $FN
echo "useEffect(() => {});" >> $FN
echo "const ${componentName}Data = get${componentName}Data(); "
echo "return (<${componentName} />);" >> $FN
echo "};" >> $FN
echo "export default ${componentName}Container;" >> $FN
fi

# CONTAINER CSS
FN="./src/containers/${componentName}Container/${componentName}Container.css"
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
echo "import Adapter from '@wojtekmaj/enzyme-adapter-react-17';" >> $FN
echo "import ${componentName} from './${componentName}';" >> $FN
echo "import toJson from 'enzyme-to-json';" >> $FN
echo "Enzyme.configure({ adapter: new Adapter() });" >> $FN
echo "it('<${componentName}> component should match snapshot', () => {" >> $FN
echo "const wrapper = shallow(<${componentName} />);" >> $FN
echo "expect(toJson(wrapper)).toMatchSnapshot();" >> $FN
echo "});" >> $FN
