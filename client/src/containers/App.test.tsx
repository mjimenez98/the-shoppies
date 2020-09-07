import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Button, Navbar } from 'bootstrap-4-react';
import Header from '../components/Header';
import { SearchBar, Movie } from '../components/Search/SearchBar';
import SearchResults from '../components/Search/SearchResults/SearchResults';
import SearchResultsMovie from '../components/Search/SearchResults/SearchResultsMovie';

configure({ adapter: new Adapter() });

describe('Navbar', () => {
  test('renders title in navbar', () => {
    const wrapper = mount(<Header />);
    const component = wrapper.find(Navbar.Brand);
    expect(component.text()).toEqual('The Shoppies');
  });
});

describe('Search', () => {
  test('searchValue state is updated after input change', () => {
    const nominees: Movie[] = [];

    const wrapper = shallow(
      <SearchBar
        nominees={nominees}
        isNominated={() => -1}
        keyIndexInMovieResults={() => -1}
        sendMovies={() => {}}
      />,
    );

    const component = wrapper.find('#search');
    component.simulate('change', { target: { value: 'Ten' } });

    expect(wrapper.state('searchValue')).toBe('Ten');
  });

  test('movie results are rendered', () => {
    const movies: Movie[] = [
      {
        key: 'Tenet (2020)',
        title: 'Tenet',
        year: '2020',
        nominated: false,
      },
    ];

    const wrapper = mount(
      <SearchResults
        movieResults={movies}
        addNominee={() => {}}
      />,
    );

    const component = wrapper.find(SearchResultsMovie);
    expect(component.find('div').at(1).text()).toEqual(movies[0].key);
    expect(component.find(Button).text()).toEqual('Nominate');
  });
});
