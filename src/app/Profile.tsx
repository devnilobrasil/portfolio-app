import { Image, View } from "react-native"
import User from "@/components/User"
import Skills from "@/components/Skills"
import Links from "@/components/Links"
import Title from "@/components/Title"

export default function Profile() {
   return (
      <View className="flex-1 bg-black">
         <Image
            source={require("@/assets/banner2.jpg")}
            className="h-64 w-full object-cover"
         />
         <View className="flex-1 px-6 pb-2 relative bottom-14 gap-2 ">
            <User />
            <Title>About</Title>
            <Skills />
            <Links/>
            <Title>Contact</Title>
         </View>
      </View>
   )
}
