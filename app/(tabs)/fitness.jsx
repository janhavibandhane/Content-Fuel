import { FlatList, Text, View } from "react-native";
import CardsForTabs from "../ReusableComponents/CardsForTabs";

export default function Fitness() {
const fitnessData = [
  {
    id: '1',
    text: '1. 10-Minute Home Workout: Full-body routine with no equipment.',
    img: 'https://authentic-indonesia.com/wp-content/uploads/2020/05/online-sports-classes.jpg',
  },
  {
    id: '2',
    text: '2. Meal Prep for Muscle Gain: Easy high-protein meals under 30 minutes.',
    img: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '3',
    text: '3. Morning Mobility Routine: Stretch your way to better posture and energy.',
    img: 'https://hips.hearstapps.com/vidthumb/images/stretching-1668034177.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*',
  },
  {
    id: '4',
    text: '4. Gym vs Home Workout: What burns more calories? Myth-busting breakdown.',
    img: 'https://xtremefitness.co.in/wp-content/uploads/2022/03/home-workout-vs-gym-workout-1024x576.jpg',
  },
  {
    id: '5',
    text: '5. Fitness Transformation Challenge: Track your 30-day results.',
    img: 'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=800&q=80',
  },
];


  return (
    <View className="bg-gray-100 p-5 mt-10">
      {/* Title */}

      <Text className="text-3xl font-bold text-purple-700 text-center mb-6">
        Top 5 Fitness Trends
      </Text>
      <FlatList
      data={fitnessData}
      renderItem={({item})=><CardsForTabs img={item.img} text={item.text}></CardsForTabs>}
      keyExtractor={(item) => item.id}
      />
    

 
    </View>
  );
}
