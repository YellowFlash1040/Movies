import React, { useState } from 'react';
import { StyledForm } from './SearchForm.styled';

const SearchForm = ({ submit }) => {
  const [query, setQuery] = useState('');

  const handleFormSubmit = event => {
    event.preventDefault();
    submit(query);
    setQuery('');
  };

  return (
    <StyledForm onSubmit={handleFormSubmit}>
      <input
        type="text"
        value={query}
        onChange={event => setQuery(event.target.value)}
        style={{ width: '300px' }}
      />
      <button>Search</button>
    </StyledForm>
  );
};

export default SearchForm;
