import { useCallback, useState } from "react";
import { CiPlay1 } from "react-icons/ci";
import { useLocation } from "react-router-dom";

import YoutubeFrame from "../components/YoutubeFrame";
import {
  Container,
  CourseTitleBox,
  DescriptionBox,
  Lesson,
  LessonsContainer,
} from "../styles/pages/course";

const Course = () => {
  const [selectedLesson, setSelectedLesson] = useState<ILesson>({} as ILesson);

  const { state } = useLocation();

  const { course } = state;

  const { description, lessons, name }: ICourse = course;

  const handleLesson = useCallback((lesson: ILesson) => {
    setSelectedLesson(lesson);
  }, []);

  return (
    <>
      <Container>
        <CourseTitleBox>
          <strong>{name}</strong>
        </CourseTitleBox>

        <DescriptionBox>
          <strong>Descrição</strong>
          <h5>{description}</h5>
        </DescriptionBox>

        {selectedLesson.url && <YoutubeFrame embedId={selectedLesson.url} />}

        <LessonsContainer>
          {lessons.map((lesson) => {
            return (
              <Lesson
                onClick={() => handleLesson(lesson)}
                color={selectedLesson.id === lesson.id ? "green" : "normal"}
              >
                <strong>{lesson.title}</strong>
                <CiPlay1 />
              </Lesson>
            );
          })}
        </LessonsContainer>
      </Container>
    </>
  );
};

export default Course;
