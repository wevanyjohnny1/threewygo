import { createContext, useMemo, useState } from "react";

import { api } from "../../lib/axios";
import { getYoutubeVideoId, transformDate } from "../../shared/utils";
import {
  CoursesContextState,
  CoursesProviderProps,
  CreateCoursePayload,
  CreateLessonPayload,
  CurrentScreen,
} from "./types";

export const CoursesContext = createContext({} as CoursesContextState);

export const CoursesProvider = ({ children }: CoursesProviderProps) => {
  const [courses, setCourses] = useState<ICourse[]>([]);
  const [selectedCourse, setSelectedCourse] = useState<ICourse>({} as ICourse);
  const [currentScreen, setCurrentScreen] =
    useState<CurrentScreen>("COURSE_LIST");

  const fetchCourses = async () => {
    const response = await api.get("courses");

    setCourses(response.data.courses);
  };

  const createCourse = async ({
    description,
    endAt,
    image,
    name,
  }: CreateCoursePayload) => {
    const response = await api.post("courses", {
      name,
      description,
      image,
      endAt: transformDate(new Date(endAt)),
    });

    if (!response?.data) {
      return false;
    }

    setSelectedCourse(response.data.course);
    setCourses(response.data.courses);

    return true;
  };

  const editCourse = async (course: ICourse) => {
    const response = await api.put("courses", {
      ...course,
    });

    if (!response?.data) {
      return false;
    }

    setSelectedCourse(response.data.course);
    setCourses(response.data.courses);
    return true;
  };

  const deleteCourse = async (id: string) => {
    const config = {
      params: {
        id,
      },
    };
    const response = await api.delete("courses", config);

    if (!response?.data) {
      return false;
    }

    setCourses(response.data.courses);

    return true;
  };

  const deleteLesson = async (id: string) => {
    const config = {
      params: {
        id,
      },
    };
    const response = await api.delete("lessons", config);

    if (!response?.data) {
      return false;
    }

    setCourses(response.data.courses);

    return true;
  };

  const createLesson = async ({
    title,
    duration,
    url,
  }: CreateLessonPayload) => {
    const response = await api.post("lessons", {
      title,
      duration,
      url: getYoutubeVideoId(url),
      courseId: selectedCourse.id,
    });

    if (!response?.data) {
      return false;
    }

    setCourses(response.data.courses);

    return true;
  };

  const editLesson = async (lesson: ILesson) => {
    const response = await api.put("lessons", {
      ...lesson,
    });

    if (!response?.data) {
      return false;
    }

    setCourses(response.data.courses);

    return true;
  };

  const CoursesProviderValues = useMemo(
    () => ({
      fetchCourses,
      courses,
      setSelectedCourse,
      selectedCourse,
      createCourse,
      deleteCourse,
      currentScreen,
      setCurrentScreen,
      createLesson,
      deleteLesson,
      editCourse,
      editLesson,
    }),
    [
      fetchCourses,
      courses,
      setSelectedCourse,
      selectedCourse,
      createCourse,
      deleteCourse,
      currentScreen,
      setCurrentScreen,
      createLesson,
      deleteLesson,
      editCourse,
      editLesson,
    ]
  );

  return (
    <CoursesContext.Provider value={CoursesProviderValues}>
      {children}
    </CoursesContext.Provider>
  );
};

export default CoursesContext;
