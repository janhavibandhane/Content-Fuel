import { FlatList, Text, View } from "react-native";
import CardsForTabs from "../ReusableComponents/CardsForTabs";

export default function Travel() {
  const data = [
    {
      id: '1',
      prompts: ['Bali Beaches', 'Spiritual Ubud', 'Jungle Villas'],
      img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    },
    {
      id: '2',
      prompts: ['Paris Romance', 'Eiffel at Night', 'Charming Cafés'],
      img: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34',
    },
    {
      id: '3',
      prompts: ['Tokyo Tech', 'Cherry Blossoms', 'Cultural Fusion'],
      img: 'https://images.unsplash.com/photo-1549692520-acc6669e2f0c',
    },
    {
      id: '4',
      prompts: ['Swiss Alps', 'Scenic Trains', 'Chocolate & Cheese'],
      img: 'https://i.pinimg.com/736x/3d/76/25/3d7625a648d99fd8482ebf03973d9117.jpg',
    },
    {
      id: '5',
      prompts: ['Santorini Sunsets', 'White-Washed Houses', 'Island Charm'],
      img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
    },
  ];

  return (
    <View className="bg-gray-100 p-5 mt-10 mb-10">
      <Text className="text-3xl font-bold text-purple-700 text-center mb-6">
        🌍 Top 5 Travel Destinations
      </Text>

      <FlatList
        data={data}
        renderItem={({ item }) => (
          <CardsForTabs prompts={item.prompts} img={item.img} />
        )}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
