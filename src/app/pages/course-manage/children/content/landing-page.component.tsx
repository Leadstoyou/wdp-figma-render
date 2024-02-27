import { LocalesFullText } from '@app/common/constants';
import TinyMCEEditor from '@app/components/text-editor';
import { Images } from '@assets/images';
import { Link } from 'react-router-dom';

type Props = {};

const LandingPage = (props: Props) => {
  const localesArray = Object.entries(LocalesFullText).map(([value, label]) => ({ value, label }));
  console.log('🚀 ~ LandingPage ~ LocalesOptions:', localesArray);
  return (
    <div>
      <div className="sub-header--flex-align-center--NUoNS sub-header--container--tI8ZM">
        <div className="sub-header--flex-align-center--NUoNS sub-header--content--GOfzF">
          <h2 data-purpose="page-title" className="ud-heading-serif-xl">
            Course landing page
          </h2>
        </div>
      </div>
      <div className="main-content--content--JhVD-">
        <form className="full-width-lines course-basics-form--form--tyQe6">
          <p className="ud-text-with-links course-basics-form--header-tip--Hf6nR">
            <span>
              Your course landing page is crucial to your success on Udemy. If it’s done right, it can also help you
              gain visibility in search engines like Google. As you complete this section, think about creating a
              compelling Course Landing Page that demonstrates why someone would want to enroll in your course. Learn
              more about
              <a href="/udemy-teach-hub/create_your_course_landing_page/" target="_blank" rel="noopener noreferrer">
                creating your course landing page
              </a>
              and
              <a href="https://support.udemy.com/hc/en-us/articles/229232467" target="_blank" rel="noopener noreferrer">
                course title standards.
              </a>
            </span>
          </p>
          <div className="ud-form-group">
            <label className="ud-form-label ud-heading-md">Course title</label>
            <div className="ud-text-input-container">
              <input
                aria-describedby="text-area-with-counter--311"
                aria-invalid="false"
                placeholder="Insert your course title."
                name="title"
                data-purpose="edit-course-title"
                id="form-group--309"
                type="text"
                className="ud-text-input ud-text-input-large ud-text-md"
                value="Learn Nodejs trick"
              />
              <span>
                <span aria-hidden="true" className="text-input-with-counter-module--counter--F7OMr">
                  42
                </span>
                <span className="ud-sr-only" aria-live="polite" id="text-area-with-counter--311">
                  You have 42 characters of 60 remaining.
                </span>
              </span>
              <div className="ud-text-input-box"></div>
            </div>
            <div id="form-group-note--310" className="ud-form-note ud-text-xs">
              Your title should be a mix of attention-grabbing, informative, and optimized for search
            </div>
          </div>
          <div className="ud-form-group">
            <label className="ud-form-label ud-heading-md">Course subtitle</label>
            <div className="ud-text-input-container">
              <input
                aria-describedby="text-area-with-counter--314"
                aria-invalid="false"
                placeholder="Insert your course subtitle."
                name="headline"
                data-purpose="course-headline"
                id="form-group--312"
                type="text"
                className="ud-text-input ud-text-input-large ud-text-md"
                value=""
              />
              <span>
                <span aria-hidden="true" className="text-input-with-counter-module--counter--F7OMr">
                  120
                </span>
                <span className="ud-sr-only" aria-live="polite" id="text-area-with-counter--314">
                  You have 120 characters of 120 remaining.
                </span>
              </span>
              <div className="ud-text-input-box"></div>
            </div>
            <div id="form-group-note--313" className="ud-form-note ud-text-xs">
              Use 1 or 2 related keywords, and mention 3-4 of the most important areas that you've covered during your
              course.
            </div>
          </div>
          <div className="ud-form-group">
            <label className="ud-form-label ud-heading-md">Course description</label>
            <div className="udlite-in-udheavy rt-editor-container">
              <TinyMCEEditor height={250} />
            </div>
            <div id="form-group-note--43" className="ud-form-note ud-text-xs">
              Description should have minimum 200 words.
            </div>
          </div>
          <fieldset className="ud-form-group">
            <legend className="ud-form-label ud-heading-md">Basic info</legend>
            <div className="course-basics-form--inline-fields--bYyBc">
              <div className="course-basics-form--category-fields--ipKHq">
                <div className="ud-form-group">
                  <label className="ud-sr-only ud-form-label ud-heading-sm">Course category</label>
                  <div className="ud-select-container ud-select-container-large">
                    <select
                      aria-invalid="false"
                      title="Category"
                      name="category"
                      id="form-group--50"
                      className="ud-select ud-text-md"
                    >
                      <option value="-1">-- Select Category --</option>
                      <option value="288">Development</option>
                      <option value="278">Music</option>
                      <option value="300">Teaching &amp; Academics</option>
                    </select>
                    <div className="ud-select-icon-container ud-select-icon-right">
                      <Images.MdKeyboardArrowDown className="ud-icon ud-icon-small ud-icon-color-neutral" />
                    </div>
                  </div>
                </div>
                <div className="ud-form-group">
                  <label className="ud-sr-only ud-form-label ud-heading-sm">Course subcategory</label>
                  <div className="ud-select-container ud-select-container-large">
                    <select
                      aria-invalid="false"
                      title="Subcategory"
                      name="subcategory"
                      id="form-group--52"
                      className="ud-select ud-text-md"
                    >
                      <option value="-1">-- Select Subcategory --</option>
                      <option value="140">Other IT &amp; Software</option>
                    </select>
                    <div className="ud-select-icon-container ud-select-icon-right">
                      <Images.MdKeyboardArrowDown className="ud-icon ud-icon-small ud-icon-color-neutral" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </fieldset>
          <div className="ud-form-group">
            <label className="ud-form-label ud-heading-md">Course image</label>
            <div className="course-basics-form--image-upload--9vqOd udlite-in-udheavy">
              <div className="ud-image-upload-preview-wrapper image-upload-preview-with-crop--preview-wrapper--4ZfJd">
                <div className="image-upload-preview-with-crop--image-wrapper--T5q-F">
                  <img
                    data-purpose="image-preview"
                    src="https://s.udemycdn.com/course/750x422/placeholder.jpg"
                    alt=""
                    height="422"
                    width="750"
                    className=""
                    loading="lazy"
                    style={{ maxHeight: '42.2rem' }}
                  />
                </div>
              </div>
              <div className="ud-image-upload-form-wrapper">
                <p className="ud-text-with-links course-basics-form--tip--BmLnk">
                  <span>
                    Upload your course image here. It must meet our
                    <a
                      href="https://support.udemy.com/hc/en-us/articles/229232347"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      course image quality standards
                    </a>
                    to be accepted. Important guidelines: 750x422 pixels; .jpg, .jpeg,. gif, or .png. no text on the
                    image.
                  </span>
                </p>
                <div className="ud-form-group">
                  <label className="ud-sr-only ud-form-label ud-heading-sm">Add / Change File</label>
                  <div className="file-uploader-module--file-uploader-large--yFMua" data-purpose="">
                    <input accept=".gif,.jpg,.jpeg,.png" id="form-group--62" type="file" className="ud-sr-only" />
                    <label className="file-uploader-module--input-group--yMJlp file-uploader-module--uploader-label--88Rvq">
                      <span className="file-uploader-module--fake-input--YBzeo">
                        <span className="file-uploader-module--fake-input-text--fCkyE">No file selected</span>
                      </span>
                      <span className="ud-btn ud-btn-large ud-btn-secondary ud-heading-md file-uploader-module--btn--dLFMW">
                        <span>Upload File</span>
                      </span>
                    </label>
                  </div>
                </div>
                <input type="hidden" value="" />
              </div>
            </div>
          </div>
          <div className="ud-form-group">
            <label className="ud-form-label ud-heading-md">Instructor profile(s)</label>
            <div className="instructor--instructor--yBSiY">
              <Link to="/user/trinh-tien-dat-10/" className="instructor--instructor-profile--mdW0M">
                <Images.TiTick className="ud-icon ud-icon-small ud-icon-color-positive" />
                <img
                  src="https://img-b.udemycdn.com/user/50x50/257515010_0a9a.jpg"
                  alt=""
                  className="ud-avatar ud-avatar-image"
                  width="48"
                  height="48"
                  loading="lazy"
                  style={{ width: '4.8rem', height: '4.8rem' }}
                />
                Trịnh Tiến Đạt
              </Link>
              <div className="instructor--instructor-status---uopi">
                <a className="ud-link-underline" href="/user/edit-profile/">
                  View your instructor profile
                </a>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LandingPage;
