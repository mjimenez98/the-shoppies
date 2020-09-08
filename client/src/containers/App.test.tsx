import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Alert, Button, Navbar } from 'bootstrap-4-react';

import Header from '../components/Header';
import { SearchBar, Movie } from '../components/Search/SearchBar';
import SearchResults from '../components/Search/SearchResults/SearchResults';
import SearchResultsMovie from '../components/Search/SearchResults/SearchResultsMovie';
import Nominations from '../components/Search/Nominations/Nominations';
import Nominee from '../components/Search/Nominations/Nominee';
import Search from '../components/Search/Search';
import Banner from '../components/Search/Banner';

import {
  movies as moviesFixture,
  fullNomineesList as fullNomineesListFixture,
} from '../fixtures/Movie';

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
    const movies: Movie[] = moviesFixture(false);

    const wrapper = mount(
      <SearchResults
        movieResults={movies}
        addNominee={() => {}}
      />,
    );

    const component = wrapper.find(SearchResultsMovie);
    expect(component.find('div').at(2).text()).toEqual(movies[0].id);
    expect(component.find(Button).text()).toEqual('Nominate');
  });

  test('nominated movies are rendered', () => {
    const nominees: Movie[] = moviesFixture(true);

    const wrapper = mount(
      <Nominations
        nominees={nominees}
        removeNominee={() => {}}
      />,
    );

    const component = wrapper.find(Nominee);
    expect(component.find('div').at(2).text()).toEqual(nominees[0].id);
    expect(component.find(Button).text()).toEqual('Remove');
  });

  test('nominate button of a nominated movie is disabled', () => {
    const movies: Movie[] = moviesFixture(true);

    const wrapper = mount(
      <SearchResults
        movieResults={movies}
        addNominee={() => {}}
      />,
    );

    const component = wrapper.find(SearchResultsMovie);
    expect(component.find(Button).prop('disabled')).toBe(true);
  });
});

describe('Banner', () => {
  test('renders message when there are 5 nominees', () => {
    const nominees: Movie[] = fullNomineesListFixture();

    const wrapper = mount(
      <Search />,
    );
    wrapper.setState({ nominees });

    const component = wrapper.find(Banner);
    expect(component.find(Alert).text()).toEqual(
      '🥳 Congrats! You have nominated 5 films. Feel free to edit your choices as you need.',
    );
  });
});
