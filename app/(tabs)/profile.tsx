import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { mockPosts } from '../../constants/mockData'
import { COLORS } from '../../constants/theme'

const TABS = ['Posts', 'Saved', 'Tagged']

export default function Profile() {
  const [activeTab, setActiveTab] = useState('Posts')
  const userPosts = mockPosts.filter(post => post.user.username === 'john_doe')

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.pageHeader}>Profile</Text>
      <View style={styles.header}>
        <Image
          source={{ uri: mockPosts[0].user.avatar }}
          style={styles.avatar}
        />
        <View style={styles.statsContainer}>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>{userPosts.length}</Text>
            <Text style={styles.statLabel}>Posts</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>2.5K</Text>
            <Text style={styles.statLabel}>Followers</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>1.2K</Text>
            <Text style={styles.statLabel}>Following</Text>
          </View>
        </View>
      </View>

      <View style={styles.bioSection}>
        <Text style={styles.username}>john_doe</Text>
        <Text style={styles.bio}>📱 React Native Developer\n🌟 Creating awesome mobile experiences\n🚀 Building FirstReactNativeApp</Text>
      </View>

      <View style={styles.tabsContainer}>
        {TABS.map(tab => (
          <TouchableOpacity
            key={tab}
            style={[styles.tab, activeTab === tab && styles.activeTab]}
            onPress={() => setActiveTab(tab)}
          >
            <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>{tab}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.postsGrid}>
        {userPosts.map(post => (
          <Image
            key={post.id}
            source={{ uri: post.image }}
            style={styles.gridImage}
          />
        ))}
      </View>
    </ScrollView>
  )
}

const windowWidth = Dimensions.get('window').width
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  pageHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.white,
    padding: 16,
    paddingTop: 20,
  },
  header: {
    flexDirection: 'row',
    padding: 20,
    alignItems: 'center',
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  statsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginLeft: 20,
  },
  stat: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.white,
  },
  statLabel: {
    fontSize: 12,
    color: COLORS.gray,
  },
  bioSection: {
    padding: 20,
  },
  username: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.white,
    marginBottom: 4,
  },
  bio: {
    fontSize: 14,
    color: COLORS.gray,
    lineHeight: 20,
  },
  tabsContainer: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: COLORS.surfacelight,
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: COLORS.primary,
  },
  tabText: {
    color: COLORS.gray,
    fontSize: 14,
  },
  activeTabText: {
    color: COLORS.white,
    fontWeight: 'bold',
  },
  postsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  gridImage: {
    width: windowWidth / 3,
    height: windowWidth / 3,
    borderColor: COLORS.background,
  },
});