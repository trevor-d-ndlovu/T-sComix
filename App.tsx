import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Dimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const { width } = Dimensions.get('window');
const CARD_WIDTH = (width - 60) / 2;

// Mock data for testing
const mockComics = [
  {
    id: '1',
    title: 'One Piece',
    author: 'Eiichiro Oda',
    coverImage: 'https://via.placeholder.com/300x400/FF6B6B/FFFFFF?text=One+Piece',
    rating: 4.8,
    status: 'ongoing',
  },
  {
    id: '2',
    title: 'Naruto',
    author: 'Masashi Kishimoto',
    coverImage: 'https://via.placeholder.com/300x400/4ECDC4/FFFFFF?text=Naruto',
    rating: 4.7,
    status: 'completed',
  },
  {
    id: '3',
    title: 'Attack on Titan',
    author: 'Hajime Isayama',
    coverImage: 'https://via.placeholder.com/300x400/45B7D1/FFFFFF?text=Attack+on+Titan',
    rating: 4.9,
    status: 'completed',
  },
  {
    id: '4',
    title: 'Demon Slayer',
    author: 'Koyoharu Gotouge',
    coverImage: 'https://via.placeholder.com/300x400/96CEB4/FFFFFF?text=Demon+Slayer',
    rating: 4.6,
    status: 'completed',
  },
];

