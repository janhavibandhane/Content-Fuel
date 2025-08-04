import { FlatList, Text, View } from "react-native";
import CardsForTabs from "../ReusableComponents/CardsForTabs";

export default function Fitness() {
  const fitnessData = [
    {
      id: '1',
      prompts: ['10-Min Home Workout', 'Full Body Routine', 'No Equipment Needed'],
      img: 'https://authentic-indonesia.com/wp-content/uploads/2020/05/online-sports-classes.jpg',
    },
    {
      id: '2',
      prompts: ['Meal Prep Ideas', 'Build Muscle Fast', '30-Min High Protein Meals'],
      img: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: '3',
      prompts: ['Morning Mobility', 'Fix Your Posture', 'Boost Energy Daily'],
      img: 'https://hips.hearstapps.com/vidthumb/images/stretching-1668034177.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*',
    },
    {
      id: '4',
      prompts: ['Gym vs Home Workout', 'Calorie Burn Myths', 'Find Your Best Fit'],
      img: 'https://xtremefitness.co.in/wp-content/uploads/2022/03/home-workout-vs-gym-workout-1024x576.jpg',
    },
    {
      id: '5',
      prompts: ['30-Day Challenge', 'Track Your Gains', 'See the Transformation'],
      img: 'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <View className="bg-gray-100 p-5 mt-10 mb-10">
      <Text className="text-3xl font-bold text-purple-700 text-center mb-6">
        💪 Top 5 Fitness Trends
      </Text>

      <FlatList
        data={fitnessData}
        renderItem={({ item }) => (
          <CardsForTabs prompts={item.prompts} img={item.img} />
        )}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
