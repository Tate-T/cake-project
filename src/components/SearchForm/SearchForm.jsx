import css from "./SearchForm.module.css";

const SearchForm = ({ placeholder, type }) => {
  return (
    <form className={css.seachform__form}>
      <input placeholder={placeholder} className={css.seachform__input} />
      <button className={css.seachform__btn}>Шукати</button>
    </form>
  );
};

export default SearchForm;
