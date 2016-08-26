#Enzyme React Native

This is the most minimal adaptation (that I could come up with) of
https://github.com/lelandrichardson/enzyme-example-react-native
to get it to work with a react-native init with RN^0.32.

`react-native init YourProject`

`npm i --save-dev babel babel-preset-react-native chai enzyme mocha react-addons-test-utils react-dom react-native-mock`

add this to "scripts" in package.json: `"test": "mocha --require react-native-mock/mock.js --compilers js:babel-core/register --recursive test/*.js"`

create .babelrc with this:
```javascript
{
	"presets": ["react-native"]
}
```

create TestMe.js in a components folder:
```javascript
import React, {
  View,
  Text,
} from 'react-native';

export default class TestMe extends React.Component {
  render() {
    return (
      <View>
        <Text>I wonder if there will be any problems...</Text>
      </View>
    );
  }
}
```

and create TestMe.js in a test folder:
```javascript
import React, { Text, View } from 'react-native';
import { shallow } from 'enzyme';
import TestMe from '../components/TestMe';
import { expect } from 'chai';

describe('<TestMe />', () => {
  it('should render stuff', () => {
    const wrapper = shallow(<TestMe />);
    expect(wrapper.length).to.equal(1);
    expect(wrapper.contains(<Text>I wonder if there will be any problems...</Text>)).to.equal(true);
  });
});
```

Then run `npm test` and it should run and pass the test

Best wishes! ~g
