import { Text, View } from "react-native"
import { Avatar, AvatarFallback, AvatarImage } from "./Avatar"

export default function User() {
   return (
      <View className="relative  flex items-center justify-center border-white ">
         <View className="max-w-44 flex items-center justify-center">
            <Avatar className="h-36 w-36 border-4">
               <AvatarImage source={require("@/assets/nilo.jpg")} />
               <AvatarFallback>NB</AvatarFallback>
            </Avatar>
            <View className="pt-1 w-full flex flex-col gap-1">
               <Text className="text-primary text-center font-bold text-3xl">
                  Nilo Brasil
               </Text>
               <Text className="text-white text-center text-base">
                  @devnilobrasil
               </Text>
            </View>
         </View>
      </View>
   )
}
