import React, { Children } from 'react';
import { View, Text } from 'react-native';

export default function ViewBox({ children }){

     return (
       <View>
         {children}
       </View>
     );
}

