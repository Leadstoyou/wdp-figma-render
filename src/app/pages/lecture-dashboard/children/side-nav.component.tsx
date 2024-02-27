import { Images } from '@assets/images';
import { Link } from 'react-router-dom';
import logoApp from '@assets/images/logo/logoApp.jpg';
import { useEffect, useState } from 'react';
type Props = {
  sidebarIndex?: number;
};

const SideNav = ({ sidebarIndex }: Props) => {
  const sideNavData = [
    {
      index: 0,
      label: 'Courses',
      url: '/instructor/courses/',
      icon: <Images.MdOndemandVideo className="ud-icon ud-icon-medium" />,
    },
    {
      index: 1,
      label: 'Communication',
      url: '/instructor/communication/qa',
      icon: <Images.FaFacebookMessenger className="ud-icon ud-icon-medium" />,
    },
    {
      index: 2,
      label: 'Performance',
      url: '/instructor/performance/overview',
      icon: <Images.GrDocumentPerformance className="ud-icon ud-icon-medium" />,
    },
  ];
  const SecondaryMenuData = [
    {
      navIndex: [0],
      data: [],
    },
    {
      navIndex: [1, 3],
      data: [
        {
          index: 1,
          url: '/instructor/communication/qa',
          label: 'Q&A',
        },
        { index: 3, url: '/instructor/communication/messages', label: 'Messages' },
      ],
    },
    {
      navIndex: [2, 4, 5],
      data: [
        {
          index: 2,
          url: '/instructor/performance/overview',
          label: 'Overview',
        },
        { index: 4, url: '/instructor/performance/students', label: 'Students' },
        { index: 5, url: '/instructor/performance/reviews', label: 'Reviews' },
      ],
    },
  ];
  const [sideNavIndex, setSideNavIndex] = useState<number>(0);
  const [secondaryMenuValue, setSecondaryMenuValue] = useState<{ index: number; url: string; label: string }[]>([]);

  useEffect(() => {
    if (sidebarIndex && sidebarIndex !== -1) {
      setSideNavIndex(sidebarIndex);
    }
  }, [sidebarIndex]);

  useEffect(() => {
    const matchingData = SecondaryMenuData.find((item) => item.navIndex.includes(sideNavIndex));
    matchingData ? setSecondaryMenuValue(matchingData.data) : setSecondaryMenuValue([]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sideNavIndex]);
  return (
    <div className="instructor-side-nav">
      <div
        data-purpose="side-nav"
        className={`side-nav--side-nav--kWuu2 ${secondaryMenuValue.length !== 0 && 'side-nav--side-nav-open--V7ish'}`}
      >
        <div className="side-nav--side-nav-inner--TrfVn">
          <div className="side-nav--primary-menu--gihQ-">
            <ul className="ud-unstyled-list side-nav--menu--kRZ7l">
              <li>
                <Link to="/instructor" className="side-nav--nav-button--H6cSp side-nav--logo-nav-button--pAYC5">
                  <img
                    src={logoApp}
                    alt="Udemy"
                    width="91"
                    height="34"
                    data-purpose="udemy-brand-logo"
                    loading="lazy"
                  />
                </Link>
              </li>

              {sideNavData.map((item, index) => (
                <li data-purpose="side-nav-item" key={index}>
                  <Link
                    to={item.url}
                    className={`ud-btn ud-btn-large ud-btn-link ud-heading-md side-nav--nav-button--H6cSp ${
                      SecondaryMenuData.find((item) => item.navIndex.includes(sideNavIndex))?.navIndex.includes(
                        item.index,
                      ) && 'side-nav--active--M2Mw4'
                    }`}
                    onClick={() => setSideNavIndex(item.index)}
                  >
                    {item.icon}
                    <span className="side-nav--title--P8jur">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {secondaryMenuValue.length !== 0 && (
            <ul className="ud-unstyled-list side-nav--menu--kRZ7l side-nav--secondary-menu--vGZ32">
              {secondaryMenuValue.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.url}
                    className={`ud-btn ud-btn-large ud-btn-link ud-text-md side-nav--subnav-button--lNso- ${
                      sideNavIndex === item.index && 'side-nav--active--M2Mw4'
                    }`}
                    onClick={() => setSideNavIndex(item.index)}
                  >
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default SideNav;
