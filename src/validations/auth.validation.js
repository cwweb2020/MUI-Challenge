import * as Yup from 'yup'
export const AuthSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Too Short!,Must be more than 2 characters')
      .max(12, 'Too Long!,Must be less than 12 characters')
      .matches(/^[A-Za-z ]*$/, 'Name must only contain letters and spaces')
      .required('The field is required !'),
  });