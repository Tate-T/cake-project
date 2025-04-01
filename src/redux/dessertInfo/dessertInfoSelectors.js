import { createSelector } from "@reduxjs/toolkit";





export const selectorComments = state => state.dessertsInfo.comments;
export const selectorCount = (state) => state.dessertsInfo.count;

export const selectorCommentsCount = createSelector(
    [selectorComments, selectorCount],
    () => {
        if (selectorComments.lenght >= 0) {
            return selectorCount = selectorComments.lenght;
        } else {
            return selectorCount;
        };
    }
);
// export const selectorCommentsCount = state => {
//     const countComments = selectorComments(state);

//     return countComments.reduce(
//         (count) => {
//             if (countComments.length >= 0) {
//                 count = countComments.length;
//             };
//         }, { count: 0, }
//     );
// };





