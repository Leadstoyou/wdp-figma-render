import { CarouselItem, Course, DropDownItem, LoginInitialValues, UserProfile } from '@app/types';

export const DEFAULT_DATE_FORMAT = 'D/MM/YYYY';
export const DEFAULT_MINUTES_SECONDS_FORMAT = 'mm:ss';
export const USER_INFO_KEY = 'mm3231';
export enum ROLES {
  TEACHER = 1,
  STUDENT = 2,
  ADMIN = 3,
}

export enum Locales {
  VI = 'vi',
  EN = 'en',
  JA = 'ja',
  KR = 'kr',
}

export const CONFIRM_TYPE = {
  REGISTER: 'register',
  FORGOT_PASSWORD: 'forgotPassword',
};

export const APP_LOCALES = [Locales.EN, Locales.VI];

export enum LocalesFullText {
  VI = 'Vietnamese',
  EN = 'English',
  JA = 'Japanese',
  KR = 'Korean',
}

export enum OrderType {
  ASC = 'asc',
  DESC = 'desc',
}

export const REGEX = {
  FIRSTNAME: /^[\d\w]+$/,
  LASTNAME: /^[\d\w]+$/,
  USERNAMEL: /^[\d\w]+$/,
  PHONE_NUMBER: /^[0-9]{10}$/,
  EMAIL: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  PRICE: /^[1-9]\d{0,2}(,\d{3})*(\.\d{1,2})?$/,
};

export const REF = {
  PASSSWORD: 'password',
  NEWPASSWORD: 'newPassword',
};

export const PATHS = {
  DEFAULT: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  FORGOT_PASSWORD: '/forgot-password',
  CHANGE_PASSWORD: '/change-password',
  CONFIRM: '/confirm',
  COURSE: '/courses/:id',
  HOMEPAGE: '/home',
  BUSSINESS: '/business',
  TEACHING: '/teaching',
  CART: '/cart',
  CATEGORY: '/category',
  EDIT_PROFILE: '/user/edit-profile',
  CHANGE_PASSWORD_PROFILE: '/user/change-password-profile',
  COURSE_SEARCH: '/course/search',
  LOGOUT: '/logout',
  NOTIFICATION: '/user/notification',
  WISHLIST: '/user/wishlist',
  COURSES: '/my-courses',
  MESSAGE: '/messages',
  SUPPORT: '/support',
  CREATE_COURSE: '/course/create',
  COURSE_MANAGEMENT: '/instructor/course/:id/manage',
  COURSE_MANAGEMENT_SLUG: '/instructor/course/:id/manage/:category',
  CREATE_CHAPTER: '/course/create/chapter',
  COURSE_TAKING: '/course/:id/learn',
  LECTURE_DASHBOARD: '/instructor/:category',
  LECTURE_DASHBOARD_SlUG: '/instructor/:category/:type',
};

export const INITIAL_VALUES = {
  SEARCH: { q: '' },
  REGISTER: { firstName: '', lastName: '', username: '', email: '', phone: '', password: '', rePassword: '' },
  FORGOT_PASSWORD: { email: '' },
  LOGIN: { email: '', password: '' } as LoginInitialValues,
  CHANGE_PASSWORD: { newPassword: '', confirmPassword: '' },
  EDIT_PROFILE: { firstName: '', lastName: '', phone: '', email: '', role: 2, avatar: '', bio: '' } as UserProfile,
  CHANGE_PASSWORD_PROFILE: { oldPassword: '', newPassword: '', confirmPassword: '' },
  CREATE_COURSE: { name: '', description: '', major: {}, price: 0 } as Course,
};
export const localStorageKeys = {
  USER_TOKEN: 'access_token',
  USER_INFO: 'user_info',
  LANGUAGE: 'language',
};
export const carouselItems: CarouselItem[] = [
  {
    imageSrc: 'https://img-b.udemycdn.com/notices/home_carousel_slide/image/aeff3b43-25ab-4d9e-bc86-0da688e3a9df.jpg',
    title: 'First Carousel Item',
    description: 'Description for the first item.',
    leftButtonLabel: 'Explore',
    rightButtonLabel: 'Gallery',
  },
  {
    imageSrc: 'https://img-b.udemycdn.com/notices/home_carousel_slide/image/aeff3b43-25ab-4d9e-bc86-0da688e3a9df.jpg',
    title: 'Second Carousel Item',
    description: 'Description for the second item.',
    leftButtonLabel: 'Learn More',
    rightButtonLabel: 'View Details',
  },
  {
    imageSrc: 'https://img-b.udemycdn.com/notices/home_carousel_slide/image/aeff3b43-25ab-4d9e-bc86-0da688e3a9df.jpg',
    title: 'Thrid Carousel Item',
    description: 'Description for the second item.',
    leftButtonLabel: 'Learn More',
    rightButtonLabel: 'View Details',
  },
];
export const dropDownItems: DropDownItem[] = [
  {
    name: 'TEACHER',
    role: ROLES.TEACHER,
  },
  {
    name: 'STUDENT',
    role: ROLES.STUDENT,
  },
];
