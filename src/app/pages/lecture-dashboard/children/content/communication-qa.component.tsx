import React from 'react';

type Props = {};

const CommunicationQA = (props: Props) => {
  return (
    <div>
      <div className="instructor-main-heading ia-responsive-header--container--hFCZQ">
        <h1 className="ud-heading-serif-xxl ia-responsive-header--title--JBkCr">Q&amp;A</h1>
      </div>
      <div className="empty-state--empty-state--6FJ8U">
        <img
          src="https://s.udemycdn.com/communication/empty-mailbox-v2.jpg"
          alt=""
          width="240"
          height="180"
          loading="lazy"
        />
        <h3 className="ud-heading-lg">No questions yet</h3>
        <p className="empty-state--empty-text---MuQj">
          Q&amp;A is a forum where your students can ask questions, hear your responses, and respond to one another.
          Here’s where you’ll see your courses’ Q&amp;A threads
        </p>
      </div>
    </div>
  );
};

export default CommunicationQA;
