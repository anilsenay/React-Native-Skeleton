import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import Skeleton from './components/Skeleton'

export default function App() {

  const [isLoaded, setLoaded] = useState(false)

  return (
    <View style={styles.container}>
      <View style={styles.demo}>
        <Skeleton width={200} height={30} loaded={false} backgroundColor="#e1e9ee">
          <Text style={styles.paragraph}> Test </Text>
        </Skeleton>

        <Skeleton width={200} height={30} loaded={isLoaded} style={{margin: 10}}>
          <Text style={styles.paragraph}> Test </Text>
        </Skeleton>

        <Skeleton width={60} height={60} loaded={false} shape="circle">
          <Text style={styles.paragraph}> Test </Text>
        </Skeleton>

        <Skeleton width={60} height={60} loaded={isLoaded} shape="circle" style={{margin: 10}}>
          <Image style={{width: 60, height: 60, borderRadius: 50, margin: 10}}
          source= {{uri: "https://picsum.photos/id/231/60/60"}}/>
        </Skeleton>        
        
        <Skeleton width={60} height={60} loaded={false} shape="circle" duration={5000}>
          <Image style={{width: 60, height: 60, borderRadius: 50, margin: 10}}
          source= {{uri: "https://picsum.photos/id/231/60/60"}}/>
        </Skeleton>
        
      </View>

      <View style={[{ width: 100}]}>
        <Button onPress = {() => {setLoaded(!isLoaded)}} title="Push data"/>
      </View>

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C5CAE9',
    padding: 8,
  },
  demo: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  paragraph: {
    margin: 10,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
