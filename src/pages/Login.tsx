import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
const Login: FunctionComponent = () => {
  const navigate = useNavigate();

  const onButtonContainerClick = useCallback(() => {
    navigate("/home-day");
  }, [navigate]);

  const onUserInfoContainerClick = useCallback(() => {
    navigate("/user-profile");
  }, [navigate]);

  const onRegistracijaTextClick = useCallback(() => {
    navigate("/sign-up");
  }, [navigate]);

  return (
    <div className={styles.login}>
      <div className={styles.background} />
      <div className={styles.google}>
        <div className={styles.officialButtonsSignInWit}>
          <img
            className={styles.logoGoogleg48dp}
            alt=""
            src="/logo-googleg-48dp1.svg"
          />
          <div className={styles.signInWith}>Sign in with Google</div>
        </div>
      </div>
      <div className={styles.or}>
        <img className={styles.orChild} alt="" src="/line-11.svg" />
        <div className={styles.orItem} />
        <div className={styles.ali}>ALI</div>
      </div>
      <div className={styles.inputs}>
        <div className={styles.button} onClick={onButtonContainerClick}>
          <div className={styles.input} />
          <div className={styles.prijaviSe}>PRIJAVI SE</div>
        </div>
        <div className={styles.emailInput}>
          <div className={styles.email}>Email</div>
          <div className={styles.input1} />
        </div>
        <div className={styles.gesloInput}>
          <div className={styles.email}>Geslo</div>
          <div className={styles.input1} />
        </div>
      </div>
      <div className={styles.title}>Prijava</div>
      <div className={styles.navbar}>
        <div className={styles.background1} />
        <img className={styles.logoIcon} alt="" src="/logo@2x.png" />
        <div className={styles.userInfo} onClick={onUserInfoContainerClick}>
          <div className={styles.prijava}>Prijava Registracija</div>
          <img
            className={styles.userProfileIcon}
            alt=""
            src="/user-profile2.svg"
          />
        </div>
      </div>
      <div className={styles.loginregister}>
        <div className={styles.email}>Prijava</div>
        <div className={styles.registracija} onClick={onRegistracijaTextClick}>
          Registracija
        </div>
      </div>
    </div>
  );
};

export default Login;
