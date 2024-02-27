import { Images } from '@assets/images';
import React from 'react';
import { Link } from 'react-router-dom';

type Props = {};

const IntendedLearner = (props: Props) => {
  const intendedLearnerData = [
    {
      label: 'What will students learn in your course?',
      description:
        'You must enter at least 4 learning objectives or outcomes that learners can expect to achieve after completing your course.',
      data: ['', '', '', ''],
    },
    {
      label: 'What are the requirements or prerequisites for taking your course?',
      description:
        'List the required skills, experience, tools or equipment learners should have prior to taking your course. If there are no requirements, use this space as an opportunity to lower the barrier for beginners.',
      data: [''],
    },
    {
      label: 'Who is this course for?',
      description:
        'Write a clear description of the intended learners for your course who will find your course content valuable.',
      data: [''],
    },
  ];
  return (
    <div>
      <div className="sub-header--flex-align-center--NUoNS sub-header--container--tI8ZM">
        <div className="sub-header--flex-align-center--NUoNS sub-header--content--GOfzF">
          <h2 data-purpose="page-title" className="ud-heading-serif-xl">
            Intended learners
          </h2>
        </div>
      </div>
      <div className="main-content--content--JhVD-">
        <p className="goals-form--subtitle--EJkkr">
          <span>
            The following descriptions will be publicly visible on your
            <Link className="ud-link-underline" to="/udemy-teach-hub/create_your_course_landing_page/">
              Course Landing Page
            </Link>
            and will have a direct impact on your course performance. These descriptions will help learners decide if
            your course is right for them.
          </span>
        </p>
        <form>
          {intendedLearnerData.map((item, index) => (
            <div className="goals-form--goal-form-question-container--aHNn2" key={index}>
              <div>
                <div className="ud-heading-md goals-form--question-label--Q6a-b">{item.label}</div>
                <p>
                  <span>{item.description}</span>
                </p>
                <br />
                <div>
                  <div>
                    {item.data.map((innerItem, innerIndex) => (
                      <div className="goals-form--sortable-answer--feDJ- goals-form--hide-buttons--fa-he goals-form--question-line-container--nXGAD ud-form-group">
                        <label className="ud-sr-only ud-form-label ud-heading-sm">Answer {innerIndex}</label>
                        <div className="goals-form--question-form--ChyzE">
                          <div className="goals-form--question-text-container--ySHhs">
                            <div className="ud-text-input-container">
                              <input
                                placeholder="Example: Define the roles and responsibilities of a project manager"
                                type="text"
                                className="ud-text-input ud-text-input-large ud-text-md"
                                value={innerItem}
                              />
                              <span>
                                <span aria-hidden="true" className="text-input-with-counter-module--counter--F7OMr">
                                  160
                                </span>
                                <span className="ud-sr-only" aria-live="polite" id="text-area-with-counter--54">
                                  You have 160 characters of 160 remaining.
                                </span>
                              </span>
                              <div className="ud-text-input-box"></div>
                            </div>
                          </div>
                          <button
                            type="button"
                            // disabled=""
                            className="ud-btn ud-btn-large ud-btn-secondary ud-heading-md ud-btn-disabled ud-btn-icon ud-btn-icon-large"
                          >
                            <Images.MdDelete className="ud-icon ud-icon-medium" />
                          </button>
                          <button
                            type="button"
                            className="ud-btn ud-btn-large ud-btn-secondary ud-heading-md ud-btn-icon ud-btn-icon-large js-drag-handle goals-form--sortable-answer-handle--R5CKS"
                          >
                            <Images.IoReorderThree className="ud-icon ud-icon-medium" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="alert-banner-module--alert-banner--38ZcQ alert-banner-module--alert-banner-error--f656Y goals-form--form-error--fZct-">
                <Images.MdError className="ud-icon ud-icon-large ud-icon-color-neutral" />
                <div style={{ flex: '1 1 0%' }}>
                  <div className="alert-banner-module--text-frame--t5nwh alert-banner-module--text-frame-with-icon--BhRkQ">
                    <span className="ud-sr-only">error alert</span>
                    <h2 className="ud-heading-md">
                      <span
                        className="ud-text-with-links"
                        data-purpose="safely-set-inner-html:goals-form-question:error"
                      >
                        This field should contain at least 4 items.
                      </span>
                    </h2>
                  </div>
                </div>
              </div>
              <button
                type="button"
                data-purpose="add-learn-goal"
                className="ud-btn ud-btn-large ud-btn-ghost ud-heading-md"
              >
                <Images.CiCirclePlus className="ud-icon ud-icon-medium" />

                <span>Add more to your response</span>
              </button>
            </div>
          ))}
        </form>
      </div>
    </div>
  );
};

export default IntendedLearner;
