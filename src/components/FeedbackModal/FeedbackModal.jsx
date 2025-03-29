import css from "./FeedbackModal.module.css";
import CloseIcon from "../../icons/close.svg";
import { setFeedback } from "../../redux/feedback/feedbackSlice";
import { useDispatch } from "react-redux";
const FeedbackModal = () => {
  const dispatch = useDispatch();
  return (
    <div className={css.feedbackOverlay}>
      <div className={css.feedbackModal}>
        <h2 className={css.feedbackTitle}>Форма зворотнього зв’язку</h2>
        <button
          type="button"
          className={css.feedbackCloseBtn}
          onClick={() => dispatch(setFeedback(false))}
        >
          <img src={CloseIcon} alt="close modal" />
        </button>
        <form className={css.feedbackForm}>
          <label className={css.feedbackLabel}>
            Ім’я та прізвище
            <input
              type="text"
              className={css.feedbackInput}
              placeholder="Анна Василенко"
            />
          </label>
          <label className={css.feedbackLabel}>
            Пошта
            <span className={css.feedbackSubdesc}>
              Напишіть пошту, на яку ви очікуєте отримати відповідь
            </span>
            <input type="email" className={css.feedbackInput} />
          </label>
          <label className={css.feedbackLabel}>
            Текст звернення
            <textarea className={css.feedbackTextarea}></textarea>
          </label>
          <button type="submit" className={css.feedbackBtn}>
            Відправити звернення
          </button>
          <button type="button" className={css.feedbackCancelBtn}>
            Скасувати
          </button>
        </form>
      </div>
    </div>
  );
};
export default FeedbackModal;
