import { onValue, ref } from 'firebase/database';
import { db } from '../../firebase';
import { useEffect, useState } from 'react';

export const TeachersList = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
             try {
                 const teachersRef = ref(db, "teachers");
               onValue(
                 teachersRef,
                   (snapshot) => {
                   setData(snapshot.val());
                   setLoading(false);
                 })
                 
             } catch (error) {
               setError(error);
               setLoading(false);
             }
        }
        fetchData()
        return () => {
          
        };
        
    }, [])

    console.log(data)
    return (
        <div>Teachers list</div>
    )
}