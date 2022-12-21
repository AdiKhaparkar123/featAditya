import {ActionType} from '../action/ActionType';

const initialState = {
  addUserdepartment: '',

  addUserfield: '',

  userContactData: {
    registeremail: '',
    phone: '',
  },
  addUserCompanyData: {
    companyName: '',
    jobTitle: '',
  },
  addUserName: {
    name: '',
    surname: '',
  },
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.USER_DEPARTMENT_DATA:
      return {...state, addUserdepartment: action.payload};

    case ActionType.USER_FIELD_DATA:
      return {...state, addUserfield: action.payload};

    case ActionType.USER_CONTACT_DATA:
      return {...state, userContactData: action.payload};

    case ActionType.USER_COMPANY_DATA:
      return {...state, addUserCompanyData: action.payload};

    case ActionType.USER_DATA_NAME:
      return {...state, addUserName: action.payload};

    default:
      return state;
  }
};
export default userReducer;
