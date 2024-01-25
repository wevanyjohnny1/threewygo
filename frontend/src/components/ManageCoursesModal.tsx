import * as Dialog from "@radix-ui/react-dialog";
import { useContext, useState } from "react";
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

import CoursesContext from "../contexts/Courses/CoursesContext";
import {
  CloseButton,
  Content,
  Overlay,
} from "../styles/components/manage-courses-modal";
import CourseForm from "./CourseForm";
import CoursesList from "./CoursesList";
import LessonForm from "./LessonForm";
import LessonList from "./LessonList";
import "react-responsive-modal/styles.css";

const ManageCoursesModal = () => {
  const {
    courses,
    deleteCourse,
    deleteLesson,
    currentScreen,
    setCurrentScreen,
  } = useContext(CoursesContext);
  const [selectedCourse, setSelectedCourse] = useState<ICourse>({} as ICourse);
  const [selectedLesson, setSelectedLesson] = useState<ILesson>({} as ILesson);
  const navigate = useNavigate();

  const handleEditCourse = (course: ICourse) => {
    setCurrentScreen("EDIT_COURSE");
    setSelectedCourse(course);
  };

  const handleDeleteCourse = async (course: ICourse) => {
    await deleteCourse(course.id);
  };

  const handleEditLesson = (lesson: ILesson) => {
    setCurrentScreen("EDIT_LESSON");
    setSelectedLesson(lesson);
  };

  const handleDeleteLesson = async (lesson: ILesson) => {
    await deleteLesson(lesson.id);
  };

  const handleShowCourseForm = () => {
    setCurrentScreen("CREATE_COURSE");
  };

  const handleCloseModal = () => {
    setCurrentScreen("COURSE_LIST");
  };

  const handleGoToReports = () => {
    navigate("/reports");
  };

  return (
    <Dialog.Portal>
      <Overlay />

      <Content onPointerDownOutside={(e) => e.preventDefault()}>
        <Dialog.Title>Gerenciar cursos</Dialog.Title>

        <CloseButton onClick={handleCloseModal}>
          <IoClose size={24} />
        </CloseButton>

        {currentScreen === "CREATE_COURSE" && <CourseForm />}
        {currentScreen === "EDIT_COURSE" && (
          <CourseForm
            id={selectedCourse.id}
            name={selectedCourse.name}
            description={selectedCourse.description}
            endAt={selectedCourse.endAt}
            image={selectedCourse.image}
            createdAt={selectedCourse.createdAt}
            updatedAt={selectedCourse.updatedAt}
          />
        )}
        {currentScreen === "COURSE_LIST" && (
          <CoursesList
            courses={courses}
            handleDeleteCourse={handleDeleteCourse}
            handleEditCourse={handleEditCourse}
            handleShowCourseForm={handleShowCourseForm}
          />
        )}
        {currentScreen === "LESSON_LIST" && (
          <LessonList
            lessons={selectedCourse.lessons}
            handleDeleteLesson={handleDeleteLesson}
            handleEditLesson={handleEditLesson}
          />
        )}
        {currentScreen === "EDIT_LESSON" && (
          <LessonForm
            id={selectedLesson.id}
            title={selectedLesson.title}
            duration={selectedLesson.duration}
            url={selectedLesson.url}
            courseId={selectedLesson.courseId}
            createdAt={selectedLesson.createdAt}
            updatedAt={selectedLesson.updatedAt}
          />
        )}
        {currentScreen === "CREATE_LESSON" && <LessonForm />}

        <Dialog.Close onClick={handleCloseModal} asChild>
          <button type="button" className="reports" onClick={handleGoToReports}>
            Relatórios
          </button>
        </Dialog.Close>
      </Content>
    </Dialog.Portal>
  );
};

export default ManageCoursesModal;
