import React, { useState } from 'react';
import ReviewInDashboard from './review-dashboard.component';
import OverviewInDashboard from './overview-dashboard.component';

type Props = {};

const DashboardContent = (props: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleClickNav = (index: number) => {
    console.log('🚀 ~ handleClickNav ~ index:', index);
    document.getElementById(`tabs--1-content-${activeIndex}`)?.classList.toggle('tabs-module--active--2l5hb');
    document.getElementById(`tabs--1-content-${index}`)?.classList.toggle('tabs-module--active--2l5hb');
    setActiveIndex(index);
  };
  const tabNavigationData = [
    {
      label: 'Overview',
      isClicked: true,
    },
    {
      label: 'Reviews',
      isClicked: false,
    },
  ];
  const contentData = [
    {
      element: <OverviewInDashboard />,
      data: [],
    },
    {
      element: <ReviewInDashboard />,
      data: [],
    },
  ];
  return (
    <div className="app--row--1ydzX app--dashboard--dXVM6">
      <div className="app--row-content--1lH7B">
        <div className="app--dashboard-content--r2Ce9">
          <section className="dashboard--tabs-container--35kox">
            <div className="tabs-module--tabs-container--f-q9T">
              <div
                className="ud-tabs-nav-buttons tabs-module--tabs-nav-buttons--1xMXh"
                role="tablist"
                data-purpose="tab-nav-buttons"
              >
                <section aria-label="Tab Navigation" className="carousel-module--container--27wzs">
                  <div className="carousel-module--scroll-port--28Dow carousel-module--grid--3Qw6j carousel-module--scroll-lock--1Ys-j">
                    {tabNavigationData.map((item, index) => (
                      <div data-index={index} className="carousel-module--scroll-item--2CpA_" key={index}>
                        <div
                          className={`ud-nav-button-container tabs-module--nav-button-container--u4wUp ${
                            index === activeIndex && 'ud-nav-button-container-active tabs-module--active--2l5hb'
                          }`}
                        >
                          <h2>
                            <button
                              type="button"
                              id="tabs--1-tab-1"
                              className={`ud-btn ud-btn-large ud-btn-ghost ud-heading-md ud-nav-button tabs-module--nav-button--3RilJ ${
                                index === activeIndex && 'ud-nav-button-active tabs-module--active--2l5hb'
                              }`}
                              onClick={() => handleClickNav(index)}
                            >
                              <span>{item.label}</span>
                            </button>
                          </h2>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
              {contentData.map((item, index) => (
                <div
                  key={index}
                  id={`tabs--1-content-${index}`}
                  className={`ud-tab-content tabs-module--tab-content--30h0i ${
                    activeIndex === index && 'tabs-module--active--2l5hb'
                  } `}
                >
                  {React.cloneElement(item.element, { data: item.data })}
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;
