import axios from "axios";

const baseUrl =
  "https://learn-lingo-f6394-default-rtdb.europe-west1.firebasedatabase.app/";
    
  
export const requestTeachers = async (lastTeacherId, pageSize) => {
  const { data } = await axios.get(
    `${baseUrl}.json?orderBy="id"&startAt=${lastTeacherId}&limitToFirst=${pageSize}`
  );
  return data
};
