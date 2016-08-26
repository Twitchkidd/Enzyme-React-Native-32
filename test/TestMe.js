import React, { View, Text, StyleSheet } from 'react-native';
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