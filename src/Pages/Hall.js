import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'

export default props => {

  return (
    <View style={styles.container}>
      <View style={styles.fisthbox}>
      <Text style={styles.title}>Biblioteca JC</Text>

      </View>

      <View style={styles.imgbox}>
        <TouchableOpacity style={styles.menuBox} onPress={() => { props.navigation.navigate('Listalivro')}}>
          <Image
            style={styles.icon}
            source={require( '../assets/reading.png' )}
          />
          <Text style={styles.info}>Livros</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuBox} onPress={() => { props.navigation.navigate('Filmes')}}>
          <Image
            style={styles.icon}
            source={require('../assets/play.png' )}
          />
          <Text style={styles.info}>Videos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuBox} onPress={() => { props.navigation.navigate('Fotos')}}>
          <Image
            style={styles.icon}
            source={require('../assets/camera.png' )}
          />
          <Text style={styles.info}>Fotos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuBox} onPress={() => { props.navigation.navigate('#')}}>
          <Image
            style={styles.icon}
            source={require('../assets/music.png' )}
          />
          <Text style={styles.info}>Music</Text>
        </TouchableOpacity>
        </View>
    </View>  
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#ffff',
    
  },
  fisthbox:{
    flex:1,
    backgroundColor: '#0000ff',
    alignItems:'center'
  },

  imgbox:{
    flex: 2,
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%',
  },
  menuBox: {
    backgroundColor: '#DCDCDC',
    width: 130,
    height: 130,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 12,
    paddingTop: 40,
    flexDirection: 'column',
    flexWrap: 'wrap',
    alignContent: 'center',
  },
  icon: {
    width: 30,
    height: 30,
  },
  info: {
    fontSize: 22,
    color: '#696969',
  },
  title:{
    fontSize: 20,
    color: '#ffff',
    fontWeight: 'bold',
    marginTop: 40,
    marginBottom: 12,
    alignContent:'center',
  },
})

