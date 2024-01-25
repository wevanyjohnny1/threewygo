import Lesson from "./Lesson";

type Props = {
  lessons: ILesson[];
  handleDeleteLesson: (lesson: ILesson) => void;
  handleEditLesson: (lesson: ILesson) => void;
};

const LessonList = ({
  lessons,
  handleDeleteLesson,
  handleEditLesson,
}: Props) => {
  return (
    <div>
      {lessons.map((lesson) => {
        return (
          <Lesson
            key={lesson.id}
            createdAt={lesson.createdAt}
            title={lesson.title}
            duration={lesson.duration}
            id={lesson.id}
            url={lesson.url}
            courseId={lesson.courseId}
            updatedAt={lesson.updatedAt}
            handleDeleteLesson={() => handleDeleteLesson(lesson)}
            handleEditLesson={() => handleEditLesson(lesson)}
          />
        );
      })}
    </div>
  );
};

export default LessonList;
