import * as Yup from 'yup';

export const signUpValidationSchema = Yup.object({
    firstName: Yup.string()
      .required('Обязательное поле'),
    lastName: Yup.string()
      .required('Обязательное поле'),
    email: Yup.string().email('Недействительный email').required('Обязательное поле'),
    gender: Yup.string().min(1, 'Не менее 1 символа').required('Обязательное поле'),
    phone:Yup.string().required('Обязательное поле'),
    password: Yup.string().min(8, 'Должно быть не менее 8 символов').max('20','Не более 20 символов').required('Обязательное поле'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Your passwords do not match.'),
  })