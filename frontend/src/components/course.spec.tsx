import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Course from "./Course";

describe("Test course components", () => {
  const lessons = [
    {
      id: "1",
      duration: 30,
      title: "aula",
      url: "",
      courseId: "",
      createdAt: new Date(),
    },
    {
      id: "2",
      duration: 45,
      title: "aula 2",
      url: "",
      courseId: "",
      createdAt: new Date(),
    },
  ];

  const handleEditCourseMock = jest.fn();
  const handleDeleteCourseMock = jest.fn();

  function course() {
    return render(
      <Course
        id="1"
        name="Sample Course"
        description=""
        endAt="2024-01-31"
        image=""
        createdAt={new Date()}
        lessons={lessons}
        handleEditCourse={handleEditCourseMock}
        handleDeleteCourse={handleDeleteCourseMock}
      />
    );
  }

  it("should match with snapshot", () => {
    screen.debug();
    expect(course).toMatchSnapshot();
  });

  test("displays course details correctly", () => {
    const { getByText } = course();

    expect(getByText("Sample Course")).toBeInTheDocument();
    expect(getByText("2 aulas")).toBeInTheDocument();
    expect(getByText("75 minutos de aulas")).toBeInTheDocument();
    expect(getByText("encerramento 31/01/2024")).toBeInTheDocument();
  });
});
