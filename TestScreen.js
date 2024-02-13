import React, { useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';

const TestScreen = () => {
  const [selectedItems, setSelectedItems] = useState([]);

  const data = [
    {
    id: 1,
    name: 'Feel confident'
},
{
    id: 2,
    name: 'Boost energy'
}, {
    id: 3,
    name: 'Build self-esteem'
}, {
    id: 4,
    name: 'Reduce stress & anxiety'
},
];

  const toggleItemSelection = (item) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter(selectedItem => selectedItem !== item));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => toggleItemSelection(item.name)}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text>{item.name}</Text>
        <Text>{selectedItems.includes(item.name) ? ' - Selected' : ''}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}    />
  );
};

export default TestScreen;
