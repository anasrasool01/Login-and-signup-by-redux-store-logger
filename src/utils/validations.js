// // import validator from 'is_js';

// const checkEmpty = (val, key) => {
//     if (validator.empty(val.trim())) {
//         return `${key}`;
//     } else {
//         return '';
//     }
// }

// const checkMinLength = (val, minLength, key) => {
//     if (val.trim().length < minLength) {
//         return `Please enter valid ${key}`
//     } else {
//         return '';
//     }
// }

// export default function (data) {
//     const { userName, username, password } = data

//     if (userName !== undefined) {
//         let emptyValidationText = checkEmpty(userName, 'Please enter your user name')
//         if (emptyValidationText !== '') {
//             return emptyValidationText;
//         } else {
//             let minLengthValidation = checkMinLength(userName, 3, 'userName')
//             if (minLengthValidation !== '') {
//                 return minLengthValidation
//             }
//         }
//     }

//     if (username !== undefined) {
//         let emptyValidationText = checkEmpty(username, 'Please enter your username')
//         if (emptyValidationText !== '') {
//             return emptyValidationText;
//         } else {
//             if (!validator.username(username)) {
//                 return 'Please enter valid username'
//             }
//         }
//     }


//     if (password !== undefined) {
//         let emptyValidationText = checkEmpty(password, 'Please enter your password')
//         if (emptyValidationText !== '') {
//             return emptyValidationText;
//         } else {
//             let minLengthValidation = checkMinLength(password, 6, 'password')
//             if (minLengthValidation !== '') {
//                 return minLengthValidation
//             }
//         }
//     }

// }

