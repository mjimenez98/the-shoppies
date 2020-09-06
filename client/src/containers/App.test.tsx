import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Navbar } from 'bootstrap-4-react';
import Header from '../components/Header';
import { SearchBar, Movie } from '../components/SearchBar';
import SearchResults from '../components/SearchResults';

configure({ adapter: new Adapter() });

describe('Navbar', () => {
  test('renders title in navbar', () => {
    const wrapper = mount(<Header />)
    const component = wrapper.find(Navbar.Brand)
    expect(component.text()).toEqual('The Shoppies')
  });
});

describe('Search', () => {
  test('searchValue state is updated after input change', () => {
    const wrapper = shallow(<SearchBar sendMovies={() => {}} />)

    const component = wrapper.find('#search');
    component.simulate('change', {target: {value: 'Ten'}});

    expect(wrapper.state('searchValue')).toBe('Ten');
  });

  test('movie results are rendered', () => {
    const movies: Movie[] = [{title: "Tenet", year: "2020"}]
    const wrapper = shallow(<SearchResults movieResults={movies}/>)

    const component = wrapper.find('li');
    expect(component.at(0).key()).toEqual('Tenet (2020)');
  });
});
