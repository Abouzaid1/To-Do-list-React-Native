import React, { useEffect } from 'react'
import { View, Text, FlatList, ScrollView, TextInput, Button, Pressable, TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { getTask,deleteTask } from '../slice/taskSlice'
export default function TasksContainer() {
    const dispatch = useDispatch()
    const tasks = useSelector(state => state.task)
    const deleteHandler = (id)=>{
        dispatch(deleteTask(id))
    }
    useEffect(() => {
        dispatch(getTask())
    }, [tasks])
    
    useEffect(() => {
        console.log("in code", tasks);
    }, [])
    
    return (
        <>
            <ScrollView className="w-full">
                {
                    tasks.length === 0 &&  (<View className="max-w-[80%] m-auto h-[50vh] flex justify-center items-center">
                            <Text className="text-[20px]">There is no tasks</Text>
                        </View>)
                }
                {
                    tasks.map(item => {
                        return (<View key={item.id} className="w-[90%] flex-row items-center justify-between px-5 mx-auto min-h-[100px] my-2 border border-[orange] rounded-[10px]">
                            <View className="max-w-[80%] overflow-x-scroll">
                                    <Text className="text-[20px]  ">{item.value}</Text>
                            </View>
                            <View className="h-[60px]">
                                <TouchableOpacity onPress={(id)=>deleteHandler(item.id)} className="rounded-[30px]  w-[60px] border-black flex items-center justify-center border h-[60px]">
                                    <Text className="text-black text-[30px] ">-</Text>
                                </TouchableOpacity>
                            </View>
                        </View>)
                    })
                }
            </ScrollView>
        </>
    )
}
