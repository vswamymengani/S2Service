import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const RatingScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.mainMessageContainer}>
          <Text style={styles.mainMessageText}>You currently have no ratings</Text>
          <Icon name="star" size={30} color="#FFD700" style={styles.starIcon} />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Introducing customer ratings</Text>
          <Text style={styles.sectionText}>
            Just like you rate UC professionals for the overall quality of the service, they also rate you on a scale of 1 to 5. Your aggregate rating is calculated after you have received ratings in at least 3 services.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>How can I be a 5-star customer?</Text>
          <Text style={styles.sectionText}>
            Did you know that nearly 80% of UC customers are 5-star rated? If you also want that coveted rating, here are a few kind gestures.
          </Text>

          <View style={styles.tipContainer}>
            <Icon name="hand-left" size={24} color="purple" />
            <View style={styles.tipTextContainer}>
              <Text style={styles.tipText}>Empathise</Text>
              <Text style={styles.tipDescription}>Show them you care by offering water, it’ll help raise their spirit and energy levels.</Text>
            </View>
          </View>

          <View style={styles.tipContainer}>
            <Icon name="heart" size={24} color="red" />
            <View style={styles.tipTextContainer}>
              <Text style={styles.tipText}>Support</Text>
              <Text style={styles.tipDescription}>Provide access to the washroom (if required); they might have been on the go for a while!</Text>
            </View>
          </View>

          <View style={styles.tipContainer}>
            <Icon name="chatbubble" size={24} color="blue" />
            <View style={styles.tipTextContainer}>
              <Text style={styles.tipText}>Respect</Text>
              <Text style={styles.tipDescription}>Treat professionals the way you’d expect to be treated.</Text>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>How is customer rating calculated?</Text>
          <Text style={styles.sectionText}>
            Your aggregate rating is a simple average of all the ratings you’ve received from UC professionals in the past. These individual ratings are anonymous, and so won’t be visible to you or the professional.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  mainMessageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
  },
  mainMessageText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  starIcon: {
    marginLeft: 10,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  sectionText: {
    fontSize: 16,
    color: '#666',
  },
  tipContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  tipTextContainer: {
    marginLeft: 10,
  },
  tipText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  tipDescription: {
    fontSize: 16,
    color: '#666',
  },
});

export default RatingScreen;
