import { FunctionComponent, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import AddNewMeterPopUp from "../components/AddNewMeterPopUp";
import PortalPopup from "../components/PortalPopup";
import DeleteUserConfirmation from "../components/DeleteUserConfirmation";
import styles from "./UserProfile.module.css";
const UserProfile: FunctionComponent = () => {
  const navigate = useNavigate();
  const [isAddNewMeterPopUpOpen, setAddNewMeterPopUpOpen] = useState(false);
  const [isDeleteUserConfirmationOpen, setDeleteUserConfirmationOpen] =
    useState(false);

  const onComparisonContainerClick = useCallback(() => {
    navigate("/comparison");
  }, [navigate]);

  const onHistoryContainerClick = useCallback(() => {
    navigate("/history");
  }, [navigate]);

  const onHomeContainerClick = useCallback(() => {
    navigate("/home-day");
  }, [navigate]);

  const onUserInfoContainerClick = useCallback(() => {
    navigate("/user-profile");
  }, [navigate]);

  const openAddNewMeterPopUp = useCallback(() => {
    setAddNewMeterPopUpOpen(true);
  }, []);

  const closeAddNewMeterPopUp = useCallback(() => {
    setAddNewMeterPopUpOpen(false);
  }, []);

  const openDeleteUserConfirmation = useCallback(() => {
    setDeleteUserConfirmationOpen(true);
  }, []);

  const closeDeleteUserConfirmation = useCallback(() => {
    setDeleteUserConfirmationOpen(false);
  }, []);

  return (
    <>
      <div className={styles.userProfile}>
        <div className={styles.previousBilling}>
          <div className={styles.background} />
          <div className={styles.ljubljanskaUlica1}>Ljubljanska ulica 1</div>
          <div className={styles.maribor}>2000, Maribor</div>
          <div className={styles.naslov}>Naslov:</div>
          <div className={styles.kraj}>Kraj:</div>
          <div className={styles.novak}>Novak</div>
          <div className={styles.priimek}>Priimek:</div>
          <div className={styles.janez}>Janez</div>
          <div className={styles.ime}>Ime:</div>
          <div className={styles.title}>Osebni podatki</div>
        </div>
        <div className={styles.previousBilling1}>
          <div className={styles.background} />
          <div className={styles.novak}>Stanovanjska hiša</div>
          <div className={styles.janez}>295748903</div>
          <div className={styles.ime}>Številka števca:</div>
          <div className={styles.priimek}>Tip objekta:</div>
          <div className={styles.title}>Podatki merilnega števca</div>
        </div>
        <div className={styles.previousBilling2}>
          <div className={styles.background} />
          <div className={styles.novak}>**********</div>
          <div className={styles.priimek}>Geslo:</div>
          <div className={styles.janez}>janez.novak@gmail.com</div>
          <div className={styles.ime}>Uporabnisko ime:</div>
          <div className={styles.title}>Profil uporabnika</div>
        </div>
        <div className={styles.title3}>Podatki uporabnika</div>
        <div className={styles.sidebar}>
          <div
            className={styles.comparison}
            onClick={onComparisonContainerClick}
          >
            <div className={styles.background3} />
            <div className={styles.content}>
              <img
                className={styles.clipPathGroup}
                alt=""
                src="/clip-path-group2.svg"
              />
              <div className={styles.zgodovina}>
                <p className={styles.primerjava}>Primerjava</p>
              </div>
            </div>
          </div>
          <div className={styles.history} onClick={onHistoryContainerClick}>
            <div className={styles.background3} />
            <div className={styles.content1}>
              <img className={styles.vectorIcon} alt="" src="/vector65.svg" />
              <div className={styles.zgodovina}>Zgodovina</div>
            </div>
          </div>
          <div className={styles.home} onClick={onHomeContainerClick}>
            <div className={styles.background3} />
            <div className={styles.content1}>
              <img className={styles.vectorIcon1} alt="" src="/vector86.svg" />
              <div className={styles.zgodovina}>Domov</div>
            </div>
          </div>
        </div>
        <div className={styles.navbar}>
          <div className={styles.background6} />
          <img className={styles.logoIcon} alt="" src="/logo@2x.png" />
          <div className={styles.userInfo} onClick={onUserInfoContainerClick}>
            <div className={styles.janezNovak}>Janez Novak</div>
            <img
              className={styles.userProfileIcon}
              alt=""
              src="/user-profile1.svg"
            />
          </div>
        </div>
        <div className={styles.rectangleParent} onClick={openAddNewMeterPopUp}>
          <div className={styles.groupChild} />
          <div className={styles.spremeniTevec}>Spremeni števec</div>
        </div>
        <div
          className={styles.rectangleGroup}
          onClick={openDeleteUserConfirmation}
        >
          <div className={styles.groupChild} />
          <div className={styles.izbriiProfil}>Izbriši profil</div>
        </div>
      </div>
      {isAddNewMeterPopUpOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeAddNewMeterPopUp}
        >
          <AddNewMeterPopUp onClose={closeAddNewMeterPopUp} />
        </PortalPopup>
      )}
      {isDeleteUserConfirmationOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeDeleteUserConfirmation}
        >
          <DeleteUserConfirmation onClose={closeDeleteUserConfirmation} />
        </PortalPopup>
      )}
    </>
  );
};

export default UserProfile;
