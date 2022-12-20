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
      // console.log("USER_DEPARTMENT_DATA");
      // console.log(action.payload);
      return {...state, addUserdepartment: action.payload};

    case ActionType.USER_FIELD_DATA:
      // console.log("USER_FIELD_DATA");
      // console.log(action.payload);
      return {...state, addUserfield: action.payload};

    case ActionType.USER_CONTACT_DATA:
      // console.log("USER_CONTACT_DATA");
      // console.log(action.payload);
      return {...state, userContactData: action.payload};

    case ActionType.USER_COMPANY_DATA:
      // console.log("USER_COMPANY_DATA");
      // console.log(action.payload);
      return {...state, addUserCompanyData: action.payload};

    case ActionType.USER_DATA_NAME:
      // console.log("USER_DATA_NAME");
      // console.log(action.payload);
      return {...state, addUserName: action.payload};

    default:
      return state;
  }
};
export default userReducer;
