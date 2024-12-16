import { View } from "react-native"
import Title from "./Title"
import { LINKS } from "@/utils/links"
import { Badge } from "./Badge"

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
      </View>
   )
}
