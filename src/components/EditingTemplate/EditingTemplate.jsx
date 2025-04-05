import css from "./EditingTemplate.module.css"


const open = false;


export const isOpenTemplate = (open) => {
  if (!open) {

  }
}

const EditingTemplate = () => {

  return (
    <form className={css.template}>


      <div className={css.boxTitleBtn}>
        <h1>Торт: </h1>
        <button type='button' className={css.buttonClose}>
          <svg width="17.500000" height="17.500000" viewBox="0 0 17.5 17.5" fill="none" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
            <path id="Vector" d="M17.5 1.76L15.73 0L8.75 6.98L1.76 0L0 1.76L6.98 8.75L0 15.73L1.76 17.5L8.75 10.51L15.73 17.5L17.5 15.73L10.51 8.75L17.5 1.76Z" fill="#84A6C2" />
          </svg>

        </button>
      </div>


      <ul className={css.userList}>
        <li className={css.userListItem}>
          <p className={css.userItemtext}>Ім’я та прізвище</p>
          <input className={css.userListInput} type='text' placeholder='ПІБ' />
        </li>
        <li className={css.userListItem}>
          <p className={css.userItemtext}>Номер телефону</p>
          <input className={css.userListInput} type='tell' placeholder='+380 *** *** ***' />
        </li>
      </ul>

      <ul className={css.makeList}>
        <li className={css.makeListItem}>
          <p className={css.makeItemText}>Вага</p>
          <input type='number' className={css.makeItemEl} />
          <p className={css.makeItemText}>кг</p>
        </li>
        <li className={css.makeListItem}>
          <div >
            <p className={css.makeItemText}>Начинка</p>
            <p className={css.makeItemAddText}>Оберіть 1 варіант</p>
          </div>
          <ul className={css.componentList}>
            <li className={css.componentListItem}>
              <button type="button" className={css.makeItemElBtn}>
                Бісквітна з манговим мусом із дзеркальною глазуррю
              </button>
            </li>
            <li className={css.componentListItem}>
              <button type="button" className={css.makeItemElBtn}>
                Бісквітна з лохиновим конфітюром
              </button>
            </li>
            <li className={css.componentListItem}>
              <button type="button" className={css.makeItemElBtn}>
                Шоколадний бісквіт з крем-чізом, горіховим праліне і велюровим покриттям
              </button>
            </li>
          </ul>
        </li>
        <li className={css.makeListItem}>
          <div>
            <p className={css.makeItemText}>Додаткові послуги</p>
            <p className={css.makeItemAddText}>можна обрати декілька варіантів</p>
          </div>
          <ul>
            <li className={css.componentListItem}>
              <button type="button" className={css.makeItemEl}>
                Прикраси з мастики
              </button>
            </li>
            <li className={css.componentListItem}>
              <button type="button" className={css.makeItemEl}>
                Шоколадні сфери
              </button>
            </li>
            <li className={css.componentListItem}>
              <button type="button" className={css.makeItemEl}>
                Живі квіти
              </button>
            </li>
            <li className={css.componentListItem}>
              <button type="button" className={css.makeItemEl}>
                Святкова упаковка
              </button>
            </li>
            <li className={css.componentListItem}>
              <button type="button" className={css.makeItemEl}>
                Фото на торті
              </button>
            </li>
          </ul>
        </li>
      </ul>

      <div className={css.commentBox}>
        <p className={css.commentText}>Додаткові побажання</p>
        <textarea className={css.comment} />
        <div className={css.infoComment}>
          <input type='checkbox' className={css.commentInput} />
          <div >
            <p className={css.commentText}>Не тeлeфонуйте мені</p>
            <p className={css.makeItemAddText}>Хочу спілкуватися тіки в чаті Mycake</p>
          </div>
        </div>
      </div>

      <div className={css.boxTitleBtn}>
        <button type='button' className={css.SubmitBtn}>Скасувати</button>
        <button type='button' className={css.saveSubmitBtn}>Зберегти</button>
      </div>
    </form>
  );
}

export default EditingTemplate;