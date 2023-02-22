import React, { useState, useEffect } from "react";
import { View, Text, Button, TextInput, Pressable, TouchableOpacity } from 'react-native';
import ButtonTodo from '../../Components/ButtonTodo';
import ButtonWithLoader from '../../Components/ButtonWithLoader';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from "../../redux/actions/TodoActions";
import { DeleteTodo } from "../../redux/actions/TodoActions";
import { RemoveTodo } from "../../redux/actions/TodoActions";
import { CompleteTodo } from "../../redux/actions/TodoActions";
import TodoReducers from "../../redux/reducers/TodoReducer";
import TODO from "../../config/urls";
import ActionTypes from '../../redux/types'
import { ScrollView } from "react-native-gesture-handler";

const Todo = ({ navigation }) => {
    const [inputData, setInputData] = useState('');
    // const [completed, setCompleted] = useState(false);
    const [loading, setLoading] = useState(true);
    const [isStrikethrough, setIsStrikethrough] = useState(false);

    const allState = useSelector(state => state);
    const list = useSelector((state) => state?.TodoReducers?.list)
    const dispatch = useDispatch();
    console.log(JSON.stringify(inputData))


    // useEffect(() => {
    //     fetch(TODO)
    //       .then(response => response.json())
    //       .then(json => {
    //         setInputData(json);
    //         setLoading(false);
    //         dispatch(addTodo(inputData))
    //       });
    //     //   request headers Authorization: token username password
    //   }, []);


    return (
        <ScrollView>

            <View>
                <View >
                    <Text>To do List</Text>
                    <View>
                        <TextInput
                            style={{ height: 40 }}
                            placeholder="Type here to Add Text!"
                            onChangeText={newText => setInputData(newText)}
                            defaultValue={inputData}
                        />
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", }}>
                        <ButtonTodo text=" + "
                            onPress={() => {
                                dispatch(addTodo({ title: inputData, completed: false }))
                            }}
                        />
                        <ButtonTodo text=" Check All "
                            onPress={() => dispatch(RemoveTodo())}
                        />
                    </View>
                    <View>
                        {list?.map((elem) => {
                            console.log("the list data", list)
                            return (
                                <View style={{
                                    flexDirection: "row", justifyContent: "space-between"
                                }} key={elem.id}>
                                    {/* <Text>{elem.title}</Text> */}
                                    <TouchableOpacity
                                        onPress={() => dispatch(CompleteTodo(elem.id)) && setIsStrikethrough(!isStrikethrough)}
                                    >
                                        <Text style={{ textDecorationLine: isStrikethrough ? 'line-through' : 'none' }}>
                                            {elem.title}
                                        </Text>
                                    </TouchableOpacity>


                                    <View style={{
                                        flexDirection: "row", justifyContent: "space-between"
                                    }}>
                                        <ButtonTodo text="-"
                                            onPress={() => dispatch(DeleteTodo(elem.id))} />
                                        {/* <ButtonTodo text="@"
                                            onPress={() => dispatch(CompleteTodo(elem.id))} /> */}
                                    </View>
                                </View>
                            )
                        })}
                    </View>

                    {/* <View>
                    <ButtonTodo text=" Check All "
                        onPress={() => dispatch(RemoveTodo())}
                    />
                </View> */}
                    {/* <ButtonWithLoader
                        text="Log Out"
                        onPress={() => {
                            navigation.goBack()
                            console.log('Logout')
                        }}
                    /> */}
                </View>
            </View>
        </ScrollView>
    )
}
export default Todo;