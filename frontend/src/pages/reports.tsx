import { useContext } from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LabelList,
} from "recharts";

import CoursesContext from "../contexts/Courses/CoursesContext";
import { sumLessonsTime } from "../shared/utils";
import { Container } from "../styles/pages/reports";

type ChartData = {
  name: string;
  aulas: number;
  tempo_total: number;
};

const Reports = () => {
  const { courses } = useContext(CoursesContext);
  const data: ChartData[] = [];

  if (courses.length > 0) {
    for (let i = 0; i < courses.length; i++) {
      const course = {
        name: courses[i].name,
        aulas: courses[i].lessons.length,
        tempo_total: sumLessonsTime(courses[i].lessons),
      };
      data.push(course);
    }
  }

  const renderCustomizedLabel = (props: any) => {
    const { x, y, width, value } = props;
    const radius = 10;

    return (
      <g>
        <text
          x={x + width / 2}
          y={y - radius}
          fill="#fff"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          {value} aulas
        </text>
      </g>
    );
  };

  return (
    <Container>
      <strong>Relatórios</strong>

      <ResponsiveContainer width="70%" height={400}>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="tempo_total"
            fill="#82ca9d"
            activeBar={<Rectangle fill="gold" stroke="purple" />}
          >
            <LabelList dataKey="aulas" content={renderCustomizedLabel} />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </Container>
  );
};

export default Reports;
