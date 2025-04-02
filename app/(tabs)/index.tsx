import { View, FlatList, Text } from "react-native";
import { COLORS } from "../../constants/theme";
import { mockPosts } from "../../constants/mockData";
import { PostCard } from "../../components/PostCard";

export default function Index() {
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.background }}>
      <View style={{ padding: 16 }}>
        <Text style={{
          fontSize: 24,
          fontWeight: "bold",
          color: COLORS.primary,
          marginBottom: 8,
        }}>
          SpotLight
        </Text>
      </View>
      <FlatList
        data={mockPosts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <PostCard post={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
