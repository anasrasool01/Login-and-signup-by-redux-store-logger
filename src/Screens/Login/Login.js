import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import ButtonWithLoader from '../../Components/ButtonWithLoader';
import TextInputWithLable from '../../Components/TextInputWithLabel';
import { showError } from '../../utils/helperFunction';
import actions from '../../redux/actions';
import { Formik } from "formik";
import * as Yup from "yup";

const Login = ({ navigation }) => {
    const [username, SetUsername] = useState("")
    const [password, SetPassword] = useState("")
    const [Loading, SetLoading] = useState(false)
    const [secure, SetSecure] = useState(true)

    const validationSchema = Yup.object().shape({
        username: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('User Name Required'),
        password: Yup
            .string()
            .required('Password is required'),
    });
    const onLogin = async (values) => {
        console.log(values)
        try {
            const res = await actions.login({
                username: values.username,
                password: values.password
            })
            console.log("res", res)
            if (!res) {
                alert("Please verify your username")
            } else if (res) {
                navigation.navigate('Todo')

            }
            SetLoading(false)
        } catch (error) {
            console.log("error")
            showError(error)
            SetLoading(false)
        }
        // }
    }
    return (
        <View style={styles.container}>

            <Formik
                initialValues={{ username: '', password: '' }}
                onSubmit={onLogin}
                validationSchema={validationSchema}
            >
                {({ values, handleChange, errors, setFieldTouched, touched, handleSubmit }) => (

                    <View>
                        <TextInputWithLable
                            label="Username"
                            placheHolder="enter your username"
                            value={values.username}
                            onChangeText={handleChange('username')}
                        />
                        {console.log(errors)}
                        {touched.username && errors.username &&
                            <Text style={{ fontSize: 12, color: '#FF0D10' }}>{errors.username}</Text>
                        }

                        <TextInputWithLable
                            label="Password"
                            placheHolder="enter your password"
                            secureTextEntry={secure}
                            value={values.password}
                            onChangeText={handleChange('password')}
                        />
                        {touched.password && errors.password &&
                            <Text style={{ fontSize: 12, color: '#FF0D10' }}>{errors.password}</Text>
                        }
                        <ButtonWithLoader
                            text="Login"
                            onPress={() => { handleSubmit() }}
                            Loading={Loading}
                        />
                        <View style={{ marginVertical: 8 }} />

                        <ButtonWithLoader
                            text="Signup"
                            onPress={() => {
                                navigation.navigate('Signup')
                            }}
                        />
                        <View style={{ marginVertical: 8 }} />

                        {/* <ButtonWithLoader
                            text="Todo"
                            onPress={() => {
                                navigation.navigate('Todo')
                                console.log('Todo pressed')
                            }}
                        /> */}
                    </View>
                )}
            </Formik >
        </View >

    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: 'white'
    },
});


export default Login;


// import React, { useState } from 'react';
// import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
// import ButtonWithLoader from '../../Components/ButtonWithLoader';
// import TextInputWithLable from '../../Components/TextInputWithLabel';
// // import validator from '../../utils/validations';
// import { showError } from '../../utils/helperFunction';
// import actions from '../../redux/actions';

// const Login = ({ navigation }) => {
//     const [username, SetUsername] = useState("")
//     const [password, SetPassword] = useState("")
//     const [Loading, SetLoading] = useState(false)
//     const [secure, SetSecure] = useState(true)

//     const onLogin = async () => {
//         console.log(username, password);

//         // const checkValid = true
//         const checkValid = () => {
//         const error = validator({
//             username,
//             password
//         })
//         if (error) {
//             showError(error)
//             return false
//         }
//         return true
//     }

//         if (checkValid) {
//             SetLoading(true)
//             try {
//                 const res = await actions.login({
//                     username,
//                     password
//                 })
//                 console.log("res", res)
//                 if (!res) {
//                     alert("Please verify your username")
//                 } else if (res) {
//                     navigation.navigate('Home')
//                 }
//                 SetLoading(false)
//             } catch (error) {
//                 console.log("error")
//                 showError(error.message)
//                 SetLoading(false)
//             }
//         }
//     }
//     return (
//         <View style={styles.container}>
//             <TextInputWithLable
//                 label="Username"
//                 value={username}
//                 placheHolder="enter your username"
//                 onChangeText={(textusername) => SetUsername(textusername)}
//             />
//             <TextInputWithLable
//                 label="Password"
//                 placheHolder="enter your password"
//                 // isSecure={isSecure}
//                 value={password}
//                 secureTextEntry={secure}
//                 onChangeText={(textpassword) => SetPassword(textpassword)}
//             />

//             <ButtonWithLoader
//                 text="Login"
//                 onPress={onLogin}
//                 Loading={SetLoading}
//             />

//             <View style={{ marginVertical: 8 }} />

//             <ButtonWithLoader
//                 text="Signup"
//                 onPress={() => navigation.navigate('Signup')}
//             />
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
// export default Login;