import { FaTrashAlt } from "react-icons/fa";
import { MdEdit } from "react-icons/md";

import {
  ActionContainer,
  Container,
  LeftContent,
  RightContent,
} from "../styles/components/course";

type Props = ILesson & {
  handleEditLesson: () => void;
  handleDeleteLesson: () => void;
};

const Lesson = ({
  title,
  duration,
  url,
  handleEditLesson,
  handleDeleteLesson,
}: Props) => {
  return (
    <Container>
      <LeftContent>
        <strong>{title}</strong>
        <strong>duração: {duration} minutos</strong>
      </LeftContent>
      <RightContent>
        <strong>Id da aula {url}</strong>
      </RightContent>

      <ActionContainer>
        <a onClick={handleEditLesson}>
          <MdEdit size={20} />
        </a>
        <a onClick={handleDeleteLesson}>
          <FaTrashAlt color="red" />
        </a>
      </ActionContainer>
    </Container>
  );
};

export default Lesson;