export default function App() {
  const [currentTab, setCurrentTab] = React.useState('home');

  const renderComicCard = (comic: any) => (
    <TouchableOpacity key={comic.id} style={styles.comicCard}>
      <Image source={{ uri: comic.coverImage }} style={styles.comicImage} />
      <View style={styles.comicInfo}>
        <Text style={styles.comicTitle} numberOfLines={2}>
          {comic.title}
        </Text>
        <Text style={styles.comicAuthor} numberOfLines={1}>
          {comic.author}
        </Text>
        <View style={styles.comicMeta}>
          <Text style={styles.comicRating}>⭐ {comic.rating}</Text>
          <Text style={styles.comicStatus}>{comic.status}</Text>
        </View>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>Add to Library</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  const renderHomeScreen = () => (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Comic Reader</Text>
        <Text style={styles.headerSubtitle}>Discover amazing comics and manga</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>🔥 Popular Comics</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.horizontalList}>
            {mockComics.map(renderComicCard)}
          </View>
        </ScrollView>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>🆕 Latest Releases</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.horizontalList}>
            {mockComics.map(renderComicCard)}
          </View>
        </ScrollView>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>📚 All Comics</Text>
        <View style={styles.grid}>
          {mockComics.map(renderComicCard)}
        </View>
      </View>
    </ScrollView>
  );

  const renderLibraryScreen = () => (
    <View style={styles.container}>
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyIcon}>📚</Text>
        <Text style={styles.emptyTitle}>Your Library is Empty</Text>
        <Text style={styles.emptySubtitle}>
          Add comics from the Home tab to start building your collection
        </Text>
      </View>
    </View>
  );

  const renderSearchScreen = () => (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Text style={styles.searchInput}>Search comics, manga, authors...</Text>
      </View>
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyIcon}>🔍</Text>
        <Text style={styles.emptyTitle}>Search Comics & Manga</Text>
        <Text style={styles.emptySubtitle}>
          Enter a title, author, or genre to find your next favorite read
        </Text>
      </View>
    </View>
  );

  const renderSettingsScreen = () => (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Extensions</Text>
        <View style={styles.extensionItem}>
          <Text style={styles.extensionIcon}>🔥</Text>
          <View style={styles.extensionDetails}>
            <Text style={styles.extensionName}>MangaFire</Text>
            <Text style={styles.extensionDescription}>Access manga and comics from MangaFire</Text>
          </View>
          <Text style={styles.statusText}>Enabled</Text>
        </View>
      </View>
    </ScrollView>
  );

  const renderContent = () => {
    switch (currentTab) {
      case 'home': return renderHomeScreen();
      case 'library': return renderLibraryScreen();
      case 'search': return renderSearchScreen();
      case 'settings': return renderSettingsScreen();
      default: return renderHomeScreen();
    }
  };

  return (
    <View style={styles.appContainer}>
      <StatusBar style="light" />
      {renderContent()}
      
      <View style={styles.tabBar}>
        <TouchableOpacity 
          style={[styles.tab, currentTab === 'home' && styles.activeTab]} 
          onPress={() => setCurrentTab('home')}
        >
          <Text style={styles.tabIcon}>🏠</Text>
          <Text style={styles.tabLabel}>Home</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.tab, currentTab === 'library' && styles.activeTab]} 
          onPress={() => setCurrentTab('library')}
        >
          <Text style={styles.tabIcon}>📚</Text>
          <Text style={styles.tabLabel}>Library</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.tab, currentTab === 'search' && styles.activeTab]} 
          onPress={() => setCurrentTab('search')}
        >
          <Text style={styles.tabIcon}>🔍</Text>
          <Text style={styles.tabLabel}>Search</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.tab, currentTab === 'settings' && styles.activeTab]} 
          onPress={() => setCurrentTab('settings')}
        >
          <Text style={styles.tabIcon}>⚙️</Text>
          <Text style={styles.tabLabel}>Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#1a1a1a',
  },
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
  },
  header: {
    padding: 20,
    paddingTop: 50,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#ccc',
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 15,
    marginLeft: 20,
  },
  horizontalList: {
    flexDirection: 'row',
    paddingLeft: 20,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  comicCard: {
    width: CARD_WIDTH,
    marginRight: 15,
    marginBottom: 20,
    backgroundColor: '#2a2a2a',
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  comicImage: {
    width: '100%',
    height: CARD_WIDTH * 1.4,
    backgroundColor: '#333',
  },
  comicInfo: {
    padding: 12,
  },
  comicTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
  },
  comicAuthor: {
    fontSize: 12,
    color: '#ccc',
    marginBottom: 8,
  },
  comicMeta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  comicRating: {
    fontSize: 11,
    color: '#FFD700',
  },
  comicStatus: {
    fontSize: 11,
    color: '#4ECDC4',
    textTransform: 'capitalize',
  },
  addButton: {
    backgroundColor: '#FF6B6B',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 11,
    fontWeight: 'bold',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  emptyIcon: {
    fontSize: 64,
    marginBottom: 20,
  },
  emptyTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
    textAlign: 'center',
  },
  emptySubtitle: {
    fontSize: 16,
    color: '#ccc',
    textAlign: 'center',
    lineHeight: 24,
  },
  searchContainer: {
    padding: 20,
    backgroundColor: '#2a2a2a',
  },
  searchInput: {
    height: 45,
    backgroundColor: '#333',
    borderRadius: 22,
    paddingHorizontal: 20,
    color: '#fff',
    fontSize: 16,
    textAlignVertical: 'center',
  },
  section: {
    marginBottom: 30,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 15,
  },
  extensionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2a2a2a',
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
  },
  extensionIcon: {
    fontSize: 24,
    marginRight: 15,
  },
  extensionDetails: {
    flex: 1,
  },
  extensionName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
  },
  extensionDescription: {
    fontSize: 12,
    color: '#ccc',
  },
  statusText: {
    fontSize: 12,
    color: '#4ECDC4',
    fontWeight: 'bold',
  },
  tabBar: {
    flexDirection: 'row',
    backgroundColor: '#1a1a1a',
    borderTopColor: '#333',
    borderTopWidth: 1,
    height: 60,
    paddingBottom: 8,
    paddingTop: 8,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeTab: {
    backgroundColor: 'rgba(255, 107, 107, 0.1)',
  },
  tabIcon: {
    fontSize: 20,
    marginBottom: 2,
  },
  tabLabel: {
    fontSize: 10,
    color: '#ccc',
  },
});