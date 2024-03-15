import { useEffect, useState } from "react";
import { requestTeachers } from "../../service/api";
import { TeachersItem } from "../TeachersItem/TeachersItem";
import { List } from "./TeachersList.styled";

export const TeachersList = () => {
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [visibleItems, setVisibleItems] = useState(4);
  const [pageSize, setPageSize] = useState(4);
  const [currentPage, setCurrentPage] = useState(1)

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
  }, [currentPage, pageSize]);

  const clickLoadMore = () => {
    setVisibleItems(prev => prev + pageSize);
    setCurrentPage(prev => prev + 1)
  }

  return (
    <div>
      {loading && <div>Loading...</div>}
      {error && <div>Error</div>}
      <List>
        {teachers.map((teacher) => (
          <li key={teacher.id}>
            <TeachersItem teacher={teacher} />
          </li>
        ))}
      </List>
      <button type="button" onClick={clickLoadMore}>Load more</button>
    </div>
  );
};
