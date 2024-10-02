import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#e0f7fa',
  },
  input: {
    marginBottom: 15,
    backgroundColor: '#ffffff',
    width: '80%', 
    alignSelf: 'center',
    padding: 12,
    borderRadius: 8,
    borderColor: '#00796b',
    borderWidth: 1,
  },
  button: {
    marginTop: 20,
    width: '80%', 
    alignSelf: 'center',
    backgroundColor: '#66bb6a',
    borderRadius: 8,
  },
  header: {
    backgroundColor: '#004d40',
  },
  title: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  section: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
    color: '#004d40',
  },
  photoContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  photo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#b2dfdb',
    borderColor: '#004d40',
    borderWidth: 2,
  },
});
