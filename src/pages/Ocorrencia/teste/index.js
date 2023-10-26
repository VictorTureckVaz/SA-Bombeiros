import React, { useState } from 'react';
import { View, Button, ScrollView } from 'react-native';
import ViewBox from './ViewBox';
import { useNavigation } from '@react-navigation/native';

export default function MainTeste(){

     const navigation = useNavigation();
     const [views, setViews] = useState([]);

     const addView = () => {
     const newView = (
          <ViewBox key={views.length} text={`View ${views.length + 1}`} />
     );
     setViews([...views, newView]);
     }

  return (
    <View>
      <Button title="Add View" onPress={addView} />
      <ScrollView>
        {views.map((view, index) => (
          <ViewBox key={index} text={`View ${index + 1}`} />
        ))}
      </ScrollView>
    </View>
  );
}
