import React from 'react';

type Props = {};

const PerformanceStudents = (props: Props) => {
  return (
    <div data-purpose="students-route">
      <div>
        <div className="instructor-main-heading ia-responsive-header--container--hFCZQ">
          <h1 className="ud-heading-serif-xxl ia-responsive-header--title--JBkCr">Students</h1>
          <div className="ia-responsive-header--title-dropdown--GO-vD"></div>
        </div>
        <div>
          <div></div>
          <div className="instructor-analytics--no-data--6iVWb" data-purpose="no-student-metrics">
            <h2>No students yet...</h2>
            <p className="instructor-analytics--no-data-subtitle--ECOM5">
              Once you publish your course, come here to learn about your students.
            </p>
            <a
              href="/instructor/courses/"
              className="ud-btn ud-btn-large ud-btn-secondary ud-heading-md instructor-analytics--no-data-cta--WEums"
            >
              <span>Go to Instructor Dashboard</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceStudents;
