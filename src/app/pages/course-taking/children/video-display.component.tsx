import React from 'react';

type Props = {};

const VideoDisplay = (props: Props) => {
  return (
    <div className="app--row--1ydzX app--body-container--10gJo">
      <div className="app--row-content--1lH7B">
        <div className="app--curriculum-item--2GBGE">
          <div className="curriculum-item-view--scaled-height-limiter--1j3Pp">
            <div className="curriculum-item-view--absolute-height-limiter--1SMqE">
              <div className="curriculum-item-view--aspect-ratio-container--2tJ-p">
                <div className="curriculum-item-view--content-container--2MIL1">
                  <div className="curriculum-item-view--scaled-height-limiter--1j3Pp">
                    <div className="curriculum-item-view--absolute-height-limiter--1SMqE">
                      <div
                        className="curriculum-item-view--content--3ABmp user-activity--user-inactive--2i_QO curriculum-item-view--video-background--lcepY"
                        data-purpose="curriculum-item-viewer-content"
                      >
                        <iframe
                          className="lecture-view--container--pL22J"
                          width="646"
                          height="295.8"
                          title="video-demo"
                          src="https://drive.google.com/file/d/1PLhROh2dPaGwy46muij_54bSezpxM-K5/preview"
                          allowFullScreen
                        ></iframe>
                      </div>

                      <div className="next-and-previous--container--1bSoH next-and-previous--previous--2cgs1 user-activity--hide-when-user-inactive--MIrbg">
                        <div className="popper-module--popper--2BpLn">
                          <div
                            data-purpose="go-to-previous"
                            id="go-to-previous-item"
                            className="item-link item-link--common--RP3fp ud-btn ud-btn-large ud-btn-primary ud-heading-md next-and-previous--button--2BBCj next-and-previous--previous--2cgs1"
                            aria-describedby="popper-content--44"
                            role="link"
                          >
                            {/* <svg
                                aria-label="Go to Previous lecture"
                                role="img"
                                focusable="false"
                                className="ud-icon ud-icon-large"
                              >
                                <use xlink:href="#icon-previous"></use>
                              </svg> */}
                          </div>
                          <div
                            className="popper-module--popper-content--3cLBV ud-text-sm next-and-previous--tooltip--2wOrG"
                            id="popper-content--44"
                            style={{
                              left: '100%',
                              top: '50%',
                              transform: 'translateY(-50%)',
                            }}
                          >
                            <div className="popper-module--animation-wrapper--2ogNt">
                              <div className="popover-module--popover--1kskS popover-module--popover-right--31LLX">
                                <div className="popover-module--inner--Sbv-I">1. Introduction and Course Overview</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="next-and-previous--container--1bSoH next-and-previous--next--2lle_ user-activity--hide-when-user-inactive--MIrbg">
                        <div className="popper-module--popper--2BpLn">
                          <div
                            data-purpose="go-to-next"
                            id="go-to-next-item"
                            className="item-link item-link--common--RP3fp ud-btn ud-btn-large ud-btn-primary ud-heading-md next-and-previous--button--2BBCj next-and-previous--next--2lle_"
                            aria-describedby="popper-content--45"
                            role="link"
                          >
                            {/* <svg
                                aria-label="Go to Next lecture"
                                role="img"
                                focusable="false"
                                className="ud-icon ud-icon-large"
                              >
                                <use xlink:href="#icon-next"></use>
                              </svg> */}
                          </div>
                          <div
                            className="popper-module--popper-content--3cLBV ud-text-sm next-and-previous--tooltip--2wOrG"
                            id="popper-content--45"
                            style={{
                              right: '100%',
                              top: '50%',
                              transform: 'translateY(-50%)',
                            }}
                          >
                            <div className="popper-module--animation-wrapper--2ogNt">
                              <div className="popover-module--popover--1kskS popover-module--popover-left--1WptH">
                                <div className="popover-module--inner--Sbv-I">3. Optional: Brief History of OpenAI</div>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoDisplay;
