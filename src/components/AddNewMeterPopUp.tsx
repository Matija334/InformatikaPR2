import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./AddNewMeterPopUp.module.css";

type AddNewMeterPopUpType = {
  onClose?: () => void;
};

const AddNewMeterPopUp: FunctionComponent<AddNewMeterPopUpType> = ({
  onClose,
}) => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/user-profile");
  }, [navigate]);

  return (
    <div className={styles.addNewMeterPopUp}>
      <div className={styles.background} />
      <div className={styles.title}>Dodaj nov merilni števec</div>
      <div className={styles.rectangleParent} onClick={onGroupContainerClick}>
        <div className={styles.groupChild} />
        <div className={styles.dodajNovTevec}>Dodaj nov števec</div>
        <div className={styles.groupItem} />
        <div className={styles.tevilkaTevca}>Številka števca:</div>
        <div className={styles.npr234565759}>npr. 234565759</div>
      </div>
    </div>
  );
};

export default AddNewMeterPopUp;
