import React, { useContext, useState } from 'react';
import { LanguageContext } from '../../context';

const Search = () => {
  const { langDict } = useContext(LanguageContext);
  const [searchQuery, setSearchQuery] = useState('');

  const sendSearchQuery = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    console.log(searchQuery);
  };

  return (
    <div className="news-search">
      <h2>{langDict.searchHeading}</h2>
      <form>
        <input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="news-search__input"
          type="text"/>
        <button
          onClick={(e) => sendSearchQuery(e)}
          className="news-search__button"
        >
          {langDict.searchButton}
        </button>
      </form>
    </div>
  );
};

export default Search;
