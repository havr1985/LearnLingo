import { useEffect, useState } from "react";
import { requestTeachers } from "../../service/api";
import { TeachersItem } from "../TeachersItem/TeachersItem";
import { List, LoadMoreBtn } from "./TeachersList.styled";

export const TeachersList = () => {
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lastTeacherId, setLastTeacherId] = useState(1);
  const [visibleClickMore, setVisibleClickMore] = useState(true);
  const pageSize = 4;

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const result = await requestTeachers(lastTeacherId, pageSize);

        const teachersArr = Object.values(result);
        const arr = teachersArr.filter((item) => item !== null);
        setTeachers((prevTeachers) => [...prevTeachers, ...arr]);
        arr.length < pageSize && setVisibleClickMore(false)
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchTeachers();
  }, [lastTeacherId]);

  const clickLoadMore = () => {
    setLastTeacherId(teachers.length + 1);
  };

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
        {visibleClickMore && (
          <LoadMoreBtn type="button" onClick={clickLoadMore}>
            Load more
          </LoadMoreBtn>)}
      </List>
      
      
    </div>
  );
};
