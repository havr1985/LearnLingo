import { useDispatch, useSelector } from "react-redux";
import { selectAllTeachers } from "../../redux/teachersSelectors";
import { changeLanguage, changeLevel } from "../../redux/filtersSlice";

export const Filters = () => {

  const allTeachers = useSelector(selectAllTeachers); 
  const dispatch = useDispatch()
   
    const languages = allTeachers.flatMap((item) => item.languages);
    const uniqueLanguages = [...new Set(languages)];

    const levels = allTeachers.flatMap((item) => item.levels);
  const uniqueLevels = [...new Set(levels)];
  
  const handlerLangChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  const handlerLevelChange = (e) => {
    dispatch(changeLevel(e.target.value));
  };

    

    return (
      <div>
        <label htmlFor="languages">Languages</label>
        <select id="languages" name="languages" onChange={handlerLangChange}>
          <option value="" label="All" />
          {uniqueLanguages.map((item, idx) => (
            <option key={idx} value={item} label={item} />
          ))}
        </select>
        <label htmlFor="levels">Level of knowledge</label>
        <select id="levels" name="levels" onChange={handlerLevelChange}>
          <option value="" label="All" />
          {uniqueLevels.map((item, idx) => (
            <option key={idx} value={item} label={item} />
          ))}
        </select>
      </div>
    );
}