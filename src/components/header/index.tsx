import { View, Image, Text, TouchableOpacity } from "react-native";
import { s } from "./styles";
import { Feather } from "@expo/vector-icons";
import { colors } from "@/styles/colors";

export function Header(){
    return(
        <View style={s.container}>
            <Image style={s.image} source={require("@/assets/fot.png")}/>

            <View style={s.user}>
               <Text style={s.name}>Junior vaz</Text>
               <Text style={s.email}>junior@gmail.com</Text> 
            </View>

            <TouchableOpacity>
                <Feather name="more-horizontal" size={20} color={colors.gray[100]}/>
            </TouchableOpacity>
        </View>
       
    )
}