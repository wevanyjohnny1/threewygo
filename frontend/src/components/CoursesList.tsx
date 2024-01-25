import Course from "./Course";

type Props = {
  courses: ICourse[];
  handleDeleteCourse: (course: ICourse) => void;
  handleEditCourse: (course: ICourse) => void;
  handleShowCourseForm: () => void;
};

const CoursesList = ({
  courses,
  handleDeleteCourse,
  handleEditCourse,
  handleShowCourseForm,
}: Props) => {
  return (
    <div>
      <button
        type="button"
        className="createCourseButton"
        onClick={handleShowCourseForm}
      >
        Criar um novo curso
      </button>

      {courses.map((course) => {
        return (
          <Course
            key={course.id}
            createdAt={course.createdAt}
            description={course.description}
            endAt={course.endAt}
            id={course.id}
            image={course.image}
            lessons={course.lessons}
            name={course.name}
            updatedAt={course.updatedAt}
            handleDeleteCourse={() => handleDeleteCourse(course)}
            handleEditCourse={() => handleEditCourse(course)}
          />
        );
      })}
    </div>
  );
};

export default CoursesList;
