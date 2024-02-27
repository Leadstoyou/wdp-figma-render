import DashboardContent from './children/dashboard-content.component';
import Header from './children/header.component';
import Sidebar from './children/sidebar.component';
import VideoDisplay from './children/video-display.component';

type Props = {};

const CourseTaking = (props: Props) => {
  return (
    <div>
      <Header />
      <div className="app--column-container--3AItG">
        <div className="app--content-column--HC_i1">
          <VideoDisplay />
          <Sidebar />
          <DashboardContent />
        </div>
      </div>
    </div>
  );
};

export default CourseTaking;
