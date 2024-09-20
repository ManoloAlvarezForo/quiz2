import React, { useState } from "react";
import { PostType } from "@/app/(tabs)";
import { StyleSheet, View } from "react-native";
import { Card, IconButton, Text } from "react-native-paper";

const Post: React.FC<{ item: PostType }> = ({ item }) => {
  const [likes, setLikes] = useState<number>(0);
  const [imageError, setImageError] = useState<boolean>(false);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleImageError = () => {
    setImageError(true);
  };

  const imageUri = imageError ? "../assets/images/placeholder.png" : item.image;

  return (
    <Card style={styles.cardContainer}>
      <Card.Title titleVariant="titleMedium" title={item.name} />
      <Card.Cover
        style={styles.cover}
        source={{ uri: imageUri }}
        onError={handleImageError}
      />
      <View style={styles.actionContainer}>
        <View style={styles.likeContainer}>
          <IconButton icon="heart-outline" onPress={handleLike} size={26} />
          <Text>{likes} Likes</Text>
        </View>
        <IconButton
          style={styles.iconButton}
          icon="bookmark-outline"
          onPress={handleLike}
          size={26}
        />
      </View>
      <Card.Content>
        <Text numberOfLines={2} variant="bodyMedium">
          {item.description}
        </Text>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  actionContainer: { display: "flex", flexDirection: "row" },
  cardContainer: {
    marginVertical: 5,
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderRadius: 1,
  },
  cover: { height: 350, borderRadius: 0 },
  iconButton: { marginLeft: "auto" },
  likeContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Post;
