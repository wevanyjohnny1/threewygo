import { useKeenSlider } from "keen-slider/react";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import CoursesContext from "../contexts/Courses/CoursesContext";
import { formatDate, sumLessonsTime } from "../shared/utils";
import { Course, HomeContainer } from "../styles/pages/home";

import "keen-slider/keen-slider.min.css";

const Home = () => {
  const { fetchCourses, courses } = useContext(CoursesContext);
  const [sliderRef] = useKeenSlider({
    mode: "snap",
    slides: {
      perView: "auto",
      spacing: 48,
    },
  });

  const navigate = useNavigate();

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <>
      {courses.length > 0 ? (
        <HomeContainer ref={sliderRef} className="keen-slider">
          {courses.map((course) => {
            return (
              <Course
                className="keen-slider__slide"
                onClick={() => navigate("/course", { state: { course } })}
              >
                <img src={course.image} alt="course" />

                <header>
                  <strong>{course.name}</strong>
                  <span>Duração: {sumLessonsTime(course.lessons)} minutos</span>
                </header>

                <footer>
                  <strong>Ver detalhes</strong>
                  <span>Data de término: {formatDate(course.endAt)}</span>
                </footer>
              </Course>
            );
          })}
        </HomeContainer>
      ) : null}
    </>
  );
};

export default Home;
