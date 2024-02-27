import { Images } from '@assets/images';
import React from 'react';

type Props = {};

const CurriculmChapter = (props: Props) => {
  return (
    <div
      id="chapter10138818"
      className="js-curriculum-item-draggable curriculum-list--list-item--xn0j1 curriculum-list--section---JDZu"
    >
      <div className="curriculum-list--inline-insert--vMeTp curriculum-list--inline-insert-section--ZIjJN">
        <div className="curriculum-list--inline-insert-button-row--Blm4z">
          <button
            type="button"
            data-purpose="add-item-inline"
            className="ud-btn ud-btn-xsmall ud-btn-link ud-heading-sm curriculum-list--inline-insert-button--03yBe ud-custom-focus-visible add-item--add-item-toggler--DLipO add-item--section--J21gT"
          >
            <span className="ud-focus-visible-target add-item--icon-wrapper--qtIwg">
              <Images.IoMdClose className="ud-icon ud-icon-small ud-icon-color-neutral add-item--icon--pl7hv" />
            </span>
          </button>
        </div>
      </div>
      <div data-purpose="section-editor">
        <div className="popper-module--popper--mM5Ie">
          <div
            className="item-icon-button-trigger js-curriculum-item-handle item-bar--item-bar--qgtrI item-bar--row--Odlz8 item-bar--item-bar-section--V3966"
            id="popper-trigger--8"
            aria-describedby="popper-content--9"
          >
            <div className="item-bar--flex--0YQN5 item-bar--main--IIsV0 item-bar--row--Odlz8">
              <div className="item-bar--flex--0YQN5 item-bar--left--hl8iX">
                <div className="item-bar--left-content--RlKJL item-bar--row--Odlz8" data-purpose="item-full-title">
                  <span className="ud-text-bold item-bar--label--BGgNa" data-purpose="item-object-index">
                    Section 1:
                  </span>
                  <span className="item-bar--title-desktop--0aaJl item-bar--row--Odlz8">
                    <Images.MdArticle className="ud-icon ud-icon-xsmall ud-icon-color-neutral item-bar--icon---1yQ8" />
                    <span className="item-bar--ellipsis--S90PP">Introduction</span>
                  </span>
                  <button
                    type="button"
                    data-purpose="section-edit-btn"
                    className="ud-btn ud-btn-xsmall ud-btn-ghost ud-heading-sm ud-btn-icon ud-btn-icon-xsmall ud-link-neutral item-icon-button--icon-button--B5ruL"
                  >
                    <Images.RiPencilFill className="ud-icon ud-icon-xsmall" />
                  </button>
                  <button
                    type="button"
                    data-purpose="section-delete-btn"
                    className="ud-btn ud-btn-xsmall ud-btn-ghost ud-heading-sm ud-btn-icon ud-btn-icon-xsmall ud-link-neutral item-icon-button--icon-button--B5ruL"
                  >
                    <Images.MdDelete className="ud-icon ud-icon-xsmall" />
                  </button>
                </div>
              </div>
            </div>
            <div className="item-bar--right--tbtFF item-bar--row--Odlz8">
              <div className="ud-btn ud-btn-xsmall ud-btn-ghost ud-heading-sm ud-btn-icon ud-btn-icon-xsmall item-bar--drag-handle--hBX2t ud-link-neutral item-icon-button--icon-button--B5ruL item-bar--drag-handle--hBX2t">
                <Images.MdFormatListBulleted className="ud-icon ud-icon-small" />
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

export default CurriculmChapter;
