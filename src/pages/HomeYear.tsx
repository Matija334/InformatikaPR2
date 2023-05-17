import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./HomeYear.module.css";
const HomeYear: FunctionComponent = () => {
  const navigate = useNavigate();

  const onGroupContainer19Click = useCallback(() => {
    navigate("/home-day");
  }, [navigate]);

  const onGroupContainer20Click = useCallback(() => {
    navigate("/home-month");
  }, [navigate]);

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
    <div className={styles.homeYear}>
      <div className={styles.barChart}>
        <div className={styles.background} />
        <div className={styles.legend}>
          <div className={styles.pravilniPodatki}>
            <div className={styles.legendForData}>
              <div className={styles.legendForDataChild} />
            </div>
            <div className={styles.mankajoiPodatki}>Pravilni podatki</div>
          </div>
          <div className={styles.pravilniPodatki}>
            <div className={styles.legendForData}>
              <div className={styles.legendForDataItem} />
            </div>
            <div className={styles.mankajoiPodatki}>Spremenjeni podatki</div>
          </div>
          <div className={styles.pravilniPodatki}>
            <div className={styles.legendForData}>
              <div className={styles.legendForDataInner} />
            </div>
            <div className={styles.mankajoiPodatki}>Mankajoči podatki</div>
          </div>
        </div>
        <div className={styles.chart}>
          <div className={styles.months}>
            <img className={styles.vectorIcon} alt="" src="/vector67.svg" />
            <div className={styles.group}>
              <div className={styles.group1}>
                <img
                  className={styles.vectorIcon1}
                  alt=""
                  src="/vector68.svg"
                />
                <div className={styles.div}>1</div>
              </div>
              <div className={styles.group2}>
                <img
                  className={styles.vectorIcon2}
                  alt=""
                  src="/vector69.svg"
                />
                <div className={styles.div}>2</div>
              </div>
              <div className={styles.group3}>
                <img
                  className={styles.vectorIcon1}
                  alt=""
                  src="/vector70.svg"
                />
                <div className={styles.div}>3</div>
              </div>
              <div className={styles.group4}>
                <img
                  className={styles.vectorIcon1}
                  alt=""
                  src="/vector71.svg"
                />
                <div className={styles.div}>4</div>
              </div>
              <div className={styles.group5}>
                <img
                  className={styles.vectorIcon1}
                  alt=""
                  src="/vector72.svg"
                />
                <div className={styles.div}>5</div>
              </div>
              <div className={styles.group6}>
                <img
                  className={styles.vectorIcon1}
                  alt=""
                  src="/vector73.svg"
                />
                <div className={styles.div}>6</div>
              </div>
              <div className={styles.group7}>
                <img
                  className={styles.vectorIcon1}
                  alt=""
                  src="/vector74.svg"
                />
                <div className={styles.div}>7</div>
              </div>
              <div className={styles.group8}>
                <img
                  className={styles.vectorIcon8}
                  alt=""
                  src="/vector75.svg"
                />
                <div className={styles.div}>8</div>
              </div>
              <div className={styles.group9}>
                <img
                  className={styles.vectorIcon1}
                  alt=""
                  src="/vector76.svg"
                />
                <div className={styles.div}>9</div>
              </div>
              <div className={styles.group10}>
                <img
                  className={styles.vectorIcon1}
                  alt=""
                  src="/vector77.svg"
                />
                <div className={styles.div}>10</div>
              </div>
              <div className={styles.group11}>
                <img
                  className={styles.vectorIcon11}
                  alt=""
                  src="/vector78.svg"
                />
                <div className={styles.div}>11</div>
              </div>
              <div className={styles.group12}>
                <img
                  className={styles.vectorIcon12}
                  alt=""
                  src="/vector79.svg"
                />
                <div className={styles.div}>12</div>
              </div>
            </div>
          </div>
          <div className={styles.kwh}>
            <img className={styles.vectorIcon13} alt="" src="/vector80.svg" />
            <div className={styles.group13}>
              <div className={styles.group14}>
                <img
                  className={styles.vectorIcon14}
                  alt=""
                  src="/vector81.svg"
                />
                <div className={styles.div12}>0</div>
              </div>
              <div className={styles.group15}>
                <img
                  className={styles.vectorIcon15}
                  alt=""
                  src="/vector82.svg"
                />
                <div className={styles.div13}>500</div>
              </div>
              <div className={styles.group16}>
                <img
                  className={styles.vectorIcon16}
                  alt=""
                  src="/vector83.svg"
                />
                <div className={styles.div14}>1000</div>
              </div>
              <div className={styles.group17}>
                <img
                  className={styles.vectorIcon17}
                  alt=""
                  src="/vector84.svg"
                />
                <div className={styles.div15}>1500</div>
              </div>
              <div className={styles.group18}>
                <img
                  className={styles.vectorIcon18}
                  alt=""
                  src="/vector85.svg"
                />
                <div className={styles.div16}>2000</div>
              </div>
            </div>
          </div>
          <img className={styles.valuesIcon} alt="" src="/values.svg" />
        </div>
        <div className={styles.kwh1}>kWH</div>
        <div className={styles.title}>Pregled porabe po mesecih - 2023</div>
      </div>
      <div className={styles.pieChart}>
        <div className={styles.background1} />
        <img className={styles.chartIcon} alt="" src="/chart.svg" />
        <div className={styles.legend1}>
          <div className={styles.pravilniPodatki}>
            <div className={styles.legendForData}>
              <div className={styles.legendForDataChild} />
            </div>
            <div className={styles.mankajoiPodatki}>Pravilni podatki</div>
          </div>
          <div className={styles.pravilniPodatki}>
            <div className={styles.legendForData}>
              <div className={styles.legendForDataItem} />
            </div>
            <div className={styles.mankajoiPodatki}>Spremenjeni podatki</div>
          </div>
          <div className={styles.pravilniPodatki}>
            <div className={styles.legendForData}>
              <div className={styles.legendForDataInner} />
            </div>
            <div className={styles.mankajoiPodatki}>Mankajoči podatki</div>
          </div>
        </div>
        <div className={styles.title1}>Uspešnost meritev</div>
      </div>
      <div className={styles.smallWindows}>
        <div className={styles.upperRow}>
          <div className={styles.smallWindow}>
            <div className={styles.smallWindowChild} />
          </div>
          <div className={styles.smallWindow1}>
            <div className={styles.smallWindowChild} />
          </div>
          <div className={styles.mwh}>16 MWh</div>
          <div className={styles.div17}>985</div>
          <div className={styles.skupnaPoraba}>Skupna poraba</div>
          <div className={styles.teviloSpremenjenihPodatkov}>
            Število spremenjenih podatkov
          </div>
        </div>
        <div className={styles.bottomRow}>
          <div className={styles.smallWindow}>
            <div className={styles.smallWindowChild} />
          </div>
          <div className={styles.smallWindow1}>
            <div className={styles.smallWindowChild} />
          </div>
          <div className={styles.povprenaPoraba}>Povprečna poraba</div>
          <div className={styles.teviloAnomalij}>Število anomalij</div>
          <div className={styles.mwh1}>1.33 MWh</div>
          <div className={styles.div18}>1143</div>
        </div>
      </div>
      <div className={styles.buttons}>
        <div
          className={styles.rectangleParent}
          onClick={onGroupContainer19Click}
        >
          <div className={styles.groupChild} />
          <div className={styles.dan}>DAN</div>
        </div>
        <div
          className={styles.rectangleParent}
          onClick={onGroupContainer20Click}
        >
          <div className={styles.groupChild} />
          <div className={styles.mesec}>MESEC</div>
        </div>
        <div className={styles.rectangleContainer}>
          <div className={styles.groupInner} />
          <div className={styles.leto}>LETO</div>
        </div>
      </div>
      <div className={styles.title2}>
        Pregled meritev - št. merilne omarice: 295748903
      </div>
      <div className={styles.sidebar}>
        <div className={styles.comparison} onClick={onComparisonContainerClick}>
          <div className={styles.background2} />
          <div className={styles.content}>
            <img
              className={styles.clipPathGroup}
              alt=""
              src="/clip-path-group1.svg"
            />
            <div className={styles.zgodovina}>
              <p className={styles.primerjava}>Primerjava</p>
            </div>
          </div>
        </div>
        <div className={styles.history} onClick={onHistoryContainerClick}>
          <div className={styles.background2} />
          <div className={styles.content1}>
            <img className={styles.vectorIcon19} alt="" src="/vector65.svg" />
            <div className={styles.zgodovina}>Zgodovina</div>
          </div>
        </div>
        <div className={styles.home} onClick={onHomeContainerClick}>
          <div className={styles.background4} />
          <div className={styles.content1}>
            <img className={styles.vectorIcon20} alt="" src="/vector66.svg" />
            <div className={styles.zgodovina}>Domov</div>
          </div>
        </div>
      </div>
      <div className={styles.navbar}>
        <div className={styles.background5} />
        <img className={styles.logoIcon} alt="" src="/logo@2x.png" />
        <div className={styles.userInfo} onClick={onUserInfoContainerClick}>
          <div className={styles.mankajoiPodatki}>Janez Novak</div>
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

export default HomeYear;
