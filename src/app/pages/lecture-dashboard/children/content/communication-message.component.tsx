import React from 'react';

type Props = {};

const CommunicationMessage = (props: Props) => {
  return (
    <div>
      <div className="instructor-main-heading ia-responsive-header--container--hFCZQ">
        <h1 className="ud-heading-serif-xxl ia-responsive-header--title--JBkCr">Messages</h1>
      </div>
      <div className="empty-state--empty-state--6FJ8U">
        <img
          src="https://s.udemycdn.com/communication/empty-mailbox-v2.jpg"
          alt=""
          width="240"
          height="180"
          loading="lazy"
        />
        <h3 className="ud-heading-lg">No new messages</h3>
        <p className="empty-state--empty-text---MuQj">
          Direct messages are for you to communicate with your students or other instructors privately. Here’s where
          you’ll see them.
        </p>
      </div>
    </div>
  );
};

export default CommunicationMessage;
