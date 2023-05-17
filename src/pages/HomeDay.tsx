import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./HomeDay.module.css";
const HomeDay: FunctionComponent = () => {
  const navigate = useNavigate();

  const onButtonsContainerClick = useCallback(() => {
    navigate("/home-month");
  }, [navigate]);

  const onGroupContainer2Click = useCallback(() => {
    navigate("/home-year");
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
    <div className={styles.homeDay}>
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
          <div className={styles.frame}>
            <img className={styles.vectorIcon} alt="" src="/vector.svg" />
            <div className={styles.frame1}>
              <div className={styles.frame2}>
                <img className={styles.vectorIcon1} alt="" src="/vector1.svg" />
                <div className={styles.div}>0</div>
              </div>
              <div className={styles.frame3}>
                <img className={styles.vectorIcon1} alt="" src="/vector2.svg" />
                <div className={styles.div1}>1</div>
              </div>
              <div className={styles.frame4}>
                <img className={styles.vectorIcon1} alt="" src="/vector3.svg" />
                <div className={styles.div}>2</div>
              </div>
              <div className={styles.frame5}>
                <img className={styles.vectorIcon1} alt="" src="/vector4.svg" />
                <div className={styles.div}>3</div>
              </div>
              <div className={styles.frame6}>
                <img className={styles.vectorIcon1} alt="" src="/vector5.svg" />
                <div className={styles.div}>4</div>
              </div>
              <div className={styles.frame7}>
                <img className={styles.vectorIcon1} alt="" src="/vector6.svg" />
                <div className={styles.div}>5</div>
              </div>
              <div className={styles.frame8}>
                <img className={styles.vectorIcon1} alt="" src="/vector7.svg" />
                <div className={styles.div}>6</div>
              </div>
              <div className={styles.frame9}>
                <img className={styles.vectorIcon1} alt="" src="/vector8.svg" />
                <div className={styles.div7}>7</div>
              </div>
              <div className={styles.frame10}>
                <img className={styles.vectorIcon1} alt="" src="/vector9.svg" />
                <div className={styles.div}>8</div>
              </div>
              <div className={styles.frame11}>
                <img
                  className={styles.vectorIcon1}
                  alt=""
                  src="/vector10.svg"
                />
                <div className={styles.div}>9</div>
              </div>
              <div className={styles.frame12}>
                <img
                  className={styles.vectorIcon1}
                  alt=""
                  src="/vector11.svg"
                />
                <div className={styles.div10}>10</div>
              </div>
              <div className={styles.frame13}>
                <img
                  className={styles.vectorIcon1}
                  alt=""
                  src="/vector12.svg"
                />
                <div className={styles.div11}>11</div>
              </div>
              <div className={styles.frame14}>
                <img
                  className={styles.vectorIcon1}
                  alt=""
                  src="/vector13.svg"
                />
                <div className={styles.div12}>12</div>
              </div>
              <div className={styles.frame15}>
                <img
                  className={styles.vectorIcon1}
                  alt=""
                  src="/vector14.svg"
                />
                <div className={styles.div10}>13</div>
              </div>
              <div className={styles.frame16}>
                <img
                  className={styles.vectorIcon1}
                  alt=""
                  src="/vector15.svg"
                />
                <div className={styles.div10}>14</div>
              </div>
              <div className={styles.frame17}>
                <img
                  className={styles.vectorIcon1}
                  alt=""
                  src="/vector16.svg"
                />
                <div className={styles.div12}>15</div>
              </div>
              <div className={styles.frame18}>
                <img
                  className={styles.vectorIcon1}
                  alt=""
                  src="/vector17.svg"
                />
                <div className={styles.div10}>16</div>
              </div>
              <div className={styles.frame19}>
                <img
                  className={styles.vectorIcon1}
                  alt=""
                  src="/vector18.svg"
                />
                <div className={styles.div12}>17</div>
              </div>
              <div className={styles.frame20}>
                <img
                  className={styles.vectorIcon1}
                  alt=""
                  src="/vector19.svg"
                />
                <div className={styles.div12}>18</div>
              </div>
              <div className={styles.frame21}>
                <img
                  className={styles.vectorIcon1}
                  alt=""
                  src="/vector20.svg"
                />
                <div className={styles.div10}>19</div>
              </div>
              <div className={styles.frame22}>
                <img
                  className={styles.vectorIcon1}
                  alt=""
                  src="/vector21.svg"
                />
                <div className={styles.div20}>20</div>
              </div>
              <div className={styles.frame23}>
                <img
                  className={styles.vectorIcon1}
                  alt=""
                  src="/vector22.svg"
                />
                <div className={styles.div12}>21</div>
              </div>
              <div className={styles.frame24}>
                <img
                  className={styles.vectorIcon1}
                  alt=""
                  src="/vector23.svg"
                />
                <div className={styles.div20}>22</div>
              </div>
              <div className={styles.frame25}>
                <img
                  className={styles.vectorIcon1}
                  alt=""
                  src="/vector24.svg"
                />
                <div className={styles.div20}>23</div>
              </div>
            </div>
          </div>
          <div className={styles.frame26}>
            <div className={styles.frame27}>
              <div className={styles.frame28}>
                <img
                  className={styles.vectorIcon25}
                  alt=""
                  src="/vector25.svg"
                />
                <div className={styles.div24}>12</div>
              </div>
              <div className={styles.frame29}>
                <div className={styles.div}>9</div>
                <img
                  className={styles.vectorIcon26}
                  alt=""
                  src="/vector26.svg"
                />
              </div>
              <div className={styles.frame29}>
                <div className={styles.div}>6</div>
                <img
                  className={styles.vectorIcon26}
                  alt=""
                  src="/vector27.svg"
                />
              </div>
              <div className={styles.frame29}>
                <div className={styles.div}>3</div>
                <img
                  className={styles.vectorIcon26}
                  alt=""
                  src="/vector28.svg"
                />
              </div>
              <div className={styles.frame29}>
                <div className={styles.div}>0</div>
                <img
                  className={styles.vectorIcon26}
                  alt=""
                  src="/vector29.svg"
                />
              </div>
            </div>
            <img className={styles.vectorIcon30} alt="" src="/vector30.svg" />
          </div>
          <img className={styles.groupIcon} alt="" src="/group.svg" />
          <img className={styles.vectorIcon31} alt="" src="/vector31.svg" />
          <div className={styles.h}>h</div>
        </div>
        <div className={styles.kwh}>kWH</div>
        <div className={styles.title}>Pregled porabe po urah - 20.05.2023</div>
      </div>
      <div className={styles.smallWindows}>
        <div className={styles.smallWindows1}>
          <div className={styles.upperRow}>
            <div className={styles.smallWindow}>
              <div className={styles.smallWindowChild} />
            </div>
            <div className={styles.smallWindow1}>
              <div className={styles.smallWindowChild} />
            </div>
            <div className={styles.kwh1}>192 kWh</div>
            <div className={styles.div29}>3</div>
            <div className={styles.skupnaPoraba}>Skupna poraba</div>
            <div
              className={styles.teviloSpremenjenihPodatkov}
            >{`Število spremenjenih podatkov `}</div>
          </div>
          <div className={styles.bottomRow}>
            <div className={styles.smallWindow}>
              <div className={styles.smallWindowChild} />
            </div>
            <div className={styles.smallWindow1}>
              <div className={styles.smallWindowChild} />
            </div>
            <div className={styles.povprenaPoraba}>Povprečna poraba</div>
            <div className={styles.teviloPrekoraitev}>Število prekoračitev</div>
            <div className={styles.kwhh}>8 kWh/h</div>
            <div className={styles.div30}>2</div>
          </div>
        </div>
        <div className={styles.smallWindows1}>
          <div className={styles.upperRow}>
            <div className={styles.smallWindow}>
              <div className={styles.smallWindowChild} />
            </div>
            <div className={styles.smallWindow1}>
              <div className={styles.smallWindowChild} />
            </div>
            <div className={styles.div31}>5</div>
            <div className={styles.div32}>11 %</div>
            <div className={styles.nepravilneMeritve}>Nepravilne meritve</div>
            <div className={styles.teviloAnomalij}>Število anomalij</div>
          </div>
          <div className={styles.bottomRow}>
            <div className={styles.smallWindow}>
              <div className={styles.smallWindowChild} />
            </div>
            <div className={styles.smallWindow1}>
              <div className={styles.smallWindowChild} />
            </div>
            <div className={styles.najvejaPoraba}>Največja poraba</div>
            <div className={styles.najmanjaPoraba}>Najmanjša poraba</div>
            <div className={styles.div33}>10:00-13:00</div>
            <div className={styles.div34}>1:00-4:00</div>
          </div>
        </div>
      </div>
      <div className={styles.buttons} onClick={onButtonsContainerClick}>
        <div className={styles.rectangleParent}>
          <div className={styles.groupChild} />
          <div className={styles.dan}>DAN</div>
        </div>
        <div className={styles.rectangleParent}>
          <div className={styles.groupItem} />
          <div className={styles.mesec}>MESEC</div>
        </div>
        <div
          className={styles.rectangleContainer}
          onClick={onGroupContainer2Click}
        >
          <div className={styles.groupItem} />
          <div className={styles.leto}>LETO</div>
        </div>
      </div>
      <div className={styles.title1}>
        Pregled meritev - št. merilne omarice: 295748903
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
        <div className={styles.history} onClick={onHistoryContainerClick}>
          <div className={styles.background1} />
          <div className={styles.content1}>
            <img className={styles.vectorIcon32} alt="" src="/vector32.svg" />
            <div className={styles.zgodovina}>Zgodovina</div>
          </div>
        </div>
        <div className={styles.home} onClick={onHomeContainerClick}>
          <div className={styles.background3} />
          <div className={styles.content1}>
            <img className={styles.vectorIcon33} alt="" src="/vector33.svg" />
            <div className={styles.zgodovina}>Domov</div>
          </div>
        </div>
      </div>
      <div className={styles.navbar}>
        <div className={styles.background4} />
        <img className={styles.logoIcon} alt="" src="/logo@2x.png" />
        <div className={styles.userInfo} onClick={onUserInfoContainerClick}>
          <div className={styles.mankajoiPodatki}>Janez Novak</div>
          <img
            className={styles.userProfileIcon}
            alt=""
            src="/user-profile.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeDay;
