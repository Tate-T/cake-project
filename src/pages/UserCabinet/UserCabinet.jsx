import styles from "./UserCabinet.module.css";
import Container from "../../components/Container/Container.jsx";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const UserCabinet = ({CabinetTab, isOrders}) => {
    return (
        <>
            <section className={styles.userCabinet}>
                <Header />
                <Container>
                    <ul className={styles.tabs}>
                        <li id="1">
                            <Link active={`${isOrders}`} to="/">Мої заявки</Link>
                        </li>
                        <li id="2">
                            <Link active={`${!(isOrders)}`} to="/">Збережені шаблони</Link>
                        </li>
                    </ul> 
                    <CabinetTab />
                </Container>    
                <Footer />
            </section>
        </>
    );
}

export default UserCabinet;