import { FaTrashAlt } from "react-icons/fa";
import { MdEdit } from "react-icons/md";

import { formatDate, sumLessonsTime } from "../shared/utils";
import {
  ActionContainer,
  Container,
  LeftContent,
  RightContent,
} from "../styles/components/course";

type Props = ICourse & {
  handleEditCourse: () => void;
  handleDeleteCourse: () => void;
};

const Course = ({
  endAt,
  lessons,
  name,
  handleEditCourse,
  handleDeleteCourse,
}: Props) => {
  return (
    <Container>
      <LeftContent>
        <strong>{name}</strong>
        <strong>{lessons.length} aulas</strong>
      </LeftContent>
      <RightContent>
        <strong>{sumLessonsTime(lessons)} minutos de aulas</strong>
        <strong>encerramento {formatDate(endAt)}</strong>
      </RightContent>

      <ActionContainer>
        <a data-testid="edit-course" onClick={handleEditCourse}>
          <MdEdit size={20} />
        </a>
        <a data-testid="delete-course" onClick={handleDeleteCourse}>
          <FaTrashAlt color="red" />
        </a>
      </ActionContainer>
    </Container>
  );
};

export default Course;
