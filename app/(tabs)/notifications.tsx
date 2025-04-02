import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS } from '../../constants/theme'
import { mockNotifications, Notification } from '../../constants/notificationData'
import { Ionicons } from '@expo/vector-icons'

const NotificationItem = ({ item }: { item: Notification }) => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'like':
        return 'heart'
      case 'comment':
        return 'chatbubble'
      case 'follow':
        return 'person-add'
      case 'mention':
        return 'at'
      default:
        return 'notifications'
    }
  }

  return (
    <TouchableOpacity style={styles.notificationItem}>
      <Image source={{ uri: item.user.avatar }} style={styles.avatar} />
      <View style={styles.contentContainer}>
        <Text style={styles.username}>{item.user.username}</Text>
        <Text style={styles.content}>{item.content}</Text>
        <Text style={styles.timestamp}>{item.timestamp}</Text>
      </View>
      <Ionicons name={getIcon(item.type)} size={24} color={COLORS.primary} />
    </TouchableOpacity>
  )
}

export default function Notifications() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Notifications</Text>
      <FlatList
        data={mockNotifications}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <NotificationItem item={item} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
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
  listContainer: {
    padding: 16,
  },
  notificationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    backgroundColor: COLORS.surface,
    borderRadius: 12,
    marginBottom: 8,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  contentContainer: {
    flex: 1,
    marginLeft: 12,
  },
  username: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.white,
  },
  content: {
    fontSize: 14,
    color: COLORS.gray,
    marginTop: 2,
  },
  timestamp: {
    fontSize: 12,
    color: COLORS.gray,
    marginTop: 4,
  },
})