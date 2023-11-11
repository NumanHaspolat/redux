import { INC, DEC, RES } from "../types/counterTypes";

const initialState = {
  counter: 0, //? Global State
};

//! Eger state degeri bossa initalState i yani baslangc degerini kullan , cunku reducer MUTLAKA state degeri almali.
export const counterReducer = (state = initialState, action) => {
  //? reducerlar disa bagli olmamali , orn fetch atilmamali , pure js olmali
  switch (action.type) {
    case INC:
      return { counter: state.counter + 1 };
    case DEC:
      return { counter: state.counter - 1 };
    case RES:
      return { counter: 0 };

    default:
      return state; //! Yukarida yazdigim sey ile alakali , hicbirine girmez ise state degerini dondurumeli
  }
};
