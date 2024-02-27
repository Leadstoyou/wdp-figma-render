import { Images } from '@assets/images';
import React from 'react';

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <div className="app--sidebar-column--2t0E8" style={{ top: '56px', height: 'calc(100% - 56px)' }}>
      <section className="sidebar--sidebar--2XpCD" data-purpose="sidebar" aria-label="Sidebar">
        <div className="sidebar--sidebar-header--3RQk_">
          <h2 className="ud-heading-md">Course content</h2>
          <button
            type="button"
            className="ud-btn ud-btn-large ud-btn-link ud-heading-md ud-link-neutral sidebar--close-btn--2TpMF"
            data-purpose="sidebar-button-close"
          >
            <Images.IoMdClose />
          </button>
        </div>
        <div id="ct-sidebar-scroll-container" className="sidebar--content---4z0-" data-purpose="sidebar-content">
          <div className="ct-sidebar-course-content">
            <div>
              <div className="accordion-panel-module--panel--3_kkG section--section--BukKG">
                <span
                  id="accordion-panel--50"
                  data-type="checkbox"
                  data-checked="checked"
                  style={{ display: 'none' }}
                ></span>
                <div
                  className="ud-btn ud-btn-large ud-btn-link ud-heading-md ud-accordion-panel-toggler accordion-panel-module--panel-toggler--1RjML accordion-panel-module--outer-panel-toggler--AgeEB"
                  data-css-toggle-id="accordion-panel--50"
                >
                  <div className="section--section-heading--2k6aW">
                    <div className="section--flex--1MW7w">
                      <h3 className="ud-accordion-panel-heading">
                        <button
                          type="button"
                          aria-disabled="false"
                          aria-expanded="true"
                          className="ud-btn ud-btn-large ud-btn-link ud-heading-md js-panel-toggler accordion-panel-module--panel-toggler--1RjML"
                          id="accordion-panel-title--48"
                        >
                          <span className="ud-accordion-panel-title">
                            <span className="truncate-with-tooltip--ellipsis--2-jEx" style={{ WebkitLineClamp: 2 }}>
                              Section 1: Introduction to ChatGPT
                            </span>
                          </span>
                        </button>
                      </h3>
                      <div className="ud-text-xs section--progress--3R0vk" data-purpose="section-duration">
                        <span aria-hidden="true">1 / 4 | 29min</span>
                        <span data-purpose="section-duration-sr-only" className="ud-sr-only">
                          <span>1 of 4 lectures completed</span>
                          <span>29min</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <Images.MdKeyboardArrowDown />
                </div>
                <div className="accordion-panel-module--content-wrapper--DIUt_">
                  <div className="ud-accordion-panel-content accordion-panel-module--content--jkZai">
                    <ul className="ud-unstyled-list">
                      <li aria-current="false" className="curriculum-item-link--curriculum-item--KX9MD">
                        <div
                          data-purpose="curriculum-item-0-0"
                          className="item-link item-link--common--RP3fp ud-custom-focus-visible"
                        >
                          <div>
                            <label className="curriculum-item-link--progress-toggle--1CMcg ud-toggle-input-container ud-text-sm">
                              <input
                                data-purpose="progress-toggle-button"
                                className="ud-sr-only ud-real-toggle-input"
                                id="checkbox--49"
                                type="checkbox"
                                // checked=""
                              />
                              <Images.TiTick className="ud-icon ud-icon-xsmall ud-fake-toggle-input ud-fake-toggle-checkbox" />
                              <span className="ud-sr-only">
                                Lecture completed. Progress cannot be changed for this item.
                              </span>
                            </label>
                          </div>
                          <span className="ud-sr-only">Play</span>
                          <div className="curriculum-item-link--item-container--1ptOz">
                            <div className="ud-text-sm ud-focus-visible-target">
                              <div className="curriculum-item-link--curriculum-item-title--2hYub">
                                <span className="curriculum-item-link--curriculum-item-title-content--1SLoR">
                                  <span className="truncate-with-tooltip--ellipsis--2-jEx">
                                    <span data-purpose="item-title">1. Introduction and Course Overview</span>
                                  </span>
                                </span>
                              </div>
                            </div>
                            <div className="curriculum-item-link--bottom-row--1j052">
                              <div className="ud-text-xs curriculum-item-link--metadata--e17HG">
                                <button
                                  type="button"
                                  aria-label="Play Introduction and Course Overview"
                                  className="ud-btn ud-btn-large ud-btn-link ud-heading-md"
                                >
                                  <Images.MdOndemandVideo className="ud-icon ud-icon-xsmall" />
                                </button>
                                <span>2min</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="curriculum-item-link--curriculum-item--KX9MD curriculum-item-link--is-current--31BPo">
                        <div className="item-link item-link--common--RP3fp ud-custom-focus-visible">
                          <div>
                            <label className="curriculum-item-link--progress-toggle--1CMcg ud-toggle-input-container ud-text-sm">
                              <input
                                data-purpose="progress-toggle-button"
                                className="ud-sr-only ud-real-toggle-input"
                                id="checkbox--50"
                                type="checkbox"
                              />
                              <Images.TiTick className="ud-icon ud-icon-xsmall ud-fake-toggle-input ud-fake-toggle-checkbox" />
                              <span className="ud-sr-only">
                                Lecture incomplete. Progress cannot be changed for this item.
                              </span>
                            </label>
                          </div>
                          <span className="ud-sr-only">Play</span>
                          <div className="curriculum-item-link--item-container--1ptOz">
                            <div className="ud-text-sm ud-focus-visible-target">
                              <div className="curriculum-item-link--curriculum-item-title--2hYub">
                                <span className="curriculum-item-link--curriculum-item-title-content--1SLoR">
                                  <span className="truncate-with-tooltip--ellipsis--2-jEx">
                                    <span data-purpose="item-title">
                                      2. ChatGPT Set-up and OpenAI Playground Set-up
                                    </span>
                                  </span>
                                </span>
                              </div>
                            </div>
                            <div className="curriculum-item-link--bottom-row--1j052">
                              <div className="ud-text-xs curriculum-item-link--metadata--e17HG">
                                <button
                                  type="button"
                                  aria-label="Play ChatGPT Set-up and OpenAI Playground Set-up"
                                  className="ud-btn ud-btn-large ud-btn-link ud-heading-md"
                                >
                                  <Images.MdOndemandVideo className="ud-icon ud-icon-xsmall" />
                                </button>
                                <span>8min</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li aria-current="false" className="curriculum-item-link--curriculum-item--KX9MD">
                        <div
                          data-purpose="curriculum-item-0-2"
                          className="item-link item-link--common--RP3fp ud-custom-focus-visible"
                        >
                          <div>
                            <label className="curriculum-item-link--progress-toggle--1CMcg ud-toggle-input-container ud-text-sm">
                              <input className="ud-sr-only ud-real-toggle-input" type="checkbox" />

                              <Images.TiTick className="ud-icon ud-icon-xsmall ud-fake-toggle-input ud-fake-toggle-checkbox" />
                              <span className="ud-sr-only">
                                Lecture incomplete. Progress cannot be changed for this item.
                              </span>
                            </label>
                          </div>
                          <span className="ud-sr-only">Play</span>
                          <div className="curriculum-item-link--item-container--1ptOz">
                            <div className="ud-text-sm ud-focus-visible-target">
                              <div className="curriculum-item-link--curriculum-item-title--2hYub">
                                <span className="curriculum-item-link--curriculum-item-title-content--1SLoR">
                                  <span className="truncate-with-tooltip--ellipsis--2-jEx">
                                    <span data-purpose="item-title">3. Optional: Brief History of OpenAI</span>
                                  </span>
                                </span>
                              </div>
                            </div>
                            <div className="curriculum-item-link--bottom-row--1j052">
                              <div className="ud-text-xs curriculum-item-link--metadata--e17HG">
                                <button
                                  type="button"
                                  aria-label="Play Optional: Brief History of OpenAI"
                                  className="ud-btn ud-btn-large ud-btn-link ud-heading-md"
                                >
                                  <Images.MdOndemandVideo className="ud-icon ud-icon-xsmall" />
                                </button>
                                <span>7min</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      {/* <li aria-current="false" className="curriculum-item-link--curriculum-item--KX9MD">
                        <div
                          data-purpose="curriculum-item-0-3"
                          className="item-link item-link--common--RP3fp ud-custom-focus-visible"
                          role=""
                        >
                          <div>
                            <label
                              className="curriculum-item-link--progress-toggle--1CMcg ud-toggle-input-container ud-text-sm"
                              for="checkbox--52"
                            >
                              <input
                                data-purpose="progress-toggle-button"
                                className="ud-sr-only ud-real-toggle-input"
                                id="checkbox--52"
                                type="checkbox"
                              />
                              <svg
                                aria-hidden="true"
                                focusable="false"
                                className="ud-icon ud-icon-xsmall ud-fake-toggle-input ud-fake-toggle-checkbox"
                              >
                                <use xlink:href="#icon-tick"></use>
                              </svg>
                              <span className="ud-sr-only">
                                Lecture incomplete. Progress cannot be changed for this item.
                              </span>
                            </label>
                          </div>
                          <span className="ud-sr-only">Play</span>
                          <div className="curriculum-item-link--item-container--1ptOz">
                            <div className="ud-text-sm ud-focus-visible-target">
                              <div className="curriculum-item-link--curriculum-item-title--2hYub">
                                <span className="curriculum-item-link--curriculum-item-title-content--1SLoR">
                                  <span
                                    className="truncate-with-tooltip--ellipsis--2-jEx"
                                    style="-webkit-line-clamp: 2"
                                  >
                                    <span data-purpose="item-title">4. How ChatGPT Works</span>
                                  </span>
                                </span>
                              </div>
                            </div>
                            <div className="curriculum-item-link--bottom-row--1j052">
                              <div className="ud-text-xs curriculum-item-link--metadata--e17HG">
                                <button
                                  type="button"
                                  aria-label="Play How ChatGPT Works"
                                  className="ud-btn ud-btn-large ud-btn-link ud-heading-md"
                                >
                                  <svg aria-hidden="true" focusable="false" className="ud-icon ud-icon-xsmall">
                                    <use xlink:href="#icon-video"></use>
                                  </svg>
                                </button>
                                <span>12min</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li> */}
                    </ul>
                  </div>
                </div>
              </div>
              {/* <div
                data-purpose="section-panel-1"
                className="accordion-panel-module--panel--3_kkG section--section--BukKG"
              >
                <div
                  className="ud-btn ud-btn-large ud-btn-link ud-heading-md ud-accordion-panel-toggler accordion-panel-module--panel-toggler--1RjML accordion-panel-module--outer-panel-toggler--AgeEB"
                  data-css-toggle-id="accordion-panel--53"
                >
                  <div data-purpose="section-heading" className="section--section-heading--2k6aW">
                    <div className="section--flex--1MW7w">
                      <h3 className="ud-accordion-panel-heading">
                        <button
                          type="button"
                          aria-disabled="false"
                          aria-expanded="false"
                          className="ud-btn ud-btn-large ud-btn-link ud-heading-md js-panel-toggler accordion-panel-module--panel-toggler--1RjML"
                          id="accordion-panel-title--54"
                        >
                          <span className="ud-accordion-panel-title">
                            <span className="truncate-with-tooltip--ellipsis--2-jEx" style="-webkit-line-clamp: 2">
                              Section 2: Prompt Engineering Basics
                            </span>
                          </span>
                        </button>
                      </h3>
                      <div className="ud-text-xs section--progress--3R0vk" data-purpose="section-duration">
                        <span aria-hidden="true">0 / 6 | 28min</span>
                        <span data-purpose="section-duration-sr-only" className="ud-sr-only">
                          <span>0 of 6 lectures completed</span>
                          <span>28min</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    className="ud-icon ud-icon-small ud-icon-color-neutral accordion-panel-module--expand-icon--2DZax"
                  >
                    <use xlink:href="#icon-expand"></use>
                  </svg>
                </div>
                <div
                  className="accordion-panel-module--content-wrapper--DIUt_"
                  aria-labelledby="accordion-panel-title--54"
                  aria-hidden="true"
                  role="group"
                >
                  <div className="ud-accordion-panel-content accordion-panel-module--content--jkZai"></div>
                </div>
              </div>
              <div
                data-purpose="section-panel-2"
                className="accordion-panel-module--panel--3_kkG section--section--BukKG"
              >
                <span id="accordion-panel--55" data-type="checkbox" data-checked="" style="display: none"></span>
                <div
                  className="ud-btn ud-btn-large ud-btn-link ud-heading-md ud-accordion-panel-toggler accordion-panel-module--panel-toggler--1RjML accordion-panel-module--outer-panel-toggler--AgeEB"
                  data-css-toggle-id="accordion-panel--55"
                >
                  <div data-purpose="section-heading" className="section--section-heading--2k6aW">
                    <div className="section--flex--1MW7w">
                      <h3 className="ud-accordion-panel-heading">
                        <div className="popper-module--popper--2BpLn section--title-tooltip--1QxQG">
                          <button
                            type="button"
                            aria-disabled="false"
                            aria-expanded="false"
                            className="ud-btn ud-btn-large ud-btn-link ud-heading-md js-panel-toggler accordion-panel-module--panel-toggler--1RjML"
                            id="accordion-panel-title--56"
                            aria-describedby="popper-content--99"
                            tabindex="0"
                          >
                            <span className="ud-accordion-panel-title">
                              <span className="truncate-with-tooltip--ellipsis--2-jEx" style="-webkit-line-clamp: 2">
                                Section 3: ChatGPT Prompts with Additional Text Information
                              </span>
                            </span>
                          </button>
                        </div>
                      </h3>
                      <div className="ud-text-xs section--progress--3R0vk" data-purpose="section-duration">
                        <span aria-hidden="true">0 / 4 | 15min</span>
                        <span data-purpose="section-duration-sr-only" className="ud-sr-only">
                          <span>0 of 4 lectures completed</span>
                          <span>15min</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    className="ud-icon ud-icon-small ud-icon-color-neutral accordion-panel-module--expand-icon--2DZax"
                  >
                    <use xlink:href="#icon-expand"></use>
                  </svg>
                </div>
                <div
                  className="accordion-panel-module--content-wrapper--DIUt_"
                  aria-labelledby="accordion-panel-title--56"
                  aria-hidden="true"
                  role="group"
                >
                  <div className="ud-accordion-panel-content accordion-panel-module--content--jkZai"></div>
                </div>
              </div>
              <div
                data-purpose="section-panel-3"
                className="accordion-panel-module--panel--3_kkG section--section--BukKG"
              >
                <span id="accordion-panel--57" data-type="checkbox" data-checked="" style="display: none"></span>
                <div
                  className="ud-btn ud-btn-large ud-btn-link ud-heading-md ud-accordion-panel-toggler accordion-panel-module--panel-toggler--1RjML accordion-panel-module--outer-panel-toggler--AgeEB"
                  data-css-toggle-id="accordion-panel--57"
                >
                  <div data-purpose="section-heading" className="section--section-heading--2k6aW">
                    <div className="section--flex--1MW7w">
                      <h3 className="ud-accordion-panel-heading">
                        <button
                          type="button"
                          aria-disabled="false"
                          aria-expanded="false"
                          className="ud-btn ud-btn-large ud-btn-link ud-heading-md js-panel-toggler accordion-panel-module--panel-toggler--1RjML"
                          id="accordion-panel-title--58"
                        >
                          <span className="ud-accordion-panel-title">
                            <span className="truncate-with-tooltip--ellipsis--2-jEx" style="-webkit-line-clamp: 2">
                              Section 4: ChatGPT Plugins
                            </span>
                          </span>
                        </button>
                      </h3>
                      <div className="ud-text-xs section--progress--3R0vk" data-purpose="section-duration">
                        <span aria-hidden="true">0 / 5 | 22min</span>
                        <span data-purpose="section-duration-sr-only" className="ud-sr-only">
                          <span>0 of 5 lectures completed</span>
                          <span>22min</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    className="ud-icon ud-icon-small ud-icon-color-neutral accordion-panel-module--expand-icon--2DZax"
                  >
                    <use xlink:href="#icon-expand"></use>
                  </svg>
                </div>
                <div
                  className="accordion-panel-module--content-wrapper--DIUt_"
                  aria-labelledby="accordion-panel-title--58"
                  aria-hidden="true"
                  role="group"
                >
                  <div className="ud-accordion-panel-content accordion-panel-module--content--jkZai"></div>
                </div>
              </div>
              <div
                data-purpose="section-panel-4"
                className="accordion-panel-module--panel--3_kkG section--section--BukKG"
              >
                <span id="accordion-panel--59" data-type="checkbox" data-checked="" style="display: none"></span>
                <div
                  className="ud-btn ud-btn-large ud-btn-link ud-heading-md ud-accordion-panel-toggler accordion-panel-module--panel-toggler--1RjML accordion-panel-module--outer-panel-toggler--AgeEB"
                  data-css-toggle-id="accordion-panel--59"
                >
                  <div data-purpose="section-heading" className="section--section-heading--2k6aW">
                    <div className="section--flex--1MW7w">
                      <h3 className="ud-accordion-panel-heading">
                        <button
                          type="button"
                          aria-disabled="false"
                          aria-expanded="false"
                          className="ud-btn ud-btn-large ud-btn-link ud-heading-md js-panel-toggler accordion-panel-module--panel-toggler--1RjML"
                          id="accordion-panel-title--60"
                        >
                          <span className="ud-accordion-panel-title">
                            <span className="truncate-with-tooltip--ellipsis--2-jEx" style="-webkit-line-clamp: 2">
                              Section 5: ChatGPT - Code Interpreter
                            </span>
                          </span>
                        </button>
                      </h3>
                      <div className="ud-text-xs section--progress--3R0vk" data-purpose="section-duration">
                        <span aria-hidden="true">0 / 5 | 20min</span>
                        <span data-purpose="section-duration-sr-only" className="ud-sr-only">
                          <span>0 of 5 lectures completed</span>
                          <span>20min</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    className="ud-icon ud-icon-small ud-icon-color-neutral accordion-panel-module--expand-icon--2DZax"
                  >
                    <use xlink:href="#icon-expand"></use>
                  </svg>
                </div>
                <div
                  className="accordion-panel-module--content-wrapper--DIUt_"
                  aria-labelledby="accordion-panel-title--60"
                  aria-hidden="true"
                  role="group"
                >
                  <div className="ud-accordion-panel-content accordion-panel-module--content--jkZai"></div>
                </div>
              </div>
              <div
                data-purpose="section-panel-5"
                className="accordion-panel-module--panel--3_kkG section--section--BukKG"
              >
                <span id="accordion-panel--61" data-type="checkbox" data-checked="" style="display: none"></span>
                <div
                  className="ud-btn ud-btn-large ud-btn-link ud-heading-md ud-accordion-panel-toggler accordion-panel-module--panel-toggler--1RjML accordion-panel-module--outer-panel-toggler--AgeEB"
                  data-css-toggle-id="accordion-panel--61"
                >
                  <div data-purpose="section-heading" className="section--section-heading--2k6aW">
                    <div className="section--flex--1MW7w">
                      <h3 className="ud-accordion-panel-heading">
                        <button
                          type="button"
                          aria-disabled="false"
                          aria-expanded="false"
                          className="ud-btn ud-btn-large ud-btn-link ud-heading-md js-panel-toggler accordion-panel-module--panel-toggler--1RjML"
                          id="accordion-panel-title--62"
                        >
                          <span className="ud-accordion-panel-title">
                            <span className="truncate-with-tooltip--ellipsis--2-jEx" style="-webkit-line-clamp: 2">
                              Section 6: Bonus Section
                            </span>
                          </span>
                        </button>
                      </h3>
                      <div className="ud-text-xs section--progress--3R0vk" data-purpose="section-duration">
                        <span aria-hidden="true">0 / 1 | 1min</span>
                        <span data-purpose="section-duration-sr-only" className="ud-sr-only">
                          <span>0 of 1 lecture completed</span>
                          <span>1min</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    className="ud-icon ud-icon-small ud-icon-color-neutral accordion-panel-module--expand-icon--2DZax"
                  >
                    <use xlink:href="#icon-expand"></use>
                  </svg>
                </div>
                <div
                  className="accordion-panel-module--content-wrapper--DIUt_"
                  aria-labelledby="accordion-panel-title--62"
                  aria-hidden="true"
                  role="group"
                >
                  <div className="ud-accordion-panel-content accordion-panel-module--content--jkZai"></div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sidebar;
