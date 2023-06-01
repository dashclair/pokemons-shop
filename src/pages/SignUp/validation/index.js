import * as Yup from 'yup';

export const signUpValidationSchema = Yup.object({
    firstName: Yup.string()
      .required('Required'),
    lastName: Yup.string()
      .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    gender: Yup.string().min(1, 'At least 1 character').required('Required'),
    phone:Yup.string().required('Required'),
    password: Yup.string().min(8, 'At least 8 characters').max('20','No more than 20 characters').required('Required'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Your passwords do not match.'),
  })