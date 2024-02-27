import { Images } from '@assets/images';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

type Props = {
  index: number;
};

const Sidebar = ({ index }: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activedIndex, setActivedIndex] = useState(0);
  const sidebarData = [
    {
      label: 'Plan your course',
      innerData: [
        {
          index: 0,
          url: '/instructor/course/5832004/manage/goals',
          title: 'Intended learners',
        },
        // {
        //   index: 1,
        //   url: '/instructor/course/5832004/manage/goals',
        //   title: 'Course Structure',
        // },
        // {
        //   index: 2,
        //   url: '/instructor/course/5832004/manage/goals',
        //   title: 'Set up & test video',
        // },
      ],
    },
    {
      label: 'Create your content',
      innerData: [
        // {
        //   index: 3,
        //   url: '/instructor/course/5832004/manage/goals',
        //   title: 'Film & Edit',
        // },
        {
          index: 4,
          url: '/instructor/course/5832004/manage/curriculm',
          title: 'Curriculm',
        },
        // {
        //   index: 5,
        //   url: '/instructor/course/5832004/manage/goals',
        //   title: 'Caption (optional)',
        // },
      ],
    },
    {
      label: 'Publish your course',
      innerData: [
        {
          index: 6,
          url: '/instructor/course/5832004/manage/basics',
          title: 'Course landing page',
        },
        {
          index: 7,
          url: '/instructor/course/5832004/manage/pricing',
          title: 'Pricing',
        },
        {
          index: 8,
          url: '/instructor/course/5832004/manage/promotions',
          title: 'Promotions',
        },
        // {
        //   index: 9,
        //   url: '/instructor/course/5832004/manage/messages',
        //   title: 'Course messages',
        // },
      ],
    },
  ];
  return (
    <>
      <div className="side-nav--side-nav--di-pb" data-purpose="side-menu">
        <button
          type="button"
          className="ud-btn ud-btn-large ud-btn-ghost ud-heading-md ud-btn-icon ud-btn-icon-large side-nav--toggle-menu-btn--L6Czq"
        >
          <Images.IoReorderThree className="ud-icon ud-icon-large" />
        </button>
        {sidebarData.map((items, index) => (
          <ul className="ud-unstyled-list side-nav--nav--sSuMu side-nav--nav-sections--W20O-" key={index}>
            <li className="side-nav--nav-section--Mw5iN">
              <div className="ud-heading-md side-nav--nav-section-title--kHLlu">{items.label}</div>
              <ul className="ud-unstyled-list">
                {items.innerData.map((innerItem, innerIndex) => (
                  <li
                    className={`side-nav--nav-item--fEcbI ${
                      innerItem.index === activedIndex && 'side-nav--nav-item-active--vd-6P'
                    }`}
                    key={innerIndex}
                  >
                    <Link
                      className="ud-link-neutral side-nav--nav-item-link--7k31Q"
                      data-purpose="react-nav-link-goals"
                      to={innerItem.url}
                      onClick={() => {
                        setActivedIndex(innerItem.index);
                      }}
                    >
                      <span className="side-nav--completion--KfXbf"></span>
                      <span>{innerItem.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        ))}

        <div className="side-nav--publish-button--TehuX">
          <button type="button" className="ud-btn ud-btn-large ud-btn-brand ud-heading-md">
            <span>Submit for Review</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
