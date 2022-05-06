import { logFormType, regFormType } from '../store/type/login';

// eslint-disable-next-line max-len
const isEmail = (logForm: regFormType | logFormType, fieldName: string): string => (logForm[fieldName]
  && logForm[fieldName].search(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
  )
  ? 'There is a problem with email'
  : '');

export const regValidate = (regForm: regFormType) => {
  const result : {valid:boolean, messages:string[]} = { valid: true, messages: [] };
  Object.keys(regForm).forEach((key) => {
    if (key === 'email') {
      const verd = isEmail(regForm, 'email');
      if (verd.length) {
        result.valid = false;
        result.messages.push(verd);
      }
    }
  });

  if (regForm.password !== regForm.confPassword) {
    result.valid = false;
    result.messages.push('Passwords don\'t coincide');
  }

  return result;
};
