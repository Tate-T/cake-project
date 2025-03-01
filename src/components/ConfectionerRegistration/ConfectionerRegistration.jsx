import styled from "styled-components";

//?

import facebook from "../../imgs/svg/facebook.svg";
import google from "../../imgs/svg/google.svg";
import SignupTip from "../SignupTip/SignupTip";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleModal } from "../../redux/auth/authSlice";
import { createUser } from "../../redux/auth/authOperations";

const Overlay = styled.div`
  position: fixed;
  backdrop-filter: blur(9px);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const Modal = styled.div`
  width: 700px;
  outline: 1.5px solid #43607c;
  padding: 40px;
  box-sizing: border-box;
  position: fixed;
  border-radius: 10px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  label {
    color: #011936;
    font-family: Verdana;
    font-size: 16px;
    line-height: 1.2;
    font-weight: 400;
  }
`;
const ModalTitle = styled.h2`
  color: #011936;
  font-family: "Yeseva One";
  font-size: 30px;
  font-weight: 400;
  line-height: 120%;
`;
const Form = styled.form`
  width: 620px;
  margin: 60px 0px;
  button {
    height: 100%;
    width: 123px;
    border-radius: 50px;
    background: #fdad6d;
    color: #5e2d07;
    font-family: Verdana;
    font-size: 16px;
    line-height: 1.2;
    transition: 300ms;
    &:hover {
      background: #f1a567;
    }
  }
  p {
    color: #84a6c2;
    font-family: Verdana;
    font-size: 14px;
    line-height: 1.71;
    margin-bottom: 10px;
  }
  div {
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: space-between;
    input {
      height: 100%;
      padding: 10px 20px;
      box-sizing: border-box;
      border-radius: 50px;
      border: 1px solid #84a6c2;
      width: 482px;
      &::placeholder {
        color: #84a6c2;
      }
    }
  }
  ul {
    display: flex;
    flex-direction: column;
    gap: 60px;
    li {
      &:first-child {
        input {
          width: 100%;
          padding: 10px 20px;
          box-sizing: border-box;
          border-radius: 50px;
          border: 1px solid #84a6c2;
          margin-top: 10px;
          font-family: Verdana;
        }
      }
    }
  }
`;
const SocialsLogin = styled.div`
  width: 620px;
  height: 123px;
  display: flex;
  gap: 20px;
  flex-direction: column;
  ul {
    height: 40px;
    display: flex;
    gap: 10px;
    img {
      width: 20px;
      height: 20px;
    }
    li {
      border-radius: 10px;
      background: #dcebf8;
      width: 200px;
      height: 100%;
      display: flex;
      gap: 15px;
      justify-content: center;
      align-items: center;
      color: #43607c;
      font-family: Verdana;
      font-size: 16px;
      font-weight: 400;
      line-height: 1.2;
      cursor: pointer;
      transition: 300ms;
      &:hover {
        background: #d1dfec;
      }
    }
  }
`;

const arr = [
  {
    login: "lalala34",
    password: "Lala",
  },
  {
    login: "hahaha12",
    password: "hahaha",
  },
];

//?

const ConfectionerRegistration = () => {
  const [color, setColor] = useState(["#84a6c2", "#84a6c2"]);
  const users = useSelector((state) => state.auth.loginedUsers);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cb = useCallback((e) => {
    e.preventDefault();
    const values = {
      login: e.target.elements.login.value.trim(),
      password: e.target.elements.password.value.trim(),
    };
    console.log(values);
    const [loggedUser] = users.filter((user) => user.login === values.login);
    console.log(loggedUser);
    if (loggedUser) {
      setColor(["#ff0000", "#84a6c2"]);
    } else {
      if (values.password.length < 6 || values.password.length > 20) {
        setColor(["#84a6c2", "#ff0000"]);
      } else {
        dispatch(toggleModal());
        dispatch(createUser(values));
        navigate("/confectioner/cabinet", { replace: true });
      }
    }
  }, []);

  return (
    <Overlay>
      <Modal>
        <ModalTitle>Реєстрація</ModalTitle>
        <Form onSubmit={cb}>
          <div>
            <label htmlFor="login">Логін</label>
            <input
              type="text"
              placeholder="Логін"
              required
              id="login"
              name="login"
              style={{ borderColor: `${color[0]}` }}
            />
          </div>
          <div>
            <label htmlFor="password">Пароль</label>
            <input
              type="password"
              placeholder="Пароль"
              required
              id="password"
              name="password"
              style={{ borderColor: `${color[1]}` }}
            />
          </div>
          <button type="submit">Надіслати</button>
        </Form>
        <SocialsLogin>
          <h5>Зареєструватися за допомогою</h5>
          <ul>
            <li>
              <img src={facebook} alt="facebook" />
              Facebook
            </li>
            <li>
              <img src={google} alt="google" />
              Google
            </li>
          </ul>
        </SocialsLogin>
        <SignupTip
          text={"Я вже маю акаунт, хочу просто увійти"}
          link={"/confectioner/login"}
        />
      </Modal>
    </Overlay>
  );
};

export default ConfectionerRegistration;
