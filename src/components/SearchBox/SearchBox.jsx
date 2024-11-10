import s from './SearchBox.module.css';

const SearchBox = ({ handleSearchChange }) => {
  return (
    <div className={s.wrapper}>
      <span>Find contacts by name</span>
      <input
        type='text'
        placeholder='Search'
        onChange={handleSearchChange}
      ></input>
    </div>
  );
};

export default SearchBox;
