import {ActionType} from './ActionType';

export const addUser = (registeremail,phone ,name,surname,companyName,jobTitle) => ({
  type: ActionType.USERDATA,
  payload: {registeremail,phone ,name,surname,companyName,jobTitle},
});