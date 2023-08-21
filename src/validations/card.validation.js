import * as Yup from 'yup'


export const CardSchema = Yup.object().shape({
    card_name: Yup.string()
      .min(3, 'Too Short!,Must be more than 2 characters')
      .max(12, 'Too Long!,Must be less than 12 characters')
      .matches(/^[A-Za-z ]*$/, 'Name must only contain letters and spaces')
      .required('The field is required !'),
    card_number: Yup.string()
    .min(16,'Must be 16 numbers')
    .max(16,'Must be 16 numbers')
    .matches(/^[0-9]*$/,'Must be contain only numbers')
    .required('The field is required !'),
    exp_date:Yup.string()
    .matches(/^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/,'Incorrect Format')
    .required('The field is required !'),
    cvv: Yup.string()
    .min(3,'Must be 3 numbers')
    .max(3,'Must be 3 numbers') 
    .matches(/^[0-9]*$/,'Must be contain only numbers')
    .required('The field is required !'),
    card_holder:Yup.string()
    .min(3,'Must have 3 characters')
    .required('The field is required !')
  });