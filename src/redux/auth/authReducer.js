import authAction from "./authActions";

const authReducer = (state, action) => {
  switch (action.type) {
    case authAction.type:
      return {
        isOpenHeaderModal: action.payload,
      };
      break;

    default:
      return state;
  }
  //   return state;
};

export default authReducer;
