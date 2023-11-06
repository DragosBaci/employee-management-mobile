import {StyleSheet} from 'react-native';
import Colors from '../Utils/Colors';

const styles = StyleSheet.create({
  rootContainer: {
    marginTop: 6,
  },
  card: {
    width: 350,
    height: 300,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16,
    justifyContent: 'center',
    backgroundColor: Colors.LIGHT_GRAY,
  },
  cardElevated: {
    backgroundColor: Colors.LIGHT_GRAY,
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  cardImage: {
    height: 220,
    marginBottom: 8,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    resizeMode: 'contain',
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12,
    backgroundColor: Colors.LIGHT_GRAY,
    borderRadius: 6,
  },
  cardTitle: {
    color: Colors.BLACK,
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  cardLabel: {
    color: Colors.BLACK,
    fontSize: 14,
    marginBottom: 6,
  },
  cardDescription: {
    color: Colors.GREY,
    fontSize: 12,
    marginBottom: 12,
    marginTop: 6,
    flexShrink: 1,
  },
  cardFooter: {
    color: Colors.BLACK,
  },
});

export default styles;
