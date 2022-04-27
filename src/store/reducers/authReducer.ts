import { SIGN_IN } from '../actions/authActions';

export const initialState = {};

const authReducer = (store, action) => {
  switch (action.type) {
    case SIGN_IN: {
      const activeSession = action.payload;

      return activeSession;
    }

    default:
      return store;
  }
};

export default authReducer;
