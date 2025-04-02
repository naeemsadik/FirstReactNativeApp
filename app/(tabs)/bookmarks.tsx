import { View, Text, FlatList, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { PostCard } from '../../components/PostCard'
import { COLORS } from '../../constants/theme'
import { mockPosts, Post } from '../../constants/mockData'

export default function Bookmarks() {
  const [bookmarkedPosts] = useState<Post[]>(mockPosts.slice(5, 9))

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Bookmark</Text>
      <FlatList
        data={bookmarkedPosts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <PostCard post={item} />}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No bookmarks yet</Text>
          </View>
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.white,
    padding: 16,
    paddingTop: 20,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  emptyText: {
    color: COLORS.white,
    fontSize: 16,
  },
})