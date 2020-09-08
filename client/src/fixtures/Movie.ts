import { Movie } from '../components/Search/SearchBar';

export function movies(nominated: boolean): Movie[] {
  const moviesArr: Movie[] = [
    {
      key: 'Tenet (2020)',
      title: 'Tenet',
      year: '2020',
      nominated,
    },
  ];

  return moviesArr;
}

export function fullNomineesList(): Movie[] {
  const nominees: Movie[] = [
    {
      key: 'Tenet (2020)',
      title: 'Tenet',
      year: '2020',
      nominated: true,
    },
    {
      key: 'Vertigo (1958)',
      title: 'Vertigo',
      year: '1958',
      nominated: true,
    },
    {
      key: 'Pulp Fiction (1994)',
      title: 'Pulp Fiction',
      year: '1994',
      nominated: true,
    },
    {
      key: 'Cinema Paradiso (1988)',
      title: 'Cinema Paradiso',
      year: '1988',
      nominated: true,
    },
    {
      key: 'Isle of Dogs (2018)',
      title: 'Isle of Dogs',
      year: '2018',
      nominated: true,
    },
  ];

  return nominees;
}
