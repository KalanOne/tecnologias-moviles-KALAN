import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Dimensions, TextInput } from 'react-native';
import Login from './src/screens/Login';
import CustomPerson from './src/components/Common/CustomPerson';

export default function App() {
  const DATA = [
    { id: '1', name: 'Sarah Catherine', lastName: 'Hook' },
    { id: '2', name: 'Isabelle', lastName: 'Furhman' },
    { id: '3', name: 'Jennifer', lastName: 'Lawrence' },
  ];

  return (
    <View style={styles.container}>
      {/* <Login /> */}
      <FlatList
        data={DATA}
        renderItem={({ item: { name, lastName }, index }) => (
          // <View
          //   style={{
          //     backgroundColor: index % 2 === 0 ? '#fff' : 'blue',
          //     width: Dimensions.get('window').width,
          //     height: 100,
          //     justifyContent: 'center',
          //     alignItems: 'center'
          //   }}
          // >
          //   <Text>{item.title}</Text>
          //   <TextInput
          //     style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          //     // onChangeText={text => onChangeText(text)}
          //     value={item.title}
          //   />
          // </View>
          <CustomPerson
            name={name}
            lastName={lastName}
            index={index}
          />
        )}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={<Text style={{width:'100%', textAlign: 'center'}}>-----------------</Text>}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
