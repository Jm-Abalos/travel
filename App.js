import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import dogImage from './assets/dog.jpg';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={dogImage} style={styles.image} />
      <Text style={styles.coloredText}>Find your perfect place to travel.</Text>
      <StatusBar style="auto" />
      <TextInput
        style={styles.searchBar}
        placeholder="Search"  
      />
      <Text style={styles.boldText}>Most popular places</Text>

    <View style={styles.navbar}>
        <TouchableOpacity style={styles.navButton}>
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Text style={styles.navText}>Trips</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Text style={styles.navText}>Bookmark</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  coloredText: {
    color: '#0405AA',
    fontSize: 30,
    fontWeight: 'bold',
  },
  boldText: {
    color: '#000',
    fontSize: 15,
    fontWeight: 'bold',
  },
  searchBar: {
    height: 50, // Set height of the search bar
    width: 380,
    borderColor: '#ccc', // Border color
    borderWidth: 1, // Border width
    borderRadius: 25, // Rounded corners
    paddingHorizontal: 15, // Horizontal padding
    marginTop: 20,
    marginBottom: 20, // Space between search bar and image
    fontSize: 18, // Font size
  },
  image: {
    width: 50, // Set the image width
    height: 50, // Set the image height
    borderRadius: 150, // This will make the image circular
    alignSelf: 'flex-end', 
    margin: 5,
  },
  navbar: {
    position: 'absolute', // Position at the bottom
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: '#fff', // Light gray background for the navbar
    flexDirection: 'row', // Horizontal layout for buttons
    justifyContent: 'space-around', // Space between buttons
    alignItems: 'center', // Center the buttons vertically
    borderTopWidth: 1,
    borderColor: '#ccc', // Border on the top of the navbar
  },
  navButton: {
    padding: 10,
  },
  navText: {
    fontSize: 18,
    color: '#333', // Dark text for buttons
  },
});
