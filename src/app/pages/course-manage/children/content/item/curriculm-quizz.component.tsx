import { Images } from '@assets/images';
import React from 'react';

type Props = {};

const CurriculmQuizz = (props: Props) => {
  return (
    <div
      id="simple-quiz6244044"
      className="js-curriculum-item-draggable curriculum-list--list-item--xn0j1 curriculum-list--non-section-item--e-CVe"
    >
      <div
        data-purpose="quiz-editor"
        className="quiz-editor--quiz-editor--R3KNi default-item-editor--item-editor--h6QWO"
      >
        <div className="">
          <div className="popper-module--popper--mM5Ie">
            <div
              className="item-icon-button-trigger js-curriculum-item-handle quiz-editor--item-bar--njr5M item-bar--item-bar--qgtrI item-bar--row--Odlz8"
              id="popper-trigger--10"
              aria-describedby="popper-content--11"
            >
              <div className="item-bar--flex--0YQN5 item-bar--main--IIsV0 item-bar--row--Odlz8">
                <div className="item-bar--flex--0YQN5 item-bar--left--hl8iX">
                  <div className="item-bar--left-content--RlKJL item-bar--row--Odlz8" data-purpose="item-full-title">
                    <Images.FaCheckCircle className="ud-icon ud-icon-xsmall ud-icon-color-neutral item-bar--icon---1yQ8" />
                    <span className="item-bar--label--BGgNa" data-purpose="item-object-index">
                      Quiz 1:
                    </span>
                    <span className="item-bar--title-desktop--0aaJl item-bar--row--Odlz8">
                      <Images.FaQuestionCircle className="ud-icon ud-icon-xsmall ud-icon-color-neutral item-bar--icon---1yQ8" />
                      <span className="item-bar--ellipsis--S90PP">test quiz 1</span>
                    </span>
                    <button
                      type="button"
                      data-purpose="quiz-edit-btn"
                      className="ud-btn ud-btn-xsmall ud-btn-ghost ud-heading-sm ud-btn-icon ud-btn-icon-xsmall ud-link-neutral item-icon-button--icon-button--B5ruL "
                    >
                      <Images.RiPencilFill className="ud-icon ud-icon-xsmall" />
                    </button>
                    <button
                      type="button"
                      aria-disabled="false"
                      data-purpose="quiz-delete-btn"
                      className="ud-btn ud-btn-xsmall ud-btn-ghost ud-heading-sm ud-btn-icon ud-btn-icon-xsmall ud-link-neutral item-icon-button--icon-button--B5ruL "
                    >
                      <Images.MdDelete className="ud-icon ud-icon-xsmall" />
                    </button>
                  </div>
                  <div className="item-bar--title-mobile--TVdeY item-bar--left-content--RlKJL item-bar--row--Odlz8">
                    <Images.FaQuestionCircle className="ud-icon ud-icon-xsmall ud-icon-color-neutral item-bar--icon---1yQ8" />
                    <span className="item-bar--ellipsis--S90PP">test quiz 1</span>
                  </div>
                </div>
              </div>
              <div className="item-bar--right--tbtFF item-bar--row--Odlz8">
                <button
                  type="button"
                  data-purpose="quiz-collapse-btn"
                  className="ud-btn ud-btn-xsmall ud-btn-ghost ud-heading-sm ud-btn-icon ud-btn-icon-xsmall ud-link-neutral item-icon-button--icon-button--B5ruL item-icon-button--icon-button-always-show--FUMTz "
                >
                  <Images.MdKeyboardArrowDown className="ud-icon ud-icon-medium" />
                </button>
                <div className="ud-btn ud-btn-xsmall ud-btn-ghost ud-heading-sm ud-btn-icon ud-btn-icon-xsmall item-bar--drag-handle--hBX2t ud-link-neutral item-icon-button--icon-button--B5ruL item-bar--drag-handle--hBX2t">
                  <Images.MdFormatListBulleted className="ud-icon ud-icon-small" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          data-purpose="add-content-wrapper"
          className="default-item-editor--add-content--rtdZf default-item-editor--hidden--rPkSZ"
        >
          <div className="content-tab--tab-container--4KZw2" data-purpose="add-content">
            <div className="ud-heading-sm content-tab--tab--jQuwu">
              <div className="content-tab--title--1bly-">
                Select question type
                <button
                  type="button"
                  data-purpose="content-tab-close"
                  className="ud-btn ud-btn-xsmall ud-btn-ghost ud-heading-sm ud-btn-icon ud-btn-icon-xsmall ud-link-neutral content-tab--close--c-o4i"
                >
                  <Images.CiCirclePlus className="ud-icon ud-icon-small" />
                </button>
              </div>
            </div>
            <div className="content-tab--tab-content--N9e1X">
              <ul className="ud-unstyled-list content-type-selector--list--teXLp">
                <li>
                  <button
                    type="button"
                    data-purpose="select-multiple-choice"
                    className="ud-btn ud-btn-large ud-btn-link ud-heading-md content-type-selector--assessment--EBN-C"
                  >
                    <span className="content-type-selector--box--zgplG">
                      <div className="content-type-selector--icon--ZG0d- content-type-selector--icon-before--ICpcD">
                        <Images.FaQuestionCircle className="ud-icon ud-icon-large" />
                      </div>
                      <div className="content-type-selector--icon--ZG0d- content-type-selector--icon-after--T027G">
                        <Images.FaQuestionCircle className="ud-icon ud-icon-large" />
                      </div>
                      <span className="ud-text-xs content-type-selector--label--VVivc">Multiple Choice</span>
                    </span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          data-purpose="edit-content-wrapper"
          className="default-item-editor--edit-content--rcl3t default-item-editor--hidden--rPkSZ"
        >
          <div className="" data-purpose="edit-content">
            <div className="quiz-editor--edit-questions-header--DdNuZ">
              <div className="quiz-editor--edit-questions-header-left--u-gkL">
                <div className="ud-text-bold">Questions</div>
                <button
                  type="button"
                  data-purpose="new-question-btn"
                  className="ud-btn ud-btn-small ud-btn-secondary ud-heading-sm"
                >
                  <span>New Question</span>
                </button>
              </div>
              <div className="quiz-editor--quiz-settings-btns--rd8xH" data-purpose="quiz-settings">
                <a
                  href="https://www.udemy.com/course/draft/5832004/learn/quiz/6244044//?instructorPreviewMode=instructor_v4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ud-btn ud-btn-small ud-btn-primary ud-heading-sm"
                >
                  <span>Preview</span>
                </a>
              </div>
            </div>
            <div className="assessment-list--assessment-list--Yw2ZB">
              <ul className="ud-unstyled-list" data-purpose="assessment-list">
                <li className="item-icon-button-trigger js-assessment-draggable" data-purpose="assessment-list-item">
                  <div className="ud-text-sm assessment-list--assessment-list-item-content--Ymo9G">
                    <div className="ud-text-bold">1.</div>
                    <div
                      className="assessment-list--ellipsis--Ec0yy "
                      data-purpose="safely-set-inner-html:assessment-list-item:render-question"
                    >
                      quizzz 1
                    </div>
                    <div className="assessment-list--assessment-type--3Kxcs">Multiple Choice</div>
                    <div className="assessment-list--flex--q60GD"></div>
                    <button
                      type="button"
                      data-purpose="edit-assessment"
                      className="ud-btn ud-btn-xsmall ud-btn-ghost ud-heading-sm ud-btn-icon ud-btn-icon-xsmall ud-link-neutral item-icon-button--icon-button--B5ruL "
                    >
                      <Images.RiPencilFill className="ud-icon ud-icon-xsmall" />
                    </button>
                    <button
                      type="button"
                      data-purpose="delete-assessment"
                      className="ud-btn ud-btn-xsmall ud-btn-ghost ud-heading-sm ud-btn-icon ud-btn-icon-xsmall ud-link-neutral item-icon-button--icon-button--B5ruL "
                    >
                      <Images.MdDelete className="ud-icon ud-icon-xsmall" />
                    </button>
                    <div className="ud-btn ud-btn-xsmall ud-btn-ghost ud-heading-sm ud-btn-icon ud-btn-icon-xsmall js-assessment-handle assessment-list--sort-handle---JI4z ud-link-neutral item-icon-button--icon-button--B5ruL js-assessment-handle assessment-list--sort-handle---JI4z">
                      <Images.MdFormatListBulleted className="ud-icon ud-icon-small" />
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="curriculum-list--inline-insert--vMeTp curriculum-list--inline-insert-non-section-item--W25kH">
        <div className="curriculum-list--inline-insert-button-row--Blm4z">
          <button
            type="button"
            data-purpose="add-item-inline"
            className="ud-btn ud-btn-xsmall ud-btn-link ud-heading-sm curriculum-list--inline-insert-button--03yBe  ud-custom-focus-visible add-item--add-item-toggler--DLipO add-item--lecture--mDeEa"
          >
            <span className="ud-focus-visible-target add-item--icon-wrapper--qtIwg">
              <Images.CiCirclePlus className="ud-icon ud-icon-small ud-icon-color-neutral add-item--icon--pl7hv" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CurriculmQuizz;
