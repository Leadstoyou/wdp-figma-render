import React from 'react';

type Props = {};

const PerformanceReviews = (props: Props) => {
  return (
    <div>
      <div className="instructor-main-heading ia-responsive-header--container--hFCZQ">
        <h1 className="ud-heading-serif-xxl ia-responsive-header--title--JBkCr">Reviews</h1>
        <div className="ia-responsive-header--title-dropdown--GO-vD"></div>
        <div className="filter-bar--filters-container--mYY2d">
          <div className="filter-bar--left-options--eacs8">
            <label className="ud-toggle-input-container ud-text-sm">
              <input
                data-purpose="not-answered-checkbox"
                className="ud-sr-only ud-real-toggle-input"
                id="checkbox--126"
                type="checkbox"
              />
              {/* <svg
                aria-hidden="true"
                focusable="false"
                className="ud-icon ud-icon-xsmall ud-fake-toggle-input ud-fake-toggle-checkbox"
              >
                <use xlink:href="#icon-tick"></use>
              </svg> */}
              Not answered
            </label>
            <label className="ud-toggle-input-container ud-text-sm">
              <input
                data-purpose="has-commented-checkbox"
                className="ud-sr-only ud-real-toggle-input"
                id="checkbox--127"
                type="checkbox"
              />
              {/* <svg
                aria-hidden="true"
                focusable="false"
                className="ud-icon ud-icon-xsmall ud-fake-toggle-input ud-fake-toggle-checkbox"
              >
                <use xlink:href="#icon-tick"></use>
              </svg> */}
              Has a comment
            </label>
            <div className="popper-module--popper--mM5Ie">
              <button
                type="button"
                className="ud-btn ud-btn-medium ud-btn-ghost ud-text-sm ud-link-neutral"
                id="dropdown-trigger--128"
                aria-expanded="false"
              >
                <span>Rating:</span>
                <span className="ud-text-bold">All</span>
                {/* <svg aria-hidden="true" focusable="false" className="ud-icon ud-icon-xsmall">
                  <use xlink:href="#icon-expand"></use>
                </svg> */}
              </button>
              <div
                id="popper-content--130"
                aria-labelledby="dropdown-trigger--128"
                className="popper-module--popper-content--XE9z5"
                style={{ top: '100%', left: '0px', width: '26rem' }}
              >
                <div className="popper-module--animation-wrapper--tM0UK">
                  <div
                    className="dropdown-module--menu---dCM1 dropdown-module--dropdown-menu--7Qc2I"
                    style={{ maxHeight: '28rem' }}
                  >
                    <ul className="ud-unstyled-list ud-block-list">
                      <li>
                        <label className="ud-block-list-item ud-block-list-item-small ud-block-list-item-neutral ud-toggle-input-container ud-text-sm">
                          <input
                            name="1"
                            data-purpose="star-menu-item-1"
                            className="ud-sr-only ud-real-toggle-input"
                            id="checkbox--131"
                            type="checkbox"
                          />
                          {/* <svg
                            aria-hidden="true"
                            focusable="false"
                            className="ud-icon ud-icon-xsmall ud-fake-toggle-input ud-fake-toggle-checkbox"
                          >
                            <use xlink:href="#icon-tick"></use>
                          </svg> */}
                          <div className="ud-block-list-item-content">1 star</div>
                        </label>
                      </li>
                      <li>
                        <label className="ud-block-list-item ud-block-list-item-small ud-block-list-item-neutral ud-toggle-input-container ud-text-sm">
                          <input
                            name="2"
                            data-purpose="star-menu-item-2"
                            className="ud-sr-only ud-real-toggle-input"
                            id="checkbox--132"
                            type="checkbox"
                          />
                          {/* <svg
                            aria-hidden="true"
                            focusable="false"
                            className="ud-icon ud-icon-xsmall ud-fake-toggle-input ud-fake-toggle-checkbox"
                          >
                            <use xlink:href="#icon-tick"></use>
                          </svg> */}
                          <div className="ud-block-list-item-content">2 stars</div>
                        </label>
                      </li>
                      <li>
                        <label className="ud-block-list-item ud-block-list-item-small ud-block-list-item-neutral ud-toggle-input-container ud-text-sm">
                          <input
                            name="3"
                            data-purpose="star-menu-item-3"
                            className="ud-sr-only ud-real-toggle-input"
                            id="checkbox--133"
                            type="checkbox"
                          />
                          {/* <svg
                            aria-hidden="true"
                            focusable="false"
                            className="ud-icon ud-icon-xsmall ud-fake-toggle-input ud-fake-toggle-checkbox"
                          >
                            <use xlink:href="#icon-tick"></use>
                          </svg> */}
                          <div className="ud-block-list-item-content">3 stars</div>
                        </label>
                      </li>
                      <li>
                        <label className="ud-block-list-item ud-block-list-item-small ud-block-list-item-neutral ud-toggle-input-container ud-text-sm">
                          <input
                            name="4"
                            data-purpose="star-menu-item-4"
                            className="ud-sr-only ud-real-toggle-input"
                            id="checkbox--134"
                            type="checkbox"
                          />
                          {/* <svg
                            aria-hidden="true"
                            focusable="false"
                            className="ud-icon ud-icon-xsmall ud-fake-toggle-input ud-fake-toggle-checkbox"
                          >
                            <use xlink:href="#icon-tick"></use>
                          </svg> */}
                          <div className="ud-block-list-item-content">4 stars</div>
                        </label>
                      </li>
                      <li>
                        <label className="ud-block-list-item ud-block-list-item-small ud-block-list-item-neutral ud-toggle-input-container ud-text-sm">
                          <input
                            name="5"
                            data-purpose="star-menu-item-5"
                            className="ud-sr-only ud-real-toggle-input"
                            id="checkbox--135"
                            type="checkbox"
                          />
                          {/* <svg
                            aria-hidden="true"
                            focusable="false"
                            className="ud-icon ud-icon-xsmall ud-fake-toggle-input ud-fake-toggle-checkbox"
                          >
                            <use xlink:href="#icon-tick"></use>
                          </svg> */}
                          <div className="ud-block-list-item-content">5 stars</div>
                        </label>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="popper-module--popper--mM5Ie">
              <button
                type="button"
                className="ud-btn ud-btn-medium ud-btn-ghost ud-text-sm ud-link-neutral"
                id="dropdown-trigger--136"
                aria-expanded="false"
              >
                <span>Sort by:</span>
                <span className="ud-text-bold">Newest first</span>
                {/* <svg aria-hidden="true" focusable="false" className="ud-icon ud-icon-xsmall">
                  <use xlink:href="#icon-expand"></use>
                </svg> */}
              </button>
              <div
                id="popper-content--138"
                aria-labelledby="dropdown-trigger--136"
                className="popper-module--popper-content--XE9z5"
                style={{ top: '100%', left: '0px', width: '26rem' }}
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
                          <div className="ud-block-list-item-content">Newest first</div>
                        </button>
                      </li>
                      <li>
                        <button
                          type="button"
                          className="ud-btn ud-btn-large ud-btn-ghost ud-text-sm ud-block-list-item ud-block-list-item-small ud-block-list-item-neutral"
                        >
                          <div className="ud-block-list-item-content">Oldest first</div>
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
            data-purpose="open-confirm-modal"
            className="ud-btn ud-btn-medium ud-btn-secondary ud-heading-sm"
          >
            <span>Export to CSV...</span>
          </button>
        </div>
      </div>
      <div>
        <div className="instructor-alerts--instructor-alerts--wZ1YF">
          <div className="alert-banner-module--alert-banner--38ZcQ alert-banner-module--alert-banner-information--p8hvz">
            {/* <svg aria-hidden="true" focusable="false" className="ud-icon ud-icon-large ud-icon-color-neutral">
              <use xlink:href="#icon-info"></use>
            </svg> */}
            <div style={{ flex: '1 1 0%' }}>
              <div className="alert-banner-module--text-frame--t5nwh alert-banner-module--text-frame-with-icon--BhRkQ">
                <span className="ud-sr-only">information alert</span>
                <h2 className="ud-heading-md">
                  It can take up to 48 hours for approved student ratings to show on your course landing page.
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="reviews-route--no-reviews--0FqOJ" data-purpose="no-reviews-found">
          No reviews found
        </div>
      </div>
    </div>
  );
};

export default PerformanceReviews;
