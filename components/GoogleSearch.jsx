import React from 'react';
import { useGetSearchResultsQuery } from '../services/Search';

const GoogleSearch = () => {
  const { data, isFetching } = useGetSearchResultsQuery();

  if (isFetching) return 'Loading...';
  // eslint-disable-next-line no-console
  console.log(data);

  return (
    <div>Search Page</div>
  );
};

export default GoogleSearch;
