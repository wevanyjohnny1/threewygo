declare interface ICourse {
  id: string;
  name: string;
  description: string;
  image: string;
  endAt: string;
  createdAt: Date;
  updatedAt?: Date;
  lessons: ILesson[];
}
