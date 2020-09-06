import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Navbar } from 'bootstrap-4-react';
import Header from '../components/Header';
import { SearchBar } from '../components/SearchBar';

configure({ adapter: new Adapter() });

describe('Navbar', () => {
  test.only('renders title in navbar', () => {
    const wrapper = mount(<Header />)
    const component = wrapper.find(Navbar.Brand)
    expect(component.text()).toEqual('The Shoppies')
  });
});

describe('SearchBar', () => {
  test.only('search state value is updated after input change', () => {
    const wrapper = shallow(<SearchBar sendMovies={() => {}} />)

    const component = wrapper.find('#search');
    component.simulate('change', {target: {value: 'Ten'}});

    expect(wrapper.state('searchValue')).toBe('Ten');
  });
});
