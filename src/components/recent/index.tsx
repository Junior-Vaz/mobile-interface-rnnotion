import { View, TouchableOpacity, Image, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import { s } from "./styles";
import { colors } from "@/styles/colors";

type Props = {
    data :{
        title: string,
        cover?: string
    }
}

export function Recent({data}: Props){
    return(
        <TouchableOpacity activeOpacity={0.7} style={s.container}>
            <Image style={s.cover} source={{uri: data.cover}}/>
            <View style={s.content}>
                <Feather name="file-text" style={s.icon} size={32} color={colors.gray[300]} />
                <Text numberOfLines={2} style={s.title}>{data.title}</Text>
            </View>
        </TouchableOpacity>
    )
}