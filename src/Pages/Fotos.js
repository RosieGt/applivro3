import { View, Text, Image, StyleSheet, FlatList } from 'react-native';

const PostList = () => {
  const data = [
    {
      id: '1',
      image:  'https://img.freepik.com/fotos-gratis/close-vertical-de-um-lindo-gato-europeu-de-pelo-curto_181624-34587.jpg?w=740&t=st=1698435725~exp=1698436325~hmac=c7217015aef95a99d48011fe2f76e60c0c59165e3ae6c4393be6ade33c55bb31',
      title: 'Cute Cat',
      subtitle: 'Feline friend'
    },
    {
      id: '2',
      image: 'https://img.freepik.com/fotos-gratis/kitty-com-parede-monocromatica-atras-dela_23-2148955134.jpg?w=740&t=st=1698436238~exp=1698436838~hmac=0460f811fcf5c11b4eca896da996bf67009d1798779ec383663d25aa92def15f',
      title: 'Majestic Cat',
      subtitle: 'Feline friend'
    },
    {
      id: '3',
      image: 'https://img.freepik.com/fotos-gratis/close-de-um-gato-ruivo-abracando-e-lambendo-o-outro-isolado-em-uma-parede-branca_181624-32893.jpg?w=1380&t=st=1698436345~exp=1698436945~hmac=964b663787d0f7210cafbddecf09f6bb9bfcf4da788f5945c96f91a45ee9ee4c',
      title: 'Gatos Ruivos',
      subtitle: 'Feline friend'
    },
    {
      id: '4',
      image: 'https://img.freepik.com/fotos-gratis/colagem-de-animal-de-estimacao-bonito-isolada_23-2150007409.jpg?w=826&t=st=1698436432~exp=1698437032~hmac=eee2aceb062fd0e943c6da6d132cecf68ead192339a6bbfe872965860e86c543',
      title: 'Beautiful Cat',
      subtitle: 'Paradise'
    },
    {
      id: '5',
      image: 'https://as1.ftcdn.net/v2/jpg/06/21/88/34/1000_F_621883464_mZCmCAqaBgcV3bLwoaKx3eyrB4gjJ02M.jpg',
      title: 'Crazy Cat',
      subtitle: 'Rock on!'
    },
  ];


  const renderItem = ({ item, index }) => {
    return (
      <View style={styles.itemContainer}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.subtitle}>{item.subtitle}</Text>
        </View>
      </View>
    );
  };

  return (
    <FlatList
      data={data}
      contentContainerStyle={styles.container}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      numColumns={2}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#fff'
  },
  itemContainer: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:  'column' 
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  textContainer: {
    padding: 16,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  subtitle: {
    fontSize: 14,
    color: 'gray',
  },
});

export default PostList;