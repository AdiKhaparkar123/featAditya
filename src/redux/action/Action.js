import {ActionType} from './ActionType';

export const addUserdepartment = department => ({
  type: ActionType.USER_DEPARTMENT_DATA,
  payload: department,
});
export const addUserfield = field => ({
  type: ActionType.USER_FIELD_DATA,
  payload: field,
});
export const addUserContactData = (registeremail, phone) => ({
  type: ActionType.USER_CONTACT_DATA,
  payload: {registeremail, phone},
});
export const addUserCompanyData = (companyName, jobTitle) => ({
  type: ActionType.USER_COMPANY_DATA,
  payload: {companyName, jobTitle},
});
export const addUserName = (name, surname) => ({
  type: ActionType.USER_DATA_NAME,
  payload: {name, surname},
});

// name,surname,companyName,jobTitle
