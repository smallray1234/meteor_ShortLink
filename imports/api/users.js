import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';
import { Accounts } from 'meteor/accounts-base';

Accounts.validateNewUser((user) => {
  const email = user.emails[0].address;

  new SimpleSchema({
    email: {
      type: String,
      regEx: SimpleSchema.RegEx.Email,
    },
  }).validate({ email });

  return true;
});

// // Schema 資料格式檢查
// const petSchema = new SimpleSchema({
//   name: {
//     type: String,
//     min: 1,
//     max: 200,
//     optional: true,
//   },
//   age: {
//     type: Number,
//     min: 0,
//   },
//   contactNumber: {
//     type: String,
//     optional: true,
//     regEx: SimpleSchema.RegEx.Phone, //simpl-schema套件設定的regular expression
//   },
// });

// const employeeSchema = new SimpleSchema({
//   name: {
//     type: String,
//     min: 1,
//     max: 200,
//   },
//   hourlyWage: {
//     type: Number,
//     min: 0,
//   },
//   email: {
//     type: String,
//     regEx: SimpleSchema.RegEx.Email,
//   },
// });

// petSchema.validate({
//   name: 'Alex',
//   age: 22,
//   contactNumber: '1234',
// });
// employeeSchema.validate({
//   name: 'Ben',
//   hourlyWage: 200,
//   email: 'ben@gmail.com',
// });
