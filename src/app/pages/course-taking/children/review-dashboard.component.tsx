import { Images } from '@assets/images';
import React from 'react';

type Props = {
  data?: any;
};

const ReviewInDashboard = ({ data }: Props) => {
  return (
    <div className="mx-auto max-w-screen-md pt-10 px-6">
      <div>
        <div className="component-margin">
          <span id="reviews" className="in-page-offset-anchor"></span>
          <div>
            <h2 className="ud-heading-xl reviews-section--title--kv27S">Student feedback</h2>
            <div data-purpose="ratings-and-reviews">
              <div className="reviews-section--stats-container--XZraa">
                <div data-purpose="ratings-and-reviews">
                  <div className="review-summary-widget--stats-container--w5afL">
                    <div className="ud-text-md review-summary-widget--average-container--pulU8">
                      <div className="ud-heading-xxxl review-summary-widget--average-number--aEces">4.5</div>
                      <div className="review-summary-widget--average-stars--BswC4">
                        <span className="star-rating-module--star-wrapper--i1cJH star-rating-module--large--OJtSv flex">
                          <span className="ud-sr-only">Rating: 4.526502 out of 5</span>
                          <Images.IoMdStar color="yellow" width={'12px'} />
                          <Images.IoMdStar color="yellow" width={'12px'} />
                          <Images.IoMdStar color="yellow" width={'12px'} />
                          <Images.IoMdStar color="yellow" width={'12px'} />
                          <Images.IoMdStar color="yellow" width={'12px'} />
                        </span>
                      </div>
                      <p className="ud-heading-lg review-summary-widget--average-rating-text--pW38D">Course Rating</p>
                    </div>
                    <div className="review-summary-widget--rates--ICpk4 review-summary-widget--with-average-rating--5nUNp">
                      {Array.from({ length: 5 }, (_, index) => (
                        <button
                          type="button"
                          data-purpose="rate-gauge-2"
                          aria-pressed="false"
                          className="ud-btn ud-btn-small ud-btn-link ud-heading-xs review-summary-widget--rates-row--P-V-i"
                        >
                          <span className="review-summary-widget--rate-gauge--tiqEv">
                            <span className="review-summary-widget--rate-gauge--bg--YM9ij">
                              <span
                                className="review-summary-widget--rate-gauge--fill--76tNk"
                                style={{ width: '1%' }}
                              ></span>
                            </span>
                          </span>
                          <span className="star-rating-module--star-wrapper--i1cJH star-rating-module--large--OJtSv flex">
                            <span className="ud-sr-only">Rating: 2 out of 5</span>
                            <Images.IoMdStar color="yellow" width={'20px'} />
                            <Images.IoMdStar color="yellow" width={'20px'} />
                            <Images.IoMdStar color="yellow" width={'20px'} />
                            <Images.IoMdStar color="yellow" width={'20px'} />
                            <Images.IoMdStar color="yellow" width={'20px'} />
                          </span>
                          <span className="ud-text-sm review-summary-widget--rate-percent--nYEKg">
                            <span data-purpose="percent-label">1%</span>
                          </span>
                          <span className="review-summary-widget--rate-clear--fL1Ak"></span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div data-purpose="landing-page-review-list">
                    <div className="reviews-section--review-container--alO-A">
                      <div className="individual-review--individual-review--0TT8V" data-purpose="individual-review">
                        <div className="individual-review--individual-review-author-avatar--5UwYe">
                          <img
                            data-purpose="avatar"
                            src="https://img-b.udemycdn.com/user/50x50/213875932_af60.jpg"
                            alt=""
                            className="ud-avatar ud-avatar-image"
                            width="48"
                            height="48"
                            loading="lazy"
                            style={{ width: '4.8rem', height: '4.8rem' }}
                          />
                        </div>
                        <div className="individual-review--individual-review-content--rQ7mO">
                          <div className="individual-review--individual-review__name-container--EOu27">
                            <div
                              className="ud-heading-md individual-review--individual-review__name--Fx5DM"
                              data-purpose="review-detail-user-name"
                            >
                              Stjepan M.
                            </div>
                          </div>
                          <div className="individual-review--individual-review__detail--LrlPQ">
                            <span className="star-rating-module--star-wrapper--i1cJH star-rating-module--large--OJtSv flex">
                              <span className="ud-sr-only">Rating: 5.0 out of 5</span>
                              <Images.IoMdStar color="yellow" width={'12px'} />
                              <Images.IoMdStar color="yellow" width={'12px'} />
                              <Images.IoMdStar color="yellow" width={'12px'} />
                              <Images.IoMdStar color="yellow" width={'12px'} />
                              <Images.IoMdStar color="yellow" width={'12px'} />
                            </span>
                            <span className="ud-text-sm individual-review--individual-review__detail-date---a1CH">
                              2 months ago
                            </span>
                          </div>
                          <div className="show-more-module--container--teP7C">
                            <span data-type="checkbox" data-checked="" style={{ display: 'none' }}></span>
                            <div className="show-more-module--content--Rw-xr" style={{ maxHeight: '10rem' }}>
                              <div>
                                <div
                                  className="ud-text-sm individual-review--individual-review__comment--9sMaL"
                                  data-purpose="review-comment-content"
                                >
                                  <p>
                                    Great course!! Very brief and concise. Everything is explained to detail. Great for
                                    those who want to know GPT better!!
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="reviews-section--reviews-show-more--RgnQW"
                    data-purpose="show-more-review-button-wrapper"
                  >
                    <button
                      type="button"
                      data-purpose="show-more-review-button"
                      className="ud-btn ud-btn-medium ud-btn-secondary ud-heading-sm"
                    >
                      <span>See more reviews</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewInDashboard;
