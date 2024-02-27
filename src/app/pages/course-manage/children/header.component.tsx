import { Images } from '@assets/images';
import { Link } from 'react-router-dom';

type Props = {};

const HeaderCourseManagement = (props: Props) => {
  return (
    <div className="cm-full-page-takeover-header full-page-takeover-header--row--KKDZW full-page-takeover-header--header--bluna">
      <div>
        <Link
          to="/instructor/courses"
          className="ud-btn ud-btn-small ud-btn-ghost ud-text-md full-page-takeover-header--back-btn--0QHtf"
          aria-label="Back to courses"
        >
          <Images.MdKeyboardArrowLeft className="full-page-takeover-header--back-to-courses--upfRb" />
        </Link>
      </div>
      <div className="full-page-takeover-header--flex--pZhG- full-page-takeover-header--row--KKDZW full-page-takeover-header--content--2L-xW">
        <div className="full-page-takeover-header--flex--pZhG- full-page-takeover-header--row--KKDZW full-page-takeover-header--left--Q2fO4">
          <h1 className="ud-heading-lg full-page-takeover-header--title--ld2nc" data-purpose="course-title">
            Learn Nodejs trick
          </h1>
          <div className="ud-badge ud-heading-xs full-page-takeover-header--status--yNmd8">Draft</div>
          <span>
            <span>0min</span> of video content uploaded
          </span>
        </div>
        <button type="button" className="ud-btn ud-btn-small ud-btn-white-solid ud-heading-sm ud-btn-disabled">
          <span>Save</span>
        </button>
        <a
          className="ud-btn ud-btn-small ud-btn-ghost ud-heading-sm ud-btn-icon ud-btn-icon-small full-page-takeover-header--settings-btn--zwvLn"
          href="/instructor/course/5832004/manage/settings"
        >
          <Images.IoSettings className="ud-icon ud-icon-medium" />
        </a>
      </div>
    </div>
  );
};

export default HeaderCourseManagement;
