import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./HomeMonth.module.css";
const HomeMonth: FunctionComponent = () => {
  const navigate = useNavigate();

  const onGroupContainer39Click = useCallback(() => {
    navigate("/home-day");
  }, [navigate]);

  const onGroupContainer41Click = useCallback(() => {
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
    <div className={styles.homeMonth}>
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
          <div className={styles.group}>
            <img className={styles.vectorIcon} alt="" src="/vector34.svg" />
            <div className={styles.group1}>
              <div className={styles.group2}>
                <img
                  className={styles.vectorIcon1}
                  alt=""
                  src="/vector35.svg"
                />
                <div className={styles.div}>1</div>
              </div>
              <div className={styles.group3}>
                <img
                  className={styles.vectorIcon2}
                  alt=""
                  src="/vector36.svg"
                />
                <div className={styles.div}>2</div>
              </div>
              <div className={styles.group4}>
                <img
                  className={styles.vectorIcon1}
                  alt=""
                  src="/vector37.svg"
                />
                <div className={styles.div}>3</div>
              </div>
              <div className={styles.group5}>
                <img
                  className={styles.vectorIcon1}
                  alt=""
                  src="/vector38.svg"
                />
                <div className={styles.div}>4</div>
              </div>
              <div className={styles.group6}>
                <img
                  className={styles.vectorIcon1}
                  alt=""
                  src="/vector39.svg"
                />
                <div className={styles.div}>5</div>
              </div>
              <div className={styles.group7}>
                <img
                  className={styles.vectorIcon1}
                  alt=""
                  src="/vector40.svg"
                />
                <div className={styles.div}>6</div>
              </div>
              <div className={styles.group8}>
                <img
                  className={styles.vectorIcon1}
                  alt=""
                  src="/vector41.svg"
                />
                <div className={styles.div}>7</div>
              </div>
              <div className={styles.group9}>
                <img
                  className={styles.vectorIcon8}
                  alt=""
                  src="/vector42.svg"
                />
                <div className={styles.div}>8</div>
              </div>
              <div className={styles.group10}>
                <img
                  className={styles.vectorIcon1}
                  alt=""
                  src="/vector43.svg"
                />
                <div className={styles.div}>9</div>
              </div>
              <div className={styles.group11}>
                <img
                  className={styles.vectorIcon1}
                  alt=""
                  src="/vector44.svg"
                />
                <div className={styles.div}>10</div>
              </div>
              <div className={styles.group12}>
                <img
                  className={styles.vectorIcon11}
                  alt=""
                  src="/vector45.svg"
                />
                <div className={styles.div10}>11</div>
                <div className={styles.group13}>
                  <img
                    className={styles.vectorIcon12}
                    alt=""
                    src="/vector45.svg"
                  />
                  <div className={styles.div11}>13</div>
                  <div className={styles.group14}>
                    <img
                      className={styles.vectorIcon13}
                      alt=""
                      src="/vector45.svg"
                    />
                    <div className={styles.div12}>15</div>
                    <div className={styles.group15}>
                      <img
                        className={styles.vectorIcon14}
                        alt=""
                        src="/vector45.svg"
                      />
                      <div className={styles.div13}>17</div>
                      <div className={styles.group16}>
                        <img
                          className={styles.vectorIcon15}
                          alt=""
                          src="/vector45.svg"
                        />
                        <div className={styles.div14}>19</div>
                        <div className={styles.group17}>
                          <img
                            className={styles.vectorIcon16}
                            alt=""
                            src="/vector46.svg"
                          />
                          <div className={styles.div15}>21</div>
                          <div className={styles.group18}>
                            <img
                              className={styles.vectorIcon17}
                              alt=""
                              src="/vector46.svg"
                            />
                            <div className={styles.div16}>23</div>
                            <div className={styles.group19}>
                              <img
                                className={styles.vectorIcon18}
                                alt=""
                                src="/vector47.svg"
                              />
                              <div className={styles.div17}>25</div>
                              <div className={styles.group20}>
                                <img
                                  className={styles.vectorIcon19}
                                  alt=""
                                  src="/vector46.svg"
                                />
                                <div className={styles.div18}>27</div>
                                <div className={styles.group21}>
                                  <img
                                    className={styles.vectorIcon20}
                                    alt=""
                                    src="/vector47.svg"
                                  />
                                  <div className={styles.div19}>29</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.group22}>
                <img
                  className={styles.vectorIcon21}
                  alt=""
                  src="/vector48.svg"
                />
                <div className={styles.div}>12</div>
              </div>
              <div className={styles.group23}>
                <img
                  className={styles.vectorIcon22}
                  alt=""
                  src="/vector49.svg"
                />
                <div className={styles.div}>14</div>
              </div>
              <div className={styles.group24}>
                <img
                  className={styles.vectorIcon23}
                  alt=""
                  src="/vector50.svg"
                />
                <div className={styles.div}>16</div>
              </div>
              <div className={styles.group25}>
                <img
                  className={styles.vectorIcon23}
                  alt=""
                  src="/vector51.svg"
                />
                <div className={styles.div}>18</div>
              </div>
              <div className={styles.group26}>
                <img
                  className={styles.vectorIcon22}
                  alt=""
                  src="/vector52.svg"
                />
                <div className={styles.div}>20</div>
              </div>
              <div className={styles.group27}>
                <img
                  className={styles.vectorIcon23}
                  alt=""
                  src="/vector53.svg"
                />
                <div className={styles.div}>22</div>
              </div>
              <div className={styles.group28}>
                <img
                  className={styles.vectorIcon27}
                  alt=""
                  src="/vector54.svg"
                />
                <div className={styles.div}>24</div>
              </div>
              <div className={styles.group29}>
                <img
                  className={styles.vectorIcon27}
                  alt=""
                  src="/vector55.svg"
                />
                <div className={styles.div}>26</div>
              </div>
              <div className={styles.group30}>
                <img
                  className={styles.vectorIcon27}
                  alt=""
                  src="/vector56.svg"
                />
                <div className={styles.div}>28</div>
              </div>
              <div className={styles.group31}>
                <img
                  className={styles.vectorIcon27}
                  alt=""
                  src="/vector57.svg"
                />
                <div className={styles.div}>30</div>
              </div>
            </div>
          </div>
          <div className={styles.group32}>
            <img className={styles.vectorIcon31} alt="" src="/vector58.svg" />
            <div className={styles.group33}>
              <div className={styles.group34}>
                <img
                  className={styles.vectorIcon32}
                  alt=""
                  src="/vector59.svg"
                />
                <div className={styles.div30}>0</div>
              </div>
              <div className={styles.group35}>
                <img
                  className={styles.vectorIcon32}
                  alt=""
                  src="/vector60.svg"
                />
                <div className={styles.div30}>25</div>
              </div>
              <div className={styles.group36}>
                <img
                  className={styles.vectorIcon32}
                  alt=""
                  src="/vector61.svg"
                />
                <div className={styles.div30}>50</div>
              </div>
              <div className={styles.group37}>
                <img
                  className={styles.vectorIcon32}
                  alt=""
                  src="/vector62.svg"
                />
                <div className={styles.div30}>75</div>
              </div>
              <div className={styles.group38}>
                <img
                  className={styles.vectorIcon36}
                  alt=""
                  src="/vector63.svg"
                />
                <div className={styles.div34}>100</div>
              </div>
            </div>
          </div>
          <img className={styles.groupIcon} alt="" src="/group1.svg" />
          <img className={styles.vectorIcon37} alt="" src="/vector64.svg" />
          <img className={styles.vectorIcon38} alt="" src="/vector64.svg" />
          <img className={styles.groupIcon1} alt="" src="/group2.svg" />
          <img className={styles.groupIcon2} alt="" src="/group3.svg" />
        </div>
        <div className={styles.kwh}>kWH</div>
        <div className={styles.title}>Pregled porabe po dnevih - Maj 2023</div>
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
            <div className={styles.kwh1}>3580 kWh</div>
            <div className={styles.div35}>33</div>
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
            <div className={styles.kwhh}>13 kWh/h</div>
            <div className={styles.div36}>66</div>
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
            <div className={styles.div37}>52</div>
            <div className={styles.div38}>14 %</div>
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
            <div className={styles.div39}>15.05</div>
            <div className={styles.div40}>24.05</div>
          </div>
        </div>
      </div>
      <div className={styles.buttons}>
        <div
          className={styles.rectangleParent}
          onClick={onGroupContainer39Click}
        >
          <div className={styles.groupChild} />
          <div className={styles.dan}>DAN</div>
        </div>
        <div className={styles.rectangleGroup}>
          <div className={styles.groupItem} />
          <div className={styles.mesec}>MESEC</div>
        </div>
        <div
          className={styles.rectangleParent}
          onClick={onGroupContainer41Click}
        >
          <div className={styles.groupChild} />
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
              src="/clip-path-group1.svg"
            />
            <div className={styles.zgodovina}>
              <p className={styles.primerjava}>Primerjava</p>
            </div>
          </div>
        </div>
        <div className={styles.history} onClick={onHistoryContainerClick}>
          <div className={styles.background1} />
          <div className={styles.content1}>
            <img className={styles.vectorIcon39} alt="" src="/vector65.svg" />
            <div className={styles.zgodovina}>Zgodovina</div>
          </div>
        </div>
        <div className={styles.home} onClick={onHomeContainerClick}>
          <div className={styles.background3} />
          <div className={styles.content1}>
            <img className={styles.vectorIcon40} alt="" src="/vector66.svg" />
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
            src="/user-profile1.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeMonth;
