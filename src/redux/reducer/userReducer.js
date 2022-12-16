import {ActionType} from '../action/ActionType';

const initialState = {
  UserData: {
    registeremail: '',
    phone: '',
    name: '',
    surname: '',
    companyName: '',
    jobTitle: '',
  },
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.USERDATA:
      return {...state, UserData: {...action.payload}};

    default:
      return state;
  }
};
export default userReducer;
