import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SignUp.module.css";
const SignUp: FunctionComponent = () => {
  const navigate = useNavigate();

  const onUserInfoContainerClick = useCallback(() => {
    navigate("/user-profile");
  }, [navigate]);

  const onPrijavaText1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.signUp}>
      <div className={styles.background} />
      <div className={styles.google}>
        <div className={styles.officialButtonsSignInWit}>
          <img
            className={styles.logoGoogleg48dp}
            alt=""
            src="/logo-googleg-48dp.svg"
          />
          <div className={styles.signInWith}>Sign in with Google</div>
        </div>
      </div>
      <div className={styles.or}>
        <img className={styles.orChild} alt="" src="/line-1.svg" />
        <div className={styles.orItem} />
        <div className={styles.ali}>ALI</div>
      </div>
      <div className={styles.inputs}>
        <div className={styles.emailInput}>
          <div className={styles.email}>Email</div>
          <div className={styles.input} />
        </div>
        <div className={styles.emailInput}>
          <div className={styles.email}>Geslo</div>
          <div className={styles.input} />
        </div>
        <div className={styles.button}>
          <div className={styles.email}>REGISTRIRAJ SE</div>
        </div>
      </div>
      <div className={styles.title}>Registracija</div>
      <div className={styles.navbar}>
        <div className={styles.background1} />
        <img className={styles.logoIcon} alt="" src="/logo@2x.png" />
        <div className={styles.userInfo} onClick={onUserInfoContainerClick}>
          <div className={styles.prijava}>Prijava Registracija</div>
          <img
            className={styles.userProfileIcon}
            alt=""
            src="/user-profile.svg"
          />
        </div>
      </div>
      <div className={styles.loginregister}>
        <div className={styles.prijava1} onClick={onPrijavaText1Click}>
          Prijava
        </div>
        <div className={styles.email}>Registracija</div>
      </div>
    </div>
  );
};

export default SignUp;
