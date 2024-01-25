import { zodResolver } from "@hookform/resolvers/zod";
import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import CoursesContext from "../contexts/Courses/CoursesContext";

const lessonFormSchema = z.object({
  title: z.string(),
  duration: z.number(),
  url: z.string(),
});

type LessonFormInputs = z.infer<typeof lessonFormSchema>;

const LessonForm = (lesson: Partial<ILesson>) => {
  const { createLesson, editLesson, setCurrentScreen } =
    useContext(CoursesContext);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { isSubmitting },
  } = useForm<LessonFormInputs>({
    resolver: zodResolver(lessonFormSchema),
  });

  useEffect(() => {
    if (lesson.title) setValue("title", lesson.title);
    if (lesson.duration) setValue("duration", lesson.duration);
    if (lesson.url) setValue("url", lesson.url);
  }, [lesson]);

  const handleLessonForm = async ({
    title,
    duration,
    url,
  }: LessonFormInputs) => {
    if (lesson.id) {
      const response = await editLesson({
        title,
        duration,
        url,
        id: lesson.id,
        // @ts-ignore
        courseId: lesson.courseId,
        // @ts-ignore
        createdAt: lesson.createdAt,
        updatedAt: lesson.updatedAt,
      });

      if (response) setCurrentScreen("LESSON_LIST");

      return;
    }

    const response = await createLesson({ title, duration, url });

    if (response) {
      setValue("title", "");
      setValue("duration", 0);
      setValue("url", "");
    }
  };

  return (
    <form action="" onSubmit={handleSubmit(handleLessonForm)}>
      <input
        type="text"
        placeholder="Título da aula"
        required
        {...register("title")}
      />
      <input
        type="numeric"
        placeholder="Duração da aula em minutos"
        required
        {...register("duration", { valueAsNumber: true })}
      />
      <input
        type="text"
        placeholder="Url do vídeo"
        required
        {...register("url")}
      />

      <button type="submit" disabled={isSubmitting}>
        Salvar e adicionar mais uma aula
      </button>
    </form>
  );
};

export default LessonForm;
