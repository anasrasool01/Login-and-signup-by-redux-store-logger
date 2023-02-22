import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import ButtonWithLoader from '../../Components/ButtonWithLoader';
import TextInputWithLable from '../../Components/TextInputWithLabel';
import { showError } from '../../utils/helperFunction';
import actions from '../../redux/actions';
import { showMessage } from 'react-native-flash-message';
import { Formik } from "formik";
import * as Yup from "yup";

const Signup = ({ navigation }) => {
    const [username, SetUsername] = useState("")
    const [first_name, Setfirst_name] = useState("")
    const [last_name, Setlast_name] = useState("")
    const [email, Setemail] = useState("")
    const [password, SetPassword] = useState("")
    const [password2, Setpassword2] = useState("")
    const [Loading, SetLoading] = useState(false)
    const [secure, SetSecure] = useState(true)

    const validationSchema = Yup.object().shape({
        username: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('User Name Required'),
        first_name: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('firstName Required'),
        last_name: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('lastName Required'),

        email: Yup
            .string()
            .email("Please enter valid email")
            .required('Email is required'),
        password: Yup
            .string()
            .matches(/\w*[a-z]\w*/, "Password must have a small letter")
            .matches(/\w*[A-Z]\w*/, "Password must have a capital letter")
            .matches(/\d/, "Password must have a number")
            .matches(/[!@#$%^&*()\-_"=+{}; :,<.>]/, "Password must have a special character")
            .min(8, ({ min }) => `Password must be at least ${min} characters`)
            .required('Password is required'),
        Password2: Yup
            .string()
            .oneOf([Yup.ref('password')], 'Passwords do not match')
            .required('Confirm password is required'),
    });

    const onSignup = async (values) => {
        // console.log(values)
        try {
            const res = await actions.signup({
                username: values.username,
                email: values.email,
                first_name: values.first_name,
                last_name: values.last_name,
                password: values.password,
                password2: values.password2,
            })
            console.log("res of signup", res)
            showMessage("Registered successfully Please verify your username")
            SetLoading(false)
            navigation.goBack()
        }
        catch (error) {
            console.log("error")
            showError(error)
            SetLoading(false)
        }
        // }
    }
    return (
        <View style={styles.container}>
            <Formik
                initialValues={{ username: '', first_name: '', last_name: '', email: '', password: '', password2: '', }}
                onSubmit={onSignup}
                validationSchema={validationSchema}
            >
                {({ values, handleChange, errors, setFieldTouched, touched, handleSubmit }) => (
                    <View>
                        <TextInputWithLable
                            label="Username"
                            placheHolder="enter your username"
                            value={values.username}
                            onChangeText={handleChange('username')}
                            name="username"
                        />
                        {console.log(errors)}
                        {touched.username && errors.username &&
                            <Text style={{ fontSize: 12, color: '#FF0D10' }}>{errors.username}</Text>
                        }
                        <TextInputWithLable
                            label="First name"
                            placheHolder="Enter your First name"
                            value={values.first_name}
                            onChangeText={handleChange('first_name')}
                            name="first_name"
                        />
                        {console.log(errors)}
                        {touched.first_name && errors.first_name &&
                            <Text style={{ fontSize: 12, color: '#FF0D10' }}>{errors.first_name}</Text>
                        }
                        <TextInputWithLable
                            label="Last name"
                            placheHolder="Enter your Last name"
                            value={values.last_name}
                            onChangeText={handleChange('last_name')}
                            name="last_name"
                        />
                        {console.log(errors)}
                        {touched.last_name && errors.last_name &&
                            <Text style={{ fontSize: 12, color: '#FF0D10' }}>{errors.last_name}</Text>
                        }
                        <TextInputWithLable
                            label="Email"
                            placheHolder="Enter your Email"
                            value={values.email}
                            onChangeText={handleChange('email')}
                            name="email"
                        />
                        {console.log(errors)}
                        {touched.email && errors.email &&
                            <Text style={{ fontSize: 12, color: '#FF0D10' }}>{errors.email}</Text>
                        }
                        <TextInputWithLable
                            label="Password"
                            placheHolder="enter your password"
                            secureTextEntry={secure}
                            value={values.password}
                            onChangeText={handleChange('password')}
                            name="password"
                        />
                        {touched.password && errors.password &&
                            <Text style={{ fontSize: 12, color: '#FF0D10' }}>{errors.password}</Text>
                        }
                        <TextInputWithLable
                            label="Confirm Your Password"
                            placheHolder="Enter your password"
                            secureTextEntry={secure}
                            value={values.password2}
                            onChangeText={handleChange('password2')}
                            name="password2"
                        />
                        {touched.password2 && errors.password2 &&
                            <Text style={{ fontSize: 12, color: '#FF0D10' }}>{errors.password2}</Text>
                        }
                        <ButtonWithLoader
                            text="Signup"
                            // onPress={(handleSubmit, onSignup)}
                            onPress={() => navigation.goBack()}
                        />
                    </View>
                )}
            </Formik >
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: 'white'
    },
});
export default Signup;






// import React, { useState } from 'react';
// import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
// import ButtonWithLoader from '../../Components/ButtonWithLoader';
// import TextInputWithLable from '../../Components/TextInputWithLabel';
// import { showError } from '../../utils/helperFunction';
// import actions from '../../redux/actions';
// import { showMessage } from 'react-native-flash-message';
// // import validator from '../../utils/validations';
// import { Formik } from "formik";
// import * as Yup from "yup";


// const Signup = ({ navigation }) => {
//     const [username, SetUsername] = useState("")
//     const [first_name, Setfirst_name] = useState("")
//     const [last_name, Setlast_name] = useState("")
//     const [email, Setemail] = useState("")
//     const [password, SetPassword] = useState("")
//     const [password2, Setpassword2] = useState("")
//     const [Loading, SetLoading] = useState(false)
//     const [secure, SetSecure] = useState(true)

//     const validationSchema = Yup.object().shape({
//         username: Yup.string()
//             .min(1, "Mininum 1 characters")
//             .max(15, "Maximum 15 characters")
//             .test("username", "This username has already been taken", function (username) {
//                 return checkAvailabilityUsername(username);
//             })
//             .required("You must enter a username"),
//         password: Yup
//             .string()
//             .min(8, ({ min }) => `Password must be at least ${min} characters`)
//             .required('Password is required'),
//     });

//     const onSignup = async () => {
//         // const checkValid = true

//         // if (checkValid) {
//         SetLoading(true)
//         try {
//             const res = await actions.signup({
//                 name:
//                     username,
//                 email,
//                 first_name,
//                 last_name,
//                 password,
//                 password2,
//             })
//             console.log("res of signup", res)
//             showMessage("Registered successfully Please verify your username")
//             SetLoading(false)
//             navigation.goBack()
//         }
//         catch (error) {
//             console.log("error")
//             showError(error.message)
//             SetLoading(false)
//         }
//         // }
//     }
//     return (
//         <View style={styles.container}>
//             <Formik
//                 initialValues={{ username: '', password: '' }}
//                 onSubmit={values => alert(JSON.stringify(values))}
//                 validationSchema={validationSchema}
//             >
//                 {({ values, handleChange, errors, setFieldTouched, touched, handleSubmit }) => (

//                     <View>


//                         <TextInputWithLable
//                             label="Username"
//                             // value={username}
//                             placheHolder="enter your username"
//                             value={values.username}
//                             onChangeText={handleChange('username')}
//                             // onBlur={() => setFieldTouched('textusername')}
//                             // onChangeText={(textusername) => SetUsername(textusername)}
//                             name="username"
//                         />
//                         {console.log(errors)}
//                         {touched.username && errors.username &&
//                             <Text style={{ fontSize: 12, color: '#FF0D10' }}>{errors.username}</Text>
//                         }
//                         <TextInputWithLable
//                             label="User name"
//                             placheHolder="Enter your user name"
//                             onChangeText={(username) => SetUsername(username)}
//                         />
//                         <TextInputWithLable
//                             label="First name"
//                             placheHolder="Enter your First name"
//                             onChangeText={(first_name) => Setfirst_name(first_name)}
//                         />
//                         <TextInputWithLable
//                             label="Last name"
//                             placheHolder="Enter your Last name"
//                             onChangeText={(last_name) => Setlast_name(last_name)}
//                         />
//                         <TextInputWithLable
//                             label="Email"
//                             placheHolder="Enter your Email"
//                             onChangeText={(email) => Setemail(email)}
//                         />
//                         <TextInputWithLable
//                             label="Password"
//                             placheHolder="Enter your password"
//                             secureTextEntry={SetSecure}
//                             onChangeText={(password) => SetPassword(password)}
//                         />
//                         <TextInputWithLable
//                             label="Confirm Your Password"
//                             placheHolder="Enter Password"
//                             secureTextEntry={SetSecure}
//                             onChangeText={(password2) => Setpassword2(password2)}
//                         />
//                         <ButtonWithLoader
//                             text="Signup"
//                             onPress={onSignup}
//                             Loading={SetLoading}
//                         />
//                     </View>
//                 )}
//             </Formik >
//         </View>
//     );
// };
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         padding: 24,
//         backgroundColor: 'white'
//     },
// });
// export default Signup;