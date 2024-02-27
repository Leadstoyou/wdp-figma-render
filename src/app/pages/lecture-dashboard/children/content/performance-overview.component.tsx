import React from 'react';

type Props = {};

const PerformanceOverview = (props: Props) => {
  return (
    <div>
      <div>
        <div className="instructor-main-heading ia-responsive-header--container--hFCZQ">
          <h1 className="ud-heading-serif-xxl ia-responsive-header--title--JBkCr">Overview</h1>
          <div className="ia-responsive-header--title-dropdown--GO-vD"></div>
        </div>
        <div data-purpose="metric-container">
          <div data-purpose="metrics-content" className="instructor-analytics--chart-container--OTHlj">
            <h2>Get top insights about your performance</h2>
            <div className="tab-chart--container--iCi3G tab-chart--container-desktop--2N01e">
              <div className="tabs-module--tabs-container---clC6">
                <div
                  className="ud-tabs-nav-buttons tabs-module--tabs-nav-buttons--R48bp"
                  role="tablist"
                  data-purpose="tab-nav-buttons"
                >
                  <section aria-label="Tab Navigation" className="carousel-module--container--l71Ek">
                    <div
                      className="carousel-module--scroll-port--ViaiR carousel-module--grid--nU76k carousel-module--scroll-lock--UdXQa"
                      data-purpose="scroll-port"
                      id="scroll-port--98"
                      aria-live="off"
                    >
                      <div data-index="0" className="carousel-module--scroll-item--QZoY7">
                        <div className="ud-nav-button-container tabs-module--nav-button-container--UQiPm ud-nav-button-container-active tabs-module--active--WZUDQ">
                          <button
                            type="button"
                            id="tabs--97-tab-0"
                            aria-selected="true"
                            role="tab"
                            className="ud-btn ud-btn-large ud-btn-ghost ud-heading-md ud-nav-button tabs-module--nav-button--DtB8V ud-nav-button-active tabs-module--active--WZUDQ"
                          >
                            <div className="ud-text-md tab-chart--metrics-data--y1srb">
                              <div className="ud-text-sm">Total revenue</div>
                              <div className="ud-text-xl tab-chart--metrics-data-primary--QUH1V">$0.00</div>
                              $0.00 this month
                            </div>
                          </button>
                        </div>
                      </div>
                      <div data-index="1" className="carousel-module--scroll-item--QZoY7">
                        <div className="ud-nav-button-container tabs-module--nav-button-container--UQiPm">
                          <button
                            type="button"
                            id="tabs--97-tab-1"
                            aria-selected="false"
                            role="tab"
                            className="ud-btn ud-btn-large ud-btn-ghost ud-heading-md ud-nav-button tabs-module--nav-button--DtB8V"
                          >
                            <div className="ud-text-md tab-chart--metrics-data--y1srb">
                              <div className="ud-text-sm">
                                Total enrollment
                                <span style={{ whiteSpace: 'nowrap' }}>
                                  s
                                  <div className="popper-module--popper--mM5Ie info-tooltip--info-tooltip--c4S9N">
                                    {/* <svg
                                      aria-label="Get info"
                                      role="img"
                                      focusable="false"
                                      id="popper-trigger--99"
                                      aria-describedby="popper-content--100"
                                      tabindex="0"
                                      className="ud-icon ud-icon-small ud-icon-color-neutral"
                                    >
                                      <use xlink:href="#icon-info-outline"></use>
                                    </svg> */}
                                  </div>
                                </span>
                              </div>
                              <div className="ud-text-xl tab-chart--metrics-data-primary--QUH1V">0</div>0 this month
                            </div>
                          </button>
                        </div>
                      </div>
                      <div data-index="2" className="carousel-module--scroll-item--QZoY7">
                        <div className="ud-nav-button-container tabs-module--nav-button-container--UQiPm">
                          <button
                            type="button"
                            id="tabs--97-tab-2"
                            aria-selected="false"
                            role="tab"
                            className="ud-btn ud-btn-large ud-btn-ghost ud-heading-md ud-nav-button tabs-module--nav-button--DtB8V"
                          >
                            <div className="ud-text-md tab-chart--metrics-data--y1srb">
                              <div className="ud-text-sm">
                                Instructor ratin
                                <span style={{ whiteSpace: 'nowrap' }}>
                                  g
                                  <div className="popper-module--popper--mM5Ie info-tooltip--info-tooltip--c4S9N">
                                    {/* <svg
                                      aria-label="Get info"
                                      role="img"
                                      focusable="false"
                                      id="popper-trigger--101"
                                      aria-describedby="popper-content--102"
                                      tabindex="0"
                                      className="ud-icon ud-icon-small ud-icon-color-neutral"
                                    >
                                      <use xlink:href="#icon-info-outline"></use>
                                    </svg> */}
                                  </div>
                                </span>
                              </div>
                              <div className="ud-text-xl tab-chart--metrics-data-primary--QUH1V">0.00</div>0 ratings
                              this month
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
                <div
                  id="tabs--97-content-0"
                  role="tabpanel"
                  className="ud-tab-content tabs-module--tab-content--y-r7m tabs-module--active--WZUDQ"
                  data-purpose="tab-container"
                  aria-labelledby="tabs--97-tab-0"
                >
                  <div>
                    <div className="tab-chart--content--yWrFS">
                      <div>
                        <div className="tab-chart--date-filter--otJnD">
                          <div className="ud-text-xs">Date range:</div>
                          <div className="popper-module--popper--mM5Ie">
                            <button
                              type="button"
                              id="dropdown-trigger--103"
                              aria-expanded="false"
                              className="ud-btn ud-btn-xsmall ud-btn-secondary ud-heading-sm"
                            >
                              <span>Last 12 months</span>
                              {/* <svg aria-hidden="true" focusable="false" className="ud-icon ud-icon-xsmall">
                                <use xlink:href="#icon-expand"></use>
                              </svg> */}
                            </button>
                            <div
                              id="popper-content--105"
                              aria-labelledby="dropdown-trigger--103"
                              className="popper-module--popper-content--XE9z5"
                              style={{ top: '100%', right: '0px', width: '20rem' }}
                            >
                              <div className="popper-module--animation-wrapper--tM0UK">
                                <div
                                  className="dropdown-module--menu---dCM1 dropdown-module--dropdown-menu--7Qc2I"
                                  style={{ maxHeight: '28rem' }}
                                >
                                  <ul className="ud-unstyled-list ud-block-list">
                                    <li>
                                      <button
                                        type="button"
                                        className="ud-btn ud-btn-large ud-btn-ghost ud-text-sm ud-block-list-item ud-block-list-item-small ud-block-list-item-neutral"
                                      >
                                        <div className="ud-block-list-item-content">Last 7 days</div>
                                      </button>
                                    </li>
                                    <li>
                                      <button
                                        type="button"
                                        className="ud-btn ud-btn-large ud-btn-ghost ud-text-sm ud-block-list-item ud-block-list-item-small ud-block-list-item-neutral"
                                      >
                                        <div className="ud-block-list-item-content">Last 30 days</div>
                                      </button>
                                    </li>
                                    <li>
                                      <button
                                        type="button"
                                        className="ud-btn ud-btn-large ud-btn-ghost ud-text-sm ud-block-list-item ud-block-list-item-small ud-block-list-item-neutral"
                                      >
                                        <div className="ud-block-list-item-content">Last 12 months</div>
                                      </button>
                                    </li>
                                    <li>
                                      <button
                                        type="button"
                                        className="ud-btn ud-btn-large ud-btn-ghost ud-text-sm ud-block-list-item ud-block-list-item-small ud-block-list-item-neutral"
                                      >
                                        <div className="ud-block-list-item-content">All time</div>
                                      </button>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="tab-chart--no-content--R4pSD" data-purpose="no-data">
                          No data to display
                        </div>
                      </div>
                    </div>
                    <div className="tab-chart--footer--135nc" data-purpose="report-link">
                      <a href="/revenue-report/" className="ud-btn ud-btn-large ud-btn-ghost ud-text-md">
                        <span>Revenue Report</span>
                        {/* <svg aria-hidden="true" focusable="false" className="ud-icon ud-icon-small">
                          <use xlink:href="#icon-next"></use>
                        </svg> */}
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  id="tabs--97-content-1"
                  role="tabpanel"
                  className="ud-tab-content tabs-module--tab-content--y-r7m"
                  data-purpose="tab-container"
                  aria-labelledby="tabs--97-tab-1"
                ></div>
                <div
                  id="tabs--97-content-2"
                  role="tabpanel"
                  className="ud-tab-content tabs-module--tab-content--y-r7m"
                  data-purpose="tab-container"
                  aria-labelledby="tabs--97-tab-2"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceOverview;
