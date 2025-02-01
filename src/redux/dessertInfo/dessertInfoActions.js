import { createAction } from "@reduxjs/toolkit";
// const dessertInfoActions = () => ({
//     type: "infoProdukt",
//     payload: "Функція ще не доступна",
//   });

//   export default dessertInfoActions;

export const setInfo = createAction("desserts/setInfo", () => {
  return {
    payload: "Функція ще не доступна",
  };
});
