import Post from "@/components/Post";
import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, View, ActivityIndicator } from 'react-native';
import { Text, useTheme } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

// "createdAt": "2024-04-17T14:06:19.118Z",
// "name": "Iris Quitzon",
// "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/388.jpg",
// "description": "asymmetric",
// "likes": 71953,
// "image": "https://loremflickr.com/640/480",
// "comments": 21092,
// "liked": true,
// "saved": true,
// "location": "Salinas",
// "id": "1"

export type PostType = {
  id: number
  name: string;
  description: string;
  image: string;
  liked: boolean;
  saved: boolean;
  location: string;
}

const FeedScreen: React.FC = () => {
  const [data, setData] = useState<PostType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const theme = useTheme();


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://662029f13bf790e070af2cd8.mockapi.io/api/v1/posts");
        const json: any= await response.json();
        console.log('JSON: ', json)
        //TODO: Pagination should be implemented
        setData(json);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }
  const renderItem = ({ item }: { item: PostType }) => <Post item={item} />;

  return (
    <SafeAreaView style={[styles.container, {backgroundColor: theme.colors.background}]}>
      <Text style={styles.title} variant="titleLarge">Instagram Feed</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    padding: 5
  }
});

export default FeedScreen;
