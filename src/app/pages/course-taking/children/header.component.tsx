import { Images } from '@assets/images';
import { CircularProgress } from '@nextui-org/react';
import { Link } from 'react-router-dom';
import { PATHS as path } from '@app/common/constants/common.const';
import logoApp from '@assets/images/logo/logoApp.jpg';
type Props = {};

const Header = (props: Props) => {
  return (
    <>
      <div className="app--row--1ydzX app--header--3crNp">
        <div className="app--row-content--1lH7B">
          <header className="header--header--3k4a7">
            <Link
              to={path.HOMEPAGE}
              className="desktop-header-module--flex-middle--1e7c8 desktop-header-module--logo--2Qf0r "
            >
              <img src={logoApp} alt="3DHA" width="72" height="34" loading="lazy" className="rounded-[50%]" />
            </Link>
            <div className="header--vertical-divider--C09_B"></div>
            <div className="header--flex--2ziU4 header--header-title--2fB3e">
              <h1 data-purpose="course-header-title" className="header--course-title--tHmMe">
                <Link
                  className="ud-text-md header--header-text--3Z4po header--header-link--1gRxA truncate-with-tooltip--ellipsis--2-jEx"
                  to="/course/chatgpt-quick-guide-prompt-engineering-plugins-and-more/"
                >
                  ChatGPT Quick Guide - Prompt Engineering, Plugins, and more!
                </Link>
              </h1>
              <div className="header--flex--2ziU4"></div>
            </div>

            <div className="popper-module--popper--2BpLn">
              <button
                type="button"
                className="ud-btn ud-btn-large ud-btn-link ud-text-sm progress--progress-btn--3q_tr"
                id="popper-trigger--30"
                aria-expanded="false"
              >
                <CircularProgress size={'md'} value={50} color="success" />
                <span
                  className="progress--progress-label--o_ZVe progress--progress-text--2kONy"
                  data-purpose="progress-label"
                >
                  Your progress
                </span>
                <Images.CiHeart className="ud-icon ud-icon-small progress--progress-text--2kONy" />
              </button>
              <div
                id="popper-content--31"
                aria-labelledby="popper-trigger--30"
                className="popper-module--popper-content--3cLBV"
                style={{ top: '100%', left: '50%', transform: 'translateX(-50%)' }}
              >
                <div className="popper-module--animation-wrapper--2ogNt">
                  <div className="popover-module--popover--1kskS popover-module--popover-bottom--N6gdN popover-module--popover-padding--DD0iQ">
                    <div className="popover-module--inner--Sbv-I">
                      <div className="progress-popover-content--container--1SoAL" role="status">
                        <div data-purpose="progress-popover-text" className="ud-heading-sm">
                          1 of 25 complete.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="resource-context-menu--resource-context-menu-options--15b8m"
              data-purpose="options-dropdown"
            >
              <button
                type="button"
                data-purpose="social-share-button"
                className="ud-btn ud-btn-medium ud-btn-white-outline ud-heading-sm"
                aria-label="Share this course"
              >
                <span>Share</span>
                <Images.FaShare className="ud-icon ud-icon-xsmall" />
              </button>
              <div className="popper-module--popper--2BpLn">
                <button
                  type="button"
                  id="dropdown-trigger--40"
                  aria-expanded="false"
                  className="ud-btn ud-btn-medium ud-btn-white-outline ud-heading-sm ud-btn-icon ud-btn-icon-medium"
                >
                  <Images.BsThreeDotsVertical className="ud-icon ud-icon-small" />
                </button>
              </div>
            </div>
          </header>
        </div>
      </div>
    </>
  );
};

export default Header;
