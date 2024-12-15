import { View } from "react-native"
import Title from "@/components/Title"
import { SKILLS } from "@/utils/skills"
import { Badge } from "@/components/Badge"

export default function Skills() {
   return (
      <View className="w-full flex flex-col gap-5">
         <Title>Skills</Title>
         <View className="flex flex-row gap-2 w-full flex-wrap">
            {SKILLS.map((skill) => (
                <Badge key={skill.name} label={skill.name} icon={skill.icon} />
            ))}
         </View>
      </View>
   )
}
