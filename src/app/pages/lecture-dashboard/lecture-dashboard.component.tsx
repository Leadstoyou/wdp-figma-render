import Header from './children/header.component';
import SideNav from './children/side-nav.component';
import MainContainer from './children/main-container.component';
import Courses from './children/content/courses.component';
import { useLocation, useNavigate } from 'react-router-dom';
import CommunicationQA from './children/content/communication-qa.component';
import PerformanceOverview from './children/content/performance-overview.component';
import CommunicationMessage from './children/content/communication-message.component';
import PerformanceStudents from './children/content/performance-students.component';
import PerformanceReviews from './children/content/performance-reviews.component';
import { useEffect, useState } from 'react';

type Props = {};

const LectureDashboard = (props: Props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [currentContentIndex, setCurrentContentIndex] = useState<number | null>(null);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const contentData = [
    { sidebarIndex: 0, path: '/instructor/courses/', element: <Courses /> },
    { sidebarIndex: 1, path: '/instructor/communication/qa', element: <CommunicationQA /> },
    { sidebarIndex: 2, path: '/instructor/performance/overview', element: <PerformanceOverview /> },
    { sidebarIndex: 3, path: '/instructor/communication/messages', element: <CommunicationMessage /> },
    { sidebarIndex: 4, path: '/instructor/performance/students', element: <PerformanceStudents /> },
    { sidebarIndex: 5, path: '/instructor/performance/reviews', element: <PerformanceReviews /> },
  ];
  useEffect(() => {
    const pathname = location.pathname;
    const isValidCategory = contentData.some(
      (item) => item.path.toString() === pathname || item.path.toString().concat('/') === pathname,
    );
    const validPath = isValidCategory ? pathname : '/instructor/courses/';

    isValidCategory || navigate(validPath);

    const index = contentData.find((item) => item.path.toString() === validPath)?.sidebarIndex;

    if (index !== undefined && index !== -1) {
      setCurrentContentIndex(index);
    }
  }, [contentData, location.pathname, navigate]);

  return (
    <>
      <Header />
      <div className="instructor-page-frame">
        <SideNav sidebarIndex={currentContentIndex !== null ? currentContentIndex : -1} />
        <MainContainer children={currentContentIndex !== null && contentData[currentContentIndex].element} />
      </div>
    </>
  );
};

export default LectureDashboard;
