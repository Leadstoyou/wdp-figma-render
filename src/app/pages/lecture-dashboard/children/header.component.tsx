import { Images } from '@assets/images';
import React from 'react';

type Props = {};

const Header = (props: Props) => {
  return (
    <div
      className="ud-text-sm desktop-header-module--header--a5wri desktop-instructor-header-module--header--JdaD8"
      data-purpose="header"
    >
      <div style={{ flex: '1 1 0%' }}></div>
      <div className="popper-module--popper--mM5Ie desktop-header-module--gap-button--4drhI">
        <a
          href="/"
          data-testid="instructor-dropdown"
          id="popper-trigger--5"
          aria-describedby="popper-content--6"
          className="ud-btn ud-btn-large ud-btn-ghost ud-heading-md js-header-button desktop-header-module--dropdown-button--ipas9"
        >
          <span className="ud-text-sm desktop-header-module--dropdown-button-text--Sq73l">Student</span>
        </a>
        <div
          className="popper-module--popper-content--XE9z5 desktop-header-module--dropdown--pZls3"
          id="popper-content--6"
          style={{ top: '100%', right: '0px' }}
        >
          <div className="popper-module--animation-wrapper--tM0UK">
            <div className="popover-module--popover--HrSFz popover-module--popover-bottom--1ghkR">
              <div className="popover-module--inner--yQvGI">
                <div className="ud-header-menu desktop-header-module--menu--oIYSV" data-testid="header-menu">
                  <div className="panel-menu-module--panel--FrCW7" data-testid="switch-view-panel">
                    Switch to the student view here - get back to the courses you’re taking.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="popper-module--popper--mM5Ie">
        <a
          href="/instructor/user/view-notifications/"
          id="popper-trigger--7"
          aria-expanded="false"
          className="ud-btn ud-btn-large ud-btn-ghost ud-heading-md ud-btn-icon ud-btn-icon-large js-header-button desktop-header-module--dropdown-button--ipas9"
        >
          <Images.IoIosNotificationsOutline className="ud-icon ud-icon-medium ud-icon-color-neutral" />
          <span
            data-testid="unread-activity-notifications-badge"
            className="desktop-header-module--dropdown-dot-badge--90r5I notification-badge-module--ud-notification-badge--dQC8r notification-badge-module--ud-notification-dot--Tfhiv"
            title="3 unread notifications"
          ></span>
        </a>
        <div
          className="popper-module--popper-content--XE9z5 desktop-header-module--dropdown--pZls3"
          id="popper-content--8"
          aria-labelledby="popper-trigger--7"
          style={{ top: '100%', right: '0px' }}
        >
          <div className="popper-module--animation-wrapper--tM0UK">
            <div className="popover-module--popover--HrSFz popover-module--popover-bottom--1ghkR">
              <div className="popover-module--inner--yQvGI">
                <div className="ud-header-menu desktop-header-module--menu--oIYSV" data-testid="header-menu">
                  <div className="notification-items-module--notification-items--Mfzqz">
                    <div className="panel-menu-module--section-heading--rus-R panel-menu-module--gap-bottom---DDBJ">
                      <div className="ud-heading-lg panel-menu-module--section-heading-title--DpCwA">Notifications</div>
                      <a
                        className="ud-heading-sm panel-menu-module--section-heading-link--x-Yyg"
                        href="/instructor/account/notifications/"
                      >
                        Settings
                      </a>
                    </div>
                    <div className="tabs-module--tabs-container---clC6 tabs-module--full-width--63jhA">
                      <div
                        className="ud-tabs-nav-buttons tabs-module--tabs-nav-buttons--R48bp"
                        role="tablist"
                        data-purpose="tab-nav-buttons"
                      >
                        <div className="ud-nav-button-container tabs-module--nav-button-container--UQiPm ud-nav-button-container-active tabs-module--active--WZUDQ">
                          <button
                            type="button"
                            id="tabs--171-tab-0"
                            aria-selected="true"
                            role="tab"
                            className="ud-btn ud-btn-medium ud-btn-ghost ud-heading-sm ud-nav-button tabs-module--nav-button--DtB8V ud-nav-button-active tabs-module--active--WZUDQ"
                          >
                            <span>Instructor (3)</span>
                          </button>
                        </div>
                        <div className="ud-nav-button-container tabs-module--nav-button-container--UQiPm">
                          <button
                            type="button"
                            id="tabs--171-tab-1"
                            aria-selected="false"
                            role="tab"
                            className="ud-btn ud-btn-medium ud-btn-ghost ud-heading-sm ud-nav-button tabs-module--nav-button--DtB8V"
                          >
                            <span>Student</span>
                          </button>
                        </div>
                      </div>
                      <div
                        id="tabs--171-content-0"
                        role="tabpanel"
                        className="ud-tab-content tabs-module--tab-content--y-r7m tabs-module--active--WZUDQ"
                        data-purpose="tab-container"
                        aria-labelledby="tabs--171-tab-0"
                      >
                        <div
                          data-testid="notification-item"
                          className="panel-menu-module--item--XoZxL ud-custom-focus-visible item-card-module--item-card--4sNhH"
                        >
                          <div className="ud-custom-focus-target item-card-module--image-wrapper--7LUh0">
                            <img
                              src="https://img-b.udemycdn.com/user/100x100/636_b1f3_7.jpg"
                              alt=""
                              className="ud-avatar ud-avatar-image"
                              width="64"
                              height="64"
                              loading="eager"
                              style={{ width: '6.4rem', height: '6.4rem' }}
                            />
                          </div>
                          <div className="notification-item-module--notification-info--t-zby">
                            <a
                              href="/course/5832004/manage/curriculum/"
                              className="ud-heading-sm notification-item-module--notification-title--sogCj ud-focus-visible-target item-card-module--item-card-title--UbcUM"
                            >
                              <span
                                data-purpose="safely-set-inner-html:notification-item:notification-template"
                                data-testid="safely-set-inner-html:notification-item:notification-template"
                              >
                                The quiz that you requested to be deleted is now deleted.
                              </span>
                            </a>
                            <div className="ud-text-sm notification-item-module--notification-timestamp--dnP5L">
                              2 days ago
                            </div>
                            <span
                              data-testid="notification-badge"
                              className="notification-item-module--unread-dot--mDZ3x notification-badge-module--ud-notification-badge--dQC8r notification-badge-module--ud-notification-dot--Tfhiv"
                              title="This notification is not read"
                            ></span>
                          </div>
                        </div>
                        <div
                          data-testid="notification-item"
                          className="panel-menu-module--item--XoZxL ud-custom-focus-visible item-card-module--item-card--4sNhH"
                        >
                          <div className="ud-custom-focus-target item-card-module--image-wrapper--7LUh0">
                            <img
                              src="https://img-b.udemycdn.com/user/100x100/636_b1f3_7.jpg"
                              alt=""
                              className="ud-avatar ud-avatar-image"
                              width="64"
                              height="64"
                              loading="eager"
                              style={{ width: '6.4rem', height: '6.4rem' }}
                            />
                          </div>
                          <div className="notification-item-module--notification-info--t-zby">
                            <a
                              href="/course/5832004/manage/curriculum/"
                              className="ud-heading-sm notification-item-module--notification-title--sogCj ud-focus-visible-target item-card-module--item-card-title--UbcUM"
                            >
                              <span
                                data-purpose="safely-set-inner-html:notification-item:notification-template"
                                data-testid="safely-set-inner-html:notification-item:notification-template"
                              >
                                The lectures that you requested to be deleted are now deleted.
                              </span>
                            </a>
                            <div className="ud-text-sm notification-item-module--notification-timestamp--dnP5L">
                              3 days ago
                            </div>
                            <span
                              data-testid="notification-badge"
                              className="notification-item-module--unread-dot--mDZ3x notification-badge-module--ud-notification-badge--dQC8r notification-badge-module--ud-notification-dot--Tfhiv"
                              title="This notification is not read"
                            ></span>
                          </div>
                        </div>
                        <div className="panel-menu-module--footer--mjYSO">
                          <div className="notification-items-module--footer-btns--2ag19">
                            <div className="notification-items-module--footer-btn-wrapper--emtQs">
                              <button
                                type="button"
                                className="ud-btn ud-btn-large ud-btn-ghost ud-heading-md panel-menu-module--cta--G-aTQ"
                                data-testid="mark-all-notifications-as-read"
                              >
                                <span>Mark all as read</span>
                              </button>
                            </div>
                            <div className="notification-items-module--footer-btn-wrapper--emtQs">
                              <a
                                href="/instructor/user/view-notifications/"
                                className="ud-btn ud-btn-large ud-btn-secondary ud-heading-md panel-menu-module--cta--G-aTQ"
                                data-testid="see-all-notifications"
                              >
                                <span>See all</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        id="tabs--171-content-1"
                        role="tabpanel"
                        className="ud-tab-content tabs-module--tab-content--y-r7m"
                        data-purpose="tab-container"
                        aria-labelledby="tabs--171-tab-1"
                      >
                        <div className="ud-text-md panel-menu-module--panel--FrCW7 panel-menu-module--no-items--O75Tt notification-items-module--panel--xkfl9">
                          No notifications.
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
      <div className="popper-module--popper--mM5Ie list-menu-module--list-menu-container--8oKTW">
        <a
          href="/instructor/profile/basic-information/"
          aria-label="My profile"
          data-purpose="user-dropdown"
          id="popper-trigger--9"
          aria-expanded="false"
          className="ud-btn ud-btn-large ud-btn-ghost ud-heading-md js-header-button desktop-header-module--dropdown-button--ipas9"
        >
          <img
            aria-hidden="true"
            src="https://img-c.udemycdn.com/user/75x75/257515010_0a9a.jpg"
            alt=""
            className="user-profile-dropdown-module--dropdown-button-avatar--CffDQ ud-avatar ud-avatar-image"
            width="32"
            height="32"
            loading="eager"
            style={{ width: '3.2rem', height: '3.2rem' }}
          />
          <span
            data-testid="profile-badge"
            className="desktop-header-module--dropdown-dot-badge--90r5I notification-badge-module--ud-notification-badge--dQC8r notification-badge-module--ud-notification-dot--Tfhiv"
            title="You have alerts"
          ></span>
        </a>
        <div
          className="popper-module--popper-content--XE9z5 desktop-header-module--dropdown--pZls3"
          id="popper-content--10"
          aria-labelledby="popper-trigger--9"
          style={{ top: '100%', right: '0px' }}
        >
          <div className="popper-module--animation-wrapper--tM0UK">
            <div className="popover-module--popover--HrSFz popover-module--popover-bottom--1ghkR">
              <div className="popover-module--inner--yQvGI">
                <div className="ud-header-menu desktop-header-module--menu--oIYSV" data-testid="header-menu">
                  <a
                    href="/instructor/profile/basic-information/"
                    className="user-profile-dropdown-module--user-section--WncyJ"
                  >
                    <img
                      src="https://img-c.udemycdn.com/user/75x75/257515010_0a9a.jpg"
                      alt=""
                      className="ud-avatar ud-avatar-image"
                      width="64"
                      height="64"
                      loading="eager"
                      style={{ width: '6.4rem', height: '6.4rem' }}
                    />
                    <div className="user-profile-dropdown-module--user-details--gQuWe">
                      <div>
                        <div className="ud-heading-md">Trịnh Tiến Đạt</div>
                        <div className="ud-text-xs user-profile-dropdown-module--email--eLeEE">
                          trinhtiendat2510@gmail.com
                        </div>
                      </div>
                    </div>
                  </a>
                  <ul className="ud-unstyled-list ud-block-list list-menu-module--section--l6I-M">
                    <li>
                      <a
                        href="/"
                        className="ud-btn ud-btn-large ud-btn-ghost ud-text-sm ud-block-list-item ud-block-list-item-small ud-block-list-item-neutral"
                      >
                        <div className="ud-block-list-item-content">Student</div>
                      </a>
                    </li>
                  </ul>
                  <ul className="ud-unstyled-list ud-block-list list-menu-module--section--l6I-M">
                    <li>
                      <a
                        href="/instructor/user/view-notifications/"
                        className="ud-btn ud-btn-large ud-btn-ghost ud-text-sm ud-block-list-item ud-block-list-item-small ud-block-list-item-neutral"
                      >
                        <div className="ud-block-list-item-content">Notifications</div>
                        <span
                          data-testid="unread-activity-notifications-badge"
                          className="ud-block-list-item-icon notification-badge-module--ud-notification-badge--dQC8r notification-badge-module--ud-notification-counter--hNzUv"
                          title="3 unread notifications"
                        >
                          3
                        </span>
                      </a>
                    </li>
                  </ul>
                  <ul className="ud-unstyled-list ud-block-list list-menu-module--section--l6I-M">
                    <li>
                      <a
                        href="/instructor/account/security/"
                        className="ud-btn ud-btn-large ud-btn-ghost ud-text-sm ud-block-list-item ud-block-list-item-small ud-block-list-item-neutral"
                      >
                        <div className="ud-block-list-item-content">Account settings</div>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/instructor/user/edit-instructor-info/"
                        className="ud-btn ud-btn-large ud-btn-ghost ud-text-sm ud-block-list-item ud-block-list-item-small ud-block-list-item-neutral"
                      >
                        <div className="ud-block-list-item-content">Payout &amp; tax settings</div>
                      </a>
                    </li>
                  </ul>
                  <ul className="ud-unstyled-list ud-block-list list-menu-module--section--l6I-M">
                    <li>
                      <a
                        href="/user/trinh-tien-dat-10/"
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        className="ud-btn ud-btn-large ud-btn-ghost ud-text-sm ud-block-list-item ud-block-list-item-small ud-block-list-item-neutral"
                      >
                        <div className="ud-block-list-item-content">Public profile</div>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/instructor/profile/basic-information/"
                        className="ud-btn ud-btn-large ud-btn-ghost ud-text-sm ud-block-list-item ud-block-list-item-small ud-block-list-item-neutral"
                      >
                        <div className="ud-block-list-item-content">Edit profile</div>
                      </a>
                    </li>
                  </ul>
                  <ul className="ud-unstyled-list ud-block-list list-menu-module--section--l6I-M">
                    <li>
                      <a
                        href="/support/?type=instructor"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ud-btn ud-btn-large ud-btn-ghost ud-text-sm ud-block-list-item ud-block-list-item-small ud-block-list-item-neutral"
                      >
                        <div className="ud-block-list-item-content">Help</div>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/user/logout/?h=3%40cjVN9AEexh6NhfPcuqxitvVHs4fDnSFL3PZ5GU_QpKEE5P2f_qcGhZI35XSVu8teJpIz"
                        className="ud-btn ud-btn-large ud-btn-ghost ud-text-sm ud-block-list-item ud-block-list-item-small ud-block-list-item-neutral"
                      >
                        <div className="ud-block-list-item-content">Log out</div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
