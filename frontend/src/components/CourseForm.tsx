import { zodResolver } from "@hookform/resolvers/zod";
import { useContext, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useForm } from "react-hook-form";
import ReactInputMask from "react-input-mask";
import { z } from "zod";

import CoursesContext from "../contexts/Courses/CoursesContext";
import { formatDate } from "../shared/utils";
import {
  DropzoneContainer,
  FileContainer,
  PreviewHeader,
} from "../styles/components/course-form";

const courseFormSchema = z.object({
  name: z.string(),
  description: z.string(),
  endAt: z.string(),
});

type CourseFormInputs = z.infer<typeof courseFormSchema>;

const CourseForm = (course: Partial<ICourse>) => {
  const [file, setFile] = useState<any>();
  const [filePreview, setFilePreview] = useState<any>();

  const { createCourse, setCurrentScreen, editCourse } =
    useContext(CoursesContext);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { isSubmitting },
  } = useForm<CourseFormInputs>({
    resolver: zodResolver(courseFormSchema),
  });

  useEffect(() => {
    const fetchImageBase64 = async (base64: string) => {
      const image = await fetch(base64);
      const imageBlob = await image.blob();

      const file = new File([imageBlob], "Logo", { type: imageBlob.type });

      const reader: any = new FileReader();
      reader.readAsDataURL(file);

      setFilePreview({
        preview: URL.createObjectURL(file),
      });
      setFile(base64);
    };
    if (course.image) fetchImageBase64(course.image);
    if (course.description) setValue("description", course.description);
    if (course.name) setValue("name", course.name);
    if (course.endAt) setValue("endAt", formatDate(course.endAt));
  }, [course]);

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/jpeg": [],
      "image/png": [],
      "image/svg": [],
    },
    onDrop: (acceptedFiles: any) => {
      acceptedFiles.map((file: any) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = () => {
          setFile(reader.result);
        };

        setFilePreview({
          preview: URL.createObjectURL(file),
        });
      });
    },
  });

  const removePreview = () => {
    setFile(null);
    setFilePreview({});
  };

  const handleCourseForm = async ({
    description,
    endAt,
    name,
  }: CourseFormInputs) => {
    if (course.id) {
      const response = await editCourse({
        id: course.id,
        description,
        endAt,
        name,
        image: file,
        // @ts-ignore
        lessons: course.lessons,
        // @ts-ignore
        createdAt: course.createdAt,
        updatedAt: course.updatedAt,
      });

      if (response) {
        setCurrentScreen("LESSON_LIST");
      }
      return;
    }

    const response = await createCourse({
      description,
      endAt,
      name,
      image: file,
    });

    if (response) {
      setCurrentScreen("CREATE_LESSON");
    }
  };

  return (
    <form action="" onSubmit={handleSubmit(handleCourseForm)}>
      <input
        type="text"
        placeholder="Nome do curso"
        required
        {...register("name")}
      />
      <textarea
        placeholder="Descrição do curso"
        rows={4}
        cols={50}
        required
        {...register("description")}
      />
      <ReactInputMask
        mask="99/99/9999"
        type="text"
        placeholder="Data de finalização"
        required
        {...register("endAt")}
      />

      <FileContainer>
        <PreviewHeader>
          <strong>Imagem do curso</strong>
          {filePreview?.preview?.length > 0 && (
            <button type="button" onClick={() => removePreview()}>
              Excluir
            </button>
          )}
        </PreviewHeader>
        <div {...getRootProps({ className: "dropzone" })}>
          <DropzoneContainer>
            <input {...getInputProps()} />
            {filePreview?.preview?.length > 0 ? (
              <img src={filePreview?.preview} alt="course preview" />
            ) : (
              <strong>Upload</strong>
            )}
          </DropzoneContainer>
        </div>
      </FileContainer>

      <button type="submit" disabled={isSubmitting}>
        Salvar e continuar
      </button>
    </form>
  );
};

export default CourseForm;
