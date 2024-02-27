import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text,Image, StatusBar, TouchableWithoutFeedback } from 'react-native';
const DATA = [
  {id: '1',title: 'JS',},
  {id: '2',title: 'ES-6',},
  {id: '3',title: 'React',},
  {id: '4',title: 'R N',},
  {id: '5',title: 'Redux',},
 ];

const TutorialItem = ({ title ,navigation}) => (
 <View style={{flexDirection:'row' }}>
  <TouchableWithoutFeedback onPress={()=>navigation.navigate('TutorialScreen',{name:title=='JS'?'JavaScript':title=='R N'?'React Native':title})} >
    <View style={styles.item}>
      <View style={{alignItems:'center'}}>
        <Image
          style={{width:60,height:60,borderRadius:35} }
          source={{uri:'https://image.freepik.com/free-vector/flat-design-cms-concept-illustrated_23-2148796510.jpg'}}
          resizeMode={"cover"}
        />
      </View>
      <Text style={styles.title}>{title}</Text>
    </View>
  </TouchableWithoutFeedback>
  <TouchableWithoutFeedback onPress={()=>navigation.navigate('ProgramListScreen',{name:title=='JS'?'JavaScript':title=='R N'?'React Native':title})} >
    <View style={styles.item}>
      <View style={{alignItems:'center'}}>
        <Image
          style={{width:60,height:60,borderRadius:35} }
          source={{uri:'https://image.freepik.com/free-vector/flat-design-cms-concept-illustrated_23-2148796510.jpg'}}
          resizeMode={"cover"}
        />
      </View>
      <Text style={styles.title}>{title+' Program'}</Text>
    </View>
  </TouchableWithoutFeedback>
 </View>

);
const Home = ({navigation}) => {
  const renderTutorialItem = ({ item }) => (
    <TutorialItem title={item.title} navigation={navigation} />
  );
   
  const renderHeader =({})=>(
    <View style={{marginVertical:20}}>
      <View style={{alignItems:'center'}}>
        <Image
          style={{width:150,height:150,borderRadius:75,} }
          source={{uri:'https://image.freepik.com/free-vector/programming-concept-illustration_114360-1351.jpg'}}
          resizeMode={"cover"}
        />
      </View>
      <View style={{paddingHorizontal:20,marginVertical:10,alignItems:'center',alignContent:'center'}}>
        <Text style={{fontSize:20,color:'#26619c'}}>TFT Tutorials</Text>
      </View>
    </View>
  )
  const  renderFotter=({})=>(
    <View style={{flexDirection:'row',marginBottom:80}}>
      <TouchableWithoutFeedback onPress={()=>navigation.navigate('CompilerScreen',{name:'Javascript compiler',link:'https://www.programiz.com/javascript/online-compiler/'})} >
        <View style={styles.itemCompiler}>
          <View style={{alignItems:'center'}}>
            <Image
              style={{width:60,height:60,borderRadius:35} }
              source={{uri:'https://www.freepnglogos.com/uploads/javascript/javascript-wysiwyg-editor-and-reusable-assets-coherent-editor-5.png'}}
              resizeMode={"cover"}
            />
          </View>
          <Text style={styles.title}> Javascript compiler</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
)

  return (
      <FlatList
        data={DATA}
        renderItem={renderTutorialItem}
        ListHeaderComponent={renderHeader}
        keyExtractor={item => item.id}
        ListFooterComponent={renderFotter}
      />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 10,
  },
  item: {
    backgroundColor: '#fff',
    height:120,
    width:"45%",
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 10,
    borderRadius:10,
    alignItems:'center',
    alignContent:'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,  
    elevation: 5,
  },
   itemCompiler: {
    backgroundColor: '#fff',
    height:120,
    width:"95%",
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 10,
    borderRadius:10,
    alignItems:'center',
    alignContent:'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,  
    elevation: 5,
  },
  title: {
    fontSize: 20,
    color:'#26619c'
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75
  },
});

export default Home;