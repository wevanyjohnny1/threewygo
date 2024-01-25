export const getYoutubeVideoId = (url: string): string => {
  let regExp =
    /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  let match = url.match(regExp);
  if (match && match[2].length === 11) {
    return match[2];
  }
  return url;
};

export const transformDate = (date: Date): string => {
  const offset = date.getTimezoneOffset();
  const formattedDate = new Date(date.getTime() - offset * 60 * 1000);
  return formattedDate.toISOString().split("T")[0];
};

export const formatDate = (date: string): string => {
  const datePart = date.match(/\d+/g) ?? "";
  const year = datePart[0].substring(0, 4);
  const month = datePart[1];
  const day = datePart[2];

  return `${day}/${month}/${year}`;
};

export const sumLessonsTime = (lessons: ILesson[]) => {
  const total = lessons.reduce((accumulator, lesson) => {
    return accumulator + lesson.duration;
  }, 0);

  return total;
};
