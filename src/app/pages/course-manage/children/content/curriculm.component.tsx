import CurriculmChapter from './item/curriculm-chapter.component';
import CurriculmLecture from './item/curriculm-lecture.component';
import CurriculmQuizz from './item/curriculm-quizz.component';

type Props = {};

const Curriculm = (props: Props) => {
  return (
    <div className="full-width-lines">
      <div className="sub-header--flex-align-center--NUoNS sub-header--container--tI8ZM">
        <div className="sub-header--flex-align-center--NUoNS sub-header--content--GOfzF">
          <h2 data-purpose="page-title" className="ud-heading-serif-xl">
            Curriculum
          </h2>
        </div>
        <div className="sub-header--flex-align-center--NUoNS sub-header--content--GOfzF">
          <button type="button" className="ud-btn ud-btn-large ud-btn-secondary ud-heading-md">
            <span>Bulk Uploader</span>
          </button>
        </div>
      </div>
      <div className="main-content--content--JhVD-">
        <div>
          <div className="curriculum-editor--alert-container--I55yn">
            <p className="curriculum-editor--info--lsjln" data-purpose="free-course-message">
              <span>
                Start putting together your course by creating sections, lectures and practice activities (quizzes,
                coding exercises and assignments). Use your course outline to structure your content and label your
                sections and lectures clearly.
              </span>
              If you’re intending to offer your course for free, the total length of video content must be less than 2
              hours.
            </p>
          </div>
          <div className="curriculum-list--inline-insert-enabled--1RWuL">
            <div className="curriculum-list--curriculum-list--3w51j">
              <CurriculmChapter />
              <CurriculmQuizz />
              <CurriculmQuizz />
              <CurriculmLecture />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Curriculm;
