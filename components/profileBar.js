import React, { useEffect, useState } from 'react'
import { View, Text, TextInput, Button, Pressable, TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { addTask } from '../slice/taskSlice'

import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
export default function ProfileBar() {
    const dispatch = useDispatch()
    const [inputValue, setInputValue] = useState("")

    const changeHandler = (value) => {
        setInputValue(value) // Remove leading and trailing spaces
    }

    const submitHandler = () => {
        if (inputValue) {
            const newTask = {
                id: uuidv4(),
                value: inputValue
            };
            dispatch(addTask(newTask));
            setInputValue("");
        }
    }

    return (
        <View className="w-full bg-[#ee7e3c] px-5 pt-10 h-[300px] rounded-b-[30px]">
            <Text className="text-[30px] font-bold mt-[20px] text-white">Hi Ahmed</Text>
            <Text className="text-[20px] mt-[60px] text-white">Add your tasks here</Text>
            <View className="h-full flex-row justify-between mt-[10px] w-full">
                <View className="w-[80%]">
                    <TextInput
                        value={inputValue}
                        onChangeText={(value) => changeHandler(value)}
                        onSubmitEditing={submitHandler} // Use onSubmitEditing event handler
                        className="border rounded-[30px] border-white text-[20px] text-white px-5 h-[60px] items-end"
                        placeholderTextColor="white"
                        placeholder='Type here ...'
                    />
                </View>
                <View className=" h-[60px]">
                    <TouchableOpacity onPress={submitHandler} className="rounded-[30px]  w-[60px] border-white flex items-center justify-center border h-[60px]">
                        <Text className="text-white text-[30px] ">+</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

