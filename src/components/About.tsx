import { Text, View } from 'react-native';
import Title from './Title';


export default function About() {
   return (
      <View>
         <Title>About</Title>
         <View className='pt-1'>
            <Text className='text-white text-justify text-xl'>
               Front-end Developer with 1 year of experience in creating digital interfaces for the iGaming industry. Proficient in
               transforming designs into functional web applications using React and Figma. Currently expanding my skills to mobile
               development, with personal projects underway.
            </Text>
         </View>
      </View>
   );
}