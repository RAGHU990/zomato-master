const AuthReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case SIGN_IN:
        return {
          ...state,
        };
  
      case SIGN_UP:
        return {
          ...state,
        };
  
      default:
        return {
          ...state,
        };
    }
  };
  
  export default AuthReducer;