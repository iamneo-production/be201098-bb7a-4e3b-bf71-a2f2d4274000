const initialState = {
    user: null,
    loading: false,
    error: null
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN_REQUEST':
        return { ...state, loading: true, error: null };
      case 'LOGIN_SUCCESS':
        return { ...state, loading: false, user: action.payload.username, error: null };
      case 'LOGIN_FAILURE':
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export default authReducer;
  