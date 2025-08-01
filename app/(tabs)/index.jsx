import { FlatList, Text, View } from "react-native";
import CardsForTabs from "../ReusableComponents/CardsForTabs";




export default function index() {
 const travelData = [
  {
    id: '1',
    text: '1. Hidden Gems: Explore 5 underrated destinations you’ve never heard of.',
    img: 'https://image.jimcdn.com/app/cms/image/transf/dimension=2380x10000:format=jpg/path/sa6549607c78f5c11/image/i61e5eecc71d3eff4/version/1524308620/lauterbrunnen-valley-best-hidden-gems-in-europe-copyright-creative-travel-projects-european-best-destinations.jpg',
  },
  {
    id: '2',
    text: '2. Travel on a Budget: Tips for seeing the world without breaking the bank.',
    img: 'https://upgradedpoints.com/wp-content/uploads/2022/04/Top-view-tourist-counting-cash-to-spend-during-his-luxury-vacation-planning-budget.jpeg',
  },
  {
    id: '3',
    text: '3. Solo Travel Diaries: Why exploring alone might be your best trip ever.',
    img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '4',
    text: '4. Weekend Getaways: Top 3 destinations under 3 hours from your city.',
    img: 'https://s3.india.com/wp-content/uploads/2024/10/weekend-gateaway-in-hampi.jpg##image/jpg',
  },
  {
    id: '5',
    text: '5. Digital Nomad Life: Best cities to work remotely and explore.',
    img: 'https://www.thetravelteam.com/wp-content/uploads/2022/09/ttt-work-remote-09-2022.webp',
  },
];

  return (
    <View className="bg-gray-100 p-5 mt-10">
         {/* Title */}
   
         <Text className="text-3xl font-bold text-purple-700 text-center mb-6">
           Top 5 Travel Trends
         </Text>
         <FlatList
         data={travelData}
         renderItem={({item})=><CardsForTabs img={item.img} text={item.text}></CardsForTabs>}
         keyExtractor={(item) => item.id}
         />
       
   
    
       </View>
  );
}
