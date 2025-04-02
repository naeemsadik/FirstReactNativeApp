import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS } from '../constants/theme';
import { Ionicons } from '@expo/vector-icons';
import { Post } from '../constants/mockData';

interface PostCardProps {
  post: Post;
}

export const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.userInfo}>
          <Image source={{ uri: post.user.avatar }} style={styles.avatar} />
          <Text style={styles.username}>{post.user.username}</Text>
        </View>
        <TouchableOpacity>
          <Ionicons name="ellipsis-horizontal" size={24} color={COLORS.white} />
        </TouchableOpacity>
      </View>

      <Image source={{ uri: post.image }} style={styles.postImage} />

      <View style={styles.actions}>
        <View style={styles.leftActions}>
          <TouchableOpacity style={styles.actionButton}>
            <Ionicons name="heart-outline" size={24} color={COLORS.white} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Ionicons name="chatbubble-outline" size={24} color={COLORS.white} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Ionicons name="paper-plane-outline" size={24} color={COLORS.white} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <Ionicons name="bookmark-outline" size={24} color={COLORS.white} />
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <Text style={styles.likes}>{post.likes.toLocaleString()} likes</Text>
        <View style={styles.captionContainer}>
          <Text style={styles.username}>{post.user.username}</Text>
          <Text style={styles.caption}>{post.caption}</Text>
        </View>
        <Text style={styles.timestamp}>{post.timestamp}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.background,
    marginBottom: 8,
    // borderBottomWidth: 0.5,
    borderBottomColor: COLORS.darkgray,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 8,
  },
  username: {
    color: COLORS.white,
    fontWeight: 'bold',
  },
  postImage: {
    width: '100%',
    aspectRatio: 1,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
  },
  leftActions: {
    flexDirection: 'row',
  },
  actionButton: {
    marginRight: 16,
  },
  footer: {
    padding: 12,
  },
  likes: {
    color: COLORS.white,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  captionContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 4,
  },
  caption: {
    color: COLORS.white,
  },
  timestamp: {
    color: COLORS.gray,
    fontSize: 12,
    marginTop: 4,
  },
});