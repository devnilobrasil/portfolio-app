import { View } from "react-native"
import Title from "./Title"
import { LINKS } from "@/utils/links"
import { Badge } from "./Badge"


import { Text } from "react-native"

function MotivationalMessage() {
   return (
      <View className="w-full flex items-center my-4">
         <Text className="text-lg font-semibold text-center text-white">
            Remember, every step you take is a step closer to your goals!
         </Text>
      </View>
   )
}

export default function Links() {
   return (
      <View className="w-full flex flex-col gap-5">
         <Title>Links</Title>
         <View className="flex flex-row gap-4 w-full flex-wrap justify-around">
            {LINKS.map((link) => (
               <Badge
                  key={link.name}
                  label={link.name}
                  icon={link.icon}
                  link={link.link}
               />
            ))}
         </View>
         <MotivationalMessage />
      </View>
   )
}
