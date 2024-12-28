import css from "./SearchForm.module.css";

const SearchForm = ({ placeholder, type }) => {
  return (
    <form className={css.searchform__form}>
      <input placeholder={placeholder} className={css.searchform__input} />
      <button className={css.searchform__btn}>Шукати</button>
    </form>
  );
};

export default SearchForm;
