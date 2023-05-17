import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Comparison.module.css";
const Comparison: FunctionComponent = () => {
  const navigate = useNavigate();

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

  return (
    <div className={styles.comparison}>
      <div className={styles.barChart}>
        <div className={styles.background} />
        <div className={styles.chart}>
          <div className={styles.group}>
            <img className={styles.vectorIcon} alt="" src="/vector87.svg" />
            <div className={styles.group1}>
              <div className={styles.group2}>
                <img
                  className={styles.vectorIcon1}
                  alt=""
                  src="/vector88.svg"
                />
                <div className={styles.starNain}>Star način</div>
                <div className={styles.novNain}>Nov način</div>
              </div>
            </div>
          </div>
          <div className={styles.group3}>
            <img className={styles.vectorIcon2} alt="" src="/vector89.svg" />
            <div className={styles.group2}>
              <div className={styles.group5}>
                <img
                  className={styles.vectorIcon3}
                  alt=""
                  src="/vector90.svg"
                />
                <div className={styles.div}>0</div>
              </div>
              <div className={styles.group6}>
                <img
                  className={styles.vectorIcon4}
                  alt=""
                  src="/vector91.svg"
                />
                <div className={styles.div1}>250</div>
              </div>
              <div className={styles.group7}>
                <img
                  className={styles.vectorIcon4}
                  alt=""
                  src="/vector92.svg"
                />
                <div className={styles.div1}>500</div>
              </div>
              <div className={styles.group8}>
                <img
                  className={styles.vectorIcon4}
                  alt=""
                  src="/vector93.svg"
                />
                <div className={styles.div1}>750</div>
              </div>
              <div className={styles.group9}>
                <img
                  className={styles.vectorIcon7}
                  alt=""
                  src="/vector94.svg"
                />
                <div className={styles.div1}>1000</div>
              </div>
            </div>
          </div>
          <img className={styles.groupIcon} alt="" src="/group4.svg" />
          <img className={styles.groupIcon1} alt="" src="/group5.svg" />
          <div className={styles.cenaNaLetni}>Cena na letni ravni</div>
        </div>
        <div className={styles.div5}>€</div>
      </div>
      <div className={styles.results}>
        <div className={styles.background1} />
        <div className={styles.div6}>-98,54€</div>
        <div className={styles.naLeto}>Na leto:</div>
        <div className={styles.div7}>-14,06 €</div>
        <div className={styles.naMesec}>Na mesec:</div>
        <div className={styles.zNovimNainomContainer}>
          <p className={styles.zNovimNainom}>
            Z novim načinom obračunavanja elektične energije boste povprečno
          </p>
          <p className={styles.zNovimNainom}>{`porabili: `}</p>
        </div>
        <div className={styles.title}>Rezultati</div>
      </div>
      <div className={styles.currentBilling}>
        <div className={styles.background2} />
        <div className={styles.div8}>620,34€</div>
        <div className={styles.cenaNaLeta}>Cena na leta:</div>
        <div className={styles.div9}>49,37€</div>
        <div className={styles.cenaNaMesec}>Cena na mesec:</div>
        <div className={styles.div10}>5,52€</div>
        <div className={styles.cenaNaDan}>Cena na dan:</div>
        <div className={styles.title1}>Novi način obračunavanja</div>
      </div>
      <div className={styles.previousBilling}>
        <div className={styles.background2} />
        <div className={styles.div11}>718,88€</div>
        <div className={styles.cenaNaLeta1}>Cena na leta:</div>
        <div className={styles.div12}>63,43€</div>
        <div className={styles.cenaNaMesec1}>Cena na mesec:</div>
        <div className={styles.div13}>8,18€</div>
        <div className={styles.cenaNaDan1}>Cena na dan:</div>
        <div className={styles.title2}>Star način obračunavanja</div>
      </div>
      <div className={styles.title3}>
        Primerjava cen po starem in novem načinu obračunavanja za obdobje enega
        leta
      </div>
      <div className={styles.sidebar}>
        <div
          className={styles.comparison1}
          onClick={onComparisonContainerClick}
        >
          <div className={styles.background4} />
          <div className={styles.content}>
            <img
              className={styles.clipPathGroup}
              alt=""
              src="/clip-path-group3.svg"
            />
            <div className={styles.zgodovina}>
              <p className={styles.zNovimNainom}>Primerjava</p>
            </div>
          </div>
        </div>
        <div className={styles.history} onClick={onHistoryContainerClick}>
          <div className={styles.background5} />
          <div className={styles.content1}>
            <img className={styles.vectorIcon8} alt="" src="/vector65.svg" />
            <div className={styles.zgodovina}>Zgodovina</div>
          </div>
        </div>
        <div className={styles.home} onClick={onHomeContainerClick}>
          <div className={styles.background5} />
          <div className={styles.content1}>
            <img className={styles.vectorIcon9} alt="" src="/vector86.svg" />
            <div className={styles.zgodovina}>Domov</div>
          </div>
        </div>
      </div>
      <div className={styles.navbar}>
        <div className={styles.background7} />
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
    </div>
  );
};

export default Comparison;
