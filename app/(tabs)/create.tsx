import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native'
import React, { useState, useEffect } from 'react'
import * as ImagePicker from 'expo-image-picker'
import { Stack } from 'expo-router'

export default function Create() {
  const [image, setImage] = useState(null)
  const [recentPhotos, setRecentPhotos] = useState([])

  useEffect(() => {
    loadRecentPhotos()
  }, [])

  const loadRecentPhotos = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync()
    if (status !== 'granted') return

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
      allowsMultipleSelection: true,
      selectionLimit: 12,
    })

    if (!result.canceled) {
      setRecentPhotos(result.assets)
    }
  }

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync()
    if (status !== 'granted') {
      alert('Sorry, we need camera roll permissions to make this work!')
      return
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    })

    if (!result.canceled) {
      setImage(result.assets[0].uri)
    }
  }

  const takePhoto = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync()
    if (status !== 'granted') {
      alert('Sorry, we need camera permissions to make this work!')
      return
    }

    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    })

    if (!result.canceled) {
      setImage(result.assets[0].uri)
    }
  }

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: 'New post',
          headerStyle: { backgroundColor: '#000' },
          headerTitleStyle: { color: '#fff' },
          headerRight: () => (
            <TouchableOpacity>
              <Text style={styles.nextButton}>Next</Text>
            </TouchableOpacity>
          ),
        }}
      />
      <View style={styles.gridContainer}>
        {image ? (
          <Image source={{ uri: image }} style={styles.mainImage} />
        ) : (
          <Text style={styles.placeholder}>No image selected</Text>
        )}
        <View style={styles.gridLines}>
          <View style={styles.verticalLine} />
          <View style={styles.verticalLine} />
          <View style={styles.horizontalLine} />
          <View style={styles.horizontalLine} />
        </View>
      </View>
      <View style={styles.bottomSection}>
        <View style={styles.mediaTypeBar}>
          <Text style={styles.mediaTypeText}>RECENTS</Text>
          <View style={styles.mediaButtons}>
            <TouchableOpacity onPress={takePhoto} style={styles.mediaButton}>
              <Text style={styles.mediaButtonIcon}>📷</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={pickImage} style={styles.mediaButton}>
              <Text style={styles.mediaButtonIcon}>🖼️</Text>
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView>
          <View style={styles.recentPhotosGrid}>
            {recentPhotos.map((photo, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => setImage(photo.uri)}
                style={styles.recentPhotoContainer}
              >
                <Image source={{ uri: photo.uri }} style={styles.recentPhoto} />
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  nextButton: {
    color: '#0095f6',
    fontSize: 16,
    fontWeight: '600',
    marginRight: 15,
  },
  gridContainer: {
    width: '100%',
    aspectRatio: 1,
    backgroundColor: '#1a1a1a',
    position: 'relative',
  },
  mainImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  gridLines: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  verticalLine: {
    position: 'absolute',
    width: 1,
    height: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    left: '33.33%',
  },
  horizontalLine: {
    position: 'absolute',
    height: 1,
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    top: '33.33%',
  },
  placeholder: {
    color: '#666',
    fontSize: 16,
    alignSelf: 'center',
    marginTop: '50%',
  },
  bottomSection: {
    flex: 1,
    backgroundColor: '#000',
  },
  mediaTypeBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  mediaTypeText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  mediaButtons: {
    flexDirection: 'row',
    gap: 15,
  },
  mediaButton: {
    padding: 5,
  },
  mediaButtonIcon: {
    fontSize: 24,
  },
  recentPhotosGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  recentPhotoContainer: {
    width: Dimensions.get('window').width / 4,
    aspectRatio: 1,
    padding: 1,
  },
  recentPhoto: {
    width: '100%',
    height: '100%',
  },
})