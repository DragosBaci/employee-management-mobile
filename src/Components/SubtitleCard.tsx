import {StyleSheet, View, Text} from 'react-native';
import Colors from '../Utils/Colors';

const SubtitleCard = ({text}: {text: string}) => {
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.textStyle}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: Colors.WHITE,
    flexDirection: 'row',
    height: 60,
    width: '90%',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderRadius: 15,
    marginLeft: '5%',
    marginTop: 20,
    justifyContent: 'center',
  },
  textStyle: {
    fontWeight: '600',
    fontSize: 16,
  },
});

export default SubtitleCard;
