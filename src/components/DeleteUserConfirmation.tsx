import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./DeleteUserConfirmation.module.css";

type DeleteUserConfirmationType = {
  onClose?: () => void;
};

const DeleteUserConfirmation: FunctionComponent<DeleteUserConfirmationType> = ({
  onClose,
}) => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/user-profile");
  }, [navigate]);

  return (
    <div className={styles.deleteUserConfirmation}>
      <div className={styles.deleteUserConfirmationChild} />
      <div className={styles.rectangleParent} onClick={onGroupContainerClick}>
        <div className={styles.groupChild} />
        <div className={styles.izbriiProfil}>Izbriši profil</div>
      </div>
      <div className={styles.izbrisProfila}>Izbris profila</div>
      <div className={styles.profilBoOdstranjenContainer}>
        <p
          className={styles.profilBoOdstranjen}
        >{`Profil bo odstranjen za vedno. `}</p>
        <p
          className={styles.profilBoOdstranjen}
        >{`Ali ste prepričani, da želite izbrisati svoj profil? `}</p>
      </div>
    </div>
  );
};

export default DeleteUserConfirmation;
