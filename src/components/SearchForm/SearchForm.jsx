import css from "./SearchForm.module.css";

const SearchForm = ({ placeholder, cb, value }) => {
  return (
    <form className={css.searchform__form}>
      <input
        placeholder={placeholder}
        className={css.searchform__input}
        onChange={cb}
        value={value}
      />
      <button className={css.searchform__btn}>Шукати</button>
    </form>
  );
};

export default SearchForm;
