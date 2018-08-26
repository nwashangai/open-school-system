import validator from 'validator';
import moment from 'moment';

const roles = ['student', 'teacher', 'admin', 'staff'];
const gender = ['male', 'female'];
const status = ['married', 'single', 'divorced'];
const blood = ['A', 'B', 'AB', 'O'];

/**
 * Create student helper transaction
 * @function
 * @argument {object} data
 */
const sanitize = (inputs) => {
  Object.keys(inputs).forEach((key) => {
    if (typeof inputs[key] === 'string') {
      validator.trim(inputs[key]);
      if (inputs[key].length === 0) {
        delete inputs[key];
      }
    }
  });
}

/**
 * Create student helper transaction
 * @function
 * @argument {object} data
 */
const validate = (inputs) => {
  return !validator.isEmail(inputs.email || 'jon@gmail.com') ? 'invalid email' :
  !validator.isIn(inputs.role || 'teacher', roles) ? 'no such role' :
  !validator.isIn(inputs.marital_status || 'married', status) ? 'invalid marital status' :
  !validator.isIn(inputs.blood_group || 'A', blood) ? 'invalid blood group' :
  !validator.isInt(inputs.number_of_children || '0') ? 'number of children should be a number' :
  !(/^[A-Za-z]+$/.test(inputs.last_name)) ? 'last name must contain only alphabets' :
  !(/^[A-Za-z]+$/.test(inputs.first_name)) ? 'first name must contain only alphabets' :
  !(/^[A-Za-z]+$/.test(inputs.father_name)) ? 'father name must contain only alphabets' :
  !(/^[A-Za-z]+$/.test(inputs.mother_name)) ? 'mother name must contain only alphabets' :
  !(/^[A-Za-z\s]+$/.test(inputs.middle_name)) ? 'middle name must contain only alphabets and space' :
  !(/^[A-Za-z\s]+$/.test(inputs.nationality)) ? 'nationality must contain only alphabets and space' :
  !(/^[A-Za-z\s]+$/.test(inputs.country)) ? 'country must contain only alphabets and space' :
  !(/^[A-Za-z\s]+$/.test(inputs.state)) ? 'state must contain only alphabets and space' :
  !(/^[A-Za-z\s]+$/.test(inputs.city)) ? 'city must contain only alphabets and space' :
  !(/^[A-Za-z\s]+$/.test(inputs.religion)) ? 'religion must contain only alphabets and space' :
  !(/^[A-Za-z\s]+$/.test(inputs.language)) ? 'language must contain only alphabets and space' :
  !(/^[A-Za-z\s]+$/.test(inputs.qualification)) ? 'qualification must contain only alphabets and space' :
  !validator.isIn(inputs.gender || 'male', gender) ? 'invalid gender' :
  !moment(inputs.dob || '2002-04-07').isValid() ? 'invalid date' :
  !validator.isMobilePhone(inputs.phone || '0801234567') ? 'invalid phone number' :
  !validator.isMobilePhone(inputs.phone_2 || '0801234567') ? 'invalid phone number' : 'valid';
}

exports.checkInput = (request, response, next) => {
  sanitize(request.body);
  const res = validate(request.body);
  console.log(res);
  if (res === 'valid') {
    next();
  } else {
    return next(response.status(422).json({ status: 'error', message: res }));
  }
}