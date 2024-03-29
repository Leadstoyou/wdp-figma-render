import { PATHS, ROLES } from '@app/common/constants';
import Category from '@app/pages/category/category.page';
import ChangePassword from '@app/pages/change-password/change-password.page';
import Confirm from '@app/pages/confirm/confirm.page';
import CourseManagement from '@app/pages/course-manage/course-management.page';
import CourseTaking from '@app/pages/course-taking/course-taking.page';
import CourseSearch from '@app/pages/course-search/course-search.page';
import CourseDetail from '@app/pages/course-detail/course-detail.page';
import CreateCourse from '@app/pages/course/create-course.page';
import ForgotPassword from '@app/pages/forgot-password/forgot-password.page';
import Logout from '@app/pages/helper-component/log-out.component';
import Homepage from '@app/pages/home-page/home-page.page';
import LectureDashboard from '@app/pages/lecture-dashboard/lecture-dashboard.component';
import { Login } from '@app/pages/login/login.page';
import Register from '@app/pages/register/register.page';
import ChangePasswordProfile from '@app/pages/user-info/change-password.page';
import EditProfile from '@app/pages/user-info/edit-profile.page';
import { ProtectedRoute } from '@core/guard/auth.guard';

export const routesForNotAuthenticatedOnly = [
  { path: PATHS.REGISTER, element: <Register /> },
  { path: PATHS.FORGOT_PASSWORD, element: <ForgotPassword /> },
  { path: PATHS.CHANGE_PASSWORD, element: <ChangePassword /> },
  { path: PATHS.LOGIN, element: <Login /> },
  { path: PATHS.CONFIRM, element: <Confirm /> },
];

export const routesForPublic = [
  { path: PATHS.HOMEPAGE, element: <Homepage /> },
  { path: PATHS.DEFAULT, element: <Homepage /> },
  { path: PATHS.CATEGORY, element: <Category /> },
  { path: PATHS.CONFIRM, element: <Confirm /> },
  { path: PATHS.EDIT_PROFILE, element: <EditProfile /> },
  { path: PATHS.CHANGE_PASSWORD_PROFILE, element: <ChangePasswordProfile /> },
  { path: PATHS.COURSE_SEARCH, element: <CourseSearch /> },
  { path: PATHS.COURSE, element: <CourseDetail /> },
  { path: PATHS.LOGOUT, element: <Logout /> },
  { path: PATHS.COURSE_MANAGEMENT, element: <CourseManagement /> },
  { path: PATHS.COURSE_MANAGEMENT_SLUG, element: <CourseManagement /> },
  { path: PATHS.LECTURE_DASHBOARD, element: <LectureDashboard /> },
  { path: PATHS.LECTURE_DASHBOARD_SlUG, element: <LectureDashboard /> },
  { path: PATHS.COURSE_TAKING, element: <CourseTaking /> },
];

export const routesForAuthenticatedOnly = [
  {
    path: PATHS.DEFAULT,
    element: <ProtectedRoute />,
    children: [
      { path: PATHS.EDIT_PROFILE, element: <EditProfile /> },
      { path: PATHS.CHANGE_PASSWORD_PROFILE, element: <ChangePasswordProfile /> },
    ],
  },
  {
    path: PATHS.DEFAULT,
    element: <ProtectedRoute allowedRoles={[ROLES.TEACHER]} />,
    children: [{ path: PATHS.CREATE_COURSE, element: <CreateCourse /> }],
  },
];

export const routesForEmptyHeadLayout = [
  {
    path: PATHS.DEFAULT,
    element: <></>,
    children: [{ path: PATHS.COURSE_TAKING, element: <CourseTaking /> }],
  },
  {
    path: PATHS.DEFAULT,
    element: <></>,
    children: [
      { path: PATHS.COURSE_MANAGEMENT, element: <CourseManagement /> },
      { path: PATHS.COURSE_MANAGEMENT_SLUG, element: <CourseManagement /> },
      { path: PATHS.LECTURE_DASHBOARD, element: <LectureDashboard /> },
      { path: PATHS.LECTURE_DASHBOARD_SlUG, element: <LectureDashboard /> },
    ],
  },
];
