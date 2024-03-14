import axios from "axios";

const baseUrl =
    "https://learn-lingo-f6394-default-rtdb.europe-west1.firebasedatabase.app/";
  
export const requestTeachers = async() => {
    const { data } = await axios.get(`${baseUrl}.json`);
    return data
    }