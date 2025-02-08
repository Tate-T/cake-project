import css from "./SignupTip.module.css";
import { Link } from "react-router-dom";
const SignupTip = ({ text, link }) => {
  return (
    <div className={css.signuptip__box}>
      <Link className={css.signuptip__link} to={link}>
        {text}
      </Link>
    </div>
  );
};
export default SignupTip;
