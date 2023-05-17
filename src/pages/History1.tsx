import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./History1.module.css";
const History1: FunctionComponent = () => {
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
    <div className={styles.history}>
      <div className={styles.background}>
        <div className={styles.backgroundChild} />
      </div>
      <div className={styles.table}>
        <div className={styles.tableBackground} />
        <div className={styles.pageNavigation}>
          <img
            className={styles.expandLeftIcon}
            alt=""
            src="/expand-left.svg"
          />
          <div className={styles.page1Od}>Page 1 od 20</div>
          <img
            className={styles.expandLeftIcon}
            alt=""
            src="/expand-right.svg"
          />
        </div>
        <div className={styles.tableRow10}>
          <div className={styles.tableRow10Child} />
          <div className={styles.div}>14.06.2023</div>
          <div className={styles.kwh}>120 kWh</div>
          <div className={styles.kwhh}>8 kWh/h</div>
          <div className={styles.div1}>20</div>
          <div className={styles.div2}>12</div>
          <div className={styles.div3}>5</div>
        </div>
        <div className={styles.tableRow9}>
          <div className={styles.tableRow10Child} />
          <div className={styles.div}>13.06.2023</div>
          <div className={styles.kwh}>120 kWh</div>
          <div className={styles.kwhh}>8 kWh/h</div>
          <div className={styles.div1}>20</div>
          <div className={styles.div2}>12</div>
          <div className={styles.div3}>5</div>
        </div>
        <div className={styles.tableRow8}>
          <div className={styles.tableRow10Child} />
          <div className={styles.div}>12.06.2023</div>
          <div className={styles.kwh}>120 kWh</div>
          <div className={styles.kwhh}>8 kWh/h</div>
          <div className={styles.div1}>20</div>
          <div className={styles.div2}>12</div>
          <div className={styles.div3}>5</div>
        </div>
        <div className={styles.tableRow7}>
          <div className={styles.tableRow10Child} />
          <div className={styles.div}>11.06.2023</div>
          <div className={styles.kwh}>120 kWh</div>
          <div className={styles.kwhh}>8 kWh/h</div>
          <div className={styles.div1}>20</div>
          <div className={styles.div2}>12</div>
          <div className={styles.div3}>5</div>
        </div>
        <div className={styles.tableRow6}>
          <div className={styles.tableRow10Child} />
          <div className={styles.div}>10.06.2023</div>
          <div className={styles.kwh}>120 kWh</div>
          <div className={styles.kwhh}>8 kWh/h</div>
          <div className={styles.div1}>20</div>
          <div className={styles.div2}>12</div>
          <div className={styles.div3}>5</div>
        </div>
        <div className={styles.tableRow5}>
          <div className={styles.tableRow10Child} />
          <div className={styles.div}>09.06.2023</div>
          <div className={styles.kwh}>120 kWh</div>
          <div className={styles.kwhh}>8 kWh/h</div>
          <div className={styles.div1}>20</div>
          <div className={styles.div2}>12</div>
          <div className={styles.div3}>5</div>
        </div>
        <div className={styles.tableRow4}>
          <div className={styles.tableRow10Child} />
          <div className={styles.div}>08.06.2023</div>
          <div className={styles.kwh}>120 kWh</div>
          <div className={styles.kwhh}>8 kWh/h</div>
          <div className={styles.div1}>20</div>
          <div className={styles.div2}>12</div>
          <div className={styles.div3}>5</div>
        </div>
        <div className={styles.tableRow3}>
          <div className={styles.tableRow10Child} />
          <div className={styles.div}>07.06.2023</div>
          <div className={styles.kwh}>120 kWh</div>
          <div className={styles.kwhh}>8 kWh/h</div>
          <div className={styles.div1}>20</div>
          <div className={styles.div2}>12</div>
          <div className={styles.div3}>5</div>
        </div>
        <div className={styles.tableRow2}>
          <div className={styles.tableRow10Child} />
          <div className={styles.div}>06.06.2023</div>
          <div className={styles.kwh}>120 kWh</div>
          <div className={styles.kwhh}>8 kWh/h</div>
          <div className={styles.div1}>20</div>
          <div className={styles.div2}>12</div>
          <div className={styles.div3}>5</div>
        </div>
        <div className={styles.tableRow1}>
          <div className={styles.tableRow10Child} />
          <div className={styles.div}>05.06.2023</div>
          <div className={styles.kwh}>120 kWh</div>
          <div className={styles.kwhh}>8 kWh/h</div>
          <div className={styles.div1}>20</div>
          <div className={styles.div2}>12</div>
          <div className={styles.div3}>5</div>
        </div>
        <div className={styles.tableHeader}>
          <div className={styles.tableHeaderChild} />
          <div className={styles.datumParent}>
            <div className={styles.datum}>Datum</div>
            <div className={styles.datum}>Skupna poraba</div>
            <div className={styles.datum}>Povprečna poraba</div>
            <div className={styles.datum}>Št. anomalij</div>
            <div className={styles.datum}>Št. popravkov</div>
            <div className={styles.datum}>Št. prekoračitev</div>
          </div>
        </div>
      </div>
      <div className={styles.title}>
        Zgodovina meritev - št. omarice 295748903
      </div>
      <div className={styles.sidebar}>
        <div className={styles.comparison} onClick={onComparisonContainerClick}>
          <div className={styles.background1} />
          <div className={styles.content}>
            <img
              className={styles.clipPathGroup}
              alt=""
              src="/clip-path-group.svg"
            />
            <div className={styles.zgodovina}>
              <p className={styles.primerjava}>Primerjava</p>
            </div>
          </div>
        </div>
        <div className={styles.history1} onClick={onHistoryContainerClick}>
          <div className={styles.background2} />
          <div className={styles.content1}>
            <img className={styles.vectorIcon} alt="" src="/vector95.svg" />
            <div className={styles.zgodovina}>Zgodovina</div>
          </div>
        </div>
        <div className={styles.home} onClick={onHomeContainerClick}>
          <div className={styles.background1} />
          <div className={styles.content1}>
            <img className={styles.vectorIcon1} alt="" src="/vector86.svg" />
            <div className={styles.zgodovina}>Domov</div>
          </div>
        </div>
      </div>
      <div className={styles.navbar}>
        <div className={styles.background4} />
        <img className={styles.logoIcon} alt="" src="/logo@2x.png" />
        <div className={styles.userInfo} onClick={onUserInfoContainerClick}>
          <div className={styles.page1Od}>Janez Novak</div>
          <img
            className={styles.userProfileIcon}
            alt=""
            src="/user-profile3.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default History1;
