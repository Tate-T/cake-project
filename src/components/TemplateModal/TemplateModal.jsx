import css from "./TemplateModal.module.css";
import CloseIcon from "../../imgs/svg/close.svg";
import CheckIcon from "../../imgs/svg/check.svg";

const TemplateModal = ({ data, closeFn }) => {
  return (
    <div className={css.templateOverlay}>
      <div className={css.template}>
        <h2 className={css.templateTitle}>{data.title}</h2>
        <button className={css.templateCloseBtn} onClick={() => closeFn(false)}>
          <img src={CloseIcon} alt="close modal" />
        </button>

        <form className={css.templateForm}>
          <div className={css.templateBox}>
            <label className={css.templateLabel}>
              Ім’я та прізвище
              <input
                type="text"
                name="firstAndLastName"
                className={css.templateInput}
                value={data.client.firstName + " " + data.client.lastName}
              />
            </label>
            <label className={css.templateLabel}>
              Номер телефону
              <input
                type="tel"
                name="phoneNumber"
                className={css.templateInput}
                value={data.client.phone}
              />
            </label>
          </div>
          <div className={css.templateBox}>
            <label className={css.templateLabel}>
              Вага
              <div data-weight-subbox>
                <input
                  type="number"
                  min={0.1}
                  max={100}
                  name="weight"
                  className={css.templateInput}
                  value={data.weight}
                />
                <p className={css.templateText}>кг</p>
              </div>
            </label>
            <label className={css.templateLabel}>
              Начинка
              <textarea
                className={css.templateTextarea}
                name="filling"
                value={data.filling}
              ></textarea>
            </label>
            <div className={css.templateLabel}>
              <p className={css.templateLabelText}>Додаткові послуги</p>
              <ul className={css.templateList}>
                {data.extraServices.map((addition) => (
                  <li className={css.templateItem}>{addition}</li>
                ))}
              </ul>
            </div>
            <div className={css.templateLabel}>
              <p className={css.templateLabelText}>Додаткові побажання</p>
              {data.doNotCallMe && (
                <div className={css.templateSubBox}>
                  <img src={CheckIcon} alt="okay icon" />
                  <p className={css.templateSubtext}>Не телефонуйте мені</p>
                </div>
              )}
              <textarea
                className={css.templateTextarea}
                name="wishes"
                value={data.wishes}
              ></textarea>
            </div>
          </div>
          <div className={css.templateBtnsBlock}>
            <button type="button" className={css.templateBtnEdit}>
              Редагування шаблону
            </button>
            <button
              type="button"
              className={`${css.templateBtn} ${css.templateBtnFirst}`}
            >
              Сторінка оголошення
            </button>
            <button type="button" className={`${css.templateBtn}`}>
              Надіслати заявку
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TemplateModal;
