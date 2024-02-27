import { useEffect, useMemo, useState } from 'react';
import IntendedLearner from './children/content/intended-learner.component';
import HeaderCourseManagement from './children/header.component';
import Sidebar from './children/sidebar.component';
import { useLocation, useNavigate } from 'react-router-dom';
import { PATHS } from '@app/common/constants';
import Curriculm from './children/content/curriculm.component';
import LandingPage from './children/content/landing-page.component';
import Pricing from './children/content/pricing.component';
import Promotions from './children/content/promotion.component';

type Props = {};

const CourseManagement = (props: Props) => {
  const contentIndex = useMemo(
    () => [
      { sidebarIndex: 0, path: 'goals', contentElement: <IntendedLearner /> },
      { sidebarIndex: 1, path: 'goals1', contentElement: <IntendedLearner /> },
      { sidebarIndex: 2, path: 'goals2', contentElement: <IntendedLearner /> },
      { sidebarIndex: 3, path: 'goals3', contentElement: <IntendedLearner /> },
      { sidebarIndex: 4, path: 'curriculm', contentElement: <Curriculm /> },
      { sidebarIndex: 5, path: 'goals5', contentElement: <IntendedLearner /> },
      { sidebarIndex: 6, path: 'basics', contentElement: <LandingPage /> },
      { sidebarIndex: 7, path: 'pricing', contentElement: <Pricing /> },
      { sidebarIndex: 8, path: 'promotions', contentElement: <Promotions /> },
      { sidebarIndex: 9, path: 'messages', contentElement: <IntendedLearner /> },
    ],
    [],
  );
  const [currentContent, setCurrentContent] = useState<number | null>(null);
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    const pathParts = location.pathname.split('/').filter(Boolean);

    const categoryParam = pathParts[pathParts.length - 1];

    const isValidCategory = contentIndex.some((item) => item.path.toString() === categoryParam);

    const category = isValidCategory ? categoryParam : 'goals';

    isValidCategory || navigate(`${PATHS.COURSE_MANAGEMENT}/${category}`);

    const index = contentIndex.find((item) => item.path.toString() === category)?.sidebarIndex;

    if (index !== undefined && index !== -1) {
      setCurrentContent(index);
    }
  }, [location.pathname, contentIndex, navigate]);
  return (
    <>
      <HeaderCourseManagement />
      <div className="ud-container app--container--Lr-IO">
        <Sidebar index={currentContent as number} />
        <div className="app--content--Twql8">
          {currentContent !== null && contentIndex[currentContent].contentElement}
        </div>
      </div>
    </>
  );
};

export default CourseManagement;
