import css from "./SignupTip.module.css";
import { Link } from "react-router-dom";
const SignupTip = () => {
  return (
    <div className={css.signuptip__box}>
      <Link className={css.signuptip__link}>
        У мене немає акаунту, треба зареєструватися
      </Link>
    </div>
  );
};
export default SignupTip;
