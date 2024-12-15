import { Image, View, ImageBackground } from "react-native";
import User from "@/components/User";
import Skills from "@/components/Skills";
import Links from "@/components/Links";
import About from "@/components/About";

export default function Profile() {
  return (
    <ImageBackground
      source={require("@/assets/bg.png")} 
      className="flex-1"
    >
      <View className="h-64 w-full object-cover">
        <Image
          source={require("@/assets/banner2.jpg")}
          className="h-64 w-full object-cover"
        />
      </View>
      <View className="flex-1 px-6 pb-2 relative bottom-14 gap-2">
        <User />
        <About />
        <Skills />
        <Links />
      </View>
    </ImageBackground>
  );
}
