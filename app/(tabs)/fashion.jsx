import { FlatList, Text, View } from "react-native";
import CardsForTabs from "../ReusableComponents/CardsForTabs";

export default function Fashion() {
const data = [
  {
    id: '1',
    text: '1. Sustainable Fashion: Eco-friendly clothing that promotes sustainability.',
    img: 'https://tse4.mm.bing.net/th/id/OIP.FKsyq-SxqLYHx41FwPnFvAHaFS?pid=Api&P=0&h=180',
  },
  {
    id: '2',
    text: '2. Vintage Clothing: Reviving past trends with a modern twist.',
    img: 'https://i.pinimg.com/originals/73/42/2b/73422b233affde02ca105c3dc5f32374.jpg', // Example replacement for fashion2.jpg
  },
  {
    id: '3',
    text: "3. Streetwear: Urban-inspired fashion that's comfortable and stylish.",
    img: 'https://highxtar.com/wp-content/uploads/2022/10/highxtar-esta-el-streetwear-pasado-de-moda-1.jpg', // fashion3.jpg
  },
  {
    id: '4',
    text: '4. Athleisure: Combining sportswear with everyday fashion.',
    img: 'https://www.lovehappensmag.com/blog/wp-content/uploads/2019/06/dom-hill-nimElTcTNyY-unsplash-1.jpg', // fashion4.jpg
  },
  {
    id: '5',
    text: '5. Gender-Neutral Fashion: Inclusive clothing styles for everyone.',
    img: 'https://tse3.mm.bing.net/th/id/OIP.UBWQiHBqnUAovWHuj2na8AHaEL?pid=Api&P=0&h=180', // fashion5.jpg
  },
];

  return (
    <View className="bg-gray-100 p-5 mt-10">
      {/* Title */}

      <Text className="text-3xl font-bold text-purple-700 text-center mb-6 ">
        Top 5 Fashion Trends
      </Text>
      <FlatList
      data={data}
      renderItem={({item})=><CardsForTabs img={item.img} text={item.text}></CardsForTabs>}
      keyExtractor={(item) => item.id}
      />
    

 
    </View>
  );
}
