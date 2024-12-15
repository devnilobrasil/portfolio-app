import { Text, TextProps } from "react-native"

export default function Title(props: TextProps) {
   return <Text className="text-primary font-bold text-2xl mt-4" {...props} />
}
