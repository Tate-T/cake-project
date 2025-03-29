import styles from "./UserCabinet.module.css";
import Container from "../../components/Container/Container.jsx";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import SavedTempl from "../SavedTempl/SavedTempl.jsx";
import Application from "../myApplication/myApplication";

const UserCabinet = ({isOrders}) => {
    return (
      <>
        <section className={styles.userCabinet}>
          <Header />
          <Container>
            <ul className={styles.tabs}>
                <li id="1">
                    <Link active={`${isOrders}`} to="/client/requests">Мої заявки</Link>
                </li>
                <li id="2">
                    <Link active={`${!(isOrders)}`} to="/client/temps">Збережені шаблони</Link>
              </li>
            </ul>
            {isOrders ? <Application /> : <SavedTempl />}
          </Container>
          <Footer />
        </section>
      </>
    );
}

export default UserCabinet;