import { OPEN_HEADER_MODAL } from "./authActions";
const defaultState = {
  loginedUsers: [],
  isOpenHeaderModal: false,
};

const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case OPEN_HEADER_MODAL:
      return { ...state, isOpenHeaderModal: !state.isOpenHeaderModal };
      break;

    default:
      return state;
  }
  //   return state;
};

export default authReducer;
