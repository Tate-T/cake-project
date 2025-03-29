import css from "./Request.module.css";
import CloseIcon from "../../imgs/svg/close.svg";
import CheckIcon from "../../imgs/svg/check.svg";

const Request = ({ data, closeFn }) => {
  return (
    <div className={css.requestOverlay}>
      <div className={css.request}>
        <h2 className={css.requestTitle}>{data.title}</h2>
        <button className={css.requestCloseBtn} onClick={() => closeFn(false)}>
          <img src={CloseIcon} alt="close modal" />
        </button>
        <time className={css.requestDate} dateTime={data.date.toISOString()}>
          {data.date.toLocaleString()}
        </time>
        <form className={css.requestForm}>
          <div className={css.requestBox}>
            <label className={css.requestLabel}>
              Ім’я та прізвище
              <input
                type="text"
                name="firstAndLastName"
                className={css.requestInput}
                value={data.client.firstName + " " + data.client.lastName}
              />
            </label>
            <label className={css.requestLabel}>
              Номер телефону
              <input
                type="tel"
                name="phoneNumber"
                className={css.requestInput}
                value={data.client.phone}
              />
            </label>
          </div>
          <div className={css.requestBox}>
            <label className={css.requestLabel}>
              Вага
              <div data-weight-subbox>
                <input
                  type="number"
                  min={0.1}
                  max={100}
                  name="weight"
                  className={css.requestInput}
                  value={data.weight}
                />
                <p className={css.requestText}>кг</p>
              </div>
            </label>
            <label className={css.requestLabel}>
              Начинка
              <textarea
                className={css.requestTextarea}
                name="filling"
                value={data.filling}
              ></textarea>
            </label>
            <div className={css.requestLabel}>
              <p className={css.requestLabelText}>Додаткові послуги</p>
              <ul className={css.requestList}>
                {data.extraServices.map((addition) => (
                  <li className={css.requestItem}>{addition}</li>
                ))}
              </ul>
            </div>
            <div className={css.requestLabel}>
              <p className={css.requestLabelText}>Додаткові побажання</p>
              {data.doNotCallMe && (
                <div className={css.requestSubBox}>
                  <img src={CheckIcon} alt="okay icon" />
                  <p className={css.requestSubtext}>Не телефонуйте мені</p>
                </div>
              )}
              <textarea
                className={css.requestTextarea}
                name="wishes"
                value={data.wishes}
              ></textarea>
            </div>
          </div>
          <button
            type="button"
            className={`${css.requestBtn} ${css.requestBtnFirst}`}
          >
            Написати кондитеру
          </button>
          <button type="button" className={`${css.requestBtn}`}>
            Додати відгук
          </button>
        </form>
      </div>
    </div>
  );
};
export default Request;
