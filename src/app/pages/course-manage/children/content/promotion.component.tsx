import { Images } from '@assets/images';
import React from 'react';

type Props = {};

const Promotions = (props: Props) => {
  return (
    <div>
      <div className="sub-header--flex-align-center--NUoNS sub-header--container--tI8ZM">
        <div className="sub-header--flex-align-center--NUoNS sub-header--content--GOfzF">
          <h2 data-purpose="page-title" className="ud-heading-serif-xl">
            Promotions
          </h2>
        </div>
      </div>
      <div className="main-content--content--JhVD-">
        <div data-purpose="coupons-route">
          <div
            data-purpose="coupons-price-alert"
            className="alert-banner-module--alert-banner--38ZcQ alert-banner-module--alert-banner-information--p8hvz percent-coupons-route--alert-banner--GvZo6"
          >
            <Images.FaCircleInfo className="ud-icon ud-icon-large ud-icon-color-neutral" />
            <div style={{ flex: '1 1 0%' }}>
              <div className="alert-banner-module--text-frame--t5nwh alert-banner-module--text-frame-with-icon--BhRkQ">
                <span className="ud-sr-only">information alert</span>
                <h2 className="ud-heading-md">
                  We have updated the coupon system, and there is more to come. Announcing new free coupon limits and
                  bulk coupon creation.
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://teach.udemy.com/october-2021-coupon-updates"
                    className="ud-link-underline"
                  >
                    Learn more
                  </a>
                </h2>
              </div>
            </div>
          </div>
          <div className="percent-coupons-route--referral-link-panel--InFAk">
            <h2 className="ud-heading-lg percent-coupons-route--heading--NGTui">Refer students</h2>
            <p>
              Any time a student uses this link, we will credit you with the sale.
              <a className="ud-link-underline" target="_blank" rel="noopener noreferrer" href="/support/229603968/">
                Learn more
              </a>
            </p>
            <div className="percent-coupons-route--referral-link--PERXf ud-form-group">
              <label className="ud-sr-only ud-form-label ud-heading-sm">Referral Link</label>
              <div className="text-input-with-addons--with-addons--60Asl">
                <div className="ud-text-input-container">
                  <input
                    aria-invalid="false"
                    id="form-group--77"
                    type="text"
                    className="ud-text-input ud-text-input-large ud-text-md"
                    value="https://www.udemy.com/course/draft/5832004/?referralCode=86488387AE2BC70096F1"
                  />
                  <button
                    type="button"
                    data-clipboard-text="https://www.udemy.com/course/draft/5832004/?referralCode=86488387AE2BC70096F1"
                    className="ud-btn ud-btn-large ud-btn-secondary ud-heading-md text-input-with-addons--addon--wB52-"
                    id="copy-button--79"
                  >
                    <span>Copy</span>
                  </button>
                  <div className="ud-text-input-box"></div>
                </div>
              </div>
            </div>
          </div>
          <h2 className="ud-heading-lg percent-coupons-route--heading--NGTui" data-purpose="coupons-header">
            Coupons
          </h2>
          <div className="coupon-creation--create-coupon-container--yPDF6">
            <p className="ud-heading-md">February coupons</p>
            <div className="coupon-creation--coupons-remaining--krcU1">
              <p className="ud-text-lg" data-purpose="coupons-creation-remaining">
                You cannot create coupons for a free course
              </p>
            </div>
          </div>
          <div>
            <div className="coupons-desktop--title-container--cCffb">
              <h3 className="ud-heading-md">Active/Scheduled coupons</h3>
              <a
                href="/instructor/multiple-coupons-creation/"
                className="ud-btn ud-btn-large ud-btn-link ud-text-md ud-link-underline"
              >
                <span>Create multiple coupons</span>
              </a>
            </div>
            <div className="coupons-desktop--no-results--ZXhGM">
              <p>No coupon found</p>
            </div>
          </div>
          <div>
            <div className="coupons-desktop--title-container--cCffb">
              <h3 className="ud-heading-md">Expired coupons</h3>
              <div className="coupons-desktop--search-coupons--8j185" data-purpose="coupons-search">
                <div className="ud-form-group">
                  <label className="ud-sr-only ud-form-label ud-heading-sm">Search coupon code</label>
                  <form className="text-input-form-module--text-input-form--tITHD">
                    <input
                      aria-invalid="false"
                      data-purpose="search-form-control"
                      placeholder="Search coupon code"
                      id="form-group--84"
                      type="text"
                      className="ud-text-input ud-text-input-large ud-text-md"
                      value=""
                    />
                    <button
                      type="submit"
                      className="ud-btn ud-btn-large ud-btn-primary ud-heading-md ud-btn-icon ud-btn-icon-large"
                    >
                      <Images.AiOutlineSearch className="ud-icon ud-icon-medium" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="coupons-desktop--no-results--ZXhGM">
              <p>No coupon found</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promotions;
