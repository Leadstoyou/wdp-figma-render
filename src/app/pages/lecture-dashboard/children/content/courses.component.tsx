import { Images } from '@assets/images';
import React from 'react';

type Props = {};

const Courses = (props: Props) => {
  const dropdownData = [
    { index: 0, label: 'Newest', order: '-created', isSelected: true },
    { index: 1, label: 'Oldest', order: 'created', isSelected: false },
    { index: 2, label: 'A-Z', order: 'title', isSelected: false },
    { index: 3, label: 'Z-A', order: '-title', isSelected: false },
  ];
  return (
    <div>
      <div className="instructor-main-heading ia-responsive-header--simple-container---JWkW">
        <h1 className="ud-heading-serif-xxl">Courses</h1>
        <button
          type="button"
          className="ud-btn ud-btn-large ud-btn-brand ud-heading-md courses--mobile-new-course-button--S253y"
          data-purpose="header-new-course"
        >
          <span>New course</span>
        </button>
      </div>
      <div className="courses--search-row--t-6fi">
        <div className="courses--search-wrapper---39KR">
          <div className="ud-form-group">
            <label className="ud-sr-only ud-form-label ud-heading-sm">Search your courses</label>
            <form className="text-input-form-module--text-input-form--tITHD">
              <input
                aria-invalid="false"
                data-purpose="search-my-courses"
                placeholder="Search your courses"
                id="form-group--3"
                type="text"
                className="ud-text-input ud-text-input-large ud-text-md"
                value="adsdsadasdsadas"
              />
              <button
                type="submit"
                className="ud-btn ud-btn-large ud-btn-primary ud-heading-md ud-btn-icon ud-btn-icon-large"
              >
                <Images.AiOutlineSearch className="ud-icon ud-icon-medium" />
              </button>
            </form>
          </div>
          <div className="popper-module--popper--mM5Ie">
            <button
              type="button"
              aria-label="Change the ordering of the courses"
              id="dropdown-trigger--5"
              aria-expanded="false"
              className="ud-btn ud-btn-large ud-btn-secondary ud-heading-md"
            >
              <span>Newest</span>

              <Images.MdKeyboardArrowDown className="ud-icon ud-icon-small" />
            </button>
            <div className="popper-module--popper-content--XE9z5" style={{ top: '100%', left: '0px', width: '20rem' }}>
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
                        <div className="ud-block-list-item-content">Newest</div>
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        className="ud-btn ud-btn-large ud-btn-ghost ud-text-sm ud-block-list-item ud-block-list-item-small ud-block-list-item-neutral"
                      >
                        <div className="ud-block-list-item-content">Oldest</div>
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        className="ud-btn ud-btn-large ud-btn-ghost ud-text-sm ud-block-list-item ud-block-list-item-small ud-block-list-item-neutral"
                      >
                        <div className="ud-block-list-item-content">A-Z</div>
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        className="ud-btn ud-btn-large ud-btn-ghost ud-text-sm ud-block-list-item ud-block-list-item-small ud-block-list-item-neutral"
                      >
                        <div className="ud-block-list-item-content">Z-A</div>
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        className="ud-btn ud-btn-large ud-btn-ghost ud-text-sm ud-block-list-item ud-block-list-item-small ud-block-list-item-neutral"
                      >
                        <div className="ud-block-list-item-content">Published first</div>
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        className="ud-btn ud-btn-large ud-btn-ghost ud-text-sm ud-block-list-item ud-block-list-item-small ud-block-list-item-neutral"
                      >
                        <div className="ud-block-list-item-content">Unpublished first</div>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          type="button"
          className="ud-btn ud-btn-large ud-btn-brand ud-heading-md courses--desktop-new-course-button--xCHTe"
          data-purpose="new-course-button"
        >
          <span>New course</span>
        </button>
      </div>
      <div>
        <div className="view-type-light courses--courses-list--60K3v"></div>
        <div className="ud-heading-lg courses--no-records--oxTrJ">No results found for "adsdsadasdsadas".</div>
      </div>
    </div>
  );
};

export default Courses;
