import { createSelector } from "@reduxjs/toolkit";

export const selectFavoriteTeachers = state => state.favoriteTeacher.favoriteTeacher;
export const selectAllTeachers = state => state.teachers.teachers;
export const selectFilters = state => state.filters;

export const selectVisibleTeachers = createSelector(
  [selectAllTeachers, selectFilters],
    (teachers, filters) => {
      
        if (filters.language) {
            const visibleTeacher = [];
            for (const obj of teachers) {
                if (obj.languages.includes(filters.language)) {
                    visibleTeacher.push(obj)
                }
            }
            return visibleTeacher
        }
        
  }
);