import { useEffect, useState } from "react";
import { requestTeachers } from "../../service/api";
import { TeachersItem } from "../TeachersItem/TeachersItem";

export const TeachersList = () => {
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const result = await requestTeachers();
        setTeachers(result);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchTeachers();
  }, []);
console.log(teachers)
  return (
    <div>
      {loading && <div>Loading...</div>}
      {error && <div>Error</div>}
      <ul>
        {teachers.map((teacher) => (
          <li key={teacher.id}>
            <TeachersItem teacher={teacher} />
          </li>
        ))}
      </ul>
    </div>
  );
};
