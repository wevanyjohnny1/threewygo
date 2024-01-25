declare interface ILesson {
  id: string;
  title: string;
  duration: number;
  url: string;
  courseId: string;
  createdAt: Date;
  updatedAt?: Date;
}
