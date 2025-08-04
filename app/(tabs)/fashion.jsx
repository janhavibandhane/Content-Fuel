import { FlatList, Text, View } from "react-native";
import CardsForTabs from "../ReusableComponents/CardsForTabs";

export default function Fashion() {
const data = [
  {
    id: '1',
    prompts: ['Sustainable Fashion', 'Eco-friendly Materials', 'Slow Fashion'],
    img: 'https://i.pinimg.com/736x/97/93/b3/9793b3010177eedfe2b7a07e2e19a171.jpg',
  },
  {
    id: '2',
    prompts: ['Vintage Styles', 'Retro Vibes', 'Old is Gold'],
    img: 'https://i.pinimg.com/1200x/6a/59/85/6a5985e16f8a101191cf8347351b56a3.jpg',
  },
  {
    id: '3',
    prompts: ['Streetwear Drops', 'Hype Culture', 'Sneakerheads'],
    img: 'https://i.pinimg.com/736x/d4/ce/ba/d4ceba0ff92dd5131ae89ecdfd065486.jpg',
  },
  {
    id: '4',
    prompts: ['Athleisure Vibes', 'Workout Meets Street', 'Comfy + Cool'],
    img: 'https://i.pinimg.com/1200x/57/3e/d2/573ed25889c0717d6f213927688c8e98.jpg',
  },
  {
    id: '5',
    prompts: ['Unisex Looks', 'Fluid Fashion', 'Everyone Fits'],
    img: 'https://i.pinimg.com/736x/c0/e6/75/c0e675fb62aec0fc03bcbb4a9ecbf69f.jpg',
  },
];


  return (
   <View className="bg-gray-100 p-5 mt-10 mb-10">
      <Text className="text-3xl font-bold text-purple-700 text-center mb-6">
        Top 5 Fashion Trends
      </Text>

      <FlatList
        data={data}
        renderItem={({ item }) => (
          <CardsForTabs prompts={item.prompts} img={item.img} />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
