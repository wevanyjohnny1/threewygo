export type CurrentScreen =
  | "CREATE_COURSE"
  | "EDIT_COURSE"
  | "COURSE_LIST"
  | "LESSON_LIST"
  | "CREATE_LESSON"
  | "EDIT_LESSON";

export type CreateCoursePayload = {
  description: string;
  endAt: string;
  image: string;
  name: string;
};

export type CreateLessonPayload = {
  title: string;
  duration: number;
  url: string;
};

export interface CoursesContextState {
  fetchCourses: () => Promise<void>;
  courses: ICourse[];
  selectedCourse: ICourse;
  setSelectedCourse: React.Dispatch<React.SetStateAction<ICourse>>;
  createCourse: (payload: CreateCoursePayload) => Promise<boolean>;
  editCourse: (course: ICourse) => Promise<boolean>;
  deleteCourse: (id: string) => Promise<boolean>;
  deleteLesson: (id: string) => Promise<boolean>;
  createLesson: (payload: CreateLessonPayload) => Promise<boolean>;
  editLesson: (lesson: ILesson) => Promise<boolean>;
  currentScreen: CurrentScreen;
  setCurrentScreen: React.Dispatch<React.SetStateAction<CurrentScreen>>;
}

export type CoursesProviderProps = {
  children: React.ReactNode;
};
