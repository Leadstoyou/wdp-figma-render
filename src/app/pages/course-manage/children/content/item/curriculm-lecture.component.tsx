import { Images } from '@assets/images';
import React from 'react';

type Props = {};

const CurriculmLecture = (props: Props) => {
  return (
    <div
      id="lecture42428848"
      className="js-curriculum-item-draggable curriculum-list--list-item--xn0j1 curriculum-list--non-section-item--e-CVe"
    >
      <div data-purpose="lecture-editor" className="default-item-editor--item-editor--h6QWO">
        <div className="">
          <div className="popper-module--popper--mM5Ie">
            <div
              className="item-icon-button-trigger js-curriculum-item-handle item-bar--item-bar--qgtrI item-bar--row--Odlz8"
              id="popper-trigger--283"
              aria-describedby="popper-content--284"
            >
              <div className="item-bar--flex--0YQN5 item-bar--main--IIsV0 item-bar--row--Odlz8">
                <div className="item-bar--flex--0YQN5 item-bar--left--hl8iX">
                  <div className="item-bar--left-content--RlKJL item-bar--row--Odlz8" data-purpose="item-full-title">
                    <Images.FaCheckCircle className="ud-icon ud-icon-xsmall ud-icon-color-neutral item-bar--icon---1yQ8" />
                    <span className="item-bar--label--BGgNa" data-purpose="item-object-index">
                      Lecture 1:
                    </span>
                    <span className="item-bar--title-desktop--0aaJl item-bar--row--Odlz8">
                      <Images.MdArticle className="ud-icon ud-icon-xsmall ud-icon-color-neutral item-bar--icon---1yQ8" />
                      <span className="item-bar--ellipsis--S90PP">lmao</span>
                    </span>
                    <button
                      type="button"
                      data-purpose="lecture-edit-btn"
                      className="ud-btn ud-btn-xsmall ud-btn-ghost ud-heading-sm ud-btn-icon ud-btn-icon-xsmall ud-link-neutral item-icon-button--icon-button--B5ruL"
                    >
                      <Images.RiPencilFill className="ud-icon ud-icon-xsmall" />
                    </button>
                    <button
                      type="button"
                      data-purpose="lecture-delete-btn"
                      className="ud-btn ud-btn-xsmall ud-btn-ghost ud-heading-sm ud-btn-icon ud-btn-icon-xsmall ud-link-neutral item-icon-button--icon-button--B5ruL"
                    >
                      <Images.MdDelete className="ud-icon ud-icon-xsmall" />
                    </button>
                  </div>
                  <div className="item-bar--title-mobile--TVdeY item-bar--left-content--RlKJL item-bar--row--Odlz8">
                    <Images.MdArticle className="ud-icon ud-icon-xsmall ud-icon-color-neutral item-bar--icon---1yQ8" />
                    <span className="item-bar--ellipsis--S90PP">lmao</span>
                  </div>
                </div>
                <div className="item-bar--button-container--D9NZX">
                  <button
                    type="button"
                    data-purpose="lecture-add-content-btn"
                    aria-label="Add Content"
                    className="ud-btn ud-btn-small ud-btn-secondary ud-heading-sm"
                  >
                    <Images.MdKeyboardArrowDown className="ud-icon ud-icon-medium" />
                    <span>Content</span>
                  </button>
                </div>
              </div>
              <div className="item-bar--right--tbtFF item-bar--row--Odlz8">
                <button
                  type="button"
                  data-purpose="lecture-collapse-btn"
                  className="ud-btn ud-btn-xsmall ud-btn-ghost ud-heading-sm ud-btn-icon ud-btn-icon-xsmall ud-link-neutral item-icon-button--icon-button--B5ruL item-icon-button--icon-button-always-show--FUMTz"
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
                Select content type
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
              <div>
                <p className="ud-text-sm lecture-editor--select-content-type--jOQBz">
                  Select the main type of content. Files and links can be added as resources.
                  <a
                    className="ud-link-underline"
                    href="https://www.udemy.com/support/229606188/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Learn about content types.
                  </a>
                </p>
                <ul className="ud-unstyled-list content-type-selector--list--teXLp">
                  <li>
                    <button
                      type="button"
                      data-purpose="select-video"
                      className="ud-btn ud-btn-large ud-btn-link ud-heading-md content-type-selector--asset--8jN6d"
                    >
                      <span className="content-type-selector--box--zgplG">
                        <div className="content-type-selector--icon--ZG0d- content-type-selector--icon-before--ICpcD">
                          <Images.FaRegPlayCircle className="ud-icon ud-icon-large" />
                        </div>
                        <div className="content-type-selector--icon--ZG0d- content-type-selector--icon-after--T027G">
                          <Images.FaRegPlayCircle className="ud-icon ud-icon-large" />
                        </div>
                        <span className="ud-text-xs content-type-selector--label--VVivc">Video</span>
                      </span>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div
          data-purpose="edit-content-wrapper"
          className="default-item-editor--edit-content--rcl3t default-item-editor--hidden--rPkSZ"
        >
          <div data-purpose="edit-content">
            <div className="lecture-editor--edit-content-row--Is-09">
              <div className="lecture-editor--edit-content-button-row--Axnax">
                <button
                  type="button"
                  data-purpose="add-desc-btn"
                  aria-label="Add Description"
                  className="ud-btn ud-btn-small ud-btn-secondary ud-heading-sm"
                >
                  <Images.MdKeyboardArrowDown className="ud-icon ud-icon-small" />
                  <span>Description</span>
                </button>
              </div>
              <div className="lecture-editor--edit-content-button-row--Axnax">
                <button
                  type="button"
                  data-purpose="add-resources-btn"
                  aria-label="Add Resources"
                  className="ud-btn ud-btn-small ud-btn-secondary ud-heading-sm"
                >
                  <Images.MdKeyboardArrowDown className="ud-icon ud-icon-small" />
                  <span>Resources</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="curriculum-list--inline-insert--vMeTp curriculum-list--inline-insert-non-section-item--W25kH">
        <div className="curriculum-list--inline-insert-button-row--Blm4z">
          <button
            type="button"
            data-purpose="add-item-inline"
            className="ud-btn ud-btn-xsmall ud-btn-link ud-heading-sm curriculum-list--inline-insert-button--03yBe ud-custom-focus-visible add-item--add-item-toggler--DLipO add-item--lecture--mDeEa"
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

export default CurriculmLecture;
